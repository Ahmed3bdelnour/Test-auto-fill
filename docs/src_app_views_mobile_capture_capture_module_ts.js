"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_mobile_capture_capture_module_ts"],{

/***/ 6906:
/*!*************************************************************!*\
  !*** ./src/app/blocks/services/modals-utilities.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalsUtilitiesService: () => (/* binding */ ModalsUtilitiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ 94500);



class ModalsUtilitiesService {
  constructor(ngxSmartModalService) {
    this.ngxSmartModalService = ngxSmartModalService;
  }
  isAnyModalOpened() {
    const openedModals = this.ngxSmartModalService.getOpenedModals();
    if (openedModals.length === 0) return false;
    return openedModals.length > 1 || !this.onlyHiddenScanToModal(openedModals);
  }
  onlyHiddenScanToModal(openedModals) {
    return openedModals.length === 1 && openedModals[0]?.id === 'ScanToModal' && !!document.querySelector('.scan-to-modal-hidden');
  }
  static {
    this.ɵfac = function ModalsUtilitiesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalsUtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__.NgxSmartModalService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalsUtilitiesService,
      factory: ModalsUtilitiesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 306:
/*!****************************************************************!*\
  !*** ./src/app/views/mobile/capture/capture-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureRoutingModule: () => (/* binding */ CaptureRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _capture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture.component */ 74700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: '',
  component: _capture_component__WEBPACK_IMPORTED_MODULE_0__.CaptureComponent,
  pathMatch: 'full'
}, {
  path: 'accuroute',
  component: _capture_component__WEBPACK_IMPORTED_MODULE_0__.CaptureComponent,
  pathMatch: 'full'
}, {
  path: 'hpcr',
  component: _capture_component__WEBPACK_IMPORTED_MODULE_0__.CaptureComponent,
  pathMatch: 'full'
}];
class CaptureRoutingModule {
  static {
    this.ɵfac = function CaptureRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaptureRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CaptureRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CaptureRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 74700:
/*!***********************************************************!*\
  !*** ./src/app/views/mobile/capture/capture.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureComponent: () => (/* binding */ CaptureComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_dateTimeFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/dateTimeFormat */ 66575);
/* harmony import */ var _blocks_services_back_button_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/back-button.service */ 49921);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_modals_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/modals-utilities.service */ 6906);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _document_capture_capture_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../document-capture/capture-services */ 97954);
/* harmony import */ var _blocks_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../blocks/services/api.service */ 32275);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_components_select_action_select_action_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/components/select-action/select-action.component */ 21476);
/* harmony import */ var _blocks_components_document_scanner_document_scanner_and_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/components/document-scanner/document-scanner-and-editor.component */ 71840);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_workflow_indexing_panel_workflow_indexing_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/workflow-indexing-panel/workflow-indexing-panel.component */ 72662);
/* harmony import */ var _Bamba_Shared_src_fax_submission_ui_fax_submission_ui_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fax-submission-ui/fax-submission-ui.component */ 46102);
/* harmony import */ var _Bamba_Shared_src_selection_selection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/selection/selection.component */ 49246);





































const _c0 = ["actionsContainer"];
const _c1 = ["metaDataContent"];
const _c2 = a0 => ({
  "justify-end": a0
});
function CaptureComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "mobile-capture.invalid-qrcode-workflow"), " ");
  }
}
function CaptureComponent_div_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_div_3_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.goBackHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 1, "mobile-capture.back-btn"));
  }
}
function CaptureComponent_div_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_div_3_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.openDismissModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "mobile-capture.dismiss-btn"), " ");
  }
}
function CaptureComponent_div_3_ng_container_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "div", 53);
  }
}
function CaptureComponent_div_3_ng_container_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "div", 54);
  }
}
function CaptureComponent_div_3_ng_container_4_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "mobile-capture.page"), " ");
  }
}
function CaptureComponent_div_3_ng_container_4_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "mobile-capture.pages"), " ");
  }
}
function CaptureComponent_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 41)(2, "div", 42)(3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, CaptureComponent_div_3_ng_container_4_div_6_Template, 1, 0, "div", 45)(7, CaptureComponent_div_3_ng_container_4_div_7_Template, 1, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 47)(9, "div", 48)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, CaptureComponent_div_3_ng_container_4_span_12_Template, 3, 3, "span", 22)(13, CaptureComponent_div_3_ng_container_4_span_13_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 49)(17, "app-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function CaptureComponent_div_3_ng_container_4_Template_app_field_valueChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.documentName, $event) || (ctx_r2.documentName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 51)(19, "app-select-action", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("actionSelected", function CaptureComponent_div_3_ng_container_4_Template_app_select_action_actionSelected_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onSubmitActionSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("src", ctx_r2.captures[0].capturedImage, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 11, "mobile-capture.first-image-alt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.captures.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.captures.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r2.captures.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.captures.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.captures.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r2.documentsSizeInMegaBytes, " MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("field", ctx_r2.documentNameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r2.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("actions", ctx_r2.availableUserActions);
  }
}
function CaptureComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "mobile-capture.no-captured-pages-message"), " ");
  }
}
function CaptureComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CaptureComponent_div_3_button_2_Template, 5, 3, "button", 34)(3, CaptureComponent_div_3_button_3_Template, 3, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CaptureComponent_div_3_ng_container_4_Template, 20, 13, "ng-container", 22)(5, CaptureComponent_div_3_div_5_Template, 3, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](5, _c2, ctx_r2.userMobileOS !== "iOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.userMobileOS === "iOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.captures.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.captures.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r2.captures.length);
  }
}
function CaptureComponent_app_document_scanner_and_editor_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-document-scanner-and-editor", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("done", function CaptureComponent_app_document_scanner_and_editor_4_Template_app_document_scanner_and_editor_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onDone($event));
    })("close", function CaptureComponent_app_document_scanner_and_editor_4_Template_app_document_scanner_and_editor_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onCloseScanner());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("captures", ctx_r2.captures);
  }
}
function CaptureComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onQRCodeModeDone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "mobile-capture.done"), " ");
  }
}
function CaptureComponent_p_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "mobile-capture.submit-failure"));
  }
}
function CaptureComponent_app_fax_submission_ui_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-fax-submission-ui", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onValidationChange", function CaptureComponent_app_fax_submission_ui_67_Template_app_fax_submission_ui_onValidationChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.setFaxFormValidity($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("actionData", ctx_r2.getFaxMobileActionData())("isFormSubmitted", ctx_r2.faxFormSubmitted)("spinnerService", ctx_r2.spinnerState)("interfaxService", ctx_r2.interfaxService)("allowRecipientsModals", false);
  }
}
function CaptureComponent_app_workflow_indexing_panel_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-workflow-indexing-panel", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("overallValidityStatusChanged", function CaptureComponent_app_workflow_indexing_panel_84_Template_app_workflow_indexing_panel_overallValidityStatusChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.setOverallValidityStatus($event));
    })("validationInProgressChanged", function CaptureComponent_app_workflow_indexing_panel_84_Template_app_workflow_indexing_panel_validationInProgressChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.updateValidationInProgressState($event));
    })("fieldTabbed", function CaptureComponent_app_workflow_indexing_panel_84_Template_app_workflow_indexing_panel_fieldTabbed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.submitToWorkflowWithPrompts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("prompts", ctx_r2.selectedAction.prompts)("metadata", ctx_r2.getIMddAsMdd())("metaDataCollection", ctx_r2.metaDataCollection)("metaDataService", ctx_r2.hydraApi)("findMetaDataService", ctx_r2.userStateService)("metaDataValidator", ctx_r2.capture);
  }
}
function CaptureComponent_div_94_app_selection_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-selection", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onFolderSelected", function CaptureComponent_div_94_app_selection_7_Template_app_selection_onFolderSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onFolderSelected($event));
    })("onToggleBusy", function CaptureComponent_div_94_app_selection_7_Template_app_selection_onToggleBusy_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onFolderToggleBusy($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("action", ctx_r2.getScanToFolderMobileAction())("mode", 0)("api", ctx_r2.apiService)("showBreadcrumb", (tmp_8_0 = ctx_r2.getScanToFolderMobileAction().view) == null ? null : tmp_8_0.showBreadcrumb);
  }
}
function CaptureComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_div_94_Template_i_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      const scanToFolderModal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](93);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](scanToFolderModal_r11.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 62)(6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, CaptureComponent_div_94_app_selection_7_Template, 1, 4, "app-selection", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 12)(9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_div_94_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      const scanToFolderModal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](93);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](scanToFolderModal_r11.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_div_94_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.submitToFolder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const scanToFolderModal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.selectedAction.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", scanToFolderModal_r11.isVisible());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 4, "mobile-capture.cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 6, "mobile-capture.ok"), " ");
  }
}
class CaptureComponent {
  constructor(translateService, ngxSmartModalService, userStateService, toastr, cdr, delay, spinnerState, hydraApi, backButtonService, capture, route, interfaxService, apiService, modalsUtilitiesService) {
    this.translateService = translateService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.userStateService = userStateService;
    this.toastr = toastr;
    this.cdr = cdr;
    this.delay = delay;
    this.spinnerState = spinnerState;
    this.hydraApi = hydraApi;
    this.backButtonService = backButtonService;
    this.capture = capture;
    this.route = route;
    this.interfaxService = interfaxService;
    this.apiService = apiService;
    this.modalsUtilitiesService = modalsUtilitiesService;
    this.availableUserActions = new Array();
    this.captures = [];
    this.pages = [];
    this.userMobileOS = '';
    this.submitErrorText = '';
    this.faxFormSubmitted = false;
    this.isFaxFormValid = false;
    this.delayPeriod = 300;
    this.loading = false;
    this.submitSuccess = false;
    this.overallValidityStatus = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.unknown;
    this.metaDataCollection = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataCollection();
    this.validationInprogress = false;
    this.waitForValidation = false;
    this.metadata = [];
    this.showCameraCapture = true;
    this.qrCodeMode = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    this.handleBackButton = () => {
      if (this.showCameraCapture || this.loading) return;
      if (this.modalsUtilitiesService.isAnyModalOpened()) {
        this.closeOpenedModals();
        return;
      }
      this.goBackHandler();
    };
    this.dataURIToFile = capturedBase64URI => {
      let text = '';
      const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 5; i++) {
        text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
      }
      return new File([this.dataURItoBlob(capturedBase64URI)], new Date().valueOf() + '.' + text + '.jpg', {
        type: 'image/png'
      });
    };
    this.qrCodeAutoSubmission = () => {
      const actionId = this.route.snapshot.queryParamMap.get('actionId');
      const wf = this.availableUserActions.find(x => x.id == actionId);
      if (!wf) {
        this.invalidQRCodeActionId = true;
        return;
      }
      this.onSubmitActionSelected(wf);
    };
    this.setDataFieldsFromUrl = () => {
      this.route.snapshot.queryParamMap.keys.forEach(key => {
        if (key == 'qrCode' || key == 'actionId') return;
        this.metaDataCollection.set(key, this.route.snapshot.queryParamMap.get(key), shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.valid);
      });
    };
    this.onSubmitActionSelected = selectedAction => {
      this.documentName = this.documentName.trim();
      if (!this.documentName) {
        this.displayDocumentNameError();
        return;
      }
      this.selectedAction = selectedAction;
      if (this.qrCodeMode) this.setDataFieldsFromUrl();
      if (this.isFaxAction()) {
        this.actionData = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FaxMobileActionData();
        this.faxUIModal.open();
        this.delay.execute(() => {
          const faxFormFirstInput = document.getElementById('fax-form').querySelector('input');
          faxFormFirstInput.focus();
        }, this.delayPeriod);
      } else if (this.isScanToFolder()) {
        this.actionData = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ScanToFolderMobileActionData();
        this.scanToFolderModal.open();
      } else if (this.selectedAction.prompts.length) {
        this.metaDataModal.open();
      } else {
        const actionData = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MobileActionData();
        this.submitCapturedDocument(actionData);
      }
    };
    this.submitCapturedDocument = actionData => {
      this.loadingText = this.translateService.instant('mobile-capture.submitting') + ' ' + this.selectedAction.title;
      actionData.id = this.selectedAction.id;
      actionData.filename = this.documentName;
      actionData.metadata = this.metaDataCollection;
      this.spinnerState.show(this.loadingText, this.actionsDiv);
      this.hydraApi.submitCapturedDocuments(actionData.serializable(), this.pages, this.successSubmitCallBack, this.failureSubmitCallBack);
    };
    this.successSubmitCallBack = result => {
      this.showFailureHeader = false;
      this.submitSuccess = result.success;
      this.spinnerState.hide();
      this.faxFormSubmitted = false;
      this.isFaxFormValid = false;
      if (!this.submitSuccess) {
        result.errors.forEach(err => {
          this.submitErrorText += err + '\n';
        });
        this.submitErrorModal.open();
        return;
      }
      this.submitSuccessModal.open();
      this.autoCloseSuccessModal();
    };
    this.failureSubmitCallBack = err => {
      this.showFailureHeader = true;
      this.submitSuccess = false;
      this.spinnerState.hide();
      this.faxFormSubmitted = false;
      this.isFaxFormValid = false;
      this.submitErrorText = err.message;
      this.submitErrorModal.open();
    };
    this.resetTimout = () => {
      this.autoCloseTimerInSeconds = this.qrCodeMode ? 15 : 10;
      this.setAutoCloseTimeString(this.autoCloseTimerInSeconds);
    };
    this.onQRCodeModeDone = () => {
      this.qrCodeMode = false;
      this.dismissSuccessModalHandler();
    };
    this.cancelSubmittingFax = () => {
      this.isFaxFormValid = false;
      this.faxFormSubmitted = false;
      this.faxUIModal.close();
    };
    this.onFolderSelected = folderId => {
      this.actionData.folderId = folderId;
    };
    this.onFolderToggleBusy = state => {
      if (state.state) {
        this.spinnerState.show(state.message ? state.message : this.translateService.instant('Common.Loading'), this.actionsDiv);
        return;
      }
      this.spinnerState.hide();
    };
    this.getScanToFolderMobileAction = () => {
      return this.selectedAction;
    };
    this.getFaxMobileActionData = () => {
      return this.actionData;
    };
    this.getIMddAsMdd = () => this.metadata;
  }
  ngOnInit() {
    this.metadata = this.userStateService.user.metaData;
    this.qrCodeMode = this.route.snapshot.queryParamMap.get('qrCode') == 'true';
    this.subscriptions.add(this.spinnerState.visibilityChanged.subscribe(spinnerConfiguration => {
      this.loading = spinnerConfiguration.visible;
    }));
    this.backButtonService.preventBackButton(this.handleBackButton);
    this.giveMobileCssClassToBody();
    this.documentNameField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      placeholder: this.translateService.instant('mobile-capture.document-name-placeholder'),
      required: true
    });
    this.userMobileOS = this.getUserMobileOS();
    this.getAvailableActionsForUser();
    this.documentName = `capture-${_blocks_core_dateTimeFormat__WEBPACK_IMPORTED_MODULE_1__.DateTimeFormat.getCompactDateTime(new Date()).replace(/:/g, '_')}`;
    this.resetTimout();
  }
  ngAfterViewInit() {
    this.dismissActionModal = this.ngxSmartModalService.get('dismissActionModal');
    this.actionsDiv = this.actionsContainer.nativeElement;
    this.submitSuccessModal = this.ngxSmartModalService.get('submitSuccessModal');
    this.submitErrorModal = this.ngxSmartModalService.get('submitErrorModal');
    this.faxUIModal = this.ngxSmartModalService.get('faxUIModal');
    this.metaDataModal = this.ngxSmartModalService.get('metaDataModal');
    this.scanToFolderModal = this.ngxSmartModalService.get('scanToFolderModal');
    this.cdr.detectChanges();
  }
  closeOpenedModals() {
    let modals = this.ngxSmartModalService.getOpenedModals();
    modals.forEach(modalItem => {
      if (modalItem.modal.identifier === 'submitSuccessModal') this.dismissSuccessModalHandler();
      if (modalItem.modal.identifier === 'submitErrorModal') this.dismissSubmitErrorModalHandler();
      if (modalItem.modal.identifier === 'faxUIModal') this.cancelSubmittingFax();
      if (modalItem.modal.identifier === 'dismissActionModal') this.closeDismissModal();
      if (modalItem.modal.identifier === 'scanToFolderModal') this.scanToFolderModal.close();
      if (modalItem.modal.identifier === 'metaDataModal') {
        let lookupModal = this.ngxSmartModalService.get('lookupFieldSearchModal');
        lookupModal.close();
        this.closeAndResetMetaDataModal();
      }
    });
    this.spinnerState.hide();
  }
  giveMobileCssClassToBody() {
    let body = document.getElementsByTagName('body')[0];
    body.className += ' mobile';
  }
  getUserMobileOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //we can ignore it if not required
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone';
    }
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }
    return 'unknown';
  }
  getAvailableActionsForUser() {
    for (const product of this.userStateService.user.products) {
      for (const mobileAction of product.mobileActions) {
        if (mobileAction.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MobileActionType.Route) continue;
        this.availableUserActions.push(mobileAction);
      }
    }
  }
  goBackHandler() {
    this.showCameraCapture = true;
    clearInterval(this.successModalInterval);
  }
  dismissHandler() {
    this.clearCaptures();
    this.goBackHandler();
    this.closeDismissModal();
  }
  goBackAndClearCaptures() {
    this.clearCaptures();
    this.goBackHandler();
  }
  clearCaptures() {
    this.captures = [];
    this.pages = [];
    this.documentsSizeInMegaBytes = 0;
    this.documentName = `capture-${_blocks_core_dateTimeFormat__WEBPACK_IMPORTED_MODULE_1__.DateTimeFormat.getCompactDateTime(new Date()).replace(/:/g, '_')}`;
    this.submitErrorText = '';
  }
  onDone(captures) {
    this.captures = captures;
    this.pages = this.convertCapturesToFiles(this.captures);
    this.documentsSizeInMegaBytes = this.calculateDocumentsSize(this.pages);
    this.showCameraCapture = false;
    if (this.qrCodeMode) this.qrCodeAutoSubmission();
  }
  onCloseScanner() {
    this.showCameraCapture = false;
  }
  convertCapturesToFiles(captures) {
    return captures.map(c => this.dataURIToFile(c.capturedImage.split(',')[1]));
  }
  calculateDocumentsSize(pages) {
    let totalSizeInBytes = 0;
    pages.forEach(page => {
      totalSizeInBytes += page.size;
    });
    return +(totalSizeInBytes / Math.pow(10, 6)).toFixed(2);
  }
  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const int8Array = new Uint8Array(new ArrayBuffer(byteString.length));
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], {
      type: 'image/png'
    });
  }
  openDismissModal() {
    this.dismissActionModal.open();
  }
  closeDismissModal() {
    this.dismissActionModal.close();
  }
  dismissSuccessModalHandler() {
    this.goBackAndClearCaptures();
    this.submitSuccessModal.close();
    this.resetTimout();
    this.submitSuccess = false;
    this.resetMetaDataForm();
  }
  resetMetaDataForm() {
    this.resetMetaDataModal();
  }
  autoCloseSuccessModal() {
    this.successModalInterval = setInterval(() => {
      if (this.autoCloseTimerInSeconds > 0) {
        this.autoCloseTimerInSeconds--;
        this.setAutoCloseTimeString(this.autoCloseTimerInSeconds);
      } else {
        this.qrCodeMode ? this.onQRCodeModeDone() : this.dismissSuccessModalHandler();
      }
    }, 1000);
  }
  setAutoCloseTimeString(autoCloseTime) {
    if (autoCloseTime < 10) {
      this.autoCloseTimeString = '00:0' + autoCloseTime;
    } else {
      this.autoCloseTimeString = '00:' + autoCloseTime;
    }
  }
  dismissSubmitErrorModalHandler() {
    this.submitErrorText = '';
    this.submitErrorModal.close();
  }
  submitFax() {
    this.faxFormSubmitted = true;
    if (!this.isFaxFormValid) return;
    this.faxUIModal.close();
    this.submitCapturedDocument(this.actionData);
  }
  setFaxFormValidity(isValid) {
    this.isFaxFormValid = isValid;
  }
  displayDocumentNameError() {
    this.submitErrorText += this.translateService.instant('mobile-capture.document-name-required') + '\n';
    this.showFailureHeader = false;
    this.submitErrorModal.open();
    return;
  }
  setOverallValidityStatus(event) {
    this.overallValidityStatus = event.overallValidity;
    this.metaDataCollection = event.metaDataCollection;
  }
  updateValidationInProgressState(event) {
    this.validationInprogress = event.inProgress;
    let isInitialValidation = event.isInitial;
    if (isInitialValidation) {
      if (this.validationInprogress) {
        this.loadingText = this.translateService.instant('workflow-indexing-panel.loading-defaults');
        this.spinnerState.show(this.loadingText, this.metaDataContent.nativeElement);
        return;
      } else {
        this.spinnerState.hide();
        return;
      }
    }
    if (!this.waitForValidation || this.validationInprogress) return;
    this.waitForValidation = false;
    this.spinnerState.hide();
    this.submitToWorkflowWithPrompts();
  }
  submitToWorkflowWithPrompts() {
    if (this.validationInprogress) {
      this.waitForValidation = true;
      this.loadingText = this.translateService.instant('workflow-indexing-panel.waiting');
      this.spinnerState.show(this.loadingText, this.actionsDiv);
      return;
    }
    if (this.overallValidityStatus !== shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.valid) {
      this.toastr.error(this.translateService.instant('workflow-indexing-panel.overall-validity-invalid'));
      return;
    }
    this.metaDataModal.close();
    const actionData = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MobileActionData();
    this.submitCapturedDocument(actionData);
  }
  submitToFolder() {
    this.scanToFolderModal.close();
    this.submitCapturedDocument(this.actionData);
  }
  resetMetaDataModal() {
    this.selectedAction = null;
    this.metaDataCollection = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataCollection();
    this.overallValidityStatus = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.unknown;
  }
  closeAndResetMetaDataModal() {
    this.resetMetaDataModal();
    this.metaDataModal.close();
    this.spinnerState.hide();
    if (this.qrCodeMode) this.dismissHandler();
  }
  isFaxAction() {
    return this.selectedAction instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SendFaxMobileAction || this.selectedAction instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AccuRouteFax;
  }
  isScanToFolder() {
    return this.selectedAction instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ScanToFolderMobileAction;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.backButtonService.removeBackButtonListener();
  }
  static {
    this.ɵfac = function CaptureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaptureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_back_button_service__WEBPACK_IMPORTED_MODULE_2__.BackButtonService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_document_capture_capture_services__WEBPACK_IMPORTED_MODULE_7__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_9__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_modals_utilities_service__WEBPACK_IMPORTED_MODULE_4__.ModalsUtilitiesService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: CaptureComponent,
      selectors: [["app-capture"]],
      viewQuery: function CaptureComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.actionsContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.metaDataContent = _t.first);
        }
      },
      decls: 95,
      vars: 78,
      consts: [["actionsContainer", ""], ["metaDataContent", ""], ["scanToFolderModal", ""], [1, "actions-component-container"], ["class", "capture-error-message", 4, "ngIf"], ["class", "actions-container", 4, "ngIf"], [3, "captures", "done", "close", 4, "ngIf"], ["customClass", "mobile-modal", "identifier", "dismissActionModal", 3, "closable", "escapable", "dismissable"], [1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-times", "close-icon", 3, "click"], [1, "modal-body"], [1, "modal-footer"], [1, "btn", "btn-minwidth", "btn-light", 3, "click"], [1, "btn", "btn-minwidth", "btn-danger", 3, "click"], ["customClass", "mobile-modal success-modal", "identifier", "submitSuccessModal", 3, "closable", "escapable", "dismissable"], [1, "action-title-span"], [1, "text-muted", "small"], [1, "time-span"], ["class", "btn btn-minwidth btn-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-minwidth", "btn-primary", 3, "click"], ["customClass", "mobile-modal error-msg-modal", "identifier", "submitErrorModal", 3, "closable", "escapable", "dismissable"], [4, "ngIf"], [1, "wrap-break-word"], ["customClass", "mobile-modal fax-ui-modal", "identifier", "faxUIModal", 3, "closable", "escapable", "dismissable"], [3, "actionData", "isFormSubmitted", "spinnerService", "interfaxService", "allowRecipientsModals", "onValidationChange", 4, "ngIf"], [1, "btn", "btn-minwidth", "btn-primary", 3, "click", "disabled"], ["customClass", "mobile-modal", "identifier", "metaDataModal", 3, "closable", "escapable", "dismissable"], [3, "prompts", "metadata", "metaDataCollection", "metaDataService", "findMetaDataService", "metaDataValidator", "overallValidityStatusChanged", "validationInProgressChanged", "fieldTabbed", 4, "ngIf"], ["identifier", "scanToFolderModal", "customClass", "mobile-modal scan-to-folder", 3, "closable", "escapable", "dismissable"], ["class", "modal-content-wrapper d-flex flex-column test", 4, "ngIf"], [1, "capture-error-message"], [1, "actions-container"], [1, "back-dismiss-btns-container", 3, "ngClass"], ["class", "back-btn", 3, "click", 4, "ngIf"], ["class", "dismiss-btn", 3, "click", 4, "ngIf"], ["class", "no-captures-message", 4, "ngIf"], [1, "back-btn", 3, "click"], [1, "fa", "fa-angle-left"], [1, "back-txt"], [1, "dismiss-btn", 3, "click"], [1, "stack-and-data-row"], [1, "images-stack-col"], [1, "page", "first-page"], [3, "src", "alt"], ["class", "page second-page", 4, "ngIf"], ["class", "page third-page", 4, "ngIf"], [1, "data-information-col"], [1, "data-information"], [1, "name-input-container"], [3, "valueChange", "field", "value"], [1, "actions"], [3, "actionSelected", "actions"], [1, "page", "second-page"], [1, "page", "third-page"], [1, "no-captures-message"], [3, "done", "close", "captures"], [1, "btn", "btn-minwidth", "btn-secondary", 3, "click"], [3, "onValidationChange", "actionData", "isFormSubmitted", "spinnerService", "interfaxService", "allowRecipientsModals"], [3, "overallValidityStatusChanged", "validationInProgressChanged", "fieldTabbed", "prompts", "metadata", "metaDataCollection", "metaDataService", "findMetaDataService", "metaDataValidator"], [1, "modal-content-wrapper", "d-flex", "flex-column", "test"], [1, "modal-header", "test"], [1, "modal-body", "d-flex", "flex-column", "col"], [1, "col", "p-0"], [3, "action", "mode", "api", "showBreadcrumb", "onFolderSelected", "onToggleBusy", 4, "ngIf"], [3, "onFolderSelected", "onToggleBusy", "action", "mode", "api", "showBreadcrumb"]],
      template: function CaptureComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CaptureComponent_div_2_Template, 3, 3, "div", 4)(3, CaptureComponent_div_3_Template, 6, 7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CaptureComponent_app_document_scanner_and_editor_4_Template, 1, 1, "app-document-scanner-and-editor", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "ngx-smart-modal", 7)(6, "div", 8)(7, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_i_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.closeDismissModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 11)(12, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 12)(16, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.closeDismissModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.dismissHandler());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "ngx-smart-modal", 15)(23, "div", 8)(24, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_i_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.dismissSuccessModalHandler());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 11)(29, "p")(30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "p", 17)(36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](42, CaptureComponent_button_42_Template, 3, 3, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.dismissSuccessModalHandler());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "ngx-smart-modal", 21)(47, "div", 8)(48, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_i_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.dismissSubmitErrorModalHandler());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](53, CaptureComponent_p_53_Template, 3, 3, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](56, "div", 12)(57, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.dismissSubmitErrorModalHandler());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](59, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](60, "ngx-smart-modal", 24)(61, "div", 8)(62, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](64, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_i_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.cancelSubmittingFax());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](67, CaptureComponent_app_fax_submission_ui_67_Template, 1, 5, "app-fax-submission-ui", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "div", 12)(69, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.cancelSubmittingFax());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](71, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](72, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.submitFax());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](74, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "ngx-smart-modal", 27)(76, "div", null, 1)(78, "div", 8)(79, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](81, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](82, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_i_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.closeAndResetMetaDataModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](83, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](84, CaptureComponent_app_workflow_indexing_panel_84_Template, 1, 6, "app-workflow-indexing-panel", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](85, "div", 12)(86, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_86_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.closeAndResetMetaDataModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](87);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](88, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.submitToWorkflowWithPrompts());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](90);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](91, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "ngx-smart-modal", 29, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](94, CaptureComponent_div_94_Template, 15, 8, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.invalidQRCodeActionId);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.showCameraCapture && !ctx.qrCodeMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showCameraCapture);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 46, "mobile-capture.confirmaton"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 48, "mobile-capture.dismiss-capture"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 50, "mobile-capture.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 52, "mobile-capture.dismiss-btn"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 54, "mobile-capture.success"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](32, 56, "mobile-capture.submit-success"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.selectedAction == null ? null : ctx.selectedAction.title, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](38, 58, "mobile-capture.autoCloseSuccessModal"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.autoCloseTimeString);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.qrCodeMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](45, 60, ctx.qrCodeMode ? "mobile-capture.submit-another-document" : "mobile-capture.ok"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](50, 62, "mobile-capture.error"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showFailureHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.submitErrorText);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](59, 64, "mobile-capture.ok"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](64, 66, "mobile-capture.fax-form-title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isFaxAction());
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](71, 68, "mobile-capture.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.isFaxFormValid);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](74, 70, "mobile-capture.ok"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](81, 72, "mobile-capture.meta-data-form-title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selectedAction);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](88, 74, "mobile-capture.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](91, 76, "mobile-capture.ok"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("closable", false)("escapable", false)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selectedAction);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _blocks_components_select_action_select_action_component__WEBPACK_IMPORTED_MODULE_10__.SelectActionComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_19__.NgxSmartModalComponent, _blocks_components_document_scanner_document_scanner_and_editor_component__WEBPACK_IMPORTED_MODULE_11__.DocumentScannerAndEditorComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_12__.FieldComponent, _Bamba_Shared_src_workflow_indexing_panel_workflow_indexing_panel_component__WEBPACK_IMPORTED_MODULE_13__.WorkflowIndexingPanelComponent, _Bamba_Shared_src_fax_submission_ui_fax_submission_ui_component__WEBPACK_IMPORTED_MODULE_14__.FaxSubmissionUiComponent, _Bamba_Shared_src_selection_selection_component__WEBPACK_IMPORTED_MODULE_15__.SelectionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.actions-component-container {\n  height: 100%;\n  background-color: rgb(249, 249, 249);\n}\n.actions-component-container .actions-container {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  max-width: 425px;\n  height: 100%;\n  min-height: 100%;\n  background: rgb(249, 249, 249);\n}\n.actions-component-container .back-dismiss-btns-container {\n  display: flex;\n  justify-content: space-between;\n}\n.actions-component-container .back-btn,\n.actions-component-container .dismiss-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--brand-primary-color);\n  border: none;\n  padding: 4px 10px;\n  outline: none;\n  background: transparent;\n}\n.actions-component-container .back-btn i,\n.actions-component-container .dismiss-btn i {\n  margin-inline-end: 8px;\n  font-size: 29px;\n}\n.actions-component-container .dismiss-btn {\n  padding: 4px 15px;\n}\n.actions-component-container .select-txt {\n  padding-inline-start: 10px;\n  padding-inline-end: 10px;\n  font-size: 13px;\n  margin: 0;\n}\n.actions-component-container .back_txt {\n  margin-inline-start: 10px;\n}\n.actions-component-container .loader {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.actions-component-container .no-captures-message {\n  padding: 15px;\n  color: var(--gray-50);\n  text-align: center;\n  margin-top: 25px;\n}\n.actions-component-container .justify-end {\n  justify-content: flex-end;\n}\n.actions-component-container .page {\n  width: 90%;\n  height: 85%;\n}\n.actions-component-container .first-page {\n  border: 1px solid black;\n  position: absolute;\n  right: 0;\n  top: 15px;\n  z-index: 3;\n  background: white;\n}\n.actions-component-container .first-page img {\n  width: 100%;\n  height: 100%;\n}\n.actions-component-container .second-page {\n  border: 1px solid rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 10px;\n  right: 5px;\n  z-index: 2;\n  background: white;\n}\n.actions-component-container .third-page {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  z-index: 1;\n  background: white;\n}\n.actions-component-container .stack-and-data-row {\n  display: flex;\n  padding: 0 35px;\n  height: calc(25% + 25px);\n  padding-inline-end: 0;\n}\n.actions-component-container .images-stack-col {\n  width: 40%;\n  position: relative;\n  min-height: 25%;\n}\n.actions-component-container .data-information-col {\n  width: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.actions-component-container .data-information-col .data-information {\n  border: 1px solid var(--gray-50);\n  background: white;\n  width: 68%;\n  margin: auto;\n  border-radius: 4px;\n  height: 32%;\n  min-height: 45px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n.actions-component-container .data-information-col .data-information p {\n  text-align: center;\n  font-size: 13px;\n  margin: 0px;\n  color: var(--gray-50);\n}\n.actions-component-container .name-input-container {\n  margin: 7px 30px;\n}\n.actions-component-container .name-input-container input {\n  background: white;\n  border-color: var(--gray-50);\n  border-radius: 4px;\n  color: var(--gray-50);\n}\n.actions-component-container .actions {\n  height: calc(75% - 156px);\n  overflow: auto;\n}\n.actions-component-container .actions .actions-component {\n  padding-bottom: 5px;\n}\n.actions-component-container .actions app-select-action-button {\n  width: calc(50% - 10px) !important;\n}\n.actions-component-container .actions .no-actions-message {\n  width: 80%;\n}\n.actions-component-container .actions .title {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 0;\n}\n\n.nsm-dialog.mobile-modal {\n  min-height: 200px;\n  width: calc(100% - 20px);\n  max-width: 480px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.nsm-dialog.mobile-modal .nsm-content {\n  padding: 10px;\n  border-radius: 5px;\n  max-height: 80vh;\n  overflow: auto;\n}\n.nsm-dialog.mobile-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nsm-dialog.mobile-modal .modal-header .modal-title,\n.nsm-dialog.mobile-modal .modal-header .close-icon {\n  padding-inline-start: 10px;\n  padding-inline-end: 10px;\n}\n.nsm-dialog.mobile-modal .modal-header .modal-title {\n  font-size: 15px;\n  font-weight: 600;\n}\n.nsm-dialog.mobile-modal .modal-header .close-icon {\n  font-size: 18px;\n  color: #948d8d;\n}\n.nsm-dialog.mobile-modal .modal-body {\n  padding: 10px 0;\n  font-size: 15px;\n}\n.nsm-dialog.mobile-modal .modal-footer {\n  padding: 10px;\n}\n\n.success-modal .time-span,\n.success-modal .action-title-span {\n  margin-inline-start: 5px;\n}\n\n.error-msg-modal .wrap-break-word {\n  overflow-wrap: break-word;\n}\n.error-msg-modal .modal-body p {\n  color: red;\n}\n\n.fax-ui-modal .field-invalid input {\n  border-color: red;\n}\n\n.scan-to-folder .nsm-body {\n  overflow: hidden;\n}\n.scan-to-folder .modal-content-wrapper {\n  height: 78vh;\n  max-height: 78vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL21vYmlsZS9jYXB0dXJlL2NhcHR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0Usc0JBQUE7QUFnUEY7O0FBN09BO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0FBZ1BGO0FBOU9FO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBZ1BKO0FBN09FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBK09KO0FBNU9FOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNEK0NVO0VDOUNWLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQThPSjtBQTVPSTs7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUErT047QUEzT0U7RUFDRSxpQkFBQTtBQTZPSjtBQTFPRTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTRPSjtBQXpPRTtFQUNFLHlCQUFBO0FBMk9KO0FBeE9FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTBPSjtBQXZPRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF5T0o7QUF0T0U7RUFDRSx5QkFBQTtBQXdPSjtBQXJPRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBdU9KO0FBcE9FO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBc09KO0FBcE9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFzT047QUFsT0U7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFvT0o7QUFqT0U7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFtT0o7QUFoT0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFrT0o7QUEvTkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaU9KO0FBOU5FO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBZ09KO0FBOU5JO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBZ09OO0FBOU5NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBZ09SO0FBM05FO0VBQ0UsZ0JBQUE7QUE2Tko7QUEzTkk7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQTZOTjtBQXpORTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQTJOSjtBQXpOSTtFQUNFLG1CQUFBO0FBMk5OO0FBeE5JO0VBQ0Usa0NBQUE7QUEwTk47QUF2Tkk7RUFDRSxVQUFBO0FBeU5OO0FBdE5JO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBd05OOztBQWxOQTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQXFORjtBQW5ORTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXFOSjtBQWxORTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBb05KO0FBbE5JOztFQUVFLDBCQUFBO0VBQ0Esd0JBQUE7QUFvTk47QUFqTkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFtTk47QUFoTkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWtOTjtBQTlNRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBZ05KO0FBN01FO0VBQ0UsYUFBQTtBQStNSjs7QUF6TUU7O0VBRUUsd0JBQUE7QUE0TUo7O0FBdE1FO0VBQ0UseUJBQUE7QUF5TUo7QUF0TUk7RUFDRSxVQUFBO0FBd01OOztBQWhNSTtFQUNFLGlCQUFBO0FBbU1OOztBQTlMRTtFQUNFLGdCQUFBO0FBaU1KO0FBL0xFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBaU1KIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYWN0aW9ucy1jb21wb25lbnQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xyXG5cclxuICAuYWN0aW9ucy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQyNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDksIDI0OSwgMjQ5KTtcclxuICB9XHJcblxyXG4gIC5iYWNrLWRpc21pc3MtYnRucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5iYWNrLWJ0bixcclxuICAuZGlzbWlzcy1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkdXBsYW5kLWJsdWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRpc21pc3MtYnRuIHtcclxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC10eHQge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuYmFja190eHQge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcclxuICB9XHJcblxyXG4gIC5sb2FkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5vLWNhcHR1cmVzLW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuanVzdGlmeS1lbmQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC5wYWdlIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICB9XHJcblxyXG4gIC5maXJzdC1wYWdlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWNvbmQtcGFnZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnRoaXJkLXBhZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5zdGFjay1hbmQtZGF0YS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxuICAgIGhlaWdodDogY2FsYygyNSUgKyAyNXB4KTtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuICB9XHJcblxyXG4gIC5pbWFnZXMtc3RhY2stY29sIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuZGF0YS1pbmZvcm1hdGlvbi1jb2wge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmRhdGEtaW5mb3JtYXRpb24ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTUwKTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiA2OCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBoZWlnaHQ6IDMyJTtcclxuICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hbWUtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogN3B4IDMwcHg7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTUwKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS01MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9ucyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoNzUlIC0gMTU2cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgLmFjdGlvbnMtY29tcG9uZW50IHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtc2VsZWN0LWFjdGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1hY3Rpb25zLW1lc3NhZ2Uge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL21vYmlsZSBtb2RhbCBzdHlsZVxyXG4ubnNtLWRpYWxvZy5tb2JpbGUtbW9kYWwge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gIC5uc20tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubW9kYWwtdGl0bGUsXHJcbiAgICAuY2xvc2UtaWNvbiB7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzk0OGQ4ZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vY3VzdG9tIHN0eWxlIG9mIHN1Y2Nlc3MgbW9kYWxcclxuLnN1Y2Nlc3MtbW9kYWwge1xyXG4gIC50aW1lLXNwYW4sXHJcbiAgLmFjdGlvbi10aXRsZS1zcGFuIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi8vY3VzdG9tIHN0eWxlIG9mIGVycm9yIG1vZGFsXHJcbi5lcnJvci1tc2ctbW9kYWwge1xyXG4gIC53cmFwLWJyZWFrLXdvcmQge1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2N1c3RvbSBzdHlsZSBvZiBmYXggdWkgbW9kYWxcclxuLmZheC11aS1tb2RhbCB7XHJcbiAgLmZpZWxkLWludmFsaWQge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNjYW4tdG8tZm9sZGVyIHtcclxuICAubnNtLWJvZHkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDc4dmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3OHZoO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 79931:
/*!********************************************************!*\
  !*** ./src/app/views/mobile/capture/capture.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureModule: () => (/* binding */ CaptureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_document_scanner_document_scanner_and_editor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../blocks/components/document-scanner/document-scanner-and-editor.module */ 65519);
/* harmony import */ var _blocks_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../blocks/shared/shared.module */ 12806);
/* harmony import */ var _capture_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capture-routing.module */ 306);
/* harmony import */ var _capture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capture.component */ 74700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);










class CaptureModule {
  static {
    this.ɵfac = function CaptureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaptureModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: CaptureModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _capture_routing_module__WEBPACK_IMPORTED_MODULE_3__.CaptureRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _blocks_components_document_scanner_document_scanner_and_editor_module__WEBPACK_IMPORTED_MODULE_1__.DocumentScannerAndEditorModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.WorkflowIndexingPanelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FaxSubmissionUiModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SelectionModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CaptureModule, {
    declarations: [_capture_component__WEBPACK_IMPORTED_MODULE_4__.CaptureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _capture_routing_module__WEBPACK_IMPORTED_MODULE_3__.CaptureRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _blocks_components_document_scanner_document_scanner_and_editor_module__WEBPACK_IMPORTED_MODULE_1__.DocumentScannerAndEditorModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.WorkflowIndexingPanelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FaxSubmissionUiModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SelectionModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_mobile_capture_capture_module_ts.js.map