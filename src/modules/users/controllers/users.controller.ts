import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('users')
export class UsersController {
  constructor(private appService: AppService) {}

  @Get()
  getAllUsers(): string {
    return this.appService.getHello();
  }

  @Get()
  getUserById(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(): string {
    return this.appService.getHello();
  }

  @Patch()
  updateUser(): string {
    return this.appService.getHello();
  }

  @Delete()
  deleteUser(): string {
    return this.appService.getHello();
  }
}
