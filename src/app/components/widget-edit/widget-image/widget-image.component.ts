import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('widgetImageForm') widgetImageForm: NgForm;

  // properties
  widgetId: String;
  widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  name: String;

  // widgetText: String;
  // url: String;
  // width: String;
  // file: File;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['widgetId'];
        }
      );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

  createImage() {
    this.widget.text = this.widgetImageForm.value.name;
    this.widget.text = this.widgetImageForm.value.widgetText;
    this.widget.url = this.widgetImageForm.value.url;
    this.widget.width = this.widgetImageForm.value.width;
    // this.widget.file = this.widgetImageForm.value.file;
  }

}
