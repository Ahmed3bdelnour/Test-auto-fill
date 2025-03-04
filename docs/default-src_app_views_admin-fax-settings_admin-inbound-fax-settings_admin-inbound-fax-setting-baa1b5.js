"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_admin-fax-settings_admin-inbound-fax-settings_admin-inbound-fax-setting-baa1b5"],{

/***/ 75383:
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/admin-inbound-fax-settings-routing.module.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminInboundFaxSettingsRoutingModule: () => (/* binding */ AdminInboundFaxSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_inbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-inbound-fax-settings.component */ 35831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: '',
  data: {
    type: 'properties'
  },
  component: _admin_inbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_0__.AdminInboundFaxSettingsComponent,
  pathMatch: 'full'
}, {
  path: ':username',
  data: {
    type: 'properties'
  },
  component: _admin_inbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_0__.AdminInboundFaxSettingsComponent,
  pathMatch: 'full'
}];
class AdminInboundFaxSettingsRoutingModule {
  static {
    this.ɵfac = function AdminInboundFaxSettingsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminInboundFaxSettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminInboundFaxSettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminInboundFaxSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 35831:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/admin-inbound-fax-settings.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminInboundFaxSettingsComponent: () => (/* binding */ AdminInboundFaxSettingsComponent)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _inbound_general_inbound_general_fax_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inbound-general/inbound-general-fax-settings.component */ 7855);
/* harmony import */ var _inbound_advanced_fax_settings_inbound_advanced_fax_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inbound-advanced-fax-settings/inbound-advanced-fax-settings.component */ 92845);
/* harmony import */ var _inbound_barcodes_settings_inbound_barcodes_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inbound-barcodes-settings/inbound-barcodes-settings.component */ 41369);































const _c0 = ["spinnerWrapper"];
const _c1 = () => ({
  suppressScrollX: true
});
function AdminInboundFaxSettingsComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-inbound-general-fax-settings", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inboundFaxSettings", ctx_r1.settings);
  }
}
function AdminInboundFaxSettingsComponent_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-inbound-advanced-fax-settings", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inboundFaxSettings", ctx_r1.settings)("contactLists", ctx_r1.contactLists)("selectedUser", ctx_r1.selectedUser);
  }
}
function AdminInboundFaxSettingsComponent_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-inbound-barcodes-settings", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inboundBarcodes", ctx_r1.settings == null ? null : ctx_r1.settings.inboundBarcodes);
  }
}
function AdminInboundFaxSettingsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "app-tab-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("tabSelected", function AdminInboundFaxSettingsComponent_div_6_Template_app_tab_bar_tabSelected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.activateTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, AdminInboundFaxSettingsComponent_div_6_div_3_Template, 2, 1, "div", 9)(4, AdminInboundFaxSettingsComponent_div_6_div_4_Template, 2, 3, "div", 10)(5, AdminInboundFaxSettingsComponent_div_6_div_5_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tabs", ctx_r1.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](6, _c1))("autoUpdatePerfectScroll", ctx_r1.tabsContentScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "inboundgeneral" === ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "advanced" === ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "barcodes" === ctx_r1.activeTab);
  }
}
class AdminInboundFaxSettingsComponent {
  set content(content) {
    if (content) {
      this.tabsContentScroll = content;
    }
  }
  constructor(translateService, interfaxService, spinnerService, toastrService, errorsService, route, location, userStateService, alertsService) {
    this.translateService = translateService;
    this.interfaxService = interfaxService;
    this.spinnerService = spinnerService;
    this.toastrService = toastrService;
    this.errorsService = errorsService;
    this.route = route;
    this.location = location;
    this.userStateService = userStateService;
    this.alertsService = alertsService;
    this.activeTab = 'inbound';
    this.tabs = new Array();
    this.rightControls = [];
    this.contactLists = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
    this.createTabs = () => {
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('inboundgeneral', this.translateService.instant('admin-inbound-fax-settings.inbound-general')));
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('barcodes', this.translateService.instant('admin-inbound-fax-settings.tab-barcodes')));
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('advanced', this.translateService.instant('admin-inbound-fax-settings.tab-advanced')));
    };
    this.activateTab = view => {
      this.activeTab = view;
      if (this.tabsContentScroll) {
        this.tabsContentScroll.scrollTo(0, 0);
      }
    };
    this.loadContacts = () => {
      this.subscriptions.add(this.interfaxService.getContactLists(this.contactListsLoaded, this.contactListsFailed));
    };
    this.contactListsLoaded = contactLists => {
      this.contactLists = contactLists;
      this.spinnerService.hide();
    };
    this.contactListsFailed = err => {
      console.log('AdminInboundFaxSettingsComponent.contactListsFailed', err);
      this.spinnerService.hide();
    };
    this.loadFaxSettings = () => {
      this.interfaxService.getInboundConfiguration(this.selectedUser, this.inboundLoaded, this.inboundFailed);
    };
    this.inboundLoaded = i => {
      this.settings = i;
      if (!this.settings.isPCI && this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PERMISSIONS_ALLOWCONTACTLISTS)) {
        return this.loadContacts();
      }
      this.spinnerService.hide();
    };
    this.inboundFailed = err => {
      console.log('AdminInboundFaxSettingsComponent.inboundFailed', err);
      this.spinnerService.hide();
    };
    this.onSave = () => {
      this.interfaxService.updateInboundConfiguration(this.selectedUser, this.settings, this.onSaveSucceeded, this.onFailedToSave);
      this.spinnerService.showSavingSpinner();
    };
    this.onCancel = () => {
      this.returnToPreviousPage();
    };
    this.onSaveSucceeded = results => {
      this.spinnerService.hide();
      if (!results.success) {
        this.errorsService.showErrorsModal(results.errors, 'admin-inbound-fax-settings.save-fail');
        return;
      }
      if (this.routeParams.username) {
        this.toastrService.success(this.translateService.instant('admin-inbound-fax-settings.save-success'));
        this.returnToPreviousPage();
        return;
      }
      this.alertsService.success(this.translateService.instant('admin-inbound-fax-settings.settings-header-text'), this.translateService.instant('admin-inbound-fax-settings.save-success-modal'), false, {
        buttonText: this.translateService.instant('Common.Close'),
        customClass: 'success-modal large-font',
        showIcon: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Icons.GreenTick
      });
      this.loadFaxSettings();
    };
    this.onFailedToSave = () => {
      this.spinnerService.hide();
      this.toastrService.error(this.translateService.instant('admin-inbound-fax-settings.save-fail'));
    };
    this.returnToPreviousPage = () => {
      this.location.back();
    };
  }
  ngOnInit() {
    this.createButtons();
    this.createTabs();
    this.route.params.subscribe(p => {
      this.routeParams = p;
      this.selectedUser = this.routeParams.username ?? this.userStateService.interFAXUsername;
      this.spinnerService.show(this.translateService.instant('Common.LoadingData'), document.documentElement);
      this.loadFaxSettings();
    });
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__.Control(this.onSave, this.translateService.instant('admin-tenant.save'), 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__.Control(this.onCancel, this.translateService.instant('admin-tenant.cancel'), 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.rightControls.push(this.saveButton);
    this.rightControls.push(this.cancelButton);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminInboundFaxSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminInboundFaxSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_2__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_1__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AlertsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: AdminInboundFaxSettingsComponent,
      selectors: [["app-admin-inbound-fax-settings"]],
      viewQuery: function AdminInboundFaxSettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarDirective, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.spinnerWrapper = _t.first);
        }
      },
      decls: 7,
      vars: 5,
      consts: [["spinnerWrapper", ""], ["appAutoFocusFirstInput", "", 1, "spinner-wrapper", "admin-inbound-fax-settings", "project-list-dashboard-body", "d-flex", "flex-column", "w-100"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "w-100"], [1, "panel", "h-100", "row", "m-0", "w-100"], ["class", "panel p-0 d-flex flex-column w-100 h-100 mh-100", 4, "ngIf"], [1, "panel", "p-0", "d-flex", "flex-column", "w-100", "h-100", "mh-100"], [3, "tabSelected", "tabs"], [1, "tab-content", "w-100", "content-padding", "h-100", "mh-100", "position-relative", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], ["class", "h-100 mh-100", 4, "ngIf"], ["class", "h-100", 4, "ngIf"], [1, "h-100", "mh-100"], [1, "h-100", 3, "inboundFaxSettings"], [1, "h-100"], [1, "h-100", 3, "inboundFaxSettings", "contactLists", "selectedUser"], [1, "h-100", 3, "inboundBarcodes"]],
      template: function AdminInboundFaxSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-secondary-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, AdminInboundFaxSettingsComponent_div_6_Template, 6, 7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "admin-inbound-fax-settings.settings-header-text"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.settings);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_6__.SecondaryHeaderComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_7__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_8__.TabBarComponent, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__.AutoUpdatePerfectScrollDirective, _inbound_general_inbound_general_fax_settings_component__WEBPACK_IMPORTED_MODULE_10__.InboundGeneralFaxSettingsComponent, _inbound_advanced_fax_settings_inbound_advanced_fax_settings_component__WEBPACK_IMPORTED_MODULE_11__.InboundAdvancedFaxSettingsComponent, _inbound_barcodes_settings_inbound_barcodes_settings_component__WEBPACK_IMPORTED_MODULE_12__.InboundBarcodesSettingsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.admin-inbound-fax-settings[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n  padding-bottom: 15px;\n  height: 100%;\n}\n.admin-inbound-fax-settings.min-h-fit-content[_ngcontent-%COMP%], \n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .allowed-ip-addresses-delete-button[_ngcontent-%COMP%] {\n  margin-left: -21px;\n  font-size: 16px;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .properties-panel[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .properties-panel-separator[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .panel-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .admin-inbound-fax-settings-properties[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border: 1px solid #cfcfcf;\n  margin-bottom: 0;\n  height: 290px;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .admin-inbound-fax-settings-properties[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  display: table;\n  flex: 0 0 auto;\n  table-layout: fixed;\n  width: 100%;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .admin-inbound-fax-settings-properties[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border: 1px solid #cfcfcf;\n  background-color: #f1f3f3;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .admin-inbound-fax-settings-properties[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .admin-inbound-fax-settings-properties[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: 1 1 auto;\n  max-height: 240px;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .admin-inbound-fax-settings-properties[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .admin-inbound-fax-settings-properties[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .gripper[_ngcontent-%COMP%] {\n  height: 25px;\n  font-size: 20px;\n  z-index: 5;\n  cursor: move;\n  padding-top: 3px;\n}\n.admin-inbound-fax-settings[_ngcontent-%COMP%]   .enable-check-box[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9hZG1pbi1pbmJvdW5kLWZheC1zZXR0aW5ncy9hZG1pbi1pbmJvdW5kLWZheC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQWdQRjtBQTlPRTs7RUFFRSxrQ0FBQTtBQWdQSjtBQTdPRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQStPSjtBQTVPRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUE4T0o7QUE1T0k7RUFDRSwyQkFBQTtBQThPTjtBQTFPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUE0T0o7QUF6T0U7RUFDRSxpQkFBQTtFQUNBLDhDRDhDc0I7RUM3Q3RCLCtCQUFBO0FBMk9KO0FBeE9FO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEwT0o7QUF2T0U7RUFDRSx5QkQ0Qk07RUMzQk4sZ0NBQUE7RUFDQSxhQUFBO0FBeU9KO0FBdE9FO0VBQ0UsV0FBQTtBQXdPSjtBQXBPSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBc09OO0FBcE9NO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFzT1I7QUFwT1E7RUFDRSx5QkFBQTtFQUNBLHlCREtBO0FDaU9WO0FBcE9VO0VBQ0UsZ0JBQUE7QUFzT1o7QUFqT007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFtT1I7QUFqT1E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBbU9WO0FBaE9ZO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBa09kO0FBMU5FO0VBQ0UsbUJBQUE7QUE0TkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5hZG1pbi1pbmJvdW5kLWZheC1zZXR0aW5ncyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJi5taW4taC1maXQtY29udGVudCxcclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hbGxvd2VkLWlwLWFkZHJlc3Nlcy1kZWxldGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFkbWluLWluYm91bmQtZmF4LXNldHRpbmdzLXByb3BlcnRpZXMge1xyXG4gICAgdGFibGUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBoZWlnaHQ6IDI5MHB4O1xyXG5cclxuICAgICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSk7XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuXHJcbiAgICAgICAgICAuYnV0dG9uLWljb246Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNDBweDtcclxuXHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAuZ3JpcHBlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbW92ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW5hYmxlLWNoZWNrLWJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 30406:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/admin-inbound-fax-settings.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminInboundFaxSettingsModule: () => (/* binding */ AdminInboundFaxSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../blocks/components/components.module */ 68876);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _admin_inbound_fax_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-inbound-fax-settings-routing.module */ 75383);
/* harmony import */ var _admin_inbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-inbound-fax-settings.component */ 35831);
/* harmony import */ var _inbound_general_inbound_general_fax_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbound-general/inbound-general-fax-settings.component */ 7855);
/* harmony import */ var _auto_share_auto_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-share/auto-share.component */ 41149);
/* harmony import */ var _auto_forward_auto_forward_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auto-forward/auto-forward.component */ 61909);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fax-settings-table/fax-settings-table.component */ 92231);
/* harmony import */ var _inbound_general_notification_email_modal_notification_email_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inbound-general/notification-email-modal/notification-email-modal.component */ 46112);
/* harmony import */ var _auto_share_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auto-share/share-modal/share-modal.component */ 45399);
/* harmony import */ var _auto_forward_auto_forward_destination_modal_auto_forward_destination_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auto-forward/auto-forward-destination-modal/auto-forward-destination-modal.component */ 4691);
/* harmony import */ var _auto_forward_auto_forward_restriction_modal_auto_forward_restriction_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auto-forward/auto-forward-restriction-modal/auto-forward-restriction-modal.component */ 79467);
/* harmony import */ var _inbound_advanced_fax_settings_inbound_advanced_fax_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inbound-advanced-fax-settings/inbound-advanced-fax-settings.component */ 92845);
/* harmony import */ var _inbound_barcodes_settings_inbound_barcodes_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inbound-barcodes-settings/inbound-barcodes-settings.component */ 41369);
/* harmony import */ var _inbound_general_webpost_efax_webpost_efax_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inbound-general/webpost-efax/webpost-efax.component */ 39110);
/* harmony import */ var _inbound_general_webpost_uicworkflow_webpost_uicworkflow_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inbound-general/webpost-uicworkflow/webpost-uicworkflow.component */ 14006);
/* harmony import */ var _inbound_general_webpost_advanced_http_webpost_advanced_http_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inbound-general/webpost-advanced-http/webpost-advanced-http.component */ 85410);
/* harmony import */ var _inbound_general_webpost_advanced_http_http_bodypart_http_bodypart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inbound-general/webpost-advanced-http/http-bodypart/http-bodypart.component */ 71537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 96623);

























class AdminInboundFaxSettingsModule {
  static {
    this.ɵfac = function AdminInboundFaxSettingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminInboundFaxSettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
      type: AdminInboundFaxSettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.IconsModule, _admin_inbound_fax_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminInboundFaxSettingsRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_24__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.DualPicklistModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.PaginationModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.TableProductDetailModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AdminInboundFaxSettingsModule, {
    declarations: [_admin_inbound_fax_settings_component__WEBPACK_IMPORTED_MODULE_3__.AdminInboundFaxSettingsComponent, _inbound_general_inbound_general_fax_settings_component__WEBPACK_IMPORTED_MODULE_4__.InboundGeneralFaxSettingsComponent, _auto_share_auto_share_component__WEBPACK_IMPORTED_MODULE_5__.AutoShareComponent, _auto_forward_auto_forward_component__WEBPACK_IMPORTED_MODULE_6__.AutoForwardComponent, _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_8__.FaxSettingsTableComponent, _inbound_general_notification_email_modal_notification_email_modal_component__WEBPACK_IMPORTED_MODULE_9__.NotificationEmailModalComponent, _auto_share_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_10__.ShareModalComponent, _auto_forward_auto_forward_destination_modal_auto_forward_destination_modal_component__WEBPACK_IMPORTED_MODULE_11__.AutoForwardDestinationModalComponent, _auto_forward_auto_forward_restriction_modal_auto_forward_restriction_modal_component__WEBPACK_IMPORTED_MODULE_12__.AutoForwardRestrictionModalComponent, _inbound_advanced_fax_settings_inbound_advanced_fax_settings_component__WEBPACK_IMPORTED_MODULE_13__.InboundAdvancedFaxSettingsComponent, _inbound_barcodes_settings_inbound_barcodes_settings_component__WEBPACK_IMPORTED_MODULE_14__.InboundBarcodesSettingsComponent, _inbound_general_webpost_efax_webpost_efax_component__WEBPACK_IMPORTED_MODULE_15__.WebpostEfaxComponent, _inbound_general_webpost_uicworkflow_webpost_uicworkflow_component__WEBPACK_IMPORTED_MODULE_16__.WebpostUicworkflowComponent, _inbound_general_webpost_advanced_http_webpost_advanced_http_component__WEBPACK_IMPORTED_MODULE_17__.WebpostAdvancedHttpComponent, _inbound_general_webpost_advanced_http_http_bodypart_http_bodypart_component__WEBPACK_IMPORTED_MODULE_18__.HttpBodypartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.IconsModule, _admin_inbound_fax_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminInboundFaxSettingsRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_24__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.DualPicklistModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.PaginationModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_7__.TableProductDetailModule],
    exports: [_fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_8__.FaxSettingsTableComponent, _inbound_general_inbound_general_fax_settings_component__WEBPACK_IMPORTED_MODULE_4__.InboundGeneralFaxSettingsComponent, _auto_share_auto_share_component__WEBPACK_IMPORTED_MODULE_5__.AutoShareComponent, _auto_forward_auto_forward_component__WEBPACK_IMPORTED_MODULE_6__.AutoForwardComponent]
  });
})();

/***/ }),

/***/ 4691:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/auto-forward/auto-forward-destination-modal/auto-forward-destination-modal.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoForwardDestinationModalComponent: () => (/* binding */ AutoForwardDestinationModalComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../..//blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);










function AutoForwardDestinationModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "app-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AutoForwardDestinationModalComponent_div_5_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.redistributeTo.to, $event) || (ctx_r1.redistributeTo.to = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fieldFaxNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.redistributeTo.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxLength", 20);
  }
}
function AutoForwardDestinationModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "app-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AutoForwardDestinationModalComponent_div_6_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.redistributeTo.to, $event) || (ctx_r1.redistributeTo.to = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fieldContactList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.redistributeTo.to);
  }
}
class AutoForwardDestinationModalComponent {
  get redistributeToType() {
    return `${this.redistributeTo.redistributeToType}`;
  }
  set redistributeToType(val) {
    this.redistributeTo.redistributeToType = Number(val);
  }
  constructor(translateService, userStateService) {
    this.translateService = translateService;
    this.userStateService = userStateService;
    this.createFields = () => {
      const redistributeOptions = [];
      redistributeOptions.push({
        name: this.translateService.instant('RedistributeToTypeEnum.Fax'),
        value: '0'
      });
      if (!this.isPCIUser && this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PERMISSIONS_ALLOWCONTACTLISTS)) {
        redistributeOptions.push({
          name: this.translateService.instant('RedistributeToTypeEnum.ContactList'),
          value: '1'
        });
        const contactListOptions = this.contactLists.map(cl => {
          return {
            name: cl.name,
            value: cl.id.toString()
          };
        });
        this.fieldContactList = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
          type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
          label: this.translateService.instant('admin-inbound-fax-settings.auto-forward-contactlist'),
          required: false,
          datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(contactListOptions)
        });
      }
      this.fieldRedistributeType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-inbound-fax-settings.auto-forward-type'),
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(redistributeOptions)
      });
      this.fieldFaxNumber = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-inbound-fax-settings.auto-forward-destination'),
        placeholder: this.translateService.instant('admin-inbound-fax-settings.auto-forward-destination-placeholder'),
        required: true
      });
    };
  }
  ngOnInit() {
    this.contactLists.sort((a, b) => a.name.localeCompare(b.name));
    this.createFields();
  }
  onTypeChanged($event) {
    this.redistributeTo.to = null;
  }
  static {
    this.ɵfac = function AutoForwardDestinationModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutoForwardDestinationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AutoForwardDestinationModalComponent,
      selectors: [["app-auto-forward-destination-modal"]],
      inputs: {
        redistributeTo: "redistributeTo",
        contactLists: "contactLists",
        isPCIUser: "isPCIUser"
      },
      decls: 7,
      vars: 4,
      consts: [["appAutoFocusFirstInput", ""], [1, "row"], [1, "col-12"], [3, "valueChange", "fieldChanged", "field", "value"], ["class", "col-12", 4, "ngIf"], [3, "valueChange", "field", "value", "maxLength"], [3, "valueChange", "field", "value"]],
      template: function AutoForwardDestinationModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AutoForwardDestinationModalComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.redistributeToType, $event) || (ctx.redistributeToType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function AutoForwardDestinationModalComponent_Template_app_field_fieldChanged_3_listener($event) {
            return ctx.onTypeChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AutoForwardDestinationModalComponent_div_5_Template, 2, 3, "div", 4)(6, AutoForwardDestinationModalComponent_div_6_Template, 2, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldRedistributeType);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.redistributeToType);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.redistributeTo.redistributeToType == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.redistributeTo.redistributeToType == 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 79467:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/auto-forward/auto-forward-restriction-modal/auto-forward-restriction-modal.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoForwardRestrictionModalComponent: () => (/* binding */ AutoForwardRestrictionModalComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);







class AutoForwardRestrictionModalComponent {
  get restrictByType() {
    return `${this.restrictBy.restrictByType}`;
  }
  set restrictByType(val) {
    this.restrictBy.restrictByType = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.createFields = () => {
      this.fieldRestrictionType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-inbound-fax-settings.auto-forward-type'),
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RestrictByType, 'RestrictByTypeEnum', this.translateService)
      });
      this.fieldDestination = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-inbound-fax-settings.auto-forward-id'),
        placeholder: this.translateService.instant('admin-inbound-fax-settings.auto-forward-id-placeholder'),
        required: true
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  onTypeChange($event) {
    this.restrictBy.by = null;
  }
  static {
    this.ɵfac = function AutoForwardRestrictionModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutoForwardRestrictionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AutoForwardRestrictionModalComponent,
      selectors: [["app-auto-forward-restriction-modal"]],
      inputs: {
        restrictBy: "restrictBy"
      },
      decls: 7,
      vars: 4,
      consts: [["appAutoFocusFirstInput", ""], [1, "row"], [1, "col-12"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "field", "value"]],
      template: function AutoForwardRestrictionModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AutoForwardRestrictionModalComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.restrictByType, $event) || (ctx.restrictByType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function AutoForwardRestrictionModalComponent_Template_app_field_fieldChanged_3_listener($event) {
            return ctx.onTypeChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AutoForwardRestrictionModalComponent_Template_app_field_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.restrictBy.by, $event) || (ctx.restrictBy.by = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldRestrictionType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.restrictByType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldDestination);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.restrictBy.by);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 61909:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/auto-forward/auto-forward.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoForwardComponent: () => (/* binding */ AutoForwardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fax-settings-table/fax-settings-table.component */ 92231);
/* harmony import */ var _auto_forward_destination_modal_auto_forward_destination_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auto-forward-destination-modal/auto-forward-destination-modal.component */ 4691);
/* harmony import */ var _auto_forward_restriction_modal_auto_forward_restriction_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auto-forward-restriction-modal/auto-forward-restriction-modal.component */ 79467);
















const _c0 = a0 => [a0];
function AutoForwardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "app-fax-settings-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onAdd", function AutoForwardComponent_div_5_Template_app_fax_settings_table_onAdd_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onAddAutoForwardDestinationModal());
    })("onDelete", function AutoForwardComponent_div_5_Template_app_fax_settings_table_onDelete_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onDeleteAutoForwardDestination($event));
    })("onProperties", function AutoForwardComponent_div_5_Template_app_fax_settings_table_onProperties_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onPropertiesAutoForwardDestination($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 17)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "app-fax-settings-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onAdd", function AutoForwardComponent_div_5_Template_app_fax_settings_table_onAdd_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onAddAutoForwardRestriction());
    })("onDelete", function AutoForwardComponent_div_5_Template_app_fax_settings_table_onDelete_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onDeleteAutoForwardRestriction($event));
    })("onProperties", function AutoForwardComponent_div_5_Template_app_fax_settings_table_onProperties_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onPropertiesAutoForwardRestriction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", !ctx_r2.inboundFaxSettings.redistribute.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx_r2.autoForwardItems)("columns", ctx_r2.autoForwardColumns)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c0, ctx_r2.autoForwardSort))("preferencesKey", "inbound-fax-settings-auto-forward-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 11, "admin-inbound-fax-settings.restrict-forward-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx_r2.restrictItems)("columns", ctx_r2.restrictColumns)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c0, ctx_r2.restrictSort))("preferencesKey", "inbound-fax-settings-auto-forward-restricted-items");
  }
}
function AutoForwardComponent_div_9_app_errors_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-errors", 22);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("errors", ctx_r2.errors);
  }
}
function AutoForwardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AutoForwardComponent_div_9_app_errors_2_Template, 1, 1, "app-errors", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-auto-forward-destination-modal", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("redistributeTo", ctx_r2.modalEditAutoForwardDestination)("contactLists", ctx_r2.contactLists)("isPCIUser", ctx_r2.inboundFaxSettings.isPCI);
  }
}
function AutoForwardComponent_div_20_app_errors_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-errors", 22);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("errors", ctx_r2.errors);
  }
}
function AutoForwardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AutoForwardComponent_div_20_app_errors_2_Template, 1, 1, "app-errors", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-auto-forward-restriction-modal", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("restrictBy", ctx_r2.modalEditAutoForwardRestriction);
  }
}
class AutoForwardComponent {
  constructor(translate, ngxSmartModalService) {
    this.translate = translate;
    this.ngxSmartModalService = ngxSmartModalService;
    this.autoForwardItems = [];
    this.forwardTypeIcons = ['fa-fax fa-lg', 'fa-address-book fa-lg'];
    this.restrictItems = [];
    this.restrictTypeIcons = ['fa-phone fa-lg', 'fa-fax fa-lg'];
    this.showAutoForwardDestinationModal = false;
    this.autoForwardDestinationKey = '';
    this.showAutoForwardRestrictionModal = false;
    this.autoForwardRestrictionKey = '';
    this.errors = new Array();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.getDisplayDestination = r => {
      if (r.redistributeToType == _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RedistributeToType.Fax) return r.to;
      const contactList = this.contactLists.find(cl => cl.id == r.to);
      if (contactList) return contactList.name;
      return r.to;
    };
    this.onAddAutoForwardDestinationModal = () => {
      this.errors = [];
      this.showAutoForwardDestinationModal = true;
      this.autoForwardDestinationKey = '';
      this.modalEditAutoForwardDestination = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RedistributeTo({
        to: '',
        redistributeToType: _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RedistributeToType.Fax
      });
      this.autoForwardDestinationModalTitle = this.translate.instant('admin-inbound-fax-settings.add-auto-forward-destination-modal-title');
      this.autoForwardDestinationModalInstance.open();
    };
    this.onDeleteAutoForwardDestination = item => {
      this.inboundFaxSettings.redistribute.redistributions = this.inboundFaxSettings.redistribute.redistributions.filter(r => r.to != item.to);
      this.autoForwardItems = this.inboundFaxSettings.redistribute.redistributions.map(e => this.createForwardTableItem(e));
    };
    this.onPropertiesAutoForwardDestination = item => {
      this.errors = [];
      this.modalEditAutoForwardDestination = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RedistributeTo(item);
      this.autoForwardDestinationKey = item.to;
      this.showAutoForwardDestinationModal = true;
      this.autoForwardDestinationModalTitle = this.translate.instant('admin-inbound-fax-settings.auto-forward-destination-properties-modal-title');
      this.autoForwardDestinationModalInstance.open();
    };
    this.onSaveAutoForwardDestinationModal = () => {
      if (!this.isAutoForwardModalValid()) return;
      if (this.autoForwardDestinationKey) {
        let index = this.inboundFaxSettings.redistribute.redistributions.findIndex(r => r.to === this.autoForwardDestinationKey);
        if (index >= 0) {
          this.inboundFaxSettings.redistribute.redistributions[index] = this.modalEditAutoForwardDestination;
        }
      } else {
        this.inboundFaxSettings.redistribute.redistributions.push(this.modalEditAutoForwardDestination);
      }
      this.autoForwardItems = this.inboundFaxSettings.redistribute.redistributions.map(e => this.createForwardTableItem(e));
      this.onCloseAutoForwardDestinationModal();
    };
    this.onCloseAutoForwardDestinationModal = () => {
      this.autoForwardDestinationModalInstance.close();
      this.showAutoForwardDestinationModal = false;
    };
    this.onAddAutoForwardRestriction = () => {
      this.errors = [];
      this.showAutoForwardRestrictionModal = true;
      this.autoForwardRestrictionKey = '';
      this.modalEditAutoForwardRestriction = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RestrictBy({
        by: '',
        restrictByType: _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RestrictByType.CallerId
      });
      this.autoForwardRestrictionModalTitle = this.translate.instant('admin-inbound-fax-settings.add-auto-forward-restriction-modal-title');
      this.autoForwardRestrictionModalInstance.open();
    };
    this.onDeleteAutoForwardRestriction = item => {
      this.inboundFaxSettings.redistribute.restrictions = this.inboundFaxSettings.redistribute.restrictions.filter(r => r.by != item.by);
      this.restrictItems = this.inboundFaxSettings.redistribute.restrictions.map(e => this.createRestrictTableItem(e));
    };
    this.onPropertiesAutoForwardRestriction = item => {
      this.errors = [];
      this.modalEditAutoForwardRestriction = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RestrictBy(item);
      this.autoForwardRestrictionKey = item.by;
      this.showAutoForwardRestrictionModal = true;
      this.autoForwardRestrictionModalTitle = this.translate.instant('admin-inbound-fax-settings.auto-forward-restriction-modal-title');
      this.autoForwardRestrictionModalInstance.open();
    };
    this.onSaveAutoForwardRestrictionModal = () => {
      //todo: validate unique and not blank
      if (!this.isAutoForwardRestrictionModalValid()) return;
      if (this.autoForwardRestrictionKey) {
        let index = this.inboundFaxSettings.redistribute.restrictions.findIndex(r => r.by === this.autoForwardRestrictionKey);
        if (index >= 0) {
          this.inboundFaxSettings.redistribute.restrictions[index] = this.modalEditAutoForwardRestriction;
        }
      } else {
        this.inboundFaxSettings.redistribute.restrictions.push(this.modalEditAutoForwardRestriction);
      }
      this.restrictItems = this.inboundFaxSettings.redistribute.restrictions.map(e => this.createRestrictTableItem(e));
      this.onCloseAutoForwardRestrictionModal();
    };
    this.onCloseAutoForwardRestrictionModal = () => {
      this.autoForwardRestrictionModalInstance.close();
      this.showAutoForwardRestrictionModal = false;
    };
  }
  ngOnInit() {
    this.autoForwardColumns = this.getForwardColumns();
    const defaultSort = {
      field: '1',
      dir: 'asc'
    };
    this.autoForwardSort = defaultSort;
    this.inboundFaxSettings.redistribute.redistributions.forEach(redistribute => {
      this.autoForwardItems.push(this.createForwardTableItem(redistribute));
    });
    this.restrictColumns = this.getRestrictColumns();
    this.restrictSort = defaultSort;
    this.inboundFaxSettings.redistribute.restrictions.forEach(restrict => {
      this.restrictItems.push(this.createRestrictTableItem(restrict));
    });
  }
  ngAfterViewInit() {
    this.autoForwardDestinationModalInstance = this.ngxSmartModalService.getModal('autoForwardDestinationModal');
    if (!this.autoForwardDestinationModalInstance) {
      throw new Error('Failed to initialize: autoForwardDestinationModalInstance');
    }
    this.autoForwardRestrictionModalInstance = this.ngxSmartModalService.getModal('autoForwardRestrictionModal');
    if (!this.autoForwardRestrictionModalInstance) {
      throw new Error('Failed to initialize: autoForwardRestrictionModalInstance');
    }
    this.subscriptions.add(this.autoForwardDestinationModalInstance.onClose.subscribe(() => this.showAutoForwardDestinationModal = false));
    this.subscriptions.add(this.autoForwardRestrictionModalInstance.onClose.subscribe(() => this.showAutoForwardRestrictionModal = false));
  }
  createForwardTableItem(redistribute) {
    console.log('createForwardTableItem', redistribute);
    redistribute['icon'] = this.forwardTypeIcons[redistribute.redistributeToType];
    redistribute['displayDestination'] = this.getDisplayDestination(redistribute);
    const tableItem = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(redistribute, this.autoForwardColumns, this.translate);
    tableItem.data.defaultAction = {
      name: this.translate.instant('admin-inbound-fax-settings.properties')
    };
    return tableItem;
  }
  createRestrictTableItem(restrict) {
    restrict['icon'] = this.restrictTypeIcons[restrict.restrictByType];
    const tableItem = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(restrict, this.restrictColumns, this.translate);
    tableItem.data.defaultAction = {
      name: this.translate.instant('admin-inbound-fax-settings.properties')
    };
    return tableItem;
  }
  getForwardColumns() {
    const columns = [];
    columns.push(this.createColumn('type', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.FontAwesome, '', 32, 'icon'));
    columns.push(this.createColumn('to', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.ActionLink, this.translate.instant('admin-inbound-fax-settings.column-destination'), 200, 'displayDestination', true));
    return columns;
  }
  getRestrictColumns() {
    const columns = [];
    columns.push(this.createColumn('type', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.FontAwesome, '', 32, 'icon'));
    columns.push(this.createColumn('destination', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.ActionLink, this.translate.instant('admin-inbound-fax-settings.column-destination'), 200, 'by', true));
    return columns;
  }
  createColumn(id, displayType, columnName, width, itemProperty, stretch = false) {
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
  onEnabledChecked(event) {
    this.inboundFaxSettings.redistribute.enabled = !this.inboundFaxSettings.redistribute.enabled;
  }
  isAutoForwardModalValid() {
    this.errors = [];
    if (this.modalEditAutoForwardDestination.to.trim()) {
      if (this.inboundFaxSettings.redistribute.redistributions.some(a => a.to == this.modalEditAutoForwardDestination.to && a.to != this.autoForwardDestinationKey)) {
        this.errors.push(this.translate.instant('admin-inbound-fax-settings.auto-forward-destination-unique'));
        return false;
      } else {
        return true;
      }
    }
    if (this.modalEditAutoForwardDestination.redistributeToType == _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RedistributeToType.Fax) this.errors.push(this.translate.instant('admin-inbound-fax-settings.must-add-fax-number'));
    if (this.modalEditAutoForwardDestination.redistributeToType == _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RedistributeToType.ContactList) this.errors.push(this.translate.instant('admin-inbound-fax-settings.must-add-contact-list'));
    return false;
  }
  isAutoForwardRestrictionModalValid() {
    this.errors = [];
    this.validateAutoForwardRestrictionCallerId();
    this.validateAutoForwardRestrictionCSID();
    if (this.inboundFaxSettings.redistribute.restrictions.some(a => a.by.toLowerCase() == this.modalEditAutoForwardRestriction.by.toLowerCase() && a.by.toLowerCase() != this.autoForwardRestrictionKey.toLowerCase())) this.errors.push(this.translate.instant('admin-inbound-fax-settings.auto-forward-restriction-unique'));
    return this.errors.length == 0;
  }
  validateAutoForwardRestrictionCallerId() {
    if (this.modalEditAutoForwardRestriction.restrictByType != _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RestrictByType.CallerId) return;
    if (!this.modalEditAutoForwardRestriction.by.trim()) this.errors.push(this.translate.instant('admin-inbound-fax-settings.must-add-caller-id'));
  }
  validateAutoForwardRestrictionCSID() {
    if (this.modalEditAutoForwardRestriction.restrictByType != _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.RestrictByType.CSID) return;
    if (!this.modalEditAutoForwardRestriction.by.trim()) this.errors.push(this.translate.instant('admin-inbound-fax-settings.must-add-csid'));
    if (this.modalEditAutoForwardRestriction.by.length > 20) this.errors.push(this.translate.instant('admin-inbound-fax-settings.csid-length-exceeds-limit'));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AutoForwardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutoForwardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__.NgxSmartModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: AutoForwardComponent,
      selectors: [["app-auto-forward"]],
      inputs: {
        inboundFaxSettings: "inboundFaxSettings",
        contactLists: "contactLists"
      },
      decls: 28,
      vars: 28,
      consts: [["autoForwardDestinationModal", ""], ["autoForwardRestrictionModal", ""], [1, "auto-forward"], [1, "section"], [1, "row", "enable-check-box"], [1, "col-12"], ["label", "admin-inbound-fax-settings.enable-auto-forward", 1, "enable-check-box", 3, "valueChange", "value"], ["class", "indented", 3, "disabled", 4, "ngIf"], ["identifier", "autoForwardDestinationModal", 3, "closable", "escapable", "dismissable"], [3, "title", "closeIconHandler"], ["class", "modal-body", "appAutoFocusFirstInput", "", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-light", "btn-minwidth", 3, "click"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click", "disabled"], ["identifier", "autoForwardRestrictionModal", 3, "closable", "escapable", "dismissable"], [1, "indented"], [3, "onAdd", "onDelete", "onProperties", "items", "columns", "sort", "preferencesKey"], [1, "enable-check-box", "mt-3"], ["appAutoFocusFirstInput", "", 1, "modal-body"], [1, "d-flex", "flex-column"], [3, "errors", 4, "ngIf"], [3, "redistributeTo", "contactLists", "isPCIUser"], [3, "errors"], [3, "restrictBy"]],
      template: function AutoForwardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "app-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function AutoForwardComponent_Template_app_checkbox_valueChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onEnabledChecked($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AutoForwardComponent_div_5_Template, 7, 17, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ngx-smart-modal", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "app-modal-header", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, AutoForwardComponent_div_9_Template, 5, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 11)(11, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AutoForwardComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onCloseAutoForwardDestinationModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AutoForwardComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onSaveAutoForwardDestinationModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ngx-smart-modal", 14, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-modal-header", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, AutoForwardComponent_div_20_Template, 5, 2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 11)(22, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AutoForwardComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onCloseAutoForwardRestrictionModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AutoForwardComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onSaveAutoForwardRestrictionModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.inboundFaxSettings.redistribute.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.inboundFaxSettings.redistribute.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx.autoForwardDestinationModalTitle)("closeIconHandler", ctx.onCloseAutoForwardDestinationModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAutoForwardDestinationModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 20, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !(ctx.modalEditAutoForwardDestination == null ? null : ctx.modalEditAutoForwardDestination.to == null ? null : ctx.modalEditAutoForwardDestination.to.trim()));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 22, "MainHeader.OK"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx.autoForwardRestrictionModalTitle)("closeIconHandler", ctx.onCloseAutoForwardRestrictionModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAutoForwardRestrictionModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 24, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !(ctx.modalEditAutoForwardRestriction == null ? null : ctx.modalEditAutoForwardRestriction.by == null ? null : ctx.modalEditAutoForwardRestriction.by.trim()));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 26, "MainHeader.OK"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_2__.ErrorsComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_6__.FaxSettingsTableComponent, _auto_forward_destination_modal_auto_forward_destination_modal_component__WEBPACK_IMPORTED_MODULE_7__.AutoForwardDestinationModalComponent, _auto_forward_restriction_modal_auto_forward_restriction_modal_component__WEBPACK_IMPORTED_MODULE_8__.AutoForwardRestrictionModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: [".auto-forward .enable-check-box {\n  margin-bottom: 20px;\n}\n.auto-forward .section {\n  background-color: #FAFAFA;\n  padding: 10px;\n  margin-bottom: 25px;\n}\n.auto-forward .indented {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2F1dG8tZm9yd2FyZC9hdXRvLWZvcndhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxtQkFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG8tZm9yd2FyZCB7XHJcblxyXG4gIC5lbmFibGUtY2hlY2stYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuaW5kZW50ZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 41149:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/auto-share/auto-share.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoShareComponent: () => (/* binding */ AutoShareComponent),
/* harmony export */   autoShareDialogState: () => (/* binding */ autoShareDialogState)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _blocks_services_interfax_document_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/services/interfax-document-sharing.service */ 98451);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fax-settings-table/fax-settings-table.component */ 92231);
/* harmony import */ var _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share-modal/share-modal.component */ 45399);





















const _c0 = a0 => [a0];
function AutoShareComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 9)(1, "app-fax-settings-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("valueChange", function AutoShareComponent_div_5_Template_app_fax_settings_table_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onEnabledChecked($event));
    })("onAdd", function AutoShareComponent_div_5_Template_app_fax_settings_table_onAdd_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onAddShare());
    })("onDelete", function AutoShareComponent_div_5_Template_app_fax_settings_table_onDelete_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onDeleteShare($event));
    })("onProperties", function AutoShareComponent_div_5_Template_app_fax_settings_table_onProperties_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onPropertiesShare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("disabled", !(ctx_r2.inboundFaxSettings.autoShare.enabled && ctx_r2.itemsLoaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r2.autoShareItems)("columns", ctx_r2.autoShareColumns)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c0, ctx_r2.autoShareSort))("preferencesKey", ctx_r2.preferencesKey);
  }
}
function AutoShareComponent_div_8_app_errors_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-errors", 19);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errors", ctx_r2.errors);
  }
}
function AutoShareComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-modal-header", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, AutoShareComponent_div_8_app_errors_5_Template, 1, 1, "app-errors", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 13)(7, "app-share-modal", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("selectedUsersChange", function AutoShareComponent_div_8_Template_app_share_modal_selectedUsersChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.selectedUsers, $event) || (ctx_r2.selectedUsers = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 16)(9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AutoShareComponent_div_8_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onCloseShareModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AutoShareComponent_div_8_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onSaveShareModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 9, ctx_r2.shareKey ? "admin-inbound-fax-settings.share-modal-title-properties" : "admin-inbound-fax-settings.share-modal-title-add"))("closeIconHandler", ctx_r2.onCloseShareModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("share", ctx_r2.modalShare)("permissionDataSource", ctx_r2.permissionDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("selectedUsers", ctx_r2.selectedUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("searchItems", ctx_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 11, "MainHeader.Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 13, "MainHeader.OK"), " ");
  }
}
class Item extends _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.ShareWith {}
var autoShareDialogState;
(function (autoShareDialogState) {
  autoShareDialogState["Edit"] = "Edit";
  autoShareDialogState["New"] = "New";
})(autoShareDialogState || (autoShareDialogState = {}));
class AutoShareComponent {
  constructor(translateService, ngxSmartModalService, spinnerService, interfaxService, interfaxDocumentSharingService) {
    this.translateService = translateService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.spinnerService = spinnerService;
    this.interfaxService = interfaxService;
    this.interfaxDocumentSharingService = interfaxDocumentSharingService;
    this.autoShareItems = [];
    this.entityIcons = ['fa-user fa-lg', 'fa-users fa-lg', 'fa-globe fa-lg'];
    this.showShareModal = false;
    this.shareKey = '';
    this.errors = new Array();
    this.dialogState = autoShareDialogState.New;
    this.usersNotLoaded = true;
    this.itemsLoaded = false;
    this.allUsers = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    this.openShareModal = () => this.ngxSmartModalService.getModal('shareModal').open();
    this.onAddShare = () => {
      this.dialogState = autoShareDialogState.New;
      this.errors = [];
      this.shareKey = '';
      this.modalShare = new Item({
        shareWithType: _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.ShareWithType.User,
        permissions: _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.SharePermissions.View,
        name: '',
        entity: '',
        entityType: _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.DocumentEntityType.Account
      });
      this.selectedUsers = new Array();
      this.showShareModal = true;
      this.ngxSmartModalService.getModal('shareModal').open();
    };
    this.onDeleteShare = item => {
      this.inboundFaxSettings.autoShare.shares = this.inboundFaxSettings.autoShare.shares.filter(s => s.entity != item.entity);
      this.autoShareItems = this.inboundFaxSettings.autoShare.shares.map(e => this.createTableItem(e));
    };
    this.onPropertiesShare = item => {
      this.dialogState = autoShareDialogState.Edit;
      this.errors = [];
      this.modalShare = new Item(item);
      this.shareKey = item.entity;
      this.selectedUsers = new Array();
      this.showShareModal = true;
      this.ngxSmartModalService.getModal('shareModal').open();
    };
    this.onSaveShareModal = () => {
      //todo: validate unique and not blank
      this.errors = [];
      if (!this.isShareModalValid()) {
        this.errors.push(this.translateService.instant('admin-inbound-fax-settings.share-modal-not-valid'));
        return;
      }
      if (this.shareKey) {
        let shareIndex = this.inboundFaxSettings.autoShare.shares.findIndex(s => s.entity === this.shareKey);
        if (shareIndex >= 0) {
          if (this.modalShare.entityType == _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.DocumentEntityType.Account) this.modalShare.permissions = _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.SharePermissions.View;
          this.inboundFaxSettings.autoShare.shares[shareIndex] = this.modalShare;
        }
      } else {
        this.selectedUsers.forEach(s => {
          let share = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.ShareWith(s);
          share.permissions = s.entityType == _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.DocumentEntityType.Account ? _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.SharePermissions.View : this.modalShare.permissions;
          this.inboundFaxSettings.autoShare.shares = this.inboundFaxSettings.autoShare.shares.filter(s => s.entity !== share.entity);
          this.inboundFaxSettings.autoShare.shares.push(share);
        });
      }
      this.autoShareItems = this.inboundFaxSettings.autoShare.shares.map(e => this.createTableItem(e));
      this.onCloseShareModal();
    };
    this.onCloseShareModal = () => {
      this.spinnerService.hide();
      this.ngxSmartModalService.getModal('shareModal').close();
      this.showShareModal = false;
      this.usersNotLoaded = true;
      this.faxUsersSubscription.unsubscribe();
    };
    this.loadGroups = () => {
      // show spinner on this.spinnerWrapper parent
      const spinnerElement = document.getElementById('spinnerPanel');
      this.spinnerService.show(this.translateService.instant('Common.LoadingData'), spinnerElement);
      this.subscriptions.add(this.interfaxService.getGroups(this.groupsLoaded, this.groupsLoadFailed));
    };
    this.groupsLoaded = groups => {
      this.allUsers = groups.map(g => {
        let shareUser = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.ShareWith(this.modalShare);
        shareUser.entity = g.id;
        shareUser.name = g.name;
        shareUser.entityType = _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.DocumentEntityType.Group;
        shareUser['icon'] = 'fa-users';
        return shareUser;
      });
      this.addEveryone();
      this.inboundFaxSettings.autoShare.shares.forEach(share => {
        this.autoShareItems.push(this.createTableItem(share));
      });
      this.itemsLoaded = true;
      this.spinnerService.hide();
    };
    this.groupsLoadFailed = err => {
      this.spinnerService.hide();
    };
    this.addEveryone = () => {
      const everyone = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.ShareWith(this.modalShare);
      everyone.entity = '';
      everyone.name = this.translateService.instant('admin-inbound-fax-settings.everyone');
      everyone.entityType = _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.DocumentEntityType.Account;
      everyone['icon'] = 'fa-globe';
      this.allUsers.push(everyone);
    };
    this.findMatchesSucceeded = (users, completed) => {
      const userShareWith = users.map(u => {
        let shareUser = new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.ShareWith(this.modalShare);
        shareUser.entity = u.userId;
        shareUser.name = u.userId;
        shareUser.entityType = _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.DocumentEntityType.User;
        shareUser['icon'] = u.iconUrl;
        return shareUser;
      });
      let allEntities = this.allUsers.concat(userShareWith);
      allEntities = allEntities.filter(shareWith => !(shareWith.entityType === _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.DocumentEntityType.User && shareWith.entity.trim() === this.selectedUser.trim()));
      completed(allEntities);
    };
  }
  ngOnInit() {
    this.loadGroups();
    this.autoShareColumns = this.getColumns();
    this.permissionDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.interfaxDocumentSharingService.options);
    const defaultSort = {
      field: '1',
      dir: 'asc'
    };
    this.autoShareSort = defaultSort;
    this.subscriptions.add(this.ngxSmartModalService.getModal('shareModal').onClose.subscribe(() => this.onCloseShareModal()));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  createTableItem(shareWith) {
    this.setColumnData(shareWith);
    const tableItem = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(shareWith, this.autoShareColumns, this.translateService);
    tableItem.data.defaultAction = {
      name: this.translateService.instant('admin-inbound-fax-settings.properties')
    };
    return tableItem;
  }
  setColumnData(shareWith) {
    const item = this.allUsers.find(u => u.equals(shareWith));
    shareWith['icon'] = item ? item['icon'] : this.entityIcons[shareWith.entityType - 1];
    this.setPermissionText(shareWith);
  }
  setPermissionText(shareWith) {
    let permissionText = '';
    const field = this.permissionDataSource.options.find(p => p.value === `${shareWith.permissions}`);
    if (field) {
      permissionText = field.name;
    }
    shareWith['permissionsText'] = permissionText;
  }
  getColumns() {
    const columns = [];
    columns.push(this.createColumn('type', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.FontAwesome, '', 32, 'icon'));
    columns.push(this.createColumn('destination', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.ActionLink, this.translateService.instant('admin-inbound-fax-settings.column-destination'), 200, 'name'));
    columns.push(this.createColumn('permissions', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.Text, this.translateService.instant('admin-inbound-fax-settings.column-permissions'), 200, 'permissionsText', true));
    return columns;
  }
  createColumn(id, displayType, columnName, width, itemProperty, stretch = false) {
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
  onEnabledChecked(event) {
    this.inboundFaxSettings.autoShare.enabled = !this.inboundFaxSettings.autoShare.enabled;
  }
  refreshShareTableItems() {
    this.inboundFaxSettings.autoShare.shares = this.inboundFaxSettings.autoShare.shares.slice();
  }
  isShareModalValid() {
    return this.selectedUsers && this.selectedUsers.length > 0 || this.dialogState == autoShareDialogState.Edit;
  }
  findMatches(searchTerm, completed) {
    this.faxUsersSubscription = this.interfaxService.getFaxUsers(items => this.findMatchesSucceeded(items, completed), () => {}, searchTerm, _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_3__.FaxUserStatus.Open, [this.selectedUser.trim()]);
    this.subscriptions.add(this.faxUsersSubscription);
  }
  static {
    this.ɵfac = function AutoShareComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutoShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_interfax_document_sharing_service__WEBPACK_IMPORTED_MODULE_2__.InterfaxDocumentSharingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: AutoShareComponent,
      selectors: [["app-auto-share"]],
      inputs: {
        inboundFaxSettings: "inboundFaxSettings",
        preferencesKey: "preferencesKey",
        selectedUser: "selectedUser"
      },
      decls: 9,
      vars: 6,
      consts: [["shareModal", ""], [1, "auto-share"], [1, "section"], [1, "row", "enable-check-box"], [1, "col-12"], ["label", "admin-inbound-fax-settings.enable-auto-sharing", 1, "enable-check-box", 3, "valueChange", "value"], ["class", "indented", 3, "disabled", 4, "ngIf"], ["identifier", "shareModal", 3, "closable", "escapable", "dismissable"], [4, "ngIf"], [1, "indented"], [3, "valueChange", "onAdd", "onDelete", "onProperties", "items", "columns", "sort", "preferencesKey"], [3, "title", "closeIconHandler"], [1, "share-modal"], [1, "d-flex", "flex-column"], [3, "errors", 4, "ngIf"], [3, "selectedUsersChange", "share", "permissionDataSource", "selectedUsers", "searchItems"], [1, "modal-footer"], [1, "btn", "btn-light", "btn-minwidth", 3, "click"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click"], [3, "errors"]],
      template: function AutoShareComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "app-checkbox", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("valueChange", function AutoShareComponent_Template_app_checkbox_valueChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onEnabledChecked($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, AutoShareComponent_div_5_Template, 3, 8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ngx-smart-modal", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, AutoShareComponent_div_8_Template, 15, 15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx.inboundFaxSettings.autoShare.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.inboundFaxSettings.autoShare.enabled && ctx.itemsLoaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showShareModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__.ErrorsComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__.CheckboxComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_14__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_8__.ModalHeaderComponent, _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_9__.FaxSettingsTableComponent, _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_10__.ShareModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.auto-share .enable-check-box {\n  margin-bottom: 20px;\n}\n.auto-share .section {\n  background-color: #fafafa;\n  padding: 10px;\n  margin-bottom: 25px;\n}\n.auto-share .indented {\n  padding-left: 20px;\n}\n\nngx-smart-modal[identifier=shareModal] .nsm-content {\n  width: 690px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9hZG1pbi1pbmJvdW5kLWZheC1zZXR0aW5ncy9hdXRvLXNoYXJlL2F1dG8tc2hhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBNU9FO0VBQ0UsbUJBQUE7QUErT0o7QUE1T0U7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQThPSjtBQTNPRTtFQUNFLGtCQUFBO0FBNk9KOztBQXhPRTtFQUNFLFlBQUE7QUEyT0oiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5hdXRvLXNoYXJlIHtcclxuICAuZW5hYmxlLWNoZWNrLWJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmluZGVudGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbm5neC1zbWFydC1tb2RhbFtpZGVudGlmaWVyPSdzaGFyZU1vZGFsJ10ge1xyXG4gIC5uc20tY29udGVudCB7XHJcbiAgICB3aWR0aDogNjkwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 45399:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/auto-share/share-modal/share-modal.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareModalComponent: () => (/* binding */ ShareModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);











const _c0 = () => [];
function ShareModalComponent_app_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-label", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("localize", true)("required", true)("text", "admin-inbound-fax-settings.users-and-groups");
  }
}
function ShareModalComponent_app_field_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function ShareModalComponent_app_field_6_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.share.name, $event) || (ctx_r2.share.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r2.fieldUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r2.share.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
  }
}
class ShareModalComponent {
  get sharePermissions() {
    return `${this.share.permissions}`;
  }
  set sharePermissions(val) {
    this.share.permissions = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.selectedUsersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.createFields = () => {
      this.fieldPermissions = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-inbound-fax-settings.column-permissions'),
        required: true,
        datasource: this.permissionDataSource
      });
      this.fieldUser = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-inbound-fax-settings.auto-forward-destination'),
        required: true
      });
    };
    this.currentChanged = items => {
      this.selectedUsers = items;
      this.selectedUsersChange.emit(this.selectedUsers);
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function ShareModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ShareModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ShareModalComponent,
      selectors: [["app-share-modal"]],
      inputs: {
        share: "share",
        permissionDataSource: "permissionDataSource",
        selectedUsers: "selectedUsers",
        searchItems: "searchItems"
      },
      outputs: {
        selectedUsersChange: "selectedUsersChange"
      },
      decls: 10,
      vars: 17,
      consts: [["spinnerWrapper", ""], ["appAutoFocusFirstInput", "", 1, "spinner-wrapper", "d-flex", "flex-column", "min-h-fit-content"], [3, "localize", "required", "text", 4, "ngIf"], [1, "h-100"], [3, "currentChange", "hidden", "searchItems", "available", "current", "allowOrderSelectedItems", "displayField", "keyField", "listName", "iconField", "iconType"], [3, "field", "value", "disabled", "valueChange", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-6"], [3, "valueChange", "field", "value"], [3, "localize", "required", "text"], [3, "valueChange", "field", "value", "disabled"]],
      template: function ShareModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ShareModalComponent_app_label_2_Template, 1, 3, "app-label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "app-dual-picklist", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("currentChange", function ShareModalComponent_Template_app_dual_picklist_currentChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.currentChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ShareModalComponent_app_field_6_Template, 1, 3, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "app-field", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function ShareModalComponent_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.sharePermissions, $event) || (ctx.sharePermissions = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.share.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.share.name)("searchItems", ctx.searchItems)("available", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c0))("current", ctx.selectedUsers)("allowOrderSelectedItems", false)("displayField", "name")("keyField", "entity")("listName", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 14, "step-interactive.roles"))("iconField", "icon")("iconType", "fa");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.share.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldPermissions);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.sharePermissions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_2__.DualPicklistComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: [".share-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  min-height: 250px;\n  min-width: 400px;\n}\n.share-modal[_ngcontent-%COMP%]   .nsm-dialog[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 600px;\n}\n\n  .interfax-group-modal {\n  max-width: 800px;\n}\n  .interfax-group-modal .modal-body {\n  min-height: 500px;\n}\n  .interfax-group-modal .modal-body > div {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2F1dG8tc2hhcmUvc2hhcmUtbW9kYWwvc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBTUU7RUFDRSxnQkFBQTtBQUhKO0FBS0k7RUFDRSxpQkFBQTtBQUhOO0FBS007RUFDRSxhQUFBO0FBSFIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhcmUtbW9kYWwge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5uc20tZGlhbG9nIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5pbnRlcmZheC1ncm91cC1tb2RhbCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 92231:
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/fax-settings-table/fax-settings-table.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxSettingsTableComponent: () => (/* binding */ FaxSettingsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/components/pagination/pagination.component */ 89593);
/* harmony import */ var _Bamba_Shared_src_components_table_product_detail_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/components/table-product-detail/table/table.component */ 78496);













const _c0 = ["table"];
const _c1 = a0 => [a0];
function FaxSettingsTableComponent_pagination_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "pagination", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onLoadPage", function FaxSettingsTableComponent_pagination_6_Template_pagination_onLoadPage_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onLoadPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentPage", ctx_r2.currentPage)("itemsTotal", ctx_r2.items == null ? null : ctx_r2.items.length)("pageSize", ctx_r2.pageSize)("itemsPageCount", ctx_r2.filteredItems == null ? null : ctx_r2.filteredItems.length)("canChangePageSize", true);
  }
}
class FaxSettingsTableComponent {
  constructor(translate, ngxSmartModalService, userPreferencesService, spinnerService, delay) {
    this.translate = translate;
    this.ngxSmartModalService = ngxSmartModalService;
    this.userPreferencesService = userPreferencesService;
    this.spinnerService = spinnerService;
    this.delay = delay;
    this.items = [];
    this.numberOfDisplayedRows = 5;
    this.heightUnset = false;
    this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.onProperties = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.filteredItems = [];
    this.currentPage = 1;
    this.pageSize = 5;
    this.pageSizePreferenceKey = 'contactlist-contacts-pagesize';
    this.updateTableHeight = () => {
      this.displayCurrentPage();
      const tableEl = this.table.grid.wrapper.nativeElement.parentElement.parentElement;
      if (!tableEl) return;
      if (this.heightUnset) return;
      if (!this.items || !this.items.length || !this.numberOfDisplayedRows || this.items.length <= this.numberOfDisplayedRows) {
        tableEl.style.height = 'initial';
        return;
      }
      tableEl.style.height = `${(this.numberOfDisplayedRows + 1) * 38}px`;
    };
    this.displayCurrentPage = () => {
      if (!this.pageable) {
        this.filteredItems = this.items;
        return;
      }
      const start = (this.currentPage - 1) * this.pageSize;
      const end = Math.min(start + this.pageSize, this.items.length);
      this.filteredItems = this.items.slice(start, end);
      this.spinnerService.hide();
    };
    this.onLoadPage = pagination => {
      if (pagination.pageSize != this.pageSize) this.userPreferencesService.setPreference(this.pageSizePreferenceKey, pagination.pageSize);
      this.currentPage = pagination.pageNumber;
      this.pageSize = pagination.pageSize;
      this.spinnerService.show(this.translate.instant('Common.Loading'), document.documentElement);
      this.delay.execute(this.displayCurrentPage, 10);
    };
    this.translateColumnHeaderText = () => {
      if (!this.columns) return;
      for (const c of this.columns) {
        if (!c.headerText) continue;
        c.headerText = this.translate.instant(c.headerText);
      }
    };
    this.closeConfirmModal = () => this.ngxSmartModalService.getModal('actionConfirmModal').close();
    this.confirmedDelete = rowIndex => {};
    this.confirmedDeleteItem = rowIndex => {};
  }
  ngOnInit() {
    this.translateColumnHeaderText();
    if (this.pageable) this.pageSize = this.userPreferencesService.getPreference(this.pageSizePreferenceKey, 25);
    this.displayCurrentPage();
  }
  ngOnChanges(changes) {
    if (changes.items) this.updateTableHeight();
  }
  deleteItem(action) {
    this.onDelete.emit(action.item.data);
  }
  showAddModal() {
    this.onAdd.emit();
  }
  showUpdateModal(action) {
    this.onProperties.emit(action.item);
  }
  static {
    this.ɵfac = function FaxSettingsTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxSettingsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_1__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FaxSettingsTableComponent,
      selectors: [["app-fax-settings-table"]],
      viewQuery: function FaxSettingsTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      inputs: {
        items: "items",
        pageable: "pageable",
        columns: "columns",
        sort: "sort",
        preferencesKey: "preferencesKey",
        numberOfDisplayedRows: "numberOfDisplayedRows",
        heightUnset: "heightUnset"
      },
      outputs: {
        onAdd: "onAdd",
        onProperties: "onProperties",
        onDelete: "onDelete"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 15,
      consts: [["table", ""], [1, "row", "h-100"], [1, "col-10", "pl-3"], [1, "settings-table", "tab-content", "min-h-fit-content", "content-padding", "h-100"], [1, "box-head--light-blue-bg"], [1, "box-head__right-panel", "project-list-pages"], [3, "currentPage", "itemsTotal", "pageSize", "itemsPageCount", "canChangePageSize", "onLoadPage", 4, "ngIf"], [3, "onDeleteIconClicked", "onInvokeAction", "items", "columns", "sort", "deleteIcon", "deleteIconTooltip", "preferencesKey"], [1, "col-2"], ["id", "button-add", 1, "btn", "btn-secondary", "add-btn", 3, "click"], [3, "onLoadPage", "currentPage", "itemsTotal", "pageSize", "itemsPageCount", "canChangePageSize"]],
      template: function FaxSettingsTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FaxSettingsTableComponent_pagination_6_Template, 1, 5, "pagination", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-table", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onDeleteIconClicked", function FaxSettingsTableComponent_Template_app_table_onDeleteIconClicked_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.deleteItem($event));
          })("onInvokeAction", function FaxSettingsTableComponent_Template_app_table_onInvokeAction_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.showUpdateModal($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaxSettingsTableComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.showAddModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fax-settings-table h-100 ", ctx.pageable ? "pageable" : "non-pageable", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pageable && ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.filteredItems)("columns", ctx.columns)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, ctx.sort))("deleteIcon", true)("deleteIconTooltip", "admin-inbound-fax-settings.delete-tooltip")("preferencesKey", ctx.preferencesKey);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 11, "admin-inbound-fax-settings.add-button-text"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent, _Bamba_Shared_src_components_table_product_detail_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: [".fax-settings-table .add-btn {\n  height: 38px;\n  max-width: 130px;\n}\n.fax-settings-table .settings-table {\n  border: 1px solid #dedede;\n  padding-right: 0;\n  padding-left: 0;\n  padding-bottom: 0;\n  border-top: 0;\n}\n.fax-settings-table .row {\n  overflow-x: auto;\n  flex-wrap: nowrap;\n}\n.fax-settings-table app-table {\n  display: block;\n}\n.fax-settings-table .box-head--light-blue-bg {\n  position: absolute;\n  top: 0px;\n  width: calc(100% - 31px);\n}\n.fax-settings-table.pageable app-table {\n  padding-top: 45px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2ZheC1zZXR0aW5ncy10YWJsZS9mYXgtc2V0dGluZ3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0FBSko7QUFRSTtFQUNFLGlCQUFBO0FBTk4iLCJzb3VyY2VzQ29udGVudCI6WyIuZmF4LXNldHRpbmdzLXRhYmxlIHtcclxuICAuYWRkLWJ0biB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNldHRpbmdzLXRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICBhcHAtdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYm94LWhlYWQtLWxpZ2h0LWJsdWUtYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzFweCk7XHJcbiAgfVxyXG5cclxuICAmLnBhZ2VhYmxlIHtcclxuICAgIGFwcC10YWJsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 92845:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-advanced-fax-settings/inbound-advanced-fax-settings.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboundAdvancedFaxSettingsComponent: () => (/* binding */ InboundAdvancedFaxSettingsComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _auto_share_auto_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auto-share/auto-share.component */ 41149);
/* harmony import */ var _auto_forward_auto_forward_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auto-forward/auto-forward.component */ 61909);












function InboundAdvancedFaxSettingsComponent_app_auto_share_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-auto-share", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inboundFaxSettings", ctx_r0.inboundFaxSettings)("preferencesKey", "inbound-advanced-fax-settings-auto-share")("selectedUser", ctx_r0.selectedUser);
  }
}
function InboundAdvancedFaxSettingsComponent_app_auto_forward_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-auto-forward", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inboundFaxSettings", ctx_r0.inboundFaxSettings)("contactLists", ctx_r0.contactLists);
  }
}
function InboundAdvancedFaxSettingsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "div", 4)(2, "div", 5)(3, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InboundAdvancedFaxSettingsComponent_div_7_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.backupTimeoutPeriodInMinutes, $event) || (ctx_r0.backupTimeoutPeriodInMinutes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "app-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InboundAdvancedFaxSettingsComponent_div_7_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.inboundFaxSettings.backup.faxNumber, $event) || (ctx_r0.inboundFaxSettings.backup.faxNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r0.timeoutPeriodInMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r0.backupTimeoutPeriodInMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.inboundFaxSettings.backup.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r0.faxNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r0.inboundFaxSettings.backup.faxNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.inboundFaxSettings.backup.enabled)("maxLength", 20);
  }
}
class InboundAdvancedFaxSettingsComponent {
  get backupTimeoutPeriodInMinutes() {
    return `${this.inboundFaxSettings.backup.timeoutPeriodInMinutes}`;
  }
  set backupTimeoutPeriodInMinutes(val) {
    this.inboundFaxSettings.backup.timeoutPeriodInMinutes = Number(val);
  }
  constructor(translateService, userStateService) {
    this.translateService = translateService;
    this.userStateService = userStateService;
    this.createFields = () => {
      this.timeoutPeriodInMinutes = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-inbound-fax-settings.time-to-wait-before'),
        placeholder: this.translateService.instant('admin-inbound-fax-settings.time-to-wait-before-placeholder'),
        required: false,
        allowNegativeNumbers: false
      });
      this.faxNumber = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-inbound-fax-settings.fax-number'),
        placeholder: this.translateService.instant('admin-inbound-fax-settings.fax-number-placeholder'),
        required: true
      });
    };
  }
  ngOnInit() {
    this.createFields();
    this.allowAutoShare = this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PERMISSIONS_ALLOWAUTOSHARE);
    this.allowAutoForward = this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PERMISSIONS_ALLOWFORWARDINGINBOUNDPCI) && this.inboundFaxSettings.hasOutboundService;
  }
  static {
    this.ɵfac = function InboundAdvancedFaxSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InboundAdvancedFaxSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: InboundAdvancedFaxSettingsComponent,
      selectors: [["app-inbound-advanced-fax-settings"]],
      inputs: {
        inboundFaxSettings: "inboundFaxSettings",
        contactLists: "contactLists",
        selectedUser: "selectedUser"
      },
      decls: 8,
      vars: 4,
      consts: [[1, "inbound-advanced-fax-settings", "w-100"], ["class", "h-100", 3, "inboundFaxSettings", "preferencesKey", "selectedUser", 4, "ngIf"], ["class", "h-100", 3, "inboundFaxSettings", "contactLists", 4, "ngIf"], [1, "section"], [1, "row"], [1, "col-6"], ["label", "admin-inbound-fax-settings.enable-received-fax-backup-notification", 3, "valueChange", "value"], ["class", "indented", 4, "ngIf"], [1, "h-100", 3, "inboundFaxSettings", "preferencesKey", "selectedUser"], [1, "h-100", 3, "inboundFaxSettings", "contactLists"], [1, "indented"], [3, "valueChange", "field", "value", "disabled"], [3, "valueChange", "field", "value", "disabled", "maxLength"]],
      template: function InboundAdvancedFaxSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, InboundAdvancedFaxSettingsComponent_app_auto_share_1_Template, 1, 3, "app-auto-share", 1)(2, InboundAdvancedFaxSettingsComponent_app_auto_forward_2_Template, 1, 2, "app-auto-forward", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "app-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InboundAdvancedFaxSettingsComponent_Template_app_checkbox_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.inboundFaxSettings.backup.enabled, $event) || (ctx.inboundFaxSettings.backup.enabled = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, InboundAdvancedFaxSettingsComponent_div_7_Template, 7, 7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allowAutoShare);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.allowAutoForward);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx.inboundFaxSettings.backup.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.inboundFaxSettings.backup.enabled);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _auto_share_auto_share_component__WEBPACK_IMPORTED_MODULE_5__.AutoShareComponent, _auto_forward_auto_forward_component__WEBPACK_IMPORTED_MODULE_6__.AutoForwardComponent],
      styles: [".inbound-advanced-fax-settings[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n  padding: 10px;\n  margin-bottom: 25px;\n}\n.inbound-advanced-fax-settings[_ngcontent-%COMP%]   .indented[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2luYm91bmQtYWR2YW5jZWQtZmF4LXNldHRpbmdzL2luYm91bmQtYWR2YW5jZWQtZmF4LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0ksa0JBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi5pbmJvdW5kLWFkdmFuY2VkLWZheC1zZXR0aW5ncyB7XHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmluZGVudGVkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 41369:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-barcodes-settings/inbound-barcodes-settings.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboundBarcodesSettingsComponent: () => (/* binding */ InboundBarcodesSettingsComponent)
/* harmony export */ });
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);



















const _c0 = () => ({
  suppressScrollY: false
});
function InboundBarcodesSettingsComponent_div_0_tr_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "app-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fieldChanged", function InboundBarcodesSettingsComponent_div_0_tr_43_div_5_Template_app_field_fieldChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setPageNumber(item_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.createField("", "", 3, false))("value", item_r4.page)("cssClasses", "p-1 text-center");
  }
}
function InboundBarcodesSettingsComponent_div_0_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19)(2, "div", 20)(3, "app-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fieldChanged", function InboundBarcodesSettingsComponent_div_0_tr_43_Template_app_field_fieldChanged_3_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onPageChanged(item_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, InboundBarcodesSettingsComponent_div_0_tr_43_div_5_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 24)(7, "div", 20)(8, "app-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InboundBarcodesSettingsComponent_div_0_tr_43_Template_app_field_valueChange_8_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r4.regEx, $event) || (item_r4.regEx = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 26)(10, "div", 20)(11, "app-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InboundBarcodesSettingsComponent_div_0_tr_43_Template_app_field_valueChange_11_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r4.targetStorage, $event) || (item_r4.targetStorage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 26)(13, "div", 20)(14, "app-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InboundBarcodesSettingsComponent_div_0_tr_43_Template_app_field_valueChange_14_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r4.value, $event) || (item_r4.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 26)(16, "div", 20)(17, "app-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function InboundBarcodesSettingsComponent_div_0_tr_43_Template_app_field_valueChange_17_listener($event) {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setItemMappingHandleMultiple($event, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td", 27)(19, "div", 28)(20, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InboundBarcodesSettingsComponent_div_0_tr_43_Template_i_click_20_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.deleteItem(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.createField("", "admin-inbound-fax-settings.on-page", 8, true, ctx_r1.onPageDataSource))("value", ctx_r1.getPageValue(item_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isCustomPageNumber(item_r4.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.createField("", "admin-inbound-fax-settings.matches", 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", item_r4.regEx);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.createField("", "admin-inbound-fax-settings.store-in", 8, true, ctx_r1.storeInDataSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", item_r4.targetStorage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.createField("", "admin-inbound-fax-settings.value", 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", item_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r1.createField("", "admin-inbound-fax-settings.handle-multiple-matches", 8, true, ctx_r1.handleMultipleDataSource))("value", ctx_r1.getItemMappingHandleMultiple(i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 12, "Metadata-Form.item-delete"));
  }
}
function InboundBarcodesSettingsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "div", 2)(3, "app-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InboundBarcodesSettingsComponent_div_0_Template_app_checkbox_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.inboundBarcodes.enabled, $event) || (ctx_r1.inboundBarcodes.enabled = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InboundBarcodesSettingsComponent_div_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onAddValue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "table")(15, "thead")(16, "tr")(17, "th", 9)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th", 11)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th", 12)(27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th", 12)(31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 12)(35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 13)(39, "div", 14)(40, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InboundBarcodesSettingsComponent_div_0_Template_i_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.deleteAllItems());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "tbody", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkDropListDropped", function InboundBarcodesSettingsComponent_div_0_Template_tbody_cdkDropListDropped_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.dropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, InboundBarcodesSettingsComponent_div_0_tr_43_Template, 22, 14, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r1.inboundBarcodes.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 12, "admin-inbound-fax-settings.barcodes-mapping"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 14, "admin-inbound-fax-settings.add-mapping"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 16, "admin-inbound-fax-settings.add-mapping"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 18, "admin-inbound-fax-settings.on-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 20, "admin-inbound-fax-settings.matches"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 22, "admin-inbound-fax-settings.store-in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 24, "admin-inbound-fax-settings.value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 26, "admin-inbound-fax-settings.handle-multiple-matches"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 28, "admin-inbound-fax-settings.delete-all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](30, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.inboundBarcodes.barcodeMappings);
  }
}
class InboundBarcodesSettingsComponent {
  constructor(translate, delay, interfaxService, toast, spinner) {
    this.translate = translate;
    this.delay = delay;
    this.interfaxService = interfaxService;
    this.toast = toast;
    this.spinner = spinner;
    this.createField = (label, placeholder, type, allowNegativeNumbers = true, datasource = null) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: type,
        label: label ? this.translate.instant(label) : '',
        placeholder: placeholder ? this.translate.instant(placeholder) : '',
        required: true,
        datasource: datasource,
        allowNegativeNumbers: allowNegativeNumbers
      });
    };
    this.propertiesLoaded = properties => {
      this.spinner.hide();
      const options = new Array();
      options.push({
        name: this.translate.instant(`admin-inbound-fax-settings.private-tag`),
        value: '#'
      });
      properties.sort((x, y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
      properties.forEach(p => options.push({
        name: p.name,
        value: `#${p.name}#${p.type}`
      }));
      this.storeInDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(options);
      this.customPropertiesLoaded = true;
    };
    this.propertiesLoadFailed = err => {
      this.spinner.hide();
      this.toast.error('admin-inbound-fax-settings.load-custom-properties-failed');
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__.Log.error('InboundBarcodesSettingsComponent.propertiesLoadFailed', err);
    };
    this.getPageValue = mapping => {
      if (Object.values(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_0__.PageLocation).includes(mapping.page)) return mapping.page;
      return _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_0__.PageLocation.Custom;
    };
    this.onPageChanged = (mapping, page) => {
      mapping.page = page == _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_0__.PageLocation.Custom ? '1' : page;
    };
    this.setPageNumber = (mapping, page) => {
      mapping.page = page;
    };
    this.isCustomPageNumber = value => !Object.values(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_0__.PageLocation).includes(value);
    this.onAddValue = () => {
      if (!this.inboundBarcodes.barcodeMappings) this.inboundBarcodes.barcodeMappings = [];
      this.inboundBarcodes.barcodeMappings.push(new _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_0__.BarcodeMapping());
      this.delay.execute(() => {
        this.directiveRef?.scrollToBottom(0, 300);
      }, 100);
    };
    this.deleteAllItems = () => {
      this.inboundBarcodes.barcodeMappings = [];
      this.delay.execute(() => {
        this.directiveRef?.scrollToTop(0, 300);
      }, 100);
    };
    this.deleteItem = item => {
      const rowIndexToDelete = this.inboundBarcodes.barcodeMappings.indexOf(item);
      if (rowIndexToDelete > -1) {
        this.inboundBarcodes.barcodeMappings.splice(rowIndexToDelete, 1);
      }
    };
    this.getItemMappingHandleMultiple = i => {
      return `${this.inboundBarcodes.barcodeMappings[i].mappingHandleMultiple}`;
    };
    this.setItemMappingHandleMultiple = (val, i) => {
      this.inboundBarcodes.barcodeMappings[i].mappingHandleMultiple = Number(val);
    };
  }
  ngOnInit() {
    this.onPageDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.EnumDataSource(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_0__.PageLocation, 'PageLocationEnum', this.translate);
    this.handleMultipleDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.EnumDataSource(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MappingHandleMultiple, 'MappingHandleMultipleEnum', this.translate);
    this.spinner.show(this.translate.instant('Common.Loading'), document.documentElement);
    this.interfaxService.getCustomProperties(this.propertiesLoaded, this.propertiesLoadFailed);
  }
  dropped(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.moveItemInArray)(this.inboundBarcodes.barcodeMappings, event.previousIndex, event.currentIndex);
  }
  static {
    this.ɵfac = function InboundBarcodesSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InboundBarcodesSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_2__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: InboundBarcodesSettingsComponent,
      selectors: [["app-inbound-barcodes-settings"]],
      viewQuery: function InboundBarcodesSettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        }
      },
      inputs: {
        inboundBarcodes: "inboundBarcodes"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "inbound-barcodes-settings w-100", 4, "ngIf"], [1, "inbound-barcodes-settings", "w-100"], [1, "col-6"], ["label", "admin-inbound-fax-settings.process-received-fax-for-barcodes", 3, "valueChange", "value"], [1, "h-100", "d-flex", "flex-column", "ml-3", "mr-3"], [1, "d-flex", "align-items-end"], [1, "col-4", "pl-0"], [1, "col-8", "p-0", "text-right"], ["id", "btn-items-Add Item", 1, "add-button", "btn", "btn-secondary", "btn-minwidth", "mr-0", 2, "margin-bottom", "5px", 3, "click", "title"], ["width", "13%"], ["width", "7%"], ["width", "15%"], ["width", "20%"], [1, "table__th-control", "action-th", "delete-all"], [1, "text-center"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title"], ["fxFlex", "auto", "cdkDropList", "", 1, "ps", "col", "p-0", 3, "cdkDropListDropped", "perfectScrollbar"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], ["width", "13%", 1, "table__cell", 2, "cursor", "default !important"], [1, "table__cell-content"], [3, "fieldChanged", "field", "value"], ["width", "7%", 1, "table__cell", 2, "cursor", "default !important"], ["class", "table__cell-content", 4, "ngIf"], ["width", "15%", 1, "table__cell", 2, "cursor", "default !important"], [3, "valueChange", "field", "value"], ["width", "20%", 1, "table__cell", 2, "cursor", "default !important"], [1, "table__control-cell", "p-1", "d-flex", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "checkbox", "table__checkbox"], [3, "fieldChanged", "field", "value", "cssClasses"]],
      template: function InboundBarcodesSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, InboundBarcodesSettingsComponent_div_0_Template, 44, 31, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.inboundBarcodes && ctx.customPropertiesLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__.CheckboxComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.inbound-barcodes-settings[_ngcontent-%COMP%]   .table__control-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n.inbound-barcodes-settings[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.inbound-barcodes-settings[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 5px;\n  margin-left: 7px;\n}\n.inbound-barcodes-settings[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9hZG1pbi1pbmJvdW5kLWZheC1zZXR0aW5ncy9pbmJvdW5kLWJhcmNvZGVzLXNldHRpbmdzL2luYm91bmQtYmFyY29kZXMtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBM09JO0VBQ0UsaUJBQUE7QUE4T047QUExT0U7RUFDRSxlQUFBO0FBNE9KO0FBM09JO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBNk9OO0FBek9FO0VBQ0UsZUFBQTtBQTJPSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmluYm91bmQtYmFyY29kZXMtc2V0dGluZ3Mge1xyXG4gIC50YWJsZV9fY29udHJvbC1jZWxsIHtcclxuICAgIGkge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7855:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-general/inbound-general-fax-settings.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboundGeneralFaxSettingsComponent: () => (/* binding */ InboundGeneralFaxSettingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/core/email */ 38061);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/webintegration */ 6900);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fax-settings-table/fax-settings-table.component */ 92231);
/* harmony import */ var _notification_email_modal_notification_email_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-email-modal/notification-email-modal.component */ 46112);
/* harmony import */ var _webpost_efax_webpost_efax_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./webpost-efax/webpost-efax.component */ 39110);
/* harmony import */ var _webpost_uicworkflow_webpost_uicworkflow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./webpost-uicworkflow/webpost-uicworkflow.component */ 14006);
/* harmony import */ var _webpost_advanced_http_webpost_advanced_http_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./webpost-advanced-http/webpost-advanced-http.component */ 85410);
























const _c0 = a0 => [a0];
function InboundGeneralFaxSettingsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 3)(1, "div", 16)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "app-fax-settings-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onAdd", function InboundGeneralFaxSettingsComponent_div_1_Template_app_fax_settings_table_onAdd_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onAddNotificationEmail());
    })("onDelete", function InboundGeneralFaxSettingsComponent_div_1_Template_app_fax_settings_table_onDelete_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onDeleteNotificationEmail($event));
    })("onProperties", function InboundGeneralFaxSettingsComponent_div_1_Template_app_fax_settings_table_onProperties_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onPropertiesNotificationEmail($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 18)(7, "div", 6)(8, "app-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("valueChange", function InboundGeneralFaxSettingsComponent_div_1_Template_app_field_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.inboundFaxSettings.attachmentFormat, $event) || (ctx_r2.inboundFaxSettings.attachmentFormat = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 7, "admin-inbound-fax-settings.notify"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx_r2.notificationItems)("columns", ctx_r2.notificationColumns)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](9, _c0, ctx_r2.notificationSort))("preferencesKey", "inbound-fax-settings-notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("field", ctx_r2.attachmentFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("value", ctx_r2.inboundFaxSettings.attachmentFormat);
  }
}
function InboundGeneralFaxSettingsComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-webpost-uicworkflow", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inbound", ctx_r2.inboundFaxSettings);
  }
}
function InboundGeneralFaxSettingsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "div", 6)(3, "app-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("valueChange", function InboundGeneralFaxSettingsComponent_div_3_Template_app_checkbox_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.inboundFaxSettings.useAdvancedRouting, $event) || (ctx_r2.inboundFaxSettings.useAdvancedRouting = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, InboundGeneralFaxSettingsComponent_div_3_div_4_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("value", ctx_r2.inboundFaxSettings.useAdvancedRouting);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.inboundFaxSettings.useAdvancedRouting);
  }
}
function InboundGeneralFaxSettingsComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "app-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("valueChange", function InboundGeneralFaxSettingsComponent_div_7_div_4_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.inboundFaxSettings.webIntegration.url, $event) || (ctx_r2.inboundFaxSettings.webIntegration.url = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("field", ctx_r2.webServiceIntegrationUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("value", ctx_r2.inboundFaxSettings.webIntegration.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r2.inboundFaxSettings.webIntegration.enabled);
  }
}
function InboundGeneralFaxSettingsComponent_div_7_app_webpost_advanced_http_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-webpost-advanced-http", 28);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("configuration", ctx_r2.httpConfiguration)("substitutionVariables", ctx_r2.substitutionVariables);
  }
}
function InboundGeneralFaxSettingsComponent_div_7_app_webpost_efax_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-webpost-efax", 29);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("configuration", ctx_r2.efaxConfiguration);
  }
}
function InboundGeneralFaxSettingsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 23)(1, "div", 5)(2, "div", 6)(3, "app-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("valueChange", function InboundGeneralFaxSettingsComponent_div_7_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.inboundWebIntegrationType, $event) || (ctx_r2.inboundWebIntegrationType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("fieldChanged", function InboundGeneralFaxSettingsComponent_div_7_Template_app_field_fieldChanged_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onWebIntegrationChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, InboundGeneralFaxSettingsComponent_div_7_div_4_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, InboundGeneralFaxSettingsComponent_div_7_app_webpost_advanced_http_7_Template, 1, 2, "app-webpost-advanced-http", 25)(8, InboundGeneralFaxSettingsComponent_div_7_app_webpost_efax_8_Template, 1, 1, "app-webpost-efax", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("field", ctx_r2.webServiceIntegrationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("value", ctx_r2.inboundWebIntegrationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r2.inboundFaxSettings.webIntegration.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.inboundWebIntegrationType != "UICWorkflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.inboundWebIntegrationType == "Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.inboundWebIntegrationType == "EFax");
  }
}
function InboundGeneralFaxSettingsComponent_app_field_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("valueChange", function InboundGeneralFaxSettingsComponent_app_field_11_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.deleteFaxImageOption, $event) || (ctx_r2.deleteFaxImageOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("field", ctx_r2.deleteFaxImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("value", ctx_r2.deleteFaxImageOption);
  }
}
function InboundGeneralFaxSettingsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-notification-email-modal", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("notification", ctx_r2.modalEditNotification);
  }
}
class Item extends _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_2__.Notification {}
class InboundGeneralFaxSettingsComponent {
  get inboundWebIntegrationType() {
    if (this.inboundFaxSettings.webIntegration.webIntegrationType == _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.WebIntegrationType.HTTPPost) return 'Post';
    if (this.inboundFaxSettings.webIntegration.webIntegrationType == _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.WebIntegrationType.XMLWebService) return 'WS';
    if (this.inboundFaxSettings.webIntegration.webIntegrationType == _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.WebIntegrationType.Extended) return this.inboundFaxSettings.webIntegration.extendedConfiguration.type;
    return ''; // rought-roo
  }
  set inboundWebIntegrationType(val) {
    if (val == 'WS') this.inboundFaxSettings.webIntegration.webIntegrationType = _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.WebIntegrationType.XMLWebService;
    if (val == 'Post') this.inboundFaxSettings.webIntegration.webIntegrationType = _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.WebIntegrationType.HTTPPost;
    if (val == 'Http') {
      this.inboundFaxSettings.webIntegration.webIntegrationType = _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.WebIntegrationType.Extended;
      this.inboundFaxSettings.webIntegration.extendedConfiguration = this.httpConfiguration;
    }
    if (val == 'EFax') {
      this.inboundFaxSettings.webIntegration.webIntegrationType = _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.WebIntegrationType.Extended;
      this.inboundFaxSettings.webIntegration.extendedConfiguration = this.efaxConfiguration;
    }
  }
  get deleteFaxImageOption() {
    return `${this.inboundFaxSettings.deleteFaxImage}`;
  }
  set deleteFaxImageOption(val) {
    this.inboundFaxSettings.deleteFaxImage = Number(val);
  }
  constructor(translate, ngxSmartModalService, userStateService, toastrService) {
    this.translate = translate;
    this.ngxSmartModalService = ngxSmartModalService;
    this.userStateService = userStateService;
    this.toastrService = toastrService;
    this.notificationItems = [];
    this.emailFormatText = [];
    this.showNotificationEmailModal = false;
    this.notificationEmailKey = '';
    this.efaxConfiguration = new _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.EFAXConfiguration({
      fileType: 'pdf',
      contentType: 'Entire',
      userName: '',
      password: ''
    });
    this.httpConfiguration = new _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_3__.HttpConfiguration({});
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.createEmailFormatTextOptions = () => {
      this.emailFormatText.push(this.translate.instant('EmailFormatEnum.PlainWithLink'));
      this.emailFormatText.push(this.translate.instant('EmailFormatEnum.Plain'));
      this.emailFormatText.push(this.translate.instant('EmailFormatEnum.Html'));
      this.emailFormatText.push(this.translate.instant('EmailFormatEnum.NEC'));
    };
    this.onWebIntegrationChanged = value => {
      this.webServiceIntegrationUrl.substitutable = this.inboundWebIntegrationType == 'Http';
    };
    this.setExtendedConfiguration = () => {
      console.log(`setExtendedConfiguraition ${this.inboundWebIntegrationType}`);
      if (this.inboundWebIntegrationType == 'Http') {
        this.httpConfiguration = this.inboundFaxSettings.webIntegration.extendedConfiguration;
      }
      if (this.inboundWebIntegrationType == 'EFax') {
        this.efaxConfiguration = this.inboundFaxSettings.webIntegration.extendedConfiguration;
      }
    };
    this.createFields = () => {
      this.attachmentFormat = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-inbound-fax-settings.attachment-format'),
        placeholder: '',
        required: true,
        datasource: this.attachmentFormatDataSource()
      });
      this.deleteFaxImage = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-inbound-fax-settings.delete-fax-image-after-notification'),
        required: true,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_2__.DeleteFaxImageOptions, 'DeleteFaxImageOptionsEnum', this.translate)
      });
      this.webServiceIntegrationType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-inbound-fax-settings.web-service-integration'),
        required: true,
        datasource: this.webIntegrationTypesDataSource()
      });
      this.webServiceIntegrationUrl = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-inbound-fax-settings.url'),
        placeholder: this.translate.instant('admin-inbound-fax-settings.url-placeholder'),
        required: true,
        substitutable: this.inboundWebIntegrationType == 'Http',
        datasource: this.substitutionVariables
      });
    };
    this.createSubstitutionVariables = () => {
      const options = new Array();
      options.push({
        name: 'TransactionType',
        value: 'TransactionType'
      });
      options.push({
        name: 'TransactionID',
        value: 'TransactionID'
      });
      options.push({
        name: 'PhoneNumber',
        value: 'PhoneNumber'
      });
      options.push({
        name: 'MessageType',
        value: 'MessageType'
      });
      options.push({
        name: 'MessageSize',
        value: 'MessageSize'
      });
      options.push({
        name: 'RemoteCSID',
        value: 'RemoteCSID'
      });
      options.push({
        name: 'PageCount',
        value: 'PageCount'
      });
      options.push({
        name: 'Status',
        value: 'Status'
      });
      options.push({
        name: 'RecordingDuration',
        value: 'RecordingDuration'
      });
      options.push({
        name: 'ReceiveTimeUTC',
        value: 'ReceiveTimeUTC'
      });
      options.push({
        name: 'CallerID',
        value: 'CallerID'
      });
      options.push({
        name: 'DocumentAsPDFBase64',
        value: 'DocumentAsPDFBase64'
      });
      options.push({
        name: 'DocumentAsTIFBase64',
        value: 'DocumentAsTIFBase64'
      });
      options.push({
        name: 'DocumentAsPDFByteCount',
        value: 'DocumentAsPDFByteCount'
      });
      options.push({
        name: 'DocumentAsTIFByteCount',
        value: 'DocumentAsTIFByteCount'
      });
      options.sort((x, y) => x.name.localeCompare(y.name));
      this.substitutionVariables = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
    };
    this.onAddNotificationEmail = () => {
      this.showNotificationEmailModal = true;
      this.notificationEmailKey = '';
      this.modalEditNotification = new Item({
        email: '',
        encrypt: false,
        sign: false,
        format: _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_2__.EmailFormat.Html,
        hasDigitalId: false
      });
      this.notificationEmailModalInstance.open();
    };
    this.onDeleteNotificationEmail = item => {
      this.inboundFaxSettings.notifications = this.inboundFaxSettings.notifications.filter(n => n.email != item.email);
      this.notificationItems = this.inboundFaxSettings.notifications.map(e => this.createTableItem(e));
    };
    this.onPropertiesNotificationEmail = item => {
      this.modalEditNotification = new Item(item);
      this.notificationEmailKey = item.email;
      this.showNotificationEmailModal = true;
      this.notificationEmailModalInstance.open();
    };
    this.onSaveNotificationEmailModal = () => {
      if (this.inboundFaxSettings.notifications.some(x => x.email.toLowerCase() === this.modalEditNotification.email.toLowerCase() && this.modalEditNotification.email.toLowerCase() !== this.notificationEmailKey.toLowerCase())) {
        this.toastrService.error(this.translate.instant('admin-outbound-fax-settings.email-exists'));
        return;
      }
      if (this.notificationEmailKey) {
        let notificationIndex = this.inboundFaxSettings.notifications.findIndex(n => n.email === this.notificationEmailKey);
        if (notificationIndex >= 0) {
          this.inboundFaxSettings.notifications[notificationIndex] = this.modalEditNotification;
        }
      } else {
        this.inboundFaxSettings.notifications.push(this.modalEditNotification);
      }
      this.notificationItems = this.inboundFaxSettings.notifications.map(e => this.createTableItem(e));
      this.onCloseNotificationEmailModal();
    };
    this.onCloseNotificationEmailModal = () => {
      this.notificationEmailModalInstance.close();
      this.showNotificationEmailModal = false;
    };
    this.notificationEmailIsValid = () => {
      return _blocks_core_email__WEBPACK_IMPORTED_MODULE_1__.Email.isValid(this.modalEditNotification?.email);
    };
  }
  ngOnInit() {
    this.createSubstitutionVariables();
    this.createFields();
    this.createEmailFormatTextOptions();
    this.notificationColumns = this.getColumns();
    const defaultSort = {
      field: '1',
      dir: 'asc'
    };
    this.notificationSort = defaultSort;
    this.inboundFaxSettings.notifications.forEach(notification => {
      this.notificationItems.push(this.createTableItem(notification));
    });
    this.inboundFaxSettings.webIntegration.enabled;
    this.allowEmailNotifications = this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PERMISSIONS_ALLOWINBOUNDEMAILNOTIFICATIONS);
    this.setExtendedConfiguration();
    this.advancedRoutingEnabled = this.userStateService.hasFeature(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Feature.InterFAXAdvanced);
  }
  ngAfterViewInit() {
    this.notificationEmailModalInstance = this.ngxSmartModalService.getModal('notificationEmailModal');
    if (!this.notificationEmailModalInstance) throw new Error('Failed to initialize: notificationEmailModalInstance');
    this.subscriptions.add(this.notificationEmailModalInstance.onClose.subscribe(() => this.showNotificationEmailModal = false));
  }
  attachmentFormatDataSource() {
    const attachmentFormatOptions = new Array();
    attachmentFormatOptions.push({
      name: this.translate.instant('admin-inbound-fax-settings.attachment-format-pdf'),
      value: this.translate.instant('admin-inbound-fax-settings.attachment-format-pdf')
    });
    attachmentFormatOptions.push({
      name: this.translate.instant('admin-inbound-fax-settings.attachment-format-tif'),
      value: this.translate.instant('admin-inbound-fax-settings.attachment-format-tif')
    });
    attachmentFormatOptions.push({
      name: this.translate.instant('admin-inbound-fax-settings.attachment-format-tiff-g3'),
      value: this.translate.instant('admin-inbound-fax-settings.attachment-format-tiff-g3')
    });
    attachmentFormatOptions.push({
      name: this.translate.instant('admin-inbound-fax-settings.attachment-format-tiff-g4'),
      value: this.translate.instant('admin-inbound-fax-settings.attachment-format-tiff-g4')
    });
    return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(attachmentFormatOptions);
  }
  webIntegrationTypesDataSource() {
    const options = new Array();
    options.push({
      name: this.translate.instant('WebIntegrationTypeEnum.HTTPPost'),
      value: 'Post'
    });
    options.push({
      name: this.translate.instant('WebIntegrationTypeEnum.XMLWebService'),
      value: 'WS'
    });
    options.push({
      name: this.translate.instant('WebIntegrationTypeEnum.EFax'),
      value: 'EFax'
    });
    options.push({
      name: this.translate.instant('WebIntegrationTypeEnum.Http'),
      value: 'Http'
    });
    return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
  }
  createTableItem(notification) {
    notification['icon'] = 'fa-envelope fa-lg';
    notification['emailFormatText'] = this.emailFormatText[notification.format];
    notification['optionsText'] = notification.sign ? this.translate.instant('admin-inbound-fax-settings.signed') : '';
    if (notification.encrypt) {
      if (notification.encrypt && notification['optionsText']) {
        notification['optionsText'] += this.translate.instant('admin-inbound-fax-settings.and');
      }
      notification['optionsText'] += this.translate.instant('admin-inbound-fax-settings.encrypted');
    }
    const hasDigitalIdResId = notification.hasDigitalId ? 'admin-inbound-fax-settings.digital-id-uploaded' : 'admin-inbound-fax-settings.digital-id-not-uploaded';
    notification['hasDigitalIdText'] = this.translate.instant(hasDigitalIdResId);
    const tableItem = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(notification, this.notificationColumns, this.translate);
    tableItem.data.defaultAction = {
      name: this.translate.instant('admin-inbound-fax-settings.properties')
    };
    return tableItem;
  }
  getColumns() {
    const columns = [];
    columns.push(this.createColumn('type', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.FontAwesome, '', 32, 'icon'));
    columns.push(this.createColumn('destination', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.ActionLink, this.translate.instant('admin-inbound-fax-settings.notification-email'), 200, 'email', true));
    columns.push(this.createColumn('format', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.Text, this.translate.instant('admin-inbound-fax-settings.notification-email-format'), 200, 'emailFormatText'));
    columns.push(this.createColumn('options', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.Text, this.translate.instant('admin-inbound-fax-settings.column-options'), 200, 'optionsText'));
    columns.push(this.createColumn('digitalid', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.Text, this.translate.instant('admin-inbound-fax-settings.notification-digital-id-status'), 200, 'hasDigitalIdText'));
    return columns;
  }
  createColumn(id, displayType, columnName, width, itemProperty, stretch = false) {
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
    this.ɵfac = function InboundGeneralFaxSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InboundGeneralFaxSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_17__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: InboundGeneralFaxSettingsComponent,
      selectors: [["app-inbound-general-fax-settings"]],
      inputs: {
        inboundFaxSettings: "inboundFaxSettings"
      },
      decls: 24,
      vars: 20,
      consts: [["notificationEmailModal", ""], [1, "inbound-general-fax-settings"], ["class", "section", 4, "ngIf"], [1, "section"], [4, "ngIf"], [1, "row"], [1, "col-6"], ["label", "admin-inbound-fax-settings.enable-web-service-integration", 3, "valueChange", "value"], ["class", "indented", 4, "ngIf"], [3, "field", "value", "valueChange", 4, "ngIf"], ["identifier", "notificationEmailModal", 3, "closable", "escapable", "dismissable"], [3, "title", "closeIconHandler"], ["class", "modal-body", "appAutoFocusFirstInput", "", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-light", "btn-minwidth", 3, "click"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click", "disabled"], [1, "enable-check-box"], [1, "notification-table", 3, "onAdd", "onDelete", "onProperties", "items", "columns", "sort", "preferencesKey"], [1, "row", "mt-3"], [3, "valueChange", "field", "value"], ["label", "admin-inbound-fax-settings.use-advanced-routing", 3, "valueChange", "value"], ["class", "row", 4, "ngIf"], [3, "inbound"], [1, "indented"], [3, "valueChange", "fieldChanged", "field", "value", "disabled"], [3, "configuration", "substitutionVariables", 4, "ngIf"], [3, "configuration", 4, "ngIf"], [3, "valueChange", "field", "value", "disabled"], [3, "configuration", "substitutionVariables"], [3, "configuration"], ["appAutoFocusFirstInput", "", 1, "modal-body"], [1, "d-flex", "flex-column"], [3, "notification"]],
      template: function InboundGeneralFaxSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, InboundGeneralFaxSettingsComponent_div_1_Template, 9, 11, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, InboundGeneralFaxSettingsComponent_div_3_Template, 5, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 5)(5, "div", 6)(6, "app-checkbox", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("valueChange", function InboundGeneralFaxSettingsComponent_Template_app_checkbox_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.inboundFaxSettings.webIntegration.enabled, $event) || (ctx.inboundFaxSettings.webIntegration.enabled = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, InboundGeneralFaxSettingsComponent_div_7_Template, 9, 6, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 3)(9, "div", 5)(10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, InboundGeneralFaxSettingsComponent_app_field_11_Template, 1, 2, "app-field", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ngx-smart-modal", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "app-modal-header", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, InboundGeneralFaxSettingsComponent_div_16_Template, 3, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 13)(18, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InboundGeneralFaxSettingsComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.onCloseNotificationEmailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InboundGeneralFaxSettingsComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.onSaveNotificationEmailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.allowEmailNotifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.advancedRoutingEnabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("value", ctx.inboundFaxSettings.webIntegration.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.inboundFaxSettings.webIntegration.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.inboundFaxSettings.isPCI);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 14, ctx.notificationEmailKey ? "admin-inbound-fax-settings.notification-email-title" : "admin-inbound-fax-settings.add-notification-email"))("closeIconHandler", ctx.onCloseNotificationEmailModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showNotificationEmailModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 16, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.notificationEmailIsValid());
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 18, "MainHeader.OK"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_6__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__.CheckboxComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_17__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_8__.ModalHeaderComponent, _fax_settings_table_fax_settings_table_component__WEBPACK_IMPORTED_MODULE_9__.FaxSettingsTableComponent, _notification_email_modal_notification_email_modal_component__WEBPACK_IMPORTED_MODULE_10__.NotificationEmailModalComponent, _webpost_efax_webpost_efax_component__WEBPACK_IMPORTED_MODULE_11__.WebpostEfaxComponent, _webpost_uicworkflow_webpost_uicworkflow_component__WEBPACK_IMPORTED_MODULE_12__.WebpostUicworkflowComponent, _webpost_advanced_http_webpost_advanced_http_component__WEBPACK_IMPORTED_MODULE_13__.WebpostAdvancedHttpComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: [".inbound-general-fax-settings .notification-table {\n  height: 200px;\n}\n.inbound-general-fax-settings .section {\n  background-color: #fafafa;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2luYm91bmQtZ2VuZXJhbC9pbmJvdW5kLWdlbmVyYWwtZmF4LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5pbmJvdW5kLWdlbmVyYWwtZmF4LXNldHRpbmdzIHtcclxuICAubm90aWZpY2F0aW9uLXRhYmxlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 46112:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-general/notification-email-modal/notification-email-modal.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationEmailModalComponent: () => (/* binding */ NotificationEmailModalComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);








class NotificationEmailModalComponent {
  get notificationFormat() {
    return `${this.notification.format}`;
  }
  set notificationFormat(val) {
    this.notification.format = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
    this.createFields = () => {
      this.fieldEmail = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-inbound-fax-settings.notification-email'),
        placeholder: this.translate.instant('admin-inbound-fax-settings.notification-email-placeholder'),
        required: true
      });
      const emailFormatDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__.EmailFormat, 'EmailFormatEnum', this.translate);
      emailFormatDataSource.options.sort((a, b) => a.name.localeCompare(b.name));
      this.fieldEmailFormat = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-inbound-fax-settings.notification-email-format'),
        required: false,
        datasource: emailFormatDataSource
      });
    };
    this.getDigitalIdStatusText = () => {
      if (this.notification) {
        return this.notification.hasDigitalId ? this.translate.instant('admin-inbound-fax-settings.digital-id-uploaded') : this.translate.instant('admin-inbound-fax-settings.digital-id-not-uploaded');
      }
      return '';
    };
    this.createFields();
  }
  static {
    this.ɵfac = function NotificationEmailModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationEmailModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: NotificationEmailModalComponent,
      selectors: [["app-notification-email-modal"]],
      inputs: {
        notification: "notification"
      },
      decls: 18,
      vars: 10,
      consts: [[1, "inbound-general-fax-settings", "notification-email-modal"], [1, "row"], [1, "col-12"], [3, "valueChange", "field", "value"], ["label", "admin-inbound-fax-settings.notification-sign-messages", 3, "valueChange", "value"], ["label", "admin-inbound-fax-settings.notification-encrypt-messages", 3, "valueChange", "value", "disabled"], [1, "row", "mt-3", "section"], [3, "text", "localize"], [1, "digital-id-status", "m-2"]],
      template: function NotificationEmailModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function NotificationEmailModalComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.notification.email, $event) || (ctx.notification.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function NotificationEmailModalComponent_Template_app_field_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.notificationFormat, $event) || (ctx.notificationFormat = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "app-checkbox", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function NotificationEmailModalComponent_Template_app_checkbox_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.notification.sign, $event) || (ctx.notification.sign = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 1)(11, "div", 2)(12, "app-checkbox", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function NotificationEmailModalComponent_Template_app_checkbox_valueChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.notification.encrypt, $event) || (ctx.notification.encrypt = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6)(14, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.notification.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldEmailFormat);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.notificationFormat);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.notification.sign);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.notification.encrypt);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.notification.hasDigitalId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "admin-inbound-fax-settings.notification-digital-id-status")("localize", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getDigitalIdStatusText());
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__.LabelComponent],
      styles: [".notification-email-modal[_ngcontent-%COMP%]   .digital-id-status[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #656565;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2luYm91bmQtZ2VuZXJhbC9ub3RpZmljYXRpb24tZW1haWwtbW9kYWwvbm90aWZpY2F0aW9uLWVtYWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24tZW1haWwtbW9kYWwge1xyXG4gIC5kaWdpdGFsLWlkLXN0YXR1cyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzY1NjU2NTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 71537:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-general/webpost-advanced-http/http-bodypart/http-bodypart.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpBodypartComponent: () => (/* binding */ HttpBodypartComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../Bamba.Shared */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../blocks/InterFAX/Models/webintegration */ 6900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_components_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Bamba.Shared/src/components/icons/delete-icon/delete-icon.component */ 11398);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);









function HttpBodypartComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 13)(2, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function HttpBodypartComponent_div_0_div_4_Template_app_field_valueChange_2_listener($event) {
      const header_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](header_r3.name, $event) || (header_r3.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 13)(4, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function HttpBodypartComponent_div_0_div_4_Template_app_field_valueChange_4_listener($event) {
      const header_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](header_r3.value, $event) || (header_r3.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 14)(6, "app-delete-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HttpBodypartComponent_div_0_div_4_Template_app_delete_icon_click_6_listener() {
      const header_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onDeleteHeader(header_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const header_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r3.getNameFieldFor(header_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", header_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r3.getValueFieldFor(header_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", header_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 5, "admin-inbound-fax-settings.http-delete-header"));
  }
}
function HttpBodypartComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "admin-inbound-fax-settings.no-headers"), " ");
  }
}
function HttpBodypartComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function HttpBodypartComponent_div_0_div_15_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r3.bodyPart.bodyText, $event) || (ctx_r3.bodyPart.bodyText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r3.httpBodyTextField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r3.bodyPart.bodyText);
  }
}
function HttpBodypartComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HttpBodypartComponent_div_0_div_4_Template, 8, 7, "div", 5)(5, HttpBodypartComponent_div_0_div_5_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 9)(9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HttpBodypartComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onAddHeader());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function HttpBodypartComponent_div_0_Template_app_field_valueChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r3.bodyPartType, $event) || (ctx_r3.bodyPartType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HttpBodypartComponent_div_0_div_15_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("localize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.bodyPart.headers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.bodyPart.headers.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, "admin-inbound-fax-settings.http-add-header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r3.httpBodyTypesField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r3.bodyPartType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.showBodyTextField);
  }
}
class HttpBodypartComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.onAddHeader = () => {
      this.bodyPart.headers.push(new _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__.HTTPHeader());
    };
    this.onDeleteHeader = header => {
      const index = this.bodyPart.headers.indexOf(header);
      this.bodyPart.headers.splice(index, 1);
    };
    this.getNameFieldFor = header => {
      return new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: '',
        placeholder: this.translateService.instant('admin-inbound-fax-settings.http-header-name-placeholder'),
        substitutable: true,
        datasource: this.substitutionVariables
      });
    };
    this.getValueFieldFor = header => {
      return new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: '',
        placeholder: this.translateService.instant('admin-inbound-fax-settings.http-header-value-placeholder'),
        substitutable: true,
        datasource: this.substitutionVariables
      });
    };
    this.createFields = () => {
      this.httpBodyTypesField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-inbound-fax-settings.http-body-type'),
        placeholder: '',
        required: true,
        datasource: this.httpMethodsDataSource()
      });
      this.httpBodyTextField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.LargeText,
        label: this.translateService.instant('admin-inbound-fax-settings.http-body-text'),
        placeholder: '',
        substitutable: true,
        datasource: this.substitutionVariables
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  get bodyPartType() {
    return _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__.HTTPBodyPartTypes[this.bodyPart.type];
  }
  set bodyPartType(value) {
    this.bodyPart.type = _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__.HTTPBodyPartTypes[value];
  }
  get showBodyTextField() {
    if (this.bodyPart.type == _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__.HTTPBodyPartTypes.TextASCII) return true;
    if (this.bodyPart.type == _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__.HTTPBodyPartTypes.TextUTF8) return true;
    if (this.bodyPart.type == _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__.HTTPBodyPartTypes.TextUTF16) return true;
    return false;
  }
  httpMethodsDataSource() {
    const options = new Array();
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-body-part-text-ascii'),
      value: 'TextASCII'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-body-part-text-utf8'),
      value: 'TextUTF8'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-body-part-text-utf16'),
      value: 'TextUTF16'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-body-part-document-pdf'),
      value: 'DocumentPDF'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-body-part-document-tif'),
      value: 'DocumentTIF'
    });
    if (this.main) options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-body-part-multipart'),
      value: 'Multipart'
    });
    return new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
  }
  static {
    this.ɵfac = function HttpBodypartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpBodypartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HttpBodypartComponent,
      selectors: [["app-http-bodypart"]],
      inputs: {
        bodyPart: "bodyPart",
        main: "main",
        substitutionVariables: "substitutionVariables"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "bodypart", 4, "ngIf"], [1, "bodypart"], [1, "row"], [1, "col-12"], ["text", "admin-inbound-fax-settings.http-header-label", 3, "localize"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "no-headers", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-9"], [1, "col-3"], ["id", "button-add", 1, "btn", "btn-secondary", "add-btn", 3, "click"], [3, "valueChange", "field", "value"], [4, "ngIf"], [1, "col-5"], [1, "col-2"], [1, "d-flex", "delete-icon", 3, "click", "title"], [1, "no-headers"]],
      template: function HttpBodypartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HttpBodypartComponent_div_0_Template, 16, 9, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.httpBodyTypesField);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_components_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_2__.DeleteIconComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: [".delete-icon[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n\n.no-headers[_ngcontent-%COMP%] {\n  color: gray;\n  padding-left: 24px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2luYm91bmQtZ2VuZXJhbC93ZWJwb3N0LWFkdmFuY2VkLWh0dHAvaHR0cC1ib2R5cGFydC9odHRwLWJvZHlwYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5uby1oZWFkZXJzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 85410:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-general/webpost-advanced-http/webpost-advanced-http.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebpostAdvancedHttpComponent: () => (/* binding */ WebpostAdvancedHttpComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/InterFAX/Models/webintegration */ 6900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_components_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/components/icons/delete-icon/delete-icon.component */ 11398);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _http_bodypart_http_bodypart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-bodypart/http-bodypart.component */ 71537);










function WebpostAdvancedHttpComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16)(5, "app-delete-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WebpostAdvancedHttpComponent_div_7_div_4_Template_app_delete_icon_click_5_listener() {
      const bodyPart_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onDeleteBodyPart(bodyPart_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 0)(8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-http-bodypart", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const bodyPart_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("body-parts-box ", i_r5 != 0 ? "mt-3" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, "admin-inbound-fax-settings.http-delete-bodypart"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("main", false)("bodyPart", bodyPart_r3)("substitutionVariables", ctx_r3.substitutionVariables);
  }
}
function WebpostAdvancedHttpComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "admin-inbound-fax-settings.no-body-parts"), " ");
  }
}
function WebpostAdvancedHttpComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WebpostAdvancedHttpComponent_div_7_div_4_Template, 10, 9, "div", 9)(5, WebpostAdvancedHttpComponent_div_7_div_5_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 13)(9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WebpostAdvancedHttpComponent_div_7_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onAddBodyPart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("localize", true)("required", true)("text", "admin-inbound-fax-settings.body-parts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.configuration.bodyParts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.configuration.bodyParts.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 6, "admin-inbound-fax-settings.http-add-bodypart"), " ");
  }
}
class WebpostAdvancedHttpComponent {
  get configurationTimeout() {
    return `${this.configuration.timeoutSeconds}`;
  }
  set configurationTimeout(val) {
    this.configuration.timeoutSeconds = Number(val);
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.onAddBodyPart = () => {
      this.configuration.bodyParts.push(new _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__.HTTPBodyPart());
    };
    this.onDeleteBodyPart = bodyPart => {
      const index = this.configuration.bodyParts.indexOf(bodyPart);
      this.configuration.bodyParts.splice(index, 1);
    };
    this.createFields = () => {
      this.httpMethodField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-inbound-fax-settings.http-advanced-method'),
        placeholder: '',
        required: true,
        datasource: this.httpMethodsDataSource()
      });
      this.timeoutField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translateService.instant('admin-inbound-fax-settings.http-advanced-timeout'),
        placeholder: '',
        required: true,
        allowNegativeNumbers: false
      });
    };
    this.createFields();
  }
  ngOnInit() {}
  httpMethodsDataSource() {
    const options = new Array();
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-method-get'),
      value: 'Get'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-method-post'),
      value: 'Post'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-method-delete'),
      value: 'Delete'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.http-method-put'),
      value: 'Put'
    });
    // TBD
    // options.push({ name: this.translateService.instant('admin-inbound-fax-settings.http-method-head'), value: 'Head' });
    // options.push({ name: this.translateService.instant('admin-inbound-fax-settings.http-method-options'), value: 'Options' });
    return new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
  }
  static {
    this.ɵfac = function WebpostAdvancedHttpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebpostAdvancedHttpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: WebpostAdvancedHttpComponent,
      selectors: [["app-webpost-advanced-http"]],
      inputs: {
        configuration: "configuration",
        substitutionVariables: "substitutionVariables"
      },
      decls: 8,
      vars: 8,
      consts: [[1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"], [1, "pt-4"], [3, "main", "bodyPart", "substitutionVariables"], [4, "ngIf"], [1, "row", "pt-4"], [1, "col-12"], [3, "localize", "required", "text"], [4, "ngFor", "ngForOf"], ["class", "no-body-parts", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-9"], [1, "col-3"], ["id", "button-add", 1, "btn", "btn-secondary", "add-btn", 3, "click"], [1, "col-11"], [1, "col-1"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "click", "title"], [1, "no-body-parts"]],
      template: function WebpostAdvancedHttpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function WebpostAdvancedHttpComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.configuration.httpMethod, $event) || (ctx.configuration.httpMethod = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function WebpostAdvancedHttpComponent_Template_app_field_valueChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.configurationTimeout, $event) || (ctx.configurationTimeout = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-http-bodypart", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WebpostAdvancedHttpComponent_div_7_Template, 12, 8, "div", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.httpMethodField);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.configuration.httpMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.timeoutField);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.configurationTimeout);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("main", true)("bodyPart", ctx.configuration.main)("substitutionVariables", ctx.substitutionVariables);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.configuration.main.type == 255);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_components_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_2__.DeleteIconComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__.LabelComponent, _http_bodypart_http_bodypart_component__WEBPACK_IMPORTED_MODULE_5__.HttpBodypartComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: [".body-parts-box[_ngcontent-%COMP%] {\n  border: 1px solid #dedede;\n  padding: 5px;\n}\n\n.no-body-parts[_ngcontent-%COMP%] {\n  color: gray;\n  padding-left: 24px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FkbWluLWluYm91bmQtZmF4LXNldHRpbmdzL2luYm91bmQtZ2VuZXJhbC93ZWJwb3N0LWFkdmFuY2VkLWh0dHAvd2VicG9zdC1hZHZhbmNlZC1odHRwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1wYXJ0cy1ib3gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbi5uby1ib2R5LXBhcnRzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 39110:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-general/webpost-efax/webpost-efax.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebpostEfaxComponent: () => (/* binding */ WebpostEfaxComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_webintegration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/InterFAX/Models/webintegration */ 6900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);






class WebpostEfaxComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.createFields = () => {
      this.fileTypeField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-inbound-fax-settings.efax-fileType'),
        placeholder: '',
        required: true,
        datasource: this.fileTypeFormatDataSource()
      });
      this.contentTypeField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-inbound-fax-settings.efax-contentType'),
        placeholder: '',
        required: true,
        datasource: this.contentTypeFormatDataSource()
      });
      this.userNameField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-inbound-fax-settings.efax-username'),
        placeholder: this.translateService.instant('admin-inbound-fax-settings.efax-username-placeholder')
      });
      this.passwordField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Password,
        label: this.translateService.instant('admin-inbound-fax-settings.efax-password'),
        placeholder: this.translateService.instant('admin-inbound-fax-settings.efax-password-placeholder')
      });
    };
  }
  ngOnInit() {
    console.log(this.configuration);
    this.createFields();
  }
  fileTypeFormatDataSource() {
    const options = new Array();
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.efax-filetype-pdf'),
      value: 'pdf'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.efax-filetype-tif'),
      value: 'tif'
    });
    return new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
  }
  contentTypeFormatDataSource() {
    const options = new Array();
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.efax-contenttype-entire'),
      value: 'Entire'
    });
    options.push({
      name: this.translateService.instant('admin-inbound-fax-settings.efax-contenttype-paged'),
      value: 'Paged'
    });
    return new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
  }
  static {
    this.ɵfac = function WebpostEfaxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebpostEfaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: WebpostEfaxComponent,
      selectors: [["app-webpost-efax"]],
      inputs: {
        configuration: "configuration"
      },
      decls: 12,
      vars: 8,
      consts: [[1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"]],
      template: function WebpostEfaxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function WebpostEfaxComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.configuration.fileType, $event) || (ctx.configuration.fileType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function WebpostEfaxComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.configuration.contentType, $event) || (ctx.configuration.contentType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 0)(7, "div", 1)(8, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function WebpostEfaxComponent_Template_app_field_valueChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.configuration.userName, $event) || (ctx.configuration.userName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function WebpostEfaxComponent_Template_app_field_valueChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.configuration.password, $event) || (ctx.configuration.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fileTypeField);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.configuration.fileType);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.contentTypeField);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.configuration.contentType);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.userNameField);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.configuration.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.passwordField);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.configuration.password);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 14006:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/admin-inbound-fax-settings/inbound-general/webpost-uicworkflow/webpost-uicworkflow.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAccessibleWorkflowsDataSource: () => (/* binding */ UserAccessibleWorkflowsDataSource),
/* harmony export */   WebpostUicworkflowComponent: () => (/* binding */ WebpostUicworkflowComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_inbound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/InterFAX/Models/inbound */ 15963);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);







class WebpostUicworkflowComponent {
  constructor(hydraApi) {
    this.hydraApi = hydraApi;
    this.createFields = () => {
      this.workflowsField = new _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: this.workflowDataSource
      });
    };
  }
  ngOnInit() {
    this.workflowDataSource = new UserAccessibleWorkflowsDataSource(this.hydraApi);
    this.createFields();
  }
  static {
    this.ɵfac = function WebpostUicworkflowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebpostUicworkflowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: WebpostUicworkflowComponent,
      selectors: [["app-webpost-uicworkflow"]],
      inputs: {
        inbound: "inbound"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "row"], [1, "col-6"], [3, "valueChange", "field", "value"]],
      template: function WebpostUicworkflowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-field", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function WebpostUicworkflowComponent_Template_app_field_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.inbound.advancedRoutingWorkflowId, $event) || (ctx.inbound.advancedRoutingWorkflowId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.workflowsField);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.inbound.advancedRoutingWorkflowId);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class UserAccessibleWorkflowsDataSource {
  constructor(hydraApi) {
    this.hydraApi = hydraApi;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.loadWorkflowsFailed = err => {
      this.workflowsLoaded([]);
    };
    this.workflowsLoaded = workflows => {
      const options = [];
      workflows.forEach(c => {
        options.push({
          name: c.name,
          value: c.id
        });
      });
      this.callback(options);
    };
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.callback = successCallBack;
    this.hydraApi.getWorkflowsUserCanSubmitTo(this.workflowsLoaded, this.loadWorkflowsFailed);
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_admin-fax-settings_admin-inbound-fax-settings_admin-inbound-fax-setting-baa1b5.js.map