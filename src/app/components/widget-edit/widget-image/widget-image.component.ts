import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('widgetImageForm') widgetImageForm: NgForm;

  // properties
  name: String;
  widgetText: String;
  url: String;
  width: String;
  file: File;

  constructor() { }

  ngOnInit() {
  }

  createImage() {
    this.name = this.widgetImageForm.value.name;
    this.widgetText = this.widgetImageForm.value.widgetText;
    this.url = this.widgetImageForm.value.url;
    this.width = this.widgetImageForm.value.width;
    this.file = this.widgetImageForm.value.file;
  }

}
