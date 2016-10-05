import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { ChartModule } from 'angular2-highcharts';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

@NgModule({
    imports: [routing, SharedModule, ChartModule],
    declarations: [DashboardComponent]
})

export class DashboardModule {
}