import { Module } from '@nestjs/common';

import { PurchaseService } from '../services/purchaseService/purchase.service';
import { PrismaService } from '../services/prismaService/prisma.service';
import { PurchaseController } from 'src/controllers/purchaseController/purchase.controller';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService, PrismaService],
})
export class PurchaseModule {}
