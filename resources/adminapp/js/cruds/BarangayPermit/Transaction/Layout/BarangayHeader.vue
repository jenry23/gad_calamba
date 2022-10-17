<template>
       <div class="barangay-header">
                <img src="/transaction/header.png" width="100%" height="50%" />
                <div class="row barangay-header-logo">
                    <div class="col-md-3"></div>
                    <div class="col-md-1"><div class="vl"></div></div>
                    <div class="col-md-2">
                        <img
                            :src="data.logo"
                            class="pull-left"
                            style="width: 120px; margin-top: -27%; margin-right: 18px"
                        />
                        <br />
                    </div>
                    <div class="col-md-3">
                        <div class="text-center" style="margin-top: -10%">
                            <p style="font-weight: 700">
                                <b>REPUBLIC OF THE PHILIPPINES</b>
                                <br />
                                <b>PROVINCE OF LAGUNA</b>
                                <br />
                                <b>CITY OF CALAMBA</b>
                                <br />
                                <!-- DATA -->
                                <b style="font-weight: 900;text-transform: uppercase;margin-top: -8%;margin-left: 8px;">BARANGAY {{ data.barangay.barangay_name }}</b>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            src="/transaction/transparent_logo.png"
                            class="pull-left"
                            style="width: 120px; margin-top: -28%; margin-left: 20px"
                        />
                    </div>
                </div>
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
