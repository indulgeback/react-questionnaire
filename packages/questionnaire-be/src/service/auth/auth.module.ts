import { Module } from '@nestjs/common';
import { AuthController } from '@/service/auth/auth.controller';
import { AuthService } from '@/service/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '@/service/auth/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@/common/strategy/jwt.strategy';
@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('app.jwt.secret'),
        signOptions: {
          expiresIn: config.get('app.jwt.expiresIn'),
        },
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
