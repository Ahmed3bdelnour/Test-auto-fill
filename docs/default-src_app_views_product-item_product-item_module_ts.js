"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_product-item_product-item_module_ts"],{

/***/ 24562:
/*!****************************************************************!*\
  !*** ./src/app/blocks/folder-details/folder-details.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderDetailsModule: () => (/* binding */ FolderDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.module */ 68876);
/* harmony import */ var _folder_details_folder_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder-details/folder-details.component */ 23279);
/* harmony import */ var _interfax_currency_interfax_currency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfax-currency/interfax-currency.component */ 95831);
/* harmony import */ var _interfax_prepaid_current_balance_interfax_prepaid_current_balance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfax-prepaid-current-balance/interfax-prepaid-current-balance.component */ 15885);
/* harmony import */ var _folder_status_details_folder_status_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./folder-status-details/folder-status-details.component */ 34367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);








class FolderDetailsModule {
  static {
    this.ɵfac = function FolderDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FolderDetailsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: FolderDetailsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FolderDetailsModule, {
    declarations: [_interfax_prepaid_current_balance_interfax_prepaid_current_balance_component__WEBPACK_IMPORTED_MODULE_3__.InterfaxPrepaidCurrentBalanceComponent, _folder_details_folder_details_component__WEBPACK_IMPORTED_MODULE_1__.FolderDetailsComponent, _interfax_currency_interfax_currency_component__WEBPACK_IMPORTED_MODULE_2__.InterfaxCurrencyComponent, _folder_status_details_folder_status_details_component__WEBPACK_IMPORTED_MODULE_4__.FolderStatusDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule],
    exports: [_folder_details_folder_details_component__WEBPACK_IMPORTED_MODULE_1__.FolderDetailsComponent]
  });
})();

/***/ }),

/***/ 23279:
/*!**********************************************************************************!*\
  !*** ./src/app/blocks/folder-details/folder-details/folder-details.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderDetailsComponent: () => (/* binding */ FolderDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 32275);
/* harmony import */ var _services_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/models */ 34158);
/* harmony import */ var _services_folder_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/folder-details.service */ 52166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _interfax_prepaid_current_balance_interfax_prepaid_current_balance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfax-prepaid-current-balance/interfax-prepaid-current-balance.component */ 15885);
/* harmony import */ var _interfax_currency_interfax_currency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfax-currency/interfax-currency.component */ 95831);
/* harmony import */ var _folder_status_details_folder_status_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../folder-status-details/folder-status-details.component */ 34367);











function FolderDetailsComponent_div_0_app_interfax_prepaid_current_balance_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-interfax-prepaid-current-balance", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.data);
  }
}
function FolderDetailsComponent_div_0_app_interfax_currency_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-interfax-currency", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.data);
  }
}
function FolderDetailsComponent_div_0_app_folder_status_details_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-folder-status-details", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.data);
  }
}
function FolderDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FolderDetailsComponent_div_0_app_interfax_prepaid_current_balance_1_Template, 1, 1, "app-interfax-prepaid-current-balance", 2)(2, FolderDetailsComponent_div_0_app_interfax_currency_2_Template, 1, 1, "app-interfax-currency", 2)(3, FolderDetailsComponent_div_0_app_folder_status_details_3_Template, 1, 1, "app-folder-status-details", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.details.id == "InterFAX-Upland.Bamba.InterFAX.Administration.PrePaidCards.CurrentBalanceFolderDetails");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.details.id == "InterFAX-Upland.Bamba.InterFAX.Administration.Invoices.CurrencyFolderDetails");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.details.id == "BambaSettingsApplication-Upland.Bamba.Core.Folders.FolderStatusDetails");
  }
}
class FolderDetailsComponent {
  constructor(apiService, folderDetails) {
    this.apiService = apiService;
    this.folderDetails = folderDetails;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.loaded = d => {
      this.data = d;
    };
    this.failed = e => {
      console.log('FolderDetailsComponent', e);
    };
  }
  ngOnInit() {
    this.subscriptions.add(this.folderDetails.folderDetailsChanged.subscribe(folderData => {
      if (folderData.folderDetailsId == this.details.id) {
        this.data = folderData;
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function FolderDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FolderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_folder_details_service__WEBPACK_IMPORTED_MODULE_2__.FolderDetailsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FolderDetailsComponent,
      selectors: [["app-folder-details"]],
      inputs: {
        details: "details"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "folder-details", 4, "ngIf"], [1, "folder-details"], [3, "data", 4, "ngIf"], [3, "data"]],
      template: function FolderDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, FolderDetailsComponent_div_0_Template, 4, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _interfax_prepaid_current_balance_interfax_prepaid_current_balance_component__WEBPACK_IMPORTED_MODULE_3__.InterfaxPrepaidCurrentBalanceComponent, _interfax_currency_interfax_currency_component__WEBPACK_IMPORTED_MODULE_4__.InterfaxCurrencyComponent, _folder_status_details_folder_status_details_component__WEBPACK_IMPORTED_MODULE_5__.FolderStatusDetailsComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 34367:
/*!************************************************************************************************!*\
  !*** ./src/app/blocks/folder-details/folder-status-details/folder-status-details.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderStatusDetailsComponent: () => (/* binding */ FolderStatusDetailsComponent)
/* harmony export */ });
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);



class FolderStatusDetailsComponent {
  constructor(userState) {
    this.userState = userState;
  }
  static {
    this.ɵfac = function FolderStatusDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FolderStatusDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FolderStatusDetailsComponent,
      selectors: [["app-folder-status-details"]],
      inputs: {
        data: "data"
      },
      decls: 3,
      vars: 4,
      consts: [[1, "folder-status-details"]],
      template: function FolderStatusDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("status-display ", ctx.data.class, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.message, " ");
        }
      },
      styles: [".folder-status-details[_ngcontent-%COMP%]   .status-display[_ngcontent-%COMP%] {\n  padding: 3px;\n  border-radius: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.folder-status-details[_ngcontent-%COMP%]   .status-success[_ngcontent-%COMP%] {\n  background: RGB(50, 205, 50);\n  color: white;\n}\n.folder-status-details[_ngcontent-%COMP%]   .status-failed[_ngcontent-%COMP%] {\n  background: RGB(227, 58, 66);\n  color: white;\n}\n.folder-status-details[_ngcontent-%COMP%]   .status-pending[_ngcontent-%COMP%] {\n  background: RGB(249, 133, 50);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZvbGRlci1kZXRhaWxzL2ZvbGRlci1zdGF0dXMtZGV0YWlscy9mb2xkZXItc3RhdHVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FBSEoiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9sZGVyLXN0YXR1cy1kZXRhaWxzIHtcclxuICAuc3RhdHVzLWRpc3BsYXkge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5zdGF0dXMtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBSR0IoNTAsIDIwNSwgNTApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cy1mYWlsZWQge1xyXG4gICAgYmFja2dyb3VuZDogUkdCKDIyNywgNTgsIDY2KTtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gIH1cclxuXHJcbiAgLnN0YXR1cy1wZW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IFJHQigyNDksIDEzMywgNTApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 95831:
/*!****************************************************************************************!*\
  !*** ./src/app/blocks/folder-details/interfax-currency/interfax-currency.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterfaxCurrencyComponent: () => (/* binding */ InterfaxCurrencyComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_utils_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/utils/currency */ 10299);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);





class InterfaxCurrencyComponent {
  constructor(userState) {
    this.userState = userState;
  }
  ngOnInit() {
    this.currency = (0,_Bamba_Shared_src_utils_currency__WEBPACK_IMPORTED_MODULE_0__.getLocalizedCurrencyName)(this.data.currency, this.userState.getLocale());
  }
  static {
    this.ɵfac = function InterfaxCurrencyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InterfaxCurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: InterfaxCurrencyComponent,
      selectors: [["app-interfax-currency"]],
      inputs: {
        data: "data"
      },
      decls: 3,
      vars: 4,
      consts: [[1, "interfax-currency"]],
      template: function InterfaxCurrencyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "folder-details.interfax-currency"), " ", ctx.currency, "\n");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: [".interfax-currency[_ngcontent-%COMP%] {\n  background: lightyellow;\n  padding: 3px;\n  border-radius: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: #464646;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZvbGRlci1kZXRhaWxzL2ludGVyZmF4LWN1cnJlbmN5L2ludGVyZmF4LWN1cnJlbmN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVyZmF4LWN1cnJlbmN5IHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 15885:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/blocks/folder-details/interfax-prepaid-current-balance/interfax-prepaid-current-balance.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterfaxPrepaidCurrentBalanceComponent: () => (/* binding */ InterfaxPrepaidCurrentBalanceComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_utils_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/utils/currency */ 10299);
/* harmony import */ var _services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _Bamba_Shared_src_fields_LocalizedMoneyAmount_LocalizedMoneyAmount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/LocalizedMoneyAmount/LocalizedMoneyAmount.component */ 80570);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);






class InterfaxPrepaidCurrentBalanceComponent {
  constructor(userState) {
    this.userState = userState;
  }
  ngOnInit() {
    this.currency = (0,_Bamba_Shared_src_utils_currency__WEBPACK_IMPORTED_MODULE_0__.getLocalizedCurrencyName)(this.data.balance.currencyCode, this.userState.getLocale());
  }
  static {
    this.ɵfac = function InterfaxPrepaidCurrentBalanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InterfaxPrepaidCurrentBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: InterfaxPrepaidCurrentBalanceComponent,
      selectors: [["app-interfax-prepaid-current-balance"]],
      inputs: {
        data: "data"
      },
      decls: 5,
      vars: 5,
      consts: [[1, "interfax-prepaid-current-balance"], [3, "amount"]],
      template: function InterfaxPrepaidCurrentBalanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-localized-money-amount", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "folder-details.interfax-prepaid-current-balance"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("amount", ctx.data.balance);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx.currency, ")\n");
        }
      },
      dependencies: [_Bamba_Shared_src_fields_LocalizedMoneyAmount_LocalizedMoneyAmount_component__WEBPACK_IMPORTED_MODULE_2__.LocalizedMoneyAmountComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: [".interfax-prepaid-current-balance[_ngcontent-%COMP%] {\n  background: lightyellow;\n  padding: 3px;\n  border-radius: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: #464646;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2tzL2ZvbGRlci1kZXRhaWxzL2ludGVyZmF4LXByZXBhaWQtY3VycmVudC1iYWxhbmNlL2ludGVyZmF4LXByZXBhaWQtY3VycmVudC1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVyZmF4LXByZXBhaWQtY3VycmVudC1iYWxhbmNlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 81546:
/*!********************************************************!*\
  !*** ./src/app/blocks/formatters/formatters.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattersModule: () => (/* binding */ FormattersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _formatters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters.component */ 32299);
/* harmony import */ var _formatter_formatter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatter/formatter.component */ 42851);
/* harmony import */ var _formatter_actions_case_case_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatter/actions/case/case.component */ 46216);
/* harmony import */ var _formatter_actions_prefix_and_suffix_prefix_and_suffix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatter/actions/prefix-and-suffix/prefix-and-suffix.component */ 90382);
/* harmony import */ var _formatter_criterias_text_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatter/criterias/text/text.component */ 40067);
/* harmony import */ var _formatter_criterias_length_length_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatter/criterias/length/length.component */ 81973);
/* harmony import */ var _formatter_actions_replace_replace_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formatter/actions/replace/replace.component */ 85881);
/* harmony import */ var _formatter_actions_remove_remove_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formatter/actions/remove/remove.component */ 7716);
/* harmony import */ var _formatter_actions_insert_insert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formatter/actions/insert/insert.component */ 34402);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 96623);
















class FormattersModule {
  static {
    this.ɵfac = function FormattersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormattersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: FormattersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.DragDropModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_15__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ErrorsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FormattersModule, {
    declarations: [_formatters_component__WEBPACK_IMPORTED_MODULE_1__.FormattersComponent, _formatter_formatter_component__WEBPACK_IMPORTED_MODULE_2__.FormatterComponent, _formatter_actions_case_case_component__WEBPACK_IMPORTED_MODULE_3__.CaseComponent, _formatter_actions_prefix_and_suffix_prefix_and_suffix_component__WEBPACK_IMPORTED_MODULE_4__.PrefixAndSuffixComponent, _formatter_actions_remove_remove_component__WEBPACK_IMPORTED_MODULE_8__.RemoveComponent, _formatter_criterias_text_text_component__WEBPACK_IMPORTED_MODULE_5__.TextCriteriaComponent, _formatter_criterias_length_length_component__WEBPACK_IMPORTED_MODULE_6__.LengthComponent, _formatter_actions_replace_replace_component__WEBPACK_IMPORTED_MODULE_7__.ReplaceComponent, _formatter_actions_remove_remove_component__WEBPACK_IMPORTED_MODULE_8__.RemoveComponent, _formatter_actions_insert_insert_component__WEBPACK_IMPORTED_MODULE_9__.InsertComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.DragDropModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_15__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ErrorsModule],
    exports: [_formatters_component__WEBPACK_IMPORTED_MODULE_1__.FormattersComponent]
  });
})();

/***/ }),

/***/ 52166:
/*!***********************************************************!*\
  !*** ./src/app/blocks/services/folder-details.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderDetailsService: () => (/* binding */ FolderDetailsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 63150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);


class FolderDetailsService {
  constructor() {
    this.folderDetailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  onFolderDetailsChanged(folderDetails) {
    this.folderDetailsChanged.next(folderDetails);
  }
  static {
    this.ɵfac = function FolderDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FolderDetailsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FolderDetailsService,
      factory: FolderDetailsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9685:
/*!***********************************************************************!*\
  !*** ./src/app/views/admin-metadata/admin-metadata-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMetaDataRoutingModule: () => (/* binding */ AdminMetaDataRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_metadata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-metadata.component */ 66089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'duplicate/:metadataid',
  component: _admin_metadata_component__WEBPACK_IMPORTED_MODULE_0__.AdminMetaDataComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: 'create',
  component: _admin_metadata_component__WEBPACK_IMPORTED_MODULE_0__.AdminMetaDataComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':metadataid',
  component: _admin_metadata_component__WEBPACK_IMPORTED_MODULE_0__.AdminMetaDataComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}, {
  path: 'create/:metadatatemplate',
  component: _admin_metadata_component__WEBPACK_IMPORTED_MODULE_0__.AdminMetaDataComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}];
class AdminMetaDataRoutingModule {
  static {
    this.ɵfac = function AdminMetaDataRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMetaDataRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminMetaDataRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminMetaDataRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 44892:
/*!***************************************************************!*\
  !*** ./src/app/views/admin-metadata/admin-metadata.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMetaDataModule: () => (/* binding */ AdminMetaDataModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ 72474);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _admin_metadata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-metadata.component */ 66089);
/* harmony import */ var _validation_length_validation_length_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-length/validation-length.component */ 52573);
/* harmony import */ var _validation_date_validation_date_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-date/validation-date.component */ 63417);
/* harmony import */ var _validation_date_date_value_date_value_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-date/date-value/date-value.component */ 30298);
/* harmony import */ var _validation_regex_validation_regex_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-regex/validation-regex.component */ 62337);
/* harmony import */ var _validation_datasource_column_validation_datasource_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation-datasource-column/validation-datasource-column.component */ 31251);
/* harmony import */ var _metadata_items_metadata_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata-items/metadata-items.component */ 37679);
/* harmony import */ var _metadata_cascading_options_metadata_cascading_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metadata-cascading-options/metadata-cascading-options.component */ 27783);
/* harmony import */ var _metadata_lineitems_metadata_lineitems_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metadata-lineitems/metadata-lineitems.component */ 71479);
/* harmony import */ var _metadata_workflows_metadata_workflows_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./metadata-workflows/metadata-workflows.component */ 73464);
/* harmony import */ var _metadata_lookup_metadata_lookup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metadata-lookup/metadata-lookup.component */ 26417);
/* harmony import */ var _metadata_lookup_filebound_lookup_filebound_lookup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metadata-lookup/filebound-lookup/filebound-lookup.component */ 86200);
/* harmony import */ var _metadata_lookup_lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./metadata-lookup/lookup-mappings/lookup-mappings.component */ 62448);
/* harmony import */ var _metadata_lookup_csv_lookup_csv_lookup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./metadata-lookup/csv-lookup/csv-lookup.component */ 93936);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_formatters_formatters_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../blocks/formatters/formatters.module */ 81546);
/* harmony import */ var _admin_metadata_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-metadata-routing.module */ 9685);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _metadata_lookup_datasource_lookup_datasource_lookup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./metadata-lookup/datasource-lookup/datasource-lookup.component */ 43424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 96623);




























class AdminMetaDataModule {
  static {
    this.ɵfac = function AdminMetaDataModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMetaDataModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
      type: AdminMetaDataModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__.DragDropModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_25__.PerfectScrollbarModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_26__.NgxSmartModalModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule, _admin_metadata_routing_module__WEBPACK_IMPORTED_MODULE_17__.AdminMetaDataRoutingModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_15__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.TabBarModule, _blocks_formatters_formatters_module__WEBPACK_IMPORTED_MODULE_16__.FormattersModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AdminMetaDataModule, {
    declarations: [_admin_metadata_component__WEBPACK_IMPORTED_MODULE_1__.AdminMetaDataComponent, _validation_length_validation_length_component__WEBPACK_IMPORTED_MODULE_2__.ValidationLengthComponent, _validation_date_validation_date_component__WEBPACK_IMPORTED_MODULE_3__.ValidationDateComponent, _validation_datasource_column_validation_datasource_column_component__WEBPACK_IMPORTED_MODULE_6__.ValidationDataSourceColumnComponent, _validation_date_date_value_date_value_component__WEBPACK_IMPORTED_MODULE_4__.DateValueComponent, _validation_regex_validation_regex_component__WEBPACK_IMPORTED_MODULE_5__.ValidationRegexComponent, _metadata_items_metadata_items_component__WEBPACK_IMPORTED_MODULE_7__.MetadataItemsComponent, _metadata_cascading_options_metadata_cascading_options_component__WEBPACK_IMPORTED_MODULE_8__.MetaDataCascadingOptionsComponent, _metadata_lineitems_metadata_lineitems_component__WEBPACK_IMPORTED_MODULE_9__.MetadataLineitemsComponent, _metadata_workflows_metadata_workflows_component__WEBPACK_IMPORTED_MODULE_10__.MetadataWorkflowsComponent, _metadata_lookup_metadata_lookup_component__WEBPACK_IMPORTED_MODULE_11__.MetadataLookupComponent, _metadata_lookup_filebound_lookup_filebound_lookup_component__WEBPACK_IMPORTED_MODULE_12__.FileBoundLookupComponent, _metadata_lookup_lookup_mappings_lookup_mappings_component__WEBPACK_IMPORTED_MODULE_13__.LookupMappingsComponent, _metadata_lookup_csv_lookup_csv_lookup_component__WEBPACK_IMPORTED_MODULE_14__.CSVLookupComponent, _metadata_lookup_datasource_lookup_datasource_lookup_component__WEBPACK_IMPORTED_MODULE_19__.DatasourceLookupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__.DragDropModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_25__.PerfectScrollbarModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_26__.NgxSmartModalModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule, _admin_metadata_routing_module__WEBPACK_IMPORTED_MODULE_17__.AdminMetaDataRoutingModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_15__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_18__.TabBarModule, _blocks_formatters_formatters_module__WEBPACK_IMPORTED_MODULE_16__.FormattersModule]
  });
})();

/***/ }),

/***/ 31185:
/*!*******************************************************************************!*\
  !*** ./src/app/views/product-item/box/action-panel/action-panel.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionPanelComponent: () => (/* binding */ ActionPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../blocks/services/models */ 34158);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_filters_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/filters/filter/filter.component */ 39545);
/* harmony import */ var _blocks_folder_details_folder_details_folder_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/folder-details/folder-details/folder-details.component */ 23279);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_components_toolbar_actions_toolbar_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/components/toolbar-actions/toolbar-actions.component */ 28967);





















const _c0 = ["dualPickRef"];
const _c1 = ["saveModalButton"];
const _c2 = ["appActionPanel", ""];
const _c3 = () => ({
  useBothWheelAxes: true
});
const _c4 = a0 => ({
  "assist-padding": a0
});
function ActionPanelComponent_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-folder-details", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const details_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("details", details_r2);
  }
}
function ActionPanelComponent_ul_2_li_2_app_filter_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-filter", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function ActionPanelComponent_ul_2_li_2_app_filter_1_Template_app_filter_selected_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const filter_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.onFilterChanged(filter_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("filter", filter_r4);
  }
}
function ActionPanelComponent_ul_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ActionPanelComponent_ul_2_li_2_app_filter_1_Template, 1, 1, "app-filter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.hideFilters);
  }
}
function ActionPanelComponent_ul_2_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li")(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionPanelComponent_ul_2_li_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.pinClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r4.areFiltersPinned ? "assets/img/material/pin.svg" : "assets/img/material/pin-off.svg", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx_r4.areFiltersPinned ? "Product-Item-Action.Unpin-Filters" : "Product-Item-Action.Pin-Filters"));
  }
}
function ActionPanelComponent_ul_2_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li")(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionPanelComponent_ul_2_li_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "folder.clear-filters"));
  }
}
function ActionPanelComponent_ul_2_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionPanelComponent_ul_2_li_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.displayColumnProperties());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Product-Item-Action.Columns"));
  }
}
function ActionPanelComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ActionPanelComponent_ul_2_li_1_Template, 2, 1, "li", 14)(2, ActionPanelComponent_ul_2_li_2_Template, 2, 1, "li", 14)(3, ActionPanelComponent_ul_2_li_3_Template, 4, 4, "li", 15)(4, ActionPanelComponent_ul_2_li_4_Template, 4, 3, "li", 15)(5, ActionPanelComponent_ul_2_li_5_Template, 5, 3, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.folder.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.folder.filters);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.areFiltersShown && ctx_r4.areFiltersPinned !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.areFiltersShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.hideColumns);
  }
}
function ActionPanelComponent_app_dual_picklist_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dual-picklist", 27, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("currentChange", function ActionPanelComponent_app_dual_picklist_8_Template_app_dual_picklist_currentChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r4.selectedColumns, $event) || (ctx_r4.selectedColumns = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("available", ctx_r4.availableColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("current", ctx_r4.selectedColumns);
  }
}
class ActionPanelComponent {
  constructor(userState, translate, ngxSmartModalService, toastr, delay, userPreferencesService) {
    this.userState = userState;
    this.translate = translate;
    this.ngxSmartModalService = ngxSmartModalService;
    this.toastr = toastr;
    this.delay = delay;
    this.userPreferencesService = userPreferencesService;
    this.areFiltersPinned = null;
    this.hideFilters = false;
    this.hideColumns = false;
    this.onFiltersUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onActionInvoked = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onSaveColumns = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onPinClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.availableColumns = [];
    this.selectedColumns = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.displayColumnProperties = () => {
      this.modalColumnPropertiesInstance.open();
    };
    this.onToolbarAction = action => {
      this.onActionInvoked.emit(action);
    };
    this.savePreference = () => {
      if (this.selectedColumns.length === 0) {
        this.toastr.warning(this.translate.instant('Action-panel.NeedsOneColumnWarning'));
        return;
      }
      this.closeColumnPropertiesInstance();
      const preference = [];
      this.selectedColumns.forEach(element => {
        const elementDefaultColumn = this.folder.defaultColumns.find(dc => dc.id == element.id) || {
          id: element.id,
          width: 200,
          stretch: true
        };
        preference.push(elementDefaultColumn);
      });
      this.onSaveColumns.emit(preference);
    };
    this.closeColumnPropertiesInstance = () => {
      this.modalColumnPropertiesInstance.close();
    };
    this.resetColumns = () => {
      if (!this.folder) return;
      this.prepareColumnDialogData(true);
    };
    this.prepareColumnDialogData = (reset = false) => {
      if (!this.folder) return;
      let preferred = this.userPreferencesService.getPreference(this.getColumnKey());
      if (!preferred || reset) preferred = this.folder.defaultColumns;
      let folderColumns = [];
      if (this.folder && this.folder.columns) {
        this.folder.columns.forEach(c => folderColumns.push(c));
      }
      if (this.folder.includeMetaDataAsColumns) {
        this.userState.user.metaData.forEach(md => {
          folderColumns.push(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataDefinition.asIColumn(md));
        });
      }
      const preferencesMapped = preferred.filter(pc => pc != null).map(pc => {
        for (let fc of folderColumns) {
          if (pc.id == fc.id || pc.id == fc.headerText.replace(/ /g, '_').toUpperCase()) return fc;
        }
        return null;
      }).filter(pc => pc != null);
      this.availableColumns = folderColumns;
      this.selectedColumns = preferencesMapped;
    };
    this.getColumnKey = () => {
      return 'columns-' + this.folder.product.id + '-' + this.folder.id + (this.folder.parentFolderId ? '-' + this.folder.parentFolderId : '');
    };
    this.onFilterChanged = filter => {
      this.onFiltersUpdated.emit();
    };
    this.pinClicked = () => {
      this.onPinClicked.next();
    };
    this.clearFilters = () => {
      this.folder.filters.forEach(f => f.clear());
      this.onFiltersUpdated.emit();
      const focusedElement = document?.activeElement;
      focusedElement?.blur();
    };
  }
  ngOnInit() {
    this.prepareColumnDialogData();
  }
  ngAfterViewInit() {
    this.modalColumnPropertiesInstance = this.ngxSmartModalService.getModal('modalColumnProperties');
    this.subscriptions.add(this.modalColumnPropertiesInstance.onOpen.subscribe(modal => {
      this.modalColumnPropertiesVisible = true;
      this.prepareColumnDialogData();
      this.delay.execute(() => {
        this.saveModalButton.nativeElement.focus();
      }, 0);
    }));
    this.subscriptions.add(this.modalColumnPropertiesInstance.onClose.subscribe(modal => {
      this.modalColumnPropertiesVisible = false;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  get areFiltersShown() {
    return this.folder.filters.length && !this.hideFilters;
  }
  static {
    this.ɵfac = function ActionPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ActionPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ActionPanelComponent,
      selectors: [["", "appActionPanel", ""]],
      viewQuery: function ActionPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.dualPickRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.saveModalButton = _t.first);
        }
      },
      inputs: {
        folder: "folder",
        selectedItems: "selectedItems",
        areFiltersPinned: "areFiltersPinned",
        hideFilters: "hideFilters",
        hideColumns: "hideColumns"
      },
      outputs: {
        onFiltersUpdated: "onFiltersUpdated",
        onActionInvoked: "onActionInvoked",
        onSaveColumns: "onSaveColumns",
        onPinClicked: "onPinClicked"
      },
      attrs: _c2,
      decls: 20,
      vars: 25,
      consts: [["modalColumnProperties", ""], ["saveModalButton", ""], ["dualPickRef", ""], ["fxFlex", "auto", 1, "action-panel", "d-flex", "py-2", "w-100", 3, "perfectScrollbar"], [3, "onActionClick", "ngClass", "folder", "selectedItems"], ["class", "list table-action-panel_right nav-right d-flex align-items-center ml-auto", 4, "ngIf"], ["customClass", "modal-content modal-columns-form", "identifier", "modalColumnProperties", 3, "closable", "escapable", "dismissable"], [3, "title", "closeIconHandler"], [1, "modal-body"], ["displayField", "columnName", 3, "available", "current", "currentChange", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-primary", "btn-minwidth", 3, "click"], [1, "btn", "btn-light", "btn-minwidth", 3, "click"], [1, "list", "table-action-panel_right", "nav-right", "d-flex", "align-items-center", "ml-auto"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "column-btn", 4, "ngIf"], [3, "details"], [3, "filter", "selected", 4, "ngIf"], [3, "selected", "filter"], ["type", "button", "rel", "tooltip", "data-placement", "bottom", "data-original-title", "Column", "aria-expanded", "false", 1, "button-icon", "d-flex", "py-1", 3, "click"], [1, "toolbar-icon", 3, "src", "title"], ["id", "btnClearFilters", "type", "button", "rel", "tooltip", "data-placement", "bottom", "data-original-title", "Column", "aria-expanded", "false", 1, "button-icon", "d-flex", "py-1", 3, "click"], ["src", "assets/img/material/filter-off-outline.svg", 1, "toolbar-icon", 3, "title"], [1, "column-btn"], [1, "dropdown", "arrow-btn-cont", 3, "title"], ["src", "assets/shared/img/view-column-outline.svg", 1, "toolbar-icon2"], ["displayField", "columnName", 3, "currentChange", "available", "current"]],
      template: function ActionPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 3)(1, "app-toolbar-actions", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onActionClick", function ActionPanelComponent_Template_app_toolbar_actions_onActionClick_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onToolbarAction($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ActionPanelComponent_ul_2_Template, 6, 5, "ul", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ngx-smart-modal", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-modal-header", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ActionPanelComponent_app_dual_picklist_8_Template, 2, 2, "app-dual-picklist", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 10)(10, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionPanelComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.resetColumns());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionPanelComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.closeColumnPropertiesInstance());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionPanelComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.savePreference());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](22, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c4, ctx.folder.filters.length > 0 && !ctx.hideFilters))("folder", ctx.folder)("selectedItems", ctx.selectedItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.folder);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 14, "Action-panel.Column"))("closeIconHandler", ctx.closeColumnPropertiesInstance);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.modalColumnPropertiesVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 16, "Action-panel.RestoreDefaults"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 18, "Action-panel.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 20, "Action-panel.Save"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _blocks_filters_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent, _blocks_folder_details_folder_details_folder_details_component__WEBPACK_IMPORTED_MODULE_4__.FolderDetailsComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_6__.DualPicklistComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarDirective, _Bamba_Shared_src_components_toolbar_actions_toolbar_actions_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarActionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.action-panel {\n  min-height: 43.5px;\n  position: relative;\n}\n.action-panel .toolbar-icon {\n  height: 20px;\n}\n.action-panel .toolbar-icon2 {\n  height: 22px;\n}\n.action-panel .button-icon {\n  min-width: 32px;\n}\n.action-panel .table-action-panel_left,\n.action-panel .table-action-panel_right {\n  display: inline-block;\n  padding: 4px 8px 4px 8px !important;\n}\n.action-panel .assist-padding {\n  padding: 6px 9px 1px 9px !important;\n}\n.action-panel .table-action-panel_left > li,\n.action-panel .table-action-panel_right > li {\n  float: left;\n}\n.action-panel .table-action-panel_right {\n  padding-right: 8px;\n}\n.action-panel .delete-btn {\n  color: #767676;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.action-panel .arrow-btn-cont {\n  position: relative;\n  margin-top: 1px;\n}\n.action-panel .column-btn .arrow-btn {\n  color: #767676;\n  font-size: 16px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.action-panel .arrow-btn-cont .dd-body {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.action-panel .arrow-btn {\n  text-decoration: none;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 600;\n  text-align: center;\n  border-radius: 2px;\n  padding: 6px 24px 6px 7px;\n  box-sizing: content-box;\n  display: inline-block;\n  margin-bottom: 0;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  position: relative;\n  background-color: #ffffff;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.action-panel .arrow-btn.empty-btn:active:after,\n.action-panel .arrow-btn:active:after {\n  border-top-color: #767676;\n}\n.action-panel .nav-right {\n  padding: 4px 8px 4px 4px !important;\n}\n.action-panel .nav-right .column-btn {\n  margin-right: 18px;\n}\n.action-panel .del-tooltip {\n  position: relative;\n  line-height: 16px;\n  font-weight: 600;\n  text-align: center;\n  box-sizing: content-box;\n  display: inline-block;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n}\n.action-panel .project-list-panel-left-icons li {\n  padding-right: 12px;\n}\n.action-panel .project-list-panel-left-icons .icomoon-refresh2,\n.action-panel .project-list-panel-left-icons .icomoon-a_copy {\n  color: #767676;\n  font-size: 16px;\n}\n.action-panel .table__head .header-arrow {\n  padding-left: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.25rem;\n}\n.action-panel .row {\n  display: -webkit-box;\n  overflow: hidden;\n  flex-wrap: nowrap;\n}\n.action-panel .table-header {\n  border-radius: 2px;\n  background-color: var(--brand-secondary-color);\n  height: 28px;\n  border-bottom: 1px solid #cfcfcf;\n}\n.action-panel .filter-arow-btn {\n  float: left;\n  width: 52px;\n  position: relative;\n  top: 180px;\n  left: 12px;\n}\n.action-panel .table-header span {\n  font-size: 11px;\n  text-align: left;\n  color: #151515;\n  padding-left: 10px;\n}\n.action-panel .table__head th .check-label {\n  position: relative;\n  left: 1px;\n}\n.action-panel .icomoon-grip-small {\n  left: 3px;\n}\n.action-panel .table__th-grip {\n  position: absolute;\n  height: 25px;\n  font-size: 22px;\n  left: 10px;\n  top: 3px;\n  z-index: 5;\n  cursor: move;\n}\n.action-panel .table-div {\n  border: 1px solid #cfcfcf;\n  padding-right: 0px;\n  padding-left: 0px;\n  height: 250px;\n  margin: 10px;\n}\n.action-panel .table__checkbox-cell {\n  width: 35px;\n  border-right: 1px solid #cfcfcf;\n}\n.action-panel .icomoon-grip-small {\n  left: 3px;\n}\n.action-panel .left-icomo-icons {\n  padding-top: 9px;\n  padding-bottom: 1px;\n}\n.action-panel .table td,\n.action-panel .table th {\n  padding-left: 0.75rem;\n  padding-bottom: 0.4rem;\n  vertical-align: top;\n  padding-top: 0rem;\n  padding-right: 0rem;\n}\n.action-panel .table__table-row {\n  height: 0.4rem;\n  cursor: pointer;\n}\n.action-panel .table__cell-content {\n  padding-left: 5px;\n  color: #151515;\n  font-size: 11px;\n}\n.action-panel .table {\n  min-height: 0px;\n  border-bottom: 1px solid #cfcfcf;\n  border-collapse: collapse;\n}\n.action-panel .table__th-content {\n  padding-left: 0.2rem !important;\n  padding-bottom: 0.2rem !important;\n  color: #6e6e6e;\n  font-size: 11px;\n}\n.action-panel .arrows {\n  float: left;\n  position: relative;\n  top: 90px;\n  overflow: hidden;\n}\n.action-panel ngx-smart-modal {\n  overflow-y: visible !important;\n}\n.action-panel .arrow-btn:focus {\n  box-shadow: 0 0 0 0.2rem rgba(102, 175, 233, 0.6) !important;\n}\n.action-panel .action-img {\n  margin-top: 6px;\n  height: 16px;\n  width: 16px;\n}\n.action-panel app-filter app-field {\n  min-width: 190px;\n}\n.action-panel app-filter app-field app-list .drop-down {\n  min-width: 190px;\n}\n\n.modal-columns-form {\n  min-width: 700px !important;\n  min-height: 425px !important;\n}\n\n.rtl .action-panel .table-action-panel_right {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL3Byb2R1Y3QtaXRlbS9ib3gvYWN0aW9uLXBhbmVsL2FjdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUE3T0E7RUFhRSxrQkFBQTtFQUNBLGtCQUFBO0FBb09GO0FBalBFO0VBQ0UsWUFBQTtBQW1QSjtBQWhQRTtFQUNFLFlBQUE7QUFrUEo7QUEvT0U7RUFDRSxlQUFBO0FBaVBKO0FBM09FOztFQUVFLHFCQUFBO0VBQ0EsbUNBQUE7QUE2T0o7QUExT0U7RUFDRSxtQ0FBQTtBQTRPSjtBQXpPRTs7RUFFRSxXQUFBO0FBMk9KO0FBeE9FO0VBQ0Usa0JBQUE7QUEwT0o7QUF2T0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF5T0o7QUF0T0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUF3T0o7QUFyT0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF1T0o7QUFwT0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBc09KO0FBbk9FO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUdBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBcU9KO0FBbE9FOztFQUVFLHlCQUFBO0FBb09KO0FBak9FO0VBQ0UsbUNBQUE7QUFtT0o7QUFoT0U7RUFDRSxrQkFBQTtBQWtPSjtBQS9ORTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQWlPSjtBQTlORTtFQUNFLG1CQUFBO0FBZ09KO0FBN05FOztFQUVFLGNBQUE7RUFDQSxlQUFBO0FBK05KO0FBNU5FO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBOE5KO0FBM05FO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBNk5KO0FBMU5FO0VBQ0Usa0JBQUE7RUFDQSw4Q0Q5RHNCO0VDK0R0QixZQUFBO0VBQ0EsZ0NBQUE7QUE0Tko7QUF6TkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUEyTko7QUF4TkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEwTko7QUF2TkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUF5Tko7QUF0TkU7RUFDRSxTQUFBO0FBd05KO0FBck5FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUF1Tko7QUFwTkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQXNOSjtBQW5ORTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtBQXFOSjtBQWxORTtFQUNFLFNBQUE7QUFvTko7QUFqTkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBbU5KO0FBaE5FOztFQUVFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFrTko7QUEvTUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWlOSjtBQTlNRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFnTko7QUE3TUU7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQStNSjtBQTVNRTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQThNSjtBQTNNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQTZNSjtBQTFNRTtFQUNFLDhCQUFBO0FBNE1KO0FBeE1JO0VBQ0UsNERBQUE7QUEwTU47QUF0TUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF3TUo7QUFyTUU7RUFDRSxnQkFBQTtBQXVNSjtBQXJNSTtFQUNFLGdCQUFBO0FBdU1OOztBQWxNQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUFxTUY7O0FBaE1JO0VBQ0UsV0FBQTtBQW1NTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmFjdGlvbi1wYW5lbCB7XHJcbiAgLnRvb2xiYXItaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhci1pY29uMiB7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWljb24ge1xyXG4gICAgbWluLXdpZHRoOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgbWluLWhlaWdodDogNDMuNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnRhYmxlLWFjdGlvbi1wYW5lbF9sZWZ0LFxyXG4gIC50YWJsZS1hY3Rpb24tcGFuZWxfcmlnaHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYXNzaXN0LXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNnB4IDlweCAxcHggOXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGFibGUtYWN0aW9uLXBhbmVsX2xlZnQgPiBsaSxcclxuICAudGFibGUtYWN0aW9uLXBhbmVsX3JpZ2h0ID4gbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAudGFibGUtYWN0aW9uLXBhbmVsX3JpZ2h0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5kZWxldGUtYnRuIHtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctYnRuLWNvbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbi1idG4gLmFycm93LWJ0biB7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmFycm93LWJ0bi1jb250IC5kZC1ib2R5IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFycm93LWJ0biB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogNnB4IDI0cHggNnB4IDdweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctYnRuLmVtcHR5LWJ0bjphY3RpdmU6YWZ0ZXIsXHJcbiAgLmFycm93LWJ0bjphY3RpdmU6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzc2NzY3NjtcclxuICB9XHJcblxyXG4gIC5uYXYtcmlnaHQge1xyXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2LXJpZ2h0IC5jb2x1bW4tYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICB9XHJcblxyXG4gIC5kZWwtdG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtbGlzdC1wYW5lbC1sZWZ0LWljb25zIGxpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1saXN0LXBhbmVsLWxlZnQtaWNvbnMgLmljb21vb24tcmVmcmVzaDIsXHJcbiAgLnByb2plY3QtbGlzdC1wYW5lbC1sZWZ0LWljb25zIC5pY29tb29uLWFfY29weSB7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC50YWJsZV9faGVhZCAuaGVhZGVyLWFycm93IHtcclxuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICAudGFibGUtaGVhZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1hcm93LWJ0biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudGFibGUtaGVhZGVyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlX19oZWFkIHRoIC5jaGVjay1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbW9vbi1ncmlwLXNtYWxsIHtcclxuICAgIGxlZnQ6IDNweDtcclxuICB9XHJcblxyXG4gIC50YWJsZV9fdGgtZ3JpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlX19jaGVja2JveC1jZWxsIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NmY2ZjZjtcclxuICB9XHJcblxyXG4gIC5pY29tb29uLWdyaXAtc21hbGwge1xyXG4gICAgbGVmdDogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmxlZnQtaWNvbW8taWNvbnMge1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgfVxyXG5cclxuICAudGFibGUgdGQsXHJcbiAgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlX190YWJsZS1yb3cge1xyXG4gICAgaGVpZ2h0OiAwLjRyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGFibGVfX2NlbGwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZjZmNmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcblxyXG4gIC50YWJsZV9fdGgtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG5cclxuICAuYXJyb3dzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIG5neC1zbWFydC1tb2RhbCB7XHJcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctYnRuIHtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICB9XHJcblxyXG4gIGFwcC1maWx0ZXIgYXBwLWZpZWxkIHtcclxuICAgIG1pbi13aWR0aDogMTkwcHg7XHJcblxyXG4gICAgYXBwLWxpc3QgLmRyb3AtZG93biB7XHJcbiAgICAgIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtY29sdW1ucy1mb3JtIHtcclxuICBtaW4td2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogNDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJ0bCB7XHJcbiAgLmFjdGlvbi1wYW5lbCB7XHJcbiAgICAudGFibGUtYWN0aW9uLXBhbmVsX3JpZ2h0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 85423:
/*!***********************************************************************!*\
  !*** ./src/app/views/product-item/box/box-head/box-head.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxHeadComponent: () => (/* binding */ BoxHeadComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../blocks/services/models */ 34158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_directives_open_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/open-dropdown.directive */ 1166);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);








const _c0 = ["appBoxHead", ""];
function BoxHeadComponent_ul_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.folder.name), " ");
  }
}
function BoxHeadComponent_ul_0_div_2_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function BoxHeadComponent_ul_0_div_2_li_15_Template_li_mouseover_0_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onMouseOver(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", i_r4 === ctx_r0.dropdownSelectedItemIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.getFolderRouting(f_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, f_r5.name), " ");
  }
}
function BoxHeadComponent_ul_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "li")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li")(6, "div", 5)(7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function BoxHeadComponent_ul_0_div_2_Template_div_keydown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onKeyDown($event));
    })("onHideMenu", function BoxHeadComponent_ul_0_div_2_Template_div_onHideMenu_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.resetDropdownSelectedItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, BoxHeadComponent_ul_0_div_2_li_15_Template, 3, 6, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "Product-Item-Action.View"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, ctx_r0.folder && ctx_r0.folder.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.getFolders());
  }
}
function BoxHeadComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxHeadComponent_ul_0_div_1_Template, 3, 3, "div", 2)(2, BoxHeadComponent_ul_0_div_2_Template, 16, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.folder.showViewDropList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.folder.showViewDropList);
  }
}
class BoxHeadComponent {
  constructor(router) {
    this.router = router;
    this.dropdownSelectedItemIndex = -1;
    this.getFolders = () => {
      return this.folder.product.folders.filter(f => f.id != this.folder.id && f.folderType == this.folder.folderType && f.showViewDropList).sort((x, y) => x.name.localeCompare(y.name));
    };
    this.getFolderRouting = folder => {
      if (folder.folderType == _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__.FolderType.Product) {
        return `/${this.folder.product.id}/${folder.id}`;
      } else if (folder.folderType == _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__.FolderType.Settings) {
        return `/settings/${this.folder.product.id}/${folder.id}`;
      }
      return '';
    };
    this.onKeyDown = e => {
      const folders = this.getFolders();
      if (e.key == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.ArrowUp) {
        this.dropdownSelectedItemIndex--;
        if (this.dropdownSelectedItemIndex < 0) this.dropdownSelectedItemIndex = folders.length - 1;
      } else if (e.key == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.ArrowDown) {
        this.dropdownSelectedItemIndex++;
        if (this.dropdownSelectedItemIndex == folders.length) this.dropdownSelectedItemIndex = 0;
      } else if (e.key == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.Enter) {
        const currentFolder = folders[this.dropdownSelectedItemIndex];
        const route = [this.getFolderRouting(currentFolder)];
        this.router.navigate(route);
      }
    };
    this.onMouseOver = itemIndex => {
      this.dropdownSelectedItemIndex = itemIndex;
    };
  }
  ngOnInit() {}
  resetDropdownSelectedItem() {
    this.dropdownSelectedItemIndex = -1;
  }
  static {
    this.ɵfac = function BoxHeadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoxHeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BoxHeadComponent,
      selectors: [["", "appBoxHead", ""]],
      inputs: {
        folder: "folder"
      },
      attrs: _c0,
      decls: 1,
      vars: 1,
      consts: [["class", "list h-tabs view-text box-head", 4, "ngIf"], [1, "list", "h-tabs", "view-text", "box-head"], ["class", "pl-2 folder-name", 4, "ngIf"], [4, "ngIf"], [1, "pl-2", "folder-name"], [1, "dropdowns-with-states-4"], ["appOpenDropdown", "", 1, "dropdown", "p-view-dropdown", "selectable", "p-btn-group", "p-new-drop-down", 3, "keydown", "onHideMenu"], ["data-toggle", "dropdown", 1, "btn-drop", "dd-menu-vd"], ["readonly", "", 1, "dd-val", 3, "value"], [1, "caret-box"], [1, "caret"], [1, "dropdown-menu"], [1, "dd-body"], [3, "routerLink", "active", "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover", "routerLink"]],
      template: function BoxHeadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BoxHeadComponent_ul_0_Template, 3, 2, "ul", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.folder && ctx.folder.displayMode === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _Bamba_Shared_src_directives_open_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.OpenDropdownDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.view-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n}\n\n.box-head[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%] {\n  padding-top: 3px;\n}\n.box-head[_ngcontent-%COMP%]   .p-view-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  display: block;\n}\n.box-head[_ngcontent-%COMP%]   .p-view-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.box-head[_ngcontent-%COMP%]   .p-view-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inherit;\n  padding: 4px 10px;\n  width: 100%;\n  padding-right: 2px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.box-head[_ngcontent-%COMP%]   .p-view-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.box-head[_ngcontent-%COMP%]   .p-view-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: var(--brand-secondary-color);\n}\n.box-head[_ngcontent-%COMP%]   .is-open.p-btn-group[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: 1px solid transparent;\n}\n.box-head[_ngcontent-%COMP%]   .p-btn-group[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 3px 0 rgba(177, 177, 177, 0.5);\n  border: solid 1px #cfcfcf;\n  background: #fff;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 4px;\n  border-radius: 2px;\n}\n.box-head[_ngcontent-%COMP%]   .p-btn-group[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 167px;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dd-menu-vd[_ngcontent-%COMP%] {\n  width: 162px !important;\n  outline: none;\n  border: none;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down.is-open[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid var(--brand-primary-color);\n  box-shadow: inset 0 1px 3px 0 rgba(117, 117, 117, 0.5);\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down.p-btn-group[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 168px;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down.is-open[_ngcontent-%COMP%]   .dd-menu-vd[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: none;\n  color: #ffffff;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dd-menu-vd[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  border: none !important;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down.is-open[_ngcontent-%COMP%]   .dd-menu-vd[_ngcontent-%COMP%]   .dd-val[_ngcontent-%COMP%] {\n  color: #6e6e6e;\n  text-align: left;\n  background-color: #fff;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dd-menu-vd[_ngcontent-%COMP%]   .dd-val[_ngcontent-%COMP%] {\n  color: #6e6e6e !important;\n  background-color: #fff !important;\n  border: none !important;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down.is-open[_ngcontent-%COMP%]   .dd-menu-vd[_ngcontent-%COMP%]   .caret-box[_ngcontent-%COMP%] {\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n  border-radius: 0px 0px 0px 0px;\n  background-color: #f1f3f3;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down.is-open[_ngcontent-%COMP%]   .dd-menu-vd[_ngcontent-%COMP%]   .caret-box[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  color: #151515 !important;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  left: -1px;\n  border-radius: 0px 0px 0px 2px;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  -ms-overflow-style: none;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f9f9f9;\n  border-radius: 2px;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 100px;\n  background-color: #6e6e6e;\n  border-radius: 2px;\n}\n.box-head[_ngcontent-%COMP%]   .p-new-drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dd-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #6e6e6e;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL3Byb2R1Y3QtaXRlbS9ib3gvYm94LWhlYWQvYm94LWhlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBZ1BGOztBQTVPRTtFQUNFLGdCQUFBO0FBK09KO0FBNU9FO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBOE9KO0FBM09FO0VBQ0UsWUFBQTtBQTZPSjtBQTFPRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTRPSjtBQXpPRTtFQUNFLGNBQUE7QUEyT0o7QUF2T0k7RUFDRSw4Q0QyQ29CO0FDOEwxQjtBQXJPRTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUF1T0o7QUFwT0U7RUFDRSxzREFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXNPSjtBQW5PRTtFQUNFLGdCQUFBO0FBcU9KO0FBbE9FO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQW9PSjtBQWpPRTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxzREFBQTtBQW1PSjtBQWhPRTtFQUNFLGdCQUFBO0FBa09KO0FBL05FO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWlPSjtBQTlORTtFQUNFLGlDQUFBO0VBQ0EsdUJBQUE7QUFnT0o7QUE3TkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQStOSjtBQTVORTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQThOSjtBQTNORTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJEL0JNO0FDNFBWO0FBMU5FO0VBQ0UseUJBQUE7QUE0Tko7QUF6TkU7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUEyTko7QUF4TkU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBME5KO0FBdk5FO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQXlOSjtBQXRORTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXdOSjtBQXJORTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUF1TkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi52aWV3LXRleHQgbGk6bnRoLWNoaWxkKDEpIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5ib3gtaGVhZCB7XHJcbiAgLmZvbGRlci1uYW1lIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgfVxyXG5cclxuICAucC12aWV3LWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kZC1ib2R5IGxpIGEge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnAtdmlldy1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZGQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAucC12aWV3LWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kZC1ib2R5IGxpIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnAtdmlldy1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZGQtYm9keSBsaSBhIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgLnAtdmlldy1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZGQtYm9keSBsaSB7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pcy1vcGVuLnAtYnRuLWdyb3VwIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5wLWJ0bi1ncm91cCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNSk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG5cclxuICAucC1idG4tZ3JvdXAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWluLXdpZHRoOiAxNjdweDtcclxuICB9XHJcblxyXG4gIC5wLW5ldy1kcm9wLWRvd24gLmRkLW1lbnUtdmQge1xyXG4gICAgd2lkdGg6IDE2MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnAtbmV3LWRyb3AtZG93bi5pcy1vcGVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdXBsYW5kLWJsdWU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDExNywgMTE3LCAxMTcsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAucC1uZXctZHJvcC1kb3duLnAtYnRuLWdyb3VwIC5kcm9wZG93bi1tZW51IHtcclxuICAgIG1pbi13aWR0aDogMTY4cHg7XHJcbiAgfVxyXG5cclxuICAucC1uZXctZHJvcC1kb3duLmlzLW9wZW4gLmRkLW1lbnUtdmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnAtbmV3LWRyb3AtZG93biAuZGQtbWVudS12ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wLW5ldy1kcm9wLWRvd24uaXMtb3BlbiAuZGQtbWVudS12ZCAuZGQtdmFsIHtcclxuICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAucC1uZXctZHJvcC1kb3duIC5kZC1tZW51LXZkIC5kZC12YWwge1xyXG4gICAgY29sb3I6ICM2ZTZlNmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnAtbmV3LWRyb3AtZG93bi5pcy1vcGVuIC5kZC1tZW51LXZkIC5jYXJldC1ib3gge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC5wLW5ldy1kcm9wLWRvd24uaXMtb3BlbiAuZGQtbWVudS12ZCAuY2FyZXQtYm94IC5jYXJldCB7XHJcbiAgICBjb2xvcjogIzE1MTUxNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnAtbmV3LWRyb3AtZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMnB4O1xyXG4gIH1cclxuXHJcbiAgLnAtbmV3LWRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZGQtYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnAtbmV3LWRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZGQtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcblxyXG4gIC5wLW5ldy1kcm9wLWRvd24gLmRyb3Bkb3duLW1lbnUgLmRkLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmU2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcblxyXG4gIC5wLW5ldy1kcm9wLWRvd24gLmRyb3Bkb3duLW1lbnUgLmRkLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTZlNmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 35850:
/*!******************************************************!*\
  !*** ./src/app/views/product-item/box/box.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxModule: () => (/* binding */ BoxModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_filters_filters_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/filters/filters.module */ 45018);
/* harmony import */ var _blocks_folder_details_folder_details_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/folder-details/folder-details.module */ 24562);
/* harmony import */ var _action_panel_action_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-panel/action-panel.component */ 31185);
/* harmony import */ var _box_head_box_head_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box-head/box-head.component */ 85423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);













class BoxModule {
  static {
    this.ɵfac = function BoxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoxModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: BoxModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _blocks_filters_filters_module__WEBPACK_IMPORTED_MODULE_2__.FiltersModule, _blocks_folder_details_folder_details_module__WEBPACK_IMPORTED_MODULE_3__.FolderDetailsModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__.NgxSmartModalModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.OpenDropdownModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ToolbarActionsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BoxModule, {
    declarations: [_action_panel_action_panel_component__WEBPACK_IMPORTED_MODULE_4__.ActionPanelComponent, _box_head_box_head_component__WEBPACK_IMPORTED_MODULE_5__.BoxHeadComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _blocks_filters_filters_module__WEBPACK_IMPORTED_MODULE_2__.FiltersModule, _blocks_folder_details_folder_details_module__WEBPACK_IMPORTED_MODULE_3__.FolderDetailsModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__.NgxSmartModalModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.OpenDropdownModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ToolbarActionsModule],
    exports: [_action_panel_action_panel_component__WEBPACK_IMPORTED_MODULE_4__.ActionPanelComponent, _box_head_box_head_component__WEBPACK_IMPORTED_MODULE_5__.BoxHeadComponent]
  });
})();

/***/ }),

/***/ 10760:
/*!**************************************************************************************!*\
  !*** ./src/app/views/product-item/document-preview/thumbnail/thumbnail.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThumbnailComponent: () => (/* binding */ ThumbnailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../views/document-capture/capture-models */ 48004);
/* harmony import */ var _document_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../document-preview.component */ 2809);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_directives_auto_fittext_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/directives/auto-fittext.directive */ 86695);














const _c0 = ["thumbnailWrapper"];
const _c1 = (a0, a1, a2, a3) => ({
  selected: a0,
  "failed-to-load": a1,
  loading: a2,
  "fax-mobile": a3
});
function ThumbnailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 6);
  }
}
function ThumbnailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 8)(2, "text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("onWidthResized", ctx_r1.onWidthResized);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, "Common.FailedToGetDocument"), " ");
  }
}
function ThumbnailComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ThumbnailComponent_img_5_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.drawAnnotations());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.page.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
class ThumbnailComponent {
  constructor(translate, toastr, delay, windowRef, sessionStorageService) {
    this.translate = translate;
    this.toastr = toastr;
    this.delay = delay;
    this.windowRef = windowRef;
    this.sessionStorageService = sessionStorageService;
    this.getThumbnail = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.selectPage = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.isFaxMobile = false;
    this.PageState = _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_1__.PageState;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.onThumbnailScrolled = () => {
      if (this.page.state !== _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_1__.PageState.Empty) return;
      if (!this.isPageInViewPort(this.wrapperElementRef, false)) return;
      this.getThumbnail.emit(this.page);
    };
    this.drawAnnotations = () => {
      if (!this.wrapperElementRef || !this.page || !this.page.annotations) return;
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
    };
  }
  ngOnInit() {
    this.isFaxMobile = this.sessionStorageService.getIsInterFaxMobile();
    this.sessionStorageService.onIsInterFaxMobileChanged.subscribe(x => this.isFaxMobile = x);
    this.subscriptions.add(this.panelScrollbar.psScrollUp.subscribe(() => this.onThumbnailScrolled()));
    this.subscriptions.add(this.panelScrollbar.psScrollDown.subscribe(() => this.onThumbnailScrolled()));
    this.subscriptions.add(this.onWidthResized.subscribe(() => {
      this.onThumbnailScrolled();
      this.drawAnnotations();
      this.getThumbnail.emit(this.page);
    }));
    this.subscriptions.add(this.page.annotationsChanged.subscribe(() => this.drawAnnotations()));
  }
  ngAfterViewInit() {
    this.delay.execute(() => {
      if (this.isPageInViewPort(this.wrapperElementRef, false)) {
        this.getThumbnail.emit(this.page);
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  isPageInViewPort(element, fullyInView) {
    const pageTop = $(this.windowRef.nativeWindow).scrollTop();
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
    switch (this.page.state) {
      case _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_1__.PageState.Loading:
        this.toastr.warning(this.translate.instant('Common.PleaseWait'));
        break;
      case _views_document_capture_capture_models__WEBPACK_IMPORTED_MODULE_1__.PageState.FailedLoad:
        return;
      default:
        this.selectPage.emit();
    }
  }
  static {
    this.ɵfac = function ThumbnailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SessionStorageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ThumbnailComponent,
      selectors: [["app-thumbnail"]],
      viewQuery: function ThumbnailComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wrapperElementRef = _t.first);
        }
      },
      inputs: {
        page: "page",
        panelScrollbar: "panelScrollbar",
        onWidthResized: "onWidthResized"
      },
      outputs: {
        getThumbnail: "getThumbnail",
        selectPage: "selectPage"
      },
      decls: 7,
      vars: 9,
      consts: [["thumbnailWrapper", ""], [1, "preview-thumbnail", 3, "click", "ngClass"], ["class", "page-loader", 4, "ngIf"], ["class", "error-message text-center", 4, "ngIf"], [1, "thumbnail"], ["class", "img-h-fluid", 3, "src", "load", 4, "ngIf"], [1, "page-loader"], [1, "error-message", "text-center"], ["viewBox", "0 0 180 50", "fill", "#93002f", 2, "width", "100%"], ["x", "50%", "y", "40", 2, "font-size", "50px"], ["appAutoFittext", "", 1, "text", 3, "onWidthResized"], [1, "img-h-fluid", 3, "load", "src"]],
      template: function ThumbnailComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ThumbnailComponent_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.select());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ThumbnailComponent_div_2_Template, 1, 0, "div", 2)(3, ThumbnailComponent_div_3_Template, 7, 4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ThumbnailComponent_img_5_Template, 1, 1, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "canvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](4, _c1, ctx.page.selected, ctx.page.state === ctx.PageState.FailedLoad, ctx.page.state === ctx.PageState.Loading, ctx.isFaxMobile));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.page.state === ctx.PageState.Loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.page.state === ctx.PageState.FailedLoad);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.page.state === ctx.PageState.Loaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _blocks_directives_auto_fittext_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFittextDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n:host {\n  display: block;\n  min-width: 70px;\n}\n\n.preview-thumbnail {\n  position: relative;\n  margin: 5px 0;\n  cursor: pointer;\n  background: #f3f3f3;\n  line-height: 1.5;\n  width: 100%;\n  padding-top: 135%;\n  border: 3px solid #e0e3e6;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);\n}\n.preview-thumbnail.selected {\n  border-color: var(--brand-primary-color);\n}\n.preview-thumbnail .thumbnail {\n  position: absolute;\n  top: 5px !important;\n  left: 5px;\n  bottom: 5px;\n  right: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.preview-thumbnail .thumbnail img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.preview-thumbnail .page-loader {\n  background-image: url('animated-spinner.gif');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin: 0px 10px 0px 10px;\n  position: absolute;\n  top: 0 !important;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.preview-thumbnail .error-message {\n  color: #93002f;\n  position: absolute;\n  top: 0 !important;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n}\n.preview-thumbnail .error-message .red-sign {\n  font-size: 30px;\n  line-height: 1;\n}\n.preview-thumbnail .error-message .text {\n  margin-bottom: 2rem;\n}\n.preview-thumbnail.failed-to-load {\n  border-color: #93002f;\n}\n.preview-thumbnail.failed-to-load .error-message {\n  z-index: 1;\n}\n.preview-thumbnail canvas {\n  position: absolute;\n}\n.preview-thumbnail.fax-mobile {\n  border: 1px solid #e0e3e6;\n  box-shadow: none;\n  margin: 0;\n  padding: 4px;\n}\n.preview-thumbnail.fax-mobile .thumbnail {\n  position: static;\n}\n.preview-thumbnail.fax-mobile.selected {\n  border-color: #e0e3e6;\n}\n.preview-thumbnail.fax-mobile .error-message svg {\n  width: 65%;\n}\n.preview-thumbnail.fax-mobile .error-message .text {\n  font-size: 16px !important;\n}\n.preview-thumbnail.fax-mobile .page-loader {\n  width: 50%;\n  margin: auto;\n}\n.preview-thumbnail.fax-mobile.failed-to-load, .preview-thumbnail.fax-mobile.loading {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL3Byb2R1Y3QtaXRlbS9kb2N1bWVudC1wcmV2aWV3L3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFnUEY7O0FBN09BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0FBZ1BGO0FBOU9FO0VBQ0Usd0NEMkRVO0FDcUxkO0FBN09FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBK09KO0FBN09JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBK09OO0FBM09FO0VBQ0UsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUE2T0o7QUExT0U7RUFDRSxjRHVDUztFQ3RDVCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUE0T0o7QUExT0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTRPTjtBQXpPSTtFQUNFLG1CQUFBO0FBMk9OO0FBdk9FO0VBQ0UscUJEZ0JTO0FDeU5iO0FBdk9JO0VBQ0UsVUFBQTtBQXlPTjtBQXJPRTtFQUNFLGtCQUFBO0FBdU9KO0FBcE9FO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBc09KO0FBcE9JO0VBQ0UsZ0JBQUE7QUFzT047QUFuT0k7RUFDRSxxQkFBQTtBQXFPTjtBQWpPTTtFQUNFLFVBQUE7QUFtT1I7QUFoT007RUFDRSwwQkFBQTtBQWtPUjtBQTlOSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBZ09OO0FBN05JO0VBRUUsWUFBQTtBQThOTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4td2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5wcmV2aWV3LXRodW1ibmFpbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTM1JTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZTBlM2U2O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWJsdWU7XHJcbiAgfVxyXG5cclxuICAudGh1bWJuYWlsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdlLWxvYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvaW1nL2FuaW1hdGVkLXNwaW5uZXIuZ2lmKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogJHVwbGFuZC1yZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgLnJlZC1zaWduIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZhaWxlZC10by1sb2FkIHtcclxuICAgIGJvcmRlci1jb2xvcjogJHVwbGFuZC1yZWQ7XHJcblxyXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FudmFzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gICYuZmF4LW1vYmlsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlM2U2O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgICAudGh1bWJuYWlsIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIH1cclxuXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZTBlM2U2O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnZS1sb2FkZXIge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgJi5mYWlsZWQtdG8tbG9hZCxcclxuICAgICYubG9hZGluZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 49357:
/*!*******************************************************************!*\
  !*** ./src/app/views/product-item/product-item-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductItemRoutingModule: () => (/* binding */ ProductItemRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _product_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-item.component */ 70001);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../blocks/services/models */ 34158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);





const routes = [{
  path: 'settings/:product/:folder',
  component: _product_item_component__WEBPACK_IMPORTED_MODULE_0__.ProductItemComponent,
  data: {
    folderType: _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__.FolderType.Settings
  },
  pathMatch: 'full'
}, {
  path: ':product/:folder',
  component: _product_item_component__WEBPACK_IMPORTED_MODULE_0__.ProductItemComponent,
  data: {
    folderType: _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__.FolderType.Product
  },
  pathMatch: 'full'
}];
class ProductItemRoutingModule {
  static {
    this.ɵfac = function ProductItemRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductItemRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ProductItemRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductItemRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 70001:
/*!**************************************************************!*\
  !*** ./src/app/views/product-item/product-item.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductItemComponent: () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 99473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 75117);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _Bamba_Shared_src_fields_list_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/list/list.service */ 13640);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/api.service */ 32275);
/* harmony import */ var _blocks_services_auto_execute_actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/auto-execute-actions.service */ 61254);
/* harmony import */ var _blocks_services_myfiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/myfiles.service */ 14770);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _blocks_services_FilterByInterfaxInboxPropertiesComponentLoaded_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../blocks/services/FilterByInterfaxInboxPropertiesComponentLoaded.service */ 44718);
/* harmony import */ var _blocks_services_folder_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../blocks/services/folder-details.service */ 52166);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_product_item_refresh_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../blocks/services/product-item-refresh.service */ 54254);
/* harmony import */ var _document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./document-preview/document-preview.component */ 2809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _box_action_panel_action_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./box/action-panel/action-panel.component */ 31185);
/* harmony import */ var _box_box_head_box_head_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./box/box-head/box-head.component */ 85423);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/resizable.directive */ 92133);
/* harmony import */ var _Bamba_Shared_src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/components/pagination/pagination.component */ 89593);
/* harmony import */ var _Bamba_Shared_src_components_table_product_detail_table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/components/table-product-detail/table/table.component */ 78496);










































const _c0 = ["spinnerState"];
const _c1 = ["documentPreview"];
const _c2 = a0 => [a0];
function ProductItemComponent_app_secondary_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-secondary-header", 16);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("icon", ctx_r0.folder.product && ctx_r0.folder.product.icon)("headerText", ctx_r0.headerText)("rightControls", ctx_r0.formControls);
  }
}
function ProductItemComponent_pagination_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onLoadPage", function ProductItemComponent_pagination_9_Template_pagination_onLoadPage_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onLoadPage($event));
    })("onPageSizeChanged", function ProductItemComponent_pagination_9_Template_pagination_onPageSizeChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onPageSizeChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("currentPage", ctx_r0.currentPage)("itemsTotal", ctx_r0.itemsTotal)("pageSize", ctx_r0.pageSize)("itemsPageCount", ctx_r0.itemsPageCount)("canChangePageSize", true);
  }
}
function ProductItemComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onActionInvoked", function ProductItemComponent_div_10_Template_div_onActionInvoked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onToolbarAction($event));
    })("onFiltersUpdated", function ProductItemComponent_div_10_Template_div_onFiltersUpdated_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onFiltersUpdated());
    })("onSaveColumns", function ProductItemComponent_div_10_Template_div_onSaveColumns_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onSaveSelectedColumns($event));
    })("onPinClicked", function ProductItemComponent_div_10_Template_div_onPinClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onPinClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("folder", ctx_r0.getIFolderAsFolder())("selectedItems", ctx_r0.selectedItems)("areFiltersPinned", ctx_r0.areFiltersPinned);
  }
}
function ProductItemComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](message_r4);
  }
}
function ProductItemComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductItemComponent_div_11_div_1_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
  }
}
function ProductItemComponent_app_table_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onInvokeAction", function ProductItemComponent_app_table_13_Template_app_table_onInvokeAction_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onInvokeAction($event));
    })("onSort", function ProductItemComponent_app_table_13_Template_app_table_onSort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onSort($event));
    })("onSelectionChanged", function ProductItemComponent_app_table_13_Template_app_table_onSelectionChanged_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onSelectionChanged());
    })("onSaveColumns", function ProductItemComponent_app_table_13_Template_app_table_onSaveColumns_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onSaveColumnWidths($event));
    })("reload", function ProductItemComponent_app_table_13_Template_app_table_reload_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.loadItems());
    })("resize", function ProductItemComponent_app_table_13_Template_app_table_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.onWidthResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("expandedItemsChange", function ProductItemComponent_app_table_13_Template_app_table_expandedItemsChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r0.expandedItems, $event) || (ctx_r0.expandedItems = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("items", ctx_r0.tableItems)("columns", ctx_r0.columns)("showCheckboxes", ctx_r0.folder.supportsCheckboxSelection)("sort", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](15, _c2, ctx_r0.sort))("multiselect", true)("expandableDetail", ctx_r0.expandableDetail)("handles", "e")("width", "50%")("preferenceName", ctx_r0.previewWidthPreferenceKey)("preferenceValue", ctx_r0.previewWidth)("disabled", !ctx_r0.showDocumentPreview)("preferencesKey", ctx_r0.folder == null ? null : ctx_r0.folder.id)("reorderable", true)("supportActions", ctx_r0.supportActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("expandedItems", ctx_r0.expandedItems);
  }
}
function ProductItemComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 25)(1, "app-document-preview", 26, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("documentReloadRequired", function ProductItemComponent_div_14_Template_app_document_preview_documentReloadRequired_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r0.refreshItems());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("folderId", ctx_r0.folder.id)("selectedItems", ctx_r0.selectedItems)("previewDocument", ctx_r0.previewDocument)("documentNameEditingAllowed", ctx_r0.folder.allowDocumentNameEditing);
  }
}
class ProductItemComponent {
  constructor(route, userState, translate, delay, api, apiService, toastr, spinnerState, myfiles, elementRef, cdr, userPreferencesService, currentSelectedDocumentService, productItemRefreshService, actionService, autoExecuteActionsService, folderDetailsService, filterByInterfaxInboxPropertiesComponentLoadedService, listService) {
    this.route = route;
    this.userState = userState;
    this.translate = translate;
    this.delay = delay;
    this.api = api;
    this.apiService = apiService;
    this.toastr = toastr;
    this.spinnerState = spinnerState;
    this.myfiles = myfiles;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.userPreferencesService = userPreferencesService;
    this.currentSelectedDocumentService = currentSelectedDocumentService;
    this.productItemRefreshService = productItemRefreshService;
    this.actionService = actionService;
    this.autoExecuteActionsService = autoExecuteActionsService;
    this.folderDetailsService = folderDetailsService;
    this.filterByInterfaxInboxPropertiesComponentLoadedService = filterByInterfaxInboxPropertiesComponentLoadedService;
    this.listService = listService;
    this.formControls = [];
    this.headerText = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription();
    this.autoExecuteSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subscription();
    this.selectedItems = new Array();
    this.currentPage = 1;
    this.itemsPageCount = 0;
    this.itemsTotal = 0;
    this.pageSize = 5;
    this.errors = [];
    this.loadingColumns = false;
    this.areFiltersPinned = true;
    this.firstLoad = true;
    this.previewWidthPreferenceSuffix = 'preview-width';
    this.supportActions = false;
    this.expandedItems = [];
    this.canBrowserRenderDocument = false;
    this.handleInboundFolderFiltersLoading = () => {
      if (['InterFAX-Upland.Bamba.InterFAX.Inbox.Folders.Inbox', 'InterFAX-Upland.Bamba.InterFAX.Inbox.Folders.Archived', 'InterFAX-Upland.Bamba.InterFAX.Inbox.Folders.Trash'].includes(this.route.snapshot.params.folder)) {
        this.subscriptions.add(this.listService.overallLoadingChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(2)).subscribe(loading => {
          if (loading) {
            this.spinnerState.show(this.translate.instant('Common.LoadingData'), document.documentElement);
          } else {
            this.spinnerState.hide(this.translate.instant('Common.LoadingData'));
          }
        }));
      }
    };
    this.silentlyUpdateItems = ur => {
      if (!ur.silent) return;
      const {
        tableItems,
        selectedItems
      } = this.autoExecuteActionsService.silentlyUpdateItems(ur, this.tableItems, this.selectedItems, this.columns, this.expandedItems);
      this.tableItems = tableItems;
      this.selectedItems = selectedItems;
    };
    this.onLoadPage = pagination => {
      this.currentPage = pagination.pageNumber;
      this.pageSize = pagination.pageSize;
      this.loadItems();
    };
    this.onPinClicked = () => {
      this.areFiltersPinned = !this.areFiltersPinned;
      if (!this.areFiltersPinned) {
        this.clearPinnedFilters();
      } else {
        this.updatePinnedFilters();
      }
    };
    this.onFiltersUpdated = () => {
      if (!this.dataLoaded) return;
      if (this.areFiltersPinned) this.updatePinnedFilters();
      this.currentPage = 1;
      this.refreshItems();
    };
    this.onSaveSelectedColumns = columns => {
      this.spinnerState.show(this.translate.instant('Common.LoadingData'), document.documentElement);
      this.userPreferencesService.setPreference('columns-' + this.getPreferencesKey(), columns);
      this.loadingColumns = true;
      this.delay.execute(() => {
        this.columns = this.getColumns();
        this.tableItems.forEach(ti => ti.buildColumnValues(this.columns, this.translate));
        this.loadingColumns = false;
        this.spinnerState.hide();
      });
    };
    this.onSaveColumnWidths = columns => {
      this.userPreferencesService.setPreference('columns-' + this.getPreferencesKey(), columns);
    };
    this.onSort = sd => {
      this.sort = sd;
      this.loadItems();
      this.userPreferencesService.setPreference('folder-sort-' + this.getPreferencesKey(), this.sort);
    };
    this.onPageSizeChanged = pageSize => {
      this.userPreferencesService.setPreference('folder-pagesize-' + this.getPreferencesKey(), pageSize);
      this.keepSelectionOnLoad = true;
    };
    this.loadItems = () => {
      if (this.firstLoad && this.folder.filters.find(f => f.id.endsWith('ByInterFAXInboxProperties'))) {
        this.filterByInterfaxInboxPropertiesComponentLoadedService.componentLoaded$.subscribe(() => {
          this.loadItemsEx();
          this.firstLoad = false;
        });
      } else {
        this.loadItemsEx();
      }
    };
    this.retainExpansionState = items => {
      if (!this.tableItems) return;
      for (const item of items) {
        for (const existing of this.tableItems) {
          if (item.data.id == existing.data.id) {
            item.expanded = existing.expanded;
            item.detailsTab = existing.detailsTab;
            item.selected = existing.selected;
            existing.expanded = false; // force ui to reload expansion part 1 #lame
          }
        }
      }
      this.cdr.detectChanges(); // force ui to reload expansion part 2 #lame
    };
    this.itemsLoad = results => {
      this.dataLoaded = true;
      this.spinnerState.hide(this.translate.instant('Common.LoadingData'));
      this.loadingFailed = !results.success;
      if (!results.success) {
        this.showPreview = false;
        this.errors = results.errors;
        return;
      }
      const items = results.items.map(i => new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(i, this.columns, this.translate));
      this.retainExpansionState(items);
      this.tableItems = items;
      if (this.keepSelectionOnLoad) {
        this.updateSelectedItemsAfterReload();
      } else {
        this.selectedItems = [];
        this.tableItems.forEach(c => c.selected = false);
        this.previewDocument = null;
      }
      this.keepSelectionOnLoad = false;
      this.itemsPageCount = results.items.length;
      this.itemsTotal = results.total;
      if (this.itemsTotal == 0) this.currentPage = 0;
      const gridContent = this.elementRef.nativeElement.getElementsByClassName('k-grid-content');
      if (gridContent && gridContent[0]) {
        gridContent[0].scrollTop = 0;
      }
      if (this.folder.showPreview && !this.showPreview) {
        this.openDocumentPreview();
      }
      for (const fd of results.folderData) {
        this.folderDetailsService.onFolderDetailsChanged(fd);
      }
    };
    this.itemsLoadFailed = () => {
      this.spinnerState.hide(this.translate.instant('Common.LoadingData'));
      this.toastr.error(this.translate.instant('Common.LoadingDataError'));
    };
    this.onNewItemBar = action => {
      this.itemActionHandler.invoke(this.params.folder, action, [], this.getFilters());
    };
    this.onItemBar = control => {
      this.itemActionHandler.invoke(this.params.folder, control.data, [], this.getFilters());
    };
    this.onInvokeAction = ia => {
      this.itemActionHandler.invoke(this.params.folder, ia.action, [ia.item], this.getFilters());
    };
    this.onToolbarAction = action => {
      this.itemActionHandler.invoke(this.params.folder, action, this.selectedItems.map(ti => ti.data), this.getFilters());
    };
    this.getFilters = () => {
      return this.folder.filters.map(filter => {
        const f = filter;
        return {
          id: f.id,
          value: f.value
        };
      });
    };
    this.applyPinnedFilters = () => {
      if (!this.folder?.id) return;
      const pinnedFilters = this.userPreferencesService.getPreference(this.getFolderPinUserPreferenceKey());
      if (!pinnedFilters) {
        this.areFiltersPinned = true;
        return;
      } else if (pinnedFilters.length === 0) {
        this.areFiltersPinned = false;
        return;
      } else {
        this.areFiltersPinned = true;
      }
      this.folder.filters = this.folder.filters.map(f => {
        const pinnedFilter = pinnedFilters.find(pf => pf.id === f.id);
        if (pinnedFilter) f.value = pinnedFilter.value;
        return f;
      });
    };
    this.clearPinnedFilters = () => {
      this.userPreferencesService.setPreference(this.getFolderPinUserPreferenceKey(), []);
    };
    this.updatePinnedFilters = () => {
      const currentFilters = this.folder.filters.map(f => ({
        id: f.id,
        value: f.value
      }));
      this.userPreferencesService.setPreference(this.getFolderPinUserPreferenceKey(), currentFilters);
    };
    this.getFolderPinUserPreferenceKey = () => `folder-pinned-filter-${this.folder.id}`;
    this.onSelectionChanged = () => {
      this.selectedItems = this.tableItems.filter(ti => ti.selected);
      if (this.selectedItems.length !== 1) {
        this.previewDocument = null;
        return;
      }
      if (this.previewDocument && this.previewDocument.item.data.id === this.selectedItems[0].data.id) return;
      const selectedItem = this.selectedItems[0];
      if (!selectedItem) return;
      this.previewDocument = selectedItem.data.documentExists ? new _document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_12__.PreviewDocument(this.selectedItems[0], this.datasource, this.translate) : null;
      this.autoExecuteActionsService.setSelectedItem(selectedItem);
    };
    this.openFolder = params => {
      this.formControls = [];
      this.datasource = null;
      this.tableItems = null;
      this.currentPage = 1;
      this.itemsPageCount = this.itemsTotal = 0;
      this.headerText = '';
      this.expandableDetail = false;
      this.showPreview = false;
      this.previewDocument = null;
      this.params = params;
      this.selectedItems = [];
      if (params.folder.indexOf('@') != -1) {
        this.spinnerState.show(this.translate.instant('Common.LoadingData'), document.documentElement);
        this.apiService.getFolderById(params.folder, this.folderLoaded, this.folderLoadFailed);
      } else {
        this.folder = this.userState.findFolderById(params.folder);
        if (this.folder == null) return;
        this.reloadFolder();
      }
    };
    this.folderLoaded = f => {
      this.spinnerState.hide(this.translate.instant('Common.LoadingData'));
      this.folder = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.Folder(f, this.userState.findProductById(f.product.id));
      this.reloadFolder();
    };
    this.folderLoadFailed = e => {
      this.spinnerState.hide(this.translate.instant('Common.LoadingData'));
      console.log(`Failed to load folder ${e}`);
    };
    this.onLoadFolderSucceeded = folder => {
      this.folder = folder;
      this.onLoadFolder();
      this.spinnerState.hide(this.translate.instant('folder.loading-folder'));
    };
    this.onLoadFolderFailed = () => {
      this.toastr.error(this.translate.instant('Common.LoadingDataError'));
      this.spinnerState.hide(this.translate.instant('folder.loading-folder'));
    };
    this.onLoadFolder = () => {
      this.pageSize = this.userPreferencesService.getPreference('folder-pagesize-' + this.getPreferencesKey(), 25);
      this.expandableDetail = this.folder.supportsDetailsExpansion || this.folder.supportsVersions;
      this.supportActions = this.folder.supportActions;
      this.datasource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ItemTableDataSource(this.folder.product.id, this.params.folder, this.api);
      this.columns = this.getColumns();
      this.setHeaderText();
      this.buildFormControls();
      this.loadAutoExecuteActions();
      const folderDefaultSort = {
        field: this.folder.defaultSortByColumn.columnId,
        dir: this.folder.defaultSortByColumn.direction == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SortDirection.Ascending ? 'asc' : 'desc'
      };
      this.sort = this.userPreferencesService.getPreference('folder-sort-' + this.getPreferencesKey(), folderDefaultSort);
      this.previewWidthPreferenceKey = this.folder.id + this.previewWidthPreferenceSuffix;
      this.loadItems();
    };
    this.loadAutoExecuteActions = () => {
      let autoExecuteActions = this.folder.actions.filter(a => (a.type & _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.ActionTypes.AutoExecute) != 0);
      autoExecuteActions.forEach(a => {
        this.itemActionHandler.invoke(this.folder.id, a, [], []);
      });
    };
    this.refreshItems = () => {
      this.keepSelectionOnLoad = true;
      this.loadItems();
    };
    this.buildFormControls = () => {
      this.formControls = [];
      for (const action of this.folder.actions) {
        if (action.type === _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.ActionTypes.ItemBar) {
          const button = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.Control(this.onItemBar, action.name, 'btn btn-primary btn-minwidth', action.icon, '', 'btn', false, null, action);
          this.formControls.push(button);
        }
      }
      const newItemBarActions = [];
      let menuTitle = '';
      for (const action of this.folder.actions) {
        if (action.type === _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.ActionTypes.NewItemBar) {
          newItemBarActions.push(action);
        }
        if (action.type === _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.ActionTypes.MenuTitle) {
          menuTitle = action.name;
        }
      }
      if (newItemBarActions.length) {
        const button = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.Control(this.onNewItemBar, menuTitle, 'btn btn-primary btn-minwidth', null, '', 'menu', false, null, newItemBarActions);
        this.formControls.push(button);
      }
    };
    this.setHeaderText = () => {
      if (this.folder && this.folder.displayMode === _blocks_services_models__WEBPACK_IMPORTED_MODULE_10__.FolderDisplayMode.TopLevel) {
        this.headerText = this.folder.name;
      } else {
        if (this.folder.headerText) {
          this.headerText = this.folder.headerText;
        } else {
          this.headerText = this.folder.product ? this.folder.product.name : '';
        }
      }
    };
    this.getPreferencesKey = () => {
      if (!this.folder) return '';
      let key = `${this.folder.product.id}-${this.folder.id}`;
      if (this.folder.parentFolderId) key += '-' + this.folder.parentFolderId;
      return key;
    };
    this.setDocumentPreviewAvailability = () => {
      try {
        // Document preview doesn't work in browsers that don't support unicode property escapes /\p/.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#browser_compatibility
        const r = new RegExp(/\p{Mn}/, 'u');
        this.canBrowserRenderDocument = true;
      } catch {
        this.canBrowserRenderDocument = false;
      }
    };
    this.getIFolderAsFolder = () => this.folder;
  }
  get folder() {
    return this._folder;
  }
  set folder(val) {
    this._folder = val;
    this.applyPinnedFilters();
  }
  get previewDocument() {
    return this._previewDocument;
  }
  set previewDocument(document) {
    this._previewDocument = document;
    this.currentSelectedDocumentService.setCurrentDocument(document);
  }
  get showDocumentPreview() {
    return this.canBrowserRenderDocument && this.showPreview;
  }
  ngOnInit() {
    this.itemActionHandler = this.actionService.createItemActionHandler();
    this.subscriptions.add(this.itemActionHandler.reload.subscribe(keepSelection => {
      keepSelection ? this.refreshItems() : this.loadItems();
      this.loadAutoExecuteActions();
    }));
    this.subscriptions.add(this.itemActionHandler.update.subscribe(ur => {
      if (ur.silent) {
        this.silentlyUpdateItems(ur);
      } else {
        this.refreshItems();
      }
    }));
    this.subscriptions.add(this.myfiles.filesUploaded.subscribe(this.loadItems));
    this.subscriptions.add(this.productItemRefreshService.onRefresh.subscribe(this.refreshItems));
    this.subscriptions.add(this.route.params.subscribe(params => {
      this.openFolder(params);
    }));
    this.subscriptions.add(this.itemActionHandler.onAutoExecuteResult.subscribe(result => {
      this.autoExecuteSubscriptions.add(this.autoExecuteActionsService.setupAutoExecuteActions(result, this.folder, this.itemActionHandler));
    }));
    this.handleInboundFolderFiltersLoading();
    this.setDocumentPreviewAvailability();
  }
  loadItemsEx() {
    const request = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ItemsRequest();
    const sortColumn = this.columns.find(c => c.id == this.sort.field);
    const sortByField = sortColumn ? sortColumn.sortByFieldName : '';
    const sortByDirection = this.sort.dir == 'asc' ? shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SortDirection.Ascending : shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SortDirection.Descending;
    if (this.currentPage === 0) {
      this.currentPage = 1;
    }
    request.pageNumber = this.currentPage;
    request.pageSize = this.pageSize;
    request.sortBy = sortByField;
    request.sortByDirection = sortByDirection;
    request.filters = this.folder.filters.map(filter => {
      const f = filter;
      return {
        id: f.id,
        value: f.value
      };
    });
    this.spinnerState.show(this.translate.instant('Common.LoadingData'), document.documentElement);
    this.datasource.loadItems(request, this.itemsLoad, this.itemsLoadFailed);
  }
  updateSelectedItemsAfterReload() {
    this.selectedItems = this.tableItems.filter(x => this.selectedItems.findIndex(y => y.data.id == x.data.id) != -1);
    if (this.selectedItems.length > 0) {
      this.previewDocument = new _document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_12__.PreviewDocument(this.selectedItems[0], this.datasource, this.translate);
    } else {
      this.previewDocument = null;
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.autoExecuteSubscriptions.unsubscribe();
  }
  openDocumentPreview() {
    this.previewWidth = this.userPreferencesService.getPreference(this.previewWidthPreferenceKey);
    this.showPreview = true;
  }
  onWidthResize(p) {
    this.documentPreview?.updatePreviewSize();
    this.userPreferencesService.setPreference(p.name, p.value);
  }
  getColumns() {
    const columnPreferences = this.userPreferencesService.getPreference('columns-' + this.getPreferencesKey(), this.folder.defaultColumns);
    const folderColumns = [];
    if (this.folder && this.folder.columns) {
      this.folder.columns.forEach(c => folderColumns.push(c));
    }
    if (this.folder.includeMetaDataAsColumns) {
      this.userState.user.metaData.forEach(md => folderColumns.push(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataDefinition.asIColumn(md)));
    }
    const columns = [];
    let preferredColumnsChanged = false;
    for (const pc of columnPreferences) {
      let correspondingColumn = folderColumns.find(fc => pc?.id == fc?.id);
      if (!correspondingColumn) {
        correspondingColumn = folderColumns.find(fc => pc?.id == fc?.headerText.replace(/ /g, '_').toUpperCase());
        if (correspondingColumn) {
          pc.id = correspondingColumn.id;
          preferredColumnsChanged = true;
        }
        if (!correspondingColumn) continue;
      }
      columns.push({
        ...correspondingColumn,
        ...pc
      });
    }
    if (preferredColumnsChanged) {
      this.userPreferencesService.setPreference('columns-' + this.getPreferencesKey(), columnPreferences);
    }
    return columns;
  }
  reloadFolder() {
    if (this.folder.forceReload) this.userState.addToForceReloadFoldersIds([this.params.folder]);
    if (this.userState.forceReloadFoldersIds.length) {
      this.reloadUserStateFolders();
      return;
    }
    this.onLoadFolder();
  }
  getFolder(folderId) {
    this.spinnerState.show(this.translate.instant('folder.loading-folder'), document.documentElement);
    this.userState.reloadFolder(this.params.folder, this.onLoadFolderSucceeded, this.onLoadFolderFailed);
  }
  reloadUserStateFolders() {
    const index = this.userState.forceReloadFoldersIds.findIndex(folderid => folderid == this.params.folder);
    if (index == -1) {
      this.onLoadFolder();
      return;
    }
    this.getFolder(this.params.folder);
    this.userState.forceReloadFoldersIds.splice(index, 1);
  }
  static {
    this.ɵfac = function ProductItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_7__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_myfiles_service__WEBPACK_IMPORTED_MODULE_5__.MyfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.UserPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CurrentSelectedDocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_product_item_refresh_service__WEBPACK_IMPORTED_MODULE_11__.ProductItemRefreshService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_2__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_auto_execute_actions_service__WEBPACK_IMPORTED_MODULE_4__.AutoExecuteActionsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_folder_details_service__WEBPACK_IMPORTED_MODULE_9__.FolderDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_blocks_services_FilterByInterfaxInboxPropertiesComponentLoaded_service__WEBPACK_IMPORTED_MODULE_8__.FilterByInterfaxInboxPropertiesComponentLoadedService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_Bamba_Shared_src_fields_list_list_service__WEBPACK_IMPORTED_MODULE_1__.ListService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: ProductItemComponent,
      selectors: [["app-product-item"]],
      viewQuery: function ProductItemComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.spinnerWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.documentPreview = _t.first);
        }
      },
      decls: 15,
      vars: 7,
      consts: [["spinnerState", ""], ["documentPreview", ""], [1, "product-items", "project-list-dashboard-body", "pi-component", "h-100", "d-flex", "flex-column"], [3, "icon", "headerText", "rightControls", 4, "ngIf"], [1, "container-fluid", "overflow-visible", "col", "p-0", "m-0"], ["id", "spinnerPanel", 1, "h-100"], [1, "project-list-grid-panel", "h-100", "d-flex", "flex-column"], [1, "box-head--light-blue-bg"], ["appBoxHead", "", 3, "folder"], [1, "box-head__right-panel", "project-list-pages"], [3, "currentPage", "itemsTotal", "pageSize", "itemsPageCount", "canChangePageSize", "onLoadPage", "onPageSizeChanged", 4, "ngIf"], ["appActionPanel", "", "class", "pl-action-panel grid-action-panel w-100", 3, "folder", "selectedItems", "areFiltersPinned", "onActionInvoked", "onFiltersUpdated", "onSaveColumns", "onPinClicked", 4, "ngIf"], [4, "ngIf"], [1, "items-inner-wrapper", "col", "p-0", "d-flex", "mh-100", "overflow-auto", "h-100", "w-100"], ["class", "d-flex", "appResizable", "", 3, "items", "columns", "showCheckboxes", "sort", "multiselect", "expandableDetail", "handles", "width", "preferenceName", "preferenceValue", "disabled", "preferencesKey", "reorderable", "supportActions", "expandedItems", "onInvokeAction", "onSort", "onSelectionChanged", "onSaveColumns", "reload", "resize", "expandedItemsChange", 4, "ngIf"], ["class", "document-preview col p-0", 4, "ngIf"], [3, "icon", "headerText", "rightControls"], [3, "onLoadPage", "onPageSizeChanged", "currentPage", "itemsTotal", "pageSize", "itemsPageCount", "canChangePageSize"], ["appActionPanel", "", 1, "pl-action-panel", "grid-action-panel", "w-100", 3, "onActionInvoked", "onFiltersUpdated", "onSaveColumns", "onPinClicked", "folder", "selectedItems", "areFiltersPinned"], ["class", "row errors w-100", 4, "ngFor", "ngForOf"], [1, "row", "errors", "w-100"], [1, "col-1"], [1, "fa", "fa-exclamation-triangle"], [1, "col-10"], ["appResizable", "", 1, "d-flex", 3, "onInvokeAction", "onSort", "onSelectionChanged", "onSaveColumns", "reload", "resize", "expandedItemsChange", "items", "columns", "showCheckboxes", "sort", "multiselect", "expandableDetail", "handles", "width", "preferenceName", "preferenceValue", "disabled", "preferencesKey", "reorderable", "supportActions", "expandedItems"], [1, "document-preview", "col", "p-0"], [3, "documentReloadRequired", "folderId", "selectedItems", "previewDocument", "documentNameEditingAllowed"]],
      template: function ProductItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ProductItemComponent_app_secondary_header_2_Template, 1, 3, "app-secondary-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ProductItemComponent_pagination_9_Template, 1, 5, "pagination", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, ProductItemComponent_div_10_Template, 1, 3, "div", 11)(11, ProductItemComponent_div_11_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, ProductItemComponent_app_table_13_Template, 1, 17, "app-table", 14)(14, ProductItemComponent_div_14_Template, 3, 4, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.folder);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("folder", ctx.folder);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.tableItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.supportActions);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loadingFailed);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.loadingFailed && ctx.tableItems && !ctx.loadingColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.showDocumentPreview);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _box_action_panel_action_panel_component__WEBPACK_IMPORTED_MODULE_13__.ActionPanelComponent, _box_box_head_box_head_component__WEBPACK_IMPORTED_MODULE_14__.BoxHeadComponent, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_15__.SecondaryHeaderComponent, _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_16__.ResizableDirective, _Bamba_Shared_src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__.PaginationComponent, _Bamba_Shared_src_components_table_product_detail_table_table_component__WEBPACK_IMPORTED_MODULE_18__.TableComponent, _document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_12__.DocumentPreviewComponent],
      styles: [".product-items .pl-action-panel {\n  background: #fff;\n  display: flex;\n}\n.product-items .pl-action-panel .delete-btn {\n  padding: 0px;\n  width: 25px;\n  height: 25px;\n  border: solid 1px transparent;\n}\n.product-items .pl-action-panel .delete-btn .icomoon-delete {\n  padding: 4px 4px;\n  font-size: 16px;\n}\n.product-items .errors {\n  color: red;\n  padding-left: 30px;\n  padding-top: 20px;\n}\n.product-items .document-preview {\n  width: 0;\n  overflow: hidden;\n  background-color: #fafafa;\n}\n.product-items app-table {\n  max-width: 100% !important;\n}\n\n.submit-to-workflow-modal .nsm-dialog,\n.document-conversion-modal .nsm-dialog {\n  max-width: 604px !important;\n}\n\n.device-csv-import .modal-header h3 {\n  font-size: 18px;\n  font-weight: normal;\n  margin: 20px 0 10px;\n  color: #151515;\n}\n\n.list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1FO0VBQ0UsUUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9FO0VBQ0UsMEJBQUE7QUFMSjs7QUFXRTs7RUFDRSwyQkFBQTtBQVBKOztBQWFJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVk47O0FBZUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBWkYiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pdGVtcyB7XHJcbiAgLnBsLWFjdGlvbi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5wbC1hY3Rpb24tcGFuZWwgLmRlbGV0ZS1idG4ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5wbC1hY3Rpb24tcGFuZWwgLmRlbGV0ZS1idG4gLmljb21vb24tZGVsZXRlIHtcclxuICAgIHBhZGRpbmc6IDRweCA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZXJyb3JzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5kb2N1bWVudC1wcmV2aWV3IHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgfVxyXG5cclxuICBhcHAtdGFibGUge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VibWl0LXRvLXdvcmtmbG93LW1vZGFsLFxyXG4uZG9jdW1lbnQtY29udmVyc2lvbi1tb2RhbCB7XHJcbiAgLm5zbS1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiA2MDRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmRldmljZS1jc3YtaW1wb3J0IHtcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAxMHB4O1xyXG4gICAgICBjb2xvcjogIzE1MTUxNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 75988:
/*!***********************************************************!*\
  !*** ./src/app/views/product-item/product-item.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductItemModule: () => (/* binding */ ProductItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-pdf-viewer */ 42072);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/directives/directives.module */ 21084);
/* harmony import */ var _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/modals/modals.module */ 51188);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _admin_fax_settings_account_register_account_register_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-fax-settings/account-register/account-register.module */ 17402);
/* harmony import */ var _admin_metadata_admin_metadata_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-metadata/admin-metadata.module */ 44892);
/* harmony import */ var _document_capture_document_capture_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../document-capture/document-capture.module */ 53686);
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../upload/upload.module */ 83996);
/* harmony import */ var _box_box_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./box/box.module */ 35850);
/* harmony import */ var _document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./document-preview/document-preview.component */ 2809);
/* harmony import */ var _document_preview_preview_thumbnails_preview_thumbnails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./document-preview/preview-thumbnails/preview-thumbnails.component */ 89890);
/* harmony import */ var _document_preview_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./document-preview/thumbnail/thumbnail.component */ 10760);
/* harmony import */ var _product_item_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-item-routing.module */ 49357);
/* harmony import */ var _product_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-item.component */ 70001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../blocks/components/action-button/action-button.component */ 33232);
/* harmony import */ var _document_preview_annotations_annotations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./document-preview/annotations/annotations.component */ 64644);
/* harmony import */ var _document_preview_preview_barcodes_preview_barcodes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./document-preview/preview-barcodes/preview-barcodes.component */ 68194);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/resizable.directive */ 92133);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_modal_change_secure_user_password_modal_change_secure_user_password_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/modal/change-secure-user-password-modal/change-secure-user-password-modal.component */ 98196);
































class ProductItemModule {
  static {
    this.ɵfac = function ProductItemModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductItemModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
      type: ProductItemModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _box_box_module__WEBPACK_IMPORTED_MODULE_9__.BoxModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_4__.PageModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_25__.NgxSmartModalModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_3__.ModalsModule, _product_item_routing_module__WEBPACK_IMPORTED_MODULE_13__.ProductItemRoutingModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_26__.PdfViewerModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_27__.PerfectScrollbarModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ResizableModule, _admin_metadata_admin_metadata_module__WEBPACK_IMPORTED_MODULE_6__.AdminMetaDataModule, _document_capture_document_capture_module__WEBPACK_IMPORTED_MODULE_7__.DocumentCaptureModule, _admin_fax_settings_account_register_account_register_module__WEBPACK_IMPORTED_MODULE_5__.AccountRegisterModule, _upload_upload_module__WEBPACK_IMPORTED_MODULE_8__.UploadModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaginationModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableProductDetailModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ChangeSecureUserPasswordModalModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](ProductItemModule, {
    declarations: [_product_item_component__WEBPACK_IMPORTED_MODULE_14__.ProductItemComponent, _document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_10__.DocumentPreviewComponent, _document_preview_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_12__.ThumbnailComponent, _document_preview_preview_thumbnails_preview_thumbnails_component__WEBPACK_IMPORTED_MODULE_11__.PreviewThumbnailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _box_box_module__WEBPACK_IMPORTED_MODULE_9__.BoxModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_4__.PageModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_25__.NgxSmartModalModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_3__.ModalsModule, _product_item_routing_module__WEBPACK_IMPORTED_MODULE_13__.ProductItemRoutingModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_26__.PdfViewerModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_27__.PerfectScrollbarModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ResizableModule, _admin_metadata_admin_metadata_module__WEBPACK_IMPORTED_MODULE_6__.AdminMetaDataModule, _document_capture_document_capture_module__WEBPACK_IMPORTED_MODULE_7__.DocumentCaptureModule, _admin_fax_settings_account_register_account_register_module__WEBPACK_IMPORTED_MODULE_5__.AccountRegisterModule, _upload_upload_module__WEBPACK_IMPORTED_MODULE_8__.UploadModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaginationModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableProductDetailModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ChangeSecureUserPasswordModalModule],
    exports: [_document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_10__.DocumentPreviewComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetComponentScope"](_document_preview_document_preview_component__WEBPACK_IMPORTED_MODULE_10__.DocumentPreviewComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _blocks_components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_15__.ActionButtonComponent, _document_preview_annotations_annotations_component__WEBPACK_IMPORTED_MODULE_16__.AnnotationsComponent, _document_preview_preview_barcodes_preview_barcodes_component__WEBPACK_IMPORTED_MODULE_17__.BarcodesPreviewComponent, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_26__.PdfViewerComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_27__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_18__.AutoUpdatePerfectScrollDirective, _Bamba_Shared_src_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_19__.ResizableDirective, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_20__.FieldComponent, _Bamba_Shared_src_modal_change_secure_user_password_modal_change_secure_user_password_modal_component__WEBPACK_IMPORTED_MODULE_21__.ChangeSecureUserPasswordModalComponent, _document_preview_preview_thumbnails_preview_thumbnails_component__WEBPACK_IMPORTED_MODULE_11__.PreviewThumbnailsComponent], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetComponentScope"](_document_preview_preview_thumbnails_preview_thumbnails_component__WEBPACK_IMPORTED_MODULE_11__.PreviewThumbnailsComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_26__.PdfViewerComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_27__.PerfectScrollbarDirective, _document_preview_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_12__.ThumbnailComponent], []);

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_product-item_product-item_module_ts.js.map