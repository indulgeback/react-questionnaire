import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './dto/register-user.dto';
import LoginDto from './dto/login.dto';
import { ResponseBody } from '@/common/classes/response-body';
import { Public } from '@/common/decorators/public.decorator';
import {
  currentUser,
  UserToken,
} from '@/common/decorators/current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const { email } = registerUserDto;
    if (await this.authService.findByEmail(email)) {
      return new ResponseBody<null>(0, null, '该邮箱已注册');
    } else {
      this.authService.createUser(registerUserDto);
      return new ResponseBody<null>(1, null, '注册成功');
    }
  }

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { email } = loginDto;
    const user = await this.authService.findByEmail(email);
    if (user) {
      if (await this.authService.comparePassword(loginDto)) {
        const access_token = this.authService.createToken({
          userId: user.id,
          email: user.email,
          password: user.password,
        });
        return new ResponseBody<{ token: string }>(
          1,
          { token: access_token },
          '登录成功',
        );
      } else {
        return new ResponseBody<null>(0, null, '用户名或密码错误');
      }
    } else {
      return new ResponseBody<null>(0, null, '该用户不存在');
    }
  }

  @Get('info')
  async getUserInfo(@currentUser() userToken: UserToken) {
    const user = await this.authService.getUserInfo(userToken.email);
    return new ResponseBody<{ user: any }>(1, { user }, '获取用户信息成功');
  }
}
