import { ProductType } from '@prisma/client';

export class CreateProductDto {
  title: string;
  description: string;
  type: ProductType;
  level?: string;
  price: number;
  fileUrl?: string;
}
