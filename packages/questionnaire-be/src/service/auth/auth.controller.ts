import { Body, Controller, Get, Post, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './dto/register-user.dto';
import LoginDto from './dto/login.dto';
import ChangePasswordDto from './dto/change-password';

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
        const userInfo = {
          userId: user.id,
          avatar: user.avatar,
          nickname: user.nickname,
        };
        return new ResponseBody<{ token: string; userInfo: typeof userInfo }>(
          1,
          { token: access_token, userInfo: userInfo },
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
  async getUserInfo(@currentUser() user: UserToken) {
    try {
      const userInfo = await this.authService.getUserInfo(user.email);
      return new ResponseBody<{ userInfo: any }>(
        1,
        { userInfo },
        '获取用户信息成功',
      );
    } catch (error) {
      return new ResponseBody<null>(0, null, error.message);
    }
  }

  @Post('changePassword')
  async changePassword(
    @currentUser() user: UserToken,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    const { userId } = user;
    this.authService.changePassword(userId, changePasswordDto);
  }

  @Delete('delete')
  async deleteAccount(@currentUser() user: UserToken) {
    const { userId } = user;
    try {
      this.authService.deleteAccount(userId);
      return new ResponseBody<null>(1, null, '注销账户成功');
    } catch (error) {
      return new ResponseBody<null>(0, null, '注销账户失败');
    }
  }
}
