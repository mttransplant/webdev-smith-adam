import { Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Website} from '../models/website.model.client';

@Injectable()
export class WebsiteServiceClient {
  website: Website = {_id: '', name: '', developerId: '', description: ''};
  websites: Website[];

  constructor(private _http: Http) {}

  baseUrl = environment.baseUrl;

  // websites = [
  //   { _id: '123', name: 'Facebook',    developerId: '456', description: 'Lorem Facebook Ipsum' },
  //   { _id: '234', name: 'Tweeter',     developerId: '456', description: 'Lorem Tweeter Ipsum' },
  //   { _id: '456', name: 'Gizmodo',     developerId: '456', description: 'Lorem Gizmodo Ipsum' },
  //   { _id: '890', name: 'Go',          developerId: '123', description: 'Lorem Go Ipsum' },
  //   { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem Tic Tac Toe Ipsum' },
  //   { _id: '678', name: 'Checkers',    developerId: '123', description: 'Lorem Checkers Ipsum' },
  //   { _id: '789', name: 'Chess',       developerId: '234', description: 'Lorem Chess Ipsum' }
  // ];

  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  // findNextWebsiteId() {
  //   let foundNewId = false;
  //   let newId = 123;
  //   while (!foundNewId) {
  //     const min = Math.ceil(100);
  //     const max = Math.floor(999);
  //     newId = Math.floor(Math.random() * (max - min)) + min;
  //     if (!this.findWebsiteById(newId.toString())) {
  //       foundNewId = true;
  //     }
  //   }
  //   return newId.toString();
  // }
  createWebsite(userId: string, website: Website) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map((res: Response) => {
        return res.json();
      });

    // website._id = this.findNextWebsiteId();
    // website.developerId = userId;
    // this.websites.push(website);
    // return website;
  }
  findWebsitesByUser(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map((res: Response) => {
        return res.json();
      });
    // let foundSites = [];
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x].developerId === userId) {
    //     foundSites.push(this.websites[x]);
    //   }
    // }
    // return foundSites;
  }
  findWebsiteById(websiteId: string) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
        // console.log('from website.service.client findWebsiteById about to return: ', res.json());
        return res.json();
      });
    // return this.websites.find(function(site) {
    //   return site._id === websiteId;
    // });
  }
  updateWebsite(websiteId: string, website: Website) {
    return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
      .map((res: Response) => {
        return res.json();
      });


    // for (let x = 0; x < this.websites.length; x++) {
    //   const _site = this.websites[x];
    //   if (_site._id === websiteId) {
    //     this.websites[x].name = website.name;
    //     this.websites[x].description = website.description;
    //   }
    // }
  }
  deleteWebsite(websiteId: string) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
        return res.json();
      });

    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x]._id === websiteId) {
    //     this.websites.splice(x, 1);
    //   }
    // }
  }
}
