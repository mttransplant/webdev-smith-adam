import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  // properties
  username: String;
  password: String;
  errorFlag: Boolean = false;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  login () {
    this.errorFlag = false;
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user = this.userService.findUserByCredentials(this.username, this.password)
    if(user) {
      this.router.navigate(['user/' + user._id]);
    } else {
      this.errorFlag = true;
    }
  }
}
