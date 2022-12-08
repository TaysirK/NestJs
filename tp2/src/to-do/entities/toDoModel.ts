import { TodoStatusEnum } from './toDoStatus';

export class toDo{
    id:number;
    name:string;
    description:string;
    creationDate:string;
    status:TodoStatusEnum;
}