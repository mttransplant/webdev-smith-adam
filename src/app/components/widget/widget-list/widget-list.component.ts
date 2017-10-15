import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  // parameters
  userId: String;
  websiteId: String;
  pageId: String;
  widgets = [{_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''}];

  constructor(private _widgetService: WidgetService,
              private _pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private _websiteService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pageId'];
        }
      );
    this.widgets = this._widgetService.findWidgetByPageId(this.pageId);
    this.websiteId = this._pageService.findPageById(this.pageId).websiteId;
    this.userId = this._websiteService.findWebsiteById(this.websiteId).developerId;
  }

}
