import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
user: [User];

  constructor(private http: Http) { }

  addUser(user) {
    return this.http.post('http://localhost:3000/user', user)
      .map(res => res.json());
  }
  //Was going to add this to see if this was going to help with component...
  // getUsers(user) {
  //   return this.http.get('http://localhost:3000/user')
  //     .map(res => res.json());
  // }
}

