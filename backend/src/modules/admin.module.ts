import { Module } from '@nestjs/common';
import { AdminController } from 'src/controllers/adminController/admin.controller';


@Module({
  controllers: [AdminController],
})
export class AdminModule {}
