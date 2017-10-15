import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  // properties
  username: String;
  password: String;
  errorFlag: Boolean = false;
  errorMsg = 'Invalid username or password!';

  constructor() { }

  ngOnInit() {

  }

  login () {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
  }

}
