import { Module } from '@nestjs/common';

import { PrismaService } from '../services/prismaService/prisma.service';
import { ProductController } from 'src/controllers/product.controller';
import { ProductService } from '../services/product.services';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
  exports: [ProductService],
})
export class ProductModule {}
