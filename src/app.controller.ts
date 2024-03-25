import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Request } from 'express';

class Student {
  readonly name: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  // 注意 post 方法默认解析的参数是 json,不是form_data
  @Post('/post')
  @UseInterceptors(FileInterceptor('name'))
  postHello(@Body() obj: Student): string {
    console.log(obj);

    return this.appService.postHello(obj);
  }

  @Get('/world')
  getWorld(@Query('name') name: string): string {
    return this.appService.getWorld(name);
  }

  // 上传文件
  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // 以project 路径为主
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now();
          // + '-' + Math.round(Math.random() * 1e9);
          const filename = `${uniqueSuffix}-${file.originalname}`;
          callback(null, filename);
        },
      }),
    }),
  ) // 注意 字段 file 命名
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    // console.log(file);
    return {
      message: 'File uploaded successfully',
      file: file.filename,
    };
  }
}
