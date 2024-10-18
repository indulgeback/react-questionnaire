import { DynamicModule, Module, OnApplicationBootstrap } from '@nestjs/common';
import loggerConfig from '@/config/log4js.config';

@Module({})
export class LoggerModule implements OnApplicationBootstrap {
  constructor() {}
  onApplicationBootstrap() {
    throw new Error('Method not implemented.');
  }

  static forRoot(): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: 'LOG4JS',
          useFactory: () => loggerConfig().getLogger(),
        },
      ],
      exports: ['LOG4JS'],
    };
  }
}
