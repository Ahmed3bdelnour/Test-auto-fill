"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-grouping_admin-grouping_module_ts"],{

/***/ 2485:
/*!***********************************************************************!*\
  !*** ./src/app/views/admin-grouping/admin-grouping-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGroupingRoutingModule: () => (/* binding */ AdminGroupingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_grouping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-grouping.component */ 23049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'duplicate/:groupingId',
  component: _admin_grouping_component__WEBPACK_IMPORTED_MODULE_0__.AdminGroupingComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: 'create',
  component: _admin_grouping_component__WEBPACK_IMPORTED_MODULE_0__.AdminGroupingComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':groupingId',
  component: _admin_grouping_component__WEBPACK_IMPORTED_MODULE_0__.AdminGroupingComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminGroupingRoutingModule {
  static {
    this.ɵfac = function AdminGroupingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminGroupingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminGroupingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminGroupingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 23049:
/*!******************************************************************!*\
  !*** ./src/app/views/admin-grouping/admin-grouping.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGroupingComponent: () => (/* binding */ AdminGroupingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/models/deployments */ 44524);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/components/created-modified/created-modified.component */ 60622);
/* harmony import */ var _blocks_components_variable_list_variable_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/components/variable-list/variable-list.component */ 20944);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);





























const _c0 = () => ({
  suppressScrollY: false
});
function AdminGroupingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "div", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "app-created-modified", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 9)(5, "div", 10)(6, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function AdminGroupingComponent_div_4_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.grouping.name, $event) || (ctx_r1.grouping.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function AdminGroupingComponent_div_4_Template_app_field_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.grouping.environmentId, $event) || (ctx_r1.grouping.environmentId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 12, 1)(12, "div", 13)(13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "app-variable-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sideScroll_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    const tabScroll_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](11);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](15, _c0))("autoUpdatePerfectScroll", sideScroll_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx_r1.grouping.id)("createdDate", ctx_r1.grouping.dateCreatedUTC)("modifiedDate", ctx_r1.grouping.dateModifiedUTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r1.grouping.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r1.fieldEnvironment);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r1.grouping.environmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](16, _c0))("autoUpdatePerfectScroll", tabScroll_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 13, "admin-grouping.variables"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("variables", ctx_r1.grouping.variables);
  }
}
class AdminGroupingComponent {
  constructor(translate, router, route, hydraApi, toastr, errorsService, spinner, ngxSmartModalService, cdr) {
    this.translate = translate;
    this.router = router;
    this.route = route;
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.ngxSmartModalService = ngxSmartModalService;
    this.cdr = cdr;
    this.rightControls = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
    this.createButtons = () => {
      this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
      this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onCancel, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
      this.rightControls.push(this.saveButton);
      this.rightControls.push(this.cancelButton);
      this.saveButton.setTranslation(this.translate.instant('Common.Save'));
      this.cancelButton.setTranslation(this.translate.instant('Common.Cancel'));
    };
    this.createFields = () => {
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-grouping.name'),
        placeholder: this.translate.instant('admin-grouping.name-placeholder'),
        required: true
      });
      this.fieldEnvironment = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-grouping.environment'),
        placeholder: this.translate.instant('admin-grouping.environment-placeholder'),
        required: false,
        datasource: new EnvironmentDataSource(this.hydraApi, this.translate)
      });
    };
    this.CreateField = (label, required = false) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant(label),
        placeholder: this.translate.instant(label),
        required: required
      });
    };
    this.onSave = () => {
      if (this.grouping.id) {
        this.hydraApi.updateGrouping(this.grouping, this.groupingSaved, this.groupingSaveFailed);
      } else {
        this.hydraApi.createGrouping(this.grouping, this.groupingSaved, this.groupingSaveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.groupingSaved = result => {
      if (result.success) {
        this.toastr.success(this.translate.instant('admin-grouping.saved'));
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-grouping.validation-errors');
      }
      this.spinner.hide();
    };
    this.groupingSaveFailed = error => {
      this.toastr.error(this.translate.instant('admin-grouping.save-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-grouping.save-failed', error);
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('product/settings/BambaDWFToolsApplication/BambaDWFToolsApplication-Upland.Bamba.DWFTools.IFXReleaseManager.Groupings.Folder');
    };
    this.groupingLoaded = ApiResult => {
      if (this.routeData.type === 'duplicate') {
        ApiResult.object.name = `${this.translate.instant('Admin.CopyOf')} ${ApiResult.object.name}`;
        ApiResult.object.id = '';
      }
      this.grouping = new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__.Grouping({
        ...ApiResult.object
      });
      this.cdr.markForCheck();
      this.spinner.hide();
    };
    this.groupingFailed = error => {
      this.toastr.error(this.translate.instant('admin-grouping.load-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-grouping.load-failed', error);
      this.spinner.hide();
    };
    this.loadItems = () => {
      if (this.routeData.type === 'properties' || this.routeData.type === 'duplicate') {
        this.spinner.show(this.translate.instant('admin-grouping.loading-grouping'), document.body);
        this.hydraApi.getGrouping(this.routeParams.groupingId, this.groupingLoaded, this.groupingFailed);
      }
    };
  }
  ngOnInit() {
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      if (this.routeData.type == 'create') {
        this.grouping = new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__.Grouping({
          name: '',
          variables: new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__.Variables()
        });
      } else {
        this.loadItems();
      }
    }));
    this.createButtons();
    this.createFields();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminGroupingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminGroupingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: AdminGroupingComponent,
      selectors: [["app-admin-grouping"]],
      decls: 5,
      vars: 5,
      consts: [["sideScroll", "ngxPerfectScrollbar"], ["tabScroll", "ngxPerfectScrollbar"], ["appAutoFocusFirstInput", "", 1, "admin-grouping", "project-list-dashboard-body", "d-flex", "flex-column", "container-fluid"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "h-100"], ["class", "panel row m-0", 4, "ngIf"], [1, "panel", "row", "m-0"], ["fxFlex", "auto", "appAutoFocusFirstInput", "", 1, "col-12", "col-md-3", "properties-panel", "properties-panel-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [3, "id", "createdDate", "modifiedDate"], [1, "row"], [1, "col"], [3, "valueChange", "field", "value"], ["fxFlex", "auto", 1, "col-12", "col-md-9", "panel", "p-0", "border-bottom-0", "d-flex", "flex-column", "tab-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [1, "panel-wrapper", "vcenter"], [1, "col", "panel-header"], [3, "variables"]],
      template: function AdminGroupingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-secondary-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, AdminGroupingComponent_div_4_Template, 17, 17, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, "admin-grouping.header-text"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.grouping);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_8__.CreatedModifiedComponent, _blocks_components_variable_list_variable_list_component__WEBPACK_IMPORTED_MODULE_9__.VariableListComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_10__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_11__.AutoFocusFirstInputDirective, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_21__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_12__.AutoUpdatePerfectScrollDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-grouping {\n  line-height: 1.4em;\n  margin-bottom: 15px;\n  height: 100%;\n  position: relative;\n}\n.admin-grouping.min-h-fit-content,\n.admin-grouping .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-grouping .columns-list {\n  border-radius: 5px;\n  background-color: #c3e3ff;\n}\n.admin-grouping .cursor-pointer {\n  cursor: pointer;\n}\n.admin-grouping .list-group {\n  border-top: 2px solid #dee2e6;\n}\n.admin-grouping .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-grouping .secondary-header .section-header {\n  position: static !important;\n}\n.admin-grouping .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-grouping .properties-panel {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.admin-grouping .validator-panel {\n  padding-left: 20px;\n}\n.admin-grouping .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-grouping .panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-grouping .panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-grouping .color-preview,\n.admin-grouping .image-preview {\n  width: 24px;\n  height: 24px;\n}\n\n.tab-h {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 55px - 30) !important;\n}\n\n.properties-panel-h {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 85px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWdyb3VwaW5nL2FkbWluLWdyb3VwaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFB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T0o7QUFuT0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFxT0o7QUFsT0U7O0VBRUUsV0FBQTtFQUNBLFlBQUE7QUFvT0o7O0FBaE9BO0VBQ0Usa0JBQUE7RUFDQSxpRUFBQTtBQW1PRjs7QUFoT0E7RUFDRSxrQkFBQTtFQUNBLDREQUFBO0FBbU9GIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4uYWRtaW4tZ3JvdXBpbmcge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYubWluLWgtZml0LWNvbnRlbnQsXHJcbiAgLm1pbi1oLWZpdC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sdW1ucy1saXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2UzZmY7XHJcbiAgfVxyXG5cclxuICAuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnZhbGlkYXRvci1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yLXByZXZpZXcsXHJcbiAgLmltYWdlLXByZXZpZXcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGFiLWgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDU1cHggLSAzMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb3BlcnRpZXMtcGFuZWwtaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gODVweCkgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}
class EnvironmentDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(hydraApiService, translateService) {
    super();
    this.hydraApiService = hydraApiService;
    this.translateService = translateService;
    this.groupingsLoaded = result => {
      if (!result.success) return;
      const options = new Array();
      result.object.forEach(ifxEnvironment => {
        options.push({
          name: ifxEnvironment.name,
          value: ifxEnvironment.id
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
    this.hydraApiService.getIFXEnvironments(this.groupingsLoaded, this.failed);
  }
}

/***/ }),

/***/ 7356:
/*!***************************************************************!*\
  !*** ./src/app/views/admin-grouping/admin-grouping.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGroupingModule: () => (/* binding */ AdminGroupingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _admin_grouping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-grouping-routing.module */ 2485);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _admin_grouping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-grouping.component */ 23049);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);










class AdminGroupingModule {
  static {
    this.ɵfac = function AdminGroupingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminGroupingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AdminGroupingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_grouping_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminGroupingRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoUpdatePerfectScrollModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminGroupingModule, {
    declarations: [_admin_grouping_component__WEBPACK_IMPORTED_MODULE_3__.AdminGroupingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_grouping_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminGroupingRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoUpdatePerfectScrollModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-grouping_admin-grouping_module_ts.js.map