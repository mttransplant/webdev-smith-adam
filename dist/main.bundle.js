webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { TestComponent } from './components/test/test.component';























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            // TestComponent,
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserServiceClient */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteServiceClient */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageServiceClient */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetServiceClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/**
 * Created by sesha on 7/26/17.
 */

// import {TestComponent} from './components/test/test.component';












var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    // {path: 'test', component: TestComponent},
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n  <h4>\n    <a href=\"https://github.com/mttransplant/webdev-smith-adam\">Homework GitHub Repository</a>\n  </h4>\n\n  <h4>\n    <a href=\"https://webdev-smith-adam.herokuapp.com/assets/index.html\">Heroku Hosting of Assignments</a>\n  </h4>\n  <h4>\n    Class Project - TBD\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Pages -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Pages</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New page-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>Edit Page</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding\">\n  <div class=\"row\">\n    <div class=\"container-fluid col-md-4 hidden-xs hidden-sm\">\n      <div class=\"container\">\n        <div *ngFor=\"let page of pages\">\n          <div class=\"row aps-list-spacing\">\n            <div class=\"col-md-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n            </div>\n            <div class=\"col-md-1\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n      <form class=\"aps-form-padding\"\n            (ngSubmit) = \"editPage()\"\n            #pageEditForm=\"ngForm\">\n\n        <label for=\"name\">Name</label>\n        <input id=\"name\"\n               name=\"name\"\n               [(ngModel)]=\"name\"\n               required\n               class=\"form-control aps-field-spacing\"\n               type=\"text\"\n               placeholder=\"Page Name\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a name!\n        </span>\n\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control aps-field-spacing\"\n                  rows=\"5\"\n                  type=\"text\"\n                  id=\"description\"\n                  name=\"description\"\n                  [(ngModel)]=\"description\"\n                  required\n                  placeholder=\"Page Description\"></textarea>\n\n        <button type=\"submit\"\n                class=\"btn btn-primary btn-block\"\n                [disabled]=\"!pageEditForm.valid\">Save Changes</button>\n\n        <button type=\"button\"\n                (click)=\"deleteCurrentPage()\"\n                class=\"btn btn-danger btn-block\">Delete</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.page = { _id: '', name: '', websiteId: '', description: '' };
        this.pages = [this.page];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) { return _this.handleRouteChange(params); });
    };
    PageEditComponent.prototype.handleRouteChange = function (params) {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pageId'];
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
        this.page = this.pageService.findPageById(this.pageId);
        this.name = this.page.name;
        this.description = this.page.description;
    };
    PageEditComponent.prototype.editPage = function () {
        this.page.name = this.pageEditForm.value.name;
        this.page.description = this.pageEditForm.value.description;
        this.pageService.updatePage(this.pageId, this.page);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
    };
    PageEditComponent.prototype.deleteCurrentPage = function () {
        this.pageService.deletePage(this.pageId);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pageEditForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--plus sign-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngFor=\"let page of pages\">\n    <div class=\"row aps-list-spacing\">\n      <div class=\"col-xs-11\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n      </div>\n      <div class=\"col-xs-1\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(_pageService, activatedRoute) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.pages = [{ _id: '', name: '', websiteId: '', description: '' }];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
        this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Pages -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Pages</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Page-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n            <b>New Page</b>\n          </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding\">\n  <div class=\"row\">\n    <div class=\"container-fluid col-md-4 hidden-xs hidden-sm\">\n      <div class=\"container\">\n        <div *ngFor=\"let page of pages\">\n          <div class=\"row aps-list-spacing\">\n            <div class=\"col-md-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">{{page.name}}</a>\n            </div>\n            <div class=\"col-md-1\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n  <!--<div class=\"container col-md-4 hidden-xs hidden-sm\">-->\n    <!--<div class=\"container\">-->\n      <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blog Post</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid\">-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!---->\n      <!---->\n      <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blogs</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid\">-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!---->\n      <!---->\n      <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Home</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid\">-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!---->\n      <!---->\n      <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">About</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid\">-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!---->\n      <!---->\n      <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Contact Us</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n          <!--<a routerLink=\"user/:uid/website/:wid/page/:pid\">-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!---->\n      <!---->\n    <!--</div>-->\n  <!--</div>-->\n    <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n      <form class=\"aps-form-padding\"\n            (ngSubmit) = \"newPage()\"\n            #pageNewForm=\"ngForm\">\n\n        <label for=\"name\">Name</label>\n        <input id=\"name\"\n               name=\"name\"\n               #name=\"ngModel\"\n               ngModel\n               required\n               class=\"form-control aps-field-spacing\"\n               type=\"text\"\n               placeholder=\"Page Name\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a name!\n        </span>\n\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control\"\n                  rows=\"5\"\n                  id=\"description\"\n                  name=\"description\"\n                  #description=\"ngModel\"\n                  ngModel\n                  required\n                  placeholder=\"Page Description\"></textarea>\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!pageNewForm.valid\">Create</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.page = { _id: '', name: '', websiteId: '', description: '' };
        this.pages = [this.page];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    };
    PageNewComponent.prototype.newPage = function () {
        this.name = this.pageNewForm.value.name;
        this.description = this.pageNewForm.value.description;
        this.page.name = this.name;
        this.page.description = this.description;
        this.pageService.createPage(this.websiteId, this.page);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pageNewForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageNewForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control aps-field-spacing\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username!\n      </span>\n\n\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter password!\n      </span>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Login</button>\n      <button class=\"btn btn-success btn-block\"\n              type=\"button\"\n              routerLink=\"/register\" >Register</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errorFlag = false;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (foundUser) {
            _this.user = foundUser;
            // console.log('subscribed this.user: ', this.user);
            if (_this.user) {
                _this.router.navigate(['/user/' + _this.user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
        // const user = this.userService.findUserByCredentials(this.username, this.password)
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateProfile()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngIf=\"showMessage\"\n       class=\"alert alert-success\">\n    {{msg}}\n  </div>\n\n  <form (ngSubmit) = \"updateProfile()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             name=\"username\"\n             id=\"username\"\n             [(ngModel)]=\"user.username\"\n             required\n             readonly\n             placeholder=\"username\">\n\n      <label for=\"password\">Password</label>\n      <input type=\"password\"\n             class=\"form-control\"\n             name=\"password\"\n             id=\"password\"\n             [(ngModel)]=\"user.password\"\n             required\n             placeholder=\"password\">\n\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"firstName\"\n             name=\"firstName\"\n             [(ngModel)]=\"user.firstName\"\n             required\n             #firstName=\"ngModel\"\n             placeholder=\"Alice\">\n      <span class=\"help-block\" *ngIf=\"!user.firstName.valid && user.firstName.touched\">\n      Please enter your first name!\n      </span>\n\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\"\n             name=\"lastName\"\n             [(ngModel)]=\"user.lastName\"\n             required\n             #lastName=\"ngModel\"\n             placeholder=\"Wonderland\">\n      <span class=\"help-block\" *ngIf=\"!user.lastName.valid && user.lastName.touched\">\n      Please enter your last name!\n      </span>\n\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             name=\"email\"\n             id=\"email\"\n             [(ngModel)]=\"user.email\"\n             required\n             placeholder=\"alice.wonderland@unicorn.com\">\n      <span class=\"help-block\" *ngIf=\"!user.email.valid && user.email.touched\">\n      Please enter email!\n      </span>\n      <br/>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid || f.pristine\">Update</button>\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{userId}}/website\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"/login\">Logout</a>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = { _id: '', username: '', password: '', firstName: '', lastName: '', email: '' };
        this.showMessage = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var userId = params['userId'];
            _this.userId = userId;
            _this.userService.findUserById(userId)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
        // this.activatedRoute.params
        //   .subscribe(
        //     (params: any) => {
        //       this.userId = params['userId'];
        //     }
        //   );
        // this.user = this.userService.findUserById(this.userId);
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.user.email = this.profileForm.value.email;
        this.user.firstName = this.profileForm.value.firstName;
        this.user.lastName = this.profileForm.value.lastName;
        this.user.password = this.profileForm.value.password;
        // console.log('about to call user.service.client for userId: ', this.userId);
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            _this.user = user;
            // console.log('Have heard back from server!');
        });
        // console.log(this.user);
        this.msg = 'Update Successful!';
        this.showMessage = true;
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit) = \"register()\" #registerForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n\n      <input placeholder=\"password\"\n             type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n\n      <input placeholder=\"verify password\"\n             type=\"password\"\n             name=\"password2\"\n             ngModel\n             required\n             #password2=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"password.value != password2.value\">\n      Passwords do not match!\n      </span>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n         [disabled]=\"!registerForm.valid || password.value != password2.value\" >Register</button>\n      <a class=\"btn btn-danger btn-block\"\n         routerLink=\"/login\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // properties
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
        this.user = { _id: '', username: '', password: '', firstName: '', lastName: '', email: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        if (this.userService.findUserByUsername(this.username)) {
            this.errorMsg = 'The username "' + this.username + '" is already taken! Please try another.';
            this.errorFlag = true;
        }
        else {
            this.user.username = this.username;
            this.user.password = this.password;
            this.userService.createUser(this.user);
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('registerForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Websites -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Websites</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Website-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>Edit Website</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding container-fluid\">\n  <div class=\"row\">\n    <div class=\"container col-md-4 hidden-xs hidden-sm\">\n      <div class=\"container\">\n        <div *ngFor=\"let website of websites\">\n          <div class=\"row aps-list-spacing\">\n            <div class=\"col-md-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            </div>\n            <div class=\"col-md-1\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n      <form class=\"aps-form-padding\"\n            (ngSubmit) = \"editWebsite()\"\n            #websiteEditForm=\"ngForm\">\n        <label for=\"name\">Name</label>\n        <input id=\"name\"\n               name=\"name\"\n               [(ngModel)]=\"name\"\n               required\n               class=\"form-control aps-field-spacing\"\n               type=\"text\"\n               placeholder=\"Website Name\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a name!\n      </span>\n\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control aps-field-spacing\"\n                  rows=\"5\"\n                  id=\"description\"\n                  name=\"description\"\n                  [(ngModel)]=\"description\"\n                  required\n                  placeholder=\"description\"></textarea>\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!websiteEditForm.valid\">Update</button>\n        <button type=\"button\"\n                (click)=\"deleteCurrentWebsite()\"\n                class=\"btn btn-danger btn-block\">Delete</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.website = { _id: '', name: '', developerId: '', description: '' };
        this.websites = [this.website];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) { return _this.handleRouteChange(params); });
    };
    WebsiteEditComponent.prototype.handleRouteChange = function (params) {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
        this.website = this.websiteService.findWebsiteById(this.websiteId);
        this.name = this.website['name'];
        this.description = this.website['description'];
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteEditComponent.prototype.editWebsite = function () {
        this.website.name = this.websiteEditForm.value.name;
        this.website.description = this.websiteEditForm.value.description;
        this.websiteService.updateWebsite(this.websiteId, this.website);
    };
    WebsiteEditComponent.prototype.deleteCurrentWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        this.router.navigate(['/user/' + this.userId + '/website']);
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('websiteEditForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteEditForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <span class=\"navbar-brand thick navbar-link\">\n        <b>Websites</b>\n      </span>\n    </p>\n\n    <!--plus sign-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngFor=\"let website of websites\">\n    <div class=\"row aps-list-spacing\">\n      <div class=\"col-xs-11\">\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n      </div>\n      <div class=\"col-xs-1\">\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(_websiteService, activatedRoute) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        // website: {_id: string, name: string, developerId: string, description: string};
        this.website = { _id: '', name: '', developerId: '', description: '' };
        this.websites = [this.website];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.websites = this._websiteService.findWebsitesByUser(this.userId);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Websites -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Websites</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Website-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n           <b>New Website</b>\n          </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding\">\n  <div class=\"row\">\n    <div class=\"container col-md-4 hidden-xs hidden-sm\">\n      <div class=\"container\">\n        <div *ngFor=\"let website of websites\">\n          <div class=\"row aps-list-spacing\">\n            <div class=\"col-md-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            </div>\n            <div class=\"col-md-1\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n      <form class=\"aps-form-padding\"\n            (ngSubmit) = \"newWebsite()\"\n            #websiteNewForm=\"ngForm\">\n        <label for=\"name\">Name</label>\n        <input id=\"name\"\n               name=\"name\"\n               #name=\"ngModel\"\n               ngModel\n               required\n               class=\"form-control\"\n               type=\"text\"\n               placeholder=\"Website Name\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a website name!\n      </span>\n\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control\"\n                  rows=\"5\"\n                  id=\"description\"\n                  name=\"description\"\n                  #description=\"ngModel\"\n                  ngModel\n                  required\n                  placeholder=\"Website Description\"></textarea>\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!websiteNewForm.valid\">Create Website</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.website = { _id: '', name: '', developerId: '', description: '' };
        this.websites = [this.website];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteNewComponent.prototype.newWebsite = function () {
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
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('websiteNewForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteNewForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"createHeader()\">Header</a>\n    </p>\n    <p>\n      <a routerLink=\".\">Label</a>\n    </p>\n    <p>\n      <a routerLink=\".\">HTML</a>\n    </p>\n    <p>\n      <a routerLink=\".\">Text Input</a>\n    </p>\n    <p>\n      <a routerLink=\".\">Link</a>\n    </p>\n    <p>\n      <a routerLink=\".\">Button</a>\n    </p>\n    <p>\n      <a (click)=\"createImage()\">Image</a>\n    </p>\n    <p>\n      <a (click)=\"createYoutube()\">YouTube</a>\n    </p>\n    <p>\n      <a routerLink=\".\">Data Table</a>\n    </p>\n    <p>\n      <a routerLink=\".\">Repeater</a>\n    </p>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
    };
    WidgetChooserComponent.prototype.createHeader = function () {
        this.widget.widgetType = 'HEADING';
        this.widget.size = 1;
        this.widget = this.widgetService.createWidget(this.pageId, this.widget);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
    };
    WidgetChooserComponent.prototype.createImage = function () {
        this.widget.widgetType = 'IMAGE';
        this.widget.width = '100%';
        this.widget = this.widgetService.createWidget(this.pageId, this.widget);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
    };
    WidgetChooserComponent.prototype.createYoutube = function () {
        this.widget.widgetType = 'YOUTUBE';
        this.widget.width = '100%';
        this.widget = this.widgetService.createWidget(this.pageId, this.widget);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widget._id]);
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(_widgetService, activatedRoute) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
        this.widget = this._widgetService.findWidgetById(this.widgetId);
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid aps-body-padding\">\n  <form class=\"aps-form-padding\"\n        (ngSubmit)=\"editHeader()\" #widgetHeaderForm=\"ngForm\">\n\n    <label for=\"text\">Text</label>\n    <input id=\"text\"\n           name=\"text\"\n           [(ngModel)]=\"text\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"Text of widget\"/>\n    <span class=\"help-block\" *ngIf=\"!text.valid && text.touched\">\n      Please enter some widget text!\n    </span>\n\n    <label for=\"size\">Size</label>\n    <input id=\"size\"\n           name=\"size\"\n           min=\"1\"\n           max=\"6\"\n           [(ngModel)]=\"size\"\n           required\n           type=\"number\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"#\"/>\n    <span class=\"help-block\" *ngIf=\"!size.valid && size.touched\">\n      Please enter a header size!\n    </span>\n    <button type=\"submit\"\n            class=\"btn btn-primary btn-block\"\n            [disabled]=\"!widgetHeaderForm.valid\">Save</button>\n    <button type=\"button\"\n            (click)=\"deleteHeader()\"\n            class=\"btn btn-danger btn-block\">Delete</button>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = (function () {
    // widgetText: String;
    // size: Number;
    function WidgetHeaderComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.text = this.widget.text;
        this.size = this.widget.size;
    };
    WidgetHeaderComponent.prototype.editHeader = function () {
        this.widget.text = this.widgetHeaderForm.value.text;
        this.widget.size = this.widgetHeaderForm.value.size;
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetHeaderComponent.prototype.deleteHeader = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('widgetHeaderForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "widgetHeaderForm", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid aps-body-padding\">\n  <form class=\"aps-form-padding\"\n        (ngSubmit) = \"editImage()\" #widgetImageForm=\"ngForm\">\n\n    <label for=\"url\">URL</label>\n    <input id=\"url\"\n           name=\"url\"\n           [(ngModel)]=\"url\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"\"/>\n    <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n      Please enter a url!\n    </span>\n\n    <label for=\"width\">Width</label>\n    <input id=\"width\"\n           name=\"width\"\n           [(ngModel)]=\"width\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"100%\"/>\n    <span class=\"help-block\" *ngIf=\"!width.valid && width.touched\">\n      Please enter a width as a percentage!\n    </span>\n\n    <!--<label for=\"file\">Upload</label>-->\n    <!--<input id=\"file\"-->\n           <!--name=\"file\"-->\n           <!--[(ngModel)]=\"file\"-->\n           <!--required-->\n           <!--type=\"file\"-->\n           <!--class=\"form-control aps-field-spacing\"/>-->\n\n    <button type=\"submit\"\n            [disabled]=\"!widgetImageForm.valid\"\n            class=\"btn btn-primary btn-block\">Save</button>\n\n    <button type=\"button\"\n            (click)=\"deleteImage()\"\n            class=\"btn btn-danger btn-block\">Delete</button>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    // widgetText: String;
    // file: File;
    function WidgetImageComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.width = this.widget.width;
        this.url = this.widget.url;
    };
    WidgetImageComponent.prototype.editImage = function () {
        this.widget.url = this.widgetImageForm.value.url;
        this.widget.width = this.widgetImageForm.value.width;
        // this.widget.file = this.widgetImageForm.value.file;
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('widgetImageForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "widgetImageForm", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid aps-body-padding\">\n  <form class=\"aps-form-padding\"\n        (ngSubmit)=\"editYoutube()\" #widgetYoutubeForm=\"ngForm\">\n\n    <label for=\"url\">URL</label>\n    <input id=\"url\"\n           name=\"url\"\n           [(ngModel)]=\"url\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"\"/>\n    <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n      Please enter a url!\n    </span>\n\n    <label for=\"width\">Width</label>\n    <input id=\"width\"\n           name=\"width\"\n           [(ngModel)]=\"width\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"100%\"/>\n    <span class=\"help-block\" *ngIf=\"!width.valid && width.touched\">\n      Please enter a width as a percentage!\n    </span>\n    <button type=\"submit\"\n            [disabled]=\"!widgetYoutubeForm.valid\"\n            class=\"btn btn-primary btn-block\">Save</button>\n\n    <button type=\"button\"\n            (click)=\"deleteYoutube()\"\n            class=\"btn btn-danger btn-block\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    // widgetText: String;
    function WidgetYoutubeComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.width = this.widget.width;
        this.url = this.widget.url;
    };
    WidgetYoutubeComponent.prototype.editYoutube = function () {
        this.widget.url = this.widgetYoutubeForm.value.url;
        this.widget.width = this.widgetYoutubeForm.value.width;
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('widgetYoutubeForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "widgetYoutubeForm", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n    <!--plus sign -->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngFor=\"let widget of widgets\">\n    <div class=\"aps-widget\">\n      <div class=\"aps-toolbar\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </div>\n      <div [ngSwitch]=\"widget.widgetType\">\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div [ngSwitch]=\"widget.size\">\n            <h1 *ngSwitchCase=1>{{widget.text}}</h1>\n            <h2 *ngSwitchCase=2>{{widget.text}}</h2>\n            <h3 *ngSwitchCase=3>{{widget.text}}</h3>\n            <h4 *ngSwitchCase=4>{{widget.text}}</h4>\n            <h5 *ngSwitchCase=5>{{widget.text}}</h5>\n            <h6 *ngSwitchDefault>{{widget.text}}</h6>\n          </div>\n        </div>\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img [src]=\"widget.url\" [style.width.%]=\"widget.width.slice(0, widget.width.length - 1)\" />\n        </div>\n        <div *ngSwitchCase=\"'HTML'\">\n          {{widget.text}}\n        </div>\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <iframe class=\"e2e-iframe-trusted-src\" [style.width.%]=\"widget.width.slice(0, widget.width.length - 1)\" [src]=sanitizer.bypassSecurityTrustResourceUrl(widget.url) frameborder=\"0\" allowfullscreen></iframe>        </div>\n        <div *ngSwitchDefault>\n          <h3>Switch Default</h3>\n          <p>{{widget._id}}: {{widget.widgetType}} - {{widget.text}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-heading.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h1>Gizmodo</h1>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"#\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <p>Reviving unresponsive patients has long been a dream of humanity, and an oft-talked about part of the human condition. Maybe you’ve cried along with <a href=\"http://www.imdb.com/title/tt0099077/\" target=\"_blank\" rel=\"noopener\">the movie </a><a href=\"http://www.imdb.com/title/tt0099077/\" target=\"_blank\" rel=\"noopener\"><em>Awakenings</em></a><em>, </em>or had long conversations with relatives about what happens should you or they end up in the <a href=\"https://www.nbcnews.com/health/health-news/bioethicist-tk-n333536\" target=\"_blank\" rel=\"noopener\">same position</a>. <br></p>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-heading.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h2>Bassoon Family</h2>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-image.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img src=\"http://www.bassoonresource.org/images/bssnprog1.jpg\"\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-youtube.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/8ropWor8aAM\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"#\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <p>Darci Lynne: Kid Ventriloquist Sings With A Little Help From Her Friends - America's Got Talent 2017</p>\n  </div>\n\n\n</div> -->\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\".\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n      <a routerLink=\".\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NgSwitch} from '@angular/common';

var WidgetListComponent = (function () {
    function WidgetListComponent(_widgetService, activatedRoute, sanitizer) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.widgets = [{ _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' }];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
        this.widgets = this._widgetService.findWidgetByPageId(this.pageId);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageServiceClient = (function () {
    function PageServiceClient() {
        this.pages = [
            { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem Post 1 Ipsum' },
            { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem Post 2 Ipsum' },
            { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem Post 3 Ipsum' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageServiceClient.prototype.findNextPageId = function () {
        var foundNewId = false;
        var newId = 123;
        while (!foundNewId) {
            var min = Math.ceil(100);
            var max = Math.floor(999);
            newId = Math.floor(Math.random() * (max - min)) + min;
            if (!this.findPageById(newId.toString())) {
                foundNewId = true;
            }
        }
        return newId.toString();
    };
    PageServiceClient.prototype.createPage = function (websiteId, page) {
        page._id = this.findNextPageId();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageServiceClient.prototype.findPagesByWebsiteId = function (websiteId) {
        var foundPages = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                foundPages.push(this.pages[x]);
            }
        }
        return foundPages;
    };
    PageServiceClient.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    PageServiceClient.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            var _page = this.pages[x];
            if (_page._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].description = page.description;
            }
        }
    };
    PageServiceClient.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageServiceClient;
}());
PageServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageServiceClient);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");

var USERS = [
    new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice.wonderland@unicorn.com'),
    new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('234', 'bob', 'bob', 'Bob', 'Marley', 'bob.marley@regge.com'),
    new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('345', 'charly', 'charly', 'Charly', 'Garcia', 'bob.marley@regge.com'),
    new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'j.annunzi@northeastern.edu')
];
//# sourceMappingURL=user.mock.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_mock__ = __webpack_require__("../../../../../src/app/services/user.mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserServiceClient = (function () {
    // users = [
    //   {_id: '123', username: 'alice',    password: 'alice',
    //     firstName: 'Alice',  lastName: 'Wonder', email: 'alice.wonderland@unicorn.com'  },
    //   {_id: '234', username: 'bob',      password: 'bob',
    //     firstName: 'Bob',    lastName: 'Marley', email: 'bob.marley@regge.com'  },
    //   {_id: '345', username: 'charly',   password: 'charly',
    //     firstName: 'Charly', lastName: 'Garcia', email: 'charly.garcia@icecream.com'  },
    //   {_id: '456', username: 'jannunzi', password: 'jannunzi',
    //     firstName: 'Jose',   lastName: 'Annunzi', email: 'j.annunzi@northeastern.edu' }
    // ];
    function UserServiceClient(_http) {
        this._http = _http;
        this.users = __WEBPACK_IMPORTED_MODULE_4__user_mock__["a" /* USERS */];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserServiceClient.prototype.createUser = function (user) {
        user._id = Math.random();
        this.users.push(user);
        return user;
    };
    UserServiceClient.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {
        //     return this.users[x];
        //   }
        // }
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return this.users.find(function (user) {
            return user.username === username;
        });
    };
    UserServiceClient.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            // console.log(res.json());
            return res.json();
        });
        // return this.users.find(function(user) {
        //   return user.username === username && user.password === password;
        // });
    };
    UserServiceClient.prototype.updateUser = function (userId, user) {
        // console.log('about to call user.service.server');
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            // console.log('server has responded.');
            return res.json();
        });
        // for (let x = 0; x < this.users.length; x++) {
        //   const _user = this.users[x];
        //   if (_user._id === userId) {
        //     this.users[x].firstName = user.firstName;
        //     this.users[x].lastName = user.lastName;
        //     this.users[x].password = user.password;
        //   }
        // }
    };
    UserServiceClient.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    return UserServiceClient;
}());
UserServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserServiceClient);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsiteServiceClient = (function () {
    function WebsiteServiceClient() {
        this.websites = [
            { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem Facebook Ipsum' },
            { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem Tweeter Ipsum' },
            { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem Gizmodo Ipsum' },
            { _id: '890', name: 'Go', developerId: '123', description: 'Lorem Go Ipsum' },
            { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem Tic Tac Toe Ipsum' },
            { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem Checkers Ipsum' },
            { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem Chess Ipsum' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteServiceClient.prototype.findNextWebsiteId = function () {
        var foundNewId = false;
        var newId = 123;
        while (!foundNewId) {
            var min = Math.ceil(100);
            var max = Math.floor(999);
            newId = Math.floor(Math.random() * (max - min)) + min;
            if (!this.findWebsiteById(newId.toString())) {
                foundNewId = true;
            }
        }
        return newId.toString();
    };
    WebsiteServiceClient.prototype.createWebsite = function (userId, website) {
        website._id = this.findNextWebsiteId();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteServiceClient.prototype.findWebsitesByUser = function (userId) {
        var foundSites = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                foundSites.push(this.websites[x]);
            }
        }
        return foundSites;
    };
    WebsiteServiceClient.prototype.findWebsiteById = function (websiteId) {
        return this.websites.find(function (site) {
            return site._id === websiteId;
        });
    };
    WebsiteServiceClient.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            var _site = this.websites[x];
            if (_site._id === websiteId) {
                this.websites[x].name = website.name;
                this.websites[x].description = website.description;
            }
        }
    };
    WebsiteServiceClient.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites.splice(x, 1);
            }
        }
    };
    return WebsiteServiceClient;
}());
WebsiteServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteServiceClient);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetServiceClient = (function () {
    function WidgetServiceClient() {
        this.widgets = [
            { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', width: '', url: '' },
            { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: '' },
            { _id: '345', widgetType: 'IMAGE', pageId: '321', size: 0, text: '', width: '100%', url: 'http://lorempixel.com/400/200/' },
            { _id: '456', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: '' },
            { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: '' },
            { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: 0, text: '', width: '100%', url: 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
            { _id: '789', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: '' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetByPageId': this.findWidgetByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetServiceClient.prototype.findNextWidgetId = function () {
        var foundNewId = false;
        var newId = 123;
        while (!foundNewId) {
            var min = Math.ceil(100);
            var max = Math.floor(999);
            newId = Math.floor(Math.random() * (max - min)) + min;
            if (!this.findWidgetById(newId.toString())) {
                foundNewId = true;
            }
        }
        return newId.toString();
    };
    WidgetServiceClient.prototype.createWidget = function (pageId, widget) {
        widget._id = this.findNextWidgetId();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetServiceClient.prototype.findWidgetByPageId = function (pageId) {
        var foundWidgets = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                foundWidgets.push(this.widgets[x]);
            }
        }
        return foundWidgets;
    };
    WidgetServiceClient.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
    };
    WidgetServiceClient.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            var _widget = this.widgets[x];
            if (_widget._id === widgetId) {
                this.widgets[x] = widget;
                // this.widgets[x].widgetType = widget.widgetType;
                // switch (this.widgets[x].widgetType) {
                //   case 'HEADING':
                //     this.widgets[x].size = widget.size;
                //     this.widgets[x].text = widget.text;
                //     break;
                //   case 'HTML':
                //     this.widgets[x].text = widget.text;
                //     break;
                //   case 'IMAGE':
                //   case 'YOUTUBE':
                //     this.widgets[x].width = widget.width;
                //     this.widgets[x].url = widget.url;
                //     break;
                //   default:
                //     break;
                // }
            }
        }
    };
    WidgetServiceClient.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetServiceClient;
}());
WidgetServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetServiceClient);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map