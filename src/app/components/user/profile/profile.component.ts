import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  // properties
  userId: string;
  user: User = {_id: '', username: '', password: '', firstName: '', lastName: '', email: ''};
  showMessage: Boolean = false;
  msg: string;

  constructor(private userService: UserServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const userId = params['userId'];
      this.userId = userId;
      this.userService.findUserById(userId)
        .subscribe((user: User) => {
        this.user = user;
        });
    });
    // this.activatedRoute.params
    //   .subscribe(
    //     (params: any) => {
    //       this.userId = params['userId'];
    //     }
    //   );
    // this.user = this.userService.findUserById(this.userId);
  }

  updateProfile() {
    this.user.email = this.profileForm.value.email;
    this.user.firstName = this.profileForm.value.firstName;
    this.user.lastName = this.profileForm.value.lastName;
    this.user.password = this.profileForm.value.password;
    // console.log('about to call user.service.client for userId: ', this.userId);
    this.userService.updateUser(this.userId, this.user)
      .subscribe((user: User) => {
      this.user = user;
      // console.log('Have heard back from server!');
      });
    // console.log(this.user);
    this.msg = 'Update Successful!';
    this.showMessage = true;
  }

}
