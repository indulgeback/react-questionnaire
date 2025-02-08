import { Controller, Post, Body } from '@nestjs/common';
import { EditorService } from './editor.service';
import { SaveDto } from './dto/save.dto';
@Controller('editor')
export class EditorController {
  constructor(private readonly editorService: EditorService) {}

  @Post('save')
  async save(@Body() saveDto: SaveDto) {
    return this.editorService.save(saveDto);
  }
}
