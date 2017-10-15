import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  username: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.value.password === this.registerForm.value.verifcation) {
      this.username = this.registerForm.value.username;
      this.password = this.registerForm.value.password;
    } else {
      this.errorMsg = 'Password and verification do not match!';
      this.errorFlag = true;
    }
  }
}
