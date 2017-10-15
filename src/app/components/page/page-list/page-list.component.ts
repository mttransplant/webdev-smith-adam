import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // parameters
  userId: String;
  websiteId: String;
  pages = [{_id: '', name: '', websiteId: '', description: ''}];

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute, private _websiteService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
        }
      );
    this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
    this.userId = this._websiteService.findWebsiteById(this.websiteId).developerId;
  }

}
