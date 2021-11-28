"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_app_properties_properties_module_ts"],{

/***/ 1793:
/*!*******************************************************!*\
  !*** ./src/app/properties/header/header.component.ts ***!
  \*******************************************************/
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total de Im\u00F3veis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "642.8738K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cards[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-gap: 2rem;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n.card-single[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n    padding: 2rem;\r\n    border-radius: 2px;\r\n    width: 300px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG4uY2FyZC1zaW5nbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZjMDsgKi9cclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4791:
/*!*********************************************************!*\
  !*** ./src/app/properties/properties-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesRoutingModule": () => (/* binding */ PropertiesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties.component */ 6889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _properties_component__WEBPACK_IMPORTED_MODULE_0__.PropertiesComponent }];
class PropertiesRoutingModule {
}
PropertiesRoutingModule.ɵfac = function PropertiesRoutingModule_Factory(t) { return new (t || PropertiesRoutingModule)(); };
PropertiesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PropertiesRoutingModule });
PropertiesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PropertiesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8913:
/*!***************************************************************************!*\
  !*** ./src/app/properties/properties-table/properties-table.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesTableComponent": () => (/* binding */ PropertiesTableComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);



class PropertiesTableComponent {
    constructor() {
        this.star = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faStar;
    }
    ngOnInit() {
    }
}
PropertiesTableComponent.ɵfac = function PropertiesTableComponent_Factory(t) { return new (t || PropertiesTableComponent)(); };
PropertiesTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PropertiesTableComponent, selectors: [["app-properties-table"]], decls: 101, vars: 3, consts: [[1, "recent-grid"], [1, "projects"], [1, "card"], [1, "card-header"], [1, "search-wrapper"], [1, ""], ["width", "17", "src", "assets/Icons/icone-pesquisa.svg", "alt", ""], ["type", "search", "placeholder", "Pesquisar aqui"], [1, "card-body"], [2, "width", "100%"], ["type", "checkbox", "name", "", "id", ""], [1, "user-detail"], [1, "img"], ["src", "assets/Imagens/proprietarios/table-img.jpg", "alt", ""], [1, "text"], [3, "icon"], [1, "clearfix"], [1, "status", "verde"], [1, "status", "vermelho"], [1, "table-responsive"]], template: function PropertiesTableComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Categ\u00F3ria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Data de ades\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Quantidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Me Design. AO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "02 / 09 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "12.000 Kz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "543");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Disponivel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Apartamento T4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Vivenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "16 / 02 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "12.000 Kz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "543");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Indispon\u00EDvel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Mesa de 5 Cdeiras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Ferro Neutro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "02 / 09 / 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "12.000 Kz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "543");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Disponivel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.star);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.star);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.star);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: [".card[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    border-radius: 5px;\r\n}\r\n.card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: var(--main-color);\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    padding: .5rem 1rem;\r\n    border: 1px solid var(--main-color);\r\n}\r\n.search-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0rem 1rem;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n.search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    padding: .5rem;\r\n    \r\n    border: none;\r\n    outline: none;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n    \r\n}\r\ntable[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n    border-top: 1px solid #f0f0f0;\r\n    border-bottom: 1px solid #f0f0f0;\r\n}\r\nthead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    padding: .5rem 1rem;\r\n    font-size: .9rem;\r\n    color: #222;\r\n}\r\ntd[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 10px;\r\n    width:10px;\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n\r\n}\r\n\r\n.status.verde[_ngcontent-%COMP%]{\r\n    background: green;\r\n}\r\n.status.vermelho[_ngcontent-%COMP%]{\r\n    background: red;\r\n}\r\n.status.orange[_ngcontent-%COMP%]{\r\n    background: orangered;\r\n}\r\n.table-responsive[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow-x: auto;\r\n}\r\n.customer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: .5rem 1rem;\r\n}\r\n.info[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n}\r\n.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: .8rem;\r\n    \r\n    color: #222;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    border: 1px solid #3498db;\r\n    background: none;\r\n    padding: 10px 20px;\r\n}\r\ntbody[_ngcontent-%COMP%]   td.user-detail[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    \r\n    padding-right: 20px;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1){\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 50px;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]{\r\n     \r\n    width: 50px;\r\n    float: left;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    animation: back .9s infinite;\r\n}\r\n@keyframes back {\r\n\r\n    0%{\r\n        background-color: #ddd;\r\n    }\r\n    50%{\r\n        background-color: #eee;\r\n    }\r\n    100%{\r\n        background-color: #ddd;\r\n    }\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{\r\n    \r\n    margin-left: 20px;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n    color: #606060;\r\n}\r\nfa-icon[_ngcontent-%COMP%]{\r\n    color: #ffb415;\r\n    margin-right: 10px;\r\n}\r\ntd[_ngcontent-%COMP%]   div.clearfix[_ngcontent-%COMP%]{\r\n    clear: both;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnRpZXMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QjtBQUVBOzs7R0FHRztBQUVIO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUk7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztBQUVKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoicHJvcGVydGllcy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FyZC1oZWFkZXIsXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuLmNhcmQtaGVhZGVyIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG4uc2VhcmNoLXdyYXBwZXJ7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQ1LCAxNDIsIDE0Mik7ICovXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmNGY3ZmE7ICovXHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlciBzcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmN2ZhOyAqL1xyXG59XHJcbi5zZWFyY2gtd3JhcHBlciBpbnB1dHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2Y0ZjdmYTsgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovXHJcbn1cclxudGFibGUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbnRoZWFkIHRye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxufVxyXG5cclxudGhlYWQgdGR7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG50ZHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbnRkIC5zdGF0dXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxufVxyXG5cclxuLyogdHIgdGQ6bGFzdC1jaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59ICovXHJcblxyXG4uc3RhdHVzLnZlcmRle1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5zdGF0dXMudmVybWVsaG97XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuLnN0YXR1cy5vcmFuZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5jdXN0b21lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLmluZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW5mbyBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuLmluZm8gaDR7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcbi5idG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuXHJcbnRib2R5IHRkLnVzZXItZGV0YWlse1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG50Ym9keSB0cjpudGgtY2hpbGQoMSl7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbn1cclxudGQgPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7ICovXHJcbn1cclxudGQgZGl2LmltZ3tcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYzA7ICovIFxyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiBiYWNrIC45cyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJhY2sge1xyXG5cclxuICAgIDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbnRkIGRpdi5pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG59XHJcbnRkIGRpdi50ZXh0e1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAtMTAwcHg7ICovXHJcbn1cclxudGQgZGl2LnRleHQgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogIzYwNjA2MDtcclxufVxyXG5mYS1pY29ue1xyXG4gICAgY29sb3I6ICNmZmI0MTU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxudGQgZGl2LmNsZWFyZml4e1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6889:
/*!****************************************************!*\
  !*** ./src/app/properties/properties.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesComponent": () => (/* binding */ PropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 1793);
/* harmony import */ var _properties_table_properties_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-table/properties-table.component */ 8913);



class PropertiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PropertiesComponent.ɵfac = function PropertiesComponent_Factory(t) { return new (t || PropertiesComponent)(); };
PropertiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PropertiesComponent, selectors: [["app-properties"]], decls: 2, vars: 0, template: function PropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-properties-table");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _properties_table_properties_table_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesTableComponent], styles: [".container[_ngcontent-%COMP%]{\r\n    \r\n}\r\nmain[_ngcontent-%COMP%]{\r\n    margin-top: 85px;\r\n    padding: 2rem 1.5rem;\r\n    background: #ffffff;\r\n    min-height: calc(100vh - 90px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InByb3BlcnRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBcclxufVxyXG5tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogODVweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 1199:
/*!*************************************************!*\
  !*** ./src/app/properties/properties.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesModule": () => (/* binding */ PropertiesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _properties_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-routing.module */ 4791);
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component */ 6889);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 1793);
/* harmony import */ var _properties_table_properties_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties-table/properties-table.component */ 8913);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class PropertiesModule {
}
PropertiesModule.ɵfac = function PropertiesModule_Factory(t) { return new (t || PropertiesModule)(); };
PropertiesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PropertiesModule });
PropertiesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _properties_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropertiesRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PropertiesModule, { declarations: [_properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _properties_table_properties_table_component__WEBPACK_IMPORTED_MODULE_3__.PropertiesTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _properties_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropertiesRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_properties_properties_module_ts.js.map