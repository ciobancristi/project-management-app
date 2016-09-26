import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';

export const routes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: ':id', component: ProjectDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);