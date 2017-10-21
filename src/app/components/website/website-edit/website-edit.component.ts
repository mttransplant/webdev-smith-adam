import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
  website = {_id: '', name: '', developerId: '', description: ''};
  websites = [this.website];
  name: string;
  description: string;

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.handleRouteChange(params));
  }

  handleRouteChange(params) {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
    this.description = this.website['description'];
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  editWebsite() {
    this.website.name = this.websiteEditForm.value.name;
    this.website.description = this.websiteEditForm.value.description;
    this.websiteService.updateWebsite(this.websiteId, this.website);
  }

  deleteCurrentWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user/' + this.userId + '/website']);
  }
}
