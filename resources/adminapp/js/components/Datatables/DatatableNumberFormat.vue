<template>
  <div>
    {{ numberWithCommas(row[`${field}`]) }}
  </div>
</template>

<script>
export default {
  props: ['field','row'],
  methods: {
      numberWithCommas(value) {
        if(value){
          var amount=parseFloat(value).toFixed(2);
          var formattedString= amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }else{
          var formattedString = '0.00';  
        }

      return formattedString;
    },
}
}
</script>
