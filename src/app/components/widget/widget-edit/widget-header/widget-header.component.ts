import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('widgetHeaderForm') widgetHeaderForm: NgForm;

  // properties
  widgetId: string;
  pageId: string;
  websiteId: string;
  userId: string;
  widget: Widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  text = this.widget.text;
  size = this.widget.size;

  // widgetText: String;
  // size: Number;

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
              this.text = this.widget.text;
              this.size = this.widget.size;
            });
        }
      );
  }

  editHeader() {
    this.widget.text = this.widgetHeaderForm.value.text;
    this.widget.size = this.widgetHeaderForm.value.size;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((widget: Widget) => {
        this.widget = widget;
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId +
        '/page/' + this.pageId + '/widget']);
      });
  }

  deleteHeader() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widgetId: string) => {
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId +
        '/page/' + this.pageId + '/widget']);
      });
  }

}
