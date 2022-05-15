import { Entity, CreateDateColumn, PrimaryColumn, Column, UpdateDateColumn, ManyToOne } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { User } from "./User";

@Entity('events')
class Event {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    locality: string;

    @Column()
    happens_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User, (user) => user.events)
    user: User;

    constructor() {
        this.id = uuidV4();
    }
}


export { Event };