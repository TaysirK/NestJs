import { Body, Controller, Post } from '@nestjs/common';
import { UpperandFusionPipe } from 'src/pipes/upperand-fusion.pipe';

@Controller('skills')
export class SkillsController {

    @Post()
    addSkills(
        @Body(UpperandFusionPipe) data
    ){
        console.log(data);
        return data; 
    }
}
