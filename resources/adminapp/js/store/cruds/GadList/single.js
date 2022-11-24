function initialState () {
  return {
    entry: {
      id: null,
      building_no: '',
      household_no: '',
      house_unit: '',
      household: [],
      family_code: '',
      work_location_province: [],
      work_location_city: [],
      political_province_registered: [],
      political_city_registered: [],
      no_nuclear_family_household_id: '',
      no_bedrooms_id: '',
      no_cr_id: '',
      barangay_residence_year: '',
      calamba_residence_year: '',
      last_name: '',
      first_name: '',
      middle_name: '',
      extension_name: '',
      spouse_last_name: '',
      spouse_first_name: '',
      spouse_middle_name: '',
      spouse_extension_name: '',
      political_precinct_no: '',
      political_brgy_registered: '',
      no_of_dependents: '',
      mobile_no: '',
      landline_number: '',
      email: '',
      occupation: [],
      employer: '',
      last_school_attended: '',
      barangay: [],
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
      household_monthly_income_id: '',
      economic_status_id: '',
      educational_attaintment: [],
      educational_status: [],
      government_assistance: [],
      ethnicity: [],
      house_ownership: [],
      house_type: [],
      house_make: [],
      organization: [],
      barangay_code: '',
      block_lot_house_id: '',
      monthly_income: [],
      birth_date: '',
      religion: [],
      medicine: [],
      full_immunization: '',
      covid_19_test: '',
      brand1: '',
      first_date_vaccination: '',
      brand2: '',
      second_date_vaccination: '',
      brand3: '',
      booster_date_vaccination: '',
      pregnancy_age: '',
      prental_checkup: '',
      postnatal_checkup: '',
      hard_skill: [],
      soft_skill: [],
      hobbies: [],
      sports: [],
      appliance: [],
      utilities: [],
      vehicle: [],
      photo: [],
      remarks: '',
      permissions: [],
      questions: [],
      disability_condition: [],
      health_condition: [],
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      medicine: [],
      house_ownership: [],
      house_type: [],
      house_make: [],
      hard_skill: [],
      soft_skill: [],
      hobbies: [],
      sports: [],
      appliance: [],
      utilities: [],
      vehicle: [],
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
      barangay: [],
      questions: [],
      disability_condition: [],
      health_condition: [],
    },
    items: [
      { name: 'health', value: 'App\\Models\\Health' },
      { name: 'disability', value: 'App\\Models\\Disability' },
      { name: 'government_assistance', value: 'App\\Models\\GovernmentAssistance' },
      { name: 'soft_skill', value: 'App\\Models\\SoftSkill' },
      { name: 'hard_skill', value: 'App\\Models\\HardSkill' },
      { name: 'hobbies', value: 'App\\Models\\Hobbies' },
      { name: 'sports', value: 'App\\Models\\Sports' },
      { name: 'ethnicity', value: 'App\\Models\\Ethnicity' },
      { name: 'sector', value: 'App\\Models\\Sector' },
      { name: 'utilities', value: 'App\\Models\\Utilities' },
      { name: 'appliance', value: 'App\\Models\\Appliances' },
      { name: 'vehicle', value: 'App\\Models\\Vehicles' },
      { name: 'organization', value: 'App\\Models\\Organization' },
      { name: 'medical', value: 'App\\Models\\Medical' }
    ],
    loading: false
  }
}

const route = 'gad'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  items: state => state.items,
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
  setBarangay ({ commit }, value) {
    commit('setBarangay', value)
  },
  setBrand1 ({ commit }, value) {
    commit('setBrand1', value)
  },
  setQuestions ({ commit }, value) {
    commit('setQuestions', value)
  },
  setFirstDateVaccination ({ commit }, value) {
    commit('setFirstDateVaccination', value)
  },
  setBrand2 ({ commit }, value) {
    commit('setBrand2', value)
  },
  setBrand3 ({ commit }, value) {
    commit('setBrand3', value)
  },
  setBoosterDateVaccination ({ commit }, value) {
    commit('setBoosterDateVaccination', value)
  },
  setSecondDateVaccination ({ commit }, value) {
    commit('setSecondDateVaccination', value)
  },
  setFullImmunization ({ commit }, value) {
    commit('setFullImmunization', value)
  },
  setMedicine ({ commit }, value) {
    commit('setMedicine', value)
  },
  setPregnancyAge ({ commit }, value) {
    commit('setPregnancyAge', value)
  },
  setPrentalCheckup ({ commit }, value) {
    commit('setPrentalCheckup', value)
  },
  setPostalCheckup ({ commit }, value) {
    commit('setPostalCheckup', value)
  },
  setHouseholdNumber ({ commit }, value) {
    commit('setHouseholdNumber', value)
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
  setHobbies ({ commit }, value) {
    commit('setHobbies', value)
  },
  setSports ({ commit }, value) {
    commit('setSports', value)
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
  setHouseOwnership ({ commit }, value) {
    commit('setHouseOwnership', value)
  },
  setHouseType ({ commit }, value) {
    commit('setHouseType', value)
  },
  setHouseMake ({ commit }, value) {
    commit('setHouseMake', value)
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
  setHardSkills ({ commit }, value) {
    commit('setHardSkills', value)
  },
  setSoftSkills ({ commit }, value) {
    commit('setSoftSkills', value)
  },
  setNuclearFamilyHousehold ({ commit }, value) {
    commit('setNuclearFamilyHousehold', value)
  },
  setBedRooms ({ commit }, value) {
    commit('setBedRooms', value)
  },
  setCRID ({ commit }, value) {
    commit('setCRID', value)
  },
  setPoliticalPrecintNumber ({ commit }, value) {
    commit('setPoliticalPrecintNumber', value)
  },
  setPoliticalBarangay ({ commit }, value) {
    commit('setPoliticalBarangay', value)
  },
  setVehicle ({ commit }, value) {
    commit('setVehicle', value)
  },
  setAppliance ({ commit }, value) {
    commit('setAppliance', value)
  },
  setUtilities ({ commit }, value) {
    commit('setUtilities', value)
  },
  setHealthCondition ({ commit }, value) {
    commit('setHealthCondition', value)
  },
  setDisability ({ commit }, value) {
    commit('setDisability', value)
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
  searchDetails (nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return myArray[i];
      }
    }
  },
  fetchEditData ({ commit, state }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      const data_array = [];
      if (response.data.data.gad_details) {
        response.data.data.gad_details.map(function (value, key) {
          if (data_array[value.item_name] === undefined)
              data_array[value.item_name] = []
            data_array[value.item_name].push(value.item)
        });
      }
      console.log(data_array);
      const datas = { ...response.data.data, ...data_array };
      commit('setEntry', datas)
      commit('setLists', response.data.meta)
    })
  },
  fetchFirstData ({ commit }) {
    axios.get(`${route}/first-data`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchHouseholdData ({ commit }, id) {
    axios.get(`${route}/household/${id}`).then(response => {
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
      commit('setLists', response.data.data)
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
  setQuestions (state, value) {
    state.entry.questions = value
  },
  setBarangay (state, value) {
    state.entry.barangay = value
  },
  setFullImmunization (state, value) {
    state.entry.full_immunization = value
  },
  setMedicine (state, value) {
    state.entry.medicine = value
  },
  setPregnancyAge (state, value) {
    state.entry.pregnancy_age = value
  },
  setPrentalCheckup (state, value) {
    state.entry.prental_checkup = value
  },
  setPostalCheckup (state, value) {
    state.entry.postnatal_checkup = value
  },
  setHouseholdNumber (state, value) {
    state.entry.household_no = value
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
    state.entry.birth_date = value
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
  setHealthCondition (state, value) {
    state.entry.health_condition = value
  },
  setDisability (state, value) {
    state.entry.disability_condition = value
  },
  setPoliticalProvinceRegistered (state, value) {
    state.entry.political_province_registered = value
  },
  setPoliticalCityRegistered (state, value) {
    state.entry.political_city_registered = value
  },
  setPoliticalPrecintNumber (state, value) {
    state.entry.political_precinct_no = value
  },
  setPoliticalBarangay (state, value) {
    state.entry.political_brgy_registered = value
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
    state.entry.calamba_residence_year = value
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
  setHardSkills (state, value) {
    state.entry.hard_skill = value
  },
  setSoftSkills (state, value) {
    state.entry.soft_skill = value
  },
  setHobbies (state, value) {
    state.entry.hobbies = value
  },
  setSports (state, value) {
    state.entry.sports = value
  },
  setHouseOwnership (state, value) {
    state.entry.house_ownership = value
  },
  setHouseType (state, value) {
    state.entry.house_type = value
  },
  setHouseMake (state, value) {
    state.entry.house_make = value
  },
  setNuclearFamilyHousehold (state, value) {
    state.entry.no_nuclear_family_household_id = value
  },
  setBedRooms (state, value) {
    state.entry.no_bedrooms_id = value
  },
  setCRID (state, value) {
    state.entry.no_cr_id = value
  },
  setVehicle (state, value) {
    state.entry.vehicle = value;
  },
  setAppliance (state, value) {
    state.entry.appliance = value;
  },
  setUtilities (state, value) {
    state.entry.utilities = value;
  },
  setBrand1 (state, value) {
    state.entry.brand1 = value;
  },
  setFirstDateVaccination (state, value) {
    state.entry.first_date_vaccination = value;
  },
  setBrand2 (state, value) {
    state.entry.brand2 = value;
  },
  setBrand3 (state, value) {
    state.entry.brand3 = value;
  },
  setBoosterDateVaccination (state, value) {
    state.entry.booster_date_vaccination = value;
  },
  setSecondDateVaccination (state, value) {
    state.entry.second_date_vaccination = value;
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
