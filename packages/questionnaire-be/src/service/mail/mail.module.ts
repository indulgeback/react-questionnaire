import { Module } from '@nestjs/common';
import { MailService } from '@/service/mail/mail.service';
import { MailController } from '@/service/mail/mail.controller';

@Module({
  imports: [],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
