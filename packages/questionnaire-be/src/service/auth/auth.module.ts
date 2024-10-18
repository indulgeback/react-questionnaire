import { Module } from '@nestjs/common';
import { AuthController } from '@/service/auth/auth.controller';
import { AuthService } from '@/service/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/service/auth/entities/User.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your_jwt_secret_key',
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
