import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { ProjectDataService } from '../projects/project-data.service';
import { ClientDataService } from './client-data.service';
import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list.component';
import { ClientDetailComponent } from './client-detail.component';
import { routing } from './client.routing';

@NgModule({
    imports: [routing, SharedModule],
    declarations: [ClientComponent, ClientListComponent, ClientDetailComponent],
    providers: [ClientDataService, ProjectDataService]
})

export class ClientModule { }

