import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('widgetYoutubeForm') widgetYoutubeForm: NgForm;

  // properties
  widgetId: string;
  pageId: string;
  websiteId: string;
  userId: string;
  widget: Widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  width = this.widget.width;
  url = this.widget.url;

  // widgetText: String;

  constructor(private widgetService: WidgetServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['widgetId'];
          this.pageId = params['pageId'];
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
          this.widgetService.findWidgetById(this.widgetId)
            .subscribe((widget: Widget) => {
              this.widget = widget;
              this.width = this.widget.width;
              this.url = this.widget.url;
            });
        }
      );
  }

  editYoutube() {
    this.widget.url = this.widgetYoutubeForm.value.url;
    this.widget.width = this.widgetYoutubeForm.value.width;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((widget: Widget) => {
        this.widget = widget;
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId +
        '/page/' + this.pageId + '/widget']);
      });
  }
  deleteYoutube() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widgetId: string) => {
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId +
        '/page/' + this.pageId + '/widget']);
      });
  }
}
