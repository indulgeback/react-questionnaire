import { MailService } from '@/service/mail/mail.service';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  constructor(private readonly mailService: MailService) {}
  // 每分钟执行一次的任务
  //   @Cron(CronExpression.EVERY_10_SECONDS)
  //   handleCron() {
  //     console.log('每10秒执行一次的任务');
  //     this.mailService.sendVerificationEmail('2064685326@qq.com');
  //   }
}
