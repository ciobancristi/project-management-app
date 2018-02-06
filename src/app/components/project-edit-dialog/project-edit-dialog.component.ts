import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'app/providers/project.service';
import { Project } from 'app/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss']
})
export class ProjectEditDialogComponent implements OnInit {
  project: Project;

  constructor(public dialogRef: MatDialogRef<ProjectEditDialogComponent>,
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit() {
    this.project = new Project();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    //TODO: validate form
    if (!this.project.name.trim() || !this.project.description.trim())
      return;

    this.projectService.addProject(this.project)
      .subscribe(project => {
        console.log(`added project with id = ${project.id}`)
        this.router.navigate(['/project', project.id]);
        this.closeDialog();
      });
  }
}
