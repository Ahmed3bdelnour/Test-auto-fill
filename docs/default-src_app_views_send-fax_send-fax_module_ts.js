"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_send-fax_send-fax_module_ts"],{

/***/ 68926:
/*!***********************************************************************!*\
  !*** ./src/app/views/send-fax/details-form/details-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsFormComponent: () => (/* binding */ DetailsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_components_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/components/html-editor/html-editor.component */ 74728);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/send-fax.service */ 16665);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _blocks_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/components/file-upload/file-upload.component */ 72080);
/* harmony import */ var _Bamba_Shared_src_fax_submission_ui_fax_recipients_fax_recipients_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fax-submission-ui/fax-recipients/fax-recipients.component */ 78116);



























const _c0 = ["editor"];
function DetailsFormComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "app-html-editor", 17, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("valueChange", function DetailsFormComponent_ng_container_20_Template_app_html_editor_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.textEditorChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("localize", true)("text", "SendFax-Details-Form.Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("initialValue", ctx_r1.initialMessage)("placeholder", ctx_r1.editorPlaceHolderText)("substitutions", ctx_r1.substitutions)("showFontType", !ctx_r1.isFaxMobile)("showFontSize", !ctx_r1.isFaxMobile)("showClearFormatting", !ctx_r1.isFaxMobile)("showJustifyText", !ctx_r1.isFaxMobile)("showOrderedList", !ctx_r1.isFaxMobile)("showDecreaseIndent", !ctx_r1.isFaxMobile)("showIncreaseIndent", !ctx_r1.isFaxMobile)("showImage", !ctx_r1.isFaxMobile)("showBarcode", !ctx_r1.isFaxMobile)("showTableOptions", !ctx_r1.isFaxMobile)("showUndoAndRedo", ctx_r1.isFaxMobile)("isMobile", ctx_r1.isFaxMobile)("height", ctx_r1.isFaxMobile ? "200px" : "250px")("disabled", (ctx_r1.formData.coverPage == null ? null : ctx_r1.formData.coverPage.type) === 2 || (ctx_r1.formData.coverPage == null ? null : ctx_r1.formData.coverPage.type) === 1 && !(ctx_r1.formData.coverPage == null ? null : ctx_r1.formData.coverPage.coverpageBodyType));
  }
}
function DetailsFormComponent_app_field_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function DetailsFormComponent_app_field_21_Template_app_field_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.formData.message, $event) || (ctx_r1.formData.message = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DetailsFormComponent_app_field_21_Template_app_field_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.plainTextEditorChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.fieldMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.formData.message);
  }
}
class DetailsFormComponent {
  set content(content) {
    if (content) {
      this.editor = content;
      this.formData.hasHtmlValue = content.hasHtmlValue;
    }
  }
  constructor(translate, userStateService, spinnerStateService, interFAXService, sessionStorageService, toastr, printToService, sendFaxService) {
    this.translate = translate;
    this.userStateService = userStateService;
    this.spinnerStateService = spinnerStateService;
    this.interFAXService = interFAXService;
    this.sessionStorageService = sessionStorageService;
    this.toastr = toastr;
    this.printToService = printToService;
    this.sendFaxService = sendFaxService;
    this.recipientsField = 'recipients';
    this.sendfaxModel = 'SendFax';
    this.filesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.recipientsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.recipient = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Individual('', '', '', '');
    this.contactTypes = [{
      value: 'ContactList',
      name: 'Contact List'
    }, {
      value: 'Individual',
      name: 'Individual'
    }];
    this.groups = [{
      value: 'Interfax',
      name: 'Interfax'
    }, {
      value: 'Bamba',
      name: 'Bamba'
    }];
    this.showIndividualRecipientModalBody = false;
    this.dialogState = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.recipientDialogState.New;
    this.selectedContactLists = [];
    this.supportContactLists = false;
    this.contactLists = [];
    this.showContactListModal = false;
    this.defaultCoverPage = null;
    this.isFaxMobile = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    this.createFields = () => {
      this.fieldCoverPage = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('SendFax-Details-Form.Cover-Page'),
        placeholder: this.translate.instant('SendFax-Details-Form.Cover-Page'),
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPagesDataSource(this.interFAXService, this.translate, this.userStateService.interFAXUsername),
        defaultValue: '0'
      });
      this.fieldMessage = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.LargeText,
        label: this.translate.instant('SendFax-Details-Form.Message'),
        placeholder: this.translate.instant('SendFax-Details-Form.Message'),
        autosizeMinRows: 10,
        scrollHeight: '192px'
      });
    };
    this.resetHtmlEditor = () => {
      this.editor.setValue('');
      this.initialMessage = '';
      this.editor.setFontType(this.editor.getDefaultFontType(), false);
      this.editor.setFontSize(this.editor.getDefaultFontSizePx(), false);
    };
    this.textEditorChange = value => {
      this.formData.message = value;
      this.validateForm();
    };
    this.plainTextEditorChanged = value => {
      this.formData.message = value;
      this.validateForm();
    };
    this.onRecipientsChanged = recipients => {
      this.formData.recipients = recipients;
      this.recipientsChanged.emit();
    };
    this.onCoverPageChanged = value => {
      if (!this.isCoverPageIdValid(value)) {
        this.initialMessage = this.formData.message;
        this.clearSelectedCoverPage();
        return;
      }
      this.interFAXService.getUserCoverPage(+value, this.onCoverPageLoaded, this.onCoverPageLoadFailed);
    };
    this.onCoverPageLoaded = coverPage => {
      this.formData.coverPageId = coverPage.id;
      this.formData.coverPage = coverPage;
      this.retainUserInput();
      this.validateForm();
    };
    this.onCoverPageLoadFailed = err => {
      this.clearSelectedCoverPage();
      if (err.status == 404) return;
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_2__.Log.error('cover-page.load-cover-page-failed', err);
      this.toastr.error(this.translate.instant('cover-page.load-cover-page-failed'));
    };
    this.retainUserInput = () => {
      if (this.formData.message.length) {
        if (this.formData.coverPage.coverpageBodyType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType.Text) this.formData.message = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Strings.HtmlToText(this.formData.message);
        if (this.formData.coverPage.coverpageBodyType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType.Html) this.initialMessage = this.formData.message;
        if (this.formData.coverPage.coverpageBodyType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType.None) this.initialMessage = this.editor.value = this.formData.message = '';
      }
    };
  }
  ngOnInit() {
    this.refocusFaxRecipients$ = this.sendFaxService.sendFormDiscarded$;
    if (this.printToService.isPrintToMode && !this.printToService.isInitialized) this.printToService.initialize();
    this.isFaxMobile = this.sessionStorageService.getIsInterFaxMobile();
    this.subscriptions.add(this.sessionStorageService.onIsInterFaxMobileChanged.subscribe(x => this.isFaxMobile = x));
    this.supportedFiles = this.userStateService.userProfile.fax.fileTypes.join(', ').toUpperCase();
    this.editorPlaceHolderText = this.translate.instant('SendFax-Details-Form.AnyContentEnteredSendAsPage');
    this.supportContactLists = !this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PCI) && this.userStateService.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.RolePermissions.INTERFAX_PERMISSIONS_ALLOWCONTACTLISTS);
    if (this.supportContactLists) {
      this.subscriptions.add(this.interFAXService.getContactLists(cls => this.contactLists = cls, err => this.contactLists = []));
    }
    this.initialMessage = '';
    if (this.formData) {
      this.initialMessage = this.formData.message;
      this.subscriptions.add(this.formData.onFormClear.subscribe(() => {
        this.resetHtmlEditor();
        if (this.defaultCoverPage) {
          this.formData.coverPageId = this.defaultCoverPage.id;
          this.onCoverPageLoaded(this.defaultCoverPage);
        } else {
          this.clearSelectedCoverPage();
        }
      }));
      if (shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Strings.notEmpty(this.formData.chipText)) {
        this.formData.recipients.push({
          display: this.formData.chipText,
          value: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Individual('', this.formData.chipText, '', '')
        });
        this.formData.chipText = '';
      }
    }
    this.createFields();
    this.loadDefaultCoverPage();
  }
  loadDefaultCoverPage() {
    const defaultCoverPageSettings = this.userStateService.userProfile.fax.advancePageSetting.find(x => x.name == 'CoverPageId');
    let defaultCoverPageId = defaultCoverPageSettings?.value ? parseInt(defaultCoverPageSettings.value).toString() : '0';
    if (!this.isCoverPageIdValid(defaultCoverPageId)) return;
    this.interFAXService.getUserCoverPage(+defaultCoverPageId, coverPage => {
      this.defaultCoverPage = coverPage;
      this.onCoverPageLoaded(coverPage);
    }, () => {
      this.defaultCoverPage = null;
      this.clearSelectedCoverPage();
    });
  }
  onFilesChange() {
    this.filesChanged.emit();
  }
  isCoverPageIdValid(value) {
    const parsedValue = Number.parseInt(value, 10);
    return !isNaN(parsedValue) && parsedValue > 0;
  }
  clearSelectedCoverPage() {
    this.formData.coverPage = null;
    this.formData.coverPageId = '0';
    this.validateForm();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function DetailsFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_3__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PrintToService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_4__.SendFaxService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: DetailsFormComponent,
      selectors: [["app-details-form"]],
      viewQuery: function DetailsFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        formData: "formData",
        validateForm: "validateForm",
        substitutions: "substitutions"
      },
      outputs: {
        filesChanged: "filesChanged",
        recipientsChanged: "recipientsChanged"
      },
      decls: 23,
      vars: 33,
      consts: [["editor", ""], [1, "upload-form", "sendfax-form"], [1, "2columns-1", "fax-form"], [1, "inner"], [1, "inner-column-1"], ["appAutoFocusFirstInput", "", 3, "onChanged", "triggerRefocus", "chipText", "recipients", "spinnerService", "interfaxService", "validateForm", "title", "showSendAfterContactListsWarningToast", "contactLists"], [1, "inner-column-2"], [3, "localize", "text"], ["type", "text", "name", "subject", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "m-0"], [1, "pt-0"], [3, "valueChange", "fieldChanged", "field", "value"], [1, "inner-column-2", "d-flex", "align-items-end"], [1, "column-1", "w-100"], [4, "ngIf"], [3, "field", "value", "valueChange", "blur", 4, "ngIf"], ["appFileUpload", "", 1, "column-3", 3, "filesChanged", "supportedFiles", "isRequired", "formData", "field", "validateForm", "uploadControlLabel"], [3, "valueChange", "initialValue", "placeholder", "substitutions", "showFontType", "showFontSize", "showClearFormatting", "showJustifyText", "showOrderedList", "showDecreaseIndent", "showIncreaseIndent", "showImage", "showBarcode", "showTableOptions", "showUndoAndRedo", "isMobile", "height", "disabled"], [3, "valueChange", "blur", "field", "value"]],
      template: function DetailsFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "app-fax-recipients", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onChanged", function DetailsFormComponent_Template_app_fax_recipients_onChanged_4_listener($event) {
            return ctx.onRecipientsChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 6)(6, "ul")(7, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "app-label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function DetailsFormComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.formData.subject, $event) || (ctx.formData.subject = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "ul", 9)(14, "li", 10)(15, "app-field", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function DetailsFormComponent_Template_app_field_valueChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.formData.coverPageId, $event) || (ctx.formData.coverPageId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("fieldChanged", function DetailsFormComponent_Template_app_field_fieldChanged_15_listener($event) {
            return ctx.onCoverPageChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 12)(17, "ul", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, DetailsFormComponent_ng_container_20_Template, 4, 19, "ng-container", 14)(21, DetailsFormComponent_app_field_21_Template, 1, 2, "app-field", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("filesChanged", function DetailsFormComponent_Template_div_filesChanged_22_listener() {
            return ctx.onFilesChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("fax-mobile", ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("pr-4", !ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("triggerRefocus", ctx.refocusFaxRecipients$)("chipText", ctx.formData.chipText)("recipients", ctx.formData.recipients)("spinnerService", ctx.spinnerStateService)("interfaxService", ctx.interFAXService)("validateForm", ctx.validateForm)("title", "SendFax-Details-Form.Recipients")("showSendAfterContactListsWarningToast", ctx.formData == null ? null : ctx.formData.faxPageSettings == null ? null : ctx.formData.faxPageSettings.sendAfter)("contactLists", ctx.contactLists);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("localize", true)("text", "SendFax-Details-Form.Subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.subject);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 31, "SendFax-Details-Form.AssignSubject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("pr-4", !ctx.isFaxMobile)("cover-page-mobile", ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx.fieldCoverPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx.formData.coverPageId);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.formData.coverPage || !(ctx.formData.coverPage.type === 1 && ctx.formData.coverPage.coverpageBodyType === 1));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formData.coverPage && ctx.formData.coverPage.type === 1 && ctx.formData.coverPage.coverpageBodyType === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("supportedFiles", ctx.supportedFiles)("isRequired", false)("formData", ctx.formData)("field", "attachedItems")("validateForm", ctx.validateForm)("uploadControlLabel", "SendFax-Details-Form.AddFilesToFax");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_7__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_8__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_9__.LabelComponent, _blocks_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__.FileUploadComponent, _blocks_components_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_1__.HtmlEditorComponent, _Bamba_Shared_src_fax_submission_ui_fax_recipients_fax_recipients_component__WEBPACK_IMPORTED_MODULE_11__.FaxRecipientsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.upload-form {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: 12px;\n  min-width: 988px;\n  border-radius: 2px;\n}\n.upload-form div[class^=\"2columns\"] > ul,\n.upload-form div[class^=column] > ul,\n.upload-form div[class^=inner-column] > ul {\n  padding: 0;\n  margin-right: 24px;\n  min-width: 300px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li,\n.upload-form div[class^=column] > ul > li,\n.upload-form div[class^=inner-column] > ul > li {\n  list-style: none;\n  padding-top: 12px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li label,\n.upload-form div[class^=column] > ul > li label,\n.upload-form div[class^=inner-column] > ul > li label {\n  font-size: 12px;\n  color: hsl(0, 0%, 43%);\n  margin-bottom: 4px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li label.required,\n.upload-form div[class^=column] > ul > li label.required,\n.upload-form div[class^=inner-column] > ul > li label.required {\n  font-weight: 600;\n}\n.upload-form div[class^=\"2columns\"] > ul > li input:not(input[type=checkbox]),\n.upload-form div[class^=\"2columns\"] > ul > li .drop-down .form-control,\n.upload-form div[class^=column] > ul > li input:not(input[type=checkbox]),\n.upload-form div[class^=column] > ul > li .drop-down .form-control,\n.upload-form div[class^=inner-column] > ul > li input:not(input[type=checkbox]),\n.upload-form div[class^=inner-column] > ul > li .drop-down .form-control {\n  width: 100%;\n  border-radius: 2px;\n  background-color: #ffffff;\n  padding: 2px;\n  padding-inline-start: 10px;\n  font-size: 12px;\n  height: 32px;\n  text-align: start;\n}\n.upload-form div[class^=\"2columns\"] > ul > li .drop-down .form-control,\n.upload-form div[class^=column] > ul > li .drop-down .form-control,\n.upload-form div[class^=inner-column] > ul > li .drop-down .form-control {\n  padding-inline-start: 7px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control,\n.upload-form div[class^=column] > ul > li div.form-control,\n.upload-form div[class^=inner-column] > ul > li div.form-control {\n  height: 100%;\n  padding: 0;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control tag-input,\n.upload-form div[class^=column] > ul > li div.form-control tag-input,\n.upload-form div[class^=inner-column] > ul > li div.form-control tag-input {\n  width: 100%;\n  height: 100%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input {\n  padding: 0px;\n  min-height: 28px !important;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container {\n  min-height: 30px;\n  overflow: hidden;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form {\n  margin: 0;\n  height: 100%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form input,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form input,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form input {\n  height: 100%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input tag,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input tag,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input tag {\n  height: 24px;\n  line-height: 24px;\n  border-radius: 4px;\n  font-size: 11px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input tag delete-icon span,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input tag delete-icon span,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input tag delete-icon span {\n  padding-left: 2px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input tag-input-form form input {\n  position: relative;\n  border: none;\n  border-width: 0;\n  box-shadow: none;\n  height: 24px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type,\n.upload-form div[class^=column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type,\n.upload-form div[class^=inner-column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type {\n  margin-left: 21%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type ~ tag-input-form form input,\n.upload-form div[class^=column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type ~ tag-input-form form input,\n.upload-form div[class^=inner-column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type ~ tag-input-form form input {\n  margin-left: 2%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.combo div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=column] > ul > li div.combo div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=inner-column] > ul > li div.combo div.form-control div.ng2-tag-input tag-input-form form input {\n  margin-left: 50%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li .form-control,\n.upload-form div[class^=column] > ul > li .form-control,\n.upload-form div[class^=inner-column] > ul > li .form-control {\n  height: 32px;\n}\n.upload-form div[class^=column] {\n  flex: 1;\n}\n.upload-form div[class^=\"2columns\"] {\n  flex: 2;\n}\n.upload-form div[class^=\"2columns\"] .inner {\n  display: flex;\n}\n.upload-form div[class^=\"2columns\"] .inner div[class^=inner-column] {\n  flex: 1;\n}\n.upload-form div.column-3 > ul {\n  margin-right: 12px;\n}\n.upload-form div.combo {\n  position: relative;\n}\n.upload-form div.combo div[class^=inner-column] > ul > li tag-input {\n  display: inline;\n}\n.upload-form div.combo div.dropdown.dd-add-delete {\n  float: left;\n  width: 20%;\n  max-height: 32px;\n}\n.upload-form div.combo div.dropdown.dd-add-delete.dropdown-menu-right.selectable {\n  z-index: 1;\n}\n.upload-form div.combo .nav-right .dropdown-menu,\n.upload-form div.combo .dropdown-menu.pull-right {\n  right: auto;\n  left: auto;\n}\n.upload-form ul li span.asterisk {\n  font-weight: 600;\n  color: #197b30;\n}\n\n.sendfax-form .is-open > .dropdown-menu {\n  display: block;\n}\n.sendfax-form .dd-add-delete .dd-body {\n  display: block;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.sendfax-form .btn.sg-select.dd-menu-w.dd-menu-vd {\n  width: 100%;\n  height: 32px;\n  text-align: left;\n  padding-left: 12px;\n}\n.sendfax-form .dropdown .dd-menu-vd {\n  background: #f1f3f3;\n}\n.sendfax-form .dropdown.is-open .dd-menu-vd {\n  background: var(--brand-primary-color);\n}\n.sendfax-form .dropdown.dd-add-delete {\n  width: 100%;\n  height: 32px;\n}\n.sendfax-form .dropdown.dd-add-delete span {\n  width: 100%;\n  text-align: left;\n  background: none;\n}\n.sendfax-form .dropdown.is-open .dd-menu-vd .dd-val {\n  background: none;\n}\n.sendfax-form .is-open .dd-menu-w .caret {\n  color: #fff !important;\n  transform: rotate(180deg);\n}\n.sendfax-form .dd-menu-w .caret {\n  color: var(--brand-primary-color) !important;\n  transform: rotate(0deg);\n}\n.sendfax-form .checkbox.clearfix {\n  height: 55px;\n  margin: auto;\n  background: #f1f3f3;\n  padding-left: 5%;\n}\n.sendfax-form .checkbox.clearfix .check-label {\n  padding-top: 15px;\n}\n.sendfax-form .dropdown-menu__list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.sendfax-form .dropdown-menu__item {\n  cursor: pointer;\n  background-color: #fff;\n}\n.sendfax-form .dropdown-menu__item:hover {\n  background-color: var(--brand-secondary-color);\n}\n.sendfax-form .dropdown-menu__list .dropdown-menu__item-link {\n  display: block;\n  padding-left: 10px;\n  line-height: 34px;\n  text-decoration: none;\n  width: 167px;\n  height: 34px;\n  color: #151515;\n}\n.sendfax-form .column-1 {\n  padding-top: 12px;\n  padding-inline-end: 24px;\n  margin-bottom: 16px;\n}\n.sendfax-form.fax-mobile {\n  flex-direction: column;\n  flex-wrap: nowrap;\n  margin: 0;\n  padding: 0;\n  width: calc(100vw - 30px);\n  min-width: 0;\n}\n.sendfax-form.fax-mobile .inner {\n  flex-direction: column;\n}\n.sendfax-form.fax-mobile .column-1 {\n  padding: 0px;\n}\n.sendfax-form.fax-mobile .fax-form,\n.sendfax-form.fax-mobile .column-3 {\n  max-width: calc(100vw - 20px);\n}\n.sendfax-form.fax-mobile .fax-recipient > ul {\n  margin-right: 0;\n}\n.sendfax-form.fax-mobile div[class^=inner-column] > ul {\n  margin-right: 0px;\n}\n.sendfax-form.fax-mobile div[class^=inner-column] > ul li {\n  padding-top: 0px;\n}\n.sendfax-form.fax-mobile .field {\n  margin: 0px;\n}\n.sendfax-form.fax-mobile .cover-page-mobile {\n  margin-bottom: 16px;\n}\n.sendfax-form.fax-mobile .fax-recipient > ul > li {\n  padding-top: 0px;\n}\n.sendfax-form.fax-mobile .file-upload.fax-mobile {\n  margin-top: 0px;\n}\n.sendfax-form.fax-mobile div[class^=\"2columns\"],\n.sendfax-form.fax-mobile div[class^=column] {\n  flex: unset;\n}\n\n.rtl .dropdown-menu {\n  left: -105px;\n}\n\n.rtl .sendfax-form .dropdown-menu__list .dropdown-menu__item-link {\n  padding-right: 5px;\n}\n\n.fax-form {\n  max-width: 60vw;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL3NlbmQtZmF4L2RldGFpbHMtZm9ybS9kZXRhaWxzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy91cGxvYWQtZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBbUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUVBOzs7O0VBSUUsdURBQUE7RUFDQSxtREFBQTtBQ25DRjs7QUQyREU7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ3pESjtBRCtESTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUM3RE47QURnRUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDOUROO0FEaUVJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQy9ETjtBRGtFSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoRU47QUQrQ0k7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDN0NOO0FEZ0RJO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQzlDTjtBRGlESTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUMvQ047QURrREk7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDaEROO0FEK0JJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQzdCTjtBRGdDSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUM5Qk47QURpQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDL0JOO0FEa0NJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2hDTjtBRGVJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hCTjtBRERJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ0dOO0FEQUk7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDRU47QURDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FOO0FEakJJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQ21CTjtBRGhCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNrQk47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNpQk47QURkSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNnQk47QURYSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNhTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lCTjtBRG5CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQk47QUR2Qkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUJOO0FEM0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZCTjtBRC9CSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQ047QURuQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUNOO0FEdkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lDTjtBRDNDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Q047QUQvQ0k7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDaUROO0FEbkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3FETjtBRHZESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUN5RE47QURyREU7RUFDRSwyQkFBQTtBQ3VESjtBRHBERTtFQUNFLDRCQUFBO0FDc0RKOztBQy9PQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FEaVBGO0FDNU9JOzs7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGdQTjtBQzlPTTs7O0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBRGtQUjtBQ2hQUTs7O0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QURvUFY7QUNuUFU7OztFQUNFLGdCQUFBO0FEdVBaO0FDblBROzs7Ozs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUR5UFY7QUN0UFE7OztFQUNFLHlCQUFBO0FEMFBWO0FDdlBROzs7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBRDJQVjtBQ3pQVTs7O0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUQ2UFo7QUMxUFU7OztFQUNFLFlBQUE7RUFDQSwyQkFBQTtBRDhQWjtBQzVQWTs7O0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRGdRZDtBQy9QYzs7O0VBQ0UsU0FBQTtFQUNBLFlBQUE7QURtUWhCO0FDbFFnQjs7O0VBQ0UsWUFBQTtBRHNRbEI7QUNqUVk7OztFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRHFRZDtBQ2xRZ0I7OztFQUNFLGlCQUFBO0FEc1FsQjtBQy9QZ0I7OztFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURtUWxCO0FDeFBnQjs7O0VBQ0UsZ0JBQUE7QUQ0UGxCO0FDeFBzQjs7O0VBQ0UsZUFBQTtBRDRQeEI7QUNuUGtCOzs7RUFDRSxnQkFBQTtBRHVQcEI7QUMvT1E7OztFQUNFLFlBQUE7QURtUFY7QUM3T0U7RUFDRSxPQUFBO0FEK09KO0FDNU9FO0VBQ0UsT0FBQTtBRDhPSjtBQzVPSTtFQUNFLGFBQUE7QUQ4T047QUM1T007RUFDRSxPQUFBO0FEOE9SO0FDeE9JO0VBQ0Usa0JBQUE7QUQwT047QUN0T0U7RUFDRSxrQkFBQTtBRHdPSjtBQ3JPTTtFQUNFLGVBQUE7QUR1T1I7QUNuT0k7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEcU9OO0FDbE9JO0VBQ0UsVUFBQTtBRG9PTjtBQ2pPSTs7RUFFRSxXQUFBO0VBQ0EsVUFBQTtBRG1PTjtBQzdOTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRCtOUjs7QUFuWkU7RUFDRSxjQUFBO0FBc1pKO0FBblpFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFxWko7QUFsWkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFvWko7QUFqWkU7RUFDRSxtQkRpRE07QUNrV1Y7QUFoWkU7RUFDRSxzQ0RtRFU7QUMrVmQ7QUEvWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWlaSjtBQS9ZSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBaVpOO0FBN1lFO0VBQ0UsZ0JBQUE7QUErWUo7QUE1WUU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBOFlKO0FBM1lFO0VBQ0UsNENBQUE7RUFDQSx1QkFBQTtBQTZZSjtBQTFZRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJEY007RUNiTixnQkFBQTtBQTRZSjtBQTFZSTtFQUNFLGlCQUFBO0FBNFlOO0FBeFlFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQTBZSjtBQXZZRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQXlZSjtBQXRZRTtFQUNFLDhDREZJO0FDMFlSO0FBcllFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXVZSjtBQXBZRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQXNZSjtBQW5ZRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXFZSjtBQW5ZSTtFQUNFLHNCQUFBO0FBcVlOO0FBbFlJO0VBQ0UsWUFBQTtBQW9ZTjtBQWpZSTs7RUFFRSw2QkFBQTtBQW1ZTjtBQWhZSTtFQUNFLGVBQUE7QUFrWU47QUEvWEk7RUFDRSxpQkFBQTtBQWlZTjtBQS9YTTtFQUNFLGdCQUFBO0FBaVlSO0FBN1hJO0VBQ0UsV0FBQTtBQStYTjtBQTVYSTtFQUNFLG1CQUFBO0FBOFhOO0FBM1hJO0VBQ0UsZ0JBQUE7QUE2WE47QUExWEk7RUFDRSxlQUFBO0FBNFhOO0FBelhJOztFQUVFLFdBQUE7QUEyWE47O0FBdFhBO0VBQ0UsWUFBQTtBQXlYRjs7QUF0WEE7RUFDRSxrQkFBQTtBQXlYRjs7QUF0WEE7RUFDRSxlQUFBO0FBeVhGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLWdyYXktMDU6ICNmMWYzZjM7XHJcbiAgLS1ncmF5LTEwOiAjZTBlM2U2O1xyXG4gIC0tZ3JheS0yMDogI2JmYzZjZTtcclxuICAtLWdyYXktMzA6ICM5ZmE5Yjc7XHJcbiAgLS1ncmF5LTQwOiAjODM4ZmEwO1xyXG4gIC0tZ3JheS01MDogIzZiNzc4NjtcclxuICAtLWdyYXktNjA6ICM1MjVjNjk7XHJcbiAgLS1ncmF5LTcwOiAjM2Q0NTRmO1xyXG4gIC0tZ3JheS04MDogIzI1MmIzMTtcclxuICAtLWdyYXktOTA6ICMxNjE5MWQ7XHJcbiAgLS1ncmF5LTk1OiAjMGIwYzBmO1xyXG4gIC0tYmx1ZS0wNTogI2YwZjZmZTtcclxuICAtLWJsdWUtMTA6ICNlMmVlZmQ7XHJcbiAgLS1ibHVlLTIwOiAjYmNkOGZjO1xyXG4gIC0tYmx1ZS0zMDogIzdlYjFmNDtcclxuICAtLWJsdWUtNDA6ICM0YThmZWE7XHJcbiAgLS1ibHVlLTUwOiAjMjU3NGRiO1xyXG4gIC0tYmx1ZS02MDogIzBjNWNjNTtcclxuICAtLWJsdWUtNzA6ICMwMDQ5YTk7XHJcbiAgLS1ibHVlLTgwOiAjMDAzYTg2O1xyXG4gIC0tYmx1ZS05MDogIzAwMmE2MTtcclxuICAtLWJsdWUtOTU6ICMwMDE2MzM7XHJcbiAgLS1ncmVlbi0xMDogI2UzZmFjMztcclxuICAtLWdyZWVuLTMwOiAjYjlmNDY3O1xyXG4gIC0tZ3JlZW4tNTA6ICM3NmNhMDI7XHJcbiAgLS1ncmVlbi03MDogIzU5OTkwMDtcclxuICAtLWdyZWVuLTgwOiAjM2M2NjAwO1xyXG4gIC0tZ3JlZW4tOTA6ICMxZjM2MDA7XHJcbiAgLS1yZWQtMTA6ICNmZmI3Y2U7XHJcbiAgLS1yZWQtMzA6ICNmYTU3OGI7XHJcbiAgLS1yZWQtNTA6ICNlNjBjNTE7XHJcbiAgLS1yZWQtNzA6ICNjMjAwM2Q7XHJcbiAgLS1yZWQtODA6ICM5MzAwMmY7XHJcbiAgLS1yZWQtOTA6ICM2MzAwMWY7XHJcbiAgLS15ZWxsb3ctMTA6ICNmZmUzYTY7XHJcbiAgLS15ZWxsb3ctMzA6ICNmOWI2MjU7XHJcbiAgLS15ZWxsb3ctNTA6ICNlMzliMDA7XHJcbiAgLS15ZWxsb3ctNzA6ICNiYjgwMDA7XHJcbiAgLS15ZWxsb3ctODA6ICM4NzVjMDA7XHJcbiAgLS15ZWxsb3ctOTA6ICM1MjM4MDA7XHJcbiAgLS1wdXJwbGUtMTA6ICNmM2M2ZmY7XHJcbiAgLS1wdXJwbGUtMzA6ICNkYzczZjk7XHJcbiAgLS1wdXJwbGUtNTA6ICNiYjMwZTI7XHJcbiAgLS1wdXJwbGUtNzA6ICM5MTBhYjc7XHJcbiAgLS1wdXJwbGUtODA6ICM2NDAwODA7XHJcbiAgLS1wdXJwbGUtOTA6ICMzODAwNDc7XHJcbiAgLS10ZWFsLTEwOiAjZTFmOWZmO1xyXG4gIC0tdGVhbC0zMDogIzliZTVmYTtcclxuICAtLXRlYWwtNTA6ICM1ZmNhZTc7XHJcbiAgLS10ZWFsLTcwOiAjMzZhNmM1O1xyXG4gIC0tdGVhbC04MDogIzFmN2U5ODtcclxuICAtLXRlYWwtOTA6ICMxMjU4NmI7XHJcbiAgLS1ncmF5LTUwLTIwOiByZ2JhKDEwNywgMTE5LCAxMzQsIDAuMik7XHJcbiAgLS1ibHVlLTk1LTYwOiByZ2JhKDAsIDIyLCA1MSwgMC42KTtcclxuICAvKlxyXG4gICAgICAgIGJyYW5kaW5nXHJcblxyXG4gICAgKi9cclxuICAtLWJyYW5kLXByaW1hcnktY29sb3I6ICMyNTc0ZGI7XHJcbiAgLS1icmFuZC1zZWNvbmRhcnktY29sb3I6ICNlMmVlZmQ7XHJcbiAgLS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXdpZHRoOiAyMTVweDtcclxuICAtLXZlcnRpY2FsLW5hdi1zdWJtZW51LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVXBsYW5kIFVJIFRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJGdyYXktMDU6ICNmMWYzZjM7XHJcbiRncmF5LTEwOiAjZTBlM2U2O1xyXG4kZ3JheS01MDogIzZiNzc4NjtcclxuJGJsdWUtMTA6ICNlMmVlZmQ7XHJcbiRob3ZlcjogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTsgLy8jY2RlMmY2O1xyXG5cclxuJHVwbGFuZC1ibHVlOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKTtcclxuJHVwbGFuZC1wYW5lbC1iYWNrZ3JvdW5kOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxuJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZzogIzI1NzRkYjsgLy8gdmFyKC0tYmx1ZS01MClcclxuXHJcbiR1cGxhbmQtaGVhZGVyLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiR1cGxhbmQtc2Vjb25kYXJ5LWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcblxyXG4kdXBsYW5kLWdyYXktYmFja2dyb3VuZDogJGdyYXktMDU7XHJcblxyXG4kdXBsYW5kLWJvZHktY29sb3I6ICMxNTE1MTU7XHJcbiR1cGxhbmQtZ3JlZW46ICMzYzY2MDA7IC8vIHZhcigtLWdyZWVuLTgwKVxyXG4kdXBsYW5kLXllbGxvdzogIzg3NWMwMDsgLy8gdmFyKC0teWVsbG93LTgwKVxyXG4kdXBsYW5kLXJlZDogIzkzMDAyZjsgLy8gdmFyKC0tcmVkLTgwKVxyXG4kdXBsYW5kLWxpZ2h0LWdyYXk6ICNiZmM2Y2U7XHJcbiR1cGxhbmQtZGFyay1ibHVlOiAjMGQ0YTYyO1xyXG4kdXBsYW5kLWxpZ2h0OiAjZmZmO1xyXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHVwbGFuZC1hY3RpdmUtYmc6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiR1cGxhbmQtaW5wdXQtaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjJyZW07XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpLCAwLjgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aCAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWFsZXJ0LWJnLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm9vdHN0cmFwIE92ZXJyaWRlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYnRuLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYm9keS1jb2xvcjogJHVwbGFuZC1ib2R5LWNvbG9yO1xyXG4kaW5mbzogJHVwbGFuZC1kYXJrLWJsdWU7XHJcbiRwcmltYXJ5OiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kc3VjY2VzczogJHVwbGFuZC1ncmVlbjtcclxuJGRhbmdlcjogJHVwbGFuZC1yZWQ7XHJcbiR3YXJuaW5nOiAkdXBsYW5kLXllbGxvdztcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogJHVwbGFuZC1hbGVydC1iZy1sZXZlbDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogJHVwbGFuZC1hbGVydC1jb2xvci1sZXZlbDtcclxuJGxpZ2h0OiAkdXBsYW5kLWxpZ2h0O1xyXG4kaW5wdXQtaGVpZ2h0OiAkdXBsYW5kLWlucHV0LWhlaWdodDtcclxuJGlucHV0LWNvbG9yOiAjNDk1MDU3O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWxpZ2h0LWdyYXk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAycHg7XHJcbiRidG4tcGFkZGluZy14OiAxNnB4O1xyXG4kYnRuLXBhZGRpbmcteTogNHB4O1xyXG5cclxuLnJ0bCB7XHJcbiAgLm1sLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1yLWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJHNwYWNlczogKDAsIDApLCAoMSwgMC4yNSksICgyLCAwLjUpLCAoMywgMSksICg0LCAxLjUpLCAoNSwgMyk7XHJcblxyXG4gIEBlYWNoICRpLCAkdmFsdWUgaW4gJHNwYWNlcyB7XHJcbiAgICAucHItI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tbC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1yLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLm9mZnNldC0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygxMDAlICogKCN7JGl9LyAxMikpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQmFtYmEuU2hhcmVkL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy91cGxvYWQtZm9ybS5zY3NzJztcclxuXHJcbi5zZW5kZmF4LWZvcm0ge1xyXG4gIC5pcy1vcGVuID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZGQtYWRkLWRlbGV0ZSAuZGQtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAvL2Ryb3Bkb3duXHJcbiAgLmJ0bi5zZy1zZWxlY3QuZGQtbWVudS13LmRkLW1lbnUtdmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duIC5kZC1tZW51LXZkIHtcclxuICAgIGJhY2tncm91bmQ6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLmlzLW9wZW4gLmRkLW1lbnUtdmQge1xyXG4gICAgYmFja2dyb3VuZDogJHVwbGFuZC1ibHVlO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLmRkLWFkZC1kZWxldGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLmlzLW9wZW4gLmRkLW1lbnUtdmQgLmRkLXZhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmlzLW9wZW4gLmRkLW1lbnUtdyAuY2FyZXQge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG5cclxuICAuZGQtbWVudS13IC5jYXJldCB7XHJcbiAgICBjb2xvcjogJHVwbGFuZC1ibHVlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIC5jaGVja2JveC5jbGVhcmZpeCB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcblxyXG4gICAgLmNoZWNrLWxhYmVsIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tbWVudV9fbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51X19pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRob3ZlcjtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51X19saXN0IC5kcm9wZG93bi1tZW51X19pdGVtLWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiAxNjdweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbi0xIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gICYuZmF4LW1vYmlsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMHB4KTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuXHJcbiAgICAuaW5uZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4tMSB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmF4LWZvcm0sXHJcbiAgICAuY29sdW1uLTMge1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuZmF4LXJlY2lwaWVudCA+IHVsIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdltjbGFzc149J2lubmVyLWNvbHVtbiddID4gdWwge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdmVyLXBhZ2UtbW9iaWxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmF4LXJlY2lwaWVudCA+IHVsID4gbGkge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLXVwbG9hZC5mYXgtbW9iaWxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdltjbGFzc149JzJjb2x1bW5zJ10sXHJcbiAgICBkaXZbY2xhc3NePSdjb2x1bW4nXSB7XHJcbiAgICAgIGZsZXg6IHVuc2V0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJ0bCAuZHJvcGRvd24tbWVudSB7XHJcbiAgbGVmdDogLTEwNXB4O1xyXG59XHJcblxyXG4ucnRsIC5zZW5kZmF4LWZvcm0gLmRyb3Bkb3duLW1lbnVfX2xpc3QgLmRyb3Bkb3duLW1lbnVfX2l0ZW0tbGluayB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZmF4LWZvcm0ge1xyXG4gIG1heC13aWR0aDogNjB2dztcclxufVxyXG4iLCIudXBsb2FkLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG5cclxuICBtaW4td2lkdGg6IDk4OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgZGl2W2NsYXNzXj0nMmNvbHVtbnMnXSxcclxuICBkaXZbY2xhc3NePSdjb2x1bW4nXSxcclxuICBkaXZbY2xhc3NePSdpbm5lci1jb2x1bW4nXSB7XHJcbiAgICAmID4gdWwge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAmID4gbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiBoc2woMCwgMCUsIDQzJSk7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Om5vdChpbnB1dFt0eXBlPSdjaGVja2JveCddKSxcclxuICAgICAgICAuZHJvcC1kb3duIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kcm9wLWRvd24gLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgIHRhZy1pbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGl2Lm5nMi10YWctaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGRpdi5uZzItdGFncy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFnIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgICAgICAgICAgICAgZGVsZXRlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFnLWlucHV0LWZvcm0ge1xyXG4gICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuY29tYm8ge1xyXG4gICAgICAgICAgZGl2LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIGRpdi5uZzItdGFnLWlucHV0IHtcclxuICAgICAgICAgICAgICB0YWcge1xyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICYgfiB0YWctaW5wdXQtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRhZy1pbnB1dC1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXZbY2xhc3NePSdjb2x1bW4nXSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgZGl2W2NsYXNzXj0nMmNvbHVtbnMnXSB7XHJcbiAgICBmbGV4OiAyO1xyXG5cclxuICAgIC5pbm5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBkaXZbY2xhc3NePSdpbm5lci1jb2x1bW4nXSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmNvbHVtbi0zIHtcclxuICAgICYgPiB1bCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdi5jb21ibyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGl2W2NsYXNzXj0naW5uZXItY29sdW1uJ10gPiB1bCA+IGxpIHtcclxuICAgICAgdGFnLWlucHV0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXYuZHJvcGRvd24uZGQtYWRkLWRlbGV0ZSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kcm9wZG93bi5kZC1hZGQtZGVsZXRlLmRyb3Bkb3duLW1lbnUtcmlnaHQuc2VsZWN0YWJsZSB7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1yaWdodCAuZHJvcGRvd24tbWVudSxcclxuICAgIC5kcm9wZG93bi1tZW51LnB1bGwtcmlnaHQge1xyXG4gICAgICByaWdodDogYXV0bztcclxuICAgICAgbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgJiBzcGFuLmFzdGVyaXNrIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMTk3YjMwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 26054:
/*!*********************************************************************!*\
  !*** ./src/app/views/send-fax/fax-preview/fax-preview.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxPreviewComponent: () => (/* binding */ FaxPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_services_content_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/services/content-post.service */ 10235);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/services/interfax.service */ 19456);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/errors/errors.component */ 20238);
/* harmony import */ var _Bamba_Shared_src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/components/pagination/pagination.component */ 89593);
/* harmony import */ var _Bamba_Shared_src_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/pipes/safe-html.pipe */ 31541);
























const _c0 = ["contactInfo"];
const _c1 = ["scrollbar"];
const _c2 = () => ({});
function FaxPreviewComponent_app_errors_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-errors", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errors", ctx_r1.errors);
  }
}
function FaxPreviewComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td")(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.currentContact.name);
  }
}
function FaxPreviewComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td")(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.currentContact.company);
  }
}
function FaxPreviewComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td")(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.currentContact.faxNumber);
  }
}
function FaxPreviewComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td")(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.currentContact.phoneNumber);
  }
}
class FaxPreviewComponent {
  handleKeyUp(event) {
    if (event.key === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Key.Escape) this.close();
  }
  constructor(interfaxService, toastr, translate, contentPost, spinner, errorService) {
    this.interfaxService = interfaxService;
    this.toastr = toastr;
    this.translate = translate;
    this.contentPost = contentPost;
    this.spinner = spinner;
    this.errorService = errorService;
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.recipients = [];
    this.errors = [];
    this.currentPage = -1;
    this.pageSize = 1;
    this.dialogHeight = 300;
    this.contactHeadersWidth = 100;
    this.faxPreview = {
      prefixClassName: '',
      previewHTML: ''
    };
    this.reset = () => {
      this.currentPage = 1;
      this.sampleFaxNumber = '';
      this.faxPreview = {
        prefixClassName: '',
        previewHTML: ''
      };
      this.currentContact = null;
      this.errors = [];
    };
    this.prepareRecipients = () => {
      this.recipients = [];
      if (!this.faxForm || !this.faxForm.recipients) return;
      this.faxForm.recipients.forEach(x => {
        if (x.value instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ContactListRecipient) {
          this.spinner.show(this.translate.instant('Common.Loading'), document.body);
          this.interfaxService.getContactList(x.value.contactListId, this.onContactListLoaded, this.onContactListFailed);
        } else if (x instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Recipient) {
          this.recipients.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Contact({
            name: x.name,
            faxNumber: x.faxnumber,
            company: x.company,
            phoneNumber: x.phoneNumber
          }));
        } else if (x.value instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Recipient) {
          this.recipients.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Contact({
            name: x.value.name,
            faxNumber: x.value.faxnumber,
            company: x.value.company,
            phoneNumber: x.value.phoneNumber
          }));
        }
      });
    };
    this.onContactListLoaded = list => {
      list.members.forEach(x => this.recipients.push(x));
      this.spinner.hide('Common.Loading');
      if (this.currentContact == null) this.loadPage(this.currentPage);
    };
    this.onContactListFailed = err => {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('FaxPreviewComponent.onContactListFailed', err);
      this.toastr.error(this.translate.instant('SendFax-Details-Form.ContactListLoadFailed'));
      this.spinner.hide();
    };
    this.getCurrentContact = () => {
      if (!this.recipients || this.recipients.length == 0 || this.currentPage < 1 || this.currentPage > this.recipients.length) return null;
      return this.recipients[this.currentPage - 1];
    };
    this.calculateContactHeadersWidth = () => {
      this.contactHeadersWidth = 20;
      const headers = this.contactInfo.nativeElement.getElementsByClassName('contact-header');
      for (let i = 0; i < headers.length; i++) {
        this.contactHeadersWidth = Math.max(this.contactHeadersWidth, $(headers[i]).width() + 30);
      }
    };
    this.onSampleFaxNumberChanged = value => {
      this.sampleFaxNumber = value;
    };
    this.onLoadPage = pagination => {
      this.loadPage(pagination.pageNumber);
    };
    this.loadPage = page => {
      this.currentPage = page;
      this.faxPreview = {
        prefixClassName: '',
        previewHTML: ''
      };
      this.currentContact = this.getCurrentContact();
      if (!this.currentContact) return;
      this.calculateContactHeadersWidth();
      this.scrollbar.scrollToTop();
      this.spinner.show(this.translate.instant('SendFax-Details-Form.prepare-preview'), document.documentElement);
      this.contentPost.GetFaxPreview(this.getFaxFormForCurrentRecipient(this.currentContact.name, this.currentContact.faxNumber, this.currentContact.company, this.currentContact.phoneNumber), this.previewLoaded, this.previewFailed);
    };
    this.previewLoaded = result => {
      this.faxPreview = result;
      this.spinner.hide();
    };
    this.previewFailed = err => {
      this.spinner.hide();
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('FaxPreviewComponent.previewFailed', err);
      this.errorService.showErrorsModal('SendFax-Details-Form.fax-preview-failed', 'SendFax-Details-Form.fax-preview');
      this.close();
    };
    this.getFaxFormForCurrentRecipient = (name, faxNumber, company, phoneNumber) => {
      const sampleDetailForm = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FaxForm(this.faxForm);
      sampleDetailForm.message = sampleDetailForm.message.replace(/«Person»/g, '%%Fax.Name%%');
      sampleDetailForm.message = sampleDetailForm.message.replace(/«Fax»/g, '%%Fax.FaxNumber%%');
      sampleDetailForm.message = sampleDetailForm.message.replace(/«Company»/g, '%%Fax.Company%%');
      sampleDetailForm.message = sampleDetailForm.message.replace(/«Voice»/g, '%%Fax.PhoneNumber%%');
      sampleDetailForm.recipients = [{
        display: faxNumber,
        value: {
          id: 1,
          name: name,
          faxNumber: faxNumber,
          company: company,
          phoneNumber: phoneNumber
        }
      }];
      return sampleDetailForm;
    };
    this.sendSampleFax = () => {
      this.errors = [];
      this.contentPost.sendFax(document.documentElement, this.getFaxFormForCurrentRecipient(this.currentContact.name, this.sampleFaxNumber, this.currentContact.company, this.currentContact.phoneNumber), this.onSampleFaxSent, this.onSampleFaxFailed);
    };
    this.onSampleFaxSent = result => {
      this.spinner.hide();
      if (result.succeeded) {
        this.toastr.success(this.translate.instant('SendFax-Details-Form.SampleFaxSent'));
        this.close();
        return;
      }
      if (result.errors) {
        result.errors.forEach(error => {
          this.errors.push(error);
        });
      } else {
        this.onSampleFaxFailed();
      }
    };
    this.onSampleFaxFailed = err => {
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('FaxPreviewComponent.onSampleFaxFailed', err);
      this.errors.push(this.translate.instant('SendFax-Details-Form.SampleFaxFailed'));
    };
    this.close = () => {
      this.onClose.emit();
    };
  }
  ngOnInit() {
    this.dialogHeight = document.body.clientHeight - 450;
    this.fieldSubmitSample = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: '',
      placeholder: this.translate.instant('SendFax-Details-Form.EnterSampleFaxNumber'),
      required: false
    });
    this.reset();
    this.loadPage(this.currentPage);
  }
  ngOnChanges(changes) {
    this.prepareRecipients();
    this.reset();
    this.loadPage(this.currentPage);
  }
  ngAfterViewInit() {
    this.calculateContactHeadersWidth();
  }
  static {
    this.ɵfac = function FaxPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_interfax_service__WEBPACK_IMPORTED_MODULE_4__.InterFAXService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_content_post_service__WEBPACK_IMPORTED_MODULE_2__.ContentPostService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: FaxPreviewComponent,
      selectors: [["app-fax-preview"]],
      viewQuery: function FaxPreviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.contactInfo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.scrollbar = _t.first);
        }
      },
      hostBindings: function FaxPreviewComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function FaxPreviewComponent_keyup_HostBindingHandler($event) {
            return ctx.handleKeyUp($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        faxForm: "faxForm",
        substitutions: "substitutions"
      },
      outputs: {
        onClose: "onClose"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
      decls: 50,
      vars: 57,
      consts: [["contactInfo", ""], ["scrollbar", "ngxPerfectScrollbar"], [3, "title", "closeIconHandler"], [1, "modal-body", "fax-preview", "pt-4"], [1, "import-errors", 3, "perfectScrollbar"], [3, "errors", 4, "ngIf"], [1, "modal-content-wrapper"], [1, "d-flex", "mb-5", "contact-info-wrapper"], [1, "d-flex", "justify-content-start", "flex-column", "contact-info", "pl-0", "col-8"], [3, "width"], [1, "contact-header"], [4, "ngIf"], [1, "d-flex", "ml-auto", "align-items-center", "flex-row-reverse", "col-4"], [3, "onLoadPage", "currentPage", "itemsTotal", "pageSize", "itemsPageCount", "showItemsPageCount", "canReload", "inputBlurDelay"], [3, "perfectScrollbar"], [1, "message-body-inner", 3, "innerHTML", "perfectScrollbar"], [1, "modal-footer", "d-flex"], [1, "col-4", "p-0"], [3, "valueChange", "inputChange", "field", "value", "disabled", "maxLength"], [1, "btn", "btn-minwidth", "btn-secondary", "mr-auto", 3, "click", "disabled"], [1, "btn", "btn-minwidth", "btn-primary", 3, "click"], [3, "errors"], [1, "contact-value", "text-truncate"]],
      template: function FaxPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-modal-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, FaxPreviewComponent_app_errors_4_Template, 1, 1, "app-errors", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 6)(6, "div", 7, 0)(8, "div", 8)(9, "table")(10, "tr")(11, "th", 9)(12, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, FaxPreviewComponent_td_15_Template, 3, 1, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "tr")(17, "th", 9)(18, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, FaxPreviewComponent_td_21_Template, 3, 1, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "tr")(23, "th", 9)(24, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, FaxPreviewComponent_td_27_Template, 3, 1, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "tr")(29, "th", 9)(30, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, FaxPreviewComponent_td_33_Template, 3, 1, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 12)(35, "pagination", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onLoadPage", function FaxPreviewComponent_Template_pagination_onLoadPage_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onLoadPage($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 14, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "div", 15, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 16)(42, "div", 17)(43, "app-field", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("valueChange", function FaxPreviewComponent_Template_app_field_valueChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.sampleFaxNumber, $event) || (ctx.sampleFaxNumber = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("inputChange", function FaxPreviewComponent_Template_app_field_inputChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onSampleFaxNumberChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FaxPreviewComponent_Template_button_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.sendSampleFax());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](46, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FaxPreviewComponent_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 38, "SendFax-Details-Form.FaxPreview"))("closeIconHandler", ctx.close);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](54, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.errors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", ctx.contactHeadersWidth);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 40, "SendFax-Details-Form.Name"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.currentContact);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", ctx.contactHeadersWidth);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 42, "SendFax-Details-Form.Company"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.currentContact);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", ctx.contactHeadersWidth);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 44, "SendFax-Details-Form.FaxNumber"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.currentContact);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", ctx.contactHeadersWidth);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 46, "SendFax-Details-Form.Phone"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.currentContact);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("currentPage", ctx.currentPage)("itemsTotal", ctx.recipients.length)("pageSize", ctx.pageSize)("itemsPageCount", ctx.currentPage)("showItemsPageCount", false)("canReload", false)("inputBlurDelay", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("message-body " + ctx.faxPreview.prefixClassName);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](55, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("height", ctx.dialogHeight, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 48, ctx.faxPreview.previewHTML), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"])("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](56, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("field", ctx.fieldSubmitSample);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("value", ctx.sampleFaxNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.faxPreview.previewHTML)("maxLength", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.sampleFaxNumber.trim() || !ctx.faxPreview.previewHTML);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](46, 50, "SendFax-Details-Form.SubmitSample"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](49, 52, "Common.Close"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_6__.FieldComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__.ModalHeaderComponent, _Bamba_Shared_src_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__.ErrorsComponent, _Bamba_Shared_src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _Bamba_Shared_src_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__.SafeHtml],
      styles: [".fax-preview .contact-info-wrapper {\n  min-height: 55px;\n}\n.fax-preview .contact-info {\n  font-size: 12px;\n}\n.fax-preview .contact-info table {\n  table-layout: fixed;\n  width: 100%;\n}\n.fax-preview .contact-info th {\n  color: #a7a2a2;\n  font-weight: initial;\n}\n.fax-preview .contact-info .contact-value {\n  width: 98%;\n}\n.fax-preview .message-body {\n  border: 1px solid #d8d6d6;\n}\n.fax-preview .message-body .message-body-inner {\n  position: relative;\n  padding: 15px;\n}\n.fax-preview .message-body p {\n  margin: 0 0 1em;\n}\n.fax-preview .message-body * {\n  overflow-wrap: break-word;\n}\n.fax-preview .message-body table {\n  table-layout: fixed;\n}\n.fax-preview .nsm-overlay-open {\n  overflow: hidden;\n}\n\n.fax-preview-modal {\n  min-width: 45%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3Mvc2VuZC1mYXgvZmF4LXByZXZpZXcvZmF4LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUlJO0VBQ0UsVUFBQTtBQUZOO0FBTUU7RUFDRSx5QkFBQTtBQUpKO0FBTUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFKTjtBQU1JO0VBQ0UsZUFBQTtBQUpOO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBUUk7RUFDRSxtQkFBQTtBQU5OO0FBVUU7RUFDRSxnQkFBQTtBQVJKOztBQVlBO0VBQ0UsY0FBQTtBQVRGIiwic291cmNlc0NvbnRlbnQiOlsiLmZheC1wcmV2aWV3IHtcclxuICAuY29udGFjdC1pbmZvLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogNTVweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGFibGUge1xyXG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGNvbG9yOiAjYTdhMmEyO1xyXG4gICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC12YWx1ZSB7XHJcbiAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZS1ib2R5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ2ZDY7XHJcblxyXG4gICAgLm1lc3NhZ2UtYm9keS1pbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDAgMCAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgKiB7XHJcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5zbS1vdmVybGF5LW9wZW4ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5mYXgtcHJldmlldy1tb2RhbCB7XHJcbiAgbWluLXdpZHRoOiA0NSU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 86206:
/*!*********************************************************************************!*\
  !*** ./src/app/views/send-fax/fax-success-modal/fax-success-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaxSuccessModalComponent: () => (/* binding */ FaxSuccessModalComponent)
/* harmony export */ });
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/modal-header/modal-header.component */ 16972);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);







class FaxSuccessModalComponent {
  constructor(printToService, ngxSmartModalService, sessionStorageService) {
    this.printToService = printToService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.sessionStorageService = sessionStorageService;
    this.isFaxMobile = false;
    this.closeSuccessModal = () => {
      this.printToService.closeAppIfPrintTo();
      this.ngxSmartModalService.getModal('sendFaxSuccessModal').close();
    };
  }
  ngOnInit() {
    this.isFaxMobile = this.sessionStorageService.getIsInterFaxMobile();
  }
  static {
    this.ɵfac = function FaxSuccessModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaxSuccessModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PrintToService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SessionStorageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FaxSuccessModalComponent,
      selectors: [["app-fax-success-modal"]],
      decls: 14,
      vars: 15,
      consts: [["sendFaxSuccessModal", ""], ["identifier", "sendFaxSuccessModal", 3, "closable", "escapable", "dismissable"], [3, "closeIconHandler", "title"], [1, "modal-body"], ["id", "success-modal-text", 2, "font-size", "medium"], ["id", "check-icon", "src", "assets/img/check-icon.svg"], [1, "modal-footer"], ["id", "modal-btn-close", 1, "btn", "btn-primary", "btn-minwidth", 3, "click"]],
      template: function FaxSuccessModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-smart-modal", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-modal-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FaxSuccessModalComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closeSuccessModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, "SendFax.HeadText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closeIconHandler", ctx.closeSuccessModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fax-mobile", ctx.isFaxMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "SendFax.SubmittedSuccessfully"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 13, "Common.Close"), " ");
        }
      },
      dependencies: [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__.NgxSmartModalComponent, _Bamba_Shared_src_modal_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["#check-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin-inline-start: 8%;\n}\n\n.fax-mobile[_ngcontent-%COMP%]   #check-icon[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  margin-inline-start: 0px;\n}\n.fax-mobile[_ngcontent-%COMP%]   #success-modal-text[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3Mvc2VuZC1mYXgvZmF4LXN1Y2Nlc3MtbW9kYWwvZmF4LXN1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIiNjaGVjay1pY29uIHtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogOCU7XHJcbn1cclxuXHJcbi5mYXgtbW9iaWxlIHtcclxuICAjY2hlY2staWNvbiB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICB9XHJcblxyXG4gICNzdWNjZXNzLW1vZGFsLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 79324:
/*!***************************************************************************************!*\
  !*** ./src/app/views/send-fax/page-attributes-form/page-attributes-form.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageAttributesFormComponent: () => (/* binding */ PageAttributesFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/core/email */ 38061);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/checkbox/checkbox.component */ 38913);












function PageAttributesFormComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_div_16_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.faxPageSettings.feedbackEmail, $event) || (ctx_r1.faxPageSettings.feedbackEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_div_16_Template_app_field_fieldChanged_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onFieldEmailChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldFeedbackEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.faxPageSettings.feedbackEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("validity", ctx_r1.fieldFeedbackEmailValidity);
  }
}
function PageAttributesFormComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 10)(3, "app-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function PageAttributesFormComponent_ng_container_17_Template_app_checkbox_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSendAfter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 12)(5, "div", 13)(6, "app-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_ng_container_17_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.sendAfterDay, $event) || (ctx_r1.sendAfterDay = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_ng_container_17_Template_app_field_fieldChanged_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSettingsChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 12)(8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 12)(11, "div", 13)(12, "app-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_ng_container_17_Template_app_field_valueChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.sendAfterHour, $event) || (ctx_r1.sendAfterHour = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_ng_container_17_Template_app_field_fieldChanged_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSettingsChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13)(14, "app-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_ng_container_17_Template_app_field_valueChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.sendAfterMinute, $event) || (ctx_r1.sendAfterMinute = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_ng_container_17_Template_app_field_fieldChanged_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSettingsChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.faxPageSettings.sendAfter)("label", ctx_r1.showSendAfterContactListsWarning ? "SendFax-Attributes-Form.send-after-contact-lists" : "SendFax-Attributes-Form.send-after");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldSendAfterDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.sendAfterDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.faxPageSettings.sendAfter);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("localize", true)("required", true)("text", "SendFax-Attributes-Form.send-after-time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldSendAfterHour);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.sendAfterHour);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.faxPageSettings.sendAfter);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx_r1.fieldSendAfterMinute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx_r1.sendAfterMinute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.faxPageSettings.sendAfter);
  }
}
class PageAttributesFormComponent {
  set faxPageSettings(value) {
    this._faxPageSettings = value;
    this.initializeSendAfter();
    this.validate();
    this.faxPageSettingsChanged.emit(this.faxPageSettings);
  }
  get faxPageSettings() {
    return this._faxPageSettings;
  }
  constructor(translate, userState) {
    this.translate = translate;
    this.userState = userState;
    this.showSendAfterContactListsWarning = true;
    this.faxPageSettingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.saveAsDefault = false;
    this.sendAfterDay = '';
    this.sendAfterHour = '';
    this.sendAfterMinute = '';
    this.getSendAfterDayText = (day, date) => {
      if (day == 0) return this.translate.instant('SendFax-Attributes-Form.send-after-today');
      if (day == 1) return this.translate.instant('SendFax-Attributes-Form.send-after-tomorrow');
      return date.toLocaleDateString();
    };
    this.pad = n => {
      if (n > 9) return n.toString();
      return '0' + n.toString();
    };
    this.canShowNotificationEmail = () => {
      return !this.userState.userProfile.useDefaultReplyAddress;
    };
    this.initializeSendAfter = () => {
      let day = 0;
      if (this.faxPageSettings && this.faxPageSettings.sendAfterDateTime && this.faxPageSettings.sendAfterDateTime > new Date()) {
        day = shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DateTime.daysBetween(this.faxPageSettings.sendAfterDateTime, new Date());
        this.sendAfterDay = this.pad(day);
        this.sendAfterHour = this.faxPageSettings.sendAfterDateTime.getHours().toString();
        this.sendAfterMinute = this.faxPageSettings.sendAfterDateTime.getMinutes().toString();
        return;
      }
      const date = new Date();
      if (date.getHours() > 17) day = 1;
      this.sendAfterDay = this.pad(day);
      this.sendAfterHour = '17';
      this.sendAfterMinute = '0';
    };
    this.onSendAfter = b => {
      this.faxPageSettings.sendAfter = b;
      this.onSettingsChanged();
    };
    this.validate = () => {
      this.fieldFeedbackEmailValidity = !this.faxPageSettings.feedbackEmail || _blocks_core_email__WEBPACK_IMPORTED_MODULE_2__.Email.isValid(this.faxPageSettings.feedbackEmail) ? null : shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataValidity.notValid;
    };
  }
  ngOnInit() {
    this.showSendAfter = this.userState.hasRolePermission(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.RolePermissions.INTERFAX_CAN_USE_SENDAFTER);
    this.createFields();
    this.initializeSendAfter();
  }
  createFields() {
    this.fieldFaxCSID = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
      label: this.translate.instant('SendFax-Attributes-Form.FaxCSID'),
      placeholder: this.translate.instant('SendFax-Attributes-Form.FaxCSID-Placeholder'),
      required: false
    });
    this.fieldNumberofAttempts = this.createListField(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.NumberOfAttampts, 'NumberOfAttempts');
    this.fieldPageOrientation = this.createListField(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.PageOrientation, 'PageOrientation', true);
    this.fieldPageSize = this.createListField(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.PageSize, 'PageSize', true);
    this.fieldRenderingOptimization = this.createListField(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.RenderingOptimization, 'RenderingOptimization', true);
    this.fieldResolution = this.createListField(shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.Resolution, 'Resolution', true);
    this.fieldFeedbackEmail = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.Text,
      label: this.translate.instant('SendFax-Attributes-Form.FeedbackEmail'),
      placeholder: '',
      required: false
    });
    const sendAfterDayOptions = new Array();
    for (var day = 0; day < 30; day++) {
      const date = new Date();
      date.setDate(date.getDate() + day);
      sendAfterDayOptions.push({
        name: this.getSendAfterDayText(day, date),
        value: this.pad(day)
      });
    }
    const sendAfterHourOptions = new Array();
    for (var hour = 0; hour < 24; hour++) {
      sendAfterHourOptions.push({
        name: this.pad(hour),
        value: hour.toString()
      });
    }
    const sendAfterMinuteOptions = new Array();
    for (var minute = 0; minute < 60; minute++) {
      sendAfterMinuteOptions.push({
        name: this.pad(minute),
        value: minute.toString()
      });
    }
    this.fieldSendAfterDay = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
      label: this.translate.instant('SendFax-Attributes-Form.send-after-day'),
      placeholder: '',
      required: true,
      datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(sendAfterDayOptions)
    });
    this.fieldSendAfterHour = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
      label: 'hour',
      placeholder: '',
      required: true,
      hideLabel: true,
      datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(sendAfterHourOptions)
    });
    this.fieldSendAfterMinute = new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
      label: 'minute',
      placeholder: '',
      required: true,
      hideLabel: true,
      datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(sendAfterMinuteOptions)
    });
    const {
      feedbackEmail
    } = this.faxPageSettings;
    if (!feedbackEmail || _blocks_core_email__WEBPACK_IMPORTED_MODULE_2__.Email.isValid(feedbackEmail)) {
      this.fieldFeedbackEmailValidity = null;
    } else {
      this.fieldFeedbackEmailValidity = shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataValidity.notValid;
    }
  }
  createListField(specificationName, labelText, sort = false) {
    return new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.MetaDataType.List,
      label: this.translate.instant(`SendFax-Attributes-Form.${labelText}`),
      datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FixedDataSource(this.getSettingOptions(specificationName), sort),
      required: true
    });
  }
  getSettingOptions(specificationItemName) {
    const options = new Array();
    const specificationItem = this.userState.userProfile.fax.advancePageSetting.find(item => item.name === specificationItemName);
    if (!specificationItem) return options;
    specificationItem['optionalValues'].forEach(element => {
      options.push({
        name: this.getResourcedOptionName(element),
        value: element
      });
    });
    const defaultValue = specificationItem['value'];
    if (!options.some(option => option.value == defaultValue)) {
      options.push({
        name: this.getResourcedOptionName(defaultValue),
        value: defaultValue
      });
    }
    return options;
  }
  getResourcedOptionName(optionName) {
    if (Number(optionName)) return optionName;
    const translationKey = `SendFax-Attributes-Form.Option-Value-${optionName}`;
    const translation = this.translate.instant(translationKey);
    if (translation === translationKey) return optionName;
    return translation;
  }
  onFieldEmailChange(value) {
    this.validate();
    this.onSettingsChanged();
  }
  onSettingsChanged() {
    const days = parseInt(this.sendAfterDay);
    const date = new Date();
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = parseInt(this.sendAfterHour);
    const minute = parseInt(this.sendAfterMinute);
    this.faxPageSettings.sendAfterDateTime = new Date(year, month, day, hour, minute);
    this.faxPageSettingsChanged.emit(this.faxPageSettings);
  }
  static {
    this.ɵfac = function PageAttributesFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PageAttributesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PageAttributesFormComponent,
      selectors: [["app-page-attributes-form"]],
      inputs: {
        faxPageSettings: "faxPageSettings",
        showSendAfterContactListsWarning: "showSendAfterContactListsWarning"
      },
      outputs: {
        faxPageSettingsChanged: "faxPageSettingsChanged"
      },
      decls: 21,
      vars: 16,
      consts: [[1, "page-attributes-form", "container-fluid"], [1, "row"], [1, "col-4"], [3, "valueChange", "fieldChanged", "field", "value", "maxLength"], [3, "valueChange", "fieldChanged", "field", "value"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "col-12"], ["name", "saveAsDefault", "label", "SendFax-Attributes-Form.UseSettingsAsDefault", 3, "valueChange", "value"], [3, "valueChange", "fieldChanged", "field", "value", "validity"], [1, "col-md-auto"], [3, "valueChange", "value", "label"], [1, "row", "indented"], [1, "col-3"], [3, "valueChange", "fieldChanged", "field", "value", "disabled"], [3, "localize", "required", "text"]],
      template: function PageAttributesFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.faxPageSettings.faxCSID, $event) || (ctx.faxPageSettings.faxCSID = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_Template_app_field_fieldChanged_3_listener() {
            return ctx.onSettingsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.faxPageSettings.numberOfAttempts, $event) || (ctx.faxPageSettings.numberOfAttempts = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_Template_app_field_fieldChanged_5_listener() {
            return ctx.onSettingsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 1)(7, "div", 2)(8, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_Template_app_field_valueChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.faxPageSettings.pageOrientation, $event) || (ctx.faxPageSettings.pageOrientation = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_Template_app_field_fieldChanged_8_listener() {
            return ctx.onSettingsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 2)(10, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_Template_app_field_valueChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.faxPageSettings.pageSize, $event) || (ctx.faxPageSettings.pageSize = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_Template_app_field_fieldChanged_10_listener() {
            return ctx.onSettingsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_Template_app_field_valueChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.faxPageSettings.renderingOptimization, $event) || (ctx.faxPageSettings.renderingOptimization = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_Template_app_field_fieldChanged_13_listener() {
            return ctx.onSettingsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 2)(15, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_Template_app_field_valueChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.faxPageSettings.resolution, $event) || (ctx.faxPageSettings.resolution = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fieldChanged", function PageAttributesFormComponent_Template_app_field_fieldChanged_15_listener() {
            return ctx.onSettingsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PageAttributesFormComponent_div_16_Template, 3, 3, "div", 5)(17, PageAttributesFormComponent_ng_container_17_Template, 15, 14, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 1)(19, "div", 7)(20, "app-checkbox", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("valueChange", function PageAttributesFormComponent_Template_app_checkbox_valueChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.faxPageSettings.saveAsDefault, $event) || (ctx.faxPageSettings.saveAsDefault = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function PageAttributesFormComponent_Template_app_checkbox_valueChange_20_listener() {
            return ctx.onSettingsChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldFaxCSID);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.faxPageSettings.faxCSID);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldNumberofAttempts);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.faxPageSettings.numberOfAttempts);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldPageOrientation);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.faxPageSettings.pageOrientation);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldPageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.faxPageSettings.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldRenderingOptimization);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.faxPageSettings.renderingOptimization);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", ctx.fieldResolution);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.faxPageSettings.resolution);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.canShowNotificationEmail());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSendAfter);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("value", ctx.faxPageSettings.saveAsDefault);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__.LabelComponent, _Bamba_Shared_src_form_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__.CheckboxComponent],
      styles: [".page-attributes-form {\n  margin-top: 15px;\n}\n.page-attributes-form app-checkbox .form-checkbox {\n  margin-top: 5px;\n}\n.page-attributes-form .indented {\n  padding-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3Mvc2VuZC1mYXgvcGFnZS1hdHRyaWJ1dGVzLWZvcm0vcGFnZS1hdHRyaWJ1dGVzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFFRTtFQUNJLGtCQUFBO0FBQU4iLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1hdHRyaWJ1dGVzLWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIGFwcC1jaGVja2JveCAuZm9ybS1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW5kZW50ZWQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 72079:
/*!***********************************************************!*\
  !*** ./src/app/views/send-fax/send-fax-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendFaxRoutingModule: () => (/* binding */ SendFaxRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _send_fax_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-fax.component */ 68863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: '',
  component: _send_fax_component__WEBPACK_IMPORTED_MODULE_0__.SendFaxComponent,
  pathMatch: 'full'
}];
class SendFaxRoutingModule {
  static {
    this.ɵfac = function SendFaxRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SendFaxRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SendFaxRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SendFaxRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 68863:
/*!******************************************************!*\
  !*** ./src/app/views/send-fax/send-fax.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendFaxComponent: () => (/* binding */ SendFaxComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _src_app_views_send_fax_page_attributes_form_page_attributes_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-attributes-form/page-attributes-form.component */ 79324);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/send-fax.service */ 16665);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _details_form_details_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details-form/details-form.component */ 68926);
/* harmony import */ var _fax_preview_fax_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fax-preview/fax-preview.component */ 26054);
/* harmony import */ var _fax_success_modal_fax_success_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fax-success-modal/fax-success-modal.component */ 86206);





























const _c0 = ["scrollbar"];
const _c1 = () => ({});
function SendFaxComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 15)(1, "app-details-form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("filesChanged", function SendFaxComponent_div_11_Template_app_details_form_filesChanged_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.onFilesChange());
    })("recipientsChanged", function SendFaxComponent_div_11_Template_app_details_form_recipientsChanged_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.onRecipientChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("show", ctx_r2.activeTab === ctx_r2.DetailsView);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r2.activeTab === ctx_r2.PageAttributesView);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("validateForm", ctx_r2.validateDetailForm)("formData", ctx_r2.detailForm)("substitutions", ctx_r2.substitutions);
  }
}
function SendFaxComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17)(1, "app-page-attributes-form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("faxPageSettingsChanged", function SendFaxComponent_div_12_Template_app_page_attributes_form_faxPageSettingsChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.updateFaxPageSettings($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("show", ctx_r2.activeTab === ctx_r2.PageAttributesView);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r2.activeTab === ctx_r2.DetailsView);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("faxPageSettings", ctx_r2.detailForm.faxPageSettings)("showSendAfterContactListsWarning", ctx_r2.showSendAfterContactListsWarning());
  }
}
function SendFaxComponent_app_fax_preview_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-fax-preview", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClose", function SendFaxComponent_app_fax_preview_15_Template_app_fax_preview_onClose_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.closePreviewModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("faxForm", ctx_r2.previewDetailForm)("substitutions", ctx_r2.substitutions);
  }
}
class SendFaxComponent {
  constructor(translateService, userState, errorsService, spinnerState, printToService, ngxSmartModalService, cdr, sendFaxService) {
    this.translateService = translateService;
    this.userState = userState;
    this.errorsService = errorsService;
    this.spinnerState = spinnerState;
    this.printToService = printToService;
    this.ngxSmartModalService = ngxSmartModalService;
    this.cdr = cdr;
    this.sendFaxService = sendFaxService;
    this.PageAttributesView = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PageAttributesView;
    this.DetailsView = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DetailsView;
    this.activeTab = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DetailsView;
    this.tabs = new Array();
    this.detailForm = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FaxForm({});
    this.faxUserProfileLoaded = false;
    this.rightControls = [];
    this.substitutions = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
    this.onFailToLoadProfile = () => {
      this.spinnerState.hide();
      this.errorsService.showErrorsModal(['SendFax.InterfaxAuthorizationProblem'], 'SendFax.HeadText');
    };
    this.onSuccessLoadingProfile = () => {
      this.spinnerState.hide();
    };
    this.createRightButtons = () => {
      this.saveButton = this.sendFaxService.createSendFaxControl('.sendfax-form', this.invalidFeedbackEmailHandler, this.optionsTabPageHandler, this.updateScrollbarHandler);
      this.discardButton = this.sendFaxService.createDiscardControl(this.optionsTabPageHandler, this.updateScrollbarHandler);
      this.separator = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__.Control(() => {}, '', '', '', '', 'vertical-separator', false);
      this.separator.isVisible = false;
      this.rightControls.push(this.saveButton);
      this.rightControls.push(this.discardButton);
      this.rightControls.push(this.separator);
      if (!this.printToService.isPrintToMode) {
        this.previewButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_3__.Control(this.preview, 'Preview', 'btn btn-light', '', 'Preview', 'btn', false, false, null, false);
        this.rightControls.push(this.previewButton);
        this.previewButton.setTranslation(this.translateService.instant('Common.Preview'));
      }
    };
    this.invalidFeedbackEmailHandler = () => this.activateTab(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PageAttributesView);
    this.optionsTabPageHandler = () => {
      if (!this.optionsTabPage) return;
      this.optionsTabPage.initializeSendAfter();
      this.validateDetailForm();
    };
    this.updateScrollbarHandler = () => this.scrollbar.update();
    this.createTabs = () => {
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DetailsView, this.translateService.instant('SendFax.Details')));
      this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PageAttributesView, this.translateService.instant('SendFax.Options')));
    };
    this.activateTab = view => {
      if (document.activeElement) document.activeElement.blur();
      this.activeTab = view;
      this.scrollbar.update();
      this.cdr.detectChanges();
    };
    this.validateDetailForm = () => {
      const isValid = this.sendFaxService.isValidDetailForm();
      this.saveButton.disableControl(!isValid);
      if (!this.previewButton) return;
      this.separator.isVisible = this.previewButton.isVisible = this.canPreview();
      this.previewButton.isDisabled = !this.detailForm.recipients || this.detailForm.recipients.length == 0;
    };
    this.canPreview = () => {
      if (this.substitutions.find(x => x.hasSubstitutionMarkers(this.detailForm.message)) != null) return true;
      if (this.detailForm?.coverPage != undefined && this.substitutions.find(x => x.hasSubstitutionMarkers(this.detailForm?.coverPage?.htmlBody)) != null) return true;
      if (this.detailForm.coverPageId <= 0) return false;
      if (this.detailForm?.coverPage?.type == undefined) return false;
      return !(this.detailForm?.coverPage?.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageType.Html && this.detailForm?.coverPage?.coverpageBodyType == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CoverPageBodyType.None);
    };
    this.preview = () => {
      this.previewDetailForm = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FaxForm(this.detailForm);
      this.ngxSmartModalService.getModal('faxPreviewModal').open();
    };
    this.closePreviewModal = () => {
      this.ngxSmartModalService.getModal('faxPreviewModal').close();
      this.previewDetailForm = null;
    };
    this.showSendAfterContactListsWarning = () => {
      return this.detailForm.recipients.filter(r => r.value instanceof shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Recipient).map(r => r.value).some(r => r.type == shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.SendFaxRecipientType.ContactList);
    };
  }
  ngOnInit() {
    this.createTabs();
    this.createRightButtons();
    this.substitutions = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Substitutions(this.userState).getSendFaxSubstitutions();
    this.subscription.add(this.userState.userProfileChanged.subscribe(this.sendFaxService.userProfileChangedHandler));
    this.subscription.add(this.sendFaxService.faxUserProfileLoaded$.subscribe(loaded => this.faxUserProfileLoaded = loaded));
    this.subscription.add(this.sendFaxService.detailForm$.subscribe(detailForm => this.detailForm = detailForm));
  }
  ngAfterViewInit() {
    this.sendFaxService.loadSendFaxProfile(document.querySelector('.sendfax-form'), this.onSuccessLoadingProfile, this.onFailToLoadProfile);
  }
  updateFaxPageSettings(settings) {
    this.detailForm.faxPageSettings = settings;
    this.sendFaxService.setDetailForm(this.detailForm);
  }
  onFilesChange() {
    this.scrollbar.update();
  }
  onRecipientChanged() {
    if (this.previewDetailForm) this.previewDetailForm = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FaxForm(this.detailForm);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.sendFaxService.resetSendFaxState();
  }
  static {
    this.ɵfac = function SendFaxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SendFaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_6__.UserStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_2__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_5__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PrintToService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_blocks_services_send_fax_service__WEBPACK_IMPORTED_MODULE_4__.SendFaxService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: SendFaxComponent,
      selectors: [["app-send-fax"]],
      viewQuery: function SendFaxComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_src_app_views_send_fax_page_attributes_form_page_attributes_form_component__WEBPACK_IMPORTED_MODULE_1__.PageAttributesFormComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.optionsTabPage = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.scrollbar = _t.first);
        }
      },
      decls: 17,
      vars: 17,
      consts: [["scrollbar", "ngxPerfectScrollbar"], ["faxPreviewModal", ""], [1, "send-fax-component", "sendfax-form", "h-100", 3, "autoUpdatePerfectScroll"], [1, "product-items", "project-list-dashboard-body", "pi-component", "h-100", "d-flex", "flex-column"], [3, "headerText", "rightControls"], [1, "container-fluid", "overflow-visible", "col", "px-2", "my-2"], [1, "project-list-grid-panel", "h-100", "d-flex", "flex-column"], [1, "tab-menu", "d-flex", "flex-column", "h-100"], [1, "tabs-content"], [3, "tabSelected", "tabs", "activeTab"], ["fxFlex", "auto", 1, "tab-content", "min-h-fit-content", "px-1", "col", "d-flex", 3, "perfectScrollbar"], ["class", "w-100", "id", "home", 3, "hidden", "show", 4, "ngIf"], ["class", "w-100", "id", "menu1", 3, "hidden", "show", 4, "ngIf"], ["customClass", "fax-preview-modal", "identifier", "faxPreviewModal", 3, "closable", "escapable", "dismissable"], [3, "faxForm", "substitutions", "onClose", 4, "ngIf"], ["id", "home", 1, "w-100", 3, "hidden"], [3, "filesChanged", "recipientsChanged", "validateForm", "formData", "substitutions"], ["id", "menu1", 1, "w-100", 3, "hidden"], [3, "faxPageSettingsChanged", "faxPageSettings", "showSendAfterContactListsWarning"], [3, "onClose", "faxForm", "substitutions"]],
      template: function SendFaxComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-secondary-header", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "app-tab-bar", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("tabSelected", function SendFaxComponent_Template_app_tab_bar_tabSelected_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.activateTab($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, SendFaxComponent_div_11_Template, 2, 6, "div", 11)(12, SendFaxComponent_div_12_Template, 2, 5, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ngx-smart-modal", 13, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, SendFaxComponent_app_fax_preview_15_Template, 1, 2, "app-fax-preview", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "app-fax-success-modal");
        }
        if (rf & 2) {
          const scrollbar_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("disabled", !ctx.faxUserProfileLoaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("autoUpdatePerfectScroll", scrollbar_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 14, "SendFax.HeadText"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tabs", ctx.tabs)("activeTab", ctx.activeTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](16, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.faxUserProfileLoaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.faxUserProfileLoaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("closable", false)("escapable", true)("dismissable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.previewDetailForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalComponent, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_8__.TabBarComponent, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__.AutoUpdatePerfectScrollDirective, _details_form_details_form_component__WEBPACK_IMPORTED_MODULE_10__.DetailsFormComponent, _src_app_views_send_fax_page_attributes_form_page_attributes_form_component__WEBPACK_IMPORTED_MODULE_1__.PageAttributesFormComponent, _fax_preview_fax_preview_component__WEBPACK_IMPORTED_MODULE_11__.FaxPreviewComponent, _fax_success_modal_fax_success_modal_component__WEBPACK_IMPORTED_MODULE_12__.FaxSuccessModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
      styles: [".send-fax-component .project-list-grid-panel {\n  background: white;\n}\n.send-fax-component .tab-menu {\n  border-radius: 2px;\n}\n.send-fax-component .tab-menu .nav-tabs > li {\n  margin-bottom: -1.1px;\n  float: left;\n}\n.send-fax-component .tab-menu .nav > li {\n  position: relative;\n  display: block;\n  padding-top: 8px;\n}\n.send-fax-component .tab-menu .nav-tabs > li.active > a, .send-fax-component .tab-menu .nav-tabs > li.active > a:focus, .send-fax-component .tab-menu .nav-tabs > li.active > a:hover {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: solid 1px #9eb1ca;\n  border-bottom-color: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: left;\n  color: #151515;\n}\n.send-fax-component .tab-menu .nav-tabs > li.active > a, .send-fax-component .tab-menu .nav-tabs > li.active > a:focus, .send-fax-component .tab-menu .nav-tabs > li.active > a:hover {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: solid 1px #9eb1ca;\n  border-bottom-color: transparent;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: left;\n  color: #151515;\n}\n.send-fax-component .tab-menu .nav > li > a {\n  position: relative;\n  display: block;\n  padding: 8px 12px;\n}\n.send-fax-component .tab-menu .nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 2px 2px 0 0;\n  font-size: 12px;\n  text-align: left;\n  color: #151515;\n}\n.send-fax-component .tab-menu div.tabs-content.working-tab {\n  padding-top: 5px;\n  border-radius: 2px;\n  background-image: linear-gradient(to bottom, #e5f3f9, #f2f9fc);\n}\n.send-fax-component .pi-component .project-list-grid-panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf !important;\n}\n.send-fax-component .ng2-tag-input.ng2-tag-input--focused,\n.send-fax-component .ng2-tag-input {\n  border: none !important;\n}\n.send-fax-component tag-input tag {\n  letter-spacing: 0;\n  font-weight: 700;\n  color: #336fce;\n}\n.send-fax-component tag-input tag:hover {\n  color: black !important;\n}\n.send-fax-component tag-input tag:active {\n  background: #0d8aee;\n  color: #fff !important;\n  box-shadow: 0 2px 3px 1px #d4d1d1;\n}\n.send-fax-component tag-input tag div div {\n  display: inline;\n}\n.send-fax-component tag-input tag div div span {\n  display: inline;\n}\n.send-fax-component tag-input tag div div delete-icon svg {\n  height: auto !important;\n  vertical-align: middle !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3Mvc2VuZC1mYXgvc2VuZC1mYXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtBQURKO0FBR0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFETjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQU1NO0VBR0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOUjtBQVNNO0VBR0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFUUjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFYTjtBQWNJO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWk47QUFlSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtBQWJOO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtBQWZKO0FBa0JFOztFQUVFLHVCQUFBO0FBaEJKO0FBb0JJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFsQk47QUFvQk07RUFDRSx1QkFBQTtBQWxCUjtBQXFCTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQW5CUjtBQXVCUTtFQUNFLGVBQUE7QUFyQlY7QUF1QlU7RUFDRSxlQUFBO0FBckJaO0FBeUJZO0VBQ0UsdUJBQUE7RUFDQSxpQ0FBQTtBQXZCZCIsInNvdXJjZXNDb250ZW50IjpbIi5zZW5kLWZheC1jb21wb25lbnQge1xyXG4gIC5wcm9qZWN0LWxpc3QtZ3JpZC1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC50YWItbWVudSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcblxyXG4gICAgLm5hdi10YWJzID4gbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMS4xcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYgPiBsaSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi10YWJzIHtcclxuICAgICAgJiA+IGxpLmFjdGl2ZSA+IGEsXHJcbiAgICAgICYgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLFxyXG4gICAgICAmID4gbGkuYWN0aXZlID4gYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzllYjFjYTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAjMTUxNTE1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gbGkuYWN0aXZlID4gYSxcclxuICAgICAgJiA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMsXHJcbiAgICAgICYgPiBsaS5hY3RpdmUgPiBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjOWViMWNhO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmF2ID4gbGkgPiBhIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi10YWJzID4gbGkgPiBhIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnRhYnMtY29udGVudC53b3JraW5nLXRhYiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U1ZjNmOSwgI2YyZjlmYyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGktY29tcG9uZW50IC5wcm9qZWN0LWxpc3QtZ3JpZC1wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1mb2N1c2VkLFxyXG4gIC5uZzItdGFnLWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgdGFnLWlucHV0IHtcclxuICAgIHRhZyB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogIzMzNmZjZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBkOGFlZTtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAxcHggI2Q0ZDFkMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGVsZXRlLWljb24ge1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 60286:
/*!***************************************************!*\
  !*** ./src/app/views/send-fax/send-fax.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendFaxModule: () => (/* binding */ SendFaxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-chips */ 64542);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/box/box.module */ 20186);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/modals/modals.module */ 51188);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _details_form_details_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details-form/details-form.component */ 68926);
/* harmony import */ var _fax_preview_fax_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fax-preview/fax-preview.component */ 26054);
/* harmony import */ var _fax_success_modal_fax_success_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fax-success-modal/fax-success-modal.component */ 86206);
/* harmony import */ var _page_attributes_form_page_attributes_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-attributes-form/page-attributes-form.component */ 79324);
/* harmony import */ var _send_fax_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send-fax-routing.module */ 72079);
/* harmony import */ var _send_fax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-fax.component */ 68863);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 96623);


















class SendFaxModule {
  static {
    this.ɵfac = function SendFaxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SendFaxModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: SendFaxModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_0__.BoxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, ngx_chips__WEBPACK_IMPORTED_MODULE_14__.TagInputModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule, _send_fax_routing_module__WEBPACK_IMPORTED_MODULE_8__.SendFaxRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.ModalHeaderModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.OpenDropdownModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.FaxSubmissionUiModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.PaginationModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.PipesModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SendFaxModule, {
    declarations: [_send_fax_component__WEBPACK_IMPORTED_MODULE_9__.SendFaxComponent, _details_form_details_form_component__WEBPACK_IMPORTED_MODULE_4__.DetailsFormComponent, _page_attributes_form_page_attributes_form_component__WEBPACK_IMPORTED_MODULE_7__.PageAttributesFormComponent, _fax_preview_fax_preview_component__WEBPACK_IMPORTED_MODULE_5__.FaxPreviewComponent, _fax_success_modal_fax_success_modal_component__WEBPACK_IMPORTED_MODULE_6__.FaxSuccessModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_0__.BoxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, ngx_chips__WEBPACK_IMPORTED_MODULE_14__.TagInputModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule, _send_fax_routing_module__WEBPACK_IMPORTED_MODULE_8__.SendFaxRoutingModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.ModalHeaderModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.OpenDropdownModule, _blocks_modals_modals_module__WEBPACK_IMPORTED_MODULE_2__.ModalsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.FaxSubmissionUiModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.PaginationModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_10__.PipesModule],
    exports: [_details_form_details_form_component__WEBPACK_IMPORTED_MODULE_4__.DetailsFormComponent, _fax_success_modal_fax_success_modal_component__WEBPACK_IMPORTED_MODULE_6__.FaxSuccessModalComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_send-fax_send-fax_module_ts.js.map