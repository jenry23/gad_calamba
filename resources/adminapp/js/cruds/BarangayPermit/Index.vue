
<template>
    <div class="container-fluid">
        <form @submit.prevent="submitForm">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary card-header-icon">
                            <div class="card-icon">
                                <i class="material-icons">assignment</i>
                            </div>
                            <h4 class="card-title">
                                Table
                                <strong>Transaction</strong>
                            </h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5">
                                    <h5>Transaction Type</h5>
                                    <v-select
                                        class="form-control popcom-input"
                                        name="transaction"
                                        label="transaction_type_name"
                                        :key="'transaction_id-field'"
                                        :value="entry.transaction"
                                        :options="lists.transaction"
                                        required
                                        @input="updateTransaction"
                                        @focus="focusField('transaction')"
                                        @blur="clearFocus"
                                    >
                                        <template #search="{ attributes, events }">
                                            <input
                                                class="vs__search"
                                                :required="!transaction_required"
                                                v-bind="attributes"
                                                v-on="events"
                                            />
                                        </template>
                                    </v-select>
                                </div>
                                <div class="col-md-5">
                                    <h5>Resident Name</h5>
                                    <v-select
                                        class="form-control popcom-input"
                                        name="resident"
                                        label="full_name"
                                        :key="'resident_id-field'"
                                        :value="entry.resident"
                                        :options="lists.resident"
                                        required
                                        @input="updateResident"
                                        @focus="focusField('resident')"
                                        @blur="clearFocus"
                                    >
                                        <template #search="{ attributes, events }">
                                            <input
                                                class="vs__search"
                                                :required="!resident_required"
                                                v-bind="attributes"
                                                v-on="events"
                                            />
                                        </template>
                                    </v-select>
                                </div>

                                <div class="col-md-2 mt-3">
                                    <vue-button-spinner
                                        class="btn-primary"
                                        :status="status"
                                        :isLoading="loading"
                                        :disabled="loading"
                                    >
                                        Search
                                    </vue-button-spinner>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <br />
        <iframe
            src="https://gad_calamba.develop/transaction/barangay_clearance.pdf"
            allowfullscreen="true"
            class="responsive-iframe"
            frameborder="0"
            mozallowfullscreen="true"
            ref="iframeSelectedFile"
            webkitallowfullscreen="true"
        ></iframe>
    </div>
</template>


<style scoped>
.responsive-iframe {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
    height: 100vh;
}
</style>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            status: '',
            activeField: '',
            transaction_required: false,
            resident_required: false,
        }
    },
    computed: {
        ...mapGetters('BarangayPermitSingle', ['entry', 'loading', 'lists'])
    },
    mounted () {
        this.fetchCreateData()
    },
    beforeDestroy () {
        this.resetState()
    },
    methods: {
        ...mapActions('BarangayPermitSingle', ['storeData', 'fetchCreateData', 'resetState', 'setTransaction', 'setResident']),
        updateTransaction (value) {
            this.transaction_required = true;
            this.setTransaction(value)
        },
        updateResident (value) {
            this.resident_required = true;
            this.setResident(value)
        },
        submitForm () {
            this.storeData()
                .then(() => {
                    // this.$router.push({ name: 'transaction.index' })
                    // this.$eventHub.$emit('create-success')
                })
                .catch(error => {
                    this.status = 'failed'
                    _.delay(() => {
                        this.status = ''
                    }, 3000)
                })
        },
        focusField (name) {
            this.activeField = name
        },
        clearFocus () {
            this.activeField = ''
        }
    }
}
</script>
