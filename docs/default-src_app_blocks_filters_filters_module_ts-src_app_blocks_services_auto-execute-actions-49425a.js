"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_blocks_filters_filters_module_ts-src_app_blocks_services_auto-execute-actions-49425a"],{

/***/ 75335:
/*!*******************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-audit-status/filter-by-audit-status.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByAuditStatusComponent: () => (/* binding */ FilterByAuditStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);




class FilterByAuditStatusComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = [];
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.filter.options.map(option => ({
      name: option.key,
      value: option.value
    }));
  }
  static {
    this.ɵfac = function FilterByAuditStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByAuditStatusComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByAuditStatusComponent,
      selectors: [["app-filter-by-audit-status"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 2,
      vars: 5,
      consts: [[1, "filter-by-audit-status"], [3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByAuditStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-filter-by-list-property", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByAuditStatusComponent_Template_app_filter_by_list_property_selected_1_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByListPropertyComponent],
      styles: [".filter-by-audit-status[_ngcontent-%COMP%] {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LWF1ZGl0LXN0YXR1cy9maWx0ZXItYnktYXVkaXQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ieS1hdWRpdC1zdGF0dXMge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 54552:
/*!*********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-browser/filter-by-browser.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browsers: () => (/* binding */ Browsers),
/* harmony export */   FilterByBrowserComponent: () => (/* binding */ FilterByBrowserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);







class FilterByBrowserComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.options = [];
    this.getBrowserOptions = () => {
      const browsersDatasource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(Browsers, 'Browsers', this.translateService);
      return [{
        name: this.translateService.instant('Browsers.Any'),
        value: ''
      }, ...browsersDatasource.options];
    };
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.getBrowserOptions();
  }
  static {
    this.ɵfac = function FilterByBrowserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByBrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FilterByBrowserComponent,
      selectors: [["app-filter-by-browser"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 2,
      vars: 5,
      consts: [[1, "filter-by-browser"], [3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByBrowserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "app-filter-by-list-property", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function FilterByBrowserComponent_Template_app_filter_by_list_property_selected_1_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_2__.FilterByListPropertyComponent],
      styles: [".filter-by-browser[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LWJyb3dzZXIvZmlsdGVyLWJ5LWJyb3dzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWJ5LWJyb3dzZXIge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}
var Browsers;
(function (Browsers) {
  Browsers["Unknown"] = "0";
  Browsers["Chrome"] = "1";
  Browsers["Firefox"] = "2";
  Browsers["Edge"] = "3";
  Browsers["Safari"] = "4";
  Browsers["Opera"] = "5";
  Browsers["PrintToFax"] = "6";
  Browsers["HP"] = "7";
  Browsers["KM"] = "8";
  Browsers["MobileChrome"] = "9";
  Browsers["MobileFirefox"] = "10";
  Browsers["MobileEdge"] = "11";
  Browsers["MobileSafari"] = "12";
  Browsers["MobileOpera"] = "13";
})(Browsers || (Browsers = {}));

/***/ }),

/***/ 60941:
/*!***********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-checkbox/filter-by-checkbox.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByCheckboxComponent: () => (/* binding */ FilterByCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);






class FilterByCheckboxComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_1__.FilterBaseComponent {
  constructor() {
    super(...arguments);
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.clearFilter = () => this.setValue(this.filter.defaultValue ?? false.toString());
    this.filterChanged = value => {
      this.filter.value = value;
      this.selected.emit(this.filter.value);
    };
  }
  get filterValue() {
    return Boolean(this.filter.value);
  }
  set filterValue(val) {
    this.filter.value = `${val}`;
  }
  ngOnInit() {
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFilterByCheckboxComponent_BaseFactory;
      return function FilterByCheckboxComponent_Factory(__ngFactoryType__) {
        return (ɵFilterByCheckboxComponent_BaseFactory || (ɵFilterByCheckboxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FilterByCheckboxComponent)))(__ngFactoryType__ || FilterByCheckboxComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FilterByCheckboxComponent,
      selectors: [["app-filter-by-checkbox"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 5,
      consts: [[1, "d-flex"], [3, "valueChange", "name", "label", "value"]],
      template: function FilterByCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "app-checkbox", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function FilterByCheckboxComponent_Template_app_checkbox_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.filterValue, $event) || (ctx.filterValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function FilterByCheckboxComponent_Template_app_checkbox_valueChange_1_listener($event) {
            return ctx.filterChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", ctx.filter.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx.filter.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.filterValue);
        }
      },
      dependencies: [_Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 89315:
/*!***************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-contact-property/filter-by-contact-property.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByContactPropertyComponent: () => (/* binding */ FilterByContactPropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByContactPropertyComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByContactPropertyComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactProperty, $event) || (ctx_r1.contactProperty = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByContactPropertyComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onContactPropertyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldContactProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.contactProperty);
  }
}
function FilterByContactPropertyComponent_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByContactPropertyComponent_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contains, $event) || (ctx_r1.contains = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByContactPropertyComponent_app_field_2_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    })("return", function FilterByContactPropertyComponent_app_field_2_Template_app_field_return_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldContains);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.contactProperty);
  }
}
class FilterByContactPropertyComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.contactProperty = '';
    this.contains = '';
    this.timer = null;
    this.contactPropertyDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue('name:');
    this.setValue = val => {
      setTimeout(() => {
        const parts = this.getFilterParts(val);
        if (parts.length < 2) return;
        this.contactProperty = parts[0];
        this.contains = parts[1];
        this.onFieldChanged();
      }, 50);
    };
    this.addOption = cp => {
      this.contactPropertyDataSource.options.push({
        name: this.translateService.instant(`filter-by-contact-property.${cp}`),
        value: cp
      });
    };
    this.onContactPropertyChanged = cp => {
      this.contactProperty = cp;
      this.onFieldChanged();
    };
    this.onContainsChanged = contains => {
      this.contains = contains;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.setFilterValue();
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(this.fireFieldChanged, 250);
    };
    this.fireFieldChanged = () => {
      if (this.lastFilterValue !== this.filter.value) {
        this.selected.emit(this.filter.value);
        this.lastFilterValue = this.filter.value;
      }
    };
    this.setFilterValue = () => {
      this.filter.value = this.contactProperty ? `${this.contactProperty}:${this.contains}` : '';
    };
    this.createFields = () => {
      this.fieldContactProperty = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('filter-by-contact-property.property'),
        placeholder: '',
        required: false,
        datasource: this.contactPropertyDataSource,
        hideLabel: true
      });
      this.fieldContains = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('filter-by-contact-property.property-value'),
        placeholder: '',
        required: false,
        hideLabel: true
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.addOption('name');
    this.addOption('fax-number');
    this.addOption('company');
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByContactPropertyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByContactPropertyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByContactPropertyComponent,
      selectors: [["app-filter-by-contact-property"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "filter-by-contact-property", "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "field", "value", "disabled", "valueChange", "fieldChanged", "return", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "return", "field", "value", "disabled"]],
      template: function FilterByContactPropertyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByContactPropertyComponent_app_field_1_Template, 1, 2, "app-field", 1)(2, FilterByContactPropertyComponent_app_field_2_Template, 1, 3, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldContactProperty);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldContains);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 41833:
/*!***************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-cover-page/filter-by-cover-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByCoverPageComponent: () => (/* binding */ FilterByCoverPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);




class FilterByCoverPageComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = [];
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.filter.options.map(option => ({
      name: option.key,
      value: option.value
    }));
  }
  static {
    this.ɵfac = function FilterByCoverPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByCoverPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByCoverPageComponent,
      selectors: [["app-filter-by-cover-page"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 2,
      vars: 5,
      consts: [[1, "filter-by-cover-page"], [3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByCoverPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-filter-by-list-property", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByCoverPageComponent_Template_app_filter_by_list_property_selected_1_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByListPropertyComponent],
      styles: [".filter-by-cover-page[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LWNvdmVyLXBhZ2UvZmlsdGVyLWJ5LWNvdmVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWJ5LWNvdmVyLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 58687:
/*!*****************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-datasource-column/filter-by-datasource-column.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByDataSourceColumnComponent: () => (/* binding */ FilterByDataSourceColumnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/log */ 46415);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/errors.service */ 34326);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);

















function FilterByDataSourceColumnComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("valueChange", function FilterByDataSourceColumnComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.columnId, $event) || (ctx_r1.columnId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("fieldChanged", function FilterByDataSourceColumnComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onColumnChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("field", ctx_r1.fieldColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("value", ctx_r1.columnId);
  }
}
function FilterByDataSourceColumnComponent_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("valueChange", function FilterByDataSourceColumnComponent_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.contains, $event) || (ctx_r1.contains = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("fieldChanged", function FilterByDataSourceColumnComponent_app_field_2_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    })("return", function FilterByDataSourceColumnComponent_app_field_2_Template_app_field_return_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("field", ctx_r1.fieldContains);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("value", ctx_r1.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.columnId)("emitDistinctAndDebouncedValues", true);
  }
}
class FilterByDataSourceColumnComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_6__.FilterBaseComponent {
  constructor(translateService, userStateService, hydraApi, errorsService) {
    super();
    this.translateService = translateService;
    this.userStateService = userStateService;
    this.hydraApi = hydraApi;
    this.errorsService = errorsService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.columnId = '';
    this.contains = '';
    this.folderId = 'BambaSettingsApplication-Upland.Bamba.Application.Settings.DataSourceRows';
    this.columnsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.clearFilter = () => this.setValue(':');
    this.setValue = val => {
      const parts = this.getFilterParts(val);
      if (parts.length < 2) return;
      this.columnId = parts[0];
      this.contains = parts[1];
      this.setFilterValue();
    };
    this.loadDataSource = datasourceId => {
      this.hydraApi.getDataSource(datasourceId, this.datasourceLoadSucceeded, this.datasourceLoadFailed);
    };
    this.datasourceLoadSucceeded = datasource => {
      this.datasource = datasource;
      this.datasource.columns.forEach(column => {
        this.columnsDataSource.options.push({
          name: column.name,
          value: column.id
        });
      });
      this.columnsDataSource.options.unshift({
        name: this.translateService.instant('filter.filter-by-datasource-column-none'),
        value: ''
      });
      this.columnsDataSource.options.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      this.createFields();
    };
    this.datasourceLoadFailed = error => {
      _core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-datasource.load-failed', error);
    };
    this.onColumnChanged = columnId => {
      this.columnId = columnId;
      if (shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Strings.notEmpty(this.contains)) this.onFieldChanged();
    };
    this.onContainsChanged = contains => {
      this.contains = contains;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.setFilterValue();
      this.selected.emit(this.filter.value);
    };
    this.setFilterValue = () => {
      this.filter.value = this.columnId ? `${this.columnId}:${this.contains}` : '';
    };
    this.createFields = () => {
      this.fieldColumn = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-datasource.filter-by-datasource-column'),
        placeholder: '',
        hideLabel: true,
        required: false,
        datasource: this.columnsDataSource
      });
      this.fieldContains = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-datasource.datasource-column-search-text'),
        placeholder: '',
        hideLabel: true,
        required: false
      });
    };
  }
  ngOnInit() {
    const folder = this.userStateService.findFolderById(this.folderId);
    if (folder) {
      if (folder.parentFolderId) {
        this.loadDataSource(folder.parentFolderId);
      } else {
        this.subscriptions.add(this.userStateService.userChanged.subscribe(user => {
          if (!user) return;
          const folder = this.userStateService.findFolderById(this.folderId);
          if (folder.parentFolderId) {
            this.loadDataSource(folder.parentFolderId);
          }
        }));
      }
    } else {
      this.errorsService.showError('admin-datasource.invalid-datasource', '');
    }
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function FilterByDataSourceColumnComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByDataSourceColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: FilterByDataSourceColumnComponent,
      selectors: [["app-filter-by-datasource-column"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "filter-by-datasource-column", "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "field", "value", "disabled", "emitDistinctAndDebouncedValues", "valueChange", "fieldChanged", "return", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "return", "field", "value", "disabled", "emitDistinctAndDebouncedValues"]],
      template: function FilterByDataSourceColumnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilterByDataSourceColumnComponent_app_field_1_Template, 1, 2, "app-field", 1)(2, FilterByDataSourceColumnComponent_app_field_2_Template, 1, 4, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fieldColumn);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fieldContains);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 53191:
/*!***************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-date-range/filter-by-date-range.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByDateRangeComponent: () => (/* binding */ FilterByDateRangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);







class FilterByDateRangeComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor() {
    super(...arguments);
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.value = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.setValue = val => void (this.value = this.filter.value = val);
    this.createFields = () => {
      this.fieldDateRange = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.DateRange,
        label: '',
        placeholder: '',
        required: false,
        smallLabel: this.filter.label
      });
    };
    this.onDateRangeChanged = value => {
      this.filter.value = value;
      this.selected.emit(this.filter.value);
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFilterByDateRangeComponent_BaseFactory;
      return function FilterByDateRangeComponent_Factory(__ngFactoryType__) {
        return (ɵFilterByDateRangeComponent_BaseFactory || (ɵFilterByDateRangeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](FilterByDateRangeComponent)))(__ngFactoryType__ || FilterByDateRangeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByDateRangeComponent,
      selectors: [["app-filter-by-date-range"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 8,
      consts: [[1, "filter-by-datasource-column", "d-flex"], [3, "valueChange", "blur", "field", "value", "minValue", "maxValue", "options", "defaultValue"]],
      template: function FilterByDateRangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByDateRangeComponent_Template_app_field_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function FilterByDateRangeComponent_Template_app_field_blur_1_listener($event) {
            return ctx.onDateRangeChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldDateRange);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("minValue", ctx.filter == null ? null : ctx.filter.minValue)("maxValue", ctx.filter == null ? null : ctx.filter.maxValue)("options", ctx.filter == null ? null : ctx.filter.options)("defaultValue", ctx.filter == null ? null : ctx.filter.defaultValue);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3615:
/*!*********************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-device-column/filter-by-device-column.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByDeviceColumnComponent: () => (/* binding */ FilterByDeviceColumnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-property/filter-by-property.component */ 39317);




const _c0 = () => ["name", "serial-number", "tag"];
class FilterByDeviceColumnComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterSelected = value => this.selected.emit(value);
  }
  static {
    this.ɵfac = function FilterByDeviceColumnComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByDeviceColumnComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByDeviceColumnComponent,
      selectors: [["app-filter-by-device-column"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 6,
      consts: [[3, "selected", "filter", "layoutVertically", "properties", "emptyValueDisplayName", "translationPrefix"]],
      template: function FilterByDeviceColumnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-filter-by-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByDeviceColumnComponent_Template_app_filter_by_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("properties", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))("emptyValueDisplayName", "none")("translationPrefix", "filter-by-device-column");
        }
      },
      dependencies: [_filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByPropertyComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 83791:
/*!*************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-documents-count/filter-by-documents-count.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByDocumentsCountComponent: () => (/* binding */ FilterByDocumentsCountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);




class FilterByDocumentsCountComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = [];
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.filter.options.map(option => ({
      name: option.key,
      value: option.value
    }));
  }
  static {
    this.ɵfac = function FilterByDocumentsCountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByDocumentsCountComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByDocumentsCountComponent,
      selectors: [["app-filter-by-documents-count"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 2,
      vars: 5,
      consts: [[1, "filter-by-documents-count"], [3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByDocumentsCountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-filter-by-list-property", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByDocumentsCountComponent_Template_app_filter_by_list_property_selected_1_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByListPropertyComponent],
      styles: [".filter-by-documents-count[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LWRvY3VtZW50cy1jb3VudC9maWx0ZXItYnktZG9jdW1lbnRzLWNvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ieS1kb2N1bWVudHMtY291bnQge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 17423:
/*!*************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-dwfhistory-components/filter-by-dwfhistory-components.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByDWFHistoryComponentsComponent: () => (/* binding */ FilterByDWFHistoryComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);












function FilterByDWFHistoryComponentsComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FilterByDWFHistoryComponentsComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.component, $event) || (ctx_r1.component = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function FilterByDWFHistoryComponentsComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onComponentsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fieldComponents);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.component);
  }
}
class FilterByDWFHistoryComponentsComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_3__.FilterBaseComponent {
  constructor(hydraApi, translateService) {
    super();
    this.hydraApi = hydraApi;
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.component = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.setValue = val => void (this.component = this.filter.value = val);
    this.onComponentsChanged = component => {
      this.filter.value = component;
      this.selected.next(this.filter.value);
    };
    this.createFields = () => {
      this.fieldComponents = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        smallLabel: this.translateService.instant('filter.components'),
        placeholder: '',
        required: false,
        datasource: new ComponentsDataSource(this.hydraApi, this.translateService)
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByDWFHistoryComponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByDWFHistoryComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilterByDWFHistoryComponentsComponent,
      selectors: [["app-filter-by-dwfhistory-components"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-history-user", "d-flex"], [3, "field", "value", "valueChange", 4, "ngIf"], [3, "valueChange", "field", "value"]],
      template: function FilterByDWFHistoryComponentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FilterByDWFHistoryComponentsComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fieldComponents);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class ComponentsDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(hydraApiService, translateService) {
    super();
    this.hydraApiService = hydraApiService;
    this.translateService = translateService;
    this.componentsLoaded = apiResult => {
      const options = new Array();
      options.push({
        name: this.translateService.instant('filter-by-DWF-components.all'),
        value: ''
      });
      apiResult.object.forEach(item => {
        options.push({
          name: item.name,
          value: item.id
        });
      });
      this.successCallBack(options);
    };
    this.failed = err => {
      this.failureCallBack(err);
    };
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.successCallBack = successCallBack;
    this.failureCallBack = failureCallBack;
    this.hydraApiService.getComponents(this.componentsLoaded, this.failed);
  }
}

/***/ }),

/***/ 33447:
/*!*****************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-environment/filter-by-environment.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByEnvironmentComponent: () => (/* binding */ FilterByEnvironmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);












function FilterByEnvironmentComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FilterByEnvironmentComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.environment, $event) || (ctx_r1.environment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function FilterByEnvironmentComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onEnvironmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fieldEnvironment);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.environment);
  }
}
class FilterByEnvironmentComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_3__.FilterBaseComponent {
  constructor(hydraApi, translateService) {
    super();
    this.hydraApi = hydraApi;
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.environment = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.setValue = val => void (this.environment = this.filter.value = val);
    this.onEnvironmentChanged = environment => {
      this.filter.value = environment;
      this.selected.next(this.filter.value);
    };
    this.createFields = () => {
      this.fieldEnvironment = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        smallLabel: this.translateService.instant('filter.environment'),
        placeholder: '',
        required: false,
        datasource: new environmentsDataSource(this.hydraApi, this.translateService)
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByEnvironmentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByEnvironmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilterByEnvironmentComponent,
      selectors: [["app-filter-by-environment"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-environment", "d-flex"], [3, "field", "value", "valueChange", 4, "ngIf"], [3, "valueChange", "field", "value"]],
      template: function FilterByEnvironmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FilterByEnvironmentComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fieldEnvironment);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class environmentsDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(hydraApiService, translateService) {
    super();
    this.hydraApiService = hydraApiService;
    this.translateService = translateService;
    this.environmentsLoaded = apiResult => {
      const options = new Array();
      options.push({
        name: this.translateService.instant('filter-by-environment.all'),
        value: ''
      });
      apiResult.object.forEach(item => {
        options.push({
          name: item.name,
          value: item.id
        });
      });
      this.successCallBack(options);
    };
    this.failed = err => {
      this.failureCallBack(err);
    };
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.successCallBack = successCallBack;
    this.failureCallBack = failureCallBack;
    this.hydraApiService.getIFXEnvironments(this.environmentsLoaded, this.failed);
  }
}

/***/ }),

/***/ 41395:
/*!*****************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-fax-user-username/filter-by-fax-user-username.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByFaxUserUsernameComponent: () => (/* binding */ FilterByFaxUserUsernameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByFaxUserUsernameComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByFaxUserUsernameComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.userIdProperty, $event) || (ctx_r1.userIdProperty = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function FilterByFaxUserUsernameComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onUsernamePropertyChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldUsernameProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.userIdProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("emitDistinctAndDebouncedValues", true);
  }
}
class FilterByFaxUserUsernameComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.userIdProperty = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.setValue = val => void (this.userIdProperty = this.filter.value = val);
    this.onUsernamePropertyChange = cp => {
      if (cp == this.filter.value) return;
      this.userIdProperty = this.filter.value = cp;
      this.selected.emit(this.userIdProperty);
    };
    this.createField = () => {
      this.fieldUsernameProperty = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('filter.filter-by-fax-user-username.username'),
        placeholder: this.translateService.instant('filter.filter-by-fax-user-username.username'),
        smallLabel: this.translateService.instant('filter.filter-by-fax-user-username.username'),
        required: false,
        hideLabel: true
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createField();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByFaxUserUsernameComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByFaxUserUsernameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByFaxUserUsernameComponent,
      selectors: [["app-filter-by-fax-user-username"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-fax-use-username", "d-flex"], [3, "field", "value", "emitDistinctAndDebouncedValues", "valueChange", 4, "ngIf"], [3, "valueChange", "field", "value", "emitDistinctAndDebouncedValues"]],
      template: function FilterByFaxUserUsernameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByFaxUserUsernameComponent_app_field_1_Template, 1, 3, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldUsernameProperty);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 85791:
/*!*****************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-faxuser-faxnumber/filter-by-faxuser-faxnumber.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByFaxuserFaxnumberComponent: () => (/* binding */ FilterByFaxuserFaxnumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByFaxuserFaxnumberComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByFaxuserFaxnumberComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.userIdProperty, $event) || (ctx_r1.userIdProperty = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByFaxuserFaxnumberComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onUsernamePropertyChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldUsernameProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.userIdProperty);
  }
}
class FilterByFaxuserFaxnumberComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.userIdProperty = '';
    this.timer = null;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => {
      this.setValue('');
    };
    this.onUsernamePropertyChange = cp => {
      this.setValue(cp);
      this.onFieldChanged();
    };
    this.setValue = value => void (this.userIdProperty = this.filter.value = value);
    this.onFieldChanged = () => {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(this.fireFieldChanged, 800);
    };
    this.fireFieldChanged = () => {
      if (this.lastFilterValue !== this.filter.value) {
        this.selected.emit(this.filter.value);
        this.lastFilterValue = this.filter.value;
      }
    };
    this.createField = () => {
      this.fieldUsernameProperty = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('filter.filter-by-fax-user-faxNumber.faxnumber'),
        placeholder: this.translateService.instant('filter.filter-by-fax-user-faxNumber.faxnumber'),
        smallLabel: this.translateService.instant('filter.filter-by-fax-user-faxNumber.faxnumber'),
        required: false,
        hideLabel: true
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createField();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByFaxuserFaxnumberComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByFaxuserFaxnumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByFaxuserFaxnumberComponent,
      selectors: [["app-filter-by-faxuser-faxnumber"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-fax-use-username", "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"]],
      template: function FilterByFaxuserFaxnumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByFaxuserFaxnumberComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldUsernameProperty);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95269:
/*!***********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-grouping/filter-by-grouping.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByGroupingComponent: () => (/* binding */ FilterByGroupingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);












function FilterByGroupingComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FilterByGroupingComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.grouping, $event) || (ctx_r1.grouping = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function FilterByGroupingComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onGroupingChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fieldGrouping);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.grouping);
  }
}
class FilterByGroupingComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_3__.FilterBaseComponent {
  constructor(hydraApi, translateService) {
    super();
    this.hydraApi = hydraApi;
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.grouping = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.setValue = val => void (this.grouping = this.filter.value = val);
    this.onGroupingChanged = grouping => {
      this.filter.value = grouping;
      this.selected.next(this.filter.value);
    };
    this.createFields = () => {
      this.fieldGrouping = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        smallLabel: this.translateService.instant('filter.grouping'),
        placeholder: '',
        required: false,
        datasource: new groupingsDataSource(this.hydraApi, this.translateService)
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByGroupingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByGroupingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilterByGroupingComponent,
      selectors: [["app-filter-by-grouping"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-grouping", "d-flex"], [3, "field", "value", "valueChange", 4, "ngIf"], [3, "valueChange", "field", "value"]],
      template: function FilterByGroupingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FilterByGroupingComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fieldGrouping);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class groupingsDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(hydraApiService, translateService) {
    super();
    this.hydraApiService = hydraApiService;
    this.translateService = translateService;
    this.groupingsLoaded = apiResult => {
      const options = new Array();
      options.push({
        name: this.translateService.instant('filter-by-grouping.all'),
        value: ''
      });
      apiResult.object.forEach(item => {
        options.push({
          name: item.name,
          value: item.id
        });
      });
      this.successCallBack(options);
    };
    this.failed = err => {
      this.failureCallBack(err);
    };
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.successCallBack = successCallBack;
    this.failureCallBack = failureCallBack;
    this.hydraApiService.getGroupings(this.groupingsLoaded, this.failed);
  }
}

/***/ }),

/***/ 15511:
/*!*******************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-history-user/filter-by-history-user.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByHistoryUserComponent: () => (/* binding */ FilterByHistoryUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);












function FilterByHistoryUserComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FilterByHistoryUserComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.username, $event) || (ctx_r1.username = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function FilterByHistoryUserComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onUsernameChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fieldUsernames);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.username);
  }
}
class FilterByHistoryUserComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_3__.FilterBaseComponent {
  constructor(hydraApi, translateService) {
    super();
    this.hydraApi = hydraApi;
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.username = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.setValue = val => void (this.username = val);
    this.onUsernameChanged = username => {
      this.filter.value = username;
      this.selected.next(this.filter.value);
    };
    this.createFields = () => {
      this.fieldUsernames = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        smallLabel: this.translateService.instant('filter.user'),
        placeholder: '',
        required: false,
        datasource: new UserDataSource(this.hydraApi, this.translateService)
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByHistoryUserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByHistoryUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilterByHistoryUserComponent,
      selectors: [["app-filter-by-history-user"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-history-user", "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"]],
      template: function FilterByHistoryUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FilterByHistoryUserComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fieldUsernames);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class UserDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(hydraApiService, translateService) {
    super();
    this.hydraApiService = hydraApiService;
    this.translateService = translateService;
    this.usersLoaded = users => {
      const options = new Array();
      options.push({
        name: this.translateService.instant('filter-by-history-user.all-users'),
        value: ''
      });
      options.push({
        name: 'Mother',
        value: '000000000000000000000000'
      });
      users.forEach(u => options.push({
        name: u.name,
        value: u.id
      }));
      this.successCallBack(options);
    };
    this.failed = err => {
      this.failureCallBack(err);
    };
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.successCallBack = successCallBack;
    this.failureCallBack = failureCallBack;
    this.hydraApiService.getUsers(this.usersLoaded, this.failed);
  }
}

/***/ }),

/***/ 53139:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-contactlist-type/filter-by-interfax-contactlist-type.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxContactlistTypeComponent: () => (/* binding */ FilterByInterfaxContactlistTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);




class FilterByInterfaxContactlistTypeComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = [];
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.filter.options.map(option => ({
      name: option.key,
      value: option.value
    }));
  }
  static {
    this.ɵfac = function FilterByInterfaxContactlistTypeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxContactlistTypeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByInterfaxContactlistTypeComponent,
      selectors: [["app-filter-by-interfax-contactlist-type"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 4,
      consts: [[3, "selected", "filter", "layoutVertically", "options", "label"]],
      template: function FilterByInterfaxContactlistTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-filter-by-list-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByInterfaxContactlistTypeComponent_Template_app_filter_by_list_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByListPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 60679:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-date-selection/filter-by-interfax-date-selection.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxDateSelectionComponent: () => (/* binding */ FilterByInterfaxDateSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByInterfaxDateSelectionComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByInterfaxDateSelectionComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.range, $event) || (ctx_r1.range = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByInterfaxDateSelectionComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.range);
  }
}
class FilterByInterfaxDateSelectionComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.range = 'today';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue('today');
    this.setValue = val => void (this.filter.value = this.range = val);
    this.addRange = (rangeOptions, value) => {
      const text = this.translateService.instant(`filter-by-interfax-date-selection.${value}`);
      rangeOptions.push({
        name: text,
        value: value
      });
    };
  }
  ngOnInit() {
    this.createField();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  createField() {
    const rangeOptions = [];
    this.addRange(rangeOptions, 'today');
    this.addRange(rangeOptions, 'yesterday');
    this.addRange(rangeOptions, 'this-week');
    this.addRange(rangeOptions, 'last-week');
    this.addRange(rangeOptions, 'this-month');
    this.field = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: '',
      placeholder: '',
      required: false,
      datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(rangeOptions)
    });
  }
  onChanged(value) {
    this.filter.value = value;
    this.selected.next(this.filter.value);
  }
  static {
    this.ɵfac = function FilterByInterfaxDateSelectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxDateSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByInterfaxDateSelectionComponent,
      selectors: [["app-filter-by-interfax-date-selection"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-interfax-date-selection", "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"]],
      template: function FilterByInterfaxDateSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByInterfaxDateSelectionComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.field);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 83239:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-inbox-properties/filter-by-interfax-inbox-properties.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxInboxPropertiesComponent: () => (/* binding */ FilterByInterfaxInboxPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_interfax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interfax.service */ 19456);
/* harmony import */ var _services_FilterByInterfaxInboxPropertiesComponentLoaded_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/FilterByInterfaxInboxPropertiesComponentLoaded.service */ 44718);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);















function FilterByInterfaxInboxPropertiesComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function FilterByInterfaxInboxPropertiesComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPropertyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldProperty)("value", ctx_r1.property);
  }
}
function FilterByInterfaxInboxPropertiesComponent_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function FilterByInterfaxInboxPropertiesComponent_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.contains, $event) || (ctx_r1.contains = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function FilterByInterfaxInboxPropertiesComponent_app_field_2_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    })("return", function FilterByInterfaxInboxPropertiesComponent_app_field_2_Template_app_field_return_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldContains);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.property);
  }
}
class FilterByInterfaxInboxPropertiesComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_4__.FilterBaseComponent {
  constructor(interfaxService, translateService, cdk, elementRef, delay, componentLoadedService) {
    super();
    this.interfaxService = interfaxService;
    this.translateService = translateService;
    this.cdk = cdk;
    this.elementRef = elementRef;
    this.delay = delay;
    this.componentLoadedService = componentLoadedService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.property = '';
    this.contains = '';
    this.timer = null;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.propertyDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.clearFilter = () => this.setValue(':');
    this.setValue = val => {
      const parts = this.getFilterParts(val);
      if (parts.length < 2) return;
      this.property = parts[0];
      this.contains = parts[1];
      this.cdk.detectChanges();
      this.setFilterValue();
    };
    this.onPropertyChanged = property => {
      let previousProperty = this.property;
      this.property = property;
      if (previousProperty) {
        this.onFieldChanged();
      } else {
        this.delay.execute(() => {
          this.elementRef.nativeElement.querySelector('.filter-by-interfax-inbox-properties .field-text').focus();
        }, 100);
      }
    };
    this.onContainsChanged = contains => {
      this.contains = contains;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.setFilterValue();
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(this.fireFieldChanged, 250);
    };
    this.fireFieldChanged = () => {
      if (this.lastFilterValue !== this.filter.value) {
        this.selected.emit(this.filter.value);
        this.lastFilterValue = this.filter.value;
      }
    };
    this.setFilterValue = () => {
      this.filter.value = this.property ? `${this.property}:${this.contains}` : '';
    };
    this.optionsLoaded = (items, interFAXPropertiesDataSource) => {
      const selectedOption = items.find(o => o.value !== '' && this.filter.value.startsWith(o.value));
      if (selectedOption === undefined) this.filter.value = '';
      this.createFields(interFAXPropertiesDataSource);
      this.initializeFilter();
      this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
      this.componentLoadedService.notifyComponentLoaded();
    };
    this.validateProperties = () => {
      const interFAXPropertiesDataSource = new InterFAXPropertiesDataSource(this.interfaxService, this.translateService);
      interFAXPropertiesDataSource.getItems(null, null, cps => this.optionsLoaded(cps, interFAXPropertiesDataSource));
    };
    this.createFields = interFAXPropertiesDataSource => {
      this.fieldProperty = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        smallLabel: this.translateService.instant('filter.property'),
        placeholder: '',
        required: false,
        datasource: interFAXPropertiesDataSource
      });
      this.fieldContains = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: '',
        searchable: true,
        placeholder: '',
        required: false
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.validateProperties();
  }
  static {
    this.ɵfac = function FilterByInterfaxInboxPropertiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxInboxPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_interfax_service__WEBPACK_IMPORTED_MODULE_2__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_FilterByInterfaxInboxPropertiesComponentLoaded_service__WEBPACK_IMPORTED_MODULE_3__.FilterByInterfaxInboxPropertiesComponentLoadedService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FilterByInterfaxInboxPropertiesComponent,
      selectors: [["app-filter-by-interfax-inbox-properties"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "filter-by-interfax-inbox-properties", "d-flex"], [3, "field", "value", "fieldChanged", 4, "ngIf"], [3, "field", "value", "disabled", "valueChange", "fieldChanged", "return", 4, "ngIf"], [3, "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "return", "field", "value", "disabled"]],
      template: function FilterByInterfaxInboxPropertiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FilterByInterfaxInboxPropertiesComponent_app_field_1_Template, 1, 2, "app-field", 1)(2, FilterByInterfaxInboxPropertiesComponent_app_field_2_Template, 1, 3, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fieldProperty);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fieldContains);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class InterFAXPropertiesDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(interfaxService, translateService) {
    super();
    this.interfaxService = interfaxService;
    this.translateService = translateService;
    this.optionsLoaded = false;
    this.propertiesLoaded = (properties, successCallBack) => {
      const options = new Array();
      properties.forEach(p => options.push({
        name: p.name,
        value: `#${encodeURIComponent(p.name)}#${p.type}`
      }));
      options.push({
        name: this.translateService.instant(`filter-by-interfax-outbox-properties.select-property`),
        value: ''
      });
      const faxProperties = ['@tag', '@reference', '@documentid', '@transactionid', '@csid', '@ani', '@name', '@messageid'];
      for (const property of faxProperties) {
        options.push({
          name: this.translateService.instant(`filter-by-interfax-inbox-properties.${property}`),
          value: property
        });
      }
      options.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      this.options = options;
      this.optionsLoaded = true;
      this.successCallBack(options);
      if (successCallBack) successCallBack(options);
    };
    this.failed = err => {
      this.failureCallBack(err);
    };
  }
  getItems(startsWith = null, currentValue = null, successCallBack = null, failureCallBack = null) {
    if (this.optionsLoaded) {
      successCallBack(this.options);
      return;
    }
    this.successCallBack = successCallBack;
    this.failureCallBack = failureCallBack;
    this.interfaxService.getCustomProperties(cps => this.propertiesLoaded(cps, successCallBack), this.failed);
  }
}

/***/ }),

/***/ 3925:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-inbox-shared-with/filter-by-interfax-inbox-shared-with.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxInboxSharedWithComponent: () => (/* binding */ FilterByInterfaxInboxSharedWithComponent),
/* harmony export */   InterFAXInboxSharedWithDataSource: () => (/* binding */ InterFAXInboxSharedWithDataSource)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_interfax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interfax.service */ 19456);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);











class FilterByInterfaxInboxSharedWithComponent {
  constructor(interfaxService, translateService, userState) {
    this.interfaxService = interfaxService;
    this.translateService = translateService;
    this.userState = userState;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.dataSource = new InterFAXInboxSharedWithDataSource(this.interfaxService, this.translateService, this.userState);
  }
  static {
    this.ɵfac = function FilterByInterfaxInboxSharedWithComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxInboxSharedWithComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_interfax_service__WEBPACK_IMPORTED_MODULE_2__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilterByInterfaxInboxSharedWithComponent,
      selectors: [["app-filter-by-interfax-inbox-shared-with"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "selected", "filter", "layoutVertically", "dataSourceAsync", "label", "smallLabel"]],
      template: function FilterByInterfaxInboxSharedWithComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-filter-by-list-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selected", function FilterByInterfaxInboxSharedWithComponent_Template_app_filter_by_list_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("dataSourceAsync", ctx.dataSource)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_4__.FilterByListPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class InterFAXInboxSharedWithDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(interfaxService, translate, userState) {
    super();
    this.interfaxService = interfaxService;
    this.translate = translate;
    this.userState = userState;
    this.groupsLoaded = groups => {
      groups.sort((x, y) => x.name.localeCompare(y.name));
      const options = new Array();
      options.push({
        name: this.translate.instant('filter-by-interfax-inbox-shared-with.all'),
        value: ''
      });
      options.push({
        name: this.translate.instant('filter-by-interfax-inbox-shared-with.sharedtomedirectly'),
        value: 'sharedtomedirectly'
      });
      options.push({
        name: this.translate.instant('filter-by-interfax-inbox-shared-with.sharedtoeveryone'),
        value: 'sharedtoeveryone'
      });
      groups.forEach(g => options.push({
        name: g.name,
        value: g.id
      }));
      this.successCallBack(options);
    };
    this.groupsLoadFailed = err => this.failureCallBack(err);
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.successCallBack = successCallBack;
    this.failureCallBack = failureCallBack;
    if (this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_ADMINISTRATOR)) {
      this.interfaxService.getGroups(this.groupsLoaded, this.groupsLoadFailed);
      return;
    }
    this.interfaxService.getUserGroups(this.groupsLoaded, this.groupsLoadFailed);
  }
}

/***/ }),

/***/ 64441:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-outbox-properties/filter-by-interfax-outbox-properties.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxOutboxPropertiesComponent: () => (/* binding */ FilterByInterfaxOutboxPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByInterfaxOutboxPropertiesComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByInterfaxOutboxPropertiesComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.property, $event) || (ctx_r1.property = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByInterfaxOutboxPropertiesComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPropertyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.property);
  }
}
function FilterByInterfaxOutboxPropertiesComponent_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByInterfaxOutboxPropertiesComponent_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contains, $event) || (ctx_r1.contains = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByInterfaxOutboxPropertiesComponent_app_field_2_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    })("return", function FilterByInterfaxOutboxPropertiesComponent_app_field_2_Template_app_field_return_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldContains);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.property);
  }
}
class FilterByInterfaxOutboxPropertiesComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.property = '';
    this.contains = '';
    this.timer = null;
    this.propertyDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue(':');
    this.setValue = val => {
      const parts = this.getFilterParts(val);
      if (parts.length < 2) return;
      this.property = parts[0];
      this.contains = parts[1];
      this.setFilterValue();
    };
    this.createPropertyDataSource = () => {
      const properties = ['subject', 'faxnumber', 'notification', 'transactionid', 'contactName'];
      this.propertyDataSource.options.push({
        name: this.translateService.instant(`filter-by-interfax-outbox-properties.select-property`),
        value: ''
      });
      for (const property of properties) {
        this.propertyDataSource.options.push({
          name: this.translateService.instant(`filter-by-interfax-outbox-properties.${property}`),
          value: property
        });
      }
      this.propertyDataSource.options.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
    };
    this.onPropertyChanged = property => {
      this.property = property;
      this.onFieldChanged();
    };
    this.onContainsChanged = contains => {
      this.contains = contains;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.setFilterValue();
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(this.fireFieldChanged, 250);
    };
    this.fireFieldChanged = () => {
      if (this.lastFilterValue !== this.filter.value) {
        this.selected.emit(this.filter.value);
        this.lastFilterValue = this.filter.value;
      }
    };
    this.setFilterValue = () => {
      this.filter.value = this.property ? `${this.property}:${this.contains}` : '';
    };
    this.createFields = () => {
      this.fieldProperty = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: this.propertyDataSource,
        smallLabel: this.translateService.instant('filter.property')
      });
      this.fieldContains = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: '',
        placeholder: '',
        required: false,
        searchable: true
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.createPropertyDataSource();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByInterfaxOutboxPropertiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxOutboxPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByInterfaxOutboxPropertiesComponent,
      selectors: [["app-filter-by-interfax-outbox-properties"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "filter-by-interfax-outbox-properties", "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "field", "value", "disabled", "valueChange", "fieldChanged", "return", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "return", "field", "value", "disabled"]],
      template: function FilterByInterfaxOutboxPropertiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByInterfaxOutboxPropertiesComponent_app_field_1_Template, 1, 2, "app-field", 1)(2, FilterByInterfaxOutboxPropertiesComponent_app_field_2_Template, 1, 3, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldProperty);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldContains);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 49891:
/*!*****************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-services/filter-by-interfax-services.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxServicesComponent: () => (/* binding */ FilterByInterfaxServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);




class FilterByInterfaxServicesComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = [];
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.filter.options.map(option => ({
      name: option.key,
      value: option.value
    }));
  }
  static {
    this.ɵfac = function FilterByInterfaxServicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxServicesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByInterfaxServicesComponent,
      selectors: [["app-filter-by-interfax-services"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByInterfaxServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-filter-by-list-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByInterfaxServicesComponent_Template_app_filter_by_list_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByListPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 88407:
/*!*************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-status/filter-by-interfax-status.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxStatusComponent: () => (/* binding */ FilterByInterfaxStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByInterfaxStatusComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByInterfaxStatusComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.status, $event) || (ctx_r1.status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function FilterByInterfaxStatusComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onStatusChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldStatuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.status);
  }
}
class FilterByInterfaxStatusComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.status = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue('*');
    this.setValue = val => void (this.status = this.filter.value = val);
    this.onStatusChanged = status => {
      if (this.filter.value == status) return;
      this.filter.value = status;
      this.selected.next(this.filter.value);
    };
    this.createFields = () => {
      const statusOptions = [];
      this.addStatus(statusOptions, '*');
      this.addStatus(statusOptions, 'ok');
      this.addStatus(statusOptions, 'error');
      this.addStatus(statusOptions, 'inprocess');
      this.addStatus(statusOptions, 'error-quota');
      this.fieldStatuses = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(statusOptions),
        smallLabel: this.translateService.instant('filter.transaction-status')
      });
    };
    this.addStatus = (statusOptions, value) => {
      const text = this.translateService.instant(`filter-by-interfax-status.${value}`);
      statusOptions.push({
        name: text,
        value: value
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByInterfaxStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByInterfaxStatusComponent,
      selectors: [["app-filter-by-interfax-status"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-interfax-status", "d-flex"], [3, "field", "value", "valueChange", 4, "ngIf"], [3, "valueChange", "field", "value"]],
      template: function FilterByInterfaxStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByInterfaxStatusComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldStatuses);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 93919:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-interfax-transaction-status/filter-by-interfax-transaction-status.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxTransactionStatusComponent: () => (/* binding */ FilterByInterfaxTransactionStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByInterfaxTransactionStatusComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByInterfaxTransactionStatusComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.status, $event) || (ctx_r1.status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function FilterByInterfaxTransactionStatusComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onStatusChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldTransactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.status);
  }
}
class FilterByInterfaxTransactionStatusComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService) {
    super();
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.status = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue('*');
    this.setValue = val => void (this.status = this.filter.value = val);
    this.onStatusChanged = status => {
      if (this.filter.value == status) return;
      this.filter.value = status;
      this.selected.next(this.filter.value);
    };
    this.createFields = () => {
      const statusOptions = [];
      this.addStatus(statusOptions, '*');
      this.addStatus(statusOptions, 'open');
      this.fieldTransactionStatus = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(statusOptions),
        smallLabel: this.translateService.instant('filter.transaction-status')
      });
    };
    this.addStatus = (statusOptions, value) => {
      const text = this.translateService.instant(`filter-by-interfax-transaction-status.${value}`);
      statusOptions.push({
        name: text,
        value: value
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByInterfaxTransactionStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxTransactionStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByInterfaxTransactionStatusComponent,
      selectors: [["app-filter-by-interfax-transaction-status"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-interfax-transaction-status", "d-flex"], [3, "field", "value", "valueChange", 4, "ngIf"], [3, "valueChange", "field", "value"]],
      template: function FilterByInterfaxTransactionStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByInterfaxTransactionStatusComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldTransactionStatus);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 17943:
/*!*************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-log-entry/filter-by-log-entry.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByLogEntryComponent: () => (/* binding */ FilterByLogEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-text-property/filter-by-text-property.component */ 6343);




class FilterByLogEntryComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterChanged = value => {
      this.selected.emit(value);
    };
  }
  static {
    this.ɵfac = function FilterByLogEntryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByLogEntryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByLogEntryComponent,
      selectors: [["app-filter-by-log-entry"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 2,
      consts: [[3, "selected", "filter", "layoutVertically"]],
      template: function FilterByLogEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "filter-by-text-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByLogEntryComponent_Template_filter_by_text_property_selected_0_listener($event) {
            return ctx.onFilterChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically);
        }
      },
      dependencies: [_filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByTextPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 75355:
/*!*****************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-metadata-property/filter-by-metadata-property.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByMetaDataPropertyComponent: () => (/* binding */ FilterByMetaDataPropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-property/filter-by-property.component */ 39317);




const _c0 = () => ["Name", "Label"];
class FilterByMetaDataPropertyComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterSelected = value => this.selected.emit(value);
  }
  static {
    this.ɵfac = function FilterByMetaDataPropertyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByMetaDataPropertyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByMetaDataPropertyComponent,
      selectors: [["app-filter-by-metadata-property"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 7,
      consts: [[3, "selected", "filter", "layoutVertically", "properties", "emptyValueDisplayName", "smallLabel", "translationPrefix"]],
      template: function FilterByMetaDataPropertyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-filter-by-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByMetaDataPropertyComponent_Template_app_filter_by_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("properties", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("emptyValueDisplayName", "none")("smallLabel", "filter-by")("translationPrefix", "filter-by-metadata-property");
        }
      },
      dependencies: [_filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByPropertyComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 10245:
/*!*******************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-metadata-reference/filter-by-metadata-reference.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByMetaDataReferenceComponent: () => (/* binding */ FilterByMetaDataReferenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _core_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/log */ 46415);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);











class FilterByMetaDataReferenceComponent {
  constructor(hydraApi, translate, toastr) {
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.toastr = toastr;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.options = [];
    this.onWorkflowsLoaded = workflows => {
      this.options = workflows.map(w => {
        return {
          name: w.name,
          value: w.id
        };
      });
      this.options.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      this.options.unshift({
        name: this.translate.instant('filter.filter-by-metadata-reference.unreferenced'),
        value: 'Unreferenced'
      });
      this.options.unshift({
        name: this.translate.instant('filter.filter-by-metadata-reference.referenced'),
        value: 'Referenced'
      });
      this.options.unshift({
        name: this.translate.instant('filter.filter-by-metadata-reference.all'),
        value: ''
      });
    };
    this.onWorkflowsLoadFailed = err => {
      this.toastr.error(this.translate.instant('filter.filter-by-metadata-reference.items-load-failed'));
      _core_log__WEBPACK_IMPORTED_MODULE_0__.Log.error('FilterByMetaDataReferenceComponent Failed to load workflows', err);
    };
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options.unshift({
      name: this.translate.instant('filter.filter-by-metadata-reference.all'),
      value: ''
    });
    this.hydraApi.getWorkflows(this.onWorkflowsLoaded, this.onWorkflowsLoadFailed);
  }
  static {
    this.ɵfac = function FilterByMetaDataReferenceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByMetaDataReferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByMetaDataReferenceComponent,
      selectors: [["app-filter-by-metadata-reference"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByMetaDataReferenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-filter-by-list-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function FilterByMetaDataReferenceComponent_Template_app_filter_by_list_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", "filter.filter-by-metadata-reference.label")("smallLabel", "filter.filter-by-metadata-reference.label");
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_3__.FilterByListPropertyComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 34587:
/*!*********************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-metadata-type/filter-by-metadata-type.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByMetaDataTypeComponent: () => (/* binding */ FilterByMetaDataTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _app_blocks_core_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/blocks/core/log */ 46415);
/* harmony import */ var _app_views_admin_metadata_admin_metadata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/views/admin-metadata/admin-metadata.component */ 66089);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);












class FilterByMetaDataTypeComponent {
  constructor(translate, toastr, userStateService) {
    this.translate = translate;
    this.toastr = toastr;
    this.userStateService = userStateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.options = [];
    this.onFieldTypesLoaded = items => {
      items.forEach(x => this.options.push({
        name: x.name,
        value: x.value
      }));
    };
    this.onFieldTypesLoadFailed = err => {
      this.toastr.error(this.translate.instant('filter-by-metadata-type.items-load-failed'));
      _app_blocks_core_log__WEBPACK_IMPORTED_MODULE_0__.Log.error('filter-by-metadata-type.items-load-failed', err);
    };
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options.push({
      name: this.translate.instant(`filter.filter-by-metadata-type.none`),
      value: ''
    });
    new _app_views_admin_metadata_admin_metadata_component__WEBPACK_IMPORTED_MODULE_1__.FieldTypesDataSource(this.translate, this.userStateService).getItems('', '', this.onFieldTypesLoaded, this.onFieldTypesLoadFailed);
  }
  static {
    this.ɵfac = function FilterByMetaDataTypeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByMetaDataTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilterByMetaDataTypeComponent,
      selectors: [["app-filter-by-metadata-type"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByMetaDataTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-filter-by-list-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selected", function FilterByMetaDataTypeComponent_Template_app_filter_by_list_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", "filter.filter-by-metadata-type.metadata-type")("smallLabel", "filter.filter-by-metadata-type.metadata-type");
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_4__.FilterByListPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 58333:
/*!***********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-metadata/filter-by-metadata.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByMetadataComponent: () => (/* binding */ FilterByMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);


















function FilterByMetadataComponent_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function FilterByMetadataComponent_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.metaDataId, $event) || (ctx_r1.metaDataId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function FilterByMetadataComponent_app_field_2_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onMetaDataChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldMetaData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.metaDataId);
  }
}
function FilterByMetadataComponent_app_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function FilterByMetadataComponent_app_field_4_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.contains, $event) || (ctx_r1.contains = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function FilterByMetadataComponent_app_field_4_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    })("return", function FilterByMetadataComponent_app_field_4_Template_app_field_return_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldContains);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.metaDataId);
  }
}
class FilterByMetadataComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_4__.FilterBaseComponent {
  constructor(translateService, userStateService, hydraApi, route, toast) {
    super();
    this.translateService = translateService;
    this.userStateService = userStateService;
    this.hydraApi = hydraApi;
    this.route = route;
    this.toast = toast;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.metaDataId = '';
    this.contains = '';
    this.timer = null;
    this.metaDataDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.dataFieldsLoadFailed = err => {
      this.toast.error(this.translateService.instant('export-metadata.data-fields-load-failed'));
    };
    this.prepareMetaData = metaData => {
      metaData.filter(md => md.type !== shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.LineItems).forEach(md => {
        this.metaDataDataSource.options.push({
          name: md.label.trim(),
          value: md.name.trim()
        });
      });
      this.metaDataDataSource.options.unshift({
        name: this.translateService.instant('filter.filter-by-metadata-none'),
        value: ''
      });
      this.addWorkItemIdToSearch();
      this.metaDataDataSource.options.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      this.metaDataDataSource.updateOptions(this.metaDataDataSource.options);
      this.metaDataId = '';
    };
    this.clearFilter = () => this.setValue(':');
    this.setValue = val => {
      const parts = this.getFilterParts(val);
      if (parts.length < 2) return;
      this.metaDataId = parts[0];
      this.contains = parts[1];
      this.setFilterValue();
    };
    this.addWorkItemIdToSearch = () => {
      this.metaDataDataSource.options.push({
        name: this.translateService.instant('filter.filter-by-workitemid'),
        value: '_id'
      });
    };
    this.onMetaDataChanged = mid => {
      this.metaDataId = mid;
      this.onFieldChanged();
    };
    this.onContainsChanged = contains => {
      this.contains = contains;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.setFilterValue();
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(this.fireFieldChanged, 250);
    };
    this.fireFieldChanged = () => {
      if (this.lastFilterValue !== this.filter.value) {
        this.selected.emit(this.filter.value);
        this.lastFilterValue = this.filter.value;
      }
    };
    this.setFilterValue = () => {
      this.filter.value = this.metaDataId ? `${this.metaDataId}:${this.contains}` : '';
    };
    this.createFields = () => {
      this.fieldMetaData = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: this.metaDataDataSource
      });
      this.fieldContains = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: '',
        placeholder: '',
        required: false
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.subscriptions.add(this.route.params.subscribe(params => {
      if (this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.BAMBA_ADMIN) && params.folder.indexOf('@') != -1) {
        this.hydraApi.getMetaDataDefinitionsByTenantId(params.folder.split('@')[1], this.prepareMetaData, this.dataFieldsLoadFailed);
      } else {
        this.prepareMetaData(this.userStateService.user.metaData);
      }
    }));
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByMetadataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FilterByMetadataComponent,
      selectors: [["app-filter-by-metadata"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "filter-by-metadata", "d-flex"], [1, "metadata-filter-dropdown-width"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "field", "value", "disabled", "valueChange", "fieldChanged", "return", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "return", "field", "value", "disabled"]],
      template: function FilterByMetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FilterByMetadataComponent_app_field_2_Template, 1, 2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FilterByMetadataComponent_app_field_4_Template, 1, 3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fieldMetaData);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fieldContains);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent],
      styles: [".filter-by-metadata .metadata-filter-dropdown-width {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LW1ldGFkYXRhL2ZpbHRlci1ieS1tZXRhZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItYnktbWV0YWRhdGEge1xyXG4gIC5tZXRhZGF0YS1maWx0ZXItZHJvcGRvd24td2lkdGgge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 11881:
/*!***********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-olc-date/filter-by-olc-date.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByOLCDateComponent: () => (/* binding */ FilterByOLCDateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 92318);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _filter_by_date_range_filter_by_date_range_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-by-date-range/filter-by-date-range.component */ 53191);







class FilterByOLCDateComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onFilterChanged = value => {
      if (value) value = value.split(':').map(d => this.convertDateToUTc(d)).join(';');
      this.selected.emit(value);
    };
  }
  ngOnChanges(changes) {
    if (changes.filter) {
      this.filter.label = this.translateService.instant(this.filter.label);
    }
  }
  convertDateToUTc(date) {
    const localDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(date, 'YYYY-MM-DD').startOf('day');
    return moment__WEBPACK_IMPORTED_MODULE_0___default().utc(localDate).format('YYYY-MM-DDTHH:mm:ss[Z]');
  }
  static {
    this.ɵfac = function FilterByOLCDateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByOLCDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FilterByOLCDateComponent,
      selectors: [["app-filter-by-olc-date"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 2,
      consts: [[3, "selected", "filter", "layoutVertically"]],
      template: function FilterByOLCDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-filter-by-date-range", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function FilterByOLCDateComponent_Template_app_filter_by_date_range_selected_0_listener($event) {
            return ctx.onFilterChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically);
        }
      },
      dependencies: [_filter_by_date_range_filter_by_date_range_component__WEBPACK_IMPORTED_MODULE_2__.FilterByDateRangeComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 52103:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-olc-template-version-comment/filter-by-olc-template-version-comment.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByOLCTemplateVersionCommentComponent: () => (/* binding */ FilterByOLCTemplateVersionCommentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-text-property/filter-by-text-property.component */ 6343);




class FilterByOLCTemplateVersionCommentComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterChanged = value => {
      this.selected.emit(value);
    };
  }
  static {
    this.ɵfac = function FilterByOLCTemplateVersionCommentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByOLCTemplateVersionCommentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByOLCTemplateVersionCommentComponent,
      selectors: [["app-filter-by-olc-template-version-comment"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 4,
      consts: [[3, "selected", "filter", "layoutVertically", "label", "placeholder"]],
      template: function FilterByOLCTemplateVersionCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "filter-by-text-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByOLCTemplateVersionCommentComponent_Template_filter_by_text_property_selected_0_listener($event) {
            return ctx.onFilterChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("label", "admin-olc-templates-filters.version-comment")("placeholder", "admin-olc-templates-filters.version-comment-placeholder");
        }
      },
      dependencies: [_filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByTextPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 20343:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-olc-template-version-status/filter-by-olc-template-version-status.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByOLCTemplateVersionStatusComponent: () => (/* binding */ FilterByOLCTemplateVersionStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _app_blocks_core_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/blocks/core/log */ 46415);
/* harmony import */ var _views_admin_olc_models_filters_version_status_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../views/admin-olc/models/filters/version-status-data-source */ 37703);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);










class FilterByOLCTemplateVersionStatusComponent {
  constructor(translate, toastr) {
    this.translate = translate;
    this.toastr = toastr;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.options = [];
    this.onVersionStatusesLoaded = items => {
      this.options.push({
        name: this.translate.instant(`admin-olc-filters.all`),
        value: ''
      });
      if (this.filter.id.includes('Approvals')) {
        items = items.filter(x => x.value === '1' || x.value === '2' || x.value === '3');
      }
      if (this.filter.id.includes('Production')) {
        items = items.filter(x => x.value === '4' || x.value === '5' || x.value === '6');
      }
      items.forEach(x => this.options.push({
        name: x.name,
        value: x.value
      }));
    };
    this.onVersionStatusesLoadFailed = err => {
      this.toastr.error(this.translate.instant('admin-olc-templates-filters.statuses-load-failed'));
      _app_blocks_core_log__WEBPACK_IMPORTED_MODULE_0__.Log.error('FilterByOLCTemplateVersionStatusComponent: Failed to load version statuses', err);
    };
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    new _views_admin_olc_models_filters_version_status_data_source__WEBPACK_IMPORTED_MODULE_1__.VersionStatusDataSource(this.translate).getItems('', '', this.onVersionStatusesLoaded, this.onVersionStatusesLoadFailed);
  }
  static {
    this.ɵfac = function FilterByOLCTemplateVersionStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByOLCTemplateVersionStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByOLCTemplateVersionStatusComponent,
      selectors: [["app-filter-by-olc-template-version-status"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByOLCTemplateVersionStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-filter-by-list-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function FilterByOLCTemplateVersionStatusComponent_Template_app_filter_by_list_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", "admin-olc-templates-filters.version-status")("smallLabel", "admin-olc-templates-filters.version-status");
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_3__.FilterByListPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 42487:
/*!***********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-olc-user/filter-by-olc-user.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByOLCUserComponent: () => (/* binding */ FilterByOLCUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _core_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/log */ 46415);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);












function FilterByOLCUserComponent_app_filter_by_list_property_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-filter-by-list-property", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selected", function FilterByOLCUserComponent_app_filter_by_list_property_0_Template_app_filter_by_list_property_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onFilterSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically)("options", ctx_r1.options)("label", ctx_r1.filter.label)("smallLabel", ctx_r1.filter.label);
  }
}
class FilterByOLCUserComponent {
  constructor(hydraApi, translate, toastr) {
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.toastr = toastr;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.options = [];
    this.onUsersLoaded = users => {
      const usersOptions = users.map(u => {
        return {
          name: u.name,
          value: u.id
        };
      });
      usersOptions.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      this.options = [{
        name: this.translate.instant('admin-olc-filters.all'),
        value: ''
      }, ...usersOptions];
    };
    this.onUsersLoadFailed = err => {
      this.toastr.error(this.translate.instant('admin-olc-filters.users-load-failed'));
      _core_log__WEBPACK_IMPORTED_MODULE_0__.Log.error('FilterByOLCTemplateVersionCreatorUserComponent: Failed to load users', err);
    };
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.hydraApi.getUsers(this.onUsersLoaded, this.onUsersLoadFailed);
  }
  static {
    this.ɵfac = function FilterByOLCUserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByOLCUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByOLCUserComponent,
      selectors: [["app-filter-by-olc-user"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "filter", "layoutVertically", "options", "label", "smallLabel", "selected", 4, "ngIf"], [3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByOLCUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FilterByOLCUserComponent_app_filter_by_list_property_0_Template, 1, 5, "app-filter-by-list-property", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.options.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_3__.FilterByListPropertyComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 53391:
/*!*************************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-one-drive-query/filter-by-one-drive-query.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByOneDriveQueryComponent: () => (/* binding */ FilterByOneDriveQueryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-text-property/filter-by-text-property.component */ 6343);




class FilterByOneDriveQueryComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterChanged = value => {
      this.selected.emit(value);
    };
  }
  static {
    this.ɵfac = function FilterByOneDriveQueryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByOneDriveQueryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByOneDriveQueryComponent,
      selectors: [["app-filter-by-one-drive-query"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 3,
      consts: [[3, "selected", "filter", "layoutVertically", "label"]],
      template: function FilterByOneDriveQueryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "filter-by-text-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByOneDriveQueryComponent_Template_filter_by_text_property_selected_0_listener($event) {
            return ctx.onFilterChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("label", "filter.filter-by-one-drive-query");
        }
      },
      dependencies: [_filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByTextPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 54999:
/*!*********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-options/filter-by-options.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByOptionsComponent: () => (/* binding */ FilterByOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);




class FilterByOptionsComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = [];
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.filter.options.map(option => ({
      name: option.key,
      value: option.value
    }));
  }
  static {
    this.ɵfac = function FilterByOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByOptionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByOptionsComponent,
      selectors: [["app-filter-by-options"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-filter-by-list-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByOptionsComponent_Template_app_filter_by_list_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByListPropertyComponent],
      styles: [".filter-by-options {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LW9wdGlvbnMvZmlsdGVyLWJ5LW9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWJ5LW9wdGlvbnMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 61031:
/*!*****************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-owner/filter-by-owner.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByOwnerComponent: () => (/* binding */ FilterByOwnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/log */ 46415);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);



















class FilterByOwnerComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_5__.FilterBaseComponent {
  constructor(translate, hydraApi, delay, route, toast, userState) {
    super();
    this.translate = translate;
    this.hydraApi = hydraApi;
    this.delay = delay;
    this.route = route;
    this.toast = toast;
    this.userState = userState;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.value = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.clearFilter = () => {
      this.setValue('');
    };
    this.setValue = val => {
      this.filter.value = this.value = val;
    };
    this.usersLoaded = users => {
      const items = users.map(u => {
        return {
          name: u.name,
          value: u.email
        };
      });
      items.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      items.unshift({
        name: this.translate.instant('filter.filter-by-user-none'),
        value: ''
      });
      this.usersDataSource.updateOptions(items);
      this.delay.execute(() => {
        this.value = this.filter.value;
      }, 5);
    };
    this.usersLoadFailed = err => {
      _core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('FilterByOwnerComponent.usersLoadFailed', err);
      this.toast.error(this.translate.instant('filter.users-load-failed'));
    };
    this.onFieldChanged = value => {
      this.filter.value = value;
      this.selected.emit(value);
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.usersDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.fieldUsers = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: '',
      placeholder: '',
      required: false,
      datasource: this.usersDataSource
    });
    this.subscriptions.add(this.route.params.subscribe(params => {
      if (this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.BAMBA_ADMIN) && params.folder.indexOf('@') != -1) {
        this.hydraApi.getUsersByTenantId(params.folder.split('@')[1], this.usersLoaded, this.usersLoadFailed);
      } else {
        this.hydraApi.getUsers(this.usersLoaded, this.usersLoadFailed);
      }
    }));
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByOwnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByOwnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FilterByOwnerComponent,
      selectors: [["app-filter-by-owner"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 4,
      consts: [[1, "filter-by-owner", "d-flex"], [3, "valueChange", "fieldChanged", "field", "value"]],
      template: function FilterByOwnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function FilterByOwnerComponent_Template_app_field_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fieldChanged", function FilterByOwnerComponent_Template_app_field_fieldChanged_1_listener($event) {
            return ctx.onFieldChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx.fieldUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx.value);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__.FieldComponent],
      styles: [".filter-by-owner {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LW93bmVyL2ZpbHRlci1ieS1vd25lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItYnktb3duZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 39317:
/*!***********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-property/filter-by-property.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByPropertyComponent: () => (/* binding */ FilterByPropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByPropertyComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByPropertyComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.property, $event) || (ctx_r1.property = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByPropertyComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPropertyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.property);
  }
}
function FilterByPropertyComponent_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByPropertyComponent_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contains, $event) || (ctx_r1.contains = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByPropertyComponent_app_field_2_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    })("return", function FilterByPropertyComponent_app_field_2_Template_app_field_return_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onContainsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldContains);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.property)("emitDistinctAndDebouncedValues", true);
  }
}
class FilterByPropertyComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translateService, cdk) {
    super();
    this.translateService = translateService;
    this.cdk = cdk;
    this.properties = [];
    this.emptyValueDisplayName = '';
    this.translationPrefix = '';
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.property = '';
    this.contains = '';
    this.propertyDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue(':');
    this.setValue = val => {
      const parts = this.getFilterParts(val);
      if (parts.length < 2) return;
      this.property = parts[0];
      this.contains = parts[1];
      this.cdk.detectChanges();
      this.setFilterValue();
    };
    this.onPropertyChanged = property => {
      this.property = property;
      this.onFieldChanged();
    };
    this.onContainsChanged = contains => {
      this.contains = contains;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.setFilterValue();
      this.selected.emit(this.filter.value);
    };
    this.setFilterValue = () => {
      this.filter.value = this.property ? `${this.property}:${this.contains}` : '';
    };
    this.createFields = () => {
      this.fieldProperty = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        smallLabel: this.smallLabel ? this.translateService.instant(`filter.${this.translationPrefix}.${this.smallLabel}`) : '',
        placeholder: '',
        required: false,
        datasource: this.propertyDataSource
      });
      this.fieldContains = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: '',
        placeholder: '',
        required: false
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    if (this.emptyValueDisplayName != '') {
      this.propertyDataSource.options.push({
        name: this.translateService.instant(`filter.${this.translationPrefix}.${this.emptyValueDisplayName}`),
        value: ''
      });
    }
    this.properties.forEach(cp => {
      this.propertyDataSource.options.push({
        name: this.translateService.instant(`filter.${this.translationPrefix}.${cp.toLowerCase()}`),
        value: cp
      });
    });
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByPropertyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByPropertyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByPropertyComponent,
      selectors: [["app-filter-by-property"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically",
        properties: "properties",
        emptyValueDisplayName: "emptyValueDisplayName",
        translationPrefix: "translationPrefix",
        smallLabel: "smallLabel"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "filter-by-property", "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "field", "value", "disabled", "emitDistinctAndDebouncedValues", "valueChange", "fieldChanged", "return", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "return", "field", "value", "disabled", "emitDistinctAndDebouncedValues"]],
      template: function FilterByPropertyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByPropertyComponent_app_field_1_Template, 1, 2, "app-field", 1)(2, FilterByPropertyComponent_app_field_2_Template, 1, 4, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldProperty);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldContains);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 20535:
/*!***************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-recipients/filter-by-recipients.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByRecipientsComponent: () => (/* binding */ FilterByRecipientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-list-property/filter-by-list-property.component */ 78887);




class FilterByRecipientsComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = [];
    this.onFilterSelected = value => this.selected.emit(value);
  }
  ngOnInit() {
    this.options = this.filter.options.map(option => ({
      name: option.key,
      value: option.value
    }));
  }
  static {
    this.ɵfac = function FilterByRecipientsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByRecipientsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByRecipientsComponent,
      selectors: [["app-filter-by-recipients"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 2,
      vars: 5,
      consts: [[1, "filter-by-recipients"], [3, "selected", "filter", "layoutVertically", "options", "label", "smallLabel"]],
      template: function FilterByRecipientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-filter-by-list-property", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByRecipientsComponent_Template_app_filter_by_list_property_selected_1_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("options", ctx.options)("label", ctx.filter.label)("smallLabel", ctx.filter.label);
        }
      },
      dependencies: [_filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByListPropertyComponent],
      styles: [".filter-by-recipients[_ngcontent-%COMP%] {\n  width: 135px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LXJlY2lwaWVudHMvZmlsdGVyLWJ5LXJlY2lwaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWJ5LXJlY2lwaWVudHMge1xyXG4gIHdpZHRoOiAxMzVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 56507:
/*!*********************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-relative-date/filter-by-relative-date.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByRelativeDateComponent: () => (/* binding */ FilterByRelativeDateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);









class FilterByRelativeDateComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translate) {
    super();
    this.translate = translate;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.onFieldChanged = value => {
      this.selected.emit(value);
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    const selections = new Array();
    selections.push({
      name: this.translate.instant('filter.filter-by-date-submitted-none'),
      value: ''
    });
    selections.push({
      name: this.translate.instant('filter.filter-by-date-today'),
      value: 'today'
    });
    selections.push({
      name: this.translate.instant('filter.filter-by-date-yesterday'),
      value: 'yesterday'
    });
    selections.push({
      name: this.translate.instant('filter.filter-by-date-this-week'),
      value: 'this-week'
    });
    selections.push({
      name: this.translate.instant('filter.filter-by-date-last-week'),
      value: 'last-week'
    });
    selections.push({
      name: this.translate.instant('filter.filter-by-date-this-month'),
      value: 'this-month'
    });
    this.fieldDateSelection = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: '',
      placeholder: '',
      required: false,
      datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(selections)
    });
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByRelativeDateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByRelativeDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByRelativeDateComponent,
      selectors: [["app-filter-by-relative-date"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 4,
      consts: [[1, "filter-by-relative-date", "d-flex"], [3, "valueChange", "fieldChanged", "field", "value"]],
      template: function FilterByRelativeDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByRelativeDateComponent_Template_app_field_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.filter.value, $event) || (ctx.filter.value = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByRelativeDateComponent_Template_app_field_fieldChanged_1_listener($event) {
            return ctx.onFieldChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldDateSelection);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.filter.value);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: [".filter-by-relative-date {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LXJlbGF0aXZlLWRhdGUvZmlsdGVyLWJ5LXJlbGF0aXZlLWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWJ5LXJlbGF0aXZlLWRhdGUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 45639:
/*!*****************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-tenant-name/filter-by-tenant-name.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByTenantNameComponent: () => (/* binding */ FilterByTenantNameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-text-property/filter-by-text-property.component */ 6343);




class FilterByTenantNameComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterChanged = value => {
      this.selected.emit(value);
    };
  }
  static {
    this.ɵfac = function FilterByTenantNameComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByTenantNameComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByTenantNameComponent,
      selectors: [["app-filter-by-tenant-name"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 3,
      consts: [[3, "selected", "filter", "layoutVertically", "label"]],
      template: function FilterByTenantNameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "filter-by-text-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByTenantNameComponent_Template_filter_by_text_property_selected_0_listener($event) {
            return ctx.onFilterChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("label", "filter.filter-by-tenant-name");
        }
      },
      dependencies: [_filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByTextPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 62359:
/*!*******************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-tenant/filter-by-tenant.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByTenantComponent: () => (/* binding */ FilterByTenantComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/log */ 46415);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);














function FilterByTenantComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function FilterByTenantComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.tenantId, $event) || (ctx_r1.tenantId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function FilterByTenantComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onTenantChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldTenants);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.tenantId);
  }
}
class FilterByTenantComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_4__.FilterBaseComponent {
  constructor(hydraApi, translate, delay) {
    super();
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.delay = delay;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.tenantId = '';
    this.tenantsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.setValue = val => void (this.tenantId = this.filter.value = val);
    this.onTenantsLoaded = tenants => {
      this.tenants = tenants;
      const items = tenants.map(t => {
        return {
          name: t.name,
          value: t.id
        };
      });
      items.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      items.unshift({
        name: this.translate.instant('filter.filter-by-tenant-none'),
        value: '000000000000000000000000'
      });
      items.unshift({
        name: this.translate.instant('filter.filter-by-tenant-all'),
        value: ''
      });
      this.tenantsDataSource.updateOptions(items);
      const value = this.filter.value;
      if (value) {
        this.delay.execute(() => {
          this.tenantId = value;
        }, 5);
      }
    };
    this.createFields = () => {
      this.fieldTenants = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: this.tenantsDataSource
      });
    };
    this.onTenantChanged = tId => {
      this.tenantId = tId;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.filter.value = this.tenantId;
      this.selected.emit(this.filter.value);
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.tenantsDataSource.options.unshift({
      name: this.translate.instant('filter.filter-by-tenant-all'),
      value: ''
    });
    this.createFields();
    this.hydraApi.getTenants(this.onTenantsLoaded, err => _core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('FilterByTenantComponent Failed to load tenants', err));
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByTenantComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByTenantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FilterByTenantComponent,
      selectors: [["app-filter-by-tenant"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "d-flex"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"]],
      template: function FilterByTenantComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FilterByTenantComponent_app_field_1_Template, 1, 2, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fieldTenants);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6343:
/*!*********************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-text-property/filter-by-text-property.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByTextPropertyComponent: () => (/* binding */ FilterByTextPropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function FilterByTextPropertyComponent_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function FilterByTextPropertyComponent_app_field_1_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.property, $event) || (ctx_r1.property = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function FilterByTextPropertyComponent_app_field_1_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPropertyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("emitDistinctAndDebouncedValues", true);
  }
}
class FilterByTextPropertyComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_2__.FilterBaseComponent {
  constructor(translate) {
    super();
    this.translate = translate;
    this.property = '';
    this.label = '';
    this.placeholder = '';
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.clearFilter = () => this.setValue('');
    this.setValue = val => {
      this.property = val;
      this.onPropertyChanged(val);
    };
    this.onPropertyChanged = property => {
      this.filter.value = property;
      this.selected.emit(this.filter.value);
    };
    this.createFields = () => {
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: '',
        smallLabel: this.label ? this.translate.instant(this.label) : '',
        placeholder: this.placeholder ? this.translate.instant(this.placeholder) : '',
        required: false
      });
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.createFields();
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  static {
    this.ɵfac = function FilterByTextPropertyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByTextPropertyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FilterByTextPropertyComponent,
      selectors: [["filter-by-text-property"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically",
        property: "property",
        label: "label",
        placeholder: "placeholder"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "filter-by-text-property", "d-flex"], [3, "field", "value", "emitDistinctAndDebouncedValues", "valueChange", "fieldChanged", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value", "emitDistinctAndDebouncedValues"]],
      template: function FilterByTextPropertyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilterByTextPropertyComponent_app_field_1_Template, 1, 3, "app-field", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fieldName);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 52111:
/*!*********************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-user-property/filter-by-user-property.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByUserPropertyComponent: () => (/* binding */ FilterByUserPropertyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-property/filter-by-property.component */ 39317);




const _c0 = () => ["Name", "Email"];
class FilterByUserPropertyComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterSelected = value => this.selected.emit(value);
  }
  static {
    this.ɵfac = function FilterByUserPropertyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByUserPropertyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByUserPropertyComponent,
      selectors: [["app-filter-by-user-property"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 6,
      consts: [[3, "selected", "filter", "layoutVertically", "properties", "emptyValueDisplayName", "translationPrefix"]],
      template: function FilterByUserPropertyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-filter-by-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByUserPropertyComponent_Template_app_filter_by_property_selected_0_listener($event) {
            return ctx.onFilterSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("properties", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))("emptyValueDisplayName", "none")("translationPrefix", "filter-by-user-property");
        }
      },
      dependencies: [_filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByPropertyComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 56723:
/*!*********************************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-workflow-name/filter-by-workflow-name.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByWorkflowNameComponent: () => (/* binding */ FilterByWorkflowNameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-text-property/filter-by-text-property.component */ 6343);




class FilterByWorkflowNameComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFilterChanged = value => {
      this.selected.emit(value);
    };
  }
  static {
    this.ɵfac = function FilterByWorkflowNameComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByWorkflowNameComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterByWorkflowNameComponent,
      selectors: [["app-filter-by-workflow-name"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 4,
      consts: [[3, "selected", "filter", "layoutVertically", "label", "placeholder"]],
      template: function FilterByWorkflowNameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "filter-by-text-property", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function FilterByWorkflowNameComponent_Template_filter_by_text_property_selected_0_listener($event) {
            return ctx.onFilterChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", ctx.filter)("layoutVertically", ctx.layoutVertically)("label", "filter.filter-by-workflow-name")("placeholder", "filter.filter-by-workflow-name-placeholder");
        }
      },
      dependencies: [_filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_1__.FilterByTextPropertyComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 61729:
/*!***********************************************************************************!*\
  !*** ./src/app/blocks/filters/filter-by-workflow/filter-by-workflow.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByWorkflowComponent: () => (/* binding */ FilterByWorkflowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/log */ 46415);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hydra-api.service */ 11070);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _filter_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter-base.component */ 75600);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);




















function FilterByWorkflowComponent_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function FilterByWorkflowComponent_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.workflowId, $event) || (ctx_r1.workflowId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fieldChanged", function FilterByWorkflowComponent_app_field_2_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onWorkflowChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.fieldWorkflows);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r1.workflowId);
  }
}
function FilterByWorkflowComponent_app_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function FilterByWorkflowComponent_app_field_4_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.workflowStepId, $event) || (ctx_r1.workflowStepId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fieldChanged", function FilterByWorkflowComponent_app_field_4_Template_app_field_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onWorkflowStepChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.fieldSteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r1.workflowStepId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.workflows || !ctx_r1.workflows.length || !ctx_r1.workflowId);
  }
}
class FilterByWorkflowComponent extends _filter_base_component__WEBPACK_IMPORTED_MODULE_5__.FilterBaseComponent {
  constructor(hydraApi, translate, delay, route, toast, userState) {
    super();
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.delay = delay;
    this.route = route;
    this.toast = toast;
    this.userState = userState;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.workflowId = '';
    this.workflowStepId = '';
    this.workflowsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.workflowStepDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.clearFilter = () => this.setValue(':');
    this.setValue = val => {
      const parts = this.getFilterParts(val);
      if (parts.length < 2) return;
      this.workflowId = parts[0];
      this.workflowStepId = parts[1];
      this.setFilterValue();
    };
    this.onWorkflowsLoaded = workflows => {
      this.workflows = workflows;
      const items = workflows.map(w => {
        return {
          name: w.name,
          value: w.id
        };
      });
      items.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      items.unshift({
        name: this.translate.instant('filter.filter-by-workflow-none'),
        value: ''
      });
      this.workflowsDataSource.updateOptions(items);
      const parts = this.filter.value.split(':');
      if (parts && parts.length === 2) {
        this.delay.execute(() => {
          this.workflowId = parts[0];
          this.loadWorkflowSteps();
          this.workflowStepId = parts[1];
        }, 5);
      }
    };
    this.onWorkflowsLoadFailed = err => {
      _core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('FilterByWorkflowCompoent Failed to load workflows', err);
      this.toast.error(this.translate.instant('filter.workflows-load-failed'));
    };
    this.createFields = () => {
      this.fieldWorkflows = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: this.workflowsDataSource
      });
      this.fieldSteps = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: this.workflowStepDataSource
      });
    };
    this.onWorkflowChanged = wid => {
      this.workflowId = wid;
      this.workflowStepId = '';
      this.onFieldChanged();
      this.loadWorkflowSteps();
    };
    this.onWorkflowStepChanged = wsid => {
      this.workflowStepId = wsid;
      this.onFieldChanged();
    };
    this.onFieldChanged = () => {
      this.setFilterValue();
      this.selected.emit(this.filter.value);
    };
    this.setFilterValue = () => {
      this.filter.value = `${this.workflowId}:${this.workflowStepId}`;
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.workflowsDataSource.options.unshift({
      name: this.translate.instant('filter.filter-by-workflow-none'),
      value: ''
    });
    this.workflowStepDataSource.options.unshift({
      name: this.translate.instant('filter.filter-by-workflowstep-none'),
      value: ''
    });
    this.createFields();
    this.subscriptions.add(this.route.params.subscribe(params => {
      if (this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.BAMBA_ADMIN) && params.folder.indexOf('@') != -1) {
        this.hydraApi.getWorkflowsByTenantId(params.folder.split('@')[1], this.onWorkflowsLoaded, this.onWorkflowsLoadFailed);
      } else {
        this.hydraApi.getWorkflows(this.onWorkflowsLoaded, this.onWorkflowsLoadFailed);
      }
    }));
    this.initializeFilter();
    this.subscriptions.add(this.filter.clearFilter.subscribe(this.clearFilter));
  }
  loadWorkflowSteps() {
    const wf = this.workflows.find(wf => wf.id == this.workflowId);
    const steps = wf ? wf.workflowSteps.map(ws => {
      return {
        name: ws.name,
        value: ws.id
      };
    }) : [];
    steps.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
    steps.unshift({
      name: this.translate.instant('filter.filter-by-workflowstep-none'),
      value: ''
    });
    this.workflowStepDataSource.updateOptions(steps);
  }
  static {
    this.ɵfac = function FilterByWorkflowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByWorkflowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FilterByWorkflowComponent,
      selectors: [["app-filter-by-workflow"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically"
      },
      outputs: {
        selected: "selected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "filter-by-workflow", "d-flex"], [1, "workflow-filter-dropdown-width"], [3, "field", "value", "valueChange", "fieldChanged", 4, "ngIf"], [3, "field", "value", "disabled", "valueChange", "fieldChanged", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "field", "value", "disabled"]],
      template: function FilterByWorkflowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FilterByWorkflowComponent_app_field_2_Template, 1, 2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, FilterByWorkflowComponent_app_field_4_Template, 1, 3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("flex-column", ctx.layoutVertically);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fieldWorkflows);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fieldSteps);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__.FieldComponent],
      styles: [".filter-by-workflow .workflow-filter-dropdown-width {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZpbHRlcnMvZmlsdGVyLWJ5LXdvcmtmbG93L2ZpbHRlci1ieS13b3JrZmxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItYnktd29ya2Zsb3cge1xyXG4gIC53b3JrZmxvdy1maWx0ZXItZHJvcGRvd24td2lkdGgge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 39545:
/*!***********************************************************!*\
  !*** ./src/app/blocks/filters/filter/filter.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterComponent: () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/filter */ 78492);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _filter_by_relative_date_filter_by_relative_date_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-by-relative-date/filter-by-relative-date.component */ 56507);
/* harmony import */ var _filter_by_workflow_filter_by_workflow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-by-workflow/filter-by-workflow.component */ 61729);
/* harmony import */ var _filter_by_owner_filter_by_owner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-by-owner/filter-by-owner.component */ 61031);
/* harmony import */ var _filter_by_metadata_filter_by_metadata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-by-metadata/filter-by-metadata.component */ 58333);
/* harmony import */ var _filter_by_datasource_column_filter_by_datasource_column_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter-by-datasource-column/filter-by-datasource-column.component */ 58687);
/* harmony import */ var _filter_by_contact_property_filter_by_contact_property_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter-by-contact-property/filter-by-contact-property.component */ 89315);
/* harmony import */ var _filter_by_interfax_username_filter_by_interfax_username_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter-by-interfax-username/filter-by-interfax-username.component */ 6499);
/* harmony import */ var _filter_by_interfax_status_filter_by_interfax_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filter-by-interfax-status/filter-by-interfax-status.component */ 88407);
/* harmony import */ var _filter_by_interfax_services_filter_by_interfax_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../filter-by-interfax-services/filter-by-interfax-services.component */ 49891);
/* harmony import */ var _filter_by_interfax_outbox_properties_filter_by_interfax_outbox_properties_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../filter-by-interfax-outbox-properties/filter-by-interfax-outbox-properties.component */ 64441);
/* harmony import */ var _filter_by_interfax_inbox_properties_filter_by_interfax_inbox_properties_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../filter-by-interfax-inbox-properties/filter-by-interfax-inbox-properties.component */ 83239);
/* harmony import */ var _filter_by_device_column_filter_by_device_column_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../filter-by-device-column/filter-by-device-column.component */ 3615);
/* harmony import */ var _filter_by_date_range_filter_by_date_range_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../filter-by-date-range/filter-by-date-range.component */ 53191);
/* harmony import */ var _filter_by_interfax_transaction_status_filter_by_interfax_transaction_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../filter-by-interfax-transaction-status/filter-by-interfax-transaction-status.component */ 93919);
/* harmony import */ var _filter_by_interfax_date_selection_filter_by_interfax_date_selection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../filter-by-interfax-date-selection/filter-by-interfax-date-selection.component */ 60679);
/* harmony import */ var _filter_by_interfax_contactlist_type_filter_by_interfax_contactlist_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../filter-by-interfax-contactlist-type/filter-by-interfax-contactlist-type.component */ 53139);
/* harmony import */ var _filter_by_tenant_name_filter_by_tenant_name_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../filter-by-tenant-name/filter-by-tenant-name.component */ 45639);
/* harmony import */ var _filter_by_user_property_filter_by_user_property_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../filter-by-user-property/filter-by-user-property.component */ 52111);
/* harmony import */ var _filter_by_metadata_property_filter_by_metadata_property_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../filter-by-metadata-property/filter-by-metadata-property.component */ 75355);
/* harmony import */ var _filter_by_workflow_name_filter_by_workflow_name_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../filter-by-workflow-name/filter-by-workflow-name.component */ 56723);
/* harmony import */ var _filter_by_metadata_type_filter_by_metadata_type_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../filter-by-metadata-type/filter-by-metadata-type.component */ 34587);
/* harmony import */ var _filter_by_metadata_reference_filter_by_metadata_reference_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../filter-by-metadata-reference/filter-by-metadata-reference.component */ 10245);
/* harmony import */ var _filter_by_time_period_filter_by_time_period_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../filter-by-time-period/filter-by-time-period.component */ 90283);
/* harmony import */ var _filter_by_browser_filter_by_browser_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../filter-by-browser/filter-by-browser.component */ 54552);
/* harmony import */ var _filter_by_one_drive_query_filter_by_one_drive_query_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../filter-by-one-drive-query/filter-by-one-drive-query.component */ 53391);
/* harmony import */ var _filter_by_tenant_filter_by_tenant_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../filter-by-tenant/filter-by-tenant.component */ 62359);
/* harmony import */ var _filter_by_history_user_filter_by_history_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../filter-by-history-user/filter-by-history-user.component */ 15511);
/* harmony import */ var _filter_by_options_filter_by_options_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../filter-by-options/filter-by-options.component */ 54999);
/* harmony import */ var _filter_by_faxuser_faxnumber_filter_by_faxuser_faxnumber_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../filter-by-faxuser-faxnumber/filter-by-faxuser-faxnumber.component */ 85791);
/* harmony import */ var _filter_by_dwfhistory_components_filter_by_dwfhistory_components_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../filter-by-dwfhistory-components/filter-by-dwfhistory-components.component */ 17423);
/* harmony import */ var _filter_by_fax_user_username_filter_by_fax_user_username_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../filter-by-fax-user-username/filter-by-fax-user-username.component */ 41395);
/* harmony import */ var _filter_by_environment_filter_by_environment_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../filter-by-environment/filter-by-environment.component */ 33447);
/* harmony import */ var _filter_by_grouping_filter_by_grouping_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../filter-by-grouping/filter-by-grouping.component */ 95269);
/* harmony import */ var _filter_by_checkbox_filter_by_checkbox_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../filter-by-checkbox/filter-by-checkbox.component */ 60941);
/* harmony import */ var _filter_by_olc_user_filter_by_olc_user_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../filter-by-olc-user/filter-by-olc-user.component */ 42487);
/* harmony import */ var _filter_by_olc_date_filter_by_olc_date_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../filter-by-olc-date/filter-by-olc-date.component */ 11881);
/* harmony import */ var _filter_by_olc_template_version_status_filter_by_olc_template_version_status_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../filter-by-olc-template-version-status/filter-by-olc-template-version-status.component */ 20343);
/* harmony import */ var _filter_by_olc_template_version_comment_filter_by_olc_template_version_comment_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../filter-by-olc-template-version-comment/filter-by-olc-template-version-comment.component */ 52103);
/* harmony import */ var _filter_by_log_entry_filter_by_log_entry_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../filter-by-log-entry/filter-by-log-entry.component */ 17943);
/* harmony import */ var _filter_by_interfax_inbox_shared_with_filter_by_interfax_inbox_shared_with_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../filter-by-interfax-inbox-shared-with/filter-by-interfax-inbox-shared-with.component */ 3925);
/* harmony import */ var _filter_by_cover_page_filter_by_cover_page_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../filter-by-cover-page/filter-by-cover-page.component */ 41833);
/* harmony import */ var _filter_by_documents_count_filter_by_documents_count_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../filter-by-documents-count/filter-by-documents-count.component */ 83791);
/* harmony import */ var _filter_by_audit_status_filter_by_audit_status_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../filter-by-audit-status/filter-by-audit-status.component */ 75335);
/* harmony import */ var _filter_by_recipients_filter_by_recipients_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../filter-by-recipients/filter-by-recipients.component */ 20535);
















































function FilterComponent_div_0_app_filter_by_relative_date_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-relative-date", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_relative_date_1_Template_app_filter_by_relative_date_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_workflow_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-workflow", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_workflow_2_Template_app_filter_by_workflow_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_tenant_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-tenant", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_tenant_3_Template_app_filter_by_tenant_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_options_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-options", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_options_4_Template_app_filter_by_options_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_log_entry_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-log-entry", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_log_entry_5_Template_app_filter_by_log_entry_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_owner_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-owner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_owner_6_Template_app_filter_by_owner_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_metadata_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-metadata", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_metadata_7_Template_app_filter_by_metadata_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_contact_property_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-contact-property", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_contact_property_8_Template_app_filter_by_contact_property_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_username_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-username", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_username_9_Template_app_filter_by_interfax_username_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_datasource_column_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-datasource-column", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_datasource_column_10_Template_app_filter_by_datasource_column_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_status_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-status", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_status_11_Template_app_filter_by_interfax_status_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_services_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-services", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_services_12_Template_app_filter_by_interfax_services_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_outbox_properties_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-outbox-properties", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_outbox_properties_13_Template_app_filter_by_interfax_outbox_properties_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_inbox_properties_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-inbox-properties", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_inbox_properties_14_Template_app_filter_by_interfax_inbox_properties_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_device_column_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-device-column", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_device_column_15_Template_app_filter_by_device_column_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_transaction_status_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-transaction-status", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_transaction_status_16_Template_app_filter_by_interfax_transaction_status_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_date_range_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-date-range", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_date_range_17_Template_app_filter_by_date_range_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_date_selection_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-date-selection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_date_selection_18_Template_app_filter_by_interfax_date_selection_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_contactlist_type_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-contactlist-type", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_contactlist_type_19_Template_app_filter_by_interfax_contactlist_type_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_tenant_name_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-tenant-name", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_tenant_name_20_Template_app_filter_by_tenant_name_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_user_property_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-user-property", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_user_property_21_Template_app_filter_by_user_property_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_metadata_property_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-metadata-property", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_metadata_property_22_Template_app_filter_by_metadata_property_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_workflow_name_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-workflow-name", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_workflow_name_23_Template_app_filter_by_workflow_name_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_metadata_type_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-metadata-type", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_metadata_type_24_Template_app_filter_by_metadata_type_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_metadata_reference_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-metadata-reference", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_metadata_reference_25_Template_app_filter_by_metadata_reference_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_time_period_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-time-period", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_time_period_26_Template_app_filter_by_time_period_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_browser_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-browser", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_browser_27_Template_app_filter_by_browser_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_cover_page_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-cover-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_cover_page_28_Template_app_filter_by_cover_page_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_documents_count_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-documents-count", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_documents_count_29_Template_app_filter_by_documents_count_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_audit_status_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-audit-status", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_audit_status_30_Template_app_filter_by_audit_status_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_recipients_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-recipients", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_recipients_31_Template_app_filter_by_recipients_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_one_drive_query_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-one-drive-query", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_one_drive_query_32_Template_app_filter_by_one_drive_query_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_history_user_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-history-user", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_history_user_33_Template_app_filter_by_history_user_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_fax_user_username_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-fax-user-username", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_fax_user_username_34_Template_app_filter_by_fax_user_username_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_faxuser_faxnumber_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-faxuser-faxnumber", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_faxuser_faxnumber_35_Template_app_filter_by_faxuser_faxnumber_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_dwfhistory_components_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-dwfhistory-components", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_dwfhistory_components_36_Template_app_filter_by_dwfhistory_components_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_environment_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-environment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_environment_37_Template_app_filter_by_environment_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_grouping_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-grouping", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_grouping_38_Template_app_filter_by_grouping_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_checkbox_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_checkbox_39_Template_app_filter_by_checkbox_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_olc_template_version_comment_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-olc-template-version-comment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_olc_template_version_comment_40_Template_app_filter_by_olc_template_version_comment_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_olc_user_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-olc-user", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_olc_user_41_Template_app_filter_by_olc_user_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_olc_template_version_status_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-olc-template-version-status", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_olc_template_version_status_42_Template_app_filter_by_olc_template_version_status_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_olc_date_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-olc-date", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_olc_date_43_Template_app_filter_by_olc_date_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_app_filter_by_interfax_inbox_shared_with_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "app-filter-by-interfax-inbox-shared-with", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵlistener"]("selected", function FilterComponent_div_0_app_filter_by_interfax_inbox_shared_with_44_Template_app_filter_by_interfax_inbox_shared_with_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵresetView"](ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("filter", ctx_r1.filter)("layoutVertically", ctx_r1.layoutVertically);
  }
}
function FilterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵtemplate"](1, FilterComponent_div_0_app_filter_by_relative_date_1_Template, 1, 2, "app-filter-by-relative-date", 2)(2, FilterComponent_div_0_app_filter_by_workflow_2_Template, 1, 2, "app-filter-by-workflow", 2)(3, FilterComponent_div_0_app_filter_by_tenant_3_Template, 1, 2, "app-filter-by-tenant", 2)(4, FilterComponent_div_0_app_filter_by_options_4_Template, 1, 2, "app-filter-by-options", 2)(5, FilterComponent_div_0_app_filter_by_log_entry_5_Template, 1, 2, "app-filter-by-log-entry", 2)(6, FilterComponent_div_0_app_filter_by_owner_6_Template, 1, 2, "app-filter-by-owner", 2)(7, FilterComponent_div_0_app_filter_by_metadata_7_Template, 1, 2, "app-filter-by-metadata", 2)(8, FilterComponent_div_0_app_filter_by_contact_property_8_Template, 1, 2, "app-filter-by-contact-property", 2)(9, FilterComponent_div_0_app_filter_by_interfax_username_9_Template, 1, 2, "app-filter-by-interfax-username", 2)(10, FilterComponent_div_0_app_filter_by_datasource_column_10_Template, 1, 2, "app-filter-by-datasource-column", 2)(11, FilterComponent_div_0_app_filter_by_interfax_status_11_Template, 1, 2, "app-filter-by-interfax-status", 2)(12, FilterComponent_div_0_app_filter_by_interfax_services_12_Template, 1, 2, "app-filter-by-interfax-services", 2)(13, FilterComponent_div_0_app_filter_by_interfax_outbox_properties_13_Template, 1, 2, "app-filter-by-interfax-outbox-properties", 2)(14, FilterComponent_div_0_app_filter_by_interfax_inbox_properties_14_Template, 1, 2, "app-filter-by-interfax-inbox-properties", 2)(15, FilterComponent_div_0_app_filter_by_device_column_15_Template, 1, 2, "app-filter-by-device-column", 2)(16, FilterComponent_div_0_app_filter_by_interfax_transaction_status_16_Template, 1, 2, "app-filter-by-interfax-transaction-status", 2)(17, FilterComponent_div_0_app_filter_by_date_range_17_Template, 1, 2, "app-filter-by-date-range", 2)(18, FilterComponent_div_0_app_filter_by_interfax_date_selection_18_Template, 1, 2, "app-filter-by-interfax-date-selection", 2)(19, FilterComponent_div_0_app_filter_by_interfax_contactlist_type_19_Template, 1, 2, "app-filter-by-interfax-contactlist-type", 2)(20, FilterComponent_div_0_app_filter_by_tenant_name_20_Template, 1, 2, "app-filter-by-tenant-name", 2)(21, FilterComponent_div_0_app_filter_by_user_property_21_Template, 1, 2, "app-filter-by-user-property", 2)(22, FilterComponent_div_0_app_filter_by_metadata_property_22_Template, 1, 2, "app-filter-by-metadata-property", 2)(23, FilterComponent_div_0_app_filter_by_workflow_name_23_Template, 1, 2, "app-filter-by-workflow-name", 2)(24, FilterComponent_div_0_app_filter_by_metadata_type_24_Template, 1, 2, "app-filter-by-metadata-type", 2)(25, FilterComponent_div_0_app_filter_by_metadata_reference_25_Template, 1, 2, "app-filter-by-metadata-reference", 2)(26, FilterComponent_div_0_app_filter_by_time_period_26_Template, 1, 2, "app-filter-by-time-period", 2)(27, FilterComponent_div_0_app_filter_by_browser_27_Template, 1, 2, "app-filter-by-browser", 2)(28, FilterComponent_div_0_app_filter_by_cover_page_28_Template, 1, 2, "app-filter-by-cover-page", 2)(29, FilterComponent_div_0_app_filter_by_documents_count_29_Template, 1, 2, "app-filter-by-documents-count", 2)(30, FilterComponent_div_0_app_filter_by_audit_status_30_Template, 1, 2, "app-filter-by-audit-status", 2)(31, FilterComponent_div_0_app_filter_by_recipients_31_Template, 1, 2, "app-filter-by-recipients", 2)(32, FilterComponent_div_0_app_filter_by_one_drive_query_32_Template, 1, 2, "app-filter-by-one-drive-query", 2)(33, FilterComponent_div_0_app_filter_by_history_user_33_Template, 1, 2, "app-filter-by-history-user", 2)(34, FilterComponent_div_0_app_filter_by_fax_user_username_34_Template, 1, 2, "app-filter-by-fax-user-username", 2)(35, FilterComponent_div_0_app_filter_by_faxuser_faxnumber_35_Template, 1, 2, "app-filter-by-faxuser-faxnumber", 2)(36, FilterComponent_div_0_app_filter_by_dwfhistory_components_36_Template, 1, 2, "app-filter-by-dwfhistory-components", 2)(37, FilterComponent_div_0_app_filter_by_environment_37_Template, 1, 2, "app-filter-by-environment", 2)(38, FilterComponent_div_0_app_filter_by_grouping_38_Template, 1, 2, "app-filter-by-grouping", 2)(39, FilterComponent_div_0_app_filter_by_checkbox_39_Template, 1, 2, "app-filter-by-checkbox", 2)(40, FilterComponent_div_0_app_filter_by_olc_template_version_comment_40_Template, 1, 2, "app-filter-by-olc-template-version-comment", 2)(41, FilterComponent_div_0_app_filter_by_olc_user_41_Template, 1, 2, "app-filter-by-olc-user", 2)(42, FilterComponent_div_0_app_filter_by_olc_template_version_status_42_Template, 1, 2, "app-filter-by-olc-template-version-status", 2)(43, FilterComponent_div_0_app_filter_by_olc_date_43_Template, 1, 2, "app-filter-by-olc-date", 2)(44, FilterComponent_div_0_app_filter_by_interfax_inbox_shared_with_44_Template, 1, 2, "app-filter-by-interfax-inbox-shared-with", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByRelativeDateComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByWorkflowComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByTenantComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByOptionsComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByLogEntryComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByOwnerComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByMetaDataComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByContactProperty");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXUsername");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByDataSourceColumnComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXServices");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXProperty");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXInboxProperty");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByDeviceColumnComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXTransactionStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByDateRangeComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXDateSelection");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXContactListType");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByTenantNameComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByUserPropertyComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByMetaDataPropertyComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByWorkflowNameComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByMetaDataTypeComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByMetaDataReferenceComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterChartRange");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByBrowser");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByCoverPage");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByDocumentsCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByAuditStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByRecipients");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByOneDriveQuery");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByHistoryUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByFaxUserUsername");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByFaxNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByDwfHistoryComponents");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByEnvironment");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByGrouping");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByCheckBox");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByOLCTemplateVersionCommentComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByOLCUserComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByOLCTemplateVersionStatusComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByOLCDateComponent");
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx_r1.filter.getComponent() === "FilterByInterFAXInboxSharedWith");
  }
}
class FilterComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_45__.EventEmitter();
    this.onFilter = event => {
      this.filter.value = event;
      this.selected.emit(event);
    };
  }
  ngOnDestroy() {
    if (this.keepValueOnDestroy) return;
    this.filter.value = this.filter.defaultValue ? this.filter.defaultValue : '';
  }
  static {
    this.ɵfac = function FilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineComponent"]({
      type: FilterComponent,
      selectors: [["app-filter"]],
      inputs: {
        filter: "filter",
        layoutVertically: "layoutVertically",
        keepValueOnDestroy: "keepValueOnDestroy"
      },
      outputs: {
        selected: "selected"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "filter", 4, "ngIf"], [1, "filter"], [3, "filter", "layoutVertically", "selected", 4, "ngIf"], [3, "selected", "filter", "layoutVertically"]],
      template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵtemplate"](0, FilterComponent_div_0_Template, 45, 44, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵproperty"]("ngIf", ctx.filter.hasUI);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_46__.NgIf, _filter_by_relative_date_filter_by_relative_date_component__WEBPACK_IMPORTED_MODULE_1__.FilterByRelativeDateComponent, _filter_by_workflow_filter_by_workflow_component__WEBPACK_IMPORTED_MODULE_2__.FilterByWorkflowComponent, _filter_by_owner_filter_by_owner_component__WEBPACK_IMPORTED_MODULE_3__.FilterByOwnerComponent, _filter_by_metadata_filter_by_metadata_component__WEBPACK_IMPORTED_MODULE_4__.FilterByMetadataComponent, _filter_by_datasource_column_filter_by_datasource_column_component__WEBPACK_IMPORTED_MODULE_5__.FilterByDataSourceColumnComponent, _filter_by_contact_property_filter_by_contact_property_component__WEBPACK_IMPORTED_MODULE_6__.FilterByContactPropertyComponent, _filter_by_interfax_username_filter_by_interfax_username_component__WEBPACK_IMPORTED_MODULE_7__.FilterByInterfaxUsernameComponent, _filter_by_interfax_status_filter_by_interfax_status_component__WEBPACK_IMPORTED_MODULE_8__.FilterByInterfaxStatusComponent, _filter_by_interfax_services_filter_by_interfax_services_component__WEBPACK_IMPORTED_MODULE_9__.FilterByInterfaxServicesComponent, _filter_by_interfax_outbox_properties_filter_by_interfax_outbox_properties_component__WEBPACK_IMPORTED_MODULE_10__.FilterByInterfaxOutboxPropertiesComponent, _filter_by_interfax_inbox_properties_filter_by_interfax_inbox_properties_component__WEBPACK_IMPORTED_MODULE_11__.FilterByInterfaxInboxPropertiesComponent, _filter_by_device_column_filter_by_device_column_component__WEBPACK_IMPORTED_MODULE_12__.FilterByDeviceColumnComponent, _filter_by_date_range_filter_by_date_range_component__WEBPACK_IMPORTED_MODULE_13__.FilterByDateRangeComponent, _filter_by_interfax_transaction_status_filter_by_interfax_transaction_status_component__WEBPACK_IMPORTED_MODULE_14__.FilterByInterfaxTransactionStatusComponent, _filter_by_interfax_date_selection_filter_by_interfax_date_selection_component__WEBPACK_IMPORTED_MODULE_15__.FilterByInterfaxDateSelectionComponent, _filter_by_interfax_contactlist_type_filter_by_interfax_contactlist_type_component__WEBPACK_IMPORTED_MODULE_16__.FilterByInterfaxContactlistTypeComponent, _filter_by_tenant_name_filter_by_tenant_name_component__WEBPACK_IMPORTED_MODULE_17__.FilterByTenantNameComponent, _filter_by_user_property_filter_by_user_property_component__WEBPACK_IMPORTED_MODULE_18__.FilterByUserPropertyComponent, _filter_by_metadata_property_filter_by_metadata_property_component__WEBPACK_IMPORTED_MODULE_19__.FilterByMetaDataPropertyComponent, _filter_by_workflow_name_filter_by_workflow_name_component__WEBPACK_IMPORTED_MODULE_20__.FilterByWorkflowNameComponent, _filter_by_metadata_type_filter_by_metadata_type_component__WEBPACK_IMPORTED_MODULE_21__.FilterByMetaDataTypeComponent, _filter_by_metadata_reference_filter_by_metadata_reference_component__WEBPACK_IMPORTED_MODULE_22__.FilterByMetaDataReferenceComponent, _filter_by_time_period_filter_by_time_period_component__WEBPACK_IMPORTED_MODULE_23__.FilterByTimePeriodComponent, _filter_by_browser_filter_by_browser_component__WEBPACK_IMPORTED_MODULE_24__.FilterByBrowserComponent, _filter_by_one_drive_query_filter_by_one_drive_query_component__WEBPACK_IMPORTED_MODULE_25__.FilterByOneDriveQueryComponent, _filter_by_tenant_filter_by_tenant_component__WEBPACK_IMPORTED_MODULE_26__.FilterByTenantComponent, _filter_by_history_user_filter_by_history_user_component__WEBPACK_IMPORTED_MODULE_27__.FilterByHistoryUserComponent, _filter_by_options_filter_by_options_component__WEBPACK_IMPORTED_MODULE_28__.FilterByOptionsComponent, _filter_by_faxuser_faxnumber_filter_by_faxuser_faxnumber_component__WEBPACK_IMPORTED_MODULE_29__.FilterByFaxuserFaxnumberComponent, _filter_by_dwfhistory_components_filter_by_dwfhistory_components_component__WEBPACK_IMPORTED_MODULE_30__.FilterByDWFHistoryComponentsComponent, _filter_by_fax_user_username_filter_by_fax_user_username_component__WEBPACK_IMPORTED_MODULE_31__.FilterByFaxUserUsernameComponent, _filter_by_environment_filter_by_environment_component__WEBPACK_IMPORTED_MODULE_32__.FilterByEnvironmentComponent, _filter_by_grouping_filter_by_grouping_component__WEBPACK_IMPORTED_MODULE_33__.FilterByGroupingComponent, _filter_by_checkbox_filter_by_checkbox_component__WEBPACK_IMPORTED_MODULE_34__.FilterByCheckboxComponent, _filter_by_olc_user_filter_by_olc_user_component__WEBPACK_IMPORTED_MODULE_35__.FilterByOLCUserComponent, _filter_by_olc_date_filter_by_olc_date_component__WEBPACK_IMPORTED_MODULE_36__.FilterByOLCDateComponent, _filter_by_olc_template_version_status_filter_by_olc_template_version_status_component__WEBPACK_IMPORTED_MODULE_37__.FilterByOLCTemplateVersionStatusComponent, _filter_by_olc_template_version_comment_filter_by_olc_template_version_comment_component__WEBPACK_IMPORTED_MODULE_38__.FilterByOLCTemplateVersionCommentComponent, _filter_by_log_entry_filter_by_log_entry_component__WEBPACK_IMPORTED_MODULE_39__.FilterByLogEntryComponent, _filter_by_interfax_inbox_shared_with_filter_by_interfax_inbox_shared_with_component__WEBPACK_IMPORTED_MODULE_40__.FilterByInterfaxInboxSharedWithComponent, _filter_by_cover_page_filter_by_cover_page_component__WEBPACK_IMPORTED_MODULE_41__.FilterByCoverPageComponent, _filter_by_documents_count_filter_by_documents_count_component__WEBPACK_IMPORTED_MODULE_42__.FilterByDocumentsCountComponent, _filter_by_audit_status_filter_by_audit_status_component__WEBPACK_IMPORTED_MODULE_43__.FilterByAuditStatusComponent, _filter_by_recipients_filter_by_recipients_component__WEBPACK_IMPORTED_MODULE_44__.FilterByRecipientsComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 45018:
/*!**************************************************!*\
  !*** ./src/app/blocks/filters/filters.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersModule: () => (/* binding */ FiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _filter_by_datasource_column_filter_by_datasource_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-by-datasource-column/filter-by-datasource-column.component */ 58687);
/* harmony import */ var _filter_by_date_range_filter_by_date_range_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-by-date-range/filter-by-date-range.component */ 53191);
/* harmony import */ var _filter_by_metadata_filter_by_metadata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-by-metadata/filter-by-metadata.component */ 58333);
/* harmony import */ var _filter_by_owner_filter_by_owner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-by-owner/filter-by-owner.component */ 61031);
/* harmony import */ var _filter_by_relative_date_filter_by_relative_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-by-relative-date/filter-by-relative-date.component */ 56507);
/* harmony import */ var _filter_by_workflow_filter_by_workflow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-by-workflow/filter-by-workflow.component */ 61729);
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter/filter.component */ 39545);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _filter_by_audit_status_filter_by_audit_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-by-audit-status/filter-by-audit-status.component */ 75335);
/* harmony import */ var _filter_by_browser_filter_by_browser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-by-browser/filter-by-browser.component */ 54552);
/* harmony import */ var _filter_by_checkbox_filter_by_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-by-checkbox/filter-by-checkbox.component */ 60941);
/* harmony import */ var _filter_by_contact_property_filter_by_contact_property_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter-by-contact-property/filter-by-contact-property.component */ 89315);
/* harmony import */ var _filter_by_cover_page_filter_by_cover_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter-by-cover-page/filter-by-cover-page.component */ 41833);
/* harmony import */ var _filter_by_device_column_filter_by_device_column_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter-by-device-column/filter-by-device-column.component */ 3615);
/* harmony import */ var _filter_by_documents_count_filter_by_documents_count_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter-by-documents-count/filter-by-documents-count.component */ 83791);
/* harmony import */ var _filter_by_dwfhistory_components_filter_by_dwfhistory_components_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter-by-dwfhistory-components/filter-by-dwfhistory-components.component */ 17423);
/* harmony import */ var _filter_by_environment_filter_by_environment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filter-by-environment/filter-by-environment.component */ 33447);
/* harmony import */ var _filter_by_fax_user_username_filter_by_fax_user_username_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filter-by-fax-user-username/filter-by-fax-user-username.component */ 41395);
/* harmony import */ var _filter_by_faxuser_faxnumber_filter_by_faxuser_faxnumber_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./filter-by-faxuser-faxnumber/filter-by-faxuser-faxnumber.component */ 85791);
/* harmony import */ var _filter_by_grouping_filter_by_grouping_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filter-by-grouping/filter-by-grouping.component */ 95269);
/* harmony import */ var _filter_by_history_user_filter_by_history_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./filter-by-history-user/filter-by-history-user.component */ 15511);
/* harmony import */ var _filter_by_interfax_contactlist_type_filter_by_interfax_contactlist_type_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./filter-by-interfax-contactlist-type/filter-by-interfax-contactlist-type.component */ 53139);
/* harmony import */ var _filter_by_interfax_date_selection_filter_by_interfax_date_selection_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./filter-by-interfax-date-selection/filter-by-interfax-date-selection.component */ 60679);
/* harmony import */ var _filter_by_interfax_inbox_properties_filter_by_interfax_inbox_properties_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./filter-by-interfax-inbox-properties/filter-by-interfax-inbox-properties.component */ 83239);
/* harmony import */ var _filter_by_interfax_inbox_shared_with_filter_by_interfax_inbox_shared_with_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filter-by-interfax-inbox-shared-with/filter-by-interfax-inbox-shared-with.component */ 3925);
/* harmony import */ var _filter_by_interfax_outbox_properties_filter_by_interfax_outbox_properties_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./filter-by-interfax-outbox-properties/filter-by-interfax-outbox-properties.component */ 64441);
/* harmony import */ var _filter_by_interfax_services_filter_by_interfax_services_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./filter-by-interfax-services/filter-by-interfax-services.component */ 49891);
/* harmony import */ var _filter_by_interfax_status_filter_by_interfax_status_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./filter-by-interfax-status/filter-by-interfax-status.component */ 88407);
/* harmony import */ var _filter_by_interfax_transaction_status_filter_by_interfax_transaction_status_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./filter-by-interfax-transaction-status/filter-by-interfax-transaction-status.component */ 93919);
/* harmony import */ var _filter_by_interfax_username_filter_by_interfax_username_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./filter-by-interfax-username/filter-by-interfax-username.component */ 6499);
/* harmony import */ var _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./filter-by-list-property/filter-by-list-property.component */ 78887);
/* harmony import */ var _filter_by_log_entry_filter_by_log_entry_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./filter-by-log-entry/filter-by-log-entry.component */ 17943);
/* harmony import */ var _filter_by_metadata_property_filter_by_metadata_property_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./filter-by-metadata-property/filter-by-metadata-property.component */ 75355);
/* harmony import */ var _filter_by_metadata_reference_filter_by_metadata_reference_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filter-by-metadata-reference/filter-by-metadata-reference.component */ 10245);
/* harmony import */ var _filter_by_metadata_type_filter_by_metadata_type_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./filter-by-metadata-type/filter-by-metadata-type.component */ 34587);
/* harmony import */ var _filter_by_olc_date_filter_by_olc_date_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./filter-by-olc-date/filter-by-olc-date.component */ 11881);
/* harmony import */ var _filter_by_olc_template_version_comment_filter_by_olc_template_version_comment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./filter-by-olc-template-version-comment/filter-by-olc-template-version-comment.component */ 52103);
/* harmony import */ var _filter_by_olc_template_version_status_filter_by_olc_template_version_status_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./filter-by-olc-template-version-status/filter-by-olc-template-version-status.component */ 20343);
/* harmony import */ var _filter_by_olc_user_filter_by_olc_user_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./filter-by-olc-user/filter-by-olc-user.component */ 42487);
/* harmony import */ var _filter_by_one_drive_query_filter_by_one_drive_query_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./filter-by-one-drive-query/filter-by-one-drive-query.component */ 53391);
/* harmony import */ var _filter_by_options_filter_by_options_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./filter-by-options/filter-by-options.component */ 54999);
/* harmony import */ var _filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./filter-by-property/filter-by-property.component */ 39317);
/* harmony import */ var _filter_by_recipients_filter_by_recipients_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./filter-by-recipients/filter-by-recipients.component */ 20535);
/* harmony import */ var _filter_by_tenant_name_filter_by_tenant_name_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./filter-by-tenant-name/filter-by-tenant-name.component */ 45639);
/* harmony import */ var _filter_by_tenant_filter_by_tenant_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./filter-by-tenant/filter-by-tenant.component */ 62359);
/* harmony import */ var _filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./filter-by-text-property/filter-by-text-property.component */ 6343);
/* harmony import */ var _filter_by_time_period_filter_by_time_period_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./filter-by-time-period/filter-by-time-period.component */ 90283);
/* harmony import */ var _filter_by_user_property_filter_by_user_property_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./filter-by-user-property/filter-by-user-property.component */ 52111);
/* harmony import */ var _filter_by_workflow_name_filter_by_workflow_name_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./filter-by-workflow-name/filter-by-workflow-name.component */ 56723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);





















































class FiltersModule {
  static {
    this.ɵfac = function FiltersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FiltersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineNgModule"]({
      type: FiltersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.OpenDropdownModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetNgModuleScope"](FiltersModule, {
    declarations: [_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent, _filter_by_relative_date_filter_by_relative_date_component__WEBPACK_IMPORTED_MODULE_4__.FilterByRelativeDateComponent, _filter_by_workflow_filter_by_workflow_component__WEBPACK_IMPORTED_MODULE_5__.FilterByWorkflowComponent, _filter_by_owner_filter_by_owner_component__WEBPACK_IMPORTED_MODULE_3__.FilterByOwnerComponent, _filter_by_metadata_filter_by_metadata_component__WEBPACK_IMPORTED_MODULE_2__.FilterByMetadataComponent, _filter_by_datasource_column_filter_by_datasource_column_component__WEBPACK_IMPORTED_MODULE_0__.FilterByDataSourceColumnComponent, _filter_by_contact_property_filter_by_contact_property_component__WEBPACK_IMPORTED_MODULE_11__.FilterByContactPropertyComponent, _filter_by_interfax_username_filter_by_interfax_username_component__WEBPACK_IMPORTED_MODULE_29__.FilterByInterfaxUsernameComponent, _filter_by_interfax_status_filter_by_interfax_status_component__WEBPACK_IMPORTED_MODULE_27__.FilterByInterfaxStatusComponent, _filter_by_interfax_services_filter_by_interfax_services_component__WEBPACK_IMPORTED_MODULE_26__.FilterByInterfaxServicesComponent, _filter_by_interfax_outbox_properties_filter_by_interfax_outbox_properties_component__WEBPACK_IMPORTED_MODULE_25__.FilterByInterfaxOutboxPropertiesComponent, _filter_by_interfax_inbox_properties_filter_by_interfax_inbox_properties_component__WEBPACK_IMPORTED_MODULE_23__.FilterByInterfaxInboxPropertiesComponent, _filter_by_device_column_filter_by_device_column_component__WEBPACK_IMPORTED_MODULE_13__.FilterByDeviceColumnComponent, _filter_by_date_range_filter_by_date_range_component__WEBPACK_IMPORTED_MODULE_1__.FilterByDateRangeComponent, _filter_by_interfax_transaction_status_filter_by_interfax_transaction_status_component__WEBPACK_IMPORTED_MODULE_28__.FilterByInterfaxTransactionStatusComponent, _filter_by_interfax_date_selection_filter_by_interfax_date_selection_component__WEBPACK_IMPORTED_MODULE_22__.FilterByInterfaxDateSelectionComponent, _filter_by_interfax_contactlist_type_filter_by_interfax_contactlist_type_component__WEBPACK_IMPORTED_MODULE_21__.FilterByInterfaxContactlistTypeComponent, _filter_by_tenant_name_filter_by_tenant_name_component__WEBPACK_IMPORTED_MODULE_43__.FilterByTenantNameComponent, _filter_by_property_filter_by_property_component__WEBPACK_IMPORTED_MODULE_41__.FilterByPropertyComponent, _filter_by_user_property_filter_by_user_property_component__WEBPACK_IMPORTED_MODULE_47__.FilterByUserPropertyComponent, _filter_by_metadata_property_filter_by_metadata_property_component__WEBPACK_IMPORTED_MODULE_32__.FilterByMetaDataPropertyComponent, _filter_by_text_property_filter_by_text_property_component__WEBPACK_IMPORTED_MODULE_45__.FilterByTextPropertyComponent, _filter_by_workflow_name_filter_by_workflow_name_component__WEBPACK_IMPORTED_MODULE_48__.FilterByWorkflowNameComponent, _filter_by_list_property_filter_by_list_property_component__WEBPACK_IMPORTED_MODULE_30__.FilterByListPropertyComponent, _filter_by_metadata_type_filter_by_metadata_type_component__WEBPACK_IMPORTED_MODULE_34__.FilterByMetaDataTypeComponent, _filter_by_metadata_reference_filter_by_metadata_reference_component__WEBPACK_IMPORTED_MODULE_33__.FilterByMetaDataReferenceComponent, _filter_by_time_period_filter_by_time_period_component__WEBPACK_IMPORTED_MODULE_46__.FilterByTimePeriodComponent, _filter_by_browser_filter_by_browser_component__WEBPACK_IMPORTED_MODULE_9__.FilterByBrowserComponent, _filter_by_one_drive_query_filter_by_one_drive_query_component__WEBPACK_IMPORTED_MODULE_39__.FilterByOneDriveQueryComponent, _filter_by_tenant_filter_by_tenant_component__WEBPACK_IMPORTED_MODULE_44__.FilterByTenantComponent, _filter_by_history_user_filter_by_history_user_component__WEBPACK_IMPORTED_MODULE_20__.FilterByHistoryUserComponent, _filter_by_options_filter_by_options_component__WEBPACK_IMPORTED_MODULE_40__.FilterByOptionsComponent, _filter_by_faxuser_faxnumber_filter_by_faxuser_faxnumber_component__WEBPACK_IMPORTED_MODULE_18__.FilterByFaxuserFaxnumberComponent, _filter_by_dwfhistory_components_filter_by_dwfhistory_components_component__WEBPACK_IMPORTED_MODULE_15__.FilterByDWFHistoryComponentsComponent, _filter_by_fax_user_username_filter_by_fax_user_username_component__WEBPACK_IMPORTED_MODULE_17__.FilterByFaxUserUsernameComponent, _filter_by_environment_filter_by_environment_component__WEBPACK_IMPORTED_MODULE_16__.FilterByEnvironmentComponent, _filter_by_grouping_filter_by_grouping_component__WEBPACK_IMPORTED_MODULE_19__.FilterByGroupingComponent, _filter_by_checkbox_filter_by_checkbox_component__WEBPACK_IMPORTED_MODULE_10__.FilterByCheckboxComponent, _filter_by_olc_user_filter_by_olc_user_component__WEBPACK_IMPORTED_MODULE_38__.FilterByOLCUserComponent, _filter_by_olc_date_filter_by_olc_date_component__WEBPACK_IMPORTED_MODULE_35__.FilterByOLCDateComponent, _filter_by_olc_template_version_status_filter_by_olc_template_version_status_component__WEBPACK_IMPORTED_MODULE_37__.FilterByOLCTemplateVersionStatusComponent, _filter_by_olc_template_version_comment_filter_by_olc_template_version_comment_component__WEBPACK_IMPORTED_MODULE_36__.FilterByOLCTemplateVersionCommentComponent, _filter_by_log_entry_filter_by_log_entry_component__WEBPACK_IMPORTED_MODULE_31__.FilterByLogEntryComponent, _filter_by_interfax_inbox_shared_with_filter_by_interfax_inbox_shared_with_component__WEBPACK_IMPORTED_MODULE_24__.FilterByInterfaxInboxSharedWithComponent, _filter_by_cover_page_filter_by_cover_page_component__WEBPACK_IMPORTED_MODULE_12__.FilterByCoverPageComponent, _filter_by_documents_count_filter_by_documents_count_component__WEBPACK_IMPORTED_MODULE_14__.FilterByDocumentsCountComponent, _filter_by_audit_status_filter_by_audit_status_component__WEBPACK_IMPORTED_MODULE_8__.FilterByAuditStatusComponent, _filter_by_recipients_filter_by_recipients_component__WEBPACK_IMPORTED_MODULE_42__.FilterByRecipientsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.OpenDropdownModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule],
    exports: [_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetComponentScope"](_filter_by_time_period_filter_by_time_period_component__WEBPACK_IMPORTED_MODULE_46__.FilterByTimePeriodComponent, [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_49__.FieldComponent], []);

/***/ }),

/***/ 44718:
/*!*******************************************************************************************!*\
  !*** ./src/app/blocks/services/FilterByInterfaxInboxPropertiesComponentLoaded.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByInterfaxInboxPropertiesComponentLoadedService: () => (/* binding */ FilterByInterfaxInboxPropertiesComponentLoadedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);


class FilterByInterfaxInboxPropertiesComponentLoadedService {
  constructor() {
    this.componentLoadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.componentLoaded$ = this.componentLoadedSubject.asObservable();
  }
  notifyComponentLoaded() {
    this.componentLoadedSubject.next();
  }
  static {
    this.ɵfac = function FilterByInterfaxInboxPropertiesComponentLoadedService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterByInterfaxInboxPropertiesComponentLoadedService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FilterByInterfaxInboxPropertiesComponentLoadedService,
      factory: FilterByInterfaxInboxPropertiesComponentLoadedService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 61254:
/*!*****************************************************************!*\
  !*** ./src/app/blocks/services/auto-execute-actions.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoExecuteActionsService: () => (/* binding */ AutoExecuteActionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61856);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 43396);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 56816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 23246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 24406);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_itemActionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../blocks/core/itemActionHandler */ 1894);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ 34158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 77353);








class AutoExecuteActionsService {
  constructor(translate) {
    this.translate = translate;
    this._selectedItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.selectedItem$ = this._selectedItemSubject.asObservable();
    this.setSelectedItem = item => {
      this._selectedItemSubject.next(item);
    };
    this.setupAutoExecuteActions = (autoExecuteResult, currentFolder, itemActionHandler) => {
      const autoExecuteSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
      autoExecuteResult.actions.forEach(action => {
        let subscription;
        switch (action.executeWhen) {
          case _models__WEBPACK_IMPORTED_MODULE_2__.ExecuteCriteria.OnSelection:
            subscription = this.selectedItem$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(item => this.isAutoExecuteActionAllowed(action.id, item))).subscribe(item => this.invokeAutoExecuteAction(action.id, [{
              id: item.data.id
            }], currentFolder, itemActionHandler));
            break;
          case _models__WEBPACK_IMPORTED_MODULE_2__.ExecuteCriteria.TimeAfterSelection:
            subscription = this.selectedItem$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(5000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(item => this.isAutoExecuteActionAllowed(action.id, item))).subscribe(item => this.invokeAutoExecuteAction(action.id, [{
              id: item.data.id
            }], currentFolder, itemActionHandler));
            break;
          case _models__WEBPACK_IMPORTED_MODULE_2__.ExecuteCriteria.DeSelected:
            subscription = this.selectedItem$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([prevD]) => prevD), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(item => this.isAutoExecuteActionAllowed(action.id, item))).subscribe(item => this.invokeAutoExecuteAction(action.id, [{
              id: item.data.id
            }], currentFolder, itemActionHandler));
            break;
          case _models__WEBPACK_IMPORTED_MODULE_2__.ExecuteCriteria.NoOp:
          default:
            break;
        }
        if (subscription) autoExecuteSubscriptions.add(subscription);
      });
      return autoExecuteSubscriptions;
    };
    this.invokeAutoExecuteAction = (actionId, items, currentFolder, itemActionHandler) => {
      itemActionHandler.invoke(currentFolder.id, currentFolder.actions.find(a => a.id == actionId), items, this.getFolderFilters(currentFolder), true, true);
    };
    this.getFolderFilters = folder => {
      return folder.filters.map(filter => {
        return {
          id: filter.id,
          value: filter.value
        };
      });
    };
    this.isAutoExecuteActionAllowed = (actionId, item) => {
      if (!item || !actionId) return false;
      if (actionId !== _blocks_core_itemActionHandler__WEBPACK_IMPORTED_MODULE_1__.InterFaxActions.MarkRead) return true;
      return !item?.data.isRead;
    };
  }
  silentlyUpdateItems(ur, tableItems, selectedItems, columns, expandedItems = null) {
    ur.updated.forEach(t => {
      const itemIndex = tableItems.findIndex(i => i.data.id == t.id);
      if (itemIndex == -1) return;
      let data = ur.inflater ? ur.inflater(tableItems[itemIndex].data) : t;
      tableItems[itemIndex] = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(data, columns, this.translate);
    });
    expandedItems?.forEach(ei => {
      const itemIndex = tableItems.findIndex(ti => ti.data.id == ei.id);
      if (itemIndex == -1) return;
      tableItems[itemIndex].expanded = true;
    });
    tableItems = [...tableItems];
    selectedItems = tableItems.filter(ti => selectedItems.some(si => si.data.id == ti.data.id)).map(ti => {
      ti.selected = true;
      return ti;
    });
    return {
      tableItems,
      selectedItems
    };
  }
  static {
    this.ɵfac = function AutoExecuteActionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutoExecuteActionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: AutoExecuteActionsService,
      factory: AutoExecuteActionsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 76114:
/*!*****************************************!*\
  !*** ./src/app/blocks/shared/enumes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FitToMeasurement: () => (/* binding */ FitToMeasurement)
/* harmony export */ });
var FitToMeasurement;
(function (FitToMeasurement) {
  FitToMeasurement["height"] = "height";
  FitToMeasurement["width"] = "width";
})(FitToMeasurement || (FitToMeasurement = {}));

/***/ }),

/***/ 37703:
/*!******************************************************************************!*\
  !*** ./src/app/views/admin-olc/models/filters/version-status-data-source.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionStatusDataSource: () => (/* binding */ VersionStatusDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 63150);

class VersionStatusDataSource {
  constructor(translate) {
    this.translate = translate;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.types = [{
      value: '0',
      name: this.translate.instant('OLCTemplateVersionStatusEnum.Draft')
    }, {
      value: '1',
      name: this.translate.instant('OLCTemplateVersionStatusEnum.PendingApproval')
    }, {
      value: '2',
      name: this.translate.instant('OLCTemplateVersionStatusEnum.Approved')
    }, {
      value: '3',
      name: this.translate.instant('OLCTemplateVersionStatusEnum.Rejected')
    }, {
      value: '4',
      name: this.translate.instant('OLCTemplateVersionStatusEnum.PendingProduction')
    }, {
      value: '5',
      name: this.translate.instant('OLCTemplateVersionStatusEnum.InProduction')
    }, {
      value: '6',
      name: this.translate.instant('OLCTemplateVersionStatusEnum.WasInProduction')
    }];
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    successCallBack(this.types);
  }
}

/***/ }),

/***/ 2809:
/*!***********************************************************************************!*\
  !*** ./src/app/views/product-item/document-preview/document-preview.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentPreviewComponent: () => (/* binding */ DocumentPreviewComponent),
/* harmony export */   PreviewDocument: () => (/* binding */ PreviewDocument),
/* harmony export */   PreviewPage: () => (/* binding */ PreviewPage),
/* harmony export */   VIEWER_CONFIG: () => (/* binding */ VIEWER_CONFIG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/core/fileName */ 28016);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/api.service */ 32275);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _blocks_shared_enumes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/shared/enumes */ 76114);
/* harmony import */ var _document_capture_capture_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../document-capture/capture-models */ 48004);
/* harmony import */ var _annotations_annotations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./annotations/annotations.component */ 64644);
/* harmony import */ var _preview_thumbnails_preview_thumbnails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./preview-thumbnails/preview-thumbnails.component */ 89890);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 34942);






























const _c0 = ["viewer"];
const _c1 = ["thumbnailsPanel"];
const _c2 = ["thumbnails"];
const _c3 = () => ({});
function DocumentPreviewComponent_div_1_div_1_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("blur", function DocumentPreviewComponent_div_1_div_1_app_field_1_Template_app_field_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onSaveDocumentName($event));
    })("escape", function DocumentPreviewComponent_div_1_div_1_app_field_1_Template_app_field_escape_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.restoreLastSavedDocumentName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("field", ctx_r1.fieldDocName)("value", ctx_r1.documentName)("disabled", !ctx_r1.canEditDocumentName)("triggerBlurEventOnValueChange", false);
  }
}
function DocumentPreviewComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DocumentPreviewComponent_div_1_div_1_app_field_1_Template, 1, 4, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showDocumentName);
  }
}
function DocumentPreviewComponent_div_1_div_2_app_action_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-action-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 3, "annotations.redact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("action", ctx_r1.Action.Redaction)("disabled", !ctx_r1.currentPage);
  }
}
function DocumentPreviewComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DocumentPreviewComponent_div_1_div_2_app_action_button_1_Template, 2, 5, "app-action-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "span", 19)(3, "app-action-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "app-action-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "app-action-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "app-action-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.redactionAllowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 13, "Scanning.ZoomIn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("action", ctx_r1.Action.ZoomIn)("disabled", !ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 15, "Scanning.ZoomOut"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("action", ctx_r1.Action.ZoomOut)("disabled", !ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 17, "Scanning.FitToHeight"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("action", ctx_r1.Action.FitToHeight)("disabled", !ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 19, "Scanning.FitToWidth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("action", ctx_r1.Action.FitToWidth)("disabled", !ctx_r1.currentPage);
  }
}
function DocumentPreviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DocumentPreviewComponent_div_1_div_1_Template, 2, 1, "div", 12)(2, DocumentPreviewComponent_div_1_div_2_Template, 11, 21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.showMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.showMessage && !ctx_r1.isFaxMobile);
  }
}
function DocumentPreviewComponent_div_2_app_preview_thumbnails_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-preview-thumbnails", 31, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("setCurrentPage", function DocumentPreviewComponent_div_2_app_preview_thumbnails_3_Template_app_preview_thumbnails_setCurrentPage_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.setCurrentPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pages", ctx_r1.previewDocumentPages)("annotationsAllowed", ctx_r1.redactionAllowed);
  }
}
function DocumentPreviewComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
  }
}
function DocumentPreviewComponent_div_2_pdf_viewer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "pdf-viewer", 33, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("text-layer-rendered", function DocumentPreviewComponent_div_2_pdf_viewer_7_Template_pdf_viewer_text_layer_rendered_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onTextLayerRendered($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const viewerWrapper_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("width", viewerWrapper_r6.clientWidth, "px")("height", viewerWrapper_r6.clientHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r1.currentPage == null ? null : ctx_r1.currentPage.url)("page", 1)("show-all", false)("render-text", true)("zoom", ctx_r1.scale)("original-size", ctx_r1.fitToWidthLandscape)("fit-to-page", true)("autoresize", ctx_r1.fitToWidthPortrait);
  }
}
function DocumentPreviewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 25)(1, "div", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("resize", function DocumentPreviewComponent_div_2_Template_div_resize_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onWidthResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, DocumentPreviewComponent_div_2_app_preview_thumbnails_3_Template, 2, 2, "app-preview-thumbnails", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 28, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, DocumentPreviewComponent_div_2_div_6_Template, 2, 1, "div", 29)(7, DocumentPreviewComponent_div_2_pdf_viewer_7_Template, 2, 12, "pdf-viewer", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("handles", "e")("width", "200px")("preferenceName", ctx_r1.thumbnailsWidthPreferenceKey)("preferenceValue", ctx_r1.thumbnailsWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.showMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.showMessage && ctx_r1.currentPage);
  }
}
function DocumentPreviewComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
  }
}
function DocumentPreviewComponent_div_3_app_preview_thumbnails_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-preview-thumbnails", 36);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pages", ctx_r1.previewDocumentPages)("annotationsAllowed", false);
  }
}
function DocumentPreviewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DocumentPreviewComponent_div_3_div_1_Template, 2, 1, "div", 29)(2, DocumentPreviewComponent_div_3_app_preview_thumbnails_2_Template, 1, 2, "app-preview-thumbnails", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.showMessage);
  }
}
function DocumentPreviewComponent_app_annotations_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-annotations", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("reload", function DocumentPreviewComponent_app_annotations_4_Template_app_annotations_reload_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onDocumentReloadRequired());
    })("annotationAdded", function DocumentPreviewComponent_app_annotations_4_Template_app_annotations_annotationAdded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAnnotationAdded($event));
    })("annotationUpdated", function DocumentPreviewComponent_app_annotations_4_Template_app_annotations_annotationUpdated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAnnotationUpdated($event));
    })("annotationRemoved", function DocumentPreviewComponent_app_annotations_4_Template_app_annotations_annotationRemoved_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAnnotationRemoved($event));
    })("applyAnnotations", function DocumentPreviewComponent_app_annotations_4_Template_app_annotations_applyAnnotations_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onApplyAnnotations());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewer", ctx_r1.viewer)("id", ctx_r1.selectedItems[0] == null ? null : ctx_r1.selectedItems[0].data == null ? null : ctx_r1.selectedItems[0].data.id)("pageNumber", ctx_r1.currentPage == null ? null : ctx_r1.currentPage.pageNumber)("annotations", ctx_r1.currentPage == null ? null : ctx_r1.currentPage.annotations)("showApplyButton", true);
  }
}
function DocumentPreviewComponent_app_preview_barcodes_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-preview-barcodes", 38);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewer", ctx_r1.viewer)("barcodes", ctx_r1.currentPage == null ? null : ctx_r1.currentPage.barcodes);
  }
}
class DocumentPreviewComponent {
  get canEditDocumentName() {
    return this.hasOwnerOrEditSharingPermission && this.documentNameEditingAllowed;
  }
  get redactionAllowed() {
    return this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PERMISSIONS_ALLOWBLACKOUT) && this.hasOwnerOrEditSharingPermission && this.sessionStorageService.getLoginMode() !== shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LoginModes.Device;
  }
  get hasOwnerOrEditSharingPermission() {
    return this.hasDocumentSharingPermission(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.SharePermissions.Edit) || this.hasDocumentSharingPermission(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.SharePermissions.Owner);
  }
  onResize() {
    if (!this.fitToWidthPortrait && !this.fitToWidthLandscape && this.viewer) {
      this.pageHeight = 0;
      this.scale = 1;
      this.shouldFitToHeight = true;
    }
  }
  get canPreviewAndDownloadDocument() {
    if (!this.previewDocument) return false;
    const canPreviewAndDownload = this.previewDocument.item.data.extendedDetails.canPreviewAndDownload;
    if (canPreviewAndDownload === undefined) return true;
    return canPreviewAndDownload;
  }
  get previewDocumentPages() {
    if (!this.canPreviewAndDownloadDocument) {
      this.handleShowMessage(this.translate.instant('Product-Item-Preview.PreviewNotAvailable'));
    }
    return this.canPreviewAndDownloadDocument && this.previewDocument?.pages ? this.previewDocument.pages : [];
  }
  constructor(userStateService, translate, actionService, userPreferencesService, interfaxService, spinnerService, errorsService, toastrService, sessionStorageService, apiService, delayService) {
    this.userStateService = userStateService;
    this.translate = translate;
    this.actionService = actionService;
    this.userPreferencesService = userPreferencesService;
    this.interfaxService = interfaxService;
    this.spinnerService = spinnerService;
    this.errorsService = errorsService;
    this.toastrService = toastrService;
    this.sessionStorageService = sessionStorageService;
    this.apiService = apiService;
    this.delayService = delayService;
    this.documentNameEditingAllowed = false;
    this.documentReloadRequired = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    this.waitingPages = [];
    this.isLoading = true;
    this.showMessage = false;
    this.Action = _blocks_core_actions__WEBPACK_IMPORTED_MODULE_2__.Action;
    this.isFaxMobile = false;
    this.documentName = '';
    this.lastDocumentName = '';
    this.showDocumentName = true;
    this.shouldOpenChangePasswordModal = false;
    this.handleSelectedItemChanges = items => {
      if (!this.previewDocument) return;
      const item = items.find(x => x.data?.internalID == this.previewDocument.item?.data?.internalID);
      if (!item) return;
      this.previewDocument.name = item.data.documentFilename;
      this.lastDocumentName = this.documentName = this.previewDocument?.name ?? '';
      this.fieldDocName.placeholder = `${this.documentName} ${this.previewDocument?.pageCountText}`;
    };
    this.hasDocumentSharingPermission = permission => {
      const permissionFlag = this.previewDocument?.item?.data?.extendedDetails.permissionsFlag;
      if (!permissionFlag) return false;
      return (permissionFlag & permission) === permission;
    };
    this.onDocumentReloadRequired = () => {
      this.documentReloadRequired.emit();
    };
    this.onAnnotationsChanged = pageNumber => {
      this.thumbnails.onAnnotationsLoaded();
    };
    this.onAnnotationAdded = annotation => {
      if (this.thumbnails) this.thumbnails.onAnnotationAdded(annotation);
    };
    this.onAnnotationUpdated = annotation => {
      if (this.thumbnails) this.thumbnails.onAnnotationUpdated(annotation);
    };
    this.onAnnotationRemoved = annotation => {
      if (this.thumbnails) this.thumbnails.onAnnotationRemoved(annotation);
    };
    this.onApplyAnnotations = () => {
      const msg = this.redactionsOnly() ? this.translate.instant('annotations.applying-redactions') : this.translate.instant('annotations.applying');
      this.spinnerService.show(msg, document.body);
      const allAnnotations = [];
      this.previewDocument.pages.forEach(page => allAnnotations.push(...page.annotations));
      this.interfaxService.applyAnnotations(this.selectedItems[0].data.id, allAnnotations.map(p => p.serializable()), this.annotationsSaveSucceeded, this.annotationsSaveFailed);
    };
    this.annotationsSaveSucceeded = result => {
      const msg = this.redactionsOnly() ? this.translate.instant('annotations.redactions-applied') : this.translate.instant('annotations.succeeded');
      this.toastrService.success(msg);
      this.annotations.resetAnnotations();
      this.onDocumentReloadRequired();
      this.spinnerService.hide();
    };
    this.annotationsSaveFailed = err => {
      const msg = this.redactionsOnly() ? this.translate.instant('annotations.redactions-failed') : this.translate.instant('annotations.failed');
      this.errorsService.showErrorsModal([err], msg);
      this.spinnerService.hide();
    };
    this.redactionsOnly = () => {
      return this.annotations.annotations.findIndex(x => x.annotationType != shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AnnotationTypes.Redaction) == -1;
    };
    this.invokeAction = actionEvent => {
      if (!this.currentPage) return;
      if (actionEvent.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_2__.Action.FitToHeight) {
        this.fit(_blocks_shared_enumes__WEBPACK_IMPORTED_MODULE_10__.FitToMeasurement.height);
      } else if (actionEvent.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_2__.Action.FitToWidth) {
        this.fit(_blocks_shared_enumes__WEBPACK_IMPORTED_MODULE_10__.FitToMeasurement.width);
      } else if (actionEvent.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_2__.Action.ZoomIn) {
        this.zoomIn();
      } else if (actionEvent.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_2__.Action.ZoomOut) {
        this.zoomOut();
      }
    };
    this.onTextLayerRendered = event => {
      this.getPageHeight(event);
      if (this.annotations) this.annotations.onPageRendered(event);
    };
    this.onSaveDocumentName = newDocName => {
      this.documentName = newDocName;
      if (newDocName.trim() === '') {
        this.onDocumentNameChangeFailed(this.translate.instant('Product-Item-Preview.EmptyFileName'));
        this.restoreLastSavedDocumentName();
        return;
      }
      if (!this.previewDocument) return;
      if (this.previewDocument.name === newDocName) return;
      this.spinnerService.show(this.translate.instant('Product-Item-Preview.RenameInProgress'), document.body);
      this.apiService.renameItem(this.previewDocument.item.data.id, newDocName, newName => this.onDocumentNameChangeSuccessful(newName), err => this.onDocumentNameChangeFailed(err));
    };
    this.onDocumentNameChangeSuccessful = newDocName => {
      if (!this.previewDocument) return;
      this.lastDocumentName = this.documentName = this.previewDocument.name = newDocName;
      this.initializeDocNameField();
      this.documentReloadRequired.emit();
      this.spinnerService.hide();
    };
    this.onDocumentNameChangeFailed = err => {
      this.spinnerService.hide();
      this.errorsService.showErrorsModal(err, this.translate.instant('Product-Item-Preview.RenameFailed'));
    };
    this.initializeDocNameField = () => {
      this.fieldDocName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        infoText: this.previewDocument?.pageCountText
      });
    };
  }
  ngOnChanges(changes) {
    if (this.selectedItems.length) {
      if (this.selectedItems.length > 1) {
        this.handleShowMessage(this.translate.instant('Product-Item-Preview.MultipleItemsSelected'));
        return;
      } else {
        if (this.previewDocument == null) {
          this.handleShowMessage(this.translate.instant('Product-Item-Preview.PreviewNotAvailable'));
          return;
        } else {
          this.showMessage = false;
          this.updateShouldOpenChangePasswordModal();
        }
      }
    } else {
      this.handleShowMessage(this.translate.instant('Product-Item-Preview.NoItemsSelected'));
      return;
    }
    if (changes.previewDocument) {
      this.initializeDocNameField();
      if (changes.previewDocument.currentValue) {
        this.currentPage = null;
        this.lastDocumentName = this.documentName = this.previewDocument?.name ?? '';
        if (this.annotations) this.annotations.resetAnnotations();
      } else {
        this.lastDocumentName = this.documentName = '';
        this.handleShowMessage(this.translate.instant('Product-Item-Preview.PreviewNotAvailable'));
        return;
      }
    }
    if (changes.selectedItems?.currentValue) this.handleSelectedItemChanges(changes.selectedItems?.currentValue);
  }
  ngOnInit() {
    this.init();
  }
  init() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.isFaxMobile = this.sessionStorageService.getIsInterFaxMobile();
    this.subscriptions.add(this.sessionStorageService.onIsInterFaxMobileChanged.subscribe(x => this.isFaxMobile = x));
    this.fitToWidthPortrait = true;
    this.fitToWidthLandscape = false;
    this.isPortrait = true;
    this.isLandscape = false;
    this.scale = 1;
    this.thumbnailsWidthPreferenceKey = this.folderId + 'thumbnails-width';
    this.thumbnailsWidth = this.userPreferencesService.getPreference(this.thumbnailsWidthPreferenceKey);
    this.subscriptions.add(this.actionService.onActivateAction.subscribe(this.invokeAction));
    this.lastDocumentName = this.documentName = this.previewDocument?.name ?? '';
  }
  updateShouldOpenChangePasswordModal() {
    this.shouldOpenChangePasswordModal = false;
    this.delayService.execute(() => {
      this.shouldOpenChangePasswordModal = !this.canPreviewAndDownloadDocument;
    }, 0);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handleShowMessage(message) {
    this.previewDocument = null;
    this.currentPage = null;
    this.showMessage = true;
    this.message = message;
  }
  onWidthResize(p) {
    this.userPreferencesService.setPreference(p.name, p.value);
    if (this.thumbnails) {
      this.thumbnails.widthResized();
    }
    if (this.fitToWidthPortrait) {
      this.updatePreviewSize();
    }
  }
  updatePreviewSize() {
    if (this.previewDocument && this.viewer) {
      this.viewer.updateSize();
    }
  }
  isPDF(file) {
    return true;
    // for now everything is PDF
    //return file.type === 'text/xml' || file.type === 'application/pdf';
  }
  setCurrentPage(page) {
    if (!this.isPDF(page.originalFile)) {
      this.showMessage = true;
      this.message = `${this.translate.instant('Product-Item-Preview.UnsupportedFileTypeError')} ${page.fileName}`;
      return;
    }
    if (this.currentPage) {
      this.currentPage.selected = false;
    }
    this.currentPage = page;
    this.currentPage.selected = true;
    this.directiveRef?.scrollToTop();
    this.directiveRef?.scrollToLeft();
  }
  getPageHeight(event, resetHeight) {
    if (!this.pageHeight) {
      this.pageHeight = event.source.div.offsetHeight;
    }
    this.setScalesForFitToHeight(this.shouldFitToHeight);
  }
  setScalesForFitToHeight(andFitToHeight) {
    const viewerWrapper = document.querySelector('.viewer');
    let percentage;
    percentage = (viewerWrapper.offsetHeight - 40) / this.pageHeight * 100;
    this.fitToHeightPortraitScale = parseFloat((percentage * 0.01).toFixed(2));
    percentage = (viewerWrapper.offsetHeight - 45) / this.pageHeight * 100;
    this.fitToHeightLandscapeScale = parseFloat((percentage * 0.01).toFixed(2));
    if (andFitToHeight) {
      this.fit(_blocks_shared_enumes__WEBPACK_IMPORTED_MODULE_10__.FitToMeasurement.height);
      this.shouldFitToHeight = false;
    }
  }
  fit(to) {
    if (to === _blocks_shared_enumes__WEBPACK_IMPORTED_MODULE_10__.FitToMeasurement.width) {
      this.viewer.updateSize();
      this.scale = 1;
      if (this.isPortrait) {
        this.fitToWidthPortrait = true;
        this.fitToWidthLandscape = false;
      } else {
        this.fitToWidthPortrait = false;
        this.fitToWidthLandscape = true;
      }
    } else if (to === _blocks_shared_enumes__WEBPACK_IMPORTED_MODULE_10__.FitToMeasurement.height) {
      this.viewer.updateSize();
      this.fitToWidthPortrait = false;
      this.fitToWidthLandscape = false;
      if (this.isPortrait) {
        this.scale = this.fitToHeightPortraitScale;
      } else {
        this.scale = this.fitToHeightLandscapeScale;
      }
    }
    this.directiveRef?.update();
  }
  zoomIn() {
    if (this.scale >= VIEWER_CONFIG.maxScale) {
      return;
    }
    this.scale = Math.round((this.scale + VIEWER_CONFIG.scaleIncrement) * 100) / 100;
  }
  zoomOut() {
    if (this.scale <= VIEWER_CONFIG.minScale) {
      return;
    }
    this.scale = Math.round((this.scale - VIEWER_CONFIG.scaleIncrement) * 100) / 100;
  }
  restoreLastSavedDocumentName() {
    if (!this.previewDocument) return;
    this.documentName = this.previewDocument.name = this.lastDocumentName;
    this.rerenderDocumentNameField();
  }
  rerenderDocumentNameField() {
    this.showDocumentName = false;
    this.delayService.execute(() => this.showDocumentName = true, 25);
  }
  onPasswordUpdated() {
    this.onDocumentReloadRequired();
  }
  static {
    this.ɵfac = function DocumentPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_9__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_4__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_7__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_8__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_6__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: DocumentPreviewComponent,
      selectors: [["app-document-preview"]],
      viewQuery: function DocumentPreviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarDirective, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_annotations_annotations_component__WEBPACK_IMPORTED_MODULE_12__.AnnotationsComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.viewer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.thumbnailsPanelElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.thumbnails = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.annotations = _t.first);
        }
      },
      hostBindings: function DocumentPreviewComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("resize", function DocumentPreviewComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        selectedItems: "selectedItems",
        folderId: "folderId",
        documentNameEditingAllowed: "documentNameEditingAllowed",
        previewDocument: "previewDocument"
      },
      outputs: {
        documentReloadRequired: "documentReloadRequired"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 7,
      consts: [["thumbnailsPanel", ""], ["viewerWrapper", ""], ["thumbnails", ""], ["viewer", ""], [1, "preview", "h-100", "d-flex", "flex-column", 3, "autoUpdatePerfectScroll"], ["class", "doc-preview-header pl-1 pr-3 d-flex justify-content-between", 4, "ngIf"], ["class", "viewer-wrapper col p-0 d-flex", 4, "ngIf"], ["class", "fax-mobile-thumbnails-container", 4, "ngIf"], [3, "viewer", "id", "pageNumber", "annotations", "showApplyButton", "reload", "annotationAdded", "annotationUpdated", "annotationRemoved", "applyAnnotations", 4, "ngIf"], [3, "viewer", "barcodes", 4, "ngIf"], [3, "passwordUpdated", "shouldOpen"], [1, "doc-preview-header", "pl-1", "pr-3", "d-flex", "justify-content-between"], ["class", "header-title", 4, "ngIf"], ["class", "viewer-controls d-flex", 4, "ngIf"], [1, "header-title"], [3, "field", "value", "disabled", "triggerBlurEventOnValueChange", "blur", "escape", 4, "ngIf"], [3, "blur", "escape", "field", "value", "disabled", "triggerBlurEventOnValueChange"], [1, "viewer-controls", "d-flex"], ["image", "shared/img/marker.svg", 3, "action", "disabled", "title", 4, "ngIf"], [1, "spacer"], ["image", "shared/img/magnify-plus.svg", 3, "action", "disabled", "title"], ["image", "shared/img/magnify-minus.svg", 3, "action", "disabled", "title"], ["image", "shared/img/arrow-expand-vertical.svg", 3, "action", "disabled", "title"], ["image", "shared/img/arrow-expand-horizontal.svg", 3, "action", "disabled", "title"], ["image", "shared/img/marker.svg", 3, "action", "disabled", "title"], [1, "viewer-wrapper", "col", "p-0", "d-flex"], ["appResizable", "", 1, "thumbnails", 3, "resize", "handles", "width", "preferenceName", "preferenceValue"], [3, "pages", "annotationsAllowed", "setCurrentPage", 4, "ngIf"], ["fxFlex", "auto", 1, "viewer", "col", "p-0", 2, "width", "0", 3, "perfectScrollbar"], ["class", "preview-message", 4, "ngIf"], ["style", "display: block", 3, "src", "page", "show-all", "render-text", "zoom", "original-size", "fit-to-page", "autoresize", "width", "height", "text-layer-rendered", 4, "ngIf"], [3, "setCurrentPage", "pages", "annotationsAllowed"], [1, "preview-message"], [2, "display", "block", 3, "text-layer-rendered", "src", "page", "show-all", "render-text", "zoom", "original-size", "fit-to-page", "autoresize"], [1, "fax-mobile-thumbnails-container"], [3, "pages", "annotationsAllowed", 4, "ngIf"], [3, "pages", "annotationsAllowed"], [3, "reload", "annotationAdded", "annotationUpdated", "annotationRemoved", "applyAnnotations", "viewer", "id", "pageNumber", "annotations", "showApplyButton"], [3, "viewer", "barcodes"]],
      template: function DocumentPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DocumentPreviewComponent_div_1_Template, 3, 2, "div", 5)(2, DocumentPreviewComponent_div_2_Template, 8, 9, "div", 6)(3, DocumentPreviewComponent_div_3_Template, 3, 2, "div", 7)(4, DocumentPreviewComponent_app_annotations_4_Template, 1, 5, "app-annotations", 8)(5, DocumentPreviewComponent_app_preview_barcodes_5_Template, 1, 2, "app-preview-barcodes", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "app-change-secure-user-password-modal", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("passwordUpdated", function DocumentPreviewComponent_Template_app_change_secure_user_password_modal_passwordUpdated_6_listener() {
            return ctx.onPasswordUpdated();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("autoUpdatePerfectScroll", ctx.directiveRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.redactionAllowed && ctx.viewer && !ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.currentPage == null ? null : ctx.currentPage.barcodes) && ctx.viewer);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("shouldOpen", ctx.shouldOpenChangePasswordModal);
        }
      },
      styles: [".preview .doc-preview-header {\n  height: 38px;\n  border-bottom: 1px solid #e0e3e6;\n  border-top: 1px solid #e0e3e6;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #151515;\n  font-size: 12px;\n}\n.preview .thumbnail-generator-wrapper {\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  width: 500px;\n}\n.preview .preview-message {\n  padding: 10px 10px 0 15px;\n  font-size: 14px;\n  text-align: center;\n  color: #666;\n}\n.preview .spacer {\n  margin-right: 25px;\n}\n.preview .fax-mobile-thumbnails-container {\n  height: 100%;\n}\n.preview .fax-mobile-thumbnails-container .preview-message {\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n  padding: 0px;\n}\n.preview .fax-mobile-thumbnails-container .preview-thumbnails {\n  padding: 0 !important;\n  margin-bottom: 8px;\n}\n.preview .fax-mobile-thumbnails-container .preview-thumbnails ul {\n  padding: 0 !important;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvZHVjdC1pdGVtL2RvY3VtZW50LXByZXZpZXcvZG9jdW1lbnQtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7QUFISjtBQU1FO0VBQ0UsWUFBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBTE47QUFPTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUxSIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXcge1xyXG4gIC5kb2MtcHJldmlldy1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUzZTY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTNlNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudGh1bWJuYWlsLWdlbmVyYXRvci13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByZXZpZXctbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIC5mYXgtbW9iaWxlLXRodW1ibmFpbHMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAucHJldmlldy1tZXNzYWdlIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByZXZpZXctdGh1bWJuYWlscyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}
const VIEWER_CONFIG = {
  maxScale: 5,
  minScale: 0.1,
  scaleIncrement: 0.1
};
class PreviewDocument {
  constructor(item, datasource, translate) {
    this.item = item;
    this.datasource = datasource;
    this.translate = translate;
    this.currentPage = 1;
    this.name = item.data.documentFilename;
    this.pageCount = item.data.pageCount;
    this.pageCountText = _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_3__.Filename.getPageCountText(this.pageCount, translate);
    this.pages = [];
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(new PreviewPage(i, datasource, item));
    }
  }
}
class PreviewPage {
  constructor(pageNumber, datasource, item) {
    this.datasource = datasource;
    this.item = item;
    this.annotations = [];
    this.barcodes = [];
    this.annotationsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
    this.onAnnotationsChanged = () => {
      this.annotationsChanged.next();
    };
    this.id = Date.now().toString() + Math.floor(Math.random() * 100);
    this.pageNumber = pageNumber;
    this.state = _document_capture_capture_models__WEBPACK_IMPORTED_MODULE_11__.PageState.Empty;
    this.fileName = item.data.documentFilename;
    if (!item.data.extendedDetails?.barcodes) return;
    this.barcodes = item.data.extendedDetails.barcodes.filter(x => x.page == pageNumber).map(x => new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.InboundLogBarcode(x));
  }
  getPage() {
    return new Promise((resolve, reject) => {
      this.datasource.getPage(this.item, this.pageNumber, blob => {
        this.originalFile = blob;
        this.url = window.URL.createObjectURL(blob);
        resolve();
      }, err => {
        reject(err);
      });
    });
  }
}

/***/ }),

/***/ 89890:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/product-item/document-preview/preview-thumbnails/preview-thumbnails.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreviewThumbnailsComponent: () => (/* binding */ PreviewThumbnailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../views/document-capture/capture-models */ 48004);






const _c0 = ["thumbnailsPanelScrollbar"];
const _c1 = ["viewer"];
const _c2 = () => ({
  suppressScrollX: true
});
function PreviewThumbnailsComponent_app_thumbnail_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-thumbnail", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("getThumbnail", function PreviewThumbnailsComponent_app_thumbnail_3_Template_app_thumbnail_getThumbnail_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.getThumbnail($event));
    })("selectPage", function PreviewThumbnailsComponent_app_thumbnail_3_Template_app_thumbnail_selectPage_0_listener() {
      const page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectPage(page_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const thumbnailsPanelScrollbar_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", page_r3)("panelScrollbar", thumbnailsPanelScrollbar_r4)("onWidthResized", ctx_r1.widthResizedSubject.asObservable());
  }
}
function PreviewThumbnailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "pdf-viewer", 7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page-rendered", function PreviewThumbnailsComponent_div_4_Template_pdf_viewer_page_rendered_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onRender());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const thumbnail_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", thumbnail_r6.clientWidth, "px")("height", thumbnail_r6.clientHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (ctx_r1.currentPage == null ? null : ctx_r1.currentPage.url) || "")("original-size", true)("fit-to-page", true)("show-all", false)("page", 1)("render-text", false);
  }
}
class PreviewThumbnailsComponent {
  constructor() {
    this.setCurrentPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.annotationsAllowed = false;
    this.waitingPages = [];
    this.currentPageNumber = 1;
    this.widthResized = () => {
      this.widthResizedSubject.next();
      if (!this.viewer) return;
      this.viewer.updateSize();
    };
    this.onAnnotationsLoaded = () => {
      if (!this.annotationsAllowed) return;
      this.pages.forEach(page => {
        page.onAnnotationsChanged();
      });
    };
    this.onAnnotationAdded = annotation => {
      if (!this.annotationsAllowed) return;
      const page = this.pages.find(x => x.pageNumber == annotation.pageNumber);
      if (!page) return;
      if (!page.annotations.find(x => x.id == annotation.id)) page.annotations.push(annotation);
      page.onAnnotationsChanged();
    };
    this.onAnnotationUpdated = annotation => {
      if (!this.annotationsAllowed) return;
      const page = this.pages.find(x => x.pageNumber == annotation.pageNumber);
      if (!page) return;
      const index = page.annotations.findIndex(x => x.id == annotation.id);
      if (index == -1) return;
      page.annotations[index] = annotation;
      page.onAnnotationsChanged();
    };
    this.onAnnotationRemoved = annotation => {
      if (!this.annotationsAllowed) return;
      const page = this.pages.find(x => x.pageNumber == annotation.pageNumber);
      if (!page) return;
      const index = page.annotations.findIndex(x => x.id == annotation.id);
      if (index != -1) page.annotations.splice(index, 1);
      page.onAnnotationsChanged();
    };
    this.widthResizedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnChanges(changes) {
    if (changes.pages) {
      this.waitingPages = [];
      if (!this.currentPage) {
        this.thumbnailsPanelScrollbar.scrollToTop(0, 0);
      }
    }
  }
  getThumbnail(page) {
    if (this.gettingThumbnailInProgress) {
      page.state = _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_0__.PageState.Loading;
      this.waitingPages.push(page);
    } else {
      page.state = _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_0__.PageState.Loading;
      this.gettingThumbnailInProgress = true;
      page.getPage().then(() => this.currentPage = page).catch(err => {
        this.deletePageFromWaitingList(page);
        page.state = _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_0__.PageState.FailedLoad;
        this.gettingThumbnailInProgress = false;
        if (this.waitingPages.length) {
          this.getThumbnail(this.waitingPages[0]);
        }
      });
    }
  }
  onRender() {
    if (!this.currentPage) {
      return;
    }
    const canvas = document.querySelector('.canvasWrapper canvas');
    this.currentPage.thumbnailUrl = canvas.toDataURL('image/jpeg');
    this.currentPage.state = _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_0__.PageState.Loaded;
    if (this.currentPage.pageNumber === this.currentPageNumber) {
      this.setCurrentPage.emit(this.currentPage);
    }
    this.gettingThumbnailInProgress = false;
    this.deletePageFromWaitingList(this.currentPage);
    this.currentPage = null;
    if (this.waitingPages.length) {
      this.getThumbnail(this.waitingPages[0]);
    }
    this.thumbnailsPanelScrollbar?.update();
  }
  deletePageFromWaitingList(page) {
    const pageIndex = this.waitingPages.findIndex(p => p.id === page.id);
    if (pageIndex > -1) {
      this.waitingPages.splice(pageIndex, 1);
    }
  }
  selectPage(page) {
    this.setCurrentPage.emit(page);
  }
  static {
    this.ɵfac = function PreviewThumbnailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PreviewThumbnailsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PreviewThumbnailsComponent,
      selectors: [["app-preview-thumbnails"]],
      viewQuery: function PreviewThumbnailsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.thumbnailsPanelScrollbar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.viewer = _t.first);
        }
      },
      inputs: {
        pages: "pages",
        annotationsAllowed: "annotationsAllowed"
      },
      outputs: {
        setCurrentPage: "setCurrentPage"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 4,
      consts: [["thumbnailsPanelScrollbar", "ngxPerfectScrollbar", "thumbnail", ""], ["viewer", ""], ["fxFlex", "auto", 1, "scroll-area", "pl-2", "pr-1", "pb-1", "h-100", "preview-thumbnails", 2, "position", "relative", 3, "perfectScrollbar"], [3, "page", "panelScrollbar", "onWidthResized", "getThumbnail", "selectPage", 4, "ngFor", "ngForOf"], ["class", "thumbnail-generator-wrapper", 4, "ngIf"], [3, "getThumbnail", "selectPage", "page", "panelScrollbar", "onWidthResized"], [1, "thumbnail-generator-wrapper"], [3, "page-rendered", "src", "original-size", "fit-to-page", "show-all", "page", "render-text"]],
      template: function PreviewThumbnailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PreviewThumbnailsComponent_app_thumbnail_3_Template, 1, 3, "app-thumbnail", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PreviewThumbnailsComponent_div_4_Template, 3, 10, "div", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentPage);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_blocks_filters_filters_module_ts-src_app_blocks_services_auto-execute-actions-49425a.js.map