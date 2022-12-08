import { IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';
import { ErrorManagement } from 'src/common-module/errorMessages';

export class addTodoDTO{
    @IsString({message:ErrorManagement.notString()})
    @IsNotEmpty({message:ErrorManagement.chaineVide()})
    @MinLength(3,{message:ErrorManagement.tailleMin()})
    @MaxLength(10,{message:ErrorManagement.tailleMax()})
    name:string;

    @IsString({message:ErrorManagement.notString()})
    @IsNotEmpty({message:ErrorManagement.chaineVide()})
    @MinLength(10,{message:'taille NON respectée'})
    description:string;

    
}