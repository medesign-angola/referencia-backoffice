(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owners-owners-module"],{

/***/ "1lAs":
/*!***************************************************************!*\
  !*** ./src/app/owners/owners-table/owners-table.component.ts ***!
  \***************************************************************/
/*! exports provided: OwnersTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersTableComponent", function() { return OwnersTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OwnersTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
OwnersTableComponent.ɵfac = function OwnersTableComponent_Factory(t) { return new (t || OwnersTableComponent)(); };
OwnersTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OwnersTableComponent, selectors: [["app-owners-table"]], decls: 2, vars: 0, template: function OwnersTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "owners-table works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvd25lcnMtdGFibGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TJv3":
/*!*****************************************!*\
  !*** ./src/app/owners/owners.module.ts ***!
  \*****************************************/
/*! exports provided: OwnersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersModule", function() { return OwnersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _owners_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owners-routing.module */ "q6Wk");
/* harmony import */ var _owners_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owners.component */ "lBrJ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "wtFW");
/* harmony import */ var _owners_table_owners_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owners-table/owners-table.component */ "1lAs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class OwnersModule {
}
OwnersModule.ɵfac = function OwnersModule_Factory(t) { return new (t || OwnersModule)(); };
OwnersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OwnersModule });
OwnersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _owners_routing_module__WEBPACK_IMPORTED_MODULE_1__["OwnersRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OwnersModule, { declarations: [_owners_component__WEBPACK_IMPORTED_MODULE_2__["OwnersComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _owners_table_owners_table_component__WEBPACK_IMPORTED_MODULE_4__["OwnersTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _owners_routing_module__WEBPACK_IMPORTED_MODULE_1__["OwnersRoutingModule"]] }); })();


/***/ }),

/***/ "lBrJ":
/*!********************************************!*\
  !*** ./src/app/owners/owners.component.ts ***!
  \********************************************/
/*! exports provided: OwnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersComponent", function() { return OwnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OwnersComponent {
    constructor() { }
    ngOnInit() {
    }
}
OwnersComponent.ɵfac = function OwnersComponent_Factory(t) { return new (t || OwnersComponent)(); };
OwnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OwnersComponent, selectors: [["app-owners"]], decls: 2, vars: 0, template: function OwnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "owners works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvd25lcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "q6Wk":
/*!*************************************************!*\
  !*** ./src/app/owners/owners-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OwnersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersRoutingModule", function() { return OwnersRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _owners_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owners.component */ "lBrJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _owners_component__WEBPACK_IMPORTED_MODULE_1__["OwnersComponent"] }];
class OwnersRoutingModule {
}
OwnersRoutingModule.ɵfac = function OwnersRoutingModule_Factory(t) { return new (t || OwnersRoutingModule)(); };
OwnersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OwnersRoutingModule });
OwnersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OwnersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wtFW":
/*!***************************************************!*\
  !*** ./src/app/owners/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=owners-owners-module.js.map