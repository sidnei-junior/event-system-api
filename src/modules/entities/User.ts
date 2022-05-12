import { Entity, CreateDateColumn, PrimaryColumn, Column } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

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

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        this.id = uuidV4();
        this.is_admin = false
    }
}


export { User };