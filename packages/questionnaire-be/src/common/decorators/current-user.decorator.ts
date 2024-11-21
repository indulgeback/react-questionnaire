import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type UserToken = {
  email: string;
  password: string;
  iat: number;
  exp: number;
};

export const currentUser = createParamDecorator(
  (_data, ctx: ExecutionContext): UserToken => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
