import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signUp(name: string, email: string, password: string, phone: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: { name, email, passwordHash: hashedPassword, phone },
    });

    return { message: 'User registered successfully' };
  }

  async signIn(email: string, password: string) {
    const foundUser = await this.prisma.user.findUnique({ where: { email } });
    if (!foundUser) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const isPasswordValid = await bcrypt.compare(password, foundUser.passwordHash);
    if (!isPasswordValid) throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    const payload = { sub: foundUser.id, email: foundUser.email };
    
    return { token: this.jwtService.sign(payload), message: 'logged in successfully'};
  }
}
