import { abilitiesPlugin } from '@casl/vue'
import ability from './services/ability'
import Datatable from '@laraveldaily/vue2-datatable'
import VueSweetalert2 from 'vue-sweetalert2'
import MaterialSpinner from '@components/MaterialSpinner.vue'
import VueButtonSpinner from '@components/VueButtonSpinner.vue'
import AutoComplete from '@components/AutoComplete.vue'
import BootstrapAlert from '@components/BootstrapAlert.vue'
import SideBar from '@components/SidebarPlugin'
import LanguagesPlugin from '@components/LanguagesPlugin'
import EventHub from '@components/EventHubPlugin'
import BackButton from '@components/BackButton.vue'
import DatetimePicker from '@components/DatetimePicker.vue'
import VueRadio from '@components/VueRadio.vue'
import vSelect from 'vue-select'
import VueSuggestion from 'vue-suggestion'
import VueFormWizard from 'vue-form-wizard'
import JsonExcel from "vue-json-excel";

const GlobalComponents = {
  install(Vue) {
    Vue.use(VueFormWizard)
    Vue.use(abilitiesPlugin, ability)
    Vue.use(VueSuggestion)
    Vue.use(SideBar)
    Vue.use(LanguagesPlugin)
    Vue.use(EventHub)
    Vue.use(Datatable)
    Vue.use(VueSweetalert2)
    Vue.component("downloadExcel", JsonExcel)
    Vue.component('datetime-picker', DatetimePicker)
    Vue.component('autocomplete',AutoComplete)
    Vue.component('back-button', BackButton)
    Vue.component('material-spinner', MaterialSpinner)
    Vue.component('vue-button-spinner', VueButtonSpinner)
    Vue.component('bootstrap-alert', BootstrapAlert)
    Vue.component('v-radio', VueRadio)
    Vue.component('v-select', vSelect)
  }
}

export default GlobalComponents
