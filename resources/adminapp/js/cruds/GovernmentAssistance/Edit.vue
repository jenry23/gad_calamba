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
                <strong>Government Assistance</strong>
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
                      'has-items': entry.government_assistance_name,
                      'is-focused': activeField == 'government_assistance_name'
                    }"
                  >
                    <label class="bmd-label-floating required">Government Assistance Name</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.government_assistance_name"
                      @input="updateGovernmentAssistanceName"
                      @focus="focusField('government_assistance_name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.source,
                      'is-focused': activeField == 'source'
                    }"
                  >
                    <label class="bmd-label-floating required">Source</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.source"
                      @input="updateSource"
                      @focus="focusField('source')"
                      @blur="clearFocus"
                      required
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
    ...mapGetters('GovernmentAssistanceSingle', ['entry', 'loading'])
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
    ...mapActions('GovernmentAssistanceSingle', ['updateData','fetchEditData', 'resetState', 'setGovernmentAssistanceName','setSource']),
    updateGovernmentAssistanceName(e) {
      this.setGovernmentAssistanceName(e.target.value)
    },
    updateSource(e){
       this.setSource(e.target.value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'government_assistance.index' })
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
