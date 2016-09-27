import { NameValueItem } from './nameValueItem';

export class Task extends NameValueItem {
    estimation: number;
    duration: number;
    status: string;
    priority: string;
    description: string;
    comments: string;
    created: Date;
    started: Date;
    finished: Date;
    deadline: Date;
};
