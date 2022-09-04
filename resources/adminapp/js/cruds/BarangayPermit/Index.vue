
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
										class="btn-success"
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
		<button class="btn btn-success" @click="downloads">Print</button>
		<vue-html2pdf
			:show-layout="false"
			:float-layout="false"
			:enable-download="true"
			:preview-modal="true"
			:paginate-elements-by-height="2000"
			:filename="transaction_name"
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
				<barangay-clearance-resident-a1 v-if="is_barangay === 1" :data="result" />
				<barangay-certification-resident-b1 v-if="is_barangay === 2" :data="result" />
				<barangay-clearance-activity-a2 v-if="is_barangay === 3" :data="result" />
				<barangay-certification-non-resident-b2 v-if="is_barangay === 4" :data="result" />
				<barangay-certification-cohabitation-b3 v-if="is_barangay === 5" :data="result" />
				<barangay-certification-indigency-b4 v-if="is_barangay === 6" :data="result" />
				<barangay-certification-ra-b5 v-if="is_barangay === 7" :data="result" />
				<barangay-certification-oath-b6 v-if="is_barangay === 8" :data="result" />
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
	import BarangayCertificationCohabitationB3 from './Transaction/BarangayCertificationCohabitationB3'
	import BarangayCertificationIndigencyB4 from './Transaction/BarangayCertificationIndigencyB4'
	import BarangayCertificationNonResidentB2 from './Transaction/BarangayCertificationNonResidentB2'
	import BarangayCertificationOathB6 from './Transaction/BarangayCertificationOathB6'
	import BarangayCertificationRaB5 from './Transaction/BarangayCertificationRaB5'
	import BarangayCertificationResidentB1 from './Transaction/BarangayCertificationResidentB1'
	import BarangayClearanceActivityA2 from './Transaction/BarangayClearanceActivityA2'
	import BarangayClearanceResidentA1 from './Transaction/BarangayClearanceResidentA1'
	import VueHtml2pdf from 'vue-html2pdf'

	export default {
		components: {
			BarangayCertificationCohabitationB3,
			BarangayCertificationIndigencyB4,
			BarangayCertificationNonResidentB2,
			BarangayCertificationOathB6,
			BarangayCertificationRaB5,
			BarangayCertificationResidentB1,
			BarangayClearanceActivityA2,
			BarangayClearanceResidentA1,
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
				transaction_name: null,
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
				axios.post('transaction/print-data', this.entry).then(response => {

				})
			},
			submitForm () {
				axios.post('transaction', this.entry).then(response => {
					this.result = response.data;
					this.is_barangay = this.entry.transaction.id;
					this.transaction_name = this.entry.transaction.transaction_type_name + '-' + this.entry.resident.full_name;
				});
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
