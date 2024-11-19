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
} from '@nestjs/common';
import { QuestionService } from '@/service/question/question.service';
import CreateQuestionDto from '@/service/question/dto/create-question.dto';
import UpdateQuestionDto from '@/service/question/dto/update-question.dto';
import { JwtAuthGuard } from '@/guard/jwt-auth.guard';
import { Public } from '@/common/decorators/public.decorator';
import { ResponseBody } from '@/common/classes/response-body';
import { Logger } from '@/common/utils/log4js';
import FindAllQuestionDto from './dto/find-all-question.dto';

@UseGuards(JwtAuthGuard)
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Public()
  @Get()
  async findAll(@Query() params: FindAllQuestionDto) {
    try {
      const res = await this.questionService.findAll(params);
      return new ResponseBody<any>(1, res, '查询成功');
    } catch (error) {
      Logger.error(error);
      return new ResponseBody<any>(0, null, error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.questionService.remove(+id);
      return new ResponseBody<any>(1, null, '删除成功');
    } catch (error) {
      return new ResponseBody<any>(0, null, error.message);
    }
  }
}
