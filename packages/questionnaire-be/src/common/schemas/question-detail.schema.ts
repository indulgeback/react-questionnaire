import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Question = {
  id: number;
  type: string;
  question: string;
  options?: string[];
};

// 完整问卷详情（包含问题集合）
@Schema({ collection: 'questionnaire_details', timestamps: true })
export class QuestionnaireDetail extends Document {
  @Prop({
    required: true,
    index: true,
  })
  questionnaire_id: number; // 普通外键字段

  @Prop({ required: true })
  title: string; // 问卷标题

  @Prop({ required: true })
  description: string; // 问卷描述

  @Prop({
    type: [
      {
        id: { type: Number, required: true },
        type: { type: String, required: true },
        question: { type: String, required: true },
        options: { type: [String] },
      },
    ],
    required: true,
  })
  questions: Array<Question>;

  @Prop({ default: 1 })
  version: number; // 新文档默认从版本1开始
}

export const QuestionnaireDetailSchema =
  SchemaFactory.createForClass(QuestionnaireDetail);

QuestionnaireDetailSchema.index(
  { questionnaire_id: 1 },
  { unique: true }, // 整个问卷ID唯一
);
