import { IsInt, IsOptional, IsString, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum QuestionType {
  ALL = 'all',
  PERSONAL = 'personal',
  FAVORATE = 'favorate',
}

class FindAllQuestionDto {
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  page: number = 1;

  @IsInt()
  @Type(() => Number)
  @IsOptional()
  limit: number = 20;

  @IsString()
  @IsOptional()
  search: string = '';

  @IsEnum(QuestionType)
  @IsOptional()
  type: QuestionType = QuestionType.ALL;
}

export default FindAllQuestionDto;
