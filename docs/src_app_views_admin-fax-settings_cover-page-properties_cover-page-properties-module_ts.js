"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-fax-settings_cover-page-properties_cover-page-properties-module_ts"],{

/***/ 69560:
/*!************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/cover-page-properties/cover-page-properties-module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminCoverPagePropertiesModule: () => (/* binding */ AdminCoverPagePropertiesModule),
/* harmony export */   AdminCoverPagePropertiesRoutingModule: () => (/* binding */ AdminCoverPagePropertiesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _cover_page_properties_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover-page-properties.component */ 99911);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/page/page.module */ 13762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);












const routes = [{
  path: 'create',
  component: _cover_page_properties_component__WEBPACK_IMPORTED_MODULE_0__.CoverPagePropertiesComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':id',
  component: _cover_page_properties_component__WEBPACK_IMPORTED_MODULE_0__.CoverPagePropertiesComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminCoverPagePropertiesRoutingModule {
  static {
    this.ɵfac = function AdminCoverPagePropertiesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminCoverPagePropertiesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AdminCoverPagePropertiesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminCoverPagePropertiesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();
class AdminCoverPagePropertiesModule {
  static {
    this.ɵfac = function AdminCoverPagePropertiesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminCoverPagePropertiesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AdminCoverPagePropertiesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.LabelModule, AdminCoverPagePropertiesRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminCoverPagePropertiesModule, {
    declarations: [_cover_page_properties_component__WEBPACK_IMPORTED_MODULE_0__.CoverPagePropertiesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.LabelModule, AdminCoverPagePropertiesRoutingModule]
  });
})();

/***/ }),

/***/ 99911:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/cover-page-properties/cover-page-properties.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverPagePropertiesComponent: () => (/* binding */ CoverPagePropertiesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/send-fax.service */ 16665);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);
/* harmony import */ var _blocks_components_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/components/html-editor/html-editor.component */ 74728);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);































const _c0 = ["spinnerWrapper"];
function CoverPagePropertiesComponent_div_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 20)(1, "app-html-editor", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function CoverPagePropertiesComponent_div_4_div_18_Template_app_html_editor_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onHeaderChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", "header" != ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("initialValue", ctx_r1.coverPage.header)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 6, "cover-page.header"))("substitutions", ctx_r1.substitutions)("height", "250px");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 8, "cover-page.header-limit-hint"));
  }
}
function CoverPagePropertiesComponent_div_4_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 20)(1, "app-html-editor", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function CoverPagePropertiesComponent_div_4_div_19_Template_app_html_editor_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onHtmlBodyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", "body" != ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("initialValue", ctx_r1.coverPage.htmlBody)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 5, "cover-page.body"))("substitutions", ctx_r1.substitutions)("height", "100%");
  }
}
function CoverPagePropertiesComponent_div_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 20)(1, "app-html-editor", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function CoverPagePropertiesComponent_div_4_div_20_Template_app_html_editor_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onFooterChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", "footer" != ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("initialValue", ctx_r1.coverPage.footer)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 6, "cover-page.footer"))("substitutions", ctx_r1.substitutions)("height", "250px");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 8, "cover-page.footer-limit-hint"));
  }
}
function CoverPagePropertiesComponent_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23)(1, "app-dual-picklist", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("currentChange", function CoverPagePropertiesComponent_div_4_div_21_Template_app_dual_picklist_currentChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.groupsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("available", ctx_r1.availableGroups)("current", ctx_r1.currentGroups)("displayField", "name")("listName", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 8, "cover-page.groups"))("sortSelectedItems", true)("allowOrderSelectedItems", false)("iconField", "icon")("iconType", "fa");
  }
}
function CoverPagePropertiesComponent_div_4_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23)(1, "app-dual-picklist", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("currentChange", function CoverPagePropertiesComponent_div_4_div_22_Template_app_dual_picklist_currentChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.usersChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("available", ctx_r1.availableUsers)("current", ctx_r1.currentUsers)("displayField", "name")("listName", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 9, "cover-page.users"))("sortSelectedItems", true)("allowOrderSelectedItems", false)("iconField", "icon")("iconType", "fa")("searchItems", ctx_r1);
  }
}
function CoverPagePropertiesComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "cover-page.no-properties"));
  }
}
function CoverPagePropertiesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function CoverPagePropertiesComponent_div_4_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.coverPage.name, $event) || (ctx_r1.coverPage.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("return", function CoverPagePropertiesComponent_div_4_Template_app_field_return_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 7)(6, "div", 8)(7, "app-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function CoverPagePropertiesComponent_div_4_Template_app_field_valueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.coverPageType, $event) || (ctx_r1.coverPageType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function CoverPagePropertiesComponent_div_4_Template_app_field_valueChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.createTabs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function CoverPagePropertiesComponent_div_4_Template_app_field_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.coverPageBodyType, $event) || (ctx_r1.coverPageBodyType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 7)(12, "div", 12)(13, "app-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("valueChange", function CoverPagePropertiesComponent_div_4_Template_app_checkbox_valueChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.coverPage.isPublic, $event) || (ctx_r1.coverPage.isPublic = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function CoverPagePropertiesComponent_div_4_Template_app_checkbox_valueChange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.createTabs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 14)(16, "app-tab-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("tabSelected", function CoverPagePropertiesComponent_div_4_Template_app_tab_bar_tabSelected_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.activateTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, CoverPagePropertiesComponent_div_4_div_18_Template, 6, 10, "div", 17)(19, CoverPagePropertiesComponent_div_4_div_19_Template, 3, 7, "div", 17)(20, CoverPagePropertiesComponent_div_4_div_20_Template, 6, 10, "div", 17)(21, CoverPagePropertiesComponent_div_4_div_21_Template, 3, 10, "div", 18)(22, CoverPagePropertiesComponent_div_4_div_22_Template, 3, 11, "div", 18)(23, CoverPagePropertiesComponent_div_4_div_23_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("triggerRefocus", ctx_r1.triggerRefocusObservable);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r1.coverPage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("field", ctx_r1.fieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r1.coverPageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("triggerBlurEventOnLoad", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("field", ctx_r1.fieldBodyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r1.coverPageBodyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.coverPage.type != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 19, "cover-page.is-public"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("value", ctx_r1.coverPage.isPublic);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tabs", ctx_r1.tabs)("activeTab", ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.sendFaxProfileLoaded || !ctx_r1.hasTX);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.sendFaxProfileLoaded || !ctx_r1.hasTX);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.sendFaxProfileLoaded || !ctx_r1.hasTX);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", "groups" == ctx_r1.activeTab && !ctx_r1.coverPage.isPublic);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", "users" == ctx_r1.activeTab && !ctx_r1.coverPage.isPublic);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !(ctx_r1.tabs == null ? null : ctx_r1.tabs.length));
  }
}
class CoverPagePropertiesComponent {
  get coverPageType() {
    return `${this.coverPage.type}`;
  }
  set coverPageType(val) {
    this.coverPage.type = Number(val);
  }
  get coverPageBodyType() {
    return `${this.coverPage.coverpageBodyType}`;
  }
  set coverPageBodyType(val) {
    this.coverPage.coverpageBodyType = Number(val);
  }
  constructor(translateService, router, route, toastr, translate, spinner, interfaxService, userState, errorsService, sendFaxService) {
    this.translateService = translateService;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.translate = translate;
    this.spinner = spinner;
    this.interfaxService = interfaxService;
    this.userState = userState;
    this.errorsService = errorsService;
    this.sendFaxService = sendFaxService;
    this.activeTab = 'body';
    this.tabs = new Array();
    this.formControls = [];
    this.availableGroups = [];
    this.currentGroups = [];
    this.availableUsers = [];
    this.currentUsers = [];
    this.title = '';
    this.sendFaxProfileLoaded = false;
    this.hasTX = false;
    this.substitutions = [];
    this.triggerRefocusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    this.triggerRefocusObservable = this.triggerRefocusSubject.asObservable();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription();
    this.onLoadingProfileSucceeded = () => {
      this.spinner.hide();
      this.sendFaxProfileLoaded = true;
      this.triggerRefocusSubject.next();
    };
    this.onLoadingProfileFailed = () => {
      this.spinner.hide();
      this.errorsService.showErrorsModal(['SendFax.InterfaxAuthorizationProblem'], 'SendFax.HeadText');
    };
    this.load = () => {
      if (this.routeData.type == 'create') {
        this.title = this.translateService.instant('cover-page.title-new');
        this.loaded(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPage({
          id: 0,
          name: '',
          accountId: 0,
          htmlBody: '',
          binaryBody: [],
          footer: '',
          header: '',
          type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageType.Html,
          coverpageBodyType: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType.Html,
          isPublic: true,
          users: [],
          groups: []
        }));
      } else {
        this.editMode = true;
        this.title = this.translate.instant('cover-page.title-existing');
        this.spinner.show(this.translate.instant('Common.Loading'), document.documentElement);
        this.interfaxService.getCoverpage(this.routeParams.id, this.loaded, this.loadFailed);
      }
    };
    this.loaded = coverPage => {
      this.spinner.hide();
      this.coverPage = coverPage;
      this.createTabs();
      this.spinner.show(this.translate.instant('cover-page.load-groups'), document.documentElement);
      this.interfaxService.getGroups(this.onGroupsLoaded, this.onGroupsLoadFailed);
      this.show = true;
    };
    this.loadFailed = err => {
      this.spinner.hide();
      this.toastr.error(this.translate.instant('cover-page.load-cover-page-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('cover-page.load-cover-page-failed', err);
    };
    this.onGroupsLoaded = groups => {
      this.availableGroups = groups.map(a => {
        a.icon = 'fa-users';
        return a;
      });
      this.currentGroups = this.availableGroups.filter(x => this.coverPage.groups.find(id => id.toString() == x.id) != null);
      this.spinner.hide();
      this.completeLoading();
    };
    this.onGroupsLoadFailed = err => {
      this.spinner.hide();
      this.toastr.error(this.translate.instant('cover-page.load-groups-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('cover-page.load-groups-failed', err);
      this.close();
    };
    this.completeLoading = () => {
      this.currentUsers = this.coverPage.users.map(u => new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DualPickListItem(u, u, ''));
      this.spinner.hide();
    };
    this.onUsersLoadFailed = err => {
      this.spinner.hide();
      this.toastr.error(this.translate.instant('cover-page.load-users-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('cover-page.load-users-failed', err);
    };
    this.createTabs = () => {
      this.tabs = [];
      if (this.coverPage.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageType.Html) {
        this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('body', this.translateService.instant('cover-page.body')));
        this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('header', this.translateService.instant('cover-page.header')));
        this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('footer', this.translateService.instant('cover-page.footer')));
      }
      if (!this.coverPage.isPublic) {
        this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('groups', this.translateService.instant('cover-page.groups')));
        this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('users', this.translateService.instant('cover-page.users')));
      }
      if (this.tabs.findIndex(t => t.id == this.activeTab) != -1) return;
      if (this.tabs.length == 0) {
        this.activeTab = '';
        return;
      }
      this.activateTab(this.tabs[0].id);
    };
    this.createFields = () => {
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('cover-page.name'),
        placeholder: this.translate.instant('cover-page.name'),
        required: true
      });
      this.fieldHeader = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('cover-page.header'),
        placeholder: this.translate.instant('cover-page.header')
      });
      this.fieldHtmlBody = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('cover-page.body'),
        placeholder: this.translate.instant('cover-page.body')
      });
      this.fieldFooter = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('cover-page.footer'),
        placeholder: this.translate.instant('cover-page.footer')
      });
      const typeOptions = [];
      Object.values(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageType).filter(x => typeof x == 'number').forEach(key => {
        typeOptions.push({
          name: this.translate.instant(`cover-page.types.${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageType[key]}`),
          value: key
        });
      });
      const typeDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(typeOptions);
      this.fieldType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('cover-page.type'),
        placeholder: this.translate.instant('cover-page.type'),
        datasource: typeDataSource
      });
      const bodyTypeOptions = [];
      Object.values(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType).filter(x => typeof x == 'number').forEach(key => {
        bodyTypeOptions.push({
          name: this.translate.instant(`cover-page.body-types.${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType[key]}`),
          value: key
        });
      });
      const bodyTypeDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(bodyTypeOptions);
      this.fieldBodyType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('cover-page.body-type'),
        placeholder: this.translate.instant('cover-page.body-type'),
        datasource: bodyTypeDataSource
      });
    };
    this.activateTab = tab => {
      this.activeTab = tab;
    };
    this.onHeaderChanged = value => this.coverPage.header = value;
    this.onHtmlBodyChanged = value => this.coverPage.htmlBody = value;
    this.onFooterChanged = value => this.coverPage.footer = value;
    this.groupsChanged = current => {
      this.coverPage.groups = current.map(x => parseInt(x.id));
      this.currentGroups = current;
    };
    this.usersChanged = current => {
      this.coverPage.users = current.map(x => x.name);
      this.currentUsers = current;
    };
    this.onSave = () => {
      if (!this.validate()) return;
      this.spinner.show(this.translate.instant('Common.Saving'), document.documentElement);
      if (this.editMode) {
        this.interfaxService.updateCoverpage(this.coverPage, this.saved, this.saveFailed);
        return;
      }
      this.interfaxService.createCoverpage(this.coverPage, this.saved, this.saveFailed);
    };
    this.saved = () => {
      this.spinner.hide();
      this.toastr.success(this.translate.instant(this.editMode ? 'cover-page.save-success' : 'cover-page.create-success'));
      this.close();
    };
    this.saveFailed = err => {
      this.spinner.hide();
      this.errorsService.showErrorsModal(err, 'cover-page.save-fail');
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('cover-page.load-cover-page-failed', err);
    };
    this.onCancel = () => {
      this.close();
    };
    this.close = () => {
      this.router.navigateByUrl('product/settings/InterFAX/InterFAX-Upland.Bamba.InterFAX.Administration.CoverPages.Folder');
    };
  }
  ngOnInit() {
    this.createButtons();
    this.createFields();
    this.substitutions = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Substitutions(this.userState).getTemplatesSubstitutions();
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      this.load();
    }));
    this.hasTX = this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_SEND);
    this.sendFaxProfileLoaded = this.userState.userProfile?.fonts != null;
    if (this.hasTX && !this.sendFaxProfileLoaded) this.sendFaxService.loadSendFaxProfile(document.documentElement, this.onLoadingProfileSucceeded, this.onLoadingProfileFailed);
  }
  ngOnDestroy() {
    this.triggerRefocusSubject.complete();
    this.subscriptions.unsubscribe();
  }
  findMatches(searchTerm, completed) {
    this.interfaxService.getFaxUsers(items => {
      completed(items.map(u => new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DualPickListItem(u.userId, u.userId, u.iconUrl)));
    }, () => {}, searchTerm, _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.FaxUserStatus.Open);
  }
  createButtons() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onCancel, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.formControls.push(this.saveButton);
    this.formControls.push(this.cancelButton);
    this.translateService.get('Common.Save').subscribe(res => {
      this.saveButton.setTranslation(res);
    });
    this.translateService.get('Common.Cancel').subscribe(res => {
      this.cancelButton.setTranslation(res);
    });
  }
  validate() {
    const errors = [];
    if (shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Strings.isEmpty(this.coverPage.name)) errors.push('cover-page.name-required');
    if (this.coverPage.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageType.Html) {
      if (shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Strings.isEmpty(this.coverPage.htmlBody)) errors.push('cover-page.body-required');
      if (this.coverPage.coverpageBodyType != shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType.None && this.coverPage.htmlBody.toLocaleLowerCase().indexOf('%%fax.message%%') == -1) errors.push('cover-page.body-miss-message-var');
    }
    if (errors.length) {
      this.errorsService.showErrorsModal(errors, 'cover-page.save-fail');
      return;
    }
    return !errors.length;
  }
  static {
    this.ɵfac = function CoverPagePropertiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CoverPagePropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_7__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_8__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_6__.SendFaxService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: CoverPagePropertiesComponent,
      selectors: [["app-cover-page-properties"]],
      viewQuery: function CoverPagePropertiesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.spinnerWrapper = _t.first);
        }
      },
      decls: 5,
      vars: 3,
      consts: [["spinnerWrapper", ""], [1, "cover-page-properties", "project-list-dashboard-body", "h-100", "w-100"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "cover-page-properties-content"], ["class", "panel row m-0 h-100 w-100", "appAutoFocusFirstInput", "", 3, "triggerRefocus", 4, "ngIf"], ["appAutoFocusFirstInput", "", 1, "panel", "row", "m-0", "h-100", "w-100", 3, "triggerRefocus"], [1, "col-12", "col-md-3", "properties-panel"], [1, "row"], [1, "col"], [3, "valueChange", "return", "field", "value"], [3, "valueChange", "field", "value", "triggerBlurEventOnLoad"], [3, "valueChange", "field", "value", "disabled"], [1, "col", "mt-2"], [3, "valueChange", "value", "label"], [1, "col-12", "col-md-9", "panel", "p-0", "border-bottom-0", "h-100", "w-100"], [3, "tabSelected", "tabs", "activeTab"], [1, "tab-content", "content-padding", "pr-3"], ["class", "h-100 w-100", 3, "hidden", 4, "ngIf"], ["class", "h-100", 4, "ngIf"], ["class", "mt-2 text-center", 4, "ngIf"], [1, "h-100", "w-100", 3, "hidden"], [3, "valueChange", "initialValue", "placeholder", "substitutions", "height"], [1, "limit-hint"], [1, "h-100"], [1, "max-height", "col", "p-0", 3, "currentChange", "available", "current", "displayField", "listName", "sortSelectedItems", "allowOrderSelectedItems", "iconField", "iconType"], [1, "max-height", "col", "p-0", 3, "currentChange", "available", "current", "displayField", "listName", "sortSelectedItems", "allowOrderSelectedItems", "iconField", "iconType", "searchItems"], [1, "mt-2", "text-center"]],
      template: function CoverPagePropertiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-secondary-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CoverPagePropertiesComponent_div_4_Template, 24, 21, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("headerText", ctx.title)("rightControls", ctx.formControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_9__.SecondaryHeaderComponent, _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_10__.DualPicklistComponent, _blocks_components_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_11__.HtmlEditorComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_12__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_13__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_14__.TabBarComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.CheckboxComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.cover-page-properties[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n  padding-bottom: 15px;\n  height: calc(100% - 56px);\n}\n.cover-page-properties[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .properties-panel[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .validator-panel[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .properties-panel-separator[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .panel-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 2px;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .cover-page-properties-content[_ngcontent-%COMP%] {\n  height: calc(100% - 56px);\n  width: 100%;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  height: calc(100% - 56px);\n  width: 100%;\n}\n.cover-page-properties[_ngcontent-%COMP%]   .limit-hint[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: gray;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9jb3Zlci1wYWdlLXByb3BlcnRpZXMvY292ZXItcGFnZS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQTdPQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQWdQRjtBQTlPRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUFnUEo7QUE5T0k7RUFDRSwyQkFBQTtBQWdQTjtBQTVPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUE4T0o7QUEzT0U7RUFDRSxpQkFBQTtFQUNBLDhDRHdEc0I7RUN2RHRCLCtCQUFBO0FBNk9KO0FBMU9FO0VBQ0Usa0JBQUE7QUE0T0o7QUF6T0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTJPSjtBQXhPRTtFQUNFLHlCRGtDTTtFQ2pDTixnQ0FBQTtFQUNBLGFBQUE7QUEwT0o7QUF2T0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUF5T0o7QUF0T0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUF3T0o7QUFyT0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUF1T0o7QUFwT0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXNPSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmNvdmVyLXBhZ2UtcHJvcGVydGllcyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAudmFsaWRhdG9yLXBhbmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5wcm9wZXJ0aWVzLXBhbmVsLXNlcGFyYXRvciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG5cclxuICAuY292ZXItcGFnZS1wcm9wZXJ0aWVzLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5saW1pdC1oaW50IHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-fax-settings_cover-page-properties_cover-page-properties-module_ts.js.map