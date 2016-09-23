import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: AdminComponent }
]);