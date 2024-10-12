import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 注册
  @Post('register')
  async register(@Body() RegisterUserDto: RegisterUserDto) {
    const { username } = RegisterUserDto;
    const resp = {
      code: null,
      data: null,
      message: null,
    };
    if (await this.authService.findByUsername(username)) {
      this.authService.register(RegisterUserDto);
    } else {
      resp.code = 0;
      resp.message = '该用户名已存在';
      return resp;
    }
  }
}
