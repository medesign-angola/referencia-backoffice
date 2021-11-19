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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.component */ 2498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
        children: [
            { path: 'suporte', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../support/support.module */ 6758)).then(m => m.SupportModule) },
            { path: 'editarConta', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-account_edit-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../edit-account/edit-account.module */ 9229)).then(m => m.EditAccountModule) },
            { path: 'minhaConta', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-account_my-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../my-account/my-account.module */ 7796)).then(m => m.MyAccountModule) },
            { path: 'definicoes', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 7075)).then(m => m.SettingsModule) },
            { path: 'usuarios', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../users/users.module */ 1951)).then(m => m.UsersModule) },
            { path: 'solicitacoes', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_requests_requests_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../requests/requests.module */ 6185)).then(m => m.RequestsModule) },
            { path: 'proprietarios', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_owners_owners_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../owners/owners.module */ 8070)).then(m => m.OwnersModule) },
            // { path: 'definicoes', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
            { path: 'imoveis', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_properties_properties_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../properties/properties.module */ 1199)).then(m => m.PropertiesModule) },
            { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule) },
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
        ],
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ 2498);
/* harmony import */ var _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share-module/share-module.module */ 2883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
            _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModuleModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
        _share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModuleModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _share_module_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../share-module/menu/menu.component */ 5862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 5, vars: 0, consts: [[1, "main-content"], [1, "container"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_share_module_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".main-content[_ngcontent-%COMP%]{\r\n    margin-top: -50px;\r\n    margin-left: 305px;\r\n    background-color: #fc0;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    \r\n}\r\nmain[_ngcontent-%COMP%]{\r\n    margin-top: 130px;\r\n    padding: 1rem 1.5rem;\r\n    background-color: #fff;\r\n    min-height: calc(100vh - 90px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzA7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIFxyXG59XHJcbm1haW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5862:
/*!*****************************************************!*\
  !*** ./src/app/share-module/menu/menu.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




class MenuComponent {
    constructor(router, acti, loc) {
        this.router = router;
        this.acti = acti;
        this.loc = loc;
        this.title = this.check();
        this.imovel_icon = "assets/Icons/Activity.svg";
        this.dash_icon = "assets/Icons/icone -3 User.svg";
        this.proprietarios_icon = "assets/Icons/icone -3 User.svg";
        this.solici_icon = "assets/Icons/Paper.svg";
        this.users_icon = "assets/Icons/icone -3 User.svg";
        this.defin_icon = "assets/Icons/Setting.svg";
        this.hide = true;
    }
    ngOnInit() {
        //  console.log(this.router);
        // console.log(this.acti.snapshot.url.join(''));
        // console.log(this.router.rou());
        this.check();
        this.checkSettings();
    }
    seeTheActive(link) {
        if (link === 'Imóveis') {
            this.imovel_icon = this.imovel_icon + "_w.svg";
        }
        else if (link === 'Proprietários') {
            this.proprietarios_icon = this.proprietarios_icon + "_w.svg";
        }
        else if (link === 'Dashboard') {
            this.title = "Dashboard";
        }
        else if (link === 'Solicitações') {
            this.title = "Solicitações";
        }
        else if (link === 'Usuários') {
            this.title = "Usuários";
        }
        else if (link === 'Definições') {
            this.title = "Definições";
        }
    }
    check() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                this.url = event.url;
                // console.log(this.title);
                if (this.url === '/admin/imoveis') {
                    this.title = "Imóveis";
                }
                else if (this.url === '/admin/proprietarios') {
                    this.title = "Proprietários";
                }
                else if (this.url === '/admin/dashboard') {
                    this.title = "Dashboard";
                }
                else if (this.url === '/admin/solicitacoes') {
                    this.title = "Solicitações";
                }
                else if (this.url === '/admin/usuarios') {
                    this.title = "Usuários";
                }
                else if (this.url === '/admin/definicoes') {
                    this.title = "Definições";
                }
            }
        });
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
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 82, vars: 3, consts: [[1, "sidebar"], [1, "logo"], ["width", "80%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "sidebar-menu"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active"], [1, "icon"], ["width", "23", "src", "assets/Icons/icone -3 User.svg", "alt", ""], [1, "text"], ["routerLink", "/admin/imoveis", "routerLinkActive", "active"], ["width", "23", "src", "assets/Icons/Activity.svg", "alt", ""], ["routerLink", "/admin/proprietarios", "routerLinkActive", "active"], ["routerLink", "/admin/solicitacoes", "routerLinkActive", "active"], ["width", "23", "src", "assets/Icons/Paper.svg", "alt", ""], ["routerLink", "/admin/usuarios", "routerLinkActive", "active"], [2, "cursor", "pointer", 3, "click"], ["width", "23", "src", "assets/Icons/Setting.svg", "alt", ""], [1, "search-wrapper1"], [1, ""], ["width", "17", "src", "assets/Icons/icone-pesquisa.svg", "alt", ""], ["type", "search", "placeholder", "Pesquisar no Dashboard"], [1, "user-wrapper"], ["src", "assets/Icons/notificatio_sign.svg", "width", "20px", "alt", "", 2, "cursor", "pointer"], ["src", "assets/Icons/Perfil_user.svg", "width", "40px", "alt", "", 2, "cursor", "pointer"], [1, "settings"], [1, "settings-background", 3, "ngClass", "click"], [1, "settings-panel", 3, "ngClass"], [1, "panel-header"], [3, "click"], [1, "panel-banner"], [1, "panel-img"], ["src", "assets/Imagens/settings/bnr.jpg", "alt", ""], [1, "panel-body"], [1, "theme-mode"], [1, "title"], [1, "input"], [1, "switch"], ["type", "checkbox"], [1, "slider", "round"], [1, "bar-mode"], ["type", "checkbox", "checked", ""], [1, "button"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Imoveis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Propriet\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Solicita\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_36_listener() { return ctx.showSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Defini\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_52_listener() { return ctx.fadeOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Defini\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_57_listener() { return ctx.fadeOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u2716");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Trocar para o modo escuro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Trocar barra lateral para Ral\u00E1vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Defini\u00E7\u00F5es Padr\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.hide == true ? "close" : "apear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.hide == true ? "hided" : "non-hided");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    \r\n    padding: 20px 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    margin-bottom: 70px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    \r\n    z-index: 100;\r\n}\r\n\r\n.sidebar-menu[_ngcontent-%COMP%]{\r\n    margin-top: 1rem;\r\n}\r\n\r\n.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    \r\n    padding: 10px;\r\n    display: block;\r\n    color: black;\r\n    position: relative;\r\n    margin: 10px 0px;\r\n    \r\n    \r\n}\r\n\r\n.active[_ngcontent-%COMP%]{\r\n    background: #00a2ff;\r\n    \r\n    border-radius: 10px;\r\n    color: #fff !important;\r\n}\r\n\r\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    \r\n    \r\n    margin-right: 10px;\r\n    \r\n}\r\n\r\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    position: absolute;\r\n    display: block;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 16px;\r\n    top: 50%;\r\n    left: 50px;\r\n    transform: translateY(-50%);\r\n    position: absolute;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 1.5rem;\r\n    position: fixed;\r\n    background-color: #fff;\r\n    left: 345px;\r\n    width: calc(100% - 345px);\r\n    top: 0;\r\n    z-index: 100;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: #00a2ff;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 1.7rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.search-wrapper1[_ngcontent-%COMP%]{\r\n    \r\n    height: 40px;\r\n    \r\n    display: flex;\r\n    width: 300px;\r\n    align-items: center;\r\n    position: relative;\r\n    left: 170px;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n\r\n.search-wrapper1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n\r\n.search-wrapper1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    \r\n    outline: none;\r\n}\r\n\r\n.user-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    margin: 0rem 2rem;\r\n}\r\n\r\n.user-wrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.user-wrapper[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    color: var(--text-grey);\r\n}\r\n\r\n.search-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n\r\n.search-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n\r\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n\r\n\r\n.settings[_ngcontent-%COMP%]{}\r\n\r\n.settings-background[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    background-color: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0px;\r\n    z-index: 105;\r\n    opacity: .4;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]{ \r\n    position: fixed;\r\n    background-color: #000;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    transition: 1s;\r\n    left: 0;\r\n    top: 0px;\r\n    z-index: 105;\r\n    opacity: .4;\r\n}\r\n\r\n.settings-panel[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    width: 390px;\r\n    position: fixed;\r\n    height: 100%;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 110;\r\n    padding: 10px 20px;\r\n    transition: .4s;\r\n}\r\n\r\n.hided[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    width: 390px;\r\n    position: fixed;\r\n    height: 100%;\r\n    transition: 1s;\r\n    right: -100%;\r\n    top: 0;\r\n    z-index: 110;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n    \r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n    cursor: pointer;\r\n    color: #bbb;\r\n}\r\n\r\n.panel-banner[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.panel-img[_ngcontent-%COMP%]{ \r\n    position: inherit;\r\n    width: 100%;\r\n    height: 180px;\r\n    margin: 10px 0px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n\r\n.panel-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.panel-body[_ngcontent-%COMP%]{\r\n    margin: 50px 0px;\r\n}\r\n\r\n.theme-mode[_ngcontent-%COMP%]{}\r\n\r\n.theme-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\r\n\r\n.theme-mode[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{}\r\n\r\n.bar-mode[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\n\r\n.bar-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\r\n\r\n.bar-mode[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin: 50px 0px;\r\n    \r\n    text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: #2196F3;\r\n    padding: 10px 40px;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 48px;\r\n    height: 29px;\r\n  }\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border: 1px solid #ccc;\r\n    background-color: #fff;\r\n    transition: .4s;\r\n    padding: 2.5px 6px;\r\n  }\r\n\r\n.slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    bottom: 50%;\r\n    transform: translateY(50%);\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n    background-color: #2196F3;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translate(16px, 10px);\r\n  }\r\n\r\n\r\n\r\n.slider.round[_ngcontent-%COMP%] {\r\n    border-radius: 34px;\r\n  }\r\n\r\n.slider.round[_ngcontent-%COMP%]:before {\r\n    border-radius: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,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Q0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUV2QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBR0UsZ0NBQWdDO0VBQ2xDOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoibWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaWRlYmFyIC5sb2dve1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZjMDsgKi9cclxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuLnNpZGViYXJ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZjMDsgKi9cclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4uc2lkZWJhci1tZW51e1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4uc2lkZWJhci1tZW51IGxpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLW1lbnUgYXtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMXJlbTsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAvKiBmb250LXNpemU6IDEuMXJlbTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICMwMGEyZmY7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDEwcHg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSBhIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqL1xyXG4gICAgLyogcGFkZGluZy1yaWdodDogMXJlbTsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbn1cclxuLnNpZGViYXItbWVudSBhIHNwYW4gaW1ne1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGV4dHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbGVmdDogMzQ1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzQ1cHgpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbmhlYWRlciBoMntcclxuICAgIGNvbG9yOiAjMDBhMmZmO1xyXG59XHJcbmhlYWRlciBsYWJlbCBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLXdyYXBwZXIxe1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE0NSwgMTQyLCAxNDIpOyAqL1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxNzBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLXdyYXBwZXIxIHNwYW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlcjEgaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2Y0ZjdmYTsgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udXNlci13cmFwcGVyIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMHJlbSAycmVtO1xyXG59XHJcblxyXG4udXNlci13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnVzZXItd3JhcHBlciBzbWFsbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyZXkpO1xyXG59XHJcbi5zZWFyY2gtd3JhcHBlcntcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDUsIDE0MiwgMTQyKTsgKi9cclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2Y0ZjdmYTsgKi9cclxufVxyXG5cclxuLnNlYXJjaC13cmFwcGVyIHNwYW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbn1cclxuLnNlYXJjaC13cmFwcGVyIGlucHV0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBNT0RBTCAqL1xyXG5cclxuXHJcbi5zZXR0aW5nc3t9XHJcblxyXG4uc2V0dGluZ3MtYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDEwNTtcclxuICAgIG9wYWNpdHk6IC40O1xyXG59XHJcblxyXG4uY2xvc2V7IFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMTA1O1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1wYW5lbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDExMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG4uaGlkZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMTA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuLnBhbmVsLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZjMDsgKi9cclxufVxyXG4ucGFuZWwtaGVhZGVyIHNwYW57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnBhbmVsLWhlYWRlciBzcGFuIGF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2JiYjtcclxufVxyXG4ucGFuZWwtYmFubmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wYW5lbC1pbWd7IFxyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnBhbmVsLWltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnBhbmVsLWJvZHl7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcbi50aGVtZS1tb2Rle31cclxuLnRoZW1lLW1vZGUgLnRpdGxle1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuLnRoZW1lLW1vZGUgdGl0bGUgaW5wdXR7fVxyXG5cclxuLmJhci1tb2Rle1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG4uYmFyLW1vZGUgLnRpdGxle1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuLmJhci1tb2RlIHRpdGxlIGlucHV0e31cclxuXHJcbi5idXR0b257XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZjMDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogMjlweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cclxuICAuc3dpdGNoIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNsaWRlciAqL1xyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICAgIHBhZGRpbmc6IDIuNXB4IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNnB4LCAxMHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNnB4LCAxMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE2cHgsIDEwcHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 5523:
/*!*************************************************************!*\
  !*** ./src/app/share-module/settings/settings.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


class SettingsComponent {
    constructor() {
        this.hide = false;
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
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 31, vars: 2, consts: [[1, "settings"], [1, "settings-background", 3, "ngClass"], [1, "settings-panel", 3, "ngClass"], [1, "panel-header"], [3, "click"], [1, "panel-banner"], [1, "panel-img"], ["src", "assets/Imagens/settings/bnr.jpg", "alt", ""], [1, "panel-body"], [1, "theme-mode"], [1, "title"], [1, "input"], [1, "switch"], ["type", "checkbox"], [1, "slider", "round"], [1, "bar-mode"], ["type", "checkbox", "checked", ""], [1, "button"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModuleModule": () => (/* binding */ ShareModuleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _user_myaccount_header_user_myaccount_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-myaccount-header/user-myaccount-header.component */ 6534);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 5862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ 5523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class ShareModuleModule {
}
ShareModuleModule.ɵfac = function ShareModuleModule_Factory(t) { return new (t || ShareModuleModule)(); };
ShareModuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShareModuleModule });
ShareModuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShareModuleModule, { declarations: [_user_myaccount_header_user_myaccount_header_component__WEBPACK_IMPORTED_MODULE_0__.UserMyaccountHeaderComponent,
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
        _user_myaccount_header_user_myaccount_header_component__WEBPACK_IMPORTED_MODULE_0__.UserMyaccountHeaderComponent] }); })();


/***/ }),

/***/ 6534:
/*!***************************************************************************************!*\
  !*** ./src/app/share-module/user-myaccount-header/user-myaccount-header.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMyaccountHeaderComponent": () => (/* binding */ UserMyaccountHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UserMyaccountHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserMyaccountHeaderComponent.ɵfac = function UserMyaccountHeaderComponent_Factory(t) { return new (t || UserMyaccountHeaderComponent)(); };
UserMyaccountHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserMyaccountHeaderComponent, selectors: [["app-user-myaccount-header"]], decls: 2, vars: 0, template: function UserMyaccountHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-myaccount-header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW15YWNjb3VudC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map