import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'

function MiddleWareAll(req,res,next){
console.log(req.originalUrl);

next()

}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(MiddleWareAll);
  await app.listen(8000);
}
bootstrap();
