"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_blocks_formatters_formatters_component_ts-src_app_blocks_services_proxy-api_s-27b805"],{

/***/ 46216:
/*!****************************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/actions/case/case.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseComponent: () => (/* binding */ CaseComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






function CaseComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function CaseComponent_div_0_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.actionCasing, $event) || (ctx_r1.actionCasing = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r1.caseField);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.actionCasing);
  }
}
class CaseComponent {
  get actionCasing() {
    return `${this.action.casing}`;
  }
  set actionCasing(val) {
    this.action.casing = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    const caseOptions = [{
      name: this.translate.instant('admin-metadata-formatters.lower'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Casings.Lower}`
    }, {
      name: this.translate.instant('admin-metadata-formatters.upper'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Casings.Upper}`
    }];
    const caseDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    caseDataSource.updateOptions(caseOptions);
    this.caseField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: '',
      placeholder: '',
      required: true,
      datasource: caseDataSource
    });
  }
  static {
    this.ɵfac = function CaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CaseComponent,
      selectors: [["app-case"]],
      inputs: {
        action: "action"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-4"], [3, "valueChange", "field", "value"]],
      template: function CaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CaseComponent_div_0_Template, 3, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.action);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 34402:
/*!********************************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/actions/insert/insert.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsertComponent: () => (/* binding */ InsertComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);







function InsertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function InsertComponent_div_0_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.action.text, $event) || (ctx_r1.action.text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8)(8, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function InsertComponent_div_0_Template_app_field_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.actionPosition, $event) || (ctx_r1.actionPosition = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function InsertComponent_div_0_Template_app_field_valueChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.actionUntilLengthIs, $event) || (ctx_r1.actionUntilLengthIs = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.textField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.action.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "admin-metadata-formatters.insert-position-label")("localize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.positionField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.actionPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "admin-metadata-formatters.insert-until-length-is-label")("localize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.untilLengthIsField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.actionUntilLengthIs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 11, "admin-metadata-formatters.or-more"));
  }
}
class InsertComponent {
  get actionPosition() {
    return `${this.action.position}`;
  }
  set actionPosition(val) {
    this.action.position = Number(val);
  }
  get actionUntilLengthIs() {
    return `${this.action.untilLengthIs}`;
  }
  set actionUntilLengthIs(val) {
    this.action.untilLengthIs = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.textField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'insert',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.text-placeholder'),
      required: true
    });
    this.positionField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
      label: 'insert-position',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.position-placeholder'),
      required: true
    });
    this.untilLengthIsField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
      label: 'insert-until',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.until-length-placeholder'),
      required: true
    });
  }
  static {
    this.ɵfac = function InsertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: InsertComponent,
      selectors: [["app-insert"]],
      inputs: {
        action: "action"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "insert-action", 4, "ngIf"], [1, "insert-action"], [1, "row"], [1, "col-md-12"], [3, "valueChange", "field", "value"], [1, "d-flex"], [1, "position-label"], [3, "text", "localize"], [1, "position-field"], [1, "length-label"], [1, "more-span"]],
      template: function InsertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, InsertComponent_div_0_Template, 18, 13, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: [".insert-action[_ngcontent-%COMP%]   .more-span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 6px;\n  color: #464646;\n  padding: 0 10px;\n}\n.insert-action[_ngcontent-%COMP%]   .position-label[_ngcontent-%COMP%], \n.insert-action[_ngcontent-%COMP%]   .length-label[_ngcontent-%COMP%] {\n  padding-top: 6px;\n}\n.insert-action[_ngcontent-%COMP%]   .position-label[_ngcontent-%COMP%] {\n  width: 89px;\n}\n.insert-action[_ngcontent-%COMP%]   .length-label[_ngcontent-%COMP%] {\n  width: 85px;\n}\n.insert-action[_ngcontent-%COMP%]   .position-field[_ngcontent-%COMP%] {\n  width: calc(100% - 50px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2Zvcm1hdHRlcnMvZm9ybWF0dGVyL2FjdGlvbnMvaW5zZXJ0L2luc2VydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSjtBQUdFOztFQUVFLGdCQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7QUFGSjtBQUtFO0VBQ0UsV0FBQTtBQUhKO0FBTUU7RUFDRSx3QkFBQTtBQUpKIiwic291cmNlc0NvbnRlbnQiOlsiLmluc2VydC1hY3Rpb24ge1xyXG4gIC5tb3JlLXNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAucG9zaXRpb24tbGFiZWwsXHJcbiAgLmxlbmd0aC1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLnBvc2l0aW9uLWxhYmVsIHtcclxuICAgIHdpZHRoOiA4OXB4O1xyXG4gIH1cclxuXHJcbiAgLmxlbmd0aC1sYWJlbCB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICB9XHJcblxyXG4gIC5wb3NpdGlvbi1maWVsZCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 90382:
/*!******************************************************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/actions/prefix-and-suffix/prefix-and-suffix.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrefixAndSuffixComponent: () => (/* binding */ PrefixAndSuffixComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






function PrefixAndSuffixComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function PrefixAndSuffixComponent_div_0_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.action.text, $event) || (ctx_r1.action.text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r1.textField);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.action.text);
  }
}
class PrefixAndSuffixComponent {
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.textField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'formatter-prefix-and-suffix',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.text-placeholder'),
      required: true
    });
  }
  static {
    this.ɵfac = function PrefixAndSuffixComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PrefixAndSuffixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PrefixAndSuffixComponent,
      selectors: [["app-prefix-and-suffix"]],
      inputs: {
        action: "action"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "valueChange", "field", "value"]],
      template: function PrefixAndSuffixComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PrefixAndSuffixComponent_div_0_Template, 2, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.action);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7716:
/*!********************************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/actions/remove/remove.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveComponent: () => (/* binding */ RemoveComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);







function RemoveComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function RemoveComponent_div_0_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.actionCount, $event) || (ctx_r1.actionCount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5)(5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10)(12, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function RemoveComponent_div_0_Template_app_field_valueChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.actionPosition, $event) || (ctx_r1.actionPosition = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7)(14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div")(17, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function RemoveComponent_div_0_Template_app_field_valueChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.actionUntilLengthIs, $event) || (ctx_r1.actionUntilLengthIs = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div")(19, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.countField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.actionCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 12, "admin-metadata-formatters.characters"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "admin-metadata-formatters.insert-position-label")("localize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.positionField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.actionPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "admin-metadata-formatters.insert-until-length-is-label")("localize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.untilLengthIsField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.actionUntilLengthIs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 14, "admin-metadata-formatters.or-less"));
  }
}
class RemoveComponent {
  get actionCount() {
    return `${this.action.count}`;
  }
  set actionCount(val) {
    this.action.count = Number(val);
  }
  get actionPosition() {
    return `${this.action.position}`;
  }
  set actionPosition(val) {
    this.action.position = Number(val);
  }
  get actionUntilLengthIs() {
    return `${this.action.untilLengthIs}`;
  }
  set actionUntilLengthIs(val) {
    this.action.untilLengthIs = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.countField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
      label: 'removal-count',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.count-placeholder'),
      required: true
    });
    this.positionField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
      label: 'removal-position',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.position-placeholder'),
      required: true
    });
    this.untilLengthIsField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
      label: 'removal-until-length',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.until-length-placeholder'),
      required: true
    });
  }
  static {
    this.ɵfac = function RemoveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RemoveComponent,
      selectors: [["app-remove"]],
      inputs: {
        action: "action"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "remove-action", 4, "ngIf"], [1, "remove-action"], [1, "row"], [1, "col-md-4"], [3, "valueChange", "field", "value"], [1, "col-md-4", "p-0"], [1, "characters-span"], [1, "d-flex"], [1, "position-label"], [3, "text", "localize"], [1, "position-field"], [1, "length-label"], [1, "less-span"]],
      template: function RemoveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RemoveComponent_div_0_Template, 22, 16, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: [".remove-action[_ngcontent-%COMP%]   .characters-span[_ngcontent-%COMP%], \n.remove-action[_ngcontent-%COMP%]   .less-span[_ngcontent-%COMP%] {\n  color: #464646;\n  font-size: 12px;\n  margin-top: 6px;\n  padding: 0 10px;\n}\n.remove-action[_ngcontent-%COMP%]   .position-label[_ngcontent-%COMP%], \n.remove-action[_ngcontent-%COMP%]   .length-label[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  width: 85px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2Zvcm1hdHRlcnMvZm9ybWF0dGVyL2FjdGlvbnMvcmVtb3ZlL3JlbW92ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5yZW1vdmUtYWN0aW9uIHtcclxuICAuY2hhcmFjdGVycy1zcGFuLFxyXG4gIC5sZXNzLXNwYW4ge1xyXG4gICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAucG9zaXRpb24tbGFiZWwsXHJcbiAgLmxlbmd0aC1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 85881:
/*!**********************************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/actions/replace/replace.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaceComponent: () => (/* binding */ ReplaceComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);







function ReplaceComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function ReplaceComponent_div_0_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.action.target, $event) || (ctx_r1.action.target = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function ReplaceComponent_div_0_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.action.replaceWith, $event) || (ctx_r1.action.replaceWith = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "app-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function ReplaceComponent_div_0_Template_app_checkbox_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.action.ignoreCase, $event) || (ctx_r1.action.ignoreCase = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.targetField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.action.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.replaceWithField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.action.replaceWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", "replace-ignoreCase-" + ctx_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.action.ignoreCase);
  }
}
class ReplaceComponent {
  constructor(translate) {
    this.translate = translate;
    this.id = '';
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.targetField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'target',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.target-placeholder'),
      required: true
    });
    this.replaceWithField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'replace-with',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.replace-with-placeholder'),
      required: true
    });
  }
  static {
    this.ɵfac = function ReplaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReplaceComponent,
      selectors: [["app-replace"]],
      inputs: {
        action: "action",
        id: "id"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "replace-action", 4, "ngIf"], [1, "replace-action"], [3, "valueChange", "field", "value"], [1, "replace-field"], ["label", "admin-metadata-formatters.ignore-case", 3, "valueChange", "value", "name"]],
      template: function ReplaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ReplaceComponent_div_0_Template, 7, 6, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.action);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxComponent],
      styles: [".replace-action[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 40px;\n  padding-top: 15px;\n  margin-left: 8px;\n}\n.replace-action[_ngcontent-%COMP%]   .replace-field[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2Zvcm1hdHRlcnMvZm9ybWF0dGVyL2FjdGlvbnMvcmVwbGFjZS9yZXBsYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBsYWNlLWFjdGlvbiB7XHJcbiAgLmxhYmVsIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlcGxhY2UtZmllbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 81973:
/*!**********************************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/criterias/length/length.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LengthComponent: () => (/* binding */ LengthComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






function LengthComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function LengthComponent_div_0_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.criteriaOperator, $event) || (ctx_r1.criteriaOperator = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function LengthComponent_div_0_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.criteriaOperand, $event) || (ctx_r1.criteriaOperand = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r1.operatorField);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.criteriaOperator);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r1.operandField);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.criteriaOperand);
  }
}
class LengthComponent {
  get criteriaOperator() {
    return `${this.criteria.operator}`;
  }
  set criteriaOperator(val) {
    this.criteria.operator = Number(val);
  }
  get criteriaOperand() {
    return `${this.criteria.operand}`;
  }
  set criteriaOperand(val) {
    this.criteria.operand = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.operandField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
      label: 'length-criteria',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.operand-placeholder'),
      required: true
    });
    const operatorOptions = [{
      name: this.translate.instant('admin-metadata-formatters.equals'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Operators.Equals}`
    }, {
      name: this.translate.instant('admin-metadata-formatters.not-equals'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Operators.NotEquals}`
    }, {
      name: this.translate.instant('admin-metadata-formatters.greater-than'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Operators.GreaterThan}`
    }, {
      name: this.translate.instant('admin-metadata-formatters.less-than'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Operators.LessThan}`
    }, {
      name: this.translate.instant('admin-metadata-formatters.greater-than-or-equals'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Operators.GreaterThanOrEquals}`
    }, {
      name: this.translate.instant('admin-metadata-formatters.less-than-or-equals'),
      value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Operators.LessThanOrEquals}`
    }];
    const operatorDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    operatorDataSource.updateOptions(operatorOptions);
    this.operatorField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: '',
      placeholder: '',
      required: true,
      datasource: operatorDataSource
    });
  }
  static {
    this.ɵfac = function LengthComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LengthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LengthComponent,
      selectors: [["app-length"]],
      inputs: {
        criteria: "criteria"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-4"], [3, "valueChange", "field", "value"]],
      template: function LengthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LengthComponent_div_0_Template, 5, 4, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.criteria);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 40067:
/*!******************************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/criterias/text/text.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextCriteriaComponent: () => (/* binding */ TextCriteriaComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);







function TextCriteriaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function TextCriteriaComponent_div_0_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.criteria.text, $event) || (ctx_r1.criteria.text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4)(4, "app-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function TextCriteriaComponent_div_0_Template_app_checkbox_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.criteria.ignoreCase, $event) || (ctx_r1.criteria.ignoreCase = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.textField);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.criteria.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", "text-ignoreCase-" + ctx_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.criteria.ignoreCase);
  }
}
class TextCriteriaComponent {
  constructor(translate) {
    this.translate = translate;
    this.id = '';
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.textField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'formatter-text',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.text-placeholder'),
      required: true
    });
  }
  static {
    this.ɵfac = function TextCriteriaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TextCriteriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TextCriteriaComponent,
      selectors: [["app-text-criteria"]],
      inputs: {
        criteria: "criteria",
        id: "id"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-9"], [3, "valueChange", "field", "value"], [1, "col-md-3"], ["label", "admin-metadata-formatters.ignore-case", 3, "valueChange", "value", "name"]],
      template: function TextCriteriaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TextCriteriaComponent_div_0_Template, 5, 4, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.criteria);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 42851:
/*!********************************************************************!*\
  !*** ./src/app/blocks/formatters/formatter/formatter.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatterComponent: () => (/* binding */ FormatterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _actions_case_case_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/case/case.component */ 46216);
/* harmony import */ var _actions_prefix_and_suffix_prefix_and_suffix_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/prefix-and-suffix/prefix-and-suffix.component */ 90382);
/* harmony import */ var _actions_remove_remove_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/remove/remove.component */ 7716);
/* harmony import */ var _criterias_text_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./criterias/text/text.component */ 40067);
/* harmony import */ var _criterias_length_length_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./criterias/length/length.component */ 81973);
/* harmony import */ var _actions_replace_replace_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/replace/replace.component */ 85881);
/* harmony import */ var _actions_insert_insert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/insert/insert.component */ 34402);
















function FormatterComponent_app_text_criteria_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-text-criteria", 20);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("id", ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("criteria", ctx_r0.textCriteria);
  }
}
function FormatterComponent_app_length_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-length", 21);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("criteria", ctx_r0.lengthCriteria);
  }
}
function FormatterComponent_app_label_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-label", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("text", "admin-metadata-formatters.replace-with-label")("localize", true);
  }
}
function FormatterComponent_app_case_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-case", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("action", ctx_r0.caseAction);
  }
}
function FormatterComponent_app_prefix_and_suffix_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-prefix-and-suffix", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("action", ctx_r0.prefixSuffixAction);
  }
}
function FormatterComponent_app_insert_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-insert", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("action", ctx_r0.insertAction);
  }
}
function FormatterComponent_app_remove_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-remove", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("action", ctx_r0.removeAction);
  }
}
function FormatterComponent_app_replace_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-replace", 23);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("id", ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("action", ctx_r0.replaceAction);
  }
}
class FormatterComponent {
  get textCriteria() {
    return this.formatter.criteria;
  }
  set textCriteria(c) {
    this.formatter.criteria = c;
  }
  get lengthCriteria() {
    return this.formatter.criteria;
  }
  set lengthCriteria(c) {
    this.formatter.criteria = c;
  }
  get caseAction() {
    return this.formatter.action;
  }
  set caseAction(val) {
    this.formatter.action = val;
  }
  get prefixSuffixAction() {
    return this.formatter.action.actionType === 'Upland.Hydra.Core.Formatters.Prefix' ? this.formatter.action : this.formatter.action;
  }
  set prefixSuffixAction(val) {
    this.formatter.action = val;
  }
  get insertAction() {
    return this.formatter.action;
  }
  set insertAction(val) {
    this.formatter.action = val;
  }
  get removeAction() {
    return this.formatter.action;
  }
  set removeAction(val) {
    this.formatter.action = val;
  }
  get replaceAction() {
    return this.formatter.action;
  }
  set replaceAction(val) {
    this.formatter.action = val;
  }
  constructor(translate) {
    this.translate = translate;
    this.onRemoveFormatter = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.nameField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'formatter-name',
      hideLabel: true,
      placeholder: this.translate.instant('admin-metadata-formatters.formatter-name-placeholder'),
      required: true
    });
    const criteriaOptions = [{
      name: this.translate.instant('admin-metadata-formatters.starts-with'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criterias.StartsWith
    }, {
      name: this.translate.instant('admin-metadata-formatters.ends-with'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criterias.EndsWith
    }, {
      name: this.translate.instant('admin-metadata-formatters.contains'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criterias.Contains
    }, {
      name: this.translate.instant('admin-metadata-formatters.matches-regex'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criterias.Regex
    }, {
      name: this.translate.instant('admin-metadata-formatters.length'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criterias.Length
    }];
    const actionOptions = [{
      name: this.translate.instant('admin-metadata-formatters.change-case'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Case
    }, {
      name: this.translate.instant('admin-metadata-formatters.prefix-with'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Prefix
    }, {
      name: this.translate.instant('admin-metadata-formatters.suffix-with'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Suffix
    }, {
      name: this.translate.instant('admin-metadata-formatters.insert'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Insert
    }, {
      name: this.translate.instant('admin-metadata-formatters.remove'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Remove
    }, {
      name: this.translate.instant('admin-metadata-formatters.replace'),
      value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Replace
    }];
    const criteriaDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    const actionDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    criteriaDataSource.updateOptions(criteriaOptions);
    actionDataSource.updateOptions(actionOptions);
    this.criteriaField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: 'text-formatting-criteria',
      hideLabel: true,
      placeholder: '',
      required: true,
      datasource: criteriaDataSource
    });
    this.actionField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: 'text-formatting-action',
      hideLabel: true,
      placeholder: '',
      required: true,
      datasource: actionDataSource
    });
  }
  onCriteriaChanged(criteriaType) {
    if (criteriaType === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criterias.Length) {
      this.formatter.criteria = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Length({
        criteriaType: criteriaType,
        operand: 0,
        operator: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Operators.Equals
      });
    } else {
      this.formatter.criteria = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criteria.create({
        criteriaType: criteriaType,
        text: '',
        ignoreCase: false
      });
    }
  }
  onActionChanged(actionType) {
    if (actionType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Case) {
      this.formatter.action = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Case({
        actionType: actionType,
        casing: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Casings.Lower
      });
    } else if (actionType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Prefix || actionType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Suffix) {
      this.formatter.action = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Action.create({
        actionType: actionType,
        text: ''
      });
    } else if (actionType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Replace) {
      this.formatter.action = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Replace({
        actionType: actionType,
        target: '',
        replaceWith: '',
        ignoreCase: false
      });
    } else if (actionType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Remove) {
      this.formatter.action = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Remove({
        actionType: actionType,
        count: 0,
        position: 0,
        untilLengthIs: 0
      });
    } else if (actionType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Insert) {
      this.formatter.action = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Insert({
        actionType: actionType,
        text: '',
        position: 0,
        untilLengthIs: 0
      });
    }
  }
  deleteFormatter() {
    this.onRemoveFormatter.emit(this.index);
  }
  static {
    this.ɵfac = function FormatterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormatterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: FormatterComponent,
      selectors: [["app-formatter"]],
      inputs: {
        formatter: "formatter",
        index: "index"
      },
      outputs: {
        onRemoveFormatter: "onRemoveFormatter"
      },
      decls: 32,
      vars: 26,
      consts: [[1, "formatter", 3, "id"], [1, "row"], [1, "col-md-1", "name-label"], [3, "text", "localize"], [1, "col-md-7"], [3, "valueChange", "field", "value"], [1, "col-md-1", "criteria-label"], [1, "col-md-2"], [3, "valueChange", "fieldChanged", "field", "value"], [1, "col-md-9"], [3, "criteria", "id", 4, "ngIf"], [3, "criteria", 4, "ngIf"], [1, "col-md-1", "action-label"], [1, "replace-with-label"], [3, "text", "localize", 4, "ngIf"], [3, "action", 4, "ngIf"], [3, "action", "id", 4, "ngIf"], [1, "col-md-10", "offset-md-1"], ["label", "admin-metadata-formatters.stop-processing-other-rules", 3, "valueChange", "value", "name"], [1, "icon-cancel-circle", "item-delete", 3, "click", "title"], [3, "criteria", "id"], [3, "criteria"], [3, "action"], [3, "action", "id"]],
      template: function FormatterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4)(5, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function FormatterComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.formatter.name, $event) || (ctx.formatter.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 1)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "app-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 7)(10, "app-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function FormatterComponent_Template_app_field_valueChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.formatter.criteria.criteriaType, $event) || (ctx.formatter.criteria.criteriaType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("fieldChanged", function FormatterComponent_Template_app_field_fieldChanged_10_listener($event) {
            return ctx.onCriteriaChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, FormatterComponent_app_text_criteria_12_Template, 1, 2, "app-text-criteria", 10)(13, FormatterComponent_app_length_13_Template, 1, 1, "app-length", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 1)(15, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "app-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 7)(18, "app-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function FormatterComponent_Template_app_field_valueChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.formatter.action.actionType, $event) || (ctx.formatter.action.actionType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("fieldChanged", function FormatterComponent_Template_app_field_fieldChanged_18_listener($event) {
            return ctx.onActionChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, FormatterComponent_app_label_20_Template, 1, 2, "app-label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, FormatterComponent_app_case_22_Template, 1, 1, "app-case", 15)(23, FormatterComponent_app_prefix_and_suffix_23_Template, 1, 1, "app-prefix-and-suffix", 15)(24, FormatterComponent_app_insert_24_Template, 1, 1, "app-insert", 15)(25, FormatterComponent_app_remove_25_Template, 1, 1, "app-remove", 15)(26, FormatterComponent_app_replace_26_Template, 1, 2, "app-replace", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 1)(28, "div", 17)(29, "app-checkbox", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function FormatterComponent_Template_app_checkbox_valueChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.formatter.doNotApplyFurtherFormatting, $event) || (ctx.formatter.doNotApplyFurtherFormatting = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FormatterComponent_Template_i_click_30_listener() {
            return ctx.deleteFormatter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("id", "formatter-" + ctx.index);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("text", "admin-metadata-formatters.formatter-name-label")("localize", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", ctx.nameField);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx.formatter.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("text", "admin-metadata-formatters.criteria-label")("localize", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", ctx.criteriaField);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx.formatter.criteria.criteriaType);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.criteria.criteriaType !== "Upland.Hydra.Core.Formatters.Length");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.criteria.criteriaType === "Upland.Hydra.Core.Formatters.Length");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("text", "admin-metadata-formatters.action-label")("localize", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", ctx.actionField);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx.formatter.action.actionType);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.action.actionType === "Upland.Hydra.Core.Formatters.Replace");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.action.actionType === "Upland.Hydra.Core.Formatters.Case");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.action.actionType === "Upland.Hydra.Core.Formatters.Prefix" || ctx.formatter.action.actionType === "Upland.Hydra.Core.Formatters.Suffix");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.action.actionType === "Upland.Hydra.Core.Formatters.Insert");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.action.actionType === "Upland.Hydra.Core.Formatters.Remove");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formatter.action.actionType === "Upland.Hydra.Core.Formatters.Replace");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("name", "stopProcessingOtherRules-" + ctx.index);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx.formatter.doNotApplyFurtherFormatting);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 24, "admin-metadata-formatters.remove"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_3__.LabelComponent, _actions_case_case_component__WEBPACK_IMPORTED_MODULE_4__.CaseComponent, _actions_prefix_and_suffix_prefix_and_suffix_component__WEBPACK_IMPORTED_MODULE_5__.PrefixAndSuffixComponent, _actions_remove_remove_component__WEBPACK_IMPORTED_MODULE_6__.RemoveComponent, _criterias_text_text_component__WEBPACK_IMPORTED_MODULE_7__.TextCriteriaComponent, _criterias_length_length_component__WEBPACK_IMPORTED_MODULE_8__.LengthComponent, _actions_replace_replace_component__WEBPACK_IMPORTED_MODULE_9__.ReplaceComponent, _actions_insert_insert_component__WEBPACK_IMPORTED_MODULE_10__.InsertComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
      styles: [".formatter {\n  position: relative;\n  padding: 10px 10px 10px 25px;\n}\n.formatter .criteria-label,\n.formatter .action-label,\n.formatter .name-label {\n  padding-top: 6px;\n}\n.formatter .criteria-label {\n  padding-right: 5px;\n  padding-left: 15px;\n}\n.formatter .replace-with-label {\n  padding-top: 15px;\n  padding-left: 6px;\n}\n.formatter .item-delete {\n  transition: 0.25s color;\n  font-size: 15px;\n  color: #555;\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.formatter .item-delete:hover {\n  color: #e10012;\n  transition: 0.25s color;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2Zvcm1hdHRlcnMvZm9ybWF0dGVyL2Zvcm1hdHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNFOzs7RUFHRSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBRko7QUFJSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQUZOIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1hdHRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDI1cHg7XHJcblxyXG4gIC5jcml0ZXJpYS1sYWJlbCxcclxuICAuYWN0aW9uLWxhYmVsLFxyXG4gIC5uYW1lLWxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgfVxyXG5cclxuICAuY3JpdGVyaWEtbGFiZWwge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnJlcGxhY2Utd2l0aC1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tZGVsZXRlIHtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzIGNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZTEwMDEyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjI1cyBjb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 32299:
/*!***********************************************************!*\
  !*** ./src/app/blocks/formatters/formatters.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattersComponent: () => (/* binding */ FormattersComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_metadata_formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/metadata-formatting */ 27147);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hydra-api.service */ 11070);
/* harmony import */ var _services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _formatter_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formatter/formatter.component */ 42851);

























const _c0 = ["results"];
const _c1 = () => ({});
function FormattersComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "app-formatter", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onRemoveFormatter", function FormattersComponent_div_8_div_1_Template_app_formatter_onRemoveFormatter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.removeFormatter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const formatter_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("id", "gripper-" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formatter", formatter_r5)("index", i_r6);
  }
}
function FormattersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cdkDropListDropped", function FormattersComponent_div_8_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.moveItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, FormattersComponent_div_8_div_1_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.formatters);
  }
}
function FormattersComponent_app_errors_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-errors", 34);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("errors", ctx_r2.errors);
  }
}
function FormattersComponent_ng_container_44_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const formatResult_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](formatResult_r7.ruleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](formatResult_r7.input);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](formatResult_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](formatResult_r7.output);
  }
}
function FormattersComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, FormattersComponent_ng_container_44_tr_1_Template, 9, 4, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.formattingResults.results);
  }
}
class FormattersComponent {
  constructor(ngxSmartModalService, translate, hydraApiService, spinnerStateService, toastr, delay) {
    this.ngxSmartModalService = ngxSmartModalService;
    this.translate = translate;
    this.hydraApiService = hydraApiService;
    this.spinnerStateService = spinnerStateService;
    this.toastr = toastr;
    this.delay = delay;
    this.valueToBeTested = '';
    this.errors = [];
    this.addNewFormatter = () => {
      this.formatters.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Formatter({
        name: '',
        action: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Action.create({
          actionType: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Actions.Case,
          casing: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Casings.Upper
        }),
        criteria: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criteria.create({
          criteriaType: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Criterias.StartsWith,
          text: '',
          ignoreCase: false
        }),
        doNotApplyFurtherFormatting: false
      }));
      this.delay.execute(this.onAddingNewFormatter, 10);
    };
    this.onAddingNewFormatter = () => {
      this.directiveRef.scrollToBottom(0, 100);
      const input = document.querySelector(`#formatter-${this.formatters.length - 1} input:first-of-type`);
      if (input) input.focus();
    };
    this.focusValueInput = () => {
      const valueToBeTestedInput = document.querySelector('.test-field-container input');
      valueToBeTestedInput.focus();
    };
    this.testFormattersSuccess = result => {
      this.spinnerStateService.hide();
      this.formattingResults = result;
    };
    this.testFormattersFails = err => {
      this.spinnerStateService.hide();
      this.toastr.error(err.message);
    };
  }
  ngOnInit() {
    this.createFields();
    this.errors = [];
  }
  ngAfterViewInit() {
    this.testFormattersModal = this.ngxSmartModalService.get('testFormattersModal');
  }
  createFields() {
    this.testField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: '',
      placeholder: this.translate.instant('admin-metadata-formatters.enter-value'),
      required: true
    });
  }
  removeFormatter(index) {
    this.formatters.splice(index, 1);
    this.directiveRef.update();
  }
  moveItem(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.moveItemInArray)(this.formatters, event.previousIndex, event.currentIndex);
  }
  openTestFormattersModal() {
    this.testFormattersModal.open();
    setTimeout(this.focusValueInput, 50);
  }
  cancelTestFormatters() {
    this.errors = [];
    this.testFormattersModal.close();
    this.valueToBeTested = '';
    this.formattingResults = undefined;
  }
  testFormatters() {
    this.errors = [];
    if (this.valueToBeTested == '') {
      this.errors.push(this.translate.instant('admin-metadata-formatters.empty-value'));
      return;
    }
    const params = new _models_metadata_formatting__WEBPACK_IMPORTED_MODULE_1__.TestFormattingParameters();
    params.value = this.valueToBeTested;
    params.formatters = this.formatters;
    const loadingText = this.translate.instant('admin-metadata-formatters.applying-formatting');
    this.spinnerStateService.show(loadingText, this.resultsDiv.nativeElement);
    this.hydraApiService.testMetaDataFormatting(params, this.testFormattersSuccess, this.testFormattersFails);
  }
  onInputChange(ev) {
    this.formattingResults = undefined;
  }
  static {
    this.ɵfac = function FormattersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormattersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: FormattersComponent,
      selectors: [["app-formatters"]],
      viewQuery: function FormattersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarDirective, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.resultsDiv = _t.first);
        }
      },
      inputs: {
        formatters: "formatters",
        testHeaderText: "testHeaderText"
      },
      decls: 57,
      vars: 49,
      consts: [["results", ""], ["appAutoFocusFirstInput", "", 1, "formatters-container", "h-100"], [1, "buttons-group"], ["id", "add-formatter-btn", 1, "btn", "btn-secondary", "add-formatter-btn", 3, "click"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["class", "formatters-list", "cdkDropList", "", 3, "perfectScrollbar", "cdkDropListDropped", 4, "ngIf"], ["identifier", "testFormattersModal", 3, "closable", "escapable", "dismissable", "customClass"], [1, "modal-header", "mb-2"], [1, "modal-title"], [1, "modal-body", "d-flex", "flex-column"], [3, "errors", 4, "ngIf"], [1, "d-flex", "test-formatters-container"], [1, "d-flex", "test-field-container"], [1, "test-field-label"], [3, "text", "localize"], [1, "test-field"], [3, "valueChange", "inputChange", "return", "field", "value"], [1, "btn", "btn-minwidth", "btn-secondary", 3, "click"], [1, "results", "d-flex", "flex-column", 3, "perfectScrollbar"], [1, "format-result-table-container", 3, "perfectScrollbar"], [1, "format-result-table"], [4, "ngIf"], ["colspan", "4"], [1, "formatted-value-container", 3, "perfectScrollbar"], [1, "formatted-value-label"], [1, "formatted-value"], [1, "modal-footer"], [1, "btn", "btn-minwidth", "btn-light", 3, "click"], ["cdkDropList", "", 1, "formatters-list", 3, "cdkDropListDropped", "perfectScrollbar"], ["class", "formatter-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "formatter-box"], [1, "formatter-container"], ["cdkDragHandle", "", 1, "icomoon-grip-small", "gripper-icon", 3, "id"], [3, "onRemoveFormatter", "formatter", "index"], [3, "errors"], [4, "ngFor", "ngForOf"]],
      template: function FormattersComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FormattersComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.addNewFormatter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FormattersComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.openTestFormattersModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, FormattersComponent_div_8_Template, 2, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ngx-smart-modal", 6)(10, "div", 7)(11, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, FormattersComponent_app_errors_15_Template, 1, 1, "app-errors", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 15)(21, "app-field", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function FormattersComponent_Template_app_field_valueChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.valueToBeTested, $event) || (ctx.valueToBeTested = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputChange", function FormattersComponent_Template_app_field_inputChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onInputChange($event));
          })("return", function FormattersComponent_Template_app_field_return_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.testFormatters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FormattersComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.testFormatters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 18, 0)(27, "div", 19)(28, "table", 20)(29, "thead")(30, "tr")(31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, FormattersComponent_ng_container_44_Template, 2, 1, "ng-container", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "tr")(46, "td", 22)(47, "div", 23)(48, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 26)(54, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FormattersComponent_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.cancelTestFormatters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](56, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 26, "admin-metadata-formatters.add-formatting-rule"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.formatters.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 28, "admin-metadata-formatters.test-button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formatters == null ? null : ctx.formatters.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false)("customClass", "test-formatters-modal");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 30, ctx.testHeaderText));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", "admin-metadata-formatters.enter-value")("localize", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx.testField);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx.valueToBeTested);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 32, "admin-metadata-formatters.apply-formatting"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](46, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](47, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 34, "admin-metadata-formatters.rule"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 36, "admin-metadata-formatters.input"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 38, "admin-metadata-formatters.status"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](42, 40, "admin-metadata-formatters.output"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formattingResults);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](48, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](50, 42, "admin-metadata-formatters.formatted-value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.formattingResults == null ? null : ctx.formattingResults.formattedValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](56, 44, "admin-metadata-formatters.close"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__.LabelComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDragHandle, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarDirective, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__.NgxSmartModalComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_6__.AutoFocusFirstInputDirective, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_7__.ErrorsComponent, _formatter_formatter_component__WEBPACK_IMPORTED_MODULE_8__.FormatterComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.buttons-group {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 10px 15px 10px;\n  height: 45px;\n}\n.buttons-group .add-formatter-btn {\n  margin-inline-end: 10px;\n}\n\n.formatters-list {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 45px);\n}\n\n.formatter-box {\n  border: 1px solid #cfcfcf;\n  margin-bottom: 10px;\n  margin-right: 15px;\n  margin-left: 15px;\n}\n\n.formatter-container {\n  position: relative;\n}\n.formatter-container .gripper-icon {\n  position: absolute;\n  top: 13px;\n  left: 0;\n  width: 25px;\n  height: 25px;\n  font-size: 1.4rem;\n  text-align: center;\n  z-index: 10;\n  cursor: move;\n}\n\n.formatter-box.cdk-drag-preview {\n  border-radius: 0;\n  border: 1px dashed #2574db;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.formatter-box.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.formatter-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.formatters-list.cdk-drop-list-dragging .formatter-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.test-field-container {\n  width: calc(100% - 175px);\n  padding-inline-end: 10px;\n}\n\n.test-field {\n  width: calc(100% - 75px);\n}\n.test-field .field {\n  margin-bottom: 0 !important;\n}\n\n.test-field-label {\n  width: 70px;\n}\n.test-field-label label {\n  margin-bottom: 0;\n  margin-top: 7px;\n}\n\n.test-formatters-container {\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.format-result-table-container {\n  position: relative;\n  margin-bottom: 15px;\n}\n.format-result-table-container .ps__rail-x {\n  position: inherit;\n}\n\ntable.format-result-table {\n  border-collapse: collapse;\n  width: 100%;\n}\ntable.format-result-table td,\ntable.format-result-table th {\n  text-align: left;\n  padding: 8px;\n  font-size: 12px;\n}\ntable.format-result-table th {\n  font-weight: 500;\n  color: black;\n  background: #f1f3f3;\n  border-bottom: 2px solid #dee2e6;\n}\ntable.format-result-table td {\n  color: #656565;\n  border-bottom: 1px solid #dee2e6;\n}\ntable.format-result-table tr:last-of-type td {\n  border-bottom: none;\n}\n\n.formatted-value-label,\n.formatted-value {\n  font-size: 12px;\n}\n\n.formatted-value-label {\n  margin-inline-end: 10px;\n}\n\n.formatted-value {\n  font-weight: bold;\n  color: #93002f;\n}\n\n.formatted-value-container .ps__rail-x {\n  position: inherit;\n}\n\n.results {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2Jsb2Nrcy9mb3JtYXR0ZXJzL2Zvcm1hdHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFnUEY7QUE5T0U7RUFDRSx1QkFBQTtBQWdQSjs7QUE1T0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQStPRjs7QUE1T0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQStPRjs7QUE1T0E7RUFDRSxrQkFBQTtBQStPRjtBQTdPRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQStPSjs7QUEzT0E7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUhBQUE7QUE4T0Y7O0FBM09BO0VBQ0UsVUFBQTtBQThPRjs7QUEzT0E7RUFDRSxzREFBQTtBQThPRjs7QUEzT0E7RUFDRSxzREFBQTtBQThPRjs7QUEzT0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBOE9GOztBQTNPQTtFQUNFLHdCQUFBO0FBOE9GO0FBN09FO0VBQ0UsMkJBQUE7QUErT0o7O0FBM09BO0VBQ0UsV0FBQTtBQThPRjtBQTdPRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQStPSjs7QUEzT0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBOE9GOztBQTNPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUE4T0Y7QUE3T0U7RUFDRSxpQkFBQTtBQStPSjs7QUEzT0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUE4T0Y7QUE1T0U7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQThPSjtBQTNPRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUE2T0o7QUExT0U7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUE0T0o7QUF2T007RUFDRSxtQkFBQTtBQXlPUjs7QUFuT0E7O0VBRUUsZUFBQTtBQXNPRjs7QUFuT0E7RUFDRSx1QkFBQTtBQXNPRjs7QUFuT0E7RUFDRSxpQkFBQTtFQUNBLGNEOUNXO0FDb1JiOztBQWxPRTtFQUNFLGlCQUFBO0FBcU9KOztBQWpPQTtFQUNFLE9BQUE7QUFvT0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4uYnV0dG9ucy1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAxMHB4IDE1cHggMTBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcblxyXG4gIC5hZGQtZm9ybWF0dGVyLWJ0biB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtYXR0ZXJzLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ1cHgpO1xyXG59XHJcblxyXG4uZm9ybWF0dGVyLWJveCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmZvcm1hdHRlci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmdyaXBwZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm1hdHRlci1ib3guY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgIzI1NzRkYjtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5mb3JtYXR0ZXItYm94LmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybWF0dGVyLWJveC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmZvcm1hdHRlcnMtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5mb3JtYXR0ZXItYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi50ZXN0LWZpZWxkLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3NXB4KTtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXN0LWZpZWxkIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCk7XHJcbiAgLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXN0LWZpZWxkLWxhYmVsIHtcclxuICB3aWR0aDogNzBweDtcclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnRlc3QtZm9ybWF0dGVycy1jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZvcm1hdC1yZXN1bHQtdGFibGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAucHNfX3JhaWwteCB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlLmZvcm1hdC1yZXN1bHQtdGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHRkLFxyXG4gIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjNmMztcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICB9XHJcblxyXG4gIHRyIHtcclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgdGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtYXR0ZWQtdmFsdWUtbGFiZWwsXHJcbi5mb3JtYXR0ZWQtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZvcm1hdHRlZC12YWx1ZS1sYWJlbCB7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtYXR0ZWQtdmFsdWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAkZGFuZ2VyO1xyXG59XHJcblxyXG4uZm9ybWF0dGVkLXZhbHVlLWNvbnRhaW5lciB7XHJcbiAgLnBzX19yYWlsLXgge1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgZmxleDogMTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3698:
/*!********************************************!*\
  !*** ./src/app/blocks/models/filebound.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileBoundFields: () => (/* binding */ FileBoundFields),
/* harmony export */   FileBoundProject: () => (/* binding */ FileBoundProject),
/* harmony export */   FileBoundProjectField: () => (/* binding */ FileBoundProjectField),
/* harmony export */   FileBoundProjectFieldResult: () => (/* binding */ FileBoundProjectFieldResult),
/* harmony export */   FileBoundProjectFile: () => (/* binding */ FileBoundProjectFile),
/* harmony export */   FileBoundProjectRoute: () => (/* binding */ FileBoundProjectRoute),
/* harmony export */   FileBoundRelatedProject: () => (/* binding */ FileBoundRelatedProject)
/* harmony export */ });
class FileBoundProject {
  constructor(name, id, enableSeparators) {
    this.name = name;
    this.id = id;
    this.enableSeparators = enableSeparators;
  }
}
class FileBoundRelatedProject {
  constructor(initializer) {
    this.relatedProjectId = initializer.relatedProjectId;
    this.relatedProjectName = initializer.relatedProjectName;
  }
}
class FileBoundProjectField {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}
class FileBoundProjectFieldResult {
  constructor(initializer) {
    this.project = initializer.project;
    this.relatedProject = initializer.relatedProject;
    if (initializer.metaDataFields) {
      this.metaDataFields = initializer.metaDataFields.map(p => new FileBoundProjectField(p.name, p.number));
    }
    if (initializer.lineItemFields) {
      this.lineItemFields = initializer.lineItemFields.map(p => new FileBoundProjectField(p.name, p.number));
    }
  }
}
class FileBoundProjectFile {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
var FileBoundFields;
(function (FileBoundFields) {
  FileBoundFields["FileBoundDivider"] = "FileBoundDivider";
  FileBoundFields["FileBoundSeparator"] = "FileBoundSeparator";
  FileBoundFields["FileBoundDocumentName"] = "FileBoundDocumentName";
})(FileBoundFields || (FileBoundFields = {}));
class FileBoundProjectRoute {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

/***/ }),

/***/ 27822:
/*!******************************************************!*\
  !*** ./src/app/blocks/services/proxy-api.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyApiService: () => (/* binding */ ProxyApiService)
/* harmony export */ });
/* harmony import */ var _core_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/log */ 46415);
/* harmony import */ var _models_filebound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/filebound */ 3698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 77008);





class NetDocsRefreshTokenResponse {}
class ProxyApiService {
  constructor(http) {
    this.http = http;
  }
  getFileBoundProjects(fileboundurl, username, password, successCallBack, failureCallBack) {
    const url = `api/proxy/fileboundprojects?fileboundurl=${encodeURIComponent(fileboundurl)}&username=${username}&password=${encodeURIComponent(password)}`;
    this.http.get(url).subscribe(projects => {
      successCallBack(projects.map(p => new _models_filebound__WEBPACK_IMPORTED_MODULE_1__.FileBoundProject(p.name, p.id, p.enableSeparators)));
    }, failureCallBack);
  }
  getFileBoundProjectFields(fileboundurl, username, password, projectid, successCallBack, failureCallBack) {
    const url = `api/proxy/fileboundprojectfields?fileboundurl=${encodeURIComponent(fileboundurl)}&username=${username}&password=${encodeURIComponent(password)}&projectid=${projectid}`;
    this.http.get(url).subscribe(result => {
      successCallBack(new _models_filebound__WEBPACK_IMPORTED_MODULE_1__.FileBoundProjectFieldResult(result));
    }, failureCallBack);
  }
  getFileBoundProjectFiles(fileboundurl, username, password, projectId, successCallBack, failureCallBack) {
    const url = `api/proxy/fileboundprojectfiles?fileboundurl=${encodeURIComponent(fileboundurl)}&username=${username}&password=${encodeURIComponent(password)}&projectid=${projectId}`;
    this.http.get(url).subscribe(files => {
      successCallBack(files.map(p => new _models_filebound__WEBPACK_IMPORTED_MODULE_1__.FileBoundProjectFile(p.name, p.id)));
    }, failureCallBack);
  }
  getFileBoundProjectRoutes(fileboundurl, username, password, projectId, successCallBack, failureCallBack) {
    const url = `api/proxy/fileboundprojectroutes?fileboundurl=${encodeURIComponent(fileboundurl)}&username=${username}&password=${encodeURIComponent(password)}&projectid=${projectId}`;
    this.http.get(url).subscribe(routes => {
      successCallBack(routes.map(p => new _models_filebound__WEBPACK_IMPORTED_MODULE_1__.FileBoundProjectRoute(p.name, p.id)));
    }, failureCallBack);
  }
  checkInterFAXConnectivity(username, password, successCallBack, failureCallBack) {
    const url = `api/proxy/checkInterFAXConnectivity?username=${username}&password=${encodeURIComponent(password)}`;
    this.http.get(url).subscribe(successCallBack, failureCallBack);
  }
  netDocsExchangeCodeForRefreshToken(vault, code, successCallBack, failureCallBack) {
    _core_log__WEBPACK_IMPORTED_MODULE_0__.Log.enter('ProxyApiService.netDocsExchangeCodeForRefreshToken', vault, code);
    const url = `api/proxy/netDocsExchangeCodeForRefreshToken?vault=${vault}&code=${encodeURIComponent(code)}`;
    this.http.get(url).subscribe(r => successCallBack(r.refreshToken), failureCallBack);
  }
  static {
    this.ɵfac = function ProxyApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProxyApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ProxyApiService,
      factory: ProxyApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_blocks_formatters_formatters_component_ts-src_app_blocks_services_proxy-api_s-27b805.js.map