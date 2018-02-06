import { Task } from "app/models/task";
import { Status } from "app/models/status";

export class Project {
    id: number;
    name: string;
    description: string;
    tasks: Task[];
    created: Date;
    modified: Date;
    isFinished: boolean;
    statuses: Status[];
}