import { Injectable } from '@nestjs/common';
import CreateQuestionDto from '@/service/question/dto/create-question.dto';
import UpdateQuestionDto from '@/service/question/dto/update-question.dto';
import FindAllQuestionDto, { QuestionType } from './dto/find-all-question.dto';
import Question from '@/service/question/entities/question.entity';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import UserFavorite from '@/service/question/entities/user-favorite.entity';
import User from '@/service/auth/entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionnaireDetail } from '@/common/schemas/question-detail.schema';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(UserFavorite)
    private userFavorateRepository: Repository<UserFavorite>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectDataSource()
    private dataSource: DataSource,
    @InjectModel(QuestionnaireDetail.name)
    private readonly questionnaireDetailModel: Model<QuestionnaireDetail>,
  ) {}

  // 创建问卷
  async create(createQuestionDto: CreateQuestionDto) {
    const question = new Question();
    question.author_id = createQuestionDto.author_id;
    question.author = createQuestionDto.author;

    // 保存问卷基本信息
    const savedQuestion = await this.questionRepository.save(question);

    try {
      // 同时创建问卷详情记录
      const newQuestionnaireDetail = new this.questionnaireDetailModel({
        questionnaire_id: savedQuestion.id.toString(),
        title: '未命名问卷',
        description: '',
        footer_text: '',
        components: [],
        version: 1,
        creator: createQuestionDto.author || '未知',
      });

      await newQuestionnaireDetail.save();
    } catch (error) {
      console.error('创建问卷详情失败:', error);
      // 即使创建详情失败，也返回问卷基本信息
    }

    return savedQuestion;
  }

  // 分页查询问卷列表
  async findAll(
    { page, limit, search, type }: FindAllQuestionDto,
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

    console.log(type);

    // 如果 type 为 FAVORATE，则只返回已收藏的问卷, 如果 type 为 PERSONAL，则只返回当前用户的问卷
    if (type === QuestionType.FAVORATE) {
      if (favoriteIds.length === 0) {
        return {
          list: [],
          count: 0,
        };
      }
      queryBuilder.andWhere('question.id IN (:...favoriteIds)', {
        favoriteIds,
      });
    } else if (type === QuestionType.PERSONAL) {
      queryBuilder.andWhere('question.author_id = :userId', {
        userId: user_id,
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
      this.questionRepository.findOneBy({ id: question_id }),
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
    const res = await this.questionRepository.findOneBy({ id: question_id });
    if (res) {
      return await this.userFavorateRepository.delete({
        user_id,
        question_id,
      });
    } else {
      throw new Error('该问卷不存在');
    }
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const question = await this.questionRepository.findOneBy({ id });
    if (!question) {
      throw new Error('该问卷不存在');
    }

    const updateData = {
      ...question,
      ...updateQuestionDto,
      update_time: new Date(),
    };

    return await this.questionRepository.update(id, updateData);
  }

  // 删除问卷
  async remove(id: number, user_id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const res = await this.questionRepository.findOneBy({ id });
      if (!res) {
        throw new Error('该问卷不存在');
      }

      if (res.author_id !== user_id) {
        throw new Error('非作者无权限删除问卷');
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

  async findOne(id: number, user_id: number) {
    // 获取当前用户的已收藏问卷
    const userFavorites = await this.userFavorateRepository.find({
      where: { user_id },
      select: ['question_id'],
    });
    const is_favorated = userFavorites.find((item) => item.question_id === id);
    const question = await this.questionRepository.findOneBy({ id });
    return {
      ...question,
      is_favorated: !!is_favorated,
    };
  }

  async publish(id: number) {
    return await this.questionRepository.update(id, {
      is_published: true,
    });
  }

  async unPublish(id: number) {
    return await this.questionRepository.update(id, {
      is_published: false,
    });
  }

  async incrementAnswerCount(questionnaireId: number): Promise<void> {
    await this.questionRepository.increment(
      { id: questionnaireId },
      'answer_count',
      1,
    );
  }
}
