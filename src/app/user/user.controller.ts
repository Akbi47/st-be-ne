import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('user')
  async createUser(@Body() request?: CreateUserDto) {
    return await this.userService.createUser(request);
  }
}
