import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
