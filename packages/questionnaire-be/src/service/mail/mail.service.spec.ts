import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from './mail.service';
import { MailerService } from '@nestjs-modules/mailer';
import { createClient } from 'redis';

jest.mock('redis', () => ({
  createClient: jest.fn().mockReturnValue({
    connect: jest.fn(),
    on: jest.fn(),
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
    ttl: jest.fn(),
  }),
}));

describe('MailService', () => {
  let mailService: MailService;
  let mailerService: MailerService;
  let redisClient: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        {
          provide: MailerService,
          useValue: {
            sendMail: jest.fn(),
          },
        },
      ],
    }).compile();

    mailService = module.get<MailService>(MailService);
    mailerService = module.get<MailerService>(MailerService);
    redisClient = createClient();
  });

  describe('sendVerificationEmail', () => {
    it('should send verification email and return ttl', async () => {
      redisClient.get.mockResolvedValue(null);
      redisClient.ttl.mockResolvedValue(600);
      redisClient.set.mockResolvedValue('OK');
      (mailerService.sendMail as jest.Mock).mockResolvedValue(true);

      const ttl = await mailService.sendVerificationEmail('test@example.com');
      expect(ttl).toBe(600);
      expect(mailerService.sendMail).toHaveBeenCalled();
    });

    it('should return expiration time if no stored code', async () => {
      redisClient.get.mockResolvedValue(null);
      redisClient.set.mockResolvedValue('OK');
      (mailerService.sendMail as jest.Mock).mockResolvedValue(true);

      const expirationTime = 600;
      const ttl = await mailService.sendVerificationEmail('test@example.com');
      expect(ttl).toBe(expirationTime);
      expect(mailerService.sendMail).toHaveBeenCalled();
    });
  });

  describe('verifyCode', () => {
    it('should verify code successfully', async () => {
      redisClient.get.mockResolvedValue('123456');
      redisClient.del.mockResolvedValue(1);

      const result = await mailService.verifyCode('test@example.com', '123456');
      expect(result).toBe(true);
    });

    it('should fail to verify code if incorrect', async () => {
      redisClient.get.mockResolvedValue('123456');

      const result = await mailService.verifyCode(
        'test@example.com',
        'wrong-code',
      );
      expect(result).toBe(false);
    });
  });
});
