import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { ClientDataService } from './client-data.service';
import { ClientComponent } from './client.component';
import { ClientListComponent} from './client-list.component';
import { ClientDetailComponent } from './client-detail.component';
import { routing } from './client.routing';

@NgModule({
    imports: [routing, SharedModule],
    declarations: [ClientComponent, ClientListComponent, ClientDetailComponent],
    providers: [ClientDataService]
})

export class ClientModule { }

