import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(RegisterUserDto: RegisterUserDto) {
    return await this.userRepository.save(RegisterUserDto);
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({
      where: { username },
    });
  }
}
