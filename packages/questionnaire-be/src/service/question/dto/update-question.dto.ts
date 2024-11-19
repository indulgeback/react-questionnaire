import { PartialType } from '@nestjs/mapped-types';
import CreateQuestionDto from '@/service/question/dto/create-question.dto';

class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}

export default UpdateQuestionDto;
