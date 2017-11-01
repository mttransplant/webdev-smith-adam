import { Component, OnInit } from '@angular/core';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // parameters
  userId: string;
  websiteId: string;
  page: Page = {_id: '', name: '', websiteId: '', description: ''};
  pages: Page[];

  constructor(private pageService: PageServiceClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
          this.pageService.findPagesByWebsiteId(this.websiteId)
            .subscribe((pages: Page[]) => {
              this.pages = pages;
            });
        }
      );
    // this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
  }

}
