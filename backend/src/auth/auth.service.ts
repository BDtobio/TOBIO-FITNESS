import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  // REGISTER
  async register(data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }) {
    const { name, email, password, phone } = data;

    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new BadRequestException('El email ya está registrado.');
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        phone,
      },
    });

    return {
      message: 'Usuario registrado con éxito',
      userId: user.id,
    };
  }

  // LOGIN
  async login(data: { email: string; password: string }) {
    const { email, password } = data;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas.');
    }

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      throw new UnauthorizedException('Contraseña incorrecta.');
    }

    const token = await this.jwt.signAsync({
      id: user.id,
      role: user.role,
      email: user.email,
    });

    return {
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    };
  }
}
