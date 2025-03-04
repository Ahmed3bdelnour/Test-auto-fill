"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-fax-settings_fax-user-add-service_fax-user-add-service_module_ts"],{

/***/ 95149:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/fax-user-add-service/add-service-confirmation/add-service-confirmation.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddServiceConfirmationComponent: () => (/* binding */ AddServiceConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _account_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../account-components/section-header/section-header.component */ 51518);
/* harmony import */ var _account_components_parts_invoice_parts_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account-components/parts-invoice/parts-invoice.component */ 42490);






function AddServiceConfirmationComponent_app_section_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-section-header", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "fax-user-service.confirm-add-outbound")("image", "../shared/img/check_circle_black_24dp.svg");
  }
}
function AddServiceConfirmationComponent_app_section_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-section-header", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "fax-user-service.confirm-add-inbound")("image", "../shared/img/check_circle_black_24dp.svg");
  }
}
class AddServiceConfirmationComponent {
  constructor() {
    this.valid = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.skipConfirmation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngOnInit() {
    this.valid.next(false);
  }
  onDisplay() {
    this.valid.next(true);
    if (!this.shouldSkipConfirmation) return;
    this.skipConfirmation.emit();
  }
  static {
    this.ɵfac = function AddServiceConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddServiceConfirmationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AddServiceConfirmationComponent,
      selectors: [["app-add-service-confirmation"]],
      inputs: {
        inbound: "inbound",
        outbound: "outbound",
        summaryProvider: "summaryProvider",
        shouldSkipConfirmation: "shouldSkipConfirmation"
      },
      outputs: {
        valid: "valid",
        skipConfirmation: "skipConfirmation"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "fax-user-create-confirmation"], [3, "text", "image", 4, "ngIf"], [3, "display", "summaryProvider"], [3, "text", "image"]],
      template: function AddServiceConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddServiceConfirmationComponent_app_section_header_1_Template, 1, 2, "app-section-header", 1)(2, AddServiceConfirmationComponent_app_section_header_2_Template, 1, 2, "app-section-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-parts-invoice", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("display", function AddServiceConfirmationComponent_Template_app_parts_invoice_display_3_listener() {
            return ctx.onDisplay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.outbound);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.inbound);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("summaryProvider", ctx.summaryProvider);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _account_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__.SectionHeaderComponent, _account_components_parts_invoice_parts_invoice_component__WEBPACK_IMPORTED_MODULE_2__.PartsInvoiceComponent],
      styles: [".fax-user-create-confirmation[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.fax-user-create-confirmation[_ngcontent-%COMP%]   .cost-warning[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-size: smaller;\n}\n.fax-user-create-confirmation[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n.fax-user-create-confirmation[_ngcontent-%COMP%]   .outbound-details[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  width: 450px;\n}\n.fax-user-create-confirmation[_ngcontent-%COMP%]   .inbound-details[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  width: 450px;\n}\n.fax-user-create-confirmation[_ngcontent-%COMP%]   .inbound-faxnumber-details[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL2ZheC11c2VyLWFkZC1zZXJ2aWNlL2FkZC1zZXJ2aWNlLWNvbmZpcm1hdGlvbi9hZGQtc2VydmljZS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0FBRko7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0Usb0JBQUE7QUFMSiIsInNvdXJjZXNDb250ZW50IjpbIi5mYXgtdXNlci1jcmVhdGUtY29uZmlybWF0aW9uIHtcclxuICAudXNlci1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmNvc3Qtd2FybmluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcblxyXG4gIC5pbmRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLm91dGJvdW5kLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5ib3VuZC1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmluYm91bmQtZmF4bnVtYmVyLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6488:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/fax-user-add-service/fax-user-add-service.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxUserAddServiceComponent: () => (/* binding */ FaxUserAddServiceComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_components_wizard_bar_wizard_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/components/wizard-bar/wizard-bar.component */ 87520);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _blocks_components_wizard_buttons_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/components/wizard-buttons/wizard-buttons.component */ 47248);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _account_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../account-components/section-header/section-header.component */ 51518);
/* harmony import */ var _account_components_service_inbound_options_service_inbound_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../account-components/service-inbound-options/service-inbound-options.component */ 46782);
/* harmony import */ var _account_components_service_outbound_options_service_outbound_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../account-components/service-outbound-options/service-outbound-options.component */ 36470);
/* harmony import */ var _add_service_confirmation_add_service_confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-service-confirmation/add-service-confirmation.component */ 95149);






























const _c0 = ["spinnerWrapper"];
const _c1 = () => ({});
function FaxUserAddServiceComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-wizard-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pages", ctx_r1.pages)("selectedPage", ctx_r1.selectedPage);
  }
}
function FaxUserAddServiceComponent_div_4_div_4_div_2_app_errors_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-errors", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("errors", ctx_r1.errors);
  }
}
function FaxUserAddServiceComponent_div_4_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, FaxUserAddServiceComponent_div_4_div_4_div_2_app_errors_2_Template, 1, 1, "app-errors", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.errors && ctx_r1.errors.length);
  }
}
function FaxUserAddServiceComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-section-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, FaxUserAddServiceComponent_div_4_div_4_div_2_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "app-service-outbound-options", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("valid", function FaxUserAddServiceComponent_div_4_div_4_Template_app_service_outbound_options_valid_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPageValid($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("text", "fax-user-service.outbound")("image", "material/file_upload_black_24dp.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("outbound", ctx_r1.outbound);
  }
}
function FaxUserAddServiceComponent_div_4_div_5_div_2_app_errors_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-errors", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("errors", ctx_r1.errors);
  }
}
function FaxUserAddServiceComponent_div_4_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, FaxUserAddServiceComponent_div_4_div_5_div_2_app_errors_2_Template, 1, 1, "app-errors", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.errors && ctx_r1.errors.length);
  }
}
function FaxUserAddServiceComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-section-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, FaxUserAddServiceComponent_div_4_div_5_div_2_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "app-service-inbound-options", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("valid", function FaxUserAddServiceComponent_div_4_div_5_Template_app_service_inbound_options_valid_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPageValid($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("text", "fax-user-service.inbound")("image", "material/file_download_black_24dp.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inbound", ctx_r1.inbound)("countryZones", ctx_r1.accountRegistrationDetails.countryZones);
  }
}
function FaxUserAddServiceComponent_div_4_app_add_service_confirmation_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-add-service-confirmation", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("valid", function FaxUserAddServiceComponent_div_4_app_add_service_confirmation_7_Template_app_add_service_confirmation_valid_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPageValid($event));
    })("skipConfirmation", function FaxUserAddServiceComponent_div_4_app_add_service_confirmation_7_Template_app_add_service_confirmation_skipConfirmation_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inbound", ctx_r1.routeData.type === "inbound" ? ctx_r1.inbound : null)("outbound", ctx_r1.routeData.type === "outbound" ? ctx_r1.outbound : null)("summaryProvider", ctx_r1.summaryProvider)("shouldSkipConfirmation", ctx_r1.skipConfirmation);
  }
}
function FaxUserAddServiceComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, FaxUserAddServiceComponent_div_4_div_1_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, FaxUserAddServiceComponent_div_4_div_4_Template, 4, 4, "div", 9)(5, FaxUserAddServiceComponent_div_4_div_5_Template, 4, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, FaxUserAddServiceComponent_div_4_app_add_service_confirmation_7_Template, 1, 4, "app-add-service-confirmation", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 12)(9, "app-wizard-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onCancel", function FaxUserAddServiceComponent_div_4_Template_app_wizard_buttons_onCancel_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onCancel());
    })("onBack", function FaxUserAddServiceComponent_div_4_Template_app_wizard_buttons_onBack_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onBack());
    })("onNext", function FaxUserAddServiceComponent_div_4_Template_app_wizard_buttons_onNext_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.skipConfirmation);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selectedPageId === "service-outbound" || ctx_r1.routeData.type === "outbound" && ctx_r1.skipConfirmation);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selectedPageId === "service-inbound" || ctx_r1.routeData.type === "inbound" && ctx_r1.skipConfirmation);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r1.skipConfirmation);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selectedPageId === "confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("backEnabled", ctx_r1.selectedPage !== 0)("showBack", !ctx_r1.skipConfirmation)("nextEnabled", ctx_r1.valid)("nextButtonText", ctx_r1.nextButtonText);
  }
}
class InboundSummaryProvider {
  constructor(interfaxService, userid, inbound) {
    this.interfaxService = interfaxService;
    this.userid = userid;
    this.inbound = inbound;
  }
  load(successCallBack, failureCallBack) {
    this.interfaxService.getInboundPurchaseSummary(this.userid, this.inbound, successCallBack, failureCallBack);
  }
}
class OutboundSummaryProvider {
  constructor(interfaxService, userid, outbound) {
    this.interfaxService = interfaxService;
    this.userid = userid;
    this.outbound = outbound;
  }
  load(successCallBack, failureCallBack) {
    this.interfaxService.getOutboundPurchaseSummary(this.userid, this.outbound, successCallBack, failureCallBack);
  }
}
class FaxUserAddServiceComponent {
  constructor(translateService, spinnerService, interfaxService, toastrService, router, errorsService, route, userStateService) {
    this.translateService = translateService;
    this.spinnerService = spinnerService;
    this.interfaxService = interfaxService;
    this.toastrService = toastrService;
    this.router = router;
    this.errorsService = errorsService;
    this.route = route;
    this.userStateService = userStateService;
    this.formControls = [];
    this.outbound = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.OutboundService();
    this.inbound = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.InboundService();
    this.pages = new Array();
    this.selectedPage = 0;
    this.selectedPageId = '';
    this.show = false;
    this.valid = false;
    this.skipConfirmation = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.onPageValid = valid => {
      this.valid = valid;
    };
    this.addUserService = () => {
      this.spinnerService.show(this.translateService.instant('fax-user-service.adding-service'), this.spinnerWrapper.nativeElement);
      if (this.routeData.type == 'inbound') {
        this.interfaxService.addInboundService(this.routeParams.userid, this.inbound, this.addServiceSucceeded, this.addServiceFailed);
      } else {
        this.interfaxService.addOutboundService(this.routeParams.userid, this.outbound, this.addServiceSucceeded, this.addServiceFailed);
      }
    };
    this.addServiceSucceeded = r => {
      this.spinnerService.hide();
      this.toastrService.success(this.translateService.instant('fax-user-service.add-service-succeeded'));
      this.close();
    };
    this.addServiceFailed = e => {
      this.spinnerService.hide();
      this.errorsService.showErrorsModal(e, this.translateService.instant('fax-user-service.add-service-failed'));
    };
    this.load = () => {
      this.spinnerService.show(this.translateService.instant('Common.LoadingData'), this.spinnerWrapper.nativeElement);
      this.interfaxService.getAccountRegistrationDefaults('', this.accountRegistrationDefaultsLoaded, this.loadFailed);
    };
    this.accountRegistrationDefaultsLoaded = ard => {
      this.accountRegistrationDetails = ard;
      this.interfaxService.getAccount(this.accountLoaded, this.loadFailed);
    };
    this.accountLoaded = a => {
      this.account = a;
      this.loadPages();
      this.update();
      this.spinnerService.hide();
      this.show = true;
    };
    this.createPurchaseSummary = () => {
      if (this.routeData.type == 'inbound') {
        this.summaryProvider = new InboundSummaryProvider(this.interfaxService, this.routeParams.userid, this.inbound);
      } else {
        this.summaryProvider = new OutboundSummaryProvider(this.interfaxService, this.routeParams.userid, this.outbound);
      }
    };
    this.loadPages = () => {
      this.addPage(`service-${this.routeData.type}`);
      this.addPage('confirmation');
    };
    this.loadFailed = () => {
      //todo:
      this.spinnerService.hide();
    };
    this.onCancel = () => {
      //tbd: CONFIRM?
      this.close();
    };
    this.onBack = () => {
      this.valid = false;
      this.selectedPage--;
      this.update();
    };
    this.onNext = () => {
      this.errors = null;
      if (this.selectedPage == this.pages.length - 1) {
        this.addUserService();
      } else {
        this.createPurchaseSummary();
        this.spinnerService.show(this.translateService.instant('fax-user-service.validating'), this.spinnerWrapper.nativeElement);
        this.summaryProvider.load(this.summaryValidated, this.summaryFailedValidation);
      }
    };
    this.summaryValidated = ps => {
      if (!this.skipConfirmation) this.spinnerService.hide();
      this.selectedPage++;
      this.valid = false;
      this.update();
    };
    this.summaryFailedValidation = e => {
      this.spinnerService.hide();
      this.errors = [e];
    };
    this.close = () => {
      this.router.navigateByUrl('/product/settings/InterFAX/InterFAX-Upland.Bamba.InterFAX.Administration.FaxUsers.Folder');
    };
    this.update = () => {
      this.nextButtonText = this.getNextButtonText();
      this.selectedPageId = this.pages[this.selectedPage].id;
    };
    this.addPage = id => {
      this.pages.push(new _blocks_components_wizard_bar_wizard_bar_component__WEBPACK_IMPORTED_MODULE_2__.WizardBarPage(id, this.translateService.instant(`fax-user-service.wizard-page-${id}`)));
    };
    this.getTitle = () => {
      const prefix = this.translateService.instant(`fax-user-service.header-text-${this.routeData.type}`);
      return `${prefix} ${this.routeParams.userid}`;
    };
  }
  ngOnInit() {
    this.outbound.enabled = true;
    this.inbound.enabled = true;
    this.skipConfirmation = this.userStateService.hasFeature(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Feature.InterFAX_SkipAddingServiceConfirmation);
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      this.load();
    }));
  }
  getNextButtonText() {
    if (this.selectedPage === this.pages.length - 1 || this.skipConfirmation) return 'fax-user-service.add-service';
    return 'App.next';
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function FaxUserAddServiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxUserAddServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: FaxUserAddServiceComponent,
      selectors: [["app-fax-user-add-service"]],
      viewQuery: function FaxUserAddServiceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.spinnerWrapper = _t.first);
        }
      },
      decls: 5,
      vars: 3,
      consts: [["spinnerWrapper", ""], [1, "fax-user-service", "project-list-dashboard-body", "d-flex", "flex-column", "min-h-fit-content"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "min-h-fit-content"], ["class", "h-100 m-0 min-h-fit-content d-flex", 4, "ngIf"], [1, "h-100", "m-0", "min-h-fit-content", "d-flex"], ["class", "properties-panel", 4, "ngIf"], [1, "col", "d-flex", "flex-column", "min-h-fit-content"], ["fxFlex", "auto", 1, "wizard-panel", "col", 3, "perfectScrollbar"], ["class", "service-options", 4, "ngIf"], [3, "hidden"], [3, "inbound", "outbound", "summaryProvider", "shouldSkipConfirmation", "valid", "skipConfirmation", 4, "ngIf"], [1, "w-100"], [1, "w-100", 3, "onCancel", "onBack", "onNext", "backEnabled", "showBack", "nextEnabled", "nextButtonText"], [1, "properties-panel"], [3, "pages", "selectedPage"], [1, "service-options"], [3, "text", "image"], [4, "ngIf"], [3, "valid", "outbound"], [3, "errors", 4, "ngIf"], [3, "errors"], [3, "valid", "inbound", "countryZones"], [3, "valid", "skipConfirmation", "inbound", "outbound", "summaryProvider", "shouldSkipConfirmation"]],
      template: function FaxUserAddServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-secondary-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, FaxUserAddServiceComponent_div_4_Template, 10, 11, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("headerText", ctx.getTitle())("rightControls", ctx.formControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__.ErrorsComponent, _blocks_components_wizard_bar_wizard_bar_component__WEBPACK_IMPORTED_MODULE_2__.WizardBarComponent, _blocks_components_wizard_buttons_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_9__.WizardButtonsComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_21__.PerfectScrollbarDirective, _account_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__.SectionHeaderComponent, _account_components_service_inbound_options_service_inbound_options_component__WEBPACK_IMPORTED_MODULE_11__.ServiceInboundOptionsComponent, _account_components_service_outbound_options_service_outbound_options_component__WEBPACK_IMPORTED_MODULE_12__.ServiceOutboundOptionsComponent, _add_service_confirmation_add_service_confirmation_component__WEBPACK_IMPORTED_MODULE_13__.AddServiceConfirmationComponent],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.fax-user-service[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n  padding-bottom: 15px;\n  height: 100%;\n}\n.fax-user-service[_ngcontent-%COMP%]   .service-options[_ngcontent-%COMP%] {\n  width: 550px;\n}\n.fax-user-service.min-h-fit-content[_ngcontent-%COMP%], \n.fax-user-service[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n.fax-user-service[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.fax-user-service[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.fax-user-service[_ngcontent-%COMP%]   .properties-panel[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  border-right: 1px solid #e0e0e0;\n}\n.fax-user-service[_ngcontent-%COMP%]   .wizard-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9mYXgtdXNlci1hZGQtc2VydmljZS9mYXgtdXNlci1hZGQtc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFLRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQTRPRjtBQWxQRTtFQUNFLFlBQUE7QUFvUEo7QUE3T0U7O0VBRUUsa0NBQUE7QUErT0o7QUE1T0U7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0FBOE9KO0FBNU9JO0VBQ0UsMkJBQUE7QUE4T047QUExT0U7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBNE9KO0FBek9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTJPSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmZheC11c2VyLXNlcnZpY2Uge1xyXG4gIC5zZXJ2aWNlLW9wdGlvbnMge1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuXHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJi5taW4taC1maXQtY29udGVudCxcclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH1cclxuXHJcbiAgLndpemFyZC1wYW5lbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 72426:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/fax-user-add-service/fax-user-add-service.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxUserAddServiceComponentModule: () => (/* binding */ FaxUserAddServiceComponentModule),
/* harmony export */   FaxUserAddServiceComponentRoutingModule: () => (/* binding */ FaxUserAddServiceComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/page/page.module */ 13762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _fax_user_add_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fax-user-add-service.component */ 6488);
/* harmony import */ var _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-components/account-components.module */ 69248);
/* harmony import */ var _add_service_confirmation_add_service_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-service-confirmation/add-service-confirmation.component */ 95149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);














const routes = [{
  path: 'inbound/:userid',
  component: _fax_user_add_service_component__WEBPACK_IMPORTED_MODULE_3__.FaxUserAddServiceComponent,
  data: {
    type: 'inbound'
  },
  pathMatch: 'full'
}, {
  path: 'outbound/:userid',
  component: _fax_user_add_service_component__WEBPACK_IMPORTED_MODULE_3__.FaxUserAddServiceComponent,
  data: {
    type: 'outbound'
  },
  pathMatch: 'full'
}];
class FaxUserAddServiceComponentRoutingModule {
  static {
    this.ɵfac = function FaxUserAddServiceComponentRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxUserAddServiceComponentRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: FaxUserAddServiceComponentRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FaxUserAddServiceComponentRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();
class FaxUserAddServiceComponentModule {
  static {
    this.ɵfac = function FaxUserAddServiceComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxUserAddServiceComponentModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: FaxUserAddServiceComponentModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, FaxUserAddServiceComponentRoutingModule, _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_4__.AccountComponentsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FaxUserAddServiceComponentModule, {
    declarations: [_fax_user_add_service_component__WEBPACK_IMPORTED_MODULE_3__.FaxUserAddServiceComponent, _add_service_confirmation_add_service_confirmation_component__WEBPACK_IMPORTED_MODULE_5__.AddServiceConfirmationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, FaxUserAddServiceComponentRoutingModule, _account_components_account_components_module__WEBPACK_IMPORTED_MODULE_4__.AccountComponentsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-fax-settings_fax-user-add-service_fax-user-add-service_module_ts.js.map