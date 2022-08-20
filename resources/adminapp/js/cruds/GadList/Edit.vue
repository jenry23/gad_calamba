<template>
	<div class="row">
		<form @submit.prevent="submitForm" class="form-group row">
			<div class="col-md-9">
				<select class="custom-select my-1 mr-sm-2" @change="switchSelect($event)">
					<option value="0">Personal Information</option>
					<option value="1">Residential Information</option>
					<option value="2">Educational Information / Employee Information</option>
					<option value="3">Health / Medical Condition</option>
					<option value="4">Skills Hobbies</option>
					<option value="5">House Type and Components Information</option>
					<option value="6">Survey</option>
				</select>
				<ul class="nav nav-tabs d-none" id="myTab" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" data-toggle="tab" href="#personal">personal</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#address">address</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#educational">educational</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#health" role="tab">health</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#skills" role="tab">skills</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#housetype" role="tab">housetype</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#survey" role="tab">survey</a>
					</li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane active" id="personal">
						<div class="card">
							<div class="card-header card-header-primary">
								<h4 class="card-title">Personal Information</h4>
								<p class="card-category">Complete your profile</p>
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Household Entry No:</label>
											<input
												type="text"
												class="form-control"
												:value="entry.household_no"
												readonly
											/>
										</div>
									</div>
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Family Code</label>
											<input
												type="text"
												class="form-control"
												@input="updateFamilyCode"
												:value="entry.family_code"
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Relation To Main Household</label>
											<v-select
												class="form-control popcom-input"
												name="household"
												label="household_name"
												:key="'household_id-field'"
												:value="entry.household"
												:options="lists.household"
												@input="updateHousehold"
												@focus="focusField('household')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Sex</label>
											<v-select
												class="form-control popcom-input"
												name="gender"
												label="gender_name"
												:key="'gender_id-field'"
												:value="entry.gender"
												:options="lists.gender"
												@input="updateGender"
												@focus="focusField('gender')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Civil Status</label>
											<v-select
												class="form-control popcom-input"
												name="civil_status"
												label="civil_status_name"
												:key="'civil_status_id-field'"
												:value="entry.civil_status"
												:options="lists.civil_status"
												@input="updateCivilStatus"
												@focus="focusField('civil_status')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label
												>Spouse Name<small> (firstname, middlename, lastname)</small></label
											>
											<input
												type="text"
												class="form-control"
												@change="inputSpouseName"
												:value="`${entry.spouse_first_name || ''} ${
													entry.spouse_middle_name || ''
												} ${entry.spouse_last_name || ''}`"
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Birthdate</label>
											<datetime-picker
												class="form-control"
												type="text"
												picker="date"
												:value="entry.birth_date"
												@input="updateBirthdate"
												@focus="focusField('birthdate')"
												@blur="clearFocus"
											>
											</datetime-picker>
										</div>
									</div>
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Gender Preference</label>
											<v-select
												class="form-control popcom-input"
												name="gender_preference"
												label="gender_preference_name"
												:key="'gender_preference_id-field'"
												:value="entry.gender_preference"
												:options="lists.gender_preference"
												@input="updateGenderPreference"
												@focus="focusField('gender_preference')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<label>Valid ID / ID Number</label>
										<div class="input-group flex-nowrap mt-1">
											<v-select
												class="form-control popcom-input"
												name="valid_id"
												label="name"
												:key="'valid_id-field'"
												:value="entry.valid_id"
												:options="lists.valid_id"
												@input="updateValidID"
												@focus="focusField('valid_id')"
												@blur="clearFocus"
											/>
											<input
												type="text"
												class="form-control"
												@input="updateIDNumber"
												:value="entry.id_number"
											/>
										</div>
									</div>
								</div>
								<br />
								<hr />
								<div class="line"></div>
								<div class="row">
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Religion:</label>

											<v-select
												class="form-control popcom-input"
												name="religion"
												label="religion_name"
												:key="'religion_id-field'"
												:value="entry.religion"
												:options="lists.religion"
												@input="updateReligion"
												@focus="focusField('religion')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Ethnicity:</label>
											<v-select
												class="form-control popcom-input"
												name="ethnicity"
												label="ethnicity_name"
												:key="'ethnicity_id-field'"
												:value="entry.ethnicity"
												:options="lists.ethnicity"
												multiple
												@input="updateEthnicity"
												@focus="focusField('ethnicity')"
												@blur="clearFocus"
											/>
										</div>
									</div>

									<div class="col-md-5">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Sector Member</label>
											<v-select
												class="form-control popcom-input"
												name="sector"
												label="sector_name"
												:key="'sector_id-field'"
												:value="entry.sector"
												:options="lists.sector"
												multiple
												@input="updateSector"
												@focus="focusField('sector')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Cellphone Number</label>
											<input
												type="text"
												class="form-control"
												@input="updateMobileNumber"
												:value="entry.mobile_no"
											/>
										</div>
									</div>
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Landline</label>
											<input
												type="text"
												class="form-control"
												@input="updateLandlineNumber"
												:value="entry.landline_number"
											/>
										</div>
									</div>
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Email Address</label>
											<input
												type="text"
												class="form-control"
												@input="updateEmail"
												:value="entry.email"
											/>
										</div>
									</div>
								</div>
								<br />
								<hr />
								<div class="line"></div>
								<h4 style="text-transform: uppercase">
									<b>Political Information <small>(Registered)</small></b>
								</h4>
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>City/Municipality</label>
											<v-select
												class="form-control popcom-input"
												name="political_city_registered"
												label="city_name"
												:key="'political_city_registered_id-field'"
												:value="entry.political_city_registered"
												:options="lists.political_city_registered"
												@input="updatePoliticalCityRegistered"
												@focus="focusField('political_city_registered')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label> Province Register</label>
											<v-select
												class="form-control popcom-input"
												name="political_province_registered"
												label="province_name"
												:key="'political_province_registered_id-field'"
												:value="entry.political_province_registered"
												:options="lists.political_province_registered"
												@input="updatePoliticalProvinceRegistered"
												@focus="focusField('political_province_registered')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Barangay Polling Place</label>
											<v-select
												class="form-control popcom-input"
												name="political_brgy_registered"
												label="barangay_name"
												:key="'political_brgy_registered_id-field'"
												:value="entry.political_brgy_registered"
												:options="lists.political_brgy_registered"
												@input="updatePoliticalBarangay"
												@focus="focusField('political_brgy_registered')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Precinct No.</label>
											<input
												type="text"
												class="form-control"
												:value="entry.political_precinct_no"
												@input="updatePoliticalPrecintNumber"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-pane" id="address">
						<div class="card">
							<div class="card-header card-header-primary">
								<h4 class="card-title">Residential Information</h4>
								<p class="card-category">Complete your profile</p>
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Building Numbers/House Unit</label>
											<input
												type="text"
												class="form-control"
												@change="updateBuildingHouseUnit"
												:value="`BLDG ${entry.building_no || ''} UNIT ${
													entry.house_unit || ''
												}`"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Block No/Lot No/Street Name</label>
											<input
												type="text"
												class="form-control"
												@input="updateBlockNoStreet"
												:value="entry.block_lot_house_id"
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Purok</label>
											<v-select
												class="form-control popcom-input"
												name="purok"
												label="purok_name"
												:key="'purok_id-field'"
												:value="entry.purok"
												:options="lists.purok"
												@input="updatePurok"
												@focus="focusField('purok')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Subdivsion / Sitio</label>
											<v-select
												class="form-control popcom-input"
												name="sitio"
												label="sitio_name"
												:key="'sitio_id-field'"
												:value="entry.sitio"
												:options="lists.sitio"
												@input="updateSitio"
												@focus="focusField('sitio')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<table class="table table-bordered">
									<thead class="black text-white" style="background-color: #462066">
										<tr>
											<th scope="col">Reidency</th>
											<th scope="col">Year</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>CALAMBA</td>
											<td>
												<datetime-picker
													class="form-control popcom-input"
													type="text"
													picker="date"
													@input="updateYearsInCalamba"
													:value="entry.calamba_residence_year"
												></datetime-picker>
											</td>
											<td>
												{{ this.calamba_residence }}
											</td>
										</tr>
										<tr>
											<td>BARANGAY</td>
											<td>
												<datetime-picker
													class="form-control popcom-input"
													type="text"
													picker="date"
													@input="updateYearsInBarangay"
													:value="entry.barangay_residence_year"
												></datetime-picker>
											</td>
											<td>
												{{ this.barangay_residence }}
											</td>
										</tr>
									</tbody>
								</table>
								<div
									class="form-group bmd-form-group"
									:class="{
										'is-focused': true
									}"
								>
									<label> Remarks</label>
									<textarea
										class="form-control"
										rows="5"
										@change="updateRemarks"
										:value="entry.remarks"
									></textarea>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-pane" id="educational">
						<div class="card">
							<div class="card-header card-header-primary">
								<h4 class="card-title">Educational Information / Educational Information</h4>
								<p class="card-category">Complete your profile</p>
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Highest Educational Attaintment</label>
											<v-select
												class="form-control popcom-input"
												name="educational_attaintment"
												label="educational_attaintment_name"
												:key="'educational_attaintment_id-field'"
												:value="entry.educational_attaintment"
												:options="lists.educational_attaintment"
												@input="updateEducationalAttaintment"
												@focus="focusField('educational_attaintment')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Educational Status</label>
											<v-select
												class="form-control popcom-input"
												name="educational_status"
												label="educational_status_name"
												:key="'educational_status_id-field'"
												:value="entry.educational_status"
												:options="lists.educational_status"
												@input="updateEducationalStatus"
												@focus="focusField('educational_status')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-12">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Last School Attended</label>
											<input
												type="text"
												class="form-control"
												@input="updateLastSchoolAttended"
												:value="entry.last_school_attended"
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Government Educational Assistance</label>
											<v-select
												class="form-control popcom-input"
												name="educational_assistance"
												label="educational_assistance_name"
												:key="'educational_assistance_id-field'"
												:value="entry.educational_assistance"
												:options="lists.educational_assistance"
												multiple
												@input="updateGovernmentAssistance"
												@focus="focusField('educational_assistance')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Organizations</label>
											<v-select
												class="form-control popcom-input"
												name="organization"
												label="organization_name"
												:key="'organization_id-field'"
												:value="entry.organization"
												:options="lists.organization"
												@input="updateOrganization"
												@focus="focusField('organization')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<br />
								<hr />
								<div class="line"></div>
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Occupation</label>
											<v-select
												class="form-control popcom-input"
												name="occupation"
												label="occupation_name"
												:key="'occupation_id-field'"
												:value="entry.occupation"
												:options="lists.occupation"
												@input="updateOccupation"
												@focus="focusField('occupation')"
												@blur="clearFocus"
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Employer</label>
											<input
												type="text"
												class="form-control"
												@input="updateEmployer"
												:value="entry.employer"
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Work Location City</label>
											<v-select
												class="form-control popcom-input"
												name="work_location_city"
												label="city_name"
												:key="'work_location_city_id-field'"
												:value="entry.work_location_city"
												:options="lists.work_location_city"
												@input="updateWorkLocationCity"
												@focus="focusField('work_location_city')"
												@blur="clearFocus"
											/>
										</div>
									</div>

									<div class="col-md-3">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Work Location Province</label>
											<v-select
												class="form-control popcom-input"
												name="work_location_province"
												label="province_name"
												:key="'work_location_province_id-field'"
												:value="entry.work_location_province"
												:options="lists.work_location_province"
												@input="updateWorkLocationProvince"
												@focus="focusField('work_location_province')"
												@blur="clearFocus"
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Monthly Income (Econimic Status)</label>
											<v-select
												class="form-control popcom-input"
												name="monthly_income"
												label="monthly_income_name"
												:key="'monthly_income_id-field'"
												:value="entry.monthly_income"
												:options="lists.monthly_income"
												@input="updateMonthlyIncome"
												@focus="focusField('monthly_income')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<br />
								<div class="row">
									<div class="col-md-12">
										<table class="table table-bordered">
											<thead class="black text-white" style="background-color: #462066">
												<tr>
													<th scope="col">Government Assistance</th>
													<th scope="col">Date</th>
													<th scope="col">Amount</th>
												</tr>
											</thead>
											<tbody
												v-for="assistance in entry.government_assistance"
												:key="assistance.id"
											>
												<tr>
													<td>{{ assistance.government_assistance_name }}</td>
													<td>2020</td>
													<td v-if="assistance.code === 'SAP'">₱6,500.00</td>
													<td v-if="assistance.code === 'CAP'">₱4,000.00</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-pane" id="health">
						<div class="card">
							<div class="card-header card-header-primary">
								<h4 class="card-title">Health Information</h4>
								<p class="card-category">Complete your profile</p>
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Health Condition</label>
											<v-select
												class="form-control popcom-input"
												name="health_condition"
												label="health_name"
												:key="'health_condition_id-field'"
												:value="entry.health_condition"
												:options="lists.health_condition"
												multiple
												@input="updateHealthCondition"
												@focus="focusField('health_condition')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Disability</label>
											<v-select
												class="form-control popcom-input"
												name="disability_condition"
												label="disability_name"
												:key="'disability_condition_id-field'"
												:value="entry.disability_condition"
												:options="lists.disability_condition"
												multiple
												@input="updateDisability"
												@focus="focusField('disability_condition')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<br />
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Full Immunization</label>
											<input
												type="text"
												class="form-control"
												@input="updateFullImmunization"
												:value="entry.full_immunization"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Maintaining Medicine</label>
											<v-select
												class="form-control popcom-input"
												name="medicine"
												label="medicine_name"
												:key="'medicine_id-field'"
												:value="entry.medicine"
												:options="lists.medicine"
												multiple
												@input="updateMedicine"
												@focus="focusField('medicine')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<br />
								<h3>For Female Only</h3>
								<div class="row">
									<div class="col-md-3 mt-2 mr-3">
										<label>Pregnancy Age</label>
									</div>
									<div class="col-md-4">
										<input
											type="text"
											class="form-control"
											@input="updatePregnancyAge"
											:value="entry.pregnancy_age"
										/>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3 mt-2 mr-3">
										<label>With Prental Check-up</label>
									</div>
									<div class="col-md-4">
										<input
											type="text"
											class="form-control"
											@input="updatePrentalCheckup"
											:value="entry.prental_checkup"
										/>
									</div>
								</div>
								<div class="row">
									<div class="col-md-3 mt-2 mr-3">
										<label>With Postpartum Check-up</label>
									</div>
									<div class="col-md-4">
										<input
											type="text"
											class="form-control"
											@input="updatePostalCheckup"
											:value="entry.postnatal_checkup"
										/>
									</div>
								</div>
								<br />
								<h3>VACCINE FOR COVID-19</h3>
								<table class="table table-bordered">
									<thead class="black text-white" style="background-color: #462066">
										<tr>
											<th scope="col">Type</th>
											<th scope="col">Brand</th>
											<th scope="col">Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1st Dose</td>
											<td>
												<input
													type="text"
													class="form-control"
													@input="updateBrand1"
													:value="entry.brand1"
												/>
											</td>
											<td>
												<datetime-picker
													class="form-control popcom-input"
													type="text"
													picker="date"
													@input="updateFirstDateVaccination"
													:value="entry.first_date_vaccination"
												></datetime-picker>
											</td>
										</tr>
										<tr>
											<td>2nd Dose</td>
											<td>
												<input
													type="text"
													class="form-control"
													@input="updateBrand2"
													:value="entry.brand2"
												/>
											</td>
											<td>
												<datetime-picker
													class="form-control popcom-input"
													type="text"
													picker="date"
													@input="updateSecondDateVaccination"
													:value="entry.second_date_vaccination"
												></datetime-picker>
											</td>
										</tr>
										<tr>
											<td>Booster Shot</td>
											<td>
											<input
													type="text"
													class="form-control"
													@input="updateBrand3"
													:value="entry.brand3"
												/>
											</td>
											<td>
												<datetime-picker
													class="form-control popcom-input"
													type="text"
													picker="date"
													@input="updateBoosterDateVaccination"
													:value="entry.booster_date_vaccination"
												></datetime-picker>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div class="tab-pane" id="skills">
						<div class="card">
							<div class="card-header card-header-primary">
								<h4 class="card-title">Skills Hobbies</h4>
								<p class="card-category">Complete your profile</p>
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Soft Skills</label>
											<v-select
												class="form-control popcom-input"
												name="soft_skill"
												label="soft_skill_name"
												:key="'soft_skill_id-field'"
												:value="entry.soft_skill"
												:options="lists.soft_skill"
												multiple
												@input="updateSoftSkills"
												@focus="focusField('soft_skill')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Hard Skills</label>
											<v-select
												class="form-control popcom-input"
												name="hard_skill"
												label="hard_skill_name"
												:key="'hard_skill_id-field'"
												:value="entry.hard_skill"
												:options="lists.hard_skill"
												multiple
												@input="updateHardSkills"
												@focus="focusField('hard_skill')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Hobbies</label>
											<v-select
												class="form-control popcom-input"
												name="hobbies"
												label="hobbies_name"
												:key="'hobbies_id-field'"
												:value="entry.hobbies"
												:options="lists.hobbies"
												multiple
												@input="updateHobbies"
												@focus="focusField('hobbies')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Sports</label>
											<v-select
												class="form-control popcom-input"
												name="sports"
												label="sports_name"
												:key="'sports_id-field'"
												:value="entry.sports"
												:options="lists.sports"
												multiple
												@input="updateSports"
												@focus="focusField('sports')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-pane" id="housetype">
						<div class="card">
							<div class="card-header card-header-primary">
								<h4 class="card-title">House Type and Components Information</h4>
								<p class="card-category">Complete your profile</p>
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>House Ownership</label>
											<v-select
												class="form-control popcom-input"
												name="house_ownership"
												label="house_ownership_name"
												:key="'house_ownership_id-field'"
												:value="entry.house_ownership"
												:options="lists.house_ownership"
												@input="updateHouseOwnership"
												@focus="focusField('house_ownership')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>House Type</label>
											<v-select
												class="form-control popcom-input"
												name="house_type"
												label="house_type_name"
												:key="'house_type_id-field'"
												:value="entry.house_type"
												:options="lists.house_type"
												@input="updateHouseType"
												@focus="focusField('house_type')"
												@blur="clearFocus"
											/>
										</div>
									</div>
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>House Make</label>
											<v-select
												class="form-control popcom-input"
												name="house_make"
												label="house_make_name"
												:key="'house_make_id-field'"
												:value="entry.house_make"
												:options="lists.house_make"
												@input="updateHouseMake"
												@focus="focusField('house_make')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Number of Nuclear Family in Household</label>
											<input
												type="text"
												class="form-control"
												@input="updateNuclearFamilyHousehold"
												:value="entry.no_nuclear_family_household_id"
											/>
										</div>
									</div>
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Number of Bedrooms</label>
											<input
												type="text"
												class="form-control"
												@input="updateBedRooms"
												:value="entry.no_bedrooms_id"
											/>
										</div>
									</div>
									<div class="col-md-4">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Number of CRs</label>
											<input
												type="text"
												class="form-control"
												@input="updateCRID"
												:value="entry.no_cr_id"
											/>
										</div>
									</div>
								</div>
								<hr />
								<br />
								<div class="row">
									<div class="col-md-12">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Utilities</label>
											<v-select
												class="form-control popcom-input"
												name="utilities"
												label="utilities_name"
												:key="'utilities_id-field'"
												:value="entry.utilities"
												:options="lists.utilities"
												multiple
												@input="updateUtilities"
												@focus="focusField('utilities')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Appliances</label>
											<v-select
												class="form-control popcom-input"
												name="appliance"
												label="appliance_name"
												:key="'appliance_id-field'"
												:value="entry.appliance"
												:options="lists.appliance"
												multiple
												@input="updateAppliance"
												@focus="focusField('appliance')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div
											class="form-group bmd-form-group"
											:class="{
												'is-focused': true
											}"
										>
											<label>Vehicle</label>
											<v-select
												class="form-control popcom-input"
												name="vehicle"
												label="vehicles_name"
												:key="'vehicle_id-field'"
												:value="entry.vehicle"
												:options="lists.vehicle"
												multiple
												@input="updateVehicle"
												@focus="focusField('vehicle')"
												@blur="clearFocus"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-pane" id="survey">
						<div class="card">
							<div class="card-header card-header-info">
								<h4 class="card-title">Survey</h4>
							</div>
							<div class="card-body">
								<div class="mt-3" v-for="question in lists.questions" :key="question.id">
									<label>{{ question.id }} . {{ question.description }}</label>
									<div v-for="answer in question.answers" :key="answer.id">
										<div
											class="custom-control custom-checkbox custom-control-inline pmd-checkbox"
										>
											<input
												class="custom-control-input"
												type="checkbox"
												:value="answer.answer"
												id="checkbox1"
											/>
											<label
												class="custom-control-label pmd-checkbox-ripple-effect"
												for="checkbox1"
											>
												{{ answer.answer }}
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card card-profile">
					<div>
						<attachment
							:route="getRoute('gad')"
							:collection-name="'resident_photo'"
							:media="entry.photo"
							:model-id="$route.params.id"
							:max-file-size="10"
							:component="'pictures'"
							:accept="'image/*'"
							@file-uploaded="insertPhotoFile"
							@file-removed="removePhotoFile"
							:max-files="1"
						/>
					</div>
					<div class="card-body">
						<h6 class="card-category text-gray">Profile</h6>
						<h5 style="text-transform: uppercase">
							<b>{{ entry.last_name }},{{ entry.first_name }} {{ entry.middle_name }}</b>
						</h5>
						<h6 class="card-category text-gray">Resident ID</h6>
						<div class="col">
							{{ entry.resident_no }}
						</div>
						<h6 class="card-category text-gray">Barangay</h6>
						<div class="col">
							<i class="fa fa-home fa-2x"></i>
							{{ entry.barangay.id }} - {{ entry.barangay.barangay_name }}
						</div>
						<h6 class="card-category text-gray">Gender</h6>
						<div class="col">
							<i class="fa fa-intersex fa-2x"> </i>
							{{ entry.gender_name }}
						</div>
						<h6 class="card-category text-gray">Age</h6>
						<div class="col">
							<h4>{{ this.total_age }}</h4>
						</div>
						<br />
						<p class="card-description">
							Ang Lungsod ng Calamba o sa simpleng, Calamba ay isang unang klaseng lungsod sa lalawigan
							ng Laguna, Pilipinas. Ito ay nasa layong 54 kilometro sa timog ng Maynila, at isang oras
							ang layo kung sasakay ng bus
						</p>
						<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
							Transfer Resident
						</button>
						<vue-button-spinner
							class="btn-primary"
							:status="status"
							:isLoading="loading"
							:disabled="loading"
						>
							{{ $t('global.save') }}
						</vue-button-spinner>
						<!-- <a href="javascript:;" class="btn btn-info btn-round"
                        >Follow</a
                    > -->
					</div>
				</div>
			</div>
			<!-- Modal -->
			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Transfer Resident</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div
								class="form-group bmd-form-group"
								:class="{
									'is-focused': true
								}"
							>
								<label>Barangay</label>
								<v-select
									class="form-control popcom-input"
									name="barangay"
									label="barangay_name"
									:key="'barangay_id-field'"
									:value="entry.barangay"
									:options="lists.barangay"
									@input="updateBarangay"
									@focus="focusField('barangay')"
									@blur="clearFocus"
								/>
							</div>
							<label>Household Number</label>
							<input
								type="text"
								class="form-control"
								@input="updateHouseholdNumber"
								:value="entry.household_no"
							/>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="submit" class="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<style scoped>
.popcom-input {
	width: 100%;
	padding: 5px;
	margin-bottom: -40px;
	display: inline-block;
	border: 1px solid #000000;
	border-radius: 4px;
	box-sizing: border-box;
}
input[type='text'],
select {
	width: 100%;
	padding: 5px;
	margin-bottom: -40px;
	display: inline-block;
	border: 1px solid #000000;
	border-radius: 4px;
	box-sizing: border-box;
}
label {
	color: black;
}

hr {
	margin-top: 1rem;
	margin-bottom: 1rem;
	border: 0;
	border-top: 1px solid rgba(0, 0, 0.1);
}

.vs__search {
	width: 400px;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
import Attachment from '@components/Attachments/Attachment'
import DatatablePictures from '@components/Datatables/DatatablePictures'

export default {
    components: {
        Attachment,
        DatatablePictures
    },
    data () {
        return {
            status: "",
            activeField: "",
        };
    },
    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading", "lists"]),
        total_age () {
            var today = new Date();
            var birthDate = new Date(this.entry.birth_date);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        calamba_residence () {
            var date = this.entry.calamba_residence_year;
            if (date) {
                let calamba_date = new Date(date).toLocaleDateString();
                let native_date = this.subtractYears(2, new Date(), 1);
                let transient_date_first = this.subtractYears(2, new Date(), 1);
                let transient_date_second = this.subtractMonths(6, new Date(), 1);
                if (calamba_date > this.subtractMonths(6)) {
                    return "Immigrant";
                } else if (calamba_date < native_date) {
                    return "Native";
                } else if (calamba_date > transient_date_first && transient_date_second < calamba_date) {
                    return "Transient";
                }
            } else {
                return '';
            }
        },
        barangay_residence () {
            var date = this.entry.barangay_residence_year;
            if (date) {
                let barangay_date = new Date(date).toLocaleDateString();
                let native_date = this.subtractYears(2, new Date(), 1);
                let transient_date_first = this.subtractYears(2, new Date(), 1);
                let transient_date_second = this.subtractMonths(6, new Date(), 1);
                if (barangay_date > this.subtractMonths(6)) {
                    return "Immigrant";
                } else if (barangay_date < native_date) {
                    return "Native";
                } else if (barangay_date > transient_date_first && transient_date_second < barangay_date) {
                    return "Transient";
                }
            } else {
                return '';
            }
        },

    },
    beforeDestroy () {
        this.resetState();
    },
    watch: {
        "$route.params.id": {
            immediate: true,
            handler () {
                this.resetState();
                this.fetchEditData(this.$route.params.id);
            },
        },
    },

    methods: {
        ...mapActions("GadListSingle", [
            'setEmail',
            'setMobileNumber',
            'setGender',
            'setFamilyCode',
            'setHousehold',
            'setCivilStatus',
            'setSpouseName',
            'setBirthdate',
            'setGenderPreference',
            'setValidID',
            'setIDNumber',
            'setReligion',
            'setEthnicity',
            'setSector',
            'setPoliticalProvinceRegistered',
            'setPoliticalCityRegistered',
            'setBuildingHouseUnit',
            'setBlockNoStreet',
            'setSitio',
            'setPurok',
            'setYearsInCalamba',
            'setYearsInBarangay',
            'setEducationalAttaintment',
            'setEducationalStatus',
            'setLastSchoolAttended',
            'setGovernmentAssistance',
            'setOrganization',
            'setOccupation',
            'setEmployer',
            'setWorkLocationProvince',
            'setWorkLocationCity',
            'setMonthlyIncome',
            'setBarangay',
            'setHouseholdNumber',
            'setSoftSkills',
            'setHardSkills',
            'setHobbies',
            'setSports',
            'setHouseOwnership',
            'setHouseType',
            'setHouseMake',
            'setNuclearFamilyHousehold',
            'setBedRooms',
            'setCRID',
            'setPoliticalBarangay',
            'setPoliticalPrecintNumber',
            'fetchEditData',
            'insertPhotoFile',
            'removePhotoFile',
            'setRemarks',
            'resetState',
            'setLandlineNumber',
            'setTitle',
            'setVehicle',
            'setAppliance',
            'setUtilities',
            'setFullImmunization',
            'setMedicine',
            'setPregnancyAge',
            'setPrentalCheckup',
            'setPostalCheckup',
            'setBrand1',
            'setFirstDateVaccination',
            'setBrand2',
            'setSecondDateVaccination',
            'setHealthCondition',
            'setDisability',
			'setBrand3',
			'setBoosterDateVaccination',
            'updateData',
        ]),
        subtractYears (numOfYears, date = new Date(), add_date = 0) {
            if (add_date != 0) {
                date.setDate(date.getDate() + add_date);
            }
            date.setFullYear(date.getFullYear() - numOfYears);
            return date.toLocaleDateString;
        },

        subtractMonths (numOfMonths, date = new Date(), add_date = 0) {
            if (add_date != 0) {
                date.setDate(date.getDate() + add_date);
            }
            date.setMonth(date.getMonth() - numOfMonths);
            return date;
        },

        switchSelect (e) {
            var value = e.target.value;
            $("#myTab li a").eq(value).tab("show");
        },
        getRoute (name) {
            return `${axios.defaults.baseURL}${name}/media`
        },
        updateBrand1 (e) {
            this.setBrand1(e.target.value);
        },
        updateFirstDateVaccination (e) {
            this.setFirstDateVaccination(e.target.value);
        },
		updateBrand3 (e) {
			 this.setBrand3(e.target.value);
		},
		updateBoosterDateVaccination (e) {
            this.setBoosterDateVaccination(e.target.value);
        },
        updateBrand2 (e) {
            this.setBrand2(e.target.value);
        },
        updateSecondDateVaccination (e) {
            this.setSecondDateVaccination(e.target.value);
        },
        updateNuclearFamilyHousehold (e) {
            this.setNuclearFamilyHousehold(e.target.value);
        },
        updateBedRooms (e) {
            this.setBedRooms(e.target.value);
        },
        updateFullImmunization (e) {
            this.setFullImmunization(e.target.value);
        },
        updateMedicine (e) {
            this.setMedicine(e);
        },
        updatePregnancyAge (e) {
            this.setPregnancyAge(e.target.value);
        },
        updatePrentalCheckup (e) {
            this.setPrentalCheckup(e.target.value);
        },
        updatePostalCheckup (e) {
            this.setPostalCheckup(e.target.value);
        },
        updateCRID (e) {
            this.setCRID(e.target.value);
        },
        updatePoliticalPrecintNumber (e) {
            this.setPoliticalPrecintNumber(e.target.value);
        },
        updatePoliticalBarangay (e) {
            this.setPoliticalBarangay(e.target.value);
        },
        updateHealthCondition (e) {
            this.setHealthCondition(e)
        },
        updateDisability (e) {
            this.setDisability(e)
        },
        updateSoftSkills (e) {
            this.setSoftSkills(e)
        },
        updateHardSkills (e) {
            this.setHardSkills(e)
        },
        updateHobbies (e) {
            this.setHobbies(e)
        },
        updateSports (e) {
            this.setSports(e)
        },
        updateHouseOwnership (e) {
            this.setHouseOwnership(e)
        },
        updateHouseType (e) {
            this.setHouseType(e)
        },
        updateHouseMake (e) {
            this.setHouseMake(e)
        },
        updateBarangay (e) {
            this.setBarangay(e);
        },
        updateHouseholdNumber (e) {
            this.setHouseholdNumber(e.target.value)
        },
        updateLandlineNumber (e) {
            this.setLandlineNumber(e.target.value)
        },
        updateEmail (e) {
            this.setEmail(e.target.value)
        },
        updateMobileNumber (e) {
            this.setMobileNumber(e.target.value)
        },
        updateGender (e) {
            this.setGender(e);
        },
        updateGenderPreference (e) {
            this.setGenderPreference(e)
        },
        updateFamilyCode (e) {
            this.setFamilyCode(e.target.value)
        },
        updateHousehold (e) {
            this.setHousehold(e);
        },
        updateCivilStatus (e) {
            this.setCivilStatus(e)
        },
        inputSpouseName (e) {
            this.setSpouseName(e.target.value);
        },
        updateBirthdate (e) {
            this.setBirthdate(e.target.value);
        },
        updateValidID (e) {
            this.setValidID(e);
        },
        updateIDNumber (e) {
            this.setIDNumber(e.target.value);
        },
        updateReligion (e) {
            this.setReligion(e);
        },
        updateEthnicity (e) {
            this.setEthnicity(e);
        },
        updateSector (e) {
            this.setSector(e);
        },
        updatePoliticalProvinceRegistered (e) {
            this.setPoliticalProvinceRegistered(e)
        },
        updatePoliticalCityRegistered (e) {
            this.setPoliticalCityRegistered(e)
        },
        updateBuildingHouseUnit (e) {
            this.setBuildingHouseUnit(e.target.value)
        },
        updateBlockNoStreet (e) {
            this.setBlockNoStreet(e.target.value)
        },
        updatePurok (e) {
            this.setPurok(e);
        },
        updateSitio (e) {
            this.setSitio(e)
        },
        updateYearsInCalamba (e) {
            this.setYearsInCalamba(e.target.value);
        },
        updateYearsInBarangay (e) {
            this.setYearsInBarangay(e.target.value);
        },
        updateRemarks (e) {
            this.setRemarks(e.target.value);
        },
        updateEducationalAttaintment (e) {
            this.setEducationalAttaintment(e)
        },
        updateEducationalStatus (e) {
            this.setEducationalStatus(e)
        },
        updateLastSchoolAttended (e) {
            this.setLastSchoolAttended(e.target.value)
        },
        updateGovernmentAssistance (e) {
            this.setGovernmentAssistance(e)
        },
        updateOrganization (e) {
            this.setOrganization(e)
        },
        updateOccupation (e) {
            this.setOccupation(e)
        },
        updateEmployer (e) {
            this.setEmployer(e.target.value)
        },
        updateWorkLocationProvince (e) {
            this.setWorkLocationProvince(e)
        },
        updateWorkLocationCity (e) {
            this.setWorkLocationCity(e)
        },
        updateMonthlyIncome (e) {
            this.setMonthlyIncome(e)
        },
        updateVehicle (e) {
            this.setVehicle(e)
        },
        updateAppliance (e) {
            this.setAppliance(e)
        },
        updateUtilities (e) {
            this.setUtilities(e)
        },

        submitForm () {
            $('#exampleModal').modal('hide');
            this.updateData()
                .then(() => {
                    this.$eventHub.$emit("update-success");
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
