<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-success card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                Create
                <strong>Sitio</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.sitio_name,
                      'is-focused': activeField == 'sitio_name'
                    }"
                  >
                    <label class="bmd-label-floating required">Sitio Name</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.sitio_name"
                      @input="updateSitioName"
                      @focus="focusField('sitio_name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                    <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.barangay_id,
                      'is-focused': activeField == 'barangay_id'
                    }"
                  >
                    <label class="bmd-label-floating required">Barangay Name</label>
                    <v-select
                      name="barangay_id"
                      label="barangay_name"
                      :key="'barangay_id-field'"
                      :value="entry.barangay_id"
                      :options="lists.barangay_id"
                      @input="updateBarangayID"
                      @focus="focusField('barangay_id')"
                      @blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-success"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('SitioSingle', ['entry', 'loading','lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('SitioSingle', ['storeData','fetchCreateData','resetState', 'setSitioName','setBarangayID']),
    updateSitioName(e) {
      this.setSitioName(e.target.value)
    },
    updateBarangayID(value){
      this.setBarangayID(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'sitio.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
