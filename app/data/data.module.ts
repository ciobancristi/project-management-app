import { NgModule } from '@angular/core';

import { ProjectDataService }   from './project-data.service';
import { ClientDataService } from './client-data.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ ProjectDataService, ClientDataService ],
})
export class DataModule { }
