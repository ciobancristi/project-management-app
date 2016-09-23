import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ClientComponent },
]);