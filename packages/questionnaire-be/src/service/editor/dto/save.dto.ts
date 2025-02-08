import { QuestionnaireDetail } from '@/common/schemas/question-detail.schema';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class SaveDto extends QuestionnaireDetail {
  @IsNotEmpty()
  @IsString()
  questionnaire_id: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  version: number;
}
