import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('websiteNewForm') websiteNewForm: NgForm;

  // properties
  name: string;
  description: string;
  userId: string;
  website: Website = {_id: '', name: '', developerId: '', description: ''};
  websites: Website[];

  constructor(private websiteService: WebsiteServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  newWebsite() {
    // console.log('website form name', this.websiteNewForm.value.name);
    // console.log('website form description', this.websiteNewForm.value.description);

    this.name = this.websiteNewForm.value.name;
    this.description = this.websiteNewForm.value.description;
    // console.log('internal name', this.name);
    // console.log('internal description', this.description);
    // console.log(this.websites);
    // console.log(this.website);

    this.website.name = this.name;
    this.website.description = this.description;
    // console.log(this.website);

    this.websiteService.createWebsite(this.userId, this.website);
    // console.log(this.websiteService.websites);
    this.router.navigate(['/user/' + this.userId + '/website']);
  }

}
