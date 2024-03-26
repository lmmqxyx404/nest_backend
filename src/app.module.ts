import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
// import { HeroController } from './hero/hero.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [HeroModule, TasksModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
