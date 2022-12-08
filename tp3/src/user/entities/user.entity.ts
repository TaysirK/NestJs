import { PrimaryGeneratedColumn,Column,Entity,OneToMany } from "typeorm";
import { timestampsEntity } from "../../Generics/timestamps.entity";
import { CvEntity } from "../../cv/entities/cv.entity";

@Entity('user')
export class UserEntity extends timestampsEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    username:string;
    @Column()
    email:string;
    @Column({select:false})
    password:string;

    @OneToMany(
        type=>CvEntity,
        (cv)=>cv.user
    )
    cvs:CvEntity[];


}
