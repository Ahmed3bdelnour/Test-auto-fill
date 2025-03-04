"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_upload_upload_module_ts"],{

/***/ 19631:
/*!*******************************************************************!*\
  !*** ./src/app/views/upload/upload-form/upload-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFormComponent: () => (/* binding */ UploadFormComponent)
/* harmony export */ });
/* harmony import */ var _blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/services/user-state.service */ 99038);
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload.component */ 58569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ 64542);
/* harmony import */ var _blocks_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/components/file-upload/file-upload.component */ 72080);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);









const _c0 = () => [32];
class UploadFormComponent {
  constructor(userState) {
    this.userState = userState;
  }
  ngOnInit() {
    this.supportedFiles = 'PDF, DOC, DOCX, TIF, XLS, XLSX, HTM, HTML, MHT, GIF, PNG, JPG, JPEG, RTF, BMP, ZIP';
    if (this.userState.getUser()) {
      this.formData.owner = [this.userState.getUser().name];
    }
    // todo: how to let the service know that the file has been pushed or pop
    // todo: how to make the tags to refresh when the quantity from the server has change
  }
  onItemAdded(chip, field) {
    this.formData[field].push(chip);
    this.validateForm();
  }
  onItemRemoved(chip, field) {
    this.formData[field] = this.formData[field].filter(chipItem => chipItem !== chip);
    this.validateForm();
  }
  fieldChange(value, field) {
    this.formData[field] = value;
    this.validateForm();
  }
  static {
    this.ɵfac = function UploadFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_blocks_services_user_state_service__WEBPACK_IMPORTED_MODULE_0__.UserStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: UploadFormComponent,
      selectors: [["app-upload-form"]],
      inputs: {
        formData: "formData",
        validateForm: "validateForm"
      },
      decls: 29,
      vars: 36,
      consts: [[1, "upload-form"], [1, "column-1"], [3, "localize", "required", "text"], [1, "form-control"], [3, "onRemove", "onAdd", "ngModel", "maxItems", "separatorKeyCodes"], ["type", "text", "name", "subject", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "column-2"], ["type", "text", "name", "unique-reference", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [3, "onRemove", "onAdd", "ngModel", "separatorKeyCodes", "secondaryPlaceholder"], ["appFileUpload", "", 1, "column-3", 3, "formData", "field", "validateForm", "supportedFiles", "isRequired", "uploadControlLabel"]],
      template: function UploadFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul")(3, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "tag-input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onRemove", function UploadFormComponent_Template_tag_input_onRemove_6_listener($event) {
            return ctx.onItemRemoved($event, "owner");
          })("onAdd", function UploadFormComponent_Template_tag_input_onAdd_6_listener($event) {
            return ctx.onItemAdded($event, "owner");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li")(8, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UploadFormComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.fieldChange($event, "subject");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "ul")(15, "li")(16, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UploadFormComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.fieldChange($event, "uniqueReference");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li")(22, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3)(26, "tag-input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onRemove", function UploadFormComponent_Template_tag_input_onRemove_26_listener($event) {
            return ctx.onItemRemoved($event, "privateTags");
          })("onAdd", function UploadFormComponent_Template_tag_input_onAdd_26_listener($event) {
            return ctx.onItemAdded($event, "privateTags");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("localize", true)("required", true)("text", "Upload-Form.Owner");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.formData.owner)("maxItems", 1)("separatorKeyCodes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 22, "Upload-Form.Subject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.formData.subject)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 24, "Upload-Form.EnterTextHere"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 26, "Upload-Form.UniqueReference"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.formData.uniqueReference)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 28, "Upload-Form.EnterTextHere"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 30, "Upload-Form.PrivateTag"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.formData.privateTags)("separatorKeyCodes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c0))("secondaryPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 32, "Upload-Form.EnterTags"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formData", ctx.formData)("field", "attachedItems")("validateForm", ctx.validateForm)("supportedFiles", ctx.supportedFiles)("isRequired", true)("uploadControlLabel", "Upload-Form.AddFileUpload");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ngx_chips__WEBPACK_IMPORTED_MODULE_6__.TagInputComponent, _blocks_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_3__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: [".upload-form {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: 12px;\n  min-width: 988px;\n  border-radius: 2px;\n}\n.upload-form div[class^=\"2columns\"] > ul,\n.upload-form div[class^=column] > ul,\n.upload-form div[class^=inner-column] > ul {\n  padding: 0;\n  margin-right: 24px;\n  min-width: 300px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li,\n.upload-form div[class^=column] > ul > li,\n.upload-form div[class^=inner-column] > ul > li {\n  list-style: none;\n  padding-top: 12px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li label,\n.upload-form div[class^=column] > ul > li label,\n.upload-form div[class^=inner-column] > ul > li label {\n  font-size: 12px;\n  color: hsl(0, 0%, 43%);\n  margin-bottom: 4px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li label.required,\n.upload-form div[class^=column] > ul > li label.required,\n.upload-form div[class^=inner-column] > ul > li label.required {\n  font-weight: 600;\n}\n.upload-form div[class^=\"2columns\"] > ul > li input:not(input[type=checkbox]),\n.upload-form div[class^=\"2columns\"] > ul > li .drop-down .form-control,\n.upload-form div[class^=column] > ul > li input:not(input[type=checkbox]),\n.upload-form div[class^=column] > ul > li .drop-down .form-control,\n.upload-form div[class^=inner-column] > ul > li input:not(input[type=checkbox]),\n.upload-form div[class^=inner-column] > ul > li .drop-down .form-control {\n  width: 100%;\n  border-radius: 2px;\n  background-color: #ffffff;\n  padding: 2px;\n  padding-inline-start: 10px;\n  font-size: 12px;\n  height: 32px;\n  text-align: start;\n}\n.upload-form div[class^=\"2columns\"] > ul > li .drop-down .form-control,\n.upload-form div[class^=column] > ul > li .drop-down .form-control,\n.upload-form div[class^=inner-column] > ul > li .drop-down .form-control {\n  padding-inline-start: 7px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control,\n.upload-form div[class^=column] > ul > li div.form-control,\n.upload-form div[class^=inner-column] > ul > li div.form-control {\n  height: 100%;\n  padding: 0;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control tag-input,\n.upload-form div[class^=column] > ul > li div.form-control tag-input,\n.upload-form div[class^=inner-column] > ul > li div.form-control tag-input {\n  width: 100%;\n  height: 100%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input {\n  padding: 0px;\n  min-height: 28px !important;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container {\n  min-height: 30px;\n  overflow: hidden;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form {\n  margin: 0;\n  height: 100%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form input,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form input,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input div.ng2-tags-container form input {\n  height: 100%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input tag,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input tag,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input tag {\n  height: 24px;\n  line-height: 24px;\n  border-radius: 4px;\n  font-size: 11px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input tag delete-icon span,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input tag delete-icon span,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input tag delete-icon span {\n  padding-left: 2px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=column] > ul > li div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=inner-column] > ul > li div.form-control div.ng2-tag-input tag-input-form form input {\n  position: relative;\n  border: none;\n  border-width: 0;\n  box-shadow: none;\n  height: 24px;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type,\n.upload-form div[class^=column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type,\n.upload-form div[class^=inner-column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type {\n  margin-left: 21%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type ~ tag-input-form form input,\n.upload-form div[class^=column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type ~ tag-input-form form input,\n.upload-form div[class^=inner-column] > ul > li div.combo div.form-control div.ng2-tag-input tag:first-of-type ~ tag-input-form form input {\n  margin-left: 2%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li div.combo div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=column] > ul > li div.combo div.form-control div.ng2-tag-input tag-input-form form input,\n.upload-form div[class^=inner-column] > ul > li div.combo div.form-control div.ng2-tag-input tag-input-form form input {\n  margin-left: 50%;\n}\n.upload-form div[class^=\"2columns\"] > ul > li .form-control,\n.upload-form div[class^=column] > ul > li .form-control,\n.upload-form div[class^=inner-column] > ul > li .form-control {\n  height: 32px;\n}\n.upload-form div[class^=column] {\n  flex: 1;\n}\n.upload-form div[class^=\"2columns\"] {\n  flex: 2;\n}\n.upload-form div[class^=\"2columns\"] .inner {\n  display: flex;\n}\n.upload-form div[class^=\"2columns\"] .inner div[class^=inner-column] {\n  flex: 1;\n}\n.upload-form div.column-3 > ul {\n  margin-right: 12px;\n}\n.upload-form div.combo {\n  position: relative;\n}\n.upload-form div.combo div[class^=inner-column] > ul > li tag-input {\n  display: inline;\n}\n.upload-form div.combo div.dropdown.dd-add-delete {\n  float: left;\n  width: 20%;\n  max-height: 32px;\n}\n.upload-form div.combo div.dropdown.dd-add-delete.dropdown-menu-right.selectable {\n  z-index: 1;\n}\n.upload-form div.combo .nav-right .dropdown-menu,\n.upload-form div.combo .dropdown-menu.pull-right {\n  right: auto;\n  left: auto;\n}\n.upload-form ul li span.asterisk {\n  font-weight: 600;\n  color: #197b30;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3VwbG9hZC1mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL3VwbG9hZC91cGxvYWQtZm9ybS91cGxvYWQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURLSTs7O0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNETjtBREdNOzs7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDUTs7O0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNHVjtBREZVOzs7RUFDRSxnQkFBQTtBQ01aO0FERlE7Ozs7OztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1FWO0FETFE7OztFQUNFLHlCQUFBO0FDU1Y7QUROUTs7O0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNVVjtBRFJVOzs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1laO0FEVFU7OztFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQ2FaO0FEWFk7OztFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNlZDtBRGRjOzs7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ2tCaEI7QURqQmdCOzs7RUFDRSxZQUFBO0FDcUJsQjtBRGhCWTs7O0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDb0JkO0FEakJnQjs7O0VBQ0UsaUJBQUE7QUNxQmxCO0FEZGdCOzs7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDa0JsQjtBRFBnQjs7O0VBQ0UsZ0JBQUE7QUNXbEI7QURQc0I7OztFQUNFLGVBQUE7QUNXeEI7QURGa0I7OztFQUNFLGdCQUFBO0FDTXBCO0FERVE7OztFQUNFLFlBQUE7QUNFVjtBRElFO0VBQ0UsT0FBQTtBQ0ZKO0FES0U7RUFDRSxPQUFBO0FDSEo7QURLSTtFQUNFLGFBQUE7QUNITjtBREtNO0VBQ0UsT0FBQTtBQ0hSO0FEU0k7RUFDRSxrQkFBQTtBQ1BOO0FEV0U7RUFDRSxrQkFBQTtBQ1RKO0FEWU07RUFDRSxlQUFBO0FDVlI7QURjSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNaTjtBRGVJO0VBQ0UsVUFBQTtBQ2JOO0FEZ0JJOztFQUVFLFdBQUE7RUFDQSxVQUFBO0FDZE47QURvQk07RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNsQlIiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG5cclxuICBtaW4td2lkdGg6IDk4OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgZGl2W2NsYXNzXj0nMmNvbHVtbnMnXSxcclxuICBkaXZbY2xhc3NePSdjb2x1bW4nXSxcclxuICBkaXZbY2xhc3NePSdpbm5lci1jb2x1bW4nXSB7XHJcbiAgICAmID4gdWwge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAmID4gbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiBoc2woMCwgMCUsIDQzJSk7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Om5vdChpbnB1dFt0eXBlPSdjaGVja2JveCddKSxcclxuICAgICAgICAuZHJvcC1kb3duIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kcm9wLWRvd24gLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgIHRhZy1pbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGl2Lm5nMi10YWctaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGRpdi5uZzItdGFncy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFnIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgICAgICAgICAgICAgZGVsZXRlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFnLWlucHV0LWZvcm0ge1xyXG4gICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuY29tYm8ge1xyXG4gICAgICAgICAgZGl2LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIGRpdi5uZzItdGFnLWlucHV0IHtcclxuICAgICAgICAgICAgICB0YWcge1xyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICYgfiB0YWctaW5wdXQtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRhZy1pbnB1dC1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXZbY2xhc3NePSdjb2x1bW4nXSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgZGl2W2NsYXNzXj0nMmNvbHVtbnMnXSB7XHJcbiAgICBmbGV4OiAyO1xyXG5cclxuICAgIC5pbm5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBkaXZbY2xhc3NePSdpbm5lci1jb2x1bW4nXSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmNvbHVtbi0zIHtcclxuICAgICYgPiB1bCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdi5jb21ibyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGl2W2NsYXNzXj0naW5uZXItY29sdW1uJ10gPiB1bCA+IGxpIHtcclxuICAgICAgdGFnLWlucHV0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXYuZHJvcGRvd24uZGQtYWRkLWRlbGV0ZSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kcm9wZG93bi5kZC1hZGQtZGVsZXRlLmRyb3Bkb3duLW1lbnUtcmlnaHQuc2VsZWN0YWJsZSB7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1yaWdodCAuZHJvcGRvd24tbWVudSxcclxuICAgIC5kcm9wZG93bi1tZW51LnB1bGwtcmlnaHQge1xyXG4gICAgICByaWdodDogYXV0bztcclxuICAgICAgbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgJiBzcGFuLmFzdGVyaXNrIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMTk3YjMwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi51cGxvYWQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1pbi13aWR0aDogOTg4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWlubmVyLWNvbHVtbl0gPiB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149Y29sdW1uXSA+IHVsID4gbGksXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149XCIyY29sdW1uc1wiXSA+IHVsID4gbGkgbGFiZWwsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1jb2x1bW5dID4gdWwgPiBsaSBsYWJlbCxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWlubmVyLWNvbHVtbl0gPiB1bCA+IGxpIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogaHNsKDAsIDAlLCA0MyUpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1cIjJjb2x1bW5zXCJdID4gdWwgPiBsaSBsYWJlbC5yZXF1aXJlZCxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCA+IGxpIGxhYmVsLnJlcXVpcmVkLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgbGFiZWwucmVxdWlyZWQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149XCIyY29sdW1uc1wiXSA+IHVsID4gbGkgaW5wdXQ6bm90KGlucHV0W3R5cGU9Y2hlY2tib3hdKSxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpIC5kcm9wLWRvd24gLmZvcm0tY29udHJvbCxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCA+IGxpIGlucHV0Om5vdChpbnB1dFt0eXBlPWNoZWNrYm94XSksXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1jb2x1bW5dID4gdWwgPiBsaSAuZHJvcC1kb3duIC5mb3JtLWNvbnRyb2wsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSBpbnB1dDpub3QoaW5wdXRbdHlwZT1jaGVja2JveF0pLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgLmRyb3AtZG93biAuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMnB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149XCIyY29sdW1uc1wiXSA+IHVsID4gbGkgLmRyb3AtZG93biAuZm9ybS1jb250cm9sLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149Y29sdW1uXSA+IHVsID4gbGkgLmRyb3AtZG93biAuZm9ybS1jb250cm9sLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgLmRyb3AtZG93biAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDdweDtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1jb2x1bW5dID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgZGl2LmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgdGFnLWlucHV0LFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149Y29sdW1uXSA+IHVsID4gbGkgZGl2LmZvcm0tY29udHJvbCB0YWctaW5wdXQsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIHRhZy1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1cIjJjb2x1bW5zXCJdID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0LFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149Y29sdW1uXSA+IHVsID4gbGkgZGl2LmZvcm0tY29udHJvbCBkaXYubmcyLXRhZy1pbnB1dCxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWlubmVyLWNvbHVtbl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgZGl2Lm5nMi10YWdzLWNvbnRhaW5lcixcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgZGl2Lm5nMi10YWdzLWNvbnRhaW5lcixcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWlubmVyLWNvbHVtbl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgZGl2Lm5nMi10YWdzLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1cIjJjb2x1bW5zXCJdID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IGRpdi5uZzItdGFncy1jb250YWluZXIgZm9ybSxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgZGl2Lm5nMi10YWdzLWNvbnRhaW5lciBmb3JtLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgZGl2LmZvcm0tY29udHJvbCBkaXYubmcyLXRhZy1pbnB1dCBkaXYubmcyLXRhZ3MtY29udGFpbmVyIGZvcm0ge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgZGl2Lm5nMi10YWdzLWNvbnRhaW5lciBmb3JtIGlucHV0LFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149Y29sdW1uXSA+IHVsID4gbGkgZGl2LmZvcm0tY29udHJvbCBkaXYubmcyLXRhZy1pbnB1dCBkaXYubmcyLXRhZ3MtY29udGFpbmVyIGZvcm0gaW5wdXQsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IGRpdi5uZzItdGFncy1jb250YWluZXIgZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgdGFnLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149Y29sdW1uXSA+IHVsID4gbGkgZGl2LmZvcm0tY29udHJvbCBkaXYubmcyLXRhZy1pbnB1dCB0YWcsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IHRhZyB7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149XCIyY29sdW1uc1wiXSA+IHVsID4gbGkgZGl2LmZvcm0tY29udHJvbCBkaXYubmcyLXRhZy1pbnB1dCB0YWcgZGVsZXRlLWljb24gc3Bhbixcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCA+IGxpIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgdGFnIGRlbGV0ZS1pY29uIHNwYW4sXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IHRhZyBkZWxldGUtaWNvbiBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1cIjJjb2x1bW5zXCJdID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IHRhZy1pbnB1dC1mb3JtIGZvcm0gaW5wdXQsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1jb2x1bW5dID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IHRhZy1pbnB1dC1mb3JtIGZvcm0gaW5wdXQsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IHRhZy1pbnB1dC1mb3JtIGZvcm0gaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDI0cHg7XG59XG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1cIjJjb2x1bW5zXCJdID4gdWwgPiBsaSBkaXYuY29tYm8gZGl2LmZvcm0tY29udHJvbCBkaXYubmcyLXRhZy1pbnB1dCB0YWc6Zmlyc3Qtb2YtdHlwZSxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCA+IGxpIGRpdi5jb21ibyBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IHRhZzpmaXJzdC1vZi10eXBlLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgZGl2LmNvbWJvIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgdGFnOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMjElO1xufVxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149XCIyY29sdW1uc1wiXSA+IHVsID4gbGkgZGl2LmNvbWJvIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgdGFnOmZpcnN0LW9mLXR5cGUgfiB0YWctaW5wdXQtZm9ybSBmb3JtIGlucHV0LFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149Y29sdW1uXSA+IHVsID4gbGkgZGl2LmNvbWJvIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgdGFnOmZpcnN0LW9mLXR5cGUgfiB0YWctaW5wdXQtZm9ybSBmb3JtIGlucHV0LFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgZGl2LmNvbWJvIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgdGFnOmZpcnN0LW9mLXR5cGUgfiB0YWctaW5wdXQtZm9ybSBmb3JtIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149XCIyY29sdW1uc1wiXSA+IHVsID4gbGkgZGl2LmNvbWJvIGRpdi5mb3JtLWNvbnRyb2wgZGl2Lm5nMi10YWctaW5wdXQgdGFnLWlucHV0LWZvcm0gZm9ybSBpbnB1dCxcbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0gPiB1bCA+IGxpIGRpdi5jb21ibyBkaXYuZm9ybS1jb250cm9sIGRpdi5uZzItdGFnLWlucHV0IHRhZy1pbnB1dC1mb3JtIGZvcm0gaW5wdXQsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSBkaXYuY29tYm8gZGl2LmZvcm0tY29udHJvbCBkaXYubmcyLXRhZy1pbnB1dCB0YWctaW5wdXQtZm9ybSBmb3JtIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePVwiMmNvbHVtbnNcIl0gPiB1bCA+IGxpIC5mb3JtLWNvbnRyb2wsXG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1jb2x1bW5dID4gdWwgPiBsaSAuZm9ybS1jb250cm9sLFxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149aW5uZXItY29sdW1uXSA+IHVsID4gbGkgLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMzJweDtcbn1cbi51cGxvYWQtZm9ybSBkaXZbY2xhc3NePWNvbHVtbl0ge1xuICBmbGV4OiAxO1xufVxuLnVwbG9hZC1mb3JtIGRpdltjbGFzc149XCIyY29sdW1uc1wiXSB7XG4gIGZsZXg6IDI7XG59XG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1cIjJjb2x1bW5zXCJdIC5pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udXBsb2FkLWZvcm0gZGl2W2NsYXNzXj1cIjJjb2x1bW5zXCJdIC5pbm5lciBkaXZbY2xhc3NePWlubmVyLWNvbHVtbl0ge1xuICBmbGV4OiAxO1xufVxuLnVwbG9hZC1mb3JtIGRpdi5jb2x1bW4tMyA+IHVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLnVwbG9hZC1mb3JtIGRpdi5jb21ibyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51cGxvYWQtZm9ybSBkaXYuY29tYm8gZGl2W2NsYXNzXj1pbm5lci1jb2x1bW5dID4gdWwgPiBsaSB0YWctaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4udXBsb2FkLWZvcm0gZGl2LmNvbWJvIGRpdi5kcm9wZG93bi5kZC1hZGQtZGVsZXRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMCU7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG59XG4udXBsb2FkLWZvcm0gZGl2LmNvbWJvIGRpdi5kcm9wZG93bi5kZC1hZGQtZGVsZXRlLmRyb3Bkb3duLW1lbnUtcmlnaHQuc2VsZWN0YWJsZSB7XG4gIHotaW5kZXg6IDE7XG59XG4udXBsb2FkLWZvcm0gZGl2LmNvbWJvIC5uYXYtcmlnaHQgLmRyb3Bkb3duLW1lbnUsXG4udXBsb2FkLWZvcm0gZGl2LmNvbWJvIC5kcm9wZG93bi1tZW51LnB1bGwtcmlnaHQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogYXV0bztcbn1cbi51cGxvYWQtZm9ybSB1bCBsaSBzcGFuLmFzdGVyaXNrIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxOTdiMzA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87502:
/*!****************************************************************!*\
  !*** ./src/app/views/upload/upload-form/upload-form.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFormModule: () => (/* binding */ UploadFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _upload_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-form.component */ 19631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ 64542);
/* harmony import */ var _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/directives/directives.module */ 21084);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);









class UploadFormModule {
  static {
    this.ɵfac = function UploadFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadFormModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: UploadFormModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.LabelModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UploadFormModule, {
    declarations: [_upload_form_component__WEBPACK_IMPORTED_MODULE_0__.UploadFormComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _blocks_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_3__.LabelModule],
    exports: [_upload_form_component__WEBPACK_IMPORTED_MODULE_0__.UploadFormComponent]
  });
})();

/***/ }),

/***/ 76661:
/*!*******************************************************!*\
  !*** ./src/app/views/upload/upload-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadRoutingModule: () => (/* binding */ UploadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.component */ 58569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'bamba-upload',
  component: _upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent,
  pathMatch: 'full'
}, {
  path: 'api/downloaddocument',
  component: _upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent,
  pathMatch: 'full'
}];
class UploadRoutingModule {
  static {
    this.ɵfac = function UploadRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UploadRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UploadRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 58569:
/*!**************************************************!*\
  !*** ./src/app/views/upload/upload.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadComponent: () => (/* binding */ UploadComponent),
/* harmony export */   UploadForm: () => (/* binding */ UploadForm)
/* harmony export */ });
/* harmony import */ var _blocks_services_content_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/services/content-post.service */ 10235);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41099);








class UploadForm {
  constructor(item) {
    this.owner = [];
    this.privateTags = [];
    this.uniqueReference = '';
    this.subject = '';
    this.customProperties = [];
    this.attachedItems = [];
    this.owner = item.owner ? item.owner : this.owner;
    this.privateTags = item.privateTags ? item.privateTags : this.privateTags;
    this.uniqueReference = item.uniqueReference ? item.uniqueReference : this.uniqueReference;
    this.subject = item.subject ? item.subject : this.subject;
    this.customProperties = item.customProperties ? item.customProperties : this.customProperties;
    this.attachedItems = item.attachedItems ? item.attachedItems : this.attachedItems;
  }
}
class UploadComponent {
  constructor(contentPostService, translate, router) {
    this.contentPostService = contentPostService;
    this.translate = translate;
    this.router = router;
    this.uploadData = new UploadForm({});
    this.breadCrumbs = [];
    this.rightControls = [];
    // uploadLabel: Dictionary = new Dictionary('Upload', '');
    // cancelLabel: Dictionary = new Dictionary('Cancel', '');
    this.uploadForm = new UploadForm({});
    this.homeLabel = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__.Dictionary('Home', '/');
    this.saveDocuments = () => {
      const element = document.querySelector('.upload-form');
      this.contentPostService.uploadFile(element, this.uploadForm);
    };
    this.cancel = () => {
      //todo: confirm if there are changes
      this.router.navigateByUrl('home');
    };
    this.validateForm = () => {};
  }
  ngOnInit() {
    this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__.Control(this.saveDocuments, 'Upload', 'btn btn-primary', '', 'Upload', 'btn', true);
    this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_1__.Control(this.cancel, 'Cancel', 'btn btn-light', '', 'Cancel', 'btn', false);
    this.rightControls.push(this.saveButton);
    this.rightControls.push(this.cancelButton);
    this.saveButton.setTranslation(this.translate.instant('Upload.Upload'));
    this.cancelButton.setTranslation(this.translate.instant('Upload.Cancel'));
    this.homeLabel.updateKey(this.translate.instant('Home'));
  }
  static {
    this.ɵfac = function UploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_blocks_services_content_post_service__WEBPACK_IMPORTED_MODULE_0__.ContentPostService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: UploadComponent,
      selectors: [["app-upload"]],
      decls: 6,
      vars: 7,
      consts: [[3, "headerText", "breadCrumbs", "rightControls"], [1, "upload", "project-list-dashboard-body"], [1, "container-fluid"], ["id", "spinnerPanel", 1, "project-list-grid-panel"], [3, "validateForm", "formData"]],
      template: function UploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-secondary-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-upload-form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, "Upload.HeadText"))("breadCrumbs", ctx.breadCrumbs)("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("validateForm", ctx.validateForm)("formData", ctx.uploadForm);
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 83996:
/*!***********************************************!*\
  !*** ./src/app/views/upload/upload.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadModule: () => (/* binding */ UploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.component */ 58569);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-file-drop */ 78552);
/* harmony import */ var _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/box/box.module */ 20186);
/* harmony import */ var _upload_form_upload_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-form/upload-form.module */ 87502);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-routing.module */ 76661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-form/upload-form.component */ 19631);












class UploadModule {
  static {
    this.ɵfac = function UploadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: UploadModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_1__.BoxModule, _upload_form_upload_form_module__WEBPACK_IMPORTED_MODULE_2__.UploadFormModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__.NgxFileDropModule, _upload_routing_module__WEBPACK_IMPORTED_MODULE_4__.UploadRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UploadModule, {
    declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_3__.PageModule, _blocks_box_box_module__WEBPACK_IMPORTED_MODULE_1__.BoxModule, _upload_form_upload_form_module__WEBPACK_IMPORTED_MODULE_2__.UploadFormModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__.NgxFileDropModule, _upload_routing_module__WEBPACK_IMPORTED_MODULE_4__.UploadRoutingModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetComponentScope"](_upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent, [_blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_5__.SecondaryHeaderComponent, _upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_6__.UploadFormComponent], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe]);

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_upload_upload_module_ts.js.map