import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from '../data/project-data.service';
import { Project, Task } from '../models/models';

@Component({
    moduleId: module.id,
    selector: 'project-list',
    templateUrl: 'project-list.component.html'
})
export class ProjectListComponent implements OnInit {
    private projects: Project[];
    private selectedProject: Project;

    constructor(
        private projectService: ProjectDataService,
        private router: Router) {
    }

    ngOnInit() {
        this.projectService.getAll()
            .then((p: Project[]) => this.projects = p)
            .catch((err: any) => console.error("error getting all projects"));
    }

    goToProject(projectId: number) {
        this.router.navigate(['/projects', projectId]);
    }

    viewTasks(project: Project) {
        if (!project.tasks) project.tasks = new Array<Task>();
        this.selectedProject = project;
    }

    taskModified() {
        this.projectService.update(this.selectedProject)
            .catch((err: any) => {
                console.error(err);
            });
    }
}