"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_fax-mobile_fax-mobile_module_ts"],{

/***/ 27327:
/*!***************************************************************!*\
  !*** ./src/app/views/fax-mobile/fax-mobile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxMobileRoutingModule: () => (/* binding */ FaxMobileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _fax_mobile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fax-mobile.component */ 80623);
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send/send.component */ 59432);
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-item/product-item.component */ 78282);
/* harmony import */ var _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder-item/folder-item.component */ 75590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);







const routes = [{
  path: '',
  component: _fax_mobile_component__WEBPACK_IMPORTED_MODULE_0__.FaxMobileComponent,
  pathMatch: 'full'
}, {
  path: 'send',
  component: _send_send_component__WEBPACK_IMPORTED_MODULE_1__.SendComponent,
  pathMatch: 'full'
}, {
  path: 'view/:itemId',
  component: _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_3__.FolderItemComponent,
  pathMatch: 'full'
}, {
  path: 'product/:product/:folder',
  component: _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__.ProductItemComponent,
  pathMatch: 'full'
}];
class FaxMobileRoutingModule {
  static {
    this.ɵfac = function FaxMobileRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxMobileRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: FaxMobileRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FaxMobileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 80623:
/*!**********************************************************!*\
  !*** ./src/app/views/fax-mobile/fax-mobile.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxMobileComponent: () => (/* binding */ FaxMobileComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_services_session_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/services/session-storage.service */ 70088);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _blocks_components_select_action_select_action_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/select-action/select-action.component */ 21476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);









class FaxMobileComponent {
  constructor(userStateService, router, sessionStorage) {
    this.userStateService = userStateService;
    this.router = router;
    this.sessionStorage = sessionStorage;
    this.actions = [];
    this.addToHomePromptVisible = () => document.querySelector('.add-to-home-screen-message-ios');
    this.switchToDesktop = () => {
      this.sessionStorage.setIsInterFaxMobile(false);
    };
  }
  ngOnInit() {
    this.actions = this.getInterFaxMobileActions();
  }
  getInterFaxMobileActions() {
    const interFaxProduct = this.userStateService.user.products.find(product => product.id === 'InterFAX');
    if (!interFaxProduct) return [];
    return interFaxProduct.mobileActions.filter(action => action.isInterFaxMobileAction);
  }
  onSubmitActionSelected(action) {
    this.router.navigateByUrl(action.route);
  }
  static {
    this.ɵfac = function FaxMobileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Bamba_Shared_src_services_session_storage_service__WEBPACK_IMPORTED_MODULE_0__.SessionStorageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FaxMobileComponent,
      selectors: [["app-fax-mobile"]],
      decls: 6,
      vars: 7,
      consts: [[1, "fax-mobile-container"], [3, "actionSelected", "actions"], [1, "switch-to-desktop", "w-100", "text-center"], [3, "click", "routerLink"]],
      template: function FaxMobileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "app-select-action", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionSelected", function FaxMobileComponent_Template_app_select_action_actionSelected_1_listener($event) {
            return ctx.onSubmitActionSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FaxMobileComponent_Template_a_click_3_listener() {
            return ctx.switchToDesktop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("actions", ctx.actions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("addToHomePromptVisible", ctx.addToHomePromptVisible());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/home");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "interFax-mobile.switch-to-desktop"));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _blocks_components_select_action_select_action_component__WEBPACK_IMPORTED_MODULE_2__.SelectActionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: [".fax-mobile-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.fax-mobile-container[_ngcontent-%COMP%]   .switch-to-desktop[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n}\n.fax-mobile-container[_ngcontent-%COMP%]   .switch-to-desktop.addToHomePromptVisible[_ngcontent-%COMP%] {\n  bottom: 85px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZmF4LW1vYmlsZS9mYXgtbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtBQUVOIiwic291cmNlc0NvbnRlbnQiOlsiLmZheC1tb2JpbGUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLnN3aXRjaC10by1kZXNrdG9wIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgICYuYWRkVG9Ib21lUHJvbXB0VmlzaWJsZSB7XHJcbiAgICAgIGJvdHRvbTogODVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91438:
/*!*******************************************************!*\
  !*** ./src/app/views/fax-mobile/fax-mobile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxMobileModule: () => (/* binding */ FaxMobileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ 48310);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _Bamba_Shared_src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/pipes/pipes.module */ 30581);
/* harmony import */ var _fax_viewer_fax_viewer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fax-viewer/fax-viewer.module */ 5510);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../blocks/shared/shared.module */ 12806);
/* harmony import */ var _views_send_fax_send_fax_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../views/send-fax/send-fax.module */ 60286);
/* harmony import */ var _fax_mobile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fax-mobile-routing.module */ 27327);
/* harmony import */ var _fax_mobile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fax-mobile.component */ 80623);
/* harmony import */ var _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./folder-item/folder-item.component */ 75590);
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-item/product-item.component */ 78282);
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./send/send.component */ 59432);
/* harmony import */ var _simplified_table_item_simplified_table_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./simplified-table-item/simplified-table-item.component */ 83830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 96623);

















class FaxMobileModule {
  static {
    this.ɵfac = function FaxMobileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxMobileModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: FaxMobileModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__.InfiniteScrollModule, _fax_mobile_routing_module__WEBPACK_IMPORTED_MODULE_6__.FaxMobileRoutingModule, _blocks_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _views_send_fax_send_fax_module__WEBPACK_IMPORTED_MODULE_5__.SendFaxModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _Bamba_Shared_src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableProductDetailModule, _fax_viewer_fax_viewer_module__WEBPACK_IMPORTED_MODULE_2__.FaxViewerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ChangeSecureUserPasswordModalModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FaxMobileModule, {
    declarations: [_fax_mobile_component__WEBPACK_IMPORTED_MODULE_7__.FaxMobileComponent, _send_send_component__WEBPACK_IMPORTED_MODULE_10__.SendComponent, _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_9__.ProductItemComponent, _folder_item_folder_item_component__WEBPACK_IMPORTED_MODULE_8__.FolderItemComponent, _simplified_table_item_simplified_table_item_component__WEBPACK_IMPORTED_MODULE_11__.SimplifiedTableItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__.InfiniteScrollModule, _fax_mobile_routing_module__WEBPACK_IMPORTED_MODULE_6__.FaxMobileRoutingModule, _blocks_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _views_send_fax_send_fax_module__WEBPACK_IMPORTED_MODULE_5__.SendFaxModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _Bamba_Shared_src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableProductDetailModule, _fax_viewer_fax_viewer_module__WEBPACK_IMPORTED_MODULE_2__.FaxViewerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ChangeSecureUserPasswordModalModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule]
  });
})();

/***/ }),

/***/ 75590:
/*!***********************************************************************!*\
  !*** ./src/app/views/fax-mobile/folder-item/folder-item.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderItemComponent: () => (/* binding */ FolderItemComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_models_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/models/table */ 1391);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _services_product_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/product-item.service */ 46301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_components_table_product_detail_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/components/table-product-detail/product-detail/product-detail.component */ 97180);
/* harmony import */ var _fax_viewer_fax_viewer_fax_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../fax-viewer/fax-viewer/fax-viewer.component */ 93792);
/* harmony import */ var _simplified_table_item_simplified_table_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../simplified-table-item/simplified-table-item.component */ 83830);
























function FolderItemComponent_div_0_app_fax_viewer_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-fax-viewer", 8);
  }
}
function FolderItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-simplified-table-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, FolderItemComponent_div_0_app_fax_viewer_4_Template, 1, 0, "app-fax-viewer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "app-secondary-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("item", ctx_r0.item)("folder", ctx_r0.folder)("columns", ctx_r0.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataItem", ctx_r0.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r0.item.data.extendedDetails == null ? null : ctx_r0.item.data.extendedDetails.type) === "ExtendedDetailsInterFAXInboundFax");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rightControls", ctx_r0.actionsControllers);
  }
}
class FolderItemComponent {
  constructor(route, hydraApiService, userStateService, spinnerService, translate, toastr, actionService, productItemService) {
    this.route = route;
    this.hydraApiService = hydraApiService;
    this.userStateService = userStateService;
    this.spinnerService = spinnerService;
    this.translate = translate;
    this.toastr = toastr;
    this.actionService = actionService;
    this.productItemService = productItemService;
    this.item = null;
    this.columns = [];
    this.actionsControllers = [];
    this.itemLoadedSuccessfully = data => {
      this.item = new _Bamba_Shared_src_models_table__WEBPACK_IMPORTED_MODULE_0__.TableItem(data, this.columns, this.translate);
      this.createItemActionsControllers();
      this.spinnerService.hide();
    };
    this.createItemActionsControllers = () => {
      if (!this.item) return [];
      const actions = this.item.data.allowedActions.filter(a => a.id !== this.item.data.defaultAction.id);
      actions.forEach(action => {
        this.actionsControllers.unshift(new _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__.Control(() => this.executeAction(action), action.name, 'btn btn-light', '', action.name, 'btn', false));
      });
    };
    this.itemLoadFailed = error => {
      this.item = null;
      this.spinnerService.hide();
      this.toastr.error(error.message);
    };
    this.getFolder = () => {
      const folderId = this.params.get('itemId').split('~')[1];
      if (!folderId) return;
      this.folder = this.userStateService.findFolderById(folderId);
      if (this.folder == null) return;
      this.columns = this.productItemService.getColumns(this.folder);
    };
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.params = params;
      this.getFolder();
      this.getItemDetails();
    });
  }
  getItemDetails() {
    this.spinnerService.show(this.translate.instant('Common.Loading'), document.documentElement);
    this.item = null;
    this.hydraApiService.getItemDetails(this.params.get('itemId'), this.itemLoadedSuccessfully, this.itemLoadFailed);
  }
  executeAction(action) {
    const itemActionHandler = this.actionService.createItemActionHandler();
    itemActionHandler.invoke(this.folder.id, action, [this.item.data], this.productItemService.getFilters(this.folder));
  }
  static {
    this.ɵfac = function FolderItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FolderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_2__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_5__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_1__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_product_item_service__WEBPACK_IMPORTED_MODULE_6__.ProductItemService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: FolderItemComponent,
      selectors: [["app-folder-item"]],
      decls: 1,
      vars: 1,
      consts: [["class", "simplified-folder-item-container", 4, "ngIf"], [1, "simplified-folder-item-container"], [1, "details-container"], [3, "item", "folder", "columns"], ["appProductDetail", "", 1, "mobile-product-detail", 3, "dataItem"], ["faxMobilePreview", "", 4, "ngIf"], [1, "item-actions-container"], ["headerText", "", 3, "rightControls"], ["faxMobilePreview", ""]],
      template: function FolderItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, FolderItemComponent_div_0_Template, 7, 6, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.item);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, _Bamba_Shared_src_components_table_product_detail_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__.ProductDetailComponent, _fax_viewer_fax_viewer_fax_viewer_component__WEBPACK_IMPORTED_MODULE_9__.FaxViewerComponent, _simplified_table_item_simplified_table_item_component__WEBPACK_IMPORTED_MODULE_10__.SimplifiedTableItemComponent],
      styles: [".simplified-folder-item-container {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.simplified-folder-item-container .details-container {\n  height: calc(100% - 56px);\n}\n.simplified-folder-item-container .item-actions-container .secondary-header {\n  margin-bottom: 0px;\n}\n.simplified-folder-item-container .mobile-product-detail {\n  height: calc(100% - 56px) !important;\n  font-size: 12px;\n  font-weight: normal;\n}\n.simplified-folder-item-container .mobile-product-detail .journal-table .data-row {\n  display: block;\n  margin-bottom: 12px;\n}\n.simplified-folder-item-container .mobile-product-detail .journal-table .data-row td {\n  padding-bottom: 0px !important;\n}\n.simplified-folder-item-container .mobile-product-detail .journal-table .data-row td:first-child {\n  width: 125px;\n}\n.simplified-folder-item-container .mobile-product-detail .journal-table .data-row .pr-4 {\n  padding-right: 10px !important;\n}\n\n.black-overlay {\n  width: 100vw !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZmF4LW1vYmlsZS9mb2xkZXItaXRlbS9mb2xkZXItaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtBQUNKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBS0U7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTU07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU1RO0VBQ0UsOEJBQUE7QUFKVjtBQU1VO0VBQ0UsWUFBQTtBQUpaO0FBUVE7RUFDRSw4QkFBQTtBQU5WOztBQWFBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQVZGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbXBsaWZpZWQtZm9sZGVyLWl0ZW0tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLmRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1hY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgICAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2JpbGUtcHJvZHVjdC1kZXRhaWwge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgICAuam91cm5hbC10YWJsZSB7XHJcbiAgICAgIC5kYXRhLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHItNCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmxhY2stb3ZlcmxheSB7XHJcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 78282:
/*!*************************************************************************!*\
  !*** ./src/app/views/fax-mobile/product-item/product-item.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductItemComponent: () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_action_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/action.service */ 12811);
/* harmony import */ var _blocks_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/api.service */ 32275);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _services_product_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product-item.service */ 46301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ 48310);
/* harmony import */ var _Bamba_Shared_src_modal_change_secure_user_password_modal_change_secure_user_password_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/change-secure-user-password-modal/change-secure-user-password-modal.component */ 98196);
/* harmony import */ var _simplified_table_item_simplified_table_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../simplified-table-item/simplified-table-item.component */ 83830);























function ProductItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.folder.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r0.total, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 3, "interFax-mobile.Faxes-label"), "");
  }
}
function ProductItemComponent_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductItemComponent_ng_container_3_div_1_Template_div_click_0_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.executeDefaultAction(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-simplified-table-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3)("folder", ctx_r0.folder)("columns", ctx_r0.columns);
  }
}
function ProductItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProductItemComponent_ng_container_3_div_1_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
function ProductItemComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "interFax-mobile.no-items-to-show"), " ");
  }
}
class ProductItemComponent {
  constructor(route, userState, translate, api, toastr, spinnerState, actionService, productItemService) {
    this.route = route;
    this.userState = userState;
    this.translate = translate;
    this.api = api;
    this.toastr = toastr;
    this.spinnerState = spinnerState;
    this.actionService = actionService;
    this.productItemService = productItemService;
    this.items = [];
    this.columns = [];
    this.total = 0;
    this.pageSize = 25;
    this.pageNumber = 1;
    this.loading = true;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.openFolder = () => {
      this.folder = this.userState.findFolderById(this.params.folder);
      if (this.folder == null) return;
      this.onLoadFolder();
    };
    this.onLoadFolder = () => {
      this.columns = this.productItemService.getColumns(this.folder);
      this.loadItems();
    };
    this.loadItems = () => {
      if (this.items.length && this.items.length === this.total) return;
      const request = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ItemsRequest();
      const sortColumn = this.folder.columns.find(c => c.id == this.folder.defaultSortByColumn.columnId);
      request.pageNumber = this.pageNumber;
      request.pageSize = this.pageSize;
      request.sortBy = sortColumn ? sortColumn.sortByFieldName : '';
      request.sortByDirection = this.folder.defaultSortByColumn.direction;
      request.filters = this.productItemService.getFilters(this.folder);
      this.spinnerState.show(this.translate.instant('Common.LoadingData'), document.documentElement);
      const dataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ItemTableDataSource(this.folder.product.id, this.params.folder, this.api);
      dataSource.loadItems(request, this.itemsLoad, this.itemsLoadFailed);
    };
    this.itemsLoad = results => {
      this.spinnerState.hide(this.translate.instant('Common.LoadingData'));
      if (!results.success) {
        this.toastr.error(results.errors[0]);
        return;
      }
      const newItems = results.items.map(i => new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TableItem(i, this.columns, this.translate));
      this.items = [...this.items, ...newItems];
      this.total = results.total;
      this.pageNumber++;
    };
    this.itemsLoadFailed = () => {
      this.spinnerState.hide(this.translate.instant('Common.LoadingData'));
      this.toastr.error(this.translate.instant('Common.LoadingDataError'));
    };
  }
  ngOnInit() {
    this.subscription.add(this.route.params.subscribe(params => {
      this.params = params;
      this.openFolder();
    }));
    this.subscription.add(this.spinnerState.visibilityChanged.subscribe(data => {
      this.loading = data.visible;
    }));
  }
  executeDefaultAction(item) {
    const defaultAction = item.data.defaultAction;
    if (!defaultAction) {
      this.toastr.error(this.translate.instant('interFax-mobile.view-action-is-not-allowed'));
      return;
    }
    const itemActionHandler = this.actionService.createItemActionHandler();
    itemActionHandler.invoke(this.params.folder, defaultAction, [item.data], this.productItemService.getFilters(this.folder));
  }
  onPasswordUpdated() {
    this.openFolder();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ProductItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_action_service__WEBPACK_IMPORTED_MODULE_1__.ActionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_product_item_service__WEBPACK_IMPORTED_MODULE_5__.ProductItemService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ProductItemComponent,
      selectors: [["app-product-item"]],
      decls: 6,
      vars: 6,
      consts: [[1, "simplified-product-item-container"], ["class", "product-item-header", 4, "ngIf"], ["infiniteScroll", "", 1, "product-item-content", 3, "scrolled", "scrollWindow", "infiniteScrollDistance", "infiniteScrollThrottle"], [4, "ngIf"], ["class", "no-items-message", 4, "ngIf"], [3, "passwordUpdated"], [1, "product-item-header"], [1, "folder-name"], [1, "total-item-count"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "item", "folder", "columns"], [1, "no-items-message"]],
      template: function ProductItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProductItemComponent_div_1_Template, 6, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scrolled", function ProductItemComponent_Template_div_scrolled_2_listener() {
            return ctx.loadItems();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ProductItemComponent_ng_container_3_Template, 2, 1, "ng-container", 3)(4, ProductItemComponent_div_4_Template, 3, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "app-change-secure-user-password-modal", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("passwordUpdated", function ProductItemComponent_Template_app_change_secure_user_password_modal_passwordUpdated_5_listener() {
            return ctx.onPasswordUpdated();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollWindow", false)("infiniteScrollDistance", 1)("infiniteScrollThrottle", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.items.length && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__.InfiniteScrollDirective, _Bamba_Shared_src_modal_change_secure_user_password_modal_change_secure_user_password_modal_component__WEBPACK_IMPORTED_MODULE_6__.ChangeSecureUserPasswordModalComponent, _simplified_table_item_simplified_table_item_component__WEBPACK_IMPORTED_MODULE_7__.SimplifiedTableItemComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: [".simplified-product-item-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.simplified-product-item-container[_ngcontent-%COMP%]   .product-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  background: #f3f3f3;\n}\n.simplified-product-item-container[_ngcontent-%COMP%]   .product-item-header[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%], \n.simplified-product-item-container[_ngcontent-%COMP%]   .product-item-header[_ngcontent-%COMP%]   .total-item-count[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  border-color: #cfcfcf;\n}\n.simplified-product-item-container[_ngcontent-%COMP%]   .product-item-header[_ngcontent-%COMP%]   .folder-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.simplified-product-item-container[_ngcontent-%COMP%]   .product-item-content[_ngcontent-%COMP%] {\n  height: calc(100% - 42px);\n  width: 100%;\n  padding: 10px;\n  overflow: auto;\n}\n.simplified-product-item-container[_ngcontent-%COMP%]   .product-item-content[_ngcontent-%COMP%]   .no-items-message[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZmF4LW1vYmlsZS9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJOztFQUVFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDTjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFGTiIsInNvdXJjZXNDb250ZW50IjpbIi5zaW1wbGlmaWVkLXByb2R1Y3QtaXRlbS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnByb2R1Y3QtaXRlbS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuXHJcbiAgICAuZm9sZGVyLW5hbWUsXHJcbiAgICAudG90YWwtaXRlbS1jb3VudCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjY2ZjZmNmO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2xkZXItbmFtZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MnB4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIC5uby1pdGVtcy1tZXNzYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 59432:
/*!*********************************************************!*\
  !*** ./src/app/views/fax-mobile/send/send.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendComponent: () => (/* binding */ SendComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_models_interfax_send_fax_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/models/interfax/send-fax-models */ 10308);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../blocks/services/send-fax.service */ 16665);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _send_fax_details_form_details_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../send-fax/details-form/details-form.component */ 68926);
/* harmony import */ var _send_fax_fax_success_modal_fax_success_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../send-fax/fax-success-modal/fax-success-modal.component */ 86206);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/page/secondary-header/secondary-header.component */ 33657);

















const _c0 = () => [];
function SendComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-secondary-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-details-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rightControls", ctx_r0.actionsControls);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("validateForm", ctx_r0.validateDetailForm)("formData", ctx_r0.detailForm)("substitutions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));
  }
}
class SendComponent {
  get actionsControls() {
    return [this.saveButton, this.discardButton];
  }
  constructor(userState, errorsService, spinnerState, ngxSmartModalService, sendFaxService) {
    this.userState = userState;
    this.errorsService = errorsService;
    this.spinnerState = spinnerState;
    this.ngxSmartModalService = ngxSmartModalService;
    this.sendFaxService = sendFaxService;
    this.detailForm = new _Bamba_Shared_src_models_interfax_send_fax_models__WEBPACK_IMPORTED_MODULE_0__.FaxForm({});
    this.profileLoaded = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.onFailToLoadProfile = () => {
      this.spinnerState.hide();
      this.errorsService.showErrorsModal(['SendFax.InterfaxAuthorizationProblem'], 'SendFax.HeadText');
      this.profileLoaded = false;
    };
    this.onSuccessLoadingProfile = () => {
      this.createActionsButtons();
      this.sendFaxService.loadFaxPageSettingsValues();
      this.spinnerState.hide();
      this.profileLoaded = true;
    };
    this.validateDetailForm = () => {
      const isValid = this.sendFaxService.isValidDetailForm();
      this.saveButton.disableControl(!isValid);
    };
  }
  ngOnInit() {
    this.subscription.add(this.sendFaxService.detailForm$.subscribe(detailForm => this.detailForm = detailForm));
    this.sendFaxService.loadSendFaxProfile(document.querySelector('.send-mobile-fax-container'), this.onSuccessLoadingProfile, this.onFailToLoadProfile);
    this.subscription.add(this.userState.userProfileChanged.subscribe(this.sendFaxService.userProfileChangedHandler));
  }
  createActionsButtons() {
    this.saveButton = this.sendFaxService.createSendFaxControl('.send-mobile-fax-container');
    this.discardButton = this.sendFaxService.createDiscardControl();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.sendFaxService.resetSendFaxState();
  }
  static {
    this.ɵfac = function SendComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_4__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_1__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_2__.SendFaxService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SendComponent,
      selectors: [["app-send"]],
      decls: 2,
      vars: 1,
      consts: [["class", "send-mobile-fax-container", 4, "ngIf"], [1, "send-mobile-fax-container"], ["headerText", "", 3, "rightControls"], [1, "details-form-container"], [3, "validateForm", "formData", "substitutions"]],
      template: function SendComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SendComponent_div_0_Template, 4, 5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-fax-success-modal");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.profileLoaded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _send_fax_details_form_details_form_component__WEBPACK_IMPORTED_MODULE_5__.DetailsFormComponent, _send_fax_fax_success_modal_fax_success_modal_component__WEBPACK_IMPORTED_MODULE_6__.FaxSuccessModalComponent, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent],
      styles: [".send-mobile-fax-container {\n  width: 100%;\n  height: 100%;\n  padding: 10px 5px 0px 5px;\n}\n.send-mobile-fax-container .secondary-header {\n  margin-bottom: 0px;\n  height: 42px;\n}\n.send-mobile-fax-container .secondary-header .section-header {\n  padding: 0px !important;\n  height: 42px;\n}\n.send-mobile-fax-container .details-form-container {\n  display: flex;\n  justify-content: center;\n  height: calc(100% - 52px);\n  width: 100%;\n  margin-top: 10px;\n  overflow: auto;\n}\n.send-mobile-fax-container .details-form-container .sendfax-form ul {\n  min-width: unset !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZmF4LW1vYmlsZS9zZW5kL3NlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFDTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7QUFJTTtFQUNFLDJCQUFBO0FBRlIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1tb2JpbGUtZmF4LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4IDBweCA1cHg7XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuXHJcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMtZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MnB4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIC5zZW5kZmF4LWZvcm0ge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 46301:
/*!*******************************************************************!*\
  !*** ./src/app/views/fax-mobile/services/product-item.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductItemService: () => (/* binding */ ProductItemService)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_models_metadata_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/models/metadata-definition */ 22686);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);




class ProductItemService {
  constructor(userStateService) {
    this.userStateService = userStateService;
    this.getFilters = folder => {
      return folder.filters.map(filter => {
        const f = filter;
        return {
          id: f.id,
          value: f.value
        };
      });
    };
  }
  getColumns(folder) {
    const folderColumns = [];
    if (folder && folder.columns) {
      folder.columns.forEach(c => folderColumns.push(c));
    }
    if (folder.includeMetaDataAsColumns) {
      this.userStateService.user.metaData.forEach(md => folderColumns.push(_Bamba_Shared_src_models_metadata_definition__WEBPACK_IMPORTED_MODULE_0__.MetaDataDefinition.asIColumn(md)));
    }
    const columns = [];
    for (const column of folder.defaultColumns) {
      const correspondingColumn = folderColumns.find(c => c && column && c.id == column.id);
      if (!correspondingColumn) continue;
      columns.push({
        ...correspondingColumn,
        ...column
      });
    }
    return columns;
  }
  static {
    this.ɵfac = function ProductItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_1__.UserStateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ProductItemService,
      factory: ProductItemService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 83830:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/fax-mobile/simplified-table-item/simplified-table-item.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimplifiedTableItemComponent: () => (/* binding */ SimplifiedTableItemComponent)
/* harmony export */ });
/* harmony import */ var _Bamba_Shared_src_models_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/models/table */ 1391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_components_table_product_detail_table_cell_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/components/table-product-detail/table/cell/cell.component */ 31861);




function SimplifiedTableItemComponent_div_0_div_1_div_1_app_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cell", 7);
  }
  if (rf & 2) {
    const folderColumnId_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", ctx_r1.item.data)("column", ctx_r1.getUIColumn == null ? null : ctx_r1.getUIColumn(folderColumnId_r1));
  }
}
function SimplifiedTableItemComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SimplifiedTableItemComponent_div_0_div_1_div_1_app_cell_1_Template, 1, 2, "app-cell", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const folderColumnId_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.getUIColumn == null ? null : ctx_r1.getUIColumn(folderColumnId_r1));
  }
}
function SimplifiedTableItemComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SimplifiedTableItemComponent_div_0_div_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columnSubRows_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columnSubRows_r3);
  }
}
function SimplifiedTableItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SimplifiedTableItemComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.columnsArrangement);
  }
}
class SimplifiedTableItemComponent {
  get columnsArrangement() {
    if (!this.folder) return [];
    return this.folder.simplifiedColumnsArrangement;
  }
  constructor() {
    this.columns = [];
  }
  ngOnInit() {}
  getUIColumn(uiColumnId) {
    return this.columns.find(col => col.id === uiColumnId);
  }
  static {
    this.ɵfac = function SimplifiedTableItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SimplifiedTableItemComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SimplifiedTableItemComponent,
      selectors: [["app-simplified-table-item"]],
      inputs: {
        item: "item",
        folder: "folder",
        columns: "columns"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "simplified-table-item", 4, "ngIf"], [1, "simplified-table-item"], ["class", "item-col", 4, "ngFor", "ngForOf"], [1, "item-col"], ["class", "sub-row", 4, "ngFor", "ngForOf"], [1, "sub-row"], [3, "item", "column", 4, "ngIf"], [3, "item", "column"]],
      template: function SimplifiedTableItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SimplifiedTableItemComponent_div_0_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _Bamba_Shared_src_components_table_product_detail_table_cell_cell_component__WEBPACK_IMPORTED_MODULE_1__.CellComponent],
      styles: [".simplified-table-item[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 12px;\n  font-weight: normal;\n  height: 56px;\n  cursor: pointer;\n}\n.simplified-table-item[_ngcontent-%COMP%]   .item-col[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n}\n.simplified-table-item[_ngcontent-%COMP%]   .item-col[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: start;\n  margin-top: 10px;\n  flex: unset;\n  padding: 0;\n}\n.simplified-table-item[_ngcontent-%COMP%]   .item-col[_ngcontent-%COMP%]:last-of-type {\n  flex: unset;\n  padding: 10px 0;\n}\n.simplified-table-item[_ngcontent-%COMP%]   .item-col[_ngcontent-%COMP%]:last-of-type   .sub-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZmF4LW1vYmlsZS9zaW1wbGlmaWVkLXRhYmxlLWl0ZW0vc2ltcGxpZmllZC10YWJsZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi5zaW1wbGlmaWVkLXRhYmxlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLml0ZW0tY29sIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY29sOmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZmxleDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY29sOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBmbGV4OiB1bnNldDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAuc3ViLXJvdyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 48310:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/fesm2022/ngx-infinite-scroll.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteScrollDirective: () => (/* binding */ InfiniteScrollDirective),
/* harmony export */   InfiniteScrollModule: () => (/* binding */ InfiniteScrollModule),
/* harmony export */   NgxInfiniteScrollService: () => (/* binding */ NgxInfiniteScrollService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 13901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 47066);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 64752);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 24406);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61856);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83919);




class NgxInfiniteScrollService {
  constructor() {}
  static {
    this.ɵfac = function NgxInfiniteScrollService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxInfiniteScrollService)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxInfiniteScrollService,
      factory: NgxInfiniteScrollService.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxInfiniteScrollService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
  const hasWindow = window && !!window.document && window.document.documentElement;
  let container = hasWindow && scrollWindow ? window : defaultElement;
  if (selector) {
    const containerIsString = selector && hasWindow && typeof selector === 'string';
    container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;
    if (!container) {
      throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
    }
  }
  return container;
}
function findElement(selector, customRoot, fromRoot) {
  const rootEl = fromRoot ? window.document : customRoot;
  return rootEl.querySelector(selector);
}
function inputPropChanged(prop) {
  return prop && !prop.firstChange;
}
function hasWindowDefined() {
  return typeof window !== 'undefined';
}
const VerticalProps = {
  clientHeight: "clientHeight",
  offsetHeight: "offsetHeight",
  scrollHeight: "scrollHeight",
  pageYOffset: "pageYOffset",
  offsetTop: "offsetTop",
  scrollTop: "scrollTop",
  top: "top"
};
const HorizontalProps = {
  clientHeight: "clientWidth",
  offsetHeight: "offsetWidth",
  scrollHeight: "scrollWidth",
  pageYOffset: "pageXOffset",
  offsetTop: "offsetLeft",
  scrollTop: "scrollLeft",
  top: "left"
};
class AxisResolver {
  constructor(vertical = true) {
    this.vertical = vertical;
    this.propsMap = vertical ? VerticalProps : HorizontalProps;
  }
  clientHeightKey() {
    return this.propsMap.clientHeight;
  }
  offsetHeightKey() {
    return this.propsMap.offsetHeight;
  }
  scrollHeightKey() {
    return this.propsMap.scrollHeight;
  }
  pageYOffsetKey() {
    return this.propsMap.pageYOffset;
  }
  offsetTopKey() {
    return this.propsMap.offsetTop;
  }
  scrollTopKey() {
    return this.propsMap.scrollTop;
  }
  topKey() {
    return this.propsMap.top;
  }
}
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
  if (alwaysCallback && shouldFireScrollEvent) {
    return true;
  }
  if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
    return true;
  }
  return false;
}
function createResolver({
  windowElement,
  axis
}) {
  return createResolverWithContainer({
    axis,
    isWindow: isElementWindow(windowElement)
  }, windowElement);
}
function createResolverWithContainer(resolver, windowElement) {
  const container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
  return {
    ...resolver,
    container
  };
}
function isElementWindow(windowElement) {
  const isWindow = ['Window', 'global'].some(obj => Object.prototype.toString.call(windowElement).includes(obj));
  return isWindow;
}
function getDocumentElement(isContainerWindow, windowElement) {
  return isContainerWindow ? windowElement.document.documentElement : null;
}
function calculatePoints(element, resolver) {
  const height = extractHeightForElement(resolver);
  return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
}
function calculatePointsForWindow(height, element, resolver) {
  const {
    axis,
    container,
    isWindow
  } = resolver;
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  // scrolled until now / current y point
  const scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
  // total height / most bottom y point
  const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
  const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow
  };
}
function calculatePointsForElement(height, element, resolver) {
  const {
    axis,
    container
  } = resolver;
  // perhaps use container.offsetTop instead of 'scrollTop'
  const scrolled = container[axis.scrollTopKey()];
  const totalToScroll = container[axis.scrollHeightKey()];
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow: false
  };
}
function extractHeightPropKeys(axis) {
  return {
    offsetHeightKey: axis.offsetHeightKey(),
    clientHeightKey: axis.clientHeightKey()
  };
}
function extractHeightForElement({
  container,
  isWindow,
  axis
}) {
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
  if (isNaN(elem[offsetHeightKey])) {
    const docElem = getDocumentElement(isWindow, elem);
    return docElem ? docElem[clientHeightKey] : 0;
  } else {
    return elem[offsetHeightKey];
  }
}
function getElementOffsetTop(elem, axis, isWindow) {
  const topKey = axis.topKey();
  // elem = elem.nativeElement;
  if (!elem.getBoundingClientRect) {
    // || elem.css('none')) {
    return;
  }
  return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
}
function getElementPageYOffset(elem, axis, isWindow) {
  const pageYOffset = axis.pageYOffsetKey();
  const scrollTop = axis.scrollTopKey();
  const offsetTop = axis.offsetTopKey();
  if (isNaN(window.pageYOffset)) {
    return getDocumentElement(isWindow, elem)[scrollTop];
  } else if (elem.ownerDocument) {
    return elem.ownerDocument.defaultView[pageYOffset];
  } else {
    return elem[offsetTop];
  }
}
function shouldFireScrollEvent(container, distance = {
  down: 0,
  up: 0
}, scrollingDown) {
  let remaining;
  let containerBreakpoint;
  if (container.totalToScroll <= 0) {
    return false;
  }
  const scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
  if (scrollingDown) {
    remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
    const distanceDown = distance?.down ? distance.down : 0;
    containerBreakpoint = distanceDown / 10;
  } else {
    const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
    remaining = container.scrolled / totalHiddenContentHeight;
    const distanceUp = distance?.up ? distance.up : 0;
    containerBreakpoint = distanceUp / 10;
  }
  const shouldFireEvent = remaining <= containerBreakpoint;
  return shouldFireEvent;
}
function isScrollingDownwards(lastScrollPosition, container) {
  return lastScrollPosition < container.scrolled;
}
function getScrollStats(lastScrollPosition, container, distance) {
  const scrollDown = isScrollingDownwards(lastScrollPosition, container);
  return {
    fire: shouldFireScrollEvent(container, distance, scrollDown),
    scrollDown
  };
}
function updateScrollPosition(position, scrollState) {
  return scrollState.lastScrollPosition = position;
}
function updateTotalToScroll(totalToScroll, scrollState) {
  if (scrollState.lastTotalToScroll !== totalToScroll) {
    scrollState.lastTotalToScroll = scrollState.totalToScroll;
    scrollState.totalToScroll = totalToScroll;
  }
}
function isSameTotalToScroll(scrollState) {
  return scrollState.totalToScroll === scrollState.lastTotalToScroll;
}
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
  if (isScrollingDown) {
    scrollState.triggered.down = scroll;
  } else {
    scrollState.triggered.up = scroll;
  }
}
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
  return isScrollingDown ? scrollState.triggered.down === totalToScroll : scrollState.triggered.up === totalToScroll;
}
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
  updateScrollPosition(scrolledUntilNow, scrollState);
  updateTotalToScroll(totalToScroll, scrollState);
  // const isSameTotal = isSameTotalToScroll(scrollState);
  // if (!isSameTotal) {
  //   updateTriggeredFlag(scrollState, false, isScrollingDown);
  // }
}
class ScrollState {
  constructor({
    totalToScroll
  }) {
    this.lastScrollPosition = 0;
    this.lastTotalToScroll = 0;
    this.totalToScroll = 0;
    this.triggered = {
      down: 0,
      up: 0
    };
    this.totalToScroll = totalToScroll;
  }
  updateScrollPosition(position) {
    return this.lastScrollPosition = position;
  }
  updateTotalToScroll(totalToScroll) {
    if (this.lastTotalToScroll !== totalToScroll) {
      this.lastTotalToScroll = this.totalToScroll;
      this.totalToScroll = totalToScroll;
    }
  }
  updateScroll(scrolledUntilNow, totalToScroll) {
    this.updateScrollPosition(scrolledUntilNow);
    this.updateTotalToScroll(totalToScroll);
  }
  updateTriggeredFlag(scroll, isScrollingDown) {
    if (isScrollingDown) {
      this.triggered.down = scroll;
    } else {
      this.triggered.up = scroll;
    }
  }
  isTriggeredScroll(totalToScroll, isScrollingDown) {
    return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
  }
}
function createScroller(config) {
  const {
    scrollContainer,
    scrollWindow,
    element,
    fromRoot
  } = config;
  const resolver = createResolver({
    axis: new AxisResolver(!config.horizontal),
    windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
  });
  const scrollState = new ScrollState({
    totalToScroll: calculatePoints(element, resolver)
  });
  const options = {
    container: resolver.container,
    throttle: config.throttle
  };
  const distance = {
    up: config.upDistance,
    down: config.downDistance
  };
  return attachScrollEvent(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(calculatePoints(element, resolver))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(positionStats => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({
    stats
  }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(({
    fire,
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => {
    scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(toInfiniteScrollAction));
}
function attachScrollEvent(options) {
  let obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(options.container, 'scroll');
  // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
  // Let's avoid calling the function unless needed.
  // Replacing with throttleTime seems to solve the problem
  // See https://github.com/orizens/ngx-infinite-scroll/issues/198
  if (options.throttle) {
    obs = obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.throttleTime)(options.throttle, undefined, {
      leading: true,
      trailing: true
    }));
  }
  return obs;
}
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
  const {
    scrollDown,
    fire
  } = getScrollStats(lastScrollPosition, stats, distance);
  return {
    scrollDown,
    fire,
    stats
  };
}
const InfiniteScrollActions = {
  DOWN: '[NGX_ISE] DOWN',
  UP: '[NGX_ISE] UP'
};
function toInfiniteScrollAction(response) {
  const {
    scrollDown,
    stats: {
      scrolled: currentScrollPosition
    }
  } = response;
  return {
    type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
    payload: {
      currentScrollPosition
    }
  };
}
class InfiniteScrollDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.infiniteScrollDistance = 2;
    this.infiniteScrollUpDistance = 1.5;
    this.infiniteScrollThrottle = 150;
    this.infiniteScrollDisabled = false;
    this.infiniteScrollContainer = null;
    this.scrollWindow = true;
    this.immediateCheck = false;
    this.horizontal = false;
    this.alwaysCallback = false;
    this.fromRoot = false;
  }
  ngAfterViewInit() {
    if (!this.infiniteScrollDisabled) {
      this.setup();
    }
  }
  ngOnChanges({
    infiniteScrollContainer,
    infiniteScrollDisabled,
    infiniteScrollDistance
  }) {
    const containerChanged = inputPropChanged(infiniteScrollContainer);
    const disabledChanged = inputPropChanged(infiniteScrollDisabled);
    const distanceChanged = inputPropChanged(infiniteScrollDistance);
    const shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;
    if (containerChanged || disabledChanged || distanceChanged) {
      this.destroyScroller();
      if (shouldSetup) {
        this.setup();
      }
    }
  }
  setup() {
    if (hasWindowDefined()) {
      this.zone.runOutsideAngular(() => {
        this.disposeScroller = createScroller({
          fromRoot: this.fromRoot,
          alwaysCallback: this.alwaysCallback,
          disable: this.infiniteScrollDisabled,
          downDistance: this.infiniteScrollDistance,
          element: this.element,
          horizontal: this.horizontal,
          scrollContainer: this.infiniteScrollContainer,
          scrollWindow: this.scrollWindow,
          throttle: this.infiniteScrollThrottle,
          upDistance: this.infiniteScrollUpDistance
        }).subscribe(payload => this.handleOnScroll(payload));
      });
    }
  }
  handleOnScroll({
    type,
    payload
  }) {
    const emitter = type === InfiniteScrollActions.DOWN ? this.scrolled : this.scrolledUp;
    if (hasObservers(emitter)) {
      this.zone.run(() => emitter.emit(payload));
    }
  }
  ngOnDestroy() {
    this.destroyScroller();
  }
  destroyScroller() {
    if (this.disposeScroller) {
      this.disposeScroller.unsubscribe();
    }
  }
  static {
    this.ɵfac = function InfiniteScrollDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InfiniteScrollDirective,
      selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
      inputs: {
        infiniteScrollDistance: "infiniteScrollDistance",
        infiniteScrollUpDistance: "infiniteScrollUpDistance",
        infiniteScrollThrottle: "infiniteScrollThrottle",
        infiniteScrollDisabled: "infiniteScrollDisabled",
        infiniteScrollContainer: "infiniteScrollContainer",
        scrollWindow: "scrollWindow",
        immediateCheck: "immediateCheck",
        horizontal: "horizontal",
        alwaysCallback: "alwaysCallback",
        fromRoot: "fromRoot"
      },
      outputs: {
        scrolled: "scrolled",
        scrolledUp: "scrolledUp"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    scrolled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrolledUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    infiniteScrollDistance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    infiniteScrollUpDistance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    infiniteScrollThrottle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    infiniteScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    infiniteScrollContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    immediateCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    horizontal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alwaysCallback: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fromRoot: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
function hasObservers(emitter) {
  // Note: The `observed` property is available only in RxJS@7.2.0, which means it's
  // not available for users running the lower version.
  return emitter.observed ?? emitter.observers.length > 0;
}
class InfiniteScrollModule {
  static {
    this.ɵfac = function InfiniteScrollModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InfiniteScrollModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InfiniteScrollModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [InfiniteScrollDirective],
      exports: [InfiniteScrollDirective],
      imports: [],
      providers: []
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-infinite-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_views_fax-mobile_fax-mobile_module_ts.js.map