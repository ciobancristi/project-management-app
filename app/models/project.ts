import {Entity} from './entity';
import { Task } from './task';

export class Project extends Entity{
    description: string;
    currency: string;
    status: string;
    clientId: string;
    estimation: number;
    revenue: number;
    tasks: Task[]
}