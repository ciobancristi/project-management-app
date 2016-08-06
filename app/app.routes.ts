import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { projectRoutes } from "./projects/projects";
import { ClientsComponent } from "./clients/clients";
 
const routes: RouterConfig = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
    ...projectRoutes,
    { path: 'clients', component: ClientsComponent },
]

export const appRouterProviders = [
    provideRouter(routes)
]