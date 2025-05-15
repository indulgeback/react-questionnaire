import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseIntPipe,
  Headers,
  ForbiddenException,
} from '@nestjs/common';
import { QuestionService } from '@/service/question/question.service';
import UpdateQuestionDto from '@/service/question/dto/update-question.dto';
import FindAllQuestionDto from '@/service/question/dto/find-all-question.dto';
import { JwtAuthGuard } from '@/guard/jwt-auth.guard';
import { ResponseBody } from '@/common/classes/response-body';
import { Logger } from '@/common/utils/log4js';
import {
  currentUser,
  UserToken,
} from '@/common/decorators/current-user.decorator';
import CreateQuestionDto from './dto/create-question.dto';
import { Public } from '@/common/decorators/public.decorator';
import config from '@/config';

@UseGuards(JwtAuthGuard)
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // 新建问卷
  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      const data = await this.questionService.create(createQuestionDto);
      return new ResponseBody<any>(1, data, '创建成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  // 获取问卷列表
  @Get()
  async findAll(
    @Query() query: FindAllQuestionDto,
    @currentUser() user: UserToken,
  ) {
    try {
      const { userId } = user;
      const res = await this.questionService.findAll(query, userId);
      return new ResponseBody<any>(1, res, '查询成功');
    } catch (error) {
      Logger.error(error);
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  // 获取单个问卷
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @currentUser() user: UserToken,
  ) {
    const { userId } = user;
    const res = await this.questionService.findOne(id, userId);
    return new ResponseBody<any>(1, res, '查询成功');
  }

  // 修改单个问卷
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    try {
      const res = await this.questionService.update(id, updateQuestionDto);
      return new ResponseBody<any>(1, res, '修改成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  // 删除问卷
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @currentUser() user: UserToken,
  ) {
    try {
      const { userId } = user;
      await this.questionService.remove(id, userId);
      return new ResponseBody<any>(1, null, '删除成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  // 收藏问卷
  @Get('favorate/:question_id')
  async favorate(
    @Param('question_id', ParseIntPipe) question_id: number,
    @currentUser() user: UserToken,
  ) {
    try {
      const { userId } = user;
      await this.questionService.favorate(userId, question_id);
      return new ResponseBody<any>(1, null, '收藏成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  // 取消收藏问卷
  @Delete('favorate/:question_id')
  async unFavorate(
    @Param('question_id', ParseIntPipe) question_id: number,
    @currentUser() user: UserToken,
  ) {
    try {
      const { userId } = user;
      await this.questionService.unFavorate(userId, question_id);
      return new ResponseBody<any>(1, null, '取消收藏成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  @Get('publish/:id')
  async publish(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.questionService.publish(id);
      return new ResponseBody<any>(1, null, '发布成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  @Get('unpublish/:id')
  async unPublish(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.questionService.unPublish(id);
      return new ResponseBody<any>(1, null, '取消发布成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  @Public()
  @Patch('increment-answer-count/:id')
  async incrementAnswerCount(
    @Param('id') id: string,
    @Headers('x-internal-secret') secret: string,
  ) {
    if (secret !== config().client.internalApiSecret) {
      throw new ForbiddenException('非法访问');
    }
    await this.questionService.incrementAnswerCount(Number(id));
    return { success: true, message: '答卷数量已增加' };
  }
}
