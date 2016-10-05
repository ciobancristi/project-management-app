import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { DataModule} from '../data/data.module';

import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';
import { routing } from './project.routing';

@NgModule({
    imports: [routing, SharedModule, DataModule],
    declarations: [ProjectDetailComponent, ProjectListComponent],
    providers: []
})

export class ProjectModule { }

