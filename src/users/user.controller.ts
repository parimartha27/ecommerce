import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/create-user.request';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/hello-world')
  helloWord(): string {
    return 'Hy, my name is Pari!';
  }

  @Post('/add')
  addUser(@Body() createUserRequest: CreateUserRequest) {
    return this.userService.addUser(createUserRequest);
  }
}
