import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import User from '@/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import RegisterUserDto from '@/service/auth/dto/register-user.dto';
import LoginDto from '@/service/auth/dto/login.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let userRepository: Repository<User>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('test-token'),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    jwtService = module.get<JwtService>(JwtService);

    jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should create a user', async () => {
    const registerUserDto: RegisterUserDto = {
      email: 'test@example.com',
      password: 'password123',
      nickname: 'TestUser',
    };

    jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

    jest.spyOn(userRepository, 'save').mockImplementation(async (user) => ({
      id: 1,
      create_time: new Date(),
      email: user.email!,
      password: user.password!,
      nickname: user.nickname!,
      avatar: 'default-avatar.png',
      bio: '',
      favorites: [],
    }));

    const result = await authService.createUser(registerUserDto);
    expect(result).toMatchObject({
      email: registerUserDto.email,
      nickname: registerUserDto.nickname,
    });
    expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
  });

  it('should get user info', async () => {
    const user = {
      id: 1,
      email: 'test@example.com',
      password: 'hashedPassword',
      nickname: 'TestUser',
      create_time: new Date(),
      avatar: 'avatar.png',
      bio: 'Test bio',
      favorites: [],
    };

    jest.spyOn(authService, 'findByEmail').mockResolvedValue(user);

    const result = await authService.getUserInfo(user.email);
    expect(result).toEqual({
      nickname: user.nickname,
      email: user.email,
      createTime: user.create_time,
      avatar: user.avatar,
      bio: user.bio,
    });
  });

  it('should find a user by email', async () => {
    const user = {
      id: 1,
      email: 'test@example.com',
      password: 'hashedPassword',
      nickname: 'TestUser',
      create_time: new Date(),
      avatar: 'avatar.png',
      bio: 'Test bio',
      favorites: [],
    };

    jest.spyOn(userRepository, 'findOne').mockResolvedValue(user);

    const result = await authService.findByEmail(user.email);
    expect(result).toEqual(user);
  });

  it('should compare password correctly', async () => {
    const loginDto: LoginDto = {
      email: 'test@example.com',
      password: 'password123',
    };

    const user = {
      id: 1,
      email: 'test@example.com',
      password: 'hashedPassword',
      nickname: 'TestUser',
      create_time: new Date(),
      avatar: 'avatar.png',
      bio: 'Test bio',
      favorites: [],
    };
    jest.spyOn(authService, 'findByEmail').mockResolvedValue(user);
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

    const result = await authService.comparePassword(loginDto);
    expect(result).toBe(true);
  });

  it('should create a token', () => {
    const data = { userId: 1, email: 'test@example.com' };
    const token = authService.createToken(data);
    expect(token).toBe('test-token');
    expect(jwtService.sign).toHaveBeenCalledWith(data);
  });
});
