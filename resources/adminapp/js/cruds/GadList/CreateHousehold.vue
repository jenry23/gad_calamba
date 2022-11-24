<template>
	<div id="row">
		<div class="loader" v-if="loading"></div>
		<div class="card">
			<form-wizard
				@on-complete="onComplete"
				validate-on-back
				ref="wizard"
				:start-index.sync="activeTabIndex"
				shape="circle"
				color="#20a0ff"
				subtitle=""
				title="Family Members"
				error-color="#ff4949"
			>
				<tab-content title="Personal details" icon="fa fa-user" :before-change="() => validate('firstStep')">
					<first-step ref="firstStep" @on-validate="onStepValidate"></first-step>
				</tab-content>
				<tab-content title="Additional Info" icon="fa fa-cog" :before-change="() => validate('secondStep')">
					<second-step ref="secondStep" @on-validate="onStepValidate"></second-step>
				</tab-content>
				<tab-content
					title="Educational Information / Organizations"
					icon="fa fa-book"
					:before-change="() => validate('thirdStep')"
				>
					<third-step ref="thirdStep" @on-validate="onStepValidate"></third-step>
				</tab-content>
				<tab-content
					title="Health Info"
					icon="fa fa-address-card"
					:before-change="() => validate('fourthStep')"
				>
					<fourth-step ref="fourthStep" @on-validate="onStepValidate"></fourth-step>
				</tab-content>
				<tab-content title="Survey Questions" icon="fa fa-address-card" :before-change="() => validate('fifthStep')">
					<fifth-step ref="fifthStep" @on-validate="onStepValidate"></fifth-step>
				</tab-content>
				<tab-content title="Hobbies" icon="fa fa-futbol-o" :before-change="() => validate('sixthStep')">
					<sixth-step ref="sixthStep" @on-validate="onStepValidate"></sixth-step>
				</tab-content>
			</form-wizard>
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
	import DateRangePicker from 'vue2-daterange-picker'
	import FirstStep from "@components/FormWizard/FirstStep.vue";
	import SecondStep from "@components/FormWizard/SecondStep.vue";
	import ThirdStep from "@components/FormWizard/ThirdStep.vue";
	import FourthStep from "@components/FormWizard/FourthStep.vue";
	import FifthStep from "@components/FormWizard/FifthStep.vue";
	import SixthStep from "@components/FormWizard/SixthStep.vue";
	import LastStep from "@components/FormWizard/LastStep.vue";
	import 'vue-form-wizard/dist/vue-form-wizard.min.css'
	import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

	export default {
		components: {
			FirstStep,
			SecondStep,
			ThirdStep,
			FourthStep,
			FifthStep,
			SixthStep,
			LastStep,
			DateRangePicker
		},
		data () {
			return {
				finalModel: {},
				activeTabIndex: 0,
				import_file: {},
				loading: false,
				success: false,
				errors: false,
				barangay_id: '',
				date: null,
			};
		},

		computed: {
			...mapGetters('GadListSingle', ['lists']),
		},

		mounted () {
			this.fetchCreateData()
		},

		methods: {
			...mapActions('GadListSingle', ['fetchCreateData']),
			onComplete () {
				axios.post('gad', this.finalModel)
					.then(response => {
						this.$eventHub.$emit('create-success')
						// this.$router.push({ name: 'gad_list.index' })
						window.location.reload();
					}).catch(error => {
						console.log(error);
					})
			},
			forceClearError () {
				this.$refs.wizard.tabs[this.activeTabIndex].validationError = null;
			},
			validate (ref) {
				return this.$refs[ref].validate();
			},
			onStepValidate (validated, model) {
				if (validated) {
					this.finalModel = { ...this.finalModel, ...model };
				}
			},
			updateBarangayID (value) {
				this.barangay_id = value;
			},

			updateDate (e) {
				this.date = e.target.value;
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
		}
	};
</script>
