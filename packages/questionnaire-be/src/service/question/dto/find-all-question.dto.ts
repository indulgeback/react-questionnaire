import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

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
}

export default FindAllQuestionDto;
