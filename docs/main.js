(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-module/auth-guard/auth.guard */ 224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: 'auth', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 1082)).then(m => m.AuthenticationModule),
    },
    {
        path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule),
        canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
    // { path: '', redirectTo: '/auth', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenGetter": () => (/* binding */ tokenGetter),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-module/auth-guard/auth.guard */ 224);
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.module */ 1082);
/* harmony import */ var _core_module_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-module/auth-service/auth.service */ 4616);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ 1055);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
















function tokenGetter() {
    return localStorage.getItem("token");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard,
        _core_module_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_3__.AuthenticationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule.forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule.forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: [],
                    authScheme: "Bearer ",
                    skipWhenExpired: true,
                }
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            // HttpClientInMemoryWebApiModule.forRoot(
            //   InMemoryDataService, { dataEncapsulation: false }
            // ),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_3__.AuthenticationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule] }); })();


/***/ }),

/***/ 3365:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutingModule": () => (/* binding */ AuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.component */ 6462);
/* harmony import */ var _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-form/code-form.component */ 9784);
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-form/email-form.component */ 1934);
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-verification/email-verification.component */ 9713);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 7634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '', component: _authentication_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticationComponent,
        children: [
            { path: 'login', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__.SignInComponent },
            { path: 'recover', component: _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_2__.EmailFormComponent },
            { path: 'verification', component: _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__.EmailVerificationComponent },
            { path: 'code', component: _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_1__.CodeFormComponent },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ],
    },
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
AuthenticationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 6462:
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationComponent": () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AuthenticationComponent {
    constructor() { }
    ngOnInit() {
        localStorage.removeItem('token');
    }
}
AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(); };
AuthenticationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["app-authentication"]], decls: 1, vars: 0, template: function AuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 3365);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.component */ 6462);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 7634);
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-verification/email-verification.component */ 9713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-form/code-form.component */ 9784);
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-form/email-form.component */ 1934);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ 1055);
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share-module/share-module.module */ 2883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1570);














class AuthenticationModule {
    constructor(title) {
        this.title = title;
    }
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title)); };
AuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule,
            _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_6__.ShareModuleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent,
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent,
        _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__.EmailVerificationComponent,
        _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_4__.CodeFormComponent,
        _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_5__.EmailFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule,
        _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_6__.ShareModuleModule], exports: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent,
        _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__.EmailVerificationComponent,
        _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_4__.CodeFormComponent,
        _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_5__.EmailFormComponent] }); })();


/***/ }),

/***/ 9784:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/code-form/code-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeFormComponent": () => (/* binding */ CodeFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





function CodeFormComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "O c\u00F3digo foi reenviado com \u00EAxito!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CodeFormComponent {
    constructor(title) {
        this.title = title;
        this.codeResent = false;
        this.title.setTitle("Recuperar minha senha - Referência");
    }
    ngOnInit() {
    }
    message() {
        this.codeResent = true;
    }
}
CodeFormComponent.ɵfac = function CodeFormComponent_Factory(t) { return new (t || CodeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title)); };
CodeFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeFormComponent, selectors: [["app-code-form"]], decls: 29, vars: 1, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "panel-title"], [1, "paragraph"], ["style", "color: green; text-align: center; font-weight: 100;", 4, "ngIf"], [1, "form"], ["action", ""], [1, "input"], ["type", "text", "name", "", "id", "", "maxlength", "1"], [1, "submit"], ["type", "submit", "value", "Verificar minha conta"], [1, "navigation"], ["routerLink", "/code", 3, "click"], [2, "color", "green", "text-align", "center", "font-weight", "100"]], template: function CodeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Esqueceu a Senha? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Foi enviado um c\u00F3digo de verifica\u00E7\u00E3o para o seu e-mail. Digite o c\u00F3digo de e-mail no formul\u00E1rio abaixo..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CodeFormComponent_h4_10_Template, 2, 0, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "N\u00E3o recebi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeFormComponent_Template_a_click_27_listener() { return ctx.message(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reenviar um novo c\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.codeResent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 550px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    text-align: center;\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n    width: 100%;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    font-size: 1.3em;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    \r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n    width: 105px;\r\n    display: inline-block;\r\n    margin: 0px 10px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), form[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3){\r\n    \r\n\r\n\r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 25px 0px 10px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxzQkFBc0I7OztBQUcxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0Esb0JBQW9CO0FBQ3BCO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEIiLCJmaWxlIjoiY29kZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucGFuZWx7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNSU7ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4ICNkZGQ7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlciBkaXYubG9nb3R5cGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFyYWdyYXBoe1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhcmFncmFwaCBwe1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLUwpO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYuZm9ybSBsYWJlbCwgc3BhbiwgYXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4vKiBmb3Jte1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxufSAqL1xyXG5mb3JtIGRpdi5pbnB1dHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYgPiBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbmZvcm0gZGl2LmlucHV0ID4gZGl2e1xyXG4gICAgLyogbWFyZ2luOiAxMHB4IDBweDsgKi9cclxuICAgIHdpZHRoOiAxMDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgPiBkaXY6bnRoLWNoaWxkKDIpLFxyXG5mb3JtIGRpdi5pbnB1dCA+IGRpdjpudGgtY2hpbGQoMyl7XHJcbiAgICAvKiBtYXJnaW46IDBweCAyMHB4OyAqL1xyXG5cclxuXHJcbn1cclxuZGl2LnN1Ym1pdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IDBweCAxMHB4IDBweDtcclxufVxyXG5kaXYuc3VibWl0IGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ5OWZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmRpdi5uYXZpZ2F0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5kaXYubmF2aWdhdGlvbiBzcGFue31cclxuZGl2Lm5hdmlnYXRpb24gc3BhbiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyNDk5ZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1934:
/*!*******************************************************************!*\
  !*** ./src/app/authentication/email-form/email-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailFormComponent": () => (/* binding */ EmailFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);




class EmailFormComponent {
    constructor(router, title) {
        this.router = router;
        this.title = title;
        this.title.setTitle("Recuperar minha senha - Referência");
    }
    ngOnInit() {
    }
    route() {
        this.router.navigateByUrl('/code');
    }
}
EmailFormComponent.ɵfac = function EmailFormComponent_Factory(t) { return new (t || EmailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title)); };
EmailFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailFormComponent, selectors: [["app-email-form"]], decls: 24, vars: 0, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "panel-title"], [1, "paragraph"], [1, "form"], ["action", ""], [1, "input"], [1, "label"], ["for", ""], ["type", "email", "name", "", "id", ""], [1, "submit"], ["type", "button", "value", "Enviar", 3, "click"], [1, "navigation"], ["routerLink", "/login"]], template: function EmailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Esqueceu a Senha? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Utilize o endere\u00E7o de e-mail associado \u00E0 sua conta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Digite o seu e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailFormComponent_Template_input_click_19_listener() { return ctx.route(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "< Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 520px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    text-align: center;\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 25px 0px 10px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLG9CQUFvQjtBQUNwQjtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5wYW5lbHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXHJcbiAgICB3aWR0aDogNTIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbiAgICAvKiBtYXJnaW4tdG9wOiA1JTsgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggI2RkZDtcclxufVxyXG5kaXYucGFuZWwtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYucGFuZWwtaGVhZGVyIGRpdi5sb2dvdHlwZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFuZWwtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFyYWdyYXBoe1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhcmFncmFwaCBwe1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLUwpO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYuZm9ybSBsYWJlbCwgc3BhbiwgYXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4vKiBmb3Jte1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxufSAqL1xyXG5mb3JtIGRpdi5pbnB1dHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgZGl2LmxhYmVse1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYgPiBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmZvcm0gZGl2LmlucHV0ID4gZGl2e1xyXG4gICAgLyogbWFyZ2luOiAxMHB4IDBweDsgKi9cclxufVxyXG5kaXYuc3VibWl0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI1cHggMHB4IDEwcHggMHB4O1xyXG59XHJcbmRpdi5zdWJtaXQgaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDk5ZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb24gc3Bhbnt9XHJcbmRpdi5uYXZpZ2F0aW9uIHNwYW4gYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjQ5OWZmO1xyXG59Il19 */"] });


/***/ }),

/***/ 9713:
/*!***********************************************************************************!*\
  !*** ./src/app/authentication/email-verification/email-verification.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailVerificationComponent": () => (/* binding */ EmailVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class EmailVerificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(); };
EmailVerificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 22, vars: 0, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "panel-title"], [1, "paragraph"], [1, "form"], ["action", ""], [1, "submit"], ["type", "button", "value", "Continuar a verifica\u00E7\u00E3o"], [1, "navigation"], ["routerLink", ""]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Verifique o seu e-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Enviamos um link para o seu endere\u00E7o de e-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "patisaquias2000@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "N\u00E3o recebi e-mail. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reenviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 520px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 30px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    text-align: center;\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 30px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 10px 0px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7QUFDcEI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImVtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnBhbmVse1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cclxuICAgIHdpZHRoOiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxuICAgIC8qIG1hcmdpbi10b3A6IDUlOyAqL1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAjZGRkO1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXIgZGl2LmxvZ290eXBle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxlIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYXJhZ3JhcGh7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFyYWdyYXBoIHB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTCk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYXJhZ3JhcGggcCBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5mb3JtIGxhYmVsLCBzcGFuLCBhe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi8qIGZvcm17XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG59ICovXHJcbmZvcm0gZGl2LmlucHV0e1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYubGFiZWx7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbmZvcm0gZGl2LmlucHV0IGRpdiA+IGlucHV0e1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgPiBkaXZ7XHJcbiAgICAvKiBtYXJnaW46IDEwcHggMHB4OyAqL1xyXG59XHJcbmRpdi5zdWJtaXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuZGl2LnN1Ym1pdCBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTlmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5kaXYubmF2aWdhdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb24gc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLUwpO1xyXG59XHJcbmRpdi5uYXZpZ2F0aW9uIHNwYW4gYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjQ5OWZmO1xyXG59Il19 */"] });


/***/ }),

/***/ 7634:
/*!*************************************************************!*\
  !*** ./src/app/authentication/sign-in/sign-in.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var src_app_core_module_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core-module/user-services/user.service */ 9250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);







function SignInComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Email inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignInComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Senha obigat\u00F3ria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(title, userService) {
        this.title = title;
        this.userService = userService;
        this.incorrect = false;
        this.panelMessages = '';
        this.errors = '';
        this.title.setTitle("Entrar na minha Conta - Referência");
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    submit() {
        this.userService.login(this.form);
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_module_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 33, vars: 4, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", "Logotipo"], [1, "panel-title"], [1, "form"], ["action", "", 3, "formGroup", "submit"], [1, "input"], [1, "label"], ["for", ""], ["type", "email", "formControlName", "email", "name", "email", "required", ""], [4, "ngIf"], ["routerLink", "/recover"], ["type", "password", "formControlName", "password", "name", "password", "required", ""], [1, "checkbox"], ["type", "checkbox", "id", "check"], ["for", "check"], [1, "submit"], ["type", "submit", 3, "disabled"], ["for", "", 2, "color", "#f33", "font-size", "x-small"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Entrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SignInComponent_div_15_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Palavra-passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Esqueceu a Senha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignInComponent_div_25_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Recordar-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Entrar na conta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 520px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 10px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: #aaa;\r\n    text-decoration: none;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n    transition: .3s;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    color: #bbb;\r\n    \r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0px 0px 20px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{\r\n    background-color: #87c1f5;\r\n    cursor: not-allowed;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\r\n.panelMessages[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSxvQkFBb0I7QUFDcEI7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakIiLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnBhbmVse1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cclxuICAgIHdpZHRoOiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxuICAgIC8qIG1hcmdpbi10b3A6IDUlOyAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAjZGRkO1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXIgZGl2LmxvZ290eXBle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxlIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5mb3JtIGxhYmVsLCBzcGFuLCBhe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi8qIGZvcm17XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG59ICovXHJcbmZvcm0gZGl2LmlucHV0IGRpdi5sYWJlbHtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgZGl2ID4gaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCA+IGRpdntcclxuICAgIC8qIG1hcmdpbjogMTBweCAwcHg7ICovXHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgZGl2LmxhYmVsIHNwYW4gYXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmRpdi5jaGVja2JveHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcbmRpdi5jaGVja2JveCBpbnB1dHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbmRpdi5jaGVja2JveCA+IGxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXHJcbn1cclxuZGl2LnN1Ym1pdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG59XHJcbmRpdi5zdWJtaXQgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ5OWZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmRpdi5zdWJtaXQgYnV0dG9uOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3YzFmNTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb24gc3Bhbnt9XHJcbmRpdi5uYXZpZ2F0aW9uIHNwYW4gYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjQ5OWZmO1xyXG59XHJcbi5wYW5lbE1lc3NhZ2Vze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 224:
/*!******************************************************!*\
  !*** ./src/app/core-module/auth-guard/auth.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-service/auth.service */ 4616);


class AuthGuard {
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.auth.getUserAuthenticated();
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4616:
/*!**********************************************************!*\
  !*** ./src/app/core-module/auth-service/auth.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 1055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_share_module_service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share-module/service/utils.service */ 8206);






class AuthService {
    constructor(http, router, utilsService) {
        this.http = http;
        this.router = router;
        this.utilsService = utilsService;
        // private userUrl = 'api/users';
        this.domain = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    removeTokenAfterLogout() {
        if (this.isLoggedIn()) {
            localStorage.removeItem('token');
            return true;
        }
        else {
            return false;
        }
    }
    authenticateUser(token) {
        localStorage.setItem('token', token);
        this.router.navigate(['/admin']);
    }
    login(user) {
        let loginUrl = this.domain + "login";
        return this.http.post(loginUrl, user);
    }
    getUserAuthenticated() {
        let token = this.getToken();
        if (!this.isTokenExpired(token)) {
            let userAuthenticatdUrl = this.domain + "user?token=" + token;
            return this.http.post(userAuthenticatdUrl, {});
        }
        else {
            this.removeTokenAfterExpired();
        }
    }
    isTokenExpired(token) {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
        const decodeToken = helper.decodeToken(token);
        // const expir = helper.getTokenExpirationDate(token);
        const isexp = helper.isTokenExpired(token);
        if (isexp) {
            this.removeTokenAfterExpired();
        }
        else {
            return false;
        }
    }
    tokenExpirateTime(token) {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
        const decodeToken = helper.decodeToken(token);
        const expir = helper.getTokenExpirationDate(token);
        // const isexp = helper.isTokenExpired(token);
        return expir;
    }
    removeTokenAfterExpired() {
        if (this.isLoggedIn()) {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
            let oneMinuteInMiliSeconds = 60000;
            let minutesWanted = 5;
            let totalMinutes = oneMinuteInMiliSeconds * minutesWanted;
            this.utilsService.getToasterErrorAlerts('A sua conexão expirou!', 'Falha de conexão', totalMinutes, undefined, true, true, false);
        }
    }
    userLogout() {
        let userAuthenticationLogoutUrl = this.domain + "logout?token=" + localStorage.getItem('token');
        return this.http.post(userAuthenticationLogoutUrl, {});
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_share_module_service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9250:
/*!***********************************************************!*\
  !*** ./src/app/core-module/user-services/user.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-service/auth.service */ 4616);
/* harmony import */ var src_app_share_module_service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share-module/service/utils.service */ 8206);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class UserService {
    constructor(auth, utilsService, router) {
        this.auth = auth;
        this.utilsService = utilsService;
        this.router = router;
    }
    get userId() {
        return this.id;
    }
    set userId(id) {
        this.id = id;
    }
    get userFirstName() {
        return this.firstName;
    }
    set userFirstName(firstName) {
        this.firstName = firstName;
    }
    get userLastName() {
        return this.lastName;
    }
    set userLastName(lastName) {
        this.lastName = lastName;
    }
    get userEmail() {
        return this.email;
    }
    set userEmail(email) {
        this.email = email;
    }
    get userPhone() {
        return this.phone;
    }
    set userPhone(phone) {
        this.phone = phone;
    }
    get userAgency() {
        return this.agency;
    }
    set userAgency(agency) {
        this.agency = agency;
    }
    get userLocalization() {
        return this.localization;
    }
    set userLocalization(localization) {
        this.localization = localization;
    }
    get userCategory() {
        return this.category;
    }
    set userCategory(category) {
        this.category = category;
    }
    ngOnInit() {
    }
    fieldsReset(getForm) {
        getForm.get('email').reset();
        getForm.get('password').reset();
    }
    login(formBuilder) {
        this.auth.login(formBuilder.getRawValue()).subscribe((response) => {
            if (response.auth_status == "invalid" && response.status == 401) {
                this.utilsService.getToasterErrorAlerts(response.message, 'Acesso Negado');
                this.fieldsReset(formBuilder);
            }
            else if (response.auth_status == "valid" && response.status == 200) {
                if (!response.access_token || response.access_token == "") {
                    this.utilsService.getToasterErrorAlerts("Alguma coisa correu mal, tente novamente!", 'Ops!');
                }
                else {
                    this.utilsService.getToasterSuccessAlerts('Será reencaminhado para a página inicial!', 'Acesso concedido', 3000, 'toast-top-center', true);
                    this.fieldsReset(formBuilder);
                    setTimeout(() => {
                        this.auth.authenticateUser(response.access_token);
                        this.userAuthenticated();
                    }, 3000);
                }
            }
            else {
                this.utilsService.getToasterErrorAlerts("Alguma coisa correu mal, tente novamente!", 'Ops!');
            }
        }, (error) => {
            // console.log(error.error);
            this.utilsService.getToasterErrorAlerts("Verifique a sua conexão à internet", 'Erro de conectividade');
        });
    }
    userAuthenticated() {
        this.auth.getUserAuthenticated().subscribe((res) => {
            this.userId = res.id;
            this.userFirstName = res.name;
            this.userLastName = 'static data';
            this.userEmail = res.email;
            this.userAgency = 'static data';
            this.userPhone = 'static data';
            this.userLocalization = 'static data';
            this.userCategory = 'Vendedor';
            // console.log(res);
        }, err => {
            console.log(err);
        });
    }
    isTokenExpired() {
        let token = this.auth.getToken();
        return this.auth.isTokenExpired(token);
    }
    tokenExpirateTime() {
        let token = this.auth.getToken();
        return this.auth.tokenExpirateTime(token);
    }
    logout() {
        return this.auth.userLogout().subscribe(res => {
            if (res.status == 200) {
                if (this.auth.removeTokenAfterLogout()) {
                    this.router.navigate(['/login']);
                }
            }
            else {
                this.utilsService.getToasterErrorAlerts('Erro ao tentar sair da sua conta!', 'Erro', 3000);
            }
        }, err => {
            console.log(err);
            this.utilsService.getToasterErrorAlerts(err, 'Erro', 3000);
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_share_module_service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9084:
/*!*********************************************************!*\
  !*** ./src/app/share-module/footer/footer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 8870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);



class FooterComponent {
    constructor() {
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFacebookSquare;
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTwitter;
        this.faInsta = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInstagramSquare;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 3, consts: [["href", ""], [3, "icon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u00A9 Refer\u00EAncia - 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faInsta);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: ["p[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    color: #dadbdb;\r\n    margin: 0px 5px;\r\n    font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxucHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogI2RhZGJkYjtcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5862:
/*!*****************************************************!*\
  !*** ./src/app/share-module/menu/menu.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_module_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core-module/user-services/user.service */ 9250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);





function MenuComponent_a_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MenuComponent_a_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "modal-show": a0, "modal-hide": a1 }; };
class MenuComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        // 
        this.title = this.check();
        // Settings transition variables
        this.hide = true;
        this.icon_format = ".svg";
        this.imovel_icon = "assets/Icons/Activity" + this.icon_format;
        this.dash_icon = "assets/Icons/icone -3 User" + this.icon_format;
        this.proprietarios_icon = "assets/Icons/icone -3 User" + this.icon_format;
        this.solici_icon = "assets/Icons/Paper" + this.icon_format;
        this.users_icon = "assets/Icons/icone -3 User" + this.icon_format;
        this.defin_icon = "assets/Icons/Setting" + this.icon_format;
        //  Menu Horizontal User Modal Icons
        this.user_icon = "assets/Icons/icone -1 User" + this.icon_format;
        this.support_icon = "assets/Icons/icone -1 User" + this.icon_format;
        this.logout_icon = "assets/Icons/Logout" + this.icon_format;
        // Notification countin, refleting in the svg image
        this.notifications = 0;
        // User Modal Toggle
        this.user_modal_visible = false;
    }
    ngOnInit() {
        this.check();
        this.checkSettings();
        // this.getAuthenticatedUser();
        this.getUserData();
    }
    ngOnChanges() {
        this.getUserData();
    }
    check() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                this.url = event.url;
                // console.log(this.title);
                if (this.url === '/admin/imoveis') {
                    this.title = "Imóveis";
                    this.imovel_icon = "assets/Icons/Activity_w" + this.icon_format;
                    this.dash_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.proprietarios_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.solici_icon = "assets/Icons/Paper" + this.icon_format;
                    this.users_icon = "assets/Icons/icone -3 User" + this.icon_format;
                }
                else if (this.url === '/admin/proprietarios') {
                    this.title = "Proprietários";
                    this.imovel_icon = "assets/Icons/Activity" + this.icon_format;
                    this.dash_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.proprietarios_icon = "assets/Icons/icone -3 User_w" + this.icon_format;
                    this.solici_icon = "assets/Icons/Paper" + this.icon_format;
                    this.users_icon = "assets/Icons/icone -3 User" + this.icon_format;
                }
                else if (this.url === '/admin/dashboard') {
                    this.title = "Dashboard";
                    this.imovel_icon = "assets/Icons/Activity" + this.icon_format;
                    this.dash_icon = "assets/Icons/icone -3 User_w" + this.icon_format;
                    this.proprietarios_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.solici_icon = "assets/Icons/Paper" + this.icon_format;
                    this.users_icon = "assets/Icons/icone -3 User" + this.icon_format;
                }
                else if (this.url === '/admin/solicitacoes') {
                    this.title = "Solicitações";
                    this.imovel_icon = "assets/Icons/Activity" + this.icon_format;
                    this.dash_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.proprietarios_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.solici_icon = "assets/Icons/Paper_w" + this.icon_format;
                    this.users_icon = "assets/Icons/icone -3 User" + this.icon_format;
                }
                else if (this.url === '/admin/usuarios') {
                    this.title = "Usuários";
                    this.imovel_icon = "assets/Icons/Activity" + this.icon_format;
                    this.dash_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.proprietarios_icon = "assets/Icons/icone -3 User" + this.icon_format;
                    this.solici_icon = "assets/Icons/Paper" + this.icon_format;
                    this.users_icon = "assets/Icons/icone -3 User_w" + this.icon_format;
                }
                else if (this.url === '/admin/minha-conta') {
                    this.title = "Perfil";
                }
            }
        });
    }
    logout() {
        if (confirm("Deseja realmente sair da sua conta?")) {
            this.userService.logout();
        }
        else { }
    }
    checkSettings() {
        if (this.hide) {
            this.visible = false;
            this.rightMove = -100;
        }
        else {
            this.visible = true;
            this.rightMove = 0;
        }
    }
    showSettings() {
        this.hide = false;
    }
    fadeOut() {
        this.hide = true;
    }
    user_toggle() {
        if (this.user_modal_visible == false) {
            this.user_modal_visible = true;
        }
        else {
            this.user_modal_visible = false;
        }
    }
    getUserData() {
        setTimeout(() => {
            // console.log(this.userData);
            this.userName = this.userData.userFirstName;
            this.userCategory = this.userData.userCategory;
        }, 1000);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_module_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { userData: "userData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 120, vars: 20, consts: [[1, "sidebar"], [1, "sidebar-menu"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active"], [1, "icon"], ["width", "23", "alt", "", 3, "src"], [1, "text"], ["routerLink", "/admin/imoveis", "routerLinkActive", "active"], ["routerLink", "/admin/proprietarios", "routerLinkActive", "active"], ["routerLink", "/admin/solicitacoes", "routerLinkActive", "active"], ["routerLink", "/admin/usuarios", "routerLinkActive", "active"], [2, "cursor", "pointer", 3, "click"], [1, "logo"], ["routerLink", "/admin/dashboard"], ["width", "60%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "title"], [1, "search-wrapper1"], [1, ""], ["width", "17", "src", "assets/Icons/icone-pesquisa.svg", "alt", ""], ["type", "search", "placeholder", "Pesquisar no Dashboard"], [1, "user-wrapper"], [4, "ngIf"], [3, "click"], [1, "user-profile"], ["src", "assets/Imagens/solicitacoes/image.jpg", "width", "100%", "height", "100%", "alt", "", 2, "cursor", "pointer"], [1, "user-detail-modal", 3, "ngClass"], [1, "user-modal-header"], [1, "_image"], ["width", "50", "src", "assets/Imagens/solicitacoes/image.jpg", "alt", ""], [1, "_details"], [1, "clearfix"], [1, "list-items"], ["routerLink", "/admin/minha-conta"], [1, "_icon"], ["alt", "", 3, "src"], [1, "_item_name"], [1, "settings"], [1, "settings-background", 3, "ngClass", "click"], [1, "settings-panel", 3, "ngClass"], [1, "panel-header"], [1, "panel-banner"], [1, "panel-img"], ["src", "assets/Imagens/settings/bnr.jpg", "alt", ""], [1, "panel-body"], [1, "theme-mode"], [1, "input"], [1, "switch"], ["type", "checkbox"], [1, "slider", "round"], [1, "bar-mode"], ["type", "checkbox", "checked", ""], [1, "button"], ["src", "assets/Icons/notificatio_sign.svg", "width", "22px", "alt", "", 2, "cursor", "pointer"], ["src", "assets/Icons/Notifi_no_red_circle.svg", "width", "22px", "alt", "", 2, "cursor", "pointer"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Imoveis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Propriet\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Solicita\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_34_listener() { return ctx.showSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Defini\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, MenuComponent_a_51_Template, 2, 0, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, MenuComponent_a_52_Template, 2, 0, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_53_listener() { return ctx.user_toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Minha Conta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Suporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_83_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Terminar Sess\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_90_listener() { return ctx.fadeOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " Defini\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_95_listener() { return ctx.fadeOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u2716");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Trocar para o modo escuro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Trocar barra lateral para Ral\u00E1vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " Defini\u00E7\u00F5es Padr\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.dash_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imovel_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.proprietarios_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.solici_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.users_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.defin_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notifications > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notifications < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c0, ctx.user_modal_visible == true, ctx.user_modal_visible == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.support_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.logout_icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.hide == true ? "close" : "apear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.hide == true ? "hided" : "non-hided");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    \r\n    z-index: 9;\r\n    margin-top: 90px;\r\n}\r\n.sidebar-menu[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 2rem;\r\n}\r\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    \r\n    padding: 10px;\r\n    display: block;\r\n    color: black;\r\n    position: relative;\r\n    margin: 20px 0px;\r\n    \r\n    \r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    background: #00a2ff;\r\n    \r\n    border-radius: 10px;\r\n    color: #fff !important;\r\n}\r\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    \r\n    \r\n    margin-right: 10px;\r\n    \r\n}\r\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    position: absolute;\r\n    display: block;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 16px;\r\n    top: 50%;\r\n    left: 50px;\r\n    transform: translateY(-50%);\r\n    position: absolute;\r\n}\r\nheader[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 1.5rem 1rem 0rem;\r\n    position: fixed;\r\n    background-color: #fff;\r\n    \r\n    \r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 20;\r\n}\r\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    \r\n    padding: 20px 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    \r\n    position: absolute;\r\n    top: 0;\r\n}\r\nheader[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    margin-left: 360px;\r\n    padding: 5px;\r\n}\r\nheader[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: #00a2ff;\r\n}\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 1.7rem;\r\n    padding-right: 1rem;\r\n}\r\n.search-wrapper1[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    \r\n    height: 40px;\r\n    \r\n    display: flex;\r\n    width: 300px;\r\n    align-items: center;\r\n    position: relative;\r\n    \r\n    overflow: hidden;\r\n    \r\n}\r\n.search-wrapper1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n.search-wrapper1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    \r\n    outline: none;\r\n}\r\n.user-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    \r\n}\r\n.user-wrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.user-wrapper[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    color: var(--text-grey);\r\n}\r\n.user-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.user-profile[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n    height: 45px;\r\n    \r\n    margin: 0rem 2rem;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n}\r\n.user-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n}\r\n.search-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow-x: hidden;\r\n    background: #fc0;\r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    outline: none;\r\n}\r\n.modal-hide[_ngcontent-%COMP%]{\r\n    \r\n    display: none;\r\n}\r\n.modal-show[_ngcontent-%COMP%]{\r\n    \r\n    display: block;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 250px;\r\n    height: 290px;\r\n    background-color: #fff;\r\n    \r\n    border-bottom-left-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n    box-shadow: 0px 2px 2px 1px #ddd;\r\n    padding: 10px;\r\n    top: 77px;\r\n    right: 50px;\r\n    \r\n}\r\n.user-modal-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .user-modal-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 50px;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .user-modal-header[_ngcontent-%COMP%]   div._image[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    margin-top: 5px;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .user-modal-header[_ngcontent-%COMP%]   div._image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .user-modal-header[_ngcontent-%COMP%]   div._details[_ngcontent-%COMP%]{\r\n    \r\n    margin: 0px 0px 0px 20px;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .user-modal-header[_ngcontent-%COMP%]   div._details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n    color: #b6bcc3;\r\n}\r\n.clearfix[_ngcontent-%COMP%]{\r\n    clear: both;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 20px 0px;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin: 30px 0px;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #d5ceca;\r\n    cursor: pointer;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div._icon[_ngcontent-%COMP%]{\r\n    width: 20px;\r\n    height: 20px;\r\n    position: relative;\r\n    float: left;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div._icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.user-detail-modal[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div._item_name[_ngcontent-%COMP%]{\r\n    \r\n    font-size: medium;\r\n    font-weight: 500;\r\n    margin: 0px 35px;\r\n}\r\n\r\n.settings[_ngcontent-%COMP%]{}\r\n.settings-background[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    background-color: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0px;\r\n    z-index: 105;\r\n    opacity: .4;\r\n}\r\n.close[_ngcontent-%COMP%]{ \r\n    position: fixed;\r\n    background-color: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    transition: 1s;\r\n    left: 0;\r\n    top: 0px;\r\n    z-index: 105;\r\n    opacity: .4;\r\n}\r\n.settings-panel[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    width: 390px;\r\n    position: fixed;\r\n    height: 100%;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 110;\r\n    padding: 10px 20px;\r\n    transition: .4s;\r\n}\r\n.hided[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    width: 390px;\r\n    position: fixed;\r\n    height: 100%;\r\n    transition: 1s;\r\n    right: -100%;\r\n    top: 0;\r\n    z-index: 110;\r\n    padding: 10px 20px;\r\n}\r\n.panel-header[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n    \r\n}\r\n.panel-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.panel-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n    cursor: pointer;\r\n    color: #bbb;\r\n}\r\n.panel-banner[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n.panel-img[_ngcontent-%COMP%]{ \r\n    position: inherit;\r\n    width: 100%;\r\n    height: 180px;\r\n    margin: 10px 0px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n.panel-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.panel-body[_ngcontent-%COMP%]{\r\n    margin: 50px 0px;\r\n}\r\n.theme-mode[_ngcontent-%COMP%]{}\r\n.theme-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\r\n.theme-mode[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{}\r\n.bar-mode[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\n.bar-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\r\n.bar-mode[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{}\r\n.button[_ngcontent-%COMP%]{\r\n    margin: 50px 0px;\r\n    \r\n    text-align: center;\r\n}\r\n.button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: #2196F3;\r\n    padding: 10px 40px;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 48px;\r\n    height: 29px;\r\n  }\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border: 1px solid #ccc;\r\n    background-color: #fff;\r\n    transition: .4s;\r\n    padding: 2.5px 6px;\r\n  }\r\n.slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    bottom: 50%;\r\n    transform: translateY(50%);\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n    background-color: #2196F3;\r\n  }\r\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translate(16px, 10px);\r\n  }\r\n\r\n.slider.round[_ngcontent-%COMP%] {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round[_ngcontent-%COMP%]:before {\r\n    border-radius: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7QUFDZjtBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07QUFDVjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCO0FBRUE7SUFDSTt3QkFDb0I7QUFDeEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFPQSxVQUFVO0FBR1YsVUFBVTtBQUVWO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBLFlBQVk7QUFDWjtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBLHdCQUF3QjtBQUV4QjtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0Esc0JBQXNCO0FBRXRCO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUtBLDJDQUEyQztBQUMzQztJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUVBLCtCQUErQjtBQUMvQjtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYO0FBRUEsZUFBZTtBQUNmO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUV0QixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBRXZCLGVBQWU7RUFDakI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBRUE7SUFHRSxnQ0FBZ0M7RUFDbEM7QUFFQSxvQkFBb0I7QUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5zaWRlYmFye1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxufVxyXG4uc2lkZWJhci1tZW51e1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLW1lbnUgYXtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMXJlbTsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICAvKiBmb250LXNpemU6IDEuMXJlbTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICMwMGEyZmY7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDEwcHg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSBhIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqL1xyXG4gICAgLyogcGFkZGluZy1yaWdodDogMXJlbTsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbn1cclxuLnNpZGViYXItbWVudSBhIHNwYW4gaW1ne1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGV4dHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW0gMXJlbSAwcmVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qIGxlZnQ6IDM0NXB4OyAqL1xyXG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDM0NXB4KTsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcblxyXG5oZWFkZXIgLmxvZ297XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqL1xyXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG5oZWFkZXIgLnRpdGxle1xyXG4gICAgLyogcG9zaXRpb246IHN0aWNreTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMzYwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0gXHJcblxyXG5oZWFkZXIgLnRpdGxlIGgye1xyXG4gICAgY29sb3I6ICMwMGEyZmY7XHJcbn1cclxuaGVhZGVyIGxhYmVsIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlcjF7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE0NSwgMTQyLCAxNDIpOyAqL1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBsZWZ0OiAxNzBweDsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyAqL1xyXG59XHJcblxyXG5cclxuLnNlYXJjaC13cmFwcGVyMSBzcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLXdyYXBwZXIxIGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqL1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnVzZXItd3JhcHBlciBpbWd7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDByZW0gMnJlbTsgKi9cclxufVxyXG5cclxuLnVzZXItd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi51c2VyLXdyYXBwZXIgc21hbGx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmV5KTtcclxufVxyXG4udXNlci13cmFwcGVyIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGV7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICBtYXJnaW46IDByZW0gMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnVzZXItcHJvZmlsZSBpbWd7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5zZWFyY2gtd3JhcHBlcntcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDUsIDE0MiwgMTQyKTsgKi9cclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjMDtcclxufVxyXG5cclxuLnNlYXJjaC13cmFwcGVyIHNwYW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbn1cclxuLnNlYXJjaC13cmFwcGVyIGlucHV0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtaGlkZXtcclxuICAgIC8qIG9wYWNpdHk6IDA7ICovXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tb2RhbC1zaG93e1xyXG4gICAgLyogb3BhY2l0eTogMTsgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udXNlci1kZXRhaWwtbW9kYWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDE1cHg7ICovXHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAxcHggI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0b3A6IDc3cHg7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIC8qIG9wYWNpdHk6IDA7ICovXHJcbn1cclxuXHJcbi51c2VyLW1vZGFsLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnVzZXItZGV0YWlsLW1vZGFsIC51c2VyLW1vZGFsLWhlYWRlciA+IGRpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4udXNlci1kZXRhaWwtbW9kYWwgLnVzZXItbW9kYWwtaGVhZGVyIGRpdi5faW1hZ2V7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4udXNlci1kZXRhaWwtbW9kYWwgLnVzZXItbW9kYWwtaGVhZGVyIGRpdi5faW1hZ2UgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnVzZXItZGV0YWlsLW1vZGFsIC51c2VyLW1vZGFsLWhlYWRlciBkaXYuX2RldGFpbHN7XHJcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDIwcHg7XHJcbn1cclxuLnVzZXItZGV0YWlsLW1vZGFsIC51c2VyLW1vZGFsLWhlYWRlciBkaXYuX2RldGFpbHMgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjYjZiY2MzO1xyXG59XHJcbi5jbGVhcmZpeHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udXNlci1kZXRhaWwtbW9kYWwgLmxpc3QtaXRlbXN7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi51c2VyLWRldGFpbC1tb2RhbCAubGlzdC1pdGVtcyB1bHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxufVxyXG4udXNlci1kZXRhaWwtbW9kYWwgLmxpc3QtaXRlbXMgdWwgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG4udXNlci1kZXRhaWwtbW9kYWwgLmxpc3QtaXRlbXMgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZDVjZWNhO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi51c2VyLWRldGFpbC1tb2RhbCAubGlzdC1pdGVtcyB1bCBsaSA+IGRpdntcclxufVxyXG4udXNlci1kZXRhaWwtbW9kYWwgLmxpc3QtaXRlbXMgdWwgbGkgZGl2Ll9pY29ue1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4udXNlci1kZXRhaWwtbW9kYWwgLmxpc3QtaXRlbXMgdWwgbGkgZGl2Ll9pY29uIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi51c2VyLWRldGFpbC1tb2RhbCAubGlzdC1pdGVtcyB1bCBsaSBkaXYuX2l0ZW1fbmFtZXtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMHB4IDM1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogTU9EQUwgKi9cclxuXHJcblxyXG4uc2V0dGluZ3N7fVxyXG5cclxuLnNldHRpbmdzLWJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDU7XHJcbiAgICBvcGFjaXR5OiAuNDtcclxufVxyXG5cclxuLmNsb3NleyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDEwNTtcclxuICAgIG9wYWNpdHk6IC40O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtcGFuZWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMTA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuLmhpZGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAzOTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTEwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbi5wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbn1cclxuLnBhbmVsLWhlYWRlciBzcGFue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5wYW5lbC1oZWFkZXIgc3BhbiBhe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbn1cclxuLnBhbmVsLWJhbm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucGFuZWwtaW1neyBcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wYW5lbC1pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5e1xyXG4gICAgbWFyZ2luOiA1MHB4IDBweDtcclxufVxyXG4udGhlbWUtbW9kZXt9XHJcbi50aGVtZS1tb2RlIC50aXRsZXtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbi50aGVtZS1tb2RlIHRpdGxlIGlucHV0e31cclxuXHJcbi5iYXItbW9kZXtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuLmJhci1tb2RlIC50aXRsZXtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbi5iYXItbW9kZSB0aXRsZSBpbnB1dHt9XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXHJcbiAgLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzbGlkZXIgKi9cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBwYWRkaW5nOiAyLjVweCA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNnB4LCAxMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 8206:
/*!*******************************************************!*\
  !*** ./src/app/share-module/service/utils.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4101);


class UtilsService {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    getToasterErrorAlerts(message, classification, timeOutDuration = 3000, positionClass = 'toast-top-right', progressBarVariable = false, buttonClose = false, disableTimeOut = false) {
        return this.toastrService.error(message, classification, {
            timeOut: timeOutDuration,
            positionClass: positionClass,
            progressBar: progressBarVariable,
            closeButton: buttonClose,
            disableTimeOut: disableTimeOut
        });
    }
    getToasterSuccessAlerts(message, classification, timeOutDuration = 3000, positionClass = 'toast-top-right', progressBarVariable = false) {
        return this.toastrService.success(message, classification, {
            timeOut: timeOutDuration,
            positionClass: positionClass,
            progressBar: progressBarVariable
        });
    }
    getToasterWarningAlerts(message, classification, timeOutDuration = 3000, positionClass = 'toast-top-right', progressBarVariable = false) {
        return this.toastrService.warning(message, classification, {
            timeOut: timeOutDuration,
            positionClass: positionClass,
            progressBar: progressBarVariable
        });
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
UtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5523:
/*!*************************************************************!*\
  !*** ./src/app/share-module/settings/settings.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


class SettingsComponent {
    constructor() {
        this.hide = true;
    }
    ngOnInit() {
        this.check();
    }
    check() {
        if (this.hide) {
            this.visible = false;
            this.rightMove = -100;
        }
        else {
            this.visible = true;
            this.rightMove = 0;
        }
    }
    fadeOut() {
        this.hide = true;
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], inputs: { hide: "hide" }, decls: 31, vars: 2, consts: [[1, "settings"], [1, "settings-background", 3, "ngClass"], [1, "settings-panel", 3, "ngClass"], [1, "panel-header"], [3, "click"], [1, "panel-banner"], [1, "panel-img"], ["src", "assets/Imagens/settings/bnr.jpg", "alt", ""], [1, "panel-body"], [1, "theme-mode"], [1, "title"], [1, "input"], [1, "switch"], ["type", "checkbox"], [1, "slider", "round"], [1, "bar-mode"], ["type", "checkbox", "checked", ""], [1, "button"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Defini\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_6_listener() { return ctx.fadeOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2716");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Trocar para o modo escuro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Trocar barra lateral para Ral\u00E1vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Defini\u00E7\u00F5es Padr\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hide == true ? "close" : "apear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hide == true ? "hided" : "non-hided");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".settings[_ngcontent-%COMP%]{}\r\n\r\n.settings-background[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    background-color: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0px;\r\n    z-index: 105;\r\n    opacity: .4;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    background-color: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    transition: 1s;\r\n    left: 0;\r\n    top: 0px;\r\n    z-index: 105;\r\n    opacity: .4;\r\n}\r\n\r\n.settings-panel[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    width: 390px;\r\n    position: fixed;\r\n    height: 100%;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 110;\r\n    padding: 10px 20px;\r\n    transition: .4s;\r\n}\r\n\r\n.hided[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    width: 390px;\r\n    position: fixed;\r\n    height: 100%;\r\n    transition: 1s;\r\n    right: -100%;\r\n    top: 0;\r\n    z-index: 110;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n    \r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n    cursor: pointer;\r\n    color: #bbb;\r\n}\r\n\r\n.panel-banner[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.panel-img[_ngcontent-%COMP%]{\r\n    position: inherit;\r\n    width: 100%;\r\n    height: 180px;\r\n    margin: 10px 0px;\r\n}\r\n\r\n.panel-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.panel-body[_ngcontent-%COMP%]{\r\n    margin: 50px 0px;\r\n}\r\n\r\n.theme-mode[_ngcontent-%COMP%]{}\r\n\r\n.theme-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\r\n\r\n.theme-mode[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{}\r\n\r\n.bar-mode[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\n\r\n.bar-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\r\n\r\n.bar-mode[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin: 50px 0px;\r\n    \r\n    text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: #2196F3;\r\n    padding: 10px 40px;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 48px;\r\n    height: 29px;\r\n  }\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border: 1px solid #ccc;\r\n    background-color: #fff;\r\n    transition: .4s;\r\n    padding: 2.5px 6px;\r\n  }\r\n\r\n.slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    bottom: 50%;\r\n    transform: translateY(50%);\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n    background-color: #2196F3;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translate(16px, 10px);\r\n  }\r\n\r\n\r\n\r\n.slider.round[_ngcontent-%COMP%] {\r\n    border-radius: 34px;\r\n  }\r\n\r\n.slider.round[_ngcontent-%COMP%]:before {\r\n    border-radius: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixNQUFNO0lBQ04sWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQSxZQUFZOztBQUNaO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBLHdCQUF3Qjs7QUFFeEI7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0Esc0JBQXNCOztBQUV0QjtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUtBLDJDQUEyQzs7QUFDM0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUEsK0JBQStCOztBQUMvQjtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztBQUVBLGVBQWU7O0FBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBRXRCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBRXZCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0FBRUE7SUFHRSxnQ0FBZ0M7RUFDbEM7O0FBRUEsb0JBQW9COztBQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdze31cclxuXHJcbi5zZXR0aW5ncy1iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMTA1O1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbn1cclxuXHJcbi5jbG9zZXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDEwNTtcclxuICAgIG9wYWNpdHk6IC40O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtcGFuZWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMTA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuLmhpZGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAzOTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTEwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbi5wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbn1cclxuLnBhbmVsLWhlYWRlciBzcGFue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5wYW5lbC1oZWFkZXIgc3BhbiBhe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbn1cclxuLnBhbmVsLWJhbm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucGFuZWwtaW1ne1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi5wYW5lbC1pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5e1xyXG4gICAgbWFyZ2luOiA1MHB4IDBweDtcclxufVxyXG4udGhlbWUtbW9kZXt9XHJcbi50aGVtZS1tb2RlIC50aXRsZXtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbi50aGVtZS1tb2RlIHRpdGxlIGlucHV0e31cclxuXHJcbi5iYXItbW9kZXtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuLmJhci1tb2RlIC50aXRsZXtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbi5iYXItbW9kZSB0aXRsZSBpbnB1dHt9XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXHJcbiAgLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzbGlkZXIgKi9cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBwYWRkaW5nOiAyLjVweCA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNnB4LCAxMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 2883:
/*!*****************************************************!*\
  !*** ./src/app/share-module/share-module.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModuleModule": () => (/* binding */ ShareModuleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 5862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/settings.component */ 5523);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 9084);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class ShareModuleModule {
}
ShareModuleModule.ɵfac = function ShareModuleModule_Factory(t) { return new (t || ShareModuleModule)(); };
ShareModuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShareModuleModule });
ShareModuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule,
            // BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShareModuleModule, { declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule], exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl: 'http://127.0.0.1:8000/api/',
    apiUrl: 'https://api-referencia.medesign-angola.com/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map