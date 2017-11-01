import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('widgetImageForm') widgetImageForm: NgForm;

  // properties
  widgetId: string;
  pageId: string;
  websiteId: string;
  userId: string;
  widget: Widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  width = this.widget.width;
  url = this.widget.url;

  // widgetText: String;
  // file: File;

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

  editImage() {
    this.widget.url = this.widgetImageForm.value.url;
    this.widget.width = this.widgetImageForm.value.width;
    // this.widget.file = this.widgetImageForm.value.file;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((widget: Widget) => {
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId +
        '/page/' + this.pageId + '/widget']);
      });
  }
  deleteImage() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widgetId: string) => {
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId +
        '/page/' + this.pageId + '/widget']);
      });
  }
}
