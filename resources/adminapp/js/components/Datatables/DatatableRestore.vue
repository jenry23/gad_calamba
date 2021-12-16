<template>
  <div class="dt-action-container">
    <a
      href="#"
      class="btn btn-just-icon btn-round btn-link text-rose"
      @click.prevent="destroyData(row.id)"
      type="button"
    >
      <i class="material-icons">restore</i>
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
    destroyData(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You want to restore this data!",
        type: 'info',
        showCancelButton: true,
        confirmButtonText: 'Restore',
        confirmButtonColor: '#00FFFF',
        focusCancel: true,
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch(this.xprops.module + '/restoreData', id)
            .then(result => {
              this.$router.push({ name: this.xprops.route + '.index' })
              this.$eventHub.$emit('restored-success')
            })
        }
      })
    }
  }
}
</script>
