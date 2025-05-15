import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// 定义组件属性类型（这里使用any，因为各种组件的属性结构不同）
export type ComponentProps = any;

// 定义问题组件
export type QuestionComponent = {
  fe_id: string;
  type: string;
  title: string;
  props: ComponentProps;
};

// 完整问卷详情（包含问题组件集合）
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
  creator: string; // 问卷创建者

  @Prop({ required: true })
  description: string; // 问卷描述

  @Prop({ required: true })
  footer_text: string; // 问卷底部文本

  @Prop({
    type: [
      {
        fe_id: { type: String, required: true },
        type: { type: String, required: true },
        title: { type: String, required: true },
        props: { type: Object, required: true },
      },
    ],
    required: true,
  })
  components: Array<QuestionComponent>;

  @Prop({ default: 1 })
  version: number; // 新文档默认从版本1开始
}

export const QuestionnaireDetailSchema =
  SchemaFactory.createForClass(QuestionnaireDetail);

QuestionnaireDetailSchema.index(
  { questionnaire_id: 1 },
  { unique: true }, // 整个问卷ID唯一
);
