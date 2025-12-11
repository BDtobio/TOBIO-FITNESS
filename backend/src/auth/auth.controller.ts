import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // REGISTER
  @Post('register')
  async register(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
      phone?: string;
    },
  ) {
    return await this.authService.register(body);
  }

  // LOGIN
  @Post('login')
  async login(
    @Body()
    body: {
      email: string;
      password: string;
    },
  ) {
    return await this.authService.login(body);
  }
}
