import {Task} from '../models/models';
import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'task-details',
    templateUrl: 'task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {
    @Input() task: Task;

    constructor() { }

    ngOnInit() { }
}