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
  Req,
} from '@nestjs/common';
import { QuestionService } from '@/service/question/question.service';
import { CreateQuestionDto } from '@/service/question/dto/create-question.dto';
import { UpdateQuestionDto } from '@/service/question/dto/update-question.dto';
import { JwtAuthGuard } from '@/guard/jwt-auth.guard';
import { Public } from '@/common/decorators/public.decorator';
import { ResponseBody } from '@/common/classes/response-body';
import { Logger } from '@/common/utils/log4js';

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
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 20,
    @Query('search') search: string = '',
  ) {
    try {
      const res = await this.questionService.findAll(page, limit, search);
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
