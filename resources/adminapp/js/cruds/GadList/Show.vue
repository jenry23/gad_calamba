<style scoped>
input {
    text-decoration: underline;
}
table,
th,
td {
    border: 1px solid black;
}
</style>
<template>
    <div class="row">
        <div class="col-md-12">
            <button class="btn btn-info" @click="downloads">Download PDF</button>
            <div ref="content">
                <div class="card" style="border: 1px solid black; background-color: #f0f8ff">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Family Information</h4>
                        <p class="card-category">Household Members</p>
                    </div>
                    <div class="card-body">
                        <center>
                            <div class="row">
                                <div class="col-md-3">
                                    <br />
                                    <img src="/images/cap.jpg" height="104px" width="110px" />
                                    <img src="/images/gad-logo-login.png" height="95px" width="100px" />
                                    <b></b>
                                </div>
                                <div class="col-md-5">
                                    <div>
                                        <h3 style="color: black">
                                            <b style="text-transform: uppercase">City Government of Calamba</b><br />
                                            <b style="text-transform: uppercase; margin-right: 50px"
                                                >Gender and Development</b
                                            ><br />
                                            <b style="text-transform: uppercase; margin-right: 130px"
                                                >Household Profile</b
                                            >
                                        </h3>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <table class="table-bordered" style="margin-right: 10px">
                                        <tr>
                                            <th><b>Brgy ID:</b></th>
                                            <td v-if="entry.barangay">
                                                {{ entry.barangay.id + ' - ' + entry.barangay.barangay_name }}
                                            </td>
                                            <td v-else></td>
                                        </tr>
                                        <tr>
                                            <th><b>Purok</b></th>
                                            <td>{{ entry.purok_names }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col"><b>Subdivsion / Sitio</b></th>
                                            <td>{{ entry.sitio_name }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div class="card" style="background-color: #f0f8ff">
                        <div class="card-body">
                            <div class="row">
                                <br />
                                <!-- Table that shows Employee List -->
                                <table style="color: black" class="table table-border table-stripe">
                                    <thead>
                                        <tr style="background-color: #00aaa0; color: white">
                                            <th><b>Household ID</b></th>
                                            <th><b>Family Code</b></th>
                                            <th><b>Relationship</b></th>
                                            <th><b>Family Members</b></th>
                                            <th><b>Birthday</b></th>
                                            <th><b>Gender</b></th>
                                            <th><b>Residence Status</b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="val in lists.first_data" :key="val.id">
                                            <td>{{ val.gad_id }}</td>
                                            <td>{{ val.family_code }}</td>
                                            <td>{{ val.household_names }}</td>
                                            <td style="text-transform: uppercase">
                                                <router-link :to="{ name: 'gad_list.edit', params: { id: val.id } }">
                                                    {{ val.full_name }}
                                                </router-link>
                                            </td>
                                            <td>{{ formatDate(val.birth_date) }}</td>
                                            <td v-if="val.gender">{{ val.gender.gender_name }}</td>
                                            <td v-else></td>
                                            <td v-if="val.no_of_years_in_calamba == new Date().getFullYear()">
                                                Immigrant
                                            </td>
                                            <td v-else>Native</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a
                    class="btn btn-primary"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    House Details
                </a>
                <a
                    class="btn btn-primary"
                    data-toggle="collapse"
                    href="#collapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                >
                    Government Assistance
                </a>
            </div>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <div
                        class="form-group bmd-form-group"
                        :class="{
                            'is-focused': true
                        }"
                    >
                        <label>House Type</label>
                        <input
                            type="text"
                            class="form-control"
                            :value="lists.second_data.house_type.house_type_name || ''"
                        />
                    </div>
                    <div
                        class="form-group bmd-form-group"
                        :class="{
                            'is-focused': true
                        }"
                    >
                        <label>House Make</label>
                        <input
                            type="text"
                            class="form-control"
                            :value="lists.second_data.house_make.house_make_name || ''"
                        />
                    </div>
                    <div
                        class="form-group bmd-form-group"
                        :class="{
                            'is-focused': true
                        }"
                    >
                        <label>House Ownership</label>
                        <input
                            type="text"
                            class="form-control"
                            :value="lists.second_data.house_ownership.house_ownership_name || ''"
                        />
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapseExample1">
                <div class="card card-body">
                    <div
                        class="form-group bmd-form-group"
                        :class="{
                            'is-focused': true
                        }"
                    >
                        <label>Government Assistance</label>
                        <input
                            type="text"
                            class="form-control"
                            value="Agrarian Reform Community Development Program (ARCDP)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableList from '@components/Datatables/DatatableList'
import html2canvas from "html2canvas"
import html2pdf from 'html2pdf.js'

export default {
    components: {
        DatatableList
    },
    data () {
        return {
            data: []
        }
    },
    beforeDestroy () {
        this.resetState()
    },
    computed: {
        ...mapGetters('GadListSingle', ['lists', 'data', 'entry']),
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler () {
                const id = this.$route.params.id;
                const barangay_id = this.$route.params.barangay_id;

                this.resetState()
                this.fetchShowData({ id, barangay_id })
            }
        }
    },
    methods: {
        formatDate (value) {
            if (value) {
                var data = moment(String(value)).format('MMMM DD, YYYY')
            } else {
                var data = ''
            }
            return data;
        },
        ...mapActions('GadListSingle', ['fetchShowData', 'resetState']),
        downloads () {
            html2pdf(this.$refs.content, {
                filename: 'content.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            })
        }
    }
}
</script>
