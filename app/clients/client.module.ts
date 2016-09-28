import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { ClientService } from './client.service';
import { ClientComponent } from './client.component';
import { ClientListComponent} from './client-list.component';
import { ClientDetailComponent } from './client-detail.component';
import { routing } from './client.routing';

@NgModule({
    imports: [routing, SharedModule],
    declarations: [ClientComponent, ClientListComponent, ClientDetailComponent],
    providers: [ClientService]
})

export class ClientModule { }

