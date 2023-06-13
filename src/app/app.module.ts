import { Module } from '@nestjs/common';
import { TagModule } from './tag/tag.module';
import { ConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule, TagModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
