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
								{{ $t('global.create') }}
								<strong>{{ $t('cruds.user.title_singular') }}</strong>
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
											'has-items': entry.name,
											'is-focused': activeField == 'name'
										}"
									>
										<label class="bmd-label-floating required">{{
											$t('cruds.user.fields.name')
										}}</label>
										<input
											class="form-control"
											type="text"
											:value="entry.name"
											@input="updateName"
											@focus="focusField('name')"
											@blur="clearFocus"
											required
										/>
									</div>
									<div
										class="form-group bmd-form-group"
										:class="{
											'has-items': entry.email,
											'is-focused': activeField == 'email'
										}"
									>
										<label class="bmd-label-floating required">{{
											$t('cruds.user.fields.email')
										}}</label>
										<input
											class="form-control"
											type="email"
											:value="entry.email"
											@input="updateEmail"
											@focus="focusField('email')"
											@blur="clearFocus"
											required
										/>
									</div>
									<div
										class="form-group bmd-form-group"
										:class="{
											'has-items': entry.password,
											'is-focused': activeField == 'password'
										}"
									>
										<label class="bmd-label-floating required">{{
											$t('cruds.user.fields.password')
										}}</label>
										<input
											class="form-control"
											type="password"
											:value="entry.password"
											@input="updatePassword"
											@focus="focusField('password')"
											@blur="clearFocus"
										/>
									</div>
									<div
										class="form-group bmd-form-group"
										:class="{
											'has-items': entry.roles.length !== 0,
											'is-focused': activeField == 'roles'
										}"
									>
										<label class="bmd-label-floating required">{{
											$t('cruds.user.fields.roles')
										}}</label>
										<v-select
											name="roles"
											label="title"
											:key="'roles-field'"
											:value="entry.roles"
											:options="lists.roles"
											@input="updateRoles"
											@focus="focusField('roles')"
											@blur="clearFocus"
										/>
									</div>
									<div v-if="isBarangay">
										<div
											class="form-group bmd-form-group"
											:class="{
												'has-items': entry.barangay,
												'is-focused': activeField == 'barangay'
											}"
										>
											<label class="bmd-label-floating required"> Barangay </label>
											<v-select
												name="barangay"
												label="barangay_name"
												:key="'roles-field'"
												:value="entry.barangay"
												:options="lists.barangay"
												@input="updateBarangay"
												@focus="focusField('barangay')"
												@blur="clearFocus"
											/>
										</div>
										<div class="form-group">
											<label>Photo</label>
											<attachment
												:route="getRoute('users')"
												:collection-name="'user_barangay_photo'"
												:media="entry.photo"
												:max-file-size="2"
												:component="'pictures'"
												:accept="'image/*'"
												@file-uploaded="insertPhotoFile"
												@file-removed="removePhotoFile"
												:max-files="2"
											/>
										</div>
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
	import { mapGetters, mapActions } from "vuex";
	import Attachment from '@components/Attachments/Attachment'

	export default {
		components: {
			Attachment
		},
		data () {
			return {
				status: "",
				activeField: "",
				isBarangay: false
			};
		},
		computed: {
			...mapGetters("UsersSingle", ["entry", "loading", "lists"]),
		},
		mounted () {
			this.fetchCreateData();
		},
		beforeDestroy () {
			this.resetState();
		},
		methods: {
			...mapActions("UsersSingle", [
				"storeData",
				"resetState",
				"setName",
				"setEmail",
				"setPassword",
				"setRoles",
				"setBarangay",
				"insertPhotoFile",
				"removePhotoFile",
				"fetchCreateData",
			]),
			updateName (e) {
				this.setName(e.target.value);
			},
			updateEmail (e) {
				this.setEmail(e.target.value);
			},
			updatePassword (e) {
				this.setPassword(e.target.value);
			},
			updateBarangay (e) {
				this.setBarangay(e);
			},
			updateRoles (value) {
				if (value['title'] === 'Barangay') {
					this.isBarangay = true;
				}
				this.setRoles(value);
			},
			getRoute (name) {
				return `${axios.defaults.baseURL}${name}/media`
			},
			submitForm () {
				this.storeData()
					.then(() => {
						this.$router.push({ name: "users.index" });
						this.$eventHub.$emit("create-success");
					})
					.catch((error) => {
						this.status = "failed";
						_.delay(() => {
							this.status = "";
						}, 3000);
					});
			},
			focusField (name) {
				this.activeField = name;
			},
			clearFocus () {
				this.activeField = "";
			},
		},
	};
</script>
