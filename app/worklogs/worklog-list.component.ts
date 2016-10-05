import {WorkLog} from '../models/worklog';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'worklog-list',
    templateUrl: 'worklog-list.component.html'
})
export class WorklogListComponent implements OnInit {
    private worklogs: WorkLog[];
    constructor() { }

    ngOnInit() { }
}