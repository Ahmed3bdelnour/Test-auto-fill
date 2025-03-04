"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-importer_admin-importer_module_ts"],{

/***/ 69423:
/*!***********************************************************************!*\
  !*** ./src/app/views/admin-importer/admin-importer-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminImporterRoutingModule: () => (/* binding */ AdminImporterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_importer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-importer.component */ 55935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'duplicate/:importerid',
  component: _admin_importer_component__WEBPACK_IMPORTED_MODULE_0__.AdminImporterComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: 'create/:importertype',
  component: _admin_importer_component__WEBPACK_IMPORTED_MODULE_0__.AdminImporterComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':importerid',
  component: _admin_importer_component__WEBPACK_IMPORTED_MODULE_0__.AdminImporterComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminImporterRoutingModule {
  static {
    this.ɵfac = function AdminImporterRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminImporterRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminImporterRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminImporterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 55935:
/*!******************************************************************!*\
  !*** ./src/app/views/admin-importer/admin-importer.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminImporterComponent: () => (/* binding */ AdminImporterComponent)
/* harmony export */ });
/* harmony import */ var _blocks_models_importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/models/importer */ 12332);
/* harmony import */ var _blocks_models_workflow_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/models/workflow-datasource */ 10593);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/components/created-modified/created-modified.component */ 60622);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);
/* harmony import */ var _agent_pop3_agent_pop3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./agent-pop3/agent-pop3.component */ 99536);
/* harmony import */ var _agent_imap_agent_imap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agent-imap/agent-imap.component */ 51774);
/* harmony import */ var _agent_interfax_agent_interfax_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./agent-interfax/agent-interfax.component */ 37586);
/* harmony import */ var _agent_office365_agent_office365_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./agent-office365/agent-office365.component */ 91914);




























function AdminImporterComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8)(1, "app-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function AdminImporterComponent_div_0_div_7_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.importer.name, $event) || (ctx_r2.importer.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("field", ctx_r2.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r2.importer.name);
  }
}
function AdminImporterComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8)(1, "app-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function AdminImporterComponent_div_0_div_8_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.importer.workflowId, $event) || (ctx_r2.importer.workflowId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("field", ctx_r2.fieldWorkflows);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r2.importer.workflowId);
  }
}
function AdminImporterComponent_div_0_div_21_app_agent_pop3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-agent-pop3", 20);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("agent", ctx_r2.getPop3Agent());
  }
}
function AdminImporterComponent_div_0_div_21_app_agent_imap_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-agent-imap", 21);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("importer", ctx_r2.importer);
  }
}
function AdminImporterComponent_div_0_div_21_app_agent_office365_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-agent-office365", 21);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("importer", ctx_r2.importer);
  }
}
function AdminImporterComponent_div_0_div_21_app_agent_interfax_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-agent-interfax", 20);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("agent", ctx_r2.getInterFAXAgent());
  }
}
function AdminImporterComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AdminImporterComponent_div_0_div_21_app_agent_pop3_1_Template, 1, 1, "app-agent-pop3", 18)(2, AdminImporterComponent_div_0_div_21_app_agent_imap_2_Template, 1, 1, "app-agent-imap", 19)(3, AdminImporterComponent_div_0_div_21_app_agent_office365_3_Template, 1, 1, "app-agent-office365", 19)(4, AdminImporterComponent_div_0_div_21_app_agent_interfax_4_Template, 1, 1, "app-agent-interfax", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.importer.agent.agentType === "Upland.Hydra.Importers.Email.Pop3");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.importer.agent.agentType === "Upland.Hydra.Importers.Email.IMap");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.importer.agent.agentType === "Upland.Hydra.Importers.Email.Office365");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.importer.agent.agentType === "Upland.Hydra.Importers.Fax.InterFAX");
  }
}
function AdminImporterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-secondary-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "app-created-modified", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, AdminImporterComponent_div_0_div_7_Template, 2, 2, "div", 7)(8, AdminImporterComponent_div_0_div_8_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 8)(10, "app-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function AdminImporterComponent_div_0_Template_app_checkbox_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.importer.enabled, $event) || (ctx_r2.importer.enabled = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminImporterComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onTestConnection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, AdminImporterComponent_div_0_div_21_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 11, "admin-importer.HeadText"))("rightControls", ctx_r2.formControls);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id", ctx_r2.importer.id)("createdDate", ctx_r2.importer.dateCreatedUTC)("modifiedDate", ctx_r2.importer.dateModifiedUTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.fieldWorkflows);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r2.importer.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 13, "admin-importer.properties"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](20, 15, "admin-importer.test-button"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.importer.agent);
  }
}
class AdminImporterComponent {
  constructor(translate, router, route, hydraApi, toastr, errorsService, spinner) {
    this.translate = translate;
    this.router = router;
    this.route = route;
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.importer = new _blocks_models_importer__WEBPACK_IMPORTED_MODULE_0__.Importer();
    this.formControls = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    this.onTestConnection = () => {
      this.spinner.showSavingSpinner('admin-importer.verifying-connectivity');
      this.hydraApi.testImporterAgentConnectivity(this.importer, this.importerConnectivityVerified, this.importerConnectivityFailed);
    };
    this.importerConnectivityVerified = () => {
      this.toastr.success(this.translate.instant('admin-importer.connectivity-succeeded-verify'));
      this.spinner.hide();
    };
    this.importerConnectivityFailed = err => {
      this.toastr.error(this.translate.instant('admin-importer.connectivity-failed-verify'));
      this.spinner.hide();
    };
    this.loadImporter = () => {
      if (this.routeData.type === 'properties' || this.routeData.type === 'duplicate') {
        this.hydraApi.getImporter(this.routeParams.importerid, this.importerLoaded, this.importerLoadFailed);
      } else if (this.routeData.type == 'create') {
        this.importer.agent = _blocks_models_importer__WEBPACK_IMPORTED_MODULE_0__.ImporterAgent.Create(this.routeParams.importertype);
      }
      this.importerLoaded(this.importer);
    };
    this.importerLoaded = i => {
      if (this.routeData.type === 'duplicate') {
        i.name = `${this.translate.instant('Admin.CopyOf')} ${i.name}`;
        i.id = '';
      }
      this.importer = i;
    };
    this.importerLoadFailed = () => {
      this.toastr.error(this.translate.instant('Importer-Form.load-failed'));
    };
    this.createFields = () => {
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.name'),
        placeholder: this.translate.instant('admin-importer.name-placeholder'),
        required: true
      });
      this.fieldWorkflows = new shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_6__.MetaDataType.List,
        label: this.translate.instant('admin-importer.workflow'),
        placeholder: this.translate.instant('admin-importer.workflow'),
        datasource: this.workflowsDataSource,
        required: true
      });
    };
    this.onSave = () => {
      if (this.importer.id) {
        this.hydraApi.updateImporter(this.importer, this.importerSaved, this.importerSaveFailed);
      } else {
        this.hydraApi.createImporter(this.importer, this.importerSaved, this.importerSaveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.importerSaved = result => {
      if (result.success) {
        this.toastr.success(this.translate.instant('admin-importer.saved'));
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-importer.validation-errors');
      }
      this.spinner.hide();
    };
    this.importerSaveFailed = err => {
      this.toastr.error(this.translate.instant('admin-importer.save-failed'));
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('settings/BambaSettingsApplication/BambaSettingsApplication-Upland.Bamba.Application.Settings.Importers'); // todo - handle this "better"
    };
    this.getInterFAXAgent = () => this.importer.agent;
    this.getPop3Agent = () => this.importer.agent;
  }
  ngOnInit() {
    this.createButtons();
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      this.loadImporter();
    }));
    this.hydraApi.getWorkflows(workflows => {
      this.workflowsDataSource = new _blocks_models_workflow_datasource__WEBPACK_IMPORTED_MODULE_1__.WorkflowsDataSource(workflows);
      this.createFields();
    }, err => {
      this.toastr.error(this.translate.instant('errors.failed-load-workflows'));
    });
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onSave, this.translate.instant('admin-importer.save'), 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onCancel, this.translate.instant('admin-importer.cancel'), 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.formControls.push(this.saveButton);
    this.formControls.push(this.cancelButton);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminImporterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminImporterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: AdminImporterComponent,
      selectors: [["app-admin-importer"]],
      decls: 1,
      vars: 1,
      consts: [["class", "admin-importer d-flex flex-column", "appAutoFocusFirstInput", "", 4, "ngIf"], ["appAutoFocusFirstInput", "", 1, "admin-importer", "d-flex", "flex-column"], [3, "headerText", "rightControls"], [1, "container-fluid", "col", "min-h-fit-content"], ["id", "spinnerPanel", 1, "row", "panel", "min-h-fit-content", "h-100", "m-0"], [1, "col-12", "col-md-3", "properties-panel"], [3, "id", "createdDate", "modifiedDate"], ["class", "col p-0", 4, "ngIf"], [1, "col", "p-0"], ["label", "admin-importer.enabled", 3, "valueChange", "value"], [1, "col-12", "col-md-9", "p-0", "step-panel"], [1, "step-panel-wrapper"], [1, "step-panel-header"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", "vcenter"], [1, "btn", "btn-min-width", 3, "click"], ["class", "col min-h-fit-content py-2", 4, "ngIf"], [3, "valueChange", "field", "value"], [1, "col", "min-h-fit-content", "py-2"], [3, "agent", 4, "ngIf"], [3, "importer", 4, "ngIf"], [3, "agent"], [3, "importer"]],
      template: function AdminImporterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, AdminImporterComponent_div_0_Template, 22, 17, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.importer);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_8__.CreatedModifiedComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_9__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.CheckboxComponent, _agent_pop3_agent_pop3_component__WEBPACK_IMPORTED_MODULE_12__.AgentPop3Component, _agent_imap_agent_imap_component__WEBPACK_IMPORTED_MODULE_13__.AgentImapComponent, _agent_interfax_agent_interfax_component__WEBPACK_IMPORTED_MODULE_14__.AgentInterfaxComponent, _agent_office365_agent_office365_component__WEBPACK_IMPORTED_MODULE_15__.AgentOffice365Component, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-importer {\n  position: relative;\n  line-height: normal;\n  padding-bottom: 15px;\n  height: 100%;\n  min-height: fit-content !important;\n}\n.admin-importer .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-importer .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-importer .secondary-header .section-header {\n  position: static !important;\n}\n.admin-importer .workflow-step-wrapper {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n  text-align: center;\n}\n.admin-importer .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-importer .properties-panel {\n  background-color: var(--brand-secondary-color);\n  padding: 15px;\n  border-right: solid 1px #cfcfcf;\n}\n.admin-importer .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-importer .step-panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-importer .step-panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-importer .vcenter {\n  display: table;\n}\n.admin-importer .vcenter :first-child {\n  display: table-cell;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWltcG9ydGVyL2FkbWluLWltcG9ydGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTdPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQWdQRjtBQTlPRTtFQUNFLGtDQUFBO0FBZ1BKO0FBN09FO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQStPSjtBQTdPSTtFQUNFLDJCQUFBO0FBK09OO0FBM09FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBNk9KO0FBMU9FO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQTRPSjtBQXpPRTtFQUNFLDhDRDJDc0I7RUMxQ3RCLGFBQUE7RUFDQSwrQkFBQTtBQTJPSjtBQXhPRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBME9KO0FBdk9FO0VBQ0UseUJEd0JNO0VDdkJOLGdDQUFBO0VBQ0EsYUFBQTtBQXlPSjtBQXRPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQXdPSjtBQXJPRTtFQUNFLGNBQUE7QUF1T0o7QUFwT0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBc09KIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4uYWRtaW4taW1wb3J0ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG5cclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndvcmtmbG93LXN0ZXAtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtcGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtcGFuZWwtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcblxyXG4gIC52Y2VudGVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLnZjZW50ZXIgOmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 68094:
/*!***************************************************************!*\
  !*** ./src/app/views/admin-importer/admin-importer.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminImporterModule: () => (/* binding */ AdminImporterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blocks/page/page.module */ 13762);
/* harmony import */ var _admin_importer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-importer-routing.module */ 69423);
/* harmony import */ var _admin_importer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-importer.component */ 55935);
/* harmony import */ var _agent_imap_agent_imap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-imap/agent-imap.component */ 51774);
/* harmony import */ var _agent_interfax_agent_interfax_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agent-interfax/agent-interfax.component */ 37586);
/* harmony import */ var _agent_office365_agent_office365_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agent-office365/agent-office365.component */ 91914);
/* harmony import */ var _agent_pop3_agent_pop3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agent-pop3/agent-pop3.component */ 99536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 96623);












class AdminImporterModule {
  static {
    this.ɵfac = function AdminImporterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminImporterModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AdminImporterModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _admin_importer_routing_module__WEBPACK_IMPORTED_MODULE_3__.AdminImporterRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AdminImporterModule, {
    declarations: [_admin_importer_component__WEBPACK_IMPORTED_MODULE_4__.AdminImporterComponent, _agent_pop3_agent_pop3_component__WEBPACK_IMPORTED_MODULE_8__.AgentPop3Component, _agent_imap_agent_imap_component__WEBPACK_IMPORTED_MODULE_5__.AgentImapComponent, _agent_interfax_agent_interfax_component__WEBPACK_IMPORTED_MODULE_6__.AgentInterfaxComponent, _agent_office365_agent_office365_component__WEBPACK_IMPORTED_MODULE_7__.AgentOffice365Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _admin_importer_routing_module__WEBPACK_IMPORTED_MODULE_3__.AdminImporterRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule]
  });
})();

/***/ }),

/***/ 51774:
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-importer/agent-imap/agent-imap.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentImapComponent: () => (/* binding */ AgentImapComponent)
/* harmony export */ });
/* harmony import */ var _blocks_models_importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/models/importer */ 12332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/radio-buttons-group/radio-buttons-group.component */ 65965);











function AgentImapComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_div_10_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.agent.attachmentFilter, $event) || (ctx_r1.agent.attachmentFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.attachmentFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.agent.attachmentFilter);
  }
}
function AgentImapComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_div_15_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.agent.fromFolder, $event) || (ctx_r1.agent.fromFolder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AgentImapComponent_div_15_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFromFolderChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fromFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.agent.fromFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("triggerBlurEventOnLoad", false);
  }
}
function AgentImapComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_div_18_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.agent.toFolder, $event) || (ctx_r1.agent.toFolder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AgentImapComponent_div_18_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onToFolderChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.toFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.agent.toFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("triggerBlurEventOnLoad", false);
  }
}
class AgentImapComponent {
  set importer(importer) {
    this._importer = importer;
    this.agent = this._importer.agent;
  }
  get importer() {
    return this._importer;
  }
  get agentPort() {
    return `${this.agent.port}`;
  }
  set agentPort(val) {
    this.agent.port = Number(val);
  }
  constructor(translate, hydraApi) {
    this.translate = translate;
    this.hydraApi = hydraApi;
    this.agentFromFolderOptions = [];
    this.agentToFolderOptions = [];
    this.createFields = () => {
      this.folderDataSource = new ImporterFolderDataSource(this.importer, this.hydraApi);
      this.fieldHost = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.host'),
        placeholder: this.translate.instant('admin-importer.host-placeholder'),
        required: true
      });
      this.fieldPort = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Integer,
        label: this.translate.instant('admin-importer.port'),
        placeholder: this.translate.instant('admin-importer.port-placeholder'),
        required: true
      });
      this.fieldUsername = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.username'),
        placeholder: this.translate.instant('admin-importer.username-placeholder'),
        required: true
      });
      this.fieldPassword = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Password,
        label: this.translate.instant('admin-importer.password'),
        placeholder: this.translate.instant('admin-importer.password-placeholder'),
        required: false
      });
      this.fromFolder = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        label: this.translate.instant('admin-importer.from-folder'),
        placeholder: this.translate.instant('admin-importer.from-folder-placeholder'),
        datasource: this.folderDataSource,
        required: true
      });
      this.toFolder = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        datasource: this.folderDataSource,
        label: this.translate.instant('admin-importer.to-folder'),
        placeholder: this.translate.instant('admin-importer.to-folder-placeholder'),
        required: true
      });
      this.agentFromFolderOptions = [{
        label: this.translate.instant('admin-importer.from-folder-default'),
        value: null
      }, {
        label: this.translate.instant('admin-importer.from-folder-custom'),
        value: this.agent?.fromFolder ?? ''
      }];
      this.agentToFolderOptions = [{
        label: this.translate.instant('admin-importer.to-folder-default'),
        value: null
      }, {
        label: this.translate.instant('admin-importer.to-folder-custom'),
        value: this.agent?.toFolder ?? ''
      }];
      this.attachmentFilter = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.attachment-filter'),
        placeholder: this.translate.instant('admin-importer.attachment-filter-placeholder'),
        required: false
      });
    };
    this.onFromFolderChanged = value => {
      this.agentFromFolderOptions[1].value = value;
    };
    this.onToFolderChanged = value => {
      this.agentToFolderOptions[1].value = value;
    };
  }
  ngOnInit() {
    this.createFields();
  }
  onPropertyChanged() {
    this.folderDataSource.changed.next();
  }
  static {
    this.ɵfac = function AgentImapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgentImapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AgentImapComponent,
      selectors: [["app-agent-imap"]],
      inputs: {
        importer: "importer"
      },
      decls: 19,
      vars: 15,
      consts: [[1, "agent-imap"], [1, "col-6"], [1, "col", "p-0"], [3, "valueChange", "blur", "field", "value"], ["class", "col p-0", 4, "ngIf"], [1, "row"], [1, "col-6", "agent-from-folder-options"], ["groupName", "import-from-folder", 3, "valueChange", "value", "options"], [4, "ngIf"], [1, "col-6", "agent-to-folder-options"], ["groupName", "move-to-folder", 3, "valueChange", "value", "options"], [3, "valueChange", "field", "value"], [3, "valueChange", "field", "value", "triggerBlurEventOnLoad"]],
      template: function AgentImapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.host, $event) || (ctx.agent.host = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentImapComponent_Template_app_field_blur_3_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agentPort, $event) || (ctx.agentPort = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentImapComponent_Template_app_field_blur_5_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_Template_app_field_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.username, $event) || (ctx.agent.username = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentImapComponent_Template_app_field_blur_7_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2)(9, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.password, $event) || (ctx.agent.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentImapComponent_Template_app_field_blur_9_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AgentImapComponent_div_10_Template, 2, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5)(13, "div", 6)(14, "app-radio-buttons-group", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_Template_app_radio_buttons_group_valueChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.fromFolder, $event) || (ctx.agent.fromFolder = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AgentImapComponent_div_15_Template, 2, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9)(17, "app-radio-buttons-group", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentImapComponent_Template_app_radio_buttons_group_valueChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.toFolder, $event) || (ctx.agent.toFolder = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AgentImapComponent_div_18_Template, 2, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldHost);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.host);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldPort);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agentPort);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldUsername);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.attachmentFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.fromFolder);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.agentFromFolderOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.agent.fromFolder !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.toFolder);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.agentToFolderOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.agent.toFolder !== null);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_4__.RadioButtonsGroupComponent],
      styles: [".agent-imap .agent-from-folder-options label,\n.agent-imap .agent-to-folder-options label {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4taW1wb3J0ZXIvYWdlbnQtaW1hcC9hZ2VudC1pbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJOztFQUNFLGdCQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyIuYWdlbnQtaW1hcCB7XHJcbiAgLmFnZW50LWZyb20tZm9sZGVyLW9wdGlvbnMsXHJcbiAgLmFnZW50LXRvLWZvbGRlci1vcHRpb25zIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}
class ImporterFolderDataSource {
  constructor(importer, hydraApi) {
    this.importer = importer;
    this.hydraApi = hydraApi;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    const agent = this.importer.agent;
    if (!agent.host || !agent.port || !agent.username || !agent.password) {
      failureCallBack(null);
      return;
    }
    this.hydraApi.loadImporterFolders(this.importer, folders => {
      if (folders.success) {
        const items = new Array();
        for (const folder of folders.object) {
          const item = {
            name: folder,
            value: folder
          };
          items.push(item);
        }
        successCallBack(items);
      } else {
        failureCallBack(folders.errors);
      }
    }, failureCallBack);
  }
}

/***/ }),

/***/ 37586:
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin-importer/agent-interfax/agent-interfax.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentInterfaxComponent: () => (/* binding */ AgentInterfaxComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_importer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/importer */ 12332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);







class AgentInterfaxComponent {
  constructor(translate) {
    this.translate = translate;
    this.createFields = () => {
      this.fieldUsername = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.username'),
        placeholder: this.translate.instant('admin-importer.username-placeholder'),
        required: true
      });
      this.fieldPassword = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Password,
        label: this.translate.instant('admin-importer.password'),
        placeholder: this.translate.instant('admin-importer.password-placeholder'),
        required: false
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function AgentInterfaxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgentInterfaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AgentInterfaxComponent,
      selectors: [["app-agent-interfax"]],
      inputs: {
        agent: "agent"
      },
      decls: 8,
      vars: 5,
      consts: [[1, "agent-interfax"], [1, "col-6"], [1, "col", "p-0"], [3, "valueChange", "field", "value"], ["label", "admin-importer.receiveForAllAccounts", 3, "valueChange", "value"]],
      template: function AgentInterfaxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AgentInterfaxComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.agent.username, $event) || (ctx.agent.username = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AgentInterfaxComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.agent.password, $event) || (ctx.agent.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2)(7, "app-checkbox", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function AgentInterfaxComponent_Template_app_checkbox_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.agent.receiveForAllAccounts, $event) || (ctx.agent.receiveForAllAccounts = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldUsername);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.agent.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.agent.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.agent.receiveForAllAccounts);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 91914:
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-importer/agent-office365/agent-office365.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentOffice365Component: () => (/* binding */ AgentOffice365Component)
/* harmony export */ });
/* harmony import */ var _blocks_models_importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/models/importer */ 12332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/radio-buttons-group/radio-buttons-group.component */ 65965);











function AgentOffice365Component_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_div_10_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.agent.attachmentFilter, $event) || (ctx_r1.agent.attachmentFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.attachmentFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.agent.attachmentFilter);
  }
}
function AgentOffice365Component_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_div_15_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.agent.fromFolder, $event) || (ctx_r1.agent.fromFolder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AgentOffice365Component_div_15_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFromFolderChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.fromFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.agent.fromFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("triggerBlurEventOnLoad", false);
  }
}
function AgentOffice365Component_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_div_18_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.agent.toFolder, $event) || (ctx_r1.agent.toFolder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AgentOffice365Component_div_18_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onToFolderChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r1.toFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r1.agent.toFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("triggerBlurEventOnLoad", false);
  }
}
class AgentOffice365Component {
  set importer(importer) {
    this._importer = importer;
    this.agent = this._importer.agent;
  }
  get importer() {
    return this._importer;
  }
  constructor(translate, hydraApi) {
    this.translate = translate;
    this.hydraApi = hydraApi;
    this.agentFromFolderOptions = [];
    this.agentToFolderOptions = [];
    this.createFields = () => {
      this.folderDataSource = new ImporterFolderDataSource(this.importer, this.hydraApi);
      this.fieldUsername = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.username'),
        placeholder: this.translate.instant('admin-importer.username-placeholder'),
        required: true
      });
      this.fieldTenantId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.tenant-id'),
        placeholder: this.translate.instant('admin-importer.tenant-id-placeholder'),
        required: true
      });
      this.fieldClientId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.client-id'),
        placeholder: this.translate.instant('admin-importer.client-id-placeholder'),
        required: true
      });
      this.fieldClientSecret = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Password,
        label: this.translate.instant('admin-importer.client-secret'),
        placeholder: this.translate.instant('admin-importer.client-secret-placeholder'),
        required: true
      });
      this.fromFolder = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        label: this.translate.instant('admin-importer.from-folder'),
        placeholder: this.translate.instant('admin-importer.from-folder-placeholder'),
        datasource: this.folderDataSource,
        required: true
      });
      this.toFolder = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        datasource: this.folderDataSource,
        label: this.translate.instant('admin-importer.to-folder'),
        placeholder: this.translate.instant('admin-importer.to-folder-placeholder'),
        required: true
      });
      this.agentFromFolderOptions = [{
        label: this.translate.instant('admin-importer.from-folder-default'),
        value: null
      }, {
        label: this.translate.instant('admin-importer.from-folder-custom'),
        value: this.agent?.fromFolder ?? ''
      }];
      this.agentToFolderOptions = [{
        label: this.translate.instant('admin-importer.to-folder-default'),
        value: null
      }, {
        label: this.translate.instant('admin-importer.to-folder-custom'),
        value: this.agent?.toFolder ?? ''
      }];
      this.attachmentFilter = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.attachment-filter'),
        placeholder: this.translate.instant('admin-importer.attachment-filter-placeholder'),
        required: false
      });
    };
    this.onFromFolderChanged = value => {
      this.agentFromFolderOptions[1].value = value;
    };
    this.onToFolderChanged = value => {
      this.agentToFolderOptions[1].value = value;
    };
  }
  ngOnInit() {
    this.createFields();
  }
  onPropertyChanged() {
    this.folderDataSource.changed.next();
  }
  static {
    this.ɵfac = function AgentOffice365Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgentOffice365Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AgentOffice365Component,
      selectors: [["app-agent-office365"]],
      inputs: {
        importer: "importer"
      },
      decls: 19,
      vars: 15,
      consts: [[1, "agent-office365"], [1, "col-6"], [1, "col", "p-0"], [3, "valueChange", "blur", "field", "value"], ["class", "col p-0", 4, "ngIf"], [1, "row"], [1, "col-6", "agent-from-folder-options"], ["groupName", "import-from-folder", 3, "valueChange", "value", "options"], [4, "ngIf"], [1, "col-6", "agent-to-folder-options"], ["groupName", "move-to-folder", 3, "valueChange", "value", "options"], [3, "valueChange", "field", "value"], [3, "valueChange", "field", "value", "triggerBlurEventOnLoad"]],
      template: function AgentOffice365Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.username, $event) || (ctx.agent.username = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentOffice365Component_Template_app_field_blur_3_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.tenantId, $event) || (ctx.agent.tenantId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentOffice365Component_Template_app_field_blur_5_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_Template_app_field_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.clientId, $event) || (ctx.agent.clientId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentOffice365Component_Template_app_field_blur_7_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2)(9, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.clientSecret, $event) || (ctx.agent.clientSecret = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function AgentOffice365Component_Template_app_field_blur_9_listener() {
            return ctx.onPropertyChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AgentOffice365Component_div_10_Template, 2, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5)(13, "div", 6)(14, "app-radio-buttons-group", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_Template_app_radio_buttons_group_valueChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.fromFolder, $event) || (ctx.agent.fromFolder = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AgentOffice365Component_div_15_Template, 2, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9)(17, "app-radio-buttons-group", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function AgentOffice365Component_Template_app_radio_buttons_group_valueChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agent.toFolder, $event) || (ctx.agent.toFolder = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AgentOffice365Component_div_18_Template, 2, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldUsername);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldTenantId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.tenantId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldClientId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.clientId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldClientSecret);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.clientSecret);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.attachmentFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.fromFolder);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.agentFromFolderOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.agent.fromFolder !== null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.agent.toFolder);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.agentToFolderOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.agent.toFolder !== null);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_4__.RadioButtonsGroupComponent],
      styles: [".agent-office365 .agent-from-folder-options label,\n.agent-office365 .agent-to-folder-options label {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4taW1wb3J0ZXIvYWdlbnQtb2ZmaWNlMzY1L2FnZW50LW9mZmljZTM2NS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTs7RUFDRSxnQkFBQTtBQUROIiwic291cmNlc0NvbnRlbnQiOlsiLmFnZW50LW9mZmljZTM2NSB7XHJcbiAgLmFnZW50LWZyb20tZm9sZGVyLW9wdGlvbnMsXHJcbiAgLmFnZW50LXRvLWZvbGRlci1vcHRpb25zIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}
class ImporterFolderDataSource {
  constructor(importer, hydraApi) {
    this.importer = importer;
    this.hydraApi = hydraApi;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    const agent = this.importer.agent;
    if (!agent.username || !agent.tenantId || !agent.clientId || !agent.clientSecret) {
      successCallBack([]);
      return;
    }
    this.hydraApi.loadImporterFolders(this.importer, folders => {
      if (folders.success) {
        const items = new Array();
        for (const folder of folders.object) {
          const item = {
            name: folder,
            value: folder
          };
          items.push(item);
        }
        successCallBack(items);
      } else {
        failureCallBack(folders.errors);
      }
    }, failureCallBack);
  }
}

/***/ }),

/***/ 99536:
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-importer/agent-pop3/agent-pop3.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentPop3Component: () => (/* binding */ AgentPop3Component)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_importer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/importer */ 12332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);







function AgentPop3Component_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "app-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AgentPop3Component_div_10_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.agent.attachmentFilter, $event) || (ctx_r1.agent.attachmentFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r1.attachmentFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.agent.attachmentFilter);
  }
}
class AgentPop3Component {
  get agentPort() {
    return `${this.agent.port}`;
  }
  set agentPort(val) {
    this.agent.port = Number(val);
  }
  constructor(translate) {
    this.translate = translate;
    this.createFields = () => {
      this.fieldHost = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.host'),
        placeholder: this.translate.instant('admin-importer.host-placeholder'),
        required: true
      });
      this.fieldPort = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer,
        label: this.translate.instant('admin-importer.port'),
        placeholder: this.translate.instant('admin-importer.port-placeholder'),
        required: true
      });
      this.fieldUsername = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.username'),
        placeholder: this.translate.instant('admin-importer.username-placeholder'),
        required: true
      });
      this.fieldPassword = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Password,
        label: this.translate.instant('admin-importer.password'),
        placeholder: this.translate.instant('admin-importer.password-placeholder'),
        required: false
      });
      this.attachmentFilter = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-importer.attachment-filter'),
        placeholder: this.translate.instant('admin-importer.attachment-filter-placeholder'),
        required: false
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function AgentPop3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgentPop3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AgentPop3Component,
      selectors: [["app-agent-pop3"]],
      inputs: {
        agent: "agent"
      },
      decls: 11,
      vars: 9,
      consts: [[1, "agent-pop3"], [1, "col-6"], [1, "col", "p-0"], [3, "valueChange", "field", "value"], ["class", "col p-0", 4, "ngIf"]],
      template: function AgentPop3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AgentPop3Component_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.agent.host, $event) || (ctx.agent.host = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AgentPop3Component_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.agentPort, $event) || (ctx.agentPort = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AgentPop3Component_Template_app_field_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.agent.username, $event) || (ctx.agent.username = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function AgentPop3Component_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.agent.password, $event) || (ctx.agent.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AgentPop3Component_div_10_Template, 2, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldHost);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.agent.host);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldPort);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.agentPort);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldUsername);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.agent.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx.fieldPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx.agent.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attachmentFilter);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-importer_admin-importer_module_ts.js.map