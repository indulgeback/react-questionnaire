import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { Observable } from 'rxjs';
import configuration from '@/config';
import { AnswerService } from '@/service/answer/answer.service';
import { EditorService } from '@/service/editor/editor.service';

enum Model {
  QwenMax = 'qwen-max',
  QwenPlus = 'qwen-plus',
  DeepseekV3 = 'deepseek-v3',
}

@Injectable()
export class AiService {
  // OpenAI 客户端实例
  private readonly openai: OpenAI;
  private readonly model: Model;
  constructor(
    private readonly answerService: AnswerService,
    private readonly editorService: EditorService,
  ) {
    this.model = Model.QwenMax;
    // 初始化 OpenAI 客户端，配置 baseURL 和 apiKey
    this.openai = new OpenAI({
      baseURL: configuration().openai[this.model].baseURL,
      apiKey: configuration().openai[this.model].apiKey,
    });
  }

  // 生成问卷的方法，接收主题参数，返回 Observable<MessageEvent>
  async generate(
    theme: string,
    count: number,
  ): Promise<Observable<MessageEvent>> {
    return new Observable((subscriber) => {
      // 构建提示词，要求生成特定格式的问卷 JSON
      const description = `生成一份关于${theme}的问卷，要求如下：
1. 问卷需包含${count}个问题，每个问题都要与${theme}主题相关
2. 输出格式为JSON，结构如下：
{
  "survey": {
    "title": "问卷标题",
    "description": "问卷目的说明",
    "questions": [
      {
        "fe_id": "数字字符串，确保唯一",
        "type": "问题类型，必须是以下之一：
          - questionTitle（分段标题）
          - questionShortAnswer（简答题）
          - questionParagraph（段落题）
          - questionRadio（单选题）
          - questionCheckbox（多选题）
          - questionDropdown（下拉选择题）
          - questionRating（评分题）
          - questionNPS（NPS评分题）
          - questionMatrixRadio（矩阵单选题）
          - questionMatrixCheckbox（矩阵多选题）
          - questionSlider（滑块题）
          - questionDate（日期选择题）",
        "title": "问题标题",
        "props": {
          // 根据不同类型设置不同属性
          // 单选、多选、下拉题：options: string[]
          // 评分题：count: number
          // NPS题：min: number, max: number
          // 矩阵题：rows: string[], columns: string[]
          // 滑块题：min: number, max: number, step: number
          // 日期题：format: "YYYY-MM-DD"
        }
      }
    ]
  }
}

3. 问题类型分配建议：
- 使用questionTitle作为分段标题，合理分隔不同类型的问题
- 包含2-3个简答或段落题
- 包含4-5个单选或多选题
- 包含1-2个评分或NPS题
- 包含1-2个矩阵题
- 其他类型根据主题合理分配

4. 确保生成的JSON格式正确，每个问题的props属性符合对应类型的要求。`;

      // 用于累积流式响应内容
      let accumulatedContent = '';
      // 用于取消请求的控制器
      const abortController = new AbortController();

      // 调用 OpenAI API 创建聊天完成
      this.openai.chat.completions
        .create(
          {
            messages: [{ role: 'system', content: description }],
            model: configuration().openai[this.model].model,
            stream: true, // 启用流式响应
          },
          {
            signal: abortController.signal,
          },
        )
        .then(async (stream) => {
          try {
            // 处理流式响应的每个数据块
            for await (const chunk of stream) {
              const content = chunk.choices[0].delta.content || '';
              accumulatedContent += content;
              // 向订阅者发送累积的内容
              subscriber.next({ data: accumulatedContent } as MessageEvent);
              if (subscriber.closed) {
                abortController.abort();
              }
            }
            // 发送完成标记
            subscriber.next({ data: '{[DONE]}' } as MessageEvent);
          } catch (error) {
            subscriber.error(error);
          }
        })
        .catch((error) => {
          console.error('Error generating questionnaire:', error);
          subscriber.error(new Error('生成问卷时出错，请稍后重试。'));
        });

      // 清理函数，在取消订阅时调用
      return () => {
        abortController.abort();
        subscriber.complete();
      };
    });
  }

  async analysis(questionnaire_id: number): Promise<Observable<MessageEvent>> {
    // 获取问卷的统计数据
    const statsData =
      await this.answerService.getAnswersByQuestionId(questionnaire_id);

    // 获取问卷的详细信息
    const questionnaireDetail = await this.editorService.getQuestionnaireDetail(
      questionnaire_id.toString(),
    );

    return new Observable((subscriber) => {
      // 将统计数据格式化为分析友好的格式
      const formattedStats =
        statsData && statsData.length > 0
          ? JSON.stringify(statsData)
          : '暂无问卷统计数据';

      const formattedQuestions =
        questionnaireDetail && questionnaireDetail.components
          ? JSON.stringify(questionnaireDetail.components)
          : '暂无问题数据';

      // 构建简化版提示词
      const prompt = `
你是一位数据分析专家，请对以下问卷数据进行简要分析：

问卷标题: ${questionnaireDetail?.title || '未知标题'}
问卷描述: ${questionnaireDetail?.description || '无描述'}

数据: ${formattedStats}
问题: ${formattedQuestions}

请提供简洁的分析，包括：
1. 总体概况：回答人数、完成情况
2. 选择题分析：热门选项及比例
3. 评分题分析：平均分和中位数
4. 文本题分析：主要关键词
5. 最重要的2-3个发现
6. 1-2条具体建议

以简单JSON格式返回：
{
  "title": "分析标题",
  "overview": "整体概况简述",
  "key_insights": ["关键发现1", "关键发现2"],
  "question_analyses": [
    {
      "id": "问题ID",
      "title": "问题标题",
      "analysis": "简短分析"
    }
  ],
  "recommendations": ["建议1", "建议2"]
}

请确保分析简明扼要，直接以JSON格式输出，无需额外说明。
`;

      // 用于累积流式响应内容
      let accumulatedContent = '';
      // 用于取消请求的控制器
      const abortController = new AbortController();

      // 调用 OpenAI API 创建聊天完成
      this.openai.chat.completions
        .create(
          {
            messages: [{ role: 'system', content: prompt }],
            model: configuration().openai[this.model].model,
            stream: true, // 启用流式响应
          },
          {
            signal: abortController.signal,
          },
        )
        .then(async (stream) => {
          try {
            // 处理流式响应的每个数据块
            for await (const chunk of stream) {
              const content = chunk.choices[0].delta.content || '';
              accumulatedContent += content;
              // 向订阅者发送累积的内容
              subscriber.next({ data: accumulatedContent } as MessageEvent);
              if (subscriber.closed) {
                abortController.abort();
              }
            }
            // 发送完成标记
            subscriber.next({ data: '{[DONE]}' } as MessageEvent);
          } catch (error) {
            subscriber.error(error);
          }
        })
        .catch((error) => {
          console.error('Error generating analysis:', error);
          subscriber.error(new Error('生成分析报告时出错，请稍后重试。'));
        });

      // 清理函数，在取消订阅时调用
      return () => {
        abortController.abort();
        subscriber.complete();
      };
    });
  }

  async getEnhancedStats(id: number) {
    // 获取问卷统计数据
    const statsData = await this.answerService.getAnswersByQuestionId(id);

    // 获取问卷详情信息
    const questionDetail = await this.editorService.getQuestionnaireDetail(
      id.toString(),
    );

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

      return {
        title: questionDetail.title,
        description: questionDetail.description,
        stats: enhancedStats,
      };
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
