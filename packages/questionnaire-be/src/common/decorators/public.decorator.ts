// src/common/decorators/public.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata('isPublic', true);
