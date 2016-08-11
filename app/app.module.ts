import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { routing }        from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        routing,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }