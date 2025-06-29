import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRequest } from './dto/create-user.request';
import { CreateUserResponse } from './dto/create-user.response';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async addUser(
    createUserRequest: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const user = this.userRepository.create(createUserRequest);
    const saved = await this.userRepository.save(user);

    // return plainToInstance(CreateUserResponse, saved);
    return {
      username: saved.username,
      token: 'TOKEN',
    };
  }
}
