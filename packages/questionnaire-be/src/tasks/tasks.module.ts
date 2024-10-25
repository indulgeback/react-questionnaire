import { Module } from '@nestjs/common';
import { TasksService } from '@/tasks/tasks.service';
import { MailModule } from '@/service/mail/mail.module';

@Module({
  imports: [MailModule],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
