import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('widgetYoutubeForm') widgetYoutubeForm: NgForm;

  // properties
  widgetId: string;
  widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  name: string;

  // widgetText: String;
  // url: String;
  // width: String;

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

  createYoutube() {
    this.widget.text = this.widgetYoutubeForm.value.name;
    this.widget.text = this.widgetYoutubeForm.value.widgetText;
    this.widget.url = this.widgetYoutubeForm.value.url;
    this.widget.width = this.widgetYoutubeForm.value.width;
  }
}
