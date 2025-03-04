"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-device_admin-device_module_ts"],{

/***/ 40699:
/*!*******************************************************************!*\
  !*** ./src/app/views/admin-device/admin-device-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDeviceRoutingModule: () => (/* binding */ AdminDeviceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_device_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-device.component */ 39259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'duplicate/:deviceid',
  component: _admin_device_component__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: ':tenantId/duplicate/:deviceid',
  component: _admin_device_component__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: 'create',
  component: _admin_device_component__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':tenantId/create',
  component: _admin_device_component__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':deviceid',
  component: _admin_device_component__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}, {
  path: ':tenantId/properties/:deviceid',
  component: _admin_device_component__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminDeviceRoutingModule {
  static {
    this.ɵfac = function AdminDeviceRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminDeviceRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminDeviceRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminDeviceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98650:
/*!***********************************************************!*\
  !*** ./src/app/views/admin-device/admin-device.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDeviceModule: () => (/* binding */ AdminDeviceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _admin_device_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-device-routing.module */ 40699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blocks/components/components.module */ 68876);
/* harmony import */ var _admin_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-device.component */ 39259);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);








class AdminDeviceModule {
  static {
    this.ɵfac = function AdminDeviceModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminDeviceModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AdminDeviceModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_device_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminDeviceModule, {
    declarations: [_admin_device_component__WEBPACK_IMPORTED_MODULE_3__.AdminDeviceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_device_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminDeviceRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-device_admin-device_module_ts.js.map