import { Status } from './status';
import { Priority } from './priority';
import { NameValueItem } from './nameValueItem';

export class Task extends NameValueItem{
    description: string;
    comments: string;
    estimation: number;
    duration: number;
    created: string;
    started: string;
    finished: string;
    deadline: string;
    status: Status;
    priority: Priority;
};
