import { Component, OnInit } from '@angular/core';
import {WebsiteServiceClient} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  // parameters
  userId: string;
  // website: {_id: string, name: string, developerId: string, description: string};
  website = {_id: '', name: '', developerId: '', description: ''};
  websites = [this.website];

  constructor(private _websiteService: WebsiteServiceClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
  }

}
