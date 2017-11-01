import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../../../services/widget.service.client';
// import { NgSwitch} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  // parameters
  userId: string;
  websiteId: string;
  pageId: string;
  widget: Widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  widgets: Widget[];

  constructor(private _widgetService: WidgetServiceClient,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pageId'];
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
          this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe((widgets: Widget[]) => {
              this.widgets = widgets;
            });
        }
      );
    // this.widgets = this._widgetService.findWidgetByPageId(this.pageId);
  }

}
