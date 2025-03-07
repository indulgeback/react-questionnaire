import { QuestionnaireDetail } from '@/common/schemas/question-detail.schema';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class SaveDto extends QuestionnaireDetail {
  @IsNotEmpty()
  @IsNumber()
  questionnaire_id: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  version: number;
}
