import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('widgetHeaderForm') widgetHeaderForm: NgForm;

  // properties
  name: String;
  widgetText: String;
  size: Number;

  constructor() { }

  ngOnInit() {
  }

  createHeader() {
    this.name = this.widgetHeaderForm.value.name;
    this.widgetText = this.widgetHeaderForm.value.widgetText;
    this. size = this.widgetHeaderForm.value.size;
  }

}
