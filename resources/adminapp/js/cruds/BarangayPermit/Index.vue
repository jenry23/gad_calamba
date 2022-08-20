
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
            <button class="btn btn-info" @click="downloads">Print</button>
        	<vue-html2pdf
						:show-layout="false"
						:float-layout="false"
						:enable-download="true"
						:preview-modal="true"
						:paginate-elements-by-height="2000"
						filename="content"
						:pdf-quality="2"
						:manual-pagination="false"
						pdf-format="a3"
						pdf-orientation="portrait"
						pdf-content-width="1200px"

						@progress="onProgress($event)"
						@hasStartedGeneration="hasStartedGeneration()"
						@hasGenerated="hasGenerated($event)"
						ref="html2Pdf"
					>
					<section slot="pdf-content">
        <barangay-clearance ref="barangay_clearance" v-if="is_barangay === 1" :data="result" />
        <cohabitation ref="barangay_clearance" v-if="is_barangay === 3" :data="result" />
                    </section>
            </vue-html2pdf>
    </div>
</template>


<style scoped>
.responsive-iframe {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
}
</style>
<script>
import { mapGetters, mapActions } from 'vuex'
import BarangayClearance from './Transaction/BarangayClearance'
import Cohabitation from './Transaction/Cohabitation'
import VueHtml2pdf from 'vue-html2pdf'

export default {
    components: {
        BarangayClearance,
        Cohabitation,
        VueHtml2pdf,
    },
    data () {
        return {
            status: '',
            activeField: '',
            barangay_clearance_data: [],
            is_barangay: 0,
            transaction_required: false,
            resident_required: false,
            result: [],
        }
    },
    computed: {
        ...mapGetters('BarangayPermitSingle', ['entry', 'loading', 'lists', 'data'])
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
        downloads () {
			this.$refs.html2Pdf.generatePdf()
        },
        submitForm () {
            axios.post('transaction', this.entry).then(response => {
                this.result = response.data;
                this.is_barangay = this.entry.transaction.id;
            });
            // this.storeData()
            //     .then(() => {
            //         // this.$router.push({ name: 'transaction.index' })
            //         // this.$eventHub.$emit('create-success')
            //     })
            //     .catch(error => {
            //         console.log(this.data);
            //         this.status = 'failed'
            //         _.delay(() => {
            //             this.status = ''
            //         }, 3000)
            //     })
            // this.is_barangay = 1;
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
