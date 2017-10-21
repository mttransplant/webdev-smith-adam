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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { TestComponent } from './components/test/test.component';



// import { TestService } from './services/test.service.client';










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
            __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [/*TestService,*/ __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_15__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_16__services_widget_service_client__["a" /* WidgetService */]],
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
/**
 * Created by sesha on 7/26/17.
 */

// import {TestComponent} from './components/test/test.component';






// import {PageListComponent} from './components/page/page-list/page-list.component';
// import {PageNewComponent} from './components/page/page-new/page-new.component';
// import {PageEditComponent} from './components/page/page-edit/page-edit.component';
// import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
// import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
// import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    // {path: 'test', component: TestComponent},
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
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
        this.errorFlag = false;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['/user/' + user._id]);
        }
        else {
            this.errorFlag = true;
        }
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-link\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateProfile()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid aps-body-padding\">\n  <div *ngIf=\"showMessage\"\n       class=\"alert alert-success\">\n    {{msg}}\n  </div>\n\n  <form (ngSubmit) = \"updateProfile()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             name=\"username\"\n             id=\"username\"\n             [(ngModel)]=\"user.username\"\n             required\n             readonly\n             placeholder=\"username\">\n\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"firstName\"\n             name=\"firstName\"\n             [(ngModel)]=\"user.firstName\"\n             required\n             #firstName=\"ngModel\"\n             placeholder=\"Alice\">\n      <span class=\"help-block\" *ngIf=\"!user.firstName.valid && user.firstName.touched\">\n      Please enter your first name!\n      </span>\n\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\"\n             name=\"lastName\"\n             [(ngModel)]=\"user.lastName\"\n             required\n             #lastName=\"ngModel\"\n             placeholder=\"Wonderland\">\n      <span class=\"help-block\" *ngIf=\"!user.lastName.valid && user.lastName.touched\">\n      Please enter your last name!\n      </span>\n\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             name=\"email\"\n             id=\"email\"\n             [(ngModel)]=\"user.email\"\n             required\n             placeholder=\"alice.wonderland@unicorn.com\">\n      <span class=\"help-block\" *ngIf=\"!user.email.valid && user.email.touched\">\n      Please enter email!\n      </span>\n      <br/>\n\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!f.valid || f.pristine\">Update</button>\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{userId}}/website\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"/login\">Logout</a>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.user.email = this.profileForm.value.email;
        this.user.firstName = this.profileForm.value.firstName;
        this.user.lastName = this.profileForm.value.lastName;
        console.log(this.user);
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Websites -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Websites</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Website-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>Edit Website</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website/\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding container-fluid\">\n  <div class=\"row\">\n    <div class=\"container col-md-4 hidden-xs hidden-sm\">\n      <div class=\"container\">\n        <div *ngFor=\"let website of websites\">\n          <div class=\"row aps-list-spacing\">\n            <div class=\"col-md-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            </div>\n            <div class=\"col-md-1\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n      <form class=\"aps-form-padding\"\n            (ngSubmit) = \"editWebsite()\"\n            #websiteEditForm=\"ngForm\">\n        <label for=\"name\">Name</label>\n        <input id=\"name\"\n               name=\"name\"\n               [(ngModel)]=\"name\"\n               required\n               class=\"form-control aps-field-spacing\"\n               type=\"text\"\n               placeholder=\"Website Name\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a name!\n      </span>\n\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control aps-field-spacing\"\n                  rows=\"5\"\n                  id=\"description\"\n                  name=\"description\"\n                  [(ngModel)]=\"description\"\n                  required\n                  placeholder=\"description\"></textarea>\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!websiteEditForm.valid\">Update</button>\n        <button type=\"button\" (click)=\"deleteCurrentWebsite()\" class=\"btn btn-danger btn-block\">Delete</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--back button-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </span>\n\n      <!-- Websites -->\n      <span class=\"col-md-2 hidden-xs hidden-sm\">\n        <a class=\"navbar-brand thick navbar-link\">\n          <b>Websites</b>\n        </a>\n      </span>\n\n      <!--Plus Sign-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </span>\n\n      <!--Close New Website-->\n      <span class=\"col-md-1 hidden-xs hidden-sm\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-text navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </span>\n\n      <!--heading on the nav bar-->\n      <span class=\"col-xs-10 col-s-10 col-md-6\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick navbar-link\">\n        <b>New Website</b>\n      </a>\n        </p>\n      </span>\n\n      <!--tick mark-->\n      <span class=\"col-xs-1 col-s-1 col-md-1\">\n        <p class=\"navbar-text\">\n          <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"aps-body-padding\">\n  <div class=\"row\">\n    <div class=\"container col-md-4 hidden-xs hidden-sm\">\n      <div class=\"container\">\n        <div *ngFor=\"let website of websites\">\n          <div class=\"row aps-list-spacing\">\n            <div class=\"col-md-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            </div>\n            <div class=\"col-md-1\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n\n        <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid/page\">Address Book App</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid/page\">Blogger</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid/page\">Blogging App</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row aps-list-spacing\">-->\n        <!--<div class=\"col-md-3\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid/page\">Script Testing App</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-1\">-->\n        <!--<a routerLink=\"user/:uid/website/:wid\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n        <!--</div>-->\n        <!--</div>-->\n\n\n      </div>\n    </div>\n    <div class=\"container col-xs-12 col-sm-12 col-md-8\">\n      <form class=\"aps-form-padding\"\n            (ngSubmit) = \"newWebsite()\"\n            #websiteNewForm=\"ngForm\">\n        <label for=\"name\">Name</label>\n        <input id=\"name\"\n               name=\"name\"\n               #name=\"ngModel\"\n               ngModel\n               required\n               class=\"form-control\"\n               type=\"text\"\n               placeholder=\"Website Name\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n        Please enter a website name!\n      </span>\n\n        <label for=\"description\">Description</label>\n        <textarea class=\"form-control\"\n                  rows=\"5\"\n                  id=\"description\"\n                  name=\"description\"\n                  #description=\"ngModel\"\n                  ngModel\n                  required\n                  placeholder=\"Description\"></textarea>\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!websiteNewForm.valid\">Create Website</button>\n      </form>\n    </div>\n  </div>\n\n\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
        console.log('website form name', this.websiteNewForm.value.name);
        console.log('website form description', this.websiteNewForm.value.description);
        this.name = this.websiteNewForm.value.name;
        this.description = this.websiteNewForm.value.description;
        console.log('internal name', this.name);
        console.log('internal description', this.description);
        console.log(this.websites);
        console.log(this.website);
        this.website.name = this.name;
        this.website.description = this.description;
        console.log(this.website);
        this.websiteService.createWebsite(this.userId, this.website);
        console.log(this.websiteService.websites);
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

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
            { _id: '123', username: 'alice', password: 'alice',
                firstName: 'Alice', lastName: 'Wonder', email: 'alice.wonderland@unicorn.com' },
            { _id: '234', username: 'bob', password: 'bob',
                firstName: 'Bob', lastName: 'Marley', email: 'bob.marley@regge.com' },
            { _id: '345', username: 'charly', password: 'charly',
                firstName: 'Charly', lastName: 'Garcia', email: 'charly.garcia@icecream.com' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi',
                firstName: 'Jose', lastName: 'Annunzi', email: 'j.annunzi@northeastern.edu' }
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
    WebsiteService.prototype.findNextWebsiteId = function () {
        var done = false;
        var newId = 123;
        while (!done) {
            var min = Math.ceil(100);
            var max = Math.floor(999);
            newId = Math.floor(Math.random() * (max - min)) + min;
            if (!this.findWebsiteById(newId.toString())) {
                done = true;
            }
        }
        return newId.toString();
    };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = this.findNextWebsiteId();
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