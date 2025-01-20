/* eslint-disable @typescript-eslint/no-unsafe-call */
import { UserRoleType } from '@prisma/client';
import { IsDateString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsEnum(UserRoleType)
  role: UserRoleType;

  @IsDateString()
  birthDate: Date;

  @IsNotEmpty()
  password: string;
}
