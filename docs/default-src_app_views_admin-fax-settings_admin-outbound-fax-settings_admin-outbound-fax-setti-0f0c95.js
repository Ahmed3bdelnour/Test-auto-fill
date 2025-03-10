"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_admin-fax-settings_admin-outbound-fax-settings_admin-outbound-fax-setti-0f0c95"],{

/***/ 72342:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/admin-outbound-advanced/admin-outbound-advanced.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOutboundAdvancedComponent: () => (/* binding */ AdminOutboundAdvancedComponent)
/* harmony export */ });
/* harmony import */ var _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/outbound */ 30888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _outbound_general_tab_outbound_general_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../outbound-general-tab/outbound-general-tab.component */ 53733);
/* harmony import */ var _outbound_fax_options_outbound_fax_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../outbound-fax-options/outbound-fax-options.component */ 44062);





const _c0 = () => ({
  wheelPropagation: true,
  suppressScrollX: true
});
class AdminOutboundAdvancedComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function AdminOutboundAdvancedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminOutboundAdvancedComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminOutboundAdvancedComponent,
      selectors: [["app-admin-outbound-advanced"]],
      inputs: {
        settings: "settings",
        supportedValues: "supportedValues",
        username: "username"
      },
      decls: 3,
      vars: 7,
      consts: [[2, "max-height", "70vh", 3, "config"], [3, "settings", "supportedValues"], [3, "settings", "supportedValues", "username"]],
      template: function AdminOutboundAdvancedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "perfect-scrollbar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-outbound-general-tab", 1)(2, "app-outbound-fax-options", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("supportedValues", ctx.supportedValues);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("supportedValues", ctx.supportedValues)("username", ctx.username);
        }
      },
      dependencies: [ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarComponent, _outbound_general_tab_outbound_general_tab_component__WEBPACK_IMPORTED_MODULE_1__.OutboundGeneralTabComponent, _outbound_fax_options_outbound_fax_options_component__WEBPACK_IMPORTED_MODULE_2__.OutboundFaxOptionsComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 88423:
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/admin-outbound-fax-settings-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOutboundFaxSettingsRoutingModule: () => (/* binding */ AdminOutboundFaxSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_outbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-outbound-fax-settings.component */ 34279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: '',
  data: {
    type: 'properties'
  },
  component: _admin_outbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_0__.AdminOutboundFaxSettingsComponent,
  pathMatch: 'full'
}, {
  path: ':username',
  data: {
    type: 'properties'
  },
  component: _admin_outbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_0__.AdminOutboundFaxSettingsComponent,
  pathMatch: 'full'
}];
class AdminOutboundFaxSettingsRoutingModule {
  static {
    this.ɵfac = function AdminOutboundFaxSettingsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminOutboundFaxSettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminOutboundFaxSettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminOutboundFaxSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 34279:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/admin-outbound-fax-settings.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOutboundFaxSettingsComponent: () => (/* binding */ AdminOutboundFaxSettingsComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/InterFAX/Models/outbound */ 30888);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/send-fax.service */ 16665);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _blocks_services_load_app_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/services/load-app-state.service */ 18959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _outbound_notification_tab_outbound_notification_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./outbound-notification-tab/outbound-notification-tab.component */ 84342);
/* harmony import */ var _outbound_smtp_tab_outbound_smtp_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./outbound-smtp-tab/outbound-smtp-tab.component */ 52622);
/* harmony import */ var _admin_outbound_advanced_admin_outbound_advanced_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-outbound-advanced/admin-outbound-advanced.component */ 72342);

































const _c0 = ["spinnerWrapper"];
function AdminOutboundFaxSettingsComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-outbound-smtp-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("settings", ctx_r1.settings);
  }
}
function AdminOutboundFaxSettingsComponent_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-outbound-notification-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("settings", ctx_r1.settings);
  }
}
function AdminOutboundFaxSettingsComponent_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-admin-outbound-advanced", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("settings", ctx_r1.settings)("supportedValues", ctx_r1.supportedValues)("username", ctx_r1.username);
  }
}
function AdminOutboundFaxSettingsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6)(1, "app-tab-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("tabSelected", function AdminOutboundFaxSettingsComponent_div_6_Template_app_tab_bar_tabSelected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.activateTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, AdminOutboundFaxSettingsComponent_div_6_div_3_Template, 2, 1, "div", 9)(4, AdminOutboundFaxSettingsComponent_div_6_div_4_Template, 2, 1, "div", 9)(5, AdminOutboundFaxSettingsComponent_div_6_div_5_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("tabs", ctx_r1.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", "general" === ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", "feedback" === ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", "advanced" === ctx_r1.activeTab);
  }
}
class AdminOutboundFaxSettingsComponent {
  constructor(translateService, interfaxService, spinnerService, toastrService, errorsService, route, location, userPreferencesService, userState, sendFaxService, alertsService, appState) {
    this.translateService = translateService;
    this.interfaxService = interfaxService;
    this.spinnerService = spinnerService;
    this.toastrService = toastrService;
    this.errorsService = errorsService;
    this.route = route;
    this.location = location;
    this.userPreferencesService = userPreferencesService;
    this.userState = userState;
    this.sendFaxService = sendFaxService;
    this.alertsService = alertsService;
    this.appState = appState;
    this.tabs = new Array();
    this.rightControls = [];
    this.activeTab = '';
    this.onSave = () => {
      this.interfaxService.updateOutboundConfiguration(this.username, this.settings, this.onSaveSucceeded, this.onFailedToSave);
      this.spinnerService.showSavingSpinner();
    };
    this.onCancel = () => {
      this.returnToPreviousPage();
    };
    this.onSaveSucceeded = results => {
      this.spinnerService.hide();
      if (!results.success) {
        this.errorsService.showErrorsModal(results.errors, 'admin-outbound-fax-settings.save-fail');
        return;
      }
      this.reloadStateIfNeeded(this.routeParams.username);
      this.originalSettings = new _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__.Outbound(this.settings);
      if (this.routeParams.username) {
        this.toastrService.success(this.translateService.instant('admin-outbound-fax-settings.save-success'));
        this.returnToPreviousPage();
        return;
      }
      this.saveSettingsAsDefault();
      this.alertsService.success(this.translateService.instant('admin-outbound-fax-settings.settings-header-text'), this.translateService.instant('admin-outbound-fax-settings.save-success-modal'), false, {
        buttonText: this.translateService.instant('Common.Close'),
        customClass: 'success-modal large-font',
        showIcon: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Icons.GreenTick
      });
    };
    this.reloadStateIfNeeded = (userName = null) => {
      if (this.originalSettings.webIntegration.notificationType == this.settings.webIntegration.notificationType) return;
      if (this.originalSettings.webIntegration.notificationType && this.settings.webIntegration.notificationType) return;
      this.appState.reloadStateIfCurrentUserIs(userName ?? this.userState.interFAXUsername, document.documentElement);
    };
    this.onFailedToSave = () => {
      this.spinnerService.hide();
      this.toastrService.error(this.translateService.instant('admin-outbound-fax-settings.save-fail'));
    };
    this.saveSettingsAsDefault = () => {
      this.userPreferencesService.setPreference(`${this.preferencePrefix}${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.NumberOfAttampts}`, this.settings.attempts);
      this.userPreferencesService.setPreference(`${this.preferencePrefix}${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PageSize}`, this.settings.defaults.pageSize);
      this.userPreferencesService.setPreference(`${this.preferencePrefix}${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PageOrientation}`, this.settings.defaults.pageOrientation);
      this.userPreferencesService.setPreference(`${this.preferencePrefix}${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Resolution}`, this.settings.defaults.pageResolution);
      let optimization = this.settings.defaults.pageRenderingQuality;
      if (optimization == 'Standard') optimization = 'BW';
      if (optimization == 'Fine') optimization = 'GrayScale';
      this.userPreferencesService.setPreference(`${this.preferencePrefix}${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RenderingOptimization}`, optimization);
      this.userPreferencesService.setPreference(`${this.preferencePrefix}${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TEXTFONTTYPE}`, this.settings.defaults.textFontType);
      this.userPreferencesService.setPreference(`${this.preferencePrefix}${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TEXTFONTSIZE}`, this.settings.defaults.textFontSize);
      this.userState.userProfile.useDefaultReplyAddress = this.settings.notification.alwaysUseDefaultReplyEmail;
    };
    this.returnToPreviousPage = () => {
      this.location.back();
    };
    this.loadFaxSettings = () => {
      this.spinnerService.show(this.translateService.instant('Common.LoadingData'), this.spinnerWrapper.nativeElement);
      this.interfaxService.getOutboundConfiguration(this.username, this.settingsLoaded, this.failedToLoadSettings);
    };
    this.settingsLoaded = i => {
      this.settings = i;
      this.originalSettings = new _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__.Outbound(i);
      this.interfaxService.getOutboundSupportedValues(this.supportedValuesLoaded, this.failedToLoadSettings);
    };
    this.supportedValuesLoaded = sv => {
      this.supportedValues = sv;
      this.spinnerService.hide();
    };
    this.failedToLoadSettings = err => {
      this.spinnerService.hide();
    };
    this.activateTab = tab => {
      this.activeTab = tab;
    };
    this.createTabs = () => {
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('general', this.translateService.instant('admin-outbound-fax-settings.tab-general')));
      if (this.userState.areOutboundNotificationsAllowed()) {
        this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('feedback', this.translateService.instant('admin-outbound-fax-settings.tab-feedback')));
      }
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('advanced', this.translateService.instant('admin-outbound-fax-settings.tab-advanced')));
    };
  }
  ngOnInit() {
    this.preferencePrefix = this.sendFaxService.preferencePrefix;
    this.createButtons();
    this.createTabs();
    this.route.params.subscribe(p => {
      this.routeParams = p;
      this.username = p.username ?? this.userState.interFAXUsername;
      this.loadFaxSettings();
    });
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onSave, this.translateService.instant('admin-tenant.save'), 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onCancel, this.translateService.instant('Common.Cancel'), 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.rightControls.push(this.saveButton);
    this.rightControls.push(this.cancelButton);
  }
  static {
    this.ɵfac = function AdminOutboundFaxSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminOutboundFaxSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_5__.SendFaxService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AlertsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_load_app_state_service__WEBPACK_IMPORTED_MODULE_8__.LoadAppStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: AdminOutboundFaxSettingsComponent,
      selectors: [["app-admin-outbound-fax-settings"]],
      viewQuery: function AdminOutboundFaxSettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.spinnerWrapper = _t.first);
        }
      },
      decls: 7,
      vars: 5,
      consts: [["spinnerWrapper", ""], ["appAutoFocusFirstInput", "", 1, "spinner-wrapper", "admin-outbound-fax-settings", "project-list-dashboard-body", "d-flex", "flex-column", "min-h-fit-content"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "min-h-fit-content", 3, "perfectScrollbar"], [1, "panel", "row", "m-0", "min-h-fit-content"], ["class", "col-12 p-0 d-flex flex-column min-h-fit-content", 4, "ngIf"], [1, "col-12", "p-0", "d-flex", "flex-column", "min-h-fit-content"], [3, "tabSelected", "tabs"], [1, "tab-content", "min-h-fit-content", "content-padding", "h-100"], ["class", "h-100", 4, "ngIf"], [1, "h-100"], [3, "settings"], [3, "settings", "supportedValues", "username"]],
      template: function AdminOutboundFaxSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-secondary-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, AdminOutboundFaxSettingsComponent_div_6_Template, 6, 4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, "admin-outbound-fax-settings.settings-header-text"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settings && ctx.supportedValues);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_9__.SecondaryHeaderComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_11__.TabBarComponent, _outbound_notification_tab_outbound_notification_tab_component__WEBPACK_IMPORTED_MODULE_12__.OutboundNotificationTabComponent, _outbound_smtp_tab_outbound_smtp_tab_component__WEBPACK_IMPORTED_MODULE_13__.OutboundSmtpTabComponent, _admin_outbound_advanced_admin_outbound_advanced_component__WEBPACK_IMPORTED_MODULE_14__.AdminOutboundAdvancedComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-outbound-fax-settings {\n  line-height: 1.4em;\n  padding-bottom: 15px;\n  height: 100%;\n}\n.admin-outbound-fax-settings.min-h-fit-content,\n.admin-outbound-fax-settings .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-outbound-fax-settings .allowed-ip-addresses-delete-button {\n  margin-left: -21px;\n  font-size: 16px;\n}\n.admin-outbound-fax-settings .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-outbound-fax-settings .secondary-header .section-header {\n  position: static !important;\n}\n.admin-outbound-fax-settings .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n  min-height: 100% !important;\n}\n.admin-outbound-fax-settings .properties-panel {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.admin-outbound-fax-settings .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-outbound-fax-settings .panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-outbound-fax-settings .panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-outbound-fax-settings .admin-outbound-fax-settings-properties table {\n  border: 1px solid #cfcfcf;\n  margin-bottom: 0;\n  height: 290px;\n}\n.admin-outbound-fax-settings .admin-outbound-fax-settings-properties table thead {\n  display: table;\n  flex: 0 0 auto;\n  table-layout: fixed;\n  width: 100%;\n}\n.admin-outbound-fax-settings .admin-outbound-fax-settings-properties table thead tr {\n  border: 1px solid #cfcfcf;\n  background-color: #f1f3f3;\n}\n.admin-outbound-fax-settings .admin-outbound-fax-settings-properties table thead tr .button-icon:focus {\n  box-shadow: none;\n}\n.admin-outbound-fax-settings .admin-outbound-fax-settings-properties table tbody {\n  display: block;\n  position: relative;\n  flex: 1 1 auto;\n  max-height: 240px;\n}\n.admin-outbound-fax-settings .admin-outbound-fax-settings-properties table tbody tr {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n.admin-outbound-fax-settings .admin-outbound-fax-settings-properties table tbody tr td .gripper {\n  height: 25px;\n  font-size: 20px;\n  z-index: 5;\n  cursor: move;\n  padding-top: 3px;\n}\n.admin-outbound-fax-settings .enable-check-box {\n  margin-bottom: 20px;\n}\n.admin-outbound-fax-settings .tab-bar .nav-tabs {\n  overflow-x: initial;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9hZG1pbi1vdXRib3VuZC1mYXgtc2V0dGluZ3MvYWRtaW4tb3V0Ym91bmQtZmF4LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTdPQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBZ1BGO0FBOU9FOztFQUVFLGtDQUFBO0FBZ1BKO0FBN09FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBK09KO0FBNU9FO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQThPSjtBQTVPSTtFQUNFLDJCQUFBO0FBOE9OO0FBMU9FO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBNE9KO0FBek9FO0VBQ0UsaUJBQUE7RUFDQSw4Q0Q2Q3NCO0VDNUN0QiwrQkFBQTtBQTJPSjtBQXhPRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBME9KO0FBdk9FO0VBQ0UseUJEMkJNO0VDMUJOLGdDQUFBO0VBQ0EsYUFBQTtBQXlPSjtBQXRPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQXdPSjtBQXBPSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBc09OO0FBcE9NO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFzT1I7QUFwT1E7RUFDRSx5QkFBQTtFQUNBLHlCREdBO0FDbU9WO0FBcE9VO0VBQ0UsZ0JBQUE7QUFzT1o7QUFqT007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFtT1I7QUFqT1E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBbU9WO0FBaE9ZO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBa09kO0FBMU5FO0VBQ0UsbUJBQUE7QUE0Tko7QUF6TkU7RUFDRSxtQkFBQTtBQTJOSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmFkbWluLW91dGJvdW5kLWZheC1zZXR0aW5ncyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJi5taW4taC1maXQtY29udGVudCxcclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbGxvd2VkLWlwLWFkZHJlc3Nlcy1kZWxldGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmFkbWluLW91dGJvdW5kLWZheC1zZXR0aW5ncy1wcm9wZXJ0aWVzIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgaGVpZ2h0OiAyOTBweDtcclxuXHJcbiAgICAgIHRoZWFkIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xyXG5cclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ7XHJcblxyXG4gICAgICAgICAgLmJ1dHRvbi1pY29uOmZvY3VzIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjQwcHg7XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgLmdyaXBwZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVuYWJsZS1jaGVjay1ib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC50YWItYmFyIC5uYXYtdGFicyB7XHJcbiAgICBvdmVyZmxvdy14OiBpbml0aWFsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 94294:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/admin-outbound-fax-settings.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOutboundFaxSettingsModule: () => (/* binding */ AdminOutboundFaxSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _admin_inbound_fax_settings_admin_inbound_fax_settings_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-inbound-fax-settings/admin-inbound-fax-settings.module */ 30406);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../blocks/page/page.module */ 13762);
/* harmony import */ var _admin_outbound_advanced_admin_outbound_advanced_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-outbound-advanced/admin-outbound-advanced.component */ 72342);
/* harmony import */ var _admin_outbound_fax_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-outbound-fax-settings-routing.module */ 88423);
/* harmony import */ var _admin_outbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-outbound-fax-settings.component */ 34279);
/* harmony import */ var _outbound_fax_options_outbound_fax_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./outbound-fax-options/outbound-fax-options.component */ 44062);
/* harmony import */ var _outbound_general_tab_outbound_general_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./outbound-general-tab/outbound-general-tab.component */ 53733);
/* harmony import */ var _outbound_notification_tab_outbound_notification_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./outbound-notification-tab/outbound-notification-tab.component */ 84342);
/* harmony import */ var _outbound_smtp_tab_outbound_smtp_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./outbound-smtp-tab/outbound-smtp-tab.component */ 52622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);

















class AdminOutboundFaxSettingsModule {
  static {
    this.ɵfac = function AdminOutboundFaxSettingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminOutboundFaxSettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AdminOutboundFaxSettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, _admin_outbound_fax_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__.AdminOutboundFaxSettingsRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, _admin_inbound_fax_settings_admin_inbound_fax_settings_module__WEBPACK_IMPORTED_MODULE_1__.AdminInboundFaxSettingsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AdminOutboundFaxSettingsModule, {
    declarations: [_admin_outbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_6__.AdminOutboundFaxSettingsComponent, _outbound_general_tab_outbound_general_tab_component__WEBPACK_IMPORTED_MODULE_8__.OutboundGeneralTabComponent, _outbound_notification_tab_outbound_notification_tab_component__WEBPACK_IMPORTED_MODULE_9__.OutboundNotificationTabComponent, _outbound_smtp_tab_outbound_smtp_tab_component__WEBPACK_IMPORTED_MODULE_10__.OutboundSmtpTabComponent, _outbound_fax_options_outbound_fax_options_component__WEBPACK_IMPORTED_MODULE_7__.OutboundFaxOptionsComponent, _admin_outbound_advanced_admin_outbound_advanced_component__WEBPACK_IMPORTED_MODULE_4__.AdminOutboundAdvancedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, _admin_outbound_fax_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__.AdminOutboundFaxSettingsRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, _admin_inbound_fax_settings_admin_inbound_fax_settings_module__WEBPACK_IMPORTED_MODULE_1__.AdminInboundFaxSettingsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule],
    exports: [_outbound_general_tab_outbound_general_tab_component__WEBPACK_IMPORTED_MODULE_8__.OutboundGeneralTabComponent, _outbound_notification_tab_outbound_notification_tab_component__WEBPACK_IMPORTED_MODULE_9__.OutboundNotificationTabComponent, _outbound_smtp_tab_outbound_smtp_tab_component__WEBPACK_IMPORTED_MODULE_10__.OutboundSmtpTabComponent, _outbound_fax_options_outbound_fax_options_component__WEBPACK_IMPORTED_MODULE_7__.OutboundFaxOptionsComponent]
  });
})();

/***/ }),

/***/ 44062:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/outbound-fax-options/outbound-fax-options.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutboundFaxOptionsComponent: () => (/* binding */ OutboundFaxOptionsComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/outbound */ 30888);
/* harmony import */ var _blocks_components_html_editor_html_editor_toolbar_editor_toolbar_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/components/html-editor/html-editor-toolbar/editor-toolbar-constants */ 2853);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/radio-buttons-group/radio-buttons-group.component */ 65965);















function OutboundFaxOptionsComponent_div_0_app_checkbox_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_app_checkbox_33_Template_app_checkbox_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.deleteAfter, $event) || (ctx_r1.settings.deleteAfter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.deleteAfter);
  }
}
function OutboundFaxOptionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settingsAttempts, $event) || (ctx_r1.settingsAttempts = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3)(5, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settingsAttemptIntervalInMinutes, $event) || (ctx_r1.settingsAttemptIntervalInMinutes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.defaults.textFontType, $event) || (ctx_r1.settings.defaults.textFontType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 3)(10, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settingsDefaultsTextFontSize, $event) || (ctx_r1.settingsDefaultsTextFontSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.defaults.textCharsetEncoding, $event) || (ctx_r1.settings.defaults.textCharsetEncoding = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 3)(15, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.defaults.pageScaling, $event) || (ctx_r1.settings.defaults.pageScaling = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.defaults.pageSize, $event) || (ctx_r1.settings.defaults.pageSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 3)(20, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.defaults.pageOrientation, $event) || (ctx_r1.settings.defaults.pageOrientation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 2)(22, "div", 3)(23, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.defaults.pageResolution, $event) || (ctx_r1.settings.defaults.pageResolution = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 3)(25, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.defaults.pageRenderingQuality, $event) || (ctx_r1.settings.defaults.pageRenderingQuality = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "app-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_field_valueChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settingsDefaultsCoverPageId, $event) || (ctx_r1.settingsDefaultsCoverPageId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 5)(30, "div", 6)(31, "app-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_checkbox_valueChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.settings.renderBackground, $event) || (ctx_r1.settings.renderBackground = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, OutboundFaxOptionsComponent_div_0_app_checkbox_33_Template, 1, 1, "app-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 5)(37, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "app-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 5)(40, "div", 6)(41, "app-radio-buttons-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function OutboundFaxOptionsComponent_div_0_Template_app_radio_buttons_group_valueChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setRejectUnsupportedFiles($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.attempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settingsAttempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.attemptIntervalMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settingsAttemptIntervalInMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.textFontType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.defaults.textFontType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.textFontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settingsDefaultsTextFontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.textCharsetEncoding);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.defaults.textCharsetEncoding);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.pageScaling);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.defaults.pageScaling);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.defaults.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.pageOrientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.defaults.pageOrientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.pageResolution);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.defaults.pageResolution);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.pageRenderingQuality);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.defaults.pageRenderingQuality);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("field", ctx_r1.coverPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settingsDefaultsCoverPageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r1.settings.renderBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.settings.isPCI);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("localize", true)("text", "admin-outbound-fax-settings.unsupported-file-handling");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.settings.rejectUnsupportedFiles)("options", ctx_r1.unsupportedFilesOptions);
  }
}
class OutboundFaxOptionsComponent {
  get settingsAttempts() {
    return `${this.settings.attempts}`;
  }
  set settingsAttempts(val) {
    this.settings.attempts = Number(val);
  }
  get settingsAttemptIntervalInMinutes() {
    return `${this.settings.attemptIntervalInMinutes}`;
  }
  set settingsAttemptIntervalInMinutes(val) {
    this.settings.attemptIntervalInMinutes = Number(val);
  }
  get settingsDefaultsTextFontSize() {
    return `${this.settings.defaults.textFontSize}`;
  }
  set settingsDefaultsTextFontSize(val) {
    this.settings.defaults.textFontSize = Number(val);
  }
  get settingsDefaultsCoverPageId() {
    return `${this.settings.defaults.coverPageId}`;
  }
  set settingsDefaultsCoverPageId(val) {
    this.settings.defaults.coverPageId = Number(val);
  }
  constructor(translateService, interFAXService, userStateService) {
    this.translateService = translateService;
    this.interFAXService = interFAXService;
    this.userStateService = userStateService;
    this.unsupportedFilesOptions = [];
    this.addOption = (options, option, translate = true) => {
      options.push({
        name: translate ? this.translateService.instant(`SendFax-Attributes-Form.Option-Value-${option}`) : option,
        value: option
      });
    };
    this.getPageSizeOptions = () => {
      const options = new Array();
      this.addOption(options, 'A4', false);
      this.addOption(options, 'B4', false);
      this.addOption(options, 'Legal', false);
      this.addOption(options, 'Letter', false);
      return options;
    };
    this.getPageOrientationOptions = () => {
      const options = new Array();
      this.addOption(options, 'Landscape');
      this.addOption(options, 'Portrait');
      return options;
    };
    this.getResolutionOptions = () => {
      const options = new Array();
      this.addOption(options, 'Fine');
      this.addOption(options, 'Standard');
      return options;
    };
    this.getPageScalingOptions = () => {
      const options = new Array();
      this.addOption(options, 'NoScale');
      this.addOption(options, 'FitToPage');
      return options;
    };
    this.getRenderingQualityOptions = () => {
      const options = new Array();
      options.push({
        name: this.translateService.instant(`SendFax-Attributes-Form.Option-Value-BW`),
        value: 'Standard'
      });
      options.push({
        name: this.translateService.instant(`SendFax-Attributes-Form.Option-Value-GrayScale`),
        value: 'Fine'
      });
      return options;
    };
    this.getFontTypeOptions = () => {
      let options = this.getStringOptions(this.supportedValues.fonts);
      options.push({
        name: 'Sans Serif',
        value: 'sans-serif'
      });
      options.push({
        name: 'Serif',
        value: 'serif'
      });
      options.push({
        name: 'Monospace',
        value: 'monospace'
      });
      options.forEach(option => {
        option.style = "font-family:'" + option.value + "';";
        option.isInputStyled = true;
      });
      options = options.sort((a, b) => a.name.localeCompare(b.name));
      return options;
    };
    this.getFontSizeOptions = () => {
      const options = _blocks_components_html_editor_html_editor_toolbar_editor_toolbar_constants__WEBPACK_IMPORTED_MODULE_2__.FontSizes.legacySizes.map((fontSize, index) => ({
        name: fontSize.key,
        value: `${index + 1}`,
        style: `font-size: ${fontSize.value};`
      }));
      return options;
    };
    this.getStringOptions = strings => {
      const options = new Array();
      for (const ce of strings) {
        options.push({
          name: ce,
          value: ce
        });
      }
      return options;
    };
    this.setRejectUnsupportedFiles = value => {
      this.rejectUnsupportedFiles = this.settings.rejectUnsupportedFiles = value;
    };
    this.createFields = () => {
      const textCharsetEncodingDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getStringOptions(this.supportedValues.charsetEncodings));
      const textFontTypeDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getFontTypeOptions(), true);
      const textFontSizeDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getFontSizeOptions());
      const pageSizeDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getPageSizeOptions(), true);
      const pageOrientationDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getPageOrientationOptions(), true);
      const pageResolutionDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getResolutionOptions(), true);
      const pageRenderingQualityDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getRenderingQualityOptions(), true);
      const pageScalingDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getPageScalingOptions(), true);
      const coverPageDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPagesDataSource(this.interFAXService, this.translateService, this.username);
      this.attempts = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-outbound-fax-options.attempts'),
        placeholder: this.translateService.instant('admin-outbound-fax-options.attempts-placeholder'),
        required: true,
        allowNegativeNumbers: false
      });
      this.attemptIntervalMinutes = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-outbound-fax-options.attemptIntervalMinutes'),
        placeholder: this.translateService.instant('admin-outbound-fax-options.attemptIntervalMinutes-placeholder'),
        required: true,
        allowNegativeNumbers: false
      });
      this.textCharsetEncoding = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.textCharsetEncoding'),
        placeholder: '',
        required: true,
        datasource: textCharsetEncodingDataSource
      });
      this.textFontType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.textFontType'),
        placeholder: '',
        required: true,
        datasource: textFontTypeDataSource
      });
      this.textFontSize = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.textFontSize'),
        placeholder: '',
        required: true,
        datasource: textFontSizeDataSource
      });
      this.pageSize = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.pageSize'),
        placeholder: '',
        required: true,
        datasource: pageSizeDataSource
      });
      this.pageOrientation = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.pageOrientation'),
        placeholder: '',
        required: true,
        datasource: pageOrientationDataSource
      });
      this.pageResolution = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.pageResolution'),
        placeholder: '',
        required: true,
        datasource: pageResolutionDataSource
      });
      this.pageRenderingQuality = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.pageRenderingQuality'),
        placeholder: '',
        required: true,
        datasource: pageRenderingQualityDataSource
      });
      this.pageScaling = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.pageScaling'),
        placeholder: '',
        required: true,
        datasource: pageScalingDataSource
      });
      this.coverPage = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-options.cover-page'),
        placeholder: this.translateService.instant('admin-outbound-fax-options.cover-page'),
        datasource: coverPageDataSource,
        defaultValue: '0'
      });
    };
  }
  ngOnInit() {
    this.createFields();
    this.rejectUnsupportedFiles = this.settings.rejectUnsupportedFiles;
    this.unsupportedFilesOptions = [{
      label: this.translateService.instant('admin-outbound-fax-settings.accept-messages-reject-unsupported-attachments'),
      value: false
    }, {
      label: this.translateService.instant('admin-outbound-fax-settings.reject-unsupported-attachments'),
      value: true
    }];
  }
  static {
    this.ɵfac = function OutboundFaxOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OutboundFaxOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: OutboundFaxOptionsComponent,
      selectors: [["app-outbound-fax-options"]],
      inputs: {
        settings: "settings",
        supportedValues: "supportedValues",
        username: "username"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "fax-options-tab d-flex flex-column", 4, "ngIf"], [1, "fax-options-tab", "d-flex", "flex-column"], [1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"], [1, "row", "indent"], [1, "col-12"], ["label", "admin-outbound-fax-settings.render-background", 3, "valueChange", "value"], ["label", "admin-outbound-fax-settings.delete-after", 3, "value", "valueChange", 4, "ngIf"], [3, "localize", "text"], ["groupName", "accept-or-reject-unsupported-attachments", 3, "valueChange", "value", "options"], ["label", "admin-outbound-fax-settings.delete-after", 3, "valueChange", "value"]],
      template: function OutboundFaxOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, OutboundFaxOptionsComponent_div_0_Template, 42, 28, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.settings && ctx.settings.defaults);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__.CheckboxComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_7__.LabelComponent, _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_8__.RadioButtonsGroupComponent],
      styles: [".fax-options-tab {\n  width: 99%;\n}\n.fax-options-tab .indent {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.fax-options-tab input[type=radio] {\n  cursor: pointer;\n  accent-color: var(--brand-primary-color);\n}\n.fax-options-tab .radio-button-label {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLW91dGJvdW5kLWZheC1zZXR0aW5ncy9vdXRib3VuZC1mYXgtb3B0aW9ucy9vdXRib3VuZC1mYXgtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7QUFDSjtBQUVFO0VBQ0UsMEJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5mYXgtb3B0aW9ucy10YWIge1xyXG4gIHdpZHRoOiA5OSU7XHJcbiAgLmluZGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWJ1dHRvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 53733:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/outbound-general-tab/outbound-general-tab.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutboundGeneralTabComponent: () => (/* binding */ OutboundGeneralTabComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/outbound */ 30888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);











function OutboundGeneralTabComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OutboundGeneralTabComponent_a_22_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onClick($event));
    })("dragstart", function OutboundGeneralTabComponent_a_22_Template_a_dragstart_0_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onDragStart($event, item_r4));
    })("dragend", function OutboundGeneralTabComponent_a_22_Template_a_dragend_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onDragEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4, " ");
  }
}
function OutboundGeneralTabComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OutboundGeneralTabComponent_a_24_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onClick($event));
    })("dragstart", function OutboundGeneralTabComponent_a_24_Template_a_dragstart_0_listener($event) {
      const format_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onDragStart($event, format_r6));
    })("dragend", function OutboundGeneralTabComponent_a_24_Template_a_dragend_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onDragEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const format_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", format_r6, " ");
  }
}
function OutboundGeneralTabComponent_a_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OutboundGeneralTabComponent_a_26_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onClick($event));
    })("dragstart", function OutboundGeneralTabComponent_a_26_Template_a_dragstart_0_listener($event) {
      const format_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onDragStart($event, format_r8));
    })("dragend", function OutboundGeneralTabComponent_a_26_Template_a_dragend_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onDragEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const format_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", format_r8, " ");
  }
}
class OutboundGeneralTabComponent {
  constructor(translateService, ngxSmartModalService) {
    this.translateService = translateService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.mainItems = ['{to} ', '{from} ', '{totalpages} ', '{pagenumber} '];
    this.dateFormats = ['{datedd/mm/yy} ', '{datedd/mm/yyyy} ', '{datemm/dd/yyyy} ', '{dateyyyy/mm/dd} ', '{datelong} '];
    this.timeFormats = ['{timehhmmss} ', '{timehhmm} ', '{timehhmmsstt} '];
    this.onTextdrop = p => {};
    this.createFields = () => {
      const options = _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__.Countries.getAsFieldOptions(this.supportedValues.countries, this.translateService);
      const countryDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
      this.faxHeader = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-outbound-fax-settings.fax-header'),
        placeholder: this.translateService.instant('admin-outbound-fax-settings.fax-header-placeholder'),
        required: false
      });
      this.defaultDialCountry = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-settings.default-dial-country'),
        placeholder: this.translateService.instant('admin-outbound-fax-settings.default-dial-country-placeholder'),
        required: false,
        datasource: countryDataSource
      });
      this.defaultDialAreaCode = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-outbound-fax-settings.default-dial-areacode'),
        placeholder: this.translateService.instant('admin-outbound-fax-settings.default-dial-areacode-placeholder'),
        required: false
      });
    };
    this.onCancel = () => {
      this.closeModal();
    };
  }
  ngOnInit() {
    this.createFields();
    this.direction = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Languages.getDirection();
  }
  addFaxHeader() {
    this.faxheader = this.settings.faxHeader;
    this.ngxSmartModalService.getModal('addFaxHeaderModal').open();
  }
  onDragStart(event, data) {
    event.dataTransfer.setData('text/plain', data);
  }
  onDragEnd() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      // IE?
      document.selection.empty();
    }
  }
  onClick(event) {
    event.preventDefault();
  }
  onSaveFaxHeader() {
    this.settings.faxHeader = this.faxheader;
    this.faxheader = '';
    this.closeModal();
  }
  closeModal() {
    this.ngxSmartModalService.getModal('addFaxHeaderModal').close();
  }
  static {
    this.ɵfac = function OutboundGeneralTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OutboundGeneralTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__.NgxSmartModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: OutboundGeneralTabComponent,
      selectors: [["app-outbound-general-tab"]],
      inputs: {
        settings: "settings",
        supportedValues: "supportedValues"
      },
      decls: 34,
      vars: 30,
      consts: [["addFaxHeaderModal", ""], [1, "d-flex", "align-items-center", "row"], [1, "col-6"], [3, "valueChange", "field", "value"], [1, "button-icon", "d-flex", "add-button", 3, "click", "title"], [1, "fas", "fa-edit", "fax-header-editor-button"], [1, "row"], ["identifier", "addFaxHeaderModal", 3, "closable", "escapable", "dismissable", "customClass"], [3, "title", "closeIconHandler"], [1, "general-tab-modal", "modal-body"], [1, "input-group", "mb-2"], ["type", "text", "name", "fax-header", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex"], [1, "d-flex", "flex-column", "col", "px-1"], ["class", "header-drag-item pl-2", "draggable", "true", 3, "click", "dragstart", "dragend", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "btn", "btn-default", "btn-minwidth", 3, "click"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click"], ["draggable", "true", 1, "header-drag-item", "pl-2", 3, "click", "dragstart", "dragend"], [1, "icomoon-grip-small"]],
      template: function OutboundGeneralTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function OutboundGeneralTabComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.faxHeader, $event) || (ctx.settings.faxHeader = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OutboundGeneralTabComponent_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addFaxHeader());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "div", 2)(9, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function OutboundGeneralTabComponent_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.defaults.countryCode, $event) || (ctx.settings.defaults.countryCode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 2)(12, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function OutboundGeneralTabComponent_Template_app_field_valueChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.defaults.areaCode, $event) || (ctx.settings.defaults.areaCode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ngx-smart-modal", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-modal-header", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9)(18, "div", 10)(19, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function OutboundGeneralTabComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.faxheader, $event) || (ctx.faxheader = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12)(21, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, OutboundGeneralTabComponent_a_22_Template, 3, 1, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, OutboundGeneralTabComponent_a_24_Template, 3, 1, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, OutboundGeneralTabComponent_a_26_Template, 3, 1, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15)(28, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OutboundGeneralTabComponent_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onCancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OutboundGeneralTabComponent_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSaveFaxHeader());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("general-tab d-flex flex-column ", ctx.direction, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.faxHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.settings.faxHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 22, "admin-outbound-fax-settings.edit-header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.defaultDialCountry);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.settings.defaults.countryCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.defaultDialAreaCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.settings.defaults.areaCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false)("customClass", "modal-content modal-lg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 24, "admin-outbound-fax-settings.edit-header"))("closeIconHandler", ctx.onCancel);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.faxheader);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.mainItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dateFormats);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.timeFormats);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 26, "Common.Cancel"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 28, "App.OK"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.ModalHeaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.general-tab .add-button,\n.general-tab-modal .add-button {\n  position: relative;\n  right: 12px;\n  bottom: -10px;\n  margin-left: -37px;\n  padding: 0px;\n}\n.general-tab .fax-header-editor-button,\n.general-tab-modal .fax-header-editor-button {\n  color: #6b7786;\n  font-size: 20px;\n  font-weight: 400;\n}\n.general-tab .header-drag-item,\n.general-tab-modal .header-drag-item {\n  cursor: grab;\n}\n.general-tab a,\n.general-tab-modal a {\n  display: block;\n  padding: 5px 3px;\n  background: #f1f3f3;\n  border: 1px solid #bfc6ce;\n  margin: 5px;\n}\n.general-tab a i,\n.general-tab-modal a i {\n  font-size: 18px;\n  margin-right: 3px;\n  cursor: grab;\n}\n.general-tab a i:active,\n.general-tab-modal a i:active {\n  cursor: grabbing;\n}\n.general-tab.rtl .add-button,\n.general-tab-modal.rtl .add-button {\n  right: initial;\n  left: 18px;\n  margin-left: initial;\n  margin-right: -35px;\n}\n\n.modal-lg {\n  max-width: 800px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9hZG1pbi1vdXRib3VuZC1mYXgtc2V0dGluZ3Mvb3V0Ym91bmQtZ2VuZXJhbC10YWIvb3V0Ym91bmQtZ2VuZXJhbC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBNU9FOztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFnUEo7QUE3T0U7O0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWdQSjtBQTdPRTs7RUFDRSxZQUFBO0FBZ1BKO0FBN09FOztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CRGdETTtFQy9DTix5QkFBQTtFQUNBLFdBQUE7QUFnUEo7QUE5T0k7O0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQWlQTjtBQS9PTTs7RUFDRSxnQkFBQTtBQWtQUjtBQTVPSTs7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUErT047O0FBMU9BO0VBQ0UsMkJBQUE7QUE2T0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuLmdlbmVyYWwtdGFiLFxyXG4uZ2VuZXJhbC10YWItbW9kYWwge1xyXG4gIC5hZGQtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzdweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIC5mYXgtaGVhZGVyLWVkaXRvci1idXR0b24ge1xyXG4gICAgY29sb3I6ICM2Yjc3ODY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1kcmFnLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICBjdXJzb3I6IGdyYWI7XHJcblxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5ydGwge1xyXG4gICAgLmFkZC1idXR0b24ge1xyXG4gICAgICByaWdodDogaW5pdGlhbDtcclxuICAgICAgbGVmdDogMThweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtbGcge1xyXG4gIG1heC13aWR0aDogODAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 84342:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/outbound-notification-tab/outbound-notification-tab.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutboundNotificationTabComponent: () => (/* binding */ OutboundNotificationTabComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/outbound */ 30888);
/* harmony import */ var _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/webintegration */ 6900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);









class OutboundNotificationTabComponent {
  get notificationNotificationType() {
    return `${this.settings.notification.notificationType}`;
  }
  set notificationNotificationType(val) {
    this.settings.notification.notificationType = Number(val);
  }
  get notificationFormat() {
    return `${this.settings.notification.format}`;
  }
  set notificationFormat(val) {
    this.settings.notification.format = Number(val);
  }
  get webIntegrationNotificationType() {
    return `${this.settings.webIntegration.notificationType}`;
  }
  set webIntegrationNotificationType(val) {
    this.settings.webIntegration.notificationType = Number(val);
  }
  get webIntegrationWebIntegrationType() {
    return `${this.settings.webIntegration.webIntegrationType}`;
  }
  set webIntegrationWebIntegrationType(val) {
    this.settings.webIntegration.webIntegrationType = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.createFields = () => {
      this.deliveryStatus = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-settings.delivery-status'),
        placeholder: '',
        required: true,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__.NotificationType, 'NotificationTypeEnum', this.translateService)
      });
      this.deliveryFormat = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-settings.delivery-format'),
        placeholder: '',
        required: true,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__.Format, 'FormatEnum', this.translateService)
      });
      this.defaultReplyEmail = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-outbound-fax-settings.reply-email'),
        placeholder: this.translateService.instant('admin-outbound-fax-settings.reply-email-placeholder'),
        required: false
      });
      this.webServiceType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-settings.web-service-type'),
        placeholder: '',
        required: true,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__.NotificationType, 'NotificationTypeEnum', this.translateService)
      });
      this.webServiceMethod = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-outbound-fax-settings.web-service-method'),
        placeholder: '',
        required: true,
        datasource: this.webIntegrationTypesDataSource()
      });
      this.webServiceUrl = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-outbound-fax-settings.web-service-url'),
        placeholder: this.translateService.instant('admin-outbound-fax-settings.web-service-url-placeholder'),
        required: true
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  webIntegrationTypesDataSource() {
    return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource([{
      name: this.translateService.instant('WebIntegrationTypeEnum.HTTPPost'),
      value: _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_2__.WebIntegrationType.HTTPPost.toString()
    }, {
      name: this.translateService.instant('WebIntegrationTypeEnum.XMLWebService'),
      value: _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_2__.WebIntegrationType.XMLWebService.toString()
    }]);
  }
  static {
    this.ɵfac = function OutboundNotificationTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OutboundNotificationTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: OutboundNotificationTabComponent,
      selectors: [["app-outbound-notification-tab"]],
      inputs: {
        settings: "settings"
      },
      decls: 26,
      vars: 20,
      consts: [[1, "d-flex", "flex-column"], [1, "section"], [1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"], [3, "valueChange", "field", "value", "disabled"], ["text", ""], ["label", "admin-outbound-fax-settings.reply-email-use-always", 3, "valueChange", "value", "disabled"], [1, "col-12"], ["label", "admin-outbound-fax-settings.notification-include-attachment", 3, "valueChange", "value", "disabled"]],
      template: function OutboundNotificationTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_field_valueChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.notificationNotificationType, $event) || (ctx.notificationNotificationType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_field_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.notificationFormat, $event) || (ctx.notificationFormat = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.settings.notification.defaultReplyEmail, $event) || (ctx.settings.notification.defaultReplyEmail = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "app-checkbox", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_checkbox_valueChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.settings.notification.alwaysUseDefaultReplyEmail, $event) || (ctx.settings.notification.alwaysUseDefaultReplyEmail = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 2)(14, "div", 8)(15, "app-checkbox", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_checkbox_valueChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.settings.notification.includeAttachment, $event) || (ctx.settings.notification.includeAttachment = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 1)(17, "div", 2)(18, "div", 3)(19, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_field_valueChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.webIntegrationNotificationType, $event) || (ctx.webIntegrationNotificationType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_field_valueChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.webIntegrationWebIntegrationType, $event) || (ctx.webIntegrationWebIntegrationType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 2)(24, "div", 3)(25, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function OutboundNotificationTabComponent_Template_app_field_valueChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.settings.webIntegration.url, $event) || (ctx.settings.webIntegration.url = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.deliveryStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.notificationNotificationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.deliveryFormat);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.notificationFormat);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.settings.notification.notificationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.defaultReplyEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.settings.notification.defaultReplyEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.settings.notification.notificationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.settings.notification.alwaysUseDefaultReplyEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.settings.notification.notificationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.settings.notification.includeAttachment);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.settings.notification.notificationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.webServiceType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.webIntegrationNotificationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.webServiceMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.webIntegrationWebIntegrationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.settings.webIntegration.notificationType);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.webServiceUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.settings.webIntegration.url);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.settings.webIntegration.notificationType);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__.LabelComponent],
      styles: [".section[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  padding: 10px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLW91dGJvdW5kLWZheC1zZXR0aW5ncy9vdXRib3VuZC1ub3RpZmljYXRpb24tdGFiL291dGJvdW5kLW5vdGlmaWNhdGlvbi10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 52622:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-outbound-fax-settings/outbound-smtp-tab/outbound-smtp-tab.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutboundSmtpTabComponent: () => (/* binding */ OutboundSmtpTabComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_outbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/outbound */ 30888);
/* harmony import */ var _blocks_core_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/core/email */ 38061);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _admin_inbound_fax_settings_fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../admin-inbound-fax-settings/fax-settings-table/fax-settings-table.component */ 92231);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);

























const _c0 = a0 => [a0];
function OutboundSmtpTabComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "app-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 7)(5, "div", 5)(6, "app-fax-settings-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onAdd", function OutboundSmtpTabComponent_div_1_Template_app_fax_settings_table_onAdd_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.onAddAllowedSender());
    })("onDelete", function OutboundSmtpTabComponent_div_1_Template_app_fax_settings_table_onDelete_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.onDeleteAllowedSender($event));
    })("onProperties", function OutboundSmtpTabComponent_div_1_Template_app_fax_settings_table_onProperties_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.onPropertiesAllowedSender($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 7)(8, "div", 5)(9, "app-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function OutboundSmtpTabComponent_div_1_Template_app_checkbox_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r2.settings.includeMessage, $event) || (ctx_r2.settings.includeMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("localize", true)("text", "admin-outbound-fax-settings.allowed-senders-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("items", ctx_r2.allowedSendersItems)("columns", ctx_r2.allowedSendersColumns)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](7, _c0, ctx_r2.allowedSendersSort))("preferencesKey", "outbound-fax-settings-smtp-allowed-senders");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r2.settings.includeMessage);
  }
}
function OutboundSmtpTabComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 4)(3, "div", 5)(4, "app-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function OutboundSmtpTabComponent_div_31_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r2.allowedSenderEmail, $event) || (ctx_r2.allowedSenderEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("return", function OutboundSmtpTabComponent_div_31_Template_app_field_return_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.onSaveAllowedSenderModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r2.fieldAllowedSenderEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r2.allowedSenderEmail);
  }
}
function OutboundSmtpTabComponent_div_43_app_errors_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-errors", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("errors", ctx_r2.sendCertificateErrors);
  }
}
function OutboundSmtpTabComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, OutboundSmtpTabComponent_div_43_app_errors_4_Template, 1, 1, "app-errors", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "app-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function OutboundSmtpTabComponent_div_43_Template_app_field_valueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r2.sendCertificateTo, $event) || (ctx_r2.sendCertificateTo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("return", function OutboundSmtpTabComponent_div_43_Template_app_field_return_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.onApplySendCertificateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.sendCertificateErrors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r2.fieldSendCertificateTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r2.sendCertificateTo);
  }
}
class Item {}
class OutboundSmtpTabComponent {
  constructor(translateService, ngxSmartModalService, interfaxApi, spinnerService, toastrService, userStateService) {
    this.translateService = translateService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.interfaxApi = interfaxApi;
    this.spinnerService = spinnerService;
    this.toastrService = toastrService;
    this.userStateService = userStateService;
    this.allowedSendersItems = [];
    this.showAllowedSenderModal = false;
    this.showSendCertificateModal = false;
    this.sendCertificateErrors = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
    this.onAddAllowedSender = () => {
      this.allowedSenderEmail = '';
      this.emailItem = null;
      this.showAllowedSenderModal = true;
      this.allowedSenderModalInstance.open();
    };
    this.onDeleteAllowedSender = item => {
      this.settings.smtp.allowedSenders = this.settings.smtp.allowedSenders.filter(as => as != item.email);
      this.allowedSendersItems = this.settings.smtp.allowedSenders.map(e => this.createTableItem(e));
    };
    this.onPropertiesAllowedSender = item => {
      this.allowedSenderEmail = item.email;
      this.emailItem = item;
      this.showAllowedSenderModal = true;
      this.allowedSenderModalInstance.open();
    };
    this.onSaveAllowedSenderModal = () => {
      if (!this.allowedSenderEmailValid()) return;
      if (this.emailItem != null) {
        this.settings.smtp.allowedSenders = this.settings.smtp.allowedSenders.filter(as => as != this.emailItem.email);
      }
      if (shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Strings.isEmpty(this.allowedSenderEmail)) return;
      if (this.settings.smtp.allowedSenders.find(x => x.toLowerCase() === this.allowedSenderEmail.toLowerCase())) {
        this.toastrService.error(this.translateService.instant('admin-outbound-fax-settings.email-exists'));
        return;
      }
      this.spinnerService.show(this.translateService.instant('admin-outbound-fax-settings.validating-allowed-sender'), document.documentElement);
      this.interfaxApi.ValidateAllowedSender(this.allowedSenderEmail, this.ValidateAllowedSenderSuccess, this.ValidateAllowedSenderFailure);
    };
    this.ValidateAllowedSenderSuccess = result => {
      this.spinnerService.hide();
      if (!result.success) {
        this.toastrService.error(result.errors[0]);
        return;
      }
      this.settings.smtp.allowedSenders.push(this.allowedSenderEmail);
      this.allowedSendersItems = this.settings.smtp.allowedSenders.map(e => this.createTableItem(e));
      this.onCloseAllowedSenderModal();
    };
    this.ValidateAllowedSenderFailure = () => {
      this.spinnerService.hide();
      this.toastrService.error(this.translateService.instant('admin-outbound-fax-settings.failed-to-validate-allowed-sender'));
    };
    this.onCloseAllowedSenderModal = () => {
      this.allowedSenderModalInstance.close();
      this.showAllowedSenderModal = false;
    };
    this.onSendCertificate = () => {
      this.showSendCertificateModal = true;
      this.sendCertificateErrors = [];
      this.sendCertificateTo = this.settings.smtp.allowedSenders.join(', ');
      if (this.settings.smtp.allowedSenders.length) this.sendCertificateTo = this.sendCertificateTo + ', ';
      this.sendCertificateModalInstance.open();
    };
    this.onCloseSendCertificateModal = () => {
      this.sendCertificateModalInstance.close();
      this.showSendCertificateModal = false;
    };
    this.onApplySendCertificateModal = () => {
      this.spinnerService.show(this.translateService.instant('admin-outbound-fax-settings.sending-certificate'), document.documentElement);
      this.interfaxApi.sendCertificateTo(this.sendCertificateTo, this.certificateSentSuccessfully, this.certificateSendFailed);
    };
    this.certificateSentSuccessfully = () => {
      this.spinnerService.hide();
      this.toastrService.success(this.translateService.instant('admin-outbound-fax-settings.sending-certificate-succeeded'));
      this.onCloseSendCertificateModal();
    };
    this.certificateSendFailed = errors => {
      this.spinnerService.hide();
      this.sendCertificateErrors = errors;
    };
    this.createFields = () => {
      this.fieldAllowedSenderEmail = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-outbound-fax-settings.allowed-sender-email'),
        placeholder: this.translateService.instant('admin-outbound-fax-settings.allowed-sender-email-placeholder'),
        required: false
      });
      this.fieldSendCertificateTo = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-outbound-fax-settings.send-certificate-to'),
        placeholder: this.translateService.instant('admin-outbound-fax-settings.send-certificate-to-placeholder'),
        required: false
      });
    };
    this.allowedSenderEmailValid = () => {
      return this.allowedSenderEmail?.indexOf('*') === -1 && _blocks_core_email__WEBPACK_IMPORTED_MODULE_2__.Email.isValid(this.allowedSenderEmail);
    };
  }
  ngOnInit() {
    this.allowedSendersColumns = this.getColumns();
    this.createFields();
    this.allowedSendersSort = {
      field: '1',
      dir: 'asc'
    };
    this.allowedSendersItems = this.settings.smtp.allowedSenders.map(e => this.createTableItem(e));
    this.allowEmailNotifications = this.userStateService.areOutboundNotificationsAllowed();
  }
  ngAfterViewInit() {
    this.allowedSenderModalInstance = this.ngxSmartModalService.getModal('allowedSenderModal');
    if (!this.allowedSenderModalInstance) throw new Error('Failed to initialize: allowedSenderModalInstance');
    this.subscriptions.add(this.allowedSenderModalInstance.onClose.subscribe(() => this.showAllowedSenderModal = false));
    this.sendCertificateModalInstance = this.ngxSmartModalService.getModal('sendCertificateModal');
    if (!this.sendCertificateModalInstance) throw new Error('Failed to initialize: sendCertificateModal');
    this.subscriptions.add(this.sendCertificateModalInstance.onClose.subscribe(() => this.showSendCertificateModal = false));
  }
  createTableItem(email) {
    const item = new Item();
    item.email = email;
    item.icon = 'fa-envelope fa-lg';
    const tableItem = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(item, this.allowedSendersColumns, this.translateService);
    tableItem.data.defaultAction = {
      name: this.translateService.instant('admin-outbound-fax-settings.properties')
    };
    return tableItem;
  }
  getColumns() {
    const columns = [];
    columns.push(this.createColumn('type', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.FontAwesome, '', 32, 'icon', false));
    columns.push(this.createColumn('email', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.ActionLink, this.translateService.instant('admin-outbound-fax-settings.column-email'), 200, 'email', true));
    return columns;
  }
  createColumn(id, displayType, columnName, width, itemProperty, stretch) {
    return {
      id: 'column_' + id,
      width: width,
      stretch: stretch,
      displayType: displayType,
      headerImage: '',
      headerText: columnName,
      itemProperty: itemProperty,
      columnName: columnName,
      sortable: false,
      sortByFieldName: '',
      invertBooleanValue: false
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function OutboundSmtpTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OutboundSmtpTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: OutboundSmtpTabComponent,
      selectors: [["app-outbound-smtp-tab"]],
      inputs: {
        settings: "settings"
      },
      decls: 51,
      vars: 45,
      consts: [["allowedSenderModal", ""], ["sendCertificateModal", ""], [1, "d-flex", "flex-column", "outbound-smtp-tab"], [4, "ngIf"], [1, "row"], [1, "col-12"], [3, "localize", "text"], [1, "row", "indent"], ["label", "admin-outbound-fax-settings.authenticate-by-smime", 3, "valueChange", "value"], ["label", "admin-outbound-fax-settings.authenticate-by-password", 3, "valueChange", "value"], [1, "row", "indent", 2, "padding-bottom", "10px"], [1, "link", 3, "click"], ["identifier", "allowedSenderModal", 3, "closable", "escapable", "dismissable"], [3, "title", "closeIconHandler"], ["class", "modal-body", "appAutoFocusFirstInput", "", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-light", "btn-minwidth", 3, "click"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click", "disabled"], ["identifier", "sendCertificateModal", 3, "closable", "escapable", "dismissable"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click"], [3, "onAdd", "onDelete", "onProperties", "items", "columns", "sort", "preferencesKey"], ["label", "admin-outbound-fax-settings.include-message", 3, "valueChange", "value"], ["appAutoFocusFirstInput", "", 1, "modal-body"], [1, "d-flex", "flex-column"], [3, "valueChange", "return", "field", "value"], [3, "errors", 4, "ngIf"], [3, "errors"]],
      template: function OutboundSmtpTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, OutboundSmtpTabComponent_div_1_Template, 10, 9, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "app-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 7)(8, "div", 5)(9, "app-checkbox", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function OutboundSmtpTabComponent_Template_app_checkbox_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.settings.smtp.authenticateBySMIME, $event) || (ctx.settings.smtp.authenticateBySMIME = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 7)(11, "div", 5)(12, "app-checkbox", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function OutboundSmtpTabComponent_Template_app_checkbox_valueChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.settings.smtp.authenticateByPassword, $event) || (ctx.settings.smtp.authenticateByPassword = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 4)(16, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 10)(19, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OutboundSmtpTabComponent_Template_span_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onSendCertificate());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ngx-smart-modal", 12, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "app-modal-header", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, OutboundSmtpTabComponent_div_31_Template, 5, 2, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 15)(33, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OutboundSmtpTabComponent_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onCloseAllowedSenderModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OutboundSmtpTabComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onSaveAllowedSenderModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "ngx-smart-modal", 18, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](41, "app-modal-header", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, OutboundSmtpTabComponent_div_43_Template, 8, 3, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 15)(45, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OutboundSmtpTabComponent_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onCloseSendCertificateModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OutboundSmtpTabComponent_Template_button_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onApplySendCertificateModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.allowEmailNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("localize", true)("text", "admin-outbound-fax-settings.authenticate-sender");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx.settings.smtp.authenticateBySMIME);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx.settings.smtp.authenticateByPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("localize", true)("text", "admin-outbound-fax-settings.encrypting-to-interfax");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](21, 27, "admin-outbound-fax-settings.encryption-to-click"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](24, 29, "admin-outbound-fax-settings.encryption-to-action"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](26, 31, "admin-outbound-fax-settings.encryption-to-sentence"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](30, 33, ctx.emailItem ? "admin-outbound-fax-settings.allowed-sender-title" : "admin-outbound-fax-settings.add-allowed-sender"))("closeIconHandler", ctx.onCloseAllowedSenderModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showAllowedSenderModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](35, 35, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx.allowedSenderEmailValid());
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](38, 37, "MainHeader.OK"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](42, 39, "admin-outbound-fax-settings.send-certificate-title"))("closeIconHandler", ctx.onCloseSendCertificateModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showSendCertificateModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](47, 41, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](50, 43, "admin-outbound-fax-settings.send-button"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__.ErrorsComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_8__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__.CheckboxComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__.ModalHeaderComponent, _admin_inbound_fax_settings_fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_11__.FaxSettingsTableComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_12__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
      styles: [".outbound-smtp-tab .indent {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.outbound-smtp-tab .link {\n  cursor: pointer;\n  color: darkblue;\n}\n.outbound-smtp-tab .fax-settings-table .row {\n  overflow-x: initial;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLW91dGJvdW5kLWZheC1zZXR0aW5ncy9vdXRib3VuZC1zbXRwLXRhYi9vdXRib3VuZC1zbXRwLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRib3VuZC1zbXRwLXRhYiB7XHJcbiAgLmluZGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGRhcmtibHVlO1xyXG4gIH1cclxuXHJcbiAgLmZheC1zZXR0aW5ncy10YWJsZSAucm93IHtcclxuICAgIG92ZXJmbG93LXg6IGluaXRpYWw7XHJcbiAgfSBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_admin-fax-settings_admin-outbound-fax-settings_admin-outbound-fax-setti-0f0c95.js.map