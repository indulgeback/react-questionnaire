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
    const data =
      await this.editorService.getQuestionnaireDetail(questionnaireId);
    return new ResponseBody<any>(1, data, '获取成功');
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

  @Post('create')
  async create(@Body() saveDto: SaveDto) {
    try {
      // 新建问卷详情时，忽略版本控制，直接创建
      const model = this.editorService.getModel();
      const doc = new model({
        questionnaire_id: saveDto.questionnaire_id,
        title: saveDto.title,
        description: saveDto.description,
        components: saveDto.components,
        version: 1, // 初始版本为1
      });
      await doc.save();
      return new ResponseBody<null>(1, null, '创建成功');
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
