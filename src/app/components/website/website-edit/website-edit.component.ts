import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('websiteEditForm') websiteEditForm: NgForm;

  // properties
  name: String;
  description: String;

  constructor() { }

  ngOnInit() {
  }

  editWebsite() {
    this.name = this.websiteEditForm.value.name;
    this.description = this.websiteEditForm.value.description;
  }
}
