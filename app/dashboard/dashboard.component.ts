import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [ToasterService]
})
export class DashboardComponent implements OnInit {
    constructor(private toastr: ToasterService) { }

    ngOnInit() { }

    popToast() {
        this.toastr.pop('success', 'MSG 1', 'msg 2')
    }
}