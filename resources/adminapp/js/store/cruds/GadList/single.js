function initialState () {
  return {
    entry: {
      id: null,
      building_no: '',
      household_no: '',
      house_unit: '',
      household : [],
      family_code: '',
      work_location_province: [],
      work_location_city: [],
      political_province_registered: [],
      political_city_registered: [],
      no_nuclear_family_household_id: '',
      no_bedrooms_id: '',
      no_cr_id: '',
      barangay_residence_year: '',
      no_of_years_in_calamba: '',
      last_name: '',
      first_name: '',
      middle_name: '',
      extension_name: '',
      spouse_last_name: '',
      spouse_first_name: '',
      spouse_middle_name: '',
      spouse_extension_name: '',
      no_of_dependents: '',
      mobile_no: '',
      landline_number: '',
      email: '',
      occupation: [],
      employer: '',
      last_school_attended: '',
      barangay_id: '',
      purok: [],
      sitio: [],
      subdivision_name: '',
      native_province_id: '',
      native_city_id: '',
      valid_id: [],
      id_number: '',
      sector: [],
      gender: [],
      gender_preference: [],
      civil_status: [],
      health_id: '',
      disability_id: '',
      household_monthly_income_id: '',
      economic_status_id: '',
      educational_attaintment: [],
      educational_status: [],
      government_assistance: [],
      ethnicity: [],
      house_ownership_id: '',
      house_type_id: '',
      house_make_id: '',
      organization: [],
      barangay_code: '',
      block_lot_house_id: '',
      monthly_income: [],
      birthdate: '',
      utilities_no1: '',
      utilities_no2: '',
      utilities_no3: '',
      utilities_no4: '',
      appliance_no1: '',
      appliance_no2: '',
      appliance_no3: '',
      appliance_no4: '',
      vehicle_no: '',
      medical_id: '',
      religion: [],
      full_immunization: '',
      covid_19_test: '',
      first_vaccination: '',
      brand: '',
      second_vaccination: '',
      brand2: '',
      pregnancy_age: '',
      prental_checkup: '',
      postnatal_checkup: '',
      photo: [],
      remarks: '',
      permissions: [],
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      gender: [],
      household: [],
      civil_status: [],
      valid_id: [],
      sector: [],
      ethnicity: [],
      religion: [],
      political_province_registered: [],
      political_city_registered: [],
      purok: [],
      sitio: [],
      educational_attaintment: [],
      educational_status: [],
      government_assistance: [],
      organization: [],
      occupation: [],
      work_location_province: [],
      work_location_city: [],
      monthly_income: [],
    },
    loading: false
  }
}

const route = 'gad'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData ({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData ({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setLandlineNumber ({ commit }, value) {
    commit('setLandlineNumber', value)
  },
  setEmail ({ commit }, value) {
    commit('setEmail', value)
  },
  setMobileNumber ({ commit }, value) {
    commit('setMobileNumber', value)
  },
  setGender ({ commit }, value) {
    commit('setGender', value)
  },
  setGenderPreference ({ commit }, value) {
    commit('setGenderPreference', value)
  },
  setFamilyCode ({ commit }, value) {
    commit('setFamilyCode', value)
  },
  setHousehold ({ commit }, value) {
    commit('setHousehold', value)
  },
  setCivilStatus ({ commit }, value) {
    commit('setCivilStatus', value)
  },
  setSpouseName ({ commit }, value) {
    commit('setSpouseName', value)
  },
  setBirthdate ({ commit }, value) {
    commit('setBirthdate', value)
  },
  setValidID ({ commit }, value) {
    commit('setValidID', value)
  },
  setIDNumber ({ commit }, value) {
    commit('setIDNumber', value)
  },
  setReligion ({ commit }, value) {
    commit('setReligion', value)
  },
  setEthnicity ({ commit }, value) {
    commit('setEthnicity', value)
  },
  setSector ({ commit }, value) {
    commit('setSector', value)
  },
  setLastSchoolAttended ({ commit }, value) {
    commit('setLastSchoolAttended', value)
  },
  setGovernmentAssistance ({ commit }, value) {
    commit('setGovernmentAssistance', value)
  },
  setOrganization ({ commit }, value) {
    commit('setOrganization', value)
  },
  setBuildingHouseUnit ({ commit }, value) {
    commit('setBuildingHouseUnit', value)
  },
  setPoliticalProvinceRegistered ({ commit }, value) {
    commit('setPoliticalProvinceRegistered', value)
  },
  setPoliticalCityRegistered ({ commit }, value) {
    commit('setPoliticalCityRegistered', value)
  },
  setBlockNoStreet ({ commit }, value) {
    commit('setBlockNoStreet', value)
  },
  setPurok ({ commit }, value) {
    commit('setPurok', value)
  },
  setSitio ({ commit }, value) {
    commit('setSitio', value)
  },
  setYearsInCalamba ({ commit }, value) {
    commit('setYearsInCalamba', value)
  },
  setYearsInBarangay ({ commit }, value) {
    commit('setYearsInBarangay', value)
  },
  setRemarks ({ commit }, value) {
    commit('setRemarks', value)
  },
  setEducationalAttaintment ({ commit }, value) {
    commit('setEducationalAttaintment', value)
  },
  setEducationalStatus ({ commit }, value) {
    commit('setEducationalStatus', value)
  },
  setOccupation ({ commit }, value) {
    commit('setOccupation', value)
  },
  setEmployer ({ commit }, value) {
    commit('setEmployer', value)
  },
  setWorkLocationProvince ({ commit }, value) {
    commit('setWorkLocationProvince', value)
  },
  setWorkLocationCity ({ commit }, value) {
    commit('setWorkLocationCity', value)
  },
  setMonthlyIncome ({ commit }, value) {
    commit('setMonthlyIncome', value)
  },

  insertPhotoFile ({ commit }, file) {
    commit('insertPhotoFile', file)
  },
  removePhotoFile ({ commit }, file) {
    commit('removePhotoFile', file)
  },
  setCreatedAt ({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt ({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt ({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchCreateData ({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData ({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchFirstData ({ commit }) {
    axios.get(`${route}/first-data`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchThirdData ({ commit }) {
    axios.get(`${route}/third-data`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData ({ commit, dispatch }, data) {
    const id = data['id'];
    const barangay_id = data['barangay_id'];
    axios.get(`${route}/show-data/${id}/${barangay_id}`).then(response => {
      commit('setLists', response.data.data.first_data)
      commit('setEntry', response.data.data.second_data)
    })
  },
  resetState ({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry (state, entry) {
    state.entry = entry
  },
  setLandlineNumber (state, value) {
    state.entry.landline_number = value
  },
  setEmail (state, value) {
    state.entry.email = value
  },
  setMobileNumber (state, value) {
    state.entry.mobile_no = value
  },
  setGender (state, value) {
    state.entry.gender = value
  },
  setGenderPreference (state, value) {
    state.entry.gender_preference = value
  },
  setFamilyCode (state, value) {
    state.entry.family_code = value
  },
  setHousehold (state, value) {
    state.entry.household = value
  },
  setCivilStatus (state, value) {
    state.entry.civil_status = value
  },
  setSpouseName (state, value) {
    const name = value.match(/\b\w+\b/g);

    state.entry.spouse_first_name = name[0];
    state.entry.spouse_middle_name = name[1];
    state.entry.spouse_last_name = name[2];
  },
  setBirthdate (state, value) {
    state.entry.birthdate = value
  },
  setValidID (state, value) {
    state.entry.valid_id = value
  },
  setIDNumber (state, value) {
    state.entry.id_number = value
  },
  setReligion (state, value) {
    state.entry.religion = value
  },
  setEthnicity (state, value) {
    state.entry.ethnicity = value
  },
  setSector (state, value) {
    state.entry.sector = value
  },
  setPoliticalProvinceRegistered (state, value) {
    state.entry.political_province_registered = value
  },
  setPoliticalCityRegistered (state, value) {
    state.entry.political_city_registered = value
  },
  setBuildingHouseUnit (state, value) {
    const myArray = value.split(' ', 4);

    state.entry.building_no = myArray[1];
    state.entry.house_unit = myArray[3];
  },
  setBlockNoStreet (state, value) {
    state.entry.block_lot_house_id = value
  },
  setPurok (state, value) {
    state.entry.purok = value
  },
  setSitio (state, value) {
    state.entry.sitio = value
  },
  setYearsInCalamba (state, value) {
    state.entry.no_of_years_in_calamba = value
  },
  setYearsInBarangay (state, value) {
    state.entry.barangay_residence_year = value
  },
  setRemarks (state, value) {
    state.entry.remarks = value
  },
  setEducationalStatus (state, value) {
    state.entry.educational_status = value
  },
  setEducationalAttaintment (state, value) {
    state.entry.educational_attaintment = value
  },
  setLastSchoolAttended (state, value) {
    state.entry.last_school_attended = value
  },
  setGovernmentAssistance (state, value) {
    state.entry.government_assistance = value
  },
  setOrganization (state, value) {
    state.entry.organization = value
  },
  setOccupation (state, value) {
    state.entry.occupation = value
  },
  setEmployer (state, value) {
    state.entry.employer = value
  },
  setWorkLocationProvince (state, value) {
    state.entry.work_location_province = value
  },
  setWorkLocationCity (state, value) {
    state.entry.work_location_city = value
  },
  setMonthlyIncome (state, value) {
    state.entry.monthly_income = value
  },
  insertPhotoFile (state, file) {
    state.entry.photo.push(file)
  },
  removePhotoFile (state, file) {
    state.entry.photo = state.entry.photo.filter(item => {
      return item.id !== file.id
    })
  },
  setPermissions (state, value) {
    state.entry.permissions = value
  },
  setCreatedAt (state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt (state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt (state, value) {
    state.entry.deleted_at = value
  },
  setLists (state, lists) {
    state.lists = lists
  },
  setLoading (state, loading) {
    state.loading = loading
  },
  resetState (state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
