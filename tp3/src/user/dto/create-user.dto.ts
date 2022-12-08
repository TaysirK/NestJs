import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';
export class CreateUserDto {

    @IsString({message:'Username should be of type string!'})
    @IsNotEmpty({message:'Username should not be empty!'})
    @MinLength(3,{message:'Username should be more than 3 characters!'})
    @MaxLength(10,{message:'Username should not be more than 10 characters!'})
    username:string;
   
    @IsNotEmpty({message:'Username should not be empty!'})
    @IsEmail({message:'Format of email should be test@gmail.com'})
    email:string;
    
    @IsNotEmpty({message:'Password should not be empty!'})
    @MinLength(5,{message:'Password should be more than 5 characters!'})
    @MaxLength(20,{message:'Password should not be more than 20 characters!'})
    password:string;
}



