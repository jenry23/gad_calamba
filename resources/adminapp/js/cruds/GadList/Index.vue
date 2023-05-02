<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-success card-header-icon">
						<div class="card-icon">
							<i class="material-icons">assignment</i>
						</div>
						<h4 class="card-title">
							Table
							<strong>Household Status</strong>
						</h4>
					</div>
					<div class="card-body">
						<router-link
							class="btn btn-success"
							v-if="$can(xprops.permission_prefix + 'create')"
							:to="{ name: xprops.route + '.create' }"
						>
							<i class="material-icons"> add </i>
							Add
						</router-link>
						<button
							type="button"
							class="btn btn-default"
							@click="fetchIndexData"
							:disabled="loading"
							:class="{ disabled: loading }"
						>
							<i class="material-icons" :class="{ 'fa-spin': loading }"> refresh </i>
							Refresh
						</button>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="table-overlay" v-show="loading">
									<div class="table-overlay-container">
										<material-spinner></material-spinner>
										<span>Loading...</span>
									</div>
								</div>
								<datatable
									:columns="columns"
									:data="data"
									:total="total"
									:query="query"
									:xprops="xprops"
									:HeaderSettings="false"
									:pageSizeOptions="[10, 25, 50, 100]"
								>
									<global-search :query="query" class="pull-left" />
									<header-settings :columns="columns" class="pull-right" />
								</datatable>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatablesFields from '@components/Datatables/DatatablesFields'
	import DatatableActions from '@components/Datatables/DatatableActions'
	import TranslatedHeader from '@components/Datatables/TranslatedHeader'
	import HeaderSettings from '@components/Datatables/HeaderSettings'
	import GlobalSearch from '@components/Datatables/GlobalSearch'

	export default {
		components: {
			GlobalSearch,
			HeaderSettings,
			DatatablesFields
		},
		data () {
			return {
				columns: [
					{
						title: 'ID Number',
						field: 'item_no',
						thComp: TranslatedHeader,
						sortable: true,
					},
					{
						title: 'Full Name',
						field: 'full_name',
						thComp: TranslatedHeader,
						sortable: true
					},
					{
						title: 'Address',
						field: 'address',
						thComp: TranslatedHeader,
						sortable: true
					},
					{
						title: 'Status',
						field: 'remarks',
						thComp: TranslatedHeader,
						sortable: true
					},
					{
						title: 'Age',
						field: 'age',
						thComp: TranslatedHeader,
						sortable: true
					},
					{
						title: 'Barangay',
						field: 'barangay.barangay_name',
						thComp: TranslatedHeader,
						tdComp: DatatablesFields
					}
				],
				query: { sort: 'id', order: 'desc', limit: 100, s: '', isDeleted: 1 },
				xprops: {
					module: 'GadListIndex',
					route: 'gad_list',
					permission_prefix: 'gad_list_'
				}
			}
		},
		beforeDestroy () {
			this.resetState()
		},
		computed: {
			...mapGetters('GadListIndex', ['data', 'loading', 'total'])
		},
		mounted () {
		},
		watch: {
			query: {
			handler(query) {
				this.setQuery(query)
				this.fetchIndexData()
			},
			deep: true
			}
		},
		methods: {
			...mapActions('GadListIndex', ['fetchIndexData', 'resetState', 'resetState', 'setQuery']),
			focusField (name) {
				this.activeField = name
			},
			clearFocus () {
				this.activeField = ''
			}
		}
	}
</script>
