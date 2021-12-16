<template>
    <div class="card">
        <div class="card-header card-header-primary">
            <h4 class="card-title">Residential Information</h4>
            <p class="card-category">Complete your profile</p>
        </div>
        <div class="card-body">
            <form>
                <div class="row">
                    <div class="col-md-5">
                        <div
                            class="form-group bmd-form-group"
                            :class="{
                                'is-focused': true,
                            }"
                        >
                            <label>Building Number</label>
                            <input
                                type="text"
                                class="form-control"
                                :value="entry.building_no"
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
                            <label>House/Room Unit No</label>
                            <input
                                type="text"
                                class="form-control"
                                :value="entry.building_no"
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
                            <label>Block No/Lot No/Street Name</label>
                            <input
                                type="text"
                                class="form-control"
                                :value="entry.block_lot_house_id"
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
                            <label>Sitio</label>
                            <input
                                type="text"
                                class="form-control"
                                :value="entry.sitio_names"
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
                            <label>Purok</label>
                            <input
                                type="text"
                                class="form-control"
                                :value="entry.purok_names"
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
                            <label>Subdivision Name</label>
                            <input
                                type="text"
                                class="form-control"
                                :value="entry.subdivision_name"
                            />
                        </div>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead
                        class="black text-white"
                        style="background-color: #462066"
                    >
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
                                    class="form-control"
                                    type="text"
                                    picker="date"
                                    format="yyyy"
                                    @input="changeDate"
                                ></datetime-picker>
                            </td>
                            <td>
                                {{ this.date1 }}
                            </td>
                        </tr>
                        <tr>
                            <td>BARANGAY</td>
                            <td>{{ entry.barangay_residence_year }}</td>
                            <td
                                v-if="
                                    entry.barangay_residence_year ==
                                    new Date().getFullYear()
                                "
                            >
                                Immigrant
                            </td>
                            <td v-else>Native</td>
                        </tr>
                    </tbody>
                </table>
                <div
                    class="form-group bmd-form-group"
                    :class="{
                        'is-focused': true,
                    }"
                >
                    <label> Remarks</label>
                    <textarea
                        class="form-control"
                        rows="5"
                        v-bind:value="entry.remarks"
                    ></textarea>
                </div>
            </form>
        </div>
    </div>
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
        return {
            date1: "",
            model: {
                language: "",
                website: "",
            },
            rules: {
                language: [
                    {
                        required: true,
                        message: "Language name is required",
                        trigger: "change",
                    },
                ],
                website: [
                    {
                        required: true,
                        message: "Website is required",
                        trigger: "blur",
                    },
                    {
                        type: "url",
                        message: "Invalid url",
                        trigger: "change",
                    },
                ],
            },
        };
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
        changeDate(e) {
            var date = e.target.value;
            var current_date = date.substr(date.length - 4);
            console.log(current_date);
            console.log(new Date().getFullYear() + 1);
            if (current_date == new Date().getFullYear() - 1) {
                this.date1 = "Immigrant";
            } else if (current_date == new Date().getFullYear() - 2) {
                this.date1 = "Native";
            } else {
                this.date1 = "Transient";
            }
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
