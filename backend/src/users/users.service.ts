import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';  
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Get user name by userId (extracted from JWT token)
  async getProfile(userId: number){
    const foundUser = await this.prisma.user.findUnique({
      where: { id: userId }
    });

    if (!foundUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const {id, passwordHash, createdAt, ...user} = foundUser;
    return user; 
  }

  async updateProfile(userId: number, updateData: { name?: string; email?: string; phone?: string }) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        name: updateData.name,
        email: updateData.email,
        phone: updateData.phone,
      },
    });

    return {message: 'Profile updated successfully'};
  }
  
  async updatePassword(userId: number, oldPassword: string, newPassword: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  
    const isMatch = await bcrypt.compare(oldPassword, user.passwordHash);
    if (!isMatch) {
      throw new HttpException('Old password is incorrect', HttpStatus.UNAUTHORIZED);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash: hashedPassword },
    });
  
    return { message: 'Password updated successfully' };
  }

  async updateAddress(userId: number, newAddresses: string[]){
    const user = await this.prisma.user.findUnique({
      where: {id: userId},
    })
    if(!user){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { address: newAddresses }
    });

    return {message: 'Addresses updated successfully'};
  }

  async myReviews(userId: number) {
    return this.prisma.review.findMany({
      where: { userId: userId },
      select: {
        productId: true,
        rating: true,
        comment: true,
      },
    });
  }  

  async updateUserRole(userId: number, updatedUserRole: any ){
    const user = await this.prisma.user.findUnique({
      where: {id: userId},
    })
    if(!user || user.role!=='admin'){
      throw new HttpException('User not authorized', HttpStatus.NOT_FOUND);
    }
    const possibleActions = ['block', 'unblock', 'make-admin', 'remove-admin'];
    if(!possibleActions.includes(updatedUserRole.action)){
      return {message: 'action not defined'};
    }
    const updatedUser = await this.prisma.user.findUnique({
      where: {id: parseInt(updatedUserRole.userId, 10)}
    });
    if(!updatedUser) {
      return {message: 'User not found'};
    }
    if(updatedUserRole.action === 'remove-admin' || updatedUserRole.action === 'unblock'){
      await this.prisma.user.update({
        where: {id: parseInt(updatedUserRole.userId, 10)},
        data: {
          role: 'buyer',
        }
      });
    }
    else if(updatedUserRole.action === 'make-admin'){
      await this.prisma.user.update({
        where: {id: parseInt(updatedUserRole.userId, 10)},
        data: {
          role: 'admin',
        }
      });
    }
    else if(updatedUserRole.action === 'block'){
      await this.prisma.user.update({
        where: {id: parseInt(updatedUserRole.userId, 10)},
        data: {
          role: 'blocked',
        }
      });
    }
    return {message: 'user role changed successfully'};
  }

  
  async allUsers(userId: number){
    const user = await this.prisma.user.findUnique({
      where: {id: userId},
    })
    if(!user || user.role!=='admin'){
      throw new HttpException('User not authorized', HttpStatus.NOT_FOUND);
    }

    return this.prisma.user.findMany({
      where: {id: {not: userId, }, },
      select: {
        id: true,
        name: true, 
        email: true, 
        phone: true, 
        role: true
      }
    });
  }
  
}
