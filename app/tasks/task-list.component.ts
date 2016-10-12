import {ProjectDataService} from '../data/project-data.service';
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

    constructor(private projectDataService: ProjectDataService){}

    ngOnInit() {
        this.newTask = new Task();
    }

    addTask() {
        this.newTask = new Task;
    }

    taskModified(task: Task) {
        this.taskModifiedEvent.emit(task);
    }

    editTask(task: any) {
        //task.edit = true;
    }

    onSelect(task: any) {
        this.selectedTask = task;
    }
}