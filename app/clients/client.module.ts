import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DataModule } from '../data/data.module';

import { ProjectDataService } from '../data/project-data.service';
import { ClientDataService } from '../data/client-data.service';
import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list.component';
import { ClientDetailComponent } from './client-detail.component';
import { routing } from './client.routing';

@NgModule({
    imports: [routing, SharedModule, DataModule],
    declarations: [ClientComponent, ClientListComponent, ClientDetailComponent],
    providers: []
})

export class ClientModule { }

