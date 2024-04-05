import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = [];

  constructor(private http: HttpClient) { }

  // getUsers() {
  //   this.http.get('http://localhost:3000/api/users').subscribe((usersData) => {
  //     this.users = usersData as Users[];
  //     console.log(this.users);
  //   });
  // }
}
