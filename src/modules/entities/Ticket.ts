import { Entity, CreateDateColumn, PrimaryColumn, Column, UpdateDateColumn, ManyToOne } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { User } from "./User";

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

    @ManyToOne(() => User, (user) => user.tickets)
    user: User;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        this.id = uuidV4();
    }
}


export { Ticket };