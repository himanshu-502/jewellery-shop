import { Controller, Get, Patch, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import path from 'path';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Fetch user profile (protected by JwtAuthGuard)
  @UseGuards(JwtAuthGuard)  
  @Get('profile')
  async getProfile(@Req() req) {
    return await this.usersService.getProfile(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)  
  @Patch('update-profile')
  async updateUser(@Req() req, @Body() updateData) {
    return await this.usersService.updateProfile(req.user.userId, updateData);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update-password')
  async updatePassword(@Req() req, @Body() updatePassword) {
    return await this.usersService.updatePassword(req.user.userId, updatePassword.oldPassword, updatePassword.newPassword);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update-role')
  async updateUserRole(@Req() req, @Body() updatedUserRole){
    return await this.usersService.updateUserRole(req.user.userId, updatedUserRole);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all-users')
  async allUsers(@Req() req){
    return await this.usersService.allUsers(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update-address')
  async updateAddress(@Req() req, @Body() updateAddress){
    return await this.usersService.updateAddress(req.user.userId, updateAddress.newAddresses);
  }

  @UseGuards(JwtAuthGuard)
  @Get('myreviews')
  async myReviews(@Req() req) {
    return await this.usersService.myReviews(req.user.userId);
  }

}
