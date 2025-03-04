"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_admin-fax-settings_account-properties_account-properties-module_ts"],{

/***/ 90871:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/account-address/account-address.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountAddressComponent: () => (/* binding */ AccountAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/outbound */ 30888);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);









function AccountAddressComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AccountAddressComponent_div_0_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.address.address1, $event) || (ctx_r1.address.address1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function AccountAddressComponent_div_0_Template_app_field_fieldChanged_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AccountAddressComponent_div_0_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.address.address2, $event) || (ctx_r1.address.address2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function AccountAddressComponent_div_0_Template_app_field_fieldChanged_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AccountAddressComponent_div_0_Template_app_field_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.address.city, $event) || (ctx_r1.address.city = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function AccountAddressComponent_div_0_Template_app_field_fieldChanged_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AccountAddressComponent_div_0_Template_app_field_valueChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.address.state, $event) || (ctx_r1.address.state = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function AccountAddressComponent_div_0_Template_app_field_fieldChanged_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "app-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AccountAddressComponent_div_0_Template_app_field_valueChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.address.country, $event) || (ctx_r1.address.country = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function AccountAddressComponent_div_0_Template_app_field_fieldChanged_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AccountAddressComponent_div_0_Template_app_field_valueChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.address.postalCode, $event) || (ctx_r1.address.postalCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function AccountAddressComponent_div_0_Template_app_field_fieldChanged_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.changed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldAddress1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.address.address1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldAddress2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.address.address2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.address.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.address.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.address.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.disableCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldPostalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.address.postalCode);
  }
}
class AccountAddressComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.addressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.changed = () => {
      this.address.changed = true;
      this.address.validated = false;
      this.addressChanged.emit();
    };
    this.createFields = () => {
      const countryOptions = _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_2__.Countries.getAsFieldOptions(this.countries, this.translateService);
      const countryDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(countryOptions);
      this.fieldAddress1 = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.address1'),
        placeholder: '',
        required: this.required
      });
      this.fieldAddress2 = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.address2'),
        placeholder: '',
        required: false
      });
      this.fieldCity = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.city'),
        placeholder: '',
        required: this.required
      });
      this.fieldState = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.state'),
        placeholder: '',
        required: false
      });
      this.fieldPostalCode = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.postal-code'),
        placeholder: '',
        required: this.required
      });
      this.fieldCountry = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('fax-account-properties.country'),
        placeholder: '',
        required: this.required,
        datasource: countryDataSource
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function AccountAddressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AccountAddressComponent,
      selectors: [["app-account-address"]],
      inputs: {
        address: "address",
        countries: "countries",
        required: "required",
        disableCountry: "disableCountry"
      },
      outputs: {
        addressChanged: "addressChanged"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "d-flex flex-column", 4, "ngIf"], [1, "d-flex", "flex-column"], [1, "row"], [1, "col-6"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "fieldChanged", "field", "value", "disabled"]],
      template: function AccountAddressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AccountAddressComponent_div_0_Template, 19, 13, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.address);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 77295:
/*!******************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/account-properties-module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPropertiesModule: () => (/* binding */ AccountPropertiesModule),
/* harmony export */   AccountPropertiesRoutingModule: () => (/* binding */ AccountPropertiesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/modals/modals.module */ 51188);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/page/page.module */ 13762);
/* harmony import */ var _sso_saml_options_saml_options_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sso/saml-options/saml-options.module */ 74942);
/* harmony import */ var _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account-components/account-components.module */ 69248);
/* harmony import */ var _account_address_account_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-address/account-address.component */ 90871);
/* harmony import */ var _account_properties_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-properties.component */ 68027);
/* harmony import */ var _address_tab_address_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address-tab/address-tab.component */ 81979);
/* harmony import */ var _authentication_tab_authentication_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication-tab/authentication-tab.component */ 37673);
/* harmony import */ var _general_tab_general_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-tab/general-tab.component */ 80203);
/* harmony import */ var _permissions_tab_permissions_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./permissions-tab/permissions-tab.component */ 91267);
/* harmony import */ var _retention_policy_retention_policy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./retention-policy/retention-policy.component */ 18007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);





















const routes = [{
  path: '',
  component: _account_properties_component__WEBPACK_IMPORTED_MODULE_7__.AccountPropertiesComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AccountPropertiesRoutingModule {
  static {
    this.ɵfac = function AccountPropertiesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountPropertiesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AccountPropertiesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AccountPropertiesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();
class AccountPropertiesModule {
  static {
    this.ɵfac = function AccountPropertiesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountPropertiesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AccountPropertiesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, AccountPropertiesRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule, _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_5__.AccountComponentsModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoUpdatePerfectScrollModule, _sso_saml_options_saml_options_module__WEBPACK_IMPORTED_MODULE_4__.SAMLOptionsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AccountPropertiesModule, {
    declarations: [_account_properties_component__WEBPACK_IMPORTED_MODULE_7__.AccountPropertiesComponent, _general_tab_general_tab_component__WEBPACK_IMPORTED_MODULE_10__.GeneralTabComponent, _account_address_account_address_component__WEBPACK_IMPORTED_MODULE_6__.AccountAddressComponent, _address_tab_address_tab_component__WEBPACK_IMPORTED_MODULE_8__.AddressTabComponent, _retention_policy_retention_policy_component__WEBPACK_IMPORTED_MODULE_12__.RetentionPolicyComponent, _permissions_tab_permissions_tab_component__WEBPACK_IMPORTED_MODULE_11__.PermissionsTabComponent, _authentication_tab_authentication_tab_component__WEBPACK_IMPORTED_MODULE_9__.AuthenticationTabComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, AccountPropertiesRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule, _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_5__.AccountComponentsModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoUpdatePerfectScrollModule, _sso_saml_options_saml_options_module__WEBPACK_IMPORTED_MODULE_4__.SAMLOptionsModule],
    exports: [_account_address_account_address_component__WEBPACK_IMPORTED_MODULE_6__.AccountAddressComponent]
  });
})();

/***/ }),

/***/ 68027:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/account-properties.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPropertiesComponent: () => (/* binding */ AccountPropertiesComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _blocks_modals_interfax_address_validation_interfax_address_validation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/modals/interfax-address-validation/interfax-address-validation.component */ 87226);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _general_tab_general_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-tab/general-tab.component */ 80203);
/* harmony import */ var _address_tab_address_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./address-tab/address-tab.component */ 81979);
/* harmony import */ var _retention_policy_retention_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./retention-policy/retention-policy.component */ 18007);
/* harmony import */ var _permissions_tab_permissions_tab_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./permissions-tab/permissions-tab.component */ 91267);
/* harmony import */ var _authentication_tab_authentication_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authentication-tab/authentication-tab.component */ 37673);





































const _c0 = ["spinnerWrapper"];
const _c1 = ["tabScroll"];
const _c2 = () => ({
  suppressScrollY: false
});
function AccountPropertiesComponent_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-general-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("account", ctx_r2.account);
  }
}
function AccountPropertiesComponent_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-address-tab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("account", ctx_r2.account)("countries", ctx_r2.accountRegistrationDetails.countries);
  }
}
function AccountPropertiesComponent_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-retention-policy", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("account", ctx_r2.account)("customProperties", ctx_r2.customProperties);
  }
}
function AccountPropertiesComponent_div_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-permissions-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("account", ctx_r2.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 2, "fax-account-properties.changes-require-relogin"));
  }
}
function AccountPropertiesComponent_div_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-authentication-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("account", ctx_r2.account);
  }
}
function AccountPropertiesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "div", 11, 2)(3, "div", 12)(4, "div", 13)(5, "app-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("valueChange", function AccountPropertiesComponent_div_5_Template_app_field_valueChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r2.account.username, $event) || (ctx_r2.account.username = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 12)(7, "div", 13)(8, "app-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("valueChange", function AccountPropertiesComponent_div_5_Template_app_field_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r2.account.accountNumber, $event) || (ctx_r2.account.accountNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 12)(10, "div", 13)(11, "app-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("valueChange", function AccountPropertiesComponent_div_5_Template_app_field_valueChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r2.accountType, $event) || (ctx_r2.accountType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 15)(13, "app-tab-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("tabSelected", function AccountPropertiesComponent_div_5_Template_app_tab_bar_tabSelected_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.activateTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 17, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, AccountPropertiesComponent_div_5_div_16_Template, 2, 1, "div", 18)(17, AccountPropertiesComponent_div_5_div_17_Template, 2, 2, "div", 18)(18, AccountPropertiesComponent_div_5_div_18_Template, 2, 2, "div", 18)(19, AccountPropertiesComponent_div_5_div_19_Template, 5, 4, "div", 18)(20, AccountPropertiesComponent_div_5_div_20_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sideScroll_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const tabScroll_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](15);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c2))("autoUpdatePerfectScroll", sideScroll_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("field", ctx_r2.fieldUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("value", ctx_r2.account.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("field", ctx_r2.fieldAccountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("value", ctx_r2.account.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("field", ctx_r2.fieldAccountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("value", ctx_r2.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("tabs", ctx_r2.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](20, _c2))("autoUpdatePerfectScroll", tabScroll_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", "general" === ctx_r2.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", "address" === ctx_r2.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", "retention" === ctx_r2.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", "permissions" === ctx_r2.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", "authentication" === ctx_r2.activeTab);
  }
}
class AccountPropertiesComponent {
  constructor(translateService, router, interfaxService, toastrService, errorsService, spinnerService, ngxSmartModalService, userStateService, authService, location) {
    this.translateService = translateService;
    this.router = router;
    this.interfaxService = interfaxService;
    this.toastrService = toastrService;
    this.errorsService = errorsService;
    this.spinnerService = spinnerService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.userStateService = userStateService;
    this.authService = authService;
    this.location = location;
    this.activeTab = 'general';
    this.tabs = new Array();
    this.formControls = [];
    this.load = () => {
      this.spinnerService.show(this.translateService.instant('Common.LoadingData'), this.spinnerWrapper.nativeElement);
      this.interfaxService.getCustomProperties(this.customPropertiesLoaded, this.loadFailed);
    };
    this.customPropertiesLoaded = customProperties => {
      this.customProperties = customProperties;
      this.interfaxService.getAccount(this.loaded, this.loadFailed);
    };
    this.loadFailed = err => {
      //todo: should show error probably
      this.spinnerService.hide();
    };
    this.loaded = a => {
      this.account = a;
      this.accountType = this.translateService.instant(`fax-account-properties.account-type-${a.accountType.toLocaleLowerCase()}`);
      this.interfaxService.getAccountRegistrationDefaults(this.account.shippingSameAsBilling ? this.account.billing.country : this.account.shipping.country, this.accountRegistrationDetailsLoaded, this.loadFailed);
    };
    this.accountRegistrationDetailsLoaded = ard => {
      this.accountRegistrationDetails = ard;
      this.spinnerService.hide();
      this.show = true;
      this.createTabs();
    };
    this.onSave = () => {
      this.spinnerService.showSavingSpinner();
      if (this.account.billing.changed || this.account.shipping.changed) {
        const addresses = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.AccountAddresses();
        if (this.account.billing.changed) addresses.billing = this.account.billing;
        if (!this.account.shippingSameAsBilling && this.account.shipping.changed) {
          addresses.shipping = this.account.shipping;
        }
        this.interfaxService.validateAddresses(addresses, this.addressValidationSuccess, this.addressValidationFailed);
      } else {
        this.saveAccount();
      }
    };
    this.addressValidationSuccess = avr => {
      if (avr.addresses.billing && !avr.addresses.billing.validated || avr.addresses.shipping && !avr.addresses.shipping.validated) {
        this.errorsService.showErrorsModal([this.translateService.instant('fax-user-properties.enter-valid-address')], this.translateService.instant('fax-user-properties.failed-address-validation'));
        this.spinnerService.hide();
        return;
      }
      if (avr.billingUpdated || avr.shippingUpdated) {
        this.showAddressValidationModal(avr);
      } else {
        this.saveAccount();
      }
    };
    this.showAddressValidationModal = avr => {
      this.spinnerService.hide();
      this.addressValidationResults = avr;
      this.ngxSmartModalService.getModal('addressValidationModal').open();
    };
    this.rejectAddressValidationResults = () => {
      this.ngxSmartModalService.getModal('addressValidationModal').close();
    };
    this.acceptAddressValidationResults = () => {
      this.ngxSmartModalService.getModal('addressValidationModal').close();
      if (this.addressValidationResults.billingUpdated) {
        this.account.billing = this.addressValidationResults.addresses.billing;
      }
      if (this.addressValidationResults.shippingUpdated) {
        this.account.shipping = this.addressValidationResults.addresses.shipping;
      }
      this.spinnerService.showSavingSpinner();
      this.saveAccount();
    };
    this.addressValidationFailed = e => {
      this.spinnerService.hide();
      this.errorsService.showErrorsModal([e], this.translateService.instant('fax-user-properties.failed-address-validation'));
    };
    this.saveAccount = () => {
      this.account.billing.validated = true;
      if (this.account.shipping) this.account.shipping.validated = true;
      this.interfaxService.setAccount(this.account, false, this.saved, this.saveFailed);
    };
    this.saved = result => {
      if (result.success && result.object?.redirectUrl) {
        this.authService.shareSessionForTabs(60 * 1000);
        return;
      }
      this.spinnerService.hide();
      if (result.success) {
        this.toastrService.success(this.translateService.instant('fax-account-properties.save-success'));
        this.close();
        return;
      }
      this.errorsService.showErrorsModal(result.errors, 'fax-account-properties.save-fail');
    };
    this.saveFailed = () => {
      this.spinnerService.hide();
      this.toastrService.error(this.translateService.instant('fax-account-properties.save-fail'));
    };
    this.onCancel = () => {
      this.close();
    };
    this.close = () => {
      this.location.back();
    };
    this.createTabs = () => {
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('general', this.translateService.instant('fax-account-properties.tab-general')));
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('address', this.translateService.instant('fax-account-properties.tab-address')));
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('retention', this.translateService.instant('fax-account-properties.tab-retention')));
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('permissions', this.translateService.instant('fax-account-properties.tab-permissions')));
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('authentication', this.translateService.instant('fax-account-properties.tab-authentication')));
    };
    this.createFields = () => {
      this.fieldUsername = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.username'),
        placeholder: '',
        required: false
      });
      this.fieldAccountNumber = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.account-number'),
        placeholder: '',
        required: false
      });
      this.fieldAccountType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.account-type'),
        placeholder: '',
        required: false
      });
    };
    this.activateTab = tab => {
      this.activeTab = tab;
      if (this.tabScroll) {
        this.tabScroll.scrollToTop();
      }
    };
  }
  ngOnInit() {
    this.createButtons();
    this.createFields();
    this.load();
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onCancel, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.formControls.push(this.saveButton);
    this.formControls.push(this.cancelButton);
    this.translateService.get('Metadata.Save').subscribe(res => {
      this.saveButton.setTranslation(res);
    });
    this.translateService.get('Metadata.Cancel').subscribe(res => {
      this.cancelButton.setTranslation(res);
    });
  }
  static {
    this.ɵfac = function AccountPropertiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_22__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: AccountPropertiesComponent,
      selectors: [["app-account-properties"]],
      viewQuery: function AccountPropertiesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.spinnerWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.tabScroll = _t.first);
        }
      },
      decls: 9,
      vars: 11,
      consts: [["spinnerWrapper", ""], ["addressValidationModal", ""], ["sideScroll", "ngxPerfectScrollbar"], ["tabScroll", "ngxPerfectScrollbar"], ["appAutoFocusFirstInput", "", 1, "fax-account-properties", "project-list-dashboard-body", "d-flex", "flex-column", "container-fluid"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "h-100"], ["class", "panel row m-0", 4, "ngIf"], ["identifier", "addressValidationModal", 3, "closable", "escapable", "dismissable"], [3, "reject", "accept", "addressValidationResults", "billingAddress", "shippingAddress"], [1, "panel", "row", "m-0"], ["fxFlex", "auto", 1, "col-12", "col-md-3", "properties-panel", "properties-panel-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [1, "row"], [1, "col"], [3, "valueChange", "field", "value", "disabled"], [1, "col-12", "col-md-9", "panel", "p-0", "border-bottom-0", "d-flex", "flex-column"], [3, "tabSelected", "tabs"], ["fxFlex", "auto", 1, "tab-content", "content-padding", "pr-3", "tab-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [4, "ngIf"], [3, "account"], [3, "account", "countries"], [3, "account", "customProperties"], [1, "relogin-note"]],
      template: function AccountPropertiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "app-secondary-header", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AccountPropertiesComponent_div_5_Template, 21, 21, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ngx-smart-modal", 8, 1)(8, "app-interfax-address-validation", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("reject", function AccountPropertiesComponent_Template_app_interfax_address_validation_reject_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx.rejectAddressValidationResults());
          })("accept", function AccountPropertiesComponent_Template_app_interfax_address_validation_accept_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx.acceptAddressValidationResults());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 9, "fax-account-properties.header-text"))("rightControls", ctx.formControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.show);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("addressValidationResults", ctx.addressValidationResults)("billingAddress", ctx.account == null ? null : ctx.account.billing)("shippingAddress", ctx.account == null ? null : ctx.account.shipping);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_24__.PerfectScrollbarDirective, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_10__.TabBarComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_22__.NgxSmartModalComponent, _blocks_modals_interfax_address_validation_interfax_address_validation_component__WEBPACK_IMPORTED_MODULE_11__.InterfaxAddressValidationComponent, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_12__.AutoUpdatePerfectScrollDirective, _general_tab_general_tab_component__WEBPACK_IMPORTED_MODULE_13__.GeneralTabComponent, _address_tab_address_tab_component__WEBPACK_IMPORTED_MODULE_14__.AddressTabComponent, _retention_policy_retention_policy_component__WEBPACK_IMPORTED_MODULE_15__.RetentionPolicyComponent, _permissions_tab_permissions_tab_component__WEBPACK_IMPORTED_MODULE_16__.PermissionsTabComponent, _authentication_tab_authentication_tab_component__WEBPACK_IMPORTED_MODULE_17__.AuthenticationTabComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.fax-account-properties[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n  margin-bottom: 15px;\n  height: 100%;\n  position: relative;\n  padding-inline-start: 0px !important;\n  padding-inline-end: 0px !important;\n}\n.fax-account-properties.min-h-fit-content[_ngcontent-%COMP%], \n.fax-account-properties[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .relogin-note[_ngcontent-%COMP%] {\n  color: #464646;\n  font-size: 14px;\n  padding: 10px 0;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .properties-panel[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .validator-panel[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .properties-panel-separator[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .panel-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 2px;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .tab-h[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 55px - 65px) !important;\n}\n.fax-account-properties[_ngcontent-%COMP%]   .properties-panel-h[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 65px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9hY2NvdW50LXByb3BlcnRpZXMvYWNjb3VudC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTdPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0FBZ1BGO0FBOU9FOztFQUVFLGtDQUFBO0FBZ1BKO0FBN09FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBK09KO0FBNU9FO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQThPSjtBQTVPSTtFQUNFLDJCQUFBO0FBOE9OO0FBMU9FO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQTRPSjtBQXpPRTtFQUNFLGlCQUFBO0VBQ0EsOENEMENzQjtFQ3pDdEIsK0JBQUE7QUEyT0o7QUF4T0U7RUFDRSxrQkFBQTtBQTBPSjtBQXZPRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBeU9KO0FBdE9FO0VBQ0UseUJEb0JNO0VDbkJOLGdDQUFBO0VBQ0EsYUFBQTtBQXdPSjtBQXJPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQXVPSjtBQXBPRTtFQUNFLGtCQUFBO0VBQ0EsbUVBQUE7QUFzT0o7QUFuT0U7RUFDRSxrQkFBQTtFQUNBLDREQUFBO0FBcU9KIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4uZmF4LWFjY291bnQtcHJvcGVydGllcyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgJi5taW4taC1maXQtY29udGVudCxcclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yZWxvZ2luLW5vdGUge1xyXG4gICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnZhbGlkYXRvci1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYi1oIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gNTVweCAtIDY1cHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1oIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gNjVweCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 81979:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/address-tab/address-tab.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressTabComponent: () => (/* binding */ AddressTabComponent)
/* harmony export */ });
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _account_address_account_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account-address/account-address.component */ 90871);






function AddressTabComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-account-address", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("address", ctx_r1.account.shipping)("countries", ctx_r1.countries)("required", true)("disableCountry", true);
  }
}
function AddressTabComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-account-address", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "app-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AddressTabComponent_div_0_Template_app_checkbox_valueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.account.shippingSameAsBilling, $event) || (ctx_r1.account.shippingSameAsBilling = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function AddressTabComponent_div_0_Template_app_checkbox_valueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onValueChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AddressTabComponent_div_0_div_8_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "fax-account-properties.billing")("localize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("address", ctx_r1.account.billing)("countries", ctx_r1.countries)("required", true)("disableCountry", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "fax-account-properties.shipping")("localize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.account.shippingSameAsBilling);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.account.shippingSameAsBilling);
  }
}
class AddressTabComponent {
  constructor() {}
  ngOnInit() {}
  onValueChange(value) {
    if (value == true && !this.account.shipping.country) this.account.shipping.country = this.account.billing.country;
  }
  static {
    this.ɵfac = function AddressTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddressTabComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AddressTabComponent,
      selectors: [["app-address-tab"]],
      inputs: {
        account: "account",
        countries: "countries"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "address-tab d-flex flex-column", 4, "ngIf"], [1, "address-tab", "d-flex", "flex-column"], [3, "text", "localize"], [1, "indent"], [3, "address", "countries", "required", "disableCountry"], [1, "pt-3"], ["label", "fax-account-properties.shipping-sameas-billing", 3, "valueChange", "value"], [4, "ngIf"]],
      template: function AddressTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AddressTabComponent_div_0_Template, 9, 10, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.account);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_2__.LabelComponent, _account_address_account_address_component__WEBPACK_IMPORTED_MODULE_3__.AccountAddressComponent],
      styles: [".address-tab[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtcHJvcGVydGllcy9hZGRyZXNzLXRhYi9hZGRyZXNzLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkcmVzcy10YWIge1xyXG4gICAgLmluZGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 37673:
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/authentication-tab/authentication-tab.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationTabComponent: () => (/* binding */ AuthenticationTabComponent)
/* harmony export */ });
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_saml_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/services/saml-service */ 83495);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _sso_saml_options_saml_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sso/saml-options/saml-options.component */ 68159);














function AuthenticationTabComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function AuthenticationTabComponent_div_3_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.account.authenticationOptions.sso.clientId, $event) || (ctx_r1.account.authenticationOptions.sso.clientId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "app-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function AuthenticationTabComponent_div_3_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.account.authenticationOptions.sso.authority, $event) || (ctx_r1.account.authenticationOptions.sso.authority = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldClientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.account.authenticationOptions.sso.clientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldAuthority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.account.authenticationOptions.sso.authority);
  }
}
function AuthenticationTabComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-saml-options", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("idpSettings", ctx_r1.account.authenticationOptions.idp);
  }
}
function AuthenticationTabComponent_div_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "admin-tenant-options.not-configured"), "");
  }
}
function AuthenticationTabComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "admin-tenant-options.configured-prefix"), " (", ctx_r1.classicLoginPrimaryUsersCount, ") ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, "admin-tenant-options.configured-suffix"), "");
  }
}
function AuthenticationTabComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AuthenticationTabComponent_div_5_div_8_Template, 4, 3, "div", 7)(9, AuthenticationTabComponent_div_5_div_9_Template, 5, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "admin-tenant-options.note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 6, "admin-tenant-options.note-message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.classicLoginPrimaryUsersCount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.classicLoginPrimaryUsersCount > 0);
  }
}
class AuthenticationTabComponent {
  get accountAuthenticationOptionsType() {
    return `${this.account.authenticationOptions.type}`;
  }
  set accountAuthenticationOptionsType(val) {
    this.account.authenticationOptions.type = Number(val);
  }
  constructor(translateService, samlService, interFAXService, toastrService) {
    this.translateService = translateService;
    this.samlService = samlService;
    this.interFAXService = interFAXService;
    this.toastrService = toastrService;
    this.AuthenticationTypes = _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__.AuthenticationTypes;
    this.MetaDataType = shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType;
    this.classicLoginPrimaryUsersCount = 0;
    this.countSuccess = count => {
      this.classicLoginPrimaryUsersCount = count;
    };
    this.countFailed = err => {
      this.toastrService.error(err.message);
    };
    this.createFields = () => {
      this.fieldClientId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('admin-tenant-options.sso-client-id'),
        placeholder: this.translateService.instant('admin-tenant-options.sso-client-id-placeholder'),
        required: true
      });
      this.fieldAuthority = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('admin-tenant-options.sso-authority'),
        placeholder: this.translateService.instant('admin-tenant-options.sso-authority-placeholder'),
        required: true
      });
      const authenticationTypes = new Array();
      authenticationTypes.push({
        name: this.translateService.instant('admin-tenant-options.authentication-type-application-based'),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TenantAuthenticationType.ApplicationBased}`
      });
      authenticationTypes.push({
        name: this.translateService.instant('admin-tenant-options.authentication-type-sso'),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TenantAuthenticationType.SSO}`
      });
      authenticationTypes.push({
        name: this.translateService.instant('admin-tenant-options.authentication-type-saml'),
        value: `${shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TenantAuthenticationType.SAML}`
      });
      this.authenticationTypesDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(authenticationTypes);
      this.fieldType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        label: this.translateService.instant('admin-tenant-options.authentication-type'),
        placeholder: this.translateService.instant('admin-tenant-options.authentication-type'),
        required: true,
        datasource: this.authenticationTypesDataSource
      });
    };
  }
  ngOnInit() {
    this.createFields();
    this.interFAXService.countClassicLoginPrimaryUsers(this.countSuccess, this.countFailed);
  }
  static {
    this.ɵfac = function AuthenticationTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthenticationTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blocks_services_saml_service__WEBPACK_IMPORTED_MODULE_2__.SAMLService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AuthenticationTabComponent,
      selectors: [["app-authentication-tab"]],
      inputs: {
        account: "account"
      },
      decls: 6,
      vars: 5,
      consts: [[1, "account-authentication"], [1, "col", "p-0"], [3, "valueChange", "field", "value"], [4, "ngIf"], [3, "idpSettings"], [1, "mt-4"], [1, "mt-2"], ["class", "mt-2 text-danger", 4, "ngIf"], ["class", "mt-2 text-success", 4, "ngIf"], [1, "mt-2", "text-danger"], ["width", "15", "height", "15", "src", "assets/img/material/warning-sign-svgrepo-com.svg"], [1, "mt-2", "text-success"], ["width", "15", "height", "15", "src", "assets/img/material/user-check-svgrepo-com.svg"]],
      template: function AuthenticationTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function AuthenticationTabComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.accountAuthenticationOptionsType, $event) || (ctx.accountAuthenticationOptionsType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AuthenticationTabComponent_div_3_Template, 5, 4, "div", 3)(4, AuthenticationTabComponent_div_4_Template, 2, 1, "div", 3)(5, AuthenticationTabComponent_div_5_Template, 10, 8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.accountAuthenticationOptionsType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.account.authenticationOptions.type == ctx.AuthenticationTypes.OPENID);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.account.authenticationOptions.type == ctx.AuthenticationTypes.SAML);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.account.authenticationOptions.type == ctx.AuthenticationTypes.OPENID || ctx.account.authenticationOptions.type == ctx.AuthenticationTypes.SAML);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent, _sso_saml_options_saml_options_component__WEBPACK_IMPORTED_MODULE_5__.SAMLOptionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 80203:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/general-tab/general-tab.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralTabComponent: () => (/* binding */ GeneralTabComponent)
/* harmony export */ });
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);







function GeneralTabComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function GeneralTabComponent_div_0_div_4_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.account.taxId, $event) || (ctx_r1.account.taxId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.fieldTaxId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.account.taxId);
  }
}
function GeneralTabComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function GeneralTabComponent_div_0_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.account.company, $event) || (ctx_r1.account.company = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GeneralTabComponent_div_0_div_4_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function GeneralTabComponent_div_0_Template_app_field_valueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.account.contactName, $event) || (ctx_r1.account.contactName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function GeneralTabComponent_div_0_Template_app_field_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.account.contactEmail, $event) || (ctx_r1.account.contactEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function GeneralTabComponent_div_0_Template_app_field_valueChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.account.contactPhone, $event) || (ctx_r1.account.contactPhone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function GeneralTabComponent_div_0_Template_app_field_valueChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.account.contactMobile, $event) || (ctx_r1.account.contactMobile = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 2)(18, "div", 3)(19, "app-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function GeneralTabComponent_div_0_Template_app_field_valueChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.account.contactFax, $event) || (ctx_r1.account.contactFax = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.fieldCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.account.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.account.displayTaxId != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.account.contactName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.fieldEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.account.contactEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.fieldPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.account.contactPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.fieldMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.account.contactMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.fieldFax);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.account.contactFax);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxLength", 20);
  }
}
class GeneralTabComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.createFields = () => {
      this.fieldCompany = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.company'),
        placeholder: '',
        required: false
      });
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.name'),
        placeholder: '',
        required: true
      });
      this.fieldEmail = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.email'),
        placeholder: '',
        required: true
      });
      this.fieldFax = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.fax'),
        placeholder: '',
        required: false
      });
      this.fieldMobile = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.mobile'),
        placeholder: '',
        required: false
      });
      this.fieldPhone = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.phone'),
        placeholder: '',
        required: true
      });
      this.fieldTaxId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translateService.instant('account-register.taxid'),
        placeholder: '',
        required: this.account.displayTaxId == _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__.FieldState.Required
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function GeneralTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GeneralTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: GeneralTabComponent,
      selectors: [["app-general-tab"]],
      inputs: {
        account: "account"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "d-flex flex-column", 4, "ngIf"], [1, "d-flex", "flex-column"], [1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"], ["class", "row", 4, "ngIf"], [3, "valueChange", "field", "value", "maxLength"]],
      template: function GeneralTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GeneralTabComponent_div_0_Template, 20, 14, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91267:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/permissions-tab/permissions-tab.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsTabComponent: () => (/* binding */ PermissionsTabComponent)
/* harmony export */ });
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);




function PermissionsTabComponent_app_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-checkbox", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function PermissionsTabComponent_app_checkbox_1_Template_app_checkbox_valueChange_0_listener($event) {
      const permission_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.account.permissions[permission_r2], $event) || (ctx_r2.account.permissions[permission_r2] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const permission_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r2.account.permissions[permission_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "fax-account-properties.permission-" + permission_r2);
  }
}
class PermissionsTabComponent {
  constructor() {
    this.permissions = ['allowDownloadingInboundPCI', 'allowDeleting', 'allowBlackout', 'allowAutoShare', 'allowManualShare', 'allowForwardingInboundPCI', 'allowManualForwarding', 'allowInboundNotificationEmails', 'includeSenderEmail', 'allowOutboundNotificationEmails', 'allowUseContactLists'];
  }
  ngOnInit() {}
  static {
    this.ɵfac = function PermissionsTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsTabComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PermissionsTabComponent,
      selectors: [["app-permissions-tab"]],
      inputs: {
        account: "account"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "account-permissions"], [3, "value", "label", "valueChange", 4, "ngFor", "ngForOf"], [3, "valueChange", "value", "label"]],
      template: function PermissionsTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PermissionsTabComponent_app_checkbox_1_Template, 1, 2, "app-checkbox", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.permissions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 18007:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-properties/retention-policy/retention-policy.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetentionPolicyComponent: () => (/* binding */ RetentionPolicyComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);








function RetentionPolicyComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function RetentionPolicyComponent_div_0_div_10_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.account.retentionPolicy.customProperty, $event) || (ctx_r1.account.retentionPolicy.customProperty = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function RetentionPolicyComponent_div_0_div_10_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.accountRetentionPolicyCustomPropertyDuration, $event) || (ctx_r1.accountRetentionPolicyCustomPropertyDuration = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function RetentionPolicyComponent_div_0_div_10_Template_app_field_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.accountRetentionPolicyCustomPropertyUnit, $event) || (ctx_r1.accountRetentionPolicyCustomPropertyUnit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldCustomProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.account.retentionPolicy.customProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldCustomPropertyDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.accountRetentionPolicyCustomPropertyDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldCustomPropertyUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.accountRetentionPolicyCustomPropertyUnit);
  }
}
function RetentionPolicyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function RetentionPolicyComponent_div_0_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.accountRetentionPolicyDuration, $event) || (ctx_r1.accountRetentionPolicyDuration = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function RetentionPolicyComponent_div_0_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.accountRetentionPolicyUnit, $event) || (ctx_r1.accountRetentionPolicyUnit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "app-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function RetentionPolicyComponent_div_0_Template_app_checkbox_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.account.retentionPolicy.useCustomProperty, $event) || (ctx_r1.account.retentionPolicy.useCustomProperty = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, RetentionPolicyComponent_div_0_div_10_Template, 10, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.accountRetentionPolicyDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.accountRetentionPolicyUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.account.retentionPolicy.useCustomProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.dateCustomProperties.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.account.retentionPolicy.useCustomProperty);
  }
}
class RetentionPolicyComponent {
  get accountRetentionPolicyDuration() {
    return `${this.account.retentionPolicy.duration}`;
  }
  set accountRetentionPolicyDuration(val) {
    this.account.retentionPolicy.duration = Number(val);
  }
  get accountRetentionPolicyUnit() {
    return `${this.account.retentionPolicy.unit}`;
  }
  set accountRetentionPolicyUnit(val) {
    this.account.retentionPolicy.unit = Number(val);
  }
  get accountRetentionPolicyCustomPropertyDuration() {
    return `${this.account.retentionPolicy.customPropertyDuration}`;
  }
  set accountRetentionPolicyCustomPropertyDuration(val) {
    this.account.retentionPolicy.customPropertyDuration = Number(val);
  }
  get accountRetentionPolicyCustomPropertyUnit() {
    return `${this.account.retentionPolicy.customPropertyUnit}`;
  }
  set accountRetentionPolicyCustomPropertyUnit(val) {
    this.account.retentionPolicy.customPropertyUnit = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.getCustomPropertyDatesDataSource = () => {
      const options = new Array();
      for (const cp of this.dateCustomProperties) {
        options.push({
          name: cp.name,
          value: cp.id.toString()
        });
      }
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
    };
    this.createFields = () => {
      const unitsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.RetentionPolicyUnit, 'RetentionPolicyUnit', this.translateService);
      this.fieldDuration = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('retention-policy.duration'),
        placeholder: '',
        required: true,
        allowNegativeNumbers: false
      });
      this.fieldUnit = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('retention-policy.units'),
        placeholder: '',
        required: true,
        datasource: unitsDataSource
      });
      this.fieldCustomProperty = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('retention-policy.custom-property'),
        placeholder: '',
        required: true,
        datasource: this.getCustomPropertyDatesDataSource()
      });
      this.fieldCustomPropertyDuration = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('retention-policy.duration'),
        placeholder: '',
        required: true
      });
      this.fieldCustomPropertyUnit = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('retention-policy.units'),
        placeholder: '',
        required: true,
        datasource: unitsDataSource
      });
    };
  }
  ngOnInit() {
    this.dateCustomProperties = this.customProperties.filter(cp => cp.type == _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.DocumentPropertyDataType.Date);
    if (this.dateCustomProperties.length == 0) this.account.retentionPolicy.useCustomProperty = false;
    this.createFields();
  }
  static {
    this.ɵfac = function RetentionPolicyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RetentionPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: RetentionPolicyComponent,
      selectors: [["app-retention-policy"]],
      inputs: {
        account: "account",
        customProperties: "customProperties"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "d-flex flex-column", 4, "ngIf"], [1, "d-flex", "flex-column"], [1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"], ["label", "retention-policy.use-custom-property", 3, "valueChange", "value", "disabled"], [4, "ngIf"]],
      template: function RetentionPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RetentionPolicyComponent_div_0_Template, 11, 7, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.account);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_admin-fax-settings_account-properties_account-properties-module_ts.js.map