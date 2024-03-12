import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.less'
})
export class SettingsDialogComponent implements OnInit{
  selectedOption: any;
  selectedLanguage: string = '';
  constructor (private translateService: TranslateService, public dialogRef: MatDialogRef<SettingsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang') || 'en';
  }

  ChangeLang(lang: any) {
    this.selectedLanguage = lang.target.value;
  }
  close() {
    this.dialogRef.close();
  }

  confirm() {
    localStorage.setItem('lang', this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
    this.dialogRef.close(this.selectedOption);
  }
}