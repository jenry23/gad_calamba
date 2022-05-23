function initialState() {
    return {
      entry: {
        id: null,
        building_no: '',
        household_no: '',
        house_unit: '',
        household_id: '',
        family_code: '',
        work_location_province_id: '',
        work_location_city_id: '',
        poltical_province_registered_id: '',
        poltical_city_registered_id: '',
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
        occupation: '',
        employer: '',
        last_school_attended: '',
        barangay_id: '',
        purok_id: '',
        sitio_id: '',
        subdivision_name: '',
        native_province_id: '',
        native_city_id: '',
        valid_id: '',
        id_number: '',
        sector_id: '',
        gender_id: '',
        gender_preference_id: '',
        civil_status_id: '',
        health_id: '',
        disability_id: '',
        government_assistance_id: '',
        household_monthly_income_id: '',
        economic_status_id: '',
        educational_attaintment_id: '',
        educational_status_id: '',
        government_educational_assistance_id: '',
        ethnicity_id: '',
        house_ownership_id: '',
        house_type_id: '',
        house_make_id: '',
        organization_id: '',
        barangay_code: '',
        block_lot_house_id: '',
        monthly_income: '',
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
        religion_id: '',
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
      lists: [],
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
    storeData({ commit, state, dispatch }) {
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
    updateData({ commit, state, dispatch }) {
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
    setLandlineNumber({ commit }, value) {
      commit('setLandlineNumber', value)
    },
    setEmail ({ commit }, value) {
      commit('setEmail', value)
    },
    setMobileNumber ({ commit }, value) {
      commit('setMobileNumber', value)
    },
    insertPhotoFile ({ commit }, file) {
      commit('insertPhotoFile', file)
    },
    removePhotoFile ({ commit }, file) {
      commit('removePhotoFile', file)
    },
    setCreatedAt({ commit }, value) {
      commit('setCreatedAt', value)
    },
    setUpdatedAt({ commit }, value) {
      commit('setUpdatedAt', value)
    },
    setDeletedAt({ commit }, value) {
      commit('setDeletedAt', value)
    },
    fetchCreateData({ commit }) {
      axios.get(`${route}/create`).then(response => {
        commit('setLists', response.data.meta)
      })
    },
    fetchEditData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}/edit`).then(response => {
        commit('setEntry', response.data.data)
      })
    },
    fetchFirstData({ commit }) {
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
        commit('setLists', response.data.data[0])
        commit('setEntry', response.data.data[1])
      })
    },
    resetState({ commit }) {
      commit('resetState')
    }
  }

  const mutations = {
    setEntry(state, entry) {
      state.entry = entry
    },
    setLandlineNumber(state, value) {
      state.entry.landline_number = value
    },
    setEmail (state, value) {
      state.entry.email = value
    },
    setMobileNumber (state, value) {
      state.entry.mobile_no = value
    },
    insertPhotoFile (state, file) {
      state.entry.photo.push(file)
    },
    removePhotoFile (state, file) {
      state.entry.photo = state.entry.photo.filter(item => {
        return item.id !== file.id
      })
    },
    setPermissions(state, value) {
      state.entry.permissions = value
    },
    setCreatedAt(state, value) {
      state.entry.created_at = value
    },
    setUpdatedAt(state, value) {
      state.entry.updated_at = value
    },
    setDeletedAt(state, value) {
      state.entry.deleted_at = value
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    resetState(state) {
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
