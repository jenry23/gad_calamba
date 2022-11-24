<template>
    <form :model="model" :rules="rules" ref="form">
        <div class="card">
            <div class="card-header card-header-success">
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
                                v-model="model.house_ownership"
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
                                v-model="model.house_type"
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
                                v-model="model.house_make"
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
                                class="form-control popcom-input"
                                v-model="model.no_nuclear_family_household_id"
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
                            <input type="text" class="form-control popcom-input" v-model="model.no_bedrooms_id" />
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
                            <input type="text" class="form-control popcom-input" v-model="model.no_cr_id" />
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
                                v-model="model.utilities"
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
                                v-model="model.appliance"
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
                                v-model="model.vehicle"
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
                house_ownership: [],
                house_type: [],
                house_make: [],
                no_nuclear_family_household_id: '',
                no_bedrooms_id: '',
                no_cr_id: '',
                utilities: [],
                appliance: [],
                vehicle: [],
            },
            rules: {},
        };
    },

    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading", "lists"]),
    },

    methods: {
        validate () {
            return new Promise((resolve, reject) => {
                const valid = true;
                this.$emit("on-validate", valid, this.model);
                resolve(valid);
            });
        },
        updateHouseOwnership (e) {
            this.model.house_ownership = e;
        },
        updateHouseType (e) {
            this.model.house_type = e;
        },
        updateHouseMake (e) {
            this.model.house_make = e;
        },
        updateVehicle (e) {
            this.model.vehicle = e;
        },
        updateAppliance (e) {
            this.model.appliance = e;
        },
        updateUtilities (e) {
            this.model.utilities = e;
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
