import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PageServiceClient} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('pageNewForm') pageNewForm: NgForm;

  // properties
  name: string;
  description: string;
  userId: string;
  websiteId: string;
  page: Page = {_id: '', name: '', websiteId: '', description: ''};
  pages: Page[];

  constructor(private pageService: PageServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
          this.pageService.findPagesByWebsiteId(this.websiteId)
            .subscribe((pages: Page[]) => {
              this.pages = pages;
            });
        }
      );
    // this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
  }

  newPage() {
    this.name = this.pageNewForm.value.name;
    this.description = this.pageNewForm.value.description;
    this.page.name = this.name;
    this.page.description = this.description;
    this.pageService.createPage(this.websiteId, this.page)
      .subscribe((page: Page) => {
        this.page = page;
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
      });
  }

}
