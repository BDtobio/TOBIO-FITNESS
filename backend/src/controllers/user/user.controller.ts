import { Controller, Get, UseGuards, Req } from '@nestjs/common';

import type { RequestWithUser } from '../../interfaces/request-with-user.interface';
import { JwtAuthGuard } from '../../Guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req: RequestWithUser) {
    return req.user;
  }
}
