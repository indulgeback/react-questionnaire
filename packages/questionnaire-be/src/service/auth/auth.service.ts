import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import User from '@/entities/user.entity';
import { Repository } from 'typeorm';
import RegisterUserDto from '@/service/auth/dto/register-user.dto';
import LoginDto from '@/service/auth/dto/login.dto';
import * as bcrypt from 'bcryptjs';

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

  async getUserInfo(email) {
    const { id } = await this.findByEmail(email);
    console.log(id);
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

  // 生成 Token
  createToken(data) {
    return this.jwtService.sign(data);
  }
}
