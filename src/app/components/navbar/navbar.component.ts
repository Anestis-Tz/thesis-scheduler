import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../dialogs/settings-dialog/settings-dialog.component';
import { DialogService } from '../../services/dialogService/dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})

export class NavbarComponent {

  constructor(private dialogService: DialogService) { }

  openSettingsDialog() {
    this.dialogService.openSettingsDialog()
  }
}
