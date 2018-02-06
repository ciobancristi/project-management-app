import { Status } from "app/models/status";

export class Task {
    id: number;
    name: string;
    description: string;
    created: Date;
    modified: Date;
    status: Status;
    priority: string;
}