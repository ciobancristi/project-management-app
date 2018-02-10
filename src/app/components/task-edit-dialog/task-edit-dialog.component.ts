import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Task } from '../../models/task';
import { ProjectService } from '../../providers/project.service';
import { Status } from '../../models/status';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../../models/project';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.scss']
})
export class TaskEditDialogComponent implements OnInit {
  task: Task;
  priorities: string[];

  constructor(public dialogRef: MatDialogRef<TaskEditDialogComponent>,
    private projectService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public project: Project) {
  }

  ngOnInit() {
    this.task = new Task();
    this.priorities = ["Low", "Mid", "High"];
  }

  submit() {
    //TODO: validate form
    if (!this.isValidField(this.task.name)
      || !this.isValidField(this.task.description)
      || !this.isValidField(this.task.priority))
      return;

    this.projectService.addTask(this.task, this.project)
      .subscribe(project => {
        this.closeDialog();
        //this.project.tasks.push(this.task);
      })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  isValidField(field: string): boolean {
    if (!field || !field.trim())
      return false;

    return true;
  }
}
