(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"],{

/***/ "2lrL":
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountRoutingModule", function() { return MyAccountRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.component */ "NGaI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _my_account_component__WEBPACK_IMPORTED_MODULE_1__["MyAccountComponent"] }];
class MyAccountRoutingModule {
}
MyAccountRoutingModule.ɵfac = function MyAccountRoutingModule_Factory(t) { return new (t || MyAccountRoutingModule)(); };
MyAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MyAccountRoutingModule });
MyAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MyAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "J8OZ":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/*! exports provided: MyAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountModule", function() { return MyAccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account-routing.module */ "2lrL");
/* harmony import */ var _my_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-account.component */ "NGaI");
/* harmony import */ var _my_info_my_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-info/my-info.component */ "zeqs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class MyAccountModule {
}
MyAccountModule.ɵfac = function MyAccountModule_Factory(t) { return new (t || MyAccountModule)(); };
MyAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MyAccountModule });
MyAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _my_account_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyAccountRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MyAccountModule, { declarations: [_my_account_component__WEBPACK_IMPORTED_MODULE_2__["MyAccountComponent"],
        _my_info_my_info_component__WEBPACK_IMPORTED_MODULE_3__["MyInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _my_account_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyAccountRoutingModule"]] }); })();


/***/ }),

/***/ "NGaI":
/*!****************************************************!*\
  !*** ./src/app/my-account/my-account.component.ts ***!
  \****************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) { return new (t || MyAccountComponent)(); };
MyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyAccountComponent, selectors: [["app-my-account"]], decls: 2, vars: 0, template: function MyAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-account works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zeqs":
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-info/my-info.component.ts ***!
  \*********************************************************/
/*! exports provided: MyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInfoComponent", function() { return MyInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyInfoComponent.ɵfac = function MyInfoComponent_Factory(t) { return new (t || MyInfoComponent)(); };
MyInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyInfoComponent, selectors: [["app-my-info"]], decls: 2, vars: 0, template: function MyInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=my-account-my-account-module.js.map