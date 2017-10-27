import { Component, OnInit } from '@angular/core';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {WidgetServiceClient} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  // parameters
  widgetId: string;
  pageId: string;
  websiteId: string;
  userId: string;
  widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};

  constructor(private _widgetService: WidgetServiceClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['widgetId'];
          this.pageId = params['pageId'];
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );
    this.widget = this._widgetService.findWidgetById(this.widgetId);
  }

}
