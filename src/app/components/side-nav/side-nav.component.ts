import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openTaskAddDialog() {
    console.log('asdasd')
    let dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '500px',
      height: '520px'
    })

    dialogRef.afterClosed()
      .subscribe(result => console.log('Task Edit Dialog was closed'));
  }
}
