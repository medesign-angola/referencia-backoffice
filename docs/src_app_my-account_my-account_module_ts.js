"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_my-account_my-account_module_ts"],{

/***/ 6541:
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountRoutingModule": () => (/* binding */ MyAccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _my_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account.component */ 6267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _my_account_component__WEBPACK_IMPORTED_MODULE_0__.MyAccountComponent }];
class MyAccountRoutingModule {
}
MyAccountRoutingModule.ɵfac = function MyAccountRoutingModule_Factory(t) { return new (t || MyAccountRoutingModule)(); };
MyAccountRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MyAccountRoutingModule });
MyAccountRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6267:
/*!****************************************************!*\
  !*** ./src/app/my-account/my-account.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountComponent": () => (/* binding */ MyAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MyAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) { return new (t || MyAccountComponent)(); };
MyAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyAccountComponent, selectors: [["app-my-account"]], decls: 2, vars: 0, template: function MyAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-account works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7796:
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountModule": () => (/* binding */ MyAccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account-routing.module */ 6541);
/* harmony import */ var _my_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.component */ 6267);
/* harmony import */ var _my_info_my_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-info/my-info.component */ 6725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class MyAccountModule {
}
MyAccountModule.ɵfac = function MyAccountModule_Factory(t) { return new (t || MyAccountModule)(); };
MyAccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MyAccountModule });
MyAccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _my_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyAccountRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MyAccountModule, { declarations: [_my_account_component__WEBPACK_IMPORTED_MODULE_1__.MyAccountComponent,
        _my_info_my_info_component__WEBPACK_IMPORTED_MODULE_2__.MyInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _my_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyAccountRoutingModule] }); })();


/***/ }),

/***/ 6725:
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-info/my-info.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInfoComponent": () => (/* binding */ MyInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MyInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyInfoComponent.ɵfac = function MyInfoComponent_Factory(t) { return new (t || MyInfoComponent)(); };
MyInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyInfoComponent, selectors: [["app-my-info"]], decls: 2, vars: 0, template: function MyInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_my-account_my-account_module_ts.js.map