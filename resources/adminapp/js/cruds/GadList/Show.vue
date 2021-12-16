<style scoped>
input {text-decoration: underline; }
table, th, td {
  border: 1px solid black;
}
</style>
<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card" style="border: 1px solid black;background-color:#F0F8FF;">
        <div class="card-header card-header-primary">
        <h4 class="card-title">Family Information</h4>
        <p class="card-category">Household Members</p>
      </div>
      <div class="card-body">
            <center>
               <div class="row">
               <div class="col-md-3">
                 <br>
                    <img src="/images/cap.jpg" height="104px" width="110px">
                    <img src="/images/gad-logo-login.png" height="95px" width="100px">
                    <b></b>
               </div>
               <div class="col-md-5">
                   <div>
                    <h3 style="color:black;"><b style="text-transform: uppercase;">City Government of Calamba</b><br>
                    <b style="text-transform: uppercase;margin-right:50px;">Gender and Development</b><br>
                    <b style="text-transform: uppercase;margin-right:130px;">Household Profile</b></h3>
                   </div>
                </div>
                <div class="col-md-4" >
                    <table class="table-bordered" style="margin-right:10px">
                            <tr>
                            <th><b>Household ID:</b></th>
                            <td>LAG-CAL-260400-0059-A1-01</td>
                            </tr>
                            <tr>
                            <th><b>Brgy ID:</b></th>
                            <td>{{entry[0].barangay_id+' - '+entry[0].barangays_name }}</td>
                             </tr>
                            <tr>
                            <th><b>Family ID:</b></th>
                            <td>{{entry[0].family_code}}</td>
                             </tr>
                            <tr>
                            <th><b>Purok</b></th>
                            <td>{{entry[0].purok_names}}</td>
                            </tr>
                    </table>
                </div>
                </div>
          </center>
        </div>
        <div class="card" style="background-color:#F0F8FF;">
        <div class="card-body">
            <div class="row">
                <br>
                <!-- Table that shows Employee List -->
                 <table style="color:black" class="table table-border table-stripe">
                 <thead>
                  <tr style="background-color:#00AAA0;color:white">
                   <th><b>Family Code</b></th>
                   <th><b>Member Of Family</b></th>
                   <th><b>Birthday</b></th>
                   <th><b>Gender</b></th>
                   <th><b>Relation to Household</b></th>
                   <th><b>Residence Status</b></th>
                 </tr>
                 </thead>
                 <tbody>
                   <tr v-for="val in entry" :key="val.id">
                     <td>{{val.family_code}}</td>
                    <td style="text-transform: uppercase;">
                      <router-link  :to="{ name: 'gad_list.edit', params: { id: val.id } }">
                         {{val.first_name}} {{val.last_name}}
                      </router-link>
                    </td>
                    <td>{{ formatDate(val.birthdate)}}</td>
                    <td>{{ val.gender_name}} </td>
                    <td>{{ val.household_names }}</td>
                    <td v-if="val.no_of_years_in_calamba == new Date().getFullYear()">
                      Immigrant
                    </td>
                    <td v-else>
                      Native
                    </td>
                   </tr>
                 </tbody>
               </table>
                    </div>
                </div>
                </div>
            </div>
                <select class="custom-select my-1 mr-sm-2" >
              <option value="0">Family Information</option>
              <option value="1">Address and Residential Information</option>
              <option value="2">Others Information</option>
            </select>
        </div>
      </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableList from '@components/Datatables/DatatableList'

export default {
  components: {
    DatatableList
  },
  data() {
    return {}
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('GadListSingle', ['entry'])
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchShowData(this.$route.params.id)
      }
    }
  },
  methods: {
  formatDate(value) {
      return moment(String(value)).format('MMMM DD, YYYY')
  },
    ...mapActions('GadListSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
