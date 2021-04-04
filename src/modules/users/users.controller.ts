import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/User.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }

  @Get(':id')
  async findById(@Param() param): Promise<User> {
    return this.UserService.findOneById(param.id);
  }

  @Post()
  async create(@Body() UserDTO: CreateUserDTO): Promise<User> {
    return this.UserService.create(UserDTO);
  }
}
