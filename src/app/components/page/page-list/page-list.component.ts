import { Component, OnInit } from '@angular/core';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // parameters
  userId: string;
  websiteId: string;
  pages = [{_id: '', name: '', websiteId: '', description: ''}];

  constructor(private _pageService: PageServiceClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
        }
      );
    this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
  }

}
