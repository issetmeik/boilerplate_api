import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Injectable()
export class UserRepository {
  private readonly db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.db.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        role: dto.role,
        birthDate: dto.birthDate,
        password: dto.password,
      },
    });
  }
}
