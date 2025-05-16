import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

// 单个答案的类型定义
type AnswerValue = string | string[] | boolean | number | object;

// 单个题目的答案
export type QuestionAnswer = {
  questionId: number; // 题目 ID
  answer: AnswerValue; // 用户填写的答案
  question_type: string; // 题目类型
};

// 元数据类型
export type AnswerMetadata = {
  submitTime?: Date; // 提交时间
  ip?: string; // 提交者 IP
  userAgent?: string; // 浏览器信息
  userId?: number; // 用户ID（如果已登录）
  deviceInfo?: string; // 设备信息
  completionTime?: number; // 完成时间（秒）
};

// 问卷答案数据结构
@Schema({ collection: 'questionnaire_answers', timestamps: true })
export class QuestionnaireAnswer extends Document {
  @Prop({
    required: true,
    index: true,
  })
  questionnaire_id: number; // 问卷ID

  @Prop({
    type: [
      {
        questionId: { type: Number, required: true },
        value: { type: mongoose.Schema.Types.Mixed, required: true },
        questionType: { type: String, required: true },
        isIncomplete: { type: Boolean },
      },
    ],
    required: true,
  })
  answers: Array<QuestionAnswer>; // 答案数组

  @Prop({ type: Object })
  metadata: AnswerMetadata; // 元数据
}

export const QuestionnaireAnswerSchema =
  SchemaFactory.createForClass(QuestionnaireAnswer);

// 创建复合索引
QuestionnaireAnswerSchema.index({
  questionnaire_id: 1,
  'metadata.submitTime': -1,
});
