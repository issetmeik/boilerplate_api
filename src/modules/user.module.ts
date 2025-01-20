import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  controllers: [UserController],
  imports: [HttpModule],
  providers: [UserService, UserRepository],
})
export class UserModule {}
