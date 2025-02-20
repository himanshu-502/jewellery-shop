import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { ConfigModule } from '@nestjs/config';
// import { CloudinaryController } from './cloudinary.controller';


@Module({
  imports: [ConfigModule],
  providers: [CloudinaryService],
  exports: [CloudinaryService], // Export for use in other modules
})
export class CloudinaryModule {}
