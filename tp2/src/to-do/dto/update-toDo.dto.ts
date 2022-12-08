import { TodoStatusEnum } from "../entities/toDoStatus";
import { PartialType } from '@nestjs/mapped-types';
import {addTodoDTO} from './add-toDo.dto';
import { ErrorManagement } from 'src/common-module/errorMessages';
import { IsNotEmpty, IsString, MaxLength, MinLength, IsEnum , IsOptional} from 'class-validator';

export class updateTodoDTO extends PartialType(addTodoDTO){
    @IsOptional()
    @IsString({message:ErrorManagement.notString()})
    //@IsNotEmpty({message:ErrorManagement.chaineVide()})
    @MinLength(3,{message:ErrorManagement.tailleMin()})
    @MaxLength(10,{message:ErrorManagement.tailleMax()})
    name?:string;


    @IsOptional()
    @IsString({message:ErrorManagement.notString()})
    //@IsNotEmpty({message:ErrorManagement.chaineVide()})
    @MinLength(10,{message:ErrorManagement.tailleMin()})
    description?:string;


    @IsOptional()
    @IsEnum(TodoStatusEnum,{message:ErrorManagement.notenum()})
    status?:TodoStatusEnum;
}
