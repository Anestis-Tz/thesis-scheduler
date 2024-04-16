import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { LanguageService } from './language.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;
  getLoggedInStatus = new Subject();

  constructor(private languageService: LanguageService, private http: HttpClient) { }

  setUser(data: User) {
    this.user = data;
    // this.languageService.setLanguage(this.user.language);
  };

  getUsers() {
    this.http.get<User>('http://localhost:3000/api/user/users').subscribe((data) => {
      this.setUser(data);
      console.log('User data: ', data);
    });
  }

  getUser() {
    this.http.get<User>('http://localhost:3000/api/user/user').subscribe((data) => {
      // this.setUser(data);
      console.log('User data: ', data);
    });
  }

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
