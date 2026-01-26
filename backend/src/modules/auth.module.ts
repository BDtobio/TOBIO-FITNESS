import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from '../services/authService/auth.service';
import { AuthController } from '../controllers/authController/auth.controller';
import { JwtStrategy } from '../auth/jwt.strategy';
import { PrismaService } from '../services/prismaService/prisma.service';

@Module({
  imports: [
    PassportModule, // 🔥 CLAVE
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'supersecretkey',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
  exports: [PassportModule], // 👈 IMPORTANTE
})
export class AuthModule {}
