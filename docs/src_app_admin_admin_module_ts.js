"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core-module/auth-guard/auth.guard */ 224);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ 2498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent,
        children: [
            {
                path: 'suporte', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../support/support.module */ 6758)).then(m => m.SupportModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'editar-conta', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js"), __webpack_require__.e("src_app_edit-account_edit-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../edit-account/edit-account.module */ 9229)).then(m => m.EditAccountModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'minha-conta', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js"), __webpack_require__.e("src_app_my-account_my-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../my-account/my-account.module */ 7796)).then(m => m.MyAccountModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'definicoes', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 7075)).then(m => m.SettingsModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'usuarios', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../users/users.module */ 1951)).then(m => m.UsersModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'solicitacoes', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js"), __webpack_require__.e("src_app_requests_requests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../requests/requests.module */ 6185)).then(m => m.RequestsModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'proprietarios', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_owners_owners_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../owners/owners.module */ 8070)).then(m => m.OwnersModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            // { path: 'definicoes', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
            {
                path: 'imoveis', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js"), __webpack_require__.e("src_app_properties_properties_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../properties/properties.module */ 1199)).then(m => m.PropertiesModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'dashboard', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-solid-svg-icons_index_es_js"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule),
                canActivate: [_core_module_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenGetter": () => (/* binding */ tokenGetter),
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ 2498);
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share-module/share-module.module */ 2883);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _core_module_core_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core-module/core-module.module */ 2841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);








function tokenGetter() {
    return localStorage.getItem("token");
}
class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
            _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModuleModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
            _core_module_core_module_module__WEBPACK_IMPORTED_MODULE_3__.CoreModuleModule
            // JwtModule.forRoot({
            //   config: {
            //     tokenGetter: tokenGetter,
            //     allowedDomains: [],
            //     authScheme: "Bearer ",
            //     skipWhenExpired: true,
            //   }
            // }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
        _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModuleModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
        _core_module_core_module_module__WEBPACK_IMPORTED_MODULE_3__.CoreModuleModule
        // JwtModule.forRoot({
        //   config: {
        //     tokenGetter: tokenGetter,
        //     allowedDomains: [],
        //     authScheme: "Bearer ",
        //     skipWhenExpired: true,
        //   }
        // }),
    ] }); })();


/***/ }),

/***/ 2498:
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_module_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core-module/user-services/user.service */ 9250);
/* harmony import */ var _share_module_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share-module/menu/menu.component */ 5862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _share_module_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share-module/footer/footer.component */ 9084);





class AdminComponent {
    constructor(userService) {
        this.userService = userService;
        this.userObject = {
            userId: 0,
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            userPhone: '',
            userAgency: '',
            userLocation: '',
            userCategory: ''
        };
    }
    ngOnInit() {
        this.getUserAuthenticated();
        this.verifyIsTokenExpired();
        this.verifyUserToken();
    }
    ngOnChanges(userObject) {
        this.getUserAuthenticated();
        // this.verifyIsTokenExpired()
    }
    getUserAuthenticated() {
        this.userService.userAuthenticated();
        let interval = setInterval(() => {
            if (this.userService.userId === undefined && this.userService.userFirstName === undefined && this.userService.userLastName === undefined) {
                // console.log("Estão undefind!");
            }
            else {
                this.userObject = {
                    userId: this.userService.userId,
                    userFirstName: this.userService.userFirstName,
                    userLastName: this.userService.userLastName,
                    userEmail: this.userService.userEmail,
                    userPhone: this.userService.userPhone,
                    userAgency: this.userService.userAgency,
                    userLocation: this.userService.userLocalization,
                    userCategory: this.userService.userCategory
                };
                clearInterval(interval);
            }
        }, 2000);
    }
    verifyIsTokenExpired() {
        let interval = setInterval(() => {
            if (!this.userService.isTokenExpired()) {
                // console.log("Ainda não expirou!");
            }
            else { }
        }, 20000);
    }
    verifyUserToken() {
        console.log(this.userService.tokenExpirateTime());
        let intervalToVerifyStatusToken = setInterval(() => {
            // console.log(this.userService.isTokenExpired());
        }, 5000);
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_module_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
AdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 1, consts: [[1, "admin"], [3, "userData"], [1, "main-content"], [1, "container"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("userData", ctx.userObject);
    } }, directives: [_share_module_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _share_module_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".main-content[_ngcontent-%COMP%]{\r\n    \r\n    margin: -50px 0px 0px 305px;\r\n}\r\nmain[_ngcontent-%COMP%]{\r\n    margin-top: 130px;\r\n    padding: 1rem 1.5rem;\r\n    background-color: #fff;\r\n    min-height: calc(100vh - 90px);\r\n}\r\napp-footer[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    padding: 15px 15px;\r\n    text-align: center;\r\n    background-color: #f8f9fa;\r\n    color: #8c95a4;\r\n    margin-top: 50px;\r\n}\r\n.admin[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnR7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAtNTBweDsgKi9cclxuICAgIG1hcmdpbjogLTUwcHggMHB4IDBweCAzMDVweDtcclxufVxyXG5tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XHJcbn1cclxuYXBwLWZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBjb2xvcjogIzhjOTVhNDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmFkbWlue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */"] });


/***/ }),

/***/ 2841:
/*!***************************************************!*\
  !*** ./src/app/core-module/core-module.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModuleModule": () => (/* binding */ CoreModuleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class CoreModuleModule {
}
CoreModuleModule.ɵfac = function CoreModuleModule_Factory(t) { return new (t || CoreModuleModule)(); };
CoreModuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModuleModule });
CoreModuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            // HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModuleModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map