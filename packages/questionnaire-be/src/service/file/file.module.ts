import { Module } from '@nestjs/common';
import { FileController } from '@/service/file/file.controller';

@Module({
  controllers: [FileController],
})
export class FileModule {}
