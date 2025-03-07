import { Controller, Post, Body, Get } from '@nestjs/common';
import { EditorService } from './editor.service';
import { SaveDto } from './dto/save.dto';
import { ResponseBody } from '@/common/classes/response-body';

@Controller('editor')
export class EditorController {
  constructor(private readonly editorService: EditorService) {}

  @Post('save')
  async save(@Body() saveDto: SaveDto) {
    return this.editorService.save(saveDto);
  }

  @Get('mock')
  async mock() {
    return new ResponseBody<null>(1, null, 'mock');
  }
}
