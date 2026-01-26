import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  Param,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Guards/jwt-auth.guard';
import { RolesGuard } from 'src/Guards/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { PurchaseService } from 'src/services/purchaseService/purchase.service';
import { Req } from '@nestjs/common';
import { PaymentMethod } from '@prisma/client/wasm';


@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  // CLIENT — crear compra
@UseGuards(JwtAuthGuard)
@Post()
createPurchase(
  @Body()
  body: {
    productId: number;
    paymentMethod: PaymentMethod;
  },
  @Req() req,
) {
  return this.purchaseService.create(
    req.user.id,
    body.productId,
    body.paymentMethod,
  );
}

  // ADMIN — marcar como pagada
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id/pay')
  markAsPaid(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseService.markAsPaid(id);
  }

  // CLIENT — ver mis compras
  @UseGuards(JwtAuthGuard)
  @Get('me')
  findMine(@Request() req) {
    return this.purchaseService.findMyPurchases(req.user.id);
  }
}
