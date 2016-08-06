import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockService } from '../mock.service';
import { Project, Status, MonetaryUnit } from '../models/models'

@Component({
    moduleId: module.id,
    selector: 'project-detail',
    templateUrl: 'project-detail.component.html',
    providers: [MockService]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    private sub: any;
    private project: Project;
    private statuses: Status[];
    private currencies: MonetaryUnit[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MockService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.service.getProject(id)
                .then(p => this.project = p);
            this.service.getStatuses().then(s => this.statuses = s);
            this.service.getMonetaryUnits().then(m => this.currencies = m);
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}