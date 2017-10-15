import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('websiteEditForm') websiteEditForm: NgForm;

  // properties
  websiteId: String;
  website = {_id: '', name: '', developerId: '', description: ''};
  name: String;
  description: String;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
        }
      );
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
  }

  editWebsite() {
    this.website.name = this.websiteEditForm.value.name;
    this.website.description = this.websiteEditForm.value.description;
  }
}
