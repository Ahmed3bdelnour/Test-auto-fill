"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-machine_admin-machine_module_ts"],{

/***/ 12757:
/*!*********************************************************************!*\
  !*** ./src/app/views/admin-machine/admin-machine-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMachineRoutingModule: () => (/* binding */ AdminMachineRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_machine_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-machine.component */ 25129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'duplicate/:machineId',
  component: _admin_machine_component__WEBPACK_IMPORTED_MODULE_0__.AdminMachineComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: 'create',
  component: _admin_machine_component__WEBPACK_IMPORTED_MODULE_0__.AdminMachineComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':machineId',
  component: _admin_machine_component__WEBPACK_IMPORTED_MODULE_0__.AdminMachineComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminMachineRoutingModule {
  static {
    this.ɵfac = function AdminMachineRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMachineRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminMachineRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminMachineRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 25129:
/*!****************************************************************!*\
  !*** ./src/app/views/admin-machine/admin-machine.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMachineComponent: () => (/* binding */ AdminMachineComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/models/deployments */ 44524);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/components/created-modified/created-modified.component */ 60622);
/* harmony import */ var _blocks_components_variable_list_variable_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/components/variable-list/variable-list.component */ 20944);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _installed_component_installed_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./installed-component/installed-component.component */ 31453);































const _c0 = () => ({
  suppressScrollY: false
});
function AdminMachineComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-installed-component-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("installedComponents", ctx_r1.machine.installedComponents)("components", ctx_r1.components);
  }
}
function AdminMachineComponent_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-variable-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("variables", ctx_r1.machine.variables);
  }
}
function AdminMachineComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6)(1, "div", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "app-created-modified", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 9)(5, "div", 10)(6, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("valueChange", function AdminMachineComponent_div_4_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.machine.name, $event) || (ctx_r1.machine.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("valueChange", function AdminMachineComponent_div_4_Template_app_field_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.machine.groupingId, $event) || (ctx_r1.machine.groupingId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 12)(11, "app-tab-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("tabSelected", function AdminMachineComponent_div_4_Template_app_tab_bar_tabSelected_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.activateTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, AdminMachineComponent_div_4_div_14_Template, 2, 2, "div", 15)(15, AdminMachineComponent_div_4_div_15_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sideScroll_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    const tabScroll_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](13);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](14, _c0))("autoUpdatePerfectScroll", sideScroll_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx_r1.machine.id)("createdDate", ctx_r1.machine.dateCreatedUTC)("modifiedDate", ctx_r1.machine.dateModifiedUTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("value", ctx_r1.machine.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("field", ctx_r1.fieldGrouping);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("value", ctx_r1.machine.groupingId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("tabs", ctx_r1.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](15, _c0))("autoUpdatePerfectScroll", tabScroll_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", "components" == ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", "variables" == ctx_r1.activeTab);
  }
}
class AdminMachineComponent {
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
    this.tabs = [];
    this.activeTab = '';
    this.components = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
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
        label: this.translate.instant('admin-machine.name'),
        placeholder: this.translate.instant('admin-machine.name-placeholder'),
        required: true
      });
      this.fieldGrouping = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-machine.grouping'),
        placeholder: this.translate.instant('admin-machine.grouping-placeholder'),
        required: false,
        datasource: new GroupingDataSource(this.hydraApi, this.translate)
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
      if (this.machine.id) {
        this.hydraApi.updateMachine(this.machine, this.machineSaved, this.machineSaveFailed);
      } else {
        this.hydraApi.createMachine(this.machine, this.machineSaved, this.machineSaveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.machineSaved = result => {
      if (result.success) {
        this.toastr.success(this.translate.instant('admin-machine.saved'));
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-machine.validation-errors');
      }
      this.spinner.hide();
    };
    this.machineSaveFailed = error => {
      this.toastr.error(this.translate.instant('admin-machine.save-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-machine.save-failed', error);
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('product/settings/BambaDWFToolsApplication/BambaDWFToolsApplication-Upland.Bamba.DWFTools.IFXReleaseManager.Machines.Folder');
    };
    this.machineLoaded = ApiResult => {
      if (this.routeData.type === 'duplicate') {
        ApiResult.object.name = `${this.translate.instant('Admin.CopyOf')} ${ApiResult.object.name}`;
        ApiResult.object.id = '';
      }
      this.machine = new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__.Machine({
        ...ApiResult.object
      });
      this.cdr.markForCheck();
      this.spinner.hide();
    };
    this.machineFailed = error => {
      this.toastr.error(this.translate.instant('admin-machine.load-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-machine.load-failed', error);
      this.spinner.hide();
    };
    this.loadItems = () => {
      if (this.routeData.type === 'properties' || this.routeData.type === 'duplicate') {
        this.spinner.show(this.translate.instant('admin-machine.loading-machine'), document.body);
        this.hydraApi.getMachine(this.routeParams.machineId, this.machineLoaded, this.machineFailed);
      }
    };
    this.activateTab = view => {
      this.activeTab = view;
    };
  }
  ngOnInit() {
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      if (this.routeData.type == 'create') {
        this.machine = new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__.Machine({
          name: '',
          variables: new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_2__.Variables(),
          groupingId: '',
          id: '',
          installedComponents: []
        });
      } else {
        this.loadItems();
      }
    }));
    this.createButtons();
    this.createFields();
    this.createTabs();
    this.loadComponents();
  }
  loadComponents() {
    this.hydraApi.getComponents(apiResult => {
      if (apiResult.success) {
        this.components = apiResult.object;
        this.activeTab = 'components';
      } else {
        err => console.error(err);
      }
    }, err => console.error(err));
  }
  createTabs() {
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('components', this.translate.instant('admin-machine.components')));
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('variables', this.translate.instant('admin-machine.variables')));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminMachineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMachineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_21__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: AdminMachineComponent,
      selectors: [["app-admin-machine"]],
      decls: 5,
      vars: 5,
      consts: [["sideScroll", "ngxPerfectScrollbar"], ["tabScroll", "ngxPerfectScrollbar"], ["appAutoFocusFirstInput", "", 1, "admin-machine", "project-list-dashboard-body", "d-flex", "flex-column", "min-h-fit-content"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "h-100"], ["class", "panel row m-0", 4, "ngIf"], [1, "panel", "row", "m-0"], ["fxFlex", "auto", "appAutoFocusFirstInput", "", 1, "col-12", "col-md-3", "properties-panel", "properties-panel-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [3, "id", "createdDate", "modifiedDate"], [1, "row"], [1, "col"], [3, "valueChange", "field", "value"], [1, "col-12", "col-md-9", "panel", "p-0", "border-bottom-0", "d-flex", "flex-column"], [3, "tabSelected", "tabs"], ["fxFlex", "auto", 1, "tab-content", "content-padding", "pr-3", "tab-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [4, "ngIf"], [3, "installedComponents", "components"], [3, "variables"]],
      template: function AdminMachineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-secondary-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, AdminMachineComponent_div_4_Template, 16, 16, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "admin-machine.header-text"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.machine);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_8__.CreatedModifiedComponent, _blocks_components_variable_list_variable_list_component__WEBPACK_IMPORTED_MODULE_9__.VariableListComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_10__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_11__.AutoFocusFirstInputDirective, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_12__.AutoUpdatePerfectScrollDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_13__.TabBarComponent, _installed_component_installed_component_component__WEBPACK_IMPORTED_MODULE_14__.InstalledComponentComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-machine {\n  line-height: 1.4em;\n  margin-bottom: 15px;\n  height: 100%;\n  position: relative;\n}\n.admin-machine.min-h-fit-content,\n.admin-machine .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-machine .columns-list {\n  border-radius: 5px;\n  background-color: #c3e3ff;\n}\n.admin-machine .cursor-pointer {\n  cursor: pointer;\n}\n.admin-machine .list-group {\n  border-top: 2px solid #dee2e6;\n}\n.admin-machine .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-machine .secondary-header .section-header {\n  position: static !important;\n}\n.admin-machine .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-machine .properties-panel {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.admin-machine .validator-panel {\n  padding-left: 20px;\n}\n.admin-machine .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-machine .panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-machine .panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-machine .color-preview,\n.admin-machine .image-preview {\n  width: 24px;\n  height: 24px;\n}\n\n.tab-h {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 55px - 85px) !important;\n}\n\n.properties-panel-h {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 85px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1hY2hpbmUvYWRtaW4tbWFjaGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBZ1BGO0FBOU9FOztFQUVFLGtDQUFBO0FBZ1BKO0FBN09FO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQStPSjtBQTVPRTtFQUNFLGVBQUE7QUE4T0o7QUEzT0U7RUFDRSw2QkFBQTtBQTZPSjtBQTFPRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUE0T0o7QUExT0k7RUFDRSwyQkFBQTtBQTRPTjtBQXhPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUEwT0o7QUF2T0U7RUFDRSxpQkFBQTtFQUNBLDhDRHFDc0I7RUNwQ3RCLCtCQUFBO0FBeU9KO0FBdE9FO0VBQ0Usa0JBQUE7QUF3T0o7QUFyT0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXVPSjtBQXBPRTtFQUNFLHlCRGVNO0VDZE4sZ0NBQUE7RUFDQSxhQUFBO0FBc09KO0FBbk9FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBcU9KO0FBbE9FOztFQUVFLFdBQUE7RUFDQSxZQUFBO0FBb09KOztBQWpPQTtFQUNFLGtCQUFBO0VBQ0EsbUVBQUE7QUFvT0Y7O0FBak9BO0VBQ0Usa0JBQUE7RUFDQSw0REFBQTtBQW9PRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmFkbWluLW1hY2hpbmUge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYubWluLWgtZml0LWNvbnRlbnQsXHJcbiAgLm1pbi1oLWZpdC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sdW1ucy1saXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2UzZmY7XHJcbiAgfVxyXG5cclxuICAuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnZhbGlkYXRvci1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yLXByZXZpZXcsXHJcbiAgLmltYWdlLXByZXZpZXcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG59XHJcbi50YWItaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gNTVweCAtIDg1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzLXBhbmVsLWgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDg1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}
class GroupingDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(hydraApiService, translateService) {
    super();
    this.hydraApiService = hydraApiService;
    this.translateService = translateService;
    this.groupingsLoaded = result => {
      if (!result.success) return;
      const options = new Array();
      result.object.forEach(grouping => {
        options.push({
          name: grouping.name,
          value: grouping.id
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

/***/ 88860:
/*!*************************************************************!*\
  !*** ./src/app/views/admin-machine/admin-machine.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMachineModule: () => (/* binding */ AdminMachineModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _admin_machine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-machine.component */ 25129);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _admin_machine_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-machine-routing.module */ 12757);
/* harmony import */ var _installed_component_installed_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./installed-component/installed-component.component */ 31453);
/* harmony import */ var _installed_component_installed_component_modal_installed_component_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installed-component/installed-component-modal/installed-component-modal.component */ 13374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);












class AdminMachineModule {
  static {
    this.ɵfac = function AdminMachineModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMachineModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AdminMachineModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _admin_machine_routing_module__WEBPACK_IMPORTED_MODULE_4__.AdminMachineRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.TableProductDetailModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AdminMachineModule, {
    declarations: [_admin_machine_component__WEBPACK_IMPORTED_MODULE_2__.AdminMachineComponent, _installed_component_installed_component_component__WEBPACK_IMPORTED_MODULE_5__.InstalledComponentComponent, _installed_component_installed_component_modal_installed_component_modal_component__WEBPACK_IMPORTED_MODULE_6__.InstalledComponentModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _admin_machine_routing_module__WEBPACK_IMPORTED_MODULE_4__.AdminMachineRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.TableProductDetailModule]
  });
})();

/***/ }),

/***/ 13374:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/admin-machine/installed-component/installed-component-modal/installed-component-modal.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstalledComponentModalComponent: () => (/* binding */ InstalledComponentModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/models/deployments */ 44524);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_components_variable_list_variable_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/components/variable-list/variable-list.component */ 20944);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);













const _c0 = () => ({
  suppressScrollY: false
});
function InstalledComponentModalComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "app-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InstalledComponentModalComponent_div_4_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.installedComponent.componentId, $event) || (ctx_r2.installedComponent.componentId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fieldChanged", function InstalledComponentModalComponent_div_4_Template_app_field_fieldChanged_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onComponentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function InstalledComponentModalComponent_div_4_Template_app_field_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.installedComponent.version, $event) || (ctx_r2.installedComponent.version = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r2.fieldComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r2.installedComponent.componentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", ctx_r2.fieldVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r2.installedComponent.version);
  }
}
function InstalledComponentModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "app-variable-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("variablePending", function InstalledComponentModalComponent_div_5_Template_app_variable_list_variablePending_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onVariablePending($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("variables", ctx_r2.installedComponent.variables);
  }
}
function InstalledComponentModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-variable-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("variables", ctx_r2.installedComponent.configuratorSettings);
  }
}
class InstalledComponentModalComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.variablePending = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.tabs = [];
    this.activeTab = 'general';
    this.createFields = () => {
      const componentsOptions = this.components.map(component => {
        return {
          name: component.name,
          value: component.id.toString()
        };
      });
      this.fieldComponent = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('installed-component-modal.component'),
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(componentsOptions)
      });
      this.fieldVersion = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('installed-component-modal.version'),
        placeholder: this.translateService.instant('installed-component-modal.version-placeholder'),
        required: true
      });
    };
    this.activateTab = view => {
      this.activeTab = view;
    };
  }
  ngOnInit() {
    this.createTabs();
    this.createFields();
  }
  createTabs() {
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('general', this.translateService.instant('installed-component-modal.general')));
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('variables', this.translateService.instant('installed-component-modal.variables')));
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('configuratorSettings', this.translateService.instant('installed-component-modal.configurator-settings')));
  }
  onComponentChanged($event) {
    this.installedComponent.version = null;
  }
  onVariablePending(isPending) {
    this.variablePending.emit(isPending);
  }
  static {
    this.ɵfac = function InstalledComponentModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstalledComponentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: InstalledComponentModalComponent,
      selectors: [["app-installed-component-modal"]],
      inputs: {
        installedComponent: "installedComponent",
        components: "components"
      },
      outputs: {
        variablePending: "variablePending"
      },
      decls: 7,
      vars: 7,
      consts: [["tabScroll", "ngxPerfectScrollbar"], [1, "col-12", "panel", "p-0", "d-flex", "flex-column"], [3, "tabSelected", "tabs"], ["fxFlex", "auto", 1, "tab-content", "content-padding", "pr-3", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [4, "ngIf"], [1, "general-form", "h-100", "d-flex", "flex-column"], [1, "header", "container-fluid", "pl-0"], ["appAutoFocusFirstInput", ""], [1, "row"], [1, "col-12"], [3, "valueChange", "fieldChanged", "field", "value"], [3, "valueChange", "field", "value"], [3, "variablePending", "variables"], [3, "variables"]],
      template: function InstalledComponentModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "app-tab-bar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("tabSelected", function InstalledComponentModalComponent_Template_app_tab_bar_tabSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.activateTab($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, InstalledComponentModalComponent_div_4_Template, 10, 4, "div", 4)(5, InstalledComponentModalComponent_div_5_Template, 2, 1, "div", 4)(6, InstalledComponentModalComponent_div_6_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const tabScroll_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tabs", ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c0))("autoUpdatePerfectScroll", tabScroll_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", "general" == ctx.activeTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", "variables" == ctx.activeTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", "configuratorSettings" == ctx.activeTab);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _blocks_components_variable_list_variable_list_component__WEBPACK_IMPORTED_MODULE_2__.VariableListComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputDirective, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_5__.AutoUpdatePerfectScrollDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_6__.TabBarComponent],
      styles: [".tab-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.general-form[_ngcontent-%COMP%] {\n  min-height: 288px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tbWFjaGluZS9pbnN0YWxsZWQtY29tcG9uZW50L2luc3RhbGxlZC1jb21wb25lbnQtbW9kYWwvaW5zdGFsbGVkLWNvbXBvbmVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5nZW5lcmFsLWZvcm0ge1xyXG4gIG1pbi1oZWlnaHQ6IDI4OHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 31453:
/*!******************************************************************************************!*\
  !*** ./src/app/views/admin-machine/installed-component/installed-component.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstalledComponentComponent: () => (/* binding */ InstalledComponentComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/deployments */ 44524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _Bamba_Shared_src_components_table_product_detail_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/components/table-product-detail/table/table.component */ 78496);
/* harmony import */ var _installed_component_modal_installed_component_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installed-component-modal/installed-component-modal.component */ 13374);













const _c0 = a0 => [a0];
function InstalledComponentComponent_div_13_app_errors_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-errors", 19);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errors", ctx_r2.errors);
  }
}
function InstalledComponentComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, InstalledComponentComponent_div_13_app_errors_2_Template, 1, 1, "app-errors", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 16)(4, "app-installed-component-modal", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("variablePending", function InstalledComponentComponent_div_13_Template_app_installed_component_modal_variablePending_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onVariablePending($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("installedComponent", ctx_r2.modalEditInstalledComponent)("components", ctx_r2.components);
  }
}
class InstalledComponentComponent {
  constructor(translate, ngxSmartModalService) {
    this.translate = translate;
    this.ngxSmartModalService = ngxSmartModalService;
    this.items = [];
    this.numberOfDisplayedRows = 5;
    this.isVariablePending = false;
    this.installedComponents = [];
    this.components = [];
    this.translateColumnHeaderText = () => {
      for (const c of this.columns) {
        if (!c.headerText) continue;
        c.headerText = this.translate.instant(c.headerText);
      }
    };
    this.closeConfirmModal = () => this.ngxSmartModalService.getModal('actionConfirmModal').close();
    this.showUpdateModal = action => {
      console.log(action);
      this.errors = [];
      this.modalEditInstalledComponent = new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_1__.InstalledComponent(action.item);
      this.installedComponentModalKey = action.item.componentId;
      this.installedComponentModalTitle = this.translate.instant('installed-component.installed-component-properties-modal-title');
      this.ngxSmartModalService.getModal('installedComponentModal').open();
      this.showInstalledComponentModal = true;
    };
    this.onDeleteInstalledComponentModal = action => {
      const index = this.installedComponents.findIndex(r => r.componentId == action.item.data.componentId);
      this.installedComponents.splice(index, 1);
      this.createItems();
    };
    this.onSaveInstalledComponentModal = () => {
      if (!this.isInstalledComponentModalValid()) return;
      if (this.installedComponentModalKey) {
        let index = this.installedComponents.findIndex(r => r.componentId === this.installedComponentModalKey);
        if (index >= 0) {
          this.installedComponents[index] = this.modalEditInstalledComponent;
        }
      } else {
        this.installedComponents.push(this.modalEditInstalledComponent);
      }
      this.createItems();
      this.onCloseInstalledComponentModal();
    };
    this.onCloseInstalledComponentModal = () => {
      this.ngxSmartModalService.getModal('installedComponentModal').close();
      this.showInstalledComponentModal = false;
      this.isVariablePending = false;
    };
  }
  ngOnInit() {
    const defaultSort = {
      field: '1',
      dir: 'asc'
    };
    this.sort = defaultSort;
    this.columns = this.getInstalledComponentColumns();
    this.translateColumnHeaderText();
    this.createItems();
  }
  createInstalledComponentTableItem(installedComponent) {
    if (this.components) {
      const component = this.components.find(c => c.id === installedComponent.componentId);
      installedComponent['componentName'] = component ? component.name : '';
    }
    const tableItem = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(installedComponent, this.columns, this.translate);
    tableItem.data.defaultAction = {
      name: this.translate.instant('installed-component.properties')
    };
    return tableItem;
  }
  getInstalledComponentColumns() {
    const columns = [];
    columns.push(this.createColumn('componentName', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.ActionLink, this.translate.instant('installed-component.component-name'), 200, 'componentName', true));
    columns.push(this.createColumn('version', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.Text, this.translate.instant('installed-component.component-version'), 200, 'version', true));
    columns.push(this.createColumn('dateInstalledUTC', shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ColumnDisplayType.DateTime, this.translate.instant('installed-component.component-installed'), 200, 'dateInstalledUTC', true));
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
  showAddModal() {
    this.errors = [];
    this.installedComponentModalKey = '';
    this.modalEditInstalledComponent = new _blocks_models_deployments__WEBPACK_IMPORTED_MODULE_1__.InstalledComponent({});
    this.installedComponentModalTitle = this.translate.instant('installed-component.add-installed-component-modal-title');
    this.ngxSmartModalService.getModal('installedComponentModal').open();
    this.showInstalledComponentModal = true;
  }
  createItems() {
    this.items = this.installedComponents.map(e => this.createInstalledComponentTableItem(e));
  }
  isInstalledComponentModalValid() {
    this.errors = [];
    if (this.isVariablePending) {
      this.errors.push(this.translate.instant('installed-component.pending-variable'));
      return false;
    }
    if (this.modalEditInstalledComponent.componentId) {
      if (this.installedComponents.some(a => a.componentId == this.modalEditInstalledComponent.componentId && a.componentId != this.installedComponentModalKey)) {
        this.errors.push(this.translate.instant('installed-component.component-unique'));
        return false;
      } else {
        return true;
      }
    }
    this.errors.push(this.translate.instant('installed-component.must-select-component'));
    return false;
  }
  onVariablePending(isPending) {
    this.isVariablePending = isPending;
  }
  static {
    this.ɵfac = function InstalledComponentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstalledComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__.NgxSmartModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: InstalledComponentComponent,
      selectors: [["app-installed-component-table"]],
      inputs: {
        installedComponents: "installedComponents",
        components: "components"
      },
      decls: 21,
      vars: 25,
      consts: [["table", ""], ["installedComponentModal", ""], [1, "installed-component-table", "h-100"], [1, "row", "h-100"], [1, "col-10", "h-100"], [1, "settings-table", "tab-content", "min-h-fit-content", "content-padding", "h-100"], [3, "onDeleteIconClicked", "onInvokeAction", "items", "columns", "sort", "deleteIcon", "supportActions", "deleteIconTooltip"], [1, "col-2"], ["id", "button-add", 1, "btn", "btn-secondary", "add-btn", 3, "click"], ["identifier", "installedComponentModal", 3, "closable", "escapable", "dismissable", "customClass"], [3, "title", "closeIconHandler"], ["class", "modal-body", "appAutoFocusFirstInput", "", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-light", "btn-minwidth", 3, "click"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click", "disabled"], ["appAutoFocusFirstInput", "", 1, "modal-body"], [1, "d-flex", "flex-column"], [3, "errors", 4, "ngIf"], [3, "variablePending", "installedComponent", "components"], [3, "errors"]],
      template: function InstalledComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "app-table", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onDeleteIconClicked", function InstalledComponentComponent_Template_app_table_onDeleteIconClicked_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onDeleteInstalledComponentModal($event));
          })("onInvokeAction", function InstalledComponentComponent_Template_app_table_onInvokeAction_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.showUpdateModal($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 7)(7, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InstalledComponentComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.showAddModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ngx-smart-modal", 9, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "app-modal-header", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, InstalledComponentComponent_div_13_Template, 5, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12)(15, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InstalledComponentComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onCloseInstalledComponentModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InstalledComponentComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onSaveInstalledComponentModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.items)("columns", ctx.columns)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c0, ctx.sort))("deleteIcon", true)("supportActions", true)("deleteIconTooltip", "installed-component.delete-tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 17, "installed-component.add-button-text"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false)("customClass", "modal-lg");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.installedComponentModalTitle)("closeIconHandler", ctx.onCloseInstalledComponentModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showInstalledComponentModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 19, "MainHeader.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !(ctx.modalEditInstalledComponent == null ? null : ctx.modalEditInstalledComponent.componentId));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 21, "MainHeader.OK"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_2__.ErrorsComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputDirective, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__.ModalHeaderComponent, _Bamba_Shared_src_components_table_product_detail_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _installed_component_modal_installed_component_modal_component__WEBPACK_IMPORTED_MODULE_6__.InstalledComponentModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      styles: [".installed-component-table .add-btn {\n  height: 38px;\n  max-width: 130px;\n}\n.installed-component-table .settings-table {\n  height: calc(100vh - var(--header-height) - 55px - 93px) !important;\n  border: 1px solid #dedede;\n  padding-right: 0;\n  padding-left: 0;\n}\n.installed-component-table .row {\n  flex-wrap: nowrap;\n}\n.installed-component-table app-table {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tbWFjaGluZS9pbnN0YWxsZWQtY29tcG9uZW50L2luc3RhbGxlZC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsbUVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0FBSEoiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdGFsbGVkLWNvbXBvbmVudC10YWJsZSB7XHJcbiAgLmFkZC1idG4ge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMzBweDtcclxuICB9XHJcblxyXG4gIC5zZXR0aW5ncy10YWJsZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDU1cHggLSA5M3B4KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgYXBwLXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-machine_admin-machine_module_ts.js.map