import { Entity, CreateDateColumn, PrimaryColumn, Column, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('tickets')
class Ticket {
    
    @PrimaryColumn()
    id: string;

    @Column()
    number: number;

    @Column()
    category: string;
    
    @Column()
    sale_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        this.id = uuidV4();
    }
}


export { Ticket };