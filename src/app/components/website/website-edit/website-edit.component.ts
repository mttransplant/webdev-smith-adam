import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})

export class WebsiteEditComponent implements OnInit {
  @ViewChild('websiteEditForm') websiteEditForm: NgForm;

  // properties
  websiteId: string;
  userId: string;
  website: Website = {_id: '', name: '', developerId: '', description: ''};
  websites = [this.website];
  name = this.website['name'];
  description = this.website['description'];

  constructor(private websiteService: WebsiteServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.handleRouteChange(params));
  }

  handleRouteChange(routeParams) {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = routeParams['websiteId'];
          this.userId = routeParams['userId'];
        }
      );
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe((website: Website) => {
        this.website = website;
        this.name = website['name'];
        this.description = website['description'];
        // console.log('website name: ', website['name']);
        // console.log('website description: ', website['description']);
      });
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  editWebsite() {
    this.website.name = this.websiteEditForm.value.name;
    this.website.description = this.websiteEditForm.value.description;
    this.websiteService.updateWebsite(this.websiteId, this.website)
      .subscribe((website: Website) => {
        this.website = website;
      });
  }

  deleteCurrentWebsite() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe((website: Website) => {
        this.router.navigate(['/user/' + this.userId + '/website']);
      });
  }
}
