import { NgModule } from '@angular/core';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SettingsDialogComponent
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule
  ]
})
export class DialogsModule { }
