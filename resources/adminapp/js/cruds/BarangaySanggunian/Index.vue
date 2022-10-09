<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">
                Table
              <strong>Barangay Sanggunian</strong>
            </h4>
          </div>
          <div class="card-body">
            <router-link
              class="btn btn-primary"
              :to="{ name: xprops.route + '.create' }"
            >
              <i class="material-icons">
                add
              </i>
              Add
            </router-link>
            <button
              type="button"
              class="btn btn-default"
              @click="fetchIndexData"
              :disabled="loading"
              :class="{ disabled: loading }"
            >
              <i class="material-icons" :class="{ 'fa-spin': loading }">
                refresh
              </i>
              Refresh
            </button>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableActions from '@components/Datatables/DatatableActions'
import DatatablesFields from '@components/Datatables/DatatablesFields'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'

export default {
  components: {
    GlobalSearch,
    DatatablesFields,
    HeaderSettings
  },
  data() {
    return {
      columns: [
        {
          title: 'ID',
          field: 'id',
          thComp: TranslatedHeader,
          sortable: true,
        },
        {
          title: 'Name',
          field: 'barangay_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'Barangay Name',
          field: 'barangay.barangay_name',
          thComp: TranslatedHeader,
          tdComp: DatatablesFields
        },
        {
          title: 'Barangay Sanggunian Category',
          field: 'barangay_sanggunian_category.category_name',
          thComp: TranslatedHeader,
          tdComp: DatatablesFields
        },
        {
          title: 'Actions',
          thComp: TranslatedHeader,
          tdComp: DatatableActions,
          visible: true,
          thClass: 'text-right',
          tdClass: 'text-right td-actions',
        }
      ],
      query: { sort: 'id', order: 'asc', limit: 20, s: '' },
      xprops: {
        module: 'BarangaySanggunianIndex',
        route: 'barangay_sanggunian',
        permission_prefix: 'barangay_sanggunian_'
      }
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('BarangaySanggunianIndex', ['data', 'total', 'loading'])
  },
  watch: {
    query: {
      handler(query) {
        this.setQuery(query)
        this.fetchIndexData()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('BarangaySanggunianIndex', [
      'fetchIndexData',
      'setQuery',
      'resetState'
    ])
  }
}
</script>
