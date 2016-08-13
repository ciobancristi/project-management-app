import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';

export const routes: Routes = [
    { path: '', component: ClientComponent },
];

export const routing = RouterModule.forChild(routes);