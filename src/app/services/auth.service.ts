import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData, LoginData } from '../interfaces/auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  createUser(name: string, email: string, password: string) {
    const authData: AuthData = { name: name, email: email, password: password };

    this.http.post("http://localhost:3000/api/user/register", authData)
      .subscribe(res => {
        console.log(res);
      });
  }

  login(email: string, password: string) {
    const loginData: LoginData = { email: email, password: password };
    this.http.post<{ token: string }>("http://localhost:3000/api/user/login", loginData)
      .subscribe(res => {
        this.token = res.token;
      });
  }
}
