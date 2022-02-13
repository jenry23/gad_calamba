<template>
  <form :model="model" :rules="rules" ref="form">
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
                        <v-select class="form-control popcom-input" name="educational_attaintment"
                        label="educational_attaintment_name" :key="'educational_attaintment_id-field'"
                        :v-model="model.educational_attaintment_name"
                        :options="lists.educational_attaintment"
                        @focus="focusField('educational_attaintment')" @blur="clearFocus" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div
                        class="form-group bmd-form-group "
                        :class="{
                            'is-focused': true
                        }"
                    >
                        <label>Educational Status</label>
                        <v-select class="form-control popcom-input" name="educational_status"
                        label="educational_status_name" :key="'educational_status_id-field'"
                        :v-model="model.educational_status_name"
                        :options="lists.educational_status"
                        @focus="focusField('educational_status')" @blur="clearFocus" />
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
                        <input type="text" class="form-control popcom-input" :v-model="model.last_school_attended" />
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
                        <v-select class="form-control popcom-input" name="government_assistance"
                        label="government_assistance_name" :key="'government_assistance_id-field'"
                        :v-model="model.government_educational_assistance_id"
                        :options="lists.government_assistance"
                        @focus="focusField('government_assistance')" @blur="clearFocus" />
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
                        <v-select class="form-control popcom-input" name="organization"
                        label="organization_name" :key="'organization_id-field'"
                        :v-model="model.organization_id"
                        :options="lists.organization"
                        @focus="focusField('organization')" @blur="clearFocus" />
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
                           <v-select class="form-control popcom-input" name="occupation"
                        label="occupation_name" :key="'occupation_id-field'"
                        :v-model="model.occupation_id"
                        :options="lists.occupation"
                        @focus="focusField('occupation')" @blur="clearFocus" />
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
                        <v-select class="form-control popcom-input" name="city_name" label="city_name"
                        :key="'work_city_id-field'" :v-model="model.work_location_city_id" :options="lists.work_location_city"
                        @focus="focusField('work_city')" @blur="clearFocus" />
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
                        <input type="text" class="form-control popcom-input" :v-model="model.monthly_income" />
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
                                <td>Social Amelioration Program (SAP)</td>
                                <td>January 20, 2020</td>
                                <td>₱13,000</td>
                            </tr>
                            <tr>
                                <td>Calamba City Cash Assistance Program (CAP)</td>
                                <td>October 20, 2020</td>
                                <td>₱4,000</td>
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
                educational_attaintment_name: "",
                educational_status_name: "",
                government_educational_assistance_id: "",
                organization_id: "",
                occupation_id: "",
                work_location_city_id: "",
            },
            rules:{}
        };
    },
    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading", "lists"]),
    },
    methods: {
        validate () {
            console.log('test');
            return new Promise((resolve, reject) => {
                    const valid = true;
                    this.$emit("on-validate", valid, this.model);
                    resolve(valid);
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
