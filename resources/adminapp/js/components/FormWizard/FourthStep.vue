<template>
    <form :model="model" :rules="rules" ref="form">
        <div class="card">
            <div class="card-header card-header-success">
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
                                :v-model="model.health_condition"
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
                                :v-model="model.disability_condition"
                                :options="lists.disability_condition"
                                @input="updateDisability"
                                multiple
                                @focus="focusField('disability_condition')"
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
                            <label>Full Immunization</label>
                            <input type="text" class="form-control popcom-input" v-model="model.full_immunization" />
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
                                :v-model="model.medicine"
                                :options="lists.medicine"
                                @input="updateMedicine"
                                multiple
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
                        <input type="text" class="form-control popcom-input" :v-model="model.pregnancy_age" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mt-2 mr-3">
                        <label>With Prental Check-up</label>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control popcom-input" :v-model="model.prental_checkup" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mt-2 mr-3">
                        <label>With Postpartum Check-up</label>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control popcom-input" :v-model="model.postnatal_checkup" />
                    </div>
                </div>
                <br />
                <h3>VACCINE FOR COVID-19</h3>
                <table class="table table-bordered">
                    <thead class="black text-white" style="background-color: #66bb6a">
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
                                <v-select
                                    class="form-control popcom-input"
                                    name="brand1"
                                    label="vaccination_name"
                                    :key="'brand1_id-field'"
                                    :v-model="model.brand1"
                                    :options="lists.vaccanation"
                                    @input="updateBrand1"
                                    @blur="clearFocus"
                                />
                            </td>
                            <td>
                                <datetime-picker
                                    class="form-control popcom-input"
                                    type="text"
                                    picker="date"
                                    @input="updateBrandDate1"
                                    :v-model="model.first_date_vaccination"
                                ></datetime-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>2nd Dose</td>
                            <td>
                                <v-select
                                    class="form-control popcom-input"
                                    name="brand2"
                                    label="vaccination_name"
                                    :key="'brand2_id-field'"
                                    :v-model="model.brand2"
                                    :options="lists.vaccanation"
                                    @input="updateBrand2"
                                    @blur="clearFocus"
                                />
                            </td>
                            <td>
                                <datetime-picker
                                    class="form-control popcom-input"
                                    type="text"
                                    picker="date"
                                    @input="updateBrandDate2"
                                    :v-model="model.second_date_vaccination"
                                ></datetime-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>Booster Shot</td>
                            <td>
                                <v-select
                                    class="form-control popcom-input"
                                    name="brand3"
                                    label="vaccination_name"
                                    :key="'brand3_id-field'"
                                    :v-model="model.brand3"
                                    :options="lists.vaccanation"
                                    @input="updateBrand3"
                                    @blur="clearFocus"
                                />
                            </td>
                            <td>
                                <datetime-picker
                                    class="form-control popcom-input"
                                    type="text"
                                    picker="date"
                                    @input="updateBrandDate3"
                                    :v-model="model.booster_date_vaccination"
                                ></datetime-picker>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                health_condition: [],
                disability_condition: [],
                full_immunization: "",
                medicine: [],
                pregnancy_age: "",
                prental_checkup: "",
                postnatal_checkup: "",
                brand1: [],
                first_date_vaccination: "",
                brand2: [],
                second_date_vaccination: "",
                brand3: [],
                booster_date_vaccination: "",
            },
            rules: {},
        };
    },

    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading", "lists"]),
    },

    methods: {
        ...mapActions("GadListSingle", [
            "setHealthCondition",
            "setDisability",
            "setMedicine",
            "setBrand1",
            "setBrand2",
            "setBrand3",
        ]),
        validate () {
            return new Promise((resolve, reject) => {
                const valid = true;
                this.$emit("on-validate", valid, this.model);
                resolve(valid);
            });
        },
        updateHealthCondition (e) {
            this.model.health_condition = e;
        },
        updateDisability (e) {
            this.model.disability_condition = e;
        },
        updateMedicine (e) {
           this.model.medicine = e;
        },
        updateBrand1 (e) {
            this.model.brand1 = e;
        },
        updateBrand2 (e) {
            this.model.brand2 = e;
        },
        updateBrand3 (e) {
            this.model.brand3 = e;
        },
        updateBrandDate1 (e) {
            this.model.first_date_vaccination = e;
        },
        updateBrandDate2 (e) {
            this.model.second_date_vaccination = e;
        },
        updateBrandDate3 (e) {
            this.model.booster_date_vaccination = e;
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
