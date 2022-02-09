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
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: 'auth', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 1082)).then(m => m.AuthenticationModule),
    },
    {
        path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
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
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.module */ 1082);
/* harmony import */ var _core_module_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-module/auth-service/auth.service */ 4616);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ 1055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);















function tokenGetter() {
    return localStorage.getItem("token");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard,
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
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule] }); })();


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_module_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-module/auth-service/auth.service */ 4616);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4101);




class AuthGuard {
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    constructor(router, _auth, toastrService) {
        this.router = router;
        this._auth = _auth;
        this.toastrService = toastrService;
    }
    canActivate() {
        if (this._auth.isLoggedIn()) {
            return true;
        }
        else {
            this.message = 'Entre com as suas credenciais!';
            // this._auth.setAuthMessages(this.message);
            this.toastrService.error(this.message, 'Erro', {
                timeOut: 3000,
            });
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_module_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 3365);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.component */ 6462);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 7634);
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-verification/email-verification.component */ 9713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-form/code-form.component */ 9784);
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-form/email-form.component */ 1934);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ 1055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 1570);













class AuthenticationModule {
    constructor(title) {
        this.title = title;
    }
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title)); };
AuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule,
            // ToastrModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent,
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent,
        _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__.EmailVerificationComponent,
        _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_4__.CodeFormComponent,
        _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_5__.EmailFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule], exports: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent,
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
/* harmony import */ var src_app_core_module_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core-module/auth-service/auth.service */ 4616);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);









function SignInComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Email inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignInComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Senha obigat\u00F3ria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignInComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errors);
} }
class SignInComponent {
    constructor(formbuilder, _authService, title, router, http, toastrService) {
        this.formbuilder = formbuilder;
        this._authService = _authService;
        this.title = title;
        this.router = router;
        this.http = http;
        this.toastrService = toastrService;
        this.incorrect = false;
        this.panelMessages = '';
        this.errors = '';
        // this.form = this.formbuilder.group({
        //   email: ['', Validators.required],
        //   password: ['', Validators.required]
        // });
        this.title.setTitle("Entrar na minha Conta - Referência");
    }
    ngOnInit() {
        // this.form = this.formbuilder.group({
        //   email: '',
        //   password: ''
        // });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
        this.getMessages();
        // this.clear();
        // this.form.dirty;
    }
    // pati@pati.com
    submit() {
        this._authService.login(this.form.getRawValue()).subscribe((response) => {
            if (response.auth_status == "invalid" && response.status == 401) {
                this.incorrect = true;
                this.toastrService.error(response.message, 'Acesso negado', {
                    timeOut: 3000,
                });
                this.form.get('email').reset();
                this.form.get('password').reset();
            }
            else if (response.auth_status == "valid" && response.status == 200) {
                if (!response.access_token || response.access_token == "") {
                    this.toastrService.error("Alguma coisa correu mal, tente novamente!", 'Ops!', {
                        timeOut: 3000,
                    });
                }
                else {
                    this.form.get('email').reset();
                    this.form.get('password').reset();
                    localStorage.setItem('token', response.access_token);
                    // console.log(response.access_token);
                    this.router.navigate(['/admin']);
                    // const helper = new JwtHelperService();
                    // const decodeToken = helper.decodeToken(response.access_token);
                    // const expir = helper.getTokenExpirationDate(response.access_token);
                    // const isexp = helper.isTokenExpired(response.access_token);
                    // console.log(isexp);
                }
            }
            else {
                this.toastrService.error("Alguma coisa correu mal, tente novamente!", 'Ops!', {
                    timeOut: 3000,
                });
            }
        }, (error) => {
            // console.log(error.error);
            // this._authService.setAuthMessages(error);
            this.toastrService.error("Verifique a sua conexão à internet.", 'Erro de conectividade', {
                timeOut: 3000,
            });
            // console.log(this.errors);
            this.errors = error.error;
        });
    }
    getMessages() {
        this.$subs = this._authService.getAuthMessage().subscribe((message) => {
            // console.log(message);
            if (message.status) {
                this.errors = message.status;
            }
            else {
                this.errors = message;
                // console.log(message);
            }
        });
        // console.log(this.$subs);
        // const messageCount = timer(2000);
        // messageCount.subscribe((c) => {
        //   if(this.errors != ''){
        //     // this.$subs.unsubscribe();
        //   }else{}
        // });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_module_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 35, vars: 5, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", "Logotipo"], [1, "panel-title"], [1, "form"], ["action", "", 3, "formGroup", "submit"], [1, "input"], [1, "label"], ["for", ""], ["type", "email", "formControlName", "email", "name", "email", "required", ""], [4, "ngIf"], ["routerLink", "/recover"], ["type", "password", "formControlName", "password", "name", "password", "required", ""], ["class", "panelMessages", 4, "ngIf"], [1, "checkbox"], ["type", "checkbox", "id", "check"], ["for", "check"], [1, "submit"], ["type", "submit", 3, "disabled"], ["for", "", 2, "color", "#f33", "font-size", "x-small"], [1, "panelMessages"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SignInComponent_div_27_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Recordar-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Entrar na conta");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 520px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 10px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: #aaa;\r\n    text-decoration: none;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n    transition: .3s;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    color: #bbb;\r\n    \r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0px 0px 20px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{\r\n    background-color: #87c1f5;\r\n    cursor: not-allowed;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\r\n.panelMessages[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSxvQkFBb0I7QUFDcEI7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakIiLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnBhbmVse1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cclxuICAgIHdpZHRoOiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxuICAgIC8qIG1hcmdpbi10b3A6IDUlOyAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAjZGRkO1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXIgZGl2LmxvZ290eXBle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxlIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5mb3JtIGxhYmVsLCBzcGFuLCBhe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi8qIGZvcm17XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG59ICovXHJcbmZvcm0gZGl2LmlucHV0IGRpdi5sYWJlbHtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgZGl2ID4gaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCA+IGRpdntcclxuICAgIC8qIG1hcmdpbjogMTBweCAwcHg7ICovXHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgZGl2LmxhYmVsIHNwYW4gYXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmRpdi5jaGVja2JveHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcbmRpdi5jaGVja2JveCBpbnB1dHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbmRpdi5jaGVja2JveCA+IGxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXHJcbn1cclxuZGl2LnN1Ym1pdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG59XHJcbmRpdi5zdWJtaXQgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ5OWZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmRpdi5zdWJtaXQgYnV0dG9uOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3YzFmNTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb24gc3Bhbnt9XHJcbmRpdi5uYXZpZ2F0aW9uIHNwYW4gYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjQ5OWZmO1xyXG59XHJcbi5wYW5lbE1lc3NhZ2Vze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class AuthService {
    constructor(http) {
        this.http = http;
        // private userUrl = 'api/users';
        this.domain = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    isLoggedIn() {
        return !!localStorage.getItem('token');
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
    login(user) {
        let loginUrl = this.domain + "login";
        return this.http.post(loginUrl, user);
    }
    // protected headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });
    getUserAuthenticated() {
        let userAuthenticatdUrl = this.domain + "user?token=" + localStorage.getItem('token');
        return this.http.post(userAuthenticatdUrl, {});
    }
    userLogout() {
        let userAuthenticationLogoutUrl = this.domain + "logout?token=" + localStorage.getItem('token');
        return this.http.post(userAuthenticationLogoutUrl, {});
    }
    setAuthMessages(message) {
        this.subject.next(message);
    }
    getAuthMessage() {
        return this.subject.asObservable();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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