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
    // 保持原有乐观锁逻辑
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

  async mock() {
    const mockDocuments = [];
    const numberOfDocuments = 1000; // 要插入的文档数量

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
      questions: [
        {
          id: 1,
          type: 'base_info',
          question: '你今天过得好吗？',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: '你喜欢的水果有哪些？',
          options: ['苹果', '香蕉', '橙子', '葡萄'],
        },
        {
          id: 3,
          type: 'single_choice',
          question: '你最喜欢的颜色是？',
          options: ['红色', '蓝色', '绿色', '黄色'],
        },
        {
          id: 4,
          type: 'true_false',
          question: '你是否喜欢阅读？',
        },
        {
          id: 5,
          type: 'short_answer',
          question: '请简要描述你的爱好。',
        },
      ],
      version: 1,
    };
  }
}
