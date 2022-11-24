<template>
    <form :model="model" :rules="rules" ref="form">
        <div class="tab-pane active" id="personal">
            <div class="card">
                <div class="card-header card-header-success">
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
                                <label>Last Name</label>
                                <input type="text" class="form-control popcom-input" v-model="model.last_name" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true
                                }"
                            >
                                <label>First Name</label>
                                <input type="text" class="form-control popcom-input" v-model="model.first_name" />
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true
                                }"
                            >
                                <label>Middle Name</label>
                                <input type="text" class="form-control popcom-input" v-model="model.middle_name" />
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true
                                }"
                            >
                                <label>Extension Name</label>
                                <input type="text" class="form-control popcom-input" v-model="model.extension_name" />
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
                                <label>Household Entry No:</label>
                                <input type="text" class="form-control popcom-input" v-model="model.household_no" />
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
                                <input type="text" class="form-control popcom-input" v-model="model.family_code" />
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
                                    name="relation_household"
                                    label="household_name"
                                    :key="'relation_household_id-field'"
                                    v-model="model.household_id"
                                    :options="lists.relation_household"
                                    @input="updateHousehold"
                                    @focus="focusField('relation_household')"
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
                                    :options="lists.gender"
                                    v-model="model.gender_id"
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
                                    v-model="model.civil_status_id"
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
                                <label>Spouse Name<small> (firstname, middlename, lastname)</small></label>
                                <input
                                    type="text"
                                    class="form-control popcom-input"
                                    :value="`${model.spouse_first_name || ''} ${model.spouse_middle_name || ''} ${
                                        model.spouse_last_name || ''
                                    }`"
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
                                <label>Birthdate</label>
                                <datetime-picker
                                    class="form-control popcom-input"
                                    type="text"
                                    picker="date"
                                    format="yyyy"
                                    v-bind:v-model="model.birthdate"
                                ></datetime-picker>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true
                                }"
                            >
                                <label>Valid ID</label>
                                <v-select
                                    class="form-control popcom-input"
                                    name="valid_id"
                                    label="name"
                                    :key="'sector_id-field'"
                                    v-model="model.valid_id"
                                    :options="lists.valid_id"
									@input="updateValidID"
                                    @focus="focusField('valid_id')"
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
                                <label>ID Number</label>
                                <input type="text" class="form-control popcom-input" v-model="model.id_number" />
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
                                <input type="text" class="form-control popcom-input" v-model="model.mobile_no" />
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
                                    class="form-control popcom-input"
                                    v-model="model.landline_number"
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
                                <input type="text" class="form-control popcom-input" v-model="model.email" />
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
                                <label>Sector Member</label>
                                <v-select
                                    class="form-control popcom-input"
                                    name="sector"
                                    label="sector_name"
                                    :key="'sector_id-field'"
                                    v-model="model.sector_id"
                                    :options="lists.sector"
									@input="updateSector"
                                    @focus="focusField('sector')"
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
                                    v-model="model.ethnicity_id"
                                    :options="lists.ethnicity"
									@input="updateEthnicity"
                                    @focus="focusField('ethnicity')"
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
                                <label>Gender Preference</label>
                                <v-select
                                    class="form-control popcom-input"
                                    name="gender_preference"
                                    label="gender_preference_name"
                                    :key="'gender_preference_id-field'"
                                    :options="lists.gender_preference"
                                    v-model="model.gender_preference_id"
									@input="updateGenderPreference"
                                    @focus="focusField('gender_preference')"
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
                                <label>Religion:</label>
                                <v-select
                                    class="form-control popcom-input"
                                    name="religion"
                                    label="religion_name"
                                    :key="'religion_id-field'"
                                    v-model="model.religion"
                                    :options="lists.religion"
									@input="updateReligion"
                                    @focus="focusField('religion')"
                                    @blur="clearFocus"
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
                                    name="city_name"
                                    label="city_name"
                                    :key="'city_register_id-field'"
                                    v-model="model.political_city_registered_id"
                                    :options="lists.city_register"
									@input="updatePoliticalCityRegistered"
                                    @focus="focusField('city_register')"
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
                                    name="province_register"
                                    label="province_name"
                                    :key="'province_register_id-field'"
                                    v-model="model.political_province_registered_id"
                                    :options="lists.province_register"
									@input="updatePoliticalProvinceRegistered"
                                    @focus="focusField('province_register')"
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
                                    v-model="model.political_brgy_registered"
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
                                <label> Precinct No.</label>
                                <input type="text" class="form-control popcom-input" v-model="model.precinct_no" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
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

label {
    color: black;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data () {
        return {
            model: {
                first_name: '',
                last_name: '',
                middle_name: '',
                extension_name: '',
                household_no: '',
                family_code: '',
                household_id: '',
                gender_id: '',
                civil_status_id: '',
                spouse_first_name: '',
                spouse_middle_name: '',
                spouse_last_name: '',
                birthdate: '',
                gender_preference_id: '',
                valid_id: '',
                sector_id: '',
                ethnicity_id: '',
                religion: '',
                mobile_no: '',
                landline_number: '',
                email: '',
                political_city_registered_id: '',
                political_province_registered_id: '',
                id_number: '',
                political_brgy_registered: '',
                precinct_no: '',
            },
            rules: {}
        };
    },
    mounted () {
        this.fetchFirstData()
    },
    computed: {
        ...mapGetters("GadListSingle", ["loading", "lists"]),
    },
    methods: {
        ...mapActions("GadListSingle", [
            "fetchFirstData",
            "setHousehold",
            "setGender",
            "setCivilStatus",
            "setValidID",
            "setSector",
            "setEthnicity",
            "setGenderPreference",
            "setReligion",
            "setPoliticalProvinceRegistered",
            "setPoliticalCityRegistered",
            "setPoliticalPrecintNumber",
            "setPoliticalBarangay",
        ]),
        validate () {
            return new Promise((resolve, reject) => {
                const valid = true;
                this.$emit("on-validate", valid, this.model);
                resolve(valid);
            });
        },
        updateHousehold (e) {
            this.setHousehold(e);
        },
        updateGender (e) {
            this.setGender(e);
        },
        updateCivilStatus (e) {
            this.setCivilStatus(e)
        },
        updateValidID (e) {
            this.setValidID(e);
        },
        updateSector (e) {
            this.setSector(e);
        },
        updateEthnicity (e) {
            this.setEthnicity(e);
        },
        updateGenderPreference (e) {
            this.setGenderPreference(e)
        },
        updateReligion (e) {
            this.setReligion(e);
        },
        updatePoliticalProvinceRegistered (e) {
            this.setPoliticalProvinceRegistered(e)
        },
        updatePoliticalCityRegistered (e) {
            this.setPoliticalCityRegistered(e)
        },
        updatePoliticalBarangay (e) {
            this.setPoliticalBarangay(e);
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

<style>
</style>
