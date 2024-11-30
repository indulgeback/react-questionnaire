import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { join } from 'path';
import { ResponseBody } from '@/common/classes/response-body';
import { Public } from '@/common/decorators/public.decorator';
import { createReadStream } from 'fs';
import { Logger } from '@/common/utils/log4js';
import { Response } from 'express';
import { FileUploadInterceptor } from '@/middleware/file-upload.interceptor';
import config from '@/config';

@Public()
@Controller('file')
export class FileController {
  constructor() {}

  @Post()
  @UseInterceptors(FileUploadInterceptor('file', {}))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const configrue = config();
      const fileUrl = `${configrue.app.domain}:${configrue.app.port}/files/${file.filename}`;
      return new ResponseBody(1, fileUrl, '上传成功');
    } catch (error) {
      return new ResponseBody(0, null, error.message);
    }
  }

  @Get(':filename')
  downloadFile(@Param('filename') filename: string, @Res() res: Response) {
    const rootDir = join(__dirname, '../../../');
    const filePath = join(rootDir, 'static', filename);
    // 检查文件是否存在
    try {
      const fileStream = createReadStream(filePath);
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${filename}"`,
      );
      res.setHeader('Content-Type', 'application/octet-stream');
      fileStream.pipe(res);

      // 监听文件流的错误事件
      fileStream.on('error', (err) => {
        Logger.error(`Error reading file: ${err.message}`);
        res.status(404).send(new ResponseBody(0, null, err.message));
      });
    } catch (error) {
      res.status(404).send(new ResponseBody(0, null, error.message));
    }
  }
}
