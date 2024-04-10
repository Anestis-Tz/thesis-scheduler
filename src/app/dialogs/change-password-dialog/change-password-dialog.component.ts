import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../validators/ConfirmedValidator';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.less']
})
export class ChangePasswordDialogComponent {
  passwordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.passwordForm = this.fb.group({
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {
        validators: ConfirmedValidator('password', 'confirmPassword')
      } as AbstractControlOptions);;
  }

  close() {
    this.dialogRef.close();
  }

  changePassword() {
    if (this.passwordForm.valid) {
      // Implement your password change logic here
      this.close();
    }
  }
}
