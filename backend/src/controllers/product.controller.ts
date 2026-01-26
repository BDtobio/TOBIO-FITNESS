// import {
//   Controller,
//   Post,
//   Get,
//   Patch,
//   Body,
//   Param,
//   ParseIntPipe,
//   UseGuards,
//   UseInterceptors,
//   UploadedFile,
//   Request,
// } from '@nestjs/common';

// import { JwtAuthGuard } from 'src/Guards/jwt-auth.guard';
// import { RolesGuard } from 'src/Guards/roles.guard';
// import { Roles } from 'src/roles/roles.decorator';
// import { ProductService } from 'src/services/product.services';

// import { FileInterceptor } from '@nestjs/platform-express';
// import { pdfStorage } from 'src/Cloudinary/cloudinary.storage';
// import { ProductTyp } from '@prisma/client';


// @Controller('product')
// export class ProductController {
//   constructor(private readonly productService: ProductService) {}

//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @Post()
//   create(
//     @Body()
//     body: {
//       title: string;
//       description: string;
//       type: ProductType  ;
//       level?: string;
//       price: number;
//       fileUrl?: string;
//     },
//   ) {
//     return this.productService.create(body);
//   }

//   @Get()
//   findAll() {
//     return this.productService.findAllActive();
//   }

//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @Patch(':id')
//   toggle(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() body: { isActive: boolean },
//   ) {
//     return this.productService.toggleActive(id, body.isActive);
//   }

//   @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('admin')
// @Post(':id/upload-pdf')
// @UseInterceptors(FileInterceptor('file', { storage: pdfStorage }))
// uploadPdf(
//   @Param('id', ParseIntPipe) productId: number,
//   @UploadedFile() file: any,
// ) {
//   return this.productService.attachPdf(productId, file.path);
// }


// @UseGuards(JwtAuthGuard)
// @Get(':id/download')
// async download(
//   @Param('id', ParseIntPipe) productId: number,
//   @Request() req,
// ) {
//   return this.productService.download(productId, req.user.id);
// }
// }
