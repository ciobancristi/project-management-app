import { Task } from './task';
import { NameValueItem } from './nameValueItem';

export class Project extends NameValueItem{
    description: string;
    currency: string;
    status: string;
    client: string;
    estimation: number;
    revenue: number;
    created: Date;
    edited: Date;
    tasks: Task[]
}