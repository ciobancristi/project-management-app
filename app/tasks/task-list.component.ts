import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../models/models';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html'
})
export class TaskListComponent implements OnInit {
    @Input() private tasks: any[];

    constructor() { }

    ngOnInit() { 
        this.tasks = [
            { name: "1st task", status: "In progress", description: "Lorem ipsum ssssss"},
            { name: "2nd task", status: "In progress", description: "Lorem ipsum ssssss"},
            { name: "3rd task", status: "In progress", description: "Lorem ipsum ssssss"},
            { name: "4th task", status: "In progress", description: "Lorem ipsum ssssss"}
        ]
    }
}