import {TaskUpsertComponent} from './task-uspert.component';
import {TaskDetailsComponent} from './task-details.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DataModule } from '../data/data.module';
import { TaskListComponent }   from './task-list.component';

@NgModule({
    imports: [SharedModule, DataModule],
    exports: [TaskListComponent],
    declarations: [TaskListComponent, TaskDetailsComponent, TaskUpsertComponent],
    providers: [],
})
export class TaskModule { }
