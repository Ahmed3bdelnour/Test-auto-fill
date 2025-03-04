"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-user_admin-user_module_ts"],{

/***/ 31973:
/*!***************************************************************!*\
  !*** ./src/app/views/admin-user/admin-user-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUserRoutingModule: () => (/* binding */ AdminUserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user.component */ 40153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'create',
  component: _admin_user_component__WEBPACK_IMPORTED_MODULE_0__.AdminUserComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: 'duplicate/:userid',
  component: _admin_user_component__WEBPACK_IMPORTED_MODULE_0__.AdminUserComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: ':userid',
  component: _admin_user_component__WEBPACK_IMPORTED_MODULE_0__.AdminUserComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminUserRoutingModule {
  static {
    this.ɵfac = function AdminUserRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminUserRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminUserRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminUserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 40153:
/*!**********************************************************!*\
  !*** ./src/app/views/admin-user/admin-user.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUserComponent: () => (/* binding */ AdminUserComponent)
/* harmony export */ });
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/components/created-modified/created-modified.component */ 60622);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./properties-form/properties-form.component */ 75343);


























function AdminUserComponent_div_0_div_13_app_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-label", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("localize", true)("text", "admin-user.leave-password-blank-note");
  }
}
function AdminUserComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 7)(1, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function AdminUserComponent_div_0_div_13_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.password, $event) || (ctx_r1.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AdminUserComponent_div_0_div_13_app_label_2_Template, 1, 2, "app-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r1.fieldPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.user.id);
  }
}
function AdminUserComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 7)(1, "app-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function AdminUserComponent_div_0_div_14_Template_app_checkbox_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.sendWelcomeMessage, $event) || (ctx_r1.sendWelcomeMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r1.sendWelcomeMessage);
  }
}
function AdminUserComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 7)(1, "app-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("valueChange", function AdminUserComponent_div_0_div_15_Template_app_checkbox_valueChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.user.locked = !ctx_r1.user.locked);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", !ctx_r1.user.locked);
  }
}
function AdminUserComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-secondary-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "app-created-modified", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 7)(8, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function AdminUserComponent_div_0_Template_app_field_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.user.name, $event) || (ctx_r1.user.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 7)(10, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function AdminUserComponent_div_0_Template_app_field_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.user.email, $event) || (ctx_r1.user.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 7)(12, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function AdminUserComponent_div_0_Template_app_field_valueChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.userLoginType, $event) || (ctx_r1.userLoginType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, AdminUserComponent_div_0_div_13_Template, 3, 3, "div", 10)(14, AdminUserComponent_div_0_div_14_Template, 2, 1, "div", 10)(15, AdminUserComponent_div_0_div_15_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "app-properties-form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("tenantIdsChange", function AdminUserComponent_div_0_Template_app_properties_form_tenantIdsChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.tenantIdsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("focusDelay", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 19, "admin-user.HeadText"))("rightControls", ctx_r1.formControls);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx_r1.user.id)("createdDate", ctx_r1.user.dateCreatedUTC)("modifiedDate", ctx_r1.user.dateModifiedUTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.isPartnerUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r1.fieldEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r1.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.isPartnerUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r1.fieldLoginType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r1.userLoginType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.isPartnerUser && (ctx_r1.user.loginType === ctx_r1.loginTypes.ApplicationBased || ctx_r1.user.loginType === ctx_r1.loginTypes.UseTenantSettings && ctx_r1.tenantAuthenticationType === ctx_r1.authenticationTypes.ApplicationBased));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.isPartnerUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 21, "admin-user.properties"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("user", ctx_r1.user);
  }
}
class AdminUserComponent {
  get userLoginType() {
    return `${this.user.loginType}`;
  }
  set userLoginType(val) {
    this.user.loginType = Number(val);
  }
  constructor(translate, userState, router, hydraApi, route, toastr, errorsService, spinner) {
    this.translate = translate;
    this.userState = userState;
    this.router = router;
    this.hydraApi = hydraApi;
    this.route = route;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.formControls = [];
    this.sendWelcomeMessage = true;
    this.password = '';
    this.subTenantIds = null;
    this.loginTypes = _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.LoginTypes;
    this.authenticationTypes = shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TenantAuthenticationType;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
    this.userLoaded = u => {
      if (this.routeData.type == 'duplicate') {
        u.name = `${this.translate.instant('Admin.CopyOf')} ${u.name}`;
        u.id = '';
      } else if (this.routeData.type == 'create') {
        u.id = '';
      }
      this.user = u;
      this.isPartnerUser = u.userType == _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.UserTypes.Partner;
    };
    this.userLoadFailed = () => {
      this.toastr.error(this.translate.instant('admin-user.user-load-failed'));
      this.spinner.hide();
    };
    this.onSave = () => {
      if (this.user.id) {
        this.hydraApi.updateUser(new _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.UpdateUser(this.user, this.password, this.subTenantIds), this.userSaved, this.userSaveFailed);
      } else {
        this.hydraApi.createUser(new _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.CreateUser(this.user, this.sendWelcomeMessage, this.password, this.subTenantIds), this.userSaved, this.userSaveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.userSaved = result => {
      if (result.success) {
        this.toastr.success(this.translate.instant('admin-user.user-saved'));
        this.returnToGrid();
        if (this.userState.user.id === result.object.id) {
          result.object.products = this.userState.user.products;
          this.userState.userChanged.next(result.object);
        }
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-user.validation-errors');
      }
      this.spinner.hide();
    };
    this.userSaveFailed = err => {
      this.toastr.error(this.translate.instant('admin-user.user-save-failed'));
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('settings/BambaSettingsApplication/BambaSettingsApplication-Upland.Bamba.Application.Settings.Users'); // todo - handle this "better"
    };
    this.createFields = () => {
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-user.name'),
        placeholder: this.translate.instant('admin-user.name-placeholder'),
        required: true
      });
      this.fieldEmail = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-user.email'),
        placeholder: this.translate.instant('admin-user.email-placeholder'),
        required: true
      });
      this.fieldPassword = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Password,
        label: this.translate.instant('admin-user.password'),
        placeholder: this.translate.instant('admin-user.password-placeholder'),
        required: true
      });
      this.fieldLoginType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        label: this.translate.instant('admin-user.login-type'),
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.EnumDataSource(_blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.LoginTypes, 'LoginTypeEnum', this.translate),
        required: true
      });
    };
  }
  ngOnInit() {
    this.createButtons();
    this.createFields();
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      if (this.routeData.type == 'properties' || this.routeData.type == 'duplicate') {
        this.hydraApi.getUser(this.routeParams.userid, this.userLoaded, this.userLoadFailed);
      } else if (this.routeData.type == 'create') {
        this.user = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.User();
        this.userLoaded(this.user);
      }
    }));
    this.tenantAuthenticationType = this.userState.userProfile.tenantOptions.authenticationType;
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.Control(this.onSave, this.translate.instant('admin-user.save'), 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__.Control(this.onCancel, this.translate.instant('admin-user.cancel'), 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.formControls.push(this.saveButton);
    this.formControls.push(this.cancelButton);
  }
  tenantIdsChanged(tenantIds) {
    this.subTenantIds = tenantIds;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminUserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: AdminUserComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 1,
      consts: [["class", "admin-user d-flex flex-column", "appAutoFocusFirstInput", "", 3, "focusDelay", 4, "ngIf"], ["appAutoFocusFirstInput", "", 1, "admin-user", "d-flex", "flex-column", 3, "focusDelay"], [3, "headerText", "rightControls"], [1, "container-fluid", "col", "min-h-fit-content"], ["id", "spinnerPanel", 1, "row", "panel", "min-h-fit-content", "h-100", "m-0"], [1, "col-12", "col-md-3", "properties-panel"], [3, "id", "createdDate", "modifiedDate"], [1, "col", "p-0"], [3, "valueChange", "field", "value", "disabled"], [3, "valueChange", "field", "value"], ["class", "col p-0", 4, "ngIf"], [1, "col-12", "col-md-9", "p-0", "step-panel", "d-flex", "flex-column"], [1, "step-panel-wrapper", "vcenter"], [1, "col", "step-panel-header"], [1, "d-flex", "flex-column", "col", "p-0", 3, "tenantIdsChange", "user"], [3, "localize", "text", 4, "ngIf"], [3, "localize", "text"], ["name", "checkbox-user-send-welcome-message", "label", "admin-user.send-welcome-message", 3, "valueChange", "value"], ["name", "checkbox-user-locked", "label", "admin-user.allowed-to-login", 3, "valueChange", "value"]],
      template: function AdminUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, AdminUserComponent_div_0_Template, 22, 23, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__.SecondaryHeaderComponent, _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_7__.CreatedModifiedComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_10__.LabelComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.CheckboxComponent, _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_12__.PropertiesFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-user {\n  position: relative;\n  line-height: normal;\n  padding-bottom: 15px;\n  height: 100%;\n  min-height: fit-content !important;\n}\n.admin-user .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-user .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-user .secondary-header .section-header {\n  position: static !important;\n}\n.admin-user .workflow-step-wrapper {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n  text-align: center;\n}\n.admin-user .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-user .properties-panel {\n  background-color: var(--brand-secondary-color);\n  padding: 15px;\n  border-right: solid 1px #cfcfcf;\n}\n.admin-user .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-user .step-panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-user .step-panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-user .vcenter {\n  display: table;\n}\n.admin-user .vcenter :first-child {\n  display: table-cell;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLXVzZXIvYWRtaW4tdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFnUEY7QUE5T0U7RUFDRSxrQ0FBQTtBQWdQSjtBQTdPRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUErT0o7QUE3T0k7RUFDRSwyQkFBQTtBQStPTjtBQTNPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTZPSjtBQTFPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUE0T0o7QUF6T0U7RUFDRSw4Q0QyQ3NCO0VDMUN0QixhQUFBO0VBQ0EsK0JBQUE7QUEyT0o7QUF4T0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTBPSjtBQXZPRTtFQUNFLHlCRHdCTTtFQ3ZCTixnQ0FBQTtFQUNBLGFBQUE7QUF5T0o7QUF0T0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUF3T0o7QUFyT0U7RUFDRSxjQUFBO0FBdU9KO0FBcE9FO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQXNPSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmFkbWluLXVzZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG5cclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndvcmtmbG93LXN0ZXAtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtcGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtcGFuZWwtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcblxyXG4gIC52Y2VudGVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLnZjZW50ZXIgOmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 35852:
/*!*******************************************************!*\
  !*** ./src/app/views/admin-user/admin-user.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUserModule: () => (/* binding */ AdminUserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user-routing.module */ 31973);
/* harmony import */ var _admin_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user.component */ 40153);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../blocks/components/components.module */ 68876);
/* harmony import */ var _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties-form/properties-form.component */ 75343);
/* harmony import */ var _properties_roles_properties_roles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties-roles/properties-roles.component */ 79783);
/* harmony import */ var _properties_tenants_properties_tenants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties-tenants/properties-tenants.component */ 72887);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _properties_document_limits_properties_document_limits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties-document-limits/properties-document-limits.component */ 89349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);












class AdminUserModule {
  static {
    this.ɵfac = function AdminUserModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminUserModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AdminUserModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.TabBarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AdminUserModule, {
    declarations: [_admin_user_component__WEBPACK_IMPORTED_MODULE_1__.AdminUserComponent, _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesFormComponent, _properties_roles_properties_roles_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesRolesComponent, _properties_tenants_properties_tenants_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesTenantsComponent, _properties_document_limits_properties_document_limits_component__WEBPACK_IMPORTED_MODULE_8__.PropertiesDocumentLimitsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.TabBarModule]
  });
})();

/***/ }),

/***/ 89349:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/admin-user/properties-document-limits/properties-document-limits.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesDocumentLimitsComponent: () => (/* binding */ PropertiesDocumentLimitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);







class PropertiesDocumentLimitsComponent {
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
        label: this.translateService.instant('admin-user.document-limits.total-per-month'),
        placeholder: this.translateService.instant('admin-user.document-limits.total-per-month-placeholder'),
        required: true
      });
      this.perDocument = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-user.document-limits.total-per-document'),
        placeholder: this.translateService.instant('admin-user.document-limits.total-per-document-placeholder'),
        required: true
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function PropertiesDocumentLimitsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PropertiesDocumentLimitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PropertiesDocumentLimitsComponent,
      selectors: [["app-properties-document-limits"]],
      inputs: {
        documentLimits: "documentLimits"
      },
      outputs: {
        fieldChanged: "fieldChanged"
      },
      decls: 9,
      vars: 10,
      consts: [[1, "col", "p-0"], [1, "input-cont"], [3, "valueChange", "value", "label"], [3, "valueChange", "field", "value", "disabled"]],
      template: function PropertiesDocumentLimitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "app-checkbox", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function PropertiesDocumentLimitsComponent_Template_app_checkbox_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.documentLimits.overrideTenantLimits, $event) || (ctx.documentLimits.overrideTenantLimits = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 0)(6, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function PropertiesDocumentLimitsComponent_Template_app_field_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.monthlyPageLimit, $event) || (ctx.monthlyPageLimit = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0)(8, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function PropertiesDocumentLimitsComponent_Template_app_field_valueChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.documentPageLimit, $event) || (ctx.documentPageLimit = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.documentLimits.overrideTenantLimits);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, "admin-user.document-limits.overrideTenantLimits"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.perMonth);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.monthlyPageLimit);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.documentLimits.overrideTenantLimits);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.perDocument);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.documentPageLimit);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.documentLimits.overrideTenantLimits);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_1__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 75343:
/*!*******************************************************************************!*\
  !*** ./src/app/views/admin-user/properties-form/properties-form.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesFormComponent: () => (/* binding */ PropertiesFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/user-profile */ 9921);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _properties_roles_properties_roles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../properties-roles/properties-roles.component */ 79783);
/* harmony import */ var _properties_tenants_properties_tenants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../properties-tenants/properties-tenants.component */ 72887);
/* harmony import */ var _properties_document_limits_properties_document_limits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../properties-document-limits/properties-document-limits.component */ 89349);














function PropertiesFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-properties-roles", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("user", ctx_r0.user);
  }
}
function PropertiesFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "app-properties-tenants", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tenantIdsChange", function PropertiesFormComponent_div_4_Template_app_properties_tenants_tenantIdsChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.tenantIdsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("user", ctx_r0.user);
  }
}
function PropertiesFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-properties-document-limits", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("documentLimits", ctx_r0.user.userDocumentLimits);
  }
}
class PropertiesFormComponent {
  constructor(translateService, userStateService) {
    this.translateService = translateService;
    this.userStateService = userStateService;
    this.tenantIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.activeTab = 'roles';
    this.tabs = new Array();
    this.activateTab = view => {
      this.activeTab = view;
    };
  }
  ngOnInit() {
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('roles', this.translateService.instant('admin-user.roles')));
    if (this.userStateService.userProfile.tenantOptions.tenantType == _blocks_models_user_profile__WEBPACK_IMPORTED_MODULE_1__.TenantType.Partner) {
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('tenants', this.translateService.instant('admin-user.tenants')));
    }
    if (this.userStateService.hasFeature(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Feature.Capture)) {
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('document-limits', this.translateService.instant('admin-user.document-limits.title')));
    }
  }
  tenantIdsChanged(tenantIds) {
    this.tenantIdsChange.emit(tenantIds);
  }
  static {
    this.ɵfac = function PropertiesFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PropertiesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: PropertiesFormComponent,
      selectors: [["app-properties-form"]],
      inputs: {
        user: "user"
      },
      outputs: {
        tenantIdsChange: "tenantIdsChange"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "admin-user-properties"], [3, "tabSelected", "tabs"], [1, "tab-content", "content-padding", "h-100"], ["class", "h-100", 4, "ngIf"], [1, "h-100"], [1, "h-100", 3, "user"], [1, "h-100", 3, "tenantIdsChange", "user"], [1, "h-100", 3, "documentLimits"]],
      template: function PropertiesFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "app-tab-bar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tabSelected", function PropertiesFormComponent_Template_app_tab_bar_tabSelected_1_listener($event) {
            return ctx.activateTab($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PropertiesFormComponent_div_3_Template, 2, 1, "div", 3)(4, PropertiesFormComponent_div_4_Template, 2, 1, "div", 3)(5, PropertiesFormComponent_div_5_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tabs", ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", "roles" == ctx.activeTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", "tenants" == ctx.activeTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", "document-limits" == ctx.activeTab);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_4__.TabBarComponent, _properties_roles_properties_roles_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesRolesComponent, _properties_tenants_properties_tenants_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesTenantsComponent, _properties_document_limits_properties_document_limits_component__WEBPACK_IMPORTED_MODULE_7__.PropertiesDocumentLimitsComponent],
      styles: [".admin-user-properties .tab-content {\n  height: 400px;\n}\n\n.admin-user-properties .tab-bar {\n  border-radius: 2px;\n}\n.admin-user-properties .tab-bar div.tabs-content.working-tab {\n  padding-top: 5px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tdXNlci9wcm9wZXJ0aWVzLWZvcm0vcHJvcGVydGllcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLXVzZXItcHJvcGVydGllcyAudGFiLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5hZG1pbi11c2VyLXByb3BlcnRpZXMgLnRhYi1iYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgZGl2LnRhYnMtY29udGVudC53b3JraW5nLXRhYiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 79783:
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin-user/properties-roles/properties-roles.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesRolesComponent: () => (/* binding */ PropertiesRolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);







class PropertiesRolesComponent {
  constructor(hydraApi) {
    this.hydraApi = hydraApi;
    this.roleIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.available = [];
    this.current = [];
    this.currentChanged = items => {
      this.user.roleIds = [];
      for (let item of items) {
        this.user.roleIds.push(item.id);
      }
      this.roleIdsChange.emit(this.user.roleIds);
    };
    this.loadPicklistItems = () => {
      this.hydraApi.getRoles(this.loaded, this.loadFailed);
    };
    this.loaded = roles => {
      this.available = roles;
      this.current = roles.filter(r => !!this.user.roleIds.find(ri => ri == r.id));
    };
    this.loadFailed = () => {};
  }
  ngOnInit() {
    this.loadPicklistItems();
  }
  static {
    this.ɵfac = function PropertiesRolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PropertiesRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__.HydraApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PropertiesRolesComponent,
      selectors: [["app-properties-roles"]],
      inputs: {
        user: "user"
      },
      outputs: {
        roleIdsChange: "roleIdsChange"
      },
      decls: 2,
      vars: 6,
      consts: [[1, "max-height", 3, "currentChange", "available", "current", "displayField", "listName"]],
      template: function PropertiesRolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dual-picklist", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentChange", function PropertiesRolesComponent_Template_app_dual_picklist_currentChange_0_listener($event) {
            return ctx.currentChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("available", ctx.available)("current", ctx.current)("displayField", "name")("listName", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, "step-interactive.roles"));
        }
      },
      dependencies: [_Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__.DualPicklistComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 72887:
/*!*************************************************************************************!*\
  !*** ./src/app/views/admin-user/properties-tenants/properties-tenants.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesTenantsComponent: () => (/* binding */ PropertiesTenantsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);










class PropertiesTenantsComponent {
  constructor(hydraApi, toastr, translate) {
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.translate = translate;
    this.tenantIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.available = [];
    this.current = [];
    this.availableSubTenants = [];
    this.loadAvailableSubTenantsForUser = () => {
      this.hydraApi.getAvailableSubTenantsForUser(this.user.id, this.loadedAvailableSubTenants, this.loadFailed);
    };
    this.loadedAvailableSubTenants = availableSubTenants => {
      this.availableSubTenants = availableSubTenants;
      if (this.user.id) {
        this.loadUserSubTenants();
      } else {
        this.setAvailableAndCurrent();
      }
    };
    this.loadUserSubTenants = () => {
      this.hydraApi.getUserSubTenants(this.user.id, this.loadedUserSubTenants, this.loadFailed);
    };
    this.loadedUserSubTenants = subTenants => {
      const subTenantIds = subTenants.map(t => t.id);
      this.tenantIdsChange.emit(subTenantIds);
      this.setAvailableAndCurrent(subTenantIds);
    };
    this.loadFailed = () => {
      this.toastr.error(this.translate.instant('admin-user.tenantsLoadFailed'));
    };
    this.currentChanged = items => {
      const tenantIds = [];
      for (let item of items) {
        tenantIds.push(item.id);
      }
      this.tenantIdsChange.emit(tenantIds);
    };
  }
  ngOnInit() {
    this.loadAvailableSubTenantsForUser();
  }
  setAvailableAndCurrent(subTenantIds = []) {
    this.available = this.availableSubTenants;
    this.current = this.available.filter(t => subTenantIds.includes(t.id));
  }
  static {
    this.ɵfac = function PropertiesTenantsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PropertiesTenantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_0__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PropertiesTenantsComponent,
      selectors: [["app-properties-tenants"]],
      inputs: {
        user: "user"
      },
      outputs: {
        tenantIdsChange: "tenantIdsChange"
      },
      decls: 2,
      vars: 6,
      consts: [[1, "max-height", 3, "currentChange", "available", "current", "displayField", "listName"]],
      template: function PropertiesTenantsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dual-picklist", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentChange", function PropertiesTenantsComponent_Template_app_dual_picklist_currentChange_0_listener($event) {
            return ctx.currentChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("available", ctx.available)("current", ctx.current)("displayField", "name")("listName", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, "step-interactive.tenants"));
        }
      },
      dependencies: [_Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__.DualPicklistComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-user_admin-user_module_ts.js.map