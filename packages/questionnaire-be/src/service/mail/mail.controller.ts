import { Controller, Body, Post } from '@nestjs/common';
import { MailService } from '@/service/mail/mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendVerification(
    @Body('email') email: string,
  ): Promise<{ message: string }> {
    const code = await this.mailService.sendVerificationEmail(email);
    return { message: `Verification code sent to ${email}` };
  }

  @Post('verify')
  async verifyCode(
    @Body('email') email: string,
    @Body('code') code: string,
  ): Promise<{ verified: boolean }> {
    const verified = await this.mailService.verifyCode(email, code);
    return { verified };
  }
}
