"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_admin-fax-settings_account-components_account-components_module_ts"],{

/***/ 69248:
/*!******************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/account-components.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponentsModule: () => (/* binding */ AccountComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/page/page.module */ 13762);
/* harmony import */ var _parts_invoice_parts_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts-invoice/parts-invoice.component */ 42490);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section-header/section-header.component */ 51518);
/* harmony import */ var _section_terms_section_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-terms/section-terms.component */ 41590);
/* harmony import */ var _select_prepaid_card_select_prepaid_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-prepaid-card/select-prepaid-card.component */ 16686);
/* harmony import */ var _service_charge_service_charge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-charge/service-charge.component */ 20148);
/* harmony import */ var _service_header_service_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-header/service-header.component */ 83902);
/* harmony import */ var _service_inbound_options_service_inbound_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service-inbound-options/service-inbound-options.component */ 46782);
/* harmony import */ var _service_outbound_options_service_outbound_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service-outbound-options/service-outbound-options.component */ 36470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);

















class AccountComponentsModule {
  static {
    this.ɵfac = function AccountComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountComponentsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AccountComponentsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AccountComponentsModule, {
    declarations: [_service_header_service_header_component__WEBPACK_IMPORTED_MODULE_8__.ServiceHeaderComponent, _service_charge_service_charge_component__WEBPACK_IMPORTED_MODULE_7__.ServiceChargeComponent, _select_prepaid_card_select_prepaid_card_component__WEBPACK_IMPORTED_MODULE_6__.SelectPrepaidCardComponent, _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__.SectionHeaderComponent, _section_terms_section_terms_component__WEBPACK_IMPORTED_MODULE_5__.SectionTermsComponent, _service_outbound_options_service_outbound_options_component__WEBPACK_IMPORTED_MODULE_10__.ServiceOutboundOptionsComponent, _service_inbound_options_service_inbound_options_component__WEBPACK_IMPORTED_MODULE_9__.ServiceInboundOptionsComponent, _parts_invoice_parts_invoice_component__WEBPACK_IMPORTED_MODULE_3__.PartsInvoiceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RadioButtonsGroupModule],
    exports: [_service_header_service_header_component__WEBPACK_IMPORTED_MODULE_8__.ServiceHeaderComponent, _service_charge_service_charge_component__WEBPACK_IMPORTED_MODULE_7__.ServiceChargeComponent, _select_prepaid_card_select_prepaid_card_component__WEBPACK_IMPORTED_MODULE_6__.SelectPrepaidCardComponent, _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__.SectionHeaderComponent, _section_terms_section_terms_component__WEBPACK_IMPORTED_MODULE_5__.SectionTermsComponent, _service_inbound_options_service_inbound_options_component__WEBPACK_IMPORTED_MODULE_9__.ServiceInboundOptionsComponent, _service_outbound_options_service_outbound_options_component__WEBPACK_IMPORTED_MODULE_10__.ServiceOutboundOptionsComponent, _parts_invoice_parts_invoice_component__WEBPACK_IMPORTED_MODULE_3__.PartsInvoiceComponent]
  });
})();

/***/ }),

/***/ 42490:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/parts-invoice/parts-invoice.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartsInvoiceComponent: () => (/* binding */ PartsInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _Bamba_Shared_src_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/models/role */ 29547);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_fields_LocalizedMoneyAmount_LocalizedMoneyAmount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/LocalizedMoneyAmount/LocalizedMoneyAmount.component */ 80570);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);










const _c0 = () => ({});
function PartsInvoiceComponent_app_errors_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-errors", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errors", ctx_r0.errors);
  }
}
function PartsInvoiceComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "parts-invoice.loading"), " ");
  }
}
function PartsInvoiceComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", item_r2.displayUnitPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", item_r2.displayTotalPrice);
  }
}
function PartsInvoiceComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PartsInvoiceComponent_div_4_div_14_Template, 9, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8)(24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 8)(32, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 12, "parts-invoice.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 14, "parts-invoice.quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 16, "parts-invoice.unit-price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 18, "parts-invoice.total-price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.purchaseSummary.lineItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 20, "parts-invoice.sub-total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r0.purchaseSummary.displayNetCharge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 22, "parts-invoice.tax"), " ", ctx_r0.purchaseSummary.vat, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r0.purchaseSummary.displayVATCharge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 24, "parts-invoice.total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r0.purchaseSummary.displayTotalCharge);
  }
}
function PartsInvoiceComponent_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 19)(1, "tr")(2, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tr")(8, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr")(14, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-localized-money-amount", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, "parts-invoice.dcbalance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r0.purchaseSummary.displayDCBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 8, "parts-invoice.this-invoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r0.purchaseSummary.displayTotalCharge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 10, "parts-invoice.new-balance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r0.purchaseSummary.displayNewBalance);
  }
}
class PartsInvoiceComponent {
  constructor(userStateService) {
    this.userStateService = userStateService;
    this.display = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.loaded = ps => {
      this.purchaseSummary = ps;
      this.display.next();
    };
    this.failed = err => {
      console.log('PartsInvoiceComponent.failed', err);
      this.errors = [err];
    };
  }
  ngOnInit() {
    this.summaryProvider.load(this.loaded, this.failed);
    this.showPurchaseBalance = this.userStateService.hasRolePermission(_Bamba_Shared_src_models_role__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_SHOW_PURCHASE_BALANCE);
  }
  static {
    this.ɵfac = function PartsInvoiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PartsInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PartsInvoiceComponent,
      selectors: [["app-parts-invoice"]],
      inputs: {
        summaryProvider: "summaryProvider"
      },
      outputs: {
        display: "display"
      },
      decls: 6,
      vars: 6,
      consts: [[1, "w-100", "h-100", "position-relative", 3, "perfectScrollbar"], [1, "parts-invoice"], [3, "errors", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], ["class", "overdue-balance-table", 4, "ngIf"], [3, "errors"], [1, "loading"], [1, "row", "indent", "spacer"], [1, "col-6", "header"], [1, "col-2", "header", "text-right"], ["class", "row indent", 4, "ngFor", "ngForOf"], [1, "col-8"], [1, "col-2", "top-line", "text-right"], [3, "amount"], [1, "col-2", "text-right"], [1, "col-2", "text-right", "bold"], [1, "row", "indent"], [1, "col-6"], [1, "overdue-balance-table"], ["width", "70%"], [1, "text-right"]],
      template: function PartsInvoiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PartsInvoiceComponent_app_errors_2_Template, 1, 1, "app-errors", 2)(3, PartsInvoiceComponent_div_3_Template, 3, 3, "div", 3)(4, PartsInvoiceComponent_div_4_Template, 39, 26, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PartsInvoiceComponent_table_5_Template, 19, 12, "table", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.errors && !ctx.purchaseSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.purchaseSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.purchaseSummary == null ? null : ctx.purchaseSummary.dcBalance) && ctx.showPurchaseBalance);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_2__.ErrorsComponent, _Bamba_Shared_src_fields_LocalizedMoneyAmount_LocalizedMoneyAmount_component__WEBPACK_IMPORTED_MODULE_3__.LocalizedMoneyAmountComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: [".parts-invoice[_ngcontent-%COMP%] {\n  width: 600px;\n  border: solid #767676 1px;\n  padding: 25px;\n  margin-left: 35px;\n  font-size: 14px;\n}\n.parts-invoice[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #767676;\n}\n.parts-invoice[_ngcontent-%COMP%]   .top-line[_ngcontent-%COMP%] {\n  border-top: solid #767676 2px;\n  margin-top: 5px;\n}\n.parts-invoice[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.parts-invoice[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.parts-invoice[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.overdue-balance-table[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  border-collapse: collapse;\n  width: 600px;\n  border: solid #767676 1px;\n  padding: 25px;\n  margin-left: 50px;\n  font-size: 14px;\n}\n.overdue-balance-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n.overdue-balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtY29tcG9uZW50cy9wYXJ0cy1pbnZvaWNlL3BhcnRzLWludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0FBSEo7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7O0VBRUUsc0JBQUE7RUFDQSxZQUFBO0FBSkoiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydHMtaW52b2ljZSB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlcjogc29saWQgIzc2NzY3NiAxcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICB9XHJcblxyXG4gIC50b3AtbGluZSB7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAjNzY3Njc2IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ub3ZlcmR1ZS1iYWxhbmNlLXRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlcjogc29saWQgIzc2NzY3NiAxcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIHRyLFxyXG4gIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 51518:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/section-header/section-header.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionHeaderComponent: () => (/* binding */ SectionHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 77353);


class SectionHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function SectionHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SectionHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionHeaderComponent,
      selectors: [["app-section-header"]],
      inputs: {
        text: "text",
        image: "image"
      },
      decls: 5,
      vars: 5,
      consts: [[1, "row", "section-header", "header"], [1, "image", 3, "src"], [1, "header-text"]],
      template: function SectionHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.text));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      styles: [".section-header[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n.section-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #495057;\n  padding-bottom: 8px;\n}\n.section-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n.section-header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  padding-top: 2px;\n  padding-right: 8px;\n  padding-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDSSxnQkFBQTtBQUFOO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRleHQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 41590:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/section-terms/section-terms.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionTermsComponent: () => (/* binding */ SectionTermsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);





const _c0 = a0 => ({
  "indent": a0
});
function SectionTermsComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
  }
}
class SectionTermsComponent {
  constructor() {
    this.agreed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.showIcon = true;
    this.onAgreedToTermsChanged = () => {
      this.agreed.next(this.agreedToTerms);
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SectionTermsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SectionTermsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionTermsComponent,
      selectors: [["app-section-terms"]],
      inputs: {
        brandedServiceTermsUrl: "brandedServiceTermsUrl",
        showIcon: "showIcon"
      },
      outputs: {
        agreed: "agreed"
      },
      decls: 15,
      vars: 12,
      consts: [[1, "terms-of-service"], [1, "row", "header"], ["class", "image", "src", "assets/img/material/scale-balance.svg", 4, "ngIf"], ["target", "_blank", 1, "header-text", 3, "href"], [1, "row", "terms", 3, "ngClass"], [1, "col"], [1, "pretty", "p-icon", "p-smooth", "p-curve"], ["id", "terms-checkbox", "type", "checkbox", 1, "input-checkbox", 3, "ngModelChange", "ngModel"], [1, "state", "terms-container"], [1, "icon", "fas", "fa-check", "terms-checkbox-icon"], ["for", "terms-checkbox", 1, "terms-checkbox"], ["src", "assets/img/material/scale-balance.svg", 1, "image"]],
      template: function SectionTermsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionTermsComponent_img_2_Template, 1, 0, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function SectionTermsComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.agreedToTerms, $event) || (ctx.agreedToTerms = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SectionTermsComponent_Template_input_ngModelChange_9_listener() {
            return ctx.onAgreedToTermsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIcon);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.brandedServiceTermsUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "account-register.terms-of-service"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.showIcon));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.agreedToTerms);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, "account-register.agree-terms"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: [".terms-of-service[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #495057;\n  padding-bottom: 8px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .input-checkbox[_ngcontent-%COMP%] {\n  width: 10px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  padding-top: 2px;\n  padding-right: 8px;\n  padding-left: 4px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin-top: -1px;\n  color: #495057 !important;\n}\n.terms-of-service[_ngcontent-%COMP%]   .terms-container[_ngcontent-%COMP%] {\n  margin-top: -2px;\n  width: 10px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .terms-checkbox-icon[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  color: green;\n  margin-top: 4px;\n  margin-left: 2px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #495057;\n  padding-bottom: 18px;\n}\n.terms-of-service[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-top: 2px;\n  padding-right: 12px;\n  padding-left: 4px;\n  width: 38px;\n  text-align: center;\n}\n.terms-of-service[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtY29tcG9uZW50cy9zZWN0aW9uLXRlcm1zL3NlY3Rpb24tdGVybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUEwQkUsaUJBQUE7QUF4QkY7QUFERTtFQUNFLGtCQUFBO0FBR0o7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURKO0FBTUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBTEo7QUFRRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFQSjtBQVVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVJKO0FBVUU7RUFDRSxlQUFBO0FBUkoiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtb2Ytc2VydmljZSB7XHJcbiAgLmluZGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWNoZWNrYm94IHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcblxyXG4gIC50ZXJtcy1jaGVja2JveCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1zLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGVybXMtY2hlY2tib3gtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXJtcy1jaGVja2JveCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 16686:
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/select-prepaid-card/select-prepaid-card.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectPrepaidCardComponent: () => (/* binding */ SelectPrepaidCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_LocalizedMoneyAmount_LocalizedMoneyAmount_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/LocalizedMoneyAmount/LocalizedMoneyAmount.component */ 80570);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/radio-buttons-group/radio-buttons-group.component */ 65965);
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section-header/section-header.component */ 51518);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);








const _c0 = () => ({});
const _c1 = (a0, a1, a2) => ({
  label: a0,
  value: a1,
  disabled: a2
});
const _c2 = a0 => [a0];
function SelectPrepaidCardComponent_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9)(2, "app-radio-buttons-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function SelectPrepaidCardComponent_div_13_ng_container_1_Template_app_radio_buttons_group_valueChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const part_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSelectPart(part_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-localized-money-amount", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-localized-money-amount", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const part_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.selected == null ? null : ctx_r2.selected.basePart == null ? null : ctx_r2.selected.basePart.number)("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c1, part_r2.basePart.description, part_r2.basePart.number, !ctx_r2.enabled)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("amount", part_r2.basePart.displayCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("amount", part_r2.displayBonus);
  }
}
function SelectPrepaidCardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SelectPrepaidCardComponent_div_13_ng_container_1_Template, 7, 10, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const part_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.includePartInListing(part_r2));
  }
}
class SelectPrepaidCardComponent {
  constructor() {
    this.onPartSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.valid = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onSelectPart = part => {
      this.selected = part;
      this.onPartSelected.next(part);
      this.update();
    };
    this.update = () => {
      this.valid.next(!!this.selected);
    };
    this.includePartInListing = part => {
      return true;
      //part.basePart.availableForNewUser
    };
  }
  ngOnInit() {
    this.update();
  }
  static {
    this.ɵfac = function SelectPrepaidCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectPrepaidCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SelectPrepaidCardComponent,
      selectors: [["app-select-prepaid-card"]],
      inputs: {
        prePaidParts: "prePaidParts",
        enabled: "enabled",
        selected: "selected"
      },
      outputs: {
        onPartSelected: "onPartSelected",
        valid: "valid"
      },
      decls: 14,
      vars: 14,
      consts: [[1, "select-prepaid-card"], [3, "text", "image"], [1, "h-100", "position-relative", 3, "perfectScrollbar"], [1, "row", "indented", "header"], [1, "small-indent", "col-6"], [1, "col-3"], ["class", "row indented", 4, "ngFor", "ngForOf"], [1, "row", "indented"], [4, "ngIf"], [1, "col-6"], ["groupName", "prepaid-card-type", 3, "valueChange", "value", "options"], [3, "amount"]],
      template: function SelectPrepaidCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-section-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SelectPrepaidCardComponent_div_13_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "fax-user-create.prepaidpart")("image", "material/fax.svg");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "select-prepaid-card.part"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 9, "select-prepaid-card.price"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 11, "select-prepaid-card.bonus"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.prePaidParts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _Bamba_Shared_src_fields_LocalizedMoneyAmount_LocalizedMoneyAmount_component__WEBPACK_IMPORTED_MODULE_0__.LocalizedMoneyAmountComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _Bamba_Shared_src_form_radio_buttons_group_radio_buttons_group_component__WEBPACK_IMPORTED_MODULE_1__.RadioButtonsGroupComponent, _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_2__.SectionHeaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: [".select-prepaid-card[_ngcontent-%COMP%] {\n  padding-inline-start: 15px;\n  height: round(100% - 45px, 1px);\n}\n.select-prepaid-card[_ngcontent-%COMP%]   .small-indent[_ngcontent-%COMP%] {\n  padding-inline-start: 33px;\n}\n.select-prepaid-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #767676;\n  padding-bottom: 12px;\n}\n.select-prepaid-card[_ngcontent-%COMP%]   .indented[_ngcontent-%COMP%] {\n  padding-inline-start: 20px;\n  width: 630px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtY29tcG9uZW50cy9zZWxlY3QtcHJlcGFpZC1jYXJkL3NlbGVjdC1wcmVwYWlkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0U7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QtcHJlcGFpZC1jYXJkIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTVweDtcclxuICBoZWlnaHQ6IHJvdW5kKGNhbGMoMTAwJSAtIDQ1cHgpLCAxcHgpO1xyXG5cclxuICAuc21hbGwtaW5kZW50IHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzM3B4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaW5kZW50ZWQge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjMwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 20148:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/service-charge/service-charge.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceChargeComponent: () => (/* binding */ ServiceChargeComponent)
/* harmony export */ });
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 77353);




class ServiceChargeComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.getChargeText = cost => {
      if (!cost) return this.translateService.instant('fax-user-create.none');
      return cost;
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ServiceChargeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceChargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServiceChargeComponent,
      selectors: [["app-service-charge"]],
      inputs: {
        inbound: "inbound"
      },
      decls: 13,
      vars: 8,
      consts: [[1, "service-charge"], [1, "row"], [1, "col-9"], [1, "col-3", "cost"]],
      template: function ServiceChargeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "fax-user-create.inbound-setup-charge"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getChargeText(ctx.inbound.setupCharge), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, "fax-user-create.inbound-subscription-charge"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getChargeText(ctx.inbound.subscriptionCharge), " ");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: [".service-charge[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtY29tcG9uZW50cy9zZXJ2aWNlLWNoYXJnZS9zZXJ2aWNlLWNoYXJnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWNoYXJnZSB7XHJcbiAgICAuY29zdCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 83902:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/service-header/service-header.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceHeaderComponent: () => (/* binding */ ServiceHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 77353);




class ServiceHeaderComponent {
  constructor() {
    this.enabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChanged = event => {
      console.log('onChanged', this.enabled);
      this.enabled = !this.enabled;
      this.enabledChange.next(this.enabled);
      this.changed.next(this.enabled);
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ServiceHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceHeaderComponent,
      selectors: [["app-service-header"]],
      inputs: {
        enabled: "enabled",
        text: "text"
      },
      outputs: {
        enabledChange: "enabledChange",
        changed: "changed"
      },
      decls: 8,
      vars: 4,
      consts: [[1, "service-header", "pretty", "p-icon", "p-curve"], ["type", "checkbox", 1, "input-checkbox", 3, "ngModelChange", "click", "ngModel"], [1, "state", "lablel-container"], [1, "icon", "fas", "fa-check", "service-checkbox-icon"], [1, "service-checkbox", 3, "click"], [1, "horizontal-rule"]],
      template: function ServiceHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ServiceHeaderComponent_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.enabled, $event) || (ctx.enabled = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceHeaderComponent_Template_input_click_1_listener($event) {
            return ctx.onChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceHeaderComponent_Template_label_click_4_listener($event) {
            return ctx.onChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.text));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: [".service-header[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.service-header[_ngcontent-%COMP%]   .input-checkbox[_ngcontent-%COMP%] {\n  width: 10px;\n}\n.service-header[_ngcontent-%COMP%]   .lablel-container[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.service-header[_ngcontent-%COMP%]   .service-checkbox[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  margin-top: -1px;\n  color: #495057 !important;\n}\n.service-header[_ngcontent-%COMP%]   .service-checkbox[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.service-header[_ngcontent-%COMP%]   .service-checkbox-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: green;\n  margin-top: 7px;\n  margin-left: 2px;\n}\n.service-header[_ngcontent-%COMP%]   .horizontal-rule[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2FjY291bnQtY29tcG9uZW50cy9zZXJ2aWNlLWhlYWRlci9zZXJ2aWNlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7QUFDRTtFQUNDLFdBQUE7QUFDSDtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBR0U7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWhlYWRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgLmlucHV0LWNoZWNrYm94IHtcclxuICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIC5sYWJsZWwtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlLWNoZWNrYm94IHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZS1jaGVja2JveDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZS1jaGVja2JveC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcblxyXG4gIC5ob3Jpem9udGFsLXJ1bGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 46782:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/service-inbound-options/service-inbound-options.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceInboundOptionsComponent: () => (/* binding */ ServiceInboundOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/core/email */ 38061);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);









class ServiceInboundOptionsComponent {
  set countryZones(countryZones) {
    this._countryZones = countryZones;
    if (!this.countryDataSource) return;
    this.updateCountryDataSource();
  }
  get countryZones() {
    return this._countryZones;
  }
  constructor(translateService, cdr) {
    this.translateService = translateService;
    this.cdr = cdr;
    this.valid = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.updateValidity = () => {
      let valid = true;
      if (this.inbound.enabled) {
        if (!this.inbound.IPVNodeId) valid = false;
        if (!this.inbound.prefix) valid = false;
        if (this.inbound.email && !_blocks_core_email__WEBPACK_IMPORTED_MODULE_1__.Email.isValid(this.inbound.email)) valid = false;
      }
      this.valid.next(valid);
      this.cdr.detectChanges();
    };
    this.onInboundEmailChanged = () => {
      this.updateValidity();
    };
    this.onCountryLocationChanged = zoneNode => {
      this.inbound.zone = zoneNode;
      const countryZone = this.countryZones.find(cz => cz.countryCode == this.inbound.countryCode);
      const zone = countryZone.zones.find(z => z.value == zoneNode);
      this.inbound.setupCharge = zone.node.setPrice;
      this.inbound.subscriptionCharge = zone.node.subPrice;
      this.inbound.faxnumberDetails = `${countryZone.country} - ${zone.name}`;
      this.updateInboundService();
    };
    this.onCountryCodeChanged = countryCode => {
      this.inbound.countryCode = countryCode;
      this.loadZoneDataSource(countryCode);
      this.updateInboundService();
    };
    this.updateInboundService = () => {
      const cz = this.countryZones.find(cz => cz.countryCode == this.inbound.countryCode);
      const z = cz ? cz.zones.find(z => z.value == this.inbound.zone) : null;
      this.inbound.IPVNodeId = z ? z.node.id : '';
      this.inbound.prefix = z ? z.prefix : '';
      this.updateValidity();
    };
    this.createFields = () => {
      this.fieldInboundEmailTo = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-user-create.inbound-email-to'),
        placeholder: '',
        required: false
      });
      this.countryDataSource = this.getCountriesDataSource();
      this.fieldInboundCountryForFaxNumber = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('fax-user-create.inbound-country-for-faxnumber'),
        placeholder: '',
        required: true,
        datasource: this.countryDataSource
      });
      this.fieldInboundCountryLocation = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('fax-user-create.inbound-country-for-faxnumber-location'),
        placeholder: '',
        required: true,
        datasource: this.zoneDataSource
      });
    };
    this.getCountriesDataSource = () => {
      const options = new Array();
      for (const cz of this.countryZones) {
        options.push({
          name: this.translateService.instant(`Countries.${cz.country.replace(/[^a-zA-Z0-9]/g, '')}`),
          value: cz.countryCode
        });
      }
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options);
    };
    this.updateCountryDataSource = () => {
      this.countryDataSource.updateOptions(this.getCountriesDataSource().options);
    };
    this.loadZoneDataSource = countryCode => {
      const options = new Array();
      const countryZone = this.countryZones.find(cz => cz.countryCode == countryCode);
      if (countryZone) {
        for (const zone of countryZone.zones) {
          options.push(zone);
        }
      }
      this.zoneDataSource.updateOptions(options);
    };
  }
  ngOnInit() {
    const zone = this.inbound.zone;
    this.zoneDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource();
    this.loadZoneDataSource(this.inbound.IPVNodeId);
    this.createFields();
    this.updateValidity();
    if (this.inbound.countryCode) {
      this.onCountryCodeChanged(this.inbound.countryCode);
      if (zone) {
        this.onCountryLocationChanged(zone);
      }
    }
  }
  static {
    this.ɵfac = function ServiceInboundOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceInboundOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ServiceInboundOptionsComponent,
      selectors: [["app-service-inbound-options"]],
      inputs: {
        inbound: "inbound",
        countryZones: "countryZones"
      },
      outputs: {
        valid: "valid"
      },
      decls: 10,
      vars: 9,
      consts: [["appAutoFocusFirstInput", "", 1, "service-inbound"], [1, "row"], [1, "col"], [3, "valueChange", "fieldChanged", "field", "value", "disabled"]],
      template: function ServiceInboundOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function ServiceInboundOptionsComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.inbound.email, $event) || (ctx.inbound.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function ServiceInboundOptionsComponent_Template_app_field_fieldChanged_3_listener() {
            return ctx.onInboundEmailChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function ServiceInboundOptionsComponent_Template_app_field_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.inbound.countryCode, $event) || (ctx.inbound.countryCode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function ServiceInboundOptionsComponent_Template_app_field_fieldChanged_6_listener($event) {
            return ctx.onCountryCodeChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function ServiceInboundOptionsComponent_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.inbound.zone, $event) || (ctx.inbound.zone = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function ServiceInboundOptionsComponent_Template_app_field_fieldChanged_9_listener($event) {
            return ctx.onCountryLocationChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldInboundEmailTo);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.inbound.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.inbound.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldInboundCountryForFaxNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.inbound.countryCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.inbound.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldInboundCountryLocation);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.inbound.zone);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.inbound.enabled);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 36470:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/account-components/service-outbound-options/service-outbound-options.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceOutboundOptionsComponent: () => (/* binding */ ServiceOutboundOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/core/email */ 38061);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);









class ServiceOutboundOptionsComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.valid = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.updateValidity = () => {
      let valid = true;
      if (this.outbound.enabled) {
        if (this.outbound.allowedSender && !_blocks_core_email__WEBPACK_IMPORTED_MODULE_1__.Email.isValid(this.outbound.allowedSender)) valid = false;
      }
      this.valid.next(valid);
    };
    this.onAllowedSenderChanged = () => {
      this.updateValidity();
    };
    this.createFields = () => {
      this.fieldAllowedSender = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-user-create.outbound-allowed-senders'),
        placeholder: '',
        required: false
      });
    };
  }
  ngOnInit() {
    this.createFields();
    this.updateValidity();
  }
  static {
    this.ɵfac = function ServiceOutboundOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceOutboundOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ServiceOutboundOptionsComponent,
      selectors: [["app-service-outbound-options"]],
      inputs: {
        outbound: "outbound"
      },
      outputs: {
        valid: "valid"
      },
      decls: 4,
      vars: 3,
      consts: [["appAutoFocusFirstInput", "", 1, "service-outbound-options"], [1, "row"], [1, "col"], [3, "valueChange", "fieldChanged", "field", "value", "disabled"]],
      template: function ServiceOutboundOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function ServiceOutboundOptionsComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.outbound.allowedSender, $event) || (ctx.outbound.allowedSender = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fieldChanged", function ServiceOutboundOptionsComponent_Template_app_field_fieldChanged_3_listener() {
            return ctx.onAllowedSenderChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.fieldAllowedSender);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.outbound.allowedSender);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.outbound.enabled);
        }
      },
      dependencies: [_Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_admin-fax-settings_account-components_account-components_module_ts.js.map