import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { LanguageService } from './language.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;
  getLoggedInStatus = new Subject();

  constructor(private languageService: LanguageService) { }

  setUser(data: User) {
    this.user = data;
    // this.languageService.setLanguage(this.user.language);
  };

  getUser(): User | null {
    return this.user;
  };

  resetUser() {
    this.user = null;
  };

  isLoggedIn(): boolean {
    return this.user ? true : false;
  };

  onLogout() {
    this.resetUser();
    this.getLoggedInStatus.next(false);
    location.href = '/login';
  }
}
