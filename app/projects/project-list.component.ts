import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from '../mock.service';
import { Project } from '../models/models';

@Component({
    moduleId: module.id,
    selector: 'project-list',
    templateUrl: 'project-list.component.html',
    providers: [MockService]
})
export class ProjectListComponent implements OnInit {
    projects: Project[];
    
    constructor(
        private mockService: MockService,
        private router: Router) {
    }

    ngOnInit() { 
        this.mockService.getProjects()
            .then(p => this.projects = p);
    }

    goToProject(projectId: number){
        let link = ['/project', projectId];
        this.router.navigate(link);
    }
}