import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { ToasterService} from 'angular2-toaster';
import { ClientService } from './client.service';
import { Client } from '../models/client';

@Component({
    moduleId: module.id,
    selector: 'client-detail',
    templateUrl: 'client-detail.component.html'
})
export class ClientDetailComponent implements OnInit {
    @Input() client: Client;
    @Input() editMode: boolean;
    //private sub: any;
    private show: boolean;
    private text: string;

    constructor(private clientService: ClientService,
        private toastr: ToasterService) { }

    ngOnInit() {
    }

    cancel() {
        this.client = null;
    }

    save() {
        console.log(this.client);
        if (this.client._id) {
            this.clientService.update(this.client)
                .then(() => {
                    this.client = undefined;
                    console.info("client update successfully"); 
                    this.toastr.pop("success", "msg", "Client updated successfully!");
                 })
                .catch((err: any) => console.error(err));
        } else {
            this.clientService.add(this.client)
                .then(() => {
                    this.client = undefined;
                    console.info("client update successfully"); 
                    this.toastr.pop("success", "msg", "Client added successfully"); })
                .catch((err: any) => console.error(err));
        }
    }
}