import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from 'app/components/project-detail/project-detail.component';
import { DraggableExampleComponent } from 'app/components/draggable-example/draggable-example.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'project/:id', 
        component: ProjectDetailComponent
    },
    {
        path: 'drag', 
        component: DraggableExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
