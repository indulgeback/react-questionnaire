import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { extname, join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { ResponseBody } from '@/common/classes/response-body';
import { Public } from '@/common/decorators/public.decorator';
import { createReadStream } from 'fs';
import { Logger } from '@/common/utils/log4js';
import { Response } from 'express';

@Public()
@Controller('file')
export class FileController {
  constructor() {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './static',
        filename: (_req, file, cb) => {
          console.log(file);
          // 生成文件名：日期+随机数+后缀
          const fileExt = extname(file.originalname);
          const fileName = `${new Date().toISOString().replace(/:/g, '-')}-${uuidv4()}${fileExt}`;
          return cb(null, fileName);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, // 限制文件大小为 5MB
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return new ResponseBody(1, file.filename, '上传成功');
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
