<style>
.anyClass {
	height: 400px;
	overflow-y: scroll;
}
.imageBackground {
	background: url('/images/googlemap.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card imageBackground">
					<div class="card-header card-header-info card-header-icon">
						<div class="card-icon">
							<img src="/images/calamba-logo.png" height="85px;" width="85px;" />
						</div>
						<h4 class="card-title">Calamba Map</h4>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-8">
								<img src="/images/calamba-map.png" width="750px" height="380px;" />
							</div>
							<div class="col-md-4" style="margin-top: -70px">
								<div class="card">
									<div class="table-responsive table-sales anyClass" v-if="data.is_barangay === 0">
										<center>
											<h4 class="card-title">LIST OF BARANGAY</h4>
										</center>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table">
													<thead class="text-primary">
														<tr>
															<th>Name</th>
															<th>Total Resident</th>
															<th>Percent</th>
														</tr>
													</thead>
													<tbody>
														<tr v-for="barangay in data.barangays" :key="barangay.id">
															<td>{{ barangay.barangay_name }}</td>
															<td>
																{{ Number(barangay.count_resident).toLocaleString() }}
															</td>
															<td>{{ barangay.percent }}%</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div class="table-responsive table-sales anyClass" v-else>
										<center>
											<h4 class="card-title">LIST OF Purok/Sitio/Subdivision</h4>
										</center>
										<div class="card-body">
											<div class="table-responsive">
												<table class="table">
													<thead class="text-primary">
														<tr>
															<th>Name</th>
															<th>Total Resident</th>
														</tr>
													</thead>
													<tbody>
														<tr v-for="sitio in data.sitios" :key="sitio.id">
															<td>{{ sitio.sitio_name }}</td>
															<td>{{ numberFormat(sitio.count_resident) }}</td>
														</tr>
														<tr v-for="purok in data.puroks" :key="purok.id">
															<td>{{ purok.purok_name }}</td>
															<td>{{ numberFormat(purok.count_resident) }}</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-6 col-sm-6">
				<div class="card card-stats" style="background-color: #00aaa0 !important; color: white">
					<center>
						<div class="card-header card-header-info card-header-icon">
							<div class="card-icon">
								<i class="material-icons">equalizer</i>
							</div>
						</div>
						<div class="card-header">
							Total Residents / Respondents
							<h3 class="card-title" style="color: white">
								{{ numberFormat(data.total_people_count) }}
							</h3>
						</div>
						<div class="row">
							<div class="col-md-6">
								<h5>Male</h5>
								<h3 style="margin-top: -20px">{{ numberFormat(data.total_male_count) }}</h3>
							</div>
							<div class="col-md-6">
								<h5>Female</h5>
								<h3 style="margin-top: -20px">{{ numberFormat(data.total_female_count) }}</h3>
							</div>
						</div>
					</center>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6">
				<div class="card card-stats" style="background-color: #ff7a5a !important; color: white">
					<center>
						<div class="card-header card-header-danger card-header-icon">
							<div class="card-icon">
								<i class="material-icons">accessible</i>
							</div>
						</div>
						<div class="card-header">
							Total Person W/ Disabilities
							<h3 class="card-title" style="color: white">
								{{ numberFormat(data.total_person_disability_count) }}
							</h3>
						</div>
						<div class="row">
							<div class="col-md-6">
								<h5>Male</h5>
								<h3 style="margin-top: -20px">{{ numberFormat(data.total_male_disablity_count) }}</h3>
							</div>
							<div class="col-md-6">
								<h5>Female</h5>
								<h3 style="margin-top: -20px">
									{{ numberFormat(data.total_female_disablity_count) }}
								</h3>
							</div>
						</div>
					</center>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6">
				<div class="card card-stats" style="background-color: #462066 !important; color: white">
					<center>
						<div class="card-header card-header-success card-header-icon">
							<div class="card-icon">
								<i class="material-icons">contacts</i>
							</div>
						</div>
						<div class="card-header">
							Total Senior Citizen
							<h3 class="card-title" style="color: white">
								{{ numberFormat(data.total_senior_count) }}
							</h3>
						</div>
						<br />
						<div class="row">
							<div class="col-md-6">
								<h5>Male</h5>
								<h3 style="margin-top: -20px">{{ numberFormat(data.total_male_senior_count) }}</h3>
							</div>
							<div class="col-md-6">
								<h5>Female</h5>
								<h3 style="margin-top: -20px">{{ numberFormat(data.total_female_senior_count) }}</h3>
							</div>
						</div>
					</center>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6">
				<div class="card card-stats" style="background-color: #ffb85f !important; color: white">
					<center>
						<div class="card-header card-header-warning card-header-icon">
							<div class="card-icon">
								<i class="material-icons">attribution</i>
							</div>
						</div>
						<div class="card-header">
							Total Registered Voters in Calamba
							<h3 class="card-title" style="color: white">
								{{ numberFormat(data.total_voters_count) }}
							</h3>
						</div>
						<div class="row">
							<div class="col-md-6">
								<h5>Male</h5>
								<h3 style="margin-top: -20px">{{ numberFormat(data.total_voters_male_count) }}</h3>
							</div>
							<div class="col-md-6">
								<h5>Female</h5>
								<h3 style="margin-top: -20px">{{ numberFormat(data.total_voters_female_count) }}</h3>
							</div>
						</div>
					</center>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<div class="card card-chart">
					<div class="card-header card-header-success">
						<div class="ct-chart" id="websiteViewsChart">Migration Rate</div>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-6">
								<h5>Male</h5>
								{{ numberFormat(data.total_male_migration_rate) }}
							</div>
							<div class="col-md-6">
								<h5>Female</h5>
								{{ numberFormat(data.total_female_migration_rate) }}
							</div>
						</div>
					</div>
					<div class="card-footer">
						<div class="stats"><i class="material-icons">access_time</i> updated 4 minutes ago</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card card-chart">
					<div class="card-header card-header-success">
						<div class="ct-chart" id="websiteViewsChart">Resident Status</div>
					</div>
					<div class="card-body">
						<table class="table table-responsive">
							<thead>
								<tr>
									<th></th>
									<th>Male</th>
									<th>Female</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Transient</td>
									<td>{{ numberFormat(data.transient_status_male) }}</td>
									<td>{{ numberFormat(data.transient_status_female) }}</td>
								</tr>
								<tr>
									<td>Immigrant</td>
									<td>{{ numberFormat(data.immigrant_status_male) }}</td>
									<td>{{ numberFormat(data.immigrant_status_female) }}</td>
								</tr>
								<tr>
									<td>Native</td>
									<td>{{ numberFormat(data.native_status_male) }}</td>
									<td>{{ numberFormat(data.native_status_female) }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card card-chart">
					<div class="card-header card-header-success">
						<div class="ct-chart" id="completedTasksChart">Total Number Of</div>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-6">
								<h5>Household</h5>
								{{ numberFormat(data.total_household) }}
							</div>
							<div class="col-md-6">
								<h5>Families</h5>
								{{ numberFormat(data.total_family) }}
							</div>
						</div>
					</div>
					<div class="card-footer">
						<div class="stats"><i class="material-icons">access_time</i> campaign sent 2 days ago</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="card card-stats">
					<div class="card-header card-header-success">
						<h3 class="card-title">House Ownership</h3>
					</div>
					<div class="card-body">
						<line-chart :chart-data="data_houseownership"></line-chart>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="card card-stats h-80">
					<div class="card-header card-header-success">
						<h3 class="card-title">Utilities</h3>
						<br />
					</div>
					<div class="card-body">
						<line-chart :chart-data="data_utilities"></line-chart>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="card card-stats">
					<div class="card-header card-header-success">
						<h3 class="card-title">Educational Attaintment</h3>
					</div>
					<div class="card-body">
						<bar-chart :chart-data="chartData"></bar-chart>
						<!-- <pie-chart :chart-data="chartData" :options="options"></pie-chart> -->
					</div>
					<br>
				</div>
			</div>
			<div class="col-md-6">
				<div class="card card-stats">
					<div class="card-header card-header-success">
						<h3 class="card-title">Monthly Income</h3>
						<small>Range Ref: PIDS NO 2018-18 (December 2018)</small>
					</div>
					<div class="card-body">
						<bar-chart :chart-data="data_income"></bar-chart>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import { mapGetters, mapActions } from 'vuex'
	import DatatablesFields from '@components/Datatables/DatatablesFields'
	import HeaderSettings from '@components/Datatables/HeaderSettings'
	import GlobalSearch from '@components/Datatables/GlobalSearch'
	import LineChart from '@components/Charts/Line'
	import BarChart from '@components/Charts/Bar'
	import PieChart from "@components/Charts/Pie";
	import AreaChart from "@components/Charts/AreaChart";

	export default {
		components: {
			GlobalSearch,
			DatatablesFields,
			HeaderSettings,
			LineChart,
			BarChart,
			PieChart,
			AreaChart
		},
		data () {
			return {
				data_utilities: null,
				data_income: null,
				data_houseownership: null,
				query: { sort: 'id', order: 'asc', limit: 20, s: '' },
				xprops: {
					module: 'DashboardIndex',
					route: 'dashboard',
					permission_prefix: 'dashboard_'
				},
				chartData: null,
				options: {
					responsive: true,
					maintainAspectRatio: false
				},
			}
		},
		beforeDestroy () {
			this.resetState()
		},
		computed: {
			...mapGetters('DashboardIndex', ['data', 'loading'])
		},
		mounted () {
			this.utilitiesInformation()
			this.MonthlyIncomeGraph()
			this.educationalAttaintmentGraph()
			this.houseOwnershipData()
			this.fetchIndexData()
		},
		methods: {
			...mapActions('DashboardIndex', [
				'fetchIndexData',
				'setQuery',
				'resetState'
			]),

			educationalAttaintmentGraph () {
				axios.get(`dashboard/educational`).then(response => {
					var educational = response.data.data;
					var data_charts = [];
					var data_label = []
					var data_backgroundcolor = []
					educational.forEach(data => {
						data_charts.push(data.count_educational);
						data_label.push(data.educational_attaintment_name);
						data_backgroundcolor.push('#' + Math.floor(Math.random() * 16777215).toString(16));
					});
					const labels = data_label;
					this.chartData = {
						labels: labels,
						datasets: [{
							data: data_charts,
							backgroundColor: data_backgroundcolor,
						}]
					};
				})
			},

			numberFormat (value) {
				return value ? Number(value).toLocaleString() : 0
			},

			utilitiesInformation () {
				axios.get(`dashboard/utilities`).then(response => {
					var utility = response.data.data;
					var data_charts = [];
					var data_label = []
					utility.forEach(data => {
						data_charts.push(data.count_utilities);
						data_label.push(data.utilities_name);
					});
					const labels = data_label;
					this.data_utilities = {
						labels: labels,
						datasets: [{
							label: 'ALL',
							data: data_charts,
							fill: false,
							backgroundColor: '#80CEB9',
							borderColor: 'rgb(75, 192, 192)',
							tension: 0.1
						}]
					};
				})
			},

			houseOwnershipData () {
				axios.get(`dashboard/house-ownership`).then(response => {
					var house_ownership = response.data.data;
					var data_charts = [];
					var data_label = []
					house_ownership.forEach(data => {
						data_charts.push(data.count_house_ownership);
						data_label.push(data.house_ownership_name);
					});
					const labels = data_label;
					this.data_houseownership = {
						labels: labels,
						datasets: [{
							label: 'ALL',
							data: data_charts,
							fill: false,
							backgroundColor: '#80CEB9',
							borderColor: 'rgb(75, 192, 192)',
							tension: 0.1
						}]
					};
				})
			},


			MonthlyIncomeGraph () {
				axios.get(`dashboard/monthly-income`).then(response => {
					var monthly_income = response.data.data;
					var data_charts = [];
					var data_label = []
					monthly_income.forEach(data => {
						data_charts.push(data.count_income);
						data_label.push(data.range_min + '-' + data.range_max);
					});
					const labels = data_label;
					this.data_income = {
						labels: labels,
						datasets: [{
							label: 'Status',
							data: data_charts,
							fill: false,
							backgroundColor: '#80CEB9',
							borderColor: 'rgb(75, 192, 192)',
							tension: 0.1
						}]
					};
				})
			}

		}
	}
</script>
