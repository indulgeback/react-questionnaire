import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { EditorService } from './editor.service';
import { SaveDto } from './dto/save.dto';
import { ResponseBody } from '@/common/classes/response-body';
@Controller('editor')
export class EditorController {
  constructor(private readonly editorService: EditorService) {}

  @Get('getQuestionnaireDetail')
  async getQuestionnaireDetail(
    @Query('questionnaireId') questionnaireId: string,
  ) {
    return await this.editorService.getQuestionnaireDetail(questionnaireId);
  }

  @Post('save')
  async save(@Body() saveDto: SaveDto) {
    try {
      await this.editorService.save(saveDto);
      return new ResponseBody<null>(1, null, '保存成功');
    } catch (error) {
      return new ResponseBody<null>(0, null, error.message);
    }
  }

  @Get('mock')
  async mock() {
    try {
      await this.editorService.mock();
      return new ResponseBody<null>(1, null, 'mock');
    } catch (error) {
      return new ResponseBody<null>(0, null, error.message);
    }
  }
}
