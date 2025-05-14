import { QuestionComponent } from '@/common/schemas/question-detail.schema';
import { IsNotEmpty, IsNumber, Min, IsArray, IsString } from 'class-validator';

export class SaveDto {
  @IsNotEmpty()
  @IsNumber()
  questionnaire_id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  components: QuestionComponent[];

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  version: number;

  @IsNotEmpty()
  @IsString()
  footer_text: string;
}
