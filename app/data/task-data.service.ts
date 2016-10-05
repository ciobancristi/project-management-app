import { Injectable } from '@angular/core';
import { Repository } from './repository';

@Injectable()
export class TaskDataService extends Repository{

    constructor() { 
        super("tasks", "task");
    }
}