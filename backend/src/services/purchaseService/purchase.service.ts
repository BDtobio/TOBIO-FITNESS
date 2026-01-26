import { BadRequestException, Injectable } from '@nestjs/common';

import { PrismaService } from '../prismaService/prisma.service';


@Injectable()
export class PurchaseService {
  constructor(private prisma: PrismaService) {}

  async create(
  userId: number,
  productId: number,
  paymentMethod: PaymentMethod,
) {
  const product = await this.prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product || !product.isActive) {
    throw new BadRequestException('Producto inválido o inactivo');
  }

  return this.prisma.purchase.create({
    data: {
      userId,
      productId,
      paymentMethod,
      status: PurchaseStatus.PENDING,
    },
  });
}


  markAsPaid(id: number) {
    return this.prisma.purchase.update({
      where: { id },
      data: {
        status: PurchaseStatus.PAID,
        paidAt: new Date(),
      },
    });
  }

  findMyPurchases(userId: number) {
    return this.prisma.purchase.findMany({
      where: {
        userId,
        status: PurchaseStatus.PAID,
      },
      include: {
        product: true,
      },
    });
  }
}
