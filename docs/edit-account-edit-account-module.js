(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-account-edit-account-module"],{

/***/ "McaQ":
/*!***************************************************************!*\
  !*** ./src/app/edit-account/edit-form/edit-form.component.ts ***!
  \***************************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EditFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditFormComponent.ɵfac = function EditFormComponent_Factory(t) { return new (t || EditFormComponent)(); };
EditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditFormComponent, selectors: [["app-edit-form"]], decls: 2, vars: 0, template: function EditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "MeL2":
/*!*****************************************************!*\
  !*** ./src/app/edit-account/edit-account.module.ts ***!
  \*****************************************************/
/*! exports provided: EditAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountModule", function() { return EditAccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account-routing.module */ "fPD+");
/* harmony import */ var _edit_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-account.component */ "SwvN");
/* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-form/edit-form.component */ "McaQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EditAccountModule {
}
EditAccountModule.ɵfac = function EditAccountModule_Factory(t) { return new (t || EditAccountModule)(); };
EditAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EditAccountModule });
EditAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_1__["EditAccountRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EditAccountModule, { declarations: [_edit_account_component__WEBPACK_IMPORTED_MODULE_2__["EditAccountComponent"],
        _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_3__["EditFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_1__["EditAccountRoutingModule"]] }); })();


/***/ }),

/***/ "SwvN":
/*!********************************************************!*\
  !*** ./src/app/edit-account/edit-account.component.ts ***!
  \********************************************************/
/*! exports provided: EditAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountComponent", function() { return EditAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EditAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditAccountComponent.ɵfac = function EditAccountComponent_Factory(t) { return new (t || EditAccountComponent)(); };
EditAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditAccountComponent, selectors: [["app-edit-account"]], decls: 2, vars: 0, template: function EditAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-account works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "fPD+":
/*!*************************************************************!*\
  !*** ./src/app/edit-account/edit-account-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountRoutingModule", function() { return EditAccountRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.component */ "SwvN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _edit_account_component__WEBPACK_IMPORTED_MODULE_1__["EditAccountComponent"] }];
class EditAccountRoutingModule {
}
EditAccountRoutingModule.ɵfac = function EditAccountRoutingModule_Factory(t) { return new (t || EditAccountRoutingModule)(); };
EditAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EditAccountRoutingModule });
EditAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=edit-account-edit-account-module.js.map