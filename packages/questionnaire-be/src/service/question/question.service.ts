import { Injectable } from '@nestjs/common';
import CreateQuestionDto from '@/service/question/dto/create-question.dto';
import UpdateQuestionDto from '@/service/question/dto/update-question.dto';
import FindAllQuestionDto from './dto/find-all-question.dto';
import { Question } from '@/service/question/entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import OpenAI from 'openai';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  async findAll({
    page,
    limit,
    search,
    is_star,
    is_deleted,
  }: FindAllQuestionDto) {
    console.log(page, limit, search, is_star, is_deleted);
    const queryBuilder = this.questionRepository.createQueryBuilder('question');
    if (search) {
      queryBuilder.where('question.title LIKE :title', {
        title: `%${search}%`,
      });
    }

    if (is_star !== undefined) {
      queryBuilder.andWhere('question.is_star = :is_star', { is_star });
    }

    if (is_deleted !== undefined) {
      queryBuilder.andWhere('question.is_deleted = :is_deleted', {
        is_deleted,
      });
    }
    const [list, count] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return {
      list,
      count,
    };
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  async remove(id: number) {
    const res = await this.findOne(id);
    if (res) {
      if (!res.is_deleted) {
        return await this.questionRepository.update(id, {
          is_deleted: true,
        });
      } else {
        return await this.questionRepository.delete(id);
      }
    } else {
      throw new Error('该问卷不存在');
    }
  }
  async findOne(id: number) {
    return await this.questionRepository.findOneBy({ id });
  }
}
