import { Entity, CreateDateColumn, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Event } from "./Event";
import { Ticket } from "./Ticket";

@Entity('users')
class User {
    
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    is_admin: boolean;

    @OneToMany(() => Event, (event) => event.user)
    events: Event[]

    @OneToMany(() => Ticket, (ticket) => ticket.user)
    tickets: Ticket[]

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        this.id = uuidV4();
        this.is_admin = false
    }
}


export { User };