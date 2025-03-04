"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_sso_saml-options_saml-options_module_ts"],{

/***/ 83495:
/*!*************************************************!*\
  !*** ./src/app/blocks/services/saml-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAMLService: () => (/* binding */ SAMLService)
/* harmony export */ });
/* harmony import */ var _hydra_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hydra-api.service */ 11070);
/* harmony import */ var file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver/FileSaver */ 10049);
/* harmony import */ var file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34942);









class SAMLService {
  constructor(hydraApi, translate, toastr) {
    this.hydraApi = hydraApi;
    this.translate = translate;
    this.toastr = toastr;
    this.parseIDPMetada = (metadaXML, fileName = '') => {
      const idpEntities = new Array();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(metadaXML, 'text/xml');
      const entitiesTag = xmlDoc.querySelectorAll('EntityDescriptor');
      entitiesTag.forEach(entityDescriptor => {
        const idpTag = entityDescriptor.querySelector('IDPSSODescriptor');
        if (!idpTag) return;
        const idpMetadata = new shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.IDPMetadata();
        idpMetadata.entityId = entityDescriptor.attributes['entityID']?.value;
        let ssoTag = idpTag.querySelector(`SingleSignOnService[Binding="${shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.SamlSsoBinding.HttpPost}"]`);
        if (!ssoTag) ssoTag = idpTag.querySelector(`SingleSignOnService[Binding="${shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.SamlSsoBinding.HttpRedirect}"]`);
        idpMetadata.singleSignOnServiceUrl = ssoTag?.attributes['Location']?.value;
        idpMetadata.singleSignOnServiceBinding = ssoTag?.attributes['Binding']?.value;
        idpMetadata.SingleLogoutService = idpTag.querySelector('SingleLogoutService')?.attributes['Location']?.value;
        const keysTags = idpTag.querySelectorAll('KeyDescriptor');
        idpMetadata.idpSSOKeys = [];
        for (let i = 0; i < keysTags.length; i++) {
          idpMetadata.idpSSOKeys.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_2__.CertificateDetails({
            fileName: `${fileName}/certficate ${i + 1}`,
            contents: keysTags[i].querySelector('X509Certificate').innerHTML.trim(),
            use: keysTags[i].attributes['use']?.value ?? 'signing'
          }));
        }
        idpEntities.push(idpMetadata);
      });
      return idpEntities;
    };
    this.downloadSPMetadata = () => {
      this.hydraApi.getSamlServiceProviderMetadata(file => {
        (0,file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(file, 'metadata.xml');
      }, err => {
        this.toastr.error(this.translate.instant('saml-options.download-metadata'));
      });
    };
  }
  static {
    this.ɵfac = function SAMLService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SAMLService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_hydra_api_service__WEBPACK_IMPORTED_MODULE_0__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: SAMLService,
      factory: SAMLService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 68159:
/*!******************************************************************!*\
  !*** ./src/app/views/sso/saml-options/saml-options.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAMLOptionsComponent: () => (/* binding */ SAMLOptionsComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_services_saml_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/saml-service */ 83495);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
















const _c0 = () => ({
  suppressScrollY: false
});
function SAMLOptionsComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 35)(1, "td", 36)(2, "app-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function SAMLOptionsComponent_tr_42_Template_app_field_valueChange_2_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](item_r5.fileName, $event) || (item_r5.fileName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 36)(4, "app-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function SAMLOptionsComponent_tr_42_Template_app_field_valueChange_4_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](item_r5.contents, $event) || (item_r5.contents = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 38)(6, "div", 39)(7, "app-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function SAMLOptionsComponent_tr_42_Template_app_field_valueChange_7_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](item_r5.use, $event) || (item_r5.use = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 40)(9, "div", 41)(10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAMLOptionsComponent_tr_42_Template_i_click_10_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.deleteCertificate(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r6.createField());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", item_r5.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r6.createField());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", item_r5.contents);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r6.createField(ctx_r6.MetaDataType.List, ctx_r6.keyTypesDataSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", item_r5.use);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "certificates-delete-", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 11, "Metadata-Form.item-delete"));
  }
}
class SAMLOptionsComponent {
  get currentIDP() {
    return this.idpList.find(x => x.entityId == this.selectedIDPEntityId);
  }
  constructor(translateService, toastr, samlService, ngxSmartModalService) {
    this.translateService = translateService;
    this.toastr = toastr;
    this.samlService = samlService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.MetaDataType = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType;
    this.idpList = [];
    this.idpMetadataDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource();
    this.createFields = () => {
      this.fieldIdpName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('saml-options.idp.name'),
        placeholder: this.translateService.instant('saml-options.idp.name'),
        required: true
      });
      this.fieldIdpSsoUrl = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('saml-options.idp.sso-url'),
        placeholder: this.translateService.instant('saml-options.idp.sso-url'),
        required: true
      });
      this.fieldIdpSsoBinding = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('saml-options.idp.sso-binding'),
        placeholder: this.translateService.instant('saml-options.idp.sso-binding'),
        required: true,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SamlSsoBinding, 'SamlSsoBindingEnum', this.translateService)
      });
      const keyTypesOptions = [{
        name: this.translateService.instant('saml-options.idp.signing'),
        value: 'signing'
      }, {
        name: this.translateService.instant('saml-options.idp.encryption'),
        value: 'encryption'
      }];
      this.keyTypesDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(keyTypesOptions);
      this.fieldidpMetadata = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('saml-options.idp.title'),
        placeholder: this.translateService.instant('saml-options.idp.title'),
        required: true,
        datasource: this.idpMetadataDataSource
      });
      this.fieldCurrentIdpSsoUrl = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('saml-options.idp.sso-url'),
        placeholder: '',
        required: false
      });
      this.fieldCurrentIdpSsoBinding = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('saml-options.idp.sso-binding'),
        placeholder: '',
        required: false,
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SamlSsoBinding, 'SamlSsoBindingEnum', this.translateService)
      });
    };
    this.setIDPMetadata = idpMetadata => {
      this.idpSettings.name = idpMetadata.entityId;
      this.idpSettings.singleSignOnServiceUrl = idpMetadata.singleSignOnServiceUrl;
      this.idpSettings.singleSignOnServiceBinding = idpMetadata.singleSignOnServiceBinding;
      this.idpSettings.partnerCertificates = idpMetadata.idpSSOKeys.map(x => new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CertificateDetails({
        fileName: x.fileName,
        contents: x.string,
        use: x.use
      }));
    };
    this.selectCurrentIDPMetadata = () => {
      this.setIDPMetadata(this.currentIDP);
      this.ngxSmartModalService.close('idpList');
    };
    this.showIDPListDialog = () => {
      this.selectedIDPEntityId = '';
      const options = [];
      for (let idp of this.idpList) {
        options.push({
          name: idp.entityId,
          value: idp.entityId
        });
      }
      this.idpMetadataDataSource.updateOptions(options);
      this.ngxSmartModalService.open('idpList');
    };
    this.downloadServiceProviderMetadata = event => {
      event.preventDefault();
      this.samlService.downloadSPMetadata();
    };
    this.deleteCertificate = index => this.idpSettings.partnerCertificates.splice(index, 1);
    this.deleteAllCertificates = () => this.idpSettings.partnerCertificates = [];
    this.createField = (type = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text, datasource = null) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: type,
        label: '',
        placeholder: '',
        required: true,
        datasource: datasource,
        hideLabel: true
      });
    };
  }
  ngOnInit() {
    this.createFields();
  }
  handleFileSelect(event) {
    if (!event.target.files || !event.target.files.length) return;
    for (const file of event.target.files) {
      if (!file) return;
      var reader = new FileReader();
      reader.onload = event => {
        this.idpSettings.partnerCertificates.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CertificateDetails({
          contents: event.target.result,
          fileName: file.name,
          use: 'signing'
        }));
      };
      reader.onerror = err => {
        this.toastr.error(this.translateService.instant('saml-options.idp.invalid-certificate'));
        _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('SAMLOptionsComponent.handleFileSelect', err);
      };
      reader.readAsText(file);
    }
  }
  handleIDPMetadataFileSelect(event) {
    if (!event.target.files || !event.target.files.length) return;
    const file = event.target.files[0];
    var reader = new FileReader();
    const that = this;
    reader.onload = () => {
      this.idpList = this.samlService.parseIDPMetada(reader.result, file.name);
      if (this.idpList.length == 0) {
        this.toastr.warning(this.translateService.instant('saml-options.idp.metadata-no-idp-settings'));
        return;
      }
      if (this.idpList.length == 1) {
        this.setIDPMetadata(this.idpList[0]);
        return;
      }
      this.showIDPListDialog();
    };
    reader.onerror = err => {
      this.toastr.error(this.translateService.instant('saml-options.idp-metadata-load-fail'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('SAMLOptionsComponent.handleIDPMetadataFileSelect', err);
    };
    reader.readAsText(file);
  }
  static {
    this.ɵfac = function SAMLOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SAMLOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blocks_services_saml_service__WEBPACK_IMPORTED_MODULE_1__.SAMLService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__.NgxSmartModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: SAMLOptionsComponent,
      selectors: [["app-saml-options"]],
      inputs: {
        idpSettings: "idpSettings"
      },
      decls: 67,
      vars: 57,
      consts: [["idpMetadataInput", ""], ["certificateInput", ""], ["idpList", ""], [1, "row", "p-0", "m-0"], [1, "col-6", "p-0", "col"], [1, "col", "p-0"], [3, "valueChange", "field", "value"], [1, "col", "p-0", "col-6"], ["type", "file", "name", "idpMetadataInput", "accept", ".xml", "id", "modal-btn-chose-file", 2, "display", "none", 3, "change"], [1, "btn", "btn-secondary", "btn-idp-metadata", "ml-4", 3, "click"], [1, "ml-3", "idp-sso-binding-wrapper"], [1, "col", "p-0", "certificate-field"], [1, "mt-2", "mb-1", "d-flex"], [1, "certificate-file-label", "flex-grow-1", 3, "localize", "required", "text"], ["type", "file", "name", "certificateFile", "accept", ".cer,.cert, .pfx, .pem", "id", "modal-btn-chose-file", "multiple", "true", 2, "display", "none", 3, "change"], [1, "btn", "btn-primary", 3, "click"], [1, "table", "mt-0", "pl-1", "certificates-table"], ["width", "31%", 1, "table__th-content", "pl-0"], [1, "ml-3"], ["width", "30%", 1, "table__th-content", "pl-0"], [1, "table__th-control", "action-th", "delete-all"], [1, "text-center", "pb-2"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title"], ["fxFlex", "auto", 1, "table__body", "ps", "col", "p-0", 3, "perfectScrollbar"], ["class", "table__table-row", 4, "ngFor", "ngForOf"], [1, "col", "p-0", "mt-3", "pt-1", "hint"], ["href", "#", 3, "click"], ["href", "/api/saml/DownloadCertificate", "target", "_self"], ["identifier", "idpList", 3, "closable", "escapable", "dismissable"], [3, "title"], [1, "idp-list"], [3, "field", "value", "disabled"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-minwidth", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-minwidth", "btn-primary", 3, "click", "disabled"], [1, "table__table-row"], ["width", "31%", 1, "table__cell", 2, "cursor", "default !important"], [3, "valueChange", "field", "value", "disabled"], ["width", "30%", 1, "table__cell", 2, "cursor", "default !important"], [1, "table__cell-content"], [1, "table__control-cell", "p-1", "d-flex", "h-100", "align-items-center", "justify-content-center", 2, "cursor", "default !important"], [1, "delete-certificate"], [1, "icomoon-delete", "status", 2, "cursor", "pointer", 3, "click", "title", "id"]],
      template: function SAMLOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "app-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function SAMLOptionsComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.idpSettings.name, $event) || (ctx.idpSettings.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 5)(5, "app-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function SAMLOptionsComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.idpSettings.singleSignOnServiceUrl, $event) || (ctx.idpSettings.singleSignOnServiceUrl = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 7)(7, "input", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function SAMLOptionsComponent_Template_input_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.handleIDPMetadataFileSelect($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAMLOptionsComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            const idpMetadataInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](idpMetadataInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "app-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function SAMLOptionsComponent_Template_app_field_valueChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.idpSettings.singleSignOnServiceBinding, $event) || (ctx.idpSettings.singleSignOnServiceBinding = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "app-label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "input", 14, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function SAMLOptionsComponent_Template_input_change_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.handleFileSelect($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAMLOptionsComponent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            const certificateInput_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](18);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](certificateInput_r3.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "table", 16)(23, "thead")(24, "tr")(25, "th", 17)(26, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th", 17)(30, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "th", 19)(34, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "th", 20)(38, "div", 21)(39, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAMLOptionsComponent_Template_i_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.deleteAllCertificates());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "tbody", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, SAMLOptionsComponent_tr_42_Template, 12, 13, "tr", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 25)(44, "div")(45, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAMLOptionsComponent_Template_a_click_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.downloadServiceProviderMetadata($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div")(49, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ngx-smart-modal", 28, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "app-modal-header", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 30)(57, "app-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function SAMLOptionsComponent_Template_app_field_valueChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedIDPEntityId, $event) || (ctx.selectedIDPEntityId = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "app-field", 31)(59, "app-field", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 32)(61, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAMLOptionsComponent_Template_button_click_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            const idpList_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](53);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](idpList_r8.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](63, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SAMLOptionsComponent_Template_button_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.selectCurrentIDPMetadata());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldIdpName);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.idpSettings.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldIdpSsoUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.idpSettings.singleSignOnServiceUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 34, "saml-options.import-idp-metadata"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldIdpSsoBinding);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.idpSettings.singleSignOnServiceBinding);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("localize", true)("required", true)("text", "saml-options.idp.certificates");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 36, "Common.Add"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 38, "saml-options.idp.certificate-filename"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 40, "saml-options.idp.certificate-content"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 42, "saml-options.idp.certificate-use"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 44, "saml-options.idp.certificate-delete-all"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](56, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.idpSettings.partnerCertificates);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 46, "saml-options.download-metadata"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 48, "saml-options.download-certificate"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("closable", true)("escapable", true)("dismissable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 50, "saml-options.idp.select-idp-to-import"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldidpMetadata);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.selectedIDPEntityId);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldCurrentIdpSsoUrl)("value", ctx.currentIDP == null ? null : ctx.currentIDP.singleSignOnServiceUrl)("disabled", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldCurrentIdpSsoBinding)("value", ctx.currentIDP == null ? null : ctx.currentIDP.singleSignOnServiceBinding)("disabled", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](63, 52, "Common.Cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedIDPEntityId);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](66, 54, "Common.ok"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__.ModalHeaderComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_5__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: [".hint[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(128, 128, 128, 0.3803921569);\n  color: gray;\n  font-style: italic;\n  font-size: small;\n  margin-left: 5px;\n}\n\n.idp-list[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n\n.btn-idp-metadata[_ngcontent-%COMP%] {\n  margin-top: 33px;\n}\n\n.certificate-field[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.certificates-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 12px 0;\n}\n.certificates-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  background-color: #f1f3f3;\n}\n.certificates-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.certificates-table[_ngcontent-%COMP%]   .delete-certificate[_ngcontent-%COMP%], \n.certificates-table[_ngcontent-%COMP%]   .delete-all[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding-top: 12px;\n}\n.certificates-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n  padding-top: 1px !important;\n  padding-bottom: 1px !important;\n}\n\n.idp-sso-binding-wrapper[_ngcontent-%COMP%] {\n  width: 210px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3Mvc3NvL3NhbWwtb3B0aW9ucy9zYW1sLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1REFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFBSjtBQUdFOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFNQTtFQUNFLFlBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5oaW50IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzgwODA4MDYxO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pZHAtbGlzdCB7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5idG4taWRwLW1ldGFkYXRhIHtcclxuICBtYXJnaW4tdG9wOiAzM3B4O1xyXG59XHJcblxyXG4uY2VydGlmaWNhdGUtZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2F0ZXMtdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2YzO1xyXG4gIH1cclxuXHJcbiAgdHIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5kZWxldGUtY2VydGlmaWNhdGUsXHJcbiAgLmRlbGV0ZS1hbGwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaWRwLXNzby1iaW5kaW5nLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 74942:
/*!***************************************************************!*\
  !*** ./src/app/views/sso/saml-options/saml-options.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAMLOptionsModule: () => (/* binding */ SAMLOptionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-file-drop */ 78552);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _saml_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saml-options.component */ 68159);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);









class SAMLOptionsModule {
  static {
    this.ɵfac = function SAMLOptionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SAMLOptionsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SAMLOptionsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__.NgxFileDropModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.LabelModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SAMLOptionsModule, {
    declarations: [_saml_options_component__WEBPACK_IMPORTED_MODULE_0__.SAMLOptionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__.NgxFileDropModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.LabelModule],
    exports: [_saml_options_component__WEBPACK_IMPORTED_MODULE_0__.SAMLOptionsComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_sso_saml-options_saml-options_module_ts.js.map