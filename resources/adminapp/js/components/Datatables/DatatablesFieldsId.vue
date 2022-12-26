<template>
  <div v-if="row">
    {{row.id}}
    <!-- {{ row[entry.key] }} -->
  </div>
  <div v-else>
  </div>
</template>

<script>
export default {
  props: ['field', 'row'],
}
</script>
