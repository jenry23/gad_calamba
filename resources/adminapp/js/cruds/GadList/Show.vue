<style scoped>
input {
	text-decoration: underline;
}
table,
tbody,
tr,
th,
td {
	background-color: rgba(0, 0, 0, 0) !important;
}
.card-images-body {
	background: url('/images/background-family.png') no-repeat;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
<template>
	<div class="row">
		<div class="col-md-12">
			<button class="btn btn-info" @click="downloads">Download PDF</button>
			<div ref="content">
				<div class="card" style="border: 1px solid black">
					<div class="card-header">
						<div class="row">
							<div class="col-md-3 mt-4">
								<h4 class="card-title" style="font-family: inlander; color: black; font-weight: 900">
									FAMILY INFORMATION
								</h4>
								<p class="card-category" style="font-family: Abula Light; color: black">
									HOUSEHOLD MEMBERS
								</p>
							</div>
							<div class="col-md-9">
								<img src="/images/header.png" style="margin-top: -1%; width: 100%" />
							</div>
						</div>
					</div>
					<div class="card-images-body">
						<div class="card-body">
							<center>
								<div class="row">
									<div class="col-md-3">
										<br />
										<img src="/images/cap.jpg" height="104px" width="110px" />
										<img src="/images/popcom.png" height="110px" width="110px" />
										<b></b>
									</div>
									<div class="col-md-5">
										<div>
											<h3
												style="
													color: black;
													font-family: Glacial Indifference;
													font-weight: 900;
												"
											>
												<b style="text-transform: uppercase">City Government of Calamba</b
												><br />
												<b style="text-transform: uppercase; margin-right: 60px"
													>Gender and Development</b
												><br />
												<b style="text-transform: uppercase; margin-right: 150px"
													>Household Profile</b
												>
											</h3>
											<h3 style="font-family: Lora; margin-right: 240px">
												<b style="text-transform: uppercase">E-Certificate</b>
											</h3>
										</div>
									</div>
									<div class="col-md-4 mt-4">
										<table class="table-bordered" style="margin-right: 10px">
											<tr>
												<th><b>Brgy ID:</b></th>
												<td v-if="entry.barangay">
													{{ entry.barangay.id + ' - ' + entry.barangay.barangay_name }}
												</td>
												<td v-else></td>
											</tr>
											<tr>
												<th><b>Purok</b></th>
												<td>{{ entry.purok_names }}</td>
											</tr>
											<tr>
												<th scope="col"><b>Subdivsion / Sitio</b></th>
												<td>{{ entry.sitio_name }}</td>
											</tr>
										</table>
									</div>
								</div>
							</center>
						</div>
						<div class="card">
							<div class="card-body">
								<div class="row">
									<br />
									<!-- Table that shows Employee List -->
									<table style="color: black" class="table table-border table-stripe">
										<thead>
											<tr>
												<th><b>Household ID</b></th>
												<th><b>Family Code</b></th>
												<th><b>Relationship</b></th>
												<th><b>Family Members</b></th>
												<th><b>Birthday</b></th>
												<th><b>Gender</b></th>
												<th><b>Residence Status</b></th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="val in lists.first_data" :key="val.id">
												<td>{{ val.gad_id }}</td>
												<td>{{ val.family_code }}</td>
												<td>{{ val.household_names }}</td>
												<td style="text-transform: uppercase">
													<router-link
														:to="{ name: 'gad_list.edit', params: { id: val.id } }"
													>
														{{ val.full_name }}
													</router-link>
												</td>
												<td>{{ formatDate(val.birth_date) }}</td>
												<td v-if="val.gender">{{ val.gender.gender_name }}</td>
												<td v-else></td>
												<td v-if="val.no_of_years_in_calamba == new Date().getFullYear()">
													Immigrant
												</td>
												<td v-else>Native</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div style="font-family: Abula Light; font-weigh: 500">
							<div class="d-flex justify-content-center">
								<h4>
									This is to certify that the aforemention household member/s is/are Bonafide
									resident/s of CALAMBA CITY,LAGUNA
								</h4>
							</div>
							<div class="d-flex align-items-end flex-column">
								<small>
									CERTIFICATION ISSUED BY CITY POPULATION MANAGEMENT OFFICE<br />
									DATABASE POWERED BY MO-GENDER AND DEVELOPMENT OFFICE
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<a
					class="btn btn-primary"
					data-toggle="collapse"
					href="#collapseExample"
					role="button"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					House Details
				</a>
				<a
					class="btn btn-primary"
					data-toggle="collapse"
					href="#collapseExample1"
					role="button"
					aria-expanded="false"
					aria-controls="collapseExample1"
				>
					Government Assistance
				</a>
			</div>
			<div class="collapse" id="collapseExample">
				<div class="card card-body">
					<div
						class="form-group bmd-form-group"
						:class="{
							'is-focused': true
						}"
					>
						<label>House Type</label>
						<div v-if="lists.second_data.house_type">
							<input
								type="text"
								class="form-control"
								:value="lists.second_data.house_type.house_type_name"
							/>
						</div>
					</div>
					<div
						class="form-group bmd-form-group"
						:class="{
							'is-focused': true
						}"
					>
						<label>House Make</label>
						<div v-if="lists.second_data.house_make">
							<input
								type="text"
								class="form-control"
								:value="lists.second_data.house_make.house_make_name"
							/>
						</div>
					</div>
					<div
						class="form-group bmd-form-group"
						:class="{
							'is-focused': true
						}"
					>
						<label>House Ownership</label>
						<div v-if="lists.second_data.house_ownership">
							<input
								type="text"
								class="form-control"
								:value="lists.second_data.house_ownership.house_ownership_name"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="collapse" id="collapseExample1">
				<div class="card card-body">
					<div
						class="form-group bmd-form-group"
						:class="{
							'is-focused': true
						}"
					>
						<label>Government Assistance</label>
						<input
							type="text"
							class="form-control"
							value="Agrarian Reform Community Development Program (ARCDP)"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableList from '@components/Datatables/DatatableList'
import html2canvas from "html2canvas"
import html2pdf from 'html2pdf.js'

export default {
    components: {
        DatatableList
    },
    data () {
        return {
        }
    },
    beforeDestroy () {
        this.resetState()
    },
    computed: {
        ...mapGetters('GadListSingle', ['lists', 'data', 'entry']),
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler () {
                const id = this.$route.params.id;
                const barangay_id = this.$route.params.barangay_id;

                this.resetState()
                this.fetchShowData({ id, barangay_id })
            }
        }
    },
    methods: {
        formatDate (value) {
            if (value) {
                var data = moment(String(value)).format('MMMM DD, YYYY')
            } else {
                var data = ''
            }
            return data;
        },
        ...mapActions('GadListSingle', ['fetchShowData', 'resetState']),
        downloads () {
            html2pdf(this.$refs.content, {
                filename: 'content.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            })
        }
    }
}
</script>
