import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, RequestTimeoutException } from '@nestjs/common';
import { toDo } from './entities/toDoModel';
import { v4 as uuidv4 } from 'uuid';
import { TodoStatusEnum } from './entities/toDoStatus';
import { count } from 'console';
import {addTodoDTO} from './dto/add-toDo.dto';
import{updateTodoDTO}from './dto/update-toDo.dto'
import {ToDoService} from './to-do.service';
import { todoEntity } from './entities/todo.entity';
import { Patch } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes';


@Controller('to-do')
export class ToDoController {
    constructor(
        private todoService: ToDoService
    ){}
    todos: toDo[];

    //recuperer la liste des TODOS
    /*@Get()
    getTodos():toDo[]{
        console.log('recuperer la liste des todos');
        return this.todoService.getTodos();
    }*/
    @Get()
    async getTodos():Promise<todoEntity[]>{
        console.log('recuperer la liste des todos');
        return await this.todoService.getAllTodos() ;
    }

     //addTODO2
     @Post()
     async addTodo(
        @Body() addTodoDTO: addTodoDTO
     ): Promise<todoEntity>{
        return await this.todoService.addTodo(addTodoDTO);
     }


     @Get('/stats')
     async statsTodoNumberByStatus(){
      return await this.todoService.statsTodoNumberByStatus();
     }
 
 
     @Delete(':id')
     async delTodo(
        @Param('id', ParseIntPipe) id:number
     ){
        return this.todoService.SoftDeleteTODO(id);
     }

     @Get('recover/:id')
     async recoverTODO(
        @Param('id',ParseIntPipe) id:number
        ){
        return this.todoService.restoreTODO(id);
     }
        //recuperer un TODO par son ID

      @Get('/:id')
      getTodo(
         @Param('id',ParseIntPipe) id
      ){
         return this.todoService.getTodoById(+id);
      }

     //updateTODO2
     @Patch(':id')
     async upTodo(
        @Body() updateTodoDTO: updateTodoDTO,
        @Param('id',ParseIntPipe) id:number
     ): Promise<todoEntity>{
        return await this.todoService.upTODO(updateTodoDTO,id);
     }
     //Modifier un todo par id


     @Put('/:id')
     modifyTodo(
        @Param('id',ParseIntPipe) id,
        @Body() newTodo: Partial<toDo>
     ){
            return this.todoService.updateTodo(+id,newTodo);
     }

            //Ajouter un TODO
      /*@Post()
      addTodos(
         @Body() newTodo: addTodoDTO
      ):toDo{
         return this.todoService.addTodos(newTodo);
      }*/

      //Supprimer un TODO par son ID
      /*@Delete('/:id')
      deleteTodo(
            @Param('id') id
      ){
               return this.todoService.deleteTodo(+id);
      }*/
           //deleteTODO2
     /*@Delete(':id')
     async removeTodo(
        @Param('id', ParseIntPipe) id:number
     ){
        return this.todoService.removeTodo(id);
     }
     */

    
}
