"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-integratedapplications_admin-integratedapplications_module_ts"],{

/***/ 88795:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin-integratedapplications/admin-integratedapplications-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminIntegratedApplicationsRoutingModule: () => (/* binding */ AdminIntegratedApplicationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_integratedapplications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-integratedapplications.component */ 75675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: ':id',
  component: _admin_integratedapplications_component__WEBPACK_IMPORTED_MODULE_0__.AdminIntegratedApplicationsComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminIntegratedApplicationsRoutingModule {
  static {
    this.ɵfac = function AdminIntegratedApplicationsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminIntegratedApplicationsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminIntegratedApplicationsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminIntegratedApplicationsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 75675:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/admin-integratedapplications/admin-integratedapplications.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminIntegratedApplicationsComponent: () => (/* binding */ AdminIntegratedApplicationsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _ia_roles_ia_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ia-roles/ia-roles.component */ 75672);
/* harmony import */ var _ia_filebound_ia_filebound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ia-filebound/ia-filebound.component */ 71198);
/* harmony import */ var _ia_onedrive_ia_onedrive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ia-onedrive/ia-onedrive.component */ 64486);
/* harmony import */ var _ia_imanage_ia_imanage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ia-imanage/ia-imanage.component */ 48589);



























function AdminIntegratedApplicationsComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-ia-roles", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("application", ctx_r1.application);
  }
}
function AdminIntegratedApplicationsComponent_div_0_div_20_app_ia_filebound_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-ia-filebound", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("application", ctx_r1.application);
  }
}
function AdminIntegratedApplicationsComponent_div_0_div_20_app_ia_onedrive_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-ia-onedrive", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("application", ctx_r1.application);
  }
}
function AdminIntegratedApplicationsComponent_div_0_div_20_app_ia_imanage_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-ia-imanage", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("application", ctx_r1.application);
  }
}
function AdminIntegratedApplicationsComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AdminIntegratedApplicationsComponent_div_0_div_20_app_ia_filebound_1_Template, 1, 1, "app-ia-filebound", 18)(2, AdminIntegratedApplicationsComponent_div_0_div_20_app_ia_onedrive_2_Template, 1, 1, "app-ia-onedrive", 18)(3, AdminIntegratedApplicationsComponent_div_0_div_20_app_ia_imanage_3_Template, 1, 1, "app-ia-imanage", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.application.application == "FileBound");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.application.application == "OneDrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.application.application == "IManage");
  }
}
function AdminIntegratedApplicationsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-secondary-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 7)(11, "app-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("valueChange", function AdminIntegratedApplicationsComponent_div_0_Template_app_checkbox_valueChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.application.enabled, $event) || (ctx_r1.application.enabled = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "app-tab-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("tabSelected", function AdminIntegratedApplicationsComponent_div_0_Template_app_tab_bar_tabSelected_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.activateTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, AdminIntegratedApplicationsComponent_div_0_div_19_Template, 2, 1, "div", 14)(20, AdminIntegratedApplicationsComponent_div_0_div_20_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 8, "admin-integratedapplication.HeadText"))("rightControls", ctx_r1.formControls);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.application.applicationDisplayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("value", ctx_r1.application.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](16, 10, "admin-integratedapplication.properties"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("tabs", ctx_r1.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", "roles" == ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", "advanced" == ctx_r1.activeTab);
  }
}
class AdminIntegratedApplicationsComponent {
  constructor(translateService, userState, router, hydraApi, route, toastr, errorsService, spinner) {
    this.translateService = translateService;
    this.userState = userState;
    this.router = router;
    this.hydraApi = hydraApi;
    this.route = route;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.hasAdvanced = false;
    this.activeTab = 'roles';
    this.tabs = new Array();
    this.formControls = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.createTabs = () => {
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('roles', this.translateService.instant('admin-integratedapplication.roles')));
      if (this.hasAdvanced) this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('advanced', this.translateService.instant('admin-integratedapplication.advanced')));
    };
    this.appLoaded = app => {
      this.application = app;
      this.hasAdvanced = app.application == 'FileBound' || app.application == 'OneDrive' || app.application == 'IManage';
      this.initialEnableState = app.enabled;
      this.createTabs();
    };
    this.appLoadFailed = () => {
      //todo: toastr
    };
    this.onSave = () => {
      if (this.application.application == 'FileBound' && this.isInValidateFileBoundUrl()) {
        this.toastr.error(this.translateService.instant('admin-integratedapplication.emptyFileBoundUrl'));
        return;
      }
      if (this.application.application == 'OneDrive' && this.isInvalidOneDriveDetails()) {
        this.toastr.error(this.translateService.instant('admin-integratedapplication.emptyOneDriveDetails'));
        return;
      }
      if (this.application.application == 'IManage' && this.isInvalidIManageDetails()) {
        this.toastr.error(this.translateService.instant('admin-integratedapplication.imanage.emptyUrl'));
        return;
      }
      this.saveIntegratedApplication();
    };
    this.isInValidateFileBoundUrl = () => {
      return !this.application.data.get('fileBoundUrl') || !this.application.data.get('fileBoundUrl').value;
    };
    this.isInvalidOneDriveDetails = () => {
      return !this.application.data.get('clientId') || !this.application.data.get('clientId').value || !this.application.data.get('tenantName') || !this.application.data.get('tenantName').value;
    };
    this.isInvalidIManageDetails = () => {
      return !this.application.data.get('url') || !this.application.data.get('url').value;
    };
    this.saveIntegratedApplication = () => {
      this.hydraApi.updateIntegratedApplication(this.application, this.appSaved, this.appSaveFailed);
      this.spinner.showSavingSpinner();
    };
    this.appSaved = result => {
      if (result.success) {
        this.toastr.success(this.translateService.instant('admin-integratedapplication.saved'));
        if (this.initialEnableState != this.application.enabled) {
          this.userState.loadAppIntegrations(() => {}, () => {});
        }
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-integratedapplication.validation-errors');
      }
      this.spinner.hide();
    };
    this.appSaveFailed = err => {
      this.toastr.error(this.translateService.instant('admin-integratedapplication.save-failed'));
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('settings/BambaSettingsApplication/BambaSettingsApplication-Upland.Bamba.Application.Settings.IntegratedApplications'); // todo - handle this "better"
    };
    this.activateTab = view => {
      this.activeTab = view;
    };
  }
  ngOnInit() {
    this.spinner.hide();
    this.createButtons();
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      if (data.type == 'properties') {
        this.hydraApi.getIntegratedApplication(params.id, this.appLoaded, this.appLoadFailed);
      }
    }));
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__.Control(this.onSave, this.translateService.instant('admin-user.save'), 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__.Control(this.onCancel, this.translateService.instant('admin-user.cancel'), 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.formControls.push(this.saveButton);
    this.formControls.push(this.cancelButton);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminIntegratedApplicationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminIntegratedApplicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_1__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: AdminIntegratedApplicationsComponent,
      selectors: [["app-admin-integratedapplications"]],
      decls: 1,
      vars: 1,
      consts: [["class", "admin-integratedapplication d-flex flex-column", "appAutoFocusFirstInput", "", 4, "ngIf"], ["appAutoFocusFirstInput", "", 1, "admin-integratedapplication", "d-flex", "flex-column"], [3, "headerText", "rightControls"], [1, "container-fluid", "col", "min-h-fit-content"], ["id", "spinnerPanel", 1, "row", "panel", "min-h-fit-content", "h-100", "m-0"], [1, "col-12", "col-md-3", "properties-panel"], ["id", "div-application-name", 1, "col", "p-0"], [1, "col", "p-0"], ["name", "checkbox-enabled", "label", "admin-integratedapplication.enabled", 3, "valueChange", "value"], [1, "col-12", "col-md-9", "p-0", "step-panel", "d-flex", "flex-column"], [1, "step-panel-wrapper", "vcenter"], [1, "col", "step-panel-header"], [3, "tabSelected", "tabs"], [1, "tab-content", "content-padding", "h-100"], ["class", "h-100", 4, "ngIf"], [4, "ngIf"], [1, "h-100"], [3, "application"], [3, "application", 4, "ngIf"]],
      template: function AdminIntegratedApplicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, AdminIntegratedApplicationsComponent_div_0_Template, 21, 12, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.application);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__.SecondaryHeaderComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_7__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__.CheckboxComponent, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_9__.TabBarComponent, _ia_roles_ia_roles_component__WEBPACK_IMPORTED_MODULE_10__.IaRolesComponent, _ia_filebound_ia_filebound_component__WEBPACK_IMPORTED_MODULE_11__.IaFileboundComponent, _ia_onedrive_ia_onedrive_component__WEBPACK_IMPORTED_MODULE_12__.IaOnedriveComponent, _ia_imanage_ia_imanage_component__WEBPACK_IMPORTED_MODULE_13__.IaIManageComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-integratedapplication {\n  position: relative;\n  line-height: normal;\n  padding-bottom: 15px;\n  height: 100%;\n  min-height: fit-content !important;\n}\n.admin-integratedapplication .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-integratedapplication .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-integratedapplication .secondary-header .section-header {\n  position: static !important;\n}\n.admin-integratedapplication .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-integratedapplication .properties-panel {\n  background-color: var(--brand-secondary-color);\n  padding: 15px;\n  border-right: solid 1px #cfcfcf;\n}\n.admin-integratedapplication .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-integratedapplication .step-panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-integratedapplication .step-panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-integratedapplication .vcenter {\n  display: table;\n}\n.admin-integratedapplication .vcenter :first-child {\n  display: table-cell;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWludGVncmF0ZWRhcHBsaWNhdGlvbnMvYWRtaW4taW50ZWdyYXRlZGFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFnUEY7QUE5T0U7RUFDRSxrQ0FBQTtBQWdQSjtBQTdPRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUErT0o7QUE3T0k7RUFDRSwyQkFBQTtBQStPTjtBQTNPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUE2T0o7QUExT0U7RUFDRSw4Q0RtRHNCO0VDbER0QixhQUFBO0VBQ0EsK0JBQUE7QUE0T0o7QUF6T0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTJPSjtBQXhPRTtFQUNFLHlCRGdDTTtFQy9CTixnQ0FBQTtFQUNBLGFBQUE7QUEwT0o7QUF2T0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUF5T0o7QUF0T0U7RUFDRSxjQUFBO0FBd09KO0FBck9FO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQXVPSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmFkbWluLWludGVncmF0ZWRhcHBsaWNhdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5taW4taC1maXQtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZGFyeS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NmY2ZjZjtcclxuICB9XHJcblxyXG4gIC5wcm9wZXJ0aWVzLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwtc2VwYXJhdG9yIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zdGVwLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5zdGVwLXBhbmVsLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG5cclxuICAudmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcblxyXG4gIC52Y2VudGVyIDpmaXJzdC1jaGlsZCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 7098:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin-integratedapplications/admin-integratedapplications.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminIntegratedApplicationsModule: () => (/* binding */ AdminIntegratedApplicationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _admin_integratedapplications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-integratedapplications-routing.module */ 88795);
/* harmony import */ var _admin_integratedapplications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-integratedapplications.component */ 75675);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../blocks/components/components.module */ 68876);
/* harmony import */ var _ia_roles_ia_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ia-roles/ia-roles.component */ 75672);
/* harmony import */ var _ia_filebound_ia_filebound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ia-filebound/ia-filebound.component */ 71198);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _ia_onedrive_ia_onedrive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ia-onedrive/ia-onedrive.component */ 64486);
/* harmony import */ var _ia_imanage_ia_imanage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ia-imanage/ia-imanage.component */ 48589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);












class AdminIntegratedApplicationsModule {
  static {
    this.ɵfac = function AdminIntegratedApplicationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminIntegratedApplicationsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AdminIntegratedApplicationsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _admin_integratedapplications_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminIntegratedApplicationsRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.TabBarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AdminIntegratedApplicationsModule, {
    declarations: [_admin_integratedapplications_component__WEBPACK_IMPORTED_MODULE_1__.AdminIntegratedApplicationsComponent, _ia_roles_ia_roles_component__WEBPACK_IMPORTED_MODULE_4__.IaRolesComponent, _ia_filebound_ia_filebound_component__WEBPACK_IMPORTED_MODULE_5__.IaFileboundComponent, _ia_onedrive_ia_onedrive_component__WEBPACK_IMPORTED_MODULE_7__.IaOnedriveComponent, _ia_imanage_ia_imanage_component__WEBPACK_IMPORTED_MODULE_8__.IaIManageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _admin_integratedapplications_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminIntegratedApplicationsRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.TabBarModule]
  });
})();

/***/ }),

/***/ 71198:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin-integratedapplications/ia-filebound/ia-filebound.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaFileboundComponent: () => (/* binding */ IaFileboundComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_integrated_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/integrated-application */ 86984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






class IaFileboundComponent {
  constructor(translate) {
    this.translate = translate;
    this.onFileBoundUrlChanged = value => {
      this.application.data.set('fileBoundUrl', value);
    };
  }
  ngOnInit() {
    this.fieldFileBoundUrl = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: this.translate.instant('admin-integratedapplication.fileBoundUrl'),
      placeholder: this.translate.instant('admin-integratedapplication.fileBoundUrl'),
      required: true
    });
    const md = this.application.data.get('fileBoundUrl');
    this.fileBoundUrl = md ? md.value : '';
  }
  static {
    this.ɵfac = function IaFileboundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IaFileboundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: IaFileboundComponent,
      selectors: [["app-ia-filebound"]],
      inputs: {
        application: "application"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "ia-filebound"], [1, "tab-content", "min-h-fit-content", "container-fluid"], [1, "h-100"], [3, "blur", "field", "value"]],
      template: function IaFileboundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function IaFileboundComponent_Template_app_field_blur_3_listener($event) {
            return ctx.onFileBoundUrlChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldFileBoundUrl)("value", ctx.fileBoundUrl);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent],
      styles: [".ia-filebound.min-h-fit-content[_ngcontent-%COMP%], \n.ia-filebound[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4taW50ZWdyYXRlZGFwcGxpY2F0aW9ucy9pYS1maWxlYm91bmQvaWEtZmlsZWJvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLGtDQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuaWEtZmlsZWJvdW5kIHtcclxuICAmLm1pbi1oLWZpdC1jb250ZW50LFxyXG4gIC5taW4taC1maXQtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 48589:
/*!***************************************************************************************!*\
  !*** ./src/app/views/admin-integratedapplications/ia-imanage/ia-imanage.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaIManageComponent: () => (/* binding */ IaIManageComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_integrated_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/integrated-application */ 86984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






class IaIManageComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.onFieldChanged = (key, value) => {
      this.application.data.set(key, value);
    };
  }
  ngOnInit() {
    this.fieldUrl = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: this.translateService.instant('admin-integratedapplication.imanage.url'),
      placeholder: this.translateService.instant('admin-integratedapplication.imanage.url'),
      required: true
    });
    this.url = this.application.data.get('url')?.value ?? '';
  }
  static {
    this.ɵfac = function IaIManageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IaIManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: IaIManageComponent,
      selectors: [["app-ia-imanage"]],
      inputs: {
        application: "application"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "ia-imanage"], [1, "tab-content", "min-h-fit-content", "container-fluid"], [1, "h-100"], [3, "blur", "field", "value"]],
      template: function IaIManageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function IaIManageComponent_Template_app_field_blur_3_listener($event) {
            return ctx.onFieldChanged("url", $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldUrl)("value", ctx.url);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent],
      styles: [".ia-imanage.min-h-fit-content[_ngcontent-%COMP%], \n.ia-imanage[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4taW50ZWdyYXRlZGFwcGxpY2F0aW9ucy9pYS1pbWFuYWdlL2lhLWltYW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsa0NBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5pYS1pbWFuYWdlIHtcclxuICAmLm1pbi1oLWZpdC1jb250ZW50LFxyXG4gIC5taW4taC1maXQtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 64486:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin-integratedapplications/ia-onedrive/ia-onedrive.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaOnedriveComponent: () => (/* binding */ IaOnedriveComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_integrated_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/integrated-application */ 86984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






class IaOnedriveComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.onClientIdChanged = value => {
      this.application.data.set('clientId', value);
    };
    this.onTenanNameChanged = value => {
      this.application.data.set('tenantName', value);
    };
  }
  ngOnInit() {
    this.fieldClientId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: this.translateService.instant('admin-integratedapplication.onedrive-clientid'),
      placeholder: this.translateService.instant('admin-integratedapplication.onedrive-clientid'),
      required: true
    });
    this.fieldTenantName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: this.translateService.instant('admin-integratedapplication.onedrive-tenantname'),
      placeholder: this.translateService.instant('admin-integratedapplication.onedrive-tenantname'),
      required: true
    });
    const mdClientId = this.application.data.get('clientId');
    this.clientId = mdClientId ? mdClientId.value : '';
    const mdTenantName = this.application.data.get('tenantName');
    this.tenantName = mdTenantName ? mdTenantName.value : '';
  }
  static {
    this.ɵfac = function IaOnedriveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IaOnedriveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: IaOnedriveComponent,
      selectors: [["app-ia-onedrive"]],
      inputs: {
        application: "application"
      },
      decls: 5,
      vars: 4,
      consts: [[1, "ia-onedrive"], [1, "tab-content", "min-h-fit-content", "container-fluid"], [1, "h-100"], [3, "blur", "field", "value"]],
      template: function IaOnedriveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function IaOnedriveComponent_Template_app_field_blur_3_listener($event) {
            return ctx.onTenanNameChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function IaOnedriveComponent_Template_app_field_blur_4_listener($event) {
            return ctx.onClientIdChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldTenantName)("value", ctx.tenantName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldClientId)("value", ctx.clientId);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent],
      styles: [".ia-onedrive.min-h-fit-content[_ngcontent-%COMP%], \n.ia-onedrive[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4taW50ZWdyYXRlZGFwcGxpY2F0aW9ucy9pYS1vbmVkcml2ZS9pYS1vbmVkcml2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxrQ0FBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmlhLW9uZWRyaXZlIHtcclxuICAmLm1pbi1oLWZpdC1jb250ZW50LFxyXG4gIC5taW4taC1maXQtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 75672:
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-integratedapplications/ia-roles/ia-roles.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaRolesComponent: () => (/* binding */ IaRolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_models_integrated_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/models/integrated-application */ 86984);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);







class IaRolesComponent {
  constructor(hydraApi) {
    this.hydraApi = hydraApi;
    this.roleIdsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.available = [];
    this.current = [];
    this.currentChanged = items => {
      this.application.roleIds = [];
      for (let item of items) {
        this.application.roleIds.push(item.id);
      }
      this.roleIdsChange.emit(this.application.roleIds);
    };
    this.loadPicklistItems = () => {
      this.hydraApi.getRoles(this.loaded, this.loadFailed);
    };
    this.loaded = roles => {
      this.available = roles;
      this.current = roles.filter(r => this.application.roleIds.find(ri => ri == r.id) != null);
    };
    this.loadFailed = () => {};
  }
  ngOnInit() {
    this.loadPicklistItems();
  }
  static {
    this.ɵfac = function IaRolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IaRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__.HydraApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: IaRolesComponent,
      selectors: [["app-ia-roles"]],
      inputs: {
        application: "application"
      },
      outputs: {
        roleIdsChange: "roleIdsChange"
      },
      decls: 2,
      vars: 6,
      consts: [[1, "max-height", 3, "currentChange", "available", "current", "displayField", "listName"]],
      template: function IaRolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dual-picklist", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentChange", function IaRolesComponent_Template_app_dual_picklist_currentChange_0_listener($event) {
            return ctx.currentChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("available", ctx.available)("current", ctx.current)("displayField", "name")("listName", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, "step-interactive.roles"));
        }
      },
      dependencies: [_Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__.DualPicklistComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-integratedapplications_admin-integratedapplications_module_ts.js.map