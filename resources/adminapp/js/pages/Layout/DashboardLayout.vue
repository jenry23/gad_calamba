<template>
	<div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
		<event-hub></event-hub>
		<side-bar :sidebarLinks="sidebarLinks">
			<mobile-menu slot="content"></mobile-menu>
		</side-bar>

		<div class="main-panel bg">
			<div>
				<top-navbar></top-navbar>
			</div>
			<div class="content">
				<dashboard-content class="bg"></dashboard-content>
			</div>
		</div>
	</div>
</template>
<style>
.bg {
	/* The image used */
	background-image: url('/images/backgroud-images.png');

	/* Full height */
	height: 100%;

	/* Center and scale the image nicely */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
<script>
	import DashboardContent from './Content.vue'
	import TopNavbar from './TopNavbar.vue'
	import MobileMenu from './MobileMenu.vue'

	export default {
		components: {
			DashboardContent,
			TopNavbar,
			MobileMenu
		},
		data () {
			var date = (new Date()).toISOString().split('T')[0];
			return {
				sidebarLinks: [
					{
						title: 'global.dashboard',
						icon: 'dashboard',
						path: { name: 'dashboard' },
						gate: 'dashboard_access',
					},
					{
						title: 'reports',
						icon: 'assessment',
						path: { name: 'reports' },
						gate: 'reports_access',
						children: [
							{
								title: 'Status',
								icon: 'users',
								path: { name: 'gad_list.index' },
							},
							{
								title: 'Generate Report',
								icon: 'perm_data_setting',
								path: { name: 'generate_reports.index' },
								gate: 'generate_reports_access'
							}
						]
					},
					{
						title: 'Services',
						icon: 'history',
						path: { name: 'transaction' },
						gate: 'transaction_access',
						children: [
							{
								title: 'Barangay Permit',
								icon: 'perm_data_setting',
								path: { name: 'barangay_permit.index' },
								gate: 'barangay_permit_access'
							},
							{
								title: 'Barangay Records',
								icon: 'perm_data_setting',
								path: { name: 'barangay_records.index' },
								gate: 'generate_reports_access'
							},
						]
					},
					{
						title: 'Household',
						icon: 'contacts',
						path: { name: 'gad' },
						gate: 'gad_access',
						children: [
							{
								title: 'New Household',
								icon: 'users',
								path: { name: 'gad_list.create' },
								gate: 'gad_list_access',
							},
							{
								title: 'New Individual Resident',
								icon: 'users',
								path: { name: 'gad_list_individual.create' },
								gate: 'gad_list_individual_access',
							},
						]
					},
					{
						title: 'System Maintenance',
						icon: 'settings',
						path: { name: 'system_maintenance' },
						gate: 'system_maintenance_access',
						children: [
							{
								title: 'Barangay',
								icon: 'users',
								path: { name: 'barangay.index' },
								gate: 'barangay_access',
							},
							{
								title: 'Barangay Sanggunian',
								icon: 'barangay',
								path: { name: 'barangay_sanggunian.index' },
								// gate: 'barangay_access',
							},
							{
								title: 'Household',
								icon: 'users',
								path: { name: 'household.index' },
								gate: 'household_access',
							},
							{
								title: 'Purok',
								icon: 'users',
								path: { name: 'purok.index' },
								gate: 'purok_access',
							},
							{
								title: 'Sitio',
								icon: 'users',
								path: { name: 'sitio.index' },
								gate: 'sitio_access',
							},
							{
								title: 'Province',
								icon: 'users',
								path: { name: 'province.index' },
								gate: 'province_access',
							},
							{
								title: 'City',
								icon: 'users',
								path: { name: 'city.index' },
								gate: 'city_access',
							},
							{
								title: 'Valid ID',
								icon: 'users',
								path: { name: 'valid_id.index' },
								gate: 'valid_id_access',
							},
							{
								title: 'Sector',
								icon: 'users',
								path: { name: 'sector.index' },
								gate: 'sector_access',
							},
							{
								title: 'Gender',
								icon: 'users',
								path: { name: 'gender.index' },
								gate: 'gender_access',
							},
							{
								title: 'Gender Preference',
								icon: 'users',
								path: { name: 'gender_preference.index' },
								gate: 'gender_preference_access',
							},
							{
								title: 'Civil Status',
								icon: 'users',
								path: { name: 'civil_status.index' },
								gate: 'civil_status_access',
							},
							{
								title: 'Health',
								icon: 'users',
								path: { name: 'health.index' },
								gate: 'health_access',
							},
							{
								title: 'Educational Assistance',
								icon: 'users',
								path: { name: 'educational_assistance.index' },
								gate: 'educational_assistance_access',
							},
							{
								title: 'Monthly Income',
								icon: 'users',
								path: { name: 'monthly_income.index' },
								gate: 'monthly_income_access',
							},
							{
								title: 'Educational Attaintment',
								icon: 'users',
								path: { name: 'educational_attaintment.index' },
								gate: 'educational_attaintment_access',
							},
							{
								title: 'Educational Status',
								icon: 'users',
								path: { name: 'educational_status.index' },
								gate: 'educational_status_access',
							},
							{
								title: 'Governemt Educational Assistance',
								icon: 'users',
								path: { name: 'government_educational_assistance.index' },
								gate: 'government_educational_assistance_access',
							},
							{
								title: 'Ethnicity',
								icon: 'users',
								path: { name: 'ethnicity.index' },
								gate: 'ethnicity_access',
							},
							{
								title: 'House Ownership',
								icon: 'users',
								path: { name: 'house_ownership.index' },
								gate: 'house_ownership_access',
							},
							{
								title: 'House Type',
								icon: 'users',
								path: { name: 'house_type.index' },
								gate: 'house_type_access',
							},
							{
								title: 'House Make',
								icon: 'users',
								path: { name: 'house_make.index' },
								gate: 'house_make_access',
							},
							{
								title: 'Organization',
								icon: 'users',
								path: { name: 'organization.index' },
								gate: 'organization_access',
							},
							{
								title: 'Resident Status',
								icon: 'users',
								path: { name: 'resident_status.index' },
								gate: 'resident_status_access',
							},
						]
					},
					{
						title: 'cruds.userManagement.title',
						icon: 'person',
						path: { name: 'user_management' },
						gate: 'user_management_access',
						children: [
							{
								title: 'cruds.permission.title',
								icon: 'perm_data_setting',
								path: { name: 'permissions.index' },
								gate: 'permission_access'
							},
							{
								title: 'cruds.role.title',
								icon: 'group',
								path: { name: 'roles.index' },
								gate: 'role_access'
							},
							{
								title: 'cruds.user.title',
								icon: 'person',
								path: { name: 'users.index' },
								gate: 'user_access'
							}
						]
					},
				]
			}
		},
		mounted () {
			if (this.$route.name == 'dashboard') {
				this.$sidebar.showSidebar = true;
			} else {
				this.$sidebar.showSidebar = false;
			}
		}
	}
</script>
