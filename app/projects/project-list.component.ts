import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './project.service';
import { Project } from '../models/models';

@Component({
    moduleId: module.id,
    selector: 'project-list',
    templateUrl: 'project-list.component.html',
    providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
    private projects: Project[];

    constructor(
        private projectService: ProjectService,
        private router: Router) {
    }

    ngOnInit() {
        this.projectService.getAll()
            .then((p: Project[]) => this.projects = p)
            .catch((err: any)=> console.error("error getting all projects"));
    }

    goToProject(projectId: number) {
        this.router.navigate(['/projects', projectId]);
    }
}