<template>
    <form :model="model" :rules="rules" ref="form">
        <div class="card">
            <div class="card-header card-header-success">
                <h4 class="card-title">Residential Information</h4>
                <p class="card-category">Complete your profile</p>
            </div>
            <div class="card-body">
                <div class="row" v-if="!lists.is_member">
                    <div class="col-md-3">
                        <div
                            class="form-group bmd-form-group"
                            :class="{
                                'is-focused': true
                            }"
                        >
                            <label>Building Number</label>
                            <input type="text" class="form-control popcom-input" v-model="model.building_no" />
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div
                            class="form-group bmd-form-group"
                            :class="{
                                'is-focused': true
                            }"
                        >
                            <label>House/Room Unit No</label>
                            <input type="text" class="form-control popcom-input" v-model="model.house_unit" />
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
                            <input type="text" class="form-control popcom-input" v-model="model.block_lot_house_id" />
                        </div>
                    </div>
                </div>

                <div class="row" v-if="!lists.is_member">
                    <div class="col-md-3">
                        <div
                            class="form-group bmd-form-group"
                            :class="{
                                'is-focused': true
                            }"
                        >
                            <label>Barangay</label>
                            <v-select
                                class="form-control popcom-input"
                                name="barangay_id"
                                label="barangay_name"
                                :key="'barangay_id-field'"
                                v-model="model.barangay_id"
                                :options="lists.barangay"
                                @input="updateBarangay"
                                @focus="focusField('barangay_id')"
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
                            <label>Purok</label>
                            <v-select
                                class="form-control popcom-input"
                                name="purok_id"
                                label="purok_name"
                                :key="'purok_id_id-field'"
                                v-model="model.purok_id"
                                :options="puroks"
                                @input="updatePurok"
                                @focus="focusField('purok_id')"
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
                            <label>Sitio / Subdivsion Name</label>
                            <v-select
                                class="form-control popcom-input"
                                name="sitio_id"
                                label="sitio_name"
                                :key="'sitio_id_id-field'"
                                v-model="model.sitio_id"
                                :options="sitios"
                                @input="updateSitio"
                                @focus="focusField('sitio_id')"
                                @blur="clearFocus"
                            />
                        </div>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead class="black text-white" style="background-color: #66bb6a">
                        <tr>
                            <th scope="col">Reidency</th>
                            <th scope="col">Date</th>
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
                                    format="yyyy"
                                    @input="changeDate"
                                    v-bind:v-model="model.calamba_residence_year"
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
                                    format="yyyy"
                                    @input="changeDate1"
                                ></datetime-picker>
                                <input type='hidden' v-model="model.barangay_residence_year">
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
                    <textarea class="form-control popcom-input" rows="5" v-bind:v-model="model.remarks"></textarea>
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
import Index from '../../cruds/Barangay/Index.vue';
export default {
    components: { Index },
    data () {
        return {
            calamba_residence: "",
            barangay_residence: "",
            model: {
                building_no: '',
                house_unit: '',
                block_lot_house_id: '',
                sitio_id: '',
                purok_id: '',
                barangay_id: '',
                calamba_residence_year: '',
                barangay_residence_year: '',
                remarks: '',
            },
            rules: {},
            puroks: [],
            sitios: []
        };
    },
    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading", "lists"]),
    },
    methods: {
        ...mapActions("GadListSingle", [
            'setYearsInCalamba',
            'setYearsInBarangay',
            'setBarangay',
            'setPurok',
            'setSitio',
        ]),

        validate () {
            return new Promise((resolve, reject) => {
                const valid = true;
                this.$emit("on-validate", valid, this.model);
                resolve(valid);
            });
        },
        changeDate (e) {
            this.model.calamba_residence_year = e.target.value
            var date = e.target.value;
            var current_date = date.substr(date.length - 4);
            if (current_date > new Date().getFullYear() - 1) {
                this.calamba_residence = "Immigrant";
            } else if (current_date < new Date().getFullYear() - 2) {
                this.calamba_residence = "Native";
            } else {
                this.calamba_residence = "Transient";
            }
        },
        changeDate1 (e) {
            this.model.barangay_residence_year = e.target.value;
            var date = e.target.value;
            var current_date = date.substr(date.length - 4);
            if (current_date == new Date().getFullYear() - 1) {
                this.barangay_residence = "Immigrant";
            } else if (current_date == new Date().getFullYear() - 2) {
                this.barangay_residence = "Native";
            } else {
                this.barangay_residence = "Transient";
            }
        },
        updateBarangay (e) {
            this.setBarangay(e);
            axios.get('gad/barangay', {params: {id: e.id}
            }).then(response => {
                    this.puroks = response.data['purok'];
                    this.sitios = response.data['sitio'];
            })
        },
        updatePurok (e) {
            this.setPurok(e);
        },
        updateSitio (e) {
            this.setSitio(e)
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
