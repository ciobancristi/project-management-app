import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from 'app/providers/project.service';
import { Task } from 'app/models/task';
import { Project } from '../../models/project';

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
    @Inject(MAT_DIALOG_DATA) public data: any) {
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

}
