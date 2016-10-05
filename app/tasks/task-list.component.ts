import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../models/models';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html'
})
export class TaskListComponent implements OnInit {
    @Input() private tasks: any[];
    private newTask: Task;

    constructor() { }

    ngOnInit() { 
    }

    addTask(){
        this.newTask = new Task;
    }
}