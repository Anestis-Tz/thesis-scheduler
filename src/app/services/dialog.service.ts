import { ChangeDetectorRef, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../dialogs/settings-dialog/settings-dialog.component';
import { ChangePasswordDialogComponent } from '../dialogs/change-password-dialog/change-password-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

    /** Open input dialog.
   * @param data Configuration object {title,message,confirm,cancel,type,inputTitle,regex}
   */
  openSettingsDialog(data: any) {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      data: data,
      autoFocus: false,
      panelClass: 'generic-dialog'
    });

    return dialogRef.afterClosed();
  }

  openChangePasswordDialog(data: any) {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      data: data,
      autoFocus: false,
      panelClass: 'generic-dialog'
    });

    return dialogRef.afterClosed();
  }
}
