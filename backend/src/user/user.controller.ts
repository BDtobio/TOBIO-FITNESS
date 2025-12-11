import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { RequestWithUser } from '../interfaces/request-with-user.interface';

@Controller('user')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req: RequestWithUser) {
    return req.user;
  }
}
