import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { routing } from './admin.routing';

import { AdminComponent } from './admin.component';

@NgModule({
    imports: [ routing, SharedModule ],
    declarations: [ AdminComponent ],
    exports: [ AdminComponent ]
})

export class AdminModule {}