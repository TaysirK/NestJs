import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min,Max} from 'class-validator';

export class CreateSkillDto {
    
    @IsString({message:'Designation should be of type string!'})
    @IsNotEmpty({message:'Designation should not be empty!'})
    @MinLength(3,{message:'Designation should be more than 3 characters!'})
    @MaxLength(15,{message:'Designation should not be more than 15 characters!'})
    designation:string;
}
