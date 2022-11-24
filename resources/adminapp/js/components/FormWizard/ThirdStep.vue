<template>
    <form :model="model" :rules="rules" ref="form">
        <div class="card">
            <div class="card-header card-header-success">
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
                                :v-model="model.educational_attaintment_id"
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
                                :v-model="model.educational_status_id"
                                :options="lists.educational_status"
                                @update="updateEducationalStatus"
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
                                class="form-control popcom-input"
                                :v-model="model.last_school_attended"
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
                                name="government_educational_assistance_id"
                                label="educational_assistance_name"
                                :key="'government_educational_assistance_id-field'"
                                :v-model="model.government_educational_assistance_id"
                                :options="lists.government_educational_assistance"
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
                                :v-model="model.organization_id"
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
                                :v-model="model.occupation_id"
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
                            <input type="text" class="form-control popcom-input" :v-model="model.employer" />
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
                            <label>Work Location (City, Province)</label>
                            <v-select
                                class="form-control popcom-input"
                                name="city_name"
                                label="city_name"
                                :key="'work_city_id-field'"
                                :v-model="model.work_location_city_id"
                                :options="lists.work_location_city"
                                @input="updateWorkLocationCity"
                                @focus="focusField('work_city')"
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
                                :v-model="model.monthly_income"
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
                            <thead class="black text-white" style="background-color: #66bb6a">
                                <tr>
                                    <th scope="col">Government Assistance</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <v-select
                                            class="form-control popcom-input"
                                            name="government_assistance"
                                            label="government_assistance_name"
                                            :key="'government_assistance_id-field'"
                                            :v-model="model.government_assistance_id_1"
                                            :options="lists.government_assistance"
                                            @input="updateGovernmentAssistance"
                                            @focus="focusField('government_assistance')"
                                            @blur="clearFocus"
                                        />
                                    </td>
                                    <td>
                                        <datetime-picker
                                            class="form-control popcom-input"
                                            type="text"
                                            picker="date"
                                            @input="updateGovernmentDate1"
                                            :value="model.governement_assistance_date_1"
                                        ></datetime-picker>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control popcom-input"
                                            v-model="model.government_assistance_amount_1"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <v-select
                                            class="form-control popcom-input"
                                            name="government_assistance"
                                            label="government_assistance_name"
                                            :key="'government_assistance_id-field'"
                                            :v-model="model.government_assistance_id_2"
                                            :options="lists.government_assistance"
                                            @input="updateGovernmentAssistance"
                                            @focus="focusField('government_assistance')"
                                            @blur="clearFocus"
                                        />
                                    </td>
                                    <td>
                                        <datetime-picker
                                            class="form-control popcom-input"
                                            type="text"
                                            picker="date"
                                            @input="updateGovernmentDate2"
                                            :value="model.governement_assistance_date_2"
                                        ></datetime-picker>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control popcom-input"
                                            v-model="model.government_assistance_amount_2"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
</style><script>
import { mapGetters, mapActions } from "vuex";
export default {
    data () {
        return {
            model: {
                educational_attaintment_id: [],
                educational_status_id: [],
                government_educational_assistance_id: [],
                organization_id: [],
                occupation_id: [],
                work_location_city_id: [],
                governement_assistance_date_1: "",
                government_assistance_id_1: [],
                government_assistance_amount_1: "",
                governement_assistance_date_2: "",
                government_assistance_id_2: [],
                government_assistance_amount_2: "",
            },
            rules: {}
        };
    },
    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading", "lists"]),
    },
    methods: {
        ...mapActions("GadListSingle", [
            "setEducationalAttaintment",
            "setEducationalStatus",
            "setGovernmentAssistance",
            "setOrganization",
            "setOccupation",
            "setWorkLocationCity",
            "setMonthlyIncome",
        ]),
        validate () {
            return new Promise((resolve, reject) => {
                const valid = true;
                this.$emit("on-validate", valid, this.model);
                resolve(valid);
            });
        },
        updateEducationalAttaintment (e) {
            this.setEducationalAttaintment(e)
        },
        updateGovernmentDate1(e){
            this.model.governement_assistance_date_1 = e.target.value
        },
        updateGovernmentDate2(e){
            this.model.governement_assistance_date_2= e.target.value
        },
        updateEducationalStatus (e) {
            this.setEducationalStatus(e)
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
    			updateWorkLocationCity (e) {
				this.setWorkLocationCity(e)
			},
        updateMonthlyIncome (e) {
            this.setMonthlyIncome(e)
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
