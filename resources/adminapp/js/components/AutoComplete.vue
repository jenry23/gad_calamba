<template>
<div class="col-md-6">
  <vue-suggestion
                  :items="items"
                  v-model="item"
                  placeholder="SEARCH DIARY"
                  :setLabel="setLabel"
                  :itemTemplate="itemTemplate"
                  @changed="inputChange"
                  @click="enterItem"
                  @selected="itemSelected">
  </vue-suggestion>
</div>
</template>
<style>
.vue-suggestion {
  width: 50%;
  max-width: 400px;
  margin: 0 auto;
}
.vue-suggestion .vs__input-group .vs__input {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0.5rem 0.7rem;
  font-size: 0.9rem;
  line-height: 1.25;
  color: #464a4c;
  outline: none;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.vue-suggestion .vs__input-group .vs__input:focus {
  border: 1px solid #023d7b;
}
.vue-suggestion .vs__list {
  width: 100%;
  text-align: left;
  border: none;
  border-top: none;
  max-height: 400px;
  position:relative;
  overflow-y: auto;
  border-bottom: 1px solid #023d7b;
}
.vue-suggestion .vs__list .vs__list-item {
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  border-left: 10px solid #023d7b;
  border-right: 1px solid #023d7b;
}
.vue-suggestion .vs__list .vs__list-item:last-child {
  border-bottom: none;
}
.vue-suggestion .vs__list .vs__list-item:hover {
  background-color: #eee !important;
}
</style>
<script>
import itemTemplate from './itemTemplate.vue';
export default {
  data () {
    return {
      item: '',
      items: [],
      itemTemplate,
    }
  },
  methods: {
    itemSelected (item) {
      this.item = item;
    },
    enterItem(item){
      console.log(item);
        this.$router.push({
           name: 'gad_list.show', params: { id: item.household_no }
        });
      console.log(item);
    },
    setLabel (item) {
      return item.last_name+','+item.first_name+" "+item.middle_name+' - '+item.barangay_name;
    },
    inputChange (text) {
       this.items = [];
          if(text.length > 2){
          axios.get('gad/get-name',{params: {query: text}}).then(response => {
              this.items = response.data.filter(item => item);
          });
      }
    },
  },
};
</script>
