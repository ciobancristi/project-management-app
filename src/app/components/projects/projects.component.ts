import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from 'app/providers/project.service';
import { Project } from 'app/models/project';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectEditDialogComponent } from 'app/components/project-edit-dialog/project-edit-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ProjectEditDialogComponent, {
      width: '450px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The edit project dialog was closed');
    });
  }
}
