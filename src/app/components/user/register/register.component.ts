import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

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
  user: User = {_id: '', username: '', password: '', firstName: '', lastName: '', email: ''};
  username: string;
  password: string;

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.userService.findUserByUsername(this.username)
      .subscribe((searchedUser: User) => {
        // console.log('server responded with a user of: ', searchedUser);
        if (searchedUser) {
          this.errorMsg = 'The username "' + this.username + '" is already taken! Please try another.';
          this.errorFlag = true;
        } else {
          this.user.username = this.username;
          this.user.password = this.password;
          console.log('about to create a new user for', this.username);
          this.userService.createUser(this.user)
            .subscribe((user: User) => {
            // console.log('new user created: ', user);
            this.user = user;
            this.router.navigate(['/user/' + user._id]);
            });
        }
      });
  }
}
