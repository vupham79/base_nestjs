import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoggerService } from 'src/core/logger/logger.service';
import { CreateUserDTO } from './dto/User.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly UserService: UsersService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    this.logger.debug('Get All Users Endpoint');
    return this.UserService.findAll();
  }

  @Get(':id')
  async findById(@Param() param): Promise<User> {
    this.logger.debug(`Get User with ID: ${param.id} Endpoint`);
    return this.UserService.findOneById(param.id);
  }

  @Post()
  async create(@Body() UserDTO: CreateUserDTO): Promise<User> {
    this.logger.debug('Create User Endpoint');
    return this.UserService.create(UserDTO);
  }
}
