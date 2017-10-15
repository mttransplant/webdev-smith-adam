import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('widgetYoutubeForm') widgetYoutubeForm: NgForm;

  // properties
  name: String;
  widgetText: String;
  url: String;
  width: String;

  constructor() { }

  ngOnInit() {
  }

  createYoutube() {
    this.name = this.widgetYoutubeForm.value.name;
    this.widgetText = this.widgetYoutubeForm.value.widgetText;
    this.url = this.widgetYoutubeForm.value.url;
    this.width = this.widgetYoutubeForm.value.width;
  }
}
