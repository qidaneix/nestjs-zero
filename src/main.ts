import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局使用中间件
  // app.use(logger)

  // 全局使用过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 全局管道
  app.useGlobalPipes(new ValidationPipe());

  // 全局守卫
  // app.useGlobalGuards();

  // 设置Swagger文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-zero api document')
    .setDescription('nest starter project api document')
    .setVersion('v1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
