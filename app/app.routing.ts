import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent} from './clients/client.component';
 
export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'projects', loadChildren: 'app/projects/project.module' },
    // { path: 'clients', component: ClientComponent},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}
]

export const routing = RouterModule.forRoot(routes);