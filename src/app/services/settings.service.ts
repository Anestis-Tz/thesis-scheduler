import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    constructor() { }

    mainSettingsItems: any = {
        CHANGE_LANGUAGE: {
            data: {
                label: "change_lang",
                description: "modify_language",
                icon: "card-icon fa fa-language",
                action: "changeLanguageDialog"
            }
        },
        CHANGE_THEME: {
            data: {
                label: "change_theme",
                description: "select_theme",
                icon: "card-icon fa fa-paint-brush",
                action: "changeThemeDialog"
            },
        },
        CHANGE_PASSWORD: {
            data: {
                label: "change_password",
                description: "update_password",
                icon: "card-icon fa fa-lock",
                action: "changePasswordDialog"
            },
        },
    }

    getMainSettingsItems() {
        let settingsItems = [];
        for (let settingItem in this.mainSettingsItems) {
            settingsItems.push(this.mainSettingsItems[settingItem].data);
        }
        return settingsItems;
    }
}