import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoModule } from './to-do/to-do.module';
import { CommonModuleModule } from './common-module/common-module.module';
import { SkillsController } from './skills/skills.controller';

@Module({
  imports: [ToDoModule, CommonModuleModule, 
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })],
  controllers: [AppController, SkillsController],
  providers: [AppService],
})
export class AppModule {}
