import { Inject, Injectable } from '@nestjs/common';
import { User_REPOSITORY } from 'src/core/constants';
import { CreateUserDTO } from './dto/User.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(User_REPOSITORY)
    private readonly UserRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.UserRepository.findAll<User>({
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async findOneById(id: number): Promise<User> {
    return await this.UserRepository.findOne<User>({
      where: { id },
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.UserRepository.findOne<User>({
      where: {
        email: username,
      },
    });
  }

  async create(User: CreateUserDTO): Promise<User> {
    return await this.UserRepository.create<User>(User);
  }
}
