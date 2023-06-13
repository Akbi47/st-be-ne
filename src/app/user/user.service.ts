import { Injectable } from '@nestjs/common';
import { CreateUserDto, CreateUserResponseDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/entities/user.entity';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { UserResponseInterface } from './types/create-user-response.interface';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly config: ConfigService,
  ) { }
  async createUser(request?: CreateUserDto) {
    try {
      const newUser: CreateUserDto = new User();
      Object.assign(newUser, request);
      const result: CreateUserResponseDto = new CreateUserResponseDto(newUser);
      return await this.userRepository.save(result.user);
    } catch (e) {
      return;
    }
  }
  generateJwt(user: User): string {
    return sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      this.config.get<string>('JWT_SECRET'),
    );
  }

  buildUserResponse(user: User): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    };
  }
}
