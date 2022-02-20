"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_requests_requests_module_ts"],{

/***/ 3704:
/*!*****************************************************!*\
  !*** ./src/app/requests/header/header.component.ts ***!
  \*****************************************************/
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total de Solicita\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "642.8738 K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cards[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-gap: 2rem;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n.card-single[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n    padding: 2rem;\r\n    border-radius: 2px;\r\n    width: 300px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG4uY2FyZC1zaW5nbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZjMDsgKi9cclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4488:
/*!*****************************************************!*\
  !*** ./src/app/requests/requests-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsRoutingModule": () => (/* binding */ RequestsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _requests_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.component */ 7474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _requests_component__WEBPACK_IMPORTED_MODULE_0__.RequestsComponent }];
class RequestsRoutingModule {
}
RequestsRoutingModule.ɵfac = function RequestsRoutingModule_Factory(t) { return new (t || RequestsRoutingModule)(); };
RequestsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RequestsRoutingModule });
RequestsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RequestsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5619:
/*!*********************************************************************!*\
  !*** ./src/app/requests/requests-table/requests-table.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsTableComponent": () => (/* binding */ RequestsTableComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);



class RequestsTableComponent {
    constructor() {
        this.star = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faStar;
    }
    ngOnInit() {
    }
}
RequestsTableComponent.ɵfac = function RequestsTableComponent_Factory(t) { return new (t || RequestsTableComponent)(); };
RequestsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestsTableComponent, selectors: [["app-requests-table"]], decls: 93, vars: 3, consts: [[1, "recent-grid"], [1, "projects"], [1, "card"], [1, "card-header"], [1, "search-wrapper"], [1, ""], ["width", "17", "src", "assets/Icons/icone-pesquisa.svg", "alt", ""], ["type", "search", "placeholder", "Pesquisar aqui"], [1, "card-body"], [2, "width", "100%"], ["type", "checkbox", "name", "", "id", ""], [1, "user-detail"], [1, "img"], ["src", "assets/Imagens/proprietarios/table-img.jpg", "alt", ""], [1, "text"], [3, "icon"], [1, "clearfix"], [1, "status", "verde"], [1, "status", "vermelho"], [1, "status", "orange"], [1, "table-responsive"]], template: function RequestsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Im\u00F3vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Propriet\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Solicitante");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Data de solicita\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Me Design. AO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Otiniel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Felipe Paca");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "02 / 09 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Aceito ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Apartamento T4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Orgamafi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Felipe Paca");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "02 / 09 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Negado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Apartamento T4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Emanuel Lu\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Felipe Paca");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "02 / 09 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " Processado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.star);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.star);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.star);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: [".recent-grid[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 4px 14px #ddd;\r\n    border-radius: 15px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    border-radius: 5px;\r\n}\r\n.card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: var(--main-color);\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    padding: .5rem 1rem;\r\n    border: 1px solid var(--main-color);\r\n}\r\n.search-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    outline: none;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n    \r\n}\r\ntable[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n    border-top: 1px solid #f0f0f0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n    \r\n}\r\nthead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    font-size: medium;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    padding: .5rem 1rem;\r\n    font-size: .9rem;\r\n    color: #222;\r\n}\r\ntd[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 10px;\r\n    width:10px;\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n\r\n}\r\n\r\n.status.verde[_ngcontent-%COMP%]{\r\n    background: green;\r\n}\r\n.status.vermelho[_ngcontent-%COMP%]{\r\n    background: red;\r\n}\r\n.status.orange[_ngcontent-%COMP%]{\r\n    background: rgb(255, 187, 0);\r\n}\r\n.table-responsive[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow-x: auto;\r\n}\r\n.customer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: .5rem 1rem;\r\n}\r\n.info[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n}\r\n.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: .8rem;\r\n    \r\n    color: #222;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    border: 1px solid #3498db;\r\n    background: none;\r\n    padding: 10px 20px;\r\n}\r\ntbody[_ngcontent-%COMP%]   td.user-detail[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    \r\n    padding-right: 20px;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1){\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 50px;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]{\r\n     \r\n    width: 50px;\r\n    height: 50px; \r\n    float: left;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    animation: back .9s infinite;\r\n}\r\n@keyframes back {\r\n\r\n    0%{\r\n        background-color: #ddd;\r\n    }\r\n    50%{\r\n        background-color: #eee;\r\n    }\r\n    100%{\r\n        background-color: #ddd;\r\n    }\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 20px;\r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    color: #606060;\r\n}\r\nfa-icon[_ngcontent-%COMP%]{\r\n    color: #ffb415;\r\n    margin-right: 10px;\r\n}\r\ntd[_ngcontent-%COMP%]   div.clearfix[_ngcontent-%COMP%]{\r\n    clear: both;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCO0FBRUE7OztHQUdHO0FBRUg7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFLQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUk7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztBQUVKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJyZXF1ZXN0cy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VudC1ncmlke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4ICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FyZC1oZWFkZXIsXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuLmNhcmQtaGVhZGVyIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG4uc2VhcmNoLXdyYXBwZXJ7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQ1LCAxNDIsIDE0Mik7ICovXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlciBzcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyAqL1xyXG59XHJcbi5zZWFyY2gtd3JhcHBlciBpbnB1dHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2Y0ZjdmYTsgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbn1cclxuXHJcbnRhYmxlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG50aGVhZCB0cntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICAvKiBwYWRkaW5nOiAxMDBweCAwcHg7ICovXHJcbn1cclxuXHJcbnRoZWFkIHRke1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG50ZHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbnRkIC5zdGF0dXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxufVxyXG5cclxuLyogdHIgdGQ6bGFzdC1jaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59ICovXHJcblxyXG4uc3RhdHVzLnZlcmRle1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5zdGF0dXMudmVybWVsaG97XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuLnN0YXR1cy5vcmFuZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODcsIDApO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uY3VzdG9tZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbn1cclxuXHJcbi5pbmZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmluZm8gaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5pbmZvIGg0e1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG4uYnRue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0OThkYjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbnRib2R5IHRkLnVzZXItZGV0YWlse1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG50Ym9keSB0cjpudGgtY2hpbGQoMSl7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbn1cclxudGQgPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7ICovXHJcbn1cclxudGQgZGl2LmltZ3tcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovIFxyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogYmFjayAuOXMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBiYWNrIHtcclxuXHJcbiAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG50ZCBkaXYuaW1nIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxufVxyXG50ZCBkaXYudGV4dHtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbnRkIGRpdi50ZXh0IHNwYW57XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6ICM2MDYwNjA7XHJcbn1cclxuZmEtaWNvbntcclxuICAgIGNvbG9yOiAjZmZiNDE1O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbnRkIGRpdi5jbGVhcmZpeHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59Il19 */"] });


/***/ }),

/***/ 7474:
/*!************************************************!*\
  !*** ./src/app/requests/requests.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsComponent": () => (/* binding */ RequestsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3704);
/* harmony import */ var _requests_table_requests_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests-table/requests-table.component */ 5619);



class RequestsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) { return new (t || RequestsComponent)(); };
RequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 3, vars: 0, consts: [[1, "main-div"]], template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-requests-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _requests_table_requests_table_component__WEBPACK_IMPORTED_MODULE_1__.RequestsTableComponent], styles: [".main-div[_ngcontent-%COMP%]{\r\n    margin: -10px 0px 120px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdntcclxuICAgIG1hcmdpbjogLTEwcHggMHB4IDEyMHB4IDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6185:
/*!*********************************************!*\
  !*** ./src/app/requests/requests.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsModule": () => (/* binding */ RequestsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests-routing.module */ 4488);
/* harmony import */ var _requests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests.component */ 7474);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3704);
/* harmony import */ var _requests_table_requests_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests-table/requests-table.component */ 5619);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);








class RequestsModule {
    constructor(title) {
        this.title = title;
        this.title.setTitle("Solicitações - Referência");
    }
}
RequestsModule.ɵfac = function RequestsModule_Factory(t) { return new (t || RequestsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
RequestsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RequestsModule });
RequestsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestsRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RequestsModule, { declarations: [_requests_component__WEBPACK_IMPORTED_MODULE_1__.RequestsComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _requests_table_requests_table_component__WEBPACK_IMPORTED_MODULE_3__.RequestsTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestsRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_requests_requests_module_ts.js.map