<template>
    <div class="container-fluid">
        <div class="loader" v-if="loader"></div>
        <vue-html2pdf
            :show-layout="false"
            :float-layout="false"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1000"
            filename="content"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="landscape"
            pdf-content-width="1120px"
            @progress="onProgress($event)"
            @hasStartedGeneration="hasStartedGeneration()"
            @hasGenerated="hasGenerated($event)"
            ref="html2Pdf"
        >
            <section slot="pdf-content">
                <form @submit.prevent="submitForm">
                    <div
                        class="modal fade"
                        id="exampleModalCenter"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: #47a44b; margin-left: -0.6px">
                                    <h4 class="modal-title" id="exampleModalLongTitle" style="color: white">
                                        Advance Search
                                    </h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="label">Household</label>
                                            <v-select
                                                name="household"
                                                label="household_name"
                                                :value="entry.household"
                                                :options="lists.household"
                                                @input="updateHousehold"
                                                @focus="focusField('household')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">Gender Preference</label>
                                            <v-select
                                                name="gender_preference"
                                                label="gender_preference_name"
                                                :value="entry.gender_preference"
                                                :options="lists.gender_preference"
                                                @input="updateGenderPreference"
                                                @focus="focusField('gender_preference')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">Civil Status</label>
                                            <v-select
                                                name="civil_status"
                                                label="civil_status_name"
                                                :value="entry.civil_status"
                                                :options="lists.civil_status"
                                                @input="updateCivilStatus"
                                                @focus="focusField('civil_status')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">Highest Educational Attainment</label>
                                            <v-select
                                                name="educational_attaintment"
                                                label="educational_attaintment_name"
                                                :value="entry.educational_attaintment"
                                                :options="lists.educational_attaintment"
                                                @input="updateEducationalAttaintment"
                                                @focus="focusField('educational_attaintment')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">Ethnicity</label>
                                            <v-select
                                                name="ethnicity"
                                                label="ethnicity_name"
                                                :value="entry.ethnicity"
                                                :options="lists.ethnicity"
                                                @input="updateEthnicity"
                                                @focus="focusField('ethnicity')"
                                                @blur="clearFocus"
                                                required
                                            />
											<label>Birthdate</label>
											<datetime-picker
												class="form-control"
												type="text"
												:value="entry.birth_date"
                                                picker="monthyear"
												@input="updateBirthdate"
												@focus="focusField('birthdate')"
												@blur="clearFocus"
											>
											</datetime-picker>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="label">Religion</label>
                                            <v-select
                                                name="religion"
                                                label="religion_name"
                                                :value="entry.religion"
                                                :options="lists.religion"
                                                @input="updateReligion"
                                                @focus="focusField('religion')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">Occupation</label>
                                            <v-select
                                                name="occupation"
                                                label="occupation_name"
                                                :value="entry.occupation"
                                                :options="lists.occupation"
                                                @input="updateOccupation"
                                                @focus="focusField('occupation')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">House Ownership</label>
                                            <v-select
                                                name="house_ownership"
                                                label="house_ownership_name"
                                                :value="entry.house_ownership"
                                                :options="lists.house_ownership"
                                                @input="updateHouseOwnership"
                                                @focus="focusField('house_ownership')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">Maintenance Medicine</label>
                                            <v-select
                                                name="medicine"
                                                label="medicine_name"
                                                :value="entry.medicine"
                                                :options="lists.medicine"
                                                @input="updateMedicine"
                                                @focus="focusField('medicine')"
                                                @blur="clearFocus"
                                                required
                                            />
                                            <label class="label">Pregnancy Age</label>
                                                <input
                                                type="number"
                                                @input="updatePregnancyAge"
                                                :value="entry.pregnancy_age"
                                                class="form-control"
                                                name="age_from"
                                            />
                                            <label>Educational Status</label>
                                                <v-select
                                                    name="educational_status"
                                                    label="educational_status_name"
                                                    :value="entry.educational_status"
                                                    :options="lists.educational_status"
                                                    @input="updateEducationalStatus"
                                                    @focus="focusField('educational_status')"
                                                    @blur="clearFocus"
                                                />
                                        </div>
                                        <br/><br/>
                                        <div class="col-md-4">
                                            <label class="label">First Vaccination</label>
                                            <v-select
                                                name="first_vaccination"
                                                label="vaccination_name"
                                                :value="entry.first_vaccination"
                                                :options="lists.vaccination"
                                                @input="updateFirstVaccination"
                                                @focus="focusField('first_vaccination')"
                                                @blur="clearFocus"
                                                required
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label">Second Vaccination</label>
                                            <v-select
                                                name="second_vaccination"
                                                label="vaccination_name"
                                                :value="entry.second_vaccination"
                                                :options="lists.vaccination"
                                                @input="updateSecondVaccination"
                                                @focus="focusField('second_vaccination')"
                                                @blur="clearFocus"
                                                required
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label">Booster</label>
                                            <v-select
                                                name="booster_vaccination"
                                                label="vaccination_name"
                                                :value="entry.booster_vaccination"
                                                :options="lists.vaccination"
                                                @input="updateBoosterVaccination"
                                                @focus="focusField('booster_vaccination')"
                                                @blur="clearFocus"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-dismiss="modal">
                                        Save Changes
                                    </button>
                                    <!-- <button type="button" class="btn btn-success">Save changes</button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="row">
                                    <div class="col-md-4">
                                        <br />
                                        <img src="/images/cap.jpg" height="108px" width="110px" />
                                        <img
                                            v-if="lists.user && lists.user.barangay"
                                            :src="lists.user.photo[1].url"
                                            height="108px"
                                            width="110px"
                                        />
                                        <img v-else src="/images/admin-logo.png" height="110px" width="110px" />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="text-left">
                                            <h3 style="color: black">
                                                <b style="text-transform: uppercase">City Government</b>
                                                <br />
                                                <div v-if="lists.user && lists.user.barangay">
                                                    <b style="text-transform: uppercase"
                                                        >BARANGAY {{ lists.barangay[0].barangay_name }}</b
                                                    >
                                                    <b style="text-transform: uppercase">Household Profile</b>
                                                </div>
                                                <div v-else style="text-transform: uppercase">
                                                    <b style="text-transform: uppercase">Household Profile</b>
                                                </div>
                                                <br />
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <pie-chart :chart-data="chartData" :options="options"></pie-chart>
                                <div class="row">
                                    <div class="col-md-3"></div>
                                    <div class="col-md-3">
                                        <h3>Male : {{ male }}</h3>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>Female : {{ female }}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header card-header-success">
                                    <h4 class="card-title">Generate Reports</h4>
                                    <p class="crd-category">Advance Search</p>
                                </div>
                                <div class="card-body">
                                    <br />
                                    <div>
                                        <label class="label">Barangay</label>
                                        <v-select
                                            name="barangay"
                                            label="barangay_name"
                                            :value="entry.barangay"
                                            :options="lists.barangay"
                                            @input="updateBarangay"
                                            @focus="focusField('barangay')"
                                            @blur="clearFocus"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label class="label">Purok</label>
                                        <v-select
                                            name="purok"
                                            label="purok_name"
                                            :value="entry.purok"
                                            :options="others.purok"
                                            @input="updatePurok"
                                            @focus="focusField('purok')"
                                            @blur="clearFocus"
                                            :disabled="disabled_purok == 1"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label class="label">Sitio</label>
                                        <v-select
                                            name="sitio"
                                            label="sitio_name"
                                            :value="entry.sitio"
                                            :options="others.sitio"
                                            @input="updateSitio"
                                            @focus="focusField('sitio')"
                                            @blur="clearFocus"
                                            :disabled="disabled_sitio == 1"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label class="label">Sector</label>
                                        <v-select
                                            name="sector"
                                            label="sector_name"
                                            :value="entry.sector"
                                            :options="lists.sector"
                                            @input="updateSector"
                                            @focus="focusField('sector')"
                                            @blur="clearFocus"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label class="label">Gender</label>
                                        <v-select
                                            name="gender"
                                            label="gender_name"
                                            :value="entry.gender"
                                            :options="lists.gender"
                                            @input="updateGender"
                                            @focus="focusField('gender')"
                                            @blur="clearFocus"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label class="label">Age</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input
                                                    type="number"
                                                    placeholder="From"
                                                    @input="updateAgeFrom"
                                                    :value="entry.age_from"
                                                    class="form-control"
                                                    name="age_from"
                                                />
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    type="number"
                                                    placeholder="To"
                                                    :value="entry.age_to"
                                                    @input="updateAgeTo"
                                                    class="form-control"
                                                    name="age_to"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <vue-button-spinner
                                        class="btn-info"
                                        :status="status"
                                        :isLoading="loading"
                                        :disabled="loading"
                                    >
                                        Search
                                    </vue-button-spinner>
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                    >
                                        Advance Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header card-header-success card-header-icon">
                                <div class="card-icon">
                                    <i class="material-icons">assignment</i>
                                </div>
                                <h4 class="card-title">
                                    Table
                                    <strong>Resident List</strong>
                                </h4>
                            </div>

                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-overlay" v-show="loading">
                                            <div class="table-overlay-container">
                                                <material-spinner></material-spinner>
                                                <span>Loading...</span>
                                            </div>
                                        </div>

                                        <button class="btn btn-info" @click="downloads">Download PDF</button>
                                        <datatable
                                            :columns="columns"
                                            :data="data"
                                            :total="total"
                                            :query="query"
                                            :xprops="xprops"
                                            :HeaderSettings="false"
                                            :pageSizeOptions="[10, 25, 50, 100]"
                                        >
                                            <global-search :query="query" class="pull-left" />
                                            <header-settings :columns="columns" class="pull-right" />
                                        </datatable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </vue-html2pdf>
    </div>
</template>
<style scoped>
.loader {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: #eceaea;
    background-image: url('https://04.cadwork.com/wp-content/uploads/2019/08/ajax-loader.gif');
    background-size: 300px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10000000;
    opacity: 0.8;
    filter: alpha(opacity=40);
}
</style>
<script>
import { each } from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import PieChart from "@components/Charts/Pie";
import DatatablesFields from '@components/Datatables/DatatablesFields'
import DatatableDateFormat from '@components/Datatables/DatatableDateFormat'
import DatatablesFieldsId from '@components/Datatables/DatatablesFieldsId'
import DatatablesFieldsMultiple from '@components/Datatables/DatatablesFieldsMultiple'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import TranslatedMultitpleHeader from '@components/Datatables/TranslatedMultitpleHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'
import html2pdf from 'html2pdf.js'
import VueHtml2pdf from 'vue-html2pdf'

export default {
    components: {
        PieChart,
        GlobalSearch,
        DatatablesFields,
        DatatablesFieldsId,
        HeaderSettings,
        VueHtml2pdf,
        TranslatedMultitpleHeader,
        DatatablesFieldsMultiple
    },
    data () {
        return {
            loader: false,
            chartData: null,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                pieceLabel: {
                    render: 'value',
                    precision: 1
                },
                showAllTooltips: true
            },
            male: '',
            female: '',
            status: '',
            activeField: '',
            disabled_purok: 0,
            disabled_sitio: 0,
            barangay: '',
            excel_name: 'gad.xls',
            columns: [
                {
                    title: 'Item No.',
                    field: 'item_no',
                    thComp: TranslatedHeader,
                    sortable: true,
                },
                {
                    title: 'Local ID Number',
                    field: 'gad_id',
                    thComp: TranslatedHeader,
                    sortable: true,
                },
                {
                    title: 'Member Name',
                    field: 'full_name',
                    thComp: TranslatedHeader,
                },
                {
                    title: 'Sex',
                    field: 'gender.gender_name',
                    thComp: TranslatedHeader,
                    tdComp: DatatablesFields,
                    sortable: true,
                },
                {
                    title: 'Barangay',
                    field: 'barangay.barangay_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedHeader,
                },
                {
                    title: 'Birthday',
                    field: 'birth_date',
                    thComp: TranslatedHeader,
                    tdComp: DatatableDateFormat,
                },
                {
                    title: 'Age',
                    field: 'age',
                    thComp: TranslatedHeader,
                },
                {
                    title: 'Civil Status',
                    field: 'civil_status.civil_status_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedHeader,
                    visible: false,
                },
                {
                    title: 'Sector',
                    field: 'sector_name',
                    tdComp: DatatablesFieldsMultiple,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Gender Preference',
                    field: 'gender_preference.gender_preference_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Occupation',
                    field: 'occupation.occupation_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Employer',
                    field: 'employer',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Highest Education',
                    field: 'educational_attaintment.educational_attaintment_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Educational Status',
                    field: 'educational_status.educational_status_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Ethnicity',
                    field: 'ethinicity_name',
                    tdComp: DatatablesFieldsMultiple,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Religion',
                    field: 'religion.religion_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'House Ownership',
                    field: 'house_ownership.house_ownership_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'House Type',
                    field: 'house_type.house_type_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'House Make',
                    field: 'house_make.house_make_name',
                    tdComp: DatatablesFields,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Utilities',
                    field: 'utilities_number',
                    tdComp: DatatablesFieldsMultiple,
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Resident Status',
                    field: 'barangay_resident_status_name',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'First Vaccination Date',
                    field: 'first_date_vaccination',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'First Vaccination Name',
                    field: 'brand1',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Second Vaccination Date',
                    field: 'second_date_vaccination',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Second Vaccination Name',
                    field: 'brand2',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Booster Vaccination Date',
                    field: 'booster_date_vaccination',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
                {
                    title: 'Booster Vaccination Name',
                    field: 'brand3',
                    thComp: TranslatedMultitpleHeader,
                    visible: false,
                },
            ],
            query: { sort: 'id', order: 'asc', limit: 20, s: '' },
            xprops: {
                module: 'ReportsSingle',
                route: 'reports',
                permission_prefix: 'reports_'
            },
            json_fields: {
                'Item No.': 'id',
                'Building No': 'building_no',
                'House No': 'house_no',
                'Household Number': 'household_no',
                'Family Code': 'family_code',
                'Relationship to Head of the Family': 'household.household_name',
                'Last Name': 'last_name',
                'First Name': 'first_name',
                'Middle Name': 'middle_name',
                'Extension Name': 'extension_name',
                'Barangay': 'barangay.barangay_name',
                'Barangay Code/ ID': 'barangay_code',
                'Purok (Code)': 'purok.purok_name',
                'Block/Lot/No. of House/ Street Name ': 'block_lot_house_id',
                'Sitio (Code)': 'sitio.sitio_name',
                'Native Province': 'native_province.province_name',
                'Native City/Municipality': 'native_city.city_name',
                'Valid ID': 'valid_id.name',
                'ID No.': 'id_number',
                'Birthday': 'birth_date',
                'Sex': 'gender.gender_name',
                'Gender Preference': 'gender_preference.gender_preference_name',
                'Civil Status': 'civil_status.civil_status_name',
                'No. of Dependents': 'no_of_dependents',
                'Cellphone Number': 'mobile_no',
                'Landline Number': 'landline_number',
                'Email Address': 'email',
                'Health Condition #1': 'health_condition.0',
                'Health Condition #2': 'health_condition.1',
                'Health Condition #3': 'health_condition.2',
                'Disability Condition #1': 'disability_condition.0',
                'Disability Condition #2': 'disability_condition.1',
                'Disability Condition #2': 'disability_condition.2',
                'Nutritional Status (Ideal, Wasted, Stunted, Obese, Overweight)': 'nutrition_status',
                'Government Assistance No. 01': 'government_assistance_number.0',
                'Government Assistance No. 02': 'government_assistance_number.1',
                'Government Assistance No. 03': 'government_assistance_number.2',
                'Occupation': 'occupation.occupation_name',
                'Employer': 'employer',
                'Work Location (Province)': 'work_location_province.province_name',
                'Work Location (City/Municipality)': 'work_location_city.city_name',
                'Household Monthly Income': 'economic_status',
                'Economic Status': 'monthly_income.monthly_income_name',
                'Highest Educational Attainment': 'educational_attaintment.educational_attaintment_name',
                'Educational Status': 'educational_status.educational_status_name',
                'Last School Attended': 'last_school_attended',
                'Government Educational Assistance #1': 'government_educational_assistance_number.0',
                'Government Educational Assistance #2': 'government_educational_assistance_number.1',
                'Soft Skills #1': 'soft_skills_name.0',
                'Soft Skills #2': 'soft_skills_name.1',
                'Hard Skills #1': 'hard_skills_name.0',
                'Hard Skills #2': 'hard_skills_name.1',
                'Hobbies #1': 'hobbies_name.0',
                'Hobbies #2': 'hobbies_name.1',
                'Sports #1': 'sports_name.0',
                'Sports #2': 'sports_name.1',
                'Ethnicity No. 01': 'ethinicity_name.0',
                'Religion (Catholic:test, Iglesia ni Cristo:test, etc)': 'religion.religion_name',
                'Sector No. 01': 'sector_name.0',
                'Sector No. 02': 'sector_name.1',
                'Province Registered': 'political_province_registered.province_name',
                'City/ Municipality Registered': 'political_city_registered.city_name',
                'Brgy Registered': 'brgy_registered.barangay_name',
                'Precit No.': 'political_precinct_no',
                'House Ownership': 'house_ownership.house_ownership_name',
                'House Type': 'house_type.house_type_name',
                'House Make': 'house_make.house_make_name',
                'No. of Nuclear Family in Household': 'no_nuclear_family_household_id',
                'No. of Bedrooms': 'no_bedrooms_id',
                'No. of  CRs': 'no_cr_id',
                'Utilities No. 01': 'utilities_number.0',
                'Utilities No. 02': 'utilities_number.1',
                'Utilities No. 03': 'utilities_number.2',
                'Utilities No. 04': 'utilities_number.3',
                'Appliances No. 01': 'appliance_number.0',
                'Appliances No. 02': 'appliance_number.1',
                'Appliances No. 03': 'appliance_number.2',
                'Appliances No. 04': 'appliance_number.3',
                'Vehicles No. 01': 'vehicle_name.0',
                'Vehicles No. 02': 'vehicle_name.1',
                'Full Immunization (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)': 'full_immunization',
                'Covid 19 Test (No COVID Test, Tested Positive for COVID19, Tested Negative for COVID19)': 'covid_19_test',
                'Date of 1st Dosage Covid 19 Vaccination': 'first_date_vaccination',
                'BRAND 1': 'brand1',
                'Date of 2nd Dosage Covid 19 Vaccination': 'second_date_vaccination',
                'BRAND 2': 'brand2',
                'Date of Covid Booster': 'booster_date_vaccination',
                'BRAND 3': 'brand3',
                'Pregnancy Age': 'pregnancy_age',
                'With Prenatal Check up (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)': 'prental_checkup',
                'With Postnatal Check up (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)': 'postnatal_checkup',
                'Maintaining  Medicine No. 01 ': 'maintaining_medicine_name.0',
                'Maintaining Medicine No. 01 ': 'maintaining_medicine_name.1',
                'Organizations Involved No. 01': 'organization_name.0',
                'Organizations  Involved No. 02': 'organization_name.1',
                'Barangay Residence Year': 'barangay_residence_year',
                'Calamba Residence Year': 'calamba_residence_year',
                'REMARKS': 'remarks',
            },
            json_data: [],
            json_meta: [
                [
                    {
                        key: "charset",
                        value: "utf-8",
                    },
                ],
            ],
            print_data: false,
        }
    },
    computed: {
        ...mapGetters('ReportsSingle', ['data', 'total', 'entry', 'loading', 'lists', 'others'])
    },
    mounted () {
        this.fetchCreateData()
    },
    watch: {
        query: {
            handler (query) {
                this.setQuery(query)
                this.searchData()
            },
            deep: true
        }
    },
    beforeDestroy () {
        this.resetState()
    },
    methods: {
        ...mapActions('ReportsSingle', [
            'searchData',
            'fetchCreateData',
            'resetState',
            'setBarangay',
            'setPurok',
            'setSitio',
            'setSector',
            'setQuery',
            'setAgeTo',
            'setGender',
            'setAgeFrom',
            'setHousehold',
            'setGenderPreference',
            'setCivilStatus',
            'setEducationalAttaintment',
            'setEthnicity',
            'setReligion',
            'setOccupation',
            'setHouseOwnership',
            'setFirstVaccination',
            'setSecondVaccination',
            'setBoosterVaccination',
            'setMedicine',
            'setPregnancyAge',
            'setBirthdate',
            'setEducationalStatus',
        ]),

        async fetchData () {
            const response = await axios.get('reports/print-excel', { params: this.entry });
            return response.data.data;
        },

        downloads () {
            var baseUrl = window.location.origin

			let data1 = this.entry
			let final_data = {}
				each(data1, (value, key) => {
                if (['first_vaccination', 'second_vaccination', 'booster_vaccination'].includes(key)) {
                    final_data[key] = value.vaccination_name
                }
				if (value) {
					final_data[key] = value.id
				}
			})

            let url =
                baseUrl +
                `/api/v1/reports/generate-pdf/${JSON.stringify(final_data)}`;

            window.open(url, '_blank');
        },

        startDownload () {
            let today = new Date().toLocaleDateString()
            this.excel_name = `GAD-REPORT ${this.barangay.id}-${this.barangay.barangay_name} ${today}.xls`;
            this.loader = true
        },

        finishDownload () {
            this.loader = false;
        },

        updateBarangay (value) {
            this.setBarangay(value)
            this.barangay = value;
            this.disabled_sitio = 0
            this.disabled_purok = 0
            this.setSitio();
            this.setPurok();
        },
        updatePurok (value) {
            this.setPurok(value);
            if (value) {
                this.disabled_sitio = 1
            }
        },
        updateSitio (value) {
            this.setSitio(value)
            if (value) {
                this.disabled_purok = 1
            }
        },
        updateGender (value) {
            this.setGender(value);
        },
        updateSector (value) {
            this.setSector(value)
        },
        updateHousehold (value) {
            this.setHousehold(value)
        },
        updateGenderPreference (value) {
            this.setGenderPreference(value)
        },
        updateCivilStatus (value) {
            this.setCivilStatus(value)
        },
        updateEducationalAttaintment (value) {
            this.setEducationalAttaintment(value)
        },
        updateEthnicity (value) {
            this.setEthnicity(value)
        },
        updateReligion (value) {
            this.setReligion(value)
        },
        updateOccupation (value) {
            this.setOccupation(value)
        },
        updateHouseOwnership (value) {
            this.setHouseOwnership(value)
        },
        updateFirstVaccination (value) {
            this.setFirstVaccination(value)
        },
        updateSecondVaccination (value) {
            this.setSecondVaccination(value)
        },
        updateBoosterVaccination (value) {
            this.setBoosterVaccination(value)
        },
        updateMedicine (value) {
            this.setMedicine(value)
        },
        updateAgeTo (e) {
            this.setAgeTo(e.target.value)
        },
        updatePregnancyAge (e) {
            this.setPregnancyAge(e.target.value)
        },
        updateAgeFrom (e) {
            this.setAgeFrom(e.target.value)
        },
        updateEducationalStatus (value) {
            this.setEducationalStatus(value)
        },
        updateBirthdate (e) {
            this.setBirthdate(e.target.value)
        },
        submitForm () {
            this.searchData()
                .then((response) => {
                    var data_array = response.data.meta;
                    var female = data_array['Female'];
                    var male = data_array['Male'];
                    this.male = male;
                    this.female = female;
                    this.chartData = {
                        labels: ['Female', 'Male'],
                        datasets: [
                            {
                                backgroundColor: ["#993366", "#0099CC"],
                                data: [female, male]
                            }
                        ]
                    }
                })
                .catch(error => {
                    this.status = 'failed'
                    _.delay(() => {
                        this.status = ''
                    }, 3000)
                })
        },
        focusField (name) {
            this.activeField = name
        },
        clearFocus () {
            this.activeField = ''
        }
    }
}
</script>
