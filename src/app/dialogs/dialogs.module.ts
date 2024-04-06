import { NgModule } from '@angular/core';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    SettingsDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ]
})
export class DialogsModule { }
