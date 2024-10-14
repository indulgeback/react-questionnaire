import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { ResponseBody } from 'src/common/classes/response-body';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 注册
  @Post('register')
  async register(@Body() RegisterUserDto: RegisterUserDto) {
    const { username } = RegisterUserDto;
    if (await this.authService.findByUsername(username)) {
      return new ResponseBody<null>(0, null, '用户名已存在');
    } else {
      this.authService.createUser(RegisterUserDto);
      return new ResponseBody<null>(1, null, '注册成功');
    }
  }
}
