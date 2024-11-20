import { NestInterceptor, Type } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

interface FileUploadOptions {
  destination?: string;
  filename?: (
    req: any,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void,
  ) => void;
  limits?: { [key: string]: number };
}

export function FileUploadInterceptor(
  fieldName: string,
  options: FileUploadOptions,
): Type<NestInterceptor> {
  const fileInterceptor = FileInterceptor(fieldName, {
    storage: diskStorage({
      destination: options.destination || './static',
      filename:
        options.filename ||
        ((_req, file, cb) => {
          const fileExt = extname(file.originalname);
          const fileName = `${new Date().toISOString().replace(/:/g, '-')}-${uuidv4()}${fileExt}`;
          cb(null, fileName);
        }),
    }),
    limits: options.limits || { fileSize: 5 * 1024 * 1024 }, // 默认5MB
  });

  return fileInterceptor;
}
