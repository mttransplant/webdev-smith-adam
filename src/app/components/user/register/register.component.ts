import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;

  // properties
  errorFlag: Boolean = false;
  errorMsg = 'Invalid username or password!';
  user = {_id: '', username: '', password: '', firstName: '', lastName: '', email: ''};
  username: string;
  password: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;

    if (this.userService.findUserByUsername(this.username)) {
      this.errorMsg = 'The username "' + this.username + '" is already taken! Please try another.';
      this.errorFlag = true;
    } else {
      this.user.username = this.username;
      this.user.password = this.password;
      this.userService.createUser(this.user);
    }
  }
}
