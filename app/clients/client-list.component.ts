import { Component, OnInit } from '@angular/core';

import { ToasterService} from 'angular2-toaster';
import { ClientDataService } from './client-data.service';
import { Client } from '../models/client';

@Component({
    moduleId: module.id,
    selector: 'client-list',
    templateUrl: 'client-list.component.html'
})
export class ClientListComponent implements OnInit {
    private clients: Client[];
    private selectedClient: Client;
    private newClient: Client;

    constructor(private clientService: ClientDataService,
        private toastr: ToasterService) { }

    ngOnInit() {
        this.bindData();
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
        this.newClient = new Client();
    }

    onSelect(client: Client) {
        this.selectedClient = this.selectedClient === client ? undefined : client;
    }

    deleteClient(client: Client) {
        this.clientService.delete(client)
            .then((res: any) => {
                console.log("client delted successfully", res);
                this.toastr.pop("success", "Success", "Client deleted successfully!");
                this.selectedClient = undefined;
            })
            .catch((err: any) => {
                this.toastr.pop("error", "Error", "An error occurred on delete!");
                console.error(err);
            });
    }
}