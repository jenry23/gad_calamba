(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      if (date) {
        var calamba_date = new Date(date).toLocaleDateString();
        var native_date = this.subtractYears(2, new Date(), 1);
        var transient_date_first = this.subtractYears(2, new Date(), 1);
        var transient_date_second = this.subtractMonths(6, new Date(), 1);

        if (calamba_date > this.subtractMonths(6)) {
          return "Transient";
        } else if (calamba_date < native_date) {
          return "Native";
        } else if (calamba_date > transient_date_first && transient_date_second < calamba_date) {
          return "Immigrant";
        }
      } else {
        return '';
      }
    },
    barangay_residence: function barangay_residence() {
      var date = this.entry.barangay_residence_year;

      if (date) {
        var barangay_date = new Date(date).toLocaleDateString();
        var native_date = this.subtractYears(2, new Date(), 1);
        var transient_date_first = this.subtractYears(2, new Date(), 1);
        var transient_date_second = this.subtractMonths(6, new Date(), 1);

        if (barangay_date > this.subtractMonths(6)) {
          return "Transient";
        } else if (barangay_date < native_date) {
          return "Native";
        } else if (barangay_date > transient_date_first && transient_date_second < barangay_date) {
          return "Immigrant";
        }
      } else {
        return '';
      }
    },
    isDisabled: function isDisabled() {
      return this.$can('gad_edit');
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
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("GadListSingle", ['setEmail', 'setMobileNumber', 'setGender', 'setFamilyCode', 'setHousehold', 'setCivilStatus', 'setSpouseName', 'setBirthdate', 'setGenderPreference', 'setValidID', 'setIDNumber', 'setReligion', 'setEthnicity', 'setSector', 'setPoliticalProvinceRegistered', 'setPoliticalCityRegistered', 'setBuildingHouseUnit', 'setBlockNoStreet', 'setSitio', 'setPurok', 'setYearsInCalamba', 'setYearsInBarangay', 'setEducationalAttaintment', 'setEducationalStatus', 'setLastSchoolAttended', 'setGovernmentAssistance', 'setOrganization', 'setOccupation', 'setEmployer', 'setWorkLocationProvince', 'setWorkLocationCity', 'setMonthlyIncome', 'setBarangay', 'setHouseholdNumber', 'setSoftSkills', 'setHardSkills', 'setHobbies', 'setSports', 'setHouseOwnership', 'setHouseType', 'setHouseMake', 'setNuclearFamilyHousehold', 'setBedRooms', 'setCRID', 'setPoliticalBarangay', 'setPoliticalPrecintNumber', 'fetchEditData', 'insertPhotoFile', 'removePhotoFile', 'setRemarks', 'resetState', 'setLandlineNumber', 'setTitle', 'setVehicle', 'setAppliance', 'setUtilities', 'setFullImmunization', 'setMedicine', 'setPregnancyAge', 'setPrentalCheckup', 'setPostalCheckup', 'setBrand1', 'setFirstDateVaccination', 'setBrand2', 'setSecondDateVaccination', 'setHealthCondition', 'setDisability', 'setBrand3', 'setBoosterDateVaccination', 'updateData'])), {}, {
    subtractYears: function subtractYears(numOfYears) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
      var add_date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (add_date != 0) {
        date.setDate(date.getDate() + add_date);
      }

      date.setFullYear(date.getFullYear() - numOfYears);
      return date.toLocaleDateString;
    },
    subtractMonths: function subtractMonths(numOfMonths) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
      var add_date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (add_date != 0) {
        date.setDate(date.getDate() + add_date);
      }

      date.setMonth(date.getMonth() - numOfMonths);
      return date;
    },
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
    updateBrand3: function updateBrand3(e) {
      this.setBrand3(e.target.value);
    },
    updateBoosterDateVaccination: function updateBoosterDateVaccination(e) {
      this.setBoosterDateVaccination(e.target.value);
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
    updateHealthCondition: function updateHealthCondition(e) {
      this.setHealthCondition(e);
    },
    updateDisability: function updateDisability(e) {
      this.setDisability(e);
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
exports.push([module.i, "\n.popcom-input[data-v-a0ec2ea8] {\r\n\twidth: 100%;\r\n\tpadding: 5px;\r\n\tmargin-bottom: -40px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #000000;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\n}\ninput[type='text'][data-v-a0ec2ea8],\r\nselect[data-v-a0ec2ea8] {\r\n\twidth: 100%;\r\n\tpadding: 5px;\r\n\tmargin-bottom: -40px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #000000;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\n}\nlabel[data-v-a0ec2ea8] {\r\n\tcolor: black;\n}\nhr[data-v-a0ec2ea8] {\r\n\tmargin-top: 1rem;\r\n\tmargin-bottom: 1rem;\r\n\tborder: 0;\r\n\tborder-top: 1px solid rgba(0, 0, 0.1);\n}\n.vs__search[data-v-a0ec2ea8] {\r\n\twidth: 400px;\n}\noption[data-v-a0ec2ea8]:disabled {\r\n\tcolor: #abcdef;\n}\r\n", ""]);

// exports


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
                _vm._v("Health / Medical Condition"),
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                                disabled: !_vm.isDisabled,
                                name: "household",
                                label: "household_name",
                                value: _vm.entry.household,
                                options: _vm.lists.household,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "gender",
                                label: "gender_name",
                                value: _vm.entry.gender,
                                options: _vm.lists.gender,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "civil_status",
                                label: "civil_status_name",
                                value: _vm.entry.civil_status,
                                options: _vm.lists.civil_status,
                                readonly: !_vm.isDisabled,
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "gender_preference",
                                label: "gender_preference_name",
                                value: _vm.entry.gender_preference,
                                options: _vm.lists.gender_preference,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "valid_id",
                                label: "name",
                                value: _vm.entry.valid_id,
                                options: _vm.lists.valid_id,
                                readonly: !_vm.isDisabled,
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                                disabled: !_vm.isDisabled,
                                name: "religion",
                                label: "religion_name",
                                value: _vm.entry.religion,
                                options: _vm.lists.religion,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "ethnicity",
                                label: "ethnicity_name",
                                value: _vm.entry.ethnicity,
                                options: _vm.lists.ethnicity,
                                multiple: "",
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "sector",
                                label: "sector_name",
                                value: _vm.entry.sector,
                                options: _vm.lists.sector,
                                multiple: "",
                                readonly: !_vm.isDisabled,
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                                disabled: !_vm.isDisabled,
                                name: "political_city_registered",
                                label: "city_name",
                                value: _vm.entry.political_city_registered,
                                options: _vm.lists.political_city_registered,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "political_province_registered",
                                label: "province_name",
                                value: _vm.entry.political_province_registered,
                                options:
                                  _vm.lists.political_province_registered,
                                readonly: !_vm.isDisabled,
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
                            _c("v-select", {
                              key: "political_brgy_registered_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                disabled: !_vm.isDisabled,
                                name: "political_brgy_registered",
                                label: "barangay_name",
                                value: _vm.entry.political_brgy_registered,
                                options: _vm.lists.political_brgy_registered,
                                readonly: !_vm.isDisabled,
                              },
                              on: {
                                input: _vm.updatePoliticalBarangay,
                                focus: function ($event) {
                                  return _vm.focusField(
                                    "political_brgy_registered"
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
                            _c("label", [_vm._v("Precinct No.")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                            attrs: { type: "text", readonly: !_vm.isDisabled },
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
                            attrs: { type: "text", readonly: !_vm.isDisabled },
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
                              disabled: !_vm.isDisabled,
                              name: "purok",
                              label: "purok_name",
                              value: _vm.entry.purok,
                              options: _vm.lists.purok,
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "sitio",
                              label: "sitio_name",
                              value: _vm.entry.sitio,
                              options: _vm.lists.sitio,
                              readonly: !_vm.isDisabled,
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
                                readonly: !_vm.isDisabled,
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
                            "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(this.calamba_residence) +
                              "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                                readonly: !_vm.isDisabled,
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
                            "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(this.barangay_residence) +
                              "\n\t\t\t\t\t\t\t\t\t\t\t"
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
                        attrs: { rows: "5", readonly: !_vm.isDisabled },
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
                                disabled: !_vm.isDisabled,
                                name: "educational_attaintment",
                                label: "educational_attaintment_name",
                                value: _vm.entry.educational_attaintment,
                                options: _vm.lists.educational_attaintment,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "educational_status",
                                label: "educational_status_name",
                                value: _vm.entry.educational_status,
                                options: _vm.lists.educational_status,
                                readonly: !_vm.isDisabled,
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                              key: "educational_assistance_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                disabled: !_vm.isDisabled,
                                name: "educational_assistance",
                                label: "educational_assistance_name",
                                value: _vm.entry.educational_assistance,
                                options: _vm.lists.educational_assistance,
                                multiple: "",
                                readonly: !_vm.isDisabled,
                              },
                              on: {
                                input: _vm.updateGovernmentAssistance,
                                focus: function ($event) {
                                  return _vm.focusField(
                                    "educational_assistance"
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
                            _c("label", [_vm._v("Organizations")]),
                            _vm._v(" "),
                            _c("v-select", {
                              key: "organization_id-field",
                              staticClass: "form-control popcom-input",
                              attrs: {
                                disabled: !_vm.isDisabled,
                                name: "organization",
                                label: "organization_name",
                                value: _vm.entry.organization,
                                options: _vm.lists.organization,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "occupation",
                                label: "occupation_name",
                                value: _vm.entry.occupation,
                                options: _vm.lists.occupation,
                                readonly: !_vm.isDisabled,
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
                              attrs: {
                                type: "text",
                                readonly: !_vm.isDisabled,
                              },
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
                                readonly: !_vm.isDisabled,
                                disabled: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "work_location_province",
                                label: "province_name",
                                value: _vm.entry.work_location_province,
                                options: _vm.lists.work_location_province,
                                readonly: !_vm.isDisabled,
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
                                disabled: !_vm.isDisabled,
                                name: "monthly_income",
                                label: "monthly_income_name",
                                value: _vm.entry.monthly_income,
                                options: _vm.lists.monthly_income,
                                readonly: !_vm.isDisabled,
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
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "table",
                          { staticClass: "table table-bordered" },
                          [
                            _vm._m(7),
                            _vm._v(" "),
                            _vm._l(
                              _vm.entry.government_assistance,
                              function (assistance) {
                                return _c("tbody", { key: assistance.id }, [
                                  _c("tr", [
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          assistance.government_assistance_name
                                        )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("2020")]),
                                    _vm._v(" "),
                                    assistance.code === "SAP"
                                      ? _c("td", [_vm._v("₱6,500.00")])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    assistance.code === "CAP"
                                      ? _c("td", [_vm._v("₱4,000.00")])
                                      : _vm._e(),
                                  ]),
                                ])
                              }
                            ),
                          ],
                          2
                        ),
                      ]),
                    ]),
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
                          _c("label", [_vm._v("Health Condition")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "health_condition_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              disabled: !_vm.isDisabled,
                              name: "health_condition",
                              label: "health_name",
                              value: _vm.entry.health_condition,
                              options: _vm.lists.health_condition,
                              multiple: "",
                              readonly: !_vm.isDisabled,
                            },
                            on: {
                              input: _vm.updateHealthCondition,
                              focus: function ($event) {
                                return _vm.focusField("health_condition")
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
                          _c("label", [_vm._v("Disability")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "disability_condition_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              disabled: !_vm.isDisabled,
                              name: "disability_condition",
                              label: "disability_name",
                              value: _vm.entry.disability_condition,
                              options: _vm.lists.disability_condition,
                              multiple: "",
                              readonly: !_vm.isDisabled,
                            },
                            on: {
                              input: _vm.updateDisability,
                              focus: function ($event) {
                                return _vm.focusField("disability_condition")
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
                          _c("label", [_vm._v("Full Immunization")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: !_vm.isDisabled },
                            domProps: { value: _vm.entry.full_immunization },
                            on: { input: _vm.updateFullImmunization },
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
                          _c("label", [_vm._v("Maintaining Medicine")]),
                          _vm._v(" "),
                          _c("v-select", {
                            key: "medicine_id-field",
                            staticClass: "form-control popcom-input",
                            attrs: {
                              disabled: !_vm.isDisabled,
                              name: "medicine",
                              label: "medicine_name",
                              value: _vm.entry.medicine,
                              options: _vm.lists.medicine,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("For Female Only")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: !_vm.isDisabled },
                        domProps: { value: _vm.entry.pregnancy_age },
                        on: { input: _vm.updatePregnancyAge },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: !_vm.isDisabled },
                        domProps: { value: _vm.entry.prental_checkup },
                        on: { input: _vm.updatePrentalCheckup },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: !_vm.isDisabled },
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
                    _vm._m(12),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("1st Dose")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: !_vm.isDisabled },
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
                                readonly: !_vm.isDisabled,
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
                            attrs: { type: "text", readonly: !_vm.isDisabled },
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
                                readonly: !_vm.isDisabled,
                                value: _vm.entry.second_date_vaccination,
                              },
                              on: { input: _vm.updateSecondDateVaccination },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Booster Shot")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: !_vm.isDisabled },
                            domProps: { value: _vm.entry.brand3 },
                            on: { input: _vm.updateBrand3 },
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
                                readonly: !_vm.isDisabled,
                                value: _vm.entry.booster_date_vaccination,
                              },
                              on: { input: _vm.updateBoosterDateVaccination },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "skills" } }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(13),
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
                              disabled: !_vm.isDisabled,
                              name: "soft_skill",
                              label: "soft_skill_name",
                              value: _vm.entry.soft_skill,
                              options: _vm.lists.soft_skill,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "hard_skill",
                              label: "hard_skill_name",
                              value: _vm.entry.hard_skill,
                              options: _vm.lists.hard_skill,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "hobbies",
                              label: "hobbies_name",
                              value: _vm.entry.hobbies,
                              options: _vm.lists.hobbies,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "sports",
                              label: "sports_name",
                              value: _vm.entry.sports,
                              options: _vm.lists.sports,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                _vm._m(14),
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
                              disabled: !_vm.isDisabled,
                              name: "house_ownership",
                              label: "house_ownership_name",
                              value: _vm.entry.house_ownership,
                              options: _vm.lists.house_ownership,
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "house_type",
                              label: "house_type_name",
                              value: _vm.entry.house_type,
                              options: _vm.lists.house_type,
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "house_make",
                              label: "house_make_name",
                              value: _vm.entry.house_make,
                              options: _vm.lists.house_make,
                              readonly: !_vm.isDisabled,
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
                            attrs: { type: "text", readonly: !_vm.isDisabled },
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
                            attrs: { type: "text", readonly: !_vm.isDisabled },
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
                            attrs: { type: "text", readonly: !_vm.isDisabled },
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
                              disabled: !_vm.isDisabled,
                              name: "utilities",
                              label: "utilities_name",
                              value: _vm.entry.utilities,
                              options: _vm.lists.utilities,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "appliance",
                              label: "appliance_name",
                              value: _vm.entry.appliance,
                              options: _vm.lists.appliance,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                              disabled: !_vm.isDisabled,
                              name: "vehicle",
                              label: "vehicles_name",
                              value: _vm.entry.vehicle,
                              options: _vm.lists.vehicle,
                              multiple: "",
                              readonly: !_vm.isDisabled,
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
                _vm._m(15),
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
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(answer.answer) +
                                        "\n\t\t\t\t\t\t\t\t\t\t\t"
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
            _vm.isDisabled
              ? _c(
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
                )
              : _vm._e(),
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
                    "\n\t\t\t\t\t\t\t" +
                      _vm._s(_vm.entry.resident_no) +
                      "\n\t\t\t\t\t\t"
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
                    "\n\t\t\t\t\t\t\t" +
                      _vm._s(_vm.entry.barangay.id) +
                      " - " +
                      _vm._s(_vm.entry.barangay.barangay_name) +
                      "\n\t\t\t\t\t\t"
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
                    "\n\t\t\t\t\t\t\t" +
                      _vm._s(_vm.entry.gender_name) +
                      "\n\t\t\t\t\t\t"
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
                    "\n\t\t\t\t\t\t\tCalamba, officially the City of Calamba, is a 1st class component city in the province of Laguna, Philippines. Calamba is the regional center of the Calabarzon region. It is situated 50 kilometres south of Manila and 37 kilometres west of Santa Cruz.\n\t\t\t\t\t\t\t#BayanNgMgaBayani\n\t\t\t\t\t\t"
                  ),
                ]),
                _vm._v(" "),
                _vm.isDisabled
                  ? _c(
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
                          "\n\t\t\t\t\t\t\tTransfer Resident\n\t\t\t\t\t\t"
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isDisabled
                  ? _c(
                      "vue-button-spinner",
                      {
                        staticClass: "btn-success",
                        attrs: {
                          status: _vm.status,
                          isLoading: _vm.loading,
                          disabled: _vm.loading,
                        },
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t" +
                            _vm._s(_vm.$t("global.save")) +
                            "\n\t\t\t\t\t\t"
                        ),
                      ]
                    )
                  : _vm._e(),
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
                  _vm._m(16),
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
                            disabled: !_vm.isDisabled,
                            name: "barangay",
                            label: "barangay_name",
                            value: _vm.entry.barangay,
                            options: _vm.lists.barangay,
                            readonly: !_vm.isDisabled,
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
                      attrs: { type: "text", readonly: !_vm.isDisabled },
                      domProps: { value: _vm.entry.household_no },
                      on: { input: _vm.updateHouseholdNumber },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm._m(17),
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
    return _c("div", { staticClass: "card-header card-header-success" }, [
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
    return _c("div", { staticClass: "card-header card-header-success" }, [
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
    return _c("div", { staticClass: "card-header card-header-success" }, [
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
    return _c(
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
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
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
    return _c("div", { staticClass: "card-header card-header-success" }, [
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
    return _c("div", { staticClass: "card-header card-header-success" }, [
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
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_vm._v("Save changes")]
      ),
    ])
  },
]
render._withStripped = true



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