import { IsString, MaxLength, MinLength } from 'class-validator';

export default class ChangePasswordDto {
  @IsString()
  @MinLength(8)
  @MaxLength(16)
  oldPassword: string;

  @IsString()
  @MinLength(8)
  @MaxLength(16)
  newPassword: string;

  @IsString()
  @MinLength(8)
  @MaxLength(16)
  confirmPassword: string;
}
