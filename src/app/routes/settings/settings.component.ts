import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialogService/dialog.service';
import { LanguageService } from '../../services/languageService/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.less'
})
export class SettingsComponent {
  openSettings: boolean = false;

  constructor(public dialogService: DialogService, public languageService: LanguageService) {
    
  }

  changeLanguageDialog() {
    this.dialogService.openSettingsDialog({
      icon: 'language',
      title: 'Language',
      options: this.languageService.getLanguages(),
      selected: this.languageService.getLanguage(),
      confirm: "Save",
      cancel: "Cancel"
    }).subscribe(res => {
      if (res) {
        this.languageService.setLanguage(res);
      }
    })
  }
}
