"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_document-capture_document-capture_module_ts"],{

/***/ 26751:
/*!***********************************************************!*\
  !*** ./src/app/blocks/box/box-head/box-head.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxHeadComponent: () => (/* binding */ BoxHeadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 77353);



const _c0 = ["appBoxHead", ""];
function BoxHeadComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoxHeadComponent_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.headButton.buttonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.headButton.buttonText);
  }
}
class BoxHeadComponent {
  constructor() {}
  ngOnInit() {}
  onClick() {
    this.headButton.buttonFunction();
  }
  static {
    this.ɵfac = function BoxHeadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoxHeadComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoxHeadComponent,
      selectors: [["", "appBoxHead", ""]],
      inputs: {
        headText: "headText",
        headButton: "headButton"
      },
      attrs: _c0,
      decls: 4,
      vars: 4,
      consts: [[1, "headText"], ["class", "box-head__right-panel project-list-pages", 4, "ngIf"], [1, "box-head__right-panel", "project-list-pages"], ["tabindex", "1", 3, "click"]],
      template: function BoxHeadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BoxHeadComponent_div_3_Template, 3, 3, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.headText));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headButton);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 20186:
/*!******************************************!*\
  !*** ./src/app/blocks/box/box.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxModule: () => (/* binding */ BoxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _box_head_box_head_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box-head/box-head.component */ 26751);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 68876);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);






class BoxModule {
  static {
    this.ɵfac = function BoxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoxModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: BoxModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.OpenDropdownModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BoxModule, {
    declarations: [_box_head_box_head_component__WEBPACK_IMPORTED_MODULE_0__.BoxHeadComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.OpenDropdownModule],
    exports: [_box_head_box_head_component__WEBPACK_IMPORTED_MODULE_0__.BoxHeadComponent]
  });
})();

/***/ }),

/***/ 56516:
/*!**************************************************************************!*\
  !*** ./src/app/blocks/components/split-button/split-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitButtonComponent: () => (/* binding */ SplitButtonComponent)
/* harmony export */ });
/* harmony import */ var _services_action_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/action.service */ 12811);
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/actions */ 75414);
/* harmony import */ var _core_keyboardActionMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/keyboardActionMapping */ 20294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);









function SplitButtonComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitButtonComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateAction(ctx_r1.mainItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r1.getItemTitle(ctx_r1.mainItem))("disabled", !ctx_r1.mainItem.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.mainItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function SplitButtonComponent_div_2_div_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitButtonComponent_div_2_div_3_a_1_Template_a_click_0_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateAction(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !item_r4.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getItemActionName(item_r4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getItemKeyMapping(item_r4));
  }
}
function SplitButtonComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SplitButtonComponent_div_2_div_3_a_1_Template, 4, 4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.getItems());
  }
}
function SplitButtonComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SplitButtonComponent_div_2_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showDropDown);
  }
}
class SplitButtonComponent {
  constructor(elementRef, cdr, actionService, translate) {
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.actionService = actionService;
    this.translate = translate;
    this.showDropDown = false;
    this.setMainItem = () => {
      this.mainItem = this.items && this.items.length ? this.items[0] : null;
    };
    this.activateAction = item => {
      this.actionService.activateAction(new _core_actions__WEBPACK_IMPORTED_MODULE_1__.ActionEvent(item.action));
    };
    this.getItemTitle = item => {
      const action = this.translate.instant(`Actions.${item.action}`);
      const mapping = _core_keyboardActionMapping__WEBPACK_IMPORTED_MODULE_2__.KeyboardActionMapping.getTooltipFor(item.action, this.translate);
      return `${action} ${mapping}`;
    };
    this.getItemActionName = item => {
      return this.translate.instant(`Actions.${item.action}`);
    };
    this.getItemKeyMapping = item => {
      return _core_keyboardActionMapping__WEBPACK_IMPORTED_MODULE_2__.KeyboardActionMapping.getTooltipFor(item.action, this.translate);
    };
    this.getItems = () => {
      if (!this.items || !this.items.length) {
        return [];
      }
      return this.items.filter(i => i != this.items[0]);
    };
  }
  ngOnInit() {
    this.setMainItem();
  }
  ngOnChanges(changes) {
    if (changes.items) this.setMainItem();
  }
  onSplitButtonClicked() {
    if (this.mainItem && this.mainItem.enabled) this.activateAction(this.mainItem);
  }
  onClick(event, targetElement) {
    if (!targetElement) return;
    if (this.elementRef.nativeElement.querySelector('.split-dropdown').contains(targetElement)) {
      this.showDropDown = !this.showDropDown;
    } else {
      this.showDropDown = false;
    }
    this.cdr.detectChanges();
  }
  static {
    this.ɵfac = function SplitButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SplitButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_action_service__WEBPACK_IMPORTED_MODULE_0__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SplitButtonComponent,
      selectors: [["app-splitbutton"]],
      hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SplitButtonComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event, $event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        items: "items"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [["tabindex", "0", 1, "split-button", 3, "keydown.enter"], ["class", "button-icon", "style", "border: 0 !important;", "tabindex", "-1", 3, "title", "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "-1", 1, "button-icon", 2, "border", "0 !important", 3, "click", "title", "disabled"], ["alt", "", 3, "src"], [1, "split-dropdown"], [1, "caret"], ["class", "dropdown-content", 4, "ngIf"], [1, "dropdown-content"], [3, "disabled", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "pull-right"]],
      template: function SplitButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function SplitButtonComponent_Template_div_keydown_enter_0_listener() {
            return ctx.onSplitButtonClicked();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SplitButtonComponent_button_1_Template, 2, 3, "button", 1)(2, SplitButtonComponent_div_2_Template, 4, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mainItem);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.items.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.split-button {\n  display: inline-flex;\n}\n.split-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.2rem rgba(var(--brand-primary-color), 0.8);\n}\n.split-button .button-icon img[src*=\"camera-solid.svg\"] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n}\n.split-button .split-dropdown {\n  position: relative;\n  display: inline-block;\n}\n.split-button .split-dropdown i {\n  margin-right: 8px;\n  margin-top: 8px;\n  color: #6b7786;\n}\n.split-button .split-dropdown .dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 180px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  border: 1px solid var(--brand-primary-color);\n}\n.split-button .split-dropdown .dropdown-content a {\n  color: black;\n  padding: 8px 12px;\n  text-decoration: none;\n  display: block;\n  cursor: pointer;\n  font-size: 12px;\n}\n.split-button .split-dropdown .dropdown-content a:hover {\n  background-color: var(--brand-secondary-color) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2Jsb2Nrcy9jb21wb25lbnRzL3NwbGl0LWJ1dHRvbi9zcGxpdC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0Usb0JBQUE7QUFnUEY7QUE5T0U7RUFDRSxhQUFBO0VBQ0EsOERENkZnQztBQ21KcEM7QUE1T0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBOE9OO0FBMU9FO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQTRPSjtBQXpPRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUEyT0o7QUF4T0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FBME9KO0FBdk9FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF5T0o7QUF0T0U7RUFDRSx5REFBQTtBQXdPSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLnNwbGl0LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWljb24ge1xyXG4gICAgaW1nW3NyYyo9J2NhbWVyYS1zb2xpZC5zdmcnXSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zcGxpdC1kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc3BsaXQtZHJvcGRvd24gaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGNvbG9yOiAjNmI3Nzg2O1xyXG4gIH1cclxuXHJcbiAgLnNwbGl0LWRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR1cGxhbmQtYmx1ZTtcclxuICB9XHJcblxyXG4gIC5zcGxpdC1kcm9wZG93biAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuc3BsaXQtZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 13118:
/*!**********************************************!*\
  !*** ./src/app/blocks/models/folder-view.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderView: () => (/* binding */ FolderView)
/* harmony export */ });
class FolderView {
  constructor(id, tenantId, workflowId, workflowStepId, parentId, name, itemCount) {
    this.id = id;
    this.tenantId = tenantId;
    this.workflowId = workflowId;
    this.workflowStepId = workflowStepId;
    this.parentId = parentId;
    this.name = name;
    this.itemCount = itemCount;
  }
}

/***/ }),

/***/ 88087:
/*!****************************************************!*\
  !*** ./src/app/blocks/models/update-field-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateFieldData: () => (/* binding */ UpdateFieldData),
/* harmony export */   UpdateGroupOfFields: () => (/* binding */ UpdateGroupOfFields)
/* harmony export */ });
class UpdateFieldData {
  constructor(context, value, location) {
    this.context = context;
    this.value = value;
    this.location = location;
  }
}
class UpdateGroupOfFields {
  constructor(context, values) {
    this.context = context;
    this.values = values;
  }
}

/***/ }),

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

/***/ 61502:
/*!****************************************************************************!*\
  !*** ./src/app/views/document-capture/capture-models/capture-constants.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureConstants: () => (/* binding */ CaptureConstants)
/* harmony export */ });
class CaptureConstants {
  static {
    this.folder = 'folder';
  }
  static {
    this.document = 'document';
  }
  static {
    this.page = 'page';
  }
}

/***/ }),

/***/ 89808:
/*!******************************************************************!*\
  !*** ./src/app/views/document-capture/capture-models/sorting.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsGridSortingConfig: () => (/* binding */ DocumentsGridSortingConfig),
/* harmony export */   SortingType: () => (/* binding */ SortingType)
/* harmony export */ });
class DocumentsGridSortingConfig {}
var SortingType;
(function (SortingType) {
  SortingType[SortingType["None"] = 0] = "None";
  SortingType[SortingType["Asc"] = 1] = "Asc";
  SortingType[SortingType["Desc"] = -1] = "Desc";
})(SortingType || (SortingType = {}));

/***/ }),

/***/ 20063:
/*!****************************************************************************************!*\
  !*** ./src/app/views/document-capture/capture-services/document-list-style.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentListStyleService: () => (/* binding */ DocumentListStyleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var _capture_models_document_list_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../capture-models/document-list-style */ 48648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);



class DocumentListStyleService {
  constructor() {
    this.documentListStyle = _capture_models_document_list_style__WEBPACK_IMPORTED_MODULE_0__.DocumentListStyle.Tree;
    this._documentListStyleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.onChangeDocumentListStyle = this._documentListStyleSubject.asObservable();
    this.update = style => {
      this.documentListStyle = style;
      this._documentListStyleSubject.next(style);
    };
    this.getStyle = () => {
      return this.documentListStyle;
    };
  }
  static {
    this.ɵfac = function DocumentListStyleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentListStyleService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DocumentListStyleService,
      factory: DocumentListStyleService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 51244:
/*!*************************************************************************************!*\
  !*** ./src/app/views/document-capture/capture-services/document-locking.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentLockingService: () => (/* binding */ DocumentLockingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_lock_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/lock-status */ 76852);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capture-update.service */ 321);












class DocumentLockingService {
  static {
    this.leaseRefreshIntervalSeconds = 60 * 1000;
  }
  constructor(hydraApi, delayService, userStateService, captureUpdateService, authService) {
    this.hydraApi = hydraApi;
    this.delayService = delayService;
    this.userStateService = userStateService;
    this.captureUpdateService = captureUpdateService;
    this.authService = authService;
    this.lockStatuses = {};
    this.lockStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.onDocumentChanged = doc => {
      this.unlockDocuments();
      if (doc) {
        this.lock(doc.workitem.id);
      }
    };
    this.onUserChanged = user => {
      if (!user) return;
      this.unlockDocuments();
      this.currentUser = user;
    };
    this.unlockDocuments = () => {
      if (!this.userStateService.isLoggedIn()) return;
      for (const documentId in this.lockStatuses) {
        const ls = this.lockStatuses[documentId];
        if (ls == null) continue;
        if (ls.lockedByUserId != this.currentUser.id) continue;
        if (!ls.locked) continue;
        this.unlock(documentId);
      }
    };
    this.isLocked = documentId => {
      const ls = this.lockStatuses[documentId];
      if (!ls) return false;
      return ls.locked && !ls.expired;
    };
    this.isLockedByCurrentUser = documentId => {
      if (!this.currentUser) return false;
      const ls = this.lockStatuses[documentId];
      if (!ls) return false;
      return ls.locked && ls.lockedByUserId == this.currentUser.id && !ls.expired();
    };
    this.lock = documentId => {
      this.lockStatuses[documentId] = null;
      this.hydraApi.setDocumentLock(_blocks_models_lock_status__WEBPACK_IMPORTED_MODULE_1__.LockAction.Lock, documentId, this.onDocumentLockedChanged, this.onDocumentLockFailed);
    };
    this.unlock = documentId => {
      this.hydraApi.setDocumentLock(_blocks_models_lock_status__WEBPACK_IMPORTED_MODULE_1__.LockAction.Unlock, documentId, this.onDocumentLockedChanged, this.onDocumentUnlockFailed);
    };
    this.refreshLease = () => {
      if (!this.currentUser) return;
      for (const documentId in this.lockStatuses) {
        const ls = this.lockStatuses[documentId];
        if (ls == null) continue;
        if (ls.lockedByUserId != this.currentUser.id) continue;
        if (!ls.locked) continue;
        this.hydraApi.refreshLock(ls.id, this.onDocumentLockedChanged, this.onDocumentLockFailed);
      }
      this.delayService.execute(this.refreshLease, DocumentLockingService.leaseRefreshIntervalSeconds);
    };
    this.onDocumentLockedChanged = lockStatus => {
      this.lockStatuses[lockStatus.id] = lockStatus;
      this.lockStatusChanged.emit(lockStatus);
    };
    this.onDocumentLockFailed = err => {
      console.log(err);
      //toast: ?
    };
    this.onDocumentUnlockFailed = err => {
      //toast: ?
    };
    delayService.execute(this.refreshLease, DocumentLockingService.leaseRefreshIntervalSeconds);
    this.subscriptions.add(captureUpdateService.onChangeDocument.subscribe(this.onDocumentChanged));
    this.subscriptions.add(userStateService.userChanged.subscribe(this.onUserChanged));
    this.subscriptions.add(authService.onLogout.subscribe(this.unlockDocuments));
    this.currentUser = userStateService.user;
  }
  static {
    this.ɵfac = function DocumentLockingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentLockingService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_3__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_capture_update_service__WEBPACK_IMPORTED_MODULE_4__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: DocumentLockingService,
      factory: DocumentLockingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 72297:
/*!***************************************************************************************!*\
  !*** ./src/app/views/document-capture/capture-services/folder-view-events.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderViewEventsService: () => (/* binding */ FolderViewEventsService)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/signalr */ 90917);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @microsoft/signalr */ 2726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_hubconnection_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/hubconnection-operations */ 52837);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/models/folder-item */ 48844);
/* harmony import */ var _blocks_models_folder_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/models/folder-view */ 13118);
/* harmony import */ var _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/models/folder-view-event */ 7779);
/* harmony import */ var _blocks_models_work_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/models/work-item */ 54656);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../capture-models */ 48004);
/* harmony import */ var _capture_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./capture-update.service */ 321);
/* harmony import */ var _document_capture_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./document-capture.service */ 70131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);
















class FolderViewEventsService {
  constructor(captureUpdate, documentCaptureService, authService) {
    this.captureUpdate = captureUpdate;
    this.documentCaptureService = documentCaptureService;
    this.authService = authService;
    this._addFolderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this._deleteFolderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this._updateFolderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this._addItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this._deleteItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this._updateItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this._sortGridColumnData = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.allowReconnect = true;
    this.onAddFolder = this._addFolderSubject.asObservable();
    this.onDeleteFolder = this._deleteFolderSubject.asObservable();
    this.onUpdateFolder = this._updateFolderSubject.asObservable();
    this.onAddItem = this._addItemSubject.asObservable();
    this.onDeleteItem = this._deleteItemSubject.asObservable();
    this.onUpdateItem = this._updateItemSubject.asObservable();
    this.onSortGridColumnData = this._sortGridColumnData.asObservable();
    if (documentCaptureService.currentWorkflow) {
      this.allowReconnect = true;
      this.connectFolderEvents(documentCaptureService.currentWorkflow);
    }
    this.captureUpdate.onChangeWorkflow.subscribe(workflow => {
      if (workflow) {
        this.allowReconnect = true;
        this.connectFolderEvents(workflow);
      }
    });
  }
  connectFolderEvents(workflow) {
    try {
      if (!this.allowReconnect) return;
      if (this._hubConnection && this._hubConnection.state === _microsoft_signalr__WEBPACK_IMPORTED_MODULE_11__.HubConnectionState.Connected) {
        this.allowReconnect = false;
        this._hubConnection.stop().then(() => {
          delete this._hubConnection;
          this.startFolderEvents(workflow);
        });
      } else {
        this.startFolderEvents(workflow);
      }
    } catch (e) {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('FolderViewEventsService.connectFolderEvents', e);
    }
  }
  startFolderEvents(workflow) {
    try {
      this._hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_12__.HubConnectionBuilder().withUrl('/eventhub', {
        accessTokenFactory: () => this.authService.getToken()
      }).build();
      _blocks_core_hubconnection_operations__WEBPACK_IMPORTED_MODULE_1__.HubConnectionOperations.setTimeout(this._hubConnection);
      this._hubConnection.start().catch(err => console.log(err));
      this.allowReconnect = true;
      const notificationEvent = `folderview-${workflow.id}`;
      this._hubConnection.on(notificationEvent, folderViewEvent => {
        if (folderViewEvent.eventType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.EventTypes.added) {
          this.addEventItem(folderViewEvent);
        } else if (folderViewEvent.eventType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.EventTypes.updated) {
          this.updateEventItem(folderViewEvent);
        } else if (folderViewEvent.eventType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.EventTypes.deleted) {
          this.deleteEventItem(folderViewEvent);
        }
      });
      _blocks_core_hubconnection_operations__WEBPACK_IMPORTED_MODULE_1__.HubConnectionOperations.executeOnClose(this._hubConnection, () => {
        this.connectFolderEvents(workflow);
      });
    } catch (e) {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('FolderViewEventsService.startFolderEvents', e);
    }
  }
  createEventFolderView(data) {
    return new _blocks_models_folder_view__WEBPACK_IMPORTED_MODULE_4__.FolderView(data.Id, data.TenantId, data.WorkflowId, data.WorkflowStepId, data.ParentId, data.Name, data.ItemCount);
  }
  addEventItem(folderViewEvent) {
    if (folderViewEvent.itemType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.ItemTypes.folder) {
      this.addFolderView(this.createEventFolderView(folderViewEvent.data));
    } else if (folderViewEvent.itemType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.ItemTypes.item) {
      this.addFolderItem(new _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__.FolderItem(folderViewEvent.data.parentId, new _blocks_models_work_item__WEBPACK_IMPORTED_MODULE_6__.WorkItem(folderViewEvent.data.workItem), folderViewEvent.data.documents));
    }
  }
  updateEventItem(folderViewEvent) {
    if (folderViewEvent.itemType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.ItemTypes.folder) {
      this.updateFolderView(this.createEventFolderView(folderViewEvent.data));
    } else if (folderViewEvent.itemType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.ItemTypes.item) {
      this.updateFolderItem(new _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__.FolderItem(folderViewEvent.data.parentId, new _blocks_models_work_item__WEBPACK_IMPORTED_MODULE_6__.WorkItem(folderViewEvent.data.workItem), folderViewEvent.data.documents));
    }
  }
  deleteEventItem(folderViewEvent) {
    if (folderViewEvent.itemType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.ItemTypes.folder) {
      this.deleteFolderView(this.createEventFolderView(folderViewEvent.data));
    } else if (folderViewEvent.itemType === _blocks_models_folder_view_event__WEBPACK_IMPORTED_MODULE_5__.ItemTypes.item) {
      this.deleteFolderItem(new _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__.FolderItem(folderViewEvent.data.parentId, new _blocks_models_work_item__WEBPACK_IMPORTED_MODULE_6__.WorkItem(folderViewEvent.data.workItem), folderViewEvent.data.documents));
    }
  }
  addFolderView(folderView) {
    this._addFolderSubject.next(folderView);
  }
  updateFolderView(folderView) {
    this._updateFolderSubject.next(folderView);
  }
  deleteFolderView(folderView) {
    this._deleteFolderSubject.next(folderView);
  }
  addFolderItem(folderItem) {
    this._addItemSubject.next(folderItem);
  }
  updateFolderItem(folderItem) {
    this._updateItemSubject.next(folderItem);
    this.captureUpdate.updateWorkitemMetadata(folderItem.workItem, this.documentCaptureService.getCurrentWorkItem());
    this.checkParentFolderChange(folderItem);
  }
  deleteFolderItem(folderItem) {
    this._deleteItemSubject.next(folderItem);
  }
  sortGridColumnData(sortingConfig) {
    this._sortGridColumnData.next(sortingConfig);
  }
  checkParentFolderChange(fv) {
    const doc = this.documentCaptureService.getCurrentDocument();
    if (!doc || doc.workItemId != fv.workItem?.id) return;
    if (doc.parentFolderId == fv.parentId) return;
    const updatedDocument = new _capture_models__WEBPACK_IMPORTED_MODULE_7__.CapturedDocument(doc.document, fv.workItem, fv.parentId);
    this.captureUpdate.updateParentFolder(updatedDocument);
  }
  static {
    this.ɵfac = function FolderViewEventsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FolderViewEventsService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_capture_update_service__WEBPACK_IMPORTED_MODULE_8__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_document_capture_service__WEBPACK_IMPORTED_MODULE_9__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: FolderViewEventsService,
      factory: FolderViewEventsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5496:
/*!***********************************************************************************!*\
  !*** ./src/app/views/document-capture/delivery-error/delivery-error.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryErrorComponent: () => (/* binding */ DeliveryErrorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var _blocks_core_systemMetaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/core/systemMetaData */ 62489);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../capture-services */ 97954);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../capture-services/capture-update.service */ 321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);












function DeliveryErrorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryErrorComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.showErrorDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Document_Capture.delivery-error"), " ");
  }
}
class DeliveryErrorComponent {
  constructor(capture, captureUpdate, toastr, translate) {
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.toastr = toastr;
    this.translate = translate;
    this.toastMessagesArr = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(() => {
      this.workItem = this.capture.getCurrentWorkItem();
    }));
  }
  ngOnInit() {
    this.workItem = this.capture.getCurrentWorkItem();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.toastMessagesArr.forEach(m => this.toastr.clear(m.toastId));
  }
  get deliveryError() {
    if (!this.workItem) return null;
    const deliveryErrorMetaData = this.workItem.getMetaData(_blocks_core_systemMetaData__WEBPACK_IMPORTED_MODULE_0__.SystemMetaData.DeliveryErrorMessage);
    return deliveryErrorMetaData && deliveryErrorMetaData.value ? deliveryErrorMetaData : null;
  }
  get deliveryErrorTitle() {
    return this.translate.instant('Document_Capture.delivery-error');
  }
  showErrorDetails() {
    const errorMessage = this.toastr.error(this.deliveryError.value, this.deliveryErrorTitle, {
      closeButton: true,
      tapToDismiss: false,
      disableTimeOut: true
    });
    this.toastMessagesArr.push(errorMessage);
  }
  static {
    this.ɵfac = function DeliveryErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DeliveryErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_1__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_2__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DeliveryErrorComponent,
      selectors: [["app-delivery-error"]],
      decls: 1,
      vars: 1,
      consts: [["class", "delivery-error", 3, "click", 4, "ngIf"], [1, "delivery-error", 3, "click"], [1, "badge", "badge-pill", "badge-danger"]],
      template: function DeliveryErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DeliveryErrorComponent_div_0_Template, 5, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.deliveryError);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: [".delivery-error {\n  color: #dc3545;\n  cursor: pointer;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS9kZWxpdmVyeS1lcnJvci9kZWxpdmVyeS1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxpdmVyeS1lcnJvciB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 94919:
/*!***************************************************************************!*\
  !*** ./src/app/views/document-capture/document-capture-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentCaptureRoutingModule: () => (/* binding */ DocumentCaptureRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _document_capture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-capture.component */ 98823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: '',
  component: _document_capture_component__WEBPACK_IMPORTED_MODULE_0__.DocumentCaptureComponent,
  pathMatch: 'full'
}, {
  path: ':workflowId:/:workflowStepId/:groupingValue',
  component: _document_capture_component__WEBPACK_IMPORTED_MODULE_0__.DocumentCaptureComponent,
  pathMatch: 'full'
}];
class DocumentCaptureRoutingModule {
  static {
    this.ɵfac = function DocumentCaptureRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentCaptureRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DocumentCaptureRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocumentCaptureRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98823:
/*!**********************************************************************!*\
  !*** ./src/app/views/document-capture/document-capture.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentCaptureComponent: () => (/* binding */ DocumentCaptureComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capture-models */ 48004);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./capture-services */ 97954);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./capture-services/document-list-style.service */ 20063);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capture-services/folder-view-events.service */ 72297);
/* harmony import */ var _capture_services_scan_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capture-services/scan-app.service */ 92550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/resizable.directive */ 92133);
/* harmony import */ var _blocks_modals_scan_to_scan_to_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../blocks/modals/scan-to/scan-to.component */ 71826);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 85404);
/* harmony import */ var _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./documents-list/documents-list.component */ 88028);
/* harmony import */ var _line_item_indexing_line_item_indexing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./line-item-indexing/line-item-indexing.component */ 50636);
/* harmony import */ var _document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./document-viewer/document-viewer.component */ 78144);
/* harmony import */ var _indexing_panel_indexing_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./indexing-panel/indexing-panel.component */ 88896);








































const _c0 = ["contentWrapper"];
function DocumentCaptureComponent_app_indexing_panel_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "app-indexing-panel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("resize", function DocumentCaptureComponent_app_indexing_panel_9_Template_app_indexing_panel_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.onResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵclassProp"]("disabled", !ctx_r2.currentStepHasIndexing);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("preferenceName", ctx_r2.indexingPanelKey)("preferenceValue", ctx_r2.getPreferenceValue(ctx_r2.indexingPanelKey, "50"))("handles", "n")("height", "50%");
  }
}
function DocumentCaptureComponent_app_scan_to_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "app-scan-to", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("closeModal", function DocumentCaptureComponent_app_scan_to_29_Template_app_scan_to_closeModal_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.closeScanModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", "Scanning.ScanDocument")("startscan", ctx_r2.scanPages)("modalId", "ScanToICModal")("executeAction", false);
  }
}
class DocumentCaptureComponent {
  constructor(captureService, indexingService, captureUpdate, scanAppService, userStateService, ngxSmartModalService, spinnerState, translate, documentListStyleService, documentLockingService, userPreferencesService, hydraApi, folderView, toastr) {
    this.captureService = captureService;
    this.indexingService = indexingService;
    this.captureUpdate = captureUpdate;
    this.scanAppService = scanAppService;
    this.userStateService = userStateService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.spinnerState = spinnerState;
    this.translate = translate;
    this.documentListStyleService = documentListStyleService;
    this.documentLockingService = documentLockingService;
    this.userPreferencesService = userPreferencesService;
    this.hydraApi = hydraApi;
    this.folderView = folderView;
    this.toastr = toastr;
    this.focusedPanel = _capture_models__WEBPACK_IMPORTED_MODULE_5__.IndexingPanels[0];
    this.panelsWrapperKey = 'doc-cap-pWrapperWidth';
    this.panelsDocumentGridWrapperKey = 'doc-cap-pDocumentGridWrapperWidth';
    this.indexingPanelKey = 'doc-cap-indexingPHeight';
    this.lineItemsPanelKey = 'doc-cap-lineItemPHeight';
    this.currentStepHasIndexing = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_21__.Subscription();
    this.DocumentListStylePreference = 'DocumentListStylePreferenceId';
    this.onWorkItemUpdated = folderItem => {
      if (!this.selectedDocument || folderItem.documents[0].id != this.selectedDocument?.id) return;
      const doc = this.selectedDocument.document;
      if (folderItem.documents.find(x => x.pageCount == doc.pageCount && x.size == doc.size)) return;
      this.captureService.selectDocument(folderItem.documents[0], folderItem.workItem, folderItem.parentId, null, true);
    };
    this.lockStatusChanged = ls => {
      if (!this.selectedDocument || !this.selectedDocument.workitem) return;
      if (ls.id == this.selectedDocument.workitem.id) {
        this.documentLocked = ls.locked && ls.lockedByUserId == this.userStateService.user.id && !ls.expired();
      }
    };
    this.reloadCurrentWorkitemMetadata = () => {
      if (!this.selectedDocument?.workItemId) return;
      this.hydraApi.getWorkItemMetaData(this.selectedDocument.workItemId, this.currentWorkitemMetadataLoaded, this.currentWorkitemMetadataLoadFailed);
    };
    this.currentWorkitemMetadataLoaded = mdc => this.selectedDocument.workitem.metadata = mdc;
    this.currentWorkitemMetadataLoadFailed = err => {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('DocumentCaptureComponent.currentWorkitemMetadataLoadFailed', err);
      this.toastr.error(this.translate.instant('Document_Capture.metadata-load-failed'));
    };
    this.widthResizedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
    this.heightResizedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
  }
  ngOnInit() {
    _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.enter('DocumentCaptureComponent.ngOnInit');
    try {
      this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
      this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => {
        this.documentLocked = false;
        this.selectedDocument = doc;
        this.hydraApi.onDocumentChanged();
      }));
      this.subscriptions.add(this.folderView.onUpdateItem.subscribe(this.onWorkItemUpdated));
      this.subscriptions.add(this.scanAppService.onDocumentScanned.subscribe(scanresult => scanresult.scanpages.process(this.captureService, scanresult.data)));
      this.subscriptions.add(this.scanAppService.onTransferDocument.subscribe(() => {
        this.closeScanModal();
      }));
      this.subscriptions.add(this.indexingService.onChangeLineItemIndexing.subscribe(show => {
        this.showLineItemPanel = show;
        this.currentStepHasIndexing = this.captureService.currentStepHasIndexing();
      }));
      this.subscriptions.add(this.documentListStyleService.onChangeDocumentListStyle.subscribe(style => {
        this.isGridView = style === _capture_models__WEBPACK_IMPORTED_MODULE_5__.DocumentListStyle.Grid;
        if (style === _capture_models__WEBPACK_IMPORTED_MODULE_5__.DocumentListStyle.Tree) {
          setTimeout(() => {
            this.captureService.reInitIndexing();
            this.reloadCurrentWorkitemMetadata();
          }, 100);
        }
      }));
      let documentListStyle = this.userPreferencesService.getPreference(this.DocumentListStylePreference);
      if (!documentListStyle) {
        documentListStyle = _capture_models__WEBPACK_IMPORTED_MODULE_5__.DocumentListStyle.Tree;
      }
      this.documentListStyleService.update(documentListStyle);
      this.isGridView = documentListStyle === _capture_models__WEBPACK_IMPORTED_MODULE_5__.DocumentListStyle.Grid;
    } catch (e) {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('DocumentCaptureComponent.ngOnInit', e);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.captureService.reset();
    this.documentLockingService.unlockDocuments();
  }
  widthResized() {
    this.widthResizedSubject.next();
  }
  onResize(preference) {
    this.userPreferencesService.setPreference(preference.name, preference.value);
  }
  getPreferenceValue(key, defaultValue) {
    return this.userPreferencesService.getPreference(key) || defaultValue;
  }
  getDocumentPanelWidthPreference() {
    return this.getPreferenceValue(this.getPanelWrapperKey(), '25');
  }
  getPanelWrapperKey() {
    return this.isGridView ? this.panelsDocumentGridWrapperKey : this.panelsWrapperKey;
  }
  heightResized() {
    this.heightResizedSubject.next();
  }
  addFiles(files) {
    this.captureService.addBatchWithMultipleDocuments(files);
  }
  discardAllDocs() {
    this.confirmationModal.close();
    this.captureService.reset();
  }
  fillCurrentField(updateFieldData) {
    this.indexingService.fillCurrentField(updateFieldData);
  }
  fillGroupOfFields(updateGroupOfFields) {
    this.indexingService.fillGroupOfFieldsValues(updateGroupOfFields);
  }
  scan(startscan) {
    this.scanPages = startscan;
    this.showDriverModal = true;
    this.scanModal = this.ngxSmartModalService.getModal('ScanToICModal');
    this.scanModal.open();
    this.scanModal.onClose.subscribe(() => {
      this.showDriverModal = false;
    });
  }
  openConfirmationModal() {
    this.confirmationModal = this.ngxSmartModalService.getModal('confirmationModal');
    this.confirmationModal.open();
  }
  closeScanModal() {
    this.scanModal?.close();
  }
  onToggleSpinner(state) {
    if (state) {
      this.translate.get('Document_Capture.UpdatingDocument').subscribe(value => this.spinnerState.show(value, this.contentWrapper.nativeElement));
    } else {
      this.spinnerState.hide();
    }
  }
  static {
    this.ɵfac = function DocumentCaptureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentCaptureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_6__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_6__.IndexingPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_7__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_capture_services_scan_app_service__WEBPACK_IMPORTED_MODULE_11__.ScanAppService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_23__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_8__.DocumentListStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_9__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_10__.FolderViewEventsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
      type: DocumentCaptureComponent,
      selectors: [["ng-component"]],
      viewQuery: function DocumentCaptureComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.contentWrapper = _t.first);
        }
      },
      decls: 30,
      vars: 29,
      consts: [["contentWrapper", ""], ["confirmationModal", ""], ["ScanToICModal", ""], [1, "section", "document-capture", "h-100"], [1, "container-fluid", "h-100", "p-0"], [1, "content-wrapper", "h-100", "d-flex", "flex-column"], [1, "section-header", "box-head--light-blue-bg"], [1, "d-block", "w-100", 3, "discardDocuments", "scan"], ["id", "section-content", 1, "section-content", "d-flex", "col", "p-0"], ["appResizable", "", "width", "260", 1, "panels-wrapper", "d-flex", "flex-column", 3, "widthResized", "resize", "preferenceName", "preferenceValue", "handles"], [1, "d-block", "col", "p-0"], ["class", "d-block", "appResizable", "", 3, "preferenceName", "preferenceValue", "handles", "height", "disabled", "resize", 4, "ngIf"], [1, "viewer-wrapper", "col", "d-flex", "flex-column", "p-0"], [1, "d-block", "col", "p-0", 3, "addFiles", "fillField", "fillGroupOfFields", "toggleSpinner", "onWidthResized", "onHeightResized", "selectedPage"], ["height", "100", "appResizable", "", 1, "d-block", 3, "resize", "heightResized", "preferenceName", "preferenceValue", "handles"], ["identifier", "confirmationModal", "customClass", "confirm-modal"], [3, "title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["identifier", "ScanToICModal", 1, "scanto-modal", 3, "closable", "escapable", "dismissable", "customClass"], [3, "title", "startscan", "modalId", "executeAction", "closeModal", 4, "ngIf"], ["appResizable", "", 1, "d-block", 3, "resize", "preferenceName", "preferenceValue", "handles", "height"], [3, "closeModal", "title", "startscan", "modalId", "executeAction"]],
      template: function DocumentCaptureComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "section", 3)(1, "div", 4)(2, "div", 5, 0)(4, "div", 6)(5, "app-toolbar", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("discardDocuments", function DocumentCaptureComponent_Template_app_toolbar_discardDocuments_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.openConfirmationModal());
          })("scan", function DocumentCaptureComponent_Template_app_toolbar_scan_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.scan($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 8)(7, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("widthResized", function DocumentCaptureComponent_Template_div_widthResized_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.widthResized());
          })("resize", function DocumentCaptureComponent_Template_div_resize_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.onResize($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "app-documents-list", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, DocumentCaptureComponent_app_indexing_panel_9_Template, 1, 6, "app-indexing-panel", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 12)(11, "app-document-viewer", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("addFiles", function DocumentCaptureComponent_Template_app_document_viewer_addFiles_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.addFiles($event));
          })("fillField", function DocumentCaptureComponent_Template_app_document_viewer_fillField_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.fillCurrentField($event));
          })("fillGroupOfFields", function DocumentCaptureComponent_Template_app_document_viewer_fillGroupOfFields_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.fillGroupOfFields($event));
          })("toggleSpinner", function DocumentCaptureComponent_Template_app_document_viewer_toggleSpinner_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.onToggleSpinner($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "app-line-item-indexing", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("resize", function DocumentCaptureComponent_Template_app_line_item_indexing_resize_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.onResize($event));
          })("heightResized", function DocumentCaptureComponent_Template_app_line_item_indexing_heightResized_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.heightResized());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "ngx-smart-modal", 15, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](15, "app-modal-header", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "div", 18)(21, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DocumentCaptureComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            const confirmationModal_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](14);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](confirmationModal_r4.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function DocumentCaptureComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx.discardAllDocs());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "ngx-smart-modal", 21, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](29, DocumentCaptureComponent_app_scan_to_29_Template, 1, 4, "app-scan-to", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("preferenceName", ctx.getPanelWrapperKey())("preferenceValue", ctx.getDocumentPanelWidthPreference())("handles", "e");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("onWidthResized", ctx.widthResizedSubject.asObservable())("onHeightResized", ctx.heightResizedSubject.asObservable())("selectedPage", ctx.selectedPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵclassProp"]("disabled", !ctx.showLineItemPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("preferenceName", ctx.lineItemsPanelKey)("preferenceValue", ctx.getPreferenceValue(ctx.lineItemsPanelKey, "20"))("handles", "n");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](16, 21, "Scanning.DiscardScans"));
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](19, 23, "Scanning.AreYouSure"));
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](23, 25, "Scanning.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](26, 27, "Scanning.Discard"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false)("customClass", "modal-lg");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.showDriverModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_23__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_12__.ModalHeaderComponent, _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_13__.ResizableDirective, _blocks_modals_scan_to_scan_to_component__WEBPACK_IMPORTED_MODULE_14__.ScanToComponent, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__.ToolbarComponent, _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_16__.DocumentsListComponent, _line_item_indexing_line_item_indexing_component__WEBPACK_IMPORTED_MODULE_17__.LineItemIndexingComponent, _document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_18__.DocumentViewerComponent, _indexing_panel_indexing_panel_component__WEBPACK_IMPORTED_MODULE_19__.IndexingPanelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.document-capture {\n  background: #f1f3f3;\n  padding-bottom: 0px;\n  display: flex;\n  flex-direction: column;\n  -ms-overflow-style: none;\n}\n.document-capture .section-header {\n  height: 48px;\n  padding: 3px 11px 0px 20px !important;\n  border: none !important;\n  display: flex;\n  justify-content: flex-end;\n}\n.document-capture .section-header .input-cont .dropdown button.btn {\n  padding-left: 10px;\n}\n.document-capture .section-header label {\n  color: #151515 !important;\n}\n.document-capture .panels-wrapper {\n  width: 260px;\n}\n.document-capture .pannel-header {\n  height: 30px;\n  background-color: #f1f3f3;\n  border-bottom: 1px solid #a3a3a3;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  min-width: 200px !important;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #151515;\n}\n.document-capture .pannel-header .pannel-title {\n  font-size: 12px;\n  color: #151515;\n}\n.document-capture .pannel-header .viewer-controls {\n  display: flex;\n}\n.document-capture .pannel-header .viewer-controls .button-icon {\n  display: block;\n}\n.document-capture .pannel-header .viewer-controls .button-icon img {\n  max-width: 16px;\n  max-height: 16px;\n}\n.document-capture .viewer-wrapper {\n  overflow: hidden;\n}\n.document-capture .dnd-drag-enter,\n.document-capture .dnd-drag-over {\n  border-color: #197b30;\n}\n.document-capture .section-content {\n  border: none !important;\n}\n.document-capture .dropdown-menu {\n  padding: 0;\n}\n.document-capture .ui-resizable-n {\n  z-index: 89 !important;\n}\n.document-capture .doc-viewer {\n  height: 100%;\n}\n.document-capture app-indexing-panel,\n.document-capture app-line-item-indexing {\n  top: 0 !important;\n  margin-top: 5px;\n}\n.document-capture app-indexing-panel.disabled,\n.document-capture app-line-item-indexing.disabled {\n  min-height: 0 !important;\n  height: 0 !important;\n  visibility: hidden;\n  margin-top: 0px;\n}\n.document-capture app-line-item-indexing {\n  background: #fff;\n}\n\n.confirm-modal {\n  min-height: auto;\n  padding: 0;\n  max-width: fit-content;\n  border-radius: 6px;\n}\n.confirm-modal .modal-header {\n  background-color: var(--brand-primary-color);\n  padding: 0.75rem;\n}\n.confirm-modal .modal-header .modal-title {\n  color: #fff;\n}\n\n.nsm-dialog.capture-modal {\n  width: 50%;\n  max-width: 500px;\n  height: 80%;\n}\n.nsm-dialog.capture-modal .nsm-content {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2RvY3VtZW50LWNhcHR1cmUvZG9jdW1lbnQtY2FwdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFDRSxtQkRxRVE7RUNwRVIsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQStPRjtBQTdPRTtFQUNFLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBK09KO0FBN09JO0VBQ0Usa0JBQUE7QUErT047QUE1T0k7RUFDRSx5QkFBQTtBQThPTjtBQTFPRTtFQUNFLFlBQUE7QUE0T0o7QUF6T0U7RUFDRSxZQUFBO0VBQ0EseUJEd0NNO0VDdkNOLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBT0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBcU9KO0FBaFBJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFrUE47QUF2T0k7RUFDRSxhQUFBO0FBeU9OO0FBdk9NO0VBQ0UsY0FBQTtBQXlPUjtBQXZPUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXlPVjtBQW5PRTtFQUNFLGdCQUFBO0FBcU9KO0FBbE9FOztFQUVFLHFCQUFBO0FBb09KO0FBak9FO0VBQ0UsdUJBQUE7QUFtT0o7QUFoT0U7RUFDRSxVQUFBO0FBa09KO0FBL05FO0VBQ0Usc0JBQUE7QUFpT0o7QUE5TkU7RUFDRSxZQUFBO0FBZ09KO0FBN05FOztFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQStOSjtBQTdOSTs7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZ09OO0FBNU5FO0VBQ0UsZ0JBQUE7QUE4Tko7O0FBMU5BO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTZORjtBQTNORTtFQUNFLDRDRHZDVTtFQ3dDVixnQkFBQTtBQTZOSjtBQTNOSTtFQUNFLFdBQUE7QUE2Tk47O0FBeE5BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTJORjtBQXpORTtFQUNFLFlBQUE7QUEyTkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5kb2N1bWVudC1jYXB0dXJlIHtcclxuICBiYWNrZ3JvdW5kOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDExcHggMHB4IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLmlucHV0LWNvbnQgLmRyb3Bkb3duIGJ1dHRvbi5idG4ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogIzE1MTUxNSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhbmVscy13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICB9XHJcblxyXG4gIC5wYW5uZWwtaGVhZGVyIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhM2EzYTM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnBhbm5lbC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzE1MTUxNTtcclxuXHJcbiAgICAudmlld2VyLWNvbnRyb2xzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5idXR0b24taWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnZpZXdlci13cmFwcGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuZG5kLWRyYWctZW50ZXIsXHJcbiAgLmRuZC1kcmFnLW92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTk3YjMwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAudWktcmVzaXphYmxlLW4ge1xyXG4gICAgei1pbmRleDogODkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kb2Mtdmlld2VyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGFwcC1pbmRleGluZy1wYW5lbCxcclxuICBhcHAtbGluZS1pdGVtLWluZGV4aW5nIHtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcC1saW5lLWl0ZW0taW5kZXhpbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5jb25maXJtLW1vZGFsIHtcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1ibHVlO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuXHJcbiAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uc20tZGlhbG9nLmNhcHR1cmUtbW9kYWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDgwJTtcclxuXHJcbiAgLm5zbS1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 53686:
/*!*******************************************************************!*\
  !*** ./src/app/views/document-capture/document-capture.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentCaptureModule: () => (/* binding */ DocumentCaptureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-pdf-viewer */ 42072);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 32346);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-file-drop */ 78552);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/scrolling */ 73172);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/box/box.module */ 20186);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_components_document_scanner_document_scanner_and_editor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/components/document-scanner/document-scanner-and-editor.module */ 65519);
/* harmony import */ var _blocks_components_split_button_split_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/components/split-button/split-button.component */ 56516);
/* harmony import */ var _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/directives/directives.module */ 21084);
/* harmony import */ var _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/modals/modals.module */ 51188);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _delivery_error_delivery_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delivery-error/delivery-error.component */ 5496);
/* harmony import */ var _document_capture_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./document-capture-routing.module */ 94919);
/* harmony import */ var _document_capture_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./document-capture.component */ 98823);
/* harmony import */ var _document_locked_document_locked_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./document-locked/document-locked.component */ 77248);
/* harmony import */ var _document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./document-viewer/document-viewer.component */ 78144);
/* harmony import */ var _document_viewer_thumbnails_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./document-viewer/thumbnails/thumbnail/thumbnail.component */ 95523);
/* harmony import */ var _document_viewer_thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./document-viewer/thumbnails/thumbnails.component */ 26677);
/* harmony import */ var _documents_list_document_document_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documents-list/document/document.component */ 87828);
/* harmony import */ var _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./documents-list/documents-list.component */ 88028);
/* harmony import */ var _documents_list_folder_folder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./documents-list/folder/folder.component */ 44538);
/* harmony import */ var _documents_list_work_item_work_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./documents-list/work-item/work-item.component */ 93508);
/* harmony import */ var _indexing_panel_indexing_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./indexing-panel/indexing-panel.component */ 88896);
/* harmony import */ var _line_item_indexing_line_item_indexing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./line-item-indexing/line-item-indexing.component */ 50636);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 85404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 96623);


































class DocumentCaptureModule {
  static {
    this.ɵfac = function DocumentCaptureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentCaptureModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
      type: DocumentCaptureModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
      imports: [shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_27__.BsDropdownModule.forRoot(), ngx_smart_modal__WEBPACK_IMPORTED_MODULE_28__.NgxSmartModalModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__.PdfViewerModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__.NgxFileDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_7__.PageModule, _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_1__.BoxModule, _document_capture_routing_module__WEBPACK_IMPORTED_MODULE_9__.DocumentCaptureRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.OpenDropdownModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__.DirectivesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ResizableModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_6__.ModalsModule, _blocks_components_document_scanner_document_scanner_and_editor_module__WEBPACK_IMPORTED_MODULE_3__.DocumentScannerAndEditorModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PipesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ContextMenuModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ActionDropdownModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.ScrollingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](DocumentCaptureModule, {
    declarations: [_document_capture_component__WEBPACK_IMPORTED_MODULE_10__.DocumentCaptureComponent, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__.ToolbarComponent, _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_16__.DocumentsListComponent, _documents_list_work_item_work_item_component__WEBPACK_IMPORTED_MODULE_18__.WorkItemComponent, _documents_list_folder_folder_component__WEBPACK_IMPORTED_MODULE_17__.FolderComponent, _documents_list_document_document_component__WEBPACK_IMPORTED_MODULE_15__.DocumentComponent, _line_item_indexing_line_item_indexing_component__WEBPACK_IMPORTED_MODULE_20__.LineItemIndexingComponent, _document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_12__.DocumentViewerComponent, _document_viewer_thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_14__.ThumbnailsComponent, _document_viewer_thumbnails_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_13__.ThumbnailComponent, _indexing_panel_indexing_panel_component__WEBPACK_IMPORTED_MODULE_19__.IndexingPanelComponent, _blocks_components_split_button_split_button_component__WEBPACK_IMPORTED_MODULE_4__.SplitButtonComponent, _delivery_error_delivery_error_component__WEBPACK_IMPORTED_MODULE_8__.DeliveryErrorComponent, _document_locked_document_locked_component__WEBPACK_IMPORTED_MODULE_11__.DocumentLockedComponent],
    imports: [shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_27__.BsDropdownModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_28__.NgxSmartModalModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__.PdfViewerModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__.NgxFileDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_7__.PageModule, _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_1__.BoxModule, _document_capture_routing_module__WEBPACK_IMPORTED_MODULE_9__.DocumentCaptureRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.OpenDropdownModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_5__.DirectivesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ResizableModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_6__.ModalsModule, _blocks_components_document_scanner_document_scanner_and_editor_module__WEBPACK_IMPORTED_MODULE_3__.DocumentScannerAndEditorModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PipesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ContextMenuModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ActionDropdownModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.ScrollingModule]
  });
})();

/***/ }),

/***/ 77248:
/*!*************************************************************************************!*\
  !*** ./src/app/views/document-capture/document-locked/document-locked.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentLockedComponent: () => (/* binding */ DocumentLockedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../capture-services/selected-items.service */ 85641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);













function DocumentLockedComponent_div_0_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 4);
  }
}
function DocumentLockedComponent_div_0_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 5);
  }
}
function DocumentLockedComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocumentLockedComponent_div_0_i_1_Template, 1, 0, "i", 2)(2, DocumentLockedComponent_div_0_i_2_Template, 1, 0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r0.lockStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.lockStatus && ctx_r0.lockedByUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.lockStatus && !ctx_r0.lockedByUser);
  }
}
class DocumentLockedComponent {
  constructor(documentLockingService, captureUpdateService, userStateService, translateService, selectedItemsService) {
    this.documentLockingService = documentLockingService;
    this.captureUpdateService = captureUpdateService;
    this.userStateService = userStateService;
    this.translateService = translateService;
    this.selectedItemsService = selectedItemsService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.lockStatusText = '';
    this.onChangedSelectedItems = () => {
      this.oneItemSelected = this.selectedItemsService.isOneItemSelected();
    };
    this.lockStatusChanged = ls => {
      if (!this.selectedDocument || !this.selectedDocument.workitem) return;
      if (ls.id == this.selectedDocument.workitem.id) {
        this.lockStatus = ls;
        this.lockedByUser = ls.locked && ls.lockedByUserId == this.userStateService.user.id;
        if (!this.lockedByUser) {
          this.lockStatusText = `${this.translateService.instant('lock-status.locked-by-user')}: ${this.lockStatus.lockedByUserName} <${this.lockStatus.lockedByUserEmail}>`;
        } else {
          this.lockStatusText = this.translateService.instant('lock-status.locked-by-you');
        }
      }
    };
    this.selectedDocumentChanged = doc => {
      this.lockedByUser = false;
      this.lockStatus = null;
      this.lockStatusText = '';
      this.selectedDocument = doc;
    };
  }
  ngOnInit() {
    this.subscriptions.add(this.captureUpdateService.onChangeDocument.subscribe(this.selectedDocumentChanged));
    this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
    this.onChangedSelectedItems();
    this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
  }
  static {
    this.ɵfac = function DocumentLockedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentLockedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_2__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_1__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_3__.SelectedItemsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DocumentLockedComponent,
      selectors: [["app-document-locked"]],
      decls: 1,
      vars: 1,
      consts: [["class", "document-locked", 3, "title", 4, "ngIf"], [1, "document-locked", 3, "title"], ["class", "fa fa-lock locked-by-user", 4, "ngIf"], ["class", "fa fa-lock notlocked-by-user", 4, "ngIf"], [1, "fa", "fa-lock", "locked-by-user"], [1, "fa", "fa-lock", "notlocked-by-user"]],
      template: function DocumentLockedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DocumentLockedComponent_div_0_Template, 3, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.oneItemSelected);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: [".document-locked .locked-by-user {\n  color: forestgreen;\n}\n.document-locked .notlocked-by-user {\n  color: darkred;\n}\n.document-locked .lock-status-unknown {\n  color: darkgray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS9kb2N1bWVudC1sb2NrZWQvZG9jdW1lbnQtbG9ja2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnQtbG9ja2VkIHtcclxuICAubG9ja2VkLWJ5LXVzZXIge1xyXG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgLm5vdGxvY2tlZC1ieS11c2VyIHtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1cclxuXHJcbiAgLmxvY2stc3RhdHVzLXVua25vd24ge1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 78144:
/*!*************************************************************************************!*\
  !*** ./src/app/views/document-capture/document-viewer/document-viewer.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentViewerComponent: () => (/* binding */ DocumentViewerComponent),
/* harmony export */   VIEWER_CONFIG: () => (/* binding */ VIEWER_CONFIG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/fileName */ 28016);
/* harmony import */ var _blocks_models_update_field_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/models/update-field-data */ 88087);
/* harmony import */ var _blocks_models_workflow_step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/models/workflow-step */ 1662);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _views_document_capture_capture_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../views/document-capture/capture-services */ 97954);
/* harmony import */ var _product_item_document_preview_annotations_annotations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../product-item/document-preview/annotations/annotations.component */ 64644);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../capture-models */ 48004);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../capture-services/folder-view-events.service */ 72297);
/* harmony import */ var _capture_services_indexing_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../capture-services/indexing-panel.service */ 5018);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../capture-services/selected-items.service */ 85641);
/* harmony import */ var _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./thumbnails/thumbnails.component */ 26677);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-pdf-viewer */ 42072);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-file-drop */ 78552);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _blocks_components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../blocks/components/action-button/action-button.component */ 33232);
/* harmony import */ var _blocks_components_action_color_button_action_color_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../blocks/components/action-color-button/action-color-button.component */ 7520);
/* harmony import */ var _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/resizable.directive */ 92133);
/* harmony import */ var _Bamba_Shared_src_components_action_dropdown_action_dropdown_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/components/action-dropdown/action-dropdown.component */ 36327);
/* harmony import */ var _delivery_error_delivery_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../delivery-error/delivery-error.component */ 5496);
/* harmony import */ var _document_locked_document_locked_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../document-locked/document-locked.component */ 77248);















































const _c0 = ["wrapper"];
const _c1 = ["viewer"];
const _c2 = ["thumbnails"];
const _c3 = ["ps1"];
const _c4 = () => ({
  suppressScrollX: false,
  suppressScrollY: true,
  wheelPropagation: true,
  useBothWheelAxes: true
});
const _c5 = () => [];
const _c6 = () => ({});
function DocumentViewerComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx_r1.doc == null ? null : ctx_r1.doc.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r1.getPageCountText());
  }
}
function DocumentViewerComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "app-action-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](3, "app-action-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](5, "span", 10)(6, "app-action-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](8, "action-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](10, "span", 10)(11, "app-action-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](13, "action-dropdown", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](15, "action-dropdown", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](17, "app-action-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](19, "app-action-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](21, "app-action-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](23, "app-action-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](25, "app-action-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](27, "action-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](29, "app-action-color-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](32, "span", 10)(33, "app-action-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](35, "action-dropdown", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](37, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 84, "annotations.selection-tool"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.StopAnnotating)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](4, 86, "annotations.redact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Redaction)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](7, 88, "annotations.highlight"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Highlight)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](9, 90, "annotations.highlight-color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("listItems", (ctx_r1.annotations == null ? null : ctx_r1.annotations.highlightColors) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](118, _c5))("actionPlaceHolder", (ctx_r1.annotations == null ? null : ctx_r1.annotations.getHighlighColor()) || "yellow")("onChangeAction", ctx_r1.annotations == null ? null : ctx_r1.annotations.onHighlighColorChanged)("isSelectable", true)("displayHtmlValue", true)("minWidth", 60)("minListWidth", 100)("actionDropTypeType", "button")("extraClasses", "annotation-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](12, 92, "annotations.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Text)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](14, 94, "annotations.font-name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("listItems", (ctx_r1.annotations == null ? null : ctx_r1.annotations.fontNames) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](119, _c5))("actionPlaceHolder", (ctx_r1.annotations == null ? null : ctx_r1.annotations.getFontName()) || "Arial")("onChangeAction", ctx_r1.annotations == null ? null : ctx_r1.annotations.onFontNameChanged)("isSelectable", true)("displayHtmlValue", true)("minWidth", 130)("actionDropTypeType", "button")("extraClasses", "annotation-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](16, 96, "annotations.font-size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("listItems", (ctx_r1.annotations == null ? null : ctx_r1.annotations.fontSizes) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](120, _c5))("actionPlaceHolder", (ctx_r1.annotations == null ? null : ctx_r1.annotations.getFontSize()) || 16)("onChangeAction", ctx_r1.annotations == null ? null : ctx_r1.annotations.onFontSizeChanged)("isSelectable", true)("minWidth", 60)("minListWidth", 60)("actionDropTypeType", "button")("extraClasses", "annotation-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](18, 98, "annotations.free-hand"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.FreeHand)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](20, 100, "annotations.arrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Arrow)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](22, 102, "annotations.line"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Line)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](24, 104, "annotations.circle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Circle)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](26, 106, "annotations.rectangle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Rectangle)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](28, 108, "annotations.thickness"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("listItems", (ctx_r1.annotations == null ? null : ctx_r1.annotations.lineWidths) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](121, _c5))("actionPlaceHolder", (ctx_r1.annotations == null ? null : ctx_r1.annotations.getLineWidth()) || 3)("onChangeAction", ctx_r1.annotations == null ? null : ctx_r1.annotations.onLineWidthChanged)("isSelectable", true)("displayHtmlValue", true)("minWidth", 60)("minListWidth", 60)("actionDropTypeType", "button")("extraClasses", "annotation-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](30, 110, "annotations.color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("color", (ctx_r1.annotations == null ? null : ctx_r1.annotations.getColor()) || "#ff0000")("onChangeAction", ctx_r1.annotations == null ? null : ctx_r1.annotations.onColorChanged)("disabled", !ctx_r1.capture.currentPage)("showOkButton", true)("oKButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](31, 112, "Common.Close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](34, 114, "annotations.stamp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx_r1.Action.Stamp)("disabled", !ctx_r1.capture.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](36, 116, "annotations.stamps"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("listItems", (ctx_r1.annotations == null ? null : ctx_r1.annotations.stamps) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](122, _c5))("actionPlaceHolder", (ctx_r1.annotations == null ? null : ctx_r1.annotations.getStamp()) || "")("onChangeAction", ctx_r1.annotations == null ? null : ctx_r1.annotations.onStampChanged)("isSelectable", true)("minWidth", 100)("minListWidth", 140)("displayHtmlValue", true)("actionDropTypeType", "button")("extraClasses", "annotation-list");
  }
}
function DocumentViewerComponent_div_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 1, "Scanning.DragDrop"));
  }
}
function DocumentViewerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 40)(1, "ngx-file-drop", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("onFileDrop", function DocumentViewerComponent_div_27_Template_ngx_file_drop_onFileDrop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r1.dropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](2, DocumentViewerComponent_div_27_ng_template_2_Template, 3, 3, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
}
function DocumentViewerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r1.selectedItemsCountText);
  }
}
function DocumentViewerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 46, 3)(2, "pdf-viewer", 47, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("page-rendered", function DocumentViewerComponent_div_29_Template_pdf_viewer_page_rendered_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r1.onPageRendered($event));
    })("text-layer-rendered", function DocumentViewerComponent_div_29_Template_pdf_viewer_text_layer_rendered_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r1.setupPointerIndexing($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    const viewerArea_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵstyleProp"]("width", viewerArea_r5.clientWidth, "px")("height", viewerArea_r5.clientHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("src", (ctx_r1.capture.currentPage == null ? null : ctx_r1.capture.currentPage.viewerURL) || "")("render-text", true)("zoom", ctx_r1.scale)("original-size", ctx_r1.fitToWidthLandscape)("fit-to-page", true)("autoresize", ctx_r1.fitToWidthPortrait)("show-all", false)("page", 1);
  }
}
function DocumentViewerComponent_app_annotations_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "app-annotations", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("annotationAdded", function DocumentViewerComponent_app_annotations_30_Template_app_annotations_annotationAdded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r1.onAnnotationAdded($event));
    })("annotationUpdated", function DocumentViewerComponent_app_annotations_30_Template_app_annotations_annotationUpdated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r1.onAnnotationUpdated($event));
    })("annotationRemoved", function DocumentViewerComponent_app_annotations_30_Template_app_annotations_annotationRemoved_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r1.onAnnotationRemoved($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("viewer", ctx_r1.viewer)("id", ctx_r1.selectedDocument == null ? null : ctx_r1.selectedDocument.id)("pageNumber", ctx_r1.capture == null ? null : ctx_r1.capture.currentPage == null ? null : ctx_r1.capture.currentPage.order)("annotations", ctx_r1.documentWorkItemAnnotations);
  }
}
const VIEWER_CONFIG = {
  maxScale: 5,
  minScale: 0.1,
  scaleIncrement: 0.1
};
class DocumentViewerComponent {
  set selectedBatch(batch) {
    this.batch = batch;
    this.viewerService.changeSelectedBatch(batch);
  }
  set selectedDocument(doc) {
    this.doc = doc;
    this.viewerService.changeSelectedDocument(doc);
  }
  set selectedPage(page) {
    this.page = page;
    this.viewerService.onChangeSelectedPage(page);
  }
  onResize() {
    if (!this.fitToWidthPortrait && !this.fitToWidthLandscape && this.viewer) {
      this.pageHeight = 0;
      this.scale = 1;
      this.shouldFitToHeight = true;
    }
  }
  constructor(viewerService, indexingService, capture, captureUpdate, userStateService, translate, delay, actionService, documentLockingService, selectedItemsService, userPreferencesService, folderViewEventsService, errorsService, cdr) {
    this.viewerService = viewerService;
    this.indexingService = indexingService;
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.userStateService = userStateService;
    this.translate = translate;
    this.delay = delay;
    this.actionService = actionService;
    this.documentLockingService = documentLockingService;
    this.selectedItemsService = selectedItemsService;
    this.userPreferencesService = userPreferencesService;
    this.folderViewEventsService = folderViewEventsService;
    this.errorsService = errorsService;
    this.cdr = cdr;
    this.addFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_24__.EventEmitter();
    this.selectPage = new _angular_core__WEBPACK_IMPORTED_MODULE_24__.EventEmitter();
    this.deletePage = new _angular_core__WEBPACK_IMPORTED_MODULE_24__.EventEmitter();
    this.fillField = new _angular_core__WEBPACK_IMPORTED_MODULE_24__.EventEmitter();
    this.fillGroupOfFields = new _angular_core__WEBPACK_IMPORTED_MODULE_24__.EventEmitter();
    this.toggleSpinner = new _angular_core__WEBPACK_IMPORTED_MODULE_24__.EventEmitter();
    this.files = [];
    this.enablePointNClickIndexing = false;
    this.highlightsCreated = false;
    this.rubberBandingInProgress = false;
    this.thumbnailsViewerKey = 'thumbnailsViewerKey';
    this.documentWorkItemAnnotations = [];
    this.minimumAnimationDuration = 2;
    this.Action = _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action;
    this.onChangedSelectedItems = () => {
      this.oneDocumentSelected = this.selectedItemsService.isOneDocumentSelected();
      this.oneFolderSelected = this.selectedItemsService.isOneFolderSelected();
      this.multipleItemsSelected = this.selectedItemsService.areMultipleItemsSelected();
      this.selectedItemsCountText = this.selectedItemsService.getSelectedItemsCountText();
    };
    this.lockStatusChanged = ls => {
      if (!this.doc || !this.doc.workitem) return;
      if (ls.id == this.doc.workitem.id) {
        this.documentLocked = ls.locked && ls.lockedByUserId == this.userStateService.user.id && !ls.expired();
      }
    };
    this.deleteHighlight = id => {
      const valueIndex = this.valuesLocation.findIndex(value => value.fieldId === id);
      if (valueIndex < 0) return;
      this.valuesLocation.splice(valueIndex, 1);
      const highlight = $(`div#${this.getHighlightId(id)}`);
      if (highlight && highlight.length > 0) highlight[0].parentElement.removeChild(highlight[0]);
    };
    this.invokeAction = event => {
      if (!this.capture.currentPage) return;
      if (event.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.FitToHeight) {
        this.fit('height');
      } else if (event.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.FitToWidth) {
        this.fit('width');
      } else if (event.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.ZoomIn) {
        this.zoomIn();
      } else if (event.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.ZoomOut) {
        this.zoomOut();
      } else if (event.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.RotateLeft) {
        this.rotate('left');
      } else if (event.action == _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.RotateRight) {
        this.rotate('right');
      }
    };
    this.clearHoveredOver = () => {
      $('.indexing-popover-body').text('');
      $('.indexing-popover').hide();
      $('.indexing-text').each(function () {
        $(this).removeClass('hovered-over');
      });
    };
    this.getPageCountText = () => {
      if (!this.doc) return '';
      return _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_2__.Filename.getPageCountText(this.doc.pageCount, this.translate);
    };
    this.canDropDocuments = () => {
      if (!this.oneFolderSelected) return false;
      const selectedFolder = this.capture.getSelectedFolder();
      if (!selectedFolder) return false;
      const ws = this.capture.getWorkflowStepById(selectedFolder.workflowStepId);
      if (ws == null) return false;
      return this.isPrimaryStep(ws) && ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_10__.Capabilities.allowDropExternalDocument);
    };
    this.rotateAnnotations = workItem => {
      this.documentWorkItemAnnotations = workItem.annotations;
      this.capture.updatePageAnnotations(this.page.order, this.documentWorkItemAnnotations);
    };
    this.onPageRendered = event => {
      if (event.source.pdfPage.view[2] > event.source.pdfPage.view[3]) {
        this.isPortrait = false;
        this.isLandscape = true;
      } else {
        this.isPortrait = true;
        this.isLandscape = false;
      }
      this.getPageHeight(event);
      if (!this.annotationsAllowed()) return;
      if (this.annotations) this.annotations.onPageRendered(event);
      if (this.thumbnails) this.thumbnails.onAnnotationsLoaded();
    };
    this.annotationsAllowed = () => {
      if (!this.capture.currentWorkflow) return false;
      const ws = this.capture.getWorkflowStepById(this.capture.getCurrentStepId());
      if (ws == null) return false;
      return ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_10__.Capabilities.allowAnnotations);
    };
    this.onAnnotationAdded = annotation => {
      if (this.thumbnails) this.thumbnails.onAnnotationAdded(annotation);
      this.capture.addAnnotation(annotation, () => {}, this.onAddingAnnotationFailed);
    };
    this.onAddingAnnotationFailed = err => {
      this.errorsService.showErrorsModal([err], this.translate.instant('annotations.add-failed'));
    };
    this.onAnnotationUpdated = annotation => {
      if (this.thumbnails) this.thumbnails.onAnnotationUpdated(annotation);
      this.capture.updateAnnotation(annotation, () => {}, this.onUpdatingAnnotationFailed);
    };
    this.onUpdatingAnnotationFailed = err => {
      this.errorsService.showErrorsModal([err], this.translate.instant('annotations.update-failed'));
    };
    this.onAnnotationRemoved = annotation => {
      if (this.thumbnails) this.thumbnails.onAnnotationRemoved(annotation);
      this.capture.removeAnnotation(annotation.id, () => {}, this.onRemovingAnnotationFailed);
    };
    this.onRemovingAnnotationFailed = err => {
      this.errorsService.showErrorsModal([err], this.translate.instant('annotations.remove-failed'));
    };
    this.getHighlightId = id => {
      return `highlight-${id.replace('@', '')}`;
    };
    this.isFolderItemSelected = folderItem => {
      return this.doc && this.doc.workitem && this.doc.workitem.id === folderItem.workItem.id;
    };
    this.parseFieldId = fieldId => {
      const sections = fieldId.split('-');
      return sections[0];
    };
    this.matchingFieldExists = (fieldName, metaDataCollection, valueLocation) => {
      for (const metaData of metaDataCollection.metadata) {
        if (metaData.valueType === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValueType.LineItems) {
          if (this.matchingFieldExistsInLineItems(fieldName, metaData.value, valueLocation)) return true;
        } else {
          if (fieldName.toLowerCase() === metaData.name && this.locationsMatch(metaData.location, valueLocation.location)) return true;
        }
      }
      return false;
    };
    this.matchingFieldExistsInLineItems = (fieldName, metaDataLineItems, valueLocation) => {
      for (const row of metaDataLineItems) {
        if (this.matchingFieldExists(fieldName, row, valueLocation)) return true;
      }
      return false;
    };
    this.locationsMatch = (locationA, locationB) => {
      if (locationA.page != locationB.page) return false;
      if (locationA.left != locationB.left) return false;
      if (locationA.top != locationB.top) return false;
      if (locationA.right != locationB.right) return false;
      if (locationA.bottom != locationB.bottom) return false;
      return true;
    };
    this.init();
    this.page = this.capture.currentPage;
  }
  ngOnInit() {
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => {
      this.delay.execute(() => {
        this.valuesLocation = [];
        this.clearHoveredOver();
        this.scale = 1;
        if (this.directiveRef) {
          this.directiveRef.update();
        }
        this.doc = doc;
        this.documentWorkItemAnnotations = doc && doc.workitem ? doc.workitem.annotations.map(x => shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Annotation.create(x)) : [];
        this.documentLocked = doc ? this.documentLockingService.isLockedByCurrentUser(this.doc.workitem.id) : false;
        this.highlightsCreated = false;
      }, 10);
    }));
    this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
    this.subscriptions.add(this.captureUpdate.onChangeDocumentPage.subscribe(page => {
      const el = document.querySelector('#viewerWrapper');
      if (el) {
        el.scrollTop = 0;
      }
      this.hideTooltip();
      this.page = page;
      if (this.prevSettings) {
        this.resetViewerSettings();
      }
    }));
    this.subscriptions.add(this.viewerService.onDeletePage.subscribe(index => this.deletePage.emit(index)));
    this.subscriptions.add(this.viewerService.onSelectPage.subscribe(index => {
      this.valuesLocation = [];
      this.selectPage.emit(index);
    }));
    this.subscriptions.add(this.indexingService.onChangeWorkflowStep.subscribe(metaDataArr => this.enablePointNClickIndexing = metaDataArr.length > 0));
    this.onWidthResizedSubscription = this.onWidthResized.subscribe(() => {
      if (this.fitToWidthPortrait && this.viewer) {
        this.updateSize();
      }
    });
    this.onHeightResizedSubscription = this.onHeightResized.subscribe(() => {
      if (!this.fitToWidthPortrait && !this.fitToWidthLandscape && this.viewer) {
        this.setScalesForFitToHeight(true);
      }
    });
    this.subscriptions.add(this.indexingService.onChangeCurrentField.subscribe(fieldName => {
      $('.indexing-popover-header').text(fieldName);
      const mdd = this.userStateService.findMetaDataByName(fieldName);
      if (mdd) {
        $('.indexing-popover-header').text(mdd.label);
      }
    }));
    this.subscriptions.add(this.captureUpdate.onFocusOnIndexValueValidLocation.subscribe(fieldId => {
      if (this.viewer) {
        this.zoomIntoValue(fieldId);
      } else {
        this.zoomedInValueId = fieldId;
      }
    }));
    this.subscriptions.add(this.captureUpdate.onGetValuesValidLocation.subscribe(valuesLocation => {
      this.delay.execute(() => {
        if (this.valuesLocation && this.valuesLocation.length) {
          var existingLocations = this.valuesLocation;
          var newLocations = valuesLocation.filter(value => {
            return existingLocations.findIndex(l => {
              return l.fieldId === value.fieldId;
            }) < 0;
          });
          this.valuesLocation = [...this.valuesLocation, ...newLocations];
        } else {
          this.valuesLocation = valuesLocation;
        }
      }, 20);
    }));
    this.subscriptions.add(this.captureUpdate.onChangeValueValidLocation.subscribe(object => {
      const highlight = $(`div#${this.getHighlightId(object.id)}`);
      for (const key in shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity) {
        if (highlight.hasClass(key)) {
          highlight.removeClass(key);
        }
      }
      highlight.addClass([shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity[object.validity]]);
      highlight.css('background-color', _capture_models__WEBPACK_IMPORTED_MODULE_10__.MetadataValidityColors[shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity[object.validity]]);
    }));
    this.subscriptions.add(this.captureUpdate.onChangeValueInValidLocation.subscribe(object => {
      this.deleteHighlight(object.id);
    }));
    this.subscriptions.add(this.folderViewEventsService.onUpdateItem.subscribe(folderItem => {
      if (!this.isFolderItemSelected(folderItem) || !this.highlightsCreated) return;
      for (let i = this.valuesLocation.length - 1; i >= 0; i--) {
        const valueLocation = this.valuesLocation[i];
        const fieldId = this.parseFieldId(valueLocation.fieldId);
        const mdd = this.userStateService.findMetaDataById(fieldId);
        if (!mdd) {
          this.deleteHighlight(fieldId);
        }
        if (!this.matchingFieldExists(mdd.name, folderItem.workItem.metadata, valueLocation)) {
          this.deleteHighlight(valueLocation.fieldId);
        }
      }
    }));
    this.subscriptions.add(this.actionService.onActivateAction.subscribe(this.invokeAction));
    this.subscriptions.add(this.indexingService.onTakeFocus.subscribe(panel => {
      this.currentFocusedPanel = panel;
    }));
    this.onChangedSelectedItems();
    this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
    document.addEventListener('mouseup', () => this.rubberBandingInProgress = false);
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.clearHoveredOver();
    this.selectPage.unsubscribe();
    this.deletePage.unsubscribe();
    this.subscriptions.unsubscribe();
    this.onWidthResizedSubscription.unsubscribe();
    this.onHeightResizedSubscription.unsubscribe();
  }
  init() {
    this.fitToWidthPortrait = true;
    this.fitToWidthLandscape = false;
    this.isPortrait = true;
    this.isLandscape = false;
    this.scale = 1;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_25__.Subscription();
  }
  isPrimaryStep(ws) {
    const primaryInteractiveStep = this.capture.currentWorkflow.workflowSteps.find(step => step instanceof _blocks_models_workflow_step__WEBPACK_IMPORTED_MODULE_4__.InteractiveWorkflowStep);
    return ws.id === primaryInteractiveStep.id;
  }
  dropped(files) {
    if (!this.canDropDocuments()) return;
    files = files.sort((a, b) => a.fileEntry.name.localeCompare(b.fileEntry.name, undefined, {
      numeric: true
    }));
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry;
        fileEntry.file(file => {
          this.files.push(file);
          if (this.files.length === files.length) {
            this.addFiles.emit(this.files);
            this.files = [];
          }
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry;
      }
    }
  }
  zoomIn() {
    if (this.scale >= VIEWER_CONFIG.maxScale) {
      return;
    }
    this.scale = Math.round((this.scale + VIEWER_CONFIG.scaleIncrement) * 100) / 100;
  }
  zoomOut() {
    if (this.scale <= VIEWER_CONFIG.minScale) {
      return;
    }
    this.scale = Math.round((this.scale - VIEWER_CONFIG.scaleIncrement) * 100) / 100;
  }
  rotate(dir) {
    if (!this.documentLocked) return;
    const rotation = dir === 'right' ? 90 : -90;
    this.onToggleSpinner(true);
    this.capture.rotateCurrentPage(rotation).then(workItem => {
      this.onToggleSpinner(false);
      this.rotateAnnotations(workItem);
    }).catch(() => {
      this.onToggleSpinner(false);
    });
  }
  fit(to) {
    if (to === 'width') {
      this.updateSize();
      this.scale = 1;
      if (this.isPortrait) {
        this.fitToWidthPortrait = true;
        this.fitToWidthLandscape = false;
      } else {
        this.fitToWidthPortrait = false;
        this.fitToWidthLandscape = true;
      }
    } else if (to === 'height') {
      this.fitToWidthPortrait = false;
      this.fitToWidthLandscape = false;
      if (this.isPortrait) {
        this.scale = this.fitToHeightPortraitScale;
      } else {
        this.scale = this.fitToHeightLandscapeScale;
      }
    }
    this.directiveRef.update();
  }
  getPageHeight(event, resetHeight) {
    if (!this.pageHeight) {
      this.pageHeight = event.source.div.offsetHeight;
    }
    this.setScalesForFitToHeight(this.shouldFitToHeight);
  }
  setScalesForFitToHeight(andFitToHeight) {
    const viewerWrapper = document.querySelector('app-document-viewer');
    let percentage;
    percentage = (viewerWrapper.offsetHeight - 40) / this.pageHeight * 100;
    this.fitToHeightPortraitScale = parseFloat((percentage * 0.01).toFixed(2));
    percentage = (viewerWrapper.offsetHeight - 45) / this.pageHeight * 100;
    this.fitToHeightLandscapeScale = parseFloat((percentage * 0.01).toFixed(2));
    if (andFitToHeight) {
      this.fit('height');
      this.shouldFitToHeight = false;
    }
  }
  widthResized() {
    if (this.fitToWidthPortrait && this.viewer) {
      this.updateSize();
    }
    this.thumbnails.widthResized();
  }
  onWidthResize(preference) {
    this.userPreferencesService.setPreference(preference.name, preference.value);
  }
  getPreferenceValue(key, defaultValue) {
    return this.userPreferencesService.getPreference(key) || defaultValue;
  }
  highlightValue(value, index) {
    const {
      fieldId,
      location,
      validity
    } = value;
    const pageIndex = this.viewer.pdfViewer.currentPageNumber;
    const page = this.viewer.pdfViewer._pages[pageIndex - 1];
    const viewPort = page.viewport;
    const boundLeft = viewPort.convertToViewportRectangle([location.left, location.top + 1]);
    const boundRight = viewPort.convertToViewportRectangle([location.right + 1, location.bottom]);
    const highlight = `
      <div
        style="
        position: absolute;
        background-color: ${_capture_models__WEBPACK_IMPORTED_MODULE_10__.MetadataValidityColors[shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity[validity]]};
        left: ${boundLeft[0]}px;
        top: ${boundLeft[1]}px;
        width: ${boundRight[0] - boundLeft[0]}px;
        height: ${boundRight[1] - boundLeft[1]}px;"
        id="${this.getHighlightId(fieldId)}"
        class="highlighted ${shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity[validity]}">
        <div class="highlight-border"></div>
      </div>
    `;
    $(page.canvas.parentElement).append(highlight);
    if (this.zoomedInValueId === fieldId) {
      this.zoomIntoValue(fieldId);
    }
  }
  zoomIntoValue(id) {
    const zoomScale = 1.5;
    $('div.highlighted').each(function () {
      $(this).removeClass('current');
    });
    if (id) {
      if (this.scale !== zoomScale) {
        if (!this.prevSettings) {
          this.prevSettings = {};
        }
        const {
          scale
        } = this;
        const {
          x,
          y
        } = this.directiveRef.position(true);
        this.prevSettings = {
          scale,
          x: x,
          y: y
        };
        this.scale = zoomScale;
        this.directiveRef.update();
        this.zoomedInValueId = id;
      } else {
        const container = $('#viewerWrapper');
        const highlight = $(`div#${this.getHighlightId(id)}`);
        const durationScale = highlight.width() / (200 * zoomScale);
        const duration = 35 * durationScale || this.minimumAnimationDuration;
        highlight.addClass('current');
        highlight.children('.highlight-border').css('animation-duration', `${duration}s`);
        if (highlight.position()) {
          this.directiveRef.scrollTo(highlight.position().left - (container.width() - highlight.width()) / 2, highlight.position().top - (container.height() - highlight.height()) / 2, 150);
          this.zoomedInValueId = null;
        }
      }
    } else {
      if (this.prevSettings) {
        this.resetViewerSettings();
      }
    }
  }
  resetViewerSettings() {
    this.scale = this.prevSettings.scale;
    if (this.directiveRef) {
      this.directiveRef.scrollTo(this.prevSettings.x, this.prevSettings.y, 0);
    }
    this.prevSettings = null;
  }
  setupPointerIndexing(event) {
    if (this.valuesLocation && this.valuesLocation.length) {
      this.valuesLocation.forEach((value, index) => {
        if (value.location.page === this.page.order) {
          this.highlightValue(value, index);
        }
      });
    }
    this.highlightsCreated = true;
    if (!this.enablePointNClickIndexing) {
      return;
    }
    const that = this;
    const body = $('body');
    const textLayer = $('.textLayer');
    $('.indexing-text').unbind('hover');
    $('.indexing-text').unbind('click');
    textLayer.unbind('mousedown');
    let popover = $('.indexing-popover');
    if (!popover.length) {
      popover = `
          <div class="indexing-popover">
            <div class="indexing-popover-header"></div>
            <div class="indexing-popover-body"></div>
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </div>
        `;
      body.append(popover);
    }
    $(event.source.textLayer.textDivs).each(function () {
      if ($(this).hasClass('annotation')) return;
      if ($(this).attr('style')) {
        that.handleTextElement(this);
        return;
      }
      if (!$(this).children.length) return;
      $(this).children().each(function () {
        if (!$(this).attr('style')) return;
        that.handleTextElement(this);
      });
    });
    $('.indexing-text').hover(function () {
      if (!that.documentLocked) return;
      if (that.rubberBandingInProgress) {
        return;
      }
      $('.indexing-popover').show();
      $('.indexing-popover-body').text($(this).addClass('hovered-over').text());
      const textOffset = $(this).offset();
      const textWidth = $('.indexing-popover-body').width();
      const viewerOffset = $('#viewerWrapper').offset();
      const viewerWidth = $('#viewerWrapper').width();
      const bufferMargin = 10;
      let popoverPosition = {
        top: textOffset.top - 75,
        left: textOffset.left - bufferMargin
      };
      if (popoverPosition.left + textWidth > viewerOffset.left + viewerWidth - 2 * bufferMargin) {
        popoverPosition.left -= popoverPosition.left + textWidth - (viewerOffset.left + viewerWidth - 2 * bufferMargin);
      }
      if (popoverPosition.left < viewerOffset.left + 0.5 * bufferMargin) {
        popoverPosition.left += viewerOffset.left + 0.5 * bufferMargin - popoverPosition.left;
      }
      if (popoverPosition.top < 3 * bufferMargin) {
        popoverPosition.top = 3 * bufferMargin;
      }
      $('.indexing-popover').css({
        left: popoverPosition.left + 'px',
        top: popoverPosition.top + 'px'
      });
    }, function () {
      that.hideTooltip();
      $(this).removeClass('hovered-over');
    });
    $('.indexing-text').click(function () {
      if (that.documentLocked) {
        const offset = $(this).offset();
        const location = that.getSelectionLocation(offset.left, offset.top, this.offsetWidth, this.offsetHeight, true);
        that.fillField.emit(new _blocks_models_update_field_data__WEBPACK_IMPORTED_MODULE_3__.UpdateFieldData(that.capture.getCurrentWorkItem(), $(this).text(), location));
      }
    });
    textLayer.mousedown(function (e) {
      if (!that.documentLocked) return;
      if ($(e.target).hasClass('indexing-text')) return;
      if ($(this).hasClass('annotating') && $(this).hasClass('drawing') || $(e.target).hasClass('annotation') || $(e.target).parent().hasClass('annotation')) return;
      that.rubberBandingInProgress = true;
      body.append(`<span class="rubber-banding"></span>`);
      const onClickX = e.pageX;
      const onClickY = e.pageY;
      let onMoveX;
      let onMoveY;
      let positionX;
      let positionY;
      let wrappedTextElements;
      let textElementsWrappers;
      const rubberBanding = $('.rubber-banding');
      function positionRubberBanding(el) {
        el.css({
          left: positionX + 'px',
          top: positionY + 'px',
          width: onClickX > onMoveX ? onClickX - onMoveX : onMoveX - onClickX + 'px',
          height: onClickY > onMoveY ? onClickY - onMoveY : onMoveY - onClickY + 'px'
        });
      }
      function reset() {
        body.unbind('mousemove');
        textLayer.unbind('mouseup');
        textLayer.unbind('mousemove');
        rubberBanding.unbind('mousemove');
        rubberBanding.remove();
      }
      rubberBanding.mousemove(function (event2) {
        onMoveX = event2.pageX;
        onMoveY = event2.pageY;
        positionX = onClickX > onMoveX ? onMoveX + 2 : onClickX - 2;
        positionY = onClickY > onMoveY ? onMoveY + 2 : onClickY - 2;
        positionRubberBanding(rubberBanding);
      });
      body.mousemove(function (event3) {
        const target = $(event3.target);
        if (!(target.hasClass('indexing-text') || target.hasClass('textLayer') || target.hasClass('endOfContent') || target.hasClass('rubber-banding') || target.hasClass('text-wrapper') || target.hasClass('annotations-canvas'))) {
          that.clearHoveredOver();
          reset();
        }
      });
      $(this).mousemove(function (event4) {
        that.clearHoveredOver();
        wrappedTextElements = null;
        textElementsWrappers = null;
        onMoveX = event4.pageX;
        onMoveY = event4.pageY;
        positionX = onClickX > onMoveX ? onMoveX + 2 : onClickX - 2;
        positionY = onClickY > onMoveY ? onMoveY + 2 : onClickY - 2;
        positionRubberBanding(rubberBanding);
        wrappedTextElements = rubberBanding.collision('.indexing-text');
        textElementsWrappers = rubberBanding.collision('.text-wrapper');
        if (wrappedTextElements && wrappedTextElements.length) {
          for (let i = 0; i < wrappedTextElements.length; i++) {
            $(wrappedTextElements[i]).addClass('hovered-over');
          }
        }
      });
      textLayer.mouseup(function (event5) {
        let selectedText = '';
        that.clearHoveredOver();
        if (wrappedTextElements && wrappedTextElements.length) {
          if (that.currentFocusedPanel === _capture_models__WEBPACK_IMPORTED_MODULE_10__.IndexingPanels.LineItemIndexing && wrappedTextElements.length > 1) {
            const valuesArray = [];
            let value = $(wrappedTextElements[0]).text().trim() + ' ';
            for (let i = 1; i < wrappedTextElements.length; i++) {
              if (that.areSiblings(wrappedTextElements[i - 1], wrappedTextElements[i])) {
                value += $(wrappedTextElements[i]).text().trim() + ' ';
                if (i === wrappedTextElements.length - 1) {
                  valuesArray.push(value.trim());
                }
                continue;
              } else if (that.isValueInSameCell(wrappedTextElements[i - 1], wrappedTextElements[i])) {
                value += $(wrappedTextElements[i]).text().trim() + ' ';
              } else {
                valuesArray.push(value.trim());
                value = $(wrappedTextElements[i]).text().trim() + ' ';
              }
              if (i === wrappedTextElements.length - 1) {
                valuesArray.push(value.trim());
              }
            }
            that.fillGroupOfFields.emit(new _blocks_models_update_field_data__WEBPACK_IMPORTED_MODULE_3__.UpdateGroupOfFields(that.capture.getCurrentWorkItem(), valuesArray));
          } else {
            for (let i = 0; i < wrappedTextElements.length; i++) {
              selectedText += $(wrappedTextElements[i]).text() + ' ';
            }
            if (that.documentLocked) {
              const location = that.getSelectionLocation(rubberBanding[0].offsetLeft, rubberBanding[0].offsetTop, rubberBanding[0].offsetWidth, rubberBanding[0].offsetHeight, false);
              selectedText = selectedText.replace(/  +/g, ' ');
              that.fillField.emit(new _blocks_models_update_field_data__WEBPACK_IMPORTED_MODULE_3__.UpdateFieldData(that.capture.getCurrentWorkItem(), selectedText.trim(), location));
            }
          }
        }
        selectedText = '';
        reset();
      });
    });
    this.indexingService.pointAndClickInitialized();
  }
  handleTextElement(element) {
    const $this = $(element);
    const text = $this.text().split(' ');
    if (!$this.hasClass('endOfContent')) $this.addClass('text-wrapper');
    for (let i = 0; i < text.length; i++) {
      text[i] = '<span class="indexing-text">' + text[i] + '</span>';
    }
    $this.html(text.join(' '));
  }
  getSelectionLocation(offsetLeft, offsetTop, offsetWidth, offsetHeight, inflate) {
    const page = this.viewer.pdfViewer._pages[0];
    const pageWidth = this.viewer.pdfViewer._pages[0].viewport.width;
    const pageHeight = this.viewer.pdfViewer._pages[0].viewport.height;
    const canvasOffset = $(page.canvas).offset();
    const viewBox = page.viewport.viewBox;
    const pdfWidth = viewBox[2];
    const pdfHeight = viewBox[3];
    const rbLeft = offsetLeft - canvasOffset.left;
    const rbTop = offsetTop - canvasOffset.top;
    const inflateAmounts = this.getInflateAmounts(inflate, pdfWidth, pdfHeight);
    let location = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Location();
    location.left = Math.round(rbLeft / pageWidth * pdfWidth - inflateAmounts[0]);
    location.top = Math.round(rbTop / pageHeight * pdfHeight - inflateAmounts[1]);
    location.right = Math.round(offsetWidth / pageWidth * pdfWidth + location.left + inflateAmounts[0] * 2);
    location.bottom = Math.round(offsetHeight / pageHeight * pdfHeight + location.top + inflateAmounts[1] * 2);
    location.page = this.page.order - 1;
    location.valid = false;
    return location;
  }
  getInflateAmounts(inflate, pdfWidth, pdfHeight) {
    const maxInflateAmount = inflate ? 3.2 : 0;
    let widthInflateAmount = pdfWidth * 0.0052;
    widthInflateAmount = widthInflateAmount > maxInflateAmount ? maxInflateAmount : widthInflateAmount;
    let heightInflateAmount = pdfHeight * 0.004;
    heightInflateAmount = heightInflateAmount > maxInflateAmount ? maxInflateAmount : heightInflateAmount;
    return [widthInflateAmount, heightInflateAmount];
  }
  hideTooltip() {
    $('.indexing-popover-body').text('');
    $('.indexing-popover').hide();
  }
  isValueInSameCell(element1, element2) {
    const parent1 = element1.parentElement;
    const parent2 = element2.parentElement;
    const prevRect = parent1.getBoundingClientRect();
    const currentRect = parent2.getBoundingClientRect();
    return prevRect.top === currentRect.top && Math.round(prevRect.right) === Math.round(currentRect.left) || $(parent1).next().is(parent2);
  }
  areSiblings(e1, e2) {
    return $(e1).parent().children().is($(e2));
  }
  onToggleSpinner(state) {
    if (state) {
      this.toggleSpinner.emit(true);
    } else {
      this.toggleSpinner.emit(false);
    }
  }
  updateSize() {
    if (this.viewer && this.viewer.page) {
      this.viewer.updateSize();
    }
  }
  static {
    this.ɵfac = function DocumentViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_views_document_capture_capture_services__WEBPACK_IMPORTED_MODULE_8__.DocumentViewerService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_capture_services_indexing_panel_service__WEBPACK_IMPORTED_MODULE_14__.IndexingPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_views_document_capture_capture_services__WEBPACK_IMPORTED_MODULE_8__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_11__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_5__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_12__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_15__.SelectedItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_13__.FolderViewEventsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_6__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
      type: DocumentViewerComponent,
      selectors: [["app-document-viewer"]],
      viewQuery: function DocumentViewerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c2, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_product_item_document_preview_annotations_annotations_component__WEBPACK_IMPORTED_MODULE_9__.AnnotationsComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.viewer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.thumbnails = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.annotations = _t.first);
        }
      },
      hostBindings: function DocumentViewerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("resize", function DocumentViewerComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        selectedBatch: "selectedBatch",
        selectedDocument: "selectedDocument",
        selectedPage: "selectedPage",
        onWidthResized: "onWidthResized",
        onHeightResized: "onHeightResized"
      },
      outputs: {
        addFiles: "addFiles",
        selectPage: "selectPage",
        deletePage: "deletePage",
        fillField: "fillField",
        fillGroupOfFields: "fillGroupOfFields",
        toggleSpinner: "toggleSpinner"
      },
      decls: 31,
      vars: 44,
      consts: [["wrapper", ""], ["thumbnails", ""], ["viewerArea", ""], ["ps1", "ngxPerfectScrollbar"], ["viewer", ""], [1, "doc-viewer", "text-center", 3, "autoUpdatePerfectScroll"], [1, "pannel-header", 3, "perfectScrollbar"], [1, "pannel-title"], [4, "ngIf"], [1, "viewer-controls"], [1, "line-separator"], ["image", "icons/icnZoomIn.svg", 3, "action", "disabled", "title"], ["image", "icons/icnZoomOut.svg", 3, "action", "disabled", "title"], ["image", "icons/icnFitToHeight.svg", 3, "action", "disabled", "title"], ["image", "icons/icnFitToWidth.svg", 3, "action", "disabled", "title"], ["image", "icons/icnRotateCounterClockwise.svg", 3, "action", "disabled", "title"], ["image", "icons/icnRotateClockwise.svg", 3, "action", "disabled", "title"], [1, "d-flex", "h-100", "pl-1"], ["appResizable", "", "width", "150", 1, "d-block", 3, "toggleSpinner", "resize", "widthResized", "wrapper", "handles", "preferenceName", "preferenceValue", "annotationsAllowed"], [1, "r-section", "col", "p-0"], ["class", "file-drop-wrapper p-2", 4, "ngIf"], ["class", "content-container", 4, "ngIf"], ["class", "scrollable-section has-header", "id", "viewerWrapper", "fxFlex", "auto", 3, "perfectScrollbar", 4, "ngIf"], [3, "viewer", "id", "pageNumber", "annotations", "annotationAdded", "annotationUpdated", "annotationRemoved", 4, "ngIf"], [1, "page-count"], ["image", "shared/icons/annotations/cursor.svg", 3, "action", "title", "disabled"], ["image", "shared/icons/annotations/redaction.svg", 3, "action", "title", "disabled"], ["image", "shared/img/marker.svg", 3, "action", "title", "disabled"], [3, "listItems", "actionPlaceHolder", "onChangeAction", "isSelectable", "displayHtmlValue", "minWidth", "minListWidth", "actionDropTypeType", "title", "extraClasses"], ["image", "shared/icons/annotations/text.svg", 3, "action", "title", "disabled"], [3, "listItems", "actionPlaceHolder", "onChangeAction", "isSelectable", "displayHtmlValue", "minWidth", "actionDropTypeType", "title", "extraClasses"], [3, "listItems", "actionPlaceHolder", "onChangeAction", "isSelectable", "minWidth", "minListWidth", "actionDropTypeType", "title", "extraClasses"], ["image", "shared/icons/annotations/pen.svg", 3, "action", "title", "disabled"], ["image", "shared/icons/annotations/arrow.svg", 3, "action", "title", "disabled"], ["image", "shared/icons/annotations/line.svg", 3, "action", "title", "disabled"], ["image", "shared/icons/annotations/circle.svg", 3, "action", "title", "disabled"], ["image", "shared/icons/annotations/rectangle.svg", 3, "action", "title", "disabled"], [1, "color-btn", 3, "color", "title", "onChangeAction", "disabled", "showOkButton", "oKButtonText"], ["image", "shared/icons/annotations/stamp.svg", 3, "action", "title", "disabled"], [3, "listItems", "actionPlaceHolder", "onChangeAction", "isSelectable", "minWidth", "minListWidth", "displayHtmlValue", "actionDropTypeType", "title", "extraClasses"], [1, "file-drop-wrapper", "p-2"], [3, "onFileDrop"], ["ngx-file-drop-content-tmp", ""], [1, "content-container"], [1, "content-wrapper"], [1, "content"], ["id", "viewerWrapper", "fxFlex", "auto", 1, "scrollable-section", "has-header", 3, "perfectScrollbar"], [3, "page-rendered", "text-layer-rendered", "src", "render-text", "zoom", "original-size", "fit-to-page", "autoresize", "show-all", "page"], [3, "annotationAdded", "annotationUpdated", "annotationRemoved", "viewer", "id", "pageNumber", "annotations"]],
      template: function DocumentViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "section", 5, 0)(2, "div", 6)(3, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, DocumentViewerComponent_span_4_Template, 4, 2, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](5, "app-document-locked")(6, "app-delivery-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](8, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](9, DocumentViewerComponent_ng_container_9_Template, 38, 123, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](10, "app-action-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](12, "app-action-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](14, "app-action-button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](16, "app-action-button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](18, "app-action-button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](20, "app-action-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](22, "div", 17)(23, "app-thumbnails", 18, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("toggleSpinner", function DocumentViewerComponent_Template_app_thumbnails_toggleSpinner_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx.onToggleSpinner($event));
          })("resize", function DocumentViewerComponent_Template_app_thumbnails_resize_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx.onWidthResize($event));
          })("widthResized", function DocumentViewerComponent_Template_app_thumbnails_widthResized_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx.widthResized());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](25, "div", 19, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](27, DocumentViewerComponent_div_27_Template, 3, 0, "div", 20)(28, DocumentViewerComponent_div_28_Template, 5, 1, "div", 21)(29, DocumentViewerComponent_div_29_Template, 4, 14, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](30, DocumentViewerComponent_app_annotations_30_Template, 1, 4, "app-annotations", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const wrapper_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("autoUpdatePerfectScroll", ctx.directiveRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](43, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.oneDocumentSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.annotationsAllowed() && ctx.annotations);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](11, 31, "Scanning.ZoomIn"));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx.Action.ZoomIn)("disabled", !ctx.capture.currentPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](13, 33, "Scanning.ZoomOut"));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx.Action.ZoomOut)("disabled", !ctx.capture.currentPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](15, 35, "Scanning.FitToHeight"));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx.Action.FitToHeight)("disabled", !ctx.capture.currentPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](17, 37, "Scanning.FitToWidth"));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx.Action.FitToWidth)("disabled", !ctx.capture.currentPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](19, 39, "Scanning.RotateLeft"));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx.Action.RotateLeft)("disabled", !ctx.capture.currentPage || !ctx.documentLocked);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](21, 41, "Scanning.RotateRight"));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("action", ctx.Action.RotateRight)("disabled", !ctx.capture.currentPage || !ctx.documentLocked);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("wrapper", wrapper_r7)("handles", "e")("preferenceName", ctx.thumbnailsViewerKey)("preferenceValue", ctx.getPreferenceValue(ctx.thumbnailsViewerKey, "10"))("annotationsAllowed", ctx.annotationsAllowed());
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.capture.currentPage && ctx.canDropDocuments());
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.multipleItemsSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.capture.currentPage == null ? null : ctx.capture.currentPage.viewerURL);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.annotationsAllowed() && ctx.viewer);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_28__.PerfectScrollbarDirective, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__.PdfViewerComponent, ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__.NgxFileDropComponent, ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__.NgxFileDropContentTemplateDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_17__.AutoUpdatePerfectScrollDirective, _blocks_components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_18__.ActionButtonComponent, _blocks_components_action_color_button_action_color_button_component__WEBPACK_IMPORTED_MODULE_19__.ColorActionButtonComponent, _product_item_document_preview_annotations_annotations_component__WEBPACK_IMPORTED_MODULE_9__.AnnotationsComponent, _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_20__.ResizableDirective, _Bamba_Shared_src_components_action_dropdown_action_dropdown_component__WEBPACK_IMPORTED_MODULE_21__.ActionDropdownComponent, _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_16__.ThumbnailsComponent, _delivery_error_delivery_error_component__WEBPACK_IMPORTED_MODULE_22__.DeliveryErrorComponent, _document_locked_document_locked_component__WEBPACK_IMPORTED_MODULE_23__.DocumentLockedComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.textLayer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  opacity: 1 !important;\n  line-height: 1;\n}\n.textLayer > span {\n  color: transparent;\n  position: absolute;\n  white-space: pre;\n  cursor: text;\n  transform-origin: 0% 0%;\n}\n.textLayer .highlight {\n  margin: -1px;\n  padding: 1px;\n  background-color: rgb(180, 0, 170);\n  border-radius: 4px;\n}\n.textLayer .highlight.begin {\n  border-radius: 4px 0px 0px 4px;\n}\n.textLayer .highlight.end {\n  border-radius: 0px 4px 4px 0px;\n}\n.textLayer .highlight.middle {\n  border-radius: 0px;\n}\n.textLayer .highlight.selected {\n  background-color: rgb(0, 100, 0);\n}\n.textLayer ::selection {\n  background: rgb(0, 0, 255);\n}\n.textLayer .endOfContent {\n  display: block;\n  position: absolute;\n  left: 0px;\n  top: 100%;\n  right: 0px;\n  bottom: 0px;\n  z-index: -1;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.textLayer .endOfContent.active {\n  top: 0px;\n}\n\n.annotationLayer section {\n  position: absolute;\n}\n.annotationLayer .linkAnnotation > a,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  position: absolute;\n  font-size: 1em;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.annotationLayer .linkAnnotation > a:hover,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {\n  opacity: 0.2;\n  background: #ff0;\n  box-shadow: 0px 2px 10px #ff0;\n}\n.annotationLayer .textAnnotation img {\n  position: absolute;\n  cursor: pointer;\n}\n.annotationLayer .textWidgetAnnotation input,\n.annotationLayer .textWidgetAnnotation textarea {\n  background-color: rgba(0, 54, 255, 0.13);\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  font-size: 9px;\n  height: 100%;\n  margin: 0;\n  padding: 0 3px;\n  vertical-align: top;\n  width: 100%;\n}\n.annotationLayer .choiceWidgetAnnotation select {\n  background-color: rgba(0, 54, 255, 0.13);\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  font-size: 9px;\n  height: 100%;\n  margin: 0;\n  padding: 0 3px;\n  vertical-align: top;\n  width: 100%;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input, .annotationLayer .buttonWidgetAnnotation.radioButton input {\n  background-color: rgba(0, 54, 255, 0.13);\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  font-size: 9px;\n  height: 100%;\n  margin: 0;\n  padding: 0 3px;\n  vertical-align: top;\n  width: 100%;\n}\n.annotationLayer .choiceWidgetAnnotation select option {\n  padding: 0;\n}\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  border-radius: 50%;\n}\n.annotationLayer .textWidgetAnnotation textarea {\n  font: message-box;\n  font-size: 9px;\n  resize: none;\n}\n.annotationLayer .textWidgetAnnotation input[disabled],\n.annotationLayer .textWidgetAnnotation textarea[disabled] {\n  background: none;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n}\n.annotationLayer .choiceWidgetAnnotation select[disabled] {\n  background: none;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled], .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\n  background: none;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n}\n.annotationLayer .textWidgetAnnotation input:hover,\n.annotationLayer .textWidgetAnnotation textarea:hover {\n  border: 1px solid #000;\n}\n.annotationLayer .choiceWidgetAnnotation select:hover {\n  border: 1px solid #000;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover, .annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\n  border: 1px solid #000;\n}\n.annotationLayer .textWidgetAnnotation input:focus,\n.annotationLayer .textWidgetAnnotation textarea:focus {\n  background: none;\n  border: 1px solid transparent;\n}\n.annotationLayer .choiceWidgetAnnotation select:focus {\n  background: none;\n  border: 1px solid transparent;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before, .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  background-color: #000;\n  content: \"\";\n  display: block;\n  position: absolute;\n}\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  background-color: #000;\n  content: \"\";\n  display: block;\n  position: absolute;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before, .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  height: 80%;\n  left: 45%;\n  width: 1px;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {\n  transform: rotate(45deg);\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  transform: rotate(-45deg);\n}\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  border-radius: 50%;\n  height: 50%;\n  left: 30%;\n  top: 20%;\n  width: 50%;\n}\n.annotationLayer .textWidgetAnnotation input.comb {\n  font-family: monospace;\n  padding-left: 2px;\n  padding-right: 0;\n}\n.annotationLayer .textWidgetAnnotation input.comb:focus {\n  /*\n   * Letter spacing is placed on the right side of each character. Hence, the\n   * letter spacing of the last character may be placed outside the visible\n   * area, causing horizontal scrolling. We avoid this by extending the width\n   * when the element has focus and revert this when it loses focus.\n   */\n  width: 115%;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input, .annotationLayer .buttonWidgetAnnotation.radioButton input {\n  appearance: none;\n  padding: 0;\n}\n.annotationLayer .popupWrapper {\n  position: absolute;\n  width: 20em;\n}\n.annotationLayer .popup {\n  position: absolute;\n  z-index: 200;\n  max-width: 20em;\n  background-color: #ffff99;\n  box-shadow: 0px 2px 5px #333;\n  border-radius: 2px;\n  padding: 0.6em;\n  margin-left: 5px;\n  cursor: pointer;\n  font: message-box;\n  word-wrap: break-word;\n}\n.annotationLayer .popup h1 {\n  font-size: 1em;\n  border-bottom: 1px solid #000000;\n  margin: 0;\n  padding-bottom: 0.2em;\n}\n.annotationLayer .popup p {\n  margin: 0;\n  padding-top: 0.2em;\n}\n.annotationLayer .highlightAnnotation,\n.annotationLayer .underlineAnnotation,\n.annotationLayer .squigglyAnnotation,\n.annotationLayer .strikeoutAnnotation,\n.annotationLayer .lineAnnotation svg line,\n.annotationLayer .squareAnnotation svg rect,\n.annotationLayer .circleAnnotation svg ellipse,\n.annotationLayer .polylineAnnotation svg polyline,\n.annotationLayer .polygonAnnotation svg polygon,\n.annotationLayer .inkAnnotation svg polyline,\n.annotationLayer .stampAnnotation,\n.annotationLayer .fileAttachmentAnnotation {\n  cursor: pointer;\n}\n\n.pdfViewer {\n  padding-bottom: 10px;\n}\n.pdfViewer .canvasWrapper {\n  overflow: hidden;\n}\n.pdfViewer .page {\n  direction: ltr;\n  width: 816px;\n  height: 1056px;\n  margin: 1px auto -8px auto;\n  position: relative;\n  overflow: visible;\n  border: 9px solid rgba(0, 0, 0, 0.01);\n  background-clip: content-box;\n  border-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;\n  background-color: white;\n}\n.pdfViewer.removePageBorders .page {\n  margin: 0px auto 10px auto;\n  border: none;\n}\n.pdfViewer.removePageBorders {\n  padding-bottom: 0;\n}\n.pdfViewer.singlePageView {\n  display: inline-block;\n}\n.pdfViewer.singlePageView .page {\n  margin: 0;\n  border: none;\n}\n.pdfViewer.scrollHorizontal, .pdfViewer.scrollWrapped {\n  margin-left: 3.5px;\n  margin-right: 3.5px;\n  text-align: center;\n}\n\n.spread {\n  margin-left: 3.5px;\n  margin-right: 3.5px;\n  text-align: center;\n}\n\n.pdfViewer.scrollHorizontal,\n.spread {\n  white-space: nowrap;\n}\n\n.pdfViewer.removePageBorders, .pdfViewer.scrollHorizontal .spread, .pdfViewer.scrollWrapped .spread {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.spread .page {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.pdfViewer.scrollHorizontal .page, .pdfViewer.scrollWrapped .page, .pdfViewer.scrollHorizontal .spread, .pdfViewer.scrollWrapped .spread {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.spread .page {\n  margin-left: -3.5px;\n  margin-right: -3.5px;\n}\n\n.pdfViewer.scrollHorizontal .page, .pdfViewer.scrollWrapped .page {\n  margin-left: -3.5px;\n  margin-right: -3.5px;\n}\n.pdfViewer.removePageBorders .spread .page, .pdfViewer.removePageBorders.scrollHorizontal .page, .pdfViewer.removePageBorders.scrollWrapped .page {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.pdfViewer .page canvas {\n  margin: 0;\n  display: block;\n}\n.pdfViewer .page canvas[hidden] {\n  display: none;\n}\n\n.pdfPresentationMode .pdfViewer {\n  margin-left: 0;\n  margin-right: 0;\n}\n.pdfPresentationMode .pdfViewer .page,\n.pdfPresentationMode .pdfViewer .spread {\n  display: block;\n}\n.pdfPresentationMode .pdfViewer .page, .pdfPresentationMode .pdfViewer.removePageBorders .page {\n  margin-left: auto;\n  margin-right: auto;\n}\n.pdfPresentationMode:-webkit-full-screen .pdfViewer .page, .pdfPresentationMode:-moz-full-screen .pdfViewer .page, .pdfPresentationMode:fullscreen .pdfViewer .page {\n  margin-bottom: 100%;\n  border: 0;\n}\n\n.doc-viewer {\n  background: #ffffff;\n  min-width: 300px;\n}\n.doc-viewer .selected-doc {\n  max-height: 100%;\n}\n.doc-viewer .r-section {\n  width: 0;\n  overflow: hidden;\n}\n.doc-viewer .file-drop-wrapper {\n  height: calc(100% - 30px);\n}\n.doc-viewer .file-drop-wrapper.disabled .content {\n  cursor: no-drop;\n}\n.doc-viewer app-thumbnails {\n  height: calc(100% - 30px);\n}\n.doc-viewer .page-count {\n  color: darkgray;\n}\n.doc-viewer .highlighted {\n  transition: border 0.15s ease-in-out;\n  border: 2px solid transparent;\n}\n.doc-viewer .highlighted .highlight-border {\n  width: 100%;\n  height: 100%;\n}\n.doc-viewer .highlighted.unknown {\n  border-color: rgb(116, 116, 116);\n}\n.doc-viewer .highlighted.valid {\n  border-color: rgb(25, 167, 75);\n}\n.doc-viewer .highlighted.suspicious {\n  border-color: rgb(255, 238, 14);\n}\n.doc-viewer .highlighted.notValid {\n  border-color: rgb(225, 0, 19);\n}\n.doc-viewer .highlighted.current {\n  border: none;\n  transition: border 0.15s ease-in-out;\n}\n.doc-viewer .highlighted.current .highlight-border {\n  background: linear-gradient(90deg, var(--brand-primary-color) 50%, transparent 50%), linear-gradient(90deg, var(--brand-primary-color) 50%, transparent 50%), linear-gradient(0deg, var(--brand-primary-color) 50%, transparent 50%), linear-gradient(0deg, var(--brand-primary-color) 50%, transparent 50%);\n  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;\n  background-size: 15px 3px, 15px 3px, 3px 15px, 3px 15px;\n  background-position: 0px 0px, 100% 100%, 0px 100%, 100% 0px;\n  padding: 10px;\n  animation: border-dance 10s infinite linear;\n}\n.doc-viewer .content-container {\n  height: calc(100% - 30px);\n  padding: 0.5rem !important;\n}\n.doc-viewer .content-container .content-wrapper {\n  border-radius: 4px !important;\n  background-color: #f7f7f7;\n  border: 2px dashed #cfcfcf !important;\n  height: 100% !important;\n}\n.doc-viewer .content-container .content-wrapper .content {\n  height: 100% !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.doc-viewer .content-container .content-wrapper .content span {\n  color: #151515 !important;\n  font-size: 14px;\n}\n.doc-viewer #viewerWrapper,\n.doc-viewer #viewerWrapper * {\n  direction: ltr !important;\n  text-align: left !important;\n}\n.doc-viewer .pannel-header .ps__rail-x {\n  top: 15px;\n}\n.doc-viewer .pannel-header .ps__thumb-x {\n  left: 0px !important;\n}\n\n@keyframes border-dance {\n  0% {\n    background-position: 0px 0px, 150% 100%, 0px 75%, 100% 0px;\n  }\n  100% {\n    background-position: 150% 0px, 0px 100%, 0px 0px, 100% 75%;\n  }\n}\nspan.indexing-text {\n  display: inline-block;\n  position: relative !important;\n}\n\nspan.text-wrapper {\n  display: inline-block;\n  width: fit-content;\n  height: fit-content;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2RvY3VtZW50LWNhcHR1cmUvZG9jdW1lbnQtdmlld2VyL2RvY3VtZW50LXZpZXdlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3BkZi12aWV3ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUMvT0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRGtQRjtBQ2hQRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtBRGtQSjtBQy9PRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBRGlQSjtBQy9PSTtFQUNFLDhCQUFBO0FEaVBOO0FDOU9JO0VBQ0UsOEJBQUE7QURnUE47QUM3T0k7RUFDRSxrQkFBQTtBRCtPTjtBQzVPSTtFQUNFLGdDQUFBO0FEOE9OO0FDdE9FO0VBQ0UsMEJBQUE7QUQyT0o7QUN4T0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FEME9KO0FDeE9JO0VBQ0UsUUFBQTtBRDBPTjs7QUNwT0U7RUFDRSxrQkFBQTtBRHVPSjtBQ3BPRTs7RUFFRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEc09KO0FDbk9FOztFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FEcU9KO0FDbE9FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FEb09KO0FDaE9JOztFQUVFLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURrT047QUM5TkU7RUFDRSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEZ09KO0FDNU5JO0VBRUUsd0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBRDZOTjtBQ3pORTtFQUNFLFVBQUE7QUQyTko7QUN4TkU7RUFDRSxrQkFBQTtBRDBOSjtBQ3ROSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUR3Tk47QUNyTkk7O0VBRUUsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FEdU5OO0FDbk5FO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FEcU5KO0FDak5JO0VBRUUsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FEa05OO0FDN01JOztFQUVFLHNCQUFBO0FEK01OO0FDM01FO0VBQ0Usc0JBQUE7QUQ2TUo7QUN6TUk7RUFFRSxzQkFBQTtBRDBNTjtBQ3JNSTs7RUFFRSxnQkFBQTtFQUNBLDZCQUFBO0FEdU1OO0FDbk1FO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBRHFNSjtBQ2hNTTtFQUVFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRGlNUjtBQzdMSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRCtMTjtBQzNMTTtFQUVFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRDRMUjtBQ3pMTTtFQUVFLHdCQUFBO0FEMkxSO0FDeExNO0VBRUUseUJBQUE7QUQwTFI7QUN0TEk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUR3TE47QUNwTEU7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURzTEo7QUNwTEk7RUFDRTs7Ozs7SUFBQTtFQU1BLFdBQUE7QURzTE47QUNqTEk7RUFJRSxnQkFBQTtFQUNBLFVBQUE7QURrTE47QUM5S0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURnTEo7QUM3S0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUQrS0o7QUM3S0k7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUQrS047QUM1S0k7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUQ4S047QUMxS0U7Ozs7Ozs7Ozs7OztFQVlFLGVBQUE7QUQ0S0o7O0FDeEtBO0VBNkJFLG9CQUFBO0FEK0lGO0FDM0tFO0VBQ0UsZ0JBQUE7QUQ2S0o7QUMxS0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFJQSxxQ0FBQTtFQUNBLDRCQUFBO0VBR0EsMGJBQUE7RUFFQSx1QkFBQTtBRHVLSjtBQ3BLRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBRHNLSjtBQ2pLRTtFQUNFLGlCQUFBO0FEbUtKO0FDaEtFO0VBQ0UscUJBQUE7QURrS0o7QUNoS0k7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBRGtLTjtBQzlKRTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRCtKSjs7QUMzSkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUQ4SkY7O0FDM0pBOztFQUVFLG1CQUFBO0FEOEpGOztBQzFKRTtFQUdFLGNBQUE7RUFDQSxlQUFBO0FEMkpKOztBQ3ZKQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUQwSkY7O0FDdEpFO0VBSUUscUJBQUE7RUFDQSxzQkFBQTtBRHNKSjs7QUNsSkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FEcUpGOztBQ2pKRTtFQUVFLG1CQUFBO0VBQ0Esb0JBQUE7QURtSko7QUMvSUk7RUFHRSxnQkFBQTtFQUNBLGlCQUFBO0FEK0lOO0FDMUlJO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUQ0SU47QUMxSU07RUFDRSxhQUFBO0FENElSOztBQ3JJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FEd0lKO0FDdElJOztFQUVFLGNBQUE7QUR3SU47QUNySUk7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0FEc0lOO0FDOUhFO0VBR0UsbUJBQUE7RUFDQSxTQUFBO0FEaUlKOztBQXRsQkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBeWxCRjtBQXZsQkU7RUFDRSxnQkFBQTtBQXlsQko7QUF0bEJFO0VBQ0UsUUFBQTtFQUNBLGdCQUFBO0FBd2xCSjtBQXJsQkU7RUFDRSx5QkFBQTtBQXVsQko7QUFwbEJNO0VBQ0UsZUFBQTtBQXNsQlI7QUFqbEJFO0VBQ0UseUJBQUE7QUFtbEJKO0FBaGxCRTtFQUNFLGVBQUE7QUFrbEJKO0FBL2tCRTtFQU1FLG9DQUFBO0VBQ0EsNkJBQUE7QUE0a0JKO0FBbGxCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBb2xCTjtBQTlrQkk7RUFDRSxnQ0FBQTtBQWdsQk47QUE3a0JJO0VBQ0UsOEJBQUE7QUEra0JOO0FBNWtCSTtFQUNFLCtCQUFBO0FBOGtCTjtBQTNrQkk7RUFDRSw2QkFBQTtBQTZrQk47QUExa0JJO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0FBNGtCTjtBQTFrQk07RUFDRSw0U0FBQTtFQUlBLHlEQUFBO0VBQ0EsdURBQUE7RUFDQSwyREFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtBQXlrQlI7QUFwa0JFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQXNrQko7QUFwa0JJO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7QUFza0JOO0FBcGtCTTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFza0JSO0FBcGtCUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQXNrQlY7QUFoa0JFOztFQUVFLHlCQUFBO0VBQ0EsMkJBQUE7QUFra0JKO0FBOWpCSTtFQUNFLFNBQUE7QUFna0JOO0FBN2pCSTtFQUNFLG9CQUFBO0FBK2pCTjs7QUExakJBO0VBQ0U7SUFDRSwwREFBQTtFQTZqQkY7RUEzakJBO0lBQ0UsMERBQUE7RUE2akJGO0FBQ0Y7QUExakJBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtBQTRqQkY7O0FBempCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUE0akJGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9wZGYtdmlld2VyLnNjc3MnO1xyXG5cclxuLmRvYy12aWV3ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgLnNlbGVjdGVkLWRvYyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnItc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuZmlsZS1kcm9wLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLXRodW1ibmFpbHMge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICB9XHJcblxyXG4gIC5wYWdlLWNvdW50IHtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHRlZCB7XHJcbiAgICAuaGlnaGxpZ2h0LWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgJi51bmtub3duIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMTE2LCAxMTYsIDExNik7XHJcbiAgICB9XHJcblxyXG4gICAgJi52YWxpZCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDI1LCAxNjcsIDc1KTtcclxuICAgIH1cclxuXHJcbiAgICAmLnN1c3BpY2lvdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDIzOCwgMTQpO1xyXG4gICAgfVxyXG5cclxuICAgICYubm90VmFsaWQge1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYigyMjUsIDAsIDE5KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmN1cnJlbnQge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgIC5oaWdobGlnaHQtYm9yZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR1cGxhbmQtYmx1ZSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR1cGxhbmQtYmx1ZSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHVwbGFuZC1ibHVlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCAkdXBsYW5kLWJsdWUgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteCwgcmVwZWF0LXgsIHJlcGVhdC15LCByZXBlYXQteTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggM3B4LCAxNXB4IDNweCwgM3B4IDE1cHgsIDNweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHgsIDEwMCUgMTAwJSwgMHB4IDEwMCUsIDEwMCUgMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBib3JkZXItZGFuY2UgMTBzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjY2ZjZmNmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzE1MTUxNSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3ZpZXdlcldyYXBwZXIsXHJcbiAgI3ZpZXdlcldyYXBwZXIgKiB7XHJcbiAgICBkaXJlY3Rpb246IGx0ciAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBhbm5lbC1oZWFkZXIge1xyXG4gICAgLnBzX19yYWlsLXgge1xyXG4gICAgICB0b3A6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBzX190aHVtYi14IHtcclxuICAgICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvcmRlci1kYW5jZSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweCwgMTUwJSAxMDAlLCAwcHggNzUlLCAxMDAlIDBweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNTAlIDBweCwgMHB4IDEwMCUsIDBweCAwcHgsIDEwMCUgNzUlO1xyXG4gIH1cclxufVxyXG5cclxuc3Bhbi5pbmRleGluZy10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNwYW4udGV4dC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iLCIudGV4dExheWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICA+IHNwYW4ge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHQge1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMCwgMTcwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAmLmJlZ2luIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuZW5kIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYubWlkZGxlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDI1NSk7XHJcbiAgfVxyXG5cclxuICA6OnNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMjU1KTtcclxuICB9XHJcblxyXG4gIC5lbmRPZkNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLmxpbmtBbm5vdGF0aW9uID4gYSxcclxuICAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5wdXNoQnV0dG9uID4gYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5saW5rQW5ub3RhdGlvbiA+IGE6aG92ZXIsXHJcbiAgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucHVzaEJ1dHRvbiA+IGE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAjZmYwO1xyXG4gIH1cclxuXHJcbiAgLnRleHRBbm5vdGF0aW9uIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dFdpZGdldEFubm90YXRpb24ge1xyXG4gICAgaW5wdXQsXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTQsIDI1NSwgMC4xMyk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDU0LCAyNTUsIDAuMTMpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uIHtcclxuICAgICYuY2hlY2tCb3ggaW5wdXQsXHJcbiAgICAmLnJhZGlvQnV0dG9uIGlucHV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA1NCwgMjU1LCAwLjEzKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IG9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgZm9udDogbWVzc2FnZS1ib3g7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbZGlzYWJsZWRdLFxyXG4gICAgdGV4dGFyZWFbZGlzYWJsZWRdIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3RbZGlzYWJsZWRdIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbiB7XHJcbiAgICAmLmNoZWNrQm94IGlucHV0W2Rpc2FibGVkXSxcclxuICAgICYucmFkaW9CdXR0b24gaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dFdpZGdldEFubm90YXRpb24ge1xyXG4gICAgaW5wdXQ6aG92ZXIsXHJcbiAgICB0ZXh0YXJlYTpob3ZlciB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICB9XHJcblxyXG4gIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uIHtcclxuICAgICYuY2hlY2tCb3ggaW5wdXQ6aG92ZXIsXHJcbiAgICAmLnJhZGlvQnV0dG9uIGlucHV0OmhvdmVyIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB7XHJcbiAgICBpbnB1dDpmb2N1cyxcclxuICAgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbldpZGdldEFubm90YXRpb24ge1xyXG4gICAgJi5jaGVja0JveCBpbnB1dDpjaGVja2VkIHtcclxuICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgICYuY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZCB7XHJcbiAgICAgICY6YmVmb3JlLFxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBsZWZ0OiA0NSU7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJhZGlvQnV0dG9uIGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgbGVmdDogMzAlO1xyXG4gICAgICB0b3A6IDIwJTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dC5jb21iIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIC8qXHJcbiAgICAgICAqIExldHRlciBzcGFjaW5nIGlzIHBsYWNlZCBvbiB0aGUgcmlnaHQgc2lkZSBvZiBlYWNoIGNoYXJhY3Rlci4gSGVuY2UsIHRoZVxyXG4gICAgICAgKiBsZXR0ZXIgc3BhY2luZyBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgbWF5IGJlIHBsYWNlZCBvdXRzaWRlIHRoZSB2aXNpYmxlXHJcbiAgICAgICAqIGFyZWEsIGNhdXNpbmcgaG9yaXpvbnRhbCBzY3JvbGxpbmcuIFdlIGF2b2lkIHRoaXMgYnkgZXh0ZW5kaW5nIHRoZSB3aWR0aFxyXG4gICAgICAgKiB3aGVuIHRoZSBlbGVtZW50IGhhcyBmb2N1cyBhbmQgcmV2ZXJ0IHRoaXMgd2hlbiBpdCBsb3NlcyBmb2N1cy5cclxuICAgICAgICovXHJcbiAgICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbldpZGdldEFubm90YXRpb24ge1xyXG4gICAgJi5jaGVja0JveCBpbnB1dCxcclxuICAgICYucmFkaW9CdXR0b24gaW5wdXQge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb3B1cFdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbiAgfVxyXG5cclxuICAucG9wdXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAwLjZlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250OiBtZXNzYWdlLWJveDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDAuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhpZ2hsaWdodEFubm90YXRpb24sXHJcbiAgLnVuZGVybGluZUFubm90YXRpb24sXHJcbiAgLnNxdWlnZ2x5QW5ub3RhdGlvbixcclxuICAuc3RyaWtlb3V0QW5ub3RhdGlvbixcclxuICAubGluZUFubm90YXRpb24gc3ZnIGxpbmUsXHJcbiAgLnNxdWFyZUFubm90YXRpb24gc3ZnIHJlY3QsXHJcbiAgLmNpcmNsZUFubm90YXRpb24gc3ZnIGVsbGlwc2UsXHJcbiAgLnBvbHlsaW5lQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXHJcbiAgLnBvbHlnb25Bbm5vdGF0aW9uIHN2ZyBwb2x5Z29uLFxyXG4gIC5pbmtBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSxcclxuICAuc3RhbXBBbm5vdGF0aW9uLFxyXG4gIC5maWxlQXR0YWNobWVudEFubm90YXRpb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnBkZlZpZXdlciB7XHJcbiAgLmNhbnZhc1dyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5wYWdlIHtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgd2lkdGg6IDgxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDU2cHg7XHJcbiAgICBtYXJnaW46IDFweCBhdXRvIC04cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjEwMjUyMTIvYm9yZGVyLWltYWdlLW5vdC1zaG93aW5nLWluLXNhZmFyaVxyXG4gICAgLy8gXCJ0cmFuc3BhcmVudFwiIG1ha2VzIHRoZSBib3JkZXIgbm90IHNob3cgdXAgaW4gU2FmYXJpLiBCdXQgYWRkaW5nIGEgbGlnaHQgdHJhbnNwYXJlbnQgY29sb3IgZGlkXHJcbiAgICAvLyByZ2JhKDAsMCwwLDAuMDEpLiBCdXQgdGhlcmUgbmVlZHMgdG8gYmUgYW4gYWxwaGEgdmFsdWUgbGFyZ2VyIHRoYW4gMC5cclxuICAgIGJvcmRlcjogOXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgLW8tYm9yZGVyLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBVENBUUFBQURZV2Y1SEFBQUE2VWxFUVZSNFhsMlBpMnJFTUF3RTE2Zm0xZjcvcjE0djd3NHJJMEl6TEFGN2hMeE5ldkJTRU1FRjUrT2lsTkNzUmQ4Wk15bithNE5tc09UOFdKdzFsRmJTWWdHRnpGMmJMRm9MalRDbFdqS0tHUldwRFlBR1hVblo0dWhiQlV6RjNPZS9HRy91ZTJmbjRHZ3N5WGhOZ3lzVjJKbnJoS0VNZzRmRVpjQUxtaUtiTmhCQlJGcFN5RE9qMUc0UU9WbHk2TzFGVjU0WlpxOE9WeWdyY2lEdDZKYXpSZ2kxbGpUUEgwZ2JyUG1IUFhBYkNpRGQ0R2F3SWppcDFUUGg5dHQyc3oyNHFhQ2pyL2pBYi9HQkZUYnE5S1o3S2UvQ3F0OG5heVVpa1pLc1daSzdGZTZiZzVkT1V0OGZaSFdHMkJIYys2RUFBQUFBU1VWT1JLNUNZSUk9JylcclxuICAgICAgOSA5IHJlcGVhdDtcclxuICAgIGJvcmRlci1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJNQUFBQVRDQVFBQUFEWVdmNUhBQUFBNlVsRVFWUjRYbDJQaTJyRU1Bd0UxNmZtMWY3L3IxNHY3dzRySTBJekxBRjdoTHhOZXZCU0VNRUY1K09pbE5Dc1JkOFpNeW4rYTRObXNPVDhXSncxbEZiU1lnR0Z6RjJiTEZvTGpUQ2xXaktLR1JXcERZQUdYVW5aNHVoYkJVekYzT2UvR0cvdWUyZm40R2dzeVhoTmd5c1YySm5yaEtFTWc0ZkVaY0FMbWlLYk5oQkJSRnBTeURPajFHNFFPVmx5Nk8xRlY1NFpacThPVnlncmNpRHQ2SmF6UmdpMWxqVFBIMGdiclBtSFBYQWJDaURkNEdhd0lqaXAxVFBoOXR0MnN6MjRxYUNqci9qQWIvR0JGVGJxOUtaN0tlL0NxdDhuYXlVaWtaS3NXWks3RmU2Ymc1ZE9VdDhmWkhXRzJCSGMrNkVBQUFBQVNVVk9SSzVDWUlJPScpXHJcbiAgICAgIDkgOSByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYucmVtb3ZlUGFnZUJvcmRlcnMgLnBhZ2Uge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgJi5yZW1vdmVQYWdlQm9yZGVycyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICYuc2luZ2xlUGFnZVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIC5wYWdlIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnNjcm9sbEhvcml6b250YWwsXHJcbiAgJi5zY3JvbGxXcmFwcGVkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMy41cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ByZWFkIHtcclxuICBtYXJnaW4tbGVmdDogMy41cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzLjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCxcclxuLnNwcmVhZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnBkZlZpZXdlciB7XHJcbiAgJi5yZW1vdmVQYWdlQm9yZGVycyxcclxuICAmLnNjcm9sbEhvcml6b250YWwgLnNwcmVhZCxcclxuICAmLnNjcm9sbFdyYXBwZWQgLnNwcmVhZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zcHJlYWQgLnBhZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucGRmVmlld2VyIHtcclxuICAmLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXHJcbiAgJi5zY3JvbGxXcmFwcGVkIC5wYWdlLFxyXG4gICYuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxyXG4gICYuc2Nyb2xsV3JhcHBlZCAuc3ByZWFkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ByZWFkIC5wYWdlIHtcclxuICBtYXJnaW4tbGVmdDogLTMuNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTMuNXB4O1xyXG59XHJcblxyXG4ucGRmVmlld2VyIHtcclxuICAmLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXHJcbiAgJi5zY3JvbGxXcmFwcGVkIC5wYWdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMy41cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zLjVweDtcclxuICB9XHJcblxyXG4gICYucmVtb3ZlUGFnZUJvcmRlcnMge1xyXG4gICAgLnNwcmVhZCAucGFnZSxcclxuICAgICYuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcclxuICAgICYuc2Nyb2xsV3JhcHBlZCAucGFnZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2Uge1xyXG4gICAgY2FudmFzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICZbaGlkZGVuXSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGUge1xyXG4gIC5wZGZWaWV3ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgLnBhZ2UsXHJcbiAgICAuc3ByZWFkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UsXHJcbiAgICAmLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6LW1zLWZ1bGxzY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOi13ZWJraXQtZnVsbC1zY3JlZW4gLnBkZlZpZXdlciAucGFnZSxcclxuICAmOi1tb3otZnVsbC1zY3JlZW4gLnBkZlZpZXdlciAucGFnZSxcclxuICAmOmZ1bGxzY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 95523:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/document-capture/document-viewer/thumbnails/thumbnail/thumbnail.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThumbnailComponent: () => (/* binding */ ThumbnailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_core_keyboardActionMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../blocks/core/keyboardActionMapping */ 20294);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../blocks/services/action.service */ 12811);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../capture-models */ 48004);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../capture-services */ 97954);
/* harmony import */ var _capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../capture-services/document-capture.service */ 70131);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);



















const _c0 = ["thumbnailWrapper"];
function ThumbnailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 8);
  }
}
function ThumbnailComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ThumbnailComponent_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.confirmDelete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "document-actions.delete-page"));
  }
}
function ThumbnailComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ThumbnailComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.breakDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r2.getBreakIconTitle());
  }
}
function ThumbnailComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("load", function ThumbnailComponent_img_8_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.drawAnnotations());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.page.thumbnailURL, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
class ThumbnailComponent {
  constructor(capture, ngxSmartModalService, translate, viewer, actionService, delay) {
    this.capture = capture;
    this.ngxSmartModalService = ngxSmartModalService;
    this.translate = translate;
    this.actionService = actionService;
    this.delay = delay;
    this.annotationsAllowed = false;
    this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.getThumbnail = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.toggleSpinner = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.thumbnailDefaultHeightPercentage = 1.2;
    this.PageState = _capture_models__WEBPACK_IMPORTED_MODULE_4__.PageState;
    this.onThumbnailScrolled = scrollTop => {
      if (!this.isPageInViewPort(this.wrapperElementRef, false)) {
        if (this.page.state !== _capture_models__WEBPACK_IMPORTED_MODULE_4__.PageState.Loaded) this.page.state = _capture_models__WEBPACK_IMPORTED_MODULE_4__.PageState.Empty;
        this.capture.cancelLoadDocumentPage(this.page);
        return;
      }
      if (this.page.state !== _capture_models__WEBPACK_IMPORTED_MODULE_4__.PageState.Empty) return;
      this.delay.execute(() => {
        if (!this.isPageInViewPort(this.wrapperElementRef, false) || this.page.state !== _capture_models__WEBPACK_IMPORTED_MODULE_4__.PageState.Empty) return;
        this.capture.loadDocumentPage(this.page, () => {
          this.getThumbnail.emit(this.page);
        });
      }, 400);
    };
    this.confirmedDelete = () => {
      this.ngxSmartModalService.getModal('actionConfirmModal').close();
      this.toggleSpinner.emit(true);
      this.capture.deletePage(this.page, () => {
        this.toggleSpinner.emit(false);
      });
    };
    this.cancelDelete = () => {
      this.ngxSmartModalService.getModal('actionConfirmModal').close();
    };
    this.subscriptions.add(viewer.onThumbnailScroll.subscribe(this.onThumbnailScrolled));
  }
  ngOnChanges(changes) {
    if (changes.page && changes.page.currentValue) this.subscriptions.add(this.page.annotationsChanged.subscribe(() => this.drawAnnotations()));
  }
  ngOnInit() {
    this.subscriptions.add(this.onWidthResized.subscribe(() => {
      this.drawAnnotations();
      this.getThumbnail.emit(this.page);
    }));
  }
  ngAfterViewInit() {
    this.wrapperElement = this.wrapperElementRef.nativeElement;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  isPageInViewPort(element, fullyInView) {
    const pageTop = $(window).scrollTop();
    const pageBottom = pageTop + $(window).height();
    const elementTop = $(element.nativeElement).offset().top;
    const elementBottom = elementTop + $(element.nativeElement).height();
    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  }
  select() {
    this.capture.selectSpecificPage(this.page);
  }
  confirmDelete(e) {
    e.stopPropagation();
    this.ngxSmartModalService.setModalData({
      title: 'MainHeader.DeleteConfirmation',
      text: this.translate.instant('Document_Capture.Confirm_Delete_Page'),
      buttonText: this.translate.instant('Common.Delete'),
      confirm: this.confirmedDelete,
      cancel: this.cancelDelete
    }, 'actionConfirmModal', true);
    this.ngxSmartModalService.getModal('actionConfirmModal').open();
  }
  getBreakIconTitle() {
    const title = this.translate.instant('document-actions.break-document');
    if (this.capture.currentPage.id !== this.page.id) return title;
    const keyboardTooltip = _blocks_core_keyboardActionMapping__WEBPACK_IMPORTED_MODULE_2__.KeyboardActionMapping.getTooltipFor(_blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.BreakDocument, this.translate);
    return `${title}${keyboardTooltip}`;
  }
  breakDocument() {
    this.select();
    this.actionService.activateAction(new _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.ActionEvent(_blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.BreakDocument));
  }
  drawAnnotations() {
    if (!this.annotationsAllowed || !this.wrapperElementRef || !this.page || !this.page.annotations) return;
    const canvas = this.wrapperElementRef.nativeElement.getElementsByTagName('canvas')[0];
    if (!canvas) return;
    const img = canvas.parentElement.getElementsByTagName('img')[0];
    if (!img) return;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.page.annotations.sort((a, b) => a.order - b.order).forEach(annotation => {
      annotation.draw(ctx, canvas.width, canvas.height, false);
    });
  }
  static {
    this.ɵfac = function ThumbnailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_6__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_5__.DocumentViewerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_3__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ThumbnailComponent,
      selectors: [["app-thumbnail"]],
      viewQuery: function ThumbnailComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.wrapperElementRef = _t.first);
        }
      },
      inputs: {
        page: "page",
        canBeDeleted: "canBeDeleted",
        isPageDraggable: "isPageDraggable",
        onWidthResized: "onWidthResized",
        annotationsAllowed: "annotationsAllowed"
      },
      outputs: {
        loaded: "loaded",
        getThumbnail: "getThumbnail",
        toggleSpinner: "toggleSpinner"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 10,
      vars: 9,
      consts: [["thumbnailWrapper", ""], [1, "thumbnail-wrapper", 2, "display", "flex", "justify-content", "center", "align-items", "center", 3, "click", "title"], ["class", "page-loader", 4, "ngIf"], [1, "thumbnail-overlay"], ["class", "button-icon overlay-icon remove", 3, "title", "click", 4, "ngIf"], ["class", "button-icon overlay-icon break", 3, "title", "click", 4, "ngIf"], [1, "pdf-viewer-wrapper", 3, "resized"], ["class", "img-h-fluid", "alt", "", 3, "src", "load", 4, "ngIf"], [1, "page-loader"], [1, "button-icon", "overlay-icon", "remove", 3, "click", "title"], [1, "icon-cancel-circle"], [1, "button-icon", "overlay-icon", "break", 3, "click", "title"], ["src", "assets/img/workflow-editor/bursting.svg", 2, "max-width", "none"], ["alt", "", 1, "img-h-fluid", 3, "load", "src"]],
      template: function ThumbnailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ThumbnailComponent_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.select());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ThumbnailComponent_div_3_Template, 1, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ThumbnailComponent_button_5_Template, 3, 3, "button", 4)(6, ThumbnailComponent_button_6_Template, 2, 1, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resized", function ThumbnailComponent_Template_div_resized_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.drawAnnotations());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ThumbnailComponent_img_8_Template, 1, 1, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "canvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 7, "document-thumbnail.tooltip"), " ", ctx.page.order, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page.state === ctx.PageState.Loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.canBeDeleted && ctx.page.state === ctx.PageState.Loaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page.order > 1 && ctx.isPageDraggable && ctx.page.state === ctx.PageState.Loaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page.state === ctx.PageState.Loaded ? ctx.page.thumbnailURL : "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["app-thumbnail {\n  position: relative;\n  display: block;\n  min-width: fit-content;\n}\napp-thumbnail .thumbnail-wrapper {\n  cursor: pointer;\n  background: #f3f3f3;\n  line-height: 1.5;\n  width: 100%;\n  padding-top: 135%;\n  min-width: 40px;\n}\napp-thumbnail .thumbnail-wrapper .overlay-icon {\n  display: block;\n  position: absolute;\n  max-width: fit-content;\n  padding: 0;\n  opacity: 0;\n  transform: scale(0);\n  transition: all 0.3s ease-in-out;\n}\napp-thumbnail .thumbnail-wrapper .remove {\n  top: -4px;\n  right: 0px;\n  color: #e10012;\n}\napp-thumbnail .thumbnail-wrapper .break {\n  top: -8px;\n  right: 20px;\n}\napp-thumbnail .thumbnail-wrapper .thumbnail-overlay,\napp-thumbnail .thumbnail-wrapper .page-loader {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\napp-thumbnail .thumbnail-wrapper .thumbnail-overlay {\n  z-index: 1;\n  border: 1px solid #979797;\n  color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);\n}\napp-thumbnail .thumbnail-wrapper .page-loader {\n  background-image: url('animated-spinner.gif');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin: 0px 10px 0px 10px;\n}\napp-thumbnail .thumbnail-wrapper p {\n  margin-bottom: 0.3rem;\n}\napp-thumbnail.selected .thumbnail-overlay {\n  border-color: #73a7d8;\n  border-width: 3px;\n}\napp-thumbnail:hover .overlay-icon {\n  opacity: 1;\n  transform: scale(1);\n  transition: display 0.3s ease-in-out;\n}\napp-thumbnail .pdf-viewer-wrapper {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  bottom: 5px;\n  right: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\napp-thumbnail .pdf-viewer-wrapper pdf-viewer {\n  width: 100%;\n}\napp-thumbnail .pdf-viewer-wrapper canvas {\n  position: absolute;\n}\napp-thumbnail .pdfViewer.removePageBorders .page {\n  margin: 0 !important;\n}\n\n.drag-started app-thumbnail {\n  z-index: 15000;\n  opacity: 0.6;\n  transform: scale(0.9);\n}\n.drag-started app-thumbnail .thumbnail-overlay {\n  border-color: #197b30;\n  border-width: 2px;\n  border-style: dotted;\n}\n\n.img-h-fluid {\n  width: auto;\n  max-height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS9kb2N1bWVudC12aWV3ZXIvdGh1bWJuYWlscy90aHVtYm5haWwvdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ047QUFFSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQUROO0FBSUk7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBRk47QUFLSTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQUhOO0FBTUk7RUFDRSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBSk47QUFPSTtFQUNFLHFCQUFBO0FBTE47QUFVSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFSTjtBQWFJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFYTjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFiSjtBQWVJO0VBQ0UsV0FBQTtBQWJOO0FBZ0JJO0VBQ0Usa0JBQUE7QUFkTjtBQWtCRTtFQUNFLG9CQUFBO0FBaEJKOztBQW9CQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFqQkY7QUFtQkU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFqQko7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0FBbEJGIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRodW1ibmFpbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gIC50aHVtYm5haWwtd3JhcHBlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEzNSU7XHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcblxyXG4gICAgLm92ZXJsYXktaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZW1vdmUge1xyXG4gICAgICB0b3A6IC00cHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGNvbG9yOiAjZTEwMDEyO1xyXG4gICAgfVxyXG5cclxuICAgIC5icmVhayB7XHJcbiAgICAgIHRvcDogLThweDtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRodW1ibmFpbC1vdmVybGF5LFxyXG4gICAgLnBhZ2UtbG9hZGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRodW1ibmFpbC1vdmVybGF5IHtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5NztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtbG9hZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvaW1nL2FuaW1hdGVkLXNwaW5uZXIuZ2lmKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgLnRodW1ibmFpbC1vdmVybGF5IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNzNhN2Q4O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLm92ZXJsYXktaWNvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wZGYtdmlld2VyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHBkZi12aWV3ZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmRyYWctc3RhcnRlZCBhcHAtdGh1bWJuYWlsIHtcclxuICB6LWluZGV4OiAxNTAwMDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG5cclxuICAudGh1bWJuYWlsLW92ZXJsYXkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTk3YjMwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWctaC1mbHVpZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 26677:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/document-capture/document-viewer/thumbnails/thumbnails.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThumbnailsComponent: () => (/* binding */ ThumbnailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _views_document_capture_capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../views/document-capture/capture-services/document-capture.service */ 70131);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../capture-models */ 48004);
/* harmony import */ var _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../capture-models/capture-constants */ 61502);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_last_touched_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../capture-services/document-last-touched.service */ 6564);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_document_viewer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../capture-services/document-viewer.service */ 48981);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-pdf-viewer */ 42072);
/* harmony import */ var _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../blocks/directives/drag-drop.directive */ 24115);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./thumbnail/thumbnail.component */ 95523);




































const _c0 = ["thumbnailsPanel"];
const _c1 = ["thumbnailsUl"];
const _c2 = ["viewer"];
const _c3 = () => ({
  suppressScrollX: true
});
function ThumbnailsComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li", 9)(1, "app-thumbnail", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("loaded", function ThumbnailsComponent_li_6_Template_app_thumbnail_loaded_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onPageLoad());
    })("getThumbnail", function ThumbnailsComponent_li_6_Template_app_thumbnail_getThumbnail_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.getThumbnail($event));
    })("toggleSpinner", function ThumbnailsComponent_li_6_Template_app_thumbnail_toggleSpinner_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onToggleSpinner($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("selected", (ctx_r2.capture.currentPage == null ? null : ctx_r2.capture.currentPage.order) === page_r4.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("page", page_r4)("canBeDeleted", ctx_r2.pageCanBeDeleted && ctx_r2.documentLocked)("isPageDraggable", ctx_r2.isPageDraggable && ctx_r2.documentLocked)("onWidthResized", ctx_r2.widthResizedSubject.asObservable())("annotationsAllowed", ctx_r2.annotationsAllowed);
  }
}
function ThumbnailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "pdf-viewer", 12, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("page-rendered", function ThumbnailsComponent_div_7_Template_pdf_viewer_page_rendered_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onRender());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const thumbnails_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("width", thumbnails_r6.clientWidth, "px")("height", thumbnails_r6.clientHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r2.currentPage.viewerURL)("original-size", true)("fit-to-page", true)("show-all", false)("page", 1)("render-text", false);
  }
}
class ThumbnailsComponent {
  onResize() {
    this.widthResized();
  }
  constructor(viewerService, capture, captureUpdate, actionService, hydraApi, toastr, translate, calculate, delay, documentLockingService, userStateService, documentLastTouchedService) {
    this.viewerService = viewerService;
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.actionService = actionService;
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.translate = translate;
    this.calculate = calculate;
    this.delay = delay;
    this.documentLockingService = documentLockingService;
    this.userStateService = userStateService;
    this.documentLastTouchedService = documentLastTouchedService;
    this.annotationsAllowed = false;
    this.toggleSpinner = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
    this.waitingPages = [];
    this.pageString = _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_7__.CaptureConstants.page;
    this.lockStatusChanged = ls => {
      if (!this.currentDocument || !this.currentDocument.workitem) return;
      if (ls.id == this.currentDocument.workitem.id) {
        this.documentLocked = ls.locked && ls.lockedByUserId == this.userStateService.user.id && !ls.expired();
      }
    };
    this.invokeAction = event => {
      if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.NextPage) {
        this.movePageSelection(1);
        return;
      } else if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.PreviousPage) {
        this.movePageSelection(-1);
        return;
      } else if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.BreakDocument) {
        this.breakDocument();
        return;
      }
    };
    this.onPanelScrolled = ev => {
      this.viewerService.thumbnailScrolled(this.thumbnailsPanelElement.scrollTop);
    };
    this.onAnnotationsLoaded = () => {
      if (!this.annotationsAllowed) return;
      this.currentDocument.pages.forEach(page => {
        page.onAnnotationsChanged();
      });
    };
    this.onAnnotationAdded = annotation => {
      if (!this.annotationsAllowed) return;
      const page = this.currentDocument.pages.find(x => x.order == annotation.pageNumber);
      if (!page) return;
      page.annotations.push(annotation);
      page.onAnnotationsChanged();
    };
    this.onAnnotationUpdated = annotation => {
      if (!this.annotationsAllowed) return;
      const page = this.currentDocument.pages.find(x => x.order == annotation.pageNumber);
      if (!page) return;
      const index = page.annotations.findIndex(x => x.id == annotation.id);
      if (index == -1) return;
      page.annotations[index] = annotation;
      page.onAnnotationsChanged();
    };
    this.onAnnotationRemoved = annotation => {
      if (!this.annotationsAllowed) return;
      const page = this.currentDocument.pages.find(x => x.order == annotation.pageNumber);
      if (!page) return;
      const index = page.annotations.findIndex(x => x.id == annotation.id);
      if (index == -1) return;
      page.annotations.splice(index, 1);
      page.onAnnotationsChanged();
    };
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
    this.widthResizedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
  }
  ngAfterViewInit() {
    this.thumbnailsPanelElement = this.thumbnailsPanelElementRef.nativeElement;
    this.thumbnailsPanelElement.addEventListener('ps-scroll-y', this.onPanelScrolled);
  }
  ngOnInit() {
    this.subscriptions.add(this.captureUpdate.onChangeDocumentPage.subscribe(page => this.selectedPage = page));
    this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => {
      this.documentLocked = false;
      this.delay.execute(() => {
        this.currentDocument = doc;
        this.thumbnailsPanelElement.scrollTop = 0;
        this.currentPage = null;
        this.waitingPages = [];
        if (doc) {
          setTimeout(() => {
            this.viewerService.thumbnailScrolled(0);
            this.widthResized();
          }, 50);
        }
        const ws = this.capture.getWorkflowStepById(this.capture.getCurrentStepId());
        this.isPageDraggable = ws && ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_6__.Capabilities.allowDropDocumentPage);
        this.pageCanBeDeleted = ws && ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_6__.Capabilities.deletePage);
      }, 10);
    }));
    this.subscriptions.add(this.actionService.onActivateAction.subscribe(this.invokeAction));
    window.addEventListener('resize', this.onPanelScrolled);
    this.subscriptions.add(this.captureUpdate.onRotatePage.subscribe(() => {
      this.capture.loadDocumentPage(this.selectedPage, () => {
        this.getThumbnail(this.selectedPage);
      });
    }));
  }
  movePageSelection(offset) {
    if (!this.selectedPage) return;
    let nextPageOrder = this.selectedPage.order + offset;
    if (nextPageOrder < 1) {
      nextPageOrder = this.currentDocument.pageCount;
    } else if (nextPageOrder > this.currentDocument.pageCount) {
      nextPageOrder = 1;
    }
    this.setSelectedPage(nextPageOrder);
  }
  breakDocument() {
    if (this.selectedPage.order < 2 || !this.isPageDraggable) return;
    if (!this.documentLocked) return;
    this.hydraApi.splitDocumentByPageNumber(this.capture.getCurrentWorkItem().id, this.currentDocument.id, this.selectedPage.order, newWorkItem => {
      const documentId = newWorkItem.files[0];
      const parentFolder = this.capture.findFolder(this.currentDocument.parentFolderId);
      const searchResult = parentFolder.findDocument(documentId);
      if (searchResult) {
        this.capture.selectDocument(searchResult.document, searchResult.workItem, this.currentDocument.parentFolderId);
        return;
      }
      this.documentLastTouchedService.setLastTouchedWorkItem(newWorkItem.id);
    }, err => {
      this.toastr.error(this.translate.instant('Document_Capture.document-break-failed'));
    });
  }
  setSelectedPage(order) {
    this.selectedPage = this.currentDocument.pages.find(p => p.order === order);
    this.capture.selectSpecificPage(this.selectedPage);
    const pageElementId = `page-${order - 1}`;
    const element = document.getElementById(pageElementId);
    const container = this.thumbnailsPanelElementRef.nativeElement;
    if (!this.calculate.isVisibleInScrollableElement(element, container, false)) {
      this.directiveRef.scrollToElement(`#${pageElementId}`, 0, 100);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    window.removeEventListener('resize', this.onPanelScrolled);
    if (this.thumbnailsPanelElement) {
      this.thumbnailsPanelElement.removeEventListener('ps-scroll-y', this.onPanelScrolled);
    }
  }
  onSort(dragData) {
    this.toggleSpinner.emit(true);
    this.capture.handleSortingPages(dragData).then(() => {
      this.capture.sortPages(true);
      this.toggleSpinner.emit(false);
    }).catch(() => {
      this.capture.sortPages(false);
      this.toggleSpinner.emit(false);
    });
  }
  onToggleSpinner(state) {
    if (state) {
      this.toggleSpinner.emit(true);
    } else {
      this.toggleSpinner.emit(false);
    }
  }
  onScroll(position) {
    this.directiveRef.scrollToY(position, 100);
  }
  widthResized() {
    const ulWidth = $(this.thumbnailsUl.nativeElement).width();
    this.waitingPages = [];
    this.widthResizedSubject.next(ulWidth);
    this.onPanelScrolled();
  }
  onPageLoad() {
    this.onPanelScrolled();
  }
  renderNextThumbnail() {
    if (this.capture.currentPage?.order) {
      this.waitingPages = this.waitingPages.sort(p1 => this.capture.currentPage.order - p1.order);
    }
    const nextThumbnail = this.waitingPages.splice(0, 1)[0];
    this.getThumbnail(nextThumbnail);
  }
  getThumbnail(page) {
    if (!page || !page.viewerURL) return;
    const pageAlreadyHasThumbnailUrl = !!page.thumbnailURL;
    if (pageAlreadyHasThumbnailUrl) this.renderNextThumbnail();
    if (this.currentPage) {
      const isPageInQueue = this.waitingPages.findIndex(p => p.id === page.id) !== -1;
      if (!isPageInQueue) this.waitingPages.push(page);
    } else {
      this.currentPage = page;
    }
    this.updateSize();
  }
  onRender() {
    if (!this.currentPage) {
      return;
    }
    const canvas = document.querySelector('.canvasWrapper canvas');
    this.waitingPages = this.waitingPages.filter(p => p.id !== this.currentPage.id);
    this.currentPage.thumbnailURL = canvas.toDataURL('image/jpeg');
    this.currentPage.state = _capture_models__WEBPACK_IMPORTED_MODULE_6__.PageState.Loaded;
    this.currentPage = null;
    this.renderNextThumbnail();
  }
  updateSize() {
    if (this.viewer && this.viewer.page) {
      this.viewer.updateSize();
    }
  }
  static {
    this.ɵfac = function ThumbnailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThumbnailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_capture_services_document_viewer_service__WEBPACK_IMPORTED_MODULE_11__.DocumentViewerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_views_document_capture_capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_5__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_8__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_2__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CalculationsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_10__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_capture_services_document_last_touched_service__WEBPACK_IMPORTED_MODULE_9__.DocumentLastTouchedService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: ThumbnailsComponent,
      selectors: [["app-thumbnails"]],
      viewQuery: function ThumbnailsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarDirective, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.thumbnailsPanelElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.thumbnailsUl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.viewer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        }
      },
      hostBindings: function ThumbnailsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("resize", function ThumbnailsComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        wrapper: "wrapper",
        annotationsAllowed: "annotationsAllowed"
      },
      outputs: {
        toggleSpinner: "toggleSpinner"
      },
      decls: 8,
      vars: 15,
      consts: [["thumbnails", ""], ["thumbnailsPanel", ""], ["thumbnailsUl", ""], ["viewer", ""], [1, "thumbnails"], ["fxFlex", "auto", 1, "scrollable-section", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], ["appDragNDrop", "", 1, "thumbnails-wrapper", "tree", "p-1", "mb-0", 3, "sort", "scrollToTop", "scrollToBottom", "hidden", "isSortable", "sortableList", "sortableListLength", "sortableElementType", "sortableParentStepId", "autoScroll", "wrapper", "scrollableWrapper", "autoScrollStep"], ["class", "page pb-1 mx-1", 4, "ngFor", "ngForOf"], ["class", "thumbnail-generator-wrapper", 4, "ngIf"], [1, "page", "pb-1", "mx-1"], [1, "d-block", 3, "loaded", "getThumbnail", "toggleSpinner", "page", "canBeDeleted", "isPageDraggable", "onWidthResized", "annotationsAllowed"], [1, "thumbnail-generator-wrapper"], [3, "page-rendered", "src", "original-size", "fit-to-page", "show-all", "page", "render-text"]],
      template: function ThumbnailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "section", 4, 0)(2, "div", 5, 1)(4, "ul", 6, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("sort", function ThumbnailsComponent_Template_ul_sort_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onSort($event));
          })("scrollToTop", function ThumbnailsComponent_Template_ul_scrollToTop_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onScroll($event));
          })("scrollToBottom", function ThumbnailsComponent_Template_ul_scrollToBottom_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onScroll($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ThumbnailsComponent_li_6_Template, 2, 7, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ThumbnailsComponent_div_7_Template, 3, 10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const thumbnailsPanel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](14, _c3))("autoUpdatePerfectScroll", ctx.directiveRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !ctx.currentDocument)("isSortable", ctx.isPageDraggable && ctx.documentLocked)("sortableList", ctx.currentDocument == null ? null : ctx.currentDocument.pages)("sortableListLength", ctx.currentDocument == null ? null : ctx.currentDocument.pages.length)("sortableElementType", ctx.pageString)("sortableParentStepId", ctx.currentDocument == null ? null : ctx.currentDocument.parentStepId)("autoScroll", true)("wrapper", ctx.wrapper)("scrollableWrapper", thumbnailsPanel_r7)("autoScrollStep", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.currentDocument == null ? null : ctx.currentDocument.pages);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.currentPage == null ? null : ctx.currentPage.viewerURL);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarDirective, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_22__.PdfViewerComponent, _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_12__.DragDropDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_13__.AutoUpdatePerfectScrollDirective, _thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__.ThumbnailComponent],
      styles: [".thumbnails {\n  background: #ffffff;\n  margin: 0 auto;\n  height: 100%;\n  border-right: 1px solid #cfcfcf;\n  padding-left: 4px;\n}\n.thumbnails .thumbnails-wrapper {\n  line-height: 0.3;\n}\n.thumbnails .thumbnail-generator-wrapper {\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  width: 500px;\n}\n\n.rtl .thumbnails {\n  border-left: 1px solid #cfcfcf;\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS9kb2N1bWVudC12aWV3ZXIvdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbHMge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZmNmY2Y7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcblxyXG4gIC50aHVtYm5haWxzLXdyYXBwZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuMztcclxuICB9XHJcblxyXG4gIC50aHVtYm5haWwtZ2VuZXJhdG9yLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucnRsIC50aHVtYm5haWxzIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZmNmY2Y7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87828:
/*!**************************************************************************************!*\
  !*** ./src/app/views/document-capture/documents-list/document/document.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentComponent: () => (/* binding */ DocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 61856);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/core/fileName */ 28016);
/* harmony import */ var _blocks_models_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/models/document */ 2983);
/* harmony import */ var _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/models/folder-item */ 48844);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_drag_drop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../blocks/services/drag-drop.service */ 46579);
/* harmony import */ var _blocks_services_modals_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../blocks/services/modals-utilities.service */ 6906);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../capture-models */ 48004);
/* harmony import */ var _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../capture-models/capture-constants */ 61502);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../capture-services */ 97954);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../capture-services/document-capture.service */ 70131);
/* harmony import */ var _capture_services_document_last_touched_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../capture-services/document-last-touched.service */ 6564);
/* harmony import */ var _capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../capture-services/document-list-style.service */ 20063);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../capture-services/folder-view-events.service */ 72297);
/* harmony import */ var _capture_services_outcomes_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../capture-services/outcomes.service */ 93176);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../capture-services/selected-items.service */ 85641);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 32346);
/* harmony import */ var _Bamba_Shared_src_components_icons_clear_icon_clear_icon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/components/icons/clear-icon/clear-icon.component */ 5238);
/* harmony import */ var _Bamba_Shared_src_components_icons_save_icon_save_icon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/components/icons/save-icon/save-icon.component */ 76706);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../blocks/directives/drag-drop.directive */ 24115);





















































const _c0 = ["docName"];
const _c1 = ["docWrapper"];
const _c2 = ["wrapper"];
const _c3 = ["menu"];
const _c4 = ["fieldCell"];
const _c5 = (a0, a1) => ({
  dragging: a0,
  droppable: a1
});
const _c6 = a0 => ({
  "icomoon-grip-small grip drag-handler": a0
});
const _c7 = a0 => ({
  "document-grid-menu": a0
});
const _c8 = () => ({
  standalone: true
});
function DocumentComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "i", 21);
  }
}
function DocumentComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "i", 22);
  }
}
function DocumentComponent_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "i", 23);
  }
}
function DocumentComponent_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "i", 24);
  }
}
function DocumentComponent_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "input", 25, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("keyup", function DocumentComponent_input_10_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.checkValidity($event));
    })("blur", function DocumentComponent_input_10_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onBlur());
    })("click", function DocumentComponent_input_10_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModel", ctx_r2.doc.filename)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](2, _c8));
  }
}
function DocumentComponent_div_11_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "td")(1, "app-field", 30, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("focus", function DocumentComponent_div_11_td_6_Template_app_field_focus_1_listener() {
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const mdd_r7 = ctx_r5.$implicit;
      const cellIndex_r8 = ctx_r5.index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onFocusCell(cellIndex_r8, mdd_r7));
    })("blurex", function DocumentComponent_div_11_td_6_Template_app_field_blurex_1_listener($event) {
      const mdd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellBlur($event, mdd_r7));
    })("tabex", function DocumentComponent_div_11_td_6_Template_app_field_tabex_1_listener($event) {
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const mdd_r7 = ctx_r8.$implicit;
      const cellIndex_r8 = ctx_r8.index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellTab($event, mdd_r7, cellIndex_r8));
    })("keydown.tab", function DocumentComponent_div_11_td_6_Template_app_field_keydown_tab_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellTabKey($event));
    })("keydown.shift.tab", function DocumentComponent_div_11_td_6_Template_app_field_keydown_shift_tab_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellShiftTabKey($event));
    })("saveLookupValues", function DocumentComponent_div_11_td_6_Template_app_field_saveLookupValues_1_listener($event) {
      const cellIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onSaveLookupValues($event, cellIndex_r8));
    })("return", function DocumentComponent_div_11_td_6_Template_app_field_return_1_listener($event) {
      const mdd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellReturn($event, mdd_r7));
    })("valueChange", function DocumentComponent_div_11_td_6_Template_app_field_valueChange_1_listener($event) {
      const mdd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onValueChanged($event, mdd_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mdd_r7 = ctx.$implicit;
    const cellIndex_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("context", ctx_r2.folderItem.workItem)("field", ctx_r2.stepMetadataDefinitionsFields[cellIndex_r8])("value", ctx_r2.fieldsValues[mdd_r7.name])("validity", ctx_r2.getValidity(mdd_r7))("focused", ctx_r2.selected && cellIndex_r8 === ctx_r2.selectedCellIndex)("findMetaDataService", ctx_r2.userStateService)("metaDataCollection", ctx_r2.folderItem.workItem.metadata)("disabled", ctx_r2.selected && !ctx_r2.documentLocked);
  }
}
function DocumentComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 26)(1, "table")(2, "tr", 27)(3, "td")(4, "app-field", 28, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayListener"]("valueChange", function DocumentComponent_div_11_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayBindingSet"](ctx_r2.doc.filename, $event) || (ctx_r2.doc.filename = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("focus", function DocumentComponent_div_11_Template_app_field_focus_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onFocusFilenameCell(-1));
    })("blur", function DocumentComponent_div_11_Template_app_field_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onFilenameBlur($event));
    })("tabex", function DocumentComponent_div_11_Template_app_field_tabex_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellTab($event, null, -1));
    })("keydown.tab", function DocumentComponent_div_11_Template_app_field_keydown_tab_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellTabKey($event));
    })("keydown.shift.tab", function DocumentComponent_div_11_Template_app_field_keydown_shift_tab_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onCellShiftTabKey($event));
    })("return", function DocumentComponent_div_11_Template_app_field_return_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onFilenameReturn($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, DocumentComponent_div_11_td_6_Template, 3, 8, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("field", ctx_r2.fieldDocumentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtwoWayProperty"]("value", ctx_r2.doc.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("focused", ctx_r2.selected && ctx_r2.selectedCellIndex === -1)("disabled", ctx_r2.selected && !ctx_r2.documentLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r2.stepMetadataDefinitions);
  }
}
function DocumentComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("title", ctx_r2.doc.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r2.doc.filename, " ");
  }
}
function DocumentComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r2.getPageCountText());
  }
}
function DocumentComponent_div_15_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function DocumentComponent_div_15_div_2_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      const dropdown_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onClickMenuButton($event, dropdown_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
}
function DocumentComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 35, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("onHidden", function DocumentComponent_div_15_div_2_Template_div_onHidden_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.onHidden());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, DocumentComponent_div_15_div_2_button_2_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !(ctx_r2.multipleSelectedItems && !ctx_r2.canDeleteDocument));
  }
}
function DocumentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 33, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, DocumentComponent_div_15_div_2_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx_r2.isGridView || ctx_r2.canReplaceDocument || ctx_r2.canReplaceDocument);
  }
}
function DocumentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function DocumentComponent_div_16_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.save($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "app-save-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function DocumentComponent_div_16_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r2.cancel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "app-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](1, 2, "document-actions.save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](5, 4, "document-actions.cancel"));
  }
}
class DocumentComponent {
  get metaDataValidity() {
    return shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity;
  }
  constructor(capture, cdr, indexingService, userState, delay, translate, actionService, spinnerState, stickyService, captureUpdate, documentListStyleService, folderViewEvents, documentLockingService, userStateService, selectedItemsService, documentLastTouchedService, dragDropService, outcomesService, ngxSmartModalService, renderer, modalsUtilitiesService, document) {
    this.capture = capture;
    this.cdr = cdr;
    this.indexingService = indexingService;
    this.userState = userState;
    this.delay = delay;
    this.translate = translate;
    this.actionService = actionService;
    this.spinnerState = spinnerState;
    this.stickyService = stickyService;
    this.captureUpdate = captureUpdate;
    this.documentListStyleService = documentListStyleService;
    this.folderViewEvents = folderViewEvents;
    this.documentLockingService = documentLockingService;
    this.userStateService = userStateService;
    this.selectedItemsService = selectedItemsService;
    this.documentLastTouchedService = documentLastTouchedService;
    this.dragDropService = dragDropService;
    this.outcomesService = outcomesService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.renderer = renderer;
    this.modalsUtilitiesService = modalsUtilitiesService;
    this.document = document;
    this.stepMetadataDefinitions = [];
    this.stepMetadataDefinitionsFields = [];
    this.documentLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_26__.EventEmitter();
    this.FILENAME_CELL_INDEX = -1;
    this.DocumentGridPanel = _capture_models__WEBPACK_IMPORTED_MODULE_11__.IndexingPanels['DocumentGrid'];
    this.fieldsValues = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_8__.Dictionary('', '');
    this.documentString = _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_12__.CaptureConstants.document;
    this.outcomes = [];
    this.lockStatusChanged = ls => {
      if (!this.folderItem || !this.folderItem.workItem) return;
      if (ls.id == this.folderItem.workItem.id) {
        this.documentLocked = ls.locked && ls.lockedByUserId == this.userStateService.user.id && !ls.expired();
      }
      this.cdr.detectChanges();
    };
    this.getDocumentContextMenuActions = () => {
      const actions = [];
      if (!this.isGridView && this.oneItemSelected) {
        actions.push({
          name: this.translate.instant('document-actions.rename'),
          action: () => {
            this.editDocumentName();
          },
          disabled: !this.documentLocked
        });
      }
      if (this.canDeleteDocument) {
        actions.push({
          name: this.translate.instant('document-actions.delete'),
          action: () => {
            this.deleteSelectedItems();
          },
          disabled: !this.documentLocked && !this.multipleSelectedItems
        });
      }
      if (this.canReplaceDocument && this.oneItemSelected) {
        actions.push({
          name: this.translate.instant('document-actions.replace-document'),
          action: () => {
            this.replace();
          },
          disabled: !this.documentLocked
        });
      }
      if (this.canRescanDocument && this.oneItemSelected) {
        actions.push({
          name: this.translate.instant('document-actions.rescan-document'),
          action: () => {
            this.rescan();
          },
          disabled: !this.documentLocked
        });
      }
      if (this.canManageWorkitem && this.oneItemSelected) {
        actions.push({
          name: this.translate.instant('document-actions.properties'),
          action: () => {
            this.showWorkitemProperties();
          }
        });
      }
      this.outcomes.forEach(outcome => {
        if (outcome.enabled) {
          actions.push({
            name: outcome.label,
            action: () => {
              this.capture.executeOutcome(outcome);
            },
            disabled: !this.documentLocked || !this.isDocumentSelected
          });
        }
      });
      return actions;
    };
    this.onChangedSelectedItems = () => {
      this.oneItemSelected = this.selectedItemsService.isOneItemSelected();
      this.isDocumentSelected = this.selectedItemsService.isItemSelected(this.folderItem.workItem.id, this.folderItem.workItem.workflowStepId);
      this.multipleSelectedItems = this.selectedItemsService.areMultipleItemsSelected();
    };
    this.elementDragStarted = () => {
      if (this.isDocumentSelected) {
        this.dragStarted = true;
        if (!this.dragDropService.isItemDragged(this.folderItem.workItem.id) && this.multipleSelectedItems) {
          const dragData = {
            element: this.folderItem.workItem,
            elementParentId: this.parentFolderId,
            elementParentStepId: this.folderItem.workItem.workflowStepId,
            elementType: _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_12__.CaptureConstants.document,
            document: this.doc
          };
          this.dragDropService.pushDragData(dragData);
        }
      }
    };
    this.setGridCellsStyles = () => {
      const headerCells = this.document.getElementById('grid-header-row').children;
      const dataCells = this.document.getElementById('grid-data-row').children;
      for (let i = 0; i < headerCells.length - 1; i++) {
        const width = headerCells.item(i).getBoundingClientRect().width.toFixed(2);
        dataCells.item(i).style.width = width + 'px';
        headerCells.item(i).style.width = width + 'px';
      }
    };
    this.invokeAction = event => {
      if (!this.selected) return;
      if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.EditSelection) {
        if (!this.documentLocked) return;
        this.editDocumentName();
      } else if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.DeleteSelectedItem || event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.CtrlDeleteSelectedItem) {
        if (!this.documentLocked || !this.canDeleteDocument || this.modalsUtilitiesService.isAnyModalOpened()) return;
        this.deleteSelectedItems();
      }
    };
    this.editDocumentName = () => {
      this.editing = true;
      this.docName.nativeElement.removeAttribute('readonly');
      this.docName.nativeElement.removeAttribute('hidden');
      this.docName.nativeElement.value = '';
      this.delay.execute(() => {
        const strLength = this.docName.nativeElement.value.length;
        if (this.docName.nativeElement.setSelectionRange != undefined) {
          this.docName.nativeElement.setSelectionRange(strLength, strLength);
        }
        this.docName.nativeElement.value = this.doc.filename;
        this.docName.nativeElement.focus();
      }, 10);
      this.cdr.detectChanges();
    };
    this.getPageCountText = () => {
      if (!this.doc) return '';
      return _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_2__.Filename.getPageCountText(this.doc.pageCount, this.translate);
    };
    this.deleteSelectedItems = () => {
      this.outcomesService.confirmDeleteSelectedItems(this.confirmedDeleteSelectedItems);
    };
    this.confirmedDeleteSelectedItems = data => {
      this.capture.transitionSelectedItems(data.id);
    };
    this.showWorkitemProperties = () => {
      this.ngxSmartModalService.getModal('workitemProperties').open();
    };
    this.detectChanges = () => {
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    };
    this.isViewerLoaded = false;
    this.editing = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_27__.Subscription();
    this.dragStarted = false;
    this.dropEnabled = false;
    this.documentLocked = true;
  }
  ngOnInit() {
    this.fieldDocumentName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      required: false,
      label: ''
    });
    this.lastDocumentName = this.doc.filename;
    this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
    this.isGridView = this.documentListStyleService.getStyle() === _capture_models__WEBPACK_IMPORTED_MODULE_11__.DocumentListStyle.Grid;
    this.updateFieldsDisplayMode();
    this.subscriptions.add(this.indexingService.onInit.subscribe(() => this.isViewerLoaded = true));
    this.subscriptions.add(this.actionService.onActivateAction.subscribe(this.invokeAction));
    this.documentLoaded.emit();
    this.renderer.listen(this.docWrapper.nativeElement, 'contextmenu', event => {
      if (!this.isDocumentSelected) {
        this.selectDocument();
      }
      this.contextMenu.open(event, null, null, this.getDocumentContextMenuActions());
    });
    this.subscriptions.add(this.indexingService.onChangeCurrentFieldValue.subscribe(valueObj => {
      if (this.folderItem.workItem.id !== valueObj.updateFieldData.context.id) return;
      if (valueObj.panel !== _capture_models__WEBPACK_IMPORTED_MODULE_11__.IndexingPanels.LineItemIndexing) {
        this.setMetaDataValueAndLocation(valueObj);
      }
      if (this.isGridView && valueObj.panel === this.DocumentGridPanel && this.selected) {
        if (this.selectedCellIndex === this.FILENAME_CELL_INDEX) {
          this.onFilenameBlur(valueObj.updateFieldData.value);
        } else {
          const mdd = this.stepMetadataDefinitions[this.selectedCellIndex];
          if (mdd.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Expression) {
            this.moveToNextCell();
            return;
          }
          this.checkValues(valueObj.updateFieldData.value, mdd, this.selectedCellIndex);
          this.fieldsValues[mdd.name] = this.getFieldValue(mdd);
        }
        this.cdr.detectChanges();
        this.moveToNextCell();
      }
    }));
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => {
      this.documentLocked = true; // assume positive locking cause we screw up focus otherwise
      this.selected = doc && doc.id === this.doc.id;
      if (this.selected && this.isGridView) {
        const valuesWithValidLocation = [];
        this.stepMetadataDefinitions.forEach(field => {
          const fieldId = field.id;
          const md = this.getWorkItemMetadata(field.name);
          if (md && md.location && md.location.valid) {
            const location = md.location;
            const validity = md.validity;
            valuesWithValidLocation.push({
              fieldId,
              location,
              validity
            });
          }
        });
        this.captureUpdate.hasValuesWithValidLocation(valuesWithValidLocation);
        this.delay.execute(() => {
          if (!this.selectedCellIndex) {
            const lastTouchedField = this.getLastTouchedField();
            this.selectedCellIndex = lastTouchedField !== null ? lastTouchedField : -1;
          }
          this.updateCellUI(this.selectedCellIndex, true);
        }, 0);
      } else {
        this.selectedCellIndex = this.FILENAME_CELL_INDEX;
      }
    }));
    this.subscriptions.add(this.indexingService.onPointAndClickInitialized.subscribe(() => {
      if (this.isGridView && this.selected) {
        this.emitCurrentCellChange(this.getCurrentFieldName());
      }
    }));
    this.subscriptions.add(this.documentListStyleService.onChangeDocumentListStyle.subscribe(style => {
      this.isGridView = style === _capture_models__WEBPACK_IMPORTED_MODULE_11__.DocumentListStyle.Grid;
      if (this.isGridView) this.delay.execute(this.setGridCellsStyles, 0);
      this.updateFieldsValues();
      this.updateFieldsDisplayMode();
      this.cdr.detectChanges();
    }));
    this.subscriptions.add(this.folderViewEvents.onUpdateItem.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.filter)(a => a.workItem.id == this.folderItem.workItem.id)).subscribe(folderItem => {
      this.folderItem = folderItem;
      this.overallValidity = folderItem.workItem.getOverallValidity(this.getCurrentWorkflowStep(), this.userState);
    }));
    this.onChangedSelectedItems();
    this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
    this.subscriptions.add(this.dragDropService.onElementDragStarted.subscribe(this.elementDragStarted));
    this.subscriptions.add(this.dragDropService.onElementDragEnded.subscribe(() => {
      this.dragStarted = false;
    }));
    this.overallValidity = this.folderItem.workItem.getOverallValidity(this.getCurrentWorkflowStep(), this.userState);
    const ws = this.capture.getWorkflowStepById(this.folderItem.workItem.workflowStepId);
    if (ws) {
      if (ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_11__.Capabilities.deleteDocument)) {
        this.canDeleteDocument = true;
      }
      if (ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_11__.Capabilities.allowCaptureReimportPage)) {
        this.canReplaceDocument = true;
      }
      if (ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_11__.Capabilities.allowCaptureRescanPage)) {
        this.canRescanDocument = true;
      }
    }
    this.canManageWorkitem = this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.WORKITEM_MANAGE);
    this.subscriptions.add(this.captureUpdate.onWorkitemMetadataUpdated.subscribe(metadataCollection => {
      this.updateFieldsValues();
    }));
    this.updateFieldsValues();
    this.subscriptions.add(this.captureUpdate.onChangeOutcomeButtons.subscribe(outcomes => {
      this.outcomes = outcomes;
      this.detectChanges();
    }));
  }
  getLastTouchedField() {
    const lastTouchedFieldId = this.documentLastTouchedService.getLastTouchedField();
    const lastTouchedDocumentId = this.documentLastTouchedService.getLastTouchedDocumentId();
    if (lastTouchedFieldId && lastTouchedDocumentId && lastTouchedDocumentId === this.doc.id) {
      this.documentLastTouchedService.clearLastTouchedField();
      this.documentLastTouchedService.clearLastTouchedDocumentId();
      return this.stepMetadataDefinitions.findIndex(mdd => mdd.id === lastTouchedFieldId);
    }
    return null;
  }
  ngAfterViewInit() {
    this.setGridCellsStyles();
    this.focusLastTouchedField();
  }
  focusLastTouchedField() {
    if (!this.isGridView) return;
    const lastTouchedField = this.getLastTouchedField();
    if (lastTouchedField === null) return;
    this.delay.execute(() => {
      this.updateCellUI(lastTouchedField, false);
    }, 100);
  }
  updateFieldsValues() {
    if (!this.isGridView) return;
    this.stepMetadataDefinitions.forEach(mdd => {
      this.fieldsValues[mdd.name] = this.getFieldValue(mdd);
    });
  }
  updateFieldsDisplayMode() {
    this.stepMetadataDefinitionsFields.forEach(x => x.displayMode = this.isGridView ? shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDisplayMode.grid : shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDisplayMode.vertical);
  }
  getCurrentWorkflowStep() {
    return this.capture.getWorkflowStepById(this.folderItem.workItem.workflowStepId);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  selectDocument(event) {
    if (event) {
      const target = event.target;
      if (target && target.className === 'icomoon-more') return;
    }
    this.capture.selectDocument(this.doc, this.folderItem.workItem, this.parentFolderId, null, null, event?.ctrlKey || false);
  }
  get canDragDocuments() {
    const ws = this.capture.getWorkflowStepById(this.folderItem.workItem.workflowStepId);
    return !this.editing && ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_11__.Capabilities.allowDropDocument);
  }
  isFilenameFocused() {
    return this.selected && this.selectedCellIndex === this.FILENAME_CELL_INDEX;
  }
  edit(e) {
    e.stopPropagation();
    this.hide();
    this.editDocumentName();
  }
  onBlur() {
    setTimeout(() => {
      if (this.editing) {
        this.cancel();
      }
    }, 200);
  }
  onClick(e) {
    if (!this.editing) {
      this.docName.nativeElement.blur();
      this.actionService.activateAction(new _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.ActionEvent(_blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.SetFocusTreePanel));
    } else {
      e.stopPropagation();
    }
  }
  save(e) {
    e?.stopPropagation();
    this.editing = false;
    this.docName.nativeElement.setAttribute('readonly', 'readonly');
    this.docName.nativeElement.setAttribute('hidden', 'hidden');
    this.lastDocumentName = this.doc.filename;
    this.doc.filename = this.docName.nativeElement.value;
    this.capture.editDocumentName(this.doc.id, this.doc.fileType, this.docName.nativeElement.value, this.folderItem.workItem.id).then(newDocument => {
      this.doc = newDocument;
      this.lastDocumentName = this.doc.filename;
      if (this.doc.id === this.capture.getCurrentDocument().id) {
        this.capture.updateDocumentName(this.doc.filename);
      }
      this.actionService.activateAction(new _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.ActionEvent(_blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.SetFocusTreePanel));
    }).catch(err => this.cancel());
  }
  cancel(e) {
    e?.stopPropagation();
    this.editing = false;
    this.docName.nativeElement.setAttribute('readonly', 'readonly');
    this.docName.nativeElement.setAttribute('hidden', 'hidden');
    this.docName.nativeElement.value = this.doc.filename;
    this.docName.nativeElement.blur();
    this.doc.filename = this.lastDocumentName;
    this.cdr.detectChanges();
  }
  checkValidity(e) {
    if (!e) return;
    if (e.key === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.Escape) {
      this.cancel();
      this.docName.nativeElement.blur();
    } else if (e.key === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.Enter) {
      this.save();
      this.docName.nativeElement.blur();
    }
  }
  onDrop(dragData) {
    if (dragData instanceof DragEvent || !this.dropEnabled) return;
    if (dragData.elementType === _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_12__.CaptureConstants.page) this.dropPageIntoDocument(dragData);
    if (dragData.elementType === _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_12__.CaptureConstants.document) this.dropWorkItemsIntoDocument();
    this.dropEnabled = false;
  }
  dropPageIntoDocument(dragData) {
    this.onToggleSpinner(true);
    this.capture.handleDragDropPageIntoDocument(dragData, this.folderItem.workItem, this.doc).then(() => {
      this.onToggleSpinner(false);
    }).catch(() => {
      this.onToggleSpinner(false);
    });
  }
  dropWorkItemsIntoDocument() {
    this.onToggleSpinner(true);
    this.capture.handleDragDropWorkItemsIntoDocument(this.dragDropService.dragDataArray, this.folderItem.workItem, this.doc, this.parentFolderId).then(() => {
      this.dragDropService.clearDragData();
      this.onToggleSpinner(false);
    }).catch(() => {
      this.dragDropService.clearDragData();
      this.onToggleSpinner(false);
    });
  }
  onDragOver(dragData) {
    if (dragData && dragData.elementParentStepId === this.folderItem.workItem.workflowStepId && (this.isPageDragged(dragData) || this.isDocumentDragged(dragData))) {
      this.dropEnabled = true;
    }
  }
  isPageDragged(dragData) {
    return dragData.elementType === _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_12__.CaptureConstants.page && dragData.elementParentId !== this.doc.id;
  }
  isDocumentDragged(dragData) {
    return dragData.elementType === _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_12__.CaptureConstants.document && !this.dragDropService.isItemDragged(this.folderItem.workItem.id);
  }
  onDragLeave(dragData) {
    this.dropEnabled = false;
  }
  onToggleSpinner(state) {
    if (state) {
      this.translate.get('Document_Capture.UpdatingDocument').subscribe(value => this.spinnerState.show(value, document.getElementById('app-spinner-panel')));
    } else {
      this.spinnerState.hide();
    }
  }
  onMouseEnter(isMenu) {
    if (isMenu) {
      this.hoverOverMenu = true;
    } else {
      this.hoverOver = true;
    }
    this.cdr.detectChanges();
  }
  onMouseLeave(isMenu) {
    this.delay.execute(() => {
      if (isMenu) {
        this.hoverOverMenu = false;
      } else {
        this.hoverOver = false;
      }
      this.cdr.detectChanges();
    }, 10);
  }
  onClickMenuButton(event, dropdown) {
    if (!this.multipleSelectedItems || !this.isDocumentSelected) {
      this.capture.selectDocument(this.doc, this.folderItem.workItem, this.parentFolderId, null, null, event.ctrlKey);
    }
    this.contextMenu.open(event, null, null, this.getDocumentContextMenuActions());
  }
  replace() {
    this.hide();
    const result = this.capture.findFolder(this.parentFolderId).findDocument(this.doc.id);
    this.actionService.activateAction({
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.ReimportDocument,
      documentResult: result
    });
  }
  rescan() {
    this.hide();
    const result = this.capture.findFolder(this.parentFolderId).findDocument(this.doc.id);
    this.actionService.activateAction({
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.RescanDocument,
      documentResult: result
    });
  }
  hide() {
    this.hoverOver = false;
    this.hoverOverMenu = false;
  }
  onHidden() {
    this.showMenu = false;
  }
  getFieldValue(mdd) {
    const metadata = this.getWorkItemMetadata(mdd.name);
    if (!metadata || metadata.valueType !== shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValueType.String) {
      return '';
    }
    if (!mdd.stickyField) return metadata.value;
    if (metadata.value) {
      this.stickyService.setStickyField(mdd.name, metadata.value);
      return metadata.value;
    }
    const stickyValue = this.stickyService.getStickyField(mdd.name);
    if (!stickyValue) return '';
    this.capture.validateAndSaveIndexingValue(stickyValue, mdd, this.folderItem.workItem);
    return stickyValue;
  }
  getValidity(mdd) {
    const metadata = this.getWorkItemMetadata(mdd.name);
    if (metadata) {
      return metadata.validity || shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.unknown;
    }
  }
  onFocusCell(cellIndex, mdd) {
    this.updateCellUI(cellIndex, true);
    this.scrollToCell(cellIndex + 1);
  }
  onFocusFilenameCell(cellIndex) {
    this.updateCellUI(cellIndex, true);
    this.scrollToCell(0);
  }
  moveToNextCell() {
    if (this.selectedCellIndex === this.stepMetadataDefinitions.length - 1) {
      this.captureUpdate.selectNextDocument();
    } else {
      this.selectedCellIndex += 1;
      this.delay.execute(() => {
        this.updateCellUI(this.selectedCellIndex, true);
      }, 0);
    }
  }
  moveToPreviousCell() {
    if (this.selectedCellIndex > this.FILENAME_CELL_INDEX) {
      this.selectedCellIndex -= 1;
      this.updateCellUI(this.selectedCellIndex, true);
    }
  }
  emitCurrentCellChange(fieldLabelText) {
    this.indexingService.changeCurrentField(this.DocumentGridPanel, fieldLabelText);
  }
  onCellBlur(event, mdd) {
    if (event.context == null) return;
    if (event.mdd) mdd = event.mdd;
    this.capture.validateAndSaveIndexingValue(event.value, mdd, event.context);
    if (mdd.stickyField) {
      this.stickyService.setStickyField(mdd.name, event.value);
    }
  }
  onCellTab(event, mdd, index) {
    if (index === this.stepMetadataDefinitions.length - 1) {
      this.onCellBlur(event, mdd);
    }
  }
  onCellTabKey(event) {
    if (event) {
      event.preventDefault();
    }
    this.moveToNextCell();
  }
  onCellShiftTabKey(event) {
    if (event) {
      event.preventDefault();
    }
    this.moveToPreviousCell();
  }
  onFilenameBlur(value) {
    this.saveFilename(value);
  }
  checkValues(value, mdd, itemIndex) {
    if (!this.capture.getCurrentWorkItem()) {
      return;
    }
    if (!this.folderItem) {
      return;
    }
    const prevValue = this.getFieldValue(mdd);
    if (value !== prevValue) {
      this.capture.validateAndSaveIndexingValue(value, mdd, this.folderItem.workItem);
      if (mdd.stickyField) {
        this.stickyService.setStickyField(mdd.name, value);
      }
    }
  }
  getWorkItemMetadata(name) {
    return this.folderItem.workItem.getMetaData(name);
  }
  updateCellUI(cellIndex, zoomIntoField) {
    this.updateCellIndex(cellIndex);
    this.zoomIntoViewerField(cellIndex, zoomIntoField);
  }
  zoomIntoViewerField(cellIndex, zoomIntoField) {
    let zoomInFieldId = null;
    if (zoomIntoField && cellIndex > this.FILENAME_CELL_INDEX) {
      const md = this.stepMetadataDefinitions[cellIndex];
      const metaData = this.getWorkItemMetadata(md.name);
      if (metaData) {
        const location = metaData.location;
        if (location && location.valid) {
          zoomInFieldId = md.id;
        }
      }
    }
    this.captureUpdate.zoomIntoValue(zoomInFieldId);
    this.cdr.detectChanges();
  }
  updateCellIndex(cellIndex) {
    this.selectedCellIndex = cellIndex;
    this.emitCurrentCellChange(this.getCurrentFieldName());
    this.documentLastTouchedService.setLastTouchedField(cellIndex > this.FILENAME_CELL_INDEX ? this.stepMetadataDefinitions[cellIndex].id : null);
    this.documentLastTouchedService.setLastTouchedDocumentId(this.doc.id);
    this.cdr.detectChanges();
  }
  getCurrentFieldName() {
    return this.selectedCellIndex === this.FILENAME_CELL_INDEX ? this.translate.instant('folder.DocumentNameColumn') : this.stepMetadataDefinitions[this.selectedCellIndex]?.name;
  }
  onSaveLookupValues(event, index) {
    this.capture.updateMetadataValues(event.context, event.lookups);
    if (event.move) {
      if (event.forward) {
        this.moveToNextCell();
      } else {
        this.moveToPreviousCell();
      }
    }
    this.updateFieldsValues();
    this.cdr.detectChanges();
  }
  onCellReturn(value, mdd) {
    this.capture.validateAndSaveIndexingValue(value, mdd, this.folderItem.workItem);
  }
  onFilenameReturn(value) {
    this.saveFilename(value);
  }
  saveFilename(value) {
    if (value === this.doc.filename) return;
    this.capture.editDocumentName(this.doc.id, this.doc.fileType, value, this.folderItem.workItem.id).then(newDocument => {
      this.doc = newDocument;
      if (this.doc.id === this.capture.getCurrentDocument().id) {
        this.capture.updateDocumentName(this.doc.filename);
      }
    });
  }
  scrollToCell(cellIndex) {
    const cellField = this.getCellElement(cellIndex);
    if (!cellField) return;
    const workflowPanel = $('#workflow-panel');
    const cellElement = $(cellField.nativeElement);
    const scrollLeft = workflowPanel.scrollLeft();
    const panelWidth = workflowPanel.width();
    const elementOffsetLeft = cellElement.offset().left;
    const elementLeft = cellField.nativeElement.getBoundingClientRect().left;
    const elementRight = elementOffsetLeft + cellElement.width();
    const scrollOffset = 72;
    let cellOffset = elementRight - scrollOffset - panelWidth;
    const leftOffset = elementLeft - scrollOffset;
    if (cellIndex === 0) {
      workflowPanel.scrollLeft(0);
    } else if (leftOffset < 0 || cellOffset > 0) {
      if (cellIndex === this.fieldElements.length - 1) {
        const menuAreaWidth = 30;
        cellOffset += menuAreaWidth;
      }
      workflowPanel.scrollLeft(scrollLeft + cellOffset);
    }
  }
  getCellElement(cellIndex) {
    if (!this.fieldElements || cellIndex >= this.fieldElements.length) return null;
    const fields = this.fieldElements.toArray();
    if (!fields || fields.length === 0) return null;
    return fields[cellIndex];
  }
  onValueChanged(value, mdd) {
    this.fieldsValues[mdd.name] = value;
  }
  onDragStarted() {
    this.dragStarted = true;
    this.dragDropService.elementDragStarted();
  }
  onDragEnded() {
    this.dragStarted = false;
    this.dragDropService.elementDragEnded();
  }
  handleAction(action) {
    this.showMenu = false;
    action();
  }
  setMetaDataValueAndLocation(valueObj) {
    const mdd = this.userStateService.user.metaData.find(x => x.name == this.indexingService.getCurrentFieldName());
    if (mdd) {
      this.capture.getCurrentWorkItem().setMetaData(mdd.name, valueObj.updateFieldData.value, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.valid, valueObj.updateFieldData.location);
      this.capture.validateAndSaveIndexingValue(valueObj.updateFieldData.value, mdd, this.capture.getCurrentWorkItem(), true);
    }
  }
  static {
    this.ɵfac = function DocumentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_15__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_26__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_13__.IndexingPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_10__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_5__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_9__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.StickyFieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_14__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_17__.DocumentListStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_19__.FolderViewEventsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_18__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_10__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_21__.SelectedItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_document_last_touched_service__WEBPACK_IMPORTED_MODULE_16__.DocumentLastTouchedService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_drag_drop_service__WEBPACK_IMPORTED_MODULE_6__.DragDropService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_outcomes_service__WEBPACK_IMPORTED_MODULE_20__.OutcomesService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_30__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_26__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_modals_utilities_service__WEBPACK_IMPORTED_MODULE_7__.ModalsUtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_31__.DOCUMENT));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
      type: DocumentComponent,
      selectors: [["app-document"]],
      viewQuery: function DocumentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_26__.ElementRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.docName = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.docWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.fieldElements = _t);
        }
      },
      inputs: {
        folderItem: "folderItem",
        parentFolderId: "parentFolderId",
        doc: "doc",
        selected: "selected",
        stepMetadataDefinitions: "stepMetadataDefinitions",
        stepMetadataDefinitionsFields: "stepMetadataDefinitionsFields",
        contextMenu: "contextMenu"
      },
      outputs: {
        documentLoaded: "documentLoaded"
      },
      decls: 17,
      vars: 29,
      consts: [["docWrapper", ""], ["docName", ""], ["fieldCell", ""], ["wrapper", ""], ["dropdown", "bs-dropdown"], ["appDragNDrop", "", 1, "_document", "pl-0", "d-flex", "justify-content-evently", "align-items-center", 3, "click", "dragStarted", "dragEnd", "drop", "dragOver", "dragLeave", "mouseleave", "mouseenter", "ngClass", "isDraggable", "isDroppable", "element", "elementParentId", "sortableParentStepId", "elementType", "document"], [1, "document-gripper-space", 3, "ngClass"], [1, "validation-icon-color"], ["class", "validation-icon valid icon-checkmark", 4, "ngIf"], ["class", "validation-icon not-valid icon-warning", 4, "ngIf"], ["class", "validation-icon unknown icon-question", 4, "ngIf"], ["class", "validation-icon suspicious icon-warning", 4, "ngIf"], [1, "icon-file-empty", "file-icon", "ml-1"], [1, "doc-section", "col"], ["class", "doc-name text-truncate", "maxlength", "256", "readonly", "", "hidden", "", 3, "ngModel", "ngModelOptions", "keyup", "blur", "click", 4, "ngIf"], ["class", "document-grid-row", 4, "ngIf"], ["class", "doc-display text-truncate", 3, "title", 4, "ngIf"], ["class", "doc-pages", 4, "ngIf"], [1, "actions", 3, "ngClass"], ["class", "edit-delete", 4, "ngIf"], ["class", "save-cancel d-flex", 3, "title", 4, "ngIf"], [1, "validation-icon", "valid", "icon-checkmark"], [1, "validation-icon", "not-valid", "icon-warning"], [1, "validation-icon", "unknown", "icon-question"], [1, "validation-icon", "suspicious", "icon-warning"], ["maxlength", "256", "readonly", "", "hidden", "", 1, "doc-name", "text-truncate", 3, "keyup", "blur", "click", "ngModel", "ngModelOptions"], [1, "document-grid-row"], ["id", "grid-data-row"], [1, "document-grid-field-column", 3, "valueChange", "focus", "blur", "tabex", "keydown.tab", "keydown.shift.tab", "return", "field", "value", "focused", "disabled"], [4, "ngFor", "ngForOf"], [1, "document-grid-field-column", 3, "focus", "blurex", "tabex", "keydown.tab", "keydown.shift.tab", "saveLookupValues", "return", "valueChange", "context", "field", "value", "validity", "focused", "findMetaDataService", "metaDataCollection", "disabled"], [1, "doc-display", "text-truncate", 3, "title"], [1, "doc-pages"], [1, "edit-delete"], ["class", "btn-group", "dropdown", "", "container", "body", 3, "onHidden", 4, "ngIf"], ["dropdown", "", "container", "body", 1, "btn-group", 3, "onHidden"], ["id", "button-basic", "type", "button", "class", "button-icon", 3, "click", 4, "ngIf"], ["id", "button-basic", "type", "button", 1, "button-icon", 3, "click"], [1, "icomoon-more"], [1, "save-cancel", "d-flex", 3, "title"], [1, "button-icon", "edit", 3, "click"], [1, "button-icon", "remove", 3, "click", "title"]],
      template: function DocumentComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function DocumentComponent_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.selectDocument($event));
          })("dragStarted", function DocumentComponent_Template_div_dragStarted_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDragStarted());
          })("dragEnd", function DocumentComponent_Template_div_dragEnd_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDragEnded());
          })("drop", function DocumentComponent_Template_div_drop_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDrop($event));
          })("dragOver", function DocumentComponent_Template_div_dragOver_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDragOver($event));
          })("dragLeave", function DocumentComponent_Template_div_dragLeave_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDragLeave($event));
          })("mouseleave", function DocumentComponent_Template_div_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onMouseLeave());
          })("mouseenter", function DocumentComponent_Template_div_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onMouseEnter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "span", 6)(3, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](4, DocumentComponent_i_4_Template, 1, 0, "i", 8)(5, DocumentComponent_i_5_Template, 1, 0, "i", 9)(6, DocumentComponent_i_6_Template, 1, 0, "i", 10)(7, DocumentComponent_i_7_Template, 1, 0, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](9, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, DocumentComponent_input_10_Template, 2, 3, "input", 14)(11, DocumentComponent_div_11_Template, 7, 5, "div", 15)(12, DocumentComponent_div_12_Template, 2, 2, "div", 16)(13, DocumentComponent_div_13_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](15, DocumentComponent_div_15_Template, 3, 1, "div", 19)(16, DocumentComponent_div_16_Template, 7, 6, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction2"](22, _c5, ctx.dragStarted, ctx.dropEnabled))("isDraggable", ctx.canDragDocuments)("isDroppable", true)("element", ctx.folderItem.workItem)("elementParentId", ctx.parentFolderId)("sortableParentStepId", ctx.folderItem.workItem.workflowStepId)("elementType", ctx.documentString)("document", ctx.doc);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](25, _c6, ctx.canDragDocuments));
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.overallValidity === ctx.metaDataValidity.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.overallValidity === ctx.metaDataValidity.notValid);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.overallValidity === ctx.metaDataValidity.unknown);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.overallValidity === ctx.metaDataValidity.suspicious);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵclassProp"]("d-block", ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx.editing && !ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx.editing && !ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](27, _c7, ctx.isGridView));
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx.editing && (ctx.hoverOver || ctx.hoverOverMenu));
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.editing);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgModel, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_33__.BsDropdownDirective, _Bamba_Shared_src_components_icons_clear_icon_clear_icon_component__WEBPACK_IMPORTED_MODULE_22__.ClearIconComponent, _Bamba_Shared_src_components_icons_save_icon_save_icon_component__WEBPACK_IMPORTED_MODULE_23__.SaveIconComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_24__.FieldComponent, _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_25__.DragDropDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\napp-document {\n  display: block;\n}\napp-document .left-side {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 32px;\n  height: 100%;\n}\napp-document.selected ._document {\n  background: #edf7ff;\n  border: 2px solid #73a7d8;\n}\napp-document:hover ._document {\n  background: #edf7ff;\n}\napp-document ._document {\n  background: #fff;\n  border: 2px solid transparent;\n}\napp-document ._document.dragging {\n  border: 2px dotted #197b30;\n  opacity: 0.6;\n  transform: scale(0.9);\n}\napp-document ._document.droppable {\n  background: rgba(0, 145, 202, 0.15);\n  border: 2px dotted var(--brand-primary-color);\n}\napp-document ._document .grip {\n  height: 90%;\n  width: 10px;\n  cursor: -webkit-grab !important;\n  text-align: center;\n  margin-right: 8px;\n  flex-shrink: 0;\n}\napp-document ._document .grip::before {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #6e6e6e;\n}\napp-document ._document .file-icon::before {\n  content: \"\\e924\";\n  font-size: 1.1rem;\n}\napp-document ._document .doc-section {\n  font-size: 12px;\n  display: flex;\n  flex: 1 1 auto;\n  flex-wrap: nowrap;\n  padding-inline-start: 6px;\n  min-width: 0px;\n  width: auto;\n}\napp-document ._document .doc-pages {\n  color: darkgray;\n  padding-left: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n}\napp-document ._document .doc-display {\n  overflow: hidden;\n}\napp-document ._document .doc-name {\n  color: #151515;\n  font-size: 12px;\n  background: #fff;\n  outline: 0;\n  border: 1px solid var(--brand-primary-color);\n  padding: 0 0.3rem;\n  flex-basis: 0;\n  flex-grow: 1;\n  -ms-flex-positive: 1;\n  -webkit-box-flex: 1;\n  max-width: 100%;\n  height: 18px;\n}\napp-document ._document .doc-name[readonly] {\n  background: transparent;\n  border-color: transparent;\n  cursor: pointer;\n}\napp-document ._document .actions {\n  min-width: 36px;\n}\napp-document ._document .actions button {\n  font-size: 0.5rem;\n  color: #6e6e6e;\n}\napp-document ._document .actions .edit-delete {\n  display: flex;\n  align-items: center;\n}\napp-document ._document .valid {\n  color: #19a74b;\n  margin-top: 3px;\n}\napp-document ._document .not-valid {\n  color: #e10012;\n  margin-top: 1px;\n}\napp-document ._document .validation-icon {\n  margin-right: -18px;\n  font-size: 10px;\n}\napp-document ._document .suspicious {\n  margin-top: 3px;\n  color: #000000;\n  background-size: 55% 80%;\n  background: linear-gradient(#ffee0e, #ffee0e) no-repeat;\n  background-position: bottom;\n  background-size: 55% 80%;\n  background-position: 48% 150%;\n}\napp-document .document-grid-row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\napp-document .document-grid-row table {\n  table-layout: fixed;\n  width: 100%;\n}\napp-document .document-grid-field-column {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  flex: 1;\n  padding-right: 1px;\n  min-width: 200px;\n}\napp-document .document-grid-field-column .field-wrapper {\n  margin-top: 0px;\n  margin-bottom: -5px;\n}\napp-document .document-grid-field-column .field-wrapper i.validation-icon {\n  margin-right: 1px;\n  display: none !important;\n}\napp-document .document-grid-field-column .field-wrapper .lookup-button {\n  right: 20px;\n}\napp-document .document-grid-field-column .form-control {\n  border-radius: 0.1rem;\n}\napp-document .document-grid-field-column label {\n  background-color: #f1f3f3;\n  border: 1px solid #6e6e6e;\n  padding: 1px 3px;\n  width: 100%;\n  white-space: nowrap;\n}\napp-document .document-cell {\n  flex: 1 1;\n  display: flex;\n  min-width: 200px;\n}\napp-document .document-grid-menu {\n  min-width: 25px;\n  margin-left: -22px;\n}\napp-document .document-gripper-space {\n  min-width: 5px;\n}\n\n.rtl app-document {\n  margin-right: -25px;\n}\n.rtl app-document ._document .validation-icon {\n  margin-right: 15px;\n  margin-left: -18px;\n}\n.rtl app-document ._document .doc-pages {\n  padding-left: initial;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2RvY3VtZW50LWNhcHR1cmUvZG9jdW1lbnRzLWxpc3QvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0UsY0FBQTtBQWdQRjtBQTlPRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFnUEo7QUE1T0k7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBOE9OO0FBek9JO0VBQ0UsbUJBQUE7QUEyT047QUF2T0U7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0FBeU9KO0FBdk9JO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUF5T047QUF0T0k7RUFDRSxtQ0FBQTtFQUNBLDZDQUFBO0FBd09OO0FBck9JO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBdU9OO0FBck9NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF1T1I7QUFsT007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBb09SO0FBaE9JO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBa09OO0FBL05JO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWlPTjtBQTlOSTtFQUNFLGdCQUFBO0FBZ09OO0FBN05JO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUErTk47QUE3Tk07RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQStOUjtBQTNOSTtFQUNFLGVBQUE7QUE2Tk47QUE1Tk07RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUE4TlI7QUEzTk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUE2TlI7QUF6Tkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQTJOTjtBQXhOSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBME5OO0FBdk5JO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBeU5OO0FBdE5JO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHVEQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0FBd05OO0FBcE5FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFzTko7QUFwTkk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFzTk47QUFsTkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBb05KO0FBbE5JO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBb05OO0FBbE5NO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQW9OUjtBQWpOTTtFQUNFLFdBQUE7QUFtTlI7QUEvTUk7RUFDRSxxQkFBQTtBQWlOTjtBQTlNSTtFQUNFLHlCRDlHSTtFQytHSix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBZ05OO0FBNU1FO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQThNSjtBQTNNRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTZNSjtBQTFNRTtFQUNFLGNBQUE7QUE0TUo7O0FBdk1FO0VBQ0UsbUJBQUE7QUEwTUo7QUF2TU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBeU1SO0FBdE1NO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQXdNUiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuYXBwLWRvY3VtZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgLmxlZnQtc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICAuX2RvY3VtZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogI2VkZjdmZjtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzczYTdkODtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLl9kb2N1bWVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZGY3ZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuX2RvY3VtZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAmLmRyYWdnaW5nIHtcclxuICAgICAgYm9yZGVyOiAycHggZG90dGVkICMxOTdiMzA7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZHJvcHBhYmxlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNDUsIDIwMiwgMC4xNSk7XHJcbiAgICAgIGJvcmRlcjogMnB4IGRvdHRlZCAkdXBsYW5kLWJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaXAge1xyXG4gICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGUtaWNvbiB7XHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZTkyNCc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG9jLXNlY3Rpb24ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDZweDtcclxuICAgICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2MtcGFnZXMge1xyXG4gICAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2MtZGlzcGxheSB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmRvYy1uYW1lIHtcclxuICAgICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHVwbGFuZC1ibHVlO1xyXG4gICAgICBwYWRkaW5nOiAwIDAuM3JlbTtcclxuICAgICAgZmxleC1iYXNpczogMDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgICAmW3JlYWRvbmx5XSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICBjb2xvcjogIzZlNmU2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVkaXQtZGVsZXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmFsaWQge1xyXG4gICAgICBjb2xvcjogIzE5YTc0YjtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ub3QtdmFsaWQge1xyXG4gICAgICBjb2xvcjogI2UxMDAxMjtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52YWxpZGF0aW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xOHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1c3BpY2lvdXMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDU1JSA4MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZlZTBlLCAjZmZlZTBlKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1NSUgODAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0OCUgMTUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kb2N1bWVudC1ncmlkLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZG9jdW1lbnQtZ3JpZC1maWVsZC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcblxyXG4gICAgLmZpZWxkLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcblxyXG4gICAgICBpLnZhbGlkYXRpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9va3VwLWJ1dHRvbiB7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTZlNmU7XHJcbiAgICAgIHBhZGRpbmc6IDFweCAzcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRvY3VtZW50LWNlbGwge1xyXG4gICAgZmxleDogMSAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZG9jdW1lbnQtZ3JpZC1tZW51IHtcclxuICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjJweDtcclxuICB9XHJcblxyXG4gIC5kb2N1bWVudC1ncmlwcGVyLXNwYWNlIHtcclxuICAgIG1pbi13aWR0aDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJ0bCB7XHJcbiAgYXBwLWRvY3VtZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTI1cHg7XHJcblxyXG4gICAgLl9kb2N1bWVudCB7XHJcbiAgICAgIC52YWxpZGF0aW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kb2MtcGFnZXMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 88028:
/*!***********************************************************************************!*\
  !*** ./src/app/views/document-capture/documents-list/documents-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsListComponent: () => (/* binding */ DocumentsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/models/folder-item */ 48844);
/* harmony import */ var _blocks_models_workflow_folder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/models/workflow-folder */ 50860);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../capture-models */ 48004);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../capture-services/document-capture.service */ 70131);
/* harmony import */ var _capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../capture-services/document-list-style.service */ 20063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/directives/drag-drop.directive */ 24115);
/* harmony import */ var _blocks_directives_list_header_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../blocks/directives/list-header.directive */ 1717);
/* harmony import */ var _Bamba_Shared_src_components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/components/context-menu/context-menu.component */ 6475);
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./folder/folder.component */ 44538);































const _c0 = ["wrapper"];
const _c1 = ["scrollbar"];
const _c2 = ["workflowPanel"];
const _c3 = ["listHeader"];
const _c4 = () => ({});
function DocumentsListComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "img", 16);
  }
}
function DocumentsListComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "img", 17);
  }
}
function DocumentsListComponent_app_folder_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-folder", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("documentLoaded", function DocumentsListComponent_app_folder_18_Template_app_folder_documentLoaded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onDocumentLoaded());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const folder_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("folder", folder_r4)("workflow", ctx_r2.currentWorkflow)("options", ctx_r2.listHeaderDirectiveOpts)("contextMenu", ctx_r2.contextMenu);
  }
}
class DocumentsListComponent {
  get currentWorkflow() {
    return this._currentWorkflow;
  }
  constructor(capture, captureUpdate, hydraApi, translate, toastr, actionService, delay, documentListStyleService, renderer, userPreferencesService) {
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.toastr = toastr;
    this.actionService = actionService;
    this.delay = delay;
    this.documentListStyleService = documentListStyleService;
    this.renderer = renderer;
    this.userPreferencesService = userPreferencesService;
    this.DocumentListStylePreference = 'DocumentListStylePreferenceId';
    this.invokeAction = event => {
      if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.SetFocusTreePanel) {
        this.focusPanel();
        return;
      }
    };
    this.loadFolderViewCallback = folders => {
      if (this.lastWorkFlowSelection && this.lastWorkFlowSelection.id !== this._currentWorkflow.id) {
        this._currentWorkflow = this.lastWorkFlowSelection;
        this.loadFolders();
      } else {
        this.folders = folders;
        this.capture.setWorkflowFirstFolder(this.folders[0]);
        this.loadingFoldersInProgress = false;
        this.lastWorkFlowSelection = null;
      }
    };
    this.loadFolderViewFailed = () => {
      this.toastr.error(this.translate.instant('Common.LoadingDataError'));
    };
    this.selectNextDocument = () => {
      const items = new Array();
      this.getFlatList(items, this.folders);
      const index = this.getCurrentSelection(items);
      if (index === -1) {
        return;
      }
      for (let next = index + 1; next < items.length; next++) {
        if (items[next] instanceof _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__.FolderItem) {
          const folderItem = items[next];
          this.capture.selectDocument(folderItem.documents[0], folderItem.workItem, folderItem.parentId);
          return;
        }
      }
      for (let next = 0; next < index && next < items.length; next++) {
        if (items[next] instanceof _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__.FolderItem) {
          const folderItem = items[next];
          this.capture.selectDocument(folderItem.documents[0], folderItem.workItem, folderItem.parentId);
          return;
        }
      }
    };
    this.getPageSize = () => {
      return 12;
    };
    this.expandFolder = expand => {
      const currentFolder = this.capture.getSelectedFolder();
      if (currentFolder == null) {
        return;
      }
      if (expand) {
        this.captureUpdate.expandFolder(currentFolder);
      } else {
        this.captureUpdate.collapseFolder(currentFolder);
      }
    };
    this.moveSelection = offset => {
      const items = new Array();
      this.getFlatList(items, this.folders);
      const index = this.getCurrentSelection(items);
      if (index === -1) {
        return;
      }
      let newIndex = index + offset;
      if (newIndex >= items.length) {
        newIndex = items.length - 1;
      }
      if (newIndex < 0) {
        newIndex = 0;
      }
      if (newIndex > items.length) {
        return;
      }
      if (newIndex === index) {
        return;
      }
      if (items[newIndex] instanceof _blocks_models_workflow_folder__WEBPACK_IMPORTED_MODULE_4__.WorkflowFolder) {
        this.capture.selectFolder(items[newIndex]);
      } else if (items[newIndex] instanceof _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__.FolderItem) {
        const folderItem = items[newIndex];
        this.capture.selectDocument(folderItem.documents[0], folderItem.workItem, folderItem.parentId);
      }
    };
    this.getCurrentSelection = items => {
      const currentFolder = this.capture.getSelectedFolder();
      const currentDocument = this.capture.getCurrentDocument();
      for (let index = 0; index < items.length; index++) {
        if (currentFolder) {
          if (!(items[index] instanceof _blocks_models_workflow_folder__WEBPACK_IMPORTED_MODULE_4__.WorkflowFolder)) {
            continue;
          }
          if (currentFolder.id === items[index].id) {
            return index;
          }
        } else if (currentDocument) {
          if (!(items[index] instanceof _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_3__.FolderItem)) {
            continue;
          }
          if (currentDocument.id === items[index].documents[0].id) {
            return index;
          }
        }
      }
      return -1;
    };
    this.getFlatList = (items, folders) => {
      for (const folder of folders) {
        items.push(folder);
        if (folder.expanded) {
          if (folder.items) {
            for (const item of folder.items) {
              if (!item.documents) {
                continue;
              }
              items.push(item);
            }
          }
          if (folder.folders) {
            this.getFlatList(items, folder.folders);
          }
        }
      }
    };
    this.isDocumentVisible = element => {
      const panelElement = document.querySelector('#workflow-panel');
      return panelElement && element && element.offsetTop > panelElement.scrollTop && element.offsetTop + element.clientHeight < panelElement.scrollTop + panelElement.clientHeight;
    };
    this.onKeyDown = event => {
      if (event.ctrlKey || event.altKey || event.shiftKey) {
        return;
      }
      switch (event.key) {
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.ArrowUp:
          this.moveSelection(-1);
          break;
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.ArrowDown:
          this.moveSelection(1);
          break;
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.ArrowLeft:
          this.expandFolder(false);
          break;
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.ArrowRight:
          this.expandFolder(true);
          break;
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.PageUp:
          this.moveSelection(-1 * this.getPageSize());
          break;
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.PageDown:
          this.moveSelection(this.getPageSize());
          break;
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.Home:
          this.moveSelection(-1000000);
          break;
        case shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.End:
          this.moveSelection(1000000);
      }
    };
    this.getDocumentListStyle = () => {
      return this.documentListStyleService.getStyle();
    };
    this.changeDocumentListStyle = () => {
      document.activeElement?.blur();
      const newStyle = this.documentListStyleService.getStyle() === _capture_models__WEBPACK_IMPORTED_MODULE_7__.DocumentListStyle.Tree ? _capture_models__WEBPACK_IMPORTED_MODULE_7__.DocumentListStyle.Grid : _capture_models__WEBPACK_IMPORTED_MODULE_7__.DocumentListStyle.Tree;
      this.documentListStyleService.update(newStyle);
      this.userPreferencesService.setPreference(this.DocumentListStylePreference, newStyle);
      this.isGridView = this.documentListStyleService.getStyle() === _capture_models__WEBPACK_IMPORTED_MODULE_7__.DocumentListStyle.Grid;
      if (newStyle === _capture_models__WEBPACK_IMPORTED_MODULE_7__.DocumentListStyle.Grid) {
        this.listHeaderDirectiveOpts.disabled = false;
        this.listHeaderDirectiveOpts = {
          ...this.listHeaderDirectiveOpts
        };
      } else {
        this.listHeaderDirectiveOpts.disabled = true;
        this.listHeaderDirectiveOpts = {
          ...this.listHeaderDirectiveOpts
        };
      }
    };
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
  }
  ngOnInit() {
    _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.enter('DocumentsListComponent.ngOnInit');
    this.renderer.listen(this.wrapper.nativeElement, 'contextmenu', event => {
      event.preventDefault();
    });
    try {
      this.isGridView = this.documentListStyleService.getStyle() === _capture_models__WEBPACK_IMPORTED_MODULE_7__.DocumentListStyle.Grid;
      this.subscriptions.add(this.captureUpdate.onChangeWorkflow.subscribe(workflow => {
        const el = document.querySelector('#workflow-panel');
        if (el) {
          el.scrollTop = 0;
        }
        if (!this.loadingFoldersInProgress) {
          this._currentWorkflow = workflow;
          this.loadFolders();
        } else {
          this.lastWorkFlowSelection = workflow;
        }
      }));
      this.subscriptions.add(this.captureUpdate.onSelectNextDocument.subscribe(() => {
        this.selectNextDocument();
      }));
      this.subscriptions.add(this.captureUpdate.onScrollToDocument.subscribe(id => {
        const documentElementID = `#doc-${id}`;
        const documentElement = document.querySelector(documentElementID);
        this.scrollbar.update();
        this.delay.execute(() => {
          this.scrollbar.scrollToElement(documentElementID, -100);
        }, 50);
      }));
      this.subscriptions.add(this.actionService.onActivateAction.subscribe(this.invokeAction));
      this.subscriptions.add(this.captureUpdate.onChangeFolder.subscribe(folder => {
        if (folder) {
          this.focusPanel();
        }
      }));
      this.subscriptions.add(this.scrollbar.psScrollDown.subscribe(() => this.contextMenu.close()));
      this.subscriptions.add(this.scrollbar.psScrollUp.subscribe(() => this.contextMenu.close()));
      this.actionService.activateAction(new _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.ActionEvent(_blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.SetFocusTreePanel));
    } catch (e) {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('DocumentsListComponent.ngOnInit', e);
    }
  }
  ngAfterViewInit() {
    this.listHeaderDirectiveOpts = {
      scrollbar: this.scrollbar,
      listWrapper: this.panel,
      disabled: this.documentListStyleService.getStyle() === _capture_models__WEBPACK_IMPORTED_MODULE_7__.DocumentListStyle.Tree
    };
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  onRenderContextMenu(menu) {
    this.contextMenu = menu;
  }
  loadFolders() {
    if (this._currentWorkflow) {
      this.folders = null;
      this.loadingFoldersInProgress = true;
      this.hydraApi.getWorkflowFolders(this._currentWorkflow.id, this.loadFolderViewCallback, this.loadFolderViewFailed);
    }
  }
  onScroll(position) {
    this.scrollbar.scrollToY(position, 100);
  }
  getViewIconTextId() {
    return this.isGridView ? 'Document_Capture.ChangeToDocumentGridView' : 'Document_Capture.ChangeToDocumentTreeView';
  }
  focusPanel() {
    this.delay.execute(() => {
      this.panel.nativeElement.focus();
    }, 50);
  }
  trackFolderId(index, item) {
    return item.id;
  }
  onDocumentLoaded() {
    this.scrollbar.update();
  }
  static {
    this.ɵfac = function DocumentsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_9__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_8__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_6__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_5__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_10__.DocumentListStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: DocumentsListComponent,
      selectors: [["app-documents-list"]],
      viewQuery: function DocumentsListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c3, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.scrollbar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.listHeader = _t.first);
        }
      },
      decls: 20,
      vars: 15,
      consts: [["wrapper", ""], ["scrollbar", "ngxPerfectScrollbar", "workflowPanel", ""], [1, "documents-list", "h-100", "d-flex", "flex-column"], [1, "pannel-header"], [1, "pannel-title"], [1, "btn-group"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "button-icon", 3, "click", "title"], [1, "d-flex", "justify-content-right", "align-items-center"], ["src", "assets/icons/tree-view.svg", "width", "18", "alt", "", 4, "ngIf"], ["src", "assets/icons/grid-view.svg", "width", "18", "alt", "", 4, "ngIf"], [1, "col", "p-0"], ["id", "workflow-panel", "fxFlex", "auto", "appDragNDrop", "", "tabindex", "0", 1, "workflow-panel", "scrollable-section", "pb-2", 3, "scrollToTop", "scrollToBottom", "keydown", "perfectScrollbar", "autoScroll", "wrapper", "scrollableWrapper"], [1, "list-wrapper"], ["class", "d-block", "appListHeader", "", 3, "folder", "workflow", "options", "contextMenu", "documentLoaded", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "rendered"], ["src", "assets/icons/tree-view.svg", "width", "18", "alt", ""], ["src", "assets/icons/grid-view.svg", "width", "18", "alt", ""], ["appListHeader", "", 1, "d-block", 3, "documentLoaded", "folder", "workflow", "options", "contextMenu"]],
      template: function DocumentsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "section", 2, 0)(2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DocumentsListComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.changeDocumentListStyle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, DocumentsListComponent_img_11_Template, 1, 0, "img", 9)(12, DocumentsListComponent_img_12_Template, 1, 0, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 11)(14, "div", 12, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("scrollToTop", function DocumentsListComponent_Template_div_scrollToTop_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onScroll($event));
          })("scrollToBottom", function DocumentsListComponent_Template_div_scrollToBottom_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onScroll($event));
          })("keydown", function DocumentsListComponent_Template_div_keydown_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onKeyDown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, DocumentsListComponent_app_folder_18_Template, 1, 4, "app-folder", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "app-context-menu", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("rendered", function DocumentsListComponent_Template_app_context_menu_rendered_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onRenderContextMenu($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const wrapper_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
          const workflowPanel_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 10, "Exceptions_Queue.Documents"));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](9, 12, ctx.getViewIconTextId()));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](14, _c4))("autoScroll", true)("wrapper", wrapper_r5)("scrollableWrapper", workflowPanel_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.folders)("ngForTrackBy", ctx.trackFolderId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarDirective, _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_11__.DragDropDirective, _blocks_directives_list_header_directive__WEBPACK_IMPORTED_MODULE_12__.ListHeaderDirective, _Bamba_Shared_src_components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_13__.ContextMenuComponent, _folder_folder_component__WEBPACK_IMPORTED_MODULE_14__.FolderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
      styles: [".documents-list {\n  background: #ffffff;\n  padding: 0px !important;\n}\n.documents-list .workflow-panel:focus {\n  outline: none;\n}\n.documents-list .list-wrapper {\n  width: fit-content;\n  min-width: 100%;\n}\n.documents-list .folder-name,\n.documents-list .file {\n  color: #151515;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS9kb2N1bWVudHMtbGlzdC9kb2N1bWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFOztFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnRzLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIC53b3JrZmxvdy1wYW5lbDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxpc3Qtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZm9sZGVyLW5hbWUsXHJcbiAgLmZpbGUge1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 44538:
/*!**********************************************************************************!*\
  !*** ./src/app/views/document-capture/documents-list/folder/folder.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderComponent: () => (/* binding */ FolderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/core/fileName */ 28016);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_outcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/models/outcome */ 66400);
/* harmony import */ var _blocks_models_workflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../blocks/models/workflow */ 45195);
/* harmony import */ var _blocks_models_workflow_folder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../blocks/models/workflow-folder */ 50860);
/* harmony import */ var _blocks_models_workflow_step__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../blocks/models/workflow-step */ 1662);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_drag_drop_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../blocks/services/drag-drop.service */ 46579);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_modals_utilities_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../blocks/services/modals-utilities.service */ 6906);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../capture-models */ 48004);
/* harmony import */ var _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../capture-models/capture-constants */ 61502);
/* harmony import */ var _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../capture-models/sorting */ 89808);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../capture-services */ 97954);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../capture-services/document-list-style.service */ 20063);
/* harmony import */ var _capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../capture-services/folder-view-events.service */ 72297);
/* harmony import */ var _capture_services_outcomes_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../capture-services/outcomes.service */ 93176);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../capture-services/selected-items.service */ 85641);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 32346);
/* harmony import */ var _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../blocks/directives/drag-drop.directive */ 24115);
/* harmony import */ var _work_item_work_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../work-item/work-item.component */ 93508);
/* harmony import */ var _Bamba_Shared_src_pipes_array_sort_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/pipes/array-sort.pipe */ 8328);
















































const _c0 = ["folderEl"];
const _c1 = ["wrapper"];
const _c2 = ["menu"];
const _c3 = (a0, a1) => ({
  selected: a0,
  droppable: a1
});
const _c4 = (a0, a1) => ({
  expanded: a0,
  "p-0": a1
});
const _c5 = (a0, a1, a2, a3) => ({
  "icon-folder-open": a0,
  "icon-folder": a1,
  "folder-icon-root": a2,
  "folder-icon": a3,
  "mr-1": true
});
const _c6 = a0 => ({
  "grid-header-drag-adjustment": a0
});
function FolderComponent_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "i", 19);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction4"](1, _c5, ctx_r1.isExpanded, !ctx_r1.isExpanded, ctx_r1.isWorkflowRoot, !ctx_r1.isWorkflowRoot));
  }
}
function FolderComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx_r1.getDocumentCountText());
  }
}
function FolderComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 23, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("onHidden", function FolderComponent_div_11_div_2_Template_div_onHidden_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r1.onHidden());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function FolderComponent_div_11_div_2_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r3);
      const dropdown_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r1.onClickMenuButton($event, dropdown_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
}
function FolderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 21, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, FolderComponent_div_11_div_2_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r1.canDeleteDocuments || ctx_r1.canImportNew && !ctx_r1.isWorkflowRoot || ctx_r1.canScanNew && !ctx_r1.isWorkflowRoot);
  }
}
function FolderComponent_div_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵclassMapInterpolate1"]("k-icon ", ctx_r1.getSortingIconClass(), "");
  }
}
function FolderComponent_div_12_th_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵclassMapInterpolate1"]("k-icon ", ctx_r1.getSortingIconClass(), "");
  }
}
function FolderComponent_div_12_th_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "th")(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function FolderComponent_div_12_th_11_Template_div_click_1_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r6).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r1.onGridColumnClicked(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, FolderComponent_div_12_th_11_span_3_Template, 1, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metadata_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("title", metadata_r8.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", metadata_r8.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r1.showSortingIcon(i_r7));
  }
}
function FolderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "table")(4, "tr", 29)(5, "th")(6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function FolderComponent_div_12_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r1.onGridColumnClicked(-1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](10, FolderComponent_div_12_span_10_Template, 1, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, FolderComponent_div_12_th_11_Template, 4, 3, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](9, _c6, !ctx_r1.canDragDocuments));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](7, 5, "folder.DocumentNameColumn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](9, 7, "folder.DocumentNameColumn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r1.showSortingIcon(-1));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx_r1.getColumns());
  }
}
function FolderComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](3, 1, "folder.loading"), " ");
  }
}
function FolderComponent_ul_15_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "li")(1, "div", 37)(2, "app-work-item", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("documentLoaded", function FolderComponent_ul_15_li_1_Template_app_work_item_documentLoaded_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r1.onDocumentLoaded());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const folderItem_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("folderItem", folderItem_r10)("parentFolderId", ctx_r1.folder.id)("stepMetadataDefinitions", ctx_r1.stepMetadataDefinitions)("stepMetadataDefinitionsFields", ctx_r1.stepMetadataDefinitionsFields)("contextMenu", ctx_r1.contextMenu);
  }
}
function FolderComponent_ul_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, FolderComponent_ul_15_li_1_Template, 3, 5, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵclassProp"]("expanded", ctx_r1.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind3"](2, 4, ctx_r1.folder.items, ctx_r1.field, ctx_r1.dir))("ngForTrackBy", ctx_r1.trackWorkItemId);
  }
}
function FolderComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "li")(1, "app-folder", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("openParentFolder", function FolderComponent_li_17_Template_app_folder_openParentFolder_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r1.onAddNewFolder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const childFolder_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("folder", childFolder_r12)("workflow", ctx_r1.workflow)("isBatch", ctx_r1.isWorkflowRoot)("stepMetadataDefinitions", ctx_r1.stepMetadataDefinitions)("stepMetadataDefinitionsFields", ctx_r1.stepMetadataDefinitionsFields)("contextMenu", ctx_r1.contextMenu);
  }
}
class FolderComponent {
  constructor(hydraApi, folderView, capture, captureUpdate, translate, spinnerState, actionService, delay, userStateService, documentListStyleService, toastr, selectedItemsService, dragDropService, outcomesService, renderer, modalsUtilitiesService) {
    this.hydraApi = hydraApi;
    this.folderView = folderView;
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.translate = translate;
    this.spinnerState = spinnerState;
    this.actionService = actionService;
    this.delay = delay;
    this.userStateService = userStateService;
    this.documentListStyleService = documentListStyleService;
    this.toastr = toastr;
    this.selectedItemsService = selectedItemsService;
    this.dragDropService = dragDropService;
    this.outcomesService = outcomesService;
    this.renderer = renderer;
    this.modalsUtilitiesService = modalsUtilitiesService;
    this.openParentFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_26__.EventEmitter();
    this.toggleSpinner = new _angular_core__WEBPACK_IMPORTED_MODULE_26__.EventEmitter();
    this.documentLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_26__.EventEmitter();
    this.stepMetadataDefinitions = [];
    this.stepMetadataDefinitionsFields = [];
    this.sortingConfig = new _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.DocumentsGridSortingConfig();
    this.folderString = _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_15__.CaptureConstants.folder;
    this.field = 'documents[0].filename';
    this.dir = 'asc';
    this.getColumns = () => {
      const columns = [];
      this.stepMetadataDefinitions.forEach(x => {
        if (x.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.CascadingOptions) {
          x.dataSource.dataSet.forEach(o => {
            const optionMDD = this.userStateService.findMetaDataById(o.metaDataId);
            columns.push(optionMDD);
          });
          return;
        }
        columns.push(x);
      });
      return columns;
    };
    this.getFolderItem = id => {
      const item = this.folder.items.find((i, index) => {
        return i.workItem.id === id;
      });
      return item;
    };
    this.onChangedSelectedItems = () => {
      this.isFolderSelected = this.selectedItemsService.isItemSelected(this.folder.id, this.folder.workflowStepId);
      this.multipleItemsSelected = this.selectedItemsService.areMultipleItemsSelected();
    };
    this.invokeAction = event => {
      if (!this.isFolderSelected) return;
      if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.DeleteSelectedItem || event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.CtrlDeleteSelectedItem) {
        if (!this.canDeleteDocuments || this.modalsUtilitiesService.isAnyModalOpened()) return;
        this.deleteSelectedItems();
        return;
      }
    };
    this.updateFolderItem = folderItem => {
      if (this.folder.id === folderItem.parentId) {
        if (this.folder.items !== null && this.folder.items.length) {
          const item = this.getFolderItem(folderItem.workItem.id);
          if (item) {
            for (let i = 0; i < this.folder.items.length; i++) {
              if (this.folder.items[i].workItem.id === folderItem.workItem.id) {
                this.folder.items[i] = folderItem;
                this.folderView.sortGridColumnData(this.sortingConfig);
                this.expandAndSelectDocument(folderItem);
                break;
              }
            }
          } else {
            this.addFolderItem(folderItem);
          }
        } else {
          this.folder.items = [];
          this.addFolderItem(folderItem);
        }
      } else {
        if (this.folder.items) {
          this.folder.items = this.folder.items.filter(f => {
            return f.workItem.id !== folderItem.workItem.id;
          });
          if (!this.existsInSameWorkflowStep(folderItem)) {
            const currentWorkItem = this.capture.getCurrentWorkItem();
            if (currentWorkItem && currentWorkItem.id == folderItem.workItem.id) {
              this.capture.unselectDocument(folderItem.documents[0].id);
            }
          }
        }
      }
    };
    this.existsInSameWorkflowStep = folderItem => {
      return this.capture.getCurrentStepId() == folderItem.workItem.workflowStepId;
    };
    this.expandFolder = (folder, expand) => {
      if (folder.id != this.folder.id) return;
      if (this.isExpanded == expand) return;
      this.toggleExpand();
    };
    this.loadStepMetadataDefinitions = workflowStep => {
      const interactiveWorkflowStep = workflowStep;
      for (const id of interactiveWorkflowStep.metaDataIds) {
        const metadataDefinition = this.userStateService.findMetaDataById(id);
        if (metadataDefinition == null) {
          continue;
        }
        if (metadataDefinition.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.LineItems) {
          continue;
        }
        this.stepMetadataDefinitions.push(metadataDefinition);
      }
      this.initializeStepMetaDataDefinitionsFields();
    };
    this.sortDocuments = sortingConfig => {
      if (this.sortingConfig.index === undefined || this.sortingConfig.type === _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.None || this.sortingConfig.workflowStepId !== this.folder.workflowStepId || !this.folder.items) {
        return;
      }
      this.folder.items.sort((first, second) => {
        let firstValue, secondValue;
        if (sortingConfig.index === -1) {
          firstValue = first.documents[0].filename;
          secondValue = second.documents[0].filename;
        } else if (sortingConfig.index >= 0) {
          firstValue = this.getMetaDataValue(first.workItem, sortingConfig.index);
          secondValue = this.getMetaDataValue(second.workItem, sortingConfig.index);
        }
        return this.getCompareResult(sortingConfig.index, firstValue, secondValue) * Number(sortingConfig.type);
      });
    };
    this.getMetaDataValue = (workItem, metaDataIndex) => {
      return workItem.getMetaData(this.getColumns()[metaDataIndex].name).value.toString();
    };
    this.getCompareResult = (metaDataIndex, firstValue, secondValue) => {
      const metaDataType = metaDataIndex === -1 ? shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text : this.getColumns()[metaDataIndex].type;
      if (metaDataType === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Integer || metaDataType === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Decimal) {
        return Number(firstValue) - Number(secondValue);
      }
      if (metaDataType === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Date) {
        return Date.parse(firstValue) <= Date.parse(secondValue) ? -1 : 1;
      }
      return firstValue.localeCompare(secondValue);
    };
    this.confirmedDeleteSelectedItems = data => {
      this.capture.transitionSelectedItems(data.id);
    };
    this.isExpanded = false;
    this.isWorkflowRoot = false;
    this.childrenWorkItems = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_27__.Subscription();
    this.dropEnabled = false;
  }
  changeSort(field, dir) {
    this.field = field;
    this.dir = dir;
  }
  ngOnInit() {
    _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__.Log.enter('FolderComponent.ngOnInit');
    // set default sorting
    this.defaultSort();
    this.renderer.listen(this.folderEl.nativeElement, 'contextmenu', event => {
      this.contextMenu.open(event, null, null, this.getFolderContextMenuActions());
    });
    try {
      this.isWorkflowRoot = this.folder.workflowStepId === this.folder.parentID;
      this.isGridView = this.documentListStyleService.getStyle() === _capture_models__WEBPACK_IMPORTED_MODULE_14__.DocumentListStyle.Grid;
      this.capture.addToFolders(this.folder);
      if (this.isWorkflowRoot && (this.folder.folders.length || this.folder.itemCount > 0)) {
        this.isExpanded = true;
        this.folder.expanded = true;
        this.loadFolderItems();
      }
      const ws = this.capture.getWorkflowStepById(this.folder.workflowStepId);
      if (ws) {
        if (ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.deleteDocument)) {
          this.discardOutcome = {
            id: _blocks_models_outcome__WEBPACK_IMPORTED_MODULE_4__.Outcome.SendToDoneId,
            outcomeType: '',
            text: this.translate.instant('Scanning.Discard'),
            label: this.translate.instant('Scanning.Discard'),
            enabled: true,
            requiresConfirmation: true,
            requiresValidMetaData: false,
            nextId: ''
          };
          this.canDeleteDocuments = true;
        }
        this.canImportNew = ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowCaptureImport);
        this.canScanNew = ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowCaptureScan);
        this.canDragDocuments = ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowDropDocument);
        if (this.isWorkflowRoot) {
          this.loadStepMetadataDefinitions(ws);
        }
      }
      this.subscriptions.add(this.captureUpdate.onExpandFolder.subscribe(f => this.expandFolder(f, true)));
      this.subscriptions.add(this.captureUpdate.onCollapseFolder.subscribe(f => this.expandFolder(f, false)));
      this.subscriptions.add(this.actionService.onActivateAction.subscribe(this.invokeAction));
      this.subscriptions.add(this.folderView.onAddFolder.subscribe(folderView => {
        if (folderView.parentId === this.folder.id) {
          const newFolder = new _blocks_models_workflow_folder__WEBPACK_IMPORTED_MODULE_6__.WorkflowFolder(folderView.id, folderView.parentId, this.folder, folderView.workflowStepId, folderView.name, folderView.itemCount, [], null);
          this.folder.folders.push(newFolder);
        }
      }));
      this.subscriptions.add(this.folderView.onDeleteFolder.subscribe(folderView => {
        if (folderView.parentId === this.folder.id) {
          this.folder.folders = this.folder.folders.filter(folder => {
            return folder.id !== folderView.id;
          });
        }
      }));
      this.subscriptions.add(this.folderView.onUpdateFolder.subscribe(folderView => {
        if (folderView.id === this.folder.id) {
          this.folder.itemCount = folderView.itemCount;
        }
      }));
      this.subscriptions.add(this.folderView.onAddItem.subscribe(folderItem => {
        if (this.folder.id === folderItem.parentId) {
          if (this.capture.hasChangedByCurrentUser(folderItem.workItem, false)) {
            this.openParentFolder.emit();
          }
          this.addFolderItem(folderItem);
        }
      }));
      this.subscriptions.add(this.folderView.onUpdateItem.subscribe(folderItem => this.updateFolderItem(folderItem)));
      this.subscriptions.add(this.folderView.onDeleteItem.subscribe(folderItem => {
        if (this.folder.id === folderItem.parentId && this.folder.items) {
          this.capture.unselectDocument(folderItem.documents[0].id);
          this.folder.items = this.folder.items.filter(f => {
            return f.workItem.id !== folderItem.workItem.id;
          });
        }
      }));
      this.documentListStyleService.onChangeDocumentListStyle.subscribe(style => {
        this.isGridView = style === _capture_models__WEBPACK_IMPORTED_MODULE_14__.DocumentListStyle.Grid;
      });
      this.subscriptions.add(this.folderView.onSortGridColumnData.subscribe(sortingConfig => {
        if (sortingConfig.workflowStepId !== this.folder.workflowStepId) return;
        this.sortingConfig = sortingConfig;
        this.sortDocuments(this.sortingConfig);
      }));
      this.onChangedSelectedItems();
      this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
    } catch (e) {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__.Log.error('FolderComponent.ngOnInit', e);
    }
    this.subscriptions.add(this.captureUpdate.onChangeOutcomeButtons.subscribe(outcomes => {
      this.outcomes = outcomes;
    }));
  }
  defaultSort() {
    const workflowStep = this.workflow.workflowSteps.find(a => a.id == this.folder.workflowStepId);
    if (workflowStep) {
      const interactivestep = new _blocks_models_workflow_step__WEBPACK_IMPORTED_MODULE_7__.InteractiveWorkflowStep(workflowStep);
      this.dir = interactivestep.sortDirection == 0 ? 'asc' : 'desc';
      if (interactivestep.sortBy == _blocks_models_workflow_step__WEBPACK_IMPORTED_MODULE_7__.WorkflowStepSortType.DateCreated) {
        this.field = 'documents[0].fileTimeCreated';
      } else {
        this.field = 'documents[0].filename';
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.capture.removeFolder(this.folder.id);
  }
  getFolderContextMenuActions() {
    this.selectFolder();
    const actions = [];
    if (this.canDeleteDocuments) {
      let actionName;
      if (this.isFolderSelected && this.multipleItemsSelected) {
        actionName = this.translate.instant('document-actions.delete');
      } else {
        actionName = this.translate.instant('folder.DeleteDocuments');
      }
      actions.push({
        name: actionName,
        action: () => {
          this.deleteSelectedItems();
        },
        disabled: !this.folder.folderHasItems()
      });
    }
    if (this.canImportNew && !this.isWorkflowRoot && !(this.isFolderSelected && this.multipleItemsSelected)) {
      actions.push({
        name: this.translate.instant('folder.ImportNew'),
        action: () => {
          this.addDocument();
        }
      });
    }
    if (this.canScanNew && !this.isWorkflowRoot && !(this.isFolderSelected && this.multipleItemsSelected)) {
      actions.push({
        name: this.translate.instant('folder.ScanNew'),
        action: () => {
          this.scanDocument();
        }
      });
    }
    // sort actions
    if (!(this.isFolderSelected && this.multipleItemsSelected)) {
      actions.push({
        name: this.translate.instant('folder.SortByFileNameAsc'),
        action: () => {
          this.changeSort('documents[0].filename', 'asc');
        },
        disabled: !this.isFolderSelected || !this.folder.folderHasItems()
      }, {
        name: this.translate.instant('folder.SortByFileNameDesc'),
        action: () => {
          this.changeSort('documents[0].filename', 'desc');
        },
        disabled: !this.isFolderSelected || !this.folder.folderHasItems()
      }, {
        name: this.translate.instant('folder.SortByDateAsc'),
        action: () => {
          this.changeSort('documents[0].fileTimeCreated', 'asc');
        },
        disabled: !this.isFolderSelected || !this.folder.folderHasItems()
      }, {
        name: this.translate.instant('folder.SortByDateDesc'),
        action: () => {
          this.changeSort('documents[0].fileTimeCreated', 'desc');
        },
        disabled: !this.isFolderSelected || !this.folder.folderHasItems()
      });
    }
    this.outcomes.forEach(outcome => {
      if (outcome.enabled) {
        actions.push({
          name: outcome.label,
          action: () => {
            this.capture.executeOutcome(outcome);
          },
          disabled: !this.isFolderSelected || !this.folder.folderHasItems()
        });
      }
    });
    return actions;
  }
  addFolderItem(folderItem) {
    if (!this.folder || !this.folder.items) return;
    this.folder.items.push(folderItem);
    this.folderView.sortGridColumnData(this.sortingConfig);
    this.delay.execute(() => {
      this.captureUpdate.scrollToDocument(folderItem.documents[0].id);
    }, 500);
    this.expandAndSelectDocument(folderItem);
  }
  expandAndSelectDocument(folderItem) {
    if (this.capture.hasChangedByCurrentUser(folderItem.workItem, true)) {
      if (!this.isExpanded) {
        this.toggleExpand();
      }
      this.capture.selectDocument(folderItem.documents[0], folderItem.workItem, this.folder.id);
      this.openParentFolder.emit();
    }
  }
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    this.folder.expanded = this.isExpanded;
    if (this.isExpanded && !this.folder.items || this.isExpanded && this.folder.itemCount !== this.folder.items.length) {
      this.loadFolderItems();
    }
  }
  loadFolderItems() {
    this.folder.items = [];
    this.loadingItems = true;
    this.hydraApi.getWorkflowFolderItems(this.folder.id, this.workflow.id, items => {
      this.folder.items = items;
      this.onDocumentLoaded();
      this.loadingItems = false;
      this.folderView.sortGridColumnData(this.sortingConfig);
    }, error => {
      this.toastr.error(this.translate.instant('errors.failed-get-workflow-folder-items'));
      this.loadingItems = false;
    });
  }
  onAddNewFolder() {
    if (!this.isExpanded) {
      this.toggleExpand();
    }
    this.openParentFolder.emit();
  }
  selectFolder(event = null) {
    if (event) {
      const target = event.target;
      if (target && target.className === 'icomoon-more') return;
    }
    this.capture.selectFolder(this.folder, event?.ctrlKey || false);
    this.expandFolder(this.folder, true);
  }
  onDragOver(dragData) {
    const ws = this.capture.getWorkflowStepById(this.folder.workflowStepId);
    if (ws == null) return;
    this.dropEnabled = false;
    if (!dragData) {
      this.dropEnabled = ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowDropExternalDocument) && this.isPrimaryStep();
      return;
    }
    const _document = dragData.element;
    if (_document.workflowStepId === this.folder.workflowStepId && dragData.elementParentId !== this.folder.id) {
      if (!ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowDropDocument)) return;
      this.dropEnabled = true;
      if (!this.isExpanded) {
        this.toggleExpand();
      }
    } else if (dragData.elementType === _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_15__.CaptureConstants.page && this.folder.workflowStepId === dragData.elementParentStepId) {
      if (!ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowDropDocumentPage)) return;
      this.dropEnabled = true;
      if (!this.isExpanded) {
        this.toggleExpand();
      }
    }
  }
  onDragLeave(dragData) {
    this.dropEnabled = false;
  }
  onDrop(dragData) {
    const ws = this.capture.getWorkflowStepById(this.folder.workflowStepId);
    if (ws == null) return;
    if (dragData instanceof DragEvent) {
      if (!ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowDropExternalDocument) || !this.isPrimaryStep()) return;
      this.dropFiles(dragData);
    }
    const firstDragData = this.dragDropService.dragDataArray[0];
    this.dragDropService.dragDataArray.forEach(dragDataItem => {
      dragDataItem.target = firstDragData.target;
      dragDataItem.targetType = firstDragData.targetType;
      if (dragDataItem.elementType === _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_15__.CaptureConstants.document) {
        if (!ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowDropDocument)) return;
        this.dropDocument(dragDataItem);
      }
      if (dragDataItem.elementType === _capture_models_capture_constants__WEBPACK_IMPORTED_MODULE_15__.CaptureConstants.page && this.folder.workflowStepId === dragDataItem.elementParentStepId) {
        if (!ws.hasCapability(_capture_models__WEBPACK_IMPORTED_MODULE_14__.Capabilities.allowDropDocumentPage)) return;
        this.dropPage(dragDataItem);
      }
    });
    this.dragDropService.clearDragData();
    this.dropEnabled = false;
  }
  isPrimaryStep() {
    const currentStep = this.getCurrentStep();
    const primaryInteractiveStep = this.workflow.workflowSteps.find(step => step instanceof _blocks_models_workflow_step__WEBPACK_IMPORTED_MODULE_7__.InteractiveWorkflowStep);
    return currentStep.id === primaryInteractiveStep.id;
  }
  dropFiles(dragData) {
    //TODO: if (!(this.getCurrentStep() instanceof CaptureWorkflowStep)) return;
    const files = dragData.dataTransfer.files;
    if (!files.length) return;
    for (let i = 0; i < files.length; i++) {
      const fileName = _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_2__.Filename.getFileNameWithoutExtension(files[i].name);
      let fileExtension = _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_2__.Filename.getFileExtension(files[i].name);
      this.capture.addFiletoFolder(files[i], fileName, fileExtension, this.folder);
    }
  }
  dropDocument(dragData) {
    this.capture.handleDragDropDocuments(dragData, this.folder.workflowStepId, this.capture.getGroupingFolderValues(this.folder));
  }
  dropPage(dragData) {
    this.onToggleSpinner(true);
    this.capture.addPageToFolder(dragData.element, dragData.elementPosition, this.folder).then(() => {
      this.onToggleSpinner(false);
    }).catch(() => {
      this.onToggleSpinner(false);
    });
  }
  getCurrentStep() {
    return this.capture.getWorkflowStepById(this.folder.workflowStepId);
  }
  getDocumentCountText() {
    if (!this.folder || this.folder.itemCount <= 0) {
      return '';
    }
    const pageSuffix = this.translate.instant(this.folder.itemCount === 1 ? 'Document_Capture.document' : 'Document_Capture.documents');
    return `(${this.folder.itemCount} ${pageSuffix})`;
  }
  onToggleSpinner(state) {
    if (state) {
      this.translate.get('Document_Capture.UpdatingDocument').subscribe(value => this.spinnerState.show(value, document.getElementById('app-spinner-panel')));
    } else {
      this.spinnerState.hide();
    }
  }
  onMouseEnter(isMenu) {
    if (isMenu) {
      this.hoverOverMenu = true;
    } else {
      this.hoverOver = true;
    }
  }
  onMouseLeave(isMenu) {
    this.delay.execute(() => {
      if (isMenu) {
        this.hoverOverMenu = false;
      } else {
        this.hoverOver = false;
      }
    }, 10);
  }
  onClickMenuButton(event, dropdown) {
    this.selectFolder();
    this.contextMenu.open(event, null, null, this.getFolderContextMenuActions());
  }
  addDocument() {
    this.hide();
    const actionEvent = new _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.FolderActionEvent(_blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.ImportToUnselectedFolder, this.folder);
    this.actionService.activateAction(actionEvent);
  }
  scanDocument() {
    this.hide();
    const actionEvent = new _blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.FolderActionEvent(_blocks_core_actions__WEBPACK_IMPORTED_MODULE_1__.Action.ScanToUnselectedFolder, this.folder);
    this.actionService.activateAction(actionEvent);
  }
  hide() {
    this.hoverOver = false;
    this.hoverOverMenu = false;
  }
  onHidden() {
    this.showMenu = false;
  }
  initializeStepMetaDataDefinitionsFields() {
    this.stepMetadataDefinitions.forEach(mdd => {
      const fieldDefinition = mdd.asFieldDefinition();
      fieldDefinition.label = '';
      fieldDefinition.datasource = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDataSource.create(mdd, this.hydraApi);
      this.stepMetadataDefinitionsFields.push(fieldDefinition);
    });
  }
  trackWorkItemId(index, item) {
    return item.id;
  }
  trackFolderId(index, folder) {
    return folder.id;
  }
  onDocumentLoaded() {
    this.documentLoaded.emit();
  }
  onGridColumnClicked(sortingIndex) {
    let sortingType = _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.Asc;
    if (this.sortingConfig.index === sortingIndex) {
      sortingType = this.sortingConfig.type === _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.Asc ? _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.Desc : _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.Asc;
    }
    this.sortingConfig.index = sortingIndex;
    this.sortingConfig.type = sortingType;
    this.sortingConfig.workflowStepId = this.folder.workflowStepId;
    this.folderView.sortGridColumnData(this.sortingConfig);
  }
  showSortingIcon(index) {
    return this.sortingConfig.workflowStepId === this.folder.workflowStepId && this.sortingConfig.type !== _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.None && this.sortingConfig.index === index;
  }
  getSortingIconClass() {
    if (this.sortingConfig.type === _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.Asc) return 'k-i-sort-asc-sm';
    if (this.sortingConfig.type === _capture_models_sorting__WEBPACK_IMPORTED_MODULE_16__.SortingType.Desc) return 'k-i-sort-desc-sm';
    return '';
  }
  deleteSelectedItems() {
    this.hide();
    this.outcomesService.confirmDeleteSelectedItems(this.confirmedDeleteSelectedItems);
  }
  static {
    this.ɵfac = function FolderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_10__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_folder_view_events_service__WEBPACK_IMPORTED_MODULE_20__.FolderViewEventsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_17__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_18__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_12__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_8__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_13__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_document_list_style_service__WEBPACK_IMPORTED_MODULE_19__.DocumentListStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_29__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_22__.SelectedItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_drag_drop_service__WEBPACK_IMPORTED_MODULE_9__.DragDropService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_capture_services_outcomes_service__WEBPACK_IMPORTED_MODULE_21__.OutcomesService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_26__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_blocks_services_modals_utilities_service__WEBPACK_IMPORTED_MODULE_11__.ModalsUtilitiesService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
      type: FolderComponent,
      selectors: [["app-folder"]],
      viewQuery: function FolderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.folderEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
        }
      },
      inputs: {
        workflow: "workflow",
        folder: "folder",
        isBatch: "isBatch",
        stepMetadataDefinitions: "stepMetadataDefinitions",
        stepMetadataDefinitionsFields: "stepMetadataDefinitionsFields",
        contextMenu: "contextMenu"
      },
      outputs: {
        openParentFolder: "openParentFolder",
        toggleSpinner: "toggleSpinner",
        documentLoaded: "documentLoaded"
      },
      decls: 18,
      vars: 26,
      consts: [["folderEl", ""], ["wrapper", ""], ["dropdown", "bs-dropdown"], ["appDragNDrop", "", 1, "folder", 3, "dragOver", "dragLeave", "drop", "ngClass", "element", "elementParentId", "elementType", "isDroppable"], [1, "_folder", "d-flex", "align-items-center", "text-truncate", "pl-2", 3, "mouseleave", "mouseenter", "title"], [3, "click", "ngClass"], [1, "selection-wrapper", "col", "d-flex", "justify-content-between", "align-items-center", 3, "click"], [1, "justify-content-start"], [3, "ngClass", 4, "ngIf"], [1, "name", "m-0", "mr-1", 3, "ngClass"], ["class", "item-count", 4, "ngIf"], [1, "folder-actions"], ["class", "edit-delete", 4, "ngIf"], ["class", "grid-header", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "folder-content-wrapper"], ["class", "children-items-nodes", 3, "expanded", 4, "ngIf"], [1, "children-folders-nodes", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngClass"], [1, "item-count"], [1, "edit-delete"], ["class", "btn-group", "dropdown", "", "container", "body", 3, "onHidden", 4, "ngIf"], ["dropdown", "", "container", "body", 1, "btn-group", 3, "onHidden"], ["id", "button-basic", "type", "button", 1, "button-icon", 3, "click"], [1, "icomoon-more"], [1, "grid-header"], [1, "grid-header-columns"], [1, "grid-header-left-space", 3, "ngClass"], ["id", "grid-header-row"], [1, "grid-header-column", 3, "click", "title"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "grid-header-right-space"], [1, "loading"], ["src", "assets/shared/img/animated-spinner.gif", "width", "15", "height", "3"], [1, "children-items-nodes"], [1, "pr-1"], [3, "documentLoaded", "folderItem", "parentFolderId", "stepMetadataDefinitions", "stepMetadataDefinitionsFields", "contextMenu"], [3, "openParentFolder", "folder", "workflow", "isBatch", "stepMetadataDefinitions", "stepMetadataDefinitionsFields", "contextMenu"]],
      template: function FolderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("dragOver", function FolderComponent_Template_div_dragOver_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDragOver($event));
          })("dragLeave", function FolderComponent_Template_div_dragLeave_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDragLeave($event));
          })("drop", function FolderComponent_Template_div_drop_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onDrop($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "div", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("mouseleave", function FolderComponent_Template_div_mouseleave_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onMouseLeave());
          })("mouseenter", function FolderComponent_Template_div_mouseenter_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onMouseEnter());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function FolderComponent_Template_i_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.toggleExpand());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function FolderComponent_Template_div_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.selectFolder($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, FolderComponent_i_6_Template, 1, 6, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](7, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](9, FolderComponent_span_9_Template, 2, 1, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](11, FolderComponent_div_11_Template, 3, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](12, FolderComponent_div_12_Template, 14, 11, "div", 13)(13, FolderComponent_div_13_Template, 4, 3, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](15, FolderComponent_ul_15_Template, 3, 8, "ul", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](16, "ul", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](17, FolderComponent_li_17_Template, 2, 6, "li", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction2"](20, _c3, ctx.isFolderSelected, ctx.dropEnabled))("element", ctx.folder)("elementParentId", ctx.folder.parentID)("elementType", ctx.folderString)("isDroppable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("title", ctx.folder.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx.isExpanded ? "minus-icon icon-play3" : "plus-icon icon-play3");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", !ctx.isGridView);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", ctx.isWorkflowRoot ? "workflow-folder" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](ctx.folder.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.folder.itemCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.hoverOver || ctx.hoverOverMenu);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.isGridView && ctx.isWorkflowRoot && ctx.isExpanded && ((ctx.folder.items == null ? null : ctx.folder.items.length) || (ctx.folder.folders == null ? null : ctx.folder.folders.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.loadingItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.folder.items == null ? null : ctx.folder.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵclassProp"]("expanded", ctx.isExpanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction2"](23, _c4, ctx.isExpanded, ctx.isGridView));
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngForOf", ctx.folder.folders)("ngForTrackBy", ctx.trackFolderId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_31__.BsDropdownDirective, _blocks_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_23__.DragDropDirective, _work_item_work_item_component__WEBPACK_IMPORTED_MODULE_24__.WorkItemComponent, FolderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslatePipe, _Bamba_Shared_src_pipes_array_sort_pipe__WEBPACK_IMPORTED_MODULE_25__.ArraySortPipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.folder {\n  min-width: fit-content;\n  margin-bottom: 2px;\n}\n.folder .folder-actions button {\n  font-size: 0.5rem;\n  color: #6e6e6e;\n}\n.folder ._folder {\n  margin-right: 4px;\n}\n.folder .edit-delete {\n  display: flex;\n  align-items: center;\n}\n.folder i {\n  font-size: 14px;\n  cursor: pointer;\n}\n.folder i.plus-icon {\n  color: #636363;\n  font-size: 0.7rem;\n  cursor: pointer;\n}\n.folder i.minus-icon {\n  color: #636363;\n  font-size: 0.7rem;\n  cursor: pointer;\n  transform: rotate(90deg);\n}\n.folder i.folder-icon {\n  color: #f7d452;\n  margin-right: 2px;\n  font-size: 1.1rem;\n}\n.folder i.folder-icon-root {\n  color: var(--brand-primary-color);\n  margin-right: 3px;\n  font-size: 1.1rem;\n}\n.folder .selection-wrapper {\n  padding: 0 3px;\n  border: 2px solid transparent;\n}\n.folder .selection-wrapper:hover {\n  background: #edf7ff;\n}\n.folder.selected > ._folder > .selection-wrapper {\n  background: #edf7ff;\n  border-color: #73a7d8;\n}\n.folder.droppable > ._folder > .selection-wrapper {\n  background: rgba(0, 145, 202, 0.15);\n  border-style: dotted;\n  border-color: var(--brand-primary-color);\n}\n.folder .name {\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.folder .item-count {\n  cursor: pointer;\n  font-size: 14px;\n  color: darkgray;\n}\n.folder .item-count-container {\n  cursor: pointer;\n}\n.folder .workflow-folder {\n  text-shadow: 0 0 0 black;\n}\n.folder ul {\n  list-style: none;\n  margin: 0;\n  padding-left: 1rem;\n}\n.folder ul.children-items-nodes {\n  padding-left: 25px;\n}\n.folder ul.children-folders-nodes, .folder ul.children-items-nodes {\n  display: none;\n}\n.folder ul.children-folders-nodes.expanded, .folder ul.children-items-nodes.expanded {\n  display: block;\n}\n.folder .loading {\n  padding-left: 15px;\n  font-size: smaller;\n}\n.folder .grid-header {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.folder .grid-header-left-space {\n  min-width: 45px;\n  height: 25px;\n  background-color: #f1f3f3;\n  border: 1px solid #b5b5b5;\n  margin-left: 19px;\n}\n.folder .grid-header-right-space {\n  min-width: 19px;\n  height: 25px;\n  background-color: #f1f3f3;\n  border: 1px solid #b5b5b5;\n  border-left: none;\n  margin-right: 5px;\n  flex: 1;\n  flex-direction: column;\n}\n.folder .grid-header-columns {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 11px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.82;\n  letter-spacing: normal;\n  color: #6e6e6e;\n}\n.folder .grid-header-columns table {\n  width: 100%;\n}\n.folder .grid-header-column {\n  flex: 1;\n  height: 25px;\n  background-color: #f1f3f3;\n  border: 1px solid #b5b5b5;\n  border-left: none;\n  flex-basis: 100%;\n  min-width: 200px;\n  white-space: nowrap;\n  flex-direction: column;\n  padding: 0px 5px;\n  cursor: pointer;\n}\n.folder .grid-header-drag-adjustment {\n  min-width: 45px;\n}\n\n.rtl .folder .item-count {\n  margin-right: 5px;\n}\n.rtl .folder i.folder-icon-root {\n  margin-right: initial;\n  margin-left: 3px;\n}\n.rtl .folder i.plus-icon {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2RvY3VtZW50LWNhcHR1cmUvZG9jdW1lbnRzLWxpc3QvZm9sZGVyL2ZvbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBZ1BGO0FBN09JO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBK09OO0FBM09FO0VBQ0UsaUJBQUE7QUE2T0o7QUExT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUE0T0o7QUF6T0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQTJPSjtBQXpPSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUEyT047QUF4T0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUEwT047QUF2T0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXlPTjtBQXRPSTtFQUNFLGlDRGdDUTtFQy9CUixpQkFBQTtFQUNBLGlCQUFBO0FBd09OO0FBcE9FO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FBc09KO0FBcE9JO0VBQ0UsbUJBQUE7QUFzT047QUFoT007RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBa09SO0FBNU5NO0VBQ0UsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLHdDRElNO0FDME5kO0FBek5FO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBMk5KO0FBeE5FO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBME5KO0FBdk5FO0VBQ0UsZUFBQTtBQXlOSjtBQXRORTtFQUNFLHdCQUFBO0FBd05KO0FBck5FO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUF1Tko7QUFyTkk7RUFDRSxrQkFBQTtBQXVOTjtBQXBOSTtFQUVFLGFBQUE7QUFxTk47QUFuTk07RUFDRSxjQUFBO0FBcU5SO0FBaE5FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWtOSjtBQS9NRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFpTko7QUE5TUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRDVETTtFQzZETix5QkFBQTtFQUNBLGlCQUFBO0FBZ05KO0FBN01FO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkRwRU07RUNxRU4seUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FBK01KO0FBNU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQThNSjtBQTVNSTtFQUNFLFdBQUE7QUE4TU47QUExTUU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRGhHTTtFQ2lHTix5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUE0TUo7QUF6TUU7RUFDRSxlQUFBO0FBMk1KOztBQXJNSTtFQUNFLGlCQUFBO0FBd01OO0FBck1JO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQXVNTjtBQXBNSTtFQUNFLHlCQUFBO0FBc01OIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4uZm9sZGVyIHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuXHJcbiAgLmZvbGRlci1hY3Rpb25zIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICBjb2xvcjogIzZlNmU2ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5fZm9sZGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5wbHVzLWljb24ge1xyXG4gICAgICBjb2xvcjogIzYzNjM2MztcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLm1pbnVzLWljb24ge1xyXG4gICAgICBjb2xvcjogIzYzNjM2MztcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9sZGVyLWljb24ge1xyXG4gICAgICBjb2xvcjogI2Y3ZDQ1MjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYuZm9sZGVyLWljb24tcm9vdCB7XHJcbiAgICAgIGNvbG9yOiAkdXBsYW5kLWJsdWU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3Rpb24td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWRmN2ZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICA+IC5fZm9sZGVyIHtcclxuICAgICAgPiAuc2VsZWN0aW9uLXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZGY3ZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNzNhN2Q4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuZHJvcHBhYmxlIHtcclxuICAgID4gLl9mb2xkZXIge1xyXG4gICAgICA+IC5zZWxlY3Rpb24td3JhcHBlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNDUsIDIwMiwgMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWJsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY291bnQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY291bnQtY29udGFpbmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC53b3JrZmxvdy1mb2xkZXIge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwIGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuXHJcbiAgICAmLmNoaWxkcmVuLWl0ZW1zLW5vZGVzIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuY2hpbGRyZW4tZm9sZGVycy1ub2RlcyxcclxuICAgICYuY2hpbGRyZW4taXRlbXMtbm9kZXMge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgJi5leHBhbmRlZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2FkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcblxyXG4gIC5ncmlkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaGVhZGVyLWxlZnQtc3BhY2Uge1xyXG4gICAgbWluLXdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1oZWFkZXItcmlnaHQtc3BhY2Uge1xyXG4gICAgbWluLXdpZHRoOiAxOXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaGVhZGVyLWNvbHVtbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjgyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1oZWFkZXItY29sdW1uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNWI1YjU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtaGVhZGVyLWRyYWctYWRqdXN0bWVudCB7XHJcbiAgICBtaW4td2lkdGg6IDQ1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucnRsIHtcclxuICAuZm9sZGVyIHtcclxuICAgIC5pdGVtLWNvdW50IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaS5mb2xkZXItaWNvbi1yb290IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsO1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIGkucGx1cy1pY29uIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 93508:
/*!****************************************************************************************!*\
  !*** ./src/app/views/document-capture/documents-list/work-item/work-item.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkItemComponent: () => (/* binding */ WorkItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_folder_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/models/folder-item */ 48844);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../capture-services */ 97954);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../capture-services/selected-items.service */ 85641);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../document/document.component */ 87828);













function WorkItemComponent_app_document_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-document", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("documentLoaded", function WorkItemComponent_app_document_0_Template_app_document_documentLoaded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onDocumentLoaded());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const document_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r1.isDocumentSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("doc", document_r3)("folderItem", ctx_r1.folderItem)("parentFolderId", ctx_r1.parentFolderId)("id", "doc-" + document_r3.id)("selected", ctx_r1.isDocumentSelected)("stepMetadataDefinitions", ctx_r1.stepMetadataDefinitions)("stepMetadataDefinitionsFields", ctx_r1.stepMetadataDefinitionsFields)("contextMenu", ctx_r1.contextMenu);
  }
}
class WorkItemComponent {
  constructor(capture, captureUpdate, selectedItemsService) {
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.selectedItemsService = selectedItemsService;
    this.stepMetadataDefinitions = [];
    this.stepMetadataDefinitionsFields = [];
    this.documentLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onChangedSelectedItems = () => {
      this.isDocumentSelected = this.selectedItemsService.isItemSelected(this.folderItem.workItem.id, this.folderItem.workItem.workflowStepId);
    };
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
  }
  ngOnInit() {
    this.currentDocument = this.capture.getCurrentDocument();
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => this.currentDocument = doc));
    this.document = this.folderItem.documents[0];
    this.onChangedSelectedItems();
    this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  trackDocumentId(index, item) {
    return item.id;
  }
  onDocumentLoaded() {
    this.documentLoaded.emit();
  }
  static {
    this.ɵfac = function WorkItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WorkItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_2__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_3__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_4__.SelectedItemsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: WorkItemComponent,
      selectors: [["app-work-item"]],
      inputs: {
        folderItem: "folderItem",
        parentFolderId: "parentFolderId",
        stepMetadataDefinitions: "stepMetadataDefinitions",
        stepMetadataDefinitionsFields: "stepMetadataDefinitionsFields",
        contextMenu: "contextMenu"
      },
      outputs: {
        documentLoaded: "documentLoaded"
      },
      decls: 1,
      vars: 2,
      consts: [[3, "doc", "folderItem", "parentFolderId", "id", "selected", "stepMetadataDefinitions", "stepMetadataDefinitionsFields", "contextMenu", "documentLoaded", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "documentLoaded", "doc", "folderItem", "parentFolderId", "id", "selected", "stepMetadataDefinitions", "stepMetadataDefinitionsFields", "contextMenu"]],
      template: function WorkItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, WorkItemComponent_app_document_0_Template, 1, 10, "app-document", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.folderItem.documents)("ngForTrackBy", ctx.trackDocumentId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _document_document_component__WEBPACK_IMPORTED_MODULE_5__.DocumentComponent],
      styles: ["app-document[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS9kb2N1bWVudHMtbGlzdC93b3JrLWl0ZW0vd29yay1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImFwcC1kb2N1bWVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 88896:
/*!***********************************************************************************!*\
  !*** ./src/app/views/document-capture/indexing-panel/indexing-panel.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexingPanelComponent: () => (/* binding */ IndexingPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../capture-models */ 48004);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../capture-services */ 97954);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../capture-services/selected-items.service */ 85641);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 77353);


























const _c0 = ["perfectScroll"];
const _c1 = () => ({
  suppressScrollX: false
});
function IndexingPanelComponent_form_8_app_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("focus", function IndexingPanelComponent_form_8_app_field_1_Template_app_field_focus_0_listener() {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onFocus(i_r3));
    })("blurex", function IndexingPanelComponent_form_8_app_field_1_Template_app_field_blurex_0_listener($event) {
      const field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onBlur($event, field_r5));
    })("return", function IndexingPanelComponent_form_8_app_field_1_Template_app_field_return_0_listener($event) {
      const field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onReturn($event, field_r5));
    })("tabex", function IndexingPanelComponent_form_8_app_field_1_Template_app_field_tabex_0_listener($event) {
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const field_r5 = ctx_r5.$implicit;
      const i_r3 = ctx_r5.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onTab($event, field_r5, i_r3));
    })("keydown.tab", function IndexingPanelComponent_form_8_app_field_1_Template_app_field_keydown_tab_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onTabKey($event, i_r3));
    })("keydown.shift.tab", function IndexingPanelComponent_form_8_app_field_1_Template_app_field_keydown_shift_tab_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onShiftTabKey($event, i_r3));
    })("saveLookupValues", function IndexingPanelComponent_form_8_app_field_1_Template_app_field_saveLookupValues_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onSaveLookupValues($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("hidden", !ctx_r3.hasSelectedItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("context", ctx_r3.getContext)("field", ctx_r3.getFieldDefinition(field_r5))("value", ctx_r3.getFieldValue(field_r5))("disabled", !ctx_r3.oneDocumentSelected || !ctx_r3.documentLocked || ctx_r3.disableBlur)("focused", ctx_r3.oneDocumentSelected && field_r5.id === (ctx_r3.currentField == null ? null : ctx_r3.currentField.id))("validity", ctx_r3.getValidity(field_r5))("fillViaPointAClick", ctx_r3.shouldValueBeSet(field_r5))("findMetaDataService", ctx_r3.userStateService)("metaDataCollection", ctx_r3.capture && ctx_r3.capture.getMetaDataCollection())("metaDataValidator", ctx_r3.capture)("triggerBlurEventOnLoad", false);
  }
}
function IndexingPanelComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, IndexingPanelComponent_form_8_app_field_1_Template, 1, 13, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.fields)("ngForTrackBy", ctx_r3.trackByDocumentMetaDataField);
  }
}
class IndexingPanelComponent {
  get getContext() {
    return this.selectedDocument?.workitem;
  }
  constructor(indexingService, capture, captureUpdate, hydraApi, stickyService, dropDown, documentLockingService, userStateService, delay, selectedItemsService, documentCaptureService, cdr) {
    this.indexingService = indexingService;
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.hydraApi = hydraApi;
    this.stickyService = stickyService;
    this.dropDown = dropDown;
    this.documentLockingService = documentLockingService;
    this.userStateService = userStateService;
    this.delay = delay;
    this.selectedItemsService = selectedItemsService;
    this.documentCaptureService = documentCaptureService;
    this.cdr = cdr;
    this.setCurrentField = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.indexingPanel = _capture_models__WEBPACK_IMPORTED_MODULE_3__.IndexingPanels['AdvancedIndexing'];
    this.fields = [];
    this.shouldFocusFirstField = true;
    this.disableBlur = false;
    this.onTakeFocusHandler = panel => {
      this.currentField = null;
      if (panel !== this.indexingPanel) return;
      this.moveTo(this.getFocusFieldIndex());
    };
    this.onChangedSelectedItems = () => {
      this.oneDocumentSelected = this.selectedItemsService.isOneDocumentSelected();
      this.hasSelectedItems = this.selectedItemsService.hasItemsSelected();
    };
    this.lockStatusChanged = ls => {
      if (!this.selectedDocument || !this.selectedDocument.workitem) return;
      if (ls.id == this.selectedDocument.workitem.id) {
        this.documentLocked = ls.locked && ls.lockedByUserId == this.userStateService.user.id && !ls.expired();
      }
    };
    this.getFieldDefinition = mdd => {
      const fd = mdd.asFieldDefinition();
      fd.datasource = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDataSource.create(mdd, this.hydraApi);
      return fd;
    };
    this.getFieldValue = mdd => {
      if (this.disableBlur) return;
      if (!this.oneDocumentSelected || !this.selectedDocument) return '';
      const mddValue = this.capture.getWorkItemIndexingValue(mdd.name);
      if (!mdd.stickyField) return mddValue;
      if (mddValue) {
        this.stickyService.setStickyField(mdd.name, mddValue);
        return mddValue;
      }
      const stickyValue = this.stickyService.getStickyField(mdd.name);
      if (!stickyValue) return '';
      this.capture.validateAndSaveIndexingValue(stickyValue, mdd, this.getContext);
      return stickyValue;
    };
    this.shouldValueBeSet = mdd => {
      if (this.currentField) {
        if (mdd.id === this.currentField.id) {
          return this.value;
        }
      }
      return '';
    };
    this.getValidity = mdd => {
      const validity = this.capture.getFieldValidity(mdd);
      return validity || shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.unknown;
    };
    this.trackByDocumentMetaDataField = (index, item) => {
      return (this.selectedDocument?.id ?? '') + item?.id;
    };
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => {
      this.currentField = null;
      this.currentFieldIndex = null;
      this.documentLocked = false;
      this.value = null;
      this.disableBlur = true;
      this.selectedDocument = doc;
      this.shouldFocusFirstField = true;
      if (this.selectedDocument) {
        const valuesWithValidLocation = [];
        this.fields.forEach(field => {
          const fieldId = field.id;
          const location = this.capture.getValueLocation(field);
          if (location && location.valid) {
            const validity = this.capture.getFieldValidity(field);
            valuesWithValidLocation.push({
              fieldId,
              location,
              validity
            });
          }
        });
        this.selectedDocument.workitem.metadata.metadata.forEach(md => {
          if (md.previewHilight == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataPreviewHilight.None) return;
          if (!md.location) return;
          if (!md.location.valid) return;
          valuesWithValidLocation.push({
            fieldId: md.name,
            location: md.location,
            validity: md.validity
          });
        });
        this.captureUpdate.hasValuesWithValidLocation(valuesWithValidLocation);
      } else {
        this.currentField = null;
        this.currentFieldIndex = null;
      }
      const el = document.querySelector('#indexing-panel');
      if (el) el.scrollTop = 0;
      this.cdr.detectChanges();
      this.perfectScroll.directiveRef.scrollToTop();
      if (this.timeout) window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => {
        this.disableBlur = false;
      }, 100);
    }));
    this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
    this.subscriptions.add(this.indexingService.onChangeWorkflowStep.subscribe(metaDataArr => {
      this.fields = metaDataArr.filter(x => x.allowedForWorkflow(this.documentCaptureService.currentWorkflow.id));
      this.perfectScroll.directiveRef.update();
      this.perfectScroll.directiveRef.scrollToTop();
    }));
    this.subscriptions.add(this.captureUpdate.onChangeFolder.subscribe(folder => {
      this.selectedFolder = folder;
    }));
    this.subscriptions.add(this.indexingService.onTakeFocus.subscribe(this.onTakeFocusHandler));
    this.subscriptions.add(this.indexingService.onPointAndClickInitialized.subscribe(() => {
      if (this.shouldFocusFirstField) {
        this.init();
        this.shouldFocusFirstField = false;
      }
      if (this.currentField) {
        this.indexingService.changeCurrentField(this.indexingPanel, this.currentField.name);
      }
    }));
    this.subscriptions.add(this.indexingService.onChangeCurrentFieldValue.subscribe(valueObj => {
      if (valueObj.panel === this.indexingPanel) {
        if (this.selectedDocument && this.fields.length) {
          this.value = valueObj.updateFieldData.value;
          if (this.currentField.type !== shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Lookup) {
            this.delay.execute(() => {
              this.moveTo(null);
            }, 100);
          }
        }
      }
    }));
    this.onChangedSelectedItems();
    this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
  }
  getFocusFieldIndex() {
    const fieldName = this.indexingService.getCurrentFieldName();
    const currentFieldIndex = this.fields.findIndex(field => field.name === fieldName);
    return fieldName && currentFieldIndex !== -1 ? currentFieldIndex : 0;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  init() {
    this.moveTo(0, false);
  }
  moveTo(fieldIndex, zoom) {
    this.value = '';
    if (fieldIndex !== null) {
      this.currentFieldIndex = fieldIndex;
      this.currentField = this.fields[fieldIndex];
      if (zoom !== false) {
        const location = this.capture.getValueLocation(this.currentField);
        if (location && location.valid) {
          this.captureUpdate.zoomIntoValue(this.currentField.id);
        } else {
          this.captureUpdate.zoomIntoValue(null);
        }
      }
    } else {
      if (this.currentFieldIndex === this.fields.length - 1) {
        this.captureUpdate.selectNextDocument();
      } else {
        this.moveTo(this.currentFieldIndex + 1);
      }
      return;
    }
    if (this.currentField) {
      this.indexingService.changeCurrentField(this.indexingPanel, this.currentField.name);
    }
  }
  onFocus(index) {
    this.moveTo(index);
  }
  onBlur(blurEvent, mdd) {
    if (this.disableBlur) return;
    if (blurEvent.context.id != this.getContext.id) return;
    if (blurEvent.mdd) mdd = blurEvent.mdd;
    this.capture.validateAndSaveIndexingValue(blurEvent.value, mdd, blurEvent.context, true);
    if (mdd.stickyField) this.stickyService.setStickyField(mdd.name, blurEvent.value);
  }
  onReturn(value, mdd) {
    this.capture.validateAndSaveIndexingValue(value, mdd, this.getContext);
    this.captureUpdate.changeValueValidity({
      id: mdd.id,
      validity: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataValidity.valid
    });
  }
  onTab(event, mdd, index) {
    if (index !== this.fields.length - 1) return;
    if (mdd.stickyField) this.stickyService.setStickyField(mdd.name, event.value);
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }
  onTabKey(event, index) {
    if (event) event.preventDefault();
    if (index === this.fields.length - 1 && this.documentCaptureService.canAutomaticallyAdvanceOnTab()) {
      this.captureUpdate.selectNextDocument();
    } else {
      this.moveTo(index + 1);
    }
  }
  onShiftTabKey(event, index) {
    if (event) {
      event.preventDefault();
    }
    if (index === 0) {
      this.moveTo(this.fields.length - 1);
    } else {
      this.moveTo(index - 1);
    }
  }
  onScroll() {
    this.dropDown.scrolled();
  }
  onSaveLookupValues(event, index) {
    this.capture.updateMetadataValues(event.context, event.lookups);
    if (event.move) {
      this.delay.execute(() => {
        if (event.forward) {
          this.onTabKey(null, index);
        } else {
          this.onShiftTabKey(null, index);
        }
      }, 500);
    }
  }
  static {
    this.ɵfac = function IndexingPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IndexingPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_4__.IndexingPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_4__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_5__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.StickyFieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DropDownService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_6__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_2__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_7__.SelectedItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_4__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: IndexingPanelComponent,
      selectors: [["app-indexing-panel"]],
      viewQuery: function IndexingPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.perfectScroll = _t.first);
        }
      },
      outputs: {
        setCurrentField: "setCurrentField"
      },
      decls: 9,
      vars: 7,
      consts: [["perfectScroll", ""], [1, "indexing-panel", "h-100"], [1, "pannel-header"], [1, "pannel-title"], [1, "col", "p-0", 3, "ps-scroll-up", "ps-scroll-down", "autoUpdatePerfectScroll", "config"], ["id", "indexing-panel", 1, "pb-5"], ["class", "indexing-form container-fluid mt-2", "appAutoFocusFirstInput", "", 4, "ngIf"], ["appAutoFocusFirstInput", "", 1, "indexing-form", "container-fluid", "mt-2"], [3, "context", "field", "value", "disabled", "hidden", "focused", "validity", "fillViaPointAClick", "findMetaDataService", "metaDataCollection", "metaDataValidator", "triggerBlurEventOnLoad", "focus", "blurex", "return", "tabex", "keydown.tab", "keydown.shift.tab", "saveLookupValues", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "focus", "blurex", "return", "tabex", "keydown.tab", "keydown.shift.tab", "saveLookupValues", "context", "field", "value", "disabled", "focused", "validity", "fillViaPointAClick", "findMetaDataService", "metaDataCollection", "metaDataValidator", "triggerBlurEventOnLoad"]],
      template: function IndexingPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "perfect-scrollbar", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ps-scroll-up", function IndexingPanelComponent_Template_perfect_scrollbar_ps_scroll_up_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onScroll());
          })("ps-scroll-down", function IndexingPanelComponent_Template_perfect_scrollbar_ps_scroll_down_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onScroll());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, IndexingPanelComponent_form_8_Template, 2, 2, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const perfectScroll_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 4, "Indexing.Indexing"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("autoUpdatePerfectScroll", perfectScroll_r7.directiveRef)("config", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.disableBlur);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__.FieldComponent, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__.AutoUpdatePerfectScrollDirective, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__.AutoFocusFirstInputDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: [".indexing-panel {\n  background: #ffffff;\n  border-top: none;\n  max-height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.indexing-panel form {\n  overflow: unset !important;\n}\n.indexing-panel .owl-dt-calendar-control {\n  display: flex !important;\n}\n.indexing-panel .hidden {\n  visibility: hidden;\n}\n.indexing-panel .disabled {\n  opacity: 0.5;\n}\n.indexing-panel .button-icon {\n  top: 8px !important;\n}\n.indexing-panel .indexing-form {\n  min-width: 200px !important;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS9pbmRleGluZy1wYW5lbC9pbmRleGluZy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLDBCQUFBO0FBRUo7QUFBRTtFQUNFLHdCQUFBO0FBRUo7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiLmluZGV4aW5nLXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb3JtIHtcclxuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAub3dsLWR0LWNhbGVuZGFyLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWljb24ge1xyXG4gICAgdG9wOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbmRleGluZy1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 50636:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/document-capture/line-item-indexing/line-item-indexing.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineItemIndexingComponent: () => (/* binding */ LineItemIndexingComponent)
/* harmony export */ });
/* harmony import */ var C_work_upland_bamba_CORE21_NG_1_Bamba_Web_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 56207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 47066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../capture-models */ 48004);
/* harmony import */ var _capture_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../capture-services */ 97954);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../capture-services/selected-items.service */ 85641);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 73172);



































const _c0 = ["virtualScrollViewport"];
const _c1 = ["tableWrapper"];
const _c2 = () => ({
  suppressScrollY: true
});
const _c3 = (a0, a1) => ({
  valid: a0,
  "not-valid": a1
});
function LineItemIndexingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LineItemIndexingComponent_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onAddClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "Exceptions_Queue.Add_Item"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r1.oneDocumentSelected || ctx_r1.loadingDefaultValues);
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mdd_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("title", mdd_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", mdd_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](mdd_r3.label);
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 28)(1, "app-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blurex", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template_app_field_blurex_1_listener($event) {
      const mdd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const item_r9 = ctx_r7.$implicit;
      const rowIndex_r10 = ctx_r7.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onBlur($event, item_r9, mdd_r7, rowIndex_r10));
    })("focus", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template_app_field_focus_1_listener() {
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const mdd_r7 = ctx_r10.$implicit;
      const cellIndex_r12 = ctx_r10.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const item_r9 = ctx_r7.$implicit;
      const rowIndex_r10 = ctx_r7.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.selectCell(cellIndex_r12, rowIndex_r10, mdd_r7, item_r9));
    })("tab", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template_app_field_tab_1_listener($event) {
      const mdd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const item_r9 = ctx_r7.$implicit;
      const rowIndex_r10 = ctx_r7.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onTab($event, item_r9, mdd_r7, rowIndex_r10));
    })("shiftTab", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template_app_field_shiftTab_1_listener($event) {
      const mdd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const item_r9 = ctx_r7.$implicit;
      const rowIndex_r10 = ctx_r7.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onShiftTab($event, item_r9, mdd_r7, rowIndex_r10));
    })("saveLookupValues", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template_app_field_saveLookupValues_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const rowIndex_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSaveLookupValues($event, rowIndex_r10));
    })("return", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template_app_field_return_1_listener($event) {
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const mdd_r7 = ctx_r12.$implicit;
      const cellIndex_r12 = ctx_r12.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const item_r9 = ctx_r7.$implicit;
      const rowIndex_r10 = ctx_r7.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onReturn($event, item_r9, mdd_r7, rowIndex_r10, cellIndex_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mdd_r7 = ctx.$implicit;
    const cellIndex_r12 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const item_r9 = ctx_r7.$implicit;
    const rowIndex_r10 = ctx_r7.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", rowIndex_r10 === ctx_r1.selectedRowIndex && cellIndex_r12 === ctx_r1.selectedCellIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("colspan", ctx_r1.getColSpan(mdd_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("field", ctx_r1.getFieldDefinition(mdd_r7))("value", ctx_r1.getFieldValue(item_r9, mdd_r7))("validity", ctx_r1.getValidity(item_r9, mdd_r7))("focused", rowIndex_r10 === ctx_r1.selectedRowIndex && cellIndex_r12 === ctx_r1.selectedCellIndex)("fillViaPointAClick", ctx_r1.shouldValueBeSet(rowIndex_r10, cellIndex_r12))("findMetaDataService", ctx_r1.userStateService)("metaDataCollection", item_r9);
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_td_1_Template, 2, 10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "td", 25)(3, "div", 7)(4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_Template_button_click_4_listener() {
      const rowIndex_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.confirmDelete(rowIndex_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const rowIndex_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", rowIndex_r10 === ctx_r1.selectedRowIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.lineItemMDD);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 4, "Exceptions_Queue.Delete_Item"));
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_4_td_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cellIndex_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](2, _c3, ctx_r1.getCompareToField(cellIndex_r14) && ctx_r1.getColumnTotal(cellIndex_r14) === ctx_r1.getCompareToValue(cellIndex_r14), ctx_r1.getCompareToField(cellIndex_r14) && ctx_r1.getColumnTotal(cellIndex_r14) !== ctx_r1.getCompareToValue(cellIndex_r14)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("text", ctx_r1.getColumnTotalText(cellIndex_r14));
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_4_td_1_div_1_Template, 2, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mdd_r15 = ctx.$implicit;
    const cellIndex_r14 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("colspan", ctx_r1.getColSpan(mdd_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.canCalculateTotal(cellIndex_r14));
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_4_td_1_Template, 2, 2, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.lineItemMDD);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "Common.Total"));
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tbody", 19)(1, "cdk-virtual-scroll-viewport", 20, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("scrolledIndexChange", function LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_3_Template, 7, 6, "tr", 21)(4, LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_tr_4_Template, 5, 4, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", ctx_r1.virtualScrollViewportStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("cdkVirtualForOf", ctx_r1.lineItems)("cdkVirtualForTemplateCacheSize", 0)("cdkVirtualForTrackBy", ctx_r1.trackLineItemById);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.showTotalsRow());
  }
}
function LineItemIndexingComponent_perfect_scrollbar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "perfect-scrollbar", 11, 0)(2, "table", 12)(3, "thead", 13)(4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, LineItemIndexingComponent_perfect_scrollbar_5_th_5_Template, 3, 3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, LineItemIndexingComponent_perfect_scrollbar_5_tbody_8_Template, 5, 5, "tbody", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.getColumns());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 4, "Common.Actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.lineItems == null ? null : ctx_r1.lineItems.length);
  }
}
class LineItemIndexingComponent {
  constructor(capture, captureUpdate, indexingService, cdr, delay, hydraApi, ngxSmartModalService, translate, toastr, dropDown, spinner, documentLockingService, userStateService, selectedItemsService) {
    var _this = this;
    this.capture = capture;
    this.captureUpdate = captureUpdate;
    this.indexingService = indexingService;
    this.cdr = cdr;
    this.delay = delay;
    this.hydraApi = hydraApi;
    this.ngxSmartModalService = ngxSmartModalService;
    this.translate = translate;
    this.toastr = toastr;
    this.dropDown = dropDown;
    this.spinner = spinner;
    this.documentLockingService = documentLockingService;
    this.userStateService = userStateService;
    this.selectedItemsService = selectedItemsService;
    this.cdkScrollElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.viewChild)('virtualScrollViewport');
    this.setCurrentCell = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.removeFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.lineItemPanel = _capture_models__WEBPACK_IMPORTED_MODULE_6__.IndexingPanels['LineItemIndexing'];
    this.value = '';
    this.loadingDefaultValues = false;
    this.allowedTypesForTotals = [shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Integer, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Decimal];
    this.virtualScrollViewportStyles = {
      width: '0px',
      height: '0px'
    };
    this.addNewLineItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.addStopWritingInFieldsWhileLoadingListener = () => {
      const spinnerElement = this.getLineItemIndexingElement();
      if (!spinnerElement) return;
      this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(spinnerElement, 'keydown').subscribe(this.stopWritingInFieldsWhileLoading));
    };
    this.stopWritingInFieldsWhileLoading = event => {
      if (!this.isBusy) return;
      event.preventDefault();
      event.stopPropagation();
      return false;
    };
    this.onChangedSelectedItems = () => {
      this.oneDocumentSelected = this.selectedItemsService.isOneDocumentSelected();
    };
    this.lineItemChanged = updatedLineItem => {
      if (!updatedLineItem && !this.lineItems) return false;
      if (!updatedLineItem && this.lineItems || updatedLineItem && !this.lineItems) return true;
      const currentItems = [...this.lineItems];
      for (let i = 0; i < updatedLineItem.length; i++) {
        const index = currentItems.findIndex(x => this.getRowKey(x) == this.getRowKey(updatedLineItem[i]));
        if (index == -1) return true;
        currentItems.splice(index, 1);
      }
      for (let i = 0; i < currentItems.length; i++) {
        if (this.getRowKey(currentItems[i]) != this.defaultRowValues) return true;
      }
      return false;
    };
    this.getRowKey = row => {
      return JSON.stringify(row.metadata.map(x => `${x.name}_${x.value}_${x.validity}`).sort());
    };
    this.removeEmptyLines = () => {
      this.lineItems = this.lineItems.filter(x => x.metadata.length > 0 && x.metadata.filter(y => y.value != '').length > 0);
      this.emptyLinesShouldBeRemoved = false;
    };
    this.lockStatusChanged = ls => {
      if (!this.selectedDocument || !this.selectedDocument.workitem) return;
      if (ls.id == this.selectedDocument.workitem.id) {
        this.documentLocked = ls.locked && ls.lockedByUserId == this.userStateService.user.id && !ls.expired();
      }
    };
    this.reset = () => {
      this.value = '';
      this.selectedRowIndex = null;
      this.selectedCellIndex = null;
    };
    this.getLineItemIndexingElement = () => {
      return document.getElementById('line-item-indexing');
    };
    this.hideSpinner = () => {
      this.isBusy = false;
      this.spinner.hide();
    };
    this.getColumns = () => {
      const columns = [];
      this.lineItemMDD.forEach(x => {
        if (x.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.CascadingOptions) {
          x.dataSource.dataSet.forEach(o => {
            const optionMDD = this.userStateService.findMetaDataById(o.metaDataId);
            columns.push(optionMDD);
          });
          return;
        }
        columns.push(x);
      });
      return columns;
    };
    this.getColSpan = mdd => {
      if (mdd.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.CascadingOptions) return mdd.dataSource.dataSet.length;
      return 1;
    };
    this.confirmedDelete = () => {
      this.ngxSmartModalService.getModal('actionConfirmModal').close();
      this.deleteItem(this.toBeDeletedIndex);
      this.toBeDeletedIndex = null;
    };
    this.cancelDelete = () => {
      this.ngxSmartModalService.getModal('actionConfirmModal').close();
      this.toBeDeletedIndex = null;
    };
    this.applyColumnMetaDataValues = (values, oldSelectedRowIndex) => {
      const promises = [];
      for (let i = 0; i < values.length; i++) {
        promises.push(this.setFieldValue(this.selectedRowIndex + i, new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataDefinition(this.lineItemMDD[this.selectedCellIndex]), values[i], false));
      }
      Promise.all(promises).then( /*#__PURE__*/(0,C_work_upland_bamba_CORE21_NG_1_Bamba_Web_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.value = values[0];
        if (_this.lineItemMDD[_this.selectedCellIndex].type !== shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Lookup) {
          _this.selectedRowIndex = oldSelectedRowIndex;
          yield _this.moveToNextCell();
        }
        _this.cdr.detectChanges();
      }));
    };
    this.onRowValidationSucceed = (mdc, event, index) => {
      this.lineItems[index] = mdc;
      this.updateLineItemsReference();
      this.capture.saveLineItems(this.lineItems).then(() => {
        if (event.move) {
          if (event.forward) {
            this.moveToNextCell().then(() => this.hideSpinner());
          } else {
            this.moveToPreviousCell();
            this.hideSpinner();
          }
        } else {
          this.hideSpinner();
        }
      });
    };
    this.onRowValidationFailed = err => {
      this.hideSpinner();
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('LineItemIndexingComponent.onRowValidationFailed', err);
    };
    this.showTotalsRow = () => {
      if (!this.lineItemMDD) return false;
      for (let i = 0; i < this.lineItemMDD.length; i++) {
        if (this.canCalculateTotal(i)) return true;
      }
      return false;
    };
    this.canCalculateTotal = cellIndex => {
      if (!this.lineItems || this.lineItems.length == 0) return false;
      if (!this.lineItemMDD || cellIndex >= this.lineItemMDD.length || cellIndex < 0) return false;
      const mdd = this.lineItemMDD[cellIndex];
      if (!mdd) return false;
      if (this.allowedTypesForTotals.findIndex(x => x == mdd.type) == -1) return false;
      const lic = this.getLineItemConfigById(mdd.id);
      if (!lic.showTotal) return false;
      return true;
    };
    this.getLineItemConfigById = metaDataId => {
      const mdd = this.userStateService.findMetaDataById(this.lineItemMetaDataId);
      if (!mdd) return null;
      if (!mdd.lineItemConfigurations) return null;
      return mdd.lineItemConfigurations.find(x => x.metaDataId == metaDataId);
    };
    this.getColumnTotalText = cellIndex => {
      const total = this.getColumnTotal(cellIndex);
      let text = total.toString();
      if (this.hasCompareToField(cellIndex)) {
        const compareToValue = this.getCompareToValue(cellIndex);
        const op = total == compareToValue ? '=' : '<>';
        const compareToFieldName = this.getCompareToField(cellIndex).label;
        text += `   ${op} ${compareToFieldName} (${compareToValue})`;
      }
      return text;
    };
    this.getColumnTotal = cellIndex => {
      if (!this.lineItems || !this.lineItemMDD || cellIndex >= this.lineItemMDD.length || cellIndex < 0) return 0;
      let total = 0;
      const mdd = this.lineItemMDD[cellIndex];
      this.lineItems.forEach(row => {
        row.metadata.forEach(item => {
          if (item.name != mdd.name.toLocaleLowerCase()) return;
          total += parseFloat(item.value.toString()) || 0;
        });
      });
      return total;
    };
    this.getCompareToValue = cellIndex => {
      const mdd = this.getCompareToField(cellIndex);
      if (!mdd) return 0;
      const mdc = this.capture.getMetaDataCollection();
      if (!mdc) return 0;
      const md = mdc.get(mdd.name);
      if (!md || !md.value) return 0;
      return parseFloat(md.value.toString()) || 0;
    };
    this.hasCompareToField = cellIndex => {
      return this.getCompareToField(cellIndex) != null;
    };
    this.getCompareToField = cellIndex => {
      if (!this.canCalculateTotal(cellIndex)) return null;
      const mdd = this.lineItemMDD[cellIndex];
      if (!mdd) return null;
      const lic = this.getLineItemConfigById(mdd.id);
      if (!lic) return null;
      return this.userStateService.findMetaDataById(lic.compareToMetaDataId);
    };
    this.getFieldId = (id, row, cell) => {
      return `${id}-${row}-${cell}`;
    };
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.effect)(() => {
      const nativeScrollElement = this.cdkScrollElement()?.elementRef.nativeElement;
      if (!nativeScrollElement) return;
      const last = nativeScrollElement.lastElementChild;
      if (nativeScrollElement.firstElementChild && last) {
        nativeScrollElement.replaceChild(nativeScrollElement.firstElementChild, nativeScrollElement.lastElementChild);
        nativeScrollElement.insertBefore(last, nativeScrollElement.firstElementChild);
      }
    });
  }
  ngOnInit() {
    this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => {
      this.documentLocked = false;
      this.selectedDocument = doc;
      this.emptyLinesShouldBeRemoved = true;
    }));
    this.subscriptions.add(this.captureUpdate.onUpdateLineItemTableHead.subscribe(header => {
      this.isInitialized = true;
      this.lineItemMetaDataId = header.id;
      this.lineItemMetaDataName = header.name;
      this.lineItemMDD = header.columns;
      this.headerLabel = header.label;
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    }));
    this.subscriptions.add(this.captureUpdate.onUpdateLineItemTableBody.subscribe(event => {
      if (this.loadingDefaultValues) {
        this.addNewLineItemSubject.subscribe(() => {
          this.updateLineItems(event);
        }).unsubscribe();
      } else {
        this.updateLineItems(event);
      }
    }));
    this.subscriptions.add(this.indexingService.onTakeFocus.subscribe(panel => {
      if (panel !== this.lineItemPanel) {
        this.delay.execute(this.reset, 10);
      }
    }));
    this.subscriptions.add(this.indexingService.onChangeCurrentFieldValue.subscribe(valueObj => {
      if (valueObj.panel === this.lineItemPanel) {
        const mdd = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataDefinition(this.lineItemMDD[this.selectedCellIndex]);
        this.value = valueObj.updateFieldData.value;
        this.setFieldValue(this.selectedRowIndex, mdd, this.value, true);
      }
    }));
    this.subscriptions.add(this.indexingService.onFillGroupOfValues.subscribe(groupOfFieldsValuesObj => {
      if (this.lineItemMDD[this.selectedCellIndex].type === shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.LargeText) {
        this.setFieldValue(this.selectedRowIndex, this.lineItemMDD[this.selectedCellIndex], groupOfFieldsValuesObj.UpdateGroupOfFields.values.join('\n'), true);
        return;
      }
      this.mapGroupOfValues(groupOfFieldsValuesObj.UpdateGroupOfFields.values);
    }));
    this.onChangedSelectedItems();
    this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
  }
  ngAfterViewInit() {
    this.addStopWritingInFieldsWhileLoadingListener();
  }
  ngAfterViewChecked() {
    this.setVirtualScrollViewportStyles();
  }
  updateLineItems(event) {
    const valuesWithValidLocation = [];
    if (!this.lineItemChanged(event.body)) return;
    this.lineItems = event.body;
    if (this.emptyLinesShouldBeRemoved) this.removeEmptyLines();
    this.updateLineItemsReference();
    this.lineItems.forEach((row, rowIndex) => {
      row.metadata.forEach(item => {
        this.lineItemMDD.forEach((mdd, itemIndex) => {
          if (item.location && item.name === mdd.name.toLowerCase()) {
            const {
              location,
              validity
            } = item;
            const fieldId = this.getFieldId(mdd.id, rowIndex, itemIndex);
            valuesWithValidLocation.push({
              fieldId: fieldId,
              location: location,
              validity: validity
            });
          }
        });
      });
    });
    this.captureUpdate.hasValuesWithValidLocation(valuesWithValidLocation);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  onAddClicked() {
    this.addItem(true);
  }
  addItem(saveValues = false) {
    this.loadingDefaultValues = true;
    this.showSpinner('Indexing.loading-line-items-defaults');
    return this.getLineItemDefaults().then(mdDic => {
      const mdc = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataCollection(mdDic);
      this.addMetaDataCollectionRow(mdc, saveValues);
      this.defaultRowValues = this.getRowKey(mdc);
      this.hideSpinner();
      this.cdr.detectChanges();
      this.loadingDefaultValues = false;
      this.addNewLineItemSubject.next(true);
    }).catch(err => {
      this.toastr.error(this.translate.instant('Indexing.line-items-defaults-load-error'));
      const mdc = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataCollection();
      for (let i = 0; i < this.lineItemMDD.length; i++) {
        mdc.set(this.lineItemMDD[i].name, '', shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataValidity.unknown);
      }
      this.addMetaDataCollectionRow(mdc);
      this.hideSpinner();
      this.cdr.detectChanges();
      this.loadingDefaultValues = false;
      this.addNewLineItemSubject.next(true);
    });
  }
  showSpinner(msg) {
    this.isBusy = true;
    const spinnerElement = this.getLineItemIndexingElement();
    this.spinner.show(this.translate.instant(msg), spinnerElement);
  }
  getLineItemDefaults() {
    return new Promise((resolve, reject) => {
      this.hydraApi.getLineItemDefaults(this.capture.getCurrentWorkItem().id, this.lineItemMetaDataId, metadataDic => {
        resolve(metadataDic);
      }, err => {
        reject(err);
      });
    });
  }
  addMetaDataCollectionRow(mdc, saveValues = false) {
    mdc.placeholder = true;
    this.lineItems.push(mdc);
    this.updateLineItemsReference();
    this.cdr.detectChanges();
    this.virtualScrollViewport.scrollToIndex(this.lineItems.length - 1);
    this.selectCell(0, this.lineItems.length - 1);
    const selectedMdd = this.lineItemMDD[this.selectedCellIndex];
    if (saveValues) {
      this.setFieldValue(this.lineItems.length - 1, selectedMdd, mdc.metadata[this.selectedCellIndex].value, false);
    }
    this.emitCurrentCellChange(selectedMdd.name);
  }
  selectCell(cellIndex, rowIndex, mdd, item) {
    this.value = '';
    let tempFieldId;
    if (mdd && item) {
      const location = this.getValueLocation(item, mdd);
      if (location && location.valid) {
        tempFieldId = this.getFieldId(mdd.id, rowIndex, cellIndex);
      }
    }
    this.captureUpdate.zoomIntoValue(tempFieldId);
    this.selectedRowIndex = rowIndex;
    this.selectedCellIndex = cellIndex;
    this.emitCurrentCellChange(this.lineItemMDD[cellIndex].name);
  }
  moveToNextCell() {
    this.value = '';
    if (this.selectedCellIndex === this.lineItemMDD.length - 1) {
      if (this.selectedRowIndex === this.lineItems.length - 1) {
        return this.addItem();
      } else {
        this.selectedRowIndex += 1;
        this.selectedCellIndex = 0;
      }
    } else {
      this.selectedCellIndex += 1;
    }
    return Promise.resolve();
  }
  moveToPreviousCell() {
    this.value = '';
    if (this.selectedCellIndex === 0) {
      if (this.selectedRowIndex === 0) {
        this.selectedCellIndex = this.lineItemMDD.length - 1;
        this.selectedRowIndex = this.lineItems.length - 1;
      } else {
        this.selectedRowIndex -= 1;
        this.selectedCellIndex = this.lineItemMDD.length - 1;
      }
    } else {
      this.selectedCellIndex -= 1;
    }
  }
  emitCurrentCellChange(label) {
    this.indexingService.changeCurrentField(this.lineItemPanel, label);
  }
  confirmDelete(itemIndex) {
    this.toBeDeletedIndex = itemIndex;
    this.ngxSmartModalService.setModalData({
      title: 'MainHeader.ActionConfirmation',
      text: this.translate.instant('Document_Capture.Confirm_Delete_Line_Item'),
      buttonText: this.translate.instant('Common.Delete'),
      confirm: this.confirmedDelete,
      cancel: this.cancelDelete
    }, 'actionConfirmModal', true);
    this.ngxSmartModalService.getModal('actionConfirmModal').open();
  }
  deleteItem(itemIndex) {
    this.lineItems.splice(itemIndex, 1);
    this.updateLineItemsReference();
    this.showSpinner('Indexing.saving-items');
    this.capture.saveLineItems(this.lineItems).then(this.hideSpinner, this.hideSpinner).then(() => {
      if (this.lineItems.length) {
        if (this.selectedRowIndex === itemIndex) {
          if (itemIndex >= this.lineItems.length) {
            this.selectedRowIndex -= 1;
          }
          this.selectedCellIndex = 0;
        } else if (this.selectedRowIndex > itemIndex) {
          this.selectedRowIndex -= 1;
        }
        this.cdr.detectChanges();
        this.virtualScrollViewport.scrollToIndex(itemIndex);
      }
      if (!this.lineItems.length) {
        this.indexingService.takeFocus(_capture_models__WEBPACK_IMPORTED_MODULE_6__.IndexingPanels['AdvancedIndexing']);
      }
    });
  }
  onBlur(value, item, mdd, itemIndex) {
    event?.preventDefault();
    const shouldAddItem = event?.relatedTarget?.id == 'addLineItemButton';
    if (value instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.BlurEvent) {
      mdd = value.mdd ?? mdd;
      value = value.value;
    }
    this.checkValues(value, item, mdd, itemIndex, false, shouldAddItem);
  }
  onTab(value, item, mdd, itemIndex) {
    event?.preventDefault();
    let checkValues;
    if (value instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.BlurEvent) {
      checkValues = this.checkValues(value.value, item, value.mdd ? value.mdd : mdd, itemIndex);
    } else {
      checkValues = this.checkValues(value, item, mdd, itemIndex);
    }
    if (checkValues) {
      checkValues.then(() => {
        return this.moveToNextCell();
      });
    } else {
      this.moveToNextCell().then(() => {}).catch(() => {});
    }
  }
  onShiftTab(value, item, mdd, itemIndex) {
    event?.preventDefault();
    this.checkValues(value, item, mdd, itemIndex);
    this.moveToPreviousCell();
  }
  onReturn(value, item, mdd, rowIndex, cellIndex) {
    item.set(mdd.name, value, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataValidity.unknown);
    this.checkValues(value, item, mdd, rowIndex, true).then(() => {
      this.captureUpdate.changeValueValidity({
        id: mdd.id + rowIndex + cellIndex,
        validity: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataValidity.valid
      });
    });
  }
  checkValues(value, item, mdd, itemIndex, force = false, addNewLineItem = false) {
    const prevValue = this.getFieldValue(item, mdd);
    const isSuspiciousField = this.getValidity(item, mdd) === shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataValidity.suspicious;
    if (!this.isEqual(value, prevValue) || force || isSuspiciousField) {
      return this.setFieldValue(itemIndex, mdd, value, false, 0, addNewLineItem);
    }
  }
  isEqual(value1, value2) {
    if (typeof value1 != 'string' || typeof value2 != 'string') return false;
    return value1.replace(/\n/g, '') === value2.replace(/\n/g, '');
  }
  getFieldDefinition(mdd) {
    const fd = mdd.asFieldDefinition();
    fd.datasource = shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDataSource.create(mdd, this.hydraApi);
    fd.label = '';
    fd.displayMode = shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDisplayMode.grid;
    return fd;
  }
  getFieldValue(item, mdd) {
    if (!item) return '';
    const md = item.get(mdd.name);
    if (!md) return '';
    return `${md.value}`;
  }
  getValueLocation(item, mdd) {
    if (!item) {
      return null;
    }
    const md = item.get(mdd.name);
    if (!md) {
      return null;
    }
    return md.location;
  }
  setFieldValue(itemIndex, mdd, value, moveNext, counter = 0, addNewLineItem = false) {
    // copy the current line items to be saved when validation returns
    // this way it preserves the instantly created row
    const currentWorkItem = Object.assign({}, this.capture.getCurrentWorkItem());
    const currentLineItems = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataLineItems();
    currentLineItems.push(...this.lineItems);
    const item = currentLineItems[itemIndex];
    if (!item) {
      if (counter > 10) {
        this.hideSpinner();
        return;
      }
      this.addItem().then(() => this.setFieldValue(itemIndex, mdd, value, moveNext, ++counter, addNewLineItem));
      this.hideSpinner();
      return;
    }
    const md = item.get(mdd.name);
    if (!md) {
      this.hideSpinner();
      return;
    }
    md.validity = shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataValidity.unknown;
    if (mdd.type === shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Lookup) {
      this.hideSpinner();
      return;
    }
    this.showSpinner('Indexing.validating-items');
    return this.capture.validateLineItemValue(mdd, value, true).then(metadata => {
      item.set(mdd.name, metadata.value, metadata.validity);
      this.showSpinner('Indexing.saving-items');
      return this.capture.saveLineItems(currentLineItems, currentWorkItem).then(() => {
        if (currentWorkItem.id === this.capture.getCurrentWorkItem().id && moveNext) {
          return this.moveToNextCell().then(() => {
            this.hideSpinner();
          });
        } else if (addNewLineItem) {
          return this.addItem(true).then(() => {
            this.hideSpinner();
          });
        } else {
          this.hideSpinner();
        }
      }, this.hideSpinner).catch(err => {
        console.log(err);
        this.hideSpinner();
      }).then(this.hideSpinner);
    }, this.hideSpinner).catch(err => {
      console.log(err);
      this.hideSpinner();
    }).then(this.hideSpinner).catch(this.hideSpinner);
  }
  shouldValueBeSet(rowIndex, cellIndex) {
    if (rowIndex === this.selectedRowIndex && cellIndex === this.selectedCellIndex) return this.value;
    return '';
  }
  mapGroupOfValues(values) {
    const currentSelectedRowIndex = this.selectedRowIndex;
    const existingItems = this.lineItems.slice(currentSelectedRowIndex);
    if (existingItems.length < values.length) {
      this.showSpinner('Indexing.loading-line-items-defaults');
      this.getLineItemDefaults().then(defaultLineItem => {
        this.hideSpinner();
        for (let i = existingItems.length; i < values.length; i++) {
          this.lineItems.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataCollection(defaultLineItem));
        }
        this.updateLineItemsReference();
        this.applyColumnMetaDataValues(values, currentSelectedRowIndex);
      }).catch(err => {
        this.hideSpinner();
        this.toastr.error(this.translate.instant('Indexing.line-items-defaults-load-error'));
      });
    } else {
      this.applyColumnMetaDataValues(values, currentSelectedRowIndex);
    }
  }
  getValidity(item, mdd) {
    if (!item) {
      return null;
    }
    const md = item.get(mdd.name);
    if (!md) {
      return null;
    }
    return md.validity;
  }
  onScroll() {
    this.dropDown.scrolled();
  }
  onSaveLookupValues(event, index) {
    const item = this.lineItems[index];
    event.lookups.forEach(lookup => {
      if (!lookup.overwrite) {
        if (item.get(lookup.metadata.name).value) {
          return;
        }
      }
      item.set(lookup.metadata.name, lookup.value, lookup.validity);
    });
    this.showSpinner('Indexing.saving-items');
    this.hydraApi.validateAndUpdateBulkMetadata(new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.BulkValidationRequest(item.serializable(), event.lookups.map(x => x.metaDataId), true), mdc => this.onRowValidationSucceed(mdc, event, index), this.onRowValidationFailed);
  }
  getContext() {
    return this.capture.getCurrentWorkItem();
  }
  trackLineItemById(index, item) {
    return item.id;
  }
  updateLineItemsReference() {
    const lineItemsCopy = [...this.lineItems];
    this.lineItems = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataLineItems();
    this.lineItems.push(...lineItemsCopy);
  }
  setVirtualScrollViewportStyles() {
    const lineItemIndexingWrapper = this.getLineItemIndexingElement();
    if (!lineItemIndexingWrapper) return;
    const tableWrapperElement = this.tableWrapper?.directiveRef.elementRef.nativeElement;
    if (!tableWrapperElement) return;
    const {
      clientWidth,
      scrollWidth
    } = tableWrapperElement;
    const minimumLineItemsTableWidth = 900;
    const lineItemsHeaderHeight = 30;
    this.virtualScrollViewportStyles = {
      width: (clientWidth > minimumLineItemsTableWidth ? clientWidth : scrollWidth) + 'px',
      height: lineItemIndexingWrapper.clientHeight - 2 * lineItemsHeaderHeight + 'px'
    };
  }
  static {
    this.ɵfac = function LineItemIndexingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LineItemIndexingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_7__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_8__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_capture_services__WEBPACK_IMPORTED_MODULE_7__.IndexingPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_3__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_17__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DropDownService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_9__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_10__.SelectedItemsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: LineItemIndexingComponent,
      selectors: [["app-line-item-indexing"]],
      viewQuery: function LineItemIndexingComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuerySignal"](ctx.cdkScrollElement, _c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryAdvance"]();
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.virtualScrollViewport = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.tableWrapper = _t.first);
        }
      },
      outputs: {
        setCurrentCell: "setCurrentCell",
        removeFocus: "removeFocus"
      },
      decls: 6,
      vars: 5,
      consts: [["tableWrapper", ""], ["virtualScrollViewport", ""], ["id", "line-item-indexing", 1, "line-item-indexing"], [1, "pannel-header", "pr-0"], ["class", "btn-group", 4, "ngIf"], ["class", "table-wrapper", 3, "config", 4, "ngIf"], [1, "btn-group"], [1, "d-flex", "justify-content-center", "align-items-center"], ["id", "addLineItemButton", 1, "button-icon", 3, "click", "disabled", "title"], [1, "circle", "d-flex", "justify-content-center", "align-items-center"], [1, "icon-plus"], [1, "table-wrapper", 3, "config"], [1, "line-items-table"], [1, "line-items-table-head"], [3, "title", 4, "ngFor", "ngForOf"], [2, "width", "48px", 3, "title"], ["class", "line-items-table-body p-0", 4, "ngIf"], [3, "title"], [1, "m-1", "text-truncate", 3, "title"], [1, "line-items-table-body", "p-0"], ["itemSize", "46", "minBufferPx", "184", "maxBufferPx", "368", 3, "scrolledIndexChange", "ngStyle"], ["class", "line-items-table-row", 3, "active", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize", "cdkVirtualForTrackBy"], ["class", "line-items-table-row line-items-totals", 4, "ngIf"], [1, "line-items-table-row"], ["class", "line-items-table-data", 3, "active", 4, "ngFor", "ngForOf"], [1, "line-items-table-data", 2, "width", "30px"], [1, "button-icon", "delete-button", 3, "click", "title"], [1, "icon-cancel-circle"], [1, "line-items-table-data"], [3, "blurex", "focus", "tab", "shiftTab", "saveLookupValues", "return", "field", "value", "validity", "focused", "fillViaPointAClick", "findMetaDataService", "metaDataCollection"], [1, "line-items-table-row", "line-items-totals"], ["class", "line-items-table-data", 4, "ngFor", "ngForOf"], [1, "line-items-table-data", "text-center", 2, "width", "48px"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "text"]],
      template: function LineItemIndexingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "section", 2)(1, "div", 3)(2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, LineItemIndexingComponent_div_4_Template, 6, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, LineItemIndexingComponent_perfect_scrollbar_5_Template, 9, 7, "perfect-scrollbar", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("disabled", !ctx.oneDocumentSelected || !ctx.documentLocked || ctx.isBusy);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.headerLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isInitialized);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isInitialized);
        }
      },
      dependencies: [_Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_11__.LabelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgStyle, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_21__.PerfectScrollbarComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_12__.FieldComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkVirtualScrollViewport, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.line-item-indexing {\n  background: #ffffff;\n  border-right: 1px solid #cfcfcf;\n  border-top: none;\n  height: 100%;\n  min-width: 300px;\n  position: relative;\n  padding-bottom: 2px;\n}\n.line-item-indexing .pannel-header .btn-group {\n  position: relative;\n}\n.line-item-indexing .pannel-header .btn-group .circle {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #0d4a62;\n  border-radius: 50%;\n}\n.line-item-indexing .pannel-header .btn-group .circle i {\n  color: #0d4a62;\n}\n.line-item-indexing .expression-field .icon {\n  top: 10px !important;\n}\n.line-item-indexing .table-wrapper {\n  height: calc(100% - 30px);\n  max-height: calc(100% - 30px);\n  padding-left: 5px;\n  position: relative;\n  width: 100%;\n}\n.line-item-indexing .table-wrapper table.line-items-table {\n  height: 100%;\n  min-width: 900px !important;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px;\n}\n.line-item-indexing .table-wrapper table.line-items-table thead.line-items-table-head tr th {\n  height: 30px;\n  background-color: #f1f3f3;\n  border: 1px solid #6e6e6e;\n  border-right: none;\n  padding: 0 5px;\n}\n.line-item-indexing .table-wrapper table.line-items-table thead.line-items-table-head tr th:first-child {\n  border-left: none;\n}\n.line-item-indexing .table-wrapper table.line-items-table thead.line-items-table-head tr th p {\n  font-size: 11px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.82;\n  letter-spacing: normal;\n  color: #6e6e6e;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body {\n  display: table;\n  position: relative;\n  min-height: 75px;\n  width: 100%;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row {\n  display: table;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data {\n  border: 1px solid transparent;\n  border-right: none;\n  border-top-color: #e4e4e4;\n  height: 36px;\n  font-size: 12px;\n  color: #151515;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data .cell-value {\n  padding: 2px;\n  border: 1px solid transparent;\n  outline: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data .col-12:not(.lookup-field),\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data .col-6 {\n  padding: 0 !important;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data .row {\n  margin: 0;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data button.delete-button {\n  font-size: 16px;\n  color: #666;\n  display: block;\n  transition: color 0.35s;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data button.delete-button:hover {\n  color: #e10012;\n  transition: color 0.35s;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row td.line-items-table-data button.delete-button:focus {\n  box-shadow: none !important;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row:last-child td {\n  border-bottom-color: #e4e4e4;\n}\n.line-item-indexing .table-wrapper table.line-items-table tbody.line-items-table-body tr.line-items-table-row.active {\n  background: #d1ccc0;\n}\n.line-item-indexing .table-wrapper table.line-items-table thead,\n.line-item-indexing .table-wrapper table.line-items-table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed; /* even columns width , fix width of table too*/\n}\n.line-item-indexing .field .field-wrapper i.validation-icon {\n  right: 5px;\n}\n.line-item-indexing .field .field-wrapper .lookup-button {\n  top: 4px;\n  right: 25px;\n}\n.line-item-indexing .field .field-wrapper.datetime-field .button-icon {\n  right: 25px;\n  top: 9px;\n}\n.line-item-indexing .field app-list .field-wrapper:not(.has-value) {\n  position: relative;\n  top: -5px;\n}\n.line-item-indexing .line-items-totals label {\n  padding-left: 18px;\n  font-weight: bold;\n}\n.line-item-indexing .line-items-totals .valid * {\n  color: #19a74b !important;\n}\n.line-item-indexing .line-items-totals .not-valid * {\n  color: #e10012 !important;\n}\n\n.top-drop-down .line-item-indexing .ps {\n  overflow: visible !important;\n}\n\n.rtl .line-item-indexing .field .field-wrapper i.validation-icon {\n  right: initial;\n  left: 5px;\n}\n.rtl .line-item-indexing .field .field-wrapper .lookup-button {\n  left: 25px;\n  right: auto;\n}\n.rtl .line-item-indexing .field .field-wrapper.datetime-field .button-icon {\n  left: 25px;\n  right: auto;\n}\n.rtl .line-item-indexing .line-items-totals label {\n  padding-left: initial;\n  padding-right: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2RvY3VtZW50LWNhcHR1cmUvbGluZS1pdGVtLWluZGV4aW5nL2xpbmUtaXRlbS1pbmRleGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZ1BGO0FBOU9JO0VBQ0Usa0JBQUE7QUFnUE47QUEvT007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFpUFI7QUFoUFE7RUFDRSxjRDBFUztBQ3dLbkI7QUE1T0k7RUFDRSxvQkFBQTtBQThPTjtBQTNPRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTZPSjtBQTVPSTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBOE9OO0FBM09VO0VBQ0UsWUFBQTtFQUNBLHlCRDJCRjtFQzFCRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTZPWjtBQTVPWTtFQUNFLGlCQUFBO0FBOE9kO0FBNU9ZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBOE9kO0FBek9NO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBMk9SO0FBek9RO0VBQ0UsY0FBQTtBQTJPVjtBQXpPVTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTJPWjtBQTFPWTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBNE9kO0FBMU9ZOztFQUVFLHFCQUFBO0FBNE9kO0FBMU9ZO0VBQ0UsU0FBQTtBQTRPZDtBQTFPWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBNE9kO0FBM09jO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBNk9oQjtBQTFPYztFQUNFLDJCQUFBO0FBNE9oQjtBQXZPWTtFQUNFLDRCQUFBO0FBeU9kO0FBdE9VO0VBQ0UsbUJBQUE7QUF3T1o7QUFwT007O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQSxFQUFBLCtDQUFBO0FBc09SO0FBL05NO0VBQ0UsVUFBQTtBQWlPUjtBQTlOTTtFQUNFLFFBQUE7RUFDQSxXQUFBO0FBZ09SO0FBN05NO0VBQ0UsV0FBQTtFQUNBLFFBQUE7QUErTlI7QUExTk07RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUE0TlI7QUF0Tkk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBd05OO0FBdE5JO0VBQ0UseUJBQUE7QUF3Tk47QUF0Tkk7RUFDRSx5QkFBQTtBQXdOTjs7QUFqTkk7RUFDRSw0QkFBQTtBQW9OTjs7QUEzTVE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQThNVjtBQTNNUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBNk1WO0FBMU1RO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUE0TVY7QUF0TU07RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBd01SIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4ubGluZS1pdGVtLWluZGV4aW5nIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZmNmY2Y7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAucGFubmVsLWhlYWRlciB7XHJcbiAgICAuYnRuLWdyb3VwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAuY2lyY2xlIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGluZm87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICRpbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZXhwcmVzc2lvbi1maWVsZCB7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGFibGUtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUubGluZS1pdGVtcy10YWJsZSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgdGhlYWQubGluZS1pdGVtcy10YWJsZS1oZWFkIHtcclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTZlNmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44MjtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRib2R5LmxpbmUtaXRlbXMtdGFibGUtYm9keSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIHRyLmxpbmUtaXRlbXMtdGFibGUtcm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAgICAgICAgIHRkLmxpbmUtaXRlbXMtdGFibGUtZGF0YSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzE1MTUxNTtcclxuICAgICAgICAgICAgLmNlbGwtdmFsdWUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC0xMjpub3QoLmxvb2t1cC1maWVsZCksXHJcbiAgICAgICAgICAgIC5jb2wtNiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzO1xyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlMTAwMTI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjM1cztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2QxY2NjMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhlYWQsXHJcbiAgICAgIHRib2R5IHRyIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkOyAvKiBldmVuIGNvbHVtbnMgd2lkdGggLCBmaXggd2lkdGggb2YgdGFibGUgdG9vKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpZWxkIHtcclxuICAgIC5maWVsZC13cmFwcGVyIHtcclxuICAgICAgaS52YWxpZGF0aW9uLWljb24ge1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb29rdXAtYnV0dG9uIHtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kYXRldGltZS1maWVsZCAuYnV0dG9uLWljb24ge1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogOXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLWxpc3Qge1xyXG4gICAgICAuZmllbGQtd3JhcHBlcjpub3QoLmhhcy12YWx1ZSkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lLWl0ZW1zLXRvdGFscyB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAudmFsaWQgKiB7XHJcbiAgICAgIGNvbG9yOiAjMTlhNzRiICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubm90LXZhbGlkICoge1xyXG4gICAgICBjb2xvcjogI2UxMDAxMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvcC1kcm9wLWRvd24ge1xyXG4gIC5saW5lLWl0ZW0taW5kZXhpbmcge1xyXG4gICAgLnBzIHtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ydGwge1xyXG4gIC5saW5lLWl0ZW0taW5kZXhpbmcge1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgLmZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgIGkudmFsaWRhdGlvbi1pY29uIHtcclxuICAgICAgICAgIHJpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvb2t1cC1idXR0b24ge1xyXG4gICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kYXRldGltZS1maWVsZCAuYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saW5lLWl0ZW1zLXRvdGFscyB7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWw7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 85404:
/*!*********************************************************************!*\
  !*** ./src/app/views/document-capture/toolbar/toolbar.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver/FileSaver */ 10049);
/* harmony import */ var file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_document_scanner_utils_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/components/document-scanner/utils/pdf */ 361);
/* harmony import */ var _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/core/actions */ 75414);
/* harmony import */ var _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/core/fileName */ 28016);
/* harmony import */ var _blocks_core_keyboardActionMapping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/core/keyboardActionMapping */ 20294);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_in_progress_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/services/in-progress.service */ 36834);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _capture_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../capture-models */ 48004);
/* harmony import */ var _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../capture-models/scan-commands */ 79910);
/* harmony import */ var _capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../capture-services/capture-update.service */ 321);
/* harmony import */ var _capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../capture-services/document-capture.service */ 70131);
/* harmony import */ var _capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../capture-services/document-locking.service */ 51244);
/* harmony import */ var _capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../capture-services/selected-items.service */ 85641);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _blocks_components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../blocks/components/action-button/action-button.component */ 33232);
/* harmony import */ var _blocks_components_document_scanner_document_scanner_and_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../blocks/components/document-scanner/document-scanner-and-editor.component */ 71840);
/* harmony import */ var _blocks_components_split_button_split_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../blocks/components/split-button/split-button.component */ 56516);













































function ToolbarComponent_app_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "app-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayListener"]("valueChange", function ToolbarComponent_app_field_8_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayBindingSet"](ctx_r2.selectedWorkflowId, $event) || (ctx_r2.selectedWorkflowId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("fieldChanged", function ToolbarComponent_app_field_8_Template_app_field_fieldChanged_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r2.onWorkflowChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("field", ctx_r2.fieldWorkflow);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayProperty"]("value", ctx_r2.selectedWorkflowId);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", !ctx_r2.selectedWorkflow);
  }
}
function ToolbarComponent_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 1, "Scanning.NoProfilesFound"), " ");
  }
}
function ToolbarComponent_app_splitbutton_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "app-splitbutton", 24);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("items", ctx_r2.scanSplitItems);
  }
}
function ToolbarComponent_app_splitbutton_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "app-splitbutton", 24);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("items", ctx_r2.importSplitItems);
  }
}
function ToolbarComponent_app_splitbutton_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "app-splitbutton", 24);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("items", ctx_r2.captureSplitItems);
  }
}
function ToolbarComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function ToolbarComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r2.generateQRCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵclassProp"]("disabled", !ctx_r2.selectedWorkflow);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", !ctx_r2.selectedWorkflow)("title", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](1, 4, "qr-code.generate-qr-code"));
  }
}
function ToolbarComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "app-action-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, "Scanning.generate-workflow-routingsheet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("action", ctx_r2.Action.GenerateRoutingSheet);
  }
}
function ToolbarComponent_div_18_span_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function ToolbarComponent_div_18_span_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r5);
      const button_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r2.onClick(button_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const button_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("title", button_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", !ctx_r2.hasSelectedItems || (!ctx_r2.currentDocument || ctx_r2.currentDocument && !ctx_r2.documentLocked) && !ctx_r2.currentFolderHasItems());
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("title", button_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](button_r6.label);
  }
}
function ToolbarComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, ToolbarComponent_div_18_span_1_button_1_Template, 3, 4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const button_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", button_r6.enabled);
  }
}
function ToolbarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, ToolbarComponent_div_18_span_1_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r2.outcomeButtons);
  }
}
function ToolbarComponent_app_document_scanner_and_editor_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "app-document-scanner-and-editor", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("done", function ToolbarComponent_app_document_scanner_and_editor_27_Template_app_document_scanner_and_editor_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r2.onFinishCapturing($event));
    })("close", function ToolbarComponent_app_document_scanner_and_editor_27_Template_app_document_scanner_and_editor_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r2.closeCaptureModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}
class ToolbarComponent {
  //note: folderEvents solves a chicken-egg problem - do not remove
  constructor(captureService, toastr, translate, captureUpdate, cdr, ngxSmartModalService, userState, inProgress, actionService, hydraApi, spinner, documentLockingService, userStateService, calculations, selectedItemsService, userPreferencesService, ngxSmartModal, errorService) {
    this.captureService = captureService;
    this.toastr = toastr;
    this.translate = translate;
    this.captureUpdate = captureUpdate;
    this.cdr = cdr;
    this.ngxSmartModalService = ngxSmartModalService;
    this.userState = userState;
    this.inProgress = inProgress;
    this.actionService = actionService;
    this.hydraApi = hydraApi;
    this.spinner = spinner;
    this.documentLockingService = documentLockingService;
    this.userStateService = userStateService;
    this.calculations = calculations;
    this.selectedItemsService = selectedItemsService;
    this.userPreferencesService = userPreferencesService;
    this.ngxSmartModal = ngxSmartModal;
    this.errorService = errorService;
    this.scan = new _angular_core__WEBPACK_IMPORTED_MODULE_23__.EventEmitter();
    this.discardDocuments = new _angular_core__WEBPACK_IMPORTED_MODULE_23__.EventEmitter();
    this.scanSplitItems = [];
    this.importSplitItems = [];
    this.captureSplitItems = [];
    this.classNamePrefix = 'project-item-';
    this.showScanner = false;
    this.isCameraAvailable = false;
    this.isProfileAvailable = true;
    this.invokedAction = null;
    this.LastSelectedWorfklowId = 'LastSelectedWorkflowId';
    this.supportedFileTypes = _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__.Filename.supportedFileTypes;
    this.workflowDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(new Array());
    this.Action = _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action;
    this.onChangedSelectedItems = () => {
      this.oneItemSelected = this.selectedItemsService.isOneItemSelected();
      this.hasSelectedItems = this.selectedItemsService.hasItemsSelected();
      this.updateUI();
    };
    this.lockStatusChanged = ls => {
      if (!this.currentDocument || !this.currentDocument.workitem) return;
      if (ls.id == this.currentDocument.workitem.id) {
        this.documentLocked = ls.locked && ls.lockedByUserId == this.userStateService.user.id && !ls.expired();
        this.updateUI();
      }
    };
    this.updateUI = () => {
      this.initializeScanItems();
      this.initializeImportItems();
      this.initializeCaptureItems();
      this.detectChanges();
    };
    this.detectChanges = () => {
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    };
    this.workflowsLoaded = workflows => {
      if (!workflows.length) {
        const noProfilesFound = this.translate.instant('Scanning.NoProfilesFound');
        this.workflowDataSource.options.push({
          name: noProfilesFound,
          value: ''
        });
        this.toastr.info(noProfilesFound);
        this.isProfileAvailable = false;
        if (!this.cdr['destroyed']) this.cdr.detectChanges();
      } else {
        this.destinations = workflows;
        this.isProfileAvailable = true;
        this.destinations.forEach(c => {
          this.workflowDataSource.options.push({
            name: c.name,
            value: c.id
          });
        });
        const lastSelectedWorkflowId = this.userPreferencesService.getPreference(this.LastSelectedWorfklowId);
        if (lastSelectedWorkflowId) {
          this.selectedWorkflow = this.destinations.find(w => w.id === lastSelectedWorkflowId) || this.destinations[0];
        } else {
          this.selectedWorkflow = this.destinations[0];
        }
        this.selectedWorkflowId = this.selectedWorkflow.id;
        this.createWorkflowsList();
        this.initializeScanItems();
        this.captureService.setDestination(this.selectedWorkflow);
        if (!this.cdr['destroyed']) {
          this.cdr.detectChanges();
        }
      }
    };
    this.loadWorkflowsFailed = err => {
      this.toastr.error(this.translate.instant('Common.LoadingDataError'));
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    };
    this.invokeAction = event => {
      this.invokedAction = event.action;
      switch (event.action) {
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ScanNew:
          this.onScan();
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ScanToFolder:
          this.onScanToFolder();
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ImportToUnselectedFolder:
          this.onImportToUnSelectedFolder(event, false);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ScanToUnselectedFolder:
          this.onScanToUnSelectedFolder(event);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ScanMorePages:
          this.onScanMorePages();
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RescanPage:
          this.onRescanPage();
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RescanDocument:
          this.onRescanDocument(event);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ImportToFolder:
          this.onImportToFolder(false);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ImportNew:
          this.onImport(false);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ImportMorePages:
          this.onImportMorePages(false);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ReimportPage:
          this.onReimportPage(false);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ReimportDocument:
          this.onReimportDocument(event, false);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.CaptureNew:
          this.onImport(true);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.CaptureToFolder:
          this.onImportToFolder(true);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.CaptureMorePages:
          this.onImportMorePages(true);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RecapturePage:
          this.onReimportPage(true);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RecaptureDocument:
          this.onReimportDocument(event, true);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome1:
          this.executeOutcome(1);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome2:
          this.executeOutcome(2);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome3:
          this.executeOutcome(3);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome4:
          this.executeOutcome(4);
          break;
        case _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.GenerateRoutingSheet:
          this.executeGenerateRoutingSheet();
          break;
      }
    };
    this.executeGenerateRoutingSheet = () => {
      if (!this.selectedWorkflow) return;
      this.spinner.show(this.translate.instant('Scanning.generating-workflow-routingsheet'), document.getElementById('spinnerPanel'));
      this.hydraApi.workflowGenerateRoutingSheet(this.selectedWorkflow.id, this.onGeneratedRoutingSheet, this.onFailedGenerateRoutingSheet);
    };
    this.onGeneratedRoutingSheet = blob => {
      this.spinner.hide();
      (0,file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, `${this.selectedWorkflow.name}-routingsheet.pdf`);
    };
    this.onFailedGenerateRoutingSheet = () => {
      this.spinner.hide();
      this.toastr.error(this.translate.instant('Scanning.failed-generate-workflow-routingsheet'));
    };
    this.import = (i, multiple, useCamera) => {
      this.importer = i;
      if (!useCamera) {
        this.openFilePicker(multiple);
      } else {
        this.openCaptureModal();
      }
    };
    this.onImport = useCamera => {
      if (!this.anyImportingAllowed()) return;
      this.import(files => {
        this.captureService.addBatchWithMultipleDocuments(files);
      }, true, useCamera);
    };
    this.onImportToFolder = useCamera => {
      if (!this.isCaptureFolderOrDocumentSelected() || !this.importingToFolderAllowed()) return;
      const currentFolderId = this.currentDocument ? this.currentDocument.parentFolderId : this.currentFolder.id;
      const folder = this.captureService.findFolder(currentFolderId);
      if (!folder) return;
      if (folder.parentWorkflowFolder == null) {
        this.onImport(useCamera);
      } else {
        this.import(files => {
          for (let i = 0; i < files.length; i++) {
            this.captureService.addFiletoFolder(files[i], _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__.Filename.getFileNameWithoutExtension(files[i].name), _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__.Filename.getFileExtension(files[i].name), folder);
          }
        }, true, useCamera);
      }
    };
    this.onImportMorePages = useCamera => {
      if (!this.isCaptureDocumentSelected() || !this.importingMorePagesAllowed()) return;
      const folder = this.captureService.findFolder(this.currentDocument.parentFolderId);
      const result = folder.findDocument(this.currentDocument.id);
      this.import(files => {
        this.captureService.appendPagesToDocument(result.workItem, result.document, files, _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__.Filename.getFileExtension(files[0].name));
      }, false, useCamera);
    };
    this.onReimportPage = useCamera => {
      if (!this.isCapturePageSelected() || !this.reimportingPagesAllowed()) return;
      this.import(files => {
        this.captureService.reImportPageToDocument(files[0]);
      }, false, useCamera);
    };
    this.onScan = () => {
      this.scan.emit(new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanToWorkflow(this.captureService.currentWorkflow.id, this.captureService.currentWorkflow.scanSettings, new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanOptions(this.translate.currentLang, true), new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.DocumentProperties()));
    };
    this.onScanToFolder = () => {
      if (!this.isCaptureFolderOrDocumentSelected() || !this.scanningToFolderAllowed()) {
        this.captureService.showNoScanFolderError();
        return;
      }
      const currentFolderId = this.currentDocument ? this.currentDocument.parentFolderId : this.currentFolder.id;
      const folder = this.captureService.findFolder(currentFolderId);
      if (folder && folder.parentWorkflowFolder == null) {
        this.onScan();
      } else {
        this.scan.emit(new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanToFolder(this.captureService.currentWorkflow.id, currentFolderId, this.captureService.currentWorkflow.scanSettings));
      }
    };
    this.onScanMorePages = () => {
      if (!this.isCaptureDocumentSelected() || !this.scanningMorePagesAllowed()) {
        this.captureService.showNoScanDocumentError();
        return;
      }
      this.scan.emit(new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanAdditionalPages(this.captureService.currentWorkflow.id, this.currentDocument.id, this.currentDocument.parentFolderId, this.captureService.currentWorkflow.scanSettings, new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanOptions(this.translate.currentLang, false), new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.DocumentProperties()));
    };
    this.onRescanPage = () => {
      if (!this.isCapturePageSelected() || !this.rescanningPagesAllowed()) {
        this.captureService.showNoScanPageError();
        return;
      }
      this.scan.emit(new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.RescanPage(this.captureService.currentWorkflow.id, this.currentDocument.id, this.currentDocument.parentFolderId, this.currentPage.order, this.captureService.currentWorkflow.scanSettings, new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanOptions(this.translate.currentLang, false), new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.DocumentProperties()));
    };
    this.onClick = outcome => {
      this.captureService.executeOutcome(outcome);
    };
    this.anyScanningAllowed = () => {
      if (this.scanningAllowed() || this.rescanningPagesAllowed() || this.scanningMorePagesAllowed() || this.scanningToFolderAllowed()) return true;
      return false;
    };
    this.anyImportingAllowed = () => {
      if (this.importingAllowed() || this.reimportingPagesAllowed() || this.importingMorePagesAllowed() || this.importingToFolderAllowed()) return true;
      return false;
    };
    this.isWorkflowSelected = () => this.selectedWorkflow != null;
    this.isCaptureDocumentSelected = () => this.currentDocument != null;
    this.currentStepHasScanCapability = capability => {
      if (!this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.RolePermissions.CaptureScan)) return false;
      const ws = this.getCurrentWorkflowStep();
      if (ws == null) return false;
      return ws.hasCapability(capability);
    };
    this.currentStepHasImportCapability = capability => {
      if (!this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.RolePermissions.CaptureImport)) return false;
      const ws = this.getCurrentWorkflowStep();
      if (ws == null) return false;
      return ws.hasCapability(capability);
    };
    this.getCurrentWorkflowStep = () => {
      if (this.currentDocument != null) return this.captureService.getWorkflowStepById(this.currentDocument.parentStepId);
      if (this.currentFolder != null) return this.captureService.getWorkflowStepById(this.currentFolder.workflowStepId);
      return null;
    };
    this.scanningAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureScan);
    this.scanningToFolderAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureScanToFolder);
    this.rescanningPagesAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureRescanPage);
    this.scanningMorePagesAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureScanMorePages);
    this.importingAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureImport);
    this.importingToFolderAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureImportToFolder);
    this.reimportingPagesAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureReimportPage);
    this.importingMorePagesAllowed = () => this.currentStepHasScanCapability(_capture_models__WEBPACK_IMPORTED_MODULE_13__.Capabilities.allowCaptureImportMorePages);
    this.canShowQRCode = () => {
      return this.scanningAllowed() && this.importingAllowed() && this.userState.userProfile.mobileBrand == shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.Branding.IntelligentCapture;
    };
    this.isCaptureFolderOrDocumentSelected = () => {
      return this.currentDocument != null || this.currentFolder != null;
    };
    this.currentFolderHasItems = () => {
      if (!this.currentFolder) return false;
      return this.currentFolder.folderHasItems();
    };
    this.isCapturePageSelected = () => {
      if (!this.currentPage || !this.currentDocument) return false;
      return true;
    };
    this.generateQRCode = () => {
      this.spinner.show(this.translate.instant('qr-code.generating-qr-code'), document.body);
      this.hydraApi.getDocumentCaptureQRCode(this.selectedWorkflow.id, this.qrcodeLoaded, this.qrcodeFailed);
    };
    this.qrcodeLoaded = file => {
      file = file.slice(0, file.size, 'image/bmp');
      var urlCreator = window.URL || window.webkitURL;
      this.ngxSmartModal.setModalData({
        title: 'qr-code.qr-code-title',
        imageUrl: urlCreator.createObjectURL(file)
      }, 'qrCodeModal', true);
      this.ngxSmartModal.open('qrCodeModal');
      this.spinner.hide();
    };
    this.qrcodeFailed = err => {
      const that = this;
      const reader = new FileReader();
      reader.onload = function () {
        that.spinner.hide();
        const errorMessage = reader.result ? reader.result : that.translate.instant('qr-code.qr-code-failed');
        that.errorService.showErrorsModal([errorMessage], 'qr-code.generate-qr-code');
      };
      reader.readAsText(err.error);
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_6__.Log.error(that.translate.instant('qr-code.qr-code-failed'), err);
    };
    this.createWorkflowsList = () => {
      this.fieldWorkflow = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
        label: '',
        placeholder: '',
        required: false,
        datasource: this.workflowDataSource
      });
    };
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.documentLockingService.lockStatusChanged.subscribe(this.lockStatusChanged));
    this.captureService.loadWorkFlows().then(workflows => this.workflowsLoaded(workflows)).catch(err => this.loadWorkflowsFailed(err));
    this.subscriptions.add(this.actionService.onActivateAction.subscribe(this.invokeAction));
    this.subscriptions.add(this.captureUpdate.onChangeFolder.subscribe(folder => {
      this.currentFolder = folder;
      this.updateUI();
    }));
    this.subscriptions.add(this.captureUpdate.onChangeDocument.subscribe(doc => {
      this.documentLocked = false;
      this.currentDocument = doc;
      this.updateUI();
    }));
    this.subscriptions.add(this.captureUpdate.onParentFolderChanged.subscribe(doc => this.currentDocument = doc));
    this.subscriptions.add(this.captureUpdate.onChangeDocumentPage.subscribe(page => {
      this.currentPage = page;
      this.updateUI();
    }));
    this.subscriptions.add(this.captureUpdate.onChangeOutcomeButtons.subscribe(outcomes => {
      this.outcomeButtons = this.updateOutcomesKeyboardMapping(outcomes);
      this.detectChanges();
    }));
    this.onChangedSelectedItems();
    this.subscriptions.add(this.selectedItemsService.onChangeSelectedItems.subscribe(this.onChangedSelectedItems));
    this.setCameraAvailability();
  }
  setCameraAvailability() {
    if (_angular_core__WEBPACK_IMPORTED_MODULE_23__.isDevMode) {
      this.isCameraAvailable = true;
      return;
    }
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(() => {
      this.isCameraAvailable = true;
    }).catch(() => {
      this.isCameraAvailable = false;
    });
  }
  updateOutcomesKeyboardMapping(outcomes) {
    for (let i = outcomes.length - 1; i >= 0; i--) {
      const outcomeNumber = outcomes.length - i;
      const action = this.getOutcomeAction(outcomeNumber);
      if (!action) continue;
      const mapping = _blocks_core_keyboardActionMapping__WEBPACK_IMPORTED_MODULE_5__.KeyboardActionMapping.getTooltipFor(action, this.translate);
      outcomes[i].label += `${mapping}`;
    }
    return outcomes;
  }
  getOutcomeAction(outcomeNumber) {
    if (outcomeNumber === 1) return _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome1;else if (outcomeNumber === 2) return _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome2;else if (outcomeNumber === 3) return _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome3;else if (outcomeNumber === 4) return _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.Outcome4;else return null;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  initializeScanItems() {
    this.scanSplitItems = [];
    const scanToFolder = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ScanToFolder,
      image: 'assets/icons/icnScanCapture.svg',
      enabled: this.isCaptureFolderOrDocumentSelected() && this.scanningToFolderAllowed() && this.oneItemSelected
    };
    this.scanSplitItems.push(scanToFolder);
    const scanNew = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ScanNew,
      image: '',
      enabled: this.isWorkflowSelected() && this.scanningAllowed()
    };
    this.scanSplitItems.push(scanNew);
    const scanMorePages = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ScanMorePages,
      image: '',
      enabled: this.isCaptureDocumentSelected() && this.scanningMorePagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.scanSplitItems.push(scanMorePages);
    const reScanPage = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RescanPage,
      image: '',
      enabled: this.isCapturePageSelected() && this.rescanningPagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.scanSplitItems.push(reScanPage);
    const reScanDocument = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RescanDocument,
      image: '',
      enabled: this.isCaptureDocumentSelected() && this.rescanningPagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.scanSplitItems.push(reScanDocument);
  }
  initializeImportItems() {
    this.importSplitItems = [];
    const importToFolder = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ImportToFolder,
      image: 'assets/icons/icnImport.svg',
      enabled: this.isCaptureFolderOrDocumentSelected() && this.importingToFolderAllowed() && this.oneItemSelected
    };
    this.importSplitItems.push(importToFolder);
    const importNew = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ImportNew,
      image: '',
      enabled: this.isWorkflowSelected() && this.importingAllowed()
    };
    this.importSplitItems.push(importNew);
    const importMorePages = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ImportMorePages,
      image: '',
      enabled: this.isCaptureDocumentSelected() && this.importingMorePagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.importSplitItems.push(importMorePages);
    const reimportPage = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ReimportPage,
      image: '',
      enabled: this.isCapturePageSelected() && this.reimportingPagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.importSplitItems.push(reimportPage);
    const reimportDocument = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ReimportDocument,
      image: '',
      enabled: this.isCaptureDocumentSelected() && this.reimportingPagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.importSplitItems.push(reimportDocument);
  }
  initializeCaptureItems() {
    this.captureSplitItems = [];
    const captureToFolder = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.CaptureToFolder,
      image: 'assets/icons/camera-solid.svg',
      enabled: this.isCaptureFolderOrDocumentSelected() && this.importingToFolderAllowed() && this.oneItemSelected
    };
    this.captureSplitItems.push(captureToFolder);
    const captureNew = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.CaptureNew,
      image: '',
      enabled: this.isWorkflowSelected() && this.importingAllowed()
    };
    this.captureSplitItems.push(captureNew);
    const captureMorePages = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.CaptureMorePages,
      image: '',
      enabled: this.isCaptureDocumentSelected() && this.importingMorePagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.captureSplitItems.push(captureMorePages);
    const recapturePage = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RecapturePage,
      image: '',
      enabled: this.isCapturePageSelected() && this.reimportingPagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.captureSplitItems.push(recapturePage);
    const recaptureDocument = {
      action: _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RecaptureDocument,
      image: '',
      enabled: this.isCaptureDocumentSelected() && this.reimportingPagesAllowed() && this.documentLocked && this.oneItemSelected
    };
    this.captureSplitItems.push(recaptureDocument);
  }
  executeOutcome(outcomeNumber) {
    if (!this.currentDocument && !this.currentFolderHasItems()) return;
    const outcomesCount = this.outcomeButtons.length;
    const outcomeIndex = outcomesCount - outcomeNumber;
    if (outcomeIndex >= 0 && outcomeIndex < outcomesCount) {
      const element = $(':focus');
      element.blur();
      this.onClick(this.outcomeButtons[outcomeIndex]);
    }
  }
  openFilePicker(multiple) {
    const fileInput = document.querySelector('#file');
    fileInput.multiple = multiple;
    fileInput.click();
  }
  openCaptureModal() {
    this.captureModal = this.ngxSmartModalService.getModal('CaptureToICModal');
    this.captureModal.open();
    this.showScanner = true;
  }
  closeCaptureModal() {
    this.showScanner = false;
    this.captureModal?.close();
  }
  onImportToUnSelectedFolder(event, useCamera) {
    this.import(files => {
      for (let i = 0; i < files.length; i++) {
        if (event.folder.parentWorkflowFolder == null) {
          this.captureService.addBatchWithMultipleDocuments(files);
        } else {
          this.captureService.addFiletoFolder(files[i], _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__.Filename.getFileNameWithoutExtension(files[i].name), _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__.Filename.getFileExtension(files[i].name), event.folder);
        }
      }
    }, true, useCamera);
  }
  onScanToUnSelectedFolder(event) {
    if (event.folder.parentWorkflowFolder == null) {
      this.scan.emit(new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanToWorkflow(this.captureService.currentWorkflow.id, this.captureService.currentWorkflow.scanSettings, new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanOptions(this.translate.currentLang, true), new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.DocumentProperties()));
    } else {
      this.scan.emit(new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanToFolder(this.captureService.currentWorkflow.id, event.folder.id, this.captureService.currentWorkflow.scanSettings));
    }
  }
  fileListToArray(fileList) {
    const filesArray = [];
    for (let i = 0; i < fileList.length; i++) {
      filesArray.push(fileList[i]);
    }
    return filesArray;
  }
  onReimportDocument(event, useCamera) {
    if (event.action === _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.RecaptureDocument) event.action = _blocks_core_actions__WEBPACK_IMPORTED_MODULE_3__.Action.ReimportDocument;
    const {
      workItem,
      doc
    } = this.getDocumentAndWorkItemToInvokeAction(event);
    this.import(files => {
      this.captureService.replaceDocument(workItem.id, doc.id, files[0], _blocks_core_fileName__WEBPACK_IMPORTED_MODULE_4__.Filename.getFileExtension(files[0].name));
    }, false, useCamera);
  }
  onFilePickerChange() {
    const fileInput = document.querySelector('#file');
    const files = Array.from(fileInput.files);
    this.onImportFiles(files);
  }
  onImportFiles(files) {
    if (!this.importer) return;
    if (!files.length) return;
    this.inProgress.open('app-scan.title-import');
    this.importer(files);
    this.importer = null;
  }
  onFinishCapturing(captures) {
    this.closeCaptureModal();
    this.onImportFiles([(0,_blocks_components_document_scanner_utils_pdf__WEBPACK_IMPORTED_MODULE_2__.createPDFFromImages)(captures.map(c => c.capturedImage), 'document.pdf', false)]);
  }
  onRescanDocument(event) {
    const {
      workItem,
      doc
    } = this.getDocumentAndWorkItemToInvokeAction(event);
    this.scan.emit(new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.RescanDocument(workItem.id, doc.id, this.captureService.currentWorkflow.scanSettings, new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.ScanOptions(this.translate.currentLang, false), new _capture_models_scan_commands__WEBPACK_IMPORTED_MODULE_14__.DocumentProperties()));
  }
  getDocumentAndWorkItemToInvokeAction(event) {
    let workItem;
    let doc;
    if (event.documentResult) {
      workItem = event.documentResult.workItem;
      doc = event.documentResult.document;
    } else {
      workItem = this.captureService.getCurrentWorkItem();
      doc = this.captureService.getCurrentDocument();
    }
    return {
      doc,
      workItem
    };
  }
  onWorkflowChanged() {
    if (!this.destinations.length) {
      return;
    }
    this.selectedWorkflow = this.destinations.find(w => w.id === this.selectedWorkflowId);
    this.captureService.setDestination(this.selectedWorkflow);
    this.userPreferencesService.setPreference(this.LastSelectedWorfklowId, this.selectedWorkflowId);
  }
  checkIfItemIsNotInViewAndScroll(index) {
    const selectedElement = $(`.${this.classNamePrefix + index}`);
    const container = $('.projects-wrapper');
    if (selectedElement[0] && container[0] && !this.calculations.isVisibleInScrollableElement(selectedElement, container, false)) {
      this.directiveRef.scrollToElement(`.${this.classNamePrefix + index}`, 0, 100);
    }
  }
  emptyInputValue(event) {
    event.target.value = null;
  }
  discard() {
    this.discardDocuments.emit();
  }
  getCurrentWorkflowIndex() {
    return this.destinations.findIndex(dist => dist.id === this.selectedWorkflow.id);
  }
  static {
    this.ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_capture_services_document_capture_service__WEBPACK_IMPORTED_MODULE_16__.DocumentCaptureService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_capture_services_capture_update_service__WEBPACK_IMPORTED_MODULE_15__.CaptureUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_23__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_27__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_12__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_blocks_services_in_progress_service__WEBPACK_IMPORTED_MODULE_10__.InProgressService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_7__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_9__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_11__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_capture_services_document_locking_service__WEBPACK_IMPORTED_MODULE_17__.DocumentLockingService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_12__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.CalculationsService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_capture_services_selected_items_service__WEBPACK_IMPORTED_MODULE_18__.SelectedItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.UserPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_27__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_8__.ErrorsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      viewQuery: function ToolbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_28__.PerfectScrollbarDirective, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        }
      },
      outputs: {
        scan: "scan",
        discardDocuments: "discardDocuments"
      },
      decls: 28,
      vars: 19,
      consts: [["fileInput", ""], ["CaptureToICModal", ""], [1, "row", "document-capture-toolbar"], [1, "d-flex"], [1, "form-group", "d-flex"], [1, "col-auto", "p-0", "mr-2", "col-form-label", "m-0", "d-flex", "align-items-center"], [1, "col", "p-0"], [1, "input-cont"], ["id", "workflowDropdown", 3, "field", "value", "disabled", "valueChange", "fieldChanged", 4, "ngIf"], ["class", "col-form-label mr-2", 4, "ngIf"], [1, "form-group", "ml-3", "split-buttons-container"], [3, "items", 4, "ngIf"], ["type", "button", "class", "button-icon", 3, "disabled", "title", "click", 4, "ngIf"], ["id", "file", "type", "file", 1, "d-none", 3, "click", "change", "accept"], ["class", "form-group ml-3", "style", "width: 32px; margin-bottom: 20px", 4, "ngIf"], ["class", "d-flex outcomes", 4, "ngIf"], ["customClass", "capture-modal", "identifier", "CaptureToICModal", 1, "capture-to-modal", 3, "closable", "escapable", "dismissable"], [1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-times", "close-icon", 3, "click"], [1, "modal-body"], [3, "done", "close", 4, "ngIf"], ["id", "workflowDropdown", 3, "valueChange", "fieldChanged", "field", "value", "disabled"], [1, "col-form-label", "mr-2"], [3, "items"], ["type", "button", 1, "button-icon", 3, "click", "disabled", "title"], ["src", "assets/icons/qrcode-scan.svg"], [1, "form-group", "ml-3", 2, "width", "32px", "margin-bottom", "20px"], ["image", "img/accuroute-action-routingsheet.svg", 3, "action", "title"], [1, "d-flex", "outcomes"], [4, "ngFor", "ngForOf"], ["class", "btn btn-primary btn-minwidth mr-1 btn-workflow-action", 3, "disabled", "title", "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-minwidth", "mr-1", "btn-workflow-action", 3, "click", "disabled", "title"], [1, "btn-label-truncate", 3, "title"], [3, "done", "close"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](8, ToolbarComponent_app_field_8_Template, 1, 3, "app-field", 8)(9, ToolbarComponent_label_9_Template, 3, 3, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](11, ToolbarComponent_app_splitbutton_11_Template, 1, 1, "app-splitbutton", 11)(12, ToolbarComponent_app_splitbutton_12_Template, 1, 1, "app-splitbutton", 11)(13, ToolbarComponent_app_splitbutton_13_Template, 1, 1, "app-splitbutton", 11)(14, ToolbarComponent_button_14_Template, 3, 6, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](15, "input", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function ToolbarComponent_Template_input_click_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx.emptyInputValue($event));
          })("change", function ToolbarComponent_Template_input_change_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx.onFilePickerChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](17, ToolbarComponent_div_17_Template, 3, 4, "div", 14)(18, ToolbarComponent_div_18_Template, 2, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "ngx-smart-modal", 16, 1)(21, "div", 17)(22, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](25, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function ToolbarComponent_Template_i_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx.closeCaptureModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](26, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](27, ToolbarComponent_app_document_scanner_and_editor_27_Template, 1, 0, "app-document-scanner-and-editor", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 15, "Scanning.CaptureProfile"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.fieldWorkflow && ctx.isProfileAvailable);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx.isProfileAvailable);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.anyScanningAllowed());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.anyImportingAllowed());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.isCameraAvailable && ctx.anyImportingAllowed());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.canShowQRCode());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("accept", ctx.supportedFileTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.selectedWorkflow && ctx.selectedWorkflow.allowRoutingSheetGeneration);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.outcomeButtons);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](24, 17, "Actions." + ctx.invokedAction));
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.showScanner);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_27__.NgxSmartModalComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_19__.FieldComponent, _blocks_components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_20__.ActionButtonComponent, _blocks_components_document_scanner_document_scanner_and_editor_component__WEBPACK_IMPORTED_MODULE_21__.DocumentScannerAndEditorComponent, _blocks_components_split_button_split_button_component__WEBPACK_IMPORTED_MODULE_22__.SplitButtonComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe],
      styles: [".document-capture-toolbar {\n  height: 48px;\n  margin: 0 !important;\n  flex-flow: nowrap;\n  align-items: center;\n}\n.document-capture-toolbar .outcomes {\n  margin-left: auto;\n  overflow: hidden;\n  margin-top: -10px;\n}\n.document-capture-toolbar .workflow {\n  border: 0 !important;\n  width: 220px !important;\n  text-transform: none;\n  overflow: hidden;\n}\n.document-capture-toolbar .input-cont {\n  min-width: 200px;\n}\n.document-capture-toolbar .input-cont button.btn.dd-menu-w.sg-select {\n  font-weight: 500;\n}\n.document-capture-toolbar .input-cont .dropdown-menu {\n  width: 100%;\n}\n.document-capture-toolbar .button-icon img {\n  width: 20px;\n  height: 20px;\n  margin-top: 4px;\n}\n\n.capture-to-modal .nsm-content {\n  padding: 0;\n}\n.capture-to-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  padding: 16px;\n  z-index: 1001;\n}\n.capture-to-modal .modal-header .modal-title,\n.capture-to-modal .modal-header .close-icon {\n  padding-inline-start: 10px;\n  padding-inline-end: 10px;\n}\n.capture-to-modal .modal-header .modal-title {\n  font-size: 15px;\n  font-weight: 600;\n}\n.capture-to-modal .modal-header .close-icon {\n  font-size: 18px;\n  color: #948d8d;\n  cursor: pointer;\n}\n.capture-to-modal .modal-body {\n  height: 100%;\n  padding: 0;\n}\n.capture-to-modal .modal-body .document-scanner-container,\n.capture-to-modal .modal-body .document-scanner-editor,\n.capture-to-modal .modal-body .crop-capture-component,\n.capture-to-modal .modal-body .loading-camera-message {\n  position: static;\n  height: 560px;\n}\n.capture-to-modal .modal-body .document-scanner-container .capture-image-btn {\n  height: auto !important;\n}\n.capture-to-modal .modal-body .crop-capture-component {\n  position: absolute;\n}\n.capture-to-modal .modal-body .crop-capture-component .crop-canvas-container {\n  height: 400px;\n}\n.capture-to-modal .modal-body .crop-capture-component .crop-canvas-container canvas {\n  width: 380px !important;\n}\n.capture-to-modal .modal-body .document-scanner-editor .footer .action {\n  font-size: 14px;\n}\n\n.rtl .document-capture-toolbar .outcomes {\n  margin-left: initial;\n  margin-right: auto;\n}\n\n#workflowDropdown > div {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZG9jdW1lbnQtY2FwdHVyZS90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFTRSxnQkFBQTtBQVRKO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBRUk7RUFDRSxXQUFBO0FBQU47QUFPSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxOOztBQVdFO0VBQ0UsVUFBQTtBQVJKO0FBV0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFUSjtBQVdJOztFQUVFLDBCQUFBO0VBQ0Esd0JBQUE7QUFUTjtBQVlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBVk47QUFhSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVhOO0FBZUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQWJKO0FBZUk7Ozs7RUFJRSxnQkFBQTtFQUNBLGFBQUE7QUFiTjtBQWlCTTtFQUNFLHVCQUFBO0FBZlI7QUFtQkk7RUFDRSxrQkFBQTtBQWpCTjtBQW1CTTtFQUNFLGFBQUE7QUFqQlI7QUFtQlE7RUFDRSx1QkFBQTtBQWpCVjtBQXdCUTtFQUNFLGVBQUE7QUF0QlY7O0FBK0JJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQTVCTjs7QUFpQ0E7RUFDRSxZQUFBO0FBOUJGIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LWNhcHR1cmUtdG9vbGJhciB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZmxvdzogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5vdXRjb21lcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcblxyXG4gIC53b3JrZmxvdyB7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWNvbnQge1xyXG4gICAgYnV0dG9uLmJ0bi5kZC1tZW51LXcuc2ctc2VsZWN0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWljb24ge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcHR1cmUtdG8tbW9kYWwge1xyXG4gIC5uc20tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG5cclxuICAgIC5tb2RhbC10aXRsZSxcclxuICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjOTQ4ZDhkO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5kb2N1bWVudC1zY2FubmVyLWNvbnRhaW5lcixcclxuICAgIC5kb2N1bWVudC1zY2FubmVyLWVkaXRvcixcclxuICAgIC5jcm9wLWNhcHR1cmUtY29tcG9uZW50LFxyXG4gICAgLmxvYWRpbmctY2FtZXJhLW1lc3NhZ2Uge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBoZWlnaHQ6IDU2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2N1bWVudC1zY2FubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgIC5jYXB0dXJlLWltYWdlLWJ0biB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3JvcC1jYXB0dXJlLWNvbXBvbmVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgIC5jcm9wLWNhbnZhcy1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICB3aWR0aDogMzgwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG9jdW1lbnQtc2Nhbm5lci1lZGl0b3Ige1xyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ydGwge1xyXG4gIC5kb2N1bWVudC1jYXB0dXJlLXRvb2xiYXIge1xyXG4gICAgLm91dGNvbWVzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiN3b3JrZmxvd0Ryb3Bkb3duID4gZGl2IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_document-capture_document-capture_module_ts.js.map