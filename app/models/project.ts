import {Status} from './status';
import { MonetaryUnit } from "./monetaryUnit";
import { Task } from './task';
import { NameValueItem } from './nameValueItem';

export class Project extends NameValueItem{
    created: Date;
    finished: boolean;
    description: string;
    estimation: number;
    revenue: number;
    currency: MonetaryUnit;
    status: Status;
    tasks: Task[]
}