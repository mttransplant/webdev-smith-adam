import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('widgetHeaderForm') widgetHeaderForm: NgForm;

  // properties
  widgetId: String;
  widget = {_id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: ''};
  name: String;

  // widgetText: String;
  // size: Number;

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

  createHeader() {
    this.widget.text = this.widgetHeaderForm.value.name;
    this.widget.text = this.widgetHeaderForm.value.widgetText;
    this.widget.size = this.widgetHeaderForm.value.size;
  }

}
