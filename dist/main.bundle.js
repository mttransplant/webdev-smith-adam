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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























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
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/**
 * Created by sesha on 7/26/17.
 */














var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website/:wid/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Websites -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Pages</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website/:wid/page/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New page-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website/:wid/page\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>Edit Page</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website/:wid/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row aps-body-padding\">\n  <div class=\"container col-md-4 hidden-xs hidden-sm\">\n    <div class=\"container\">\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blog Post</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blogs</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Home</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">About</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Contact Us</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n    <form class=\"aps-form-padding\"\n          (ngSubmit) = \"editPage()\"\n          #pageEditForm=\"ngForm\">\n\n      <label for=\"name\">Name</label>\n      <input id=\"name\"\n             name=\"name\"\n             #name=\"ngModel\"\n             [(ngModel)]=\"name\"\n             required\n             class=\"form-control aps-field-spacing\"\n             type=\"text\"\n             placeholder=\"Blog Post\"/>\n      <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a name!\n      </span>\n\n      <label for=\"description\">Description</label>\n      <input class=\"form-control aps-field-spacing\"\n             type=\"text\"\n             id=\"description\"\n             name=\"description\"\n             #description=\"ngModel\"\n             [(ngModel)]=\"description\"\n             required\n             placeholder=\"Page Description\"/>\n      <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n        Please enter a description!\n      </span>\n\n      <button type=\"submit\"\n              class=\"btn btn-primary btn-block\"\n              [disabled]=\"!pageEditForm.valid\">Save Changes</button>\n\n      <button type=\"reset\"\n              class=\"btn btn-danger btn-block\">Delete</button>\n    </form>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
    function PageEditComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.page = { _id: '', name: '', websiteId: '', description: '' };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pageId'];
        });
        this.page = this.pageService.findPageById(this.pageId);
        this.name = this.page['name'];
    };
    PageEditComponent.prototype.editPage = function () {
        this.page.name = this.pageEditForm.value.name;
        this.page.description = this.pageEditForm.value.title;
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--plus sign-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngFor=\"let page of pages\">\n    <div class=\"row aps-list-spacing\">\n      <div class=\"col-xs-11\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n      </div>\n      <div class=\"col-xs-1\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n  <!--\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blog Post</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n\n\n\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blogs</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Home</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">About</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Contact Us</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</div> -->\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
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
    function PageListComponent(_pageService, activatedRoute, _websiteService) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this._websiteService = _websiteService;
        this.pages = [{ _id: '', name: '', websiteId: '', description: '' }];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
        });
        this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
        this.userId = this._websiteService.findWebsiteById(this.websiteId).developerId;
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website/:wid/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Pages -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Pages</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website/:wid/page/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Page-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website/:wid/page\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>New Page</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website/:wid/page\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row aps-body-padding\">\n  <div class=\"container col-md-4 hidden-xs hidden-sm\">\n    <div class=\"container\">\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blog Post</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Blogs</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Home</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">About</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\">Contact Us</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid/page/:pid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n    <form class=\"aps-form-padding\"\n          (ngSubmit) = \"newPage()\"\n          #pageNewForm=\"ngForm\">\n\n      <label for=\"name\">Name</label>\n      <input id=\"name\"\n             name=\"name\"\n             #name=\"ngModel\"\n             ngModel\n             required\n             class=\"form-control aps-field-spacing\"\n             type=\"text\"\n             placeholder=\"Page Name\"/>\n      <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a name!\n      </span>\n\n      <label for=\"title\">Title</label>\n      <textarea class=\"form-control\"\n                rows=\"5\"\n                id=\"title\"\n                name=\"title\"\n                #title=\"ngModel\"\n                ngModel\n                required\n                placeholder=\"Page Title\"></textarea>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!pageNewForm.valid\">Create</button>\n    </form>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    PageNewComponent.prototype.newPage = function () {
        this.name = this.pageNewForm.value.name;
        this.title = this.pageNewForm.value.title;
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
    __metadata("design:paramtypes", [])
], PageNewComponent);

var _a;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control aps-field-spacing\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n\n\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Login</button>\n      <button class=\"btn btn-success btn-block\" routerLink=\"register\" >Register</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function LoginComponent() {
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loginForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

var _a;
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid aps-body-padding\">\n  <form (ngSubmit) = \"updateProfile()\" #profileForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             name=\"username\"\n             id=\"username\"\n             [(ngModel)]=\"username\"\n             required\n             #username=\"ngModel\"\n             placeholder=\"username\">\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"email\"\n             [(ngModel)]=\"email\"\n             required\n             #email=\"ngModel\"\n             placeholder=\"alice.wonderland@unicorn.com\">\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter email!\n      </span>\n\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"firstName\"\n             name=\"firstName\"\n             [(ngModel)]=\"firstName\"\n             required\n             #firstName=\"ngModel\"\n             placeholder=\"Alice\">\n      <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n      Please enter your first name!\n      </span>\n\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\"\n             name=\"lastName\"\n             [(ngModel)]=\"lastName\"\n             required\n             #lastName=\"ngModel\"\n             placeholder=\"Wonderland\">\n      <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n      Please enter your last name!\n      </span>\n    </div>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!loginForm.valid\">Update</button>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"user/:uid/website\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"login\">Logout</a>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.user = { _id: '', username: '', password: '', firstName: '', lastName: '', email: '' };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.username = this.user['username'];
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.user.email = this.profileForm.value.email;
        this.user.firstName = this.profileForm.value.firstName;
        this.user.lastName = this.profileForm.value.lastName;
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('profileForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit) = \"register()\" #registerForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             type=\"text\"\n             name=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n\n      <input placeholder=\"password\"\n             type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n\n      <input placeholder=\"verify password\"\n             type=\"password\"\n             name=\"verification\"\n             ngModel\n             required\n             #verification=\"ngModel\"\n             class=\"form-control aps-field-spacing\"/>\n      <span class=\"help-block\" *ngIf=\"password.value != verification.value\">\n      Passwords do not match!\n      </span>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n         [disabled]=\"!registerForm.valid\" >Register</button>\n      <a class=\"btn btn-danger btn-block\"\n         routerLink=\"login\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function RegisterComponent() {
        // properties
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        if (this.registerForm.value.password === this.registerForm.value.verifcation) {
            this.username = this.registerForm.value.username;
            this.password = this.registerForm.value.password;
        }
        else {
            this.errorMsg = 'Password and verification do not match!';
            this.errorFlag = true;
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
    __metadata("design:paramtypes", [])
], RegisterComponent);

var _a;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website/\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Websites -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Websites</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Website-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website/\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>Edit Website</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website/\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row aps-body-padding\">\n  <div class=\"container col-md-4 hidden-xs hidden-sm\">\n    <div class=\"container\">\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/page\">Address Book App</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/page\">Blogger</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/page\">Blogging App</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/page\">Script Testing App</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n    <form class=\"aps-form-padding\"\n          (ngSubmit) = \"editWebsite()\"\n          #websiteEditForm=\"ngForm\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\"\n             name=\"name\"\n             #name=\"ngModel\"\n             [(ngModel)]=\"name\"\n             required\n             class=\"form-control aps-field-spacing\"\n             type=\"text\"\n             placeholder=\"Website Name\"/>\n      <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a name!\n      </span>\n\n      <label for=\"description\">Description</label>\n      <textarea class=\"form-control aps-field-spacing\"\n                rows=\"5\"\n                id=\"description\"\n                name=\"description\"\n                #description=\"ngModel\"\n                [(ngModel)]=\"description\"\n                required>Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which ws bought by Google in 2003. Generally, the blogs are hosted by Google at a subdomain of blogspot.com. Blogs can also be hosted in the registered custom domain of the blogger (like www.example.com).[4] A user can have up to 100 blogs per account.</textarea>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!websiteEditForm.valid\">Update</button>\n      <button type=\"reset\" class=\"btn btn-danger btn-block\">Delete</button>\n    </form>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
    function WebsiteEditComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.website = { _id: '', name: '', developerId: '', description: '' };
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
        });
        this.website = this.websiteService.findWebsiteById(this.websiteId);
        this.name = this.website['name'];
    };
    WebsiteEditComponent.prototype.editWebsite = function () {
        this.website.name = this.websiteEditForm.value.name;
        this.website.description = this.websiteEditForm.value.description;
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{websites[0].developerId}}\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n    <!--plus sign-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/{{userId}}/website/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngFor=\"let website of websites\">\n    <div class=\"row aps-list-spacing\">\n      <div class=\"col-xs-11\">\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n      </div>\n      <div class=\"col-xs-1\">\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n  <!--\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page\">Address Book App</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page\">Blogger</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page\">Blogging App</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"row aps-list-spacing\">\n    <div class=\"col-xs-11\">\n      <a routerLink=\"user/:uid/website/:wid/page\">Script Testing App</a>\n    </div>\n    <div class=\"col-xs-1\">\n      <a routerLink=\"user/:uid/website/:wid\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</div> -->\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
        this.websites = [{ _id: '', name: '', developerId: '', description: '' }];
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Websites -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Websites</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Website-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"user/:uid/website\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>New Website</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"user/:uid/website\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row aps-body-padding\">\n  <div class=\"container col-md-4 hidden-xs hidden-sm\">\n    <div class=\"container\">\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page\">Address Book App</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page\">Blogger</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page\">Blogging App</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n      <div class=\"row aps-list-spacing\">\n        <div class=\"col-md-3\">\n          <a routerLink=\"user/:uid/website/:wid/page\">Script Testing App</a>\n        </div>\n        <div class=\"col-md-1\">\n          <a routerLink=\"user/:uid/website/:wid\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n    <form class=\"aps-form-padding\"\n          (ngSubmit) = \"newWebsite()\" #websiteNewForm=\"ngForm\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\"\n             name=\"name\"\n             #name=\"ngModel\"\n             ngModel\n             required\n             class=\"form-control\"\n             type=\"text\"\n             placeholder=\"Website Name\"/>\n      <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a website name!\n      </span>\n\n      <label for=\"description\">Description</label>\n      <textarea class=\"form-control\"\n                rows=\"5\"\n                id=\"description\"\n                name=\"description\"\n                #description=\"ngModel\"\n                ngModel\n                required\n                placeholder=\"Description\"></textarea>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!websiteNewForm.valid\">Create Website</button>\n    </form>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    WebsiteNewComponent.prototype.newWebsite = function () {
        this.name = this.websiteNewForm.value.name;
        this.description = this.websiteNewForm.value.description();
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
    __metadata("design:paramtypes", [])
], WebsiteNewComponent);

var _a;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding\">\n  <div class=\"container-fluid\">\n    <p>\n      <a href=\"widget-heading.html\">Header</a>\n    </p>\n    <p>\n      <a href=\"#\">Label</a>\n    </p>\n    <p>\n      <a href=\"#\">HTML</a>\n    </p>\n    <p>\n      <a href=\"#\">Text Input</a>\n    </p>\n    <p>\n      <a href=\"#\">Link</a>\n    </p>\n    <p>\n      <a href=\"#\">Button</a>\n    </p>\n    <p>\n      <a href=\"widget-image.html\">Image</a>\n    </p>\n    <p>\n      <a href=\"widget-youtube.html\">YouTube</a>\n    </p>\n    <p>\n      <a href=\"#\">Data Table</a>\n    </p>\n    <p>\n      <a href=\"#\">Repeater</a>\n    </p>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
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

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

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

module.exports = "<div *ngFor=\"let widget of widgets\">\n  <div [ngSwitch]=\"widget.widgetType\">\n    <div *ngSwitchCase=\"'HEADING'\">\n      <app-widget-header></app-widget-header>\n    </div>\n    <div *ngSwitchCase=\"'YOUTUBE'\">\n      <app-widget-youtube></app-widget-youtube>\n    </div>\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <app-widget-image></app-widget-image>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetEditComponent(_widgetService, _pageService, activatedRoute, _websiteService) {
        this._widgetService = _widgetService;
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this._websiteService = _websiteService;
        this.widgets = [{ _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' }];
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pageId'];
        });
        this.widgets = this._widgetService.findWidgetByPageId(this.pageId);
        this.websiteId = this._pageService.findPageById(this.pageId).websiteId;
        this.userId = this._websiteService.findWebsiteById(this.websiteId).developerId;
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object])
], WidgetEditComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <form class=\"aps-form-padding\"\n        (ngSubmit)=\"createHeader()\" #widgetHeaderForm=\"ngForm\">\n    <label for=\"name\">Name</label>\n    <input id=\"name\"\n           name=\"name\"\n           #name=\"ngModel\"\n           [(ngModel)]=\"name\"\n           required\n           type=\"text\"\n           placeholder=\"Widget Name\"\n           class=\"form-control aps-field-spacing\"/>\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n      Please enter a widget name!\n    </span>\n\n    <label for=\"widgetText\">Text</label>\n    <input id=\"widgetText\"\n           name=\"widgetText\"\n           #widgetText=\"ngModel\"\n           [(ngModel)]=\"widgetText\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"Text of widget\"/>\n    <span class=\"help-block\" *ngIf=\"!widgetText.valid && widgetText.touched\">\n      Please enter some widget text!\n    </span>\n\n    <label for=\"size\">Size</label>\n    <input id=\"size\"\n           name=\"size\"\n           #size=\"ngModel\"\n           [(ngModel)]=\"size\"\n           required\n           type=\"number\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"#\"/>\n    <span class=\"help-block\" *ngIf=\"!size.valid && size.touched\">\n      Please enter a header size!\n    </span>\n    <button type=\"submit\"\n            class=\"btn btn-primary btn-block\"\n            [disabled]=\"!widgetHeaderForm.valid\">Create Widget</button>\n    <button type=\"reset\" class=\"btn btn-danger btn-block\">Delete</button>\n  </form>\n\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
    function WidgetHeaderComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetHeaderComponent.prototype.createHeader = function () {
        this.widget.text = this.widgetHeaderForm.value.name;
        this.widget.text = this.widgetHeaderForm.value.widgetText;
        this.widget.size = this.widgetHeaderForm.value.size;
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <form class=\"aps-form-padding\"\n        (ngSubmit) = \"createImage()\" #widgetImageForm=\"ngForm\">\n    <label for=\"name\">Name</label>\n    <input id=\"name\"\n           name=\"name\"\n           #name=\"ngModel\"\n           [(ngModel)]=\"name\"\n           required\n           type=\"text\"\n           placeholder=\"Image Name\"\n           class=\"form-control aps-field-spacing\"/>\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n      Please enter an image name!\n    </span>\n\n    <label for=\"widgetText\">Text</label>\n    <input id=\"widgetText\"\n           name=\"widgetText\"\n           #widgetText=\"ngModel\"\n           [(ngModel)]=\"widgetText\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"Image description\"/>\n    <span class=\"help-block\" *ngIf=\"!widgetText.valid && widgetText.touched\">\n      Please enter a description!\n    </span>\n\n    <label for=\"url\">URL</label>\n    <input id=\"url\"\n           name=\"url\"\n           #url=\"ngModel\"\n           [(ngModel)]=\"url\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"\"/>\n    <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n      Please enter a url!\n    </span>\n\n    <label for=\"width\">Width</label>\n    <input id=\"width\"\n           name=\"width\"\n           #width=\"ngModel\"\n           [(ngModel)]=\"width\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"100%\"/>\n    <span class=\"help-block\" *ngIf=\"!width.valid && width.touched\">\n      Please enter a width as a percentage!\n    </span>\n\n    <label for=\"file\">Upload</label>\n    <input id=\"file\"\n           name=\"file\"\n           #file=\"ngModel\"\n           [(ngModel)]=\"file\"\n           required\n           type=\"file\"\n           class=\"form-control aps-field-spacing\"/>\n\n    <button type=\"submit\"\n            [disabled]=\"!widgetImageForm.valid\"\n            class=\"btn btn-primary btn-block\">Upload Image</button>\n\n    <button type=\"reset\"\n            class=\"btn btn-danger btn-block\">Delete</button>\n  </form>\n\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
    // url: String;
    // width: String;
    // file: File;
    function WidgetImageComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetImageComponent.prototype.createImage = function () {
        this.widget.text = this.widgetImageForm.value.name;
        this.widget.text = this.widgetImageForm.value.widgetText;
        this.widget.url = this.widgetImageForm.value.url;
        this.widget.width = this.widgetImageForm.value.width;
        // this.widget.file = this.widgetImageForm.value.file;
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <form class=\"aps-form-padding\"\n        (ngSubmit)=\"createYoutube()\" #widgetYoutubeForm=\"ngForm\">\n    <label for=\"name\">Name</label>\n    <input id=\"name\"\n           name=\"name\"\n           #name=\"ngModel\"\n           [(ngModel)]=\"name\"\n           required\n           type=\"text\"\n           placeholder=\"Image Name\"\n           class=\"form-control aps-field-spacing\"/>\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n      Please enter an image name!\n    </span>\n\n    <label for=\"widgetText\">Text</label>\n    <input id=\"widgetText\"\n           name=\"widgetText\"\n           #widgetText=\"ngModel\"\n           [(ngModel)]=\"widgetText\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"Image description\"/>\n    <span class=\"help-block\" *ngIf=\"!widgetText.valid && widgetText.touched\">\n      Please enter a description!\n    </span>\n\n    <label for=\"url\">URL</label>\n    <input id=\"url\"\n           name=\"url\"\n           #url=\"ngModel\"\n           [(ngModel)]=\"url\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"\"/>\n    <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n      Please enter a url!\n    </span>\n\n    <label for=\"width\">Width</label>\n    <input id=\"width\"\n           name=\"width\"\n           #width=\"ngModel\"\n           [(ngModel)]=\"width\"\n           required\n           type=\"text\"\n           class=\"form-control aps-field-spacing\"\n           placeholder=\"100%\"/>\n    <span class=\"help-block\" *ngIf=\"!width.valid && width.touched\">\n      Please enter a width as a percentage!\n    </span>\n    <button type=\"submit\"\n            [disabled]=\"!widgetYoutubeForm.valid\"\n            class=\"btn btn-primary btn-block\">Create Widget</button>\n\n    <button type=\"reset\" class=\"btn btn-danger btn-block\">Delete</button>\n  </form>\n\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
    // url: String;
    // width: String;
    function WidgetYoutubeComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = { _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' };
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    WidgetYoutubeComponent.prototype.createYoutube = function () {
        this.widget.text = this.widgetYoutubeForm.value.name;
        this.widget.text = this.widgetYoutubeForm.value.widgetText;
        this.widget.url = this.widgetYoutubeForm.value.url;
        this.widget.width = this.widgetYoutubeForm.value.width;
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n    <!--plus sign -->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngFor=\"let widget of widgets\">\n    <div class=\"aps-widget\">\n      <div class=\"aps-toolbar\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </div>\n      <p>{{widget._id}}: {{widget.widgetType}} - {{widget.text}}</p>\n    </div>\n  </div>\n</div>\n\n<!--\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-heading.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h1>Gizmodo</h1>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"#\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <p>Reviving unresponsive patients has long been a dream of humanity, and an oft-talked about part of the human condition. Maybe you’ve cried along with <a href=\"http://www.imdb.com/title/tt0099077/\" target=\"_blank\" rel=\"noopener\">the movie </a><a href=\"http://www.imdb.com/title/tt0099077/\" target=\"_blank\" rel=\"noopener\"><em>Awakenings</em></a><em>, </em>or had long conversations with relatives about what happens should you or they end up in the <a href=\"https://www.nbcnews.com/health/health-news/bioethicist-tk-n333536\" target=\"_blank\" rel=\"noopener\">same position</a>. <br></p>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-heading.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h2>Bassoon Family</h2>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-image.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img src=\"http://www.bassoonresource.org/images/bssnprog1.jpg\"\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"widget-youtube.html\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/8ropWor8aAM\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n\n  <div class=\"aps-widget\">\n    <div class=\"aps-toolbar\">\n      <a href=\"#\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <p>Darci Lynne: Kid Ventriloquist Sings With A Little Help From Her Friends - America's Got Talent 2017</p>\n  </div>\n\n\n</div> -->\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a href=\"#\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n      <a href=\"#\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    function WidgetListComponent(_widgetService, _pageService, activatedRoute, _websiteService) {
        this._widgetService = _widgetService;
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this._websiteService = _websiteService;
        this.widgets = [{ _id: '', widgetType: '', pageId: '', size: 0, text: '', width: '', url: '' }];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pageId'];
        });
        this.widgets = this._widgetService.findWidgetByPageId(this.pageId);
        this.websiteId = this._pageService.findPageById(this.pageId).websiteId;
        this.userId = this._websiteService.findWebsiteById(this.websiteId).developerId;
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
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


var PageService = (function () {
    function PageService() {
        this.pages = [
            { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
            { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
            { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.random();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var foundPages = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                foundPages.push(this.pages[x]);
            }
        }
        return foundPages;
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            var _page = this.pages[x];
            if (_page._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].description = page.description;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

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

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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


var UserService = (function () {
    function UserService() {
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: '' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: '' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: '' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: '' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.users.find(function (user) {
            return user.username === username;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            var _user = this.users[x];
            if (_user._id === userId) {
                this.users[x].firstName = user.firstName;
                this.users[x].lastName = user.lastName;
                this.users[x].password = user.password;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
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


var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
            { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
            { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
            { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
            { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
            { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
            { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.random();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var foundSites = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                foundSites.push(this.websites[x]);
            }
        }
        return foundSites;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.websites.find(function (site) {
            return site._id === websiteId;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            var _site = this.websites[x];
            if (_site._id === websiteId) {
                this.websites[x].name = website.name;
                this.websites[x].description = website.description;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites.splice(x, 1);
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
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


var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', width: '', url: '' },
            { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: '' },
            { _id: '345', widgetType: 'IMAGE', pageId: '321', size: 0, text: '', width: '100%', url: 'http://lorempixel.com/400/200/' },
            { _id: '456', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: '' },
            { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: '' },
            { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: 0, text: '', width: '100%', url: 'https://youtu.be/AM2Ivdi9c4E' },
            { _id: '789', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: '' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetByPageId': this.findWidgetByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deletewidget': this.deletewidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetByPageId = function (pageId) {
        var foundWidgets = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                foundWidgets.push(this.widgets[x]);
            }
        }
        return foundWidgets;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            var _widget = this.widgets[x];
            if (_widget._id === widgetId) {
                this.widgets[x].widgetType = widget.widgetType;
                switch (widget.widgetType) {
                    case 'HEADING':
                        this.widgets[x].size = widget.size;
                        this.widgets[x].text = widget.text;
                        break;
                    case 'HTML':
                        this.widgets[x].text = widget.text;
                        break;
                    case 'IMAGE':
                    case 'YOUTUBE':
                        this.widgets[x].width = widget.width;
                        this.widgets[x].url = widget.url;
                        break;
                    default:
                        break;
                }
            }
        }
    };
    WidgetService.prototype.deletewidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

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