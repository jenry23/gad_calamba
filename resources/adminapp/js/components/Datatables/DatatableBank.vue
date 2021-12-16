<template>
  <div class="dt-action-container">

    <router-link
      class="btn btn-just-icon btn-round btn-link text-success"
      v-if="row.journal_type == 'SM'"
      :to="{ name: xprops.route + '.spend-money', params: { id: row.journal_number, journal_type:row.journal_type } }"
    >
       <i class="material-icons">edit</i>
    </router-link>

    <router-link
      class="btn btn-just-icon btn-round btn-link text-success"
      v-if="row.journal_type == 'RM'"
      :to="{ name: xprops.route + '.receive-money', params: { id: row.journal_number, journal_type:row.journal_type } }"
    >
       <i class="material-icons">edit</i>
    </router-link>

      <router-link
      class="btn btn-just-icon btn-round btn-link text-success"
      v-if="row.journal_type == 'TM'"
      :to="{ name: xprops.route + '.transfer-money', params: { id: row.journal_number, journal_type:row.journal_type } }"
    >
       <i class="material-icons">edit</i>
    </router-link>
    <a
      href="#"
      class="btn btn-just-icon btn-round btn-link text-rose"
      v-if="$can(xprops.permission_prefix + 'delete')"
      @click.prevent="destroyData(row.journal_number)"
      type="button"
    >
      <i class="material-icons">delete</i>
    </a>
  </div>
</template>

<script>
export default {
  props: ['row', 'xprops'],
  data() {
    return {
      // Code...
    }
  },
  created() {
    // Code...
  },
  methods: {
    destroyData(journal_number) {
      this.$swal({
        title: 'Are you sure?',
        text: "You want to Delete!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: '#dd4b39',
        focusCancel: true,
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch(this.xprops.module + '/destroyData', journal_number)
            .then(result => {
              this.$eventHub.$emit('delete-success')
            })
        }
      })
    }
  }
}
</script>
