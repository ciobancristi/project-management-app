import { Component, OnInit } from '@angular/core';

import { ToasterService} from 'angular2-toaster';
import { ClientService } from './client.service';
import { Client } from '../models/client';

@Component({
    moduleId: module.id,
    selector: 'client-list',
    templateUrl: 'client-list.component.html'
})
export class ClientListComponent implements OnInit {
    private clients: Client[];
    private selectedClient: Client;
    private editMode: boolean;

    constructor(private clientService: ClientService,
        private toastr: ToasterService) { }

    ngOnInit() {
        this.bindData();
        this.editMode = false;
    }

    bindData() {
        this.clientService.getAll()
            .then((c: Client[]) => {
                this.clients = c;
                console.log("clients:", c);
            })
            .catch((err: any) => { console.error(err); });
    }

    addClient() {
        this.selectedClient = new Client();
        this.editMode = true;
    }

    onSelect(client: Client) {
        this.selectedClient = client;
        this.editMode = false;
    }

    deleteClient(client: Client) {
        this.clientService.delete(client)
            .then((res: any) => {
                console.log("client delted successfully", res);
                this.toastr.pop("success", "msg", "Client deleted successfully!");
                this.selectedClient = undefined;
            })
            .catch((err: any) => console.error(err));
    }
}