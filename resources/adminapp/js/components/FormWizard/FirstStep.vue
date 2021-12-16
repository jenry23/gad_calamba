<template>
    <form>
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
                                    'is-focused': true,
                                }"
                            >
                                <label>House No:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.house_no"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Family Code</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.family_code"
                                />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Relation To Main Household</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.household_names"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Birthday</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.birthdate"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Cellphone Number:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.mobile_no"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Valid ID</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.valid_id_names"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>ID Number</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.id_number"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-5">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Civil Status</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.civil_status_names"
                                />
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Spouse Name</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Sex</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.gender_name"
                                />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Gender Preference</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.gender_preference_name"
                                />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Sector Member</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.sector_name"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Ethnicity</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.ethnicity_name"
                                />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div
                                class="form-group bmd-form-group"
                                :class="{
                                    'is-focused': true,
                                }"
                            >
                                <label>Religion</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    :value="entry.religion"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<style scoped>
input[type="text"],
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
</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading"]),
    },
    methods: {
        validate() {
            return new Promise((resolve, reject) => {
                this.$refs.form.validate((valid) => {
                    this.$emit("on-validate", valid, this.model);
                    resolve(valid);
                });
            });
        },

        focusField(name) {
            this.activeField = name;
        },
        clearFocus() {
            this.activeField = "";
        },
    },
};
</script>

<style>
</style>
