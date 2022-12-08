import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, RequestTimeoutException } from '@nestjs/common';
import { toDo } from './entities/toDoModel';
import { v4 as uuidv4 } from 'uuid';
import { TodoStatusEnum } from './entities/toDoStatus';
import { count } from 'console';
import {addTodoDTO} from './dto/add-toDo.dto';
import {ToDoService} from './to-do.service';

@Controller('to-do')
export class ToDoController {
    constructor(
        private todoService: ToDoService
    ){}
    todos: toDo[];

    //recuperer la liste des TODOS
    @Get()
    getTodos():toDo[]{
        console.log('recuperer la liste des todos');
        return this.todoService.getTodos();
    }

    //recuperer un TODO par son ID
    @Get('/:id')
    getTodo(
        @Param('id') id
    ){
        return this.todoService.getTodoById(+id);
    }

    //Ajouter un TODO
    @Post()
    addTodos(
        @Body() newTodo: addTodoDTO
    ):toDo{
        return this.todoService.addTodos(newTodo);
    }

     //Supprimer un TODO par son ID
     @Delete('/:id')
     deleteTodo(
         @Param('id') id
     ){
            return this.todoService.deleteTodo(+id);
     }
     //Modifier un todo par id
     @Put('/:id')
     modifyTodo(
        @Param('id') id,
        @Body() newTodo: Partial<toDo>
     ){
            return this.todoService.updateTodo(+id,newTodo);
     }
}
