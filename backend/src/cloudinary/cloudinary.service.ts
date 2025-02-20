import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  
  async uploadImage(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'categories' },
        (error, result) => {
          if (error || !result) reject(error || new Error('Category Banner Upload failed'));
          else resolve(result?.secure_url); // Ensure result exists before accessing properties
        }
      );
      // Convert file buffer to readable stream and pipe it to Cloudinary
      Readable.from(file.buffer).pipe(stream);
    });
  }

}


