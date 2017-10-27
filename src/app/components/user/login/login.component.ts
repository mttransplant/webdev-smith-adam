import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  // properties
  user: User;
  username: string;
  password: string;
  errorFlag: Boolean = false;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserServiceClient, private router: Router) { }

  ngOnInit() {

  }

  login () {
    this.errorFlag = false;
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((foundUser: User) => {
        this.user = foundUser;
        // console.log('subscribed this.user: ', this.user);
        if (this.user) {
          this.router.navigate(['/user/' + this.user._id]);
        } else {
          this.errorFlag = true;
        }
      });
    // const user = this.userService.findUserByCredentials(this.username, this.password)
  }
}
