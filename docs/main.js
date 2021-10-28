(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pc\Documents\Referência\admin\admin\src\main.ts */"zUnb");


/***/ }),

/***/ "3RvI":
/*!*************************************************************!*\
  !*** ./src/app/authentication/sign-up/sign-up.component.ts ***!
  \*************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SignUpComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 46, vars: 0, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "panel-title"], [1, "form"], ["action", ""], [1, "input"], [1, "label"], ["for", ""], ["type", "text", "name", "", "id", ""], ["type", "email", "name", "", "id", ""], ["type", "password", "name", "", "id", ""], [1, "checkbox"], ["type", "checkbox", "id", "check"], ["for", "check"], ["routerLink", "/login"], [1, "submit"], ["type", "submit", "value", "Criar conta"], [1, "navigation"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Criar conta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Digite o seu nome completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Digite o seu e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Digite a sua senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirmar senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Aceito todos os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Termos e Condi\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "J\u00E1 tem uma conta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 500px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 10px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: #aaa;\r\n    text-decoration: none;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n    margin: 5px 0px;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n    transition: .3s;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    color: #bbb;\r\n    \r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #2499ff;\r\n    text-decoration: none;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0px 0px 20px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7QUFDcEI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSxvQkFBb0I7QUFDcEI7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucGFuZWx7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNSU7ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4ICNkZGQ7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlciBkaXYubG9nb3R5cGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbmRpdi5wYW5lbCBkaXYuZm9ybSBsYWJlbCwgc3BhbiwgYXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4vKiBmb3Jte1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxufSAqL1xyXG5mb3JtIGRpdi5pbnB1dCBkaXYubGFiZWx7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbmZvcm0gZGl2LmlucHV0IGRpdiA+IGlucHV0e1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgPiBkaXZ7XHJcbiAgICAvKiBtYXJnaW46IDEwcHggMHB4OyAqL1xyXG59XHJcbmZvcm0gZGl2LmlucHV0IGRpdi5sYWJlbCBzcGFuIGF7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5kaXYuY2hlY2tib3h7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG5kaXYuY2hlY2tib3ggaW5wdXR7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5kaXYuY2hlY2tib3ggPiBsYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xyXG59XHJcbmRpdi5jaGVja2JveCA+IGxhYmVsIGF7XHJcbiAgICBjb2xvcjogIzI0OTlmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5kaXYuc3VibWl0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XHJcbn1cclxuZGl2LnN1Ym1pdCBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTlmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5kaXYubmF2aWdhdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXYubmF2aWdhdGlvbiBzcGFue31cclxuZGl2Lm5hdmlnYXRpb24gc3BhbiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyNDk5ZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IdxB":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/code-form/code-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: CodeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeFormComponent", function() { return CodeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class CodeFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
CodeFormComponent.ɵfac = function CodeFormComponent_Factory(t) { return new (t || CodeFormComponent)(); };
CodeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeFormComponent, selectors: [["app-code-form"]], decls: 28, vars: 0, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "panel-title"], [1, "paragraph"], [1, "form"], ["action", ""], [1, "input"], ["type", "text", "name", "", "id", "", "maxlength", "1"], [1, "submit"], ["type", "submit", "value", "Verificar minha conta"], [1, "navigation"], ["routerLink", "/login"]], template: function CodeFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "N\u00E3o recebi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reenviar um novo c\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 550px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    text-align: center;\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n    width: 100%;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    font-size: 1.3em;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    \r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n    width: 105px;\r\n    display: inline-block;\r\n    margin: 0px 10px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), form[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3){\r\n    \r\n\r\n\r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 25px 0px 10px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 30px 0px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxzQkFBc0I7OztBQUcxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0Esb0JBQW9CO0FBQ3BCO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEIiLCJmaWxlIjoiY29kZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucGFuZWx7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNSU7ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4ICNkZGQ7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlciBkaXYubG9nb3R5cGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFyYWdyYXBoe1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhcmFncmFwaCBwe1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLUwpO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYuZm9ybSBsYWJlbCwgc3BhbiwgYXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4vKiBmb3Jte1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxufSAqL1xyXG5mb3JtIGRpdi5pbnB1dHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYgPiBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbmZvcm0gZGl2LmlucHV0ID4gZGl2e1xyXG4gICAgLyogbWFyZ2luOiAxMHB4IDBweDsgKi9cclxuICAgIHdpZHRoOiAxMDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgPiBkaXY6bnRoLWNoaWxkKDIpLFxyXG5mb3JtIGRpdi5pbnB1dCA+IGRpdjpudGgtY2hpbGQoMyl7XHJcbiAgICAvKiBtYXJnaW46IDBweCAyMHB4OyAqL1xyXG5cclxuXHJcbn1cclxuZGl2LnN1Ym1pdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IDBweCAxMHB4IDBweDtcclxufVxyXG5kaXYuc3VibWl0IGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ5OWZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmRpdi5uYXZpZ2F0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5kaXYubmF2aWdhdGlvbiBzcGFue31cclxuZGl2Lm5hdmlnYXRpb24gc3BhbiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyNDk5ZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "OpKh":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-routing.module */ "ionX");
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.component */ "m35V");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "3RvI");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "QKNm");
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-verification/email-verification.component */ "bREg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code-form/code-form.component */ "IdxB");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-form/email-form.component */ "uWie");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
        _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_5__["EmailVerificationComponent"],
        _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_7__["CodeFormComponent"],
        _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_8__["EmailFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
        _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_5__["EmailVerificationComponent"],
        _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_7__["CodeFormComponent"],
        _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_8__["EmailFormComponent"]] }); })();


/***/ }),

/***/ "QKNm":
/*!*************************************************************!*\
  !*** ./src/app/authentication/sign-in/sign-in.component.ts ***!
  \*************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SignInComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 30, vars: 0, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", "Logotipo"], [1, "panel-title"], [1, "form"], ["action", ""], [1, "input"], [1, "label"], ["for", ""], ["type", "text", "name", "", "id", ""], ["routerLink", "/recover"], [1, "checkbox"], ["type", "checkbox", "id", "check"], ["for", "check"], [1, "submit"], ["type", "submit", "value", "Entrar na conta"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Entrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "N\u00FAmero de Telem\u00F3vel ou E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Palavra-passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Esqueceu a Senha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Recordar-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 520px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 10px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: #aaa;\r\n    text-decoration: none;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]{\r\n    padding: 20px 0px;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n    transition: .3s;\r\n}\r\ndiv.checkbox[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    color: #bbb;\r\n    \r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0px 0px 20px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSxvQkFBb0I7QUFDcEI7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucGFuZWx7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xyXG4gICAgd2lkdGg6IDUyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNSU7ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4ICNkZGQ7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuZGl2LnBhbmVsLWhlYWRlciBkaXYubG9nb3R5cGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFuZWwtdGl0bGUgaDF7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktUG9wcGlucy1NKTtcclxufVxyXG5kaXYucGFuZWwgZGl2LmZvcm0gbGFiZWwsIHNwYW4sIGF7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktUG9wcGlucy1NKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLyogZm9ybXtcclxuICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbn0gKi9cclxuZm9ybSBkaXYuaW5wdXQgZGl2LmxhYmVse1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYgPiBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmZvcm0gZGl2LmlucHV0ID4gZGl2e1xyXG4gICAgLyogbWFyZ2luOiAxMHB4IDBweDsgKi9cclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYubGFiZWwgc3BhbiBhe1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuZGl2LmNoZWNrYm94e1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuZGl2LmNoZWNrYm94IGlucHV0e1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuZGl2LmNoZWNrYm94ID4gbGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cclxufVxyXG5kaXYuc3VibWl0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XHJcbn1cclxuZGl2LnN1Ym1pdCBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTlmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5kaXYubmF2aWdhdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXYubmF2aWdhdGlvbiBzcGFue31cclxuZGl2Lm5hdmlnYXRpb24gc3BhbiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyNDk5ZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 0, consts: [["routerLink", "/login", "routerLinkActive", "active"], ["routerLink", "/recover", "routerLinkActive", "active"], ["routerLink", "/verification", "routerLinkActive", "active"], ["routerLink", "/code", "routerLinkActive", "active"], ["routerLink", "/imoveis", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recuperar Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verifica\u00E7\u00E3o de Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "C\u00F3digo de acesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Im\u00F3veis ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    \r\n    padding: 20px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    text-align: center;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    padding: 10px;\r\n    color: #ddd;\r\n    margin: 0px 15px;\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    \r\n    border: 2px solid #ddd;\r\n    border-radius: 3px;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbm5hdiB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubmF2IHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbm5hdiB1bCBsaSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktUG9wcGlucy1MKTtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI0OTlmZjsgKi9cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.module */ "OpKh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationModule"]] }); })();


/***/ }),

/***/ "bREg":
/*!***********************************************************************************!*\
  !*** ./src/app/authentication/email-verification/email-verification.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class EmailVerificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(); };
EmailVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 22, vars: 0, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "panel-title"], [1, "paragraph"], [1, "form"], ["action", ""], [1, "submit"], ["type", "submit", "value", "Continuar a verifica\u00E7\u00E3o"], [1, "navigation"], ["routerLink", ""]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 520px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 30px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    text-align: center;\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 30px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 10px 0px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7QUFDcEI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImVtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnBhbmVse1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cclxuICAgIHdpZHRoOiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxuICAgIC8qIG1hcmdpbi10b3A6IDUlOyAqL1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAjZGRkO1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmRpdi5wYW5lbC1oZWFkZXIgZGl2LmxvZ290eXBle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhbmVsLXRpdGxlIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYXJhZ3JhcGh7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFyYWdyYXBoIHB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTCk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYXJhZ3JhcGggcCBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5mb3JtIGxhYmVsLCBzcGFuLCBhe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LVBvcHBpbnMtTSk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi8qIGZvcm17XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG59ICovXHJcbmZvcm0gZGl2LmlucHV0e1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYubGFiZWx7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbmZvcm0gZGl2LmlucHV0IGRpdiA+IGlucHV0e1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgPiBkaXZ7XHJcbiAgICAvKiBtYXJnaW46IDEwcHggMHB4OyAqL1xyXG59XHJcbmRpdi5zdWJtaXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuZGl2LnN1Ym1pdCBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTlmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5kaXYubmF2aWdhdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb24gc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLUwpO1xyXG59XHJcbmRpdi5uYXZpZ2F0aW9uIHNwYW4gYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjQ5OWZmO1xyXG59Il19 */"] });


/***/ }),

/***/ "ionX":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-form/code-form.component */ "IdxB");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-form/email-form.component */ "uWie");
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-verification/email-verification.component */ "bREg");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "QKNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    // { path: '', component: AuthenticationComponent },
    { path: 'login', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'recover', component: _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_2__["EmailFormComponent"] },
    { path: 'verification', component: _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__["EmailVerificationComponent"] },
    { path: 'code', component: _code_form_code_form_component__WEBPACK_IMPORTED_MODULE_1__["CodeFormComponent"] }
    // { path: 'register', component: SignUpComponent },
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "m35V":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthenticationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(); };
AuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["app-authentication"]], decls: 0, vars: 0, template: function AuthenticationComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "uWie":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/email-form/email-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function() { return EmailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class EmailFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmailFormComponent.ɵfac = function EmailFormComponent_Factory(t) { return new (t || EmailFormComponent)(); };
EmailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailFormComponent, selectors: [["app-email-form"]], decls: 24, vars: 0, consts: [[1, "panel"], [1, "panel-header"], [1, "logotype"], ["width", "40%", "src", "assets/Logotipo/logotipo.svg", "alt", ""], [1, "panel-title"], [1, "paragraph"], [1, "form"], ["action", ""], [1, "input"], [1, "label"], ["for", ""], ["type", "email", "name", "", "id", ""], [1, "submit"], ["type", "submit", "value", "Enviar"], [1, "navigation"], ["routerLink", "/login"]], template: function EmailFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div.panel[_ngcontent-%COMP%]{\r\n    \r\n    width: 520px;\r\n    position: relative;\r\n    margin: 5% auto;\r\n    \r\n    padding: 20px;\r\n    box-shadow: 0px 2px 15px #ddd;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\ndiv.panel-header[_ngcontent-%COMP%]   div.logotype[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.panel-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    text-align: center;\r\n    font-family: var(--font-family-Poppins-L);\r\n}\r\ndiv.panel[_ngcontent-%COMP%]   div.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: var(--font-family-Poppins-M);\r\n    font-size: small;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]{\r\n    margin: 30px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{\r\n    margin: 15px 0px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    outline: none;\r\n    border-radius: 3px;\r\n}\r\nform[_ngcontent-%COMP%]   div.input[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    \r\n}\r\ndiv.submit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 25px 0px 10px 0px;\r\n}\r\ndiv.submit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 15px;\r\n    background-color: #2499ff;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{}\r\ndiv.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #2499ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLG9CQUFvQjtBQUNwQjtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5wYW5lbHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXHJcbiAgICB3aWR0aDogNTIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbiAgICAvKiBtYXJnaW4tdG9wOiA1JTsgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggI2RkZDtcclxufVxyXG5kaXYucGFuZWwtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYucGFuZWwtaGVhZGVyIGRpdi5sb2dvdHlwZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFuZWwtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuZGl2LnBhbmVsIGRpdi5wYW5lbC10aXRsZSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYucGFyYWdyYXBoe1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5kaXYucGFuZWwgZGl2LnBhcmFncmFwaCBwe1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLUwpO1xyXG59XHJcbmRpdi5wYW5lbCBkaXYuZm9ybSBsYWJlbCwgc3BhbiwgYXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1Qb3BwaW5zLU0pO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4vKiBmb3Jte1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxufSAqL1xyXG5mb3JtIGRpdi5pbnB1dHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuZm9ybSBkaXYuaW5wdXQgZGl2LmxhYmVse1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5mb3JtIGRpdi5pbnB1dCBkaXYgPiBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmZvcm0gZGl2LmlucHV0ID4gZGl2e1xyXG4gICAgLyogbWFyZ2luOiAxMHB4IDBweDsgKi9cclxufVxyXG5kaXYuc3VibWl0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI1cHggMHB4IDEwcHggMHB4O1xyXG59XHJcbmRpdi5zdWJtaXQgaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDk5ZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2Lm5hdmlnYXRpb24gc3Bhbnt9XHJcbmRpdi5uYXZpZ2F0aW9uIHNwYW4gYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjQ5OWZmO1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    // { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
    { path: 'suporte', loadChildren: () => __webpack_require__.e(/*! import() | support-support-module */ "support-support-module").then(__webpack_require__.bind(null, /*! ./support/support.module */ "ZlwT")).then(m => m.SupportModule) },
    { path: 'editarConta', loadChildren: () => __webpack_require__.e(/*! import() | edit-account-edit-account-module */ "edit-account-edit-account-module").then(__webpack_require__.bind(null, /*! ./edit-account/edit-account.module */ "MeL2")).then(m => m.EditAccountModule) },
    { path: 'minhaConta', loadChildren: () => __webpack_require__.e(/*! import() | my-account-my-account-module */ "my-account-my-account-module").then(__webpack_require__.bind(null, /*! ./my-account/my-account.module */ "J8OZ")).then(m => m.MyAccountModule) },
    { path: 'definicoes', loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsModule) },
    { path: 'usuarios', loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then(m => m.UsersModule) },
    { path: 'solicitacoes', loadChildren: () => __webpack_require__.e(/*! import() | requests-requests-module */ "requests-requests-module").then(__webpack_require__.bind(null, /*! ./requests/requests.module */ "q2Y4")).then(m => m.RequestsModule) },
    { path: 'proprietarios', loadChildren: () => __webpack_require__.e(/*! import() | owners-owners-module */ "owners-owners-module").then(__webpack_require__.bind(null, /*! ./owners/owners.module */ "TJv3")).then(m => m.OwnersModule) },
    { path: 'definicoes', loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsModule) },
    { path: 'imoveis', loadChildren: () => __webpack_require__.e(/*! import() | properties-properties-module */ "properties-properties-module").then(__webpack_require__.bind(null, /*! ./properties/properties.module */ "V2V3")).then(m => m.PropertiesModule) },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardModule) },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map