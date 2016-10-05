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
    private selectedTask: Task;

    constructor() { }

    ngOnInit() { }

    addTask(){
        this.newTask = new Task;
    }

    taskModified(newTask: Task){
        this.tasks.push(newTask);
        this.taskModifiedEvent.emit();
    }

    editTask(task: any){
        this.selectedTask = task;
    }
}