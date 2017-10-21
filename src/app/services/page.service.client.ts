import { Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class PageService {

  constructor() {}
  pages = [
    { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem Post 1 Ipsum' },
    { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem Post 2 Ipsum' },
    { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem Post 3 Ipsum' }
  ];
  api = {
    'createPage' : this.createPage,
    'findPagesByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };
  createPage(websiteId: string, page: any) {
    page._id = Math.random();
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }
  findPagesByWebsiteId(websiteId: string) {
    let foundPages = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        foundPages.push(this.pages[x]);
      }
    }
    return foundPages;
  }
  findPageById(pageId: string) {
    return this.pages.find(function(page) {
      return page._id === pageId;
    });
  }
  updatePage(pageId: string, page: any) {
    for (let x = 0; x < this.pages.length; x++) {
      const _page = this.pages[x];
      if (_page._id === pageId) {
        this.pages[x].name = page.name;
        this.pages[x].description = page.description;
      }
    }
  }
  deletePage(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }
}
