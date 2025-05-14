import { IsNotEmpty, IsString } from 'class-validator';

class UpdateQuestionDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  footer_text: string;
}

export default UpdateQuestionDto;
