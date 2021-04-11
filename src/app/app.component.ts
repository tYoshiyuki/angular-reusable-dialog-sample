import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogContainerComponent,
  DialogResult,
} from './dialog-container/dialog-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-reusable-dialog-sample';
  result?: DialogResult<string>;

  constructor(public dialog: MatDialog) {}

  onOpenClick() {
    const dialogRef = this.dialog.open(DialogContainerComponent);
    dialogRef.afterClosed().subscribe((result: DialogResult<string>) => {
      this.result = result ? result : undefined;
    });
  }
}
