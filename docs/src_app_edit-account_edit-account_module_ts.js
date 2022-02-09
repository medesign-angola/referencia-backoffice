"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_edit-account_edit-account_module_ts"],{

/***/ 763:
/*!*************************************************************!*\
  !*** ./src/app/edit-account/edit-account-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountRoutingModule": () => (/* binding */ EditAccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _edit_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-account.component */ 9495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _edit_account_component__WEBPACK_IMPORTED_MODULE_0__.EditAccountComponent }];
class EditAccountRoutingModule {
}
EditAccountRoutingModule.ɵfac = function EditAccountRoutingModule_Factory(t) { return new (t || EditAccountRoutingModule)(); };
EditAccountRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditAccountRoutingModule });
EditAccountRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9495:
/*!********************************************************!*\
  !*** ./src/app/edit-account/edit-account.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountComponent": () => (/* binding */ EditAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class EditAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditAccountComponent.ɵfac = function EditAccountComponent_Factory(t) { return new (t || EditAccountComponent)(); };
EditAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditAccountComponent, selectors: [["app-edit-account"]], decls: 2, vars: 0, template: function EditAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-account works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9229:
/*!*****************************************************!*\
  !*** ./src/app/edit-account/edit-account.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountModule": () => (/* binding */ EditAccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-account-routing.module */ 763);
/* harmony import */ var _edit_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.component */ 9495);
/* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-form/edit-form.component */ 804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class EditAccountModule {
}
EditAccountModule.ɵfac = function EditAccountModule_Factory(t) { return new (t || EditAccountModule)(); };
EditAccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EditAccountModule });
EditAccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditAccountRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditAccountModule, { declarations: [_edit_account_component__WEBPACK_IMPORTED_MODULE_1__.EditAccountComponent,
        _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_2__.EditFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditAccountRoutingModule] }); })();


/***/ }),

/***/ 804:
/*!***************************************************************!*\
  !*** ./src/app/edit-account/edit-form/edit-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFormComponent": () => (/* binding */ EditFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class EditFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditFormComponent.ɵfac = function EditFormComponent_Factory(t) { return new (t || EditFormComponent)(); };
EditFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditFormComponent, selectors: [["app-edit-form"]], decls: 2, vars: 0, template: function EditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_edit-account_edit-account_module_ts.js.map