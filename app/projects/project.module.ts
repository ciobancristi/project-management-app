import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { ProjectDataService } from '../data/project-data.service';
import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';
import { routing } from './project.routing';

@NgModule({
    imports: [routing, SharedModule],
    declarations: [ProjectDetailComponent, ProjectListComponent],
    providers: [ProjectDataService]
})

export class ProjectModule { }

