<template>
    <div class="card">
        <div class="card-header card-header-primary">
            <h4 class="card-title">Hobbies</h4>
            <p class="card-category">Complete your profile</p>
        </div>
        <div class="card-body">
            <!-- <form>
                <div v-for="datas in data" :key="datas.id">
                <p class="flow-text">
                    Question {{ $key + 1 }} - {{ $question->title }}
                </p>
                @if($question->question_type === 'text')
                <div class="input-field col s12">
                    <input
                        id="answer"
                        type="text"
                        name="{{ $question->id }}[answer]"
                    />
                    <label for="answer">Answer</label>
                </div>
                @elseif($question->question_type === 'textarea')
                <div class="input-field col s12">
                    <textarea
                        id="textarea1"
                        class="materialize-textarea"
                        name="{{ $question->id }}[answer]"
                    ></textarea>
                    <label for="textarea1">Textarea</label>
                </div>
                @elseif($question->question_type === 'radio')
                @foreach($question->option_name as $key=>$value)
                <p style="margin: 0px; padding: 0px">
                    <input
                        name="{{ $question->id }}[answer]"
                        type="radio"
                        id="{{ $key }}"
                    />
                    <label for="{{ $key }}">{{ $value }}</label>
                </p>
                @endforeach @elseif($question->question_type === 'checkbox')
                @foreach($question->option_name as $key=>$value)
                <p style="margin: 0px; padding: 0px">
                    <input
                        type="checkbox"
                        id="something{{ $key }}"
                        name="{{ $question->id }}[answer]"
                    />
                    <label for="something{{$key}}">{{ $value }}</label>
                </p>
                @endforeach @endif
                <div class="divider" style="margin: 10px 10px"></div>
                @empty
                <span class="flow-text center-align">Nothing to show</span>
            </form> -->
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            survey : [],
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
    mounted() {
        // axios.get('survey').then(response => {
        //     // console.log(response.data);
        // })
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
