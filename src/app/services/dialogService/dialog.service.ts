import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../dialogs/settings-dialog/settings-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openSettingsDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      autoFocus: false,
      panelClass: 'generic-dialog'
    });

    return dialogRef.afterClosed();
  }
}
