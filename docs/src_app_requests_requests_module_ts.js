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
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: [".card[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    border-radius: 5px;\r\n}\r\n.card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: var(--main-color);\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    padding: .5rem 1rem;\r\n    border: 1px solid var(--main-color);\r\n}\r\n.search-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    outline: none;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n    \r\n}\r\ntable[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n    border-top: 1px solid #f0f0f0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n    \r\n}\r\nthead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    font-size: medium;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    padding: .5rem 1rem;\r\n    font-size: .9rem;\r\n    color: #222;\r\n}\r\ntd[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 10px;\r\n    width:10px;\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n\r\n}\r\n\r\n.status.verde[_ngcontent-%COMP%]{\r\n    background: green;\r\n}\r\n.status.vermelho[_ngcontent-%COMP%]{\r\n    background: red;\r\n}\r\n.status.orange[_ngcontent-%COMP%]{\r\n    background: rgb(255, 187, 0);\r\n}\r\n.table-responsive[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow-x: auto;\r\n}\r\n.customer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: .5rem 1rem;\r\n}\r\n.info[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n}\r\n.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: .8rem;\r\n    \r\n    color: #222;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    border: 1px solid #3498db;\r\n    background: none;\r\n    padding: 10px 20px;\r\n}\r\ntbody[_ngcontent-%COMP%]   td.user-detail[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    \r\n    padding-right: 20px;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1){\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 50px;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]{\r\n     \r\n    width: 50px;\r\n    height: 50px; \r\n    float: left;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    animation: back .9s infinite;\r\n}\r\n@keyframes back {\r\n\r\n    0%{\r\n        background-color: #ddd;\r\n    }\r\n    50%{\r\n        background-color: #eee;\r\n    }\r\n    100%{\r\n        background-color: #ddd;\r\n    }\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 20px;\r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    color: #606060;\r\n}\r\nfa-icon[_ngcontent-%COMP%]{\r\n    color: #ffb415;\r\n    margin-right: 10px;\r\n}\r\ntd[_ngcontent-%COMP%]   div.clearfix[_ngcontent-%COMP%]{\r\n    clear: both;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QjtBQUVBOzs7R0FHRztBQUVIO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBS0E7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjs7QUFFSjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoicmVxdWVzdHMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyLFxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5jYXJkLWhlYWRlciBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuLnNlYXJjaC13cmFwcGVye1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE0NSwgMTQyLCAxNDIpOyAqL1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLXdyYXBwZXIgc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2Y0ZjdmYTsgKi9cclxufVxyXG4uc2VhcmNoLXdyYXBwZXIgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqL1xyXG59XHJcblxyXG50YWJsZSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxufVxyXG5cclxudGhlYWQgdHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgLyogcGFkZGluZzogMTAwcHggMHB4OyAqL1xyXG59XHJcblxyXG50aGVhZCB0ZHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxudGR7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG50ZCAuc3RhdHVze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbn1cclxuXHJcbi8qIHRyIHRkOmxhc3QtY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSAqL1xyXG5cclxuLnN0YXR1cy52ZXJkZXtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG4uc3RhdHVzLnZlcm1lbGhve1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcbi5zdGF0dXMub3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg3LCAwKTtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmN1c3RvbWVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbmZvIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4uaW5mbyBoNHtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuLmJ0bntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG50Ym9keSB0ZC51c2VyLWRldGFpbHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxudGJvZHkgdHI6bnRoLWNoaWxkKDEpe1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG59XHJcbnRkID4gZGl2e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlOyAqL1xyXG59XHJcbnRkIGRpdi5pbWd7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwOyAqLyBcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4OyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbmltYXRpb246IGJhY2sgLjlzIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYmFjayB7XHJcblxyXG4gICAgMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxudGQgZGl2LmltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbn1cclxudGQgZGl2LnRleHR7XHJcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG50ZCBkaXYudGV4dCBzcGFue1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiAjNjA2MDYwO1xyXG59XHJcbmZhLWljb257XHJcbiAgICBjb2xvcjogI2ZmYjQxNTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG50ZCBkaXYuY2xlYXJmaXh7XHJcbiAgICBjbGVhcjogYm90aDtcclxufSJdfQ== */"] });


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
RequestsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 2, vars: 0, template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-requests-table");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _requests_table_requests_table_component__WEBPACK_IMPORTED_MODULE_1__.RequestsTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests-routing.module */ 4488);
/* harmony import */ var _requests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests.component */ 7474);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3704);
/* harmony import */ var _requests_table_requests_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests-table/requests-table.component */ 5619);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class RequestsModule {
}
RequestsModule.ɵfac = function RequestsModule_Factory(t) { return new (t || RequestsModule)(); };
RequestsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RequestsModule });
RequestsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestsRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RequestsModule, { declarations: [_requests_component__WEBPACK_IMPORTED_MODULE_1__.RequestsComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _requests_table_requests_table_component__WEBPACK_IMPORTED_MODULE_3__.RequestsTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestsRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_requests_requests_module_ts.js.map