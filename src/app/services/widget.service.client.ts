import { Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WidgetServiceClient {

  constructor() {}
  widgets = [
    { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', width: '', url: ''},
    { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: ''},
    { _id: '345', widgetType: 'IMAGE', pageId: '321', size: 0, text: '', width: '100%', url: 'http://lorempixel.com/400/200/'},
    { _id: '456', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: ''},
    { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: ''},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: 0, text: '', width: '100%', url: 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
    { _id: '789', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: ''}
  ];
  api = {
    'createWidget' : this.createWidget,
    'findWidgetByPageId' : this.findWidgetByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };
  findNextWidgetId() {
    let foundNewId = false;
    let newId = 123;
    while (!foundNewId) {
      const min = Math.ceil(100);
      const max = Math.floor(999);
      newId = Math.floor(Math.random() * (max - min)) + min;
      if (!this.findWidgetById(newId.toString())) {
        foundNewId = true;
      }
    }
    return newId.toString();
  }
  createWidget(pageId: String, widget: any) {
    widget._id = this.findNextWidgetId();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }
  findWidgetByPageId(pageId: String) {
    let foundWidgets = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        foundWidgets.push(this.widgets[x]);
      }
    }
    return foundWidgets;
  }
  findWidgetById(widgetId: String) {
    return this.widgets.find(function(widget) {
      return widget._id === widgetId;
    });
  }
  updateWidget(widgetId: String, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      const _widget = this.widgets[x];
      if (_widget._id === widgetId) {
        this.widgets[x] = widget;
        // this.widgets[x].widgetType = widget.widgetType;
        // switch (this.widgets[x].widgetType) {
        //   case 'HEADING':
        //     this.widgets[x].size = widget.size;
        //     this.widgets[x].text = widget.text;
        //     break;
        //   case 'HTML':
        //     this.widgets[x].text = widget.text;
        //     break;
        //   case 'IMAGE':
        //   case 'YOUTUBE':
        //     this.widgets[x].width = widget.width;
        //     this.widgets[x].url = widget.url;
        //     break;
        //   default:
        //     break;
        // }
      }
    }
  }
  deleteWidget(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
      }
    }
  }
}
