"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_ifx-eval-complete_ifx-eval-complete_module_ts"],{

/***/ 32141:
/*!*****************************************************************************!*\
  !*** ./src/app/views/ifx-eval-complete/ifx-eval-complete-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfxEvalCompleteRoutingModule: () => (/* binding */ IfxEvalCompleteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ifx_eval_complete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ifx-eval-complete.component */ 46385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: ':hashkey',
  component: _ifx_eval_complete_component__WEBPACK_IMPORTED_MODULE_0__.IfxEvalCompleteComponent,
  pathMatch: 'full'
}];
class IfxEvalCompleteRoutingModule {
  static {
    this.ɵfac = function IfxEvalCompleteRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IfxEvalCompleteRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: IfxEvalCompleteRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IfxEvalCompleteRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 46385:
/*!************************************************************************!*\
  !*** ./src/app/views/ifx-eval-complete/ifx-eval-complete.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfxEvalCompleteComponent: () => (/* binding */ IfxEvalCompleteComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/shared-data.service */ 80103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _admin_fax_settings_account_components_section_terms_section_terms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-fax-settings/account-components/section-terms/section-terms.component */ 41590);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);























const _c0 = ["loginComponent"];
const _c1 = () => ({
  suppressScrollX: true
});
class IfxEvalCompleteComponent {
  constructor(translateService, interfaxService, spinnerStateService, toastr, route, sessionStorageService, sharedDataService, router, brandingService) {
    this.translateService = translateService;
    this.interfaxService = interfaxService;
    this.spinnerStateService = spinnerStateService;
    this.toastr = toastr;
    this.route = route;
    this.sessionStorageService = sessionStorageService;
    this.sharedDataService = sharedDataService;
    this.router = router;
    this.brandingService = brandingService;
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.company = '';
    this.agreedToTerms = false;
    this.brandedServiceTermsUrl = '';
    this.errors = [];
    this.defaultsLoaded = ard => {
      this.brandedServiceTermsUrl = ard.brandedServiceTermsUrl;
    };
    this.loadFailed = () => {
      //tbd
    };
    this.completeRegisterationFail = err => {
      this.spinnerStateService.hide();
    };
    this.completeRegisterationSuccess = result => {
      this.errors = [];
      this.spinnerStateService.hide();
      if (result.success) {
        this.toastr.success(this.translateService.instant('IfxEval.RegisterComplete'));
        this.sessionStorageService.setUsername(this.username);
        this.sharedDataService.extraParameters = this.password;
        this.router.navigateByUrl('/login-password?auto=true');
      } else {
        this.errors.push(result.errors);
      }
    };
    this.onAgreedToTermsChanged = agreed => {
      this.agreedToTerms = agreed;
    };
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hashKey = params.hashkey;
    });
    this.interfaxService.getAccountRegistrationDefaults('', this.defaultsLoaded, this.loadFailed);
    this.fieldUsername = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: this.translateService.instant('IfxEval.Username'),
      required: true
    });
    this.fieldPassword = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Password,
      label: this.translateService.instant('IfxEval.Password'),
      required: true
    });
    this.fieldConfirmPassword = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Password,
      label: this.translateService.instant('IfxEval.ConfirmPassword'),
      required: true
    });
    this.fieldCompany = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: this.translateService.instant('IfxEval.Company'),
      required: false
    });
    this.logoUrl = this.brandingService.getBrandDetails()?.loginLogoUrl;
  }
  completeRegisteration() {
    this.errors = [];
    this.spinnerStateService.show(this.translateService.instant('IfxEval.CompletingRegistrationProcess'), this.loginDiv.nativeElement);
    if (this.password !== this.confirmPassword) {
      this.errors = [this.translateService.instant('IfxEval.PasswordMismatch')];
      this.spinnerStateService.hide();
      return;
    }
    this.interfaxService.completeEvaluationAccountSignup(new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_3__.CompleteEvaluationModel(this.hashKey, this.username, this.password, this.company), this.completeRegisterationSuccess, this.completeRegisterationFail);
  }
  static {
    this.ɵfac = function IfxEvalCompleteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IfxEvalCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_1__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_2__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_blocks_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.BrandingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: IfxEvalCompleteComponent,
      selectors: [["app-ifx-eval-complete"]],
      viewQuery: function IfxEvalCompleteComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.loginDiv = _t.first);
        }
      },
      decls: 27,
      vars: 19,
      consts: [["loginComponent", "", "scrollbar", "ngxPerfectScrollbar"], [1, "ifx-eval-complete-container"], ["id", "generic", 1, "h-navbar-content", "first-active", "active"], [1, "container-fluid", "p-0"], [1, "sg-box", "login-cont"], [1, "row", "m-0"], [1, "login-form-cont"], [1, "login-box", "login-box--simple", "mb-0", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [1, "login-box__logo-placement"], [1, "logo-div"], ["alt", "", 3, "src"], [1, "login-form", "mt-3"], [3, "errors"], ["appAutoFocusFirstInput", "", 1, "input-cont"], [3, "valueChange", "field", "value"], [1, "input-cont"], [3, "agreed", "brandedServiceTermsUrl", "showIcon"], [1, "mt-3", "text-center"], ["id", "btn-login-next", "type", "button", 1, "btn", "btn-primary", "btn-minwidth", 3, "click", "disabled"]],
      template: function IfxEvalCompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7, 0)(9, "div", 8)(10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-errors", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 13)(15, "app-field", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function IfxEvalCompleteComponent_Template_app_field_valueChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.username, $event) || (ctx.username = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 15)(17, "app-field", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function IfxEvalCompleteComponent_Template_app_field_valueChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 15)(19, "app-field", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function IfxEvalCompleteComponent_Template_app_field_valueChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 15)(21, "app-field", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function IfxEvalCompleteComponent_Template_app_field_valueChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.company, $event) || (ctx.company = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "app-section-terms", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("agreed", function IfxEvalCompleteComponent_Template_app_section_terms_agreed_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onAgreedToTermsChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 17)(24, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function IfxEvalCompleteComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.completeRegisteration());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()();
        }
        if (rf & 2) {
          const scrollbar_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](18, _c1))("autoUpdatePerfectScroll", scrollbar_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errors", ctx.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.fieldUsername);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.fieldPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.fieldConfirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.confirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("field", ctx.fieldCompany);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx.company);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("brandedServiceTermsUrl", ctx.brandedServiceTermsUrl)("showIcon", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.agreedToTerms || !ctx.username.trim() || !ctx.password.trim() || !ctx.confirmPassword.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 16, "IfxEval.Complete"), " ");
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_6__.AutoFocusFirstInputDirective, _admin_fax_settings_account_components_section_terms_section_terms_component__WEBPACK_IMPORTED_MODULE_7__.SectionTermsComponent, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__.ErrorsComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__.AutoUpdatePerfectScrollDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: [".ifx-eval-complete-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-height: calc(100vh - 80px);\n}\n.ifx-eval-complete-container[_ngcontent-%COMP%]   .logo-div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ifx-eval-complete-container[_ngcontent-%COMP%]   .login-form-cont[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ifx-eval-complete-container[_ngcontent-%COMP%]   .login-form-cont[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: calc(100vh - 80px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvaWZ4LWV2YWwtY29tcGxldGUvaWZ4LWV2YWwtY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLFNBQUE7QUFBSjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQUFOIiwic291cmNlc0NvbnRlbnQiOlsiLmlmeC1ldmFsLWNvbXBsZXRlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcblxyXG4gIC5sb2dvLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9naW4tZm9ybS1jb250IHtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAubG9naW4tYm94IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2516:
/*!*********************************************************************!*\
  !*** ./src/app/views/ifx-eval-complete/ifx-eval-complete.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IfxEvalCompleteModule: () => (/* binding */ IfxEvalCompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _admin_fax_settings_account_components_account_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-fax-settings/account-components/account-components.module */ 69248);
/* harmony import */ var _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blocks/directives/directives.module */ 21084);
/* harmony import */ var _ifx_eval_complete_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ifx-eval-complete-routing.module */ 32141);
/* harmony import */ var _ifx_eval_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ifx-eval-complete.component */ 46385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);









class IfxEvalCompleteModule {
  static {
    this.ɵfac = function IfxEvalCompleteModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IfxEvalCompleteModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: IfxEvalCompleteModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, _admin_fax_settings_account_components_account_components_module__WEBPACK_IMPORTED_MODULE_1__.AccountComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ErrorsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule, _ifx_eval_complete_routing_module__WEBPACK_IMPORTED_MODULE_3__.IfxEvalCompleteRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](IfxEvalCompleteModule, {
    declarations: [_ifx_eval_complete_component__WEBPACK_IMPORTED_MODULE_4__.IfxEvalCompleteComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, _admin_fax_settings_account_components_account_components_module__WEBPACK_IMPORTED_MODULE_1__.AccountComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ErrorsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule, _ifx_eval_complete_routing_module__WEBPACK_IMPORTED_MODULE_3__.IfxEvalCompleteRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_ifx-eval-complete_ifx-eval-complete_module_ts.js.map