import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WidgetServiceClient} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
  widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  text: string;
  size: number;

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
        }
      );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.text = this.widget.text;
    this.size = this.widget.size;
  }

  editHeader() {
    this.widget.text = this.widgetHeaderForm.value.text;
    this.widget.size = this.widgetHeaderForm.value.size;
    this.widgetService.updateWidget(this.widgetId, this.widget);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
  }

  deleteHeader() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
  }

}
