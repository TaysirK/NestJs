import {NestFactory} from '@nestjs/core';
import { AppModule } from '../app.module';
import { CvService } from '../cv/cv.service';
import { CvEntity } from '../cv/entities/cv.entity';
import { SkillEntity } from '../skill/entities/skill.entity';
import { SkillService } from '../skill/skill.service';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { randEmail, randFirstName, randJobTitle, randLastName, randNumber, randPassword, randSkill, randUser, randUserName } from '@ngneat/falso';



async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    
    const cvService = app.get(CvService);
    const userService = app.get(UserService);
    const skillService = app.get(SkillService);

    for(let i=0; i<10;i++){
        const newCv =new CvEntity();
        const newUser=new UserEntity();
        const newSkill=new SkillEntity();
        
        newCv.firstname = randFirstName();
        newCv.name = randLastName();
        newCv.job = randJobTitle();
        newCv.cin = randNumber();
        newCv.age = randNumber();
        newCv.path='';
        newCv.user=newUser;
        
        newUser.username=randUserName();
        newUser.password=randPassword();
        newUser.email=randEmail();

        newSkill.designation=randSkill();
        newSkill.cvs=[newCv]

        await skillService.addSkill(newSkill);
        await userService.addUser(newUser)
        await cvService.addCV(newCv);
    }
    
    await app.close();
    }
    bootstrap();