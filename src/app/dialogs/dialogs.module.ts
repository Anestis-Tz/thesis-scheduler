import { NgModule } from '@angular/core';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    SettingsDialogComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ]
})
export class DialogsModule { }
