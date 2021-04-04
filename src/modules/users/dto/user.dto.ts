import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength
} from 'class-validator';
import { User } from '../user.entity';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class CreateUserDTO extends User {
  @IsNotEmpty({
    message: 'Firstname should not be empty',
  })
  readonly firstName: string;

  @IsNotEmpty({
    message: 'Lastname should not be empty',
  })
  readonly lastName: string;

  @IsNotEmpty({
    message: 'Email should not be empty',
  })
  @IsEmail()
  readonly email: string;

  @IsNotEmpty({
    message: 'Phone number should not be empty',
  })
  @IsPhoneNumber()
  readonly phoneNumber: string;

  @IsNotEmpty({
    message: 'Password should not be empty',
  })
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'Gender must be either male or female',
  })
  readonly gender: Gender;
}
