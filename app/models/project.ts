import {Status} from './status';
import { Currency } from "./currency";
import { Task } from './task';
import { NameValueItem } from './nameValueItem';

export class Project extends NameValueItem{
    created: Date;
    finished: boolean;
    description: string;
    estimation: number;
    revenue: number;
    currency: Currency;
    status: Status;
    tasks: Task[]
}