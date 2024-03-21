import {
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/world')
  getWorld(): string {
    return this.appService.getWorld();
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
