import { Entity, CreateDateColumn, PrimaryColumn, Column, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

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

    constructor() {
        this.id = uuidV4();
    }
}


export { Event };