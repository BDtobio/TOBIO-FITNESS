import { Injectable } from '@nestjs/common';

import { ForbiddenException } from '@nestjs/common';

import { PrismaService } from './prismaService/prisma.service';
import { ProductType } from '@prisma/client/wasm';


@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(data: {
    title: string;
    description: string;
    type: ProductType;
    level?: string;
    price: number;
    fileUrl?: string;
  }) {
    return this.prisma.product.create({
      data,
    });
  }

  findAllActive() {
    return this.prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  toggleActive(id: number, isActive: boolean) {
    return this.prisma.product.update({
      where: { id },
      data: { isActive },
    });
  }
  async attachPdf(productId: number, fileUrl: string) {
  return this.prisma.product.update({
    where: { id: productId },
    data: { fileUrl },
  });
}

async download(productId: number, userId: number) {
  const purchase = await this.prisma.purchase.findFirst({
    where: {
      userId,
      productId,
      status: 'PAID',
    },
    include: {
      product: true,
    },
  });

  if (!purchase || !purchase.product.fileUrl) {
    throw new ForbiddenException('No tenés acceso a este producto');
  }

  return {
    fileUrl: purchase.product.fileUrl,
  };
}

}
