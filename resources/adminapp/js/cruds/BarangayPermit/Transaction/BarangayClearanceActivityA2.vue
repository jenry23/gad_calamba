<template>
  <section class="pdf-item">
    <div class="card" style="width: 50rem">
      <div class="card-body" style="height: 1093px">
        <img src="/transaction/header.png" class="header-image" />
        <div class="barangay-wrap">
          <div class="row">
                <div class="col-md-3" style="border-right: 3px solid black;font-size: 0.7rem;">
              <b>
                <center style="margin-top: 63%;">
                  <div
                    v-for="sanggunian in data.barangay_sanggunian"
                    :key="sanggunian.id"
                  >
                    <p
                      v-if="sanggunian.barangay_sanggunian_category.id === 6 || sanggunian.barangay_sanggunian_category.id === 5"
                    >
                      <b
                        style="text-transform: uppercase"
                        >{{ sanggunian.barangay_name }}</b
                      ><br />
                      <span style="font-size: 0.6rem;">{{ sanggunian.barangay_sanggunian_category.category_name }}</span>
                    </p>
                    <p v-else>
                      <b style="text-transform: uppercase"
                        >Hon.{{ sanggunian.barangay_name }}</b
                      >
                      <br />
                      <span style="font-size: 0.6rem;">{{ sanggunian.barangay_sanggunian_category.category_name }}</span>
                      <br />
                    </p>
                  </div>
                  <div>
                    <br /><br />
                    <b>Address: </b><br />
                    <p>{{ data.barangay.address}}</p>
                    <b>Hotline No:</b><br />
                    <p>{{ data.barangay.hotline_no}}</p>
                  </div>
                </center>
              </b>
            </div>
               <img
                class="barangay-watermark"
                :src="data.logo"
                style="width: 574px"
                alt=""
              />
            <div class="col-md-9">
              <div class="barangay-content">
                <div class="row">
                  <div class="col-md-3">
                    <img
                      :src="data.logo"
                      class="pull-left"
                      style="width: 96px; margin-right: 18px"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="text-center">
                      <p style="font-weight: 700">
                        <b>REPUBLIC OF THE PHILIPPINES</b>
                        <b>PROVINCE OF LAGUNA</b><br>
                        <b>CITY OF CALAMBA</b>
                      </p>

                      <p
                        style="
                          font-weight: 900;
                          text-transform: uppercase;
                          margin-top: -6%;
                          margin-left: 8px;
                        "
                      >
                        BARANGAY {{ data.barangay.barangay_name }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <img
                      src="/transaction/transparent_logo.png"
                      class="pull-left"
                      style="width: 100px; margin-left: 20px"
                    />
                  </div>
                  <div class="col-md-12 text-center">
                    <h3 style="font-weight: 600; font-size: 1.5rem;margin-top: -12px;">
                      BARANGAY CLEARANCE<br />
                      (Individual/Private/ Gov’t Office to Conduct an Activity)
                    </h3>
                  </div>
                  <div class="container" style="margin-top: -9%">
                    <div class="barangay-body-paragraph">
                      <p class="text-justify">
                        Pursuant to the existing ordinance of this barangay,
                        this CLEARANCE is to certify that the
                        person/office/company, with details appears below,
                        is/are permitted to conduct their activity in our
                        barangay.
                      </p>
                      <div>
                        <b style="margin-right: 67px"
                          >Individual/Office/ Company Name:</b
                        >
                        <b style="margin-right: 24px">:</b
                        ><b><input type="text" style="width: 40%" /></b>
                      </div>
                      <div>
                        <b style="margin-right: 231px">Address</b>
                        <b style="margin-right: 24px">:</b
                        ><b><input type="text" style="width: 40%" /></b>
                      </div>
                      <div>
                        <b style="margin-right: 213px">Contact No</b>
                        <b style="margin-right: 25px">:</b
                        ><b><input type="text" style="width: 40%" /></b>
                      </div>
                      <div>
                        <b style="margin-right: 179px">Name of Activity</b>
                        <b style="margin-right: 25px">:</b
                        ><b><input type="text" style="width: 40%" /></b>
                      </div>

                      <div>
                        <b style="margin-right: 163px">Purpose of Activity</b>
                        <b style="margin-right: 26px">:</b
                        ><b><input type="text" style="width: 40%" /></b>
                      </div>
                      <div>
                        <b style="margin-right: 194px">Inclusive Date</b>
                        <b style="margin-right: 27px">:</b
                        ><b><input type="text" style="width: 40%" /></b>
                      </div>
                      <br />
                      <p class="text-justify">
                        This permit may be revoked at any time when necessary to
                        the public interest for violation of any provision of
                        our existing laws, ordinances, and rules and regulations
                        being enforced in this barangay.
                      </p>
                      <div>
                        <p>Affirmation of the requesting party:</p>
                        <p>
                          _____________________________________ <br />(Signature
                          over Printer Name and Date)
                        </p>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="pull-left">Issued by:</div>
                          <br /><br />
                          <p>
                              <b style="text-transform: uppercase"><u>
                                {{data.barangay_sanggunian[data.barangay_sanggunian.length - 2].barangay_name}}
                              </u></b>
                            <br />
                            Barangay Secretary
                          </p>
                        </div>
                        <div class="col-md-6">
                          <div class="pull-left">Approved by:</div>
                          <br /><br />
                          <p>
                            <b style="text-transform: uppercase"
                              ><u
                                >HON.
                                {{data.barangay_sanggunian[0].barangay_name}}</u
                              > </b
                            ><br />
                            Barangay Chairman
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <img src="/transaction/footer_seal.png" class="bottom-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pdf-item {
  line-height: 1.2 !important;
  margin-top: -32px;
}
.bottom-image {
  margin-top: 4%;
  position: absolute;
  width: 100%;
  margin-left: -20px;
}
.header-image {
  height: 100px;
  width: 100%;
  position: absolute;
  margin-top: -1.9%;
  margin-left: -20px;
}
.vl {
  border-left: 3px solid black;
  height: 780%;
}
.barangay-header-line {
  height: 6px;
  border-width: 0;
  color: gray;
  background-color: gray;
  margin-top: -40px;
}
.barangay-wrap {
  margin-top: 70px;
}
.barangay-watermark {
  margin-top: 25%;
  opacity: 0.2;
  position: absolute;
  margin-left: 25%;
}
.barangay-finger-print {
  margin-right: 10%;
  margin-top: 2%;
}
.barangay-body-paragraph {
  margin-top: 11%;
  font-weight: 500;
}
.form-check .form-check-label span {
  margin-top: -5px;
}
input {
  outline: 0;
  border-width: 0 0 2px;
  opacity: 1;
}
</style>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    data () {
        return {
            date: new Date()
        }
    },
}
</script>
