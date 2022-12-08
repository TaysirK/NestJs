import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { addTodoDTO } from './dto/add-toDo.dto';
import { toDo } from './entities/toDoModel';
import { TodoStatusEnum } from './entities/toDoStatus';

@Injectable()
export class ToDoService {
    @Inject('UUID_function') uuid;
    todos: toDo[]=[];
    // *******************//
    getTodos():toDo[]{
        return this.todos;
    }

    // *******************//
    addTodos(newTodo:addTodoDTO):toDo{
        const {name,description} = newTodo;
        const todo={
            id: Math.floor(100000 + Math.random() * 900000),
            name,
            description,
            creationDate: new Date().toLocaleDateString(),
            status: TodoStatusEnum.waiting
        };
        this.todos.push(todo);
        console.log(todo);
        return todo;
    }
    // *******************//
    getTodoById(id:number): toDo{
        const todo = this.todos.find((actualTodo) => actualTodo.id === id);
        if (todo)
            return todo;
        throw new NotFoundException(`Le TODO d'id ${id} n'existe pas!`);
 
    }
    // *******************//
    deleteTodo(id:number){
        const index = this.todos.findIndex((actualTodo) => actualTodo.id === +id);
        if (index>= 0){
               this.todos.splice(index,1);
        }else{
           throw new NotFoundException(`Le TODO d'id ${id} n'existe pas!`)
        }
        return{
           message: `Le TODO d'id ${id} a été supprimer!`,
           count:1
        };
    }
    // *******************//
    updateTodo(id:number,newTodo:Partial<toDo>){
        const todo=this.getTodoById(id);
        todo.name=newTodo.name? newTodo.name : todo.name;
        todo.description=newTodo.description? newTodo.description : todo.description;
        todo.status=newTodo.status? newTodo.status : todo.status;
        return todo ;
    }

}
