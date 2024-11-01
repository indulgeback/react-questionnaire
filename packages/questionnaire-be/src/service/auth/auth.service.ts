import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/service/auth/entities/User.entity';
import { Repository } from 'typeorm';
import RegisterUserDto from '@/service/auth/dto/register-user.dto';
import LoginDto from '@/service/auth/dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(registerUserDto: RegisterUserDto) {
    const saltRounds = 10; // 盐的轮数
    // 撒盐加密
    registerUserDto.password = await bcrypt.hash(
      registerUserDto.password,
      saltRounds,
    );
    return await this.userRepository.save(registerUserDto);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async comparePassword(loginDto: LoginDto) {
    const user = await this.findByEmail(loginDto.email);
    // 解密匹配
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      return true;
    }
    return false;
  }
}
