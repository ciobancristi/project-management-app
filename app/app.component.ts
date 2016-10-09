import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  //parent elem reference for ng2-bootrstrap modal
  constructor( public viewContainerRef: ViewContainerRef) {}
}