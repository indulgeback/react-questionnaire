import { Injectable } from '@nestjs/common';
import CreateQuestionDto from '@/service/question/dto/create-question.dto';
import UpdateQuestionDto from '@/service/question/dto/update-question.dto';
import FindAllQuestionDto from './dto/find-all-question.dto';
import Question from '@/entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserFavorite from '@/entities/user-favorite.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(UserFavorite)
    private userFavorateRepository: Repository<UserFavorite>,
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

  async favorate(user_id: number, question_id: number) {
    try {
      const [question, favorateQuestion] = await this.checkQuestionAndFavorate(
        user_id,
        question_id,
      );

      if (!question) {
        throw new Error('该问卷不存在');
      }

      if (favorateQuestion) {
        throw new Error('已收藏');
      }

      return await this.addFavorate(user_id, question_id);
    } catch (error) {
      throw error; // 重新抛出错误，以便调用者可以处理
    }
  }

  private async checkQuestionAndFavorate(
    user_id: number,
    question_id: number,
  ): Promise<[any, any]> {
    return Promise.all([
      this.findOne(question_id),
      this.userFavorateRepository.findOne({
        where: {
          user_id,
          question_id,
        },
      }),
    ]);
  }

  private async addFavorate(
    user_id: number,
    question_id: number,
  ): Promise<any> {
    return this.userFavorateRepository.save({
      user_id,
      question_id,
    });
  }

  async unFavorate(user_id: number, question_id: number) {
    const res = await this.findOne(question_id);
    if (res) {
      return await this.userFavorateRepository.delete({
        user_id,
        question_id,
      });
    } else {
      throw new Error('该问卷不存在');
    }
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  async remove(id: number) {
    const res = await this.findOne(id);
    if (res) {
      return await this.questionRepository.delete(id);
    } else {
      throw new Error('该问卷不存在');
    }
  }
  async findOne(id: number) {
    return await this.questionRepository.findOneBy({ id });
  }
}
