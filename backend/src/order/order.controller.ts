import { Controller, Get, Patch, Post, Body, UseGuards, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';
// import { Request } from 'express';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // @UseGuards(JwtAuthGuard)
  // @Get('mycart')
  // myCart(@Req() req) {
  //   return this.orderService.myCart(req.user.userId);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Patch('update-cart')
  // updateCart(@Req() req , @Body() updatedCart: any) {
  //   return this.orderService.updateCart(req.user.userId, updatedCart);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('mywishlist')
  // myWishlist(@Req() req) {
  //   return this.orderService.myWishlist(req.user.userId);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Patch('update-wishlist')
  // updateWishlist(@Req() req, @Body() updatedWishlist: any) {
  //   return this.orderService.updateWishlist(req.user.userId, updatedWishlist);
  // }

  @UseGuards(JwtAuthGuard)
  @Get('myorders')
  myOrders(@Req() req) {
    return this.orderService.myOrders(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('add-order')
  addOrder(@Req() req, @Body() productDetails: any) {
    return this.orderService.addOrder(req.user.userId, productDetails);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('cancel-order')
  cancelOrder(@Req() req, @Body() orderId: any) {
    return this.orderService.cancelOrder(req.user.userId, orderId);
  }
  
}
