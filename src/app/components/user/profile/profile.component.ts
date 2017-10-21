import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  // properties
  userId: string;
  user = {_id: '', username: '', password: '', firstName: '', lastName: '', email: ''};
  showMessage: Boolean = false;
  msg: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
  }

  updateProfile() {
    this.user.email = this.profileForm.value.email;
    this.user.firstName = this.profileForm.value.firstName;
    this.user.lastName = this.profileForm.value.lastName;
    console.log(this.user);
    this.msg = 'Update Successful!';
    this.showMessage = true;
  }

}
