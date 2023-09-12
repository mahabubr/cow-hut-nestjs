import { Post, Controller, Body } from '@nestjs/common';
import { UserDocument } from 'src/user/user.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() data: UserDocument) {
    const result = this.authService.signup(data);
    return result;
  }
}
