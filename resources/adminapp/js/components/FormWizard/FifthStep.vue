<template>
    <div class="card">
        <div class="card-header card-header-success">
            <h4 class="card-title">Survey Questions</h4>
            <p class="card-category">Complete your profile</p>
        </div>
        <div class="card-body">
            <div class="mt-3" v-for="question in lists.questions" :key="question.id">
                <label>{{ question.id }} . {{ question.description }}</label>
                <div v-for="answer in question.answers" :key="answer.id">
                    <div class="custom-control custom-checkbox custom-control-inline pmd-checkbox">
                        <input class="custom-control-input" type="checkbox" :value="answer.answer" :id="answer.id" />
                        <label class="custom-control-label pmd-checkbox-ripple-effect" :for="answer.id">
                            {{ answer.answer }}
                        </label>
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
import { mapGetters } from "vuex";
export default {
    data () {
        return {
            survey: [],
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
        focusField (name) {
            this.activeField = name;
        },
        clearFocus () {
            this.activeField = "";
        },
    },
};
</script>
