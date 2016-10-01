import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [ToasterService]
})
export class DashboardComponent implements OnInit {
    private options;
    constructor(private toastr: ToasterService) { }

    ngOnInit() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129],
            }]
        };
     }

    popToast() {
        this.toastr.pop('success', 'MSG 1', 'msg 2')
    }
}