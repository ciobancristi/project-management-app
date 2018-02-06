import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from 'app/providers/project.service';
import { Project } from 'app/models/project';
import { Task } from 'app/models/task';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  columns: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectsService: ProjectService) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.projectsService.getProject(id)
      .subscribe(project => {
        this.project = project;
        this.initColumns();
      });
  }

  goBack(): void {
    this.location.back();
  }

  getTasksByStatus(statusId: number): Task[] {
    return this.project.tasks.filter(t => t.status.id === statusId);
  }

  private initColumns(): any {
    this.columns = [];
    this.project.statuses.forEach((status) => {
      var statusId = status.id;
      var tasks = this.getTasksByStatus(statusId);
      this.columns[statusId] = tasks;
    })
  }

  onDrop(e: any) {
    console.log(e.dragData);
    
  }

}
