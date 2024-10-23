import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { randomBytes } from 'crypto';
import { createClient, RedisClientType } from 'redis';
import config from '@/config';

@Injectable()
export class MailService {
  private readonly client: RedisClientType;

  constructor(private mailerService: MailerService) {
    this.client = createClient({ url: config().db.redis.uri });

    // 监听 Redis 连接事件
    this.client.on('error', (error) => {
      console.error('Redis Client Error', error);
    });

    this.client.on('connect', () => {
      console.log('Connected to Redis');
    });

    // 连接 Redis
    this.client.connect();
  }

  async sendVerificationEmail(email: string): Promise<string> {
    const verificationCode = this.generateVerificationCode();
    try {
      // 设置键值对，并指定过期时间
      await this.client.set(email, verificationCode, { EX: 600 }); // 存储验证码，有效期为10分钟
      await this.mailerService.sendMail({
        from: '"XM Questionnaire" <XMquestionnaire@163.com>',
        to: email,
        subject: 'Verification Code',
        text: `Your verification code is ${verificationCode}.`,
      });
      return verificationCode;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private generateVerificationCode(): string {
    return randomBytes(3).toString('hex').toUpperCase();
  }

  async verifyCode(email: string, code: string): Promise<boolean> {
    const storedCode = await this.client.get(email);
    return storedCode === code;
  }
}
