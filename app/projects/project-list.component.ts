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
    projects: Project[];
    
    constructor(
        private mockService: ProjectService,
        private router: Router) {
    }

    ngOnInit() { 
        this.mockService.getAll()
            .then((p: Project[]) => this.projects = p);
    }

    goToProject(projectId: number){
        let link = ['/projects', projectId];
        this.router.navigate(link);
    }
}