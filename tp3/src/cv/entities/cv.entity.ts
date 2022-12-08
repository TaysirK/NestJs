import { PrimaryGeneratedColumn,Column,Entity,ManyToOne,ManyToMany,JoinTable } from "typeorm";
import { timestampsEntity } from "../../Generics/timestamps.entity";
import { Type } from "class-transformer";
import { UserEntity } from "../../user/entities/user.entity";
import { SkillEntity } from "../../skill/entities/skill.entity";

@Entity('cv')
export class CvEntity extends timestampsEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    firstname:string;
    @Column()
    age:number;
    @Column()
    cin:number;
    @Column()
    job:string;
    @Column()
    path:string;
    @ManyToOne(
        Type => UserEntity,
        (user)=>user.cvs
    )

    user:UserEntity;
    @ManyToMany(
        type=>SkillEntity,
        (skill)=>skill.cvs,
        {eager:true}
    )
    @JoinTable()
    skills:SkillEntity[];

}
