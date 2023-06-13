import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
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
}
