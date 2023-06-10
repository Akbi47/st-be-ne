import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }
  async createUser(request?: CreateUserDto): Promise<User | object> {
    const newUser = new User();
    Object.assign(newUser, request);
    console.log('new user: ', newUser);
    return newUser;
    // return await this.userRepository.save(newUser);
  }
}
