"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_admin-metadata_admin-metadata_component_ts"],{

/***/ 66089:
/*!******************************************************************!*\
  !*** ./src/app/views/admin-metadata/admin-metadata.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMetaDataComponent: () => (/* binding */ AdminMetaDataComponent),
/* harmony export */   FieldTypesDataSource: () => (/* binding */ FieldTypesDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/components/created-modified/created-modified.component */ 60622);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _blocks_formatters_formatters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../blocks/formatters/formatters.component */ 32299);
/* harmony import */ var _validation_length_validation_length_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validation-length/validation-length.component */ 52573);
/* harmony import */ var _validation_date_validation_date_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validation-date/validation-date.component */ 63417);
/* harmony import */ var _validation_datasource_column_validation_datasource_column_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validation-datasource-column/validation-datasource-column.component */ 31251);
/* harmony import */ var _validation_regex_validation_regex_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./validation-regex/validation-regex.component */ 62337);
/* harmony import */ var _metadata_items_metadata_items_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./metadata-items/metadata-items.component */ 37679);
/* harmony import */ var _metadata_cascading_options_metadata_cascading_options_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./metadata-cascading-options/metadata-cascading-options.component */ 27783);
/* harmony import */ var _metadata_lineitems_metadata_lineitems_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./metadata-lineitems/metadata-lineitems.component */ 71479);
/* harmony import */ var _metadata_workflows_metadata_workflows_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./metadata-workflows/metadata-workflows.component */ 73464);
/* harmony import */ var _metadata_lookup_metadata_lookup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./metadata-lookup/metadata-lookup.component */ 26417);





































const _c0 = () => ({});
function AdminMetaDataComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19)(1, "app-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_div_20_div_1_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.mdd.defaultValue, $event) || (ctx_r1.mdd.defaultValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx_r1.fieldDefaultValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx_r1.mdd.defaultValue);
  }
}
function AdminMetaDataComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19)(1, "app-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_div_20_div_2_Template_app_checkbox_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.mdd.allowNoSelection, $event) || (ctx_r1.mdd.allowNoSelection = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx_r1.mdd.allowNoSelection);
  }
}
function AdminMetaDataComponent_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19)(1, "app-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_div_20_div_3_Template_app_checkbox_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.mddStickyField, $event) || (ctx_r1.mddStickyField = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx_r1.mddStickyField);
  }
}
function AdminMetaDataComponent_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19)(1, "app-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_div_20_div_4_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.mdd.groupingFormat, $event) || (ctx_r1.mdd.groupingFormat = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx_r1.fieldGroupingFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx_r1.mdd.groupingFormat);
  }
}
function AdminMetaDataComponent_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19)(1, "app-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_div_20_div_5_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.mdd.expression, $event) || (ctx_r1.mdd.expression = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx_r1.fieldExpression);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx_r1.mdd.expression);
  }
}
function AdminMetaDataComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19)(1, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_div_20_div_6_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.validatorType, $event) || (ctx_r1.validatorType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("blur", function AdminMetaDataComponent_div_20_div_6_Template_app_field_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.fieldValidatorTypeChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx_r1.fieldValidation);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx_r1.validatorType);
  }
}
function AdminMetaDataComponent_div_20_div_7_div_1_app_validation_length_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "app-validation-length", 26);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("validator", ctx_r1.validatorLength);
  }
}
function AdminMetaDataComponent_div_20_div_7_div_1_app_validation_regex_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "app-validation-regex", 26);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("validator", ctx_r1.validatorRegEx);
  }
}
function AdminMetaDataComponent_div_20_div_7_div_1_app_validation_date_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "app-validation-date", 26);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("validator", ctx_r1.validatorDate);
  }
}
function AdminMetaDataComponent_div_20_div_7_div_1_app_validation_datasource_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "app-validation-datasource", 26);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("validator", ctx_r1.validatorDataSourceColumn);
  }
}
function AdminMetaDataComponent_div_20_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, AdminMetaDataComponent_div_20_div_7_div_1_app_validation_length_1_Template, 1, 1, "app-validation-length", 25)(2, AdminMetaDataComponent_div_20_div_7_div_1_app_validation_regex_2_Template, 1, 1, "app-validation-regex", 25)(3, AdminMetaDataComponent_div_20_div_7_div_1_app_validation_date_3_Template, 1, 1, "app-validation-date", 25)(4, AdminMetaDataComponent_div_20_div_7_div_1_app_validation_datasource_4_Template, 1, 1, "app-validation-datasource", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "app-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_div_20_div_7_div_1_Template_app_field_valueChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.validationMessage, $event) || (ctx_r1.validationMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.validatorType === "MetaDataLengthValidator");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.validatorType === "MetaDataRegExValidator");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.validatorType === "MetaDataDateValidator");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.validatorType === "MetaDataDataSourceColumnValidator");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx_r1.fieldValidationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx_r1.validationMessage);
  }
}
function AdminMetaDataComponent_div_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, AdminMetaDataComponent_div_20_div_7_div_1_Template, 6, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.validatorType !== "MetaDataNOOPValidator");
  }
}
function AdminMetaDataComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, AdminMetaDataComponent_div_20_div_1_Template, 2, 2, "div", 16)(2, AdminMetaDataComponent_div_20_div_2_Template, 2, 1, "div", 16)(3, AdminMetaDataComponent_div_20_div_3_Template, 2, 1, "div", 16)(4, AdminMetaDataComponent_div_20_div_4_Template, 2, 2, "div", 16)(5, AdminMetaDataComponent_div_20_div_5_Template, 2, 2, "div", 16)(6, AdminMetaDataComponent_div_20_div_6_Template, 2, 2, "div", 16)(7, AdminMetaDataComponent_div_20_div_7_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mdd.type !== 9 && ctx_r1.mdd.type !== 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mdd.type == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mdd.type !== 9 && ctx_r1.mdd.type !== 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mdd.type === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mdd.type === 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mdd.type !== 9 && ctx_r1.mdd.type !== 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.mdd.type !== 9);
  }
}
function AdminMetaDataComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-metadata-workflows", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("mdd", ctx_r1.mdd);
  }
}
function AdminMetaDataComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-formatters", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formatters", ctx_r1.mdd.formatters)("testHeaderText", "admin-metadata-formatters.test-formatters-header");
  }
}
function AdminMetaDataComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 17)(1, "app-metadata-lookup", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("optionsLoaded", function AdminMetaDataComponent_div_23_Template_app_metadata_lookup_optionsLoaded_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.onLoadOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("mdd", ctx_r1.mdd);
  }
}
function AdminMetaDataComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-metadata-items", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx_r1.getMetaDataCascadingOptionsDataSource())("required", ctx_r1.itemsAreRequired())("newListItem", ctx_r1.newMetaDataItem);
  }
}
function AdminMetaDataComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-metadata-lineitems", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("mdd", ctx_r1.mdd);
  }
}
function AdminMetaDataComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-metadata-cascading-options", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx_r1.getMetaDataCascadingOptionsDataSource());
  }
}
class AdminMetaDataComponent {
  get mddType() {
    return `${this.mdd.type}`;
  }
  set mddType(val) {
    this.mdd.type = Number(val);
  }
  get mddStickyField() {
    return Boolean(this.mdd.stickyField);
  }
  set mddStickyField(val) {
    this.mdd.stickyField = `${val}`;
  }
  constructor(translateService, router, route, hydraApi, toastr, errorsService, delay, spinner, userStateService) {
    this.translateService = translateService;
    this.router = router;
    this.route = route;
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.delay = delay;
    this.spinner = spinner;
    this.userStateService = userStateService;
    this.activeTab = 'general';
    this.tabs = new Array();
    this.validatorType = 'MetaDataNOOPValidator';
    this.validationTypes = new TypeValidationsDataSource(this.translateService);
    this.getMetaDataDataListDataSourcee = () => this.mdd.dataSource;
    this.getMetaDataCascadingOptionsDataSource = () => this.mdd.dataSource;
    this.rightControls = [];
    this.dataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataListDataSourcee();
    this.validation = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataNOOPValidator();
    this.mdd = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataDefinition({
      id: '',
      tenantId: '',
      name: '',
      label: '',
      defaultValue: '',
      allowNoSelection: false,
      hasValidation: false,
      validation: new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataNOOPValidator(),
      dataSource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataListDataSourcee(),
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text,
      lineItemConfigurations: [],
      workflowsAssigned: false,
      assignedWorkflowIds: [],
      formatters: [],
      stickyField: false,
      dateCreatedUTC: new Date(),
      dateModifiedUTC: new Date(),
      groupingFormat: 'MM/dd/yyyy',
      expression: ''
    });
    this.newMetaDataItem = {
      name: '',
      value: ''
    };
    this.current = [];
    this.currentType = null;
    this.dataSourcesBackup = {};
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_23__.Subscription();
    this.getTabs = () => {
      const tabs = new Array();
      if (this.mdd.type !== shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.LineItems) {
        tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Tab('general', this.translateService.instant('admin-metadata.general')));
      }
      tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Tab('assign', this.translateService.instant('admin-metadata.assign')));
      if (this.mdd.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text && this.userStateService.hasFeature(shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Feature.DateFieldFormatting)) {
        tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Tab('formatting', this.translateService.instant('admin-metadata.formatting')));
      }
      if (this.shouldAddItemsTab()) {
        tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Tab('items', this.translateService.instant('admin-metadata.items')));
      }
      if (this.mdd.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.LineItems) {
        tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Tab('lineitems', this.translateService.instant('admin-metadata.lineitems')));
      }
      if (this.mdd.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Lookup) {
        tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Tab('lookup', this.translateService.instant('admin-metadata.lookup')));
      }
      if (this.mdd.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.CascadingOptions) {
        tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Tab('cascading-options', this.translateService.instant('admin-metadata.options')));
      }
      return tabs;
    };
    this.shouldAddItemsTab = () => {
      return this.mdd.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.List || this.validatorType === 'MetaDataDataSourceValidator';
    };
    this.fieldValidatorTypeChanged = value => {
      this.tabs = this.getTabs();
    };
    this.fieldTypeChanged = value => {
      const metaDataType = parseInt(value);
      this.mdd.type = metaDataType;
      const validations = this.validationTypes.validations.filter(v => v.types.length == 0 || v.types.includes(metaDataType));
      if (validations.find(v => v.value == this.validatorType) == null) {
        this.validatorType = 'MetaDataNOOPValidator';
      }
      this.delay.execute(() => this.validationTypes.setMetaDataType(metaDataType), 50);
      this.tabs = this.getTabs();
      this.activeTab = metaDataType === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.LineItems ? 'lineitems' : 'general';
      if (this.currentType != null && this.mdd) this.dataSourcesBackup[this.currentType] = this.mdd.dataSource;
      this.currentType = metaDataType;
      if (this.dataSourcesBackup[metaDataType]) {
        this.mdd.dataSource = this.dataSourcesBackup[metaDataType];
        return;
      }
      if (!(this.mdd.dataSource instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataListDataSourcee) && metaDataType === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.List) {
        this.mdd.dataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataListDataSourcee();
      } else if (!(this.mdd.dataSource instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataCascadingOptionsDataSource) && metaDataType === shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.CascadingOptions) {
        this.mdd.dataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataCascadingOptionsDataSource();
      }
      if (metaDataType != shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text) {
        this.mdd.formatters = [];
      }
    };
    this.onSave = () => {
      const errors = this.validateNewMetaDataItem();
      if (errors.length) {
        this.errorsService.showErrorsModal(errors, 'Metadata-Form.metadata-validation-errors');
        return;
      }
      this.mdd.validation = this.getSelectedValidator();
      this.mdd.validation.validationMessage = this.validationMessage;
      if (this.mdd.type !== shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Lookup) this.mdd.lookup = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataNoopLookup();
      if (this.mdd.id) {
        this.hydraApi.updateMetaDataDefinition(this.mdd, this.metadataSaved, this.metadataSaveFailed);
      } else {
        this.hydraApi.createMetaDataDefinition(this.mdd, this.metadataSaved, this.metadataSaveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.getSelectedValidator = () => {
      if (this.validatorType == 'MetaDataRegExValidator') return this.validatorRegEx;else if (this.validatorType == 'MetaDataLengthValidator') return this.validatorLength;else if (this.validatorType == 'MetaDataNOOPValidator') return new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataNOOPValidator();else if (this.validatorType == 'MetaDataDataSourceValidator') return new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataDataSourceValidator();else if (this.validatorType == 'MetaDataDataSourceColumnValidator') return this.validatorDataSourceColumn;else if (this.validatorType == 'MetaDataNotBlankValidator') return new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataNotBlankValidator();else if (this.validatorType == 'MetaDataCascadingOptionsValidator') return new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataCascadingOptionsValidator();else if (this.validatorType == 'MetaDataDateValidator') return this.validatorDate;
      throw new Error(`unknown validator selection ${this.validatorType}`);
    };
    this.metadataSaved = result => {
      if (this.mdd.lookup instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CSVLookup) {
        const csvLookup = this.mdd.lookup;
        if (csvLookup.csvFile) {
          this.hydraApi.updateCSVLookupData(result.object.id, csvLookup.csvFile, this.metaDataSavedSuccessfully, this.metadataSaveFailed);
          return;
        }
      }
      this.metaDataSavedSuccessfully();
    };
    this.metaDataSavedSuccessfully = () => {
      this.toastr.success(this.translateService.instant('Metadata-Form.MetadataDefinition-Saved'));
      this.returnToGrid();
      this.spinner.hide();
    };
    this.metadataSaveFailed = err => {
      if (err && err.errors && !err.success) {
        this.errorsService.showErrorsModal(err.errors, 'Metadata-Form.metadata-validation-errors');
        this.spinner.hide();
        return;
      }
      this.toastr.error(this.translateService.instant('Metadata-Form.MetadataDefinition-Save-Failed'));
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('settings/BambaSettingsApplication/BambaSettingsApplication-Upland.Bamba.Application.Settings.MetaData');
    };
    this.loadMetadata = () => {
      if (this.routeData.type === 'properties' || this.routeData.type === 'duplicate') {
        this.hydraApi.getMetaDataDefinition(this.routeParams.metadataid, this.metaDataLoaded, this.metaDataDefinitionLoadFailed);
        return;
      }
      this.metaDataLoaded(this.mdd);
    };
    this.metaDataLoaded = m => {
      if (this.routeData.type === 'duplicate') {
        m.name = `${this.translateService.instant('Admin.CopyOf')} ${m.name}`;
        m.id = '';
      }
      this.validationTypes.setMetaDataType(m.type);
      this.validatorType = m.validation.type;
      this.validationMessage = m.validation.validationMessage;
      if (m.validation.type == 'MetaDataRegExValidator') {
        this.validatorRegEx = m.validation;
      } else if (m.validation.type == 'MetaDataLengthValidator') {
        this.validatorLength = m.validation;
      } else if (m.validation.type == 'MetaDataDateValidator') {
        this.validatorDate = m.validation;
      } else if (m.validation.type == 'MetaDataDataSourceColumnValidator') {
        this.validatorDataSourceColumn = m.validation;
      }
      this.mdd = m;
      this.fieldTypeChanged(this.mdd.type.toString());
    };
    this.metaDataDefinitionLoadFailed = () => {
      this.toastr.error(this.translateService.instant('Metadata-Form.metadata-load-failed'));
    };
    this.itemsAreRequired = () => {
      if (this.validatorType === 'MetaDataDataSourceValidator') return true;
      if (this.mdd.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.List) return true;
      return false;
    };
    this.createFields = () => {
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text,
        label: this.translateService.instant('Metadata-Form.Name'),
        placeholder: this.translateService.instant('Metadata-Form.Name'),
        required: true
      });
      this.fieldLabel = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text,
        label: this.translateService.instant('Metadata-Form.DisplayName'),
        placeholder: this.translateService.instant('Metadata-Form.DisplayName'),
        required: true
      });
      this.fieldType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.List,
        label: this.translateService.instant('Metadata-Form.Type'),
        placeholder: this.translateService.instant('Metadata-Form.Type'),
        required: true,
        datasource: new FieldTypesDataSource(this.translateService, this.userStateService)
      });
      this.fieldValidation = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.List,
        label: this.translateService.instant('Metadata-Form.Validation'),
        placeholder: this.translateService.instant('Metadata-Form.Validation'),
        required: true,
        datasource: this.validationTypes
      });
      this.fieldValidationMessage = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text,
        label: this.translateService.instant('Metadata-Form.ValidationMessage'),
        placeholder: this.translateService.instant('Metadata-Form.ValidationMessage-placeholder'),
        required: false
      });
      this.fieldDefaultValue = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text,
        label: this.translateService.instant('Metadata-Form.default-value'),
        placeholder: this.translateService.instant('Metadata-Form.default-value-placeholder'),
        required: false,
        substitutable: true,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetadataIntellisenseDatasource(this.userStateService)
      });
      this.fieldGroupingFormat = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text,
        label: this.translateService.instant('Metadata-Form.grouping-format'),
        placeholder: this.translateService.instant('Metadata-Form.grouping-format-placeholder'),
        required: true
      });
      this.fieldExpression = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text,
        label: this.translateService.instant('Metadata-Form.expression-field'),
        placeholder: this.translateService.instant('Metadata-Form.expression-field-placeholder'),
        required: true
      });
    };
    this.activateTab = tab => {
      this.activeTab = tab;
    };
  }
  ngOnInit() {
    this.createValidators();
    this.createButtons();
    this.createFields();
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      this.loadMetadata();
    }));
  }
  createValidators() {
    this.validatorRegEx = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataRegExValidator();
    this.validatorLength = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataLengthValidator();
    this.validatorDate = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataDateValidator();
    this.validatorDataSourceColumn = new shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataDataSourceColumnValidator();
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_2__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_2__.Control(this.onCancel, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.rightControls.push(this.saveButton);
    this.rightControls.push(this.cancelButton);
    this.translateService.get('Metadata.Save').subscribe(res => {
      this.saveButton.setTranslation(res);
    });
    this.translateService.get('Metadata.Cancel').subscribe(res => {
      this.cancelButton.setTranslation(res);
    });
  }
  validateNewMetaDataItem() {
    if (!this.shouldAddItemsTab() || !this.newMetaDataItem.name.trim() && !this.newMetaDataItem.value.trim()) {
      return [];
    }
    return ['Metadata-Form.new-item-not-saved'];
  }
  onLoadOptions() {}
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminMetaDataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMetaDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_0__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
      type: AdminMetaDataComponent,
      selectors: [["app-admin-metadata"]],
      decls: 27,
      vars: 27,
      consts: [["appAutoFocusFirstInput", "", 1, "admin-metadata", "project-list-dashboard-body", "d-flex", "flex-column", "min-h-fit-content"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "min-h-fit-content"], [1, "panel", "h-100", "row", "m-0", "min-h-fit-content"], [1, "col-12", "col-md-3", "properties-panel"], [3, "id", "createdDate", "modifiedDate"], [1, "col", "p-0"], [3, "valueChange", "field", "value"], [3, "valueChange", "blur", "field", "value"], [1, "col-12", "col-md-9", "panel", "p-0", "border-bottom-0", "d-flex", "flex-column", "min-h-fit-content"], [1, "panel-wrapper", "vcenter"], [1, "col", "panel-header"], [3, "tabSelected", "tabs", "activeTab"], ["fxFlex", "auto", 1, "tab-content", "content-padding", "col", "pt-2", 3, "perfectScrollbar"], ["class", "container-fluid", 4, "ngIf"], ["class", "container-fluid h-100", 4, "ngIf"], ["class", "h-100", 4, "ngIf"], [1, "container-fluid"], ["class", "validator-panel h-100", 4, "ngIf"], [1, "h-100"], ["label", "Metadata-Form.allow-no-selection", 3, "valueChange", "value"], ["label", "Metadata-Form.Sticky", 3, "valueChange", "value"], [1, "validator-panel", "h-100"], ["class", "range-value", 4, "ngIf"], [1, "range-value"], [3, "validator", 4, "ngIf"], [3, "validator"], [1, "container-fluid", "h-100"], [3, "mdd"], [3, "formatters", "testHeaderText"], [3, "optionsLoaded", "mdd"], [1, "d-block", "h-100", 3, "dataSource", "required", "newListItem"], [1, "d-block", "h-100", 3, "dataSource"]],
      template: function AdminMetaDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-secondary-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "app-created-modified", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 6)(8, "app-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_Template_app_field_valueChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.mdd.name, $event) || (ctx.mdd.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 6)(10, "app-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_Template_app_field_valueChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.mdd.label, $event) || (ctx.mdd.label = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 6)(12, "app-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("valueChange", function AdminMetaDataComponent_Template_app_field_valueChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.mddType, $event) || (ctx.mddType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("blur", function AdminMetaDataComponent_Template_app_field_blur_12_listener($event) {
            return ctx.fieldTypeChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "app-tab-bar", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("tabSelected", function AdminMetaDataComponent_Template_app_tab_bar_tabSelected_18_listener($event) {
            return ctx.activateTab($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, AdminMetaDataComponent_div_20_Template, 8, 7, "div", 14)(21, AdminMetaDataComponent_div_21_Template, 2, 1, "div", 15)(22, AdminMetaDataComponent_div_22_Template, 2, 2, "div", 16)(23, AdminMetaDataComponent_div_23_Template, 2, 1, "div", 14)(24, AdminMetaDataComponent_div_24_Template, 2, 3, "div", 16)(25, AdminMetaDataComponent_div_25_Template, 2, 1, "div", 16)(26, AdminMetaDataComponent_div_26_Template, 2, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 22, "Metadata.HeadText"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("id", ctx.mdd.id)("createdDate", ctx.mdd.dateCreatedUTC)("modifiedDate", ctx.mdd.dateModifiedUTC);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx.fieldName);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx.mdd.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx.fieldLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx.mdd.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("field", ctx.fieldType);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("value", ctx.mddType);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](17, 24, "admin-user.properties"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("tabs", ctx.tabs)("activeTab", ctx.activeTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeTab === "general");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeTab === "assign");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeTab === "formatting");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeTab === "lookup");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeTab === "items");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeTab === "lineitems");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeTab === "cascading-options");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__.SecondaryHeaderComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_29__.PerfectScrollbarDirective, _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_7__.CreatedModifiedComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__.CheckboxComponent, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_11__.TabBarComponent, _blocks_formatters_formatters_component__WEBPACK_IMPORTED_MODULE_12__.FormattersComponent, _validation_length_validation_length_component__WEBPACK_IMPORTED_MODULE_13__.ValidationLengthComponent, _validation_date_validation_date_component__WEBPACK_IMPORTED_MODULE_14__.ValidationDateComponent, _validation_datasource_column_validation_datasource_column_component__WEBPACK_IMPORTED_MODULE_15__.ValidationDataSourceColumnComponent, _validation_regex_validation_regex_component__WEBPACK_IMPORTED_MODULE_16__.ValidationRegexComponent, _metadata_items_metadata_items_component__WEBPACK_IMPORTED_MODULE_17__.MetadataItemsComponent, _metadata_cascading_options_metadata_cascading_options_component__WEBPACK_IMPORTED_MODULE_18__.MetaDataCascadingOptionsComponent, _metadata_lineitems_metadata_lineitems_component__WEBPACK_IMPORTED_MODULE_19__.MetadataLineitemsComponent, _metadata_workflows_metadata_workflows_component__WEBPACK_IMPORTED_MODULE_20__.MetadataWorkflowsComponent, _metadata_lookup_metadata_lookup_component__WEBPACK_IMPORTED_MODULE_21__.MetadataLookupComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-metadata {\n  line-height: 1.4em;\n  padding-bottom: 15px;\n  height: 100%;\n}\n.admin-metadata.min-h-fit-content,\n.admin-metadata .min-h-fit-content {\n  min-height: fit-content !important;\n}\n\n.admin-metadata .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-metadata .secondary-header .section-header {\n  position: static !important;\n}\n\n.admin-metadata .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n\n.admin-metadata .properties-panel {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n\n.admin-metadata .validator-panel {\n  padding-left: 20px;\n}\n\n.admin-metadata .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.admin-metadata .panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n\n.admin-metadata .panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1ldGFkYXRhL2FkbWluLW1ldGFkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTdPQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBZ1BGO0FBOU9FOztFQUVFLGtDQUFBO0FBZ1BKOztBQTVPQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUErT0Y7QUE5T0U7RUFDRSwyQkFBQTtBQWdQSjs7QUE1T0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBK09GOztBQTVPQTtFQUNFLGlCQUFBO0VBQ0EsOENEbUR3QjtFQ2xEeEIsK0JBQUE7QUErT0Y7O0FBNU9BO0VBQ0Usa0JBQUE7QUErT0Y7O0FBNU9BO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUErT0Y7O0FBNU9BO0VBQ0UseUJENkJRO0VDNUJSLGdDQUFBO0VBQ0EsYUFBQTtBQStPRjs7QUE1T0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUErT0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5hZG1pbi1tZXRhZGF0YSB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJi5taW4taC1maXQtY29udGVudCxcclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5hZG1pbi1tZXRhZGF0YSAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5hZG1pbi1tZXRhZGF0YSAucGFuZWwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG59XHJcblxyXG4uYWRtaW4tbWV0YWRhdGEgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG59XHJcblxyXG4uYWRtaW4tbWV0YWRhdGEgLnZhbGlkYXRvci1wYW5lbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYWRtaW4tbWV0YWRhdGEgLnByb3BlcnRpZXMtcGFuZWwtc2VwYXJhdG9yIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmFkbWluLW1ldGFkYXRhIC5wYW5lbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5hZG1pbi1tZXRhZGF0YSAucGFuZWwtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}
class ValidationItem {
  constructor(value, name, types) {
    this.value = value;
    this.name = name;
    this.types = types;
  }
}
class TypeValidationsDataSource {
  constructor(translate) {
    this.translate = translate;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_30__.Subject();
    this.validations = [new ValidationItem('MetaDataLengthValidator', this.translate.instant('Metadata-Form.Length'), [shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text]), new ValidationItem('MetaDataDataSourceValidator', this.translate.instant('Metadata-Form.List'), [shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.List]), new ValidationItem('MetaDataDataSourceColumnValidator', 'Data Source Column', [shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Decimal, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Date, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Integer, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text]), new ValidationItem('MetaDataNotBlankValidator', this.translate.instant('Metadata-Form.NotBlank'), [shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Integer, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Currency, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Decimal, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Date, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Lookup]), new ValidationItem('MetaDataNOOPValidator', this.translate.instant('Metadata-Form.None'), []), new ValidationItem('MetaDataRegExValidator', this.translate.instant('Metadata-Form.Regex'), [shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Text, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Integer, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Currency, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Decimal]), new ValidationItem('MetaDataCascadingOptionsValidator', this.translate.instant('Metadata-Form.CascadingOptions'), [shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.CascadingOptions]), new ValidationItem('MetaDataDateValidator', this.translate.instant('Metadata-Form.Date'), [shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.MetaDataType.Date])];
    this.setMetaDataType = mdt => {
      this.metaDataType = mdt;
      this.changed.next();
    };
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    const validations = this.validations.filter(v => v.types.length == 0 || v.types.includes(this.metaDataType));
    successCallBack(validations);
  }
}
class FieldTypesDataSource {
  constructor(translate, userStateService) {
    this.translate = translate;
    this.userStateService = userStateService;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_30__.Subject();
    this.types = [];
    this.types = [{
      value: '0',
      name: this.translate.instant('Metadata-Form.Text')
    }, {
      value: '1',
      name: this.translate.instant('Metadata-Form.LargeText')
    }, {
      value: '3',
      name: this.translate.instant('Metadata-Form.Integer')
    }, {
      value: '4',
      name: this.translate.instant('Metadata-Form.Currency')
    }, {
      value: '6',
      name: this.translate.instant('Metadata-Form.Date')
    }, {
      value: '8',
      name: this.translate.instant('Metadata-Form.List')
    }, {
      value: '9',
      name: this.translate.instant('Metadata-Form.LineItems')
    }, {
      value: '10',
      name: this.translate.instant('Metadata-Form.Decimal')
    }, {
      value: '12',
      name: this.translate.instant('Metadata-Form.Expression')
    }];
    if (this.userStateService.hasFeature(shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.Feature.ManageDataSources)) {
      this.types.push({
        value: '11',
        name: this.translate.instant('Metadata-Form.Lookup')
      });
      this.types.push({
        value: '13',
        name: this.translate.instant('Metadata-Form.CascadingOptions')
      });
    }
    this.types.sort((x, y) => x.name.localeCompare(y.name));
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    successCallBack(this.types);
  }
}

/***/ }),

/***/ 27783:
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-cascading-options/metadata-cascading-options.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaDataCascadingOptionsComponent: () => (/* binding */ MetaDataCascadingOptionsComponent)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






















const _c0 = () => ({
  suppressScrollY: false
});
function MetaDataCascadingOptionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Metadata-Form.no-datasources"), " ");
  }
}
function MetaDataCascadingOptionsComponent_div_2_app_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function MetaDataCascadingOptionsComponent_div_2_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.dataSource.dataSourceId, $event) || (ctx_r2.dataSource.dataSourceId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function MetaDataCascadingOptionsComponent_div_2_app_field_2_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onDataSourceChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r2.datasourcesField);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r2.dataSource.dataSourceId);
  }
}
function MetaDataCascadingOptionsComponent_div_2_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 22)(5, "div", 23)(6, "app-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function MetaDataCascadingOptionsComponent_div_2_tr_30_Template_app_field_valueChange_6_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r5.metaDataId, $event) || (item_r5.metaDataId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 22)(8, "div", 23)(9, "app-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function MetaDataCascadingOptionsComponent_div_2_tr_30_Template_app_field_valueChange_9_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r5.name, $event) || (item_r5.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 22)(11, "div", 23)(12, "app-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function MetaDataCascadingOptionsComponent_div_2_tr_30_Template_app_field_valueChange_12_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r5.value, $event) || (item_r5.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 25)(14, "div", 26)(15, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MetaDataCascadingOptionsComponent_div_2_tr_30_Template_i_click_15_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.deleteItem(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r2.createField("", "", ctx_r2.dataFieldsDataSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", item_r5.metaDataId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r2.createField("", "", ctx_r2.columnsDataSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r2.createField("", "", ctx_r2.columnsDataSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", item_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "items-delete-", item_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 9, "Metadata-Form.item-delete"));
  }
}
function MetaDataCascadingOptionsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MetaDataCascadingOptionsComponent_div_2_app_field_2_Template, 1, 2, "app-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 7)(4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MetaDataCascadingOptionsComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onAddValue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "table", 9)(9, "thead")(10, "tr")(11, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 11)(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 11)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 11)(22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th", 12)(26, "div", 13)(27, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MetaDataCascadingOptionsComponent_div_2_Template_i_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.deleteAllItems());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "tbody", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkDropListDropped", function MetaDataCascadingOptionsComponent_div_2_Template_tbody_cdkDropListDropped_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.dropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, MetaDataCascadingOptionsComponent_div_2_tr_30_Template, 17, 11, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.datasourcesLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 10, "Metadata-Form.add-option"))("disabled", !(ctx_r2.dataSource == null ? null : ctx_r2.dataSource.dataSourceId == null ? null : ctx_r2.dataSource.dataSourceId.trim()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 12, "Metadata-Form.add-option"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 14, "Metadata-Form.data-field"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 16, "Metadata-Form.DisplayName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 18, "Metadata-Form.Value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 20, "Metadata-Form.item-delete-all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.dataSource.dataSet);
  }
}
class MetaDataCascadingOptionsComponent {
  constructor(hydraApi, translate, errorsService, delay, toastr, userState, spinner) {
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.errorsService = errorsService;
    this.delay = delay;
    this.toastr = toastr;
    this.userState = userState;
    this.spinner = spinner;
    this.maxOptions = 8;
    this.datasourceColumnsLoaded = false;
    this.dataFieldsLoaded = false;
    this.datasourcesLoaded = false;
    this.datasourcesLoadSucceeded = datasources => {
      this.allDataSources = datasources;
      const columnsFields = [];
      for (let i = 0; i < datasources.length; i++) {
        columnsFields.push({
          name: this.translate.instant(datasources[i].name),
          value: datasources[i].id
        });
      }
      this.datasourcesDataSource.updateOptions(columnsFields);
      this.onDataSourceChanged(this.dataSource.dataSourceId);
      this.datasourcesLoaded = true;
      this.spinner.hide();
    };
    this.datasourcesLoadFailed = error => {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('Metadata-Form.loading-datasources-failed', error);
      this.spinner.hide();
    };
    this.loadMetaData = () => {
      const metadataFields = [];
      for (let i = 0; i < this.userState.user.metaData.length; i++) {
        metadataFields.push({
          name: this.userState.user.metaData[i].name,
          value: this.userState.user.metaData[i].id
        });
      }
      this.dataFieldsDataSource.updateOptions(metadataFields);
      this.dataFieldsLoaded = true;
    };
    this.createField = (label, placeholder, datasource) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: label ? this.translate.instant(label) : '',
        placeholder: placeholder ? this.translate.instant(placeholder) : '',
        required: true,
        datasource: datasource
      });
    };
    this.onAddValue = () => {
      if (!this.validate()) return;
      this.dataSource.dataSet.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CascadingFieldOptions('', '', ''));
      this.delay.execute(() => {
        this.directiveRef?.scrollToBottom(0, 300);
      }, 100);
    };
    this.deleteAllItems = () => {
      this.dataSource.dataSet = [];
      this.delay.execute(() => {
        this.directiveRef?.scrollToTop(0, 300);
      }, 100);
    };
    this.deleteItem = item => {
      const rowIndexToDelete = this.dataSource.dataSet.indexOf(item);
      if (rowIndexToDelete > -1) {
        this.dataSource.dataSet.splice(rowIndexToDelete, 1);
      }
    };
    this.onDataSourceChanged = value => {
      if (!this.allDataSources) return;
      const dataSource = this.allDataSources.find(x => x.id == value);
      if (!dataSource) return;
      const columnsFields = [];
      for (let i = 0; i < dataSource.columns.length; i++) {
        columnsFields.push({
          name: this.translate.instant(dataSource.columns[i].name),
          value: dataSource.columns[i].id
        });
      }
      this.columnsDataSource.updateOptions(columnsFields);
      this.datasourceColumnsLoaded = true;
    };
  }
  ngOnInit() {
    this.spinner.show(this.translate.instant('Common.Loading'), document.body);
    this.datasourcesDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.columnsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.dataFieldsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.hydraApi.getAllDataSources(this.datasourcesLoadSucceeded, this.datasourcesLoadFailed);
    this.loadMetaData();
    this.datasourcesField = this.createField('Metadata-Form.datasource', 'Metadata-Form.datasource', this.datasourcesDataSource);
  }
  validate() {
    const validationErrors = [];
    if (this.dataSource.dataSet && this.dataSource.dataSet.length >= this.maxOptions) {
      validationErrors.push('Metadata-Form.max-options');
    }
    if (!validationErrors.length) return true;
    this.errorsService.showErrorsModal(validationErrors, 'Metadata-Form.items-validation-errors');
    return false;
  }
  dropped(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.moveItemInArray)(this.dataSource.dataSet, event.previousIndex, event.currentIndex);
  }
  static {
    this.ɵfac = function MetaDataCascadingOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetaDataCascadingOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: MetaDataCascadingOptionsComponent,
      selectors: [["app-metadata-cascading-options"]],
      viewQuery: function MetaDataCascadingOptionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        }
      },
      inputs: {
        dataSource: "dataSource",
        maxOptions: "maxOptions"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "metadata-cascading-options", "h-100", "d-flex", "flex-column"], ["class", "h-100 d-flex justify-content-center align-items-center", 4, "ngIf"], ["class", "pick-list__configuration h-100 d-flex flex-column", 4, "ngIf"], [1, "h-100", "d-flex", "justify-content-center", "align-items-center"], [1, "pick-list__configuration", "h-100", "d-flex", "flex-column"], [1, "d-flex", "align-items-end"], ["class", "col-4 p-0", 3, "field", "value", "valueChange", 4, "ngIf"], [1, "col-8", "p-0", "text-right"], ["id", "btn-items-Add Item", 1, "add-button", "btn", "btn-secondary", "btn-minwidth", "mr-0", 2, "margin-bottom", "5px", 3, "click", "title", "disabled"], [1, "table", "draggable"], [1, "table__th-control", "action-th"], ["width", "30%", 1, "table__th-content"], [1, "table__th-control", "action-th", "delete-all"], [1, "text-center"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title"], ["fxFlex", "auto", "cdkDropList", "", 1, "table__body", "ps", "col", "p-0", 3, "cdkDropListDropped", "perfectScrollbar"], ["class", "table__table-row", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "col-4", "p-0", 3, "valueChange", "field", "value"], ["cdkDrag", "", 1, "table__table-row"], [1, "table__control-cell", "p-1", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "checkbox", "table__checkbox", "d-flex", "align-items-center", "justify-content-center", "h-100"], ["cdkDragHandle", "", 1, "icomoon-grip-small", "table__th-grip"], ["width", "30%", 1, "table__cell", 2, "cursor", "default !important"], [1, "table__cell-content"], [3, "valueChange", "field", "value"], [1, "table__control-cell", "p-1", "d-flex", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "checkbox", "table__checkbox"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title", "id"]],
      template: function MetaDataCascadingOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MetaDataCascadingOptionsComponent_div_1_Template, 3, 3, "div", 1)(2, MetaDataCascadingOptionsComponent_div_2_Template, 31, 23, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.datasourcesLoaded && ctx.allDataSources.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.datasourcesLoaded && ctx.allDataSources.length > 0 && ctx.dataFieldsLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDragHandle, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__.FieldComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.metadata-cascading-options .table__cell-content .dropdown-menu {\n  left: inherit;\n  right: 0;\n  min-width: 79px !important;\n  overflow: hidden;\n  width: auto;\n}\n.metadata-cascading-options .table__cell-content button.sg-select:hover {\n  border: solid 1px var(--brand-primary-color);\n}\n.metadata-cascading-options .table__cell-content .dropdown-menu-health {\n  min-width: 79px;\n  left: inherit;\n  right: 0px;\n  overflow: hidden;\n}\n.metadata-cascading-options .add-button {\n  margin-right: 10px;\n  margin-top: 12px;\n}\n.metadata-cascading-options .btn-minwidth {\n  min-width: 102px;\n}\n.metadata-cascading-options .delete-all {\n  text-align: center;\n  vertical-align: middle;\n}\n.metadata-cascading-options .table {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  height: 100%;\n  margin: 12px 0;\n}\n.metadata-cascading-options .table .form-group {\n  margin: 0 !important;\n}\n.metadata-cascading-options .table thead {\n  background-color: #f1f3f3;\n}\n.metadata-cascading-options .table thead th.action-th {\n  padding: 1px;\n}\n.metadata-cascading-options .table tbody {\n  display: block;\n  position: relative;\n  -ms-overflow-style: none;\n}\n.metadata-cascading-options .table tbody::-webkit-scrollbar {\n  display: none;\n}\n.metadata-cascading-options .table tbody .ps__rail-x {\n  display: none;\n}\n.metadata-cascading-options .table tbody .table__control-cell i {\n  padding-top: 12px;\n}\n.metadata-cascading-options .table thead,\n.metadata-cascading-options .table tbody tr {\n  display: table;\n  width: 100%;\n}\n.metadata-cascading-options .table tbody tr td {\n  padding: 0.75rem 0.35rem;\n}\n.metadata-cascading-options .table tbody tr td .table__th-grip {\n  cursor: move !important;\n}\n.metadata-cascading-options .table [class^=icomoon-],\n.metadata-cascading-options .table [class*=\" icomoon-\"] {\n  font-size: 18px;\n}\n.metadata-cascading-options th:nth-of-type(1),\n.metadata-cascading-options td:nth-of-type(1) {\n  width: 25px;\n}\n.metadata-cascading-options .add-button {\n  margin-top: 24px;\n  max-height: 31px;\n}\n\n.modal-body .table {\n  min-height: 0px !important;\n}\n.modal-body .table thead {\n  background-color: #f1f3f3;\n}\n.modal-body .table thead th.action-th {\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1ldGFkYXRhL21ldGFkYXRhLWNhc2NhZGluZy1vcHRpb25zL21ldGFkYXRhLWNhc2NhZGluZy1vcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTVPRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUErT0o7QUE1T0U7RUFDRSw0Q0FBQTtBQThPSjtBQTNPRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBNk9KO0FBMU9FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQTRPSjtBQXpPRTtFQUNFLGdCQUFBO0FBMk9KO0FBeE9FO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQTBPSjtBQXZPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXlPSjtBQXZPSTtFQUNFLG9CQUFBO0FBeU9OO0FBdE9JO0VBQ0UseUJEd0JJO0FDZ05WO0FBdk9NO0VBQ0UsWUFBQTtBQXlPUjtBQXJPSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUlBLHdCQUFBO0FBb09OO0FBdk9NO0VBQ0UsYUFBQTtBQXlPUjtBQXRPTTtFQUNFLGFBQUE7QUF3T1I7QUFwT1E7RUFDRSxpQkFBQTtBQXNPVjtBQWpPSTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtBQW1PTjtBQWhPSTtFQUNFLHdCQUFBO0FBa09OO0FBaE9NO0VBQ0UsdUJBQUE7QUFrT1I7QUE5Tkk7O0VBRUUsZUFBQTtBQWdPTjtBQTVORTs7RUFFRSxXQUFBO0FBOE5KO0FBM05FO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQTZOSjs7QUF4TkU7RUFDRSwwQkFBQTtBQTJOSjtBQXpOSTtFQUNFLHlCRHBDSTtBQytQVjtBQTFOTTtFQUNFLFlBQUE7QUE0TlIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5tZXRhZGF0YS1jYXNjYWRpbmctb3B0aW9ucyB7XHJcbiAgLnRhYmxlX19jZWxsLWNvbnRlbnQgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbGVmdDogaW5oZXJpdDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWluLXdpZHRoOiA3OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudGFibGVfX2NlbGwtY29udGVudCBidXR0b24uc2ctc2VsZWN0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICR1cGxhbmQtYmx1ZTtcclxuICB9XHJcblxyXG4gIC50YWJsZV9fY2VsbC1jb250ZW50IC5kcm9wZG93bi1tZW51LWhlYWx0aCB7XHJcbiAgICBtaW4td2lkdGg6IDc5cHg7XHJcbiAgICBsZWZ0OiBpbmhlcml0O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuYWRkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1taW53aWR0aCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZS1hbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgICAgdGguYWN0aW9uLXRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgLnBzX19yYWlsLXgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZV9fY29udHJvbC1jZWxsIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkLFxyXG4gICAgdGJvZHkgdHIge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkgdHIgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDAuMzVyZW07XHJcblxyXG4gICAgICAudGFibGVfX3RoLWdyaXAge1xyXG4gICAgICAgIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgW2NsYXNzXj0naWNvbW9vbi0nXSxcclxuICAgIFtjbGFzcyo9JyBpY29tb29uLSddIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGg6bnRoLW9mLXR5cGUoMSksXHJcbiAgdGQ6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuYWRkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzFweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAudGFibGUge1xyXG4gICAgbWluLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgICAgdGguYWN0aW9uLXRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 37679:
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-items/metadata-items.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataItemsComponent: () => (/* binding */ MetadataItemsComponent)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/fileName */ 28016);
/* harmony import */ var _blocks_services_csv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/csv.service */ 34083);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ 72474);





























const _c0 = ["csvImportInput"];
const _c1 = () => ({
  suppressScrollY: false
});
const _c2 = (a0, a1) => ({
  itemsPerPage: a0,
  currentPage: a1
});
function MetadataItemsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 41)(1, "b", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 44)(7, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_div_17_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.toPreviousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function MetadataItemsComponent_div_17_Template_input_keydown_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onKeyDown($event));
    })("blur", function MetadataItemsComponent_div_17_Template_input_blur_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_div_17_Template_i_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.toNextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.dataSource.dataSet.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 10, "Pagination.Items"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", ctx_r2.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r2.currentPage)("title", ctx_r2.invalidPageTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 12, "Pagination.Of"), " ", ctx_r2.pagesCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", ctx_r2.currentPage >= ctx_r2.pagesCount);
  }
}
function MetadataItemsComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 49)(1, "td", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td", 53)(5, "div", 54)(6, "app-field", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function MetadataItemsComponent_tr_36_Template_app_field_valueChange_6_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](item_r5.name, $event) || (item_r5.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 56)(8, "div", 54)(9, "app-field", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function MetadataItemsComponent_tr_36_Template_app_field_valueChange_9_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](item_r5.value, $event) || (item_r5.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td", 57)(11, "div", 58)(12, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_tr_36_Template_i_click_12_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.deleteItem(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx_r2.createField("name" + i_r6, "Metadata-Form.DisplayName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx_r2.createField("value" + i_r6, "Metadata-Form.Value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", item_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "items-delete-", item_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 7, "Metadata-Form.item-delete"));
  }
}
function MetadataItemsComponent_app_modal_header_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-modal-header", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const importModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, importModal_r7.getData().title))("closeIconHandler", importModal_r7.getData().cancel);
  }
}
function MetadataItemsComponent_app_errors_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-errors", 61);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errors", ctx_r2.importErrors);
  }
}
function MetadataItemsComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.csvFile == null ? null : ctx_r2.csvFile.name);
  }
}
function MetadataItemsComponent_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_button_62_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const importModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](39);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](importModal_r7.getData().cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "MainHeader.Cancel"), " ");
  }
}
function MetadataItemsComponent_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_button_63_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const importModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](39);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](importModal_r7.getData().confirm(importModal_r7.getData()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const importModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r2.importColumnsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", importModal_r7.getData().buttonText, " ");
  }
}
class MetadataItemsComponent {
  get displayNameIndex() {
    return `${this._displayNameIndex}`;
  }
  set displayNameIndex(val) {
    this._displayNameIndex = Number(val);
  }
  get valueIndex() {
    return `${this._valueIndex}`;
  }
  set valueIndex(val) {
    this._valueIndex = Number(val);
  }
  constructor(translate, errorsService, delay, ngxSmartModalService, csvService, toastr) {
    this.translate = translate;
    this.errorsService = errorsService;
    this.delay = delay;
    this.ngxSmartModalService = ngxSmartModalService;
    this.csvService = csvService;
    this.toastr = toastr;
    this.currentPage = 1;
    this.pagesCount = 0;
    this.perPage = 100;
    this.defaultDisplayNameColumns = ['name', 'display', 'text'];
    this.defaultValueColumns = ['value'];
    this.importErrors = [];
    this.importExtensions = ['txt', 'csv'];
    this.invalidPageTitle = '';
    this.nameFocused = true;
    this.createField = (keyid, placeholder) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.MetaDataType.Text,
        placeholder: this.translate.instant(placeholder),
        required: true
      });
    };
    this.createFields = () => {
      this.newListItemName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.MetaDataType.Text,
        label: this.translate.instant('Metadata-Form.ItemsDisplayName'),
        placeholder: this.translate.instant('Metadata-Form.ItemsDisplayName'),
        required: true
      });
      this.newListItemValue = new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.MetaDataType.Text,
        label: this.translate.instant('Metadata-Form.ItemsValue'),
        placeholder: this.translate.instant('Metadata-Form.ItemsValue')
      });
      this.importDisplayNameColumnField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.MetaDataType.List,
        label: this.translate.instant('Metadata-Form.item-name'),
        placeholder: this.translate.instant('Metadata-Form.DisplayName'),
        datasource: this.displayNameColumnDataSource,
        required: true
      });
      this.importValueColumnField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.MetaDataType.List,
        label: this.translate.instant('Metadata-Form.item-value'),
        placeholder: this.translate.instant('Metadata-Form.Value'),
        datasource: this.valueColumnDataSource,
        required: true
      });
    };
    this.onAddValue = () => {
      if (!this.validate()) return;
      this.dataSource.dataSet.push({
        ...this.newListItem
      });
      this.updatePagesCount();
      this.newListItem.name = '';
      this.newListItem.value = '';
      this.nameFocused = true;
      this.delay.execute(() => {
        this.directiveRef.scrollToBottom(0, 300);
      }, 100);
    };
    this.deleteAllItems = () => {
      this.dataSource.dataSet = [];
      this.updatePagesCount();
    };
    this.deleteItem = item => {
      const rowIndexToDelete = this.dataSource.dataSet.indexOf(item);
      if (rowIndexToDelete > -1) {
        this.dataSource.dataSet.splice(rowIndexToDelete, 1);
        this.updatePagesCount();
      }
    };
    this.cancelImport = () => {
      this.importModal.close();
    };
    this.confirmImport = () => {
      if (this.replaceExisting) {
        this.dataSource.dataSet = [];
      }
      this.csvParseResult.data.forEach(row => {
        const headerRow = this.csvParseResult.meta.fields;
        const displayNameIndex = this.containsHeader ? headerRow[this._displayNameIndex] : this._displayNameIndex;
        const valueIndex = this.containsHeader ? headerRow[this._valueIndex] : this._valueIndex;
        this.dataSource.dataSet.push({
          name: row[displayNameIndex],
          value: row[valueIndex]
        });
      });
      this.updatePagesCount();
      this.importModal.close();
      this.directiveRef.scrollToTop();
    };
    this.onCSVParseSuccess = result => {
      this.csvParseResult = result;
      const importColumns = this.csvService.getColumns(this.csvParseResult, this.containsHeader);
      this.updateColumnsDataSource(importColumns);
      this.adjustSelectedColumns();
      this.importColumnsSelected = true;
    };
    this.onCSVParseFailure = err => {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_4__.Log.error('MetadataItemsComponent.onCSVParseFailure', err);
      this.toastr.error(this.translate.instant('csv.parse-file-error'));
    };
    this.onKeyDown = event => {
      if (!shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.IntegerKeys.includes(event.key) && !(event.key === shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.Key.KeyA && event.ctrlKey === true)) {
        event.preventDefault();
        return;
      }
      if (event.key == shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.Key.Tab || event.key == shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.Key.Enter) {
        this.gotoPage(event.target.value);
      }
    };
    this.onBlur = event => {
      if (event.target.value && parseInt(event.target.value, 10) !== this.currentPage) {
        this.currentPage = +event.target.value;
        if (this.isInvalidCurrentPage()) {
          this.toastr.error(this.translate.instant('Pagination.invalid-page-number'));
        }
        if (parseInt(event.target.value, 10) > this.pagesCount) {
          this.invalidPageTitle = this.translate.instant('Pagination.invalid-page-number-title') + ' ' + this.pagesCount;
        } else {
          this.invalidPageTitle = '';
        }
      }
    };
    this.gotoPage = page => {
      this.currentPage = page;
      this.directiveRef.scrollToTop();
    };
    this.toNextPage = () => {
      if (this.currentPage < this.pagesCount) this.gotoPage(this.currentPage + 1);
    };
    this.toPreviousPage = () => {
      if (this.currentPage > 1) this.gotoPage(this.currentPage - 1);
    };
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
  }
  ngOnInit() {
    this.displayNameColumnDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FixedDataSource();
    this.valueColumnDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FixedDataSource();
    this.createFields();
    this.updatePagesCount();
  }
  ngAfterViewInit() {
    this.importModal = this.ngxSmartModalService.getModal('importModal');
    this.subscriptions.add(this.importModal.onEscape.subscribe(() => this.cancelImport()));
  }
  onValueReturn(value) {
    setTimeout(() => {
      this.onAddValue();
    }, 50);
  }
  validate() {
    const validationErrors = this.getValidationErrors();
    if (!validationErrors.length) return true;
    this.errorsService.showErrorsModal(validationErrors, 'Metadata-Form.items-validation-errors');
    return false;
  }
  getValidationErrors() {
    let errors = [];
    const nameErrors = this.validateName();
    errors = errors.concat(nameErrors);
    return errors;
  }
  validateName() {
    const errors = [];
    if (this.newListItemName.required && !this.newListItem.name.trim().length) {
      errors.push('Metadata-Form.items-name-required');
    }
    if (this.newListItem.name.trim().length && this.dataSource.dataSet.find(i => i.name.trim().toLowerCase() === this.newListItem.name.trim().toLowerCase())) {
      errors.push('Metadata-Form.items-name-unique');
    }
    return errors;
  }
  onNameBlur() {
    this.nameFocused = false;
    if (!this.newListItem.value) this.newListItem.value = this.newListItem.name;
  }
  onImport() {
    this.ngxSmartModalService.setModalData({
      title: 'Metadata-Form.import-modal-title',
      buttonText: this.translate.instant('Metadata-Form.import'),
      confirm: this.confirmImport,
      cancel: this.cancelImport
    }, 'importModal', true);
    this.resetImportModal();
    this.importModal.open();
  }
  resetImportModal() {
    this.csvFile = null;
    this.csvParseResult = null;
    this.importColumnsSelected = false;
    this.containsHeader = false;
    this.replaceExisting = false;
    this.csvImportInput.nativeElement.value = '';
    this.importErrors = [];
  }
  handleFileSelect(event) {
    if (!event.target.files || !event.target.files.length) return;
    const file = event.target.files[0];
    this.importErrors = [];
    if (!_blocks_core_fileName__WEBPACK_IMPORTED_MODULE_1__.Filename.extensionIsOneOf(file.name, this.importExtensions)) {
      this.importErrors.push('csv.only-csv-and-text');
      this.csvImportInput.nativeElement.value = '';
      this.importColumnsSelected = false;
      return;
    }
    this.csvFile = file;
    if (!this.csvFile) return;
    this.csvService.parse(this.csvFile, this.containsHeader, this.onCSVParseSuccess, this.onCSVParseFailure);
  }
  updateColumnsDataSource(importColumns) {
    this.displayNameColumnDataSource.updateOptions(importColumns);
    this.valueColumnDataSource.updateOptions(importColumns);
  }
  adjustSelectedColumns() {
    const headerRow = this.csvParseResult.meta.fields;
    const firstRow = this.csvParseResult.data[0];
    if (!this.containsHeader) {
      this._displayNameIndex = 0;
      this._valueIndex = Object.keys(firstRow).length > 1 ? 1 : 0;
      return;
    }
    const headerDisplayNameIndex = headerRow.findIndex(c => {
      return this.defaultDisplayNameColumns.includes(c.toLowerCase());
    });
    this._displayNameIndex = headerDisplayNameIndex === -1 ? 0 : headerDisplayNameIndex;
    const headerValueIndex = headerRow.findIndex(c => {
      return this.defaultValueColumns.includes(c.toLowerCase());
    });
    this._valueIndex = headerValueIndex === -1 ? headerRow.length > 1 ? 1 : 0 : headerValueIndex;
  }
  onContainsHeaderChecked() {
    this.containsHeader = !this.containsHeader;
    this.csvService.parse(this.csvFile, this.containsHeader, this.onCSVParseSuccess, this.onCSVParseFailure);
  }
  onReplaceExistingChecked() {
    this.replaceExisting = !this.replaceExisting;
  }
  isInvalidCurrentPage() {
    if (this.pagesCount <= 0) return false;
    return this.currentPage <= 0 || this.currentPage > this.pagesCount;
  }
  updatePagesCount() {
    this.pagesCount = Math.ceil(this.dataSource.dataSet.length / this.perPage);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  dropped(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.moveItemInArray)(this.dataSource.dataSet, event.previousIndex, event.currentIndex);
  }
  static {
    this.ɵfac = function MetadataItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_0__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_blocks_services_csv_service__WEBPACK_IMPORTED_MODULE_2__.CSVService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: MetadataItemsComponent,
      selectors: [["app-metadata-items"]],
      viewQuery: function MetadataItemsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarDirective, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.csvImportInput = _t.first);
        }
      },
      inputs: {
        dataSource: "dataSource",
        required: "required",
        newListItem: "newListItem"
      },
      decls: 64,
      vars: 58,
      consts: [["importModal", ""], ["csvImportInput", ""], [1, "metadata-items", "h-100", "d-flex", "flex-column"], [1, "pick-list__configuration", "h-100", "d-flex", "flex-column"], [1, "header", "container-fluid"], [1, "row", "align-items-end"], [1, "col-12", "col-lg-6", "col-xl-3"], [3, "valueChange", "return", "blur", "field", "value", "focused"], [3, "valueChange", "return", "field", "value"], [1, "col-12", "col-xl-6", "d-flex", "align-items-center"], ["id", "btn-items-Add Item", 1, "add-button", "btn", "btn-primary", "btn-minwidth", 3, "click", "title"], ["id", "btn-items-Import", 1, "import-button", "btn", "btn-light", "btn-minwidth", 3, "click", "title"], ["class", "pagination text-right d-flex align-items-center ml-auto", 4, "ngIf"], [1, "table", "draggable"], [1, "table__th-control", "action-th"], ["width", "46%", 1, "table__th-content"], [1, "table__th-control", "action-th", "delete-all"], [1, "text-center"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title"], ["fxFlex", "auto", "cdkDropList", "", 1, "table__body", "ps", "col", "p-0", 3, "cdkDropListDropped", "perfectScrollbar"], ["class", "table__table-row", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["target", "body", "customClass", "import-modal", "identifier", "importModal", 3, "closable", "escapable", "dismissable"], [3, "title", "closeIconHandler", 4, "ngIf"], [1, "modal-body"], [3, "errors", 4, "ngIf"], [1, "d-flex", "align-items-center", "import-file"], [3, "localize", "required", "text"], ["type", "file", "name", "csvFile", "accept", ".csv, text/plain", "id", "modal-btn-chose-file", 2, "display", "none", 3, "change"], [1, "btn", "btn-primary", "ml-2", 3, "click"], ["class", "file-name ml-2", 4, "ngIf"], [1, "container-fluid", "p-0"], [1, "row", "no-gutters"], [1, "col-6", "display-name"], [3, "valueChange", "field", "value", "disabled"], [1, "col-6", "value"], [1, "col-12"], ["name", "containsHeader", "label", "Metadata-Form.contains-header", 3, "valueChange", "value"], ["name", "replaceExisting", "label", "Metadata-Form.replace-existing", 3, "valueChange", "value"], [1, "modal-footer"], ["type", "button", "class", "btn btn-light btn-minwidth", "id", "modal-btn-cancel", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-minwidth", "id", "modal-btn-import", 3, "disabled", "click", 4, "ngIf"], [1, "pagination", "text-right", "d-flex", "align-items-center", "ml-auto"], ["id", "list-items-count", 1, "mr-1"], [1, "pagination-text", "project-list-recored"], [1, "pagination__page-nav", "project-list-nav", "pagination-number", "h-100", "d-flex", "align-items-center"], [1, "caret", "caret--left", "pagination-dec", 3, "click"], ["type", "text", 3, "keydown", "blur", "ngModel", "title"], [1, "pagination__text", "h-100", "d-flex", "align-items-center", "ml-1"], [1, "caret", "caret--right", "pagination-inc", 3, "click"], ["cdkDrag", "", 1, "table__table-row"], [1, "table__control-cell", "p-1", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "checkbox", "table__checkbox", "d-flex", "align-items-center", "justify-content-center", "h-100"], ["cdkDragHandle", "", 1, "icomoon-grip-small", "table__th-grip"], ["width", "46%", 1, "table__cell", "pr-1", 2, "cursor", "default !important"], [1, "table__cell-content"], [3, "valueChange", "field", "value"], ["width", "46%", 1, "table__cell", "pl-1", 2, "cursor", "default !important"], [1, "table__control-cell", "p-1", "d-flex", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "checkbox", "table__checkbox"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title", "id"], [3, "title", "closeIconHandler"], [3, "errors"], [1, "file-name", "ml-2"], ["type", "button", "id", "modal-btn-cancel", 1, "btn", "btn-light", "btn-minwidth", 3, "click"], ["type", "button", "id", "modal-btn-import", 1, "btn", "btn-primary", "btn-minwidth", 3, "click", "disabled"]],
      template: function MetadataItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "app-field", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function MetadataItemsComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.newListItem.name, $event) || (ctx.newListItem.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("return", function MetadataItemsComponent_Template_app_field_return_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onValueReturn($event));
          })("blur", function MetadataItemsComponent_Template_app_field_blur_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onNameBlur());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6)(7, "app-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function MetadataItemsComponent_Template_app_field_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.newListItem.value, $event) || (ctx.newListItem.value = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("return", function MetadataItemsComponent_Template_app_field_return_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onValueReturn($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 9)(9, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onAddValue());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onImport());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, MetadataItemsComponent_div_17_Template, 13, 14, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "table", 13)(19, "thead")(20, "tr")(21, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th", 15)(24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "th", 15)(28, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "th", 16)(32, "div", 17)(33, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_Template_i_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.deleteAllItems());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "tbody", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cdkDropListDropped", function MetadataItemsComponent_Template_tbody_cdkDropListDropped_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.dropped($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, MetadataItemsComponent_tr_36_Template, 14, 9, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "paginate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "ngx-smart-modal", 21, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, MetadataItemsComponent_app_modal_header_40_Template, 2, 4, "app-modal-header", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, MetadataItemsComponent_app_errors_42_Template, 1, 1, "app-errors", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "app-label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "input", 27, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function MetadataItemsComponent_Template_input_change_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.handleFileSelect($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MetadataItemsComponent_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            const csvImportInput_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](46);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](csvImportInput_r8.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, MetadataItemsComponent_span_50_Template, 2, 1, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 30)(52, "div", 31)(53, "div", 32)(54, "app-field", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function MetadataItemsComponent_Template_app_field_valueChange_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.displayNameIndex, $event) || (ctx.displayNameIndex = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 34)(56, "app-field", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function MetadataItemsComponent_Template_app_field_valueChange_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.valueIndex, $event) || (ctx.valueIndex = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 35)(58, "app-checkbox", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("valueChange", function MetadataItemsComponent_Template_app_checkbox_valueChange_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onContainsHeaderChecked());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 35)(60, "app-checkbox", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("valueChange", function MetadataItemsComponent_Template_app_checkbox_valueChange_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onReplaceExistingChecked());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, MetadataItemsComponent_button_62_Template, 3, 3, "button", 39)(63, MetadataItemsComponent_button_63_Template, 2, 2, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const importModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.newListItemName);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.newListItem.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("focused", ctx.nameFocused);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.newListItemValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.newListItem.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 35, "Metadata-Form.AddValue"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 37, "Metadata-Form.AddValue"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 39, "Metadata-Form.import"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 41, "Metadata-Form.import"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.dataSource.dataSet.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 43, "Metadata-Form.item-name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 45, "Metadata-Form.item-value"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 47, "Metadata-Form.item-delete-all"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](54, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](37, 49, ctx.dataSource.dataSet, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](55, _c2, ctx.perPage, ctx.currentPage)));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", importModal_r7.hasData());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.importErrors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("localize", true)("required", true)("text", "Metadata-Form.csv-file");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 52, "FileUpload.ChooseFile"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.csvFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.importDisplayNameColumnField);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.displayNameIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.importColumnsSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.importValueColumnField);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.valueIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.importColumnsSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.containsHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.replaceExisting);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", importModal_r7.hasData());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", importModal_r7.hasData());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.CdkDragHandle, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarDirective, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__.NgxSmartModalComponent, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_5__.ErrorsComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_7__.LabelComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__.CheckboxComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_9__.ModalHeaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_19__.PaginatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.metadata-items .table__cell-content .dropdown-menu {\n  left: inherit;\n  right: 0;\n  min-width: 79px !important;\n  overflow: hidden;\n  width: auto;\n}\n.metadata-items .table__cell-content button.sg-select:hover {\n  border: solid 1px var(--brand-primary-color);\n}\n.metadata-items .table__cell-content .dropdown-menu-health {\n  min-width: 79px;\n  left: inherit;\n  right: 0px;\n  overflow: hidden;\n}\n.metadata-items .project-list-nav input {\n  width: 34px;\n  height: 28px;\n  border-radius: 2px;\n  background-color: #ffffff;\n  box-shadow: inset 0 1px 3px 0 rgba(177, 177, 177, 0.5);\n  border: solid 1px #cfcfcf;\n  color: #151515;\n}\n.metadata-items .project-list-nav .caret {\n  border-top: 7px dashed;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  margin-top: 2px;\n}\n.metadata-items .project-list-nav .caret--left {\n  margin-right: 2px;\n}\n.metadata-items .project-list-nav input:active,\n.metadata-items .project-list-nav input:focus {\n  border: 1px solid var(--brand-primary-color);\n}\n.metadata-items .add-button,\n.metadata-items .import-button {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.metadata-items .add-button {\n  margin-right: 10px;\n}\n.metadata-items .btn-minwidth {\n  min-width: 102px;\n}\n.metadata-items .delete-all {\n  text-align: center;\n  vertical-align: middle;\n}\n.metadata-items .table {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  height: 100%;\n  margin: 12px 0;\n}\n.metadata-items .table .form-group {\n  margin: 0 !important;\n}\n.metadata-items .table thead {\n  background-color: #f1f3f3;\n}\n.metadata-items .table thead th.action-th {\n  padding: 1px;\n}\n.metadata-items .table tbody {\n  display: block;\n  position: relative;\n  -ms-overflow-style: none;\n}\n.metadata-items .table tbody::-webkit-scrollbar {\n  display: none;\n}\n.metadata-items .table tbody .ps__rail-x {\n  display: none;\n}\n.metadata-items .table tbody .table__control-cell i {\n  padding-top: 12px;\n}\n.metadata-items .table thead,\n.metadata-items .table tbody tr {\n  display: table;\n  width: 100%;\n}\n.metadata-items .table tbody tr td {\n  padding: 0.75rem 0;\n}\n.metadata-items .table tbody tr td .table__th-grip {\n  cursor: move !important;\n}\n.metadata-items .table [class^=icomoon-],\n.metadata-items .table [class*=\" icomoon-\"] {\n  font-size: 18px;\n}\n.metadata-items .pagination {\n  margin-bottom: 7px;\n  padding-right: 0;\n}\n.metadata-items .pagination .pagination-text {\n  float: none;\n}\n.metadata-items .pagination .project-list-recored {\n  padding-right: 0px;\n  margin: 0px;\n}\n.metadata-items th:nth-of-type(1),\n.metadata-items td:nth-of-type(1) {\n  width: 25px;\n}\n\n.modal-body .table {\n  min-height: 0px !important;\n}\n.modal-body .table thead {\n  background-color: #f1f3f3;\n}\n.modal-body .table thead th.action-th {\n  padding: 1px;\n}\n.modal-body .import-file {\n  margin-bottom: 16px;\n}\n.modal-body .import-file .file-name {\n  font-size: 12px;\n}\n.modal-body .display-name {\n  padding-right: 5px;\n}\n.modal-body .value {\n  padding-left: 5px;\n}\n\n.import-modal .nsm-content {\n  top: 0 !important;\n}\n\n.rtl .add-button {\n  margin-left: 10px;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1ldGFkYXRhL21ldGFkYXRhLWl0ZW1zL21ldGFkYXRhLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTVPRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUErT0o7QUE1T0U7RUFDRSw0Q0FBQTtBQThPSjtBQTNPRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBNk9KO0FBMU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0RBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUE0T0o7QUF6T0U7RUFDRSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBMk9KO0FBeE9FO0VBQ0UsaUJBQUE7QUEwT0o7QUF2T0U7O0VBRUUsNENBQUE7QUF5T0o7QUF0T0U7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FBd09KO0FBck9FO0VBQ0Usa0JBQUE7QUF1T0o7QUFwT0U7RUFDRSxnQkFBQTtBQXNPSjtBQW5PRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFxT0o7QUFsT0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFvT0o7QUFsT0k7RUFDRSxvQkFBQTtBQW9PTjtBQWpPSTtFQUNFLHlCRFBJO0FDME9WO0FBbE9NO0VBQ0UsWUFBQTtBQW9PUjtBQWhPSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUlBLHdCQUFBO0FBK05OO0FBbE9NO0VBQ0UsYUFBQTtBQW9PUjtBQWpPTTtFQUNFLGFBQUE7QUFtT1I7QUEvTlE7RUFDRSxpQkFBQTtBQWlPVjtBQTVOSTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtBQThOTjtBQTNOSTtFQUNFLGtCQUFBO0FBNk5OO0FBM05NO0VBQ0UsdUJBQUE7QUE2TlI7QUF6Tkk7O0VBRUUsZUFBQTtBQTJOTjtBQXZORTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF5Tko7QUF2Tkk7RUFDRSxXQUFBO0FBeU5OO0FBdE5JO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBd05OO0FBcE5FOztFQUVFLFdBQUE7QUFzTko7O0FBak5FO0VBQ0UsMEJBQUE7QUFvTko7QUFsTkk7RUFDRSx5QkQ1RUk7QUNnU1Y7QUFuTk07RUFDRSxZQUFBO0FBcU5SO0FBaE5FO0VBQ0UsbUJBQUE7QUFrTko7QUFoTkk7RUFDRSxlQUFBO0FBa05OO0FBOU1FO0VBQ0Usa0JBQUE7QUFnTko7QUE3TUU7RUFDRSxpQkFBQTtBQStNSjs7QUExTUU7RUFDRSxpQkFBQTtBQTZNSjs7QUF4TUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUEyTUoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5tZXRhZGF0YS1pdGVtcyB7XHJcbiAgLnRhYmxlX19jZWxsLWNvbnRlbnQgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbGVmdDogaW5oZXJpdDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWluLXdpZHRoOiA3OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudGFibGVfX2NlbGwtY29udGVudCBidXR0b24uc2ctc2VsZWN0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICR1cGxhbmQtYmx1ZTtcclxuICB9XHJcblxyXG4gIC50YWJsZV9fY2VsbC1jb250ZW50IC5kcm9wZG93bi1tZW51LWhlYWx0aCB7XHJcbiAgICBtaW4td2lkdGg6IDc5cHg7XHJcbiAgICBsZWZ0OiBpbmhlcml0O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1saXN0LW5hdiBpbnB1dCB7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNSk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1saXN0LW5hdiAuY2FyZXQge1xyXG4gICAgYm9yZGVyLXRvcDogN3B4IGRhc2hlZDtcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWxpc3QtbmF2IC5jYXJldC0tbGVmdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWxpc3QtbmF2IGlucHV0OmFjdGl2ZSxcclxuICAucHJvamVjdC1saXN0LW5hdiBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdXBsYW5kLWJsdWU7XHJcbiAgfVxyXG5cclxuICAuYWRkLWJ1dHRvbixcclxuICAuaW1wb3J0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1taW53aWR0aCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZS1hbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgICAgdGguYWN0aW9uLXRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgLnBzX19yYWlsLXgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZV9fY29udHJvbC1jZWxsIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkLFxyXG4gICAgdGJvZHkgdHIge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkgdHIgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XHJcblxyXG4gICAgICAudGFibGVfX3RoLWdyaXAge1xyXG4gICAgICAgIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgW2NsYXNzXj0naWNvbW9vbi0nXSxcclxuICAgIFtjbGFzcyo9JyBpY29tb29uLSddIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuXHJcbiAgICAucGFnaW5hdGlvbi10ZXh0IHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtbGlzdC1yZWNvcmVkIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoOm50aC1vZi10eXBlKDEpLFxyXG4gIHRkOm50aC1vZi10eXBlKDEpIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIC50YWJsZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgICB0aC5hY3Rpb24tdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltcG9ydC1maWxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gICAgLmZpbGUtbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXNwbGF5LW5hbWUge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnZhbHVlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltcG9ydC1tb2RhbCB7XHJcbiAgLm5zbS1jb250ZW50IHtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnJ0bCB7XHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 71479:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-lineitems/metadata-lineitems.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataLineitemsComponent: () => (/* binding */ MetadataLineitemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);













const _c0 = () => ({
  suppressScrollY: false
});
function MetadataLineitemsComponent_tbody_31_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 17)(1, "td", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 21)(5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 21)(8, "div", 22)(9, "app-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function MetadataLineitemsComponent_tbody_31_tr_1_Template_app_checkbox_valueChange_9_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](item_r4.showTotal, $event) || (item_r4.showTotal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 25)(11, "div", 22)(12, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function MetadataLineitemsComponent_tbody_31_tr_1_Template_app_field_valueChange_12_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](item_r4.compareToMetaDataId, $event) || (item_r4.compareToMetaDataId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 26)(14, "div", 27)(15, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataLineitemsComponent_tbody_31_tr_1_Template_i_click_15_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteItem(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", ctx_r1.getFieldText(item_r4.metaDataId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", item_r4.showTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", item_r4.metaDataId)("disabled", !ctx_r1.isNumeric(item_r4.metaDataId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.createField(item_r4.metaDataId, "Metadata-Form.Value", ctx_r1.compareToDataSources[i_r5], true));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", item_r4.compareToMetaDataId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !item_r4.showTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "items-delete-", ctx_r1.getFieldText(item_r4.metaDataId), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 10, "Metadata-Form.item-delete"));
  }
}
function MetadataLineitemsComponent_tbody_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cdkDropListDropped", function MetadataLineitemsComponent_tbody_31_Template_tbody_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MetadataLineitemsComponent_tbody_31_tr_1_Template, 17, 12, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.mdd.lineItemConfigurations);
  }
}
class MetadataLineitemsComponent {
  constructor(translate, userState) {
    this.translate = translate;
    this.userState = userState;
    this.available = [];
    this.compareToDataSources = [];
    this.dataFieldsLoaded = false;
    this.newFieldId = '';
    this.updateDataFieldsDataSource = () => {
      const metadataFields = [];
      for (let i = 0; i < this.available.length; i++) {
        if (this.mdd.lineItemConfigurations.findIndex(x => x.metaDataId == this.available[i].id) != -1) continue;
        metadataFields.push({
          name: this.available[i].name,
          value: this.available[i].id
        });
      }
      this.dataFieldsDataSource.updateOptions(metadataFields);
      this.dataFieldsLoaded = true;
    };
    this.updateCompareToDataSources = () => {
      const metadataFields = [];
      metadataFields.push({
        name: this.translate.instant('Metadata-Form.none'),
        value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ObjectIdGenerator.Empty
      });
      for (let i = 0; i < this.available.length; i++) {
        if (this.available[i].type != shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer && this.available[i].type != shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Decimal) continue;
        metadataFields.push({
          name: this.translate.instant(this.available[i].name),
          value: this.available[i].id
        });
      }
      for (let i = 0; i < this.compareToDataSources.length; i++) {
        this.compareToDataSources[i].updateOptions(metadataFields.filter(x => x.name != this.available.find(x => x.id == this.mdd.lineItemConfigurations[i].metaDataId).name));
      }
    };
    this.createField = (label, placeholder, datasource, hideLabel = undefined) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: label ? this.translate.instant(label) : '',
        placeholder: placeholder ? this.translate.instant(placeholder) : '',
        required: true,
        datasource: datasource,
        hideLabel: hideLabel
      });
    };
    this.isNumeric = metaDataId => {
      const mdd = this.available.find(x => x.id == metaDataId);
      if (!mdd) return false;
      return mdd.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer || mdd.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Decimal;
    };
    this.addField = () => {
      this.mdd.lineItemConfigurations.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LineItemConfiguration({
        metaDataId: this.newFieldId,
        compareToMetaDataId: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ObjectIdGenerator.Empty,
        showTotal: false
      }));
      this.updateDataFieldsDataSource();
      this.compareToDataSources.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array()));
      this.updateCompareToDataSources();
    };
    this.deleteItem = item => {
      const index = this.mdd.lineItemConfigurations.findIndex(x => x == item);
      if (index != -1) this.mdd.lineItemConfigurations.splice(index, 1);
      this.updateDataFieldsDataSource();
      this.compareToDataSources.splice(index, 1);
      this.updateCompareToDataSources();
    };
    this.deleteAllItems = () => {
      this.mdd.lineItemConfigurations = [];
      this.updateDataFieldsDataSource();
      this.compareToDataSources = [];
      this.updateCompareToDataSources();
    };
    this.getFieldText = metaDataId => {
      const mdd = this.available.find(x => x.id == metaDataId);
      if (mdd) return mdd.name;
      return '';
    };
  }
  ngOnInit() {
    this.dataFieldsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    for (let i = 0; i < this.mdd.lineItemConfigurations.length; i++) {
      this.compareToDataSources.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array()));
    }
    this.setupMetaData();
  }
  setupMetaData() {
    this.available = this.userState.user.metaData.filter(mdd => mdd.type != shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.LineItems);
    this.updateDataFieldsDataSource();
    this.updateCompareToDataSources();
  }
  dropped(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.moveItemInArray)(this.mdd.lineItemConfigurations, event.previousIndex, event.currentIndex);
  }
  static {
    this.ɵfac = function MetadataLineitemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataLineitemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MetadataLineitemsComponent,
      selectors: [["app-metadata-lineitems"]],
      inputs: {
        mdd: "mdd"
      },
      decls: 32,
      vars: 23,
      consts: [[1, "metadata-items", "h-100", "d-flex", "flex-column"], [1, "header", "container-fluid", "pl-0"], [1, "row", "align-items-end"], [1, "col-12", "col-lg-6", "col-xl-3"], [3, "valueChange", "field", "value", "disabled"], [1, "col-12", "col-xl-6", "d-flex", "align-items-center", "pb-1"], ["id", "btn-items-Add Item", 1, "add-button", "btn", "btn-primary", "btn-minwidth", 3, "click", "title", "disabled"], [1, "table", "draggable", "pl-1"], [1, "table__th-control", "action-th"], ["width", "31%", 1, "table__th-content", "pl-0"], ["width", "30%", 1, "table__th-content", "pl-0"], [1, "table__th-control", "action-th", "delete-all"], [1, "text-center", "pb-2"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title"], ["class", "table__body ps col p-0", "fxFlex", "auto", "cdkDropList", "", 3, "perfectScrollbar", "cdkDropListDropped", 4, "ngIf"], ["fxFlex", "auto", "cdkDropList", "", 1, "table__body", "ps", "col", "p-0", 3, "cdkDropListDropped", "perfectScrollbar"], ["class", "table__table-row", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "table__table-row"], [1, "table__control-cell", "p-1", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "checkbox", "table__checkbox", "d-flex", "align-items-center", "justify-content-center", "h-100"], ["cdkDragHandle", "", 1, "icomoon-grip-small", "table__th-grip"], ["width", "31%", 1, "table__cell", 2, "cursor", "default !important"], [1, "table__cell-content"], [3, "text"], [3, "valueChange", "value", "name", "disabled"], ["width", "30%", 1, "table__cell", 2, "cursor", "default !important"], [1, "table__control-cell", "p-1", "d-flex", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "checkbox", "table__checkbox"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title", "id"]],
      template: function MetadataLineitemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function MetadataLineitemsComponent_Template_app_field_valueChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.newFieldId, $event) || (ctx.newFieldId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataLineitemsComponent_Template_button_click_6_listener() {
            return ctx.addField();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "table", 7)(11, "thead")(12, "tr")(13, "th", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 9)(16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 9)(20, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 10)(24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 11)(28, "div", 12)(29, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataLineitemsComponent_Template_i_click_29_listener() {
            return ctx.deleteAllItems();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, MetadataLineitemsComponent_tbody_31_Template, 2, 3, "tbody", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.createField("Metadata-Form.data-field", "Metadata-Form.data-field", ctx.dataFieldsDataSource));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.newFieldId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.dataFieldsLoaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 11, "Metadata-Form.AddValue"))("disabled", !(ctx.dataFieldsLoaded && ctx.newFieldId != ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 13, "Metadata-Form.AddValue"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 15, "Metadata-Form.data-field"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 17, "Metadata-Form.show-total"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 19, "Metadata-Form.compare-against"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 21, "Metadata-Form.item-delete-all"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataFieldsLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDragHandle, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_3__.LabelComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\napp-metadata-lineitems {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\napp-metadata-lineitems .delete-all {\n  text-align: center;\n  vertical-align: middle;\n}\napp-metadata-lineitems .table {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  height: 100%;\n  margin: 12px 0;\n}\napp-metadata-lineitems .table .form-group {\n  margin: 0 !important;\n}\napp-metadata-lineitems .table thead {\n  background-color: #f1f3f3;\n}\napp-metadata-lineitems .table thead th.action-th {\n  padding: 1px;\n}\napp-metadata-lineitems .table tbody {\n  display: block;\n  position: relative;\n  -ms-overflow-style: none;\n}\napp-metadata-lineitems .table tbody::-webkit-scrollbar {\n  display: none;\n}\napp-metadata-lineitems .table tbody .ps__rail-x {\n  display: none;\n}\napp-metadata-lineitems .table tbody .table__control-cell i {\n  padding-top: 12px;\n}\napp-metadata-lineitems .table thead,\napp-metadata-lineitems .table tbody tr {\n  display: table;\n  width: 100%;\n}\napp-metadata-lineitems .table tbody tr td {\n  padding: 0.75rem 0;\n}\napp-metadata-lineitems .table tbody tr td .table__th-grip {\n  cursor: move !important;\n}\napp-metadata-lineitems .table [class^=icomoon-],\napp-metadata-lineitems .table [class*=\" icomoon-\"] {\n  font-size: 18px;\n}\napp-metadata-lineitems .table tr td:nth-child(1),\napp-metadata-lineitems .table tr th:nth-child(1) {\n  width: 33px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1ldGFkYXRhL21ldGFkYXRhLWxpbmVpdGVtcy9tZXRhZGF0YS1saW5laXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQWdQRjtBQTlPRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFnUEo7QUE3T0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUErT0o7QUE3T0k7RUFDRSxvQkFBQTtBQStPTjtBQTVPSTtFQUNFLHlCRGdESTtBQzhMVjtBQTdPTTtFQUNFLFlBQUE7QUErT1I7QUEzT0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFJQSx3QkFBQTtBQTBPTjtBQTdPTTtFQUNFLGFBQUE7QUErT1I7QUE1T007RUFDRSxhQUFBO0FBOE9SO0FBMU9RO0VBQ0UsaUJBQUE7QUE0T1Y7QUF2T0k7O0VBRUUsY0FBQTtFQUNBLFdBQUE7QUF5T047QUF0T0k7RUFDRSxrQkFBQTtBQXdPTjtBQXRPTTtFQUNFLHVCQUFBO0FBd09SO0FBcE9JOztFQUVFLGVBQUE7QUFzT047QUFuT0k7O0VBRUUsV0FBQTtBQXFPTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuYXBwLW1ldGFkYXRhLWxpbmVpdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmRlbGV0ZS1hbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgICAgdGguYWN0aW9uLXRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgLnBzX19yYWlsLXgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZV9fY29udHJvbC1jZWxsIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkLFxyXG4gICAgdGJvZHkgdHIge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkgdHIgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XHJcblxyXG4gICAgICAudGFibGVfX3RoLWdyaXAge1xyXG4gICAgICAgIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgW2NsYXNzXj0naWNvbW9vbi0nXSxcclxuICAgIFtjbGFzcyo9JyBpY29tb29uLSddIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyIHRkOm50aC1jaGlsZCgxKSxcclxuICAgIHRyIHRoOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 93936:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-lookup/csv-lookup/csv-lookup.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSVLookupComponent: () => (/* binding */ CSVLookupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_services_csv_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/services/csv.service */ 34083);
/* harmony import */ var _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/core/fileName */ 28016);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/core/log */ 46415);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lookup-mappings/lookup-mappings.component */ 62448);
















function CSVLookupComponent_app_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-label", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", "(" + ctx_r1.dataRowCount + " Entries)");
  }
}
function CSVLookupComponent_app_lookup_mappings_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-lookup-mappings", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("lookup", ctx_r1.csvLookup)("lookupFieldOptions", ctx_r1.columns)("metaDataMappingOptions", ctx_r1.metaDataMappingOptions);
  }
}
class CSVLookupComponent {
  constructor(csv, toastr, translate) {
    this.csv = csv;
    this.toastr = toastr;
    this.translate = translate;
    this.optionsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.parsingCsvFile = false;
    this.importExtensions = ['txt', 'csv'];
    this.getCSVFile = () => {
      if (this.csvLookup.fileName) return this.csvLookup.fileName;
      return this.translate.instant('csv.no-file-selected');
    };
    this.onCSVParseSuccess = result => {
      this.csvLookup.rowCount = result.data.length;
      this.csvLookup.firstRow = result.data[0];
      this.parsingCsvFile = false;
      this.csvLookup.lookupFieldId = '';
      this.csvLookup.mappings = [];
      this.extractColumns();
    };
    this.onCSVParseFailure = err => {
      this.parsingCsvFile = false;
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__.Log.error('CSVLookupComponent.onCSVParseFailure', err);
      this.toastr.error(this.translate.instant('csv.parse-file-error'));
    };
  }
  ngOnInit() {
    this.extractColumns();
  }
  onFileSelected(event) {
    if (!event.target.files || !event.target.files.length) return;
    const file = event.target.files[0];
    if (!_blocks_core_fileName__WEBPACK_IMPORTED_MODULE_1__.Filename.extensionIsOneOf(file.name, this.importExtensions)) {
      this.toastr.error(this.translate.instant('csv.only-csv-and-text'));
      return;
    }
    this.csvLookup.csvFile = file;
    this.csvLookup.fileName = file.name;
    this.parseCSVFile();
  }
  parseCSVFile() {
    if (!this.csvLookup.csvFile) return;
    this.parsingCsvFile = true;
    this.csv.parse(this.csvLookup.csvFile, false, this.onCSVParseSuccess, this.onCSVParseFailure);
  }
  extractColumns() {
    this.dataRowCount = this.csvLookup.containsHeader ? this.csvLookup.rowCount - 1 : this.csvLookup.rowCount;
    if (!this.csvLookup.firstRow) return;
    this.columns = this.csvLookup.firstRow.map((value, index) => {
      if (this.csvLookup.containsHeader) {
        return {
          name: value,
          value: `${index}`
        };
      }
      const columnText = this.translate.instant('Metadata-Form.column');
      return {
        name: `${columnText + (index + 1)} (${value})`,
        value: `${index}`
      };
    });
    this.optionsLoaded.emit();
  }
  onContainsHeaderChecked(event) {
    this.csvLookup.containsHeader = !this.csvLookup.containsHeader;
    this.extractColumns();
  }
  static {
    this.ɵfac = function CSVLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CSVLookupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_csv_service__WEBPACK_IMPORTED_MODULE_0__.CSVService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: CSVLookupComponent,
      selectors: [["app-csv-lookup"]],
      inputs: {
        csvLookup: "csvLookup",
        metaDataMappingOptions: "metaDataMappingOptions"
      },
      outputs: {
        optionsLoaded: "optionsLoaded"
      },
      decls: 18,
      vars: 10,
      consts: [["csvImportInput", ""], ["appAutoFocusFirstInput", "", 1, "csv-lookup"], [1, "row"], [1, "d-flex", "import-file", "w-100"], [1, "col"], [1, "d-flex"], [3, "localize", "required", "text"], [1, "filename", 3, "text"], ["class", "entries", 3, "text", 4, "ngIf"], ["name", "containsHeader", "label", "Metadata-Form.contains-header", 3, "valueChange", "value"], ["type", "file", "name", "csvFile", "accept", ".csv, text/plain", "id", "csv-lookup-select-file", 2, "display", "none", 3, "change"], [1, "btn", "btn-miwidth", "btn-primary", 3, "click"], [3, "lookup", "lookupFieldOptions", "metaDataMappingOptions", 4, "ngIf"], [1, "entries", 3, "text"], [3, "lookup", "lookupFieldOptions", "metaDataMappingOptions"]],
      template: function CSVLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-label", 6)(6, "app-label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CSVLookupComponent_app_label_7_Template, 1, 1, "app-label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "app-checkbox", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function CSVLookupComponent_Template_app_checkbox_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onContainsHeaderChecked($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4)(11, "input", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CSVLookupComponent_Template_input_change_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CSVLookupComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            const csvImportInput_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](csvImportInput_r3.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, CSVLookupComponent_app_lookup_mappings_17_Template, 1, 3, "app-lookup-mappings", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("localize", true)("required", true)("text", "Metadata-Form.csv-file");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", ctx.getCSVFile());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dataRowCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.csvLookup.containsHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 8, "FileUpload.ChooseFile"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.columns.length && !ctx.parsingCsvFile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__.LabelComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__.CheckboxComponent, _lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_7__.LookupMappingsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: [".import-file[_ngcontent-%COMP%]   .entries[_ngcontent-%COMP%], \n.import-file[_ngcontent-%COMP%]   .filename[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tbWV0YWRhdGEvbWV0YWRhdGEtbG9va3VwL2Nzdi1sb29rdXAvY3N2LWxvb2t1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5pbXBvcnQtZmlsZSB7XHJcbiAgLmVudHJpZXMsXHJcbiAgLmZpbGVuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 43424:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-lookup/datasource-lookup/datasource-lookup.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasourceLookupComponent: () => (/* binding */ DatasourceLookupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared */ 47989);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lookup-mappings/lookup-mappings.component */ 62448);















function DatasourceLookupComponent_app_lookup_mappings_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-lookup-mappings", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lookup", ctx_r0.datasourceLookup)("lookupFieldOptions", ctx_r0.mappingOptionsColumn)("metaDataMappingOptions", ctx_r0.metaDataMappingOptions);
  }
}
class DatasourceLookupComponent {
  constructor(translate, hydra, toastr, delayService) {
    this.translate = translate;
    this.hydra = hydra;
    this.toastr = toastr;
    this.delayService = delayService;
    this.reloadLookup = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.loadingDatasources = false;
    this.createFields = () => {
      const datasourcesDataSource = new DatasourcesDataSource(this.datasourceLookup, this.hydra);
      this.datasourcesField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('step-delivery-datasource.datasources'),
        placeholder: this.translate.instant('step-delivery-datasource.datasources-placeholder'),
        datasource: datasourcesDataSource,
        required: true
      });
    };
    this.onDatasourceSelected = value => {
      if (!value || !this.datasourceLookup.dataSourceId) return;
      this.reloadLookup.emit(this.datasource?.id);
      this.loadingDatasources = true;
      this.hydra.getDataSource(value, this.dataSourceSuccessCallBack, this.failureCallBack);
    };
    this.dataSourceSuccessCallBack = datasource => {
      this.loadingDatasources = false;
      if (this.datasource) this.datasource.columns = [];
      this.delayService.execute(() => {
        this.datasource = datasource;
        this.mappingOptionsColumn = [];
        datasource.columns.forEach((column, index) => {
          this.mappingOptionsColumn.push({
            name: column.name,
            value: `${column.id}`
          });
        });
      });
    };
    this.failureCallBack = err => {
      this.loadingDatasources = false;
      this.toastr.error(this.translate.instant('step-delivery-datasource.error-loadingdatasource'));
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function DatasourceLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DatasourceLookupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.DelayService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DatasourceLookupComponent,
      selectors: [["app-datasource-lookup"]],
      inputs: {
        datasourceLookup: "datasourceLookup",
        metaDataMappingOptions: "metaDataMappingOptions"
      },
      outputs: {
        reloadLookup: "reloadLookup"
      },
      decls: 5,
      vars: 3,
      consts: [["appAutoFocusFirstInput", "", 1, "datasource-lookup"], [1, "row"], [1, "col-6"], [3, "valueChange", "blur", "field", "value"], [3, "lookup", "lookupFieldOptions", "metaDataMappingOptions", 4, "ngIf"], [3, "lookup", "lookupFieldOptions", "metaDataMappingOptions"]],
      template: function DatasourceLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function DatasourceLookupComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.datasourceLookup.dataSourceId, $event) || (ctx.datasourceLookup.dataSourceId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DatasourceLookupComponent_Template_app_field_blur_3_listener($event) {
            return ctx.onDatasourceSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DatasourceLookupComponent_app_lookup_mappings_4_Template, 1, 3, "app-lookup-mappings", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.datasourcesField);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.datasourceLookup.dataSourceId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.datasource == null ? null : ctx.datasource.columns.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputDirective, _lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_4__.LookupMappingsComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class DatasourcesDataSource {
  constructor(options, hydra) {
    this.options = options;
    this.hydra = hydra;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.hydra.getAllDataSources(datasourcesItems => {
      const items = [];
      datasourcesItems.forEach(item => {
        items.push({
          name: item.name,
          value: item.id
        });
      });
      successCallBack(items);
    }, failureCallBack);
  }
}

/***/ }),

/***/ 86200:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-lookup/filebound-lookup/filebound-lookup.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileBoundLookupComponent: () => (/* binding */ FileBoundLookupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_proxy_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/services/proxy-api.service */ 27822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lookup-mappings/lookup-mappings.component */ 62448);












function FileBoundLookupComponent_div_12_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 11);
  }
}
function FileBoundLookupComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FileBoundLookupComponent_div_12_img_2_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loadingProjectFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "admin-metadata-lookup.loading-project-fields"), " ");
  }
}
function FileBoundLookupComponent_app_lookup_mappings_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-lookup-mappings", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lookup", ctx_r0.fileBoundLookup)("lookupFieldOptions", ctx_r0.lookupFieldOptions)("metaDataMappingOptions", ctx_r0.metaDataMappingOptions);
  }
}
class FileBoundLookupComponent {
  constructor(translate, proxy) {
    this.translate = translate;
    this.proxy = proxy;
    this.optionsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.loadingProjectFields = false;
    this.createFields = () => {
      this.projectsDataSource = new FileBoundProjectDataSource(this.fileBoundLookup, this.proxy);
      this.fieldFileboundUrl = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('step-delivery-filebound.url'),
        placeholder: this.translate.instant('step-delivery-filebound.url-placeholder'),
        required: true
      });
      this.fieldFileboundUsername = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('step-delivery-filebound.username'),
        placeholder: this.translate.instant('step-delivery-filebound.username-placeholder'),
        required: true
      });
      this.fieldFileboundPassword = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Password,
        label: this.translate.instant('step-delivery-filebound.password'),
        placeholder: this.translate.instant('step-delivery-filebound.password-placeholder'),
        required: true
      });
      this.fieldFileboundProject = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('step-delivery-filebound.project'),
        placeholder: this.translate.instant('step-delivery-filebound.project-placeholder'),
        datasource: this.projectsDataSource,
        required: true
      });
    };
    this.onLoadProjectsURLChanged = url => {
      this.fileBoundLookup.fileBoundURL = url;
      this.projectsDataSource.changed.next();
    };
    this.onLoadProjectsUsernameChanged = username => {
      this.fileBoundLookup.username = username;
      this.projectsDataSource.changed.next();
    };
    this.onLoadProjectsPasswordChanged = password => {
      this.fileBoundLookup.password = password;
      this.projectsDataSource.changed.next();
    };
    this.onProjectSelected = value => {
      if (!value) return;
      if (!this.fileBoundLookup.fileBoundURL) return;
      if (!this.fileBoundLookup.username) return;
      this.loadingProjectFields = true;
      this.proxy.getFileBoundProjectFields(this.fileBoundLookup.fileBoundURL, this.fileBoundLookup.username, this.fileBoundLookup.password, value, this.projectFieldsLoaded, this.projectFieldsLoadFailed);
    };
    this.onProjectChanged = () => {
      this.fileBoundLookup.lookupFieldId = '';
      this.fileBoundLookup.mappings = [];
    };
    this.projectFieldsLoaded = result => {
      this.loadingProjectFields = false;
      this.fileBoundLookup.projectName = result.project.name;
      this.lookupFieldOptions = result.metaDataFields.map(pf => ({
        name: pf.name,
        value: `${pf.number}`
      }));
      this.optionsLoaded.emit();
    };
    this.projectFieldsLoadFailed = () => {
      this.loadingProjectFields = false;
    };
  }
  ngOnInit() {
    this.createFields();
    this.lookupFieldOptions = [];
  }
  static {
    this.ɵfac = function FileBoundLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FileBoundLookupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_proxy_api_service__WEBPACK_IMPORTED_MODULE_1__.ProxyApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FileBoundLookupComponent,
      selectors: [["app-filebound-lookup"]],
      inputs: {
        fileBoundLookup: "fileBoundLookup",
        metaDataMappingOptions: "metaDataMappingOptions"
      },
      outputs: {
        optionsLoaded: "optionsLoaded"
      },
      decls: 14,
      vars: 11,
      consts: [["appAutoFocusFirstInput", "", 1, "filebound-lookup"], [1, "row"], [1, "col-6"], [3, "valueChange", "blur", "field", "value", "focused"], [1, "col-3"], [3, "valueChange", "blur", "field", "value"], [3, "valueChange", "blur", "fieldChanged", "field", "value"], ["class", "row", 4, "ngIf"], [3, "lookup", "lookupFieldOptions", "metaDataMappingOptions", 4, "ngIf"], [1, "col-12"], ["src", "assets/shared/img/animated-spinner.gif", "width", "15", "height", "3", 4, "ngIf"], ["src", "assets/shared/img/animated-spinner.gif", "width", "15", "height", "3"], [3, "lookup", "lookupFieldOptions", "metaDataMappingOptions"]],
      template: function FileBoundLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FileBoundLookupComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fileBoundLookup.fileBoundURL, $event) || (ctx.fileBoundLookup.fileBoundURL = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function FileBoundLookupComponent_Template_app_field_blur_3_listener($event) {
            return ctx.onLoadProjectsURLChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FileBoundLookupComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fileBoundLookup.username, $event) || (ctx.fileBoundLookup.username = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function FileBoundLookupComponent_Template_app_field_blur_5_listener($event) {
            return ctx.onLoadProjectsUsernameChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FileBoundLookupComponent_Template_app_field_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fileBoundLookup.password, $event) || (ctx.fileBoundLookup.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function FileBoundLookupComponent_Template_app_field_blur_7_listener($event) {
            return ctx.onLoadProjectsPasswordChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "app-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function FileBoundLookupComponent_Template_app_field_valueChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fileBoundLookup.projectId, $event) || (ctx.fileBoundLookup.projectId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function FileBoundLookupComponent_Template_app_field_blur_10_listener($event) {
            return ctx.onProjectSelected($event);
          })("fieldChanged", function FileBoundLookupComponent_Template_app_field_fieldChanged_10_listener() {
            return ctx.onProjectChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FileBoundLookupComponent_div_12_Template, 5, 4, "div", 7)(13, FileBoundLookupComponent_app_lookup_mappings_13_Template, 1, 3, "app-lookup-mappings", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldFileboundUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.fileBoundLookup.fileBoundURL);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("focused", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldFileboundUsername);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.fileBoundLookup.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldFileboundPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.fileBoundLookup.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldFileboundProject);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.fileBoundLookup.projectId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loadingProjectFields);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lookupFieldOptions.length && !ctx.loadingProjectFields);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputDirective, _lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_4__.LookupMappingsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class FileBoundProjectDataSource {
  constructor(options, proxy) {
    this.options = options;
    this.proxy = proxy;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    if (!this.options.fileBoundURL || !this.options.username || !this.options.password) {
      failureCallBack(null);
      return;
    }
    this.proxy.getFileBoundProjects(this.options.fileBoundURL, this.options.username, this.options.password, projects => {
      const items = new Array();
      for (const project of projects) {
        const item = {
          name: project.name,
          value: project.id
        };
        items.push(item);
      }
      successCallBack(items);
    }, failureCallBack);
  }
}

/***/ }),

/***/ 62448:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-lookup/lookup-mappings/lookup-mappings.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LookupMappingsComponent: () => (/* binding */ LookupMappingsComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);








function LookupMappingsComponent_ng_container_13_tr_1_app_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function LookupMappingsComponent_ng_container_13_tr_1_app_checkbox_4_Template_app_checkbox_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.setFieldMappingOverwrite(field_r2.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", field_r2.name)("value", ctx_r2.getFieldMappingOverwrite(field_r2.value));
  }
}
function LookupMappingsComponent_ng_container_13_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 12)(2, "app-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blurex", function LookupMappingsComponent_ng_container_13_tr_1_Template_app_field_blurex_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.setFieldMappingValue($event, field_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LookupMappingsComponent_ng_container_13_tr_1_app_checkbox_4_Template, 1, 2, "app-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r2.getFieldMappingField(field_r2))("value", ctx_r2.getFieldMappingValue(field_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.getFieldMappingValue(field_r2.value));
  }
}
function LookupMappingsComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LookupMappingsComponent_ng_container_13_tr_1_Template, 5, 3, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r2.value !== ctx_r2.lookup.lookupFieldId && field_r2.value);
  }
}
class LookupMappingsComponent {
  constructor(translate) {
    this.translate = translate;
    this.mappingFields = {};
    this.notMappedOption = {
      name: this.translate.instant('admin-metadata-lookup.mapping-none'),
      value: ''
    };
    this.createFields = () => {
      this.fieldLookupField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-metadata-lookup.lookup-field'),
        placeholder: this.translate.instant('admin-metadata-lookup.lookup-field'),
        datasource: this.lookupFieldDataSource,
        required: true
      });
    };
    this.getFieldMappingField = field => {
      if (!this.mappingFields[field.value]) {
        this.mappingFields[field.value] = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
          type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
          label: field.name,
          datasource: this.metaDataMappingDataSource
        });
      }
      return this.mappingFields[field.value];
    };
    this.getFieldMappingValue = fieldId => {
      const mapping = this.lookup.mappings.find(m => m.fieldId === fieldId);
      return mapping ? mapping.metaDataId : '';
    };
    this.setFieldMappingValue = (e, fieldId) => {
      let mapping = this.lookup.mappings.find(m => m.fieldId === fieldId);
      if (e.value === '') {
        if (mapping) this.lookup.mappings.splice(this.lookup.mappings.indexOf(mapping), 1);
        return;
      }
      if (!mapping) {
        mapping = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataLookupMapping({
          metaDataId: '',
          overwrite: true,
          fieldId: fieldId
        });
        this.lookup.mappings.push(mapping);
      }
      mapping.metaDataId = e.value;
    };
    this.getFieldMappingOverwrite = fieldId => {
      let mapping = this.lookup.mappings.find(m => m.fieldId === fieldId);
      return mapping ? mapping.overwrite : true;
    };
    this.setFieldMappingOverwrite = (fieldId, overwrite) => {
      let mapping = this.lookup.mappings.find(m => m.fieldId === fieldId);
      if (!mapping) return;
      mapping.overwrite = overwrite;
    };
    this.lookupFieldChanged = $event => {
      let mapping;
      if (this.lookup.type === 'Upland.Hydra.Database.DataSourcesLookup') {
        mapping = this.lookup.mappings.find(m => m.fieldId === this.lookup.lookupFieldId);
      } else {
        mapping = this.lookup.mappings.find(m => m.fieldId == $event);
      }
      if (mapping) {
        this.lookup.mappings.splice(this.lookup.mappings.indexOf(mapping), 1);
      }
    };
  }
  ngOnInit() {
    this.metaDataMappingDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.metaDataMappingOptions);
    this.lookupFieldDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.lookupFieldOptions);
    this.lookupFieldOptions.unshift(this.notMappedOption);
    this.createFields();
  }
  static {
    this.ɵfac = function LookupMappingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LookupMappingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LookupMappingsComponent,
      selectors: [["app-lookup-mappings"]],
      inputs: {
        lookup: "lookup",
        lookupFieldOptions: "lookupFieldOptions",
        metaDataMappingOptions: "metaDataMappingOptions"
      },
      decls: 14,
      vars: 5,
      consts: [[1, "lookup-mappings"], [1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"], [1, "col-12"], [1, "table"], [1, "table-header"], ["width", "40%"], [3, "localize", "text"], ["width", "30%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "table-row"], [3, "blurex", "field", "value"], ["label", "admin-metadata-lookup.overwrite-existing", 3, "name", "value", "valueChange", 4, "ngIf"], ["label", "admin-metadata-lookup.overwrite-existing", 3, "valueChange", "name", "value"]],
      template: function LookupMappingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function LookupMappingsComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.lookup.lookupFieldId, $event) || (ctx.lookup.lookupFieldId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function LookupMappingsComponent_Template_app_field_valueChange_3_listener($event) {
            return ctx.lookupFieldChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "table", 5)(6, "thead")(7, "tr", 6)(8, "td", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, LookupMappingsComponent_ng_container_13_Template, 2, 1, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldLookupField);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.lookup.lookupFieldId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("localize", true)("text", "admin-metadata-lookup.intelligent-capture-metadata");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lookupFieldOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__.LabelComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxComponent],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.lookup-mappings .table {\n  border: 1px solid #cfcfcf;\n  margin-top: 15px;\n}\n.lookup-mappings .table-header {\n  border: 1px solid #cfcfcf;\n  background-color: #f1f3f3;\n}\n.lookup-mappings .table-row {\n  border-bottom: 1px solid #cfcfcf;\n}\n.lookup-mappings .table-row .form-checkbox {\n  padding-top: 25px;\n}\n.lookup-mappings .metadata-mappings-header {\n  border-bottom: 1px solid #cfcfcf;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1ldGFkYXRhL21ldGFkYXRhLWxvb2t1cC9sb29rdXAtbWFwcGluZ3MvbG9va3VwLW1hcHBpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTVPRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUErT0o7QUE1T0U7RUFDRSx5QkFBQTtFQUNBLHlCRDhETTtBQ2dMVjtBQTNPRTtFQUNFLGdDQUFBO0FBNk9KO0FBM09JO0VBQ0UsaUJBQUE7QUE2T047QUF6T0U7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEyT0oiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5sb29rdXAtbWFwcGluZ3Mge1xyXG4gIC50YWJsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLXJvdyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NmY2ZjZjtcclxuXHJcbiAgICAuZm9ybS1jaGVja2JveCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1ldGFkYXRhLW1hcHBpbmdzLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NmY2ZjZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 26417:
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-lookup/metadata-lookup.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataLookupComponent: () => (/* binding */ MetadataLookupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _filebound_lookup_filebound_lookup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filebound-lookup/filebound-lookup.component */ 86200);
/* harmony import */ var _csv_lookup_csv_lookup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./csv-lookup/csv-lookup.component */ 93936);
/* harmony import */ var _datasource_lookup_datasource_lookup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datasource-lookup/datasource-lookup.component */ 43424);













function MetadataLookupComponent_app_filebound_lookup_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-filebound-lookup", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionsLoaded", function MetadataLookupComponent_app_filebound_lookup_5_Template_app_filebound_lookup_optionsLoaded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onLoadOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fileBoundLookup", ctx_r1.mddFileBoundLookup)("metaDataMappingOptions", ctx_r1.metaDataMappingOptions);
  }
}
function MetadataLookupComponent_app_csv_lookup_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-csv-lookup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionsLoaded", function MetadataLookupComponent_app_csv_lookup_6_Template_app_csv_lookup_optionsLoaded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onLoadOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("csvLookup", ctx_r1.mddCsvLookup)("metaDataMappingOptions", ctx_r1.metaDataMappingOptions);
  }
}
function MetadataLookupComponent_app_datasource_lookup_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-datasource-lookup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("reloadLookup", function MetadataLookupComponent_app_datasource_lookup_7_Template_app_datasource_lookup_reloadLookup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onReloadLookup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("datasourceLookup", ctx_r1.mddDataSourceLookup)("metaDataMappingOptions", ctx_r1.metaDataMappingOptions);
  }
}
class MetadataLookupComponent {
  get mddCsvLookup() {
    return this.mdd.lookup;
  }
  get mddFileBoundLookup() {
    return this.mdd.lookup;
  }
  get mddDataSourceLookup() {
    return this.mdd.lookup;
  }
  constructor(translate, userState) {
    this.translate = translate;
    this.userState = userState;
    this.optionsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.createFields = () => {
      const lookupTypeOptions = [{
        value: '0',
        name: this.translate.instant('admin-metadata-lookup.type-filebound')
      }, {
        value: '1',
        name: this.translate.instant('admin-metadata-lookup.type-csv')
      }, {
        value: '2',
        name: this.translate.instant('admin-metadata-lookup.type-datasource')
      }];
      this.fieldLookupType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        label: this.translate.instant('admin-metadata-lookup.lookup-type'),
        placeholder: this.translate.instant('admin-metadata-lookup.lookup-type'),
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(lookupTypeOptions)
      });
    };
  }
  ngOnInit() {
    if (this.mdd.lookup == null || this.mdd.lookup instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataNoopLookup) {
      this.mdd.lookup = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FileBoundLookup();
    }
    this.metaDataMappingOptions = this.userState.user.metaData.filter(md => md.id !== this.mdd.id && md.type !== shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.LineItems && md.type !== shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Lookup).map(md => {
      return {
        name: md.name,
        value: md.id
      };
    }).sort((x, y) => x.name.localeCompare(y.name));
    this.metaDataMappingOptions.unshift({
      name: this.translate.instant('admin-metadata-lookup.mapping-none'),
      value: ''
    });
    this.createFields();
  }
  selectedLookupTypeChanged(optionValue) {
    if (optionValue === '0' && !(this.mdd.lookup instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FileBoundLookup)) {
      this.mdd.lookup = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FileBoundLookup();
      return;
    }
    if (optionValue === '1' && !(this.mdd.lookup instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.CSVLookup)) {
      this.mdd.lookup = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.CSVLookup();
      this.mdd.lookup.lookupType();
      return;
    }
    if (optionValue === '2' && !(this.mdd.lookup instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DataSourceLookup)) {
      this.mdd.lookup = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DataSourceLookup();
      this.mdd.lookup.lookupType();
      return;
    }
  }
  onLoadOptions() {
    this.optionsLoaded.emit();
  }
  onReloadLookup(prevDataSourceId) {
    if (prevDataSourceId && prevDataSourceId != this.mdd.lookup.dataSourceId) this.mdd.lookup.mappings = Array();
  }
  static {
    this.ɵfac = function MetadataLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataLookupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: MetadataLookupComponent,
      selectors: [["app-metadata-lookup"]],
      inputs: {
        mdd: "mdd"
      },
      outputs: {
        optionsLoaded: "optionsLoaded"
      },
      decls: 8,
      vars: 6,
      consts: [[1, "metadata-lookup"], [1, "col-4", "p-0"], [1, "col-12", 3, "blur", "field", "value"], ["label", "admin-metadata-lookup.display-as-list", 1, "col-12", "ml-1", "d-block", 3, "valueChange", "value"], [3, "fileBoundLookup", "metaDataMappingOptions", "optionsLoaded", 4, "ngIf"], [3, "csvLookup", "metaDataMappingOptions", "optionsLoaded", 4, "ngIf"], [3, "datasourceLookup", "metaDataMappingOptions", "reloadLookup", 4, "ngIf"], [3, "optionsLoaded", "fileBoundLookup", "metaDataMappingOptions"], [3, "optionsLoaded", "csvLookup", "metaDataMappingOptions"], [3, "reloadLookup", "datasourceLookup", "metaDataMappingOptions"]],
      template: function MetadataLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function MetadataLookupComponent_Template_app_field_blur_2_listener($event) {
            return ctx.selectedLookupTypeChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-checkbox", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function MetadataLookupComponent_Template_app_checkbox_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.mdd.lookup.displayAsList, $event) || (ctx.mdd.lookup.displayAsList = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MetadataLookupComponent_app_filebound_lookup_5_Template, 1, 2, "app-filebound-lookup", 4)(6, MetadataLookupComponent_app_csv_lookup_6_Template, 1, 2, "app-csv-lookup", 5)(7, MetadataLookupComponent_app_datasource_lookup_7_Template, 1, 2, "app-datasource-lookup", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.mdd.lookup.lookupType());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx.fieldLookupType);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx.mdd.lookup.displayAsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mdd.lookup.lookupType() === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mdd.lookup.lookupType() === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mdd.lookup.lookupType() === 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxComponent, _filebound_lookup_filebound_lookup_component__WEBPACK_IMPORTED_MODULE_4__.FileBoundLookupComponent, _csv_lookup_csv_lookup_component__WEBPACK_IMPORTED_MODULE_5__.CSVLookupComponent, _datasource_lookup_datasource_lookup_component__WEBPACK_IMPORTED_MODULE_6__.DatasourceLookupComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73464:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/metadata-workflows/metadata-workflows.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataWorkflowsComponent: () => (/* binding */ MetadataWorkflowsComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);











function MetadataWorkflowsComponent_app_dual_picklist_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-dual-picklist", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("currentChange", function MetadataWorkflowsComponent_app_dual_picklist_3_Template_app_dual_picklist_currentChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.currentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("available", ctx_r1.available)("current", ctx_r1.current)("displayField", "name")("listName", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, "admin-metadata-workflows.workflows"));
  }
}
class MetadataWorkflowsComponent {
  constructor(hydraApi, translate, toastr) {
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.toastr = toastr;
    this.available = [];
    this.current = [];
    this.loadWorkflows = () => {
      this.hydraApi.getWorkflows(this.workflowsLoaded, this.workflowsFailedLoad);
    };
    this.workflowsLoaded = workflows => {
      this.available = workflows;
      this.current = [];
      for (let id of this.mdd.assignedWorkflowIds) {
        const item = workflows.find(w => w.id === id);
        if (item) this.current.push(item);
      }
    };
    this.workflowsFailedLoad = err => {
      this.toastr.error(this.translate.instant('errors.failed-load-workflows'));
    };
    this.currentChanged = workflows => {
      this.mdd.assignedWorkflowIds = [];
      for (let workflow of workflows) {
        this.mdd.assignedWorkflowIds.push(workflow.id);
      }
    };
  }
  ngOnInit() {
    const allWorkflowsOption = {
      value: '0',
      name: this.translate.instant('admin-metadata-workflows.all-workflows')
    };
    const selectedWorkflowsOption = {
      value: '1',
      name: this.translate.instant('admin-metadata-workflows.selected-workflows')
    };
    this.options = [allWorkflowsOption, selectedWorkflowsOption];
    this.selectedAssignValue = this.mdd.workflowsAssigned ? selectedWorkflowsOption.value : allWorkflowsOption.value;
    this.fieldAssignTypes = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
      label: this.translate.instant('admin-metadata-workflows.assign-metadata-to'),
      placeholder: this.translate.instant('admin-metadata-workflows.assign-metadata-to'),
      datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.options)
    });
    this.loadWorkflows();
  }
  selectedOptionChanged(optionValue) {
    if (optionValue == '0') {
      this.mdd.workflowsAssigned = false;
      this.mdd.assignedWorkflowIds = [];
    } else {
      this.mdd.workflowsAssigned = true;
    }
  }
  static {
    this.ɵfac = function MetadataWorkflowsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataWorkflowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MetadataWorkflowsComponent,
      selectors: [["app-metadata-workflows"]],
      inputs: {
        mdd: "mdd"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "metadata-workflows", "d-flex", "flex-column", "h-100"], [1, "field-wrapper"], [3, "valueChange", "blur", "field", "value"], ["class", "col p-0 max-height", 3, "available", "current", "displayField", "listName", "currentChange", 4, "ngIf"], [1, "col", "p-0", "max-height", 3, "currentChange", "available", "current", "displayField", "listName"]],
      template: function MetadataWorkflowsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function MetadataWorkflowsComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedAssignValue, $event) || (ctx.selectedAssignValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function MetadataWorkflowsComponent_Template_app_field_blur_2_listener($event) {
            return ctx.selectedOptionChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MetadataWorkflowsComponent_app_dual_picklist_3_Template, 2, 6, "app-dual-picklist", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldAssignTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.selectedAssignValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedAssignValue !== "0");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__.DualPicklistComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: [".metadata-workflows .dropdown {\n  margin-left: -15px;\n}\n.metadata-workflows > .field-wrapper {\n  width: 40%;\n}\n.metadata-workflows .dropdown-menu {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tbWV0YWRhdGEvbWV0YWRhdGEtd29ya2Zsb3dzL21ldGFkYXRhLXdvcmtmbG93cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FBQUo7QUFHRTtFQUNFLFVBQUE7QUFESjtBQUlFO0VBQ0UsMEJBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRhZGF0YS13b3JrZmxvd3Mge1xyXG4gIC5kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgfVxyXG5cclxuICA+IC5maWVsZC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 31251:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/validation-datasource-column/validation-datasource-column.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationDataSourceColumnComponent: () => (/* binding */ ValidationDataSourceColumnComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);











function ValidationDataSourceColumnComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function ValidationDataSourceColumnComponent_div_0_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.validator.dataSourceId, $event) || (ctx_r1.validator.dataSourceId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function ValidationDataSourceColumnComponent_div_0_Template_app_field_fieldChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onDataSourceChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.datasourcesField)("triggerBlurEventOnLoad", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.validator.dataSourceId);
  }
}
function ValidationDataSourceColumnComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function ValidationDataSourceColumnComponent_div_1_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.validator.dataSourceColumnId, $event) || (ctx_r1.validator.dataSourceColumnId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function ValidationDataSourceColumnComponent_div_1_Template_app_field_fieldChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.columnChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.dataSourceColumnsField)("triggerBlurEventOnLoad", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.validator.dataSourceColumnId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.validator.dataSourceId);
  }
}
class ValidationDataSourceColumnComponent {
  constructor(hydraApi, translate, spinner) {
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.spinner = spinner;
    this.datasourceColumnsLoaded = false;
    this.datasourcesLoaded = false;
    this.datasourcesLoadSucceeded = datasources => {
      this.allDataSources = datasources;
      const columnsFields = [];
      datasources.forEach(datasource => {
        columnsFields.push({
          name: datasource.name,
          value: datasource.id
        });
      });
      columnsFields.unshift({
        name: this.translate.instant('Metadata-Form.None'),
        value: ''
      });
      this.datasourcesDataSource.updateOptions(columnsFields);
      this.onDataSourceChanged(this.validator.dataSourceId);
      this.datasourcesLoaded = true;
      this.spinner.hide();
    };
    this.datasourcesLoadFailed = error => {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error(this.translate.instant('Metadata-Form.loading-datasources-failed'), error);
      this.spinner.hide();
    };
    this.columnChanged = value => {
      const selectedOption = this.columnsDataSource.options.find(option => option.value == value);
      this.validator.dataSourceColumnName = selectedOption == null ? '' : selectedOption.name;
    };
    this.onDataSourceChanged = value => {
      if (value == '') {
        this.validator.dataSourceColumnId = '';
        return;
      }
      const columnOptions = new Array();
      const selectedDataSource = this.allDataSources.filter(datasource => datasource.id === value);
      selectedDataSource[0].columns.forEach(column => {
        columnOptions.push({
          name: column.name,
          value: column.id
        });
      });
      columnOptions.unshift({
        name: this.translate.instant('Metadata-Form.None'),
        value: ''
      });
      this.columnsDataSource.updateOptions(columnOptions);
    };
    this.createField = (label, placeholder, datasource) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: label ? this.translate.instant(label) : '',
        placeholder: placeholder,
        required: true,
        datasource: datasource
      });
    };
    this.createFields = () => {
      this.datasourcesField = this.createField('Metadata-Form.datasource', '', this.datasourcesDataSource);
      this.dataSourceColumnsField = this.createField('Metadata-Form.datasourceColumn', '', this.columnsDataSource);
    };
  }
  ngOnInit() {
    this.spinner.show(this.translate.instant('Common.Loading'), document.body);
    this.datasourcesDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array());
    this.columnsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(new Array({
      name: this.translate.instant('Metadata-Form.None'),
      value: this.validator.dataSourceColumnId
    }));
    this.createFields();
    this.hydraApi.getAllDataSources(this.datasourcesLoadSucceeded, this.datasourcesLoadFailed);
  }
  static {
    this.ɵfac = function ValidationDataSourceColumnComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidationDataSourceColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ValidationDataSourceColumnComponent,
      selectors: [["app-validation-datasource"]],
      inputs: {
        validator: "validator"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "triggerBlurEventOnLoad", "value"], [3, "valueChange", "fieldChanged", "field", "triggerBlurEventOnLoad", "value", "disabled"]],
      template: function ValidationDataSourceColumnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ValidationDataSourceColumnComponent_div_0_Template, 2, 3, "div", 0)(1, ValidationDataSourceColumnComponent_div_1_Template, 2, 4, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.datasourcesLoaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.datasourcesLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 30298:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/validation-date/date-value/date-value.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateValueComponent: () => (/* binding */ DateValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);







function DateValueComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function DateValueComponent_div_1_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.date.data, $event) || (ctx_r1.date.data = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DateValueComponent_div_1_Template_app_field_valueChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r1.dateField);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.date.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minValue", ctx_r1.minValue == null ? null : ctx_r1.minValue.data)("maxValue", ctx_r1.maxValue == null ? null : ctx_r1.maxValue.data);
  }
}
function DateValueComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "app-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function DateValueComponent_div_2_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.date.data, $event) || (ctx_r1.date.data = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DateValueComponent_div_2_Template_app_field_valueChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "app-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function DateValueComponent_div_2_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.dateType, $event) || (ctx_r1.dateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DateValueComponent_div_2_Template_app_field_valueChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r1.offsetField);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.date.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r1.typeField);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.dateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("triggerBlurEventOnLoad", false);
  }
}
class DateValueComponent {
  get dateType() {
    return `${this.date.type}`;
  }
  set dateType(val) {
    this.date.type = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
    this.onValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.createFields = () => {
      this.dateField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Date,
        label: '',
        placeholder: '',
        required: true
      });
      this.offsetField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: '',
        placeholder: this.translate.instant('Metadata-Form.days-number'),
        required: true,
        allowNegativeNumbers: false
      });
      const options = [];
      options.push({
        name: this.translate.instant(`Date-Value.days-before`),
        value: 1
      });
      options.push({
        name: this.translate.instant(`Date-Value.days-after`),
        value: 2
      });
      this.typeField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options)
      });
    };
    this.onChange = () => {
      this.onValueChange.emit();
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function DateValueComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DateValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DateValueComponent,
      selectors: [["app-date-value"]],
      inputs: {
        date: "date",
        minValue: "minValue",
        maxValue: "maxValue"
      },
      outputs: {
        onValueChange: "onValueChange"
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [3, "valueChange", "field", "value", "minValue", "maxValue"], [1, "d-flex", "align-items-center"], [1, "p-0", "m-0"], [3, "valueChange", "field", "value"], [3, "valueChange", "field", "value", "triggerBlurEventOnLoad"]],
      template: function DateValueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateValueComponent_div_1_Template, 2, 4, "div", 0)(2, DateValueComponent_div_2_Template, 5, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.date.type == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.date.type == 1 || ctx.date.type == 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 63417:
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-metadata/validation-date/validation-date.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationDateComponent: () => (/* binding */ ValidationDateComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _date_value_date_value_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-value/date-value.component */ 30298);






class ValidationDateComponent {
  get type() {
    return `${this._type}`;
  }
  set type(val) {
    this._type = Number(val);
    this.validator.changeType(this._type);
  }
  constructor(translate) {
    this.translate = translate;
    this.createFields = () => {
      const options = [];
      options.push({
        name: this.translate.instant(`Date-Value.relative-date-range`),
        value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DateValueType.RelativeDate
      });
      options.push({
        name: this.translate.instant(`Date-Value.specific-date-range`),
        value: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DateValueType.SpecificDate
      });
      this.typeField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options)
      });
    };
  }
  ngOnInit() {
    this.createFields();
    this._type = this.validator.beginDate.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DateValueType.SpecificDate ? shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DateValueType.SpecificDate : shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DateValueType.RelativeDate;
  }
  static {
    this.ɵfac = function ValidationDateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidationDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ValidationDateComponent,
      selectors: [["app-validation-date"]],
      inputs: {
        validator: "validator"
      },
      decls: 13,
      vars: 13,
      consts: [[1, "validation-date"], [1, "row", "ml-0"], [3, "valueChange", "field", "value", "triggerBlurEventOnLoad"], [1, "row", "ml-0", "date-value"], [1, "d-flex", "align-items-center"], [1, "d-inline", 3, "date", "maxValue"], [1, "pl-2", "pr-2"], [1, "d-inline", 3, "date", "minValue"]],
      template: function ValidationDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function ValidationDateComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.type, $event) || (ctx.type = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-date-value", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-date-value", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.typeField);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("triggerBlurEventOnLoad", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 9, "Date-Value.valid-from"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("date", ctx.validator.beginDate)("maxValue", ctx.validator.endDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 11, "Date-Value.to"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("date", ctx.validator.endDate)("minValue", ctx.validator.beginDate);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _date_value_date_value_component__WEBPACK_IMPORTED_MODULE_2__.DateValueComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: [".validation-date * {\n  font-size: 12px;\n}\n.validation-date .date-value {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tbWV0YWRhdGEvdmFsaWRhdGlvbi1kYXRlL3ZhbGlkYXRpb24tZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWRhdGUge1xyXG4gICoge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtdmFsdWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 52573:
/*!***************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/validation-length/validation-length.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationLengthComponent: () => (/* binding */ ValidationLengthComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);





class ValidationLengthComponent {
  get minLength() {
    return `${this.validator.minLength}`;
  }
  set minLength(val) {
    this.validator.minLength = Number(val);
  }
  get maxLength() {
    return `${this.validator.maxLength}`;
  }
  set maxLength(val) {
    this.validator.maxLength = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
    this.createFields = () => {
      this.minValue = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translate.instant('Metadata-Form.Min'),
        placeholder: this.translate.instant('Metadata-Form.Min'),
        required: true
      });
      this.maxValue = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translate.instant('Metadata-Form.Max'),
        placeholder: this.translate.instant('Metadata-Form.Max'),
        required: true
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function ValidationLengthComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidationLengthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ValidationLengthComponent,
      selectors: [["app-validation-length"]],
      inputs: {
        validator: "validator"
      },
      decls: 4,
      vars: 4,
      consts: [[3, "valueChange", "field", "value"]],
      template: function ValidationLengthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-field", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function ValidationLengthComponent_Template_app_field_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.minLength, $event) || (ctx.minLength = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "app-field", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function ValidationLengthComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.maxLength, $event) || (ctx.maxLength = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx.minValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx.minLength);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx.maxValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx.maxLength);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 62337:
/*!*************************************************************************************!*\
  !*** ./src/app/views/admin-metadata/validation-regex/validation-regex.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationRegexComponent: () => (/* binding */ ValidationRegexComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);





class ValidationRegexComponent {
  constructor(translate) {
    this.translate = translate;
    this.createFields = () => {
      this.fieldPattern = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('Metadata-Form.pattern'),
        placeholder: this.translate.instant('Metadata-Form.pattern-placeholder'),
        required: true
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function ValidationRegexComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidationRegexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ValidationRegexComponent,
      selectors: [["app-validation-regex"]],
      inputs: {
        validator: "validator"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "valueChange", "field", "value"]],
      template: function ValidationRegexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-field", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function ValidationRegexComponent_Template_app_field_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.validator.pattern, $event) || (ctx.validator.pattern = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx.fieldPattern);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx.validator.pattern);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 72474:
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-pagination/fesm2020/ngx-pagination.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxPaginationModule: () => (/* binding */ NgxPaginationModule),
/* harmony export */   PaginatePipe: () => (/* binding */ PaginatePipe),
/* harmony export */   PaginationControlsComponent: () => (/* binding */ PaginationControlsComponent),
/* harmony export */   PaginationControlsDirective: () => (/* binding */ PaginationControlsDirective),
/* harmony export */   PaginationService: () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 39191);




function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r3.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < p_r3.getCurrent());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.isFirstPage());
  }
}
function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.setCurrent(page_r6.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.setCurrent(page_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.screenReaderPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r6.label === "..." ? page_r6.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.screenReaderCurrentLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r6.label === "..." ? page_r6.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10)(2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", p_r3.getCurrent() === page_r6.value)("ellipsis", page_r6.label === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.getCurrent() !== page_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.getCurrent() === page_r6.value);
  }
}
function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r3.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !p_r3.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.isLastPage());
  }
}
function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7)(5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r3.responsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r3.getCurrent(), " / ", p_r3.getLastPage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r3.pages)("ngForTrackBy", ctx_r3.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.directionLinks);
  }
}
class PaginationService {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
  }
  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */
  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */
  updateInstance(instance) {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }
    return changed;
  }
  /**
   * Returns the current page number.
   */
  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }
    return 1;
  }
  /**
   * Sets the current page number.
   */
  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */
  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */
  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */
  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }
    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */
  clone(obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }
    return target;
  }
}
const LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
class PaginatePipe {
  constructor(service) {
    this.service = service;
    // store the values from the last time the pipe was invoked
    this.state = {};
  }
  transform(collection, args) {
    // When an observable is passed through the AsyncPipe, it will output
    // `null` until the subscription resolves. In this case, we want to
    // use the cached data from the `state` object to prevent the NgFor
    // from flashing empty until the real values arrive.
    if (!(collection instanceof Array)) {
      let _id = args.id || this.service.defaultId();
      if (this.state[_id]) {
        return this.state[_id].slice;
      } else {
        return collection;
      }
    }
    let serverSideMode = args.totalItems && args.totalItems !== collection.length;
    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end;
    let perPage = instance.itemsPerPage;
    let emitChange = this.service.register(instance);
    if (!serverSideMode && collection instanceof Array) {
      perPage = +perPage || LARGE_NUMBER;
      start = (instance.currentPage - 1) * perPage;
      end = start + perPage;
      let isIdentical = this.stateIsIdentical(id, collection, start, end);
      if (isIdentical) {
        return this.state[id].slice;
      } else {
        let slice = collection.slice(start, end);
        this.saveState(id, collection, slice, start, end);
        this.service.change.emit(id);
        return slice;
      }
    } else {
      if (emitChange) {
        this.service.change.emit(id);
      }
      // save the state for server-side collection to avoid null
      // flash as new data loads.
      this.saveState(id, collection, collection, start, end);
      return collection;
    }
  }
  /**
   * Create an PaginationInstance object, using defaults for any optional properties not supplied.
   */
  createInstance(collection, config) {
    this.checkConfig(config);
    return {
      id: config.id != null ? config.id : this.service.defaultId(),
      itemsPerPage: +config.itemsPerPage || 0,
      currentPage: +config.currentPage || 1,
      totalItems: +config.totalItems || collection.length
    };
  }
  /**
   * Ensure the argument passed to the filter contains the required properties.
   */
  checkConfig(config) {
    const required = ['itemsPerPage', 'currentPage'];
    const missing = required.filter(prop => !(prop in config));
    if (0 < missing.length) {
      throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(', ')}`);
    }
  }
  /**
   * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
   * array for a given id. This means that the next time the pipe is run on this collection & id, we just
   * need to check that the collection, start and end points are all identical, and if so, return the
   * last sliced array.
   */
  saveState(id, collection, slice, start, end) {
    this.state[id] = {
      collection,
      size: collection.length,
      slice,
      start,
      end
    };
  }
  /**
   * For a given id, returns true if the collection, size, start and end values are identical.
   */
  stateIsIdentical(id, collection, start, end) {
    let state = this.state[id];
    if (!state) {
      return false;
    }
    let isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;
    if (!isMetaDataIdentical) {
      return false;
    }
    return state.slice.every((element, index) => element === collection[start + index]);
  }
}
PaginatePipe.ɵfac = function PaginatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService, 16));
};
PaginatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "paginate",
  type: PaginatePipe,
  pure: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'paginate',
      pure: false
    }]
  }], function () {
    return [{
      type: PaginationService
    }];
  }, null);
})();

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
const DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
const DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '«';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '»';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
class PaginationControlsDirective {
  constructor(service, changeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;
    this.maxSize = 7;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pages = [];
    this.changeSub = this.service.change.subscribe(id => {
      if (this.id === id) {
        this.updatePageLinks();
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnInit() {
    if (this.id === undefined) {
      this.id = this.service.defaultId();
    }
    this.updatePageLinks();
  }
  ngOnChanges(changes) {
    this.updatePageLinks();
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
  /**
   * Go to the previous page
   */
  previous() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() - 1);
  }
  /**
   * Go to the next page
   */
  next() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() + 1);
  }
  /**
   * Returns true if current page is first page
   */
  isFirstPage() {
    return this.getCurrent() === 1;
  }
  /**
   * Returns true if current page is last page
   */
  isLastPage() {
    return this.getLastPage() === this.getCurrent();
  }
  /**
   * Set the current page number.
   */
  setCurrent(page) {
    this.pageChange.emit(page);
  }
  /**
   * Get the current page number.
   */
  getCurrent() {
    return this.service.getCurrentPage(this.id);
  }
  /**
   * Returns the last page number
   */
  getLastPage() {
    let inst = this.service.getInstance(this.id);
    if (inst.totalItems < 1) {
      // when there are 0 or fewer (an error case) items, there are no "pages" as such,
      // but it makes sense to consider a single, empty page as the last page.
      return 1;
    }
    return Math.ceil(inst.totalItems / inst.itemsPerPage);
  }
  getTotalItems() {
    return this.service.getInstance(this.id).totalItems;
  }
  checkValidId() {
    if (this.service.getInstance(this.id).id == null) {
      console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
    }
  }
  /**
   * Updates the page links and checks that the current page is valid. Should run whenever the
   * PaginationService.change stream emits a value matching the current ID, or when any of the
   * input values changes.
   */
  updatePageLinks() {
    let inst = this.service.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(inst);
    if (correctedCurrentPage !== inst.currentPage) {
      setTimeout(() => {
        this.pageBoundsCorrection.emit(correctedCurrentPage);
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      });
    } else {
      this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
    }
  }
  /**
   * Checks that the instance.currentPage property is within bounds for the current page range.
   * If not, return a correct value for currentPage, or the current value if OK.
   */
  outOfBoundCorrection(instance) {
    const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
    if (totalPages < instance.currentPage && 0 < totalPages) {
      return totalPages;
    } else if (instance.currentPage < 1) {
      return 1;
    }
    return instance.currentPage;
  }
  /**
   * Returns an array of Page objects to use in the pagination controls.
   */
  createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    // paginationRange could be a string if passed from attribute, so cast to number.
    paginationRange = +paginationRange;
    let pages = [];
    // Return 1 as default page number
    // Make sense to show 1 instead of empty when there are no items
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
      let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = '...';
      } else {
        label = pageNumber;
      }
      pages.push({
        label: label,
        value: pageNumber
      });
      i++;
    }
    return pages;
  }
  /**
   * Given the position in the sequence of pagination links [i],
   * figure out what page number corresponds to that position.
   */
  calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }
}
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
PaginationControlsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PaginationControlsDirective,
  selectors: [["pagination-template"], ["", "pagination-template", ""]],
  inputs: {
    id: "id",
    maxSize: "maxSize"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  exportAs: ["paginationApi"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'pagination-template,[pagination-template]',
      exportAs: 'paginationApi'
    }]
  }], function () {
    return [{
      type: PaginationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageBoundsCorrection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
function coerceToBoolean(input) {
  return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
class PaginationControlsComponent {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = 'Previous';
    this.nextLabel = 'Next';
    this.screenReaderPaginationLabel = 'Pagination';
    this.screenReaderPageLabel = 'page';
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
    this._responsive = false;
  }
  get directionLinks() {
    return this._directionLinks;
  }
  set directionLinks(value) {
    this._directionLinks = coerceToBoolean(value);
  }
  get autoHide() {
    return this._autoHide;
  }
  set autoHide(value) {
    this._autoHide = coerceToBoolean(value);
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(value) {
    this._responsive = coerceToBoolean(value);
  }
  trackByIndex(index) {
    return index;
  }
}
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationControlsComponent)();
};
PaginationControlsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaginationControlsComponent,
  selectors: [["pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    directionLinks: "directionLinks",
    autoHide: "autoHide",
    responsive: "responsive",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  decls: 4,
  vars: 4,
  consts: [["p", "paginationApi"], [3, "pageChange", "pageBoundsCorrection", "id", "maxSize"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
  template: function PaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 1, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.pageChange.emit($event));
      })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.pageBoundsCorrection.emit($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.screenReaderPaginationLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && p_r3.pages.length <= 1));
    }
  },
  dependencies: [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
  styles: [".ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:\" \";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:\"\\ab\";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:\"\\bb\";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'pagination-controls',
      template: DEFAULT_TEMPLATE,
      styles: [DEFAULT_STYLES],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderPaginationLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderPageLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderCurrentLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageBoundsCorrection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgxPaginationModule {}
NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxPaginationModule)();
};
NgxPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxPaginationModule
});
NgxPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [PaginationService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
      providers: [PaginationService],
      exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_views_admin-metadata_admin-metadata_component_ts.js.map