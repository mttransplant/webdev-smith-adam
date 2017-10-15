import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('websiteNewForm') websiteNewForm: NgForm;

  // properties
  name: String;
  description: String;

  constructor() { }

  ngOnInit() {
  }

  newWebsite() {
    this.name = this.websiteNewForm.value.name;
    this.description = this.websiteNewForm.value.description();
  }

}
