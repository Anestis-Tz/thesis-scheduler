import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData, LoginData } from '../interfaces/auth-data.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';
  private authStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
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
    this.http.post<{ token: string }>("http://localhost:3000/api/user/login", loginData).subscribe(res => {
      const token = res.token;
      this.token = token;
      this.authStatusListener.next(true);
      console.log(res, "user logged in");
    })
  }
}
