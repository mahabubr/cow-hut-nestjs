import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUser() {
    try {
      const result = this.userService.getUser();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  getSingleUser(@Param() param: string) {
    try {
      const id = (param as any).id;
      const result = this.userService.getSingleUser(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
