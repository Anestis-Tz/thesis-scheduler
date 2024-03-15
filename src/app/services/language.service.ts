import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: any;
  private languages: any;

  constructor(private translate: TranslateService, private matSnackBar: MatSnackBar) { }

  /** Set language.
  * @param lang Language code e.g. en,el
  */
  setLanguage(lang: any) {
    this.currentLang = lang;
    this.changeUILang(lang);
  }

  /** Get current language.
  * @return {String} Language code e.g. en,el
  */
  getLanguage() {
    return this.currentLang ? this.currentLang : this.getBrowserLang();
  }

  /** Set available languages.
  * @param {Array} Language codes e.g. ["en","el"]
  */
  setLanguages(langs: any) {
    this.languages = langs && langs.length ? langs : ["en"];
  }

  /** Get current language.
  * @return {String[]} Language codes e.g. ["en","el"]
  */
  getLanguages() {
    return this.languages;
  }

  /** Get default language.
  * @return {String} Language code e.g. en,el
  */
  getDefaultLanguage() {
    return this.languages && this.languages.length ? this.languages[0] : "en";
  }

  /** Setting language when the app is initialize */
  initLang() {
    this.changeUILang(this.currentLang);
  }

  /** Change UI language by getting the proper translate file 
   * @param lang Language code e.g. en,el
  */
  changeUILang(lang: any) {
    lang = lang ? lang : this.getBrowserLang();
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  /** Get browser language 
   * @returns language code e.g. en,el
  */
  getBrowserLang() {
    return this.translate.getBrowserLang();
  }

  /**  Get the proper translation and display a snak bar
   * @param key translation key
   * @param params translation object params in case a case has params
  */
  openSnackBar(key: any, params: any) {
    let self = this;
    this.translate.get(key, params).subscribe((text: string) => {
      //Display Toast with the error
      self.matSnackBar.open(text, "OK", {
        duration: 5000,
      });
    });
  }
}