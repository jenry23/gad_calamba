<template>
  <div class="dt-action-container">
    <!-- v-if="$can(xprops.permission_prefix + 'show')" -->
    <router-link
      :to="{ name: xprops.route + '.show', params: { id: row.id } }"
      class="btn btn-just-icon btn-round btn-link text-azure"
    >
      <i class="material-icons">remove_red_eye</i>
    </router-link>
    <!-- v-if="$can(xprops.permission_prefix + 'edit')" -->
    <router-link
      class="btn btn-just-icon btn-round btn-link text-success"
      :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
    >
      <i class="material-icons">edit</i>
    </router-link>
    <!-- v-if="$can(xprops.permission_prefix + 'delete')" -->
    <a
      href="#"
      class="btn btn-just-icon btn-round btn-link text-rose"
      @click.prevent="destroyData(row.id)"
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
    destroyData(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You want to Archived!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Archived',
        confirmButtonColor: '#dd4b39',
        focusCancel: true,
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch(this.xprops.module + '/destroyData', id)
            .then(result => {
              console.log('test');
              this.$eventHub.$emit('archived-success')
            })
        }
      })
    }
  }
}
</script>
