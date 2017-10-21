import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('pageNewForm') pageNewForm: NgForm;

  // properties
  name: string;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  newPage() {
    this.name = this.pageNewForm.value.name;
    this.title = this.pageNewForm.value.title;
  }

}
