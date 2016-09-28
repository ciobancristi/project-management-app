import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { ProjectService } from './project.service';
import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';
import { routing } from './project.routing';

@NgModule({
    imports: [routing, SharedModule],
    declarations: [ProjectDetailComponent, ProjectListComponent],
    providers: [ProjectService]
})

export class ProjectModule { }

