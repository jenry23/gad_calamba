<template>
  <div>
    <span>
    <router-link
      :to="{ name: 'gad_list.show', params: {  barangay_id: item.barangay_id , id: item.household_no} }"
      style="text-transform: uppercase;"
      class="form-control"
      :event="['click', 'keydown.enter']"
    >
    {{ item.last_name }},{{ item.first_name }} {{ item.middle_name }} - {{item.barangay_name}}
    </router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
  }
}
</script>
