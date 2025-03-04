"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-tenant-options_admin-tenant-options_module_ts"],{

/***/ 12383:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/views/admin-tenant-options/admin-tenant-options-authentication/admin-tenant-options-authentication.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTenantOptionsAuthenticationComponent: () => (/* binding */ AdminTenantOptionsAuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _app_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/blocks/services/user-state.service */ 99038);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _sso_saml_options_saml_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sso/saml-options/saml-options.component */ 68159);










const _c0 = ["certificateInput"];
function AdminTenantOptionsAuthenticationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsAuthenticationComponent_div_3_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.tenantOptions.ssoClientId, $event) || (ctx_r1.tenantOptions.ssoClientId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AdminTenantOptionsAuthenticationComponent_div_3_Template_app_field_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.tenantFieldChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsAuthenticationComponent_div_3_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.tenantOptions.ssoAuthority, $event) || (ctx_r1.tenantOptions.ssoAuthority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AdminTenantOptionsAuthenticationComponent_div_3_Template_app_field_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.tenantFieldChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldClientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.tenantOptions.ssoClientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldAuthority);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.tenantOptions.ssoAuthority);
  }
}
function AdminTenantOptionsAuthenticationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-saml-options", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("idpSettings", ctx_r1.tenantOptions.idp);
  }
}
class AdminTenantOptionsAuthenticationComponent {
  get tenantOptionsAuthenticationType() {
    return `${this.tenantOptions.authenticationType}`;
  }
  set tenantOptionsAuthenticationType(val) {
    this.tenantOptions.authenticationType = Number(val);
  }
  constructor(translateService, userState) {
    this.translateService = translateService;
    this.userState = userState;
    this.fieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.MetaDataType = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType;
    this.createFields = () => {
      this.fieldClientId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-tenant-options.sso-client-id'),
        placeholder: this.translateService.instant('admin-tenant-options.sso-client-id-placeholder'),
        required: true
      });
      this.fieldAuthority = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-tenant-options.sso-authority'),
        placeholder: this.translateService.instant('admin-tenant-options.sso-authority-placeholder'),
        required: true
      });
      const authenticationTypes = new Array();
      authenticationTypes.push({
        name: this.translateService.instant('admin-tenant-options.authentication-type-application-based'),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TenantAuthenticationType.ApplicationBased}`
      });
      authenticationTypes.push({
        name: this.translateService.instant('admin-tenant-options.authentication-type-sso'),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TenantAuthenticationType.SSO}`
      });
      authenticationTypes.push({
        name: this.translateService.instant('admin-tenant-options.authentication-type-saml'),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TenantAuthenticationType.SAML}`
      });
      this.authenticationTypesDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(authenticationTypes);
      this.fieldType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-tenant-options.authentication-type'),
        placeholder: this.translateService.instant('admin-tenant-options.authentication-type'),
        required: true,
        datasource: this.authenticationTypesDataSource
      });
    };
    this.tenantFieldChanged = () => {
      this.fieldChanged.emit(true);
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function AdminTenantOptionsAuthenticationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminTenantOptionsAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AdminTenantOptionsAuthenticationComponent,
      selectors: [["app-admin-tenant-options-authentication"]],
      viewQuery: function AdminTenantOptionsAuthenticationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.certificateInput = _t.first);
        }
      },
      inputs: {
        tenantOptions: "tenantOptions"
      },
      outputs: {
        fieldChanged: "fieldChanged"
      },
      decls: 5,
      vars: 4,
      consts: [[1, "adminit-tenant-options-authentication"], [1, "col", "p-0"], [3, "valueChange", "field", "value"], [4, "ngIf"], [3, "valueChange", "change", "field", "value"], [3, "idpSettings"]],
      template: function AdminTenantOptionsAuthenticationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsAuthenticationComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.tenantOptionsAuthenticationType, $event) || (ctx.tenantOptionsAuthenticationType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function AdminTenantOptionsAuthenticationComponent_Template_app_field_valueChange_2_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AdminTenantOptionsAuthenticationComponent_div_3_Template, 5, 4, "div", 3)(4, AdminTenantOptionsAuthenticationComponent_div_4_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.tenantOptionsAuthenticationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tenantOptions.authenticationType == 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tenantOptions.authenticationType == 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _sso_saml_options_saml_options_component__WEBPACK_IMPORTED_MODULE_3__.SAMLOptionsComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 73569:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/admin-tenant-options/admin-tenant-options-document-limits/admin-tenant-options-document-limits.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTenantOptionsDocumentLimitsComponent: () => (/* binding */ AdminTenantOptionsDocumentLimitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);







class AdminTenantOptionsDocumentLimitsComponent {
  get monthlyPageLimit() {
    return `${this.documentLimits.monthlyPageLimit}`;
  }
  set monthlyPageLimit(val) {
    this.documentLimits.monthlyPageLimit = Number(val);
  }
  get documentPageLimit() {
    return `${this.documentLimits.documentPageLimit}`;
  }
  set documentPageLimit(val) {
    this.documentLimits.documentPageLimit = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.fieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.createFields = () => {
      this.perMonth = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.document-limits.total-per-month'),
        placeholder: this.translateService.instant('admin-tenant-options.document-limits.total-per-month-placeholder'),
        required: true
      });
      this.perDocument = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.document-limits.total-per-document'),
        placeholder: this.translateService.instant('admin-tenant-options.document-limits.total-per-document-placeholder'),
        required: true
      });
    };
    this.tenantFieldChanged = () => {
      this.fieldChanged.emit(true);
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function AdminTenantOptionsDocumentLimitsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminTenantOptionsDocumentLimitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminTenantOptionsDocumentLimitsComponent,
      selectors: [["app-admin-tenant-options-document-limits"]],
      inputs: {
        documentLimits: "documentLimits"
      },
      outputs: {
        fieldChanged: "fieldChanged"
      },
      decls: 5,
      vars: 4,
      consts: [[1, "adminit-tenant-options-document-limits"], ["appAutoFocusFirstInput", "", 1, "col", "p-0"], [3, "valueChange", "change", "field", "value"], [1, "col", "p-0"]],
      template: function AdminTenantOptionsDocumentLimitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsDocumentLimitsComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.monthlyPageLimit, $event) || (ctx.monthlyPageLimit = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsDocumentLimitsComponent_Template_app_field_change_2_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsDocumentLimitsComponent_Template_app_field_valueChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.documentPageLimit, $event) || (ctx.documentPageLimit = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsDocumentLimitsComponent_Template_app_field_change_4_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.perMonth);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.monthlyPageLimit);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.perDocument);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.documentPageLimit);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_2__.AutoFocusFirstInputDirective],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 78975:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-tenant-options/admin-tenant-options-measurement-settings/admin-tenant-options-measurement-settings.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTenantOptionsMeasurementSettingsComponent: () => (/* binding */ AdminTenantOptionsMeasurementSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);







class AdminTenantOptionsMeasurementSettingsComponent {
  get measurementSettingsUnit() {
    return `${this.measurementSettings.unit}`;
  }
  set measurementSettingsUnit(val) {
    this.measurementSettings.unit = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.fieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.createFields = () => {
      this.fieldUnit = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-tenant-options.measurement-settings.unit'),
        required: true,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MeasurementUnit, 'admin-tenant-options.measurement-settings.unit-enum', this.translateService)
      });
    };
    this.tenantFieldChanged = () => {
      this.fieldChanged.emit(true);
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function AdminTenantOptionsMeasurementSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminTenantOptionsMeasurementSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminTenantOptionsMeasurementSettingsComponent,
      selectors: [["app-admin-tenant-options-measurement-settings"]],
      inputs: {
        measurementSettings: "measurementSettings"
      },
      outputs: {
        fieldChanged: "fieldChanged"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "admin-tenant-options-measurement-settings"], ["appAutoFocusFirstInput", "", 1, "col", "p-0"], [3, "valueChange", "change", "field", "value"]],
      template: function AdminTenantOptionsMeasurementSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsMeasurementSettingsComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.measurementSettingsUnit, $event) || (ctx.measurementSettingsUnit = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsMeasurementSettingsComponent_Template_app_field_change_2_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldUnit);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.measurementSettingsUnit);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_2__.AutoFocusFirstInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95497:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/admin-tenant-options/admin-tenant-options-password-policy/admin-tenant-options-password-policy.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTenantOptionsPasswordPolicyComponent: () => (/* binding */ AdminTenantOptionsPasswordPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);







class AdminTenantOptionsPasswordPolicyComponent {
  get passwordPolicyExpiresAfter() {
    return `${this.passwordPolicy.expiresAfter}`;
  }
  set passwordPolicyExpiresAfter(val) {
    this.passwordPolicy.expiresAfter = Number(val);
  }
  get passwordPolicyExpireUnits() {
    return `${this.passwordPolicy.expireUnits}`;
  }
  set passwordPolicyExpireUnits(val) {
    this.passwordPolicy.expireUnits = Number(val);
  }
  get passwordPolicyPasswordMemoryCount() {
    return `${this.passwordPolicy.passwordMemoryCount}`;
  }
  set passwordPolicyPasswordMemoryCount(val) {
    this.passwordPolicy.passwordMemoryCount = Number(val);
  }
  get passwordPolicyMinimumLength() {
    return `${this.passwordPolicy.minimumLength}`;
  }
  set passwordPolicyMinimumLength(val) {
    this.passwordPolicy.minimumLength = Number(val);
  }
  get passwordPolicyMinimumNumbers() {
    return `${this.passwordPolicy.minimumNumbers}`;
  }
  set passwordPolicyMinimumNumbers(val) {
    this.passwordPolicy.minimumNumbers = Number(val);
  }
  get passwordPolicyMinimumSpecialCharacters() {
    return `${this.passwordPolicy.minimumSpecialCharacters}`;
  }
  set passwordPolicyMinimumSpecialCharacters(val) {
    this.passwordPolicy.minimumSpecialCharacters = Number(val);
  }
  get passwordPolicyMinimumUpperCaseCharacters() {
    return `${this.passwordPolicy.minimumUpperCaseCharacters}`;
  }
  set passwordPolicyMinimumUpperCaseCharacters(val) {
    this.passwordPolicy.minimumUpperCaseCharacters = Number(val);
  }
  get passwordPolicyMinimumLowerCaseCharacters() {
    return `${this.passwordPolicy.minimumLowerCaseCharacters}`;
  }
  set passwordPolicyMinimumLowerCaseCharacters(val) {
    this.passwordPolicy.minimumLowerCaseCharacters = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.fieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.createFields = () => {
      this.expireAfter = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.password-policy.expire-after'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.expire-after-placeholder'),
        required: true
      });
      this.passwordMemoryCount = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.password-policy.password-memory-count'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.password-memory-count-placeholder'),
        required: true
      });
      this.minimumLength = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.password-policy.min-length'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.min-length-placeholder'),
        required: true
      });
      this.minimumNumbers = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.password-policy.min-numbers'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.min-numbers-placeholder'),
        required: true
      });
      this.minimumSpecialCharacters = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.password-policy.min-special-characters'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.min-special-characters-placeholder'),
        required: true
      });
      this.minimumUpperCaseCharacters = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.password-policy.min-upper-case-characters'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.min-upper-case-characters-placeholder'),
        required: true
      });
      this.minimumLowerCaseCharacters = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-tenant-options.password-policy.min-lower-case-characters'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.min-lower-case-characters-placeholder'),
        required: true
      });
      const expirationUnits = new Array();
      expirationUnits.push({
        name: this.translateService.instant('admin-tenant-options.password-policy.unit-' + shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Day),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Day}`
      });
      expirationUnits.push({
        name: this.translateService.instant('admin-tenant-options.password-policy.unit-' + shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Week),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Week}`
      });
      expirationUnits.push({
        name: this.translateService.instant('admin-tenant-options.password-policy.unit-' + shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Month),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Month}`
      });
      expirationUnits.push({
        name: this.translateService.instant('admin-tenant-options.password-policy.unit-' + shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Year),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ExpirationUnits.Year}`
      });
      this.expirationUnitsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(expirationUnits);
      this.expirationUnits = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-tenant-options.password-policy.expiration-unit'),
        placeholder: this.translateService.instant('admin-tenant-options.password-policy.expiration-unit-placeholder'),
        required: true,
        datasource: this.expirationUnitsDataSource
      });
    };
    this.tenantFieldChanged = () => {
      this.fieldChanged.emit(true);
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function AdminTenantOptionsPasswordPolicyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminTenantOptionsPasswordPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminTenantOptionsPasswordPolicyComponent,
      selectors: [["app-admin-tenant-options-password-policy"]],
      inputs: {
        passwordPolicy: "passwordPolicy"
      },
      outputs: {
        fieldChanged: "fieldChanged"
      },
      decls: 25,
      vars: 28,
      consts: [[1, "adminit-tenant-options-password-policy"], [1, "col", "p-0", "row"], [1, "col-6", 3, "valueChange", "change", "field", "value"], [1, "col-6", 3, "valueChange", "field", "value"], [1, "col", "p-0"], [3, "valueChange", "change", "field", "value"], [3, "valueChange", "value", "label"]],
      template: function AdminTenantOptionsPasswordPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyExpiresAfter, $event) || (ctx.passwordPolicyExpiresAfter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_change_2_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyExpireUnits, $event) || (ctx.passwordPolicyExpireUnits = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyPasswordMemoryCount, $event) || (ctx.passwordPolicyPasswordMemoryCount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_change_5_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyMinimumLength, $event) || (ctx.passwordPolicyMinimumLength = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_change_7_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyMinimumNumbers, $event) || (ctx.passwordPolicyMinimumNumbers = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_change_9_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyMinimumSpecialCharacters, $event) || (ctx.passwordPolicyMinimumSpecialCharacters = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_change_11_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4)(13, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyMinimumUpperCaseCharacters, $event) || (ctx.passwordPolicyMinimumUpperCaseCharacters = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_change_13_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4)(15, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_valueChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicyMinimumLowerCaseCharacters, $event) || (ctx.passwordPolicyMinimumLowerCaseCharacters = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminTenantOptionsPasswordPolicyComponent_Template_app_field_change_15_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4)(17, "app-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_checkbox_valueChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicy.excludesPartOfName, $event) || (ctx.passwordPolicy.excludesPartOfName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_checkbox_valueChange_17_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 4)(20, "app-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_checkbox_valueChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicy.excludesPartOfEmailUserName, $event) || (ctx.passwordPolicy.excludesPartOfEmailUserName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_checkbox_valueChange_20_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 4)(23, "app-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_checkbox_valueChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordPolicy.excludesPartOfEmailDomain, $event) || (ctx.passwordPolicy.excludesPartOfEmailDomain = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AdminTenantOptionsPasswordPolicyComponent_Template_app_checkbox_valueChange_23_listener() {
            return ctx.tenantFieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.expireAfter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyExpiresAfter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.expirationUnits);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyExpireUnits);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.passwordMemoryCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyPasswordMemoryCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.minimumLength);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyMinimumLength);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.minimumNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyMinimumNumbers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.minimumSpecialCharacters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyMinimumSpecialCharacters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.minimumUpperCaseCharacters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyMinimumUpperCaseCharacters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.minimumLowerCaseCharacters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicyMinimumLowerCaseCharacters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 22, "admin-tenant-options.password-policy.excludes-part-of-name-modal-label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicy.excludesPartOfName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 24, "admin-tenant-options.password-policy.excludes-part-of-email-username-modal-label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicy.excludesPartOfEmailUserName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 26, "admin-tenant-options.password-policy.excludes-part-of-email-domain-modal-label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.passwordPolicy.excludesPartOfEmailDomain);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9965:
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-tenant-options/admin-tenant-options-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTenantOptionsRoutingModule: () => (/* binding */ AdminTenantOptionsRoutingModule),
/* harmony export */   routedComponents: () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_tenant_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-tenant-options.component */ 79985);
/* harmony import */ var _admin_tenant_options_authentication_admin_tenant_options_authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-tenant-options-authentication/admin-tenant-options-authentication.component */ 12383);
/* harmony import */ var _admin_tenant_options_document_limits_admin_tenant_options_document_limits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-tenant-options-document-limits/admin-tenant-options-document-limits.component */ 73569);
/* harmony import */ var _admin_tenant_options_password_policy_admin_tenant_options_password_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-tenant-options-password-policy/admin-tenant-options-password-policy.component */ 95497);
/* harmony import */ var _admin_tenant_options_measurement_settings_admin_tenant_options_measurement_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-tenant-options-measurement-settings/admin-tenant-options-measurement-settings.component */ 78975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);








const routes = [{
  path: '',
  component: _admin_tenant_options_component__WEBPACK_IMPORTED_MODULE_0__.AdminTenantOptionsComponent
}];
class AdminTenantOptionsRoutingModule {
  static {
    this.ɵfac = function AdminTenantOptionsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminTenantOptionsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AdminTenantOptionsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminTenantOptionsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();
const routedComponents = [_admin_tenant_options_component__WEBPACK_IMPORTED_MODULE_0__.AdminTenantOptionsComponent, _admin_tenant_options_authentication_admin_tenant_options_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AdminTenantOptionsAuthenticationComponent, _admin_tenant_options_document_limits_admin_tenant_options_document_limits_component__WEBPACK_IMPORTED_MODULE_2__.AdminTenantOptionsDocumentLimitsComponent, _admin_tenant_options_password_policy_admin_tenant_options_password_policy_component__WEBPACK_IMPORTED_MODULE_3__.AdminTenantOptionsPasswordPolicyComponent, _admin_tenant_options_measurement_settings_admin_tenant_options_measurement_settings_component__WEBPACK_IMPORTED_MODULE_4__.AdminTenantOptionsMeasurementSettingsComponent];

/***/ }),

/***/ 79985:
/*!******************************************************************************!*\
  !*** ./src/app/views/admin-tenant-options/admin-tenant-options.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTenantOptionsComponent: () => (/* binding */ AdminTenantOptionsComponent)
/* harmony export */ });
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/user-state.service */ 99038);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _admin_tenant_options_authentication_admin_tenant_options_authentication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-tenant-options-authentication/admin-tenant-options-authentication.component */ 12383);
/* harmony import */ var _admin_tenant_options_document_limits_admin_tenant_options_document_limits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-tenant-options-document-limits/admin-tenant-options-document-limits.component */ 73569);
/* harmony import */ var _admin_tenant_options_password_policy_admin_tenant_options_password_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-tenant-options-password-policy/admin-tenant-options-password-policy.component */ 95497);
/* harmony import */ var _admin_tenant_options_measurement_settings_admin_tenant_options_measurement_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-tenant-options-measurement-settings/admin-tenant-options-measurement-settings.component */ 78975);
























const _c0 = () => ({
  suppressScrollY: false
});
function AdminTenantOptionsComponent_div_3_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ul", 35)(1, "li", 36)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "admin-tenant-options.authentication-type:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 4, "admin-tenant-options.authentication-type-application-based"), " ");
  }
}
function AdminTenantOptionsComponent_div_3_ul_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ul", 35)(1, "li", 36)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "li", 36)(8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "li", 36)(13, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 6, "admin-tenant-options.authentication-type:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 8, "admin-tenant-options.authentication-type-sso"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 10, "admin-tenant-options.sso-client-id"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.options.ssoClientId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 12, "admin-tenant-options.sso-authority"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.options.ssoAuthority, " ");
  }
}
function AdminTenantOptionsComponent_div_3_ul_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ul", 35)(1, "li", 36)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "li", 36)(8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "li", 36)(13, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "li", 36)(18, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 8, "admin-tenant-options.authentication-type"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 10, "admin-tenant-options.authentication-type-saml"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 12, "saml-options.idp.name"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.options.idp.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 14, "saml-options.idp.sso-url"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.options.idp.singleSignOnServiceUrl, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 16, "saml-options.idp.certificates"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.idpPartnerCertificates, " ");
  }
}
function AdminTenantOptionsComponent_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 50)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_div_3_div_16_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.onEditDocumentLimits());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ul", 35)(8, "li", 36)(9, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "li", 36)(14, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 6, "admin-tenant-options.document-limits.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 8, "Common.Edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 10, "admin-tenant-options.document-limits.total-per-month:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.documentLimits.monthlyPageLimit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 12, "admin-tenant-options.document-limits.total-per-document:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.documentLimits.documentPageLimit, " ");
  }
}
function AdminTenantOptionsComponent_div_3_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_div_3_div_85_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.onEditMeasurementSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ul", 35)(8, "li", 36)(9, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 4, "admin-tenant-options.measurement-settings.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 6, "Common.Edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 8, "admin-tenant-options.measurement-settings.unit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 10, "admin-tenant-options.measurement-settings.unit-enum." + ctx_r2.measurementUnit[ctx_r2.tenantDetails.tedOptions.measurementSettings.unit]), " ");
  }
}
function AdminTenantOptionsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 26, 4)(6, "div", 27)(7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.onEditAuthentication());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, AdminTenantOptionsComponent_div_3_ul_13_Template, 7, 6, "ul", 31)(14, AdminTenantOptionsComponent_div_3_ul_14_Template, 17, 14, "ul", 31)(15, AdminTenantOptionsComponent_div_3_ul_15_Template, 22, 18, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, AdminTenantOptionsComponent_div_3_div_16_Template, 18, 14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 33)(18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_div_3_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.onEditPasswordPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ul", 35)(25, "li", 36)(26, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "li", 36)(35, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "li", 36)(41, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "li", 36)(47, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "li", 36)(53, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "li", 36)(59, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "li", 36)(65, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "li", 36)(71, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](74, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "li", 36)(76, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](79, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "li", 36)(81, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](84, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](85, AdminTenantOptionsComponent_div_3_div_85_Template, 14, 12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const panelScroll_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](63, _c0))("autoUpdatePerfectScroll", panelScroll_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 33, "admin-tenant-options.authentication-options"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 35, "Common.Edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.tenantDetails.options.authenticationType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.tenantDetails.options.authenticationType == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.tenantDetails.options.authenticationType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.showDocumentLimits);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 37, "admin-tenant-options.password-policy.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 39, "Common.Edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 41, "admin-tenant-options.password-policy.expire-after:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.tenantDetails.passwordPolicy.expiresAfter);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 43, "admin-tenant-options.password-policy.unit-" + ctx_r2.expireUnits), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](37, 45, "admin-tenant-options.password-policy.password-memory-count:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.tenantDetails.passwordPolicy.passwordMemoryCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](43, 47, "admin-tenant-options.password-policy.min-length:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r2.tenantDetails.passwordPolicy.minimumLength, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](49, 49, "admin-tenant-options.password-policy.min-numbers:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r2.tenantDetails.passwordPolicy.minimumNumbers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](55, 51, "admin-tenant-options.password-policy.min-special-characters:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r2.tenantDetails.passwordPolicy.minimumSpecialCharacters, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](61, 53, "admin-tenant-options.password-policy.min-upper-case-characters:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r2.tenantDetails.passwordPolicy.minimumUpperCaseCharacters, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](67, 55, "admin-tenant-options.password-policy.min-lower-case-characters:"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r2.tenantDetails.passwordPolicy.minimumLowerCaseCharacters, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](73, 57, "admin-tenant-options.password-policy.excludes-part-of-name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("translate", ctx_r2.tenantDetails.passwordPolicy.excludesPartOfName ? "admin-tenant-options.password-policy.Yes" : "admin-tenant-options.password-policy.No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](78, 59, "admin-tenant-options.password-policy.excludes-part-of-email-username"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("translate", ctx_r2.tenantDetails.passwordPolicy.excludesPartOfEmailUserName ? "admin-tenant-options.password-policy.Yes" : "admin-tenant-options.password-policy.No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](83, 61, "admin-tenant-options.password-policy.excludes-part-of-email-domain"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("translate", ctx_r2.tenantDetails.passwordPolicy.excludesPartOfEmailDomain ? "admin-tenant-options.password-policy.Yes" : "admin-tenant-options.password-policy.No");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.showMeasurementSettings);
  }
}
function AdminTenantOptionsComponent_app_errors_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-errors", 54);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("errors", ctx_r2.optionsErrors);
  }
}
function AdminTenantOptionsComponent_app_admin_tenant_options_authentication_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-admin-tenant-options-authentication", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("fieldChanged", function AdminTenantOptionsComponent_app_admin_tenant_options_authentication_11_Template_app_admin_tenant_options_authentication_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.authenticationChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const tenantoptionsauthentication_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tenantOptions", tenantoptionsauthentication_r8.getData().options);
  }
}
function AdminTenantOptionsComponent_app_errors_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-errors", 54);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("errors", ctx_r2.documentLimitsErrors);
  }
}
function AdminTenantOptionsComponent_app_admin_tenant_options_document_limits_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-admin-tenant-options-document-limits", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("fieldChanged", function AdminTenantOptionsComponent_app_admin_tenant_options_document_limits_26_Template_app_admin_tenant_options_document_limits_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.documentLimitsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const tenantoptionsdocumentlimits_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("documentLimits", tenantoptionsdocumentlimits_r10.getData().documentLimits);
  }
}
function AdminTenantOptionsComponent_app_errors_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-errors", 54);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("errors", ctx_r2.passwordPolicyErrors);
  }
}
function AdminTenantOptionsComponent_app_admin_tenant_options_password_policy_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-admin-tenant-options-password-policy", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("fieldChanged", function AdminTenantOptionsComponent_app_admin_tenant_options_password_policy_41_Template_app_admin_tenant_options_password_policy_fieldChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.passwordPolicyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const tenantoptionspasswordpolicy_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("passwordPolicy", tenantoptionspasswordpolicy_r12.getData().passwordPolicy);
  }
}
function AdminTenantOptionsComponent_app_errors_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-errors", 54);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("errors", ctx_r2.optionsErrors);
  }
}
function AdminTenantOptionsComponent_app_admin_tenant_options_measurement_settings_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-admin-tenant-options-measurement-settings", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("fieldChanged", function AdminTenantOptionsComponent_app_admin_tenant_options_measurement_settings_56_Template_app_admin_tenant_options_measurement_settings_fieldChanged_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.measurementSettingsChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const tenantoptionsmeasurementsettings_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("measurementSettings", tenantoptionsmeasurementsettings_r14.getData().measurementSettings);
  }
}
class AdminTenantOptionsComponent {
  get idpPartnerCertificates() {
    if (!this.tenantDetails?.options?.idp?.partnerCertificates?.length) return '';
    let certificatesNames = '';
    for (let i = 0; i < this.tenantDetails.options.idp.partnerCertificates.length; i++) {
      if (!this.tenantDetails.options.idp.partnerCertificates[i].fileName) return;
      if (certificatesNames) certificatesNames += ', ';
      certificatesNames += this.tenantDetails.options.idp.partnerCertificates[i].fileName;
    }
    return certificatesNames;
  }
  constructor(translateService, hydraApi, ngxSmartModalService, spinnerService, toastrService, userState) {
    this.translateService = translateService;
    this.hydraApi = hydraApi;
    this.ngxSmartModalService = ngxSmartModalService;
    this.spinnerService = spinnerService;
    this.toastrService = toastrService;
    this.userState = userState;
    this.optionsErrors = [];
    this.documentLimitsErrors = [];
    this.passwordPolicyErrors = [];
    this.measurementSettingsErrors = [];
    this.tenantoptionsdocumentlimitsModalClosed = true;
    this.showDocumentLimits = false;
    this.showMeasurementSettings = false;
    this.measurementUnit = shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.MeasurementUnit;
    this.tenantDetailsLoaded = td => {
      this.tenantDetails = td;
      this.updateExpireUnits();
    };
    this.tenantDetailsLoadFailed = () => {
      this.toastrService.error(this.translateService.instant('admin-tenant-options.failed-to-load-tenant-details'));
    };
    this.updateExpireUnits = () => {
      this.expireUnits = this.tenantDetails.passwordPolicy.expireUnits;
      if (this.tenantDetails.passwordPolicy.expiresAfter == 1) {
        if (this.expireUnits == 0) this.expireUnits = 4;else if (this.expireUnits == 1) this.expireUnits = 5;else if (this.expireUnits == 2) this.expireUnits = 6;else if (this.expireUnits == 3) this.expireUnits = 7;
      }
    };
    //////////////// Authentication Options /////////////
    this.onEditAuthentication = () => {
      this.ngxSmartModalService.setModalData({
        options: new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.TenantOptions(this.tenantDetails.options)
      }, 'tenantoptionsauthentication', true);
      this.authenticationModal.open();
    };
    this.saveAuthentication = () => {
      const data = this.ngxSmartModalService.getModalData('tenantoptionsauthentication');
      this.hydraApi.updateTenantOptions(data.options, this.authenticationUpdated, this.authenticationUpdateFailed);
      this.spinnerService.show(this.translateService.instant('admin-tenant-options.saving'), document.getElementById('app-spinner-panel'));
    };
    this.authenticationUpdated = result => {
      this.spinnerService.hide();
      if (result.success) {
        this.tenantDetails.options = this.ngxSmartModalService.getModalData('tenantoptionsauthentication').options;
        this.userState.userProfile.tenantOptions.authenticationType = this.tenantDetails.options.authenticationType;
        this.authenticationModal.close();
        this.toastrService.success(this.translateService.instant('admin-tenant-options.save-succeeded'));
      } else {
        result.errors.forEach(error => {
          this.optionsErrors.push(error);
        });
      }
    };
    this.authenticationUpdateFailed = () => {
      this.spinnerService.hide();
      this.optionsErrors.push(this.translateService.instant('admin-tenant-options.save-failed'));
    };
    this.authenticationChanged = checkFieldChanged => {
      this.optionsErrors = [];
    };
    this.onAuthenticationModalClosed = () => {
      this.optionsErrors = [];
    };
    this.cancelAuthentication = () => {
      this.authenticationModal.close();
    };
    //////////////// Document Limits /////////////
    this.onEditDocumentLimits = () => {
      this.ngxSmartModalService.setModalData({
        documentLimits: new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.DocumentLimits(this.tenantDetails.documentLimits)
      }, 'tenantoptionsdocumentlimits', true);
      this.tenantoptionsdocumentlimitsModalClosed = false;
      this.documentLimitsModal.open();
    };
    this.saveDocumentLimits = () => {
      const data = this.ngxSmartModalService.getModalData('tenantoptionsdocumentlimits');
      this.hydraApi.updateDocumentLimits(data.documentLimits, this.documentLimitsUpdated, this.documentLimitsUpdateFailed);
      this.spinnerService.show(this.translateService.instant('admin-tenant-options.document-limits.saving'), document.getElementById('app-spinner-panel'));
    };
    this.documentLimitsUpdated = result => {
      this.spinnerService.hide();
      if (result.success) {
        this.tenantDetails.documentLimits = this.ngxSmartModalService.getModalData('tenantoptionsdocumentlimits').documentLimits;
        this.documentLimitsModal.close();
        this.toastrService.success(this.translateService.instant('admin-tenant-options.document-limits.save-succeeded'));
      } else {
        result.errors.forEach(error => {
          this.documentLimitsErrors.push(error);
        });
      }
    };
    this.documentLimitsUpdateFailed = () => {
      this.passwordPolicyErrors = [];
      this.spinnerService.hide();
      this.documentLimitsErrors.push(this.translateService.instant('admin-tenant-options.document-limits.save-failed'));
    };
    this.documentLimitsChanged = checkFieldChanged => {
      this.documentLimitsErrors = [];
    };
    this.onDocumentLimitModalClosed = () => {
      this.documentLimitsErrors = [];
    };
    this.cancelDocumentLimits = () => {
      this.tenantoptionsdocumentlimitsModalClosed = true;
      this.documentLimitsModal.close();
    };
    //////////////// Passowrd Policy /////////////
    this.onEditMeasurementSettings = () => {
      this.ngxSmartModalService.setModalData({
        measurementSettings: new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.MeasurementSettings(this.tenantDetails.tedOptions.measurementSettings)
      }, 'tenantoptionsmeasurementsettings', true);
      this.measurementSettingsModal.open();
    };
    this.savePasswordPolicy = () => {
      this.passwordPolicyErrors = [];
      const data = this.ngxSmartModalService.getModalData('tenantoptionspasswordpolicy');
      this.hydraApi.updatePasswordPolicy(data.passwordPolicy, this.passwordPolicyUpdated, this.passwordPolicyUpdateFailed);
      this.spinnerService.show(this.translateService.instant('admin-tenant-options.password-policy.saving'), document.getElementById('app-spinner-panel'));
    };
    this.passwordPolicyUpdated = result => {
      this.passwordPolicyErrors = [];
      this.spinnerService.hide();
      if (result.success) {
        this.tenantDetails.passwordPolicy = this.ngxSmartModalService.getModalData('tenantoptionspasswordpolicy').passwordPolicy;
        this.passwordPolicyModal.close();
        this.toastrService.success(this.translateService.instant('admin-tenant-options.password-policy.save-succeeded'));
        this.updateExpireUnits();
      } else {
        result.errors.forEach(error => {
          this.passwordPolicyErrors.push(error);
        });
      }
    };
    this.passwordPolicyUpdateFailed = () => {
      this.spinnerService.hide();
      this.passwordPolicyErrors.push(this.translateService.instant('admin-tenant-options.password-policy.save-failed'));
    };
    this.passwordPolicyChanged = checkFieldChanged => {
      this.passwordPolicyErrors = [];
    };
    this.onPasswordPolicyModalClosed = () => {
      this.passwordPolicyErrors = [];
    };
    this.cancelPasswordPolicy = () => {
      this.passwordPolicyModal.close();
    };
    //////////////// Measurement Settings /////////////
    this.onEditPasswordPolicy = () => {
      this.ngxSmartModalService.setModalData({
        passwordPolicy: new shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.PasswordPolicy(this.tenantDetails.passwordPolicy)
      }, 'tenantoptionspasswordpolicy', true);
      this.passwordPolicyModal.open();
    };
    this.saveMeasurementSettings = () => {
      const data = this.ngxSmartModalService.getModalData('tenantoptionsmeasurementsettings');
      this.userState.updateOlcUserDefaultUnit(data.measurementSettings, this.measurementSettingsUpdated, this.measurementSettingsUpdateFailed);
      this.spinnerService.show(this.translateService.instant('admin-tenant-options.measurement-settings.saving'), document.getElementById('app-spinner-panel'));
    };
    this.measurementSettingsUpdated = result => {
      this.spinnerService.hide();
      if (result.success) {
        this.tenantDetails.tedOptions.measurementSettings = this.ngxSmartModalService.getModalData('tenantoptionsmeasurementsettings').measurementSettings;
        this.measurementSettingsModal.close();
        this.toastrService.success(this.translateService.instant('admin-tenant-options.measurement-settings.save-succeeded'));
      } else {
        result.errors.forEach(error => {
          this.measurementSettingsErrors.push(error);
        });
      }
    };
    this.measurementSettingsUpdateFailed = () => {
      this.spinnerService.hide();
      this.measurementSettingsErrors.push(this.translateService.instant('admin-tenant-options.measurement-settings.save-failed'));
    };
    this.measurementSettingsChanged = () => {
      this.measurementSettingsErrors = [];
    };
    this.onMeasurementSettingsModalClosed = () => {
      this.measurementSettingsErrors = [];
    };
    this.cancelMeasurementSettings = () => {
      this.measurementSettingsModal.close();
    };
  }
  ngOnInit() {
    this.showDocumentLimits = this.userState.hasFeature(shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.Feature.Capture);
    this.showMeasurementSettings = this.userState.hasFeature(shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.Feature.OLCTED);
    this.hydraApi.getTenantDetails(this.tenantDetailsLoaded, this.tenantDetailsLoadFailed);
  }
  ngAfterViewInit() {
    this.authenticationModal = this.ngxSmartModalService.getModal('tenantoptionsauthentication');
    this.documentLimitsModal = this.ngxSmartModalService.getModal('tenantoptionsdocumentlimits');
    this.passwordPolicyModal = this.ngxSmartModalService.getModal('tenantoptionspasswordpolicy');
    this.measurementSettingsModal = this.ngxSmartModalService.getModal('tenantoptionsmeasurementsettings');
  }
  static {
    this.ɵfac = function AdminTenantOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminTenantOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_0__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_1__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: AdminTenantOptionsComponent,
      selectors: [["app-admin-tenant-options"]],
      decls: 64,
      vars: 72,
      consts: [["tenantoptionsauthentication", ""], ["tenantoptionsdocumentlimits", ""], ["tenantoptionspasswordpolicy", ""], ["tenantoptionsmeasurementsettings", ""], ["panelScroll", "ngxPerfectScrollbar"], [1, "admin-tenant-options"], [3, "headerText"], [4, "ngIf"], ["customClass", "modal-content modal-lg", "identifier", "tenantoptionsauthentication", 3, "onClose", "closable", "escapable", "dismissable"], [3, "title", "closeIconHandler"], [1, "modal-body", 2, "word-break", "break-word"], [1, "tenant-errors", 3, "perfectScrollbar"], [3, "errors", 4, "ngIf"], [3, "tenantOptions", "fieldChanged", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-light", "btn-minwidth", 3, "click"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click"], ["customClass", "modal-content modal-lg", "identifier", "tenantoptionsdocumentlimits", 3, "onClose", "closable", "escapable", "dismissable"], [3, "documentLimits", "fieldChanged", 4, "ngIf"], ["customClass", "modal-content modal-lg", "identifier", "tenantoptionspasswordpolicy", 3, "onClose", "closable", "escapable", "dismissable"], [3, "passwordPolicy", "fieldChanged", 4, "ngIf"], [1, "btn", "btn-primary", "btn-minwidth", "pl-2", 3, "click"], ["customClass", "modal-content modal-lg", "identifier", "tenantoptionsmeasurementsettings", 3, "onClose", "closable", "escapable", "dismissable"], [3, "measurementSettings", "fieldChanged", 4, "ngIf"], [1, "card", "border-0"], [1, "card-header", "bg-card-header"], ["fxFlex", "auto", 1, "card-body", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], ["id", "authentication-options", 1, "section"], [1, "card-header", "d-flex", "justify-content-between"], ["id", "edit-authentication-options", 1, "button-icon", 3, "click", "title"], [1, "fa", "fa-pencil-alt"], ["class", "list-group list-group-flush", 4, "ngIf"], ["class", "section", "id", "document-limits", 4, "ngIf"], ["id", "password-policy", 1, "section"], ["id", "edit-password-policy", 1, "button-icon", 3, "click", "title"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "detail", "text-secondary", "col-2", "p-0", "pl-1"], ["id", "password-policy-expriresAfter"], ["id", "password-policy-expireUnits"], ["id", "password-policy-passwordMemoryCount"], ["id", "password-policy-minimumLength"], ["id", "password-policy-minimumNumbers"], ["id", "password-policy-minimumSpecialCharacters"], ["id", "password-policy-minimumUpperCaseCharacters"], ["id", "password-policy-minimumLowerCaseCharacters"], ["id", "password-policy-excludesPartOfName", 3, "translate"], ["id", "password-policy-excludesPartOfEmailUserName", 3, "translate"], ["id", "password-policy-excludesPartOfEmailDomain", 3, "translate"], ["class", "section", "id", "measurement-settings", 4, "ngIf"], ["id", "document-limits", 1, "section"], ["id", "edit-document-limits", 1, "button-icon", 3, "click", "title"], ["id", "measurement-settings", 1, "section"], ["id", "edit-measurement-settings", 1, "button-icon", 3, "click", "title"], [3, "errors"], [3, "fieldChanged", "tenantOptions"], [3, "fieldChanged", "documentLimits"], [3, "fieldChanged", "passwordPolicy"], [3, "fieldChanged", "measurementSettings"]],
      template: function AdminTenantOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-secondary-header", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AdminTenantOptionsComponent_div_3_Template, 86, 64, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ngx-smart-modal", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClose", function AdminTenantOptionsComponent_Template_ngx_smart_modal_onClose_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onAuthenticationModalClosed());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "app-modal-header", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 10)(9, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AdminTenantOptionsComponent_app_errors_10_Template, 1, 1, "app-errors", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AdminTenantOptionsComponent_app_admin_tenant_options_authentication_11_Template, 1, 1, "app-admin-tenant-options-authentication", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 14)(13, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.cancelAuthentication());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.saveAuthentication());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "ngx-smart-modal", 17, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClose", function AdminTenantOptionsComponent_Template_ngx_smart_modal_onClose_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onDocumentLimitModalClosed());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "app-modal-header", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 10)(24, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, AdminTenantOptionsComponent_app_errors_25_Template, 1, 1, "app-errors", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, AdminTenantOptionsComponent_app_admin_tenant_options_document_limits_26_Template, 1, 1, "app-admin-tenant-options-document-limits", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 14)(28, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.cancelDocumentLimits());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.saveDocumentLimits());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "ngx-smart-modal", 19, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClose", function AdminTenantOptionsComponent_Template_ngx_smart_modal_onClose_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onPasswordPolicyModalClosed());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "app-modal-header", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 10)(39, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, AdminTenantOptionsComponent_app_errors_40_Template, 1, 1, "app-errors", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, AdminTenantOptionsComponent_app_admin_tenant_options_password_policy_41_Template, 1, 1, "app-admin-tenant-options-password-policy", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 14)(43, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.cancelPasswordPolicy());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.savePasswordPolicy());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "ngx-smart-modal", 22, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClose", function AdminTenantOptionsComponent_Template_ngx_smart_modal_onClose_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onMeasurementSettingsModalClosed());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](51, "app-modal-header", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 10)(54, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, AdminTenantOptionsComponent_app_errors_55_Template, 1, 1, "app-errors", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](56, AdminTenantOptionsComponent_app_admin_tenant_options_measurement_settings_56_Template, 1, 1, "app-admin-tenant-options-measurement-settings", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "div", 14)(58, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.cancelMeasurementSettings());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](60, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminTenantOptionsComponent_Template_button_click_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.saveMeasurementSettings());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](63, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const tenantoptionsauthentication_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
          const tenantoptionsdocumentlimits_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
          const tenantoptionspasswordpolicy_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](35);
          const tenantoptionsmeasurementsettings_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 42, "admin-tenant-options.header-text"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.tenantDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 44, "admin-tenant-options.authentication-modal-title"))("closeIconHandler", ctx.cancelAuthentication);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](68, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.optionsErrors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tenantoptionsauthentication_r8.hasData());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 46, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 48, "admin-tenant-options.ok-button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 50, "admin-tenant-options.document-limits.modal-title"))("closeIconHandler", ctx.cancelDocumentLimits);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](69, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.documentLimitsErrors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tenantoptionsdocumentlimits_r10.hasData() && !ctx.tenantoptionsdocumentlimitsModalClosed);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](30, 52, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 54, "admin-tenant-options.ok-button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](37, 56, "admin-tenant-options.password-policy.modal-title"))("closeIconHandler", ctx.cancelPasswordPolicy);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](70, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.passwordPolicyErrors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tenantoptionspasswordpolicy_r12.hasData());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](45, 58, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](48, 60, "admin-tenant-options.ok-button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](52, 62, "admin-tenant-options.measurement-settings.modal-title"))("closeIconHandler", ctx.cancelMeasurementSettings);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](71, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.optionsErrors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tenantoptionsmeasurementsettings_r14.hasData());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](60, 64, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](63, 66, "admin-tenant-options.ok-button"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateDirective, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__.SecondaryHeaderComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarDirective, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__.ErrorsComponent, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_7__.AutoUpdatePerfectScrollDirective, _admin_tenant_options_authentication_admin_tenant_options_authentication_component__WEBPACK_IMPORTED_MODULE_8__.AdminTenantOptionsAuthenticationComponent, _admin_tenant_options_document_limits_admin_tenant_options_document_limits_component__WEBPACK_IMPORTED_MODULE_9__.AdminTenantOptionsDocumentLimitsComponent, _admin_tenant_options_password_policy_admin_tenant_options_password_policy_component__WEBPACK_IMPORTED_MODULE_10__.AdminTenantOptionsPasswordPolicyComponent, _admin_tenant_options_measurement_settings_admin_tenant_options_measurement_settings_component__WEBPACK_IMPORTED_MODULE_11__.AdminTenantOptionsMeasurementSettingsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-tenant-options {\n  position: relative;\n  padding-bottom: 15px;\n  height: 100%;\n}\n.admin-tenant-options .section {\n  background: #f1f3f3;\n  margin: 10px;\n  border: 1px solid lightgray;\n  padding: 0px;\n}\n.admin-tenant-options .secondary-header {\n  margin: 0 !important;\n}\n.admin-tenant-options .secondary-header .section-header {\n  top: 0 !important;\n}\n.admin-tenant-options .card {\n  font-size: 14px;\n  position: relative;\n  height: calc(100vh - var(--header-height) - 65px) !important;\n}\n.admin-tenant-options .card .card-header {\n  border-radius: 0;\n  font-size: 16px;\n}\n.admin-tenant-options .card .card-header i.fa {\n  font-size: 14px;\n}\n.admin-tenant-options .card .card-body {\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n}\n.admin-tenant-options .card .bg-card-header {\n  background-color: var(--brand-secondary-color);\n}\n.admin-tenant-options .card .list-group-item {\n  border: none;\n}\n.admin-tenant-options .card .detail {\n  font-size: 12px;\n}\n.admin-tenant-options .modal-body {\n  min-height: 275px;\n}\n.admin-tenant-options #password-policy-expriresAfter {\n  margin-right: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLXRlbmFudC1vcHRpb25zL2FkbWluLXRlbmFudC1vcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTdPQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBZ1BGO0FBOU9FO0VBQ0UsbUJEZ0VNO0VDL0ROLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFnUEo7QUE3T0U7RUFDRSxvQkFBQTtBQStPSjtBQTdPSTtFQUNFLGlCQUFBO0FBK09OO0FBM09FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7QUE2T0o7QUEzT0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUE2T047QUEzT007RUFDRSxlQUFBO0FBNk9SO0FBek9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTJPTjtBQXhPSTtFQUNFLDhDRG9Db0I7QUNzTTFCO0FBdk9JO0VBQ0UsWUFBQTtBQXlPTjtBQXRPSTtFQUNFLGVBQUE7QUF3T047QUFwT0U7RUFDRSxpQkFBQTtBQXNPSjtBQW5PRTtFQUNFLGlCQUFBO0FBcU9KIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4uYWRtaW4tdGVuYW50LW9wdGlvbnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZGFyeS1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDY1cHgpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgaS5mYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuYmctY2FyZC1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMjc1cHg7XHJcbiAgfVxyXG5cclxuICAjcGFzc3dvcmQtcG9saWN5LWV4cHJpcmVzQWZ0ZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 71892:
/*!***************************************************************************!*\
  !*** ./src/app/views/admin-tenant-options/admin-tenant-options.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTenantOptionsModule: () => (/* binding */ AdminTenantOptionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _admin_tenant_options_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-tenant-options-routing.module */ 9965);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../blocks/page/page.module */ 13762);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _sso_saml_options_saml_options_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sso/saml-options/saml-options.module */ 74942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _admin_tenant_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-tenant-options.component */ 79985);
/* harmony import */ var _admin_tenant_options_authentication_admin_tenant_options_authentication_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-tenant-options-authentication/admin-tenant-options-authentication.component */ 12383);
/* harmony import */ var _admin_tenant_options_document_limits_admin_tenant_options_document_limits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-tenant-options-document-limits/admin-tenant-options-document-limits.component */ 73569);
/* harmony import */ var _admin_tenant_options_password_policy_admin_tenant_options_password_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-tenant-options-password-policy/admin-tenant-options-password-policy.component */ 95497);
/* harmony import */ var _admin_tenant_options_measurement_settings_admin_tenant_options_measurement_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-tenant-options-measurement-settings/admin-tenant-options-measurement-settings.component */ 78975);















class AdminTenantOptionsModule {
  static {
    this.ɵfac = function AdminTenantOptionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminTenantOptionsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AdminTenantOptionsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _admin_tenant_options_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminTenantOptionsRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.ModalHeaderModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.AutoUpdatePerfectScrollModule, _sso_saml_options_saml_options_module__WEBPACK_IMPORTED_MODULE_4__.SAMLOptionsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AdminTenantOptionsModule, {
    declarations: [_admin_tenant_options_component__WEBPACK_IMPORTED_MODULE_5__.AdminTenantOptionsComponent, _admin_tenant_options_authentication_admin_tenant_options_authentication_component__WEBPACK_IMPORTED_MODULE_6__.AdminTenantOptionsAuthenticationComponent, _admin_tenant_options_document_limits_admin_tenant_options_document_limits_component__WEBPACK_IMPORTED_MODULE_7__.AdminTenantOptionsDocumentLimitsComponent, _admin_tenant_options_password_policy_admin_tenant_options_password_policy_component__WEBPACK_IMPORTED_MODULE_8__.AdminTenantOptionsPasswordPolicyComponent, _admin_tenant_options_measurement_settings_admin_tenant_options_measurement_settings_component__WEBPACK_IMPORTED_MODULE_9__.AdminTenantOptionsMeasurementSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _admin_tenant_options_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminTenantOptionsRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.ModalHeaderModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.AutoUpdatePerfectScrollModule, _sso_saml_options_saml_options_module__WEBPACK_IMPORTED_MODULE_4__.SAMLOptionsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-tenant-options_admin-tenant-options_module_ts.js.map