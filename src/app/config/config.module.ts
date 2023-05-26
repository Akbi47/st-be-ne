import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService as NestConfigService,
} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './postgresdb.config.service';
import { AppConfigService } from './app.config.service';
@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [NestConfigModule],
    //   useClass: TypeOrmConfigService,
    //   inject: [NestConfigService],
    // }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class ConfigModule { }
