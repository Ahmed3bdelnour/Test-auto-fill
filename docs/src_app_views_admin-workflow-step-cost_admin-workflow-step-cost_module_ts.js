"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-workflow-step-cost_admin-workflow-step-cost_module_ts"],{

/***/ 52603:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin-workflow-step-cost/admin-workflow-step-cost-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWorkflowStepCostRoutingModule: () => (/* binding */ AdminWorkflowStepCostRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-workflow-step-cost.component */ 33595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'create',
  component: _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':workflowcostid',
  component: _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminWorkflowStepCostRoutingModule {
  static {
    this.ɵfac = function AdminWorkflowStepCostRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminWorkflowStepCostRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminWorkflowStepCostRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminWorkflowStepCostRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 33595:
/*!**************************************************************************************!*\
  !*** ./src/app/views/admin-workflow-step-cost/admin-workflow-step-cost.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWorkflowStepCostComponent: () => (/* binding */ AdminWorkflowStepCostComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/models/workflow-step-page-license-cost */ 43466);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);


























const _c0 = () => ({
  suppressScrollY: false
});
function AdminWorkflowStepCostComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5)(1, "div", 6, 0)(3, "app-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.workflowStepPageLicenseCost.workflowStepDisplayName, $event) || (ctx_r1.workflowStepPageLicenseCost.workflowStepDisplayName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.baseCostType, $event) || (ctx_r1.baseCostType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.baseCostValue, $event) || (ctx_r1.baseCostValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const panelScroll_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c0))("autoUpdatePerfectScroll", panelScroll_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", ctx_r1.stepDisplayNameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx_r1.workflowStepPageLicenseCost.workflowStepDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", ctx_r1.costTypeField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx_r1.baseCostType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", ctx_r1.costValueField);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx_r1.baseCostValue);
  }
}
class AdminWorkflowStepCostComponent {
  get baseCostType() {
    return this.workflowStepPageLicenseCost?.baseCostType.toString();
  }
  set baseCostType(val) {
    this.workflowStepPageLicenseCost.baseCostType = Number(val);
  }
  get baseCostValue() {
    return this.workflowStepPageLicenseCost?.baseCostValue.toString();
  }
  set baseCostValue(val) {
    this.workflowStepPageLicenseCost.baseCostValue = Number(val);
  }
  constructor(translateService, router, route, hydraApi, toastr, errorsService, spinner, ngxSmartModalService) {
    this.translateService = translateService;
    this.router = router;
    this.route = route;
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.ngxSmartModalService = ngxSmartModalService;
    this.rightControls = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    this.createButtons = () => {
      this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
      this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onCancel, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
      this.rightControls.push(this.saveButton);
      this.rightControls.push(this.cancelButton);
      this.saveButton.setTranslation(this.translateService.instant('Common.Save'));
      this.cancelButton.setTranslation(this.translateService.instant('Common.Cancel'));
    };
    this.createFields = () => {
      this.stepDisplayNameField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-workflow-step-cost.step-name'),
        placeholder: this.translateService.instant('admin-workflow-step-cost.step-name'),
        required: true
      });
      const options = [{
        name: this.translateService.instant('admin-workflow-step-cost.constant'),
        value: '0'
      }, {
        name: this.translateService.instant('admin-workflow-step-cost.multiplier'),
        value: '1'
      }];
      this.costTypeField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-workflow-step-cost.type'),
        placeholder: this.translateService.instant('admin-workflow-step-cost.type'),
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options),
        required: true
      });
      this.costValueField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Decimal,
        label: this.translateService.instant('admin-workflow-step-cost.value'),
        placeholder: this.translateService.instant('admin-workflow-step-cost.value'),
        required: true
      });
    };
    this.loadItems = () => {
      if (this.routeData.type !== 'properties') return;
      this.spinner.show(this.translateService.instant('admin-workflow-step-cost.loading-item'), document.body);
      this.hydraApi.getWorkflowStepCost(this.routeParams.workflowcostid, this.workflowStepCostLoaded, this.loadingWorkflowStepCostFailed);
    };
    this.workflowStepCostLoaded = loadedItem => {
      this.workflowStepPageLicenseCost = loadedItem;
      this.spinner.hide();
    };
    this.loadingWorkflowStepCostFailed = error => {
      this.toastr.error(this.translateService.instant('admin-workflow-step-cost.loading-item-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-workflow-step-cost.loading-item-failed', error);
      this.spinner.hide();
    };
    this.onSave = () => {
      if (this.workflowStepPageLicenseCost.id) {
        this.hydraApi.updateWorkflowStepCost(this.workflowStepPageLicenseCost, this.savedSuccessfully, this.saveFailed);
      } else {
        this.hydraApi.createWorkflowStepCost(this.workflowStepPageLicenseCost, this.savedSuccessfully, this.saveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.savedSuccessfully = result => {
      if (result.success) {
        this.toastr.success(this.translateService.instant('admin-workflow-step-cost.saved'));
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-workflow-step-cost.validation-errors');
      }
      this.spinner.hide();
    };
    this.saveFailed = error => {
      this.toastr.error(this.translateService.instant('admin-workflow-step-cost.save-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-workflow-step-cost.save-failed', error);
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('settings/BambaAdministratorApplication/BambaAdministratorApplication-Upland.Bamba.Application.Settings.WorkflowStepPageLicenseCosts');
    };
  }
  ngOnInit() {
    this.createButtons();
    this.createFields();
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      if (this.routeData.type == 'create') {
        this.workflowStepPageLicenseCost = new _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepPageLicenseCost({
          workflowStepClassName: '',
          workflowStepDisplayName: '',
          baseCostType: _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepCostType.Constant,
          baseCostValue: 0,
          group: _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__.PricingGroup.Global,
          dateCreatedUTC: new Date(new Date().toUTCString()),
          dateModifiedUTC: new Date(new Date().toUTCString())
        });
      } else {
        this.loadItems();
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminWorkflowStepCostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminWorkflowStepCostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_17__.NgxSmartModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: AdminWorkflowStepCostComponent,
      selectors: [["app-admin-workflow-step-cost"]],
      decls: 5,
      vars: 5,
      consts: [["panelScroll", "ngxPerfectScrollbar"], ["appAutoFocusFirstInput", "", 1, "admin-workflow-step-cost", "project-list-dashboard-body", "d-flex", "flex-column", "container-fluid"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "h-100"], ["class", "panel row m-0", 4, "ngIf"], [1, "panel", "row", "m-0"], ["fxFlex", "auto", 1, "col-xl-3", "col-l-4", "col-md-5", "col-sm-6", "properties-panel", "properties-panel-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [3, "valueChange", "field", "value", "disabled"], [3, "valueChange", "field", "value"]],
      template: function AdminWorkflowStepCostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-secondary-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, AdminWorkflowStepCostComponent_div_4_Template, 6, 10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, "admin-workflow-step-cost.header-text"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.workflowStepPageLicenseCost);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__.AutoFocusFirstInputDirective, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_10__.AutoUpdatePerfectScrollDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.admin-workflow-step-cost[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n  margin-bottom: 15px;\n  height: 100%;\n  position: relative;\n}\n.admin-workflow-step-cost.min-h-fit-content[_ngcontent-%COMP%], \n.admin-workflow-step-cost[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .properties-panel[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n\n.properties-panel-h[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 85px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLXdvcmtmbG93LXN0ZXAtY29zdC9hZG1pbi13b3JrZmxvdy1zdGVwLWNvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWdQRjtBQTlPRTs7RUFFRSxrQ0FBQTtBQWdQSjtBQTdPRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUErT0o7QUE3T0k7RUFDRSwyQkFBQTtBQStPTjtBQTNPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUE2T0o7QUExT0U7RUFDRSxpQkFBQTtFQUNBLDhDRGtEc0I7RUNqRHRCLCtCQUFBO0FBNE9KOztBQXhPQTtFQUNFLGtCQUFBO0VBQ0EsNERBQUE7QUEyT0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5hZG1pbi13b3JrZmxvdy1zdGVwLWNvc3Qge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYubWluLWgtZml0LWNvbnRlbnQsXHJcbiAgLm1pbi1oLWZpdC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxufVxyXG5cclxuLnByb3BlcnRpZXMtcGFuZWwtaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gODVweCkgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 73274:
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-workflow-step-cost/admin-workflow-step-cost.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWorkflowStepCostModule: () => (/* binding */ AdminWorkflowStepCostModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _admin_workflow_step_cost_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-workflow-step-cost-routing.module */ 52603);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-workflow-step-cost.component */ 33595);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);










class AdminWorkflowStepCostModule {
  static {
    this.ɵfac = function AdminWorkflowStepCostModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminWorkflowStepCostModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AdminWorkflowStepCostModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_workflow_step_cost_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoUpdatePerfectScrollModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminWorkflowStepCostModule, {
    declarations: [_admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_3__.AdminWorkflowStepCostComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_workflow_step_cost_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoUpdatePerfectScrollModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-workflow-step-cost_admin-workflow-step-cost_module_ts.js.map