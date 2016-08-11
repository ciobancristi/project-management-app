import { Routes, RouterModule } from '@angular/router';
 
export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'projects', loadChildren: 'app/projects/project.module' },
    { path: 'clients', loadChildren: 'app/client/client.module' }
]

export const routing = RouterModule.forRoot(routes);