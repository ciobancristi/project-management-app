import {Task} from '../models/models';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap/components/modal';

@Component({
    moduleId: module.id,
    selector: 'task-upsert',
    templateUrl: 'task-upsert.component.html'
})
export class TaskUpsertComponent implements OnInit {
    @ViewChild('taskModal') public taskModal: ModalDirective;
    @Output() taskModified = new EventEmitter();
    @Input() task: Task;
    @Input() buttonText: string;
    @Input() heading: string;
    private statuses: string[];
    private priorities: string[];
    private taskToModify: Task;

    constructor() { }

    ngOnInit() {
        //TODO: get data from service
        this.statuses = ['Active', 'In Progress', 'Finished'];
        this.priorities = ['Critical', 'High', 'Normal', 'Low'];

    }

    showModal(): void {
        this.taskToModify = Object.assign({}, this.task);
        this.taskModal.show();
    }

    hideModal(): void {
        this.taskModal.hide();
    }

    cancel() {
        this.hideModal();
    }

    //todo: check deadline date
    save() {
        this.taskModified.emit(this.taskToModify);
        this.hideModal();
    }
}