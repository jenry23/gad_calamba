const set = key => (state, val) => {
  state[key] = val
}

function initialState() {
    return {
      entry: {
        id: null,
        barangay: '',
        purok:'',
        sitio:'',
        sector: '',
        age_from:'',
        age_to:'',
        gender:'',
        other_info:'',
      },
      lists: {
        barangay: [],
        gender:[],
        sector:[],
        other_info:[]
      },
      others:{
        purok:[],
        sitio:[]
      },
      data: [],
      total: 0,
      query: {},
      loading: false
    }
  }

  const route = 'reports'

  const getters = {
    data: state => state.data,
    others: state => state.others,
    lists: state => state.lists,
    total: state => state.total,
    entry: state => state.entry,
    loading: state => state.loading
  }

  const actions = {
    searchData({ commit, state, dispatch }) {
      commit('setLoading', true)
      dispatch('Alert/resetState', null, { root: true })

      return new Promise((resolve, reject) => {
        let params = objectToFormData(state.entry, {
          indices: true,
          booleansAsIntegers: true
        })
        var query1 = state.query
        var data1 = state.entry
        let merged = {...query1, ...data1};

        axios
          .get(`reports/get-data`, {
            params:merged
          })
          .then(response => {
            commit('setData', response.data.data.data)
            commit('setTotal', response.data.data.total)
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
    setBarangay({ commit }, value) {
      commit('setBarangay', value)
      axios.get(`${route}/get-sitpurok/`+value.id).then(response => {
        commit('setOthers',response.data.meta)
     })
    },
    setSitio({ commit }, value) {
      commit('setSitio', value)
    },
    setAgeTo({ commit }, value) {
      commit('setAgeTo', value)
    },
    setAgeFrom({ commit }, value) {
      commit('setAgeFrom', value)
    },
    setPurok({ commit }, value) {
      commit('setPurok', value)
    },
    setGender({ commit }, value) {
      commit('setGender', value)
    },
    setSector({ commit }, value) {
      commit('setSector', value)
    },
    setDescription({ commit }, value) {
      commit('setDescription', value)
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
    fetchCreateData({ commit, dispatch }) {
    axios.get(`${route}/create`).then(response => {
        commit('setLists', response.data.meta)
     })
    },
    fetchEditData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}/edit`).then(response => {
        commit('setEntry', response.data.data)
      })
    },
    fetchShowData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}`).then(response => {
        commit('setEntry', response.data.data)
      })
    },
    setQuery({ commit }, value) {
      commit('setQuery', _.cloneDeep(value))
    },
    resetState({ commit }) {
      commit('resetState')
    }
  }

  const mutations = {
    setData: set('data'),
    setTotal: set('total'),
    setQuery(state, query) {
      query.page = (query.offset + query.limit) / query.limit
      state.query = query
    },
    setLoading: set('loading'),
    setEntry(state, entry) {
      state.entry = entry
    },
    setOthers(state,others){
      state.others = others
    },
    setLists(state, lists) {
        state.lists = lists
    },
    setAgeFrom(state,value){
      state.entry.age_from = value
    },
    setAgeTo(state, value){
      state.entry.age_to = value
    },
    setGender(state,value){
      state.entry.gender = value
    },
    setBarangay(state, value) {
      state.entry.barangay = value
    },
    setPurok(state, value) {
      state.entry.purok = value
    },
    setSitio(state, value) {
      state.entry.sitio = value
    },
    setSector(state, value) {
      state.entry.sector = value
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
