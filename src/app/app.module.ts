import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from 'app/directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent} from './components/projects/projects.component';
import { ProjectService } from 'app/providers/project.service';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'app/mock/in-memory-data.service';
import { MaterialModule } from 'app/shared/material.module';
import { ProjectEditDialogComponent } from './components/project-edit-dialog/project-edit-dialog.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { DraggableExampleComponent } from './components/draggable-example/draggable-example.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectEditDialogComponent,
    ProjectEditDialogComponent,
    TaskTableComponent,
    TaskDialogComponent,
    DraggableExampleComponent
  ],
  entryComponents:[
    ProjectEditDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MaterialModule,
    NgDragDropModule.forRoot()
  ],
  providers: [ElectronService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
