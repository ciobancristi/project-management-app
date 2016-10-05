import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { ChartModule } from 'angular2-highcharts';
import { TaskModule} from '../tasks/task.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

@NgModule({
    imports: [routing, SharedModule, ChartModule, TaskModule],
    declarations: [DashboardComponent]
})

export class DashboardModule {
}