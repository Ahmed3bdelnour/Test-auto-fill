"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-olc_snippets_snippets_module_ts"],{

/***/ 98331:
/*!***************************************************************************************!*\
  !*** ./src/app/views/admin-olc/snippets/properties-form/properties-form.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesFormComponent: () => (/* binding */ PropertiesFormComponent)
/* harmony export */ });
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _models_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/snippet */ 24124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _properties_snippet_properties_snippet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../properties-snippet/properties-snippet.component */ 20615);










function PropertiesFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-properties-snippet", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("snippet", ctx_r0.snippet);
  }
}
class PropertiesFormComponent {
  constructor(translateService, userStateService) {
    this.translateService = translateService;
    this.userStateService = userStateService;
    this.activeTab = 'snippet';
    this.tabs = new Array();
    this.activateTab = tab => {
      this.activeTab = tab;
    };
  }
  ngOnInit() {
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.Tab('snippet', this.translateService.instant('admin-olc-snippets.snippet')));
  }
  static {
    this.ɵfac = function PropertiesFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PropertiesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PropertiesFormComponent,
      selectors: [["app-properties-form"]],
      inputs: {
        snippet: "snippet"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "admin-olc-snippet-properties", "h-100"], [3, "tabSelected", "tabs"], [1, "tab-content", "content-padding", "h-100"], ["class", "h-100", 4, "ngIf"], [1, "h-100"], [1, "h-100", 3, "snippet"]],
      template: function PropertiesFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "app-tab-bar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tabSelected", function PropertiesFormComponent_Template_app_tab_bar_tabSelected_1_listener($event) {
            return ctx.activateTab($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PropertiesFormComponent_div_3_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabs", ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeTab === "snippet");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_3__.TabBarComponent, _properties_snippet_properties_snippet_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesSnippetComponent],
      styles: [".admin-olc-snippet-properties .dual-picklist {\n  height: calc(100% - 52px);\n}\n.admin-olc-snippet-properties .tab-bar {\n  border-radius: 2px;\n}\n.admin-olc-snippet-properties .tab-bar div.tabs-content.working-tab {\n  padding-top: 5px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tb2xjL3NuaXBwZXRzL3Byb3BlcnRpZXMtZm9ybS9wcm9wZXJ0aWVzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tb2xjLXNuaXBwZXQtcHJvcGVydGllc3tcclxuICAuZHVhbC1waWNrbGlzdCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUycHgpO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1iYXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIFxyXG4gICAgZGl2LnRhYnMtY29udGVudC53b3JraW5nLXRhYiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 20615:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/admin-olc/snippets/properties-snippet/properties-snippet.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesSnippetComponent: () => (/* binding */ PropertiesSnippetComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/models/role */ 29547);
/* harmony import */ var _models_snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/snippet */ 24124);
/* harmony import */ var _shared_services_olc_template_styles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/olc-template-styles.service */ 13884);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_components_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/components/html-editor/html-editor.component */ 74728);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);










function PropertiesSnippetComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "app-html-editor", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function PropertiesSnippetComponent_div_0_Template_app_html_editor_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.updateSnippetHTML($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isOlcTed", true)("initialValue", ctx_r1.snippet.html)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 11, "admin-olc-templates.item-text-placeholder"))("showBarcode", false)("showFontType", false)("showFontSize", false)("showBlockQuote", false)("showUndoAndRedo", true)("olcTedStyles", ctx_r1.defaultOlcStyles)("showImage", ctx_r1.canApplyMedia)("height", "350px");
  }
}
class PropertiesSnippetComponent {
  constructor(olcTemplateStylesService, userStateService) {
    this.olcTemplateStylesService = olcTemplateStylesService;
    this.userStateService = userStateService;
    this.defaultOlcStyles = [];
    this.canApplyMedia = false;
    this.updateSnippetHTML = html => {
      this.snippet.html = html;
    };
  }
  ngOnInit() {
    this.defaultOlcStyles = this.olcTemplateStylesService.defaultOlcStyles;
    this.canApplyMedia = this.userStateService.hasRolePermission(_Bamba_Shared_src_models_role__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.OLCTED_MEDIA_APPLY);
  }
  static {
    this.ɵfac = function PropertiesSnippetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PropertiesSnippetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_olc_template_styles_service__WEBPACK_IMPORTED_MODULE_2__.OlcTemplateStylesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PropertiesSnippetComponent,
      selectors: [["app-properties-snippet"]],
      inputs: {
        snippet: "snippet"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "h-100 w-100 properties-snippet", 4, "ngIf"], [1, "h-100", "w-100", "properties-snippet"], [3, "valueChange", "isOlcTed", "initialValue", "placeholder", "showBarcode", "showFontType", "showFontSize", "showBlockQuote", "showUndoAndRedo", "olcTedStyles", "showImage", "height"]],
      template: function PropertiesSnippetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PropertiesSnippetComponent_div_0_Template, 3, 13, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.snippet);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _blocks_components_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_4__.HtmlEditorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 90400:
/*!*********************************************************************!*\
  !*** ./src/app/views/admin-olc/snippets/snippets-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetsRoutingModule: () => (/* binding */ SnippetsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _snippets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets.component */ 93246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'duplicate/:snippetId',
  component: _snippets_component__WEBPACK_IMPORTED_MODULE_0__.SnippetsComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: 'create',
  component: _snippets_component__WEBPACK_IMPORTED_MODULE_0__.SnippetsComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':snippetId',
  component: _snippets_component__WEBPACK_IMPORTED_MODULE_0__.SnippetsComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class SnippetsRoutingModule {
  static {
    this.ɵfac = function SnippetsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SnippetsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SnippetsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SnippetsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 93246:
/*!****************************************************************!*\
  !*** ./src/app/views/admin-olc/snippets/snippets.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetsComponent: () => (/* binding */ SnippetsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var _Bamba_Shared_src_models_field_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/models/field-definition */ 62645);
/* harmony import */ var _Bamba_Shared_src_models_metadata_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/models/metadata-definition */ 22686);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _models_snippet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/snippet */ 24124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/components/created-modified/created-modified.component */ 60622);
/* harmony import */ var _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./properties-form/properties-form.component */ 98331);

























function SnippetsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-secondary-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "app-created-modified", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7)(8, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function SnippetsComponent_div_0_Template_app_field_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.snippet.name, $event) || (ctx_r1.snippet.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 7)(10, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function SnippetsComponent_div_0_Template_app_field_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.snippet.slug, $event) || (ctx_r1.snippet.slug = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "app-properties-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("focusDelay", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 12, "admin-olc-snippets.HeadText"))("rightControls", ctx_r1.rightControls);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r1.snippet.id)("createdDate", ctx_r1.snippet.dateCreatedUTC)("modifiedDate", ctx_r1.snippet.dateModifiedUTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.snippet.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.fieldSlug);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.snippet.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 14, "admin-olc-snippets.properties"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippet", ctx_r1.snippet);
  }
}
class SnippetsComponent {
  constructor(translate, hydraApi, route, toastr, errorsService, spinner, location) {
    this.translate = translate;
    this.hydraApi = hydraApi;
    this.route = route;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.location = location;
    this.rightControls = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    this.snippetLoaded = s => {
      if (this.routeDataType === 'duplicate') {
        s.name = `${this.translate.instant('Admin.CopyOf')} ${s.name}`;
        s.id = '';
      }
      this.snippet = s;
      this.spinner.hide();
    };
    this.snippetLoadFailed = () => {
      this.toastr.error(this.translate.instant('admin-olc-snippets.snippet-load-failed'));
      this.spinner.hide();
    };
    this.createFields = () => {
      this.fieldName = new _Bamba_Shared_src_models_field_definition__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared_src_models_metadata_definition__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-olc-snippets.name'),
        placeholder: this.translate.instant('admin-olc-snippets.name-placeholder'),
        required: true
      });
      this.fieldSlug = new _Bamba_Shared_src_models_field_definition__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: _Bamba_Shared_src_models_metadata_definition__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
        label: this.translate.instant('admin-olc-snippets.slug'),
        placeholder: this.translate.instant('admin-olc-snippets.slug-placeholder'),
        required: false
      });
    };
    this.onSave = () => {
      this.spinner.showSavingSpinner();
      if (this.snippet.id) {
        this.hydraApi.updateSnippet(this.snippet, this.snippetSaved, this.snippetSaveFailed);
      } else {
        this.hydraApi.createSnippet(this.snippet, this.snippetSaved, this.snippetSaveFailed);
      }
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.snippetSaved = result => {
      if (result.success) {
        this.toastr.success(this.translate.instant('admin-olc-snippets.snippet-saved'));
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-olc-snippets.validation-errors');
      }
      this.spinner.hide();
    };
    this.snippetSaveFailed = err => {
      this.toastr.error(this.translate.instant('admin-olc-snippets.snippet-save-failed'));
      this.spinner.hide();
    };
    this.returnToGrid = () => this.location.back();
  }
  ngOnInit() {
    this.createButtons();
    this.createFields();
    this.getSnippetData();
  }
  getSnippetData() {
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeDataType = data.type;
      if (['properties', 'duplicate'].includes(this.routeDataType)) {
        this.spinner.show(this.translate.instant('Common.Loading'), document.documentElement);
        this.hydraApi.getSnippet(params.snippetId, this.snippetLoaded, this.snippetLoadFailed);
      }
      if (this.routeDataType === 'create') {
        this.snippetLoaded(new _models_snippet__WEBPACK_IMPORTED_MODULE_6__.Snippet({
          id: '',
          dateCreatedUTC: new Date(),
          dateModifiedUTC: new Date(),
          name: '',
          html: '',
          slug: ''
        }));
      }
    }));
  }
  createButtons() {
    const saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onSave, this.translate.instant('admin-olc-snippets.save'), 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    const cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_4__.Control(this.onCancel, this.translate.instant('admin-olc-snippets.cancel'), 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.rightControls.push(saveButton);
    this.rightControls.push(cancelButton);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function SnippetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SnippetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: SnippetsComponent,
      selectors: [["app-snippets"]],
      decls: 1,
      vars: 1,
      consts: [["class", "admin-olc-snippet d-flex flex-column", "appAutoFocusFirstInput", "", 3, "focusDelay", 4, "ngIf"], ["appAutoFocusFirstInput", "", 1, "admin-olc-snippet", "d-flex", "flex-column", 3, "focusDelay"], [3, "headerText", "rightControls"], [1, "container-fluid", "col", "min-h-fit-content"], ["id", "spinnerPanel", 1, "row", "panel", "min-h-fit-content", "h-100", "m-0"], [1, "col-12", "col-md-3", "properties-panel"], [3, "id", "createdDate", "modifiedDate"], [1, "col", "p-0"], [3, "valueChange", "field", "value"], [1, "col-12", "col-md-9", "p-0", "step-panel", "d-flex", "flex-column"], [1, "step-panel-wrapper", "vcenter"], [1, "col", "step-panel-header"], [1, "d-flex", "flex-column", "col", "p-0", 3, "snippet"]],
      template: function SnippetsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SnippetsComponent_div_0_Template, 17, 16, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.snippet);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_8__.AutoFocusFirstInputDirective, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_9__.SecondaryHeaderComponent, _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_10__.CreatedModifiedComponent, _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_11__.PropertiesFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-olc-snippet {\n  position: relative;\n  line-height: normal;\n  padding-bottom: 15px;\n  height: 100%;\n  min-height: fit-content !important;\n}\n.admin-olc-snippet .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-olc-snippet .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-olc-snippet .secondary-header .section-header {\n  position: static !important;\n}\n.admin-olc-snippet .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-olc-snippet .properties-panel {\n  background-color: var(--brand-secondary-color);\n  padding: 15px;\n  border-right: solid 1px #cfcfcf;\n}\n.admin-olc-snippet .step-panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-olc-snippet .step-panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-olc-snippet .vcenter {\n  display: table;\n}\n.admin-olc-snippet .vcenter :first-child {\n  display: table-cell;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW9sYy9zbmlwcGV0cy9zbmlwcGV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtB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cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5hZG1pbi1vbGMtc25pcHBldCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5taW4taC1maXQtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZGFyeS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NmY2ZjZjtcclxuICB9XHJcblxyXG4gIC5wcm9wZXJ0aWVzLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtcGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtcGFuZWwtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcblxyXG4gIC52Y2VudGVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLnZjZW50ZXIgOmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9265:
/*!*************************************************************!*\
  !*** ./src/app/views/admin-olc/snippets/snippets.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetsModule: () => (/* binding */ SnippetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _snippets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets.component */ 93246);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _snippets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snippets-routing.module */ 90400);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties-form/properties-form.component */ 98331);
/* harmony import */ var _properties_snippet_properties_snippet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties-snippet/properties-snippet.component */ 20615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);










class SnippetsModule {
  static {
    this.ɵfac = function SnippetsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SnippetsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: SnippetsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _snippets_routing_module__WEBPACK_IMPORTED_MODULE_2__.SnippetsRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TabBarModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SnippetsModule, {
    declarations: [_snippets_component__WEBPACK_IMPORTED_MODULE_0__.SnippetsComponent, _properties_form_properties_form_component__WEBPACK_IMPORTED_MODULE_5__.PropertiesFormComponent, _properties_snippet_properties_snippet_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesSnippetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _snippets_routing_module__WEBPACK_IMPORTED_MODULE_2__.SnippetsRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TabBarModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-olc_snippets_snippets_module_ts.js.map