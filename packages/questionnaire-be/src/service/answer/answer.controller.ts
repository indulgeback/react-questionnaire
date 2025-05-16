import { Controller, Get, Param } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { ProcessedAnswerData } from './answer.service';
import { ResponseBody } from '@/common/classes/response-body';
import { EditorService } from '../editor/editor.service';

@Controller('answer')
export class AnswerController {
  constructor(
    private readonly answerService: AnswerService,
    private readonly editorService: EditorService,
  ) {}

  // 根据问卷ID获取统计数据（集成问卷题目详情）
  @Get(':id')
  async getQuestionStats(
    @Param('id') id: string,
  ): Promise<ResponseBody<ProcessedAnswerData[]>> {
    try {
      // 获取问卷统计数据
      const statsData = await this.answerService.getAnswersByQuestionId(
        Number(id),
      );

      // 获取问卷详情信息
      const questionDetail =
        await this.editorService.getQuestionnaireDetail(id);

      // 如果有问卷详情，为统计数据添加题目标题和其他信息
      if (questionDetail && questionDetail.components) {
        const enhancedStats = statsData.map((statItem) => {
          // 找到对应的题目组件
          const component = questionDetail.components.find(
            (comp) => String(comp.fe_id) === String(statItem.questionId),
          );

          // 如果找到对应组件，添加题目标题和其他信息
          if (component && component.props) {
            return {
              ...statItem,
              question: component.props.title || `问题${statItem.questionId}`,
              componentInfo: {
                title: component.title,
                type: component.type,
                props: component.props,
                options: this.extractOptionsFromComponent(component),
              },
            };
          }

          return statItem;
        });

        return new ResponseBody(1, enhancedStats, '获取统计数据成功');
      }

      // 如果没有问卷详情，返回原始统计数据
      return new ResponseBody(1, statsData, '获取统计数据成功');
    } catch (error) {
      console.error('获取问卷统计数据出错:', error);
      return new ResponseBody(0, null, `获取统计数据失败: ${error.message}`);
    }
  }

  // 辅助方法：根据组件类型提取选项信息
  private extractOptionsFromComponent(component: any): any {
    if (!component || !component.props) return null;

    // 从单选、多选和下拉选择题中提取选项
    if (
      ['questionRadio', 'questionCheckbox', 'questionDropdown'].includes(
        component.type,
      ) &&
      Array.isArray(component.props.options)
    ) {
      // 将字符串选项转换为包含文本和值的对象
      return component.props.options.map((opt) => ({
        text: opt,
        value: opt,
      }));
    }

    // 从评分题和NPS题中提取分数范围
    if (
      ['questionRating', 'questionNPS'].includes(component.type) &&
      component.props.count
    ) {
      const count = parseInt(component.props.count) || 5;
      return Array.from({ length: count }, (_, i) => ({
        text: String(i + 1),
        value: String(i + 1),
      }));
    }

    // 提取矩阵题的行和列信息
    if (
      ['questionMatrixRadio', 'questionMatrixCheckbox'].includes(component.type)
    ) {
      // 确保存在行和列属性
      const rows = component.props.rows || [];
      const columns = component.props.columns || [];

      console.log(
        `矩阵题组件解析 - 行数: ${rows.length}, 列数: ${columns.length}`,
      );
      console.log('矩阵题行:', rows);
      console.log('矩阵题列:', columns);

      // 始终返回行列信息，即使为空
      return {
        rows,
        columns,
      };
    }

    return null;
  }
}
