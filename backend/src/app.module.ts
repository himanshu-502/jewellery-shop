import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [PrismaModule, AuthModule, UsersModule, ProductModule, OrderModule, CloudinaryModule, ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
