import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData, LoginData } from '../interfaces/auth-data.model';
import { BehaviorSubject, Observable, Subject, catchError, throwError } from 'rxjs';
import { environment } from '../../environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = 'https://localhost:5001/api/';
  private isAuthenticated = false;
  private token: string = '';
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
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

  // login(model: any) {
    // const loginData: LoginData = { email: email, password: password }; // Simplified with shorthand properties
    // this.http.post<{ token: string }>(`${environment.apiUrl}/user/login`, loginData).subscribe({
    //   next: (res) => {
    //     const token = res.token;
    //     this.token = token;
    //     if (token) {
    //       this.isAuthenticated = true;
    //       this.authStatusListener.next(true);
    //     }
    //     console.log(res, "user logged in");
    //   },
    //   error: (error) => {
    //     console.error('Login failed:', error);
    //     this.authStatusListener.next(false);
    //     // Optionally, trigger some user feedback here
    //   }
    // });
    // return this.http.post("https://localhost:5001/api/account/login", model)
  // }

  login(model: any) {
    return this.http.post(this.baseurl + 'account/login', model)
  }
  

}
