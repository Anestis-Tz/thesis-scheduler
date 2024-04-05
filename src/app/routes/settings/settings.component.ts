import { Component } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { LanguageService } from '../../services/language.service';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.less'
})
export class SettingsComponent {
  openSettings: boolean = false;

  constructor(public dialogService: DialogService, public languageService: LanguageService, public usersService: UsersService) { }

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
