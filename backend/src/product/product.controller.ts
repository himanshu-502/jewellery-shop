import { Controller, Get, Post, Patch, Body, Req, UseGuards, UploadedFile, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '..//auth/guards/jwt-auth.guard';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';


@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('fetch-products')
  async fetchProducts() {
    return await this.productService.fetchProducts();
  }

  @Get('fetch-categories')
  async fetchCategories() {
    return await this.productService.fetchCategories();
  }

  @Get('fetch-reviews')
  async fetchReviews() {
    return await this.productService.fetchReviews();
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('images'))
  @Post('add-product')
  async addProduct(@Req() req, @Body() productDetails: any, @UploadedFiles() files: Express.Multer.File[]) {
    return await this.productService.addProduct(req.user.userId, productDetails, files);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('newImages'))
  @Patch('update-product')
  async updateProduct(@Req() req, @Body() updatedProductDetails: any, @UploadedFiles() files: Express.Multer.File[]) {
    return await this.productService.updateProduct(req.user.userId, updatedProductDetails, files);
  }

  @UseGuards(JwtAuthGuard)
  @Post('add-category')
  @UseInterceptors(FileInterceptor('imageBanner'))
  async addCategory(@Req() req, @Body() categoryDetails: any, @UploadedFile() file?: Express.Multer.File) {
    return await this.productService.addCategory(req.user.userId, categoryDetails, file);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update-category')
  @UseInterceptors(FileInterceptor('imageBanner')) 
  async updateCategory(@Req() req, @Body() updatedCategoryDetails: any, @UploadedFile() file?: Express.Multer.File) {
    return await this.productService.updateCategory(req.user.userId, updatedCategoryDetails, file);
  }

  @UseGuards(JwtAuthGuard)
  @Post('post-review')
  async postReview(@Req() req, @Body() reviewDetails: any) {
    return await this.productService.postReview(req.user.userId, reviewDetails);
  }
}
