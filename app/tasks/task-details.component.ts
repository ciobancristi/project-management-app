import {Task} from '../models/models';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'task-details',
    templateUrl: 'task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {
    @Input() task: Task;
    @Input() editMode: boolean;
    statuses: string[];
    priorities: string[];

    constructor() { }

    ngOnInit() { }
}