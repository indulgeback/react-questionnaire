import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';
class CreateQuestionDto {
  @IsInt()
  @Type(() => Number)
  author_id: number;

  @IsString()
  @Type(() => String)
  author: string;
}

export default CreateQuestionDto;
