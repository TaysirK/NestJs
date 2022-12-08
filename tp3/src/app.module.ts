import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'tp3',
    //entities: ["dist/**/*.entity{.ts,.js}"],
    autoLoadEntities:true,
    synchronize: true,
  }), CvModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
