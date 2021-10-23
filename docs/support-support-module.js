(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"],{

/***/ "5b4O":
/*!**************************************************************************!*\
  !*** ./src/app/support/send-message-form/send-message-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: SendMessageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageFormComponent", function() { return SendMessageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SendMessageFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
SendMessageFormComponent.ɵfac = function SendMessageFormComponent_Factory(t) { return new (t || SendMessageFormComponent)(); };
SendMessageFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendMessageFormComponent, selectors: [["app-send-message-form"]], decls: 2, vars: 0, template: function SendMessageFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "send-message-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLW1lc3NhZ2UtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "JWn5":
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SupportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportRoutingModule", function() { return SupportRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.component */ "zdD4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _support_component__WEBPACK_IMPORTED_MODULE_1__["SupportComponent"] }];
class SupportRoutingModule {
}
SupportRoutingModule.ɵfac = function SupportRoutingModule_Factory(t) { return new (t || SupportRoutingModule)(); };
SupportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SupportRoutingModule });
SupportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SupportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZlwT":
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support-routing.module */ "JWn5");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component */ "zdD4");
/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-list/message-list.component */ "auVc");
/* harmony import */ var _send_message_form_send_message_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./send-message-form/send-message-form.component */ "5b4O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SupportModule {
}
SupportModule.ɵfac = function SupportModule_Factory(t) { return new (t || SupportModule)(); };
SupportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SupportModule });
SupportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_1__["SupportRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SupportModule, { declarations: [_support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"],
        _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_3__["MessageListComponent"],
        _send_message_form_send_message_form_component__WEBPACK_IMPORTED_MODULE_4__["SendMessageFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _support_routing_module__WEBPACK_IMPORTED_MODULE_1__["SupportRoutingModule"]] }); })();


/***/ }),

/***/ "auVc":
/*!****************************************************************!*\
  !*** ./src/app/support/message-list/message-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MessageListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessageListComponent.ɵfac = function MessageListComponent_Factory(t) { return new (t || MessageListComponent)(); };
MessageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageListComponent, selectors: [["app-message-list"]], decls: 2, vars: 0, template: function MessageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "message-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zdD4":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(); };
SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 2, vars: 0, template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "support works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=support-support-module.js.map