"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-fax-settings_account-payment-method_account-payment-method-module_ts"],{

/***/ 90205:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-payment-method/account-payment-method-module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPaymentMeansRoutingModule: () => (/* binding */ AccountPaymentMeansRoutingModule),
/* harmony export */   AccountPaymentMethodModule: () => (/* binding */ AccountPaymentMethodModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/modals/modals.module */ 51188);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/page/page.module */ 13762);
/* harmony import */ var _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-components/account-components.module */ 69248);
/* harmony import */ var _payment_means_payment_means_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment-means/payment-means.module */ 28254);
/* harmony import */ var _account_payment_method_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-payment-method.component */ 91145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);















const routes = [{
  path: '',
  component: _account_payment_method_component__WEBPACK_IMPORTED_MODULE_6__.PaymentMethodComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AccountPaymentMeansRoutingModule {
  static {
    this.ɵfac = function AccountPaymentMeansRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountPaymentMeansRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AccountPaymentMeansRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AccountPaymentMeansRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();
class AccountPaymentMethodModule {
  static {
    this.ɵfac = function AccountPaymentMethodModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountPaymentMethodModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AccountPaymentMethodModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, AccountPaymentMeansRoutingModule, _payment_means_payment_means_module__WEBPACK_IMPORTED_MODULE_5__.PaymentMeansModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule, _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_4__.AccountComponentsModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoUpdatePerfectScrollModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AccountPaymentMethodModule, {
    declarations: [_account_payment_method_component__WEBPACK_IMPORTED_MODULE_6__.PaymentMethodComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, AccountPaymentMeansRoutingModule, _payment_means_payment_means_module__WEBPACK_IMPORTED_MODULE_5__.PaymentMeansModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule, _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_4__.AccountComponentsModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoUpdatePerfectScrollModule]
  });
})();

/***/ }),

/***/ 91145:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-payment-method/account-payment-method.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentMethodComponent: () => (/* binding */ PaymentMethodComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _Bamba_Shared_src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/services/auth/auth.service */ 6473);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _blocks_InterFAX_Models_payment_methods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/InterFAX/Models/payment-methods */ 95943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _payment_means_credit_card_payment_method_credit_card_payment_method_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../payment-means/credit-card-payment-method/credit-card-payment-method.component */ 28969);
/* harmony import */ var _payment_means_direct_debit_payment_method_direct_debit_payment_method_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../payment-means/direct-debit-payment-method/direct-debit-payment-method.component */ 21617);
/* harmony import */ var _payment_means_paypal_payment_method_paypal_payment_method_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../payment-means/paypal-payment-method/paypal-payment-method.component */ 39029);




























const _c0 = a0 => ({
  suppressScrollX: a0
});
function PaymentMethodComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "account-purchase.will-convert-to-prepaid"), " ");
  }
}
function PaymentMethodComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", null, 2)(2, "app-credit-card-payment-method", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("creditCardChange", function PaymentMethodComponent_div_6_div_1_Template_app_credit_card_payment_method_creditCardChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onCreditCardChanged($event));
    })("addressChange", function PaymentMethodComponent_div_6_div_1_Template_app_credit_card_payment_method_addressChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAddressChanged($event));
    })("onCancel", function PaymentMethodComponent_div_6_div_1_Template_app_credit_card_payment_method_onCancel_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPaymentMeans(ctx_r1.PaymentMethods.None));
    })("onToggleEditCC", function PaymentMethodComponent_div_6_div_1_Template_app_credit_card_payment_method_onToggleEditCC_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showEditCCForm = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("currentPaymentMeans", ctx_r1.currentPaymentMeans)("account", ctx_r1.account)("accountRegistrationDetails", ctx_r1.accountRegistrationDetails)("creditCard", ctx_r1.account.creditCard)("address", ctx_r1.account.billing);
  }
}
function PaymentMethodComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", null, 3)(2, "app-direct-debit-payment-method", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onCancel", function PaymentMethodComponent_div_6_div_2_Template_app_direct_debit_payment_method_onCancel_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPaymentMeans(ctx_r1.PaymentMethods.None));
    })("setupCompleted", function PaymentMethodComponent_div_6_div_2_Template_app_direct_debit_payment_method_setupCompleted_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onSetupCompleted(ctx_r1.PaymentMethods.DD));
    })("onStartSetup", function PaymentMethodComponent_div_6_div_2_Template_app_direct_debit_payment_method_onStartSetup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.startSetup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("currentPaymentMeans", ctx_r1.currentPaymentMeans)("isDirectDebitConfigured", ctx_r1.isDirectDebitConfigured);
  }
}
function PaymentMethodComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", null, 4)(2, "app-paypal-payment-method", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onCancel", function PaymentMethodComponent_div_6_div_3_Template_app_paypal_payment_method_onCancel_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPaymentMeans(ctx_r1.PaymentMethods.None));
    })("onStartSetup", function PaymentMethodComponent_div_6_div_3_Template_app_paypal_payment_method_onStartSetup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.startSetup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("currentPaymentMeans", ctx_r1.currentPaymentMeans);
  }
}
function PaymentMethodComponent_div_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](0, 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    const noPaymentMethodSelected_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngTemplateOutlet", noPaymentMethodSelected_r5);
  }
}
function PaymentMethodComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PaymentMethodComponent_div_6_div_1_Template, 3, 5, "div", 12)(2, PaymentMethodComponent_div_6_div_2_Template, 3, 2, "div", 12)(3, PaymentMethodComponent_div_6_div_3_Template, 3, 1, "div", 12)(4, PaymentMethodComponent_div_6_ng_container_4_Template, 1, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r1.paymentMeans);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.PaymentMethods.CC);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.PaymentMethods.DD);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.PaymentMethods.PayPal);
  }
}
function PaymentMethodComponent_ng_template_7_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PaymentMethodComponent_ng_template_7_li_11_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPaymentMeans(ctx_r1.PaymentMethods.CC));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 1, "fax-account-properties.payment-method-cc-header"), " ");
  }
}
function PaymentMethodComponent_ng_template_7_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PaymentMethodComponent_ng_template_7_li_12_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPaymentMeans(ctx_r1.PaymentMethods.DD));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 1, "fax-account-properties.payment-method-dd-header"), " ");
  }
}
function PaymentMethodComponent_ng_template_7_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PaymentMethodComponent_ng_template_7_li_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPaymentMeans(ctx_r1.PaymentMethods.PayPal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "fax-account-properties.payment-method-paypal-header"), " ");
  }
}
function PaymentMethodComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 20)(6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, PaymentMethodComponent_ng_template_7_li_11_Template, 5, 3, "li", 23)(12, PaymentMethodComponent_ng_template_7_li_12_Template, 5, 3, "li", 23)(13, PaymentMethodComponent_ng_template_7_li_13_Template, 6, 3, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 5, "fax-account-properties.payment-method-none-info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 7, "fax-account-properties.payment-method-prompt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isCreditEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isDirectDebitEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isPayPalEnabled);
  }
}
class PaymentMethodComponent {
  constructor(route, interfaxService, toastrService, errorsService, spinnerService, translate, router, userStateService, authService, interFAXService, errorService) {
    this.route = route;
    this.interfaxService = interfaxService;
    this.toastrService = toastrService;
    this.errorsService = errorsService;
    this.spinnerService = spinnerService;
    this.translate = translate;
    this.router = router;
    this.userStateService = userStateService;
    this.authService = authService;
    this.interFAXService = interFAXService;
    this.errorService = errorService;
    this.REDIRECT_URL = 'REDIRECT_URL';
    this.RETURN_URL = 'RETURN_URL';
    this.creditCard = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_2__.CreditCard();
    this.paymentMeans = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.None;
    this.currentPaymentMeans = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.None;
    this.updatePayment = false;
    this.isDirectDebitConfigured = false;
    this.rightControls = [];
    this.PaymentMethods = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods;
    this.showEditCCForm = false;
    this.loadFailed = err => {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_3__.Log.error('PaymentMethodComponent.loadFailed', err);
      this.toastrService.error(this.translate.instant('fax-user-properties.account-load-failed'));
      this.spinnerService.hide();
    };
    this.accountLoaded = account => {
      this.account = account;
      this.currentPaymentMeans = account.paymentMeans;
      this.config = new _blocks_InterFAX_Models_payment_methods__WEBPACK_IMPORTED_MODULE_9__.PaymentMethodConfigurations(this.currentPaymentMeans);
      this.interfaxService.getAccountRegistrationDefaults(this.account.shippingSameAsBilling ? this.account.billing.country : this.account.shipping.country, this.accountRegistrationDetailsLoaded, this.loadFailed);
    };
    this.accountRegistrationDetailsLoaded = details => {
      this.accountRegistrationDetails = details;
      this.spinnerService.hide();
      this.initializePaymentMeans();
    };
    this.initializePaymentMeans = () => {
      this.isCreditEnabled = this.accountRegistrationDetails.country.paymentMeans.includes(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.CC);
      this.isDirectDebitEnabled = this.accountRegistrationDetails.country.paymentMeans.includes(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.DD);
      this.isPayPalEnabled = this.accountRegistrationDetails.country.paymentMeans.includes(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.PayPal);
      this.paymentMeans = this.account?.paymentMeans;
      this.account.isCreditCardOwnerIdRequired = this.accountRegistrationDetails.country.ownerIDRequired;
      this.isDirectDebitConfigured = this.account.paymentMeans === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.DD;
      const initialPaymentMeans = this.route.snapshot.queryParamMap.get('payment-method');
      if (!initialPaymentMeans) return;
      this.selectPaymentMeans(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods[initialPaymentMeans]);
    };
    this.selectPaymentMeans = value => {
      this.paymentMeans = this.account.paymentMeans = value;
    };
    this.onUpdatePayment = value => {
      if (!this.account?.creditCard) return;
      this.account.creditCard.changed = value;
    };
    this.onAddressChanged = address => {
      this.updatedAddress = address;
    };
    this.onCreditCardChanged = creditCard => {
      this.updatedCreditCard = creditCard;
    };
    this.onSave = () => {
      if (this.isDirectDebitSelected()) {
        this.toastrService.error(this.translate.instant('payment-method.direct-debit-not-configured'));
        return;
      }
      if (this.isCreditCardInfoNotChanged()) {
        this.saveSucceeded();
        return;
      }
      let account = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_2__.Account(this.account);
      if (this.paymentMeans === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.CC) {
        account.creditCard = this.updatedCreditCard;
        account.billing = this.updatedAddress;
      }
      this.spinnerService.show(this.translate.instant('Common.Saving'), document.documentElement);
      this.interfaxService.setAccount(account, true, this.saved, this.saveFailed);
    };
    this.saved = result => {
      this.spinnerService.hide();
      if (result.success && result.object?.redirectUrl) {
        this.authService.shareSessionForTabs(60 * 1000);
        location = result.object.redirectUrl;
        return;
      }
      if (result.success) {
        this.saveSucceeded();
        return;
      }
      this.errorsService.showErrorsModal(result.errors, 'payment-method.save-fail');
    };
    this.saveFailed = () => {
      this.spinnerService.hide();
      this.toastrService.error(this.translate.instant('payment-method.save-fail'));
    };
    this.close = () => {
      this.router.navigateByUrl(this.userStateService.getUserHomePage());
    };
    this.onSetupCompleted = paymentMeans => {
      this.account.paymentMeans = paymentMeans;
    };
    this.startSetup = config => {
      this.config = config;
      this.spinnerService.show(this.translate.instant(`fax-account-properties.start-${config.name.toLocaleLowerCase()}-setup`), document.documentElement);
      const url = `${window.location.protocol}//${window.location.host}/payment-method-callback?payment-method=${config.name}`;
      config.configurations.push({
        key: this.RETURN_URL,
        value: url
      });
      this.interFAXService.startPaymentMethodSetup(config, this.onSetupStartSucceeded, this.onSetupStartFailed);
    };
    this.onSetupStartSucceeded = result => {
      this.spinnerService.hide();
      const redirectURL = result.find(x => x.key == this.REDIRECT_URL)?.value;
      if (!redirectURL) return;
      this.authService.shareSessionForTabs();
      window.location.href = redirectURL;
    };
    this.onSetupStartFailed = err => {
      this.spinnerService.hide();
      this.errorService.showErrorsModal(err, this.translate.instant(`fax-account-properties.${this.config?.name.toLocaleLowerCase() ?? this.currentPaymentMeans?.toLocaleLowerCase()}-setup-failed`));
    };
  }
  ngOnInit() {
    this.createButtons();
    this.spinnerService.show(this.translate.instant('Common.Loading'), document.documentElement);
    this.interfaxService.getAccount(this.accountLoaded, this.loadFailed);
  }
  createButtons() {
    const saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_6__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
    const cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_6__.Control(this.close, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
    this.rightControls.push(saveButton);
    this.rightControls.push(cancelButton);
    saveButton.setTranslation(this.translate.instant('Common.Save'));
    cancelButton.setTranslation(this.translate.instant('Common.Cancel'));
  }
  isDirectDebitSelected() {
    return !this.isDirectDebitConfigured && this.account.paymentMeans === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.DD;
  }
  isCreditCardInfoNotChanged() {
    return this.account.paymentMeans === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.CC && !this.showEditCCForm;
  }
  saveSucceeded() {
    this.toastrService.success(this.translate.instant('payment-method.save-success'));
    this.close();
  }
  static {
    this.ɵfac = function PaymentMethodComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaymentMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_5__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_4__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_7__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_8__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_Bamba_Shared_src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_5__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_4__.ErrorsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: PaymentMethodComponent,
      selectors: [["app-payment-method"]],
      inputs: {
        account: "account",
        accountRegistrationDetails: "accountRegistrationDetails"
      },
      decls: 9,
      vars: 9,
      consts: [["accountPaymentMethod", ""], ["noPaymentMethodSelected", ""], ["CreditCardPaymentMethodSelected", ""], ["DirectDebitPaymentMethodSelected", ""], ["PayPalPaymentMethodSelected", ""], [1, "account-payment-method", "container-fluid", "h-100", 3, "perfectScrollbar"], [1, "existing-payment-method"], [3, "headerText", "rightControls"], ["_ngcontent-bdi-c862", "", "class", "warning p-1 m-1 ng-star-inserted", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], ["_ngcontent-bdi-c862", "", 1, "warning", "p-1", "m-1", "ng-star-inserted"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], [3, "creditCardChange", "addressChange", "onCancel", "onToggleEditCC", "currentPaymentMeans", "account", "accountRegistrationDetails", "creditCard", "address"], [3, "onCancel", "setupCompleted", "onStartSetup", "currentPaymentMeans", "isDirectDebitConfigured"], [3, "onCancel", "onStartSetup", "currentPaymentMeans"], [3, "ngTemplateOutlet"], [1, "box-head--light-blue-bg", "mb-3"], [1, "fa", "fa-info-circle", "mr-2"], [1, "ml-4"], [1, "mb-2"], ["id", "payment-method-selector-ul"], [4, "ngIf"], [1, "btn-link", 3, "click"], [1, "fa", "fa-credit-card", "mr-1"], [1, "fa", "fa-university", "mr-1"], [1, "align-middle", "mr-1"], ["src", "assets/img/paypal.svg", 1, "payment-method-icon", "paypal"]],
      template: function PaymentMethodComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5, 0)(2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "app-secondary-header", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PaymentMethodComponent_div_5_Template, 3, 3, "div", 8)(6, PaymentMethodComponent_div_6_Template, 5, 4, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, PaymentMethodComponent_ng_template_7_Template, 14, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const accountPaymentMethod_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](7, _c0, accountPaymentMethod_r9.offsetWidth > 430));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 5, "payment-method.title"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.account == null ? null : ctx.account.accountType) === "Eval");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.accountRegistrationDetails);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitchDefault, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_10__.SecondaryHeaderComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarDirective, _payment_means_credit_card_payment_method_credit_card_payment_method_component__WEBPACK_IMPORTED_MODULE_11__.CreditCardPaymentMethodComponent, _payment_means_direct_debit_payment_method_direct_debit_payment_method_component__WEBPACK_IMPORTED_MODULE_12__.DirectDebitPaymentMethodComponent, _payment_means_paypal_payment_method_paypal_payment_method_component__WEBPACK_IMPORTED_MODULE_13__.PayPalPaymentMethodComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
      styles: [".account-payment-method[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.account-payment-method[_ngcontent-%COMP%]   .existing-card[_ngcontent-%COMP%] {\n  color: #767676;\n  font-size: 14px;\n  padding-left: 45px;\n}\n.account-payment-method[_ngcontent-%COMP%]   .indented[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n.account-payment-method[_ngcontent-%COMP%]   .bottom-padding[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.account-payment-method[_ngcontent-%COMP%]   .payment-method-list[_ngcontent-%COMP%] {\n  min-height: 88px;\n}\n.account-payment-method[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  background-color: #ffffcc !important;\n  border: 1px solid gray;\n  border-radius: 3px;\n  font-size: 14px;\n}\n\n  .account-payment-method .secondary-header {\n  margin-bottom: 0px;\n}\n\n  .account-payment-method i {\n  line-height: 1.1;\n}\n\n  .account-payment-method .box-head--light-blue-bg {\n  padding-top: 9px;\n  padding-inline-start: 12px;\n}\n\n#payment-method-selector-ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-inline-start: 20px;\n}\n#payment-method-selector-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n#payment-method-selector-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.btn-link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.existing-payment-method[_ngcontent-%COMP%] {\n  min-width: 430px;\n}\n\n.payment-method-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtcGF5bWVudC1tZXRob2QvYWNjb3VudC1wYXltZW50LW1ldGhvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxvQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSEo7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFKRjtBQU1FO0VBQ0Usa0JBQUE7QUFKSjtBQU1JO0VBQ0UscUJBQUE7QUFKTjs7QUFTQTtFQUNFLGVBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0FBTkYiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1wYXltZW50LW1ldGhvZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG5cclxuICAuZXhpc3RpbmctY2FyZCB7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICB9XHJcblxyXG4gIC5pbmRlbnRlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucGF5bWVudC1tZXRob2QtbGlzdCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4OHB4O1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWNjb3VudC1wYXltZW50LW1ldGhvZCAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFjY291bnQtcGF5bWVudC1tZXRob2QgaSB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hY2NvdW50LXBheW1lbnQtbWV0aG9kIC5ib3gtaGVhZC0tbGlnaHQtYmx1ZS1iZyB7XHJcbiAgcGFkZGluZy10b3A6IDlweDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTJweDtcclxufVxyXG5cclxuI3BheW1lbnQtbWV0aG9kLXNlbGVjdG9yLXVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tbGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZXhpc3RpbmctcGF5bWVudC1tZXRob2Qge1xyXG4gIG1pbi13aWR0aDogNDMwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LW1ldGhvZC1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-fax-settings_account-payment-method_account-payment-method-module_ts.js.map