import { User } from "../entities";

interface ICreateEventDTO {
    name: string
    locality: string;
    happens_at: Date;
    userId?: string;
    user?: User;
    id?: string;
}

export { ICreateEventDTO };
