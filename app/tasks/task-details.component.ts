import {Task} from '../models/models';
import {Component, Input, OnInit} from '@angular/core';

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

    ngOnInit() {
        //TODO: get data from service
        this.statuses = ['In Progress', 'Finished'];
        this.priorities = ['Critical', 'High', 'Normal', 'Low'];
    }

    //TODO: add selected deadline validation
    addTask(){
        
    }

    cancel(){
        this.task = undefined;
    }
}