import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  // properties
  pageId: string;
  websiteId: string;
  userId: string;
  widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pageId'];
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );
  }
  createHeader() {
    this.widget.widgetType = 'HEADING';
    this.widget.size = 1;
    this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
  }
  createImage() {
    this.widget.widgetType = 'IMAGE';
    this.widget.width = '100%';
    this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
  }
  createYoutube() {
    this.widget.widgetType = 'YOUTUBE';
    this.widget.width = '100%';
    this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
  }
}
