import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, CreateUserResponseDto, LoginUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/entities/user.entity';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { UserResponseInterface } from './types';
import { ConfigService } from '@nestjs/config';
import { compare } from 'bcrypt';
import { ThrowException } from '@app/utils/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly config: ConfigService,
    private readonly throwException: ThrowException,
  ) {}
  async createUser(request?: CreateUserDto): Promise<CreateUserResponseDto> {
    try {
      const userByEmail = await this.userRepository.findOne({
        where: { email: request.email },
      });

      const userByUsername = await this.userRepository.findOne({
        where: { username: request.username },
      });

      if (userByEmail || userByUsername) {
        this.throwException.throwHttpException(
          'Invalid user data',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }

      const newUser: CreateUserDto = new User();
      Object.assign(newUser, request);

      const result: CreateUserResponseDto = new CreateUserResponseDto(newUser);
      console.log(result);
      return await this.userRepository.save(result);
    } catch (e) {
      return;
    }
  }
  async loginUser(request?: LoginUserDto): Promise<CreateUserResponseDto> {
    try {
      const user = await this.userRepository.findOne({
        where: { email: request.email },
        select: ['id', 'username', 'email', 'bio', 'avatarImage', 'password'],
      });

      if (!user) {
        this.throwException.throwHttpException(
          'Credentials are not valid',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else {
        const isPasswordCorrect = await compare(
          request.password,
          user.password,
        );
        if (!isPasswordCorrect) {
          this.throwException.throwHttpException(
            'Credentials are not valid',
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }
      }

      delete user.password;
      const result: CreateUserResponseDto = new CreateUserResponseDto(user);

      return result;
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
