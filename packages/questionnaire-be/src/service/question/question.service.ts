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

  async findOne(id: number) {
    try {
      const openai = new OpenAI({
        // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
        apiKey: 'sk-746e24bbb3d14fc7bced0a4d35453a41',
        baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
      });
      const completion = await openai.chat.completions.create({
        model: 'qwen-plus', //模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: '你是谁？' },
        ],
      });
      console.log(completion.choices[0].message.content);
    } catch (error) {
      console.log(`错误信息：${error}`);
      console.log(
        '请参考文档：https://help.aliyun.com/zh/model-studio/developer-reference/error-code',
      );
    }
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
