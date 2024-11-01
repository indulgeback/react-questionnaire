import LoginDto from '@/service/auth/dto/login.dto';

export default class RegisterUserDto extends LoginDto {
  nickname: string;
}
