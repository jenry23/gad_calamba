<template>
	<div class="container-fluid">
        <div class="loader" v-if="loading"></div>
		<div class="float-right">
			<input type="file" @change="importFile($event)" class="form-control" />
		</div>
		<div class="float-left" style="background-color: green"></div>
		<br />
		<div class="contact-form-success alert alert-success mt-4" v-if="success">
			<strong>Success!</strong> Your post is created.
		</div>

		<div class="contact-form-error alert alert-danger mt-4" v-if="errors">
			<strong>Error!</strong> There was an error sending your request.
		</div>
		<div class="row">
			<div class="col-md-3">
				<div class="form-group bmd-form-group">
					<v-select
						name="barangay_id"
						label="barangay_name"
						:key="'barangay_id-field'"
						:value="barangay_id"
						style="background-color: white"
						placeholder="Select Barangay"
						:options="barangay_list"
						@input="updateBarangayID"
					/>
				</div>
			</div>
			<div class="col-md-3 mt-2">
				<button @click="deleteButton" class="btn btn-sm btn-success">Delete</button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-success card-header-icon">
						<div class="card-icon">
							<i class="material-icons">assignment</i>
						</div>
						<h4 class="card-title">
							Table
							<strong>Household Import</strong>
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
							@click="fetchImportData"
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
<style scoped>
.loader {
	position: absolute;
	top: 0px;
	right: 0px;
	width: 100%;
	height: 100%;
	background-color: #eceaea;
	background-image: url('https://04.cadwork.com/wp-content/uploads/2019/08/ajax-loader.gif');
	background-size: 300px;
	background-repeat: no-repeat;
	background-position: center;
	z-index: 10000000;
	opacity: 0.8;
	filter: alpha(opacity=40);
}
</style>
<script>
import { mapGetters, mapActions } from 'vuex'
import DatatablesFields from '@components/Datatables/DatatablesFields'
import DatatableModal from '@components/Datatables/DatatableModal'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'

export default {
    components: {
        GlobalSearch,
        HeaderSettings,
        DatatablesFields,
        DatatableModal
    },
    data () {
        return {
            import_file: {},
            success: false,
            errors: false,
            barangay_id: '',
            barangay_list: [],
            loading: false,
            columns: [
                {
                    title: 'ID',
                    field: 'id',
                    thComp: TranslatedHeader,
                    sortable: true,
                },
                {
                    title: 'File Name',
                    field: 'file_name',
                    thComp: TranslatedHeader,
                    sortable: true,
                },
                {
                    title: 'Size',
                    field: 'size',
                    thComp: TranslatedHeader,
                    sortable: true
                },
                {
                    title: 'Status',
                    field: 'status',
                    thComp: TranslatedHeader,
                    sortable: true
                },
                {
                    title: 'Output',
                    field: 'upload_output',
                    thComp: TranslatedHeader,
                    tdComp: DatatableModal,
                    sortable: true
                },
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
        ...mapGetters('GadListIndex', ['data', 'total']),
    },

    mounted () {
        axios.get(`gad/create`).then(response => {
            this.barangay_list = response.data.meta.barangay
        })
    },

    watch: {
        query: {
        handler(query) {
            this.setQuery(query)
            this.fetchImportData()
        },
        deep: true
        }
    },

    methods: {
        ...mapActions('GadListIndex', ['fetchImportData', 'resetState', 'resetState', 'setQuery']),

        focusField (name) {
            this.activeField = name
        },

        clearFocus () {
            this.activeField = ''
        },

        updateBarangayID (value) {
            this.barangay_id = value;
        },

        deleteButton () {
            this.loading = true;
            axios.post('gad/delete-data', { date: this.date, barangay_id: this.barangay_id.id })
                .then(response => {
                    this.$eventHub.$emit('delete-success')
                }).catch(error => {
                    this.$swal({
                        title: 'Error',
                        text: error.response.data.message,
                        type: 'warning',
                        showCancelButton: true,
                        focusCancel: true,
                        reverseButtons: true
                    })
                    this.errors = true;
                }).finally(() => {
                    this.loading = false
                });
        },

        importFile (event) {
            this.loading = true;
            let file = event.target.files
            const formData = new FormData()
            formData.append('import_file', file[0])
            axios.post('gad/import-excel', formData)
                .then(response => {
                    this.$eventHub.$emit('create-success')
                    this.fetchImportData()
                }).catch(error => {
                    this.$swal({
                        title: 'Error',
                        text: error.response.data.message,
                        type: 'warning',
                        showCancelButton: true,
                        focusCancel: true,
                        reverseButtons: true
                    })
                    this.errors = true;
                }).finally(() => {
                    this.loading = false
                });
        }
    }
}
</script>
