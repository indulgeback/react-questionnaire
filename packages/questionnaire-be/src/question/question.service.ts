import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}
  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  async findAll(page, limit) {
    const questionList = await this.questionRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      code: 1,
      data: {
        list: questionList,
      },
      message: 'success',
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
