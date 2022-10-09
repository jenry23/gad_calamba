<template>
    <div class="container-fluid">
        <form @submit.prevent="submitForm">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-primary card-header-icon">
                            <div class="card-icon">
                                <i class="material-icons">add</i>
                            </div>
                            <h4 class="card-title">
                                Create
                                <strong>Purok</strong>
                            </h4>
                        </div>
                        <div class="card-body">
                            <back-button></back-button>
                        </div>
                        <div class="card-body">
                            <bootstrap-alert />
                            <div class="row">
                                <div class="col-md-12">
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                                            'has-items': entry.barangay_name,
                                            'is-focused': activeField == 'barangay_name'
                                        }"
                                    >
                                        <label class="bmd-label-floating required">Name</label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="entry.barangay_name"
                                            @input="updateBarangayName"
                                            @focus="focusField('barangay_name')"
                                            @blur="clearFocus"
                                            required
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                                            'has-items': entry.barangay,
                                            'is-focused': activeField == 'barangay'
                                        }"
                                    >
                                        <label class="bmd-label-floating required">Barangay Name</label>
                                        <v-select
                                            name="barangay"
                                            label="barangay_name"
                                            :key="'barangay-field'"
                                            :value="entry.barangay"
                                            :options="lists.barangay"
                                            @input="updateBarangayID"
                                            @focus="focusField('barangay')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                                            'has-items': entry.barangay_sanggunian_category,
                                            'is-focused': activeField == 'barangay_sanggunian_category'
                                        }"
                                    >
                                        <label class="bmd-label-floating required"
                                            >Barangay Sanggunian Category</label
                                        >
                                        <v-select
                                            name="barangay_sanggunian_category"
                                            label="category_name"
                                            :key="'barangay_sanggunian_category-field'"
                                            :value="entry.barangay_sanggunian_category"
                                            :options="lists.barangay_sanggunian_category"
                                            @input="updateBarangayCategoryID"
                                            @focus="focusField('barangay_sanggunian_category')"
                                            @blur="clearFocus"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <vue-button-spinner
                                class="btn-primary"
                                :status="status"
                                :isLoading="loading"
                                :disabled="loading"
                            >
                                {{ $t('global.save') }}
                            </vue-button-spinner>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            status: '',
            activeField: ''
        }
    },
    computed: {
        ...mapGetters('BarangaySanggunianSingle', ['entry', 'loading', 'lists'])
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler () {
                this.resetState()
                this.fetchEditData(this.$route.params.id)
            }
        }
    },
    beforeDestroy () {
        this.resetState()
    },
    methods: {
        ...mapActions('BarangaySanggunianSingle', ['updateData', 'fetchEditData', 'resetState', 'setBarangayName', 'setBarangayID', 'setBarangayCategoryID']),
        updateBarangayName (e) {
            this.setBarangayName(e.target.value)
        },
        updateBarangayID (value) {
            this.setBarangayID(value)
        },
        updateBarangayCategoryID (value) {
            this.setBarangayCategoryID(value)
        },
        submitForm () {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'barangay_sanggunian.index' })
                    this.$eventHub.$emit('create-success')
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
