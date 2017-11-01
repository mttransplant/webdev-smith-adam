import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {
  @ViewChild('pageEditForm') pageEditForm: NgForm;

  // properties
  userId: string;
  websiteId: string;
  pageId: string;
  page: Page = {_id: '', name: '', websiteId: '', description: ''};
  pages: Page[];
  name = this.page.name;
  description = this.page.description;

  constructor(private pageService: PageServiceClient,
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
          this.pageId = routeParams['pageId'];
          this.userId = routeParams['userId'];
          this.websiteId = routeParams['websiteId'];
        }
      );
    this.pageService.findPageById(this.pageId)
      .subscribe((page: Page) => {
        this.page = page;
        this.name = page['name'];
        this.description = page['description'];
      });
    // this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    // this.page = this.pageService.findPageById(this.pageId);
    // this.name = this.page.name;
    // this.description = this.page.description;
  }

  editPage() {
    this.page.name = this.pageEditForm.value.name;
    this.page.description = this.pageEditForm.value.description;
    this.pageService.updatePage(this.pageId, this.page)
      .subscribe((page: Page) => {
        this.page = page;
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
      });
  }

  deleteCurrentPage() {
    this.pageService.deletePage(this.pageId)
      .subscribe((page: Page) => {
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
      });
  }
}
