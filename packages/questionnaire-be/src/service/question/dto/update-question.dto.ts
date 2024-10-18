import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from '@/service/question/dto/create-question.dto';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
