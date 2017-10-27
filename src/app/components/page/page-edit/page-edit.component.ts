import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
  page = {_id: '', name: '', websiteId: '', description: ''};
  pages = [this.page];
  name: string;
  description: string;

  constructor(private pageService: PageServiceClient,
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
          this.pageId = params['pageId'];
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
        }
      );
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page.name;
    this.description = this.page.description;
  }

  editPage() {
    this.page.name = this.pageEditForm.value.name;
    this.page.description = this.pageEditForm.value.description;
    this.pageService.updatePage(this.pageId, this.page);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }

  deleteCurrentPage() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }
}
