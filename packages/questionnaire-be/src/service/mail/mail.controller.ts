import { Controller, Body, Post } from '@nestjs/common';
import { MailService } from '@/service/mail/mail.service';
import { ResponseBody } from '@/common/classes/response-body';
import shared from '@questionnaire/shared';
import { Public } from '@/common/decorators/public.decorator';
import { Logger } from '@/common/utils/log4js';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Public()
  @Post('send')
  async sendVerification(
    @Body('email') email: string,
  ): Promise<ResponseBody<null>> {
    // 校验email是否为邮箱格式
    const isValidEmail = shared.RegExp.emailRegExp.test(email);
    if (!isValidEmail) {
      return new ResponseBody<null>(0, null, '输入的邮箱地址不合法');
    }
    try {
      await this.mailService.sendVerificationEmail(email);
    } catch (error) {
      Logger.error(error);
      return new ResponseBody<null>(0, null, error.message);
    }
    return new ResponseBody<null>(1, null, `验证码已发送至 ${email}`);
  }

  @Public()
  @Post('verify')
  async verifyCode(
    @Body('email') email: string,
    @Body('code') code: string,
  ): Promise<ResponseBody<boolean>> {
    const verified = await this.mailService.verifyCode(email, code);
    if (!verified) {
      return new ResponseBody<boolean>(
        0,
        verified,
        `验证失败，请检查验证码是否正确`,
      );
    }
    return new ResponseBody<boolean>(1, verified, `验证通过`);
  }
}
