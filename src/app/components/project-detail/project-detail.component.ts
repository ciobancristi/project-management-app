import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from 'app/providers/project.service';
import { Project } from 'app/models/project';
import { Task } from 'app/models/task';
import { Status } from 'app/models/status';
import { MatDialog } from '@angular/material';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  statuses: Status[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectsService: ProjectService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.projectsService.getProject(id)
      .subscribe(project => {
        this.project = project;
        this.statuses = project.statuses;
      });
  }

  goBack(): void {
    this.location.back();
  }

  getTasksByStatus(statusId: number): Task[] {
    return this.project.tasks.filter(t => t.status.id === statusId);
  }

  onDrop(e: any, destinationStatus) {
    var task = e.dragData;
    var taskIndex = this.project.tasks.indexOf(task);
    task.status = destinationStatus;
    this.project.tasks[taskIndex] = task;
    this.projectsService.update(this.project)
      .subscribe((project) => console.log("updated", project));
  }

  getDragScope(statusName: string) {
    var statuses = this.statuses.filter(s => s.name !== statusName);
    var array = [];
    statuses.forEach(s => array.push("'" + s.name.replace(/\s/g, '') + "'"));
    return array;
  }

  getDropScope(statusName: string) {
    //*Optional* TODO: enable drop from Done only to TO DO
    var statuses = this.statuses.filter(s => s.name !== statusName);
    var array = [];
    statuses.forEach(s => array.push(s.name));
    return array;
  }

  openEditTaskDialog() {
    let dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '500px',
      height: '450px',
      data: this.project
    })

    dialogRef.afterClosed()
      .subscribe(result => console.log('Task Edit Dialog was closed'));
  }

  openTaskDialog(task: Task) {
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '550px',
      height: '500px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Task dialog was closed');
    });
  }
}
