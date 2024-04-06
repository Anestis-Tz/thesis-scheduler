import { Component } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { LanguageService } from '../../services/language.service';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.less'
})
export class SettingsComponent {
  openSettings: boolean = false;
  settingsItems: any = this.settingsService.getMainSettingsItems();
  private actionMap: { [key: string]: () => void };

  constructor(public dialogService: DialogService, public languageService: LanguageService, public settingsService: SettingsService) {
    // Initialization of actionMap
    this.actionMap = {
      changeLanguageDialog: this.changeLanguageDialog.bind(this),
      changeThemeDialog: this.changeThemeDialog.bind(this),
      changePasswordDialog: this.changePasswordDialog.bind(this),
    };
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

  changeThemeDialog() {
    // To be implemented
  }

  changePasswordDialog() {
    // To be implemented
  }

  openDialog(action: string) {
    // Look up the method in the action map and call it if it exists
    const actionFunction = this.actionMap[action];
    if (actionFunction) {
        actionFunction(); // 'this' is already bound to the correct context
    }
  }
}
