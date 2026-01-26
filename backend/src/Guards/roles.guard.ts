import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthUser } from '../interfaces/auth-user.interface';

interface RequestWithUser extends Request {
  user?: AuthUser;
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
canActivate(context: ExecutionContext): boolean {
  const requiredRoles = this.reflector.get<string[]>(
    'roles',
    context.getHandler(),
  );

  const request = context.switchToHttp().getRequest<RequestWithUser>();
  const user = request.user;

  console.log('🔐 REQUIRED ROLES:', requiredRoles);
  console.log('👤 USER FROM TOKEN:', user);

  if (!requiredRoles) return true;

  if (!user || !requiredRoles.includes(user.role)) {
    throw new ForbiddenException('No tenés permisos para acceder.');
  }

  return true;
}

}
