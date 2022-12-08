import { timestampsEntity } from "src/Generics/timestamps.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TodoStatusEnum } from './toDoStatus';

@Entity('todo')
export class todoEntity extends timestampsEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length:10})
    name:string;
    @Column()
    description:string;
    @Column()
    creationDate:string;
    @Column({ default: TodoStatusEnum.waiting})
    status:TodoStatusEnum;
}