import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserResponseDto } from './dto';
import { camelCaseKeys, snakeCaseKeys } from '@app/utils/convertcase.util';
import { UserResponseInterface } from './types/create-user-response.interface';
import { User } from '@app/entities';
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('user')
  async createUser(
    @Body() request?: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const data = await this.userService.createUser(
      camelCaseKeys(CreateUserDto, request),
    );
    const result: User = snakeCaseKeys(CreateUserDto, data) as unknown as User;
    return this.userService.buildUserResponse(result);
  }
}
