import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.service.create(createUserDto);

    return { message: 'User created successfully.', user };
  }
}
