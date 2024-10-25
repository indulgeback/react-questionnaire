import { Controller, Body, Post } from '@nestjs/common';
import { MailService } from '@/service/mail/mail.service';
import { ResponseBody } from '@/common/classes/response-body';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendVerification(
    @Body('email') email: string,
  ): Promise<ResponseBody<null>> {
    const code = await this.mailService.sendVerificationEmail(email);
    return new ResponseBody<null>(
      1,
      null,
      `Verification code sent to ${email}`,
    );
  }

  @Post('verify')
  async verifyCode(
    @Body('email') email: string,
    @Body('code') code: string,
  ): Promise<ResponseBody<boolean>> {
    const verified = await this.mailService.verifyCode(email, code);
    if (!verified) {
      return new ResponseBody<boolean>(0, verified, `Verification Failed`);
    }
    return new ResponseBody<boolean>(1, verified, `Verification Passed`);
  }
}
