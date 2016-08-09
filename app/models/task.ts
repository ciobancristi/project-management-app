import { Status } from './status';
import { Priority } from './priority';
import { NameValueItem } from './nameValueItem';

export class Task extends NameValueItem{
    description: string;
    comments: string;
    estimation: number;
    duration: number;
    created: Date;
    started: Date;
    finished: Date;
    deadline: Date;
    status: Status;
    priority: Priority;
};
