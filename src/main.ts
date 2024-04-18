import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { DocumentBuilder } from '@nestjs/swagger';

function MiddleWareAll(req, res, next) {
  console.log(req.originalUrl);
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  //配置swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('商城API文档') //文档标题
    .setDescription('商城API文档') //文档描述
    .setVersion('1.0') //文档版本
    .addBasicAuth() //鉴权，可以输入token
    .build(); //创建

  await app.startAllMicroservices();
  app.use(cors());
  app.use(MiddleWareAll);
  await app.listen(8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
