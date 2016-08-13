import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from './project.service';
import { Project, Status, Currency } from '../models/models'

@Component({
    moduleId: module.id,
    selector: 'project-detail',
    templateUrl: 'project-detail.component.html',
    providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    private sub: any;
    private project: Project;
    private statuses: Status[];
    private currencies: Currency[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService) { }

    ngOnInit() {
        let id: number;44

        
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.projectService.get(id)
                    .then((project: Project) => { this.project = project; console.log(project) })
                    .catch((err: any) => console.error(err));
            } else {
                this.project = new Project();
            }
        });
        //this.service.getStatuses().then(s => this.statuses = s);
        //this.service.getMonetaryUnits().then(m => this.currencies = m);

        //TODO: get data from service
        this.statuses = [
            {
                _id: '1', name: 'In Progress'
            },
            {
                _id: '2', name: 'Finished'
            }
        ];
        this.currencies = [
            {
                _id: '1', name: 'USD'
            },
            {
                _id: '2', name: 'RON'
            },
            {
                _id: '3', name: 'EUR'
            }
        ];
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    isNewProject() {
        return !this.project._id;
    }

    goToProjects() {
        this.router.navigate(['/projects']);
    }

    addProject() {
        this.projectService.add(this.project)
            .then((res: any) => { console.log(res) }
            , (err: any) => { console.error(err); })
    }

    private isValidProject(project: Project) {
        return project;
    }
}