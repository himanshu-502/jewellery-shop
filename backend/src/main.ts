import { NestFactory } from '@nestjs/core';
// import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  // Increase body size limit for large payloads (e.g., images)
  app.use(bodyParser.json({ limit: '50mb' }));  // Adjust the limit as needed
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('EVJewelTechs API')
    .setDescription('The EagleView Jewellery API')
    .setVersion('1.0')
    .addTag('Test Here')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
