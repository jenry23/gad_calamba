const set = key => (state, val) => {
    state[key] = val
}

function initialState () {
    return {
        entry: {
            id: null,
            transaction: [],
            resident: [],
        },
        lists: {
            transaction: [],
            resident: [],
        },
        data : {},
        total: 0,
        query: {},
        loading: false
    }
}

const route = 'transaction'

const getters = {
    data: state => state.data,
    lists: state => state.lists,
    total: state => state.total,
    entry: state => state.entry,
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
                    commit('setData', response.data)
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
    setTransaction ({ commit }, value) {
        commit('setTransaction', value)
    },
    setResident ({ commit }, value) {
        commit('setResident', value)
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
    fetchCreateData ({ commit, dispatch }) {
        axios.get(`${route}/create`).then(response => {
            commit('setLists', response.data.meta)
        })
    },
    fetchEditData ({ commit, dispatch }, id) {
        axios.get(`${route}/${id}/edit`).then(response => {
            commit('setEntry', response.data.data)
        })
    },
    fetchShowData ({ commit, dispatch }, id) {
        axios.get(`${route}/${id}`).then(response => {
            commit('setEntry', response.data.data)
        })
    },
    setQuery ({ commit }, value) {
        commit('setQuery', _.cloneDeep(value))
    },
    resetState ({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setData: set('data'),
    setTotal: set('total'),
    setQuery (state, query) {
        query.page = (query.offset + query.limit) / query.limit
        state.query = query
    },
    setLoading: set('loading'),
    setEntry (state, entry) {
        state.entry = entry
    },
    setLists (state, lists) {
        state.lists = lists
    },
    setTransaction (state, value) {
        state.entry.transaction = value
    },
    setResident (state, value) {
        state.entry.resident = value
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
