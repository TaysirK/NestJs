import { PrimaryGeneratedColumn,Column,Entity,ManyToMany } from "typeorm";
import { timestampsEntity } from "../../Generics/timestamps.entity";
import { CvEntity } from "../../cv/entities/cv.entity";

@Entity('skill')
export class SkillEntity extends timestampsEntity {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    designation:string;
    @ManyToMany(
        type=>CvEntity,
        (cv)=>cv.skills,
        {cascade:true}
    )
    cvs: CvEntity[];
}
