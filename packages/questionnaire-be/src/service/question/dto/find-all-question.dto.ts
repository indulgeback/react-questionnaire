import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

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

  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsOptional()
  is_star?: boolean;

  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsOptional()
  is_deleted?: boolean;
}

export default FindAllQuestionDto;
