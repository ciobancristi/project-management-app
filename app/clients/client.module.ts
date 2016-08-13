import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { routing } from './client.routing';

import { ClientComponent } from './client.component';

@NgModule({
    imports: [ routing, SharedModule ],
    declarations: [ ClientComponent ],
})

export default class ClientModule {}

