import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SettingsDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule
  ]
})
export class DialogsModule { }
