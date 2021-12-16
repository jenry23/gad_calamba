<template>
	<div id="row">
    <div class="card">
		<form-wizard @on-complete="onComplete"
    validate-on-back
		ref="wizard"
		:start-index.sync="activeTabIndex"
		shape="circle" color="#20a0ff" error-color="#ff4949">
      <tab-content title="Personal details" icon="fa fa-user">
        <first-step ref="firstStep" @on-validate="onStepValidate"></first-step>
      </tab-content>
      <tab-content title="Additional Info" icon="fa fa-cog">
        <second-step ref="secondStep" @on-validate="onStepValidate"></second-step>
      </tab-content>
      <tab-content title="Educational Information / Organizations" icon="fa fa-book">
        <third-step ref="thirdStep" @on-validate="onStepValidate"></third-step>
      </tab-content>
      <tab-content title="Health Info" icon="fa fa-address-card">
        <fourth-step ref="fourthStep" @on-validate="onStepValidate"></fourth-step>
      </tab-content>
      <tab-content title="Survey Questions" icon="fa fa-address-card">
        <fifth-step ref="fifthStep" @on-validate="onStepValidate"></fifth-step>
      </tab-content>
      <tab-content title="Last step" icon="fa fa-check">
				Your data
			 <pre v-html="prettyJSON"></pre>
      </tab-content>

		</form-wizard>
        </div>
	</div>
</template>

<script>
import FirstStep from "@components/FormWizard/FirstStep.vue";
import SecondStep from "@components/FormWizard/SecondStep.vue";
import ThirdStep from "@components/FormWizard/ThirdStep.vue";
import FourthStep from "@components/FormWizard/FourthStep.vue";
import FifthStep from "@components/FormWizard/FifthStep.vue";
import prettyJSON from "@components/FormWizard/prettyJson.js";
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    FifthStep
  },
  data() {
    return {
      finalModel: {},
      activeTabIndex: 0
    };
  },
  computed: {
    prettyJSON() {
      return prettyJSON(this.finalModel);
    }
  },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
    forceClearError() {
      this.$refs.wizard.tabs[this.activeTabIndex].validationError = null;
    },
    validate(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidate(validated, model) {
      if (validated) {
        this.finalModel = { ...this.finalModel, ...model };
      }
    }
  }
};
</script>
