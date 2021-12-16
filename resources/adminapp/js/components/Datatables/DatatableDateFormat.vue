<template>
  <div>
    {{ formatDate(row[`${field}`]) }}
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['field','row'],
  methods: {
    formatDate(value) {
        return moment(String(value)).format('DD MMMM YYYY')
    }
}
}
</script>
