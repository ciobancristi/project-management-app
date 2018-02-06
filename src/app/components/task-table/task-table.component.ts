import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'app/providers/project.service';
import { Task } from 'app/models/task';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { TaskDialogComponent } from 'app/components/task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  tasks: Task[];
  displayedColumns = ['id', 'name', 'description', 'status.name', 'priority'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private projectService: ProjectService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.tasks = [];
    this.projectService.getProjects()
      .subscribe(projects => {
        projects.map(p => this.tasks = this.tasks.concat(p.tasks));
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openTaskModal(task: Task){
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '550px',
      height: '500px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }

}
