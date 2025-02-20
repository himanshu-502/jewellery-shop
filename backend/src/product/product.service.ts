import { Injectable, ForbiddenException, HttpStatus, HttpException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { JwtService } from '@nestjs/jwt';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService, private jwtService: JwtService, private cloudinaryService: CloudinaryService) {}

  async fetchProducts() {
    return this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        categories: {
          select: { category: { select: { id: true, name: true } } },
        },
        images: true, // Images stored as bytes
      },
      orderBy: { id: 'asc' },
    });
  }

  async fetchCategories() {
    return this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
        imageBanner: true, // Stored as bytes
        products: { select: { productId: true } },
      },
    });
  }

  async fetchReviews() {
    return this.prisma.review.findMany({
      select: {
        productId: true,
        rating: true,
        comment: true,
        user: { select: { name: true } },
      },
    });
  }

  async addProduct(userId: number, productDetails: any, files:Express.Multer.File[]) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (user?.role !== 'admin') throw new ForbiddenException('Access denied');
    
    let imageUrls: string[]=[];
    if(files){
      imageUrls = await Promise.all(files.map(file => this.cloudinaryService.uploadImage(file)));
    }
    let categoryIds: number[] = [];
    if (productDetails.categories) {
      try {
        categoryIds = JSON.parse(productDetails.categories); // Convert string to array
        if (!Array.isArray(categoryIds)) throw new Error('categories must be an array');
      } catch (error) {
        throw new BadRequestException('Invalid categories format');
      }
    }
    await this.prisma.product.create({
      data: {
        name: productDetails.name,
        description:productDetails?.description || null,
        price: parseFloat(productDetails.price),
        stock: parseInt(productDetails.stock, 10),
        images: imageUrls,
        categories: {
          create: categoryIds.map((categoryId: number) => ({
            category: { connect: { id: categoryId } },
          })),
        },
      },
    });
    return { message: 'Product added successfully' };
  }

  async updateProduct(userId: number, updatedProductDetails: any, files: Express.Multer.File[]) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (user?.role !== 'admin') throw new ForbiddenException('Access denied');

    let imageUrls: string[]=[];
    if(files){
      imageUrls = await Promise.all(files.map(file => this.cloudinaryService.uploadImage(file)));
    }
    
    let images = updatedProductDetails.imageUrls ? JSON.parse(updatedProductDetails.imageUrls) : [];
    images = [...images, ...imageUrls];

    let categoryIds: number[] = [];
    if (updatedProductDetails.categories) {
      try {
        categoryIds = JSON.parse(updatedProductDetails.categories); 
        if (!Array.isArray(categoryIds)) throw new Error('categories must be an array');
      } catch (error) {
        throw new BadRequestException('Invalid categories format');
      }
    }

    await this.prisma.product.update({
      where: { id: parseInt(updatedProductDetails.id, 10) },
      data: {
        name: updatedProductDetails.name,
        description: updatedProductDetails.description,
        price: parseFloat(updatedProductDetails.price),
        stock: parseInt(updatedProductDetails.stock, 10),
        images: images,
        categories: {
          deleteMany: {}, 
          create: categoryIds.map(categoryId => ({
            category: { connect: { id: categoryId } },
          })), // 
        },
      },
    });
    return { message: 'Product details updated successfully' };
  }

  async addCategory(userId: number, categoryDetails: any, file?: Express.Multer.File) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (user?.role !== 'admin') throw new ForbiddenException('Access denied');

    let imageUrl='';
    if(file){
      imageUrl = await this.cloudinaryService.uploadImage(file);
    }

    await this.prisma.category.create({ data: {
      name: categoryDetails.name, 
      imageBanner: imageUrl,
    }});
    return { message: 'New category added successfully' };
  }

  async updateCategory(userId: number, updatedCategoryDetails: any, file?: Express.Multer.File) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (user?.role !== 'admin') throw new ForbiddenException('Access denied');
    const category = await this.prisma.category.findUnique({ where: { id: parseInt(updatedCategoryDetails.id, 10) } });
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
  
    let imageUrl = category.imageBanner; 
  
    if (file) {
      imageUrl = await this.cloudinaryService.uploadImage(file);
    }
  
    await this.prisma.category.update({
      where: { id: parseInt(updatedCategoryDetails.id, 10) },
      data: {
        name: updatedCategoryDetails.name,
        imageBanner: imageUrl,
      },
    });
  
    return { message: 'Category details updated successfully' };
  }
  

  async postReview(userId: number, reviewDetails: any) {
    const existingReview = await this.prisma.review.findFirst({
      where: { userId: userId, productId: parseInt(reviewDetails.productId,10) },
    });

    if (existingReview) {
      await this.prisma.review.update({
        where: { id: existingReview.id },
        data: {
          rating: parseInt(reviewDetails.rating, 10),
          comment: reviewDetails.comment,
        },
      });
      return { message: 'Your review is updated successfully' };
    } else {
      await this.prisma.review.create({
        data: { 
          userId: userId, 
          productId: parseInt(reviewDetails.productId,10),
          rating: parseInt(reviewDetails.rating, 10),
          comment: reviewDetails.comment,
        },
      });
      return { message: 'Your review is successfully posted' };
    }
  }
}
