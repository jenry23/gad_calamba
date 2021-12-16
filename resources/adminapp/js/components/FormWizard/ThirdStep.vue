<template>
    <div class="card">
        <div class="card-header card-header-primary">
            <h4 class="card-title">Educational Information / Organizations</h4>
            <p class="card-category">Complete your profile</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <div
                        class="form-group bmd-form-group"
                        :class="{
                            'is-focused': true,
                        }"
                    >
                        <label>Highest Educational Attaintment</label>
                        <input
                            type="text"
                            class="form-control"
                            :value="entry.educational_attaintment_name"
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
                        <label>Educational Status</label>
                        <input
                            type="text"
                            class="form-control"
                            :value="entry.educational_status_name"
                        />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div
                        class="form-group bmd-form-group"
                        :class="{
                            'is-focused': true,
                        }"
                    >
                        <label>Last School Attended</label>
                        <input
                            type="text"
                            class="form-control"
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
                            'is-focused': true,
                        }"
                    >
                        <label>Government Educational Assistance</label>
                        <input
                            type="text"
                            class="form-control"
                            :value="entry.government_assistance_name"
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
                        <label>Organizations</label>
                        <input
                            type="text"
                            class="form-control"
                            :value="entry.organization_name"
                        />
                    </div>
                </div>
            </div>
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
        focusField(name) {
            this.activeField = name;
        },
        clearFocus() {
            this.activeField = "";
        },
    },
};
</script>
