import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';

import { ProductModule } from './modules/product.module';
import { PurchaseModule } from './modules/purchase.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    PurchaseModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

