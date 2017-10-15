import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileForm') profileForm: NgForm;

  // properties
  username: String;
  email: String;
  firstName: String;
  lastName: String;

  constructor() { }

  ngOnInit() {
  }

  updateProfile() {
    this.email = this.profileForm.value.email;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;
  }

}
