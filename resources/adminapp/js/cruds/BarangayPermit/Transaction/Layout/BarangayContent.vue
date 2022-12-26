<template>
    <div class="col-md-3">
        <b>
            <center>
                <div v-for="sanggunian in data.barangay_sanggunian" :key="sanggunian.id">
                  {{sanggunian.barangay_sanggunian_category.id}}
                    <p v-if="sanggunian.barangay_sanggunian_category.id !== 6 || sanggunian.barangay_sanggunian_category.id !== 5">
                        <b style="text-transform: uppercase;">Hon.{{ sanggunian.barangay_name }}</b> <br />
                        {{ sanggunian.barangay_sanggunian_category.category_name }}
                    </p>
                    <p v-else>
                        <b style="text-transform: uppercase;">{{ sanggunian.barangay_name }}</b> <br />
                        {{ sanggunian.barangay_sanggunian_category.category_name }}
                    </p>
                </div>
            </center>
        </b>
    </div>
</template>
<style scoped>
.vl {
  border-left: 3px solid black;
  height: 1420%;
  margin-top: -70%;
}
.barangay-header-logo {
  margin-top: -96px;
}
.barangay-header-line {
  height: 6px;
  border-width: 0;
  color: gray;
  background-color: gray;
  margin-top: -40px;
}
.barangay-wrap {
  position: relative;
}
.barangay-watermark {
  margin-top: 25%;
  opacity: 0.2;
  position: absolute;
  margin-left: 10%;
}
.barangay-content {
  position: relative;
}
.barangay-finger-print {
  margin-right: 10%;
  margin-top: 2%;
}
.barangay-body-paragraph {
  margin-top: 11%;
  font-weight: 500;
}
</style>
<script>
export default ({
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
})
</script>
