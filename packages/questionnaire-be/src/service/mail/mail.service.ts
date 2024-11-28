import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { randomBytes } from 'crypto';
import { createClient, RedisClientType } from 'redis';
import config from '@/config';
import generateEmail from '@/common/utils/generateEmail';

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

  // 发送验证码邮件
  async sendVerificationEmail(email: string): Promise<number> {
    // 检查验证码是否已存在且未过期
    const storedCode = await this.client.get(email);
    if (storedCode) {
      const ttl = await this.client.ttl(email);
      if (ttl > 0) {
        return ttl;
      }
    }

    const verificationCode = this.generateVerificationCode();
    const expirationTime = 60 * 10;
    try {
      // 先删除之前的验证码
      await this.client.del(email);
      // 设置键值对，并指定过期时间
      await this.client.set(email, verificationCode, { EX: expirationTime }); // 存储验证码，有效期为10分钟
      await this.mailerService.sendMail({
        from: '"XM Questionnaire" <XMquestionnaire@163.com>',
        to: email,
        subject: 'Verification Code',
        html: generateEmail(verificationCode, expirationTime),
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // 生成验证码
  private generateVerificationCode(): string {
    return randomBytes(3).toString('hex').toUpperCase();
  }

  // 校验验证码
  async verifyCode(email: string, code: string): Promise<boolean> {
    const storedCode = await this.client.get(email);
    // 校验成功删除验证码
    if (storedCode === code) {
      await this.client.del(email);
      return true;
    }
    return false;
  }
}
