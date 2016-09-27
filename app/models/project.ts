import { Task } from './task';
import { NameValueItem } from './nameValueItem';

export class Project extends NameValueItem{
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