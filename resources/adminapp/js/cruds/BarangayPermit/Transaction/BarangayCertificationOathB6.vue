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
            <div class="col-md-9">
              <img
                class="barangay-watermark"
                :src="data.logo"
                style="width: 574px"
                alt=""
              />
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
                    <h3 style="font-weight: 600; font-size: 1.5rem; margin-top: -12px;">
                      OATH OF UNDERTAKING
                    </h3>
                  </div>
                  <!-- <div class="barangay-finger-print">
										<img src="/transaction/finger_print.png" class="pull-right" />
									</div> -->
                  <div class="container" style="margin-top: -9%">
                    <div class="barangay-body-paragraph">
                      <p class="text-justify">
                        I, {{ data.full_name }}, {{ data.age }} of age, resident
                        of {{ data.address }}, availing the benefits of REPUBLIC
                        ACT 11261, otherwise known as the FIRST TIME JOBSEEKERS
                        Act of 2019, do hereby declare, agree and undertake to
                        abide be bound by the following:
                      </p>
                      <br />
                      <p class="text-justify">
                        1.That this first time that I will actively look for a
                        job, and therefore requesting that a Barangay
                        Certification be issued in my favor to avail the
                        benefits of the law; <br />2.That I am aware that the
                        benefits and privilege/s under the said law shall be
                        valid only one (1) year from the date that the Barangay
                        Certification is issued; <br />3.That I can avail the
                        benefits o the law only once; <br />4.That I understand
                        that my personal information shall be included in the
                        Roster/List of First Time Jobseekers and will not be
                        used for any unlawful purpose; <br />5.That I will
                        inform and/or report to Barangay personality, though
                        text other means, of through my family/relatives once I
                        get employed; and <br />6.That I am not beneficiary of
                        the Job Start Program under R.A No. 10969 and other laws
                        that give similar exemptions for the documents or
                        transactions exempted under R.A No. 11261 <br />7.That I
                        issued the requested certification, I will not use the
                        same in any fraud, neither falsify nor help and/or
                        assist in the fabrication of the said certification
                        <br />8.That this undertaking is made solely for purpose
                        of obtaining a Barangay Certification consistent with
                        the objective of R.A No. 11261 and not for any purpose
                        <br />9.That I consent to the use of my personal
                        information pursuant to the Data Privacy Act and other
                        applicable laws, rules and regulation.
                      </p>
                      <p class="text-justify">
                        Given this
                        {{ this.date.toLocaleString('en-us', { month:'long'}) }}
                        {{this.date.getDate()}}, {{this.date.getFullYear()}} at
                        Barangay {{ data.barangay.barangay_name }}, Calamba City
                        Laguna
                      </p>
                      <br />
                      <br />
                      <div class="row">
                        <div class="col-md-6">
                          <div class="pull-left">Witnessed by</div>
                          <br />
                          <br />
                          <p>

                              <b style="text-transform: uppercase"> <u>
                                {{data.barangay_sanggunian[data.barangay_sanggunian.length - 2].barangay_name}}
                              </u></b>
                            <br />
                            Barangay Secretary
                          </p>
                        </div>
                        <div class="col-md-6">
                          <div class="pull-left">Approved by:</div>
                          <br />
                          <br />
                          <p>
                            <b style="text-transform: uppercase"
                              ><u
                                >HON.
                                {{data.barangay_sanggunian[0].barangay_name}}</u
                              > </b
                            ><br />
                            Punong Barangay
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
