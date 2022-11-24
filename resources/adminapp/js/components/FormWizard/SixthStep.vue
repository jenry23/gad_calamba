<template>
    <div class="card">
        <div class="card-header card-header-success">
            <h4 class="card-title">Hobbies</h4>
            <p class="card-category">Complete your profile</p>
        </div>
        <div class="card-body">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div
                            class="form-group bmd-form-group"
                            :class="{
                                'is-focused': true
                            }"
                        >
                            <label>Soft Skills</label>
                            <v-select
                                class="form-control popcom-input"
                                name="soft_skill"
                                label="soft_skill_name"
                                :key="'soft_skill_id-field'"
                                :v-model="model.soft_skill"
                                :options="lists.soft_skill"
                                multiple
                                @input="updateSoftSkills"
                                @focus="focusField('soft_skill')"
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
                            <label>Hard Skills</label>
                            <v-select
                                class="form-control popcom-input"
                                name="hard_skill"
                                label="hard_skill_name"
                                :key="'hard_skill_id-field'"
                                :v-model="model.hard_skill"
                                :options="lists.hard_skill"
                                multiple
                                @input="updateHardSkills"
                                @focus="focusField('hard_skill')"
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
                            <label>Hobbies</label>
                            <v-select
                                class="form-control popcom-input"
                                name="hobbies"
                                label="hobbies_name"
                                :key="'hobbies_id-field'"
                                :v-model="model.hobbies"
                                :options="lists.hobbies"
                                multiple
                                @input="updateHobbies"
                                @focus="focusField('hobbies')"
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
                            <label>Sports</label>
                            <v-select
                                class="form-control popcom-input"
                                name="sports"
                                label="sports_name"
                                :key="'sports_id-field'"
                                :v-model="model.sports"
                                :options="lists.sports"
                                multiple
                                @input="updateHobbies"
                                @focus="focusField('sports')"
                                @blur="clearFocus"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            survey: [],
            model: {
                soft_skill: [],
                hard_skill: [],
                hobbies: [],
                sports: [],
            },
            rules: {
            },
        };
    },

    computed: {
        ...mapGetters("GadListSingle", ["loading", "lists"]),
    },

    methods: {
        validate () {
            return new Promise((resolve, reject) => {
                const valid = true;
                this.$emit("on-validate", valid, this.model);
                resolve(valid);
            });
        },
        updateSoftSkills (e) {
            this.model.soft_skill = e;
        },
        updateHardSkills (e) {
            this.model.hard_skill = e;
        },
        updateHobbies (e) {
            this.model.hobbies = e;
        },
        updateSports (e) {
            this.model.sports = e;
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
