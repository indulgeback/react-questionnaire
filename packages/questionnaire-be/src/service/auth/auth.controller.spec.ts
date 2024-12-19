import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import RegisterUserDto from './dto/register-user.dto';
import LoginDto from './dto/login.dto';
import { ResponseBody } from '@/common/classes/response-body';
import { UserToken } from '@/common/decorators/current-user.decorator';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            createUser: jest.fn(),
            findByEmail: jest.fn(),
            comparePassword: jest.fn(),
            createToken: jest.fn(),
            getUserInfo: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  it('should register a user', async () => {
    const registerUserDto: RegisterUserDto = {
      email: 'test@example.com',
      password: 'password123',
      nickname: 'TestUser',
    };

    const user = {
      id: 1,
      email: registerUserDto.email,
      password: registerUserDto.password,
      nickname: registerUserDto.nickname,
      create_time: new Date(),
      avatar: 'default-avatar.webp',
      bio: '',
      favorites: [],
    };

    jest.spyOn(authService, 'findByEmail').mockResolvedValue(null);
    jest.spyOn(authService, 'createUser').mockResolvedValue(user);

    const result = await authController.register(registerUserDto);
    expect(result).toEqual(new ResponseBody<null>(1, null, '注册成功'));
  });

  it('should not register a user if email already exists', async () => {
    const registerUserDto: RegisterUserDto = {
      email: 'test@example.com',
      password: 'password123',
      nickname: 'TestUser',
    };

    const user = {
      id: 1,
      email: registerUserDto.email,
      password: registerUserDto.password,
      nickname: registerUserDto.nickname,
      create_time: new Date(),
      avatar: 'default-avatar.webp',
      bio: '',
      favorites: [],
    };

    jest.spyOn(authService, 'findByEmail').mockResolvedValue(user);

    const result = await authController.register(registerUserDto);
    expect(result).toEqual(new ResponseBody<null>(0, null, '该邮箱已注册'));
  });

  it('should login a user', async () => {
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
      avatar: 'avatar.webp',
      bio: 'Test bio',
      favorites: [],
    };

    jest.spyOn(authService, 'findByEmail').mockResolvedValue(user);
    jest.spyOn(authService, 'comparePassword').mockResolvedValue(true);
    jest.spyOn(authService, 'createToken').mockReturnValue('test-token');

    const result = await authController.login(loginDto);
    expect(result).toEqual(
      new ResponseBody(
        1,
        {
          token: 'test-token',
          userInfo: {
            userId: user.id,
            avatar: user.avatar,
            nickname: user.nickname,
          },
        },
        '登录成功',
      ),
    );
  });

  it('should not login a user with incorrect password', async () => {
    const loginDto: LoginDto = {
      email: 'test@example.com',
      password: 'wrongPassword',
    };

    const user = {
      id: 1,
      email: 'test@example.com',
      password: 'hashedPassword',
      nickname: 'TestUser',
      create_time: new Date(),
      avatar: 'avatar.webp',
      bio: 'Test bio',
      favorites: [],
    };

    jest.spyOn(authService, 'findByEmail').mockResolvedValue(user);
    jest.spyOn(authService, 'comparePassword').mockResolvedValue(false);

    const result = await authController.login(loginDto);
    expect(result).toEqual(new ResponseBody<null>(0, null, '用户名或密码错误'));
  });

  it('should get user info', async () => {
    const userToken: UserToken = {
      userId: 1,
      email: 'test@example.com',
      password: 'hashedPassword',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };
    const userInfo = {
      nickname: 'TestUser',
      email: 'test@example.com',
      createTime: new Date(),
      avatar: 'avatar.webp',
      bio: 'Test bio',
    };

    jest.spyOn(authService, 'getUserInfo').mockResolvedValue(userInfo);

    const result = await authController.getUserInfo(userToken);
    expect(result).toEqual(
      new ResponseBody(1, { userInfo }, '获取用户信息成功'),
    );
  });
});
