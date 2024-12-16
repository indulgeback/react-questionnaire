import { Injectable } from '@nestjs/common';
import CreateQuestionDto from '@/service/question/dto/create-question.dto';
import UpdateQuestionDto from '@/service/question/dto/update-question.dto';
import FindAllQuestionDto from './dto/find-all-question.dto';
import Question from '@/common/entities/question.entity';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import UserFavorite from '@/common/entities/user-favorite.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(UserFavorite)
    private userFavorateRepository: Repository<UserFavorite>,
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  // 分页查询问卷列表
  async findAll(
    { page, limit, search, is_favorated }: FindAllQuestionDto,
    user_id: number,
  ) {
    const queryBuilder = this.questionRepository.createQueryBuilder('question');
    if (search) {
      queryBuilder.where('question.title LIKE :title', {
        title: `%${search}%`,
      });
    }

    // 获取当前用户的已收藏问卷
    const userFavorites = await this.userFavorateRepository.find({
      where: { user_id },
      select: ['question_id'],
    });

    // 映射用户收藏问卷的 ID 数组
    const favoriteIds = userFavorites.map((fav) => fav.question_id);

    // 如果 is_favorated 为 true，则只返回已收藏的问卷
    if (is_favorated) {
      queryBuilder.andWhere('question.id IN (:...favoriteIds)', {
        favoriteIds,
      });
    }

    const [list, count] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    // 添加 is_favorated 字段，便于前端用来展示该问卷当前用户是否已收藏
    const resultList = list.map((q) => {
      return {
        ...q,
        is_favorated: favoriteIds.includes(q.id),
      };
    });

    return {
      list: resultList,
      count,
    };
  }

  // 收藏问卷
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

  // 检查问卷是否存在，用户是否已收藏
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

  // 添加收藏
  private async addFavorate(
    user_id: number,
    question_id: number,
  ): Promise<any> {
    return this.userFavorateRepository.save({
      user_id,
      question_id,
    });
  }

  // 取消收藏
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

  // 删除问卷
  async remove(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const res = await this.findOne(id);
      if (!res) {
        throw new Error('该问卷不存在');
      }

      // 先删除所有与该问卷相关的收藏记录
      await queryRunner.manager.delete(UserFavorite, { question_id: id });

      // 然后删除问卷
      await queryRunner.manager.delete(Question, id);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async findOne(id: number) {
    return await this.questionRepository.findOneBy({ id });
  }
}
