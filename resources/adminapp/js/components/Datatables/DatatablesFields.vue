<template>
  <div v-if="row[entry.key]">
    {{ row[entry.key][entry.field] }}
  </div>
  <div v-else>
  </div>
</template>

<script>
export default {
  props: ['field', 'row'],
  computed: {
    entry() {
      let s = _.split(this.field, '.')
      return {
        key: s[0],
        field: s[1]
      }
    }
  }
}
</script>

