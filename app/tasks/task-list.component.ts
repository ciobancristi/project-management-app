import {TaskDataService} from '../data/task-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../models/models';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html'
})
export class TaskListComponent implements OnInit {
    @Input() tasks: any[];
    @Output() taskModifiedEvent = new EventEmitter();
    private newTask: Task;
    private selectedTask: any;
    private editMode: boolean;

    constructor() { }

    ngOnInit() {

    }

    addTask() {
        this.newTask = new Task;
        this.editMode = false;
    }

    taskModified(newTask: Task) {
        this.tasks.push(newTask);
        this.taskModifiedEvent.emit();
    }

    editTask(task: any) {
        task.edit = true;
    }

    onSelect(task: any) {
        this.selectedTask = task;
    }
}