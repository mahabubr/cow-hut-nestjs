import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';
import { EUserRole, UserRole } from '../user.interface';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;

  @IsEnum(EUserRole)
  role: UserRole;

  @IsString()
  @IsNotEmpty()
  password: string;

  name: {
    firstName: string;
    lastName: string;
  };

  address: string;

  @IsNumber()
  budget: number;

  @IsNumber()
  income: number;

  $assertPopulated: boolean;

  $clone: boolean;

  $getAllSubdocs: boolean;

  $ignore: boolean;
}
