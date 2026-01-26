import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const pdfStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: 'diaco-coach/pdfs',
    resource_type: 'raw', // 🔴 CLAVE PARA PDFs
    format: 'pdf',
  }),
});
