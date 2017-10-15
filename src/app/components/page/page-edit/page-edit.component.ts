import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('pageEditForm') pageEditForm: NgForm;

  // properties
  pageId: String;
  page = {_id: '', name: '', websiteId: '', description: ''};
  name: String;
  title: String;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pageId'];
        }
      );
    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page['name'];
  }

  editPage() {
    this.page.name = this.pageEditForm.value.name;
    this.page.description = this.pageEditForm.value.title;
  }
}
