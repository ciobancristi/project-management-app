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
    @Output() taskModified = new EventEmitter();
    statuses: string[];
    priorities: string[];

    constructor() { }

    ngOnInit() {
        //TODO: get data from service
        this.statuses = ['In Progress', 'Finished'];
        this.priorities = ['Critical', 'High', 'Normal', 'Low'];
    }

    //TODO: add deadline validation
    save() {
        this.setDates();
        this.taskModified.emit(this.task);
    }

    setDates() {
        let currentDate = new Date();
        if(!this.task.created) this.task.created = currentDate;
        this.task.updated = currentDate;
        this.task.deadline = new Date(this.task.deadline.toString());
    }

    cancel() {
    }
}