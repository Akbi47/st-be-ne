import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entities/user.entity';
import { ResponseUtil } from '@app/utils/response.util';

@Module({
  providers: [UserService, ResponseUtil],
  exports: [UserService],
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
