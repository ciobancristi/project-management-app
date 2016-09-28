import { Task } from './task';

export class Project {
    _id: string;
    name: string;
    description: string;
    currency: string;
    status: string;
    clientId: string;
    estimation: number;
    revenue: number;
    created: Date;
    edited: Date;
    tasks: Task[]
}