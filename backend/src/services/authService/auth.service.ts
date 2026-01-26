import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../prismaService/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  // 🔐 SEED ADMIN (TEMPORAL)
  async onModuleInit() {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) return;

    const exists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (exists) return;

    const hashed = await bcrypt.hash(password, 10);

    await this.prisma.user.create({
      data: {
        name: 'Admin',
        email,
        password: hashed,
        role: 'admin',
      },
    });

    console.log('✅ Admin creado automáticamente');
  }

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
        role: 'client', // explícito
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
