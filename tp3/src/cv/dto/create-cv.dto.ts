import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max} from 'class-validator';

export class CreateCvDto {

    @IsString({message:'Name should be of type string!'})
    @IsNotEmpty({message:'Name should not be empty!'})
    @MinLength(3,{message:'Name should be more than 3 characters!'})
    @MaxLength(10,{message:'Name should not be more than 10 characters!'})
    name:string;
    
    @IsString({message:'FirstName should be of type string!'})
    @IsNotEmpty({message:'FirstName should not be empty!'})
    @MinLength(3,{message:'FirstName should be more than 3 characters!'})
    @MaxLength(10,{message:'FirstName should not be more than 10 characters!'})
    firstname:string;
    
    @IsNumber()
    @IsNotEmpty({message:'Age should not be empty!'})
    age:number;
   
    @IsNumber()
    @Min(10000000,{message:'CIN should be 8 digits!'}) 
    @Max(99999999,{message:'CIN should be 8 digits!'})
    @IsNotEmpty({message:'CIN should not be empty!'})
    cin:number;

    @IsString({message:'Job should be of type string!'})
    @IsNotEmpty({message:'Job should not be empty!'})
    @MinLength(3,{message:'Job should be more than 3 characters!'})
    @MaxLength(10,{message:'Job should not be more than 10 characters!'})
    job:string;
   
    @IsString({message:'Path should be of type string!'})
    @IsNotEmpty({message:'Path should not be empty!'})
    path:string;
}
