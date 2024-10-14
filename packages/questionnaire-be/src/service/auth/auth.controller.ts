import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './dto/register-user.dto';
import LoginDto from './dto/login.dto';
import { ResponseBody } from 'src/common/classes/response-body';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // 注册
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const { username } = registerUserDto;
    if (await this.authService.findByUsername(username)) {
      return new ResponseBody<null>(0, null, '用户名已存在');
    } else {
      this.authService.createUser(registerUserDto);
      return new ResponseBody<null>(1, null, '注册成功');
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { username } = loginDto;
    if (await this.authService.findByUsername(username)) {
      if (await this.authService.comparePassword(loginDto)) {
        return new ResponseBody<null>(1, null, '登录成功');
      } else {
        return new ResponseBody<null>(0, null, '密码错误');
      }
    } else {
      return new ResponseBody<null>(0, null, '该用户不存在');
    }
  }
}
