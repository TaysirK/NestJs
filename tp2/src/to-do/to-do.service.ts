import { Injectable,Inject} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addTodoDTO } from './dto/add-toDo.dto';
import { updateTodoDTO } from './dto/update-toDo.dto';
import { todoEntity } from './entities/todo.entity';
import { toDo } from './entities/toDoModel';
import { TodoStatusEnum } from './entities/toDoStatus';
import { NotFoundException } from '@nestjs/common/exceptions';


@Injectable()
export class ToDoService {
    constructor(
        @InjectRepository(todoEntity)
        private todoRepository: Repository<todoEntity>
    ){}

    // addTODO2
    async addTodo(todo: addTodoDTO): Promise<todoEntity> {
        return await this.todoRepository.save(todo);
    }
    //updateqtodo2
    async upTODO(todo: updateTodoDTO,id :number ): Promise<todoEntity>{
        const newTodo= await this.todoRepository.preload({
            id,
            ...todo
        });
        if (! newTodo){
            throw new NotFoundException(`Le Todo d'ID ${id} n'existe pas!`);
        }
        return await this.todoRepository.save(newTodo);
    }
    //deleteTODO2
    async removeTodo(id:number){
        const todoRemove = await this.todoRepository.findOneBy({id});
        if (! todoRemove ){
            throw new NotFoundException(`Le Todo d'ID ${id} n'existe pas!`);
        }
        return await this.todoRepository.remove(todoRemove);
    }
    //deletemethod2TODO2
    async delTodo(id:number){
        return await this.todoRepository.delete(id);
    }
    //SoftDeleteTODO
    async SoftDeleteTODO(id:number){
        return await this.todoRepository.softDelete(id);
    }
    async restoreTODO(id:number){
        return await this.todoRepository.restore(id);
    }


    //********************************
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


    //Querybuilder
    async statsTodoNumberByStatus(){
        return await this.todoRepository.createQueryBuilder('todo')
        .select('todo.status, COUNT(todo.id) as NumberTodos')
        .groupBy("todo.status")
        .getRawMany();
        //console.log(qb.getSql());
         

    }

    async getAllTodos():Promise<todoEntity[]>{
        return await this.todoRepository.find();
    }



}
