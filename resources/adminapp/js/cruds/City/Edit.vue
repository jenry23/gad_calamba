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
                <strong>City</strong>
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
                      'has-items': entry.city_name,
                      'is-focused': activeField == 'city_name'
                    }"
                  >
                    <label class="bmd-label-floating required">City Name</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.city_name"
                      @input="updateCityName"
                      @focus="focusField('city_name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                    <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.province_id,
                      'is-focused': activeField == 'province_id'
                    }"
                  >
                    <label class="bmd-label-floating required">Province Name</label>
                    <v-select
                      name="province_id"
                      label="province_name"
                      :key="'province_id-field'"
                      :value="entry.province_id"
                      :options="lists.province_id"
                      @input="updateProvinceID"
                      @focus="focusField('province_id')"
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
    ...mapGetters('CitySingle', ['entry', 'loading','lists'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('CitySingle', ['updateData','fetchEditData','resetState', 'setCityName','setProvinceID']),
    updateCityName(e) {
      this.setCityName(e.target.value)
    },
    updateProvinceID(value){
      this.setProvinceID(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'city.index' })
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
