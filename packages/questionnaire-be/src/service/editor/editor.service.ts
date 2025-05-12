import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionnaireDetail } from '@/common/schemas/question-detail.schema';
import { SaveDto } from './dto/save.dto';
@Injectable()
export class EditorService {
  constructor(
    @InjectModel(QuestionnaireDetail.name)
    private readonly questionnaireDetailModel: Model<QuestionnaireDetail>,
  ) {}

  async getQuestionnaireDetail(questionnaireId: string) {
    return await this.questionnaireDetailModel.findOne({
      questionnaire_id: questionnaireId,
    });
  }

  async save(saveDto: SaveDto) {
    // 首先检查问卷是否存在
    const existingQuestionnaire = await this.questionnaireDetailModel.findOne({
      questionnaire_id: saveDto.questionnaire_id,
    });

    // 如果问卷不存在，则创建新问卷
    if (!existingQuestionnaire) {
      const newQuestionnaire = new this.questionnaireDetailModel({
        ...saveDto,
        version: 1, // 新问卷版本从1开始
      });
      return await newQuestionnaire.save();
    }

    // 如果问卷存在，保持原有乐观锁逻辑
    const result = await this.questionnaireDetailModel.findOneAndUpdate(
      {
        questionnaire_id: saveDto.questionnaire_id,
        version: saveDto.version,
      },
      {
        $set: {
          ...saveDto,
          version: saveDto.version + 1,
        },
      },
      { new: true, upsert: false },
    );
    if (!result) {
      throw new Error('数据版本已过期，请刷新后重试');
    }
    return result;
  }

  // 获取问卷详情模型，用于创建新实例
  getModel(): Model<QuestionnaireDetail> {
    return this.questionnaireDetailModel;
  }

  async mock() {
    const mockDocuments = [];
    const numberOfDocuments = 10; // 要插入的文档数量

    // 生成模拟文档
    for (let i = 1; i <= numberOfDocuments; i++) {
      const mockDocument = this.generateMockQuestionnaireDetail(i);
      mockDocuments.push(mockDocument);
    }

    try {
      // 插入模拟文档
      await this.questionnaireDetailModel.insertMany(mockDocuments);
      console.log(`${numberOfDocuments} 条模拟文档插入成功`);

      // 插入完成后可以选择返回所有文档
      return this.questionnaireDetailModel.find();
    } catch (error) {
      console.error('插入模拟文档时出错:', error);
      throw error;
    }
  }

  generateMockQuestionnaireDetail(id: number): any {
    return {
      questionnaire_id: id,
      title: `测试问卷 ${id}`,
      description: `这是测试问卷 ${id} 的描述`,
      components: [
        {
          fe_id: '1',
          type: 'questionTitle',
          title: '分段标题',
          props: {
            title: `测试问卷 ${id}`,
            level: 1,
            isCenter: true,
            fontSize: 20,
          },
        },
        {
          fe_id: '2',
          type: 'questionRadio',
          title: '单选题',
          props: {
            title: '你最喜欢的颜色是？',
            options: ['红色', '蓝色', '绿色', '黄色'],
            column: false,
          },
        },
        {
          fe_id: '3',
          type: 'questionCheckbox',
          title: '多选题',
          props: {
            title: '你喜欢的水果有哪些？',
            options: ['苹果', '香蕉', '橙子', '葡萄'],
            column: false,
          },
        },
        {
          fe_id: '4',
          type: 'questionShortAnswer',
          title: '简答题',
          props: {
            title: '请简要描述你的爱好。',
            type: 'textarea',
            placeholder: '请输入答案',
            maxLength: 200,
            rows: 4,
          },
        },
        {
          fe_id: '5',
          type: 'questionRating',
          title: '评分题',
          props: {
            title: '请对我们的服务进行评分',
            count: 5,
            allowHalf: false,
            character: 'star',
          },
        },
      ],
      version: 1,
    };
  }
}
