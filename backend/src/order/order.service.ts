import { Injectable, ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  // async myCart(userId: number) {
  //   return this.prisma.order.findFirst({
  //     where: { userId, status: 'In Cart' },
  //     include: { items: true },
  //   });
  // }

  // async updateCart(userId: number, updatedCart: any) {
  //   const cart = await this.myCart(userId);
  //   if (!cart || cart.id !== updatedCart.orderId) throw new ForbiddenException('Invalid cart');
  
  //   const currentItems = await this.prisma.orderItem.findMany({ where: { orderId: cart.id } });
  
  //   await this.prisma.$transaction(async (tx) => {
  //     for (const item of updatedCart.items) {
  //       const latestVersion = await tx.product.findFirst({
  //         where: { id: item.productId },
  //         orderBy: { version: 'desc' },
  //         select: { version: true },
  //       });
  
  //       if (!latestVersion) continue;
  
  //       const existingItem = currentItems.find((i) => i.id === item.productId);
  //       if (existingItem) {
  //         await tx.orderItem.update({
  //           where: { id: existingItem.id },
  //           data: { quantity: item.quantity },
  //         });
  //       } else {
  //         await tx.orderItem.create({
  //           data: {
  //             orderId: cart.id,
  //             quantity: item.quantity,
  //             product: {
  //               connect: { id: item.productId, version: latestVersion.version },
  //             },
  //             price: 0,
  //           },
  //         });
  //       }
  //     }
  //   });
  
  //   return { message: 'Cart updated successfully' };
  // }
  

  // async myWishlist(userId: number) {
  //   return this.prisma.wishlist.findMany({
  //     where: { userId },
  //     select: { productId: true },
  //   });
  // }

  // async updateWishlist(userId: number, updatedWishlist: any) {
  //   const currentWishlist = await this.myWishlist(userId);
  //   const currentProductIds = currentWishlist.map((item) => item.productId);

  //   await this.prisma.$transaction(async (tx) => {
  //     for (const productId of updatedWishlist.productIds) {
  //       if (!currentProductIds.includes(productId)) {
  //         await tx.wishlist.create({ data: { userId, productId } });
  //       }
  //     }

  //     for (const productId of currentProductIds) {
  //       if (!updatedWishlist.productIds.includes(productId)) {
  //         await tx.wishlist.deleteMany({ where: { userId, productId } });
  //       }
  //     }
  //   });

  //   return { message: 'Wishlist updated successfully' };
  // }

  async myOrders(userId: number) {
    const user = await this.prisma.user.findUnique({where: {id: userId}});
    if(!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    
    return await this.prisma.order.findMany({
      where: { userId },
      select: {
        id: true,
        total: true,
        address: true,
        status: true,
        items: true,
      },
    });
  }

  async cancelOrder(userId: number, orderId: any){
    const user = await this.prisma.user.findUnique({where: {id: userId}});
    if(!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    await this.prisma.order.update({
      where: {id: parseInt(orderId.orderId, 10)}, 
      data: {
        status: 'cancelled',
      },
    });
    return {message: 'order cancelled'};
  }

  async addOrder(userId: number, productDetails: any) {
    const user = await this.prisma.user.findUnique({where: {id: userId}});
    if(!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    
    await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId,
          total: parseFloat(productDetails.total),
          address: productDetails?.address,
          status: 'Pending',
        },
      });
  
      // Create order items
      await tx.orderItem.createMany({
        data: productDetails.items.map((item: any) => ({
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      });
    });

    return { message: 'Order placed successfully' };
  }
}
