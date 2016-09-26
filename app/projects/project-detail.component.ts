import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from './project.service';
import { Project } from '../models/models'

@Component({
    moduleId: module.id,
    selector: 'project-detail',
    templateUrl: 'project-detail.component.html',
    providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    private sub: any;
    private project: Project;
    private statuses: string[];
    private currencies: string[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService) { }

    ngOnInit() {
        let id: number;

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            if (id != 0) {
                this.projectService.get(id)
                    .then((project: Project) => {
                        this.project = project; console.log(project)
                    })
                    .catch((err: any) => console.error(err));
            } else {
                this.project = new Project();
            }
        });

        //TODO: get data from service
        this.statuses = ['In Progress', 'Finished']

        this.currencies = ['USD', 'RON', 'EUR'];
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    isNewProject() {
        return !this.project._id;
    }

    goToProjectList() {
        this.router.navigate(['/projects']);
    }

    addProject() {
        this.projectService.add(this.project)
            .then((res: any) => {
                this.goToProjectList();
            })
            .catch((err: any) => { console.error(err); });
    }

    updateProject() {
        this.projectService.update(this.project)
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => { console.error(err); });
    }

    deleteProject() {
        this.projectService.delete(this.project)
            .then((res: any) => {
                console.log(res);
                this.goToProjectList();
            })
            .catch((err: any) => { console.error(err); });
    }
}