import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module';  
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 


@Module({
  imports: [PrismaModule, AuthModule, JwtModule],  
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
