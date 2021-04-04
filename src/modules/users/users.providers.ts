import { User_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';

export const UsersProviders = [
  {
    provide: User_REPOSITORY,
    useValue: User,
  },
];
