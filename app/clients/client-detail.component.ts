import { Component, OnInit, OnDestroy, EventEmitter, Input } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { ClientDataService } from '../data/client-data.service';
import { Client, Project } from '../models/models';
import { ProjectDataService } from '../data/project-data.service';

@Component({
    moduleId: module.id,
    selector: 'client-detail',
    templateUrl: 'client-detail.component.html'
})
export class ClientDetailComponent implements OnInit {
    @Input() client: Client;
    projects: Project[];

    constructor(private clientService: ClientDataService,
        private toastr: ToasterService,
        private projectService: ProjectDataService) { }

    ngOnInit() {
        this.projectService.getAll()
            .then((p: Project[]) => {
                this.projects = p;
            })
            .catch((err: any) => { console.error(err); });
    }

    cancel() {
        this.client = null;
    }

    //TODO: optimize to save only on change
    save() {
        if (this.client._id) {
            this.clientService.update(this.client)
                .then((res: any) => {
                    this.client = undefined;
                    console.info("client update successfully", res);
                    this.toastr.pop("success", "Success", "Client updated successfully!");
                })
                .catch((err: any) => {
                    this.toastr.pop("error", "Error", "An error occurred on update!");
                    console.error(err);
                });
        } else {
            this.clientService.add(this.client)
                .then((res: any) => {
                    this.client = undefined;
                    console.info("client update successfully", res);
                    this.toastr.pop("success", "msg", "Client added successfully");
                })
                .catch((err: any) => {
                    this.toastr.pop("error", "Error", "An error occurred on add!");
                    console.error(err);
                });
        }
    }
}