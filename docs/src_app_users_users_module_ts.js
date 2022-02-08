"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_users_users_module_ts"],{

/***/ 5726:
/*!**************************************************!*\
  !*** ./src/app/users/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [[1, "cards"], [1, "card-single"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "134.345 K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cards[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-gap: 2rem;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n.card-single[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n    padding: 2rem;\r\n    border-radius: 2px;\r\n    width: 300px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG4uY2FyZC1zaW5nbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZjMDsgKi9cclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7425:
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 1846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent }];
class UsersRoutingModule {
}
UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); };
UsersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3946:
/*!************************************************************!*\
  !*** ./src/app/users/users-table/users-table.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersTableComponent": () => (/* binding */ UsersTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UsersTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsersTableComponent.ɵfac = function UsersTableComponent_Factory(t) { return new (t || UsersTableComponent)(); };
UsersTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersTableComponent, selectors: [["app-users-table"]], decls: 88, vars: 0, consts: [[1, "recent-grid"], [1, "projects"], [1, "card"], [1, "card-header"], [1, "search-wrapper"], [1, ""], ["width", "17", "src", "assets/Icons/icone-pesquisa.svg", "alt", ""], ["type", "search", "placeholder", "Pesquisar propriet\u00E1rios"], [1, "card-body"], [2, "width", "100%"], ["type", "checkbox", "name", "", "id", ""], [1, "user-detail"], [1, "img"], ["src", "assets/Imagens/proprietarios/table-img.jpg", "alt", ""], [1, "text"], [1, "clearfix"], [1, "status", "verde"]], template: function UsersTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Data de ades\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Localiza\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Otiniel de Sousa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "patisaquias2000@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+244 972356382");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "02/09/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Luanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Otiniel de Sousa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "patisaquias2000@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "+244 972356382");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "02/09/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Luanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Otiniel de Sousa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "patisaquias2000@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "+244 972356382");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "02/09/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Luanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    border-radius: 5px;\r\n}\r\n.card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: var(--main-color);\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    padding: .5rem 1rem;\r\n    border: 1px solid var(--main-color);\r\n}\r\n.search-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    outline: none;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n    \r\n}\r\ntable[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n    border-top: 1px solid #f0f0f0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n}\r\nthead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    padding: .7rem 1rem;\r\n    font-size: .9rem;\r\n    color: #222;\r\n}\r\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 1rem 1rem;\r\n    font-size: .9rem;\r\n    color: #222;\r\n}\r\ntbody[_ngcontent-%COMP%]   td.user-detail[_ngcontent-%COMP%]{\r\n    width: 330px;\r\n    \r\n    padding-right: 60px;\r\n}\r\ntd[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 50px;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]{\r\n    \r\n    width: 50px;\r\n    height: 50px;\r\n    float: left;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    animation: back .9s infinite;\r\n}\r\n@keyframes back {\r\n\r\n    0%{\r\n        background-color: #ddd;\r\n    }\r\n    50%{\r\n        background-color: #eee;\r\n    }\r\n    100%{\r\n        background-color: #ddd;\r\n    }\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n    color: #aaa;\r\n}\r\ntd[_ngcontent-%COMP%]   div.clearfix[_ngcontent-%COMP%]{\r\n    clear: both;\r\n}\r\n.status.verde[_ngcontent-%COMP%]{\r\n    background: green;\r\n}\r\n.status.vermelho[_ngcontent-%COMP%]{\r\n    background: red;\r\n}\r\n.status.orange[_ngcontent-%COMP%]{\r\n    background: orangered;\r\n}\r\ntd[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 10px;\r\n    width:10px;\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUk7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztBQUVKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoidXNlcnMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyLFxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5jYXJkLWhlYWRlciBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuLnNlYXJjaC13cmFwcGVye1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE0NSwgMTQyLCAxNDIpOyAqL1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLXdyYXBwZXIgc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2Y0ZjdmYTsgKi9cclxufVxyXG4uc2VhcmNoLXdyYXBwZXIgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqL1xyXG59XHJcbnRhYmxlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG50aGVhZCB0cntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuXHJcbnRoZWFkIHRke1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IC43cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbnRib2R5IHRke1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcbnRib2R5IHRkLnVzZXItZGV0YWlse1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxufVxyXG50ZCA+IGRpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTsgKi9cclxufVxyXG50ZCBkaXYuaW1ne1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZjMDsgKi9cclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogYmFjayAuOXMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBiYWNrIHtcclxuXHJcbiAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG50ZCBkaXYuaW1nIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxufVxyXG50ZCBkaXYudGV4dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG50ZCBkaXYudGV4dCBzcGFue1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbn1cclxudGQgZGl2LmNsZWFyZml4e1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLnN0YXR1cy52ZXJkZXtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG4uc3RhdHVzLnZlcm1lbGhve1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcbi5zdGF0dXMub3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xyXG59XHJcbnRkIC5zdGF0dXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ 1846:
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 5726);
/* harmony import */ var _users_table_users_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-table/users-table.component */ 3946);



class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 2, vars: 0, template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-users-table");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _users_table_users_table_component__WEBPACK_IMPORTED_MODULE_1__.UsersTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1951:
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 7425);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component */ 1846);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 5726);
/* harmony import */ var _users_table_users_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-table/users-table.component */ 3946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);







class UsersModule {
    constructor(title) {
        this.title = title;
        this.title.setTitle("Usuários - Referência");
    }
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _users_table_users_table_component__WEBPACK_IMPORTED_MODULE_3__.UsersTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_users_users_module_ts.js.map