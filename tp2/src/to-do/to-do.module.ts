import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todoEntity } from './entities/todo.entity';
import { ToDoController } from './to-do.controller';
import { ToDoService } from './to-do.service';

@Module({
  imports:[TypeOrmModule.forFeature([todoEntity])],
  controllers: [ToDoController],
  providers: [ToDoService]
})
export class ToDoModule {}
