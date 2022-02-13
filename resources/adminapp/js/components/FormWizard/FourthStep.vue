<template>
    <form :model="model" :rules="rules" ref="form">
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
                        <input type="text" class="form-control" :v-model="model.full_immunization" />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-3 mt-2 mr-3">
                        <label>Maintaining Medicine</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" class="form-control" :v-model="model.medical_id" />
                    </div>
                </div>
                <br />
                <h3>For Female Only</h3>
                <div class="row">
                    <div class="col-md-3 mt-2 mr-3">
                        <label>Pregnancy Age</label>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" :v-model="model.pregnancy_age" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mt-2 mr-3">
                        <label>With Prental Check-up</label>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" :v-model="model.prental_checkup" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mt-2 mr-3">
                        <label>With Postpartum Check-up</label>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" :v-model="model.postnatal_checkup" />
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
                            <td><input type="text" class="form-control" :v-model="model.brand" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="form-control" :v-model="model.brand2" /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </form>
</template>
<style scoped>
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
</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data () {
        return {
            model: {
                full_immunization: "",
                medical_id: "",
                pregnancy_age: "",
                prental_checkup: "",
                postnatal_checkup: "",
                brand: "",
                brand2: ""
            },
            rules: {},
        };
    },
    computed: {
        ...mapGetters("GadListSingle", ["entry", "loading"]),
    },
    methods: {
        validate () {
            return new Promise((resolve, reject) => {
                this.$refs.form.validate((valid) => {
                    this.$emit("on-validate", valid, this.model);
                    resolve(valid);
                });
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
