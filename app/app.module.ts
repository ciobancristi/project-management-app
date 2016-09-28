import * as Raven from 'raven-js';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

Raven
    .config('https://b2d58d9faee947548dd644f0fa1e374a@sentry.io/101859')
    .install();

class RavenErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        Raven.captureException(err.originalError);
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        routing,
    ],
    declarations: [AppComponent],
    providers: [{ provide: ErrorHandler, useClass: RavenErrorHandler }],
    bootstrap: [AppComponent]
})

export class AppModule { }