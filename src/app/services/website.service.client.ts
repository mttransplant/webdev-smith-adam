import { Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class WebsiteService {

  constructor() {}
  websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];
  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };
  createWebsite(userId, website) {
    website._id = Math.random();
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }
  findWebsitesByUser(userId) {
    let foundSites = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        foundSites.push(this.websites[x]);
      }
    }
    return foundSites;
  }
  findWebsiteById(websiteId) {
    return this.websites.find(function(site) {
      return site._id === websiteId;
    });
  }
  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      const _site = this.websites[x];
      if (_site._id === websiteId) {
        this.websites[x].name = website.name;
        this.websites[x].description = website.description;
      }
    }
  }
  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1);
      }
    }
  }
}
