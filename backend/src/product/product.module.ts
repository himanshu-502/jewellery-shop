import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from '../prisma/prisma.module';  
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [PrismaModule, AuthModule, JwtModule, CloudinaryModule],  
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
