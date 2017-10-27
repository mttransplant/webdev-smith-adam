import { Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { USERS } from './user.mock';
import { User } from '../models/user.model.client';

@Injectable()
export class UserServiceClient {
  // users: User[] = USERS;
  // user = {_id: '', username: '', password: '', firstName: '', lastName: '', email: ''};
  user: User;
  users: User[] = USERS;
  // users = [
  //   {_id: '123', username: 'alice',    password: 'alice',
  //     firstName: 'Alice',  lastName: 'Wonder', email: 'alice.wonderland@unicorn.com'  },
  //   {_id: '234', username: 'bob',      password: 'bob',
  //     firstName: 'Bob',    lastName: 'Marley', email: 'bob.marley@regge.com'  },
  //   {_id: '345', username: 'charly',   password: 'charly',
  //     firstName: 'Charly', lastName: 'Garcia', email: 'charly.garcia@icecream.com'  },
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi',
  //     firstName: 'Jose',   lastName: 'Annunzi', email: 'j.annunzi@northeastern.edu' }
  // ];
  constructor(private _http: Http) {}

  baseUrl = environment.baseUrl;

  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };
  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
          return res.json();
        });

    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     return this.users[x];
    //   }
    // }
  }
  findUserByUsername(username: string) {
    return this.users.find(function (user) {
      return user.username === username;
    });
  }
  findUserByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
        // console.log(res.json());
        return res.json();
      });
    // return this.users.find(function(user) {
    //   return user.username === username && user.password === password;
    // });
  }
  updateUser(userId: string, user: User) {
    // console.log('about to call user.service.server');
    return this._http.put(this.baseUrl + '/api/user/' + userId, user)
      .map((res: Response) => {
        // console.log('server has responded.');
        return res.json();
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   const _user = this.users[x];
    //   if (_user._id === userId) {
    //     this.users[x].firstName = user.firstName;
    //     this.users[x].lastName = user.lastName;
    //     this.users[x].password = user.password;
    //   }
    // }
  }
  deleteUser(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }
    }
  }
}
