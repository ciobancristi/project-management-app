import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from 'app/providers/project.service';
import { Task } from 'app/models/task';
import { Project } from '../../models/project';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
  task: Task;
  project: Project;

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
    private projectService: ProjectService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.router = router;
      this.task = data.task;
      this.project = data.project;
     }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  goToProject(projectId: number):void {
    this.closeDialog();
    this.router.navigateByUrl(`project/${projectId}`);
  }
}
