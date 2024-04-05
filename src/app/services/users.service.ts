import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = [];

  constructor(private http: HttpClient) { }
}
