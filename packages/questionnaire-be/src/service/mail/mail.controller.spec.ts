import { Test, TestingModule } from '@nestjs/testing';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { ResponseBody } from '@/common/classes/response-body';

describe('MailController', () => {
  let mailController: MailController;
  let mailService: MailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailController],
      providers: [
        {
          provide: MailService,
          useValue: {
            sendVerificationEmail: jest.fn(),
            verifyCode: jest.fn(),
          },
        },
      ],
    }).compile();

    mailController = module.get<MailController>(MailController);
    mailService = module.get<MailService>(MailService);
  });

  describe('sendVerification', () => {
    it('should return error if email is invalid', async () => {
      const response = await mailController.sendVerification('invalid-email');
      expect(response).toEqual(
        new ResponseBody<null>(0, null, '输入的邮箱地址不合法'),
      );
    });

    it('should return ttl if email is valid and code is sent', async () => {
      jest.spyOn(mailService, 'sendVerificationEmail').mockResolvedValue(600);
      const response =
        await mailController.sendVerification('test@example.com');
      expect(response).toEqual(
        new ResponseBody<number>(
          1,
          600,
          '验证码已发送，如果没有收到邮件，请于 600 秒后重试',
        ),
      );
    });
  });

  describe('verifyCode', () => {
    it('should return success if code is verified', async () => {
      jest.spyOn(mailService, 'verifyCode').mockResolvedValue(true);
      const response = await mailController.verifyCode(
        'test@example.com',
        '123456',
      );
      expect(response).toEqual(new ResponseBody<boolean>(1, true, '验证通过'));
    });

    it('should return failure if code is incorrect', async () => {
      jest.spyOn(mailService, 'verifyCode').mockResolvedValue(false);
      const response = await mailController.verifyCode(
        'test@example.com',
        'wrong-code',
      );
      expect(response).toEqual(
        new ResponseBody<boolean>(0, false, '验证失败，请检查验证码是否正确'),
      );
    });
  });
});
