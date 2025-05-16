import { IsNotEmpty, IsString } from 'class-validator';

class UpdateQuestionDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}

export default UpdateQuestionDto;
