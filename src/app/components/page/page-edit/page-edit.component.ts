import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('pageEditForm') pageEditForm: NgForm;

  // properties
  name: String;
  title: String;

  constructor() { }

  ngOnInit() {
  }

  editPage() {
    this.name = this.pageEditForm.value.name;
    this.title = this.pageEditForm.value.title;
  }
}
