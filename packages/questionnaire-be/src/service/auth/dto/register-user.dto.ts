import LoginDto from '@/service/auth/dto/login.dto';
import { IsString, MaxLength, MinLength } from 'class-validator';

export default class RegisterUserDto extends LoginDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nickname: string;
}
