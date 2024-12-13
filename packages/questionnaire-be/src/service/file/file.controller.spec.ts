import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './file.controller';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { ResponseBody } from '@/common/classes/response-body';
import configModule from '@/config';

jest.mock('fs', () => ({
  createReadStream: jest.fn(),
}));

jest.mock('@/config', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    app: { domain: 'http://localhost:3000' },
  })),
}));

jest.mock('@/common/utils/log4js', () => ({
  Logger: {
    error: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  },
}));

jest.mock('multer', () => ({
  diskStorage: jest.fn(() => ({
    _handleFile: jest.fn((req, file, cb) => cb(null, { path: 'mockPath' })),
    _removeFile: jest.fn((req, file, cb) => cb(null)),
  })),
  FileInterceptor: jest.fn(() => (req, res, next) => next()),
}));

describe('FileController', () => {
  let fileController: FileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
    }).compile();

    fileController = module.get<FileController>(FileController);
  });

  describe('uploadFile', () => {
    it('should upload a file and return its URL', () => {
      const file = { filename: 'testfile.txt' } as Express.Multer.File;
      const result = fileController.uploadFile(file);
      expect(result).toEqual(
        new ResponseBody(
          1,
          'http://localhost:3000/files/testfile.txt',
          '上传成功',
        ),
      );
    });

    it('should handle upload errors', () => {
      (configModule as jest.Mock).mockImplementation(() => {
        throw new Error('Config error');
      });

      const file = { filename: 'testfile.txt' } as Express.Multer.File;
      const result = fileController.uploadFile(file);
      expect(result).toEqual(new ResponseBody(0, null, 'Config error'));
    });
  });

  describe('downloadFile', () => {
    it('should download a file', () => {
      const filename = 'testfile.txt';
      const res = {
        setHeader: jest.fn(),
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;

      const fileStream = { pipe: jest.fn(), on: jest.fn() };
      (createReadStream as jest.Mock).mockReturnValue(fileStream);

      fileController.downloadFile(filename, res);

      expect(createReadStream).toHaveBeenCalledWith(
        join(__dirname, '../../../static', filename),
      );
      expect(res.setHeader).toHaveBeenCalledWith(
        'Content-Disposition',
        `attachment; filename="${filename}"`,
      );
      expect(res.setHeader).toHaveBeenCalledWith(
        'Content-Type',
        'application/octet-stream',
      );
      expect(fileStream.pipe).toHaveBeenCalledWith(res);
    });

    it('should handle file not found error', () => {
      const filename = 'nonexistentfile.txt';
      const res = {
        setHeader: jest.fn(),
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;

      (createReadStream as jest.Mock).mockImplementation(() => {
        throw new Error('File not found');
      });

      fileController.downloadFile(filename, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith(
        new ResponseBody(0, null, 'File not found'),
      );
    });
  });
});
