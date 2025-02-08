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
      throw new ConflictException('数据版本已过期，请刷新后重试');
    }
    return result;
  }
}
