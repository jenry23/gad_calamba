<template>
    <div class="row">
        <form @submit.prevent="submitForm" class="form-group row">
            <div class="col-md-9">
                <select class="custom-select my-1 mr-sm-2" @change="switchSelect($event)">
                    <option value="0">Personal Information</option>
                    <option value="1">Residential Information</option>
                    <option value="2">Educational Information / Employee Information</option>
                    <option value="3">Other Medical Information</option>
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
                                                'has-items': entry.gender.length !== 0,
                                                'is-focused': activeField == 'gender'
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
                                                :value="entry.birthdate"
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
                                    <div class="col-md-4">
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
                                                @input="updateEthnicity"
                                                @focus="focusField('ethnicity')"
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
                                            <label>Sector Member</label>
                                            <v-select
                                                class="form-control popcom-input"
                                                name="sector"
                                                label="sector_name"
                                                :key="'sector_id-field'"
                                                :value="entry.sector"
                                                :options="lists.sector"
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
                                    <b>Political Info</b>
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
                                                    :value="entry.no_of_years_in_calamba"
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
                                                name="government_assistance"
                                                label="government_assistance_name"
                                                :key="'government_assistance_id-field'"
                                                :value="entry.government_assistance"
                                                :options="lists.government_assistance"
                                                @input="updateGovernmentAssistance"
                                                @focus="focusField('government_assistance')"
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
                                            <input type="text"
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
                                        >   <label>Monthly Income (Econimic Status)</label>
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
                                            <tbody>
                                                <tr>
                                                    <td>SAP</td>
                                                    <td>January 20, 2020</td>
                                                    <td>₱13,000</td>
                                                </tr>
                                                <tr>
                                                    <td>CAP</td>
                                                    <td>October 20, 2020</td>
                                                    <td>₱4,000</td>
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
                                    <div class="col-md-3 mt-2 mr-3">
                                        <label>Full Immunization</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" :value="entry.full_immunization" />
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-md-3 mt-2 mr-3">
                                        <label>Maintaining Medicine</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" :value="entry.maintining" />
                                    </div>
                                </div>
                                <br />
                                <h3>For Female Only</h3>
                                <div class="row">
                                    <div class="col-md-3 mt-2 mr-3">
                                        <label>Pregnancy Age</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" :value="entry.pegnacy_age" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mt-2 mr-3">
                                        <label>With Prental Check-up</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" :value="entry.with_prental" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mt-2 mr-3">
                                        <label>With Postpartum Check-up</label>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" :value="entry.with_postpartum" />
                                    </div>
                                </div>
                                <br />
                                <h3>VACCINE FOR COVID-19</h3>
                                <table class="table table-bordered">
                                    <thead class="black text-white" style="background-color: #462066">
                                        <tr>
                                            <th scope="col">Brand</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1st Dose</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2nd Dose</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
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
                        <!-- <div v-if="entry.images">

                            <a href="javascript:;">
                                <img class="img" :src="'/images/' + entry.images" style="height:150px;width=200px;" />
                            </a>
                        </div>
                        <div v-else>
                            <a href="javascript:;">
                                <img class="img" :src="'/images/none-image.png'" style="height:150px;width=200px;" />
                            </a>
                        </div> -->
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
                            {{ entry.barangay_id }} - {{ entry.barangays_name }}
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
            var birthDate = new Date(this.entry.birthdate);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        calamba_residence () {
            var date = this.entry.no_of_years_in_calamba;
            var current_date = date.substr(date.length - 4);
            if (current_date > new Date().getFullYear() - 1) {
                return "Immigrant";
            } else if (current_date < new Date().getFullYear() - 2) {
                return "Native";
            } else {
                return "Transient";
            }
        },
        barangay_residence () {
            var date = this.entry.barangay_residence_year;
            var current_date = date.substr(date.length - 4);
            if (current_date > new Date().getFullYear() - 1) {
                return "Immigrant";
            } else if (current_date < new Date().getFullYear() - 2) {
                return "Native";
            } else {
                return "Transient";
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
            'fetchEditData',
            'insertPhotoFile',
            'removePhotoFile',
            'setRemarks',
            'resetState',
            'setLandlineNumber',
            'setTitle',
            'updateData',
        ]),
        switchSelect (e) {
            var value = e.target.value;
            $("#myTab li a").eq(value).tab("show");
        },

        getRoute (name) {
            return `${axios.defaults.baseURL}${name}/media`
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

        updateWorkLocationProvince(e) {
            this.setWorkLocationProvince(e)
        },

        updateWorkLocationCity (e) {
            this.setWorkLocationCity(e)
        },

        updateMonthlyIncome (e) {
            this.setMonthlyIncome(e)
        },

        submitForm () {
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
