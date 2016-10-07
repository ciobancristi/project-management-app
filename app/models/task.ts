import {Entity} from './entity';

export class Task extends Entity{
    estimation: number;
    loggedHours: number;
    status: string;
    priority: string;
    description: string;
    comments: string;
    workLogs: string[];
    finished: Date;
    deadline: Date;
};
