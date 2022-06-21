(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AttachmentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentList */ "./resources/adminapp/js/components/Attachments/AttachmentList.vue");
/* harmony import */ var _AttachmentPictures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachmentPictures */ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    AttachmentList: _AttachmentList__WEBPACK_IMPORTED_MODULE_1__["default"],
    AttachmentPictures: _AttachmentPictures__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    accept: {
      type: String,
      "default": null
    },
    component: {
      type: String,
      "default": 'list',
      validator: function validator(value) {
        return ['list', 'pictures'].indexOf(value) !== -1;
      }
    },
    route: {
      type: String,
      required: true
    },
    maxFiles: {
      type: Number,
      "default": null
    },
    maxFileSize: {
      type: Number,
      "default": 2
    },
    collectionName: {
      type: String,
      required: true
    },
    media: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    modelId: {
      type: [String, Number],
      "default": 0
    }
  },
  data: function data() {
    return {
      hasFiles: false,
      childKey: 1,
      tmpAttachments: [],
      options: {
        url: this.route,
        maxFiles: this.maxFiles,
        maxFilesize: this.maxFileSize,
        acceptedFiles: this.accept,
        thumbnailWidth: 120,
        addRemoveLinks: true,
        timeout: 0,
        params: {
          size: this.maxFileSize,
          collection_name: this.collectionName,
          model_id: this.modelId
        },
        previewsContainer: '.attachment-list-container',
        previewTemplate: '<div class="d-none"></div>',
        headers: {
          'X-XSRF-TOKEN': this.$getCookie('XSRF-TOKEN')
        }
      }
    };
  },
  computed: {
    uid: function uid() {
      return "dropzone-".concat(this._uid);
    },
    previewComponent: function previewComponent() {
      return "attachment-".concat(this.component);
    }
  },
  watch: {
    tmpAttachments: {
      handler: function handler() {
        this.hasFiles = this.media.length + this.tmpAttachments.length;
      },
      deep: true
    },
    media: {
      handler: function handler() {
        this.hasFiles = this.media.length + this.tmpAttachments.length;

        if (this.maxFiles === null) {
          return;
        }

        var dz = this.$refs[this.uid];
        var fo = this.media.filter(function (item) {
          return item.wasRecentlyCreated !== true;
        });
        dz.dropzone.options.maxFiles = this.maxFiles - fo.length;
      },
      deep: true
    }
  },
  methods: {
    addTmpFile: function addTmpFile(file) {
      var attachment = {};
      attachment.uuid = file.upload.uuid;
      attachment.id = null;
      attachment.file_name = file.name;
      attachment.size = file.size;
      attachment.progress = null;
      attachment.errorMsg = null;
      attachment.o = file;
      attachment.preview_thumbnail = null;
      this.tmpAttachments.push(attachment);
    },
    uploadProgress: function uploadProgress(file, progress, bytesSent) {
      this.tmpAttachments.map(function (attachment) {
        if (attachment.uuid === file.upload.uuid) {
          attachment.progress = "".concat(Math.floor(progress));
        }
      });
    },
    success: function success(file, response) {
      var model = response;
      model.wasRecentlyCreated = true;
      this.fileUploaded(model);
    },
    error: function error(file, message, xhr) {
      this.tmpAttachments.map(function (attachment) {
        if (attachment.uuid === file.upload.uuid) {
          attachment.errorMsg = message;
        }
      });
    },
    handleTmpFileRemoved: function handleTmpFileRemoved(file) {
      console.log(file);

      if (_.includes(['canceled', 'error'], file.o.status)) {
        this.removeTmpFile(file);
        return;
      }

      if (file.o.status === 'uploading') {
        this.$refs[this.uid].removeFile(file.o);
        return;
      }

      if (file.o.status === 'success') {
        this.removeTmpFile(file);
        this.fileRemoved(file);
        this.$refs[this.uid].removeFile(file.o);
        return;
      }

      if (file.o.status === 'queued') {
        this.cancelQueuedFile(file);
        this.$refs[this.uid].removeFile(file.o);
        return;
      }
    },
    removeTmpFile: function removeTmpFile(file) {
      this.tmpAttachments = this.tmpAttachments.filter(function (attachment) {
        return attachment.uuid !== file.o.upload.uuid;
      });
    },
    cancelQueuedFile: function cancelQueuedFile(file) {
      this.tmpAttachments.map(function (attachment) {
        if (attachment.uuid === file.o.upload.uuid) {
          attachment.o.status = 'canceled';
          attachment.errorMsg = 'Upload canceled.';
        }
      });
    },
    updateDataUrl: function updateDataUrl(file, dataURL) {
      this.tmpAttachments.map(function (attachment) {
        if (attachment.uuid === file.upload.uuid) {
          attachment.preview_thumbnail = dataURL;
        }
      });
    },
    fileRemoved: function fileRemoved(file) {
      this.$emit('file-removed', file);
    },
    fileUploaded: function fileUploaded(file) {
      this.$emit('file-uploaded', file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AttachmentList',
  props: {
    tmpAttachments: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    attachments: {
      type: Array
    },
    modelId: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    checkProgress: function checkProgress(attachment) {
      this.tableKey += 1;
      return attachment.progress === null ? false : true;
    },
    isCanceledOrError: function isCanceledOrError(file) {
      return file.status === 'canceled' || file.status === 'error';
    },
    isUploading: function isUploading(file) {
      return file.status === 'canceled' || file.status === 'error' || file.status === 'success';
    },
    removeTmpFile: function removeTmpFile(file) {
      this.$emit('tmp-file-removed', file);
    },
    filesize: function filesize(bytes) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (bytes === 0) return '0 Bytes';
      var k = 1000;
      var dm = decimals < 0 ? 0 : decimals;
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AttachmentPictures',
  props: {
    tmpAttachments: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    attachments: {
      type: Array
    },
    modelId: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    checkProgress: function checkProgress(attachment) {
      this.tableKey += 1;
      return attachment.progress === null ? false : true;
    },
    isCanceledOrError: function isCanceledOrError(file) {
      return file.status === 'canceled' || file.status === 'error';
    },
    isUploading: function isUploading(file) {
      return file.status === 'canceled' || file.status === 'error' || file.status === 'success';
    },
    removeTmpFile: function removeTmpFile(file) {
      this.$emit('tmp-file-removed', file);
    },
    filesize: function filesize(bytes) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (bytes === 0) return '0 Bytes';
      var k = 1000;
      var dm = decimals < 0 ? 0 : decimals;
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['field', 'row']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
/* harmony import */ var _components_Datatables_DatatablePictures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Datatables/DatatablePictures */ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"],
    DatatablePictures: _components_Datatables_DatatablePictures__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      status: "",
      activeField: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("GadListSingle", ["entry", "loading", "lists"])), {}, {
    total_age: function total_age() {
      var today = new Date();
      var birthDate = new Date(this.entry.birth_date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }

      return age;
    },
    calamba_residence: function calamba_residence() {
      var date = this.entry.calamba_residence_year;

      if (date > new Date().getFullYear() - 1) {
        return "Immigrant";
      } else if (date < new Date().getFullYear() - 2) {
        return "Native";
      } else {
        return "Transient";
      }
    },
    barangay_residence: function barangay_residence() {
      var date = this.entry.barangay_residence_year;

      if (date > new Date().getFullYear() - 1) {
        return "Immigrant";
      } else if (date < new Date().getFullYear() - 2) {
        return "Native";
      } else {
        return "Transient";
      }
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler: function handler() {
        this.resetState();
        this.fetchEditData(this.$route.params.id);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("GadListSingle", ['setEmail', 'setMobileNumber', 'setGender', 'setFamilyCode', 'setHousehold', 'setCivilStatus', 'setSpouseName', 'setBirthdate', 'setGenderPreference', 'setValidID', 'setIDNumber', 'setReligion', 'setEthnicity', 'setSector', 'setPoliticalProvinceRegistered', 'setPoliticalCityRegistered', 'setBuildingHouseUnit', 'setBlockNoStreet', 'setSitio', 'setPurok', 'setYearsInCalamba', 'setYearsInBarangay', 'setEducationalAttaintment', 'setEducationalStatus', 'setLastSchoolAttended', 'setGovernmentAssistance', 'setOrganization', 'setOccupation', 'setEmployer', 'setWorkLocationProvince', 'setWorkLocationCity', 'setMonthlyIncome', 'setBarangay', 'setHouseholdNumber', 'setSoftSkills', 'setHardSkills', 'setHobbies', 'setSports', 'setHouseOwnership', 'setHouseType', 'setHouseMake', 'setNuclearFamilyHousehold', 'setBedRooms', 'setCRID', 'setPoliticalBarangay', 'setPoliticalPrecintNumber', 'fetchEditData', 'insertPhotoFile', 'removePhotoFile', 'setRemarks', 'resetState', 'setLandlineNumber', 'setTitle', 'setVehicle', 'setAppliance', 'setUtilities', 'setFullImmunization', 'setMedicine', 'setPregnancyAge', 'setPrentalCheckup', 'setPostalCheckup', 'setBrand1', 'setFirstDateVaccination', 'setBrand2', 'setSecondDateVaccination', 'updateData'])), {}, {
    switchSelect: function switchSelect(e) {
      var value = e.target.value;
      $("#myTab li a").eq(value).tab("show");
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    updateBrand1: function updateBrand1(e) {
      this.setBrand1(e.target.value);
    },
    updateFirstDateVaccination: function updateFirstDateVaccination(e) {
      this.setFirstDateVaccination(e.target.value);
    },
    updateBrand2: function updateBrand2(e) {
      this.setBrand2(e.target.value);
    },
    updateSecondDateVaccination: function updateSecondDateVaccination(e) {
      this.setSecondDateVaccination(e.target.value);
    },
    updateNuclearFamilyHousehold: function updateNuclearFamilyHousehold(e) {
      this.setNuclearFamilyHousehold(e.target.value);
    },
    updateBedRooms: function updateBedRooms(e) {
      this.setBedRooms(e.target.value);
    },
    updateFullImmunization: function updateFullImmunization(e) {
      this.setFullImmunization(e.target.value);
    },
    updateMedicine: function updateMedicine(e) {
      this.setMedicine(e);
    },
    updatePregnancyAge: function updatePregnancyAge(e) {
      this.setPregnancyAge(e.target.value);
    },
    updatePrentalCheckup: function updatePrentalCheckup(e) {
      this.setPrentalCheckup(e.target.value);
    },
    updatePostalCheckup: function updatePostalCheckup(e) {
      this.setPostalCheckup(e.target.value);
    },
    updateCRID: function updateCRID(e) {
      this.setCRID(e.target.value);
    },
    updatePoliticalPrecintNumber: function updatePoliticalPrecintNumber(e) {
      this.setPoliticalPrecintNumber(e.target.value);
    },
    updatePoliticalBarangay: function updatePoliticalBarangay(e) {
      this.setPoliticalBarangay(e.target.value);
    },
    updateSoftSkills: function updateSoftSkills(e) {
      this.setSoftSkills(e);
    },
    updateHardSkills: function updateHardSkills(e) {
      this.setHardSkills(e);
    },
    updateHobbies: function updateHobbies(e) {
      this.setHobbies(e);
    },
    updateSports: function updateSports(e) {
      this.setSports(e);
    },
    updateHouseOwnership: function updateHouseOwnership(e) {
      this.setHouseOwnership(e);
    },
    updateHouseType: function updateHouseType(e) {
      this.setHouseType(e);
    },
    updateHouseMake: function updateHouseMake(e) {
      this.setHouseMake(e);
    },
    updateBarangay: function updateBarangay(e) {
      this.setBarangay(e);
    },
    updateHouseholdNumber: function updateHouseholdNumber(e) {
      this.setHouseholdNumber(e.target.value);
    },
    updateLandlineNumber: function updateLandlineNumber(e) {
      this.setLandlineNumber(e.target.value);
    },
    updateEmail: function updateEmail(e) {
      this.setEmail(e.target.value);
    },
    updateMobileNumber: function updateMobileNumber(e) {
      this.setMobileNumber(e.target.value);
    },
    updateGender: function updateGender(e) {
      this.setGender(e);
    },
    updateGenderPreference: function updateGenderPreference(e) {
      this.setGenderPreference(e);
    },
    updateFamilyCode: function updateFamilyCode(e) {
      this.setFamilyCode(e.target.value);
    },
    updateHousehold: function updateHousehold(e) {
      this.setHousehold(e);
    },
    updateCivilStatus: function updateCivilStatus(e) {
      this.setCivilStatus(e);
    },
    inputSpouseName: function inputSpouseName(e) {
      this.setSpouseName(e.target.value);
    },
    updateBirthdate: function updateBirthdate(e) {
      this.setBirthdate(e.target.value);
    },
    updateValidID: function updateValidID(e) {
      this.setValidID(e);
    },
    updateIDNumber: function updateIDNumber(e) {
      this.setIDNumber(e.target.value);
    },
    updateReligion: function updateReligion(e) {
      this.setReligion(e);
    },
    updateEthnicity: function updateEthnicity(e) {
      this.setEthnicity(e);
    },
    updateSector: function updateSector(e) {
      this.setSector(e);
    },
    updatePoliticalProvinceRegistered: function updatePoliticalProvinceRegistered(e) {
      this.setPoliticalProvinceRegistered(e);
    },
    updatePoliticalCityRegistered: function updatePoliticalCityRegistered(e) {
      this.setPoliticalCityRegistered(e);
    },
    updateBuildingHouseUnit: function updateBuildingHouseUnit(e) {
      this.setBuildingHouseUnit(e.target.value);
    },
    updateBlockNoStreet: function updateBlockNoStreet(e) {
      this.setBlockNoStreet(e.target.value);
    },
    updatePurok: function updatePurok(e) {
      this.setPurok(e);
    },
    updateSitio: function updateSitio(e) {
      this.setSitio(e);
    },
    updateYearsInCalamba: function updateYearsInCalamba(e) {
      this.setYearsInCalamba(e.target.value);
    },
    updateYearsInBarangay: function updateYearsInBarangay(e) {
      this.setYearsInBarangay(e.target.value);
    },
    updateRemarks: function updateRemarks(e) {
      this.setRemarks(e.target.value);
    },
    updateEducationalAttaintment: function updateEducationalAttaintment(e) {
      this.setEducationalAttaintment(e);
    },
    updateEducationalStatus: function updateEducationalStatus(e) {
      this.setEducationalStatus(e);
    },
    updateLastSchoolAttended: function updateLastSchoolAttended(e) {
      this.setLastSchoolAttended(e.target.value);
    },
    updateGovernmentAssistance: function updateGovernmentAssistance(e) {
      this.setGovernmentAssistance(e);
    },
    updateOrganization: function updateOrganization(e) {
      this.setOrganization(e);
    },
    updateOccupation: function updateOccupation(e) {
      this.setOccupation(e);
    },
    updateEmployer: function updateEmployer(e) {
      this.setEmployer(e.target.value);
    },
    updateWorkLocationProvince: function updateWorkLocationProvince(e) {
      this.setWorkLocationProvince(e);
    },
    updateWorkLocationCity: function updateWorkLocationCity(e) {
      this.setWorkLocationCity(e);
    },
    updateMonthlyIncome: function updateMonthlyIncome(e) {
      this.setMonthlyIncome(e);
    },
    updateVehicle: function updateVehicle(e) {
      this.setVehicle(e);
    },
    updateAppliance: function updateAppliance(e) {
      this.setAppliance(e);
    },
    updateUtilities: function updateUtilities(e) {
      this.setUtilities(e);
    },
    submitForm: function submitForm() {
      var _this = this;

      $('#exampleModal').modal('hide');
      this.updateData().then(function () {
        _this.$eventHub.$emit("update-success");
      })["catch"](function (error) {
        _this.status = "failed";

        _.delay(function () {
          _this.status = "";
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = "";
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.separator[data-v-8053f22c] {\r\n    position: relative;\r\n    width: 130px;\r\n    margin: 0 auto 16px;\n}\n.separator[data-v-8053f22c]:before {\r\n    position: absolute;\r\n    content: '';\r\n    height: 1px;\r\n    width: 100px;\r\n    background: #d8d8d8;\r\n    top: 50%;\r\n    left: 0;\r\n    transform: translate(-50%, -50%);\n}\n.separator[data-v-8053f22c]:after {\r\n    position: absolute;\r\n    content: '';\r\n    height: 1px;\r\n    width: 100px;\r\n    background: #d8d8d8;\r\n    top: 50%;\r\n    left: 130px;\r\n    transform: translate(-50%, -50%);\n}\n.dropzone-container[data-v-8053f22c] {\r\n    margin: 2em 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton[data-v-7f11b8b0] {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0;\r\n  padding: 0;\n}\nbutton .material-icons[data-v-7f11b8b0] {\r\n  line-height: 20px;\r\n  font-size: 20px;\n}\n.vue-dropzone .table *[data-v-7f11b8b0] {\r\n  cursor: auto;\n}\n.vue-dropzone .table a[data-v-7f11b8b0],\r\n.vue-dropzone .table button.btn[data-v-7f11b8b0],\r\n.vue-dropzone .table button.btn i[data-v-7f11b8b0] {\r\n  cursor: pointer;\n}\n.table thead tr th[data-v-7f11b8b0] {\r\n  color: rgba(0, 0, 0, 0.57);\r\n  font-weight: 500;\n}\n.table tbody tr td[data-v-7f11b8b0] {\r\n  color: rgba(0, 0, 0, 0.54);\r\n  font-weight: 400;\n}\n.table tbody tr td.file-name[data-v-7f11b8b0],\r\n.table tbody tr td a[data-v-7f11b8b0] {\r\n  color: #202124;\n}\n.table tbody tr td a[data-v-7f11b8b0]:hover {\r\n  text-decoration: underline;\n}\n.table thead tr th[data-v-7f11b8b0],\r\n.table tbody tr td[data-v-7f11b8b0] {\r\n  font-size: 13px;\n}\n.table td > div[data-v-7f11b8b0],\r\n.table th > div[data-v-7f11b8b0] {\r\n  position: relative;\n}\n.progress[data-v-7f11b8b0] {\r\n  height: 4px;\r\n  border-radius: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pic-preview[data-v-5f0589bf] {\r\n    width: 120px;\r\n    position: relative;\n}\n.pic-image[data-v-5f0589bf] {\r\n    height: 240px;\r\n    width: 174px;\r\n    position: relative;\n}\n.pic-image img[data-v-5f0589bf] {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.pic-align[data-v-5f0589bf] {\r\n    margin-top: -100px;\r\n    margin-left: 25%;\n}\n.flex-gap[data-v-5f0589bf] {\r\n    gap: 2em;\n}\n.file-name[data-v-5f0589bf] {\r\n    font-weight: 500;\r\n    font-size: 13px;\r\n    color: #202124;\r\n    text-overflow: ellipsis;\n}\n.file-size[data-v-5f0589bf] {\r\n    font-weight: 400;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 13px;\n}\n.vue-dropzone .attachment-list-container *[data-v-5f0589bf] {\r\n    cursor: auto;\n}\n.vue-dropzone .attachment-list-container[data-v-5f0589bf] {\r\n    cursor: default;\n}\n.vue-dropzone .pic-preview a img[data-v-5f0589bf],\r\n.vue-dropzone .pic-preview button.btn[data-v-5f0589bf],\r\n.vue-dropzone .pic-preview button.btn i[data-v-5f0589bf] {\r\n    cursor: pointer;\n}\n.file-status[data-v-5f0589bf] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 15px;\n}\nbutton[data-v-5f0589bf] {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 0;\r\n    padding: 0;\n}\nbutton .material-icons[data-v-5f0589bf] {\r\n    line-height: 20px;\r\n    font-size: 20px;\n}\n.progress[data-v-5f0589bf] {\r\n    height: 4px;\r\n    border-radius: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-093ac881] {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #202124;\n}\na[data-v-093ac881]:hover {\r\n  color: #9c27b0;\r\n  text-decoration: underline;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.popcom-input[data-v-a0ec2ea8] {\r\n    width: 100%;\r\n    padding: 5px;\r\n    margin-bottom: -40px;\r\n    display: inline-block;\r\n    border: 1px solid #000000;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\n}\ninput[type='text'][data-v-a0ec2ea8],\r\nselect[data-v-a0ec2ea8] {\r\n    width: 100%;\r\n    padding: 5px;\r\n    margin-bottom: -40px;\r\n    display: inline-block;\r\n    border: 1px solid #000000;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\n}\nlabel[data-v-a0ec2ea8] {\r\n    color: black;\n}\nhr[data-v-a0ec2ea8] {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0.1);\n}\n.vs__search[data-v-a0ec2ea8] {\r\n    width: 400px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=template&id=8053f22c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=template&id=8053f22c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vue-dropzone",
        {
          ref: _vm.uid,
          attrs: { id: _vm.uid, options: _vm.options, "use-custom-slot": true },
          on: {
            "vdropzone-file-added": _vm.addTmpFile,
            "vdropzone-upload-progress": _vm.uploadProgress,
            "vdropzone-success": _vm.success,
            "vdropzone-error": _vm.error,
            "vdropzone-thumbnail": _vm.updateDataUrl,
          },
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.hasFiles,
                  expression: "!hasFiles",
                },
              ],
              staticClass: "dropzone-container",
            },
            [
              _c(
                "div",
                {
                  staticClass: "file-selector",
                  staticStyle: { "margin-top": "-30px", "margin-left": "-8px" },
                },
                [
                  _c("figure", [
                    _c(
                      "svg",
                      {
                        attrs: {
                          width: "104px",
                          height: "104px",
                          viewBox: "0 0 104 104",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        },
                      },
                      [
                        _c("defs", [
                          _c("circle", {
                            attrs: {
                              id: "path-1",
                              cx: "36",
                              cy: "36",
                              r: "36",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "filter",
                            {
                              attrs: {
                                x: "-37.5%",
                                y: "-29.2%",
                                width: "175.0%",
                                height: "175.0%",
                                filterUnits: "objectBoundingBox",
                                id: "filter-2",
                              },
                            },
                            [
                              _c("feOffset", {
                                attrs: {
                                  dx: "0",
                                  dy: "6",
                                  in: "SourceAlpha",
                                  result: "shadowOffsetOuter1",
                                },
                              }),
                              _vm._v(" "),
                              _c("feGaussianBlur", {
                                attrs: {
                                  stdDeviation: "8",
                                  in: "shadowOffsetOuter1",
                                  result: "shadowBlurOuter1",
                                },
                              }),
                              _vm._v(" "),
                              _c("feColorMatrix", {
                                attrs: {
                                  values:
                                    "0 0 0 0 0.0117647059   0 0 0 0 0.0862745098   0 0 0 0 0.160784314  0 0 0 0.08 0",
                                  type: "matrix",
                                  in: "shadowBlurOuter1",
                                  result: "shadowMatrixOuter1",
                                },
                              }),
                              _vm._v(" "),
                              _c("feOffset", {
                                attrs: {
                                  dx: "0",
                                  dy: "1",
                                  in: "SourceAlpha",
                                  result: "shadowOffsetOuter2",
                                },
                              }),
                              _vm._v(" "),
                              _c("feGaussianBlur", {
                                attrs: {
                                  stdDeviation: "1",
                                  in: "shadowOffsetOuter2",
                                  result: "shadowBlurOuter2",
                                },
                              }),
                              _vm._v(" "),
                              _c("feColorMatrix", {
                                attrs: {
                                  values:
                                    "0 0 0 0 0.0117647059   0 0 0 0 0.0862745098   0 0 0 0 0.160784314  0 0 0 0.11 0",
                                  type: "matrix",
                                  in: "shadowBlurOuter2",
                                  result: "shadowMatrixOuter2",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "feMerge",
                                [
                                  _c("feMergeNode", {
                                    attrs: { in: "shadowMatrixOuter1" },
                                  }),
                                  _vm._v(" "),
                                  _c("feMergeNode", {
                                    attrs: { in: "shadowMatrixOuter2" },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Page-1",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                            },
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "Artboard",
                                  transform:
                                    "translate(-460.000000, -125.000000)",
                                },
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      id: "Group-4",
                                      transform:
                                        "translate(412.000000, 129.000000)",
                                    },
                                  },
                                  [
                                    _c(
                                      "g",
                                      {
                                        attrs: {
                                          id: "Group-2",
                                          transform:
                                            "translate(58.000000, 0.000000)",
                                        },
                                      },
                                      [
                                        _c("circle", {
                                          attrs: {
                                            id: "Oval",
                                            fill: "#3560FF",
                                            opacity: "0.100000001",
                                            cx: "42",
                                            cy: "42",
                                            r: "42",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "g",
                                          {
                                            attrs: {
                                              id: "Group",
                                              transform:
                                                "translate(6.000000, 6.000000)",
                                            },
                                          },
                                          [
                                            _c("g", { attrs: { id: "Oval" } }, [
                                              _c("use", {
                                                attrs: {
                                                  fill: "black",
                                                  "fill-opacity": "1",
                                                  filter: "url(#filter-2)",
                                                  "xlink:href": "#path-1",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("use", {
                                                attrs: {
                                                  fill: "#FFFFFF",
                                                  "fill-rule": "evenodd",
                                                  "xlink:href": "#path-1",
                                                },
                                              }),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "g",
                                              {
                                                attrs: {
                                                  id: "upload-cloud",
                                                  transform:
                                                    "translate(21.818182, 24.000000)",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                },
                                              },
                                              [
                                                _c("polyline", {
                                                  attrs: {
                                                    id: "Path",
                                                    stroke: "#000000",
                                                    points:
                                                      "19.6458087 17.3789847 14.3565525 12.0897285 9.06729634 17.3789847",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("path", {
                                                  attrs: {
                                                    d: "M14.3565525,12.0897285 L14.3565525,24.1794569",
                                                    id: "Path",
                                                    stroke: "#3560FF",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("path", {
                                                  attrs: {
                                                    d: "M25.6438239,20.7792208 C28.2965835,19.3021499 29.6312816,16.1761528 28.8860265,13.1856562 C28.1407715,10.1951596 25.5052337,8.10125672 22.4838689,8.09921935 L20.8179512,8.09921935 C19.7219904,3.76967373 16.1275086,0.577339516 11.7773112,0.0700384831 C7.42711383,-0.43726255 3.22057026,1.84535014 1.19724759,5.81113853 C-0.826075091,9.77692693 -0.247870665,14.6059952 2.6515151,17.9569414",
                                                    id: "Path",
                                                    stroke: "#3560FF",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("polyline", {
                                                  attrs: {
                                                    id: "Path",
                                                    stroke: "#3560FF",
                                                    points:
                                                      "19.6458087 17.3789847 14.3565525 12.0897285 9.06729634 17.3789847",
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasFiles,
                  expression: "hasFiles",
                },
              ],
            },
            [
              _c(_vm.previewComponent, {
                key: _vm.childKey,
                tag: "component",
                attrs: {
                  "tmp-attachments": _vm.tmpAttachments,
                  attachments: _vm.media,
                },
                on: {
                  "tmp-file-removed": _vm.handleTmpFileRemoved,
                  "file-removed": _vm.fileRemoved,
                },
              }),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "attachment-list-container",
      on: {
        click: function ($event) {
          $event.stopPropagation()
        },
      },
    },
    [
      _c("table", { staticClass: "table table-hover" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.attachments, function (file) {
              return [
                !file.wasRecentlyCreated
                  ? _c("tr", { key: file.id }, [
                      _c("td", { staticClass: "font-weight-bold" }, [
                        _c(
                          "a",
                          { attrs: { href: file.url, target: "_blank" } },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(file.file_name) +
                                "\n            "
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { width: "415" } }, [_vm._v("—")]),
                      _vm._v(" "),
                      _c("td", { attrs: { width: "140" } }, [
                        _vm._v(_vm._s(_vm.filesize(file.size))),
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { width: "36" } }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-round btn-link text-rose",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.$emit("file-removed", file)
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "material-icons" }, [
                              _vm._v(
                                "\n                delete\n              "
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]
            }),
            _vm._v(" "),
            _vm._l(_vm.tmpAttachments, function (file) {
              return _c("tr", { key: file.uuid }, [
                _c("td", { staticClass: "font-weight-bold file-name" }, [
                  _vm._v(_vm._s(file.file_name)),
                ]),
                _vm._v(" "),
                _c("td", { attrs: { width: "415" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.checkProgress(file) &&
                            !_vm.isCanceledOrError(file.o),
                          expression:
                            "checkProgress(file) && !isCanceledOrError(file.o)",
                        },
                      ],
                      staticClass: "progress",
                    },
                    [
                      _c("div", {
                        staticClass: "progress-bar progress-bar-striped",
                        class: {
                          "progress-bar-animated": file.progress < 100,
                          "bg-success": file.progress == 100,
                        },
                        style: { width: file.progress + "%" },
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": file.progress,
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            !_vm.checkProgress(file) &&
                            !_vm.isCanceledOrError(file.o),
                          expression:
                            "!checkProgress(file) && !isCanceledOrError(file.o)",
                        },
                      ],
                      staticClass: "text-capitalize",
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(file.o.status) +
                          "\n          "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: file.errorMsg,
                          expression: "file.errorMsg",
                        },
                      ],
                      staticClass: "text-danger",
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(file.errorMsg) +
                          "\n          "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("td", { attrs: { width: "140" } }, [
                  _vm._v(_vm._s(_vm.filesize(file.size))),
                ]),
                _vm._v(" "),
                _c("td", { attrs: { width: "36" } }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-round btn-link text-rose",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.removeTmpFile(file)
                        },
                      },
                    },
                    [
                      _c(
                        "i",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isUploading(file.o),
                              expression: "isUploading(file.o)",
                            },
                          ],
                          staticClass: "material-icons",
                          attrs: { title: "Remove" },
                        },
                        [_vm._v("\n              delete\n            ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "i",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.isUploading(file.o),
                              expression: "!isUploading(file.o)",
                            },
                          ],
                          staticClass: "material-icons",
                          attrs: { title: "Cancel" },
                        },
                        [_vm._v("\n              close\n            ")]
                      ),
                    ]
                  ),
                ]),
              ])
            }),
          ],
          2
        ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "415" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "140" } }, [_vm._v("File size")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "36" } }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "attachment-list-container d-flex flex-wrap flex-gap pt-3",
      on: {
        click: function ($event) {
          $event.stopPropagation()
        },
      },
    },
    [
      _vm._l(_vm.attachments, function (file) {
        return [
          !file.wasRecentlyCreated
            ? _c("div", { key: file.id, staticClass: "pic-align" }, [
                _c("div", { staticClass: "pic-image" }, [
                  _c("a", { attrs: { href: file.url, target: "_blank" } }, [
                    _c("img", {
                      attrs: {
                        src: file.preview_thumbnail,
                        alt: file.file_name,
                        title: file.file_name,
                      },
                    }),
                  ]),
                ]),
              ])
            : _vm._e(),
        ]
      }),
      _vm._v(" "),
      _vm._l(_vm.tmpAttachments, function (file) {
        return _c("div", { key: file.uuid, staticClass: "pic-align" }, [
          _c("div", { staticClass: "pic-image" }, [
            _c("img", {
              key: file.uuid,
              attrs: {
                src: file.preview_thumbnail,
                alt: file.file_name,
                title: file.file_name,
              },
            }),
          ]),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.row[_vm.field], function (item) {
      return _c("div", { key: item.id, staticClass: "m-1 d-inline-block" }, [
        _c(
          "a",
          { attrs: { href: item.url, title: item.name, target: "_blank" } },
          [
            _c("img", {
              attrs: { src: item.thumbnail, alt: item.name, title: item.name },
            }),
          ]
        ),
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        staticClass: "form-group row",
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.submitForm.apply(null, arguments)
          },
        },
      },
      [
        _c("div", { staticClass: "col-md-9" }, [
          _c(
            "select",
            {
              staticClass: "custom-select my-1 mr-sm-2",
              on: {
                change: function ($event) {
                  return _vm.switchSelect($event)
                },
              },
            },
            [
              _c("option", { attrs: { value: "0" } }, [
                _vm._v("Personal Information"),
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [
                _vm._v("Residential Information"),
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [
                _vm._v("Educational Information / Employee Information"),
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3" } }, [
                _vm._v("Medical Information"),
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "4" } }, [
                _vm._v("Skills Hobbies"),
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "5" } }, [
                _vm._v("House Type and Components Information"),
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "6" } }, [_vm._v("Survey")]),
            ]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "tab-pane active", attrs: { id: "personal" } },
              [
                _c("div", { staticClass: "card" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Household Entry No:")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text", readonly: "" },
                              domProps: { value: _vm.entry.household_no },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Family Code")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.entry.family_code },
                              on: { input: _vm.updateFamilyCode },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Relation To Main Household")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "household_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "household",
                                label: "household_name",
                                value: _vm.entry.household,
                                options: _vm.lists.household,
                              },
                              on: {
                                input: _vm.updateHousehold,
                                focus: function ($event) {
                                  return _vm.focusField("household")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Sex")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "gender_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "gender",
                                label: "gender_name",
                                value: _vm.entry.gender,
                                options: _vm.lists.gender,
                              },
                              on: {
                                input: _vm.updateGender,
                                focus: function ($event) {
                                  return _vm.focusField("gender")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Civil Status")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "civil_status_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "civil_status",
                                label: "civil_status_name",
                                value: _vm.entry.civil_status,
                                options: _vm.lists.civil_status,
                              },
                              on: {
                                input: _vm.updateCivilStatus,
                                focus: function ($event) {
                                  return _vm.focusField("civil_status")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: {
                                value:
                                  (_vm.entry.spouse_first_name || "") +
                                  " " +
                                  (_vm.entry.spouse_middle_name || "") +
                                  " " +
                                  (_vm.entry.spouse_last_name || ""),
                              },
                              on: { change: _vm.inputSpouseName },
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Birthdate")]),
                            _vm._v(" "),
                            _c("datetime-picker", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                picker: "date",
                                value: _vm.entry.birth_date,
                              },
                              on: {
                                input: _vm.updateBirthdate,
                                focus: function ($event) {
                                  return _vm.focusField("birthdate")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Gender Preference")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "gender_preference_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "gender_preference",
                                label: "gender_preference_name",
                                value: _vm.entry.gender_preference,
                                options: _vm.lists.gender_preference,
                              },
                              on: {
                                input: _vm.updateGenderPreference,
                                focus: function ($event) {
                                  return _vm.focusField("gender_preference")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", [_vm._v("Valid ID / ID Number")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "input-group flex-nowrap mt-1" },
                          [
                            _c("v-select", {
                              key: "valid_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "valid_id",
                                label: "name",
                                value: _vm.entry.valid_id,
                                options: _vm.lists.valid_id,
                              },
                              on: {
                                input: _vm.updateValidID,
                                focus: function ($event) {
                                  return _vm.focusField("valid_id")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.entry.id_number },
                              on: { input: _vm.updateIDNumber },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Religion:")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "religion_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "religion",
                                label: "religion_name",
                                value: _vm.entry.religion,
                                options: _vm.lists.religion,
                              },
                              on: {
                                input: _vm.updateReligion,
                                focus: function ($event) {
                                  return _vm.focusField("religion")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Ethnicity:")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "ethnicity_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "ethnicity",
                                label: "ethnicity_name",
                                value: _vm.entry.ethnicity,
                                options: _vm.lists.ethnicity,
                                multiple: "",
                              },
                              on: {
                                input: _vm.updateEthnicity,
                                focus: function ($event) {
                                  return _vm.focusField("ethnicity")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-5" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Sector Member")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "sector_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "sector",
                                label: "sector_name",
                                value: _vm.entry.sector,
                                options: _vm.lists.sector,
                                multiple: "",
                              },
                              on: {
                                input: _vm.updateSector,
                                focus: function ($event) {
                                  return _vm.focusField("sector")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Cellphone Number")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.entry.mobile_no },
                              on: { input: _vm.updateMobileNumber },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Landline")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.entry.landline_number },
                              on: { input: _vm.updateLandlineNumber },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Email Address")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.entry.email },
                              on: { input: _vm.updateEmail },
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("City/Municipality")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "political_city_registered_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "political_city_registered",
                                label: "city_name",
                                value: _vm.entry.political_city_registered,
                                options: _vm.lists.political_city_registered,
                              },
                              on: {
                                input: _vm.updatePoliticalCityRegistered,
                                focus: function ($event) {
                                  return _vm.focusField(
                                    "political_city_registered"
                                  )
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v(" Province Register")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "political_province_registered_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "political_province_registered",
                                label: "province_name",
                                value: _vm.entry.political_province_registered,
                                options:
                                  _vm.lists.political_province_registered,
                              },
                              on: {
                                input: _vm.updatePoliticalProvinceRegistered,
                                focus: function ($event) {
                                  return _vm.focusField(
                                    "political_province_registered"
                                  )
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Barangay Polling Place")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: {
                                value: _vm.entry.political_brgy_registered,
                              },
                              on: { input: _vm.updatePoliticalBarangay },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Precinct No.")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: {
                                value: _vm.entry.political_precinct_no,
                              },
                              on: { input: _vm.updatePoliticalPrecintNumber },
                            }),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "address" } }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Building Numbers/House Unit")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: {
                              value:
                                "BLDG " +
                                (_vm.entry.building_no || "") +
                                " UNIT " +
                                (_vm.entry.house_unit || ""),
                            },
                            on: { change: _vm.updateBuildingHouseUnit },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Block No/Lot No/Street Name")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.block_lot_house_id },
                            on: { input: _vm.updateBlockNoStreet },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Purok")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "purok_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "purok",
                              label: "purok_name",
                              value: _vm.entry.purok,
                              options: _vm.lists.purok,
                            },
                            on: {
                              input: _vm.updatePurok,
                              focus: function ($event) {
                                return _vm.focusField("purok")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Subdivsion / Sitio")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "sitio_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "sitio",
                              label: "sitio_name",
                              value: _vm.entry.sitio,
                              options: _vm.lists.sitio,
                            },
                            on: {
                              input: _vm.updateSitio,
                              focus: function ($event) {
                                return _vm.focusField("sitio")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("CALAMBA")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("datetime-picker", {
                              staticClass: "form-control popcom-input",
                              attrs: {
                                type: "text",
                                picker: "date",
                                value: _vm.entry.calamba_residence_year,
                              },
                              on: { input: _vm.updateYearsInCalamba },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                            " +
                              _vm._s(this.calamba_residence) +
                              "\n                                        "
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("BARANGAY")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("datetime-picker", {
                              staticClass: "form-control popcom-input",
                              attrs: {
                                type: "text",
                                picker: "date",
                                value: _vm.entry.barangay_residence_year,
                              },
                              on: { input: _vm.updateYearsInBarangay },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                            " +
                              _vm._s(this.barangay_residence) +
                              "\n                                        "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group bmd-form-group",
                      class: {
                        "is-focused": true,
                      },
                    },
                    [
                      _c("label", [_vm._v(" Remarks")]),
                      _vm._v(" "),
                      _c("textarea", {
                        staticClass: "form-control",
                        attrs: { rows: "5" },
                        domProps: { value: _vm.entry.remarks },
                        on: { change: _vm.updateRemarks },
                      }),
                    ]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane", attrs: { id: "educational" } },
              [
                _c("div", { staticClass: "card" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [
                              _vm._v("Highest Educational Attaintment"),
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "educational_attaintment_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "educational_attaintment",
                                label: "educational_attaintment_name",
                                value: _vm.entry.educational_attaintment,
                                options: _vm.lists.educational_attaintment,
                              },
                              on: {
                                input: _vm.updateEducationalAttaintment,
                                focus: function ($event) {
                                  return _vm.focusField(
                                    "educational_attaintment"
                                  )
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Educational Status")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "educational_status_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "educational_status",
                                label: "educational_status_name",
                                value: _vm.entry.educational_status,
                                options: _vm.lists.educational_status,
                              },
                              on: {
                                input: _vm.updateEducationalStatus,
                                focus: function ($event) {
                                  return _vm.focusField("educational_status")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Last School Attended")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: {
                                value: _vm.entry.last_school_attended,
                              },
                              on: { input: _vm.updateLastSchoolAttended },
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [
                              _vm._v("Government Educational Assistance"),
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "government_assistance_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "government_assistance",
                                label: "government_assistance_name",
                                value: _vm.entry.government_assistance,
                                options: _vm.lists.government_assistance,
                                multiple: "",
                              },
                              on: {
                                input: _vm.updateGovernmentAssistance,
                                focus: function ($event) {
                                  return _vm.focusField("government_assistance")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Organizations")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "organization_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "organization",
                                label: "organization_name",
                                value: _vm.entry.organization,
                                options: _vm.lists.organization,
                              },
                              on: {
                                input: _vm.updateOrganization,
                                focus: function ($event) {
                                  return _vm.focusField("organization")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Occupation")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "occupation_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "occupation",
                                label: "occupation_name",
                                value: _vm.entry.occupation,
                                options: _vm.lists.occupation,
                              },
                              on: {
                                input: _vm.updateOccupation,
                                focus: function ($event) {
                                  return _vm.focusField("occupation")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Employer")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.entry.employer },
                              on: { input: _vm.updateEmployer },
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Work Location City")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "work_location_city_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "work_location_city",
                                label: "city_name",
                                value: _vm.entry.work_location_city,
                                options: _vm.lists.work_location_city,
                              },
                              on: {
                                input: _vm.updateWorkLocationCity,
                                focus: function ($event) {
                                  return _vm.focusField("work_location_city")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [_vm._v("Work Location Province")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "work_location_province_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "work_location_province",
                                label: "province_name",
                                value: _vm.entry.work_location_province,
                                options: _vm.lists.work_location_province,
                              },
                              on: {
                                input: _vm.updateWorkLocationProvince,
                                focus: function ($event) {
                                  return _vm.focusField(
                                    "work_location_province"
                                  )
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group bmd-form-group",
                            class: {
                              "is-focused": true,
                            },
                          },
                          [
                            _c("label", [
                              _vm._v("Monthly Income (Econimic Status)"),
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "monthly_income_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                name: "monthly_income",
                                label: "monthly_income_name",
                                value: _vm.entry.monthly_income,
                                options: _vm.lists.monthly_income,
                              },
                              on: {
                                input: _vm.updateMonthlyIncome,
                                focus: function ($event) {
                                  return _vm.focusField("monthly_income")
                                },
                                blur: _vm.clearFocus,
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm._m(7),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "health" } }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.entry.full_immunization },
                        on: { input: _vm.updateFullImmunization },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-8" },
                      [
                        _c("v-select", {
                          key: "medicine_id-field",
                          staticClass: "form-control popcom-input",
                          attrs: {
                            name: "medicine",
                            label: "medicine_name",
                            value: _vm.entry.medicine,
                            options: _vm.lists.medicine,
                            multiple: "",
                          },
                          on: {
                            input: _vm.updateMedicine,
                            focus: function ($event) {
                              return _vm.focusField("medicine")
                            },
                            blur: _vm.clearFocus,
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("For Female Only")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.entry.pregnancy_age },
                        on: { input: _vm.updatePregnancyAge },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(12),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.entry.prental_checkup },
                        on: { input: _vm.updatePrentalCheckup },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(13),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.entry.postnatal_checkup },
                        on: { input: _vm.updatePostalCheckup },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("VACCINE FOR COVID-19")]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(14),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("1st Dose")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.brand1 },
                            on: { input: _vm.updateBrand1 },
                          }),
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("datetime-picker", {
                              staticClass: "form-control popcom-input",
                              attrs: {
                                type: "text",
                                picker: "date",
                                value: _vm.entry.first_date_vaccination,
                              },
                              on: { input: _vm.updateFirstDateVaccination },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("2nd Dose")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.brand2 },
                            on: { input: _vm.updateBrand2 },
                          }),
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("datetime-picker", {
                              staticClass: "form-control popcom-input",
                              attrs: {
                                type: "text",
                                picker: "date",
                                value: _vm.entry.second_date_vaccination,
                              },
                              on: { input: _vm.updateSecondDateVaccination },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._m(15),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "skills" } }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(16),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Soft Skills")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "soft_skill_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "soft_skill",
                              label: "soft_skill_name",
                              value: _vm.entry.soft_skill,
                              options: _vm.lists.soft_skill,
                              multiple: "",
                            },
                            on: {
                              input: _vm.updateSoftSkills,
                              focus: function ($event) {
                                return _vm.focusField("soft_skill")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Hard Skills")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "hard_skill_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "hard_skill",
                              label: "hard_skill_name",
                              value: _vm.entry.hard_skill,
                              options: _vm.lists.hard_skill,
                              multiple: "",
                            },
                            on: {
                              input: _vm.updateHardSkills,
                              focus: function ($event) {
                                return _vm.focusField("hard_skill")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Hobbies")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "hobbies_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "hobbies",
                              label: "hobbies_name",
                              value: _vm.entry.hobbies,
                              options: _vm.lists.hobbies,
                              multiple: "",
                            },
                            on: {
                              input: _vm.updateHobbies,
                              focus: function ($event) {
                                return _vm.focusField("hobbies")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Sports")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "sports_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "sports",
                              label: "sports_name",
                              value: _vm.entry.sports,
                              options: _vm.lists.sports,
                              multiple: "",
                            },
                            on: {
                              input: _vm.updateSports,
                              focus: function ($event) {
                                return _vm.focusField("sports")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "housetype" } }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(17),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("House Ownership")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "house_ownership_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "house_ownership",
                              label: "house_ownership_name",
                              value: _vm.entry.house_ownership,
                              options: _vm.lists.house_ownership,
                            },
                            on: {
                              input: _vm.updateHouseOwnership,
                              focus: function ($event) {
                                return _vm.focusField("house_ownership")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("House Type")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "house_type_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "house_type",
                              label: "house_type_name",
                              value: _vm.entry.house_type,
                              options: _vm.lists.house_type,
                            },
                            on: {
                              input: _vm.updateHouseType,
                              focus: function ($event) {
                                return _vm.focusField("house_type")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("House Make")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "house_make_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "house_make",
                              label: "house_make_name",
                              value: _vm.entry.house_make,
                              options: _vm.lists.house_make,
                            },
                            on: {
                              input: _vm.updateHouseMake,
                              focus: function ($event) {
                                return _vm.focusField("house_make")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [
                            _vm._v("Number of Nuclear Family in Household"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: {
                              value: _vm.entry.no_nuclear_family_household_id,
                            },
                            on: { input: _vm.updateNuclearFamilyHousehold },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Number of Bedrooms")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.no_bedrooms_id },
                            on: { input: _vm.updateBedRooms },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Number of CRs")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entry.no_cr_id },
                            on: { input: _vm.updateCRID },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Utilities")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "utilities_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "utilities",
                              label: "utilities_name",
                              value: _vm.entry.utilities,
                              options: _vm.lists.utilities,
                              multiple: "",
                            },
                            on: {
                              input: _vm.updateUtilities,
                              focus: function ($event) {
                                return _vm.focusField("utilities")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Appliances")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "appliance_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "appliance",
                              label: "appliance_name",
                              value: _vm.entry.appliance,
                              options: _vm.lists.appliance,
                              multiple: "",
                            },
                            on: {
                              input: _vm.updateAppliance,
                              focus: function ($event) {
                                return _vm.focusField("appliance")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "is-focused": true,
                          },
                        },
                        [
                          _c("label", [_vm._v("Vehicle")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "vehicle_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              name: "vehicle",
                              label: "vehicles_name",
                              value: _vm.entry.vehicle,
                              options: _vm.lists.vehicle,
                              multiple: "",
                            },
                            on: {
                              input: _vm.updateVehicle,
                              focus: function ($event) {
                                return _vm.focusField("vehicle")
                              },
                              blur: _vm.clearFocus,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "survey" } }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(18),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  _vm._l(_vm.lists.questions, function (question) {
                    return _c(
                      "div",
                      { key: question.id, staticClass: "mt-3" },
                      [
                        _c("label", [
                          _vm._v(
                            _vm._s(question.id) +
                              " . " +
                              _vm._s(question.description)
                          ),
                        ]),
                        _vm._v(" "),
                        _vm._l(question.answers, function (answer) {
                          return _c("div", { key: answer.id }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-checkbox custom-control-inline pmd-checkbox",
                              },
                              [
                                _c("input", {
                                  staticClass: "custom-control-input",
                                  attrs: { type: "checkbox", id: "checkbox1" },
                                  domProps: { value: answer.answer },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "custom-control-label pmd-checkbox-ripple-effect",
                                    attrs: { for: "checkbox1" },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(answer.answer) +
                                        "\n                                        "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ])
                        }),
                      ],
                      2
                    )
                  }),
                  0
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("div", { staticClass: "card card-profile" }, [
            _c(
              "div",
              [
                _c("attachment", {
                  attrs: {
                    route: _vm.getRoute("gad"),
                    "collection-name": "resident_photo",
                    media: _vm.entry.photo,
                    "model-id": _vm.$route.params.id,
                    "max-file-size": 10,
                    component: "pictures",
                    accept: "image/*",
                    "max-files": 1,
                  },
                  on: {
                    "file-uploaded": _vm.insertPhotoFile,
                    "file-removed": _vm.removePhotoFile,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h6", { staticClass: "card-category text-gray" }, [
                  _vm._v("Profile"),
                ]),
                _vm._v(" "),
                _c("h5", { staticStyle: { "text-transform": "uppercase" } }, [
                  _c("b", [
                    _vm._v(
                      _vm._s(_vm.entry.last_name) +
                        "," +
                        _vm._s(_vm.entry.first_name) +
                        " " +
                        _vm._s(_vm.entry.middle_name)
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "card-category text-gray" }, [
                  _vm._v("Resident ID"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.entry.resident_no) +
                      "\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "card-category text-gray" }, [
                  _vm._v("Barangay"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("i", { staticClass: "fa fa-home fa-2x" }),
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.entry.barangay.id) +
                      " - " +
                      _vm._s(_vm.entry.barangay.barangay_name) +
                      "\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "card-category text-gray" }, [
                  _vm._v("Gender"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("i", { staticClass: "fa fa-intersex fa-2x" }),
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.entry.gender_name) +
                      "\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "card-category text-gray" }, [
                  _vm._v("Age"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("h4", [_vm._v(_vm._s(this.total_age))]),
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("p", { staticClass: "card-description" }, [
                  _vm._v(
                    "\n                        Ang Lungsod ng Calamba o sa simpleng, Calamba ay isang unang klaseng lungsod sa lalawigan\n                        ng Laguna, Pilipinas. Ito ay nasa layong 54 kilometro sa timog ng Maynila, at isang oras\n                        ang layo kung sasakay ng bus\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    attrs: {
                      type: "button",
                      "data-toggle": "modal",
                      "data-target": "#exampleModal",
                    },
                  },
                  [
                    _vm._v(
                      "\n                        Transfer Resident\n                    "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vue-button-spinner",
                  {
                    staticClass: "btn-primary",
                    attrs: {
                      status: _vm.status,
                      isLoading: _vm.loading,
                      disabled: _vm.loading,
                    },
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.$t("global.save")) +
                        "\n                    "
                    ),
                  ]
                ),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "exampleModal",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true",
            },
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(19),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-group bmd-form-group",
                        class: {
                          "is-focused": true,
                        },
                      },
                      [
                        _c("label", [_vm._v("Barangay")]),
                        _vm._v(" "),
                        _c("v-select", {
                          key: "barangay_id-field",
                          staticClass: "form-control popcom-input",
                          attrs: {
                            name: "barangay",
                            label: "barangay_name",
                            value: _vm.entry.barangay,
                            options: _vm.lists.barangay,
                          },
                          on: {
                            input: _vm.updateBarangay,
                            focus: function ($event) {
                              return _vm.focusField("barangay")
                            },
                            blur: _vm.clearFocus,
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("label", [_vm._v("Household Number")]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.entry.household_no },
                      on: { input: _vm.updateHouseholdNumber },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm._m(20),
                ]),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "nav nav-tabs d-none",
        attrs: { id: "myTab", role: "tablist" },
      },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { "data-toggle": "tab", href: "#personal" },
            },
            [_vm._v("personal")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#address" },
            },
            [_vm._v("address")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#educational" },
            },
            [_vm._v("educational")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#health", role: "tab" },
            },
            [_vm._v("health")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#skills", role: "tab" },
            },
            [_vm._v("skills")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#housetype", role: "tab" },
            },
            [_vm._v("housetype")]
          ),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { "data-toggle": "tab", href: "#survey", role: "tab" },
            },
            [_vm._v("survey")]
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-primary" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Personal Information")]),
      _vm._v(" "),
      _c("p", { staticClass: "card-category" }, [
        _vm._v("Complete your profile"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Spouse Name"),
      _c("small", [_vm._v(" (firstname, middlename, lastname)")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticStyle: { "text-transform": "uppercase" } }, [
      _c("b", [
        _vm._v("Political Information "),
        _c("small", [_vm._v("(Registered)")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-primary" }, [
      _c("h4", { staticClass: "card-title" }, [
        _vm._v("Residential Information"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "card-category" }, [
        _vm._v("Complete your profile"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      {
        staticClass: "black text-white",
        staticStyle: { "background-color": "#462066" },
      },
      [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Reidency")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Year")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-primary" }, [
      _c("h4", { staticClass: "card-title" }, [
        _vm._v("Educational Information / Educational Information"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "card-category" }, [
        _vm._v("Complete your profile"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("table", { staticClass: "table table-bordered" }, [
          _c(
            "thead",
            {
              staticClass: "black text-white",
              staticStyle: { "background-color": "#462066" },
            },
            [
              _c("tr", [
                _c("th", { attrs: { scope: "col" } }, [
                  _vm._v("Government Assistance"),
                ]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Amount")]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("SAP")]),
              _vm._v(" "),
              _c("td", [_vm._v("January 20, 2020")]),
              _vm._v(" "),
              _c("td", [_vm._v("₱13,000")]),
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("CAP")]),
              _vm._v(" "),
              _c("td", [_vm._v("October 20, 2020")]),
              _vm._v(" "),
              _c("td", [_vm._v("₱4,000")]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-primary" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Health Information")]),
      _vm._v(" "),
      _c("p", { staticClass: "card-category" }, [
        _vm._v("Complete your profile"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 mt-2 mr-3" }, [
      _c("label", [_vm._v("Full Immunization")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 mt-2 mr-3" }, [
      _c("label", [_vm._v("Maintaining Medicine")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 mt-2 mr-3" }, [
      _c("label", [_vm._v("Pregnancy Age")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 mt-2 mr-3" }, [
      _c("label", [_vm._v("With Prental Check-up")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 mt-2 mr-3" }, [
      _c("label", [_vm._v("With Postpartum Check-up")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      {
        staticClass: "black text-white",
        staticStyle: { "background-color": "#462066" },
      },
      [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Type")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Brand")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Booster Shot")]),
      _vm._v(" "),
      _c("td"),
      _vm._v(" "),
      _c("td"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-primary" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Skills Hobbies")]),
      _vm._v(" "),
      _c("p", { staticClass: "card-category" }, [
        _vm._v("Complete your profile"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-primary" }, [
      _c("h4", { staticClass: "card-title" }, [
        _vm._v("House Type and Components Information"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "card-category" }, [
        _vm._v("Complete your profile"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-info" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Survey")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Transfer Resident")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" },
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Save changes")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/Attachment.vue":
/*!*********************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/Attachment.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Attachment_vue_vue_type_template_id_8053f22c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attachment.vue?vue&type=template&id=8053f22c&scoped=true& */ "./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=template&id=8053f22c&scoped=true&");
/* harmony import */ var _Attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Attachment.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Attachment_vue_vue_type_style_index_0_id_8053f22c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css& */ "./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Attachment_vue_vue_type_template_id_8053f22c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Attachment_vue_vue_type_template_id_8053f22c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8053f22c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Attachments/Attachment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_style_index_0_id_8053f22c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=style&index=0&id=8053f22c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_style_index_0_id_8053f22c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_style_index_0_id_8053f22c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_style_index_0_id_8053f22c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_style_index_0_id_8053f22c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=template&id=8053f22c&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=template&id=8053f22c&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_template_id_8053f22c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachment.vue?vue&type=template&id=8053f22c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/Attachment.vue?vue&type=template&id=8053f22c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_template_id_8053f22c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachment_vue_vue_type_template_id_8053f22c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentList.vue":
/*!*************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentList.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttachmentList_vue_vue_type_template_id_7f11b8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true& */ "./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true&");
/* harmony import */ var _AttachmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentList.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AttachmentList_vue_vue_type_style_index_0_id_7f11b8b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css& */ "./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AttachmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttachmentList_vue_vue_type_template_id_7f11b8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttachmentList_vue_vue_type_template_id_7f11b8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f11b8b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Attachments/AttachmentList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_style_index_0_id_7f11b8b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=style&index=0&id=7f11b8b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_style_index_0_id_7f11b8b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_style_index_0_id_7f11b8b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_style_index_0_id_7f11b8b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_style_index_0_id_7f11b8b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_template_id_7f11b8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentList.vue?vue&type=template&id=7f11b8b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_template_id_7f11b8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentList_vue_vue_type_template_id_7f11b8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue":
/*!*****************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentPictures.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttachmentPictures_vue_vue_type_template_id_5f0589bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true& */ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true&");
/* harmony import */ var _AttachmentPictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentPictures.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AttachmentPictures_vue_vue_type_style_index_0_id_5f0589bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css& */ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AttachmentPictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttachmentPictures_vue_vue_type_template_id_5f0589bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttachmentPictures_vue_vue_type_template_id_5f0589bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f0589bf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Attachments/AttachmentPictures.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentPictures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_style_index_0_id_5f0589bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=style&index=0&id=5f0589bf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_style_index_0_id_5f0589bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_style_index_0_id_5f0589bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_style_index_0_id_5f0589bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_style_index_0_id_5f0589bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_template_id_5f0589bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Attachments/AttachmentPictures.vue?vue&type=template&id=5f0589bf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_template_id_5f0589bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttachmentPictures_vue_vue_type_template_id_5f0589bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue":
/*!***************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablePictures.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatatablePictures_vue_vue_type_template_id_093ac881_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true& */ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true&");
/* harmony import */ var _DatatablePictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatablePictures.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DatatablePictures_vue_vue_type_style_index_0_id_093ac881_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css& */ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatatablePictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatablePictures_vue_vue_type_template_id_093ac881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatatablePictures_vue_vue_type_template_id_093ac881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "093ac881",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Datatables/DatatablePictures.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablePictures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_style_index_0_id_093ac881_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=style&index=0&id=093ac881&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_style_index_0_id_093ac881_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_style_index_0_id_093ac881_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_style_index_0_id_093ac881_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_style_index_0_id_093ac881_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_template_id_093ac881_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablePictures.vue?vue&type=template&id=093ac881&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_template_id_093ac881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablePictures_vue_vue_type_template_id_093ac881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_a0ec2ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true& */ "./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_a0ec2ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_a0ec2ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_a0ec2ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a0ec2ea8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/GadList/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_a0ec2ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=style&index=0&id=a0ec2ea8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_a0ec2ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_a0ec2ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_a0ec2ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_a0ec2ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_a0ec2ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Edit.vue?vue&type=template&id=a0ec2ea8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_a0ec2ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_a0ec2ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);