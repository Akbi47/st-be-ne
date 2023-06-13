import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { LoginUserDto } from './login-user.dto';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    example: 'user1@gmail.com',
    name: 'email',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @Expose({ name: 'email' })
  public email: string;


  @ApiProperty({
    description: 'password of user',
    example: 'cb4afaa0_fd5dk*49a9@b02085730da02094',
    name: 'password',
    required: true,
  })
  @IsNotEmpty()
  @Expose({ name: 'password' })
  public password: string;

  @ApiProperty({
    type: String,
    example: 'adagio',
    name: 'username',
    required: true,
  })
  @IsNotEmpty()
  @Expose({ name: 'username' })
  public username: string;

  @ApiProperty({
    description: 'describe or express something about user',
    example: 'i am graceful',
    name: 'bio',
    required: false,
  })
  @Expose({ name: 'bio' })
  public bio?: string;

  @ApiProperty({
    description: 'avatar image of user',
    example: '',
    name: 'avatar_image',
    required: false,
  })
  @Expose({ name: 'avatar_image' })
  public avatarImage?: string;
}
