import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './dto/register-user.dto';
import LoginDto from './dto/login.dto';
import { ResponseBody } from '@/common/classes/response-body';
import { JwtService } from '@nestjs/jwt';
import { Public } from '@/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

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
    if (await this.authService.findByEmail(email)) {
      if (await this.authService.comparePassword(loginDto)) {
        const access_token = this.jwtService.sign({
          email: loginDto.email,
          password: loginDto.password,
        });
        return new ResponseBody<string>(1, access_token, '登录成功');
      } else {
        return new ResponseBody<null>(0, null, '用户名或密码错误');
      }
    } else {
      return new ResponseBody<null>(0, null, '该用户不存在');
    }
  }
}
