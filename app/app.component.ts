import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectService } from './projects/project.service';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls:['app/app.component.css'],
  providers: [
    ProjectService
  ]
})

export class AppComponent { }