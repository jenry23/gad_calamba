<template>
  <section class="pdf-item">
    <div class="card" style="width: 50rem">
      <div class="card-body" style="height: 1093px">
        <img src="/transaction/header.png" class="header-image" />
        <div class="barangay-wrap">
          <div class="row">
                <div class="col-md-3" style="border-right: 3px solid black;font-size: 0.7rem;">
              <b>
                <center>
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
                        <b>PROVINCE OF LAGUNA</b>
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
                </div>
                <div class="col-md-12 text-center">
                  <h3 style="font-weight: 600; font-size: 1.5rem">
                    BARANGAY CERTIFICATION <br />
                    (Residency)
                  </h3>
                </div>
                <div class="container" style="margin-top: -7%">
                  <div class="barangay-body-paragraph">
                    <p class="text-justify">
                      This is to certify that person, whose personal details
                      appears below, is a bonafide resident of Barangay
                      {{ data.barangay.barangay_name }} Calamba City, Laguna.
                    </p>
                    <div class="row">
                      <div class="col-md-9">
                        <div>
                          <b style="margin-right: 67px">Name of Resident</b>
                          <b style="margin-right: 0px">:</b
                          ><b>{{ data.full_name }} </b>
                        </div>
                        <div>
                          <b style="margin-right: 155px">Age</b>
                          <b style="margin-right: 0px">:</b
                          ><b> {{ data.age }}</b>
                        </div>
                        <div>
                          <b style="margin-right: 108px">Civil Status</b>
                          <b style="margin-right: 0px">:</b
                          ><b> {{ data.civil_status }}</b>
                        </div>
                        <div>
                          <b style="margin-right: 127px">Address</b>
                          <b style="margin-right: 0px">:</b
                          ><b> {{ data.address }}</b>
                        </div>
                        <div>
                          <b style="margin-right: 183px"></b>
                          <b style="margin-right: 0px">:</b
                          ><b> {{ data.address1 }}</b>
                        </div>
                        <div>
                          <b style="margin-right: 69px">Residence Status</b>
                          <b style="margin-right: 0px">:</b
                          ><b>{{ data.resident_status }} </b>
                        </div>
                        <div>
                          <b style="margin-right: 50px">Brgy Residence Date</b>
                          <b style="margin-right: 0px">:</b
                          ><b> {{ data.barangay_residence_year }}</b>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <v-easy-camera
                          v-model="picture"
                          :startOnMounted="startCamera"
                          ref="camera"
                        >
                        </v-easy-camera>
                        <button class="btn btn-success" @click="startPicture">
                          Photo
                        </button>
                      </div>
                    </div>
                    <br />
                    <p class="text-justify">
                      This clearance is being issued upon his/her request for
                      the following purpose/s.
                    </p>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td style="width: 50%">Employment Purposes</td>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>School / SSS / GSIS Reference</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Business Requirement</td>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Fire Arms / Drivers License</td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Bank Requirement</td>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Electric / Water Connection</td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>NBI Requirement</td>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Senior Citizens Requirement</td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Medical Aid Requirement</td>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Overseas / Travel Requirement</td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Other Requirements (Specify):</td>
                            <td></td>
                            <td>
                              <input
                                type="text"
                                style="padding-right: 74px; opacity: 1"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="mt-3">
                      Given this
                      {{ this.date.toLocaleString('en-us', { month:'long'}) }}
                      {{this.date.getDate()}}, {{this.date.getFullYear()}} at
                      Barangay {{ data.barangay.barangay_name }}, Calamba City
                      Laguna.
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
                        <br />
                        <p>
                          <u>
                            <b style="text-transform: uppercase"
                              >{{data.barangay_sanggunian[data.barangay_sanggunian.length - 2].barangay_name}}
                            </b></u
                          >
                          <br />
                          Barangay Secretary
                        </p>
                      </div>
                      <div class="col-md-6">
                        <div class="pull-left">Approved by:</div>
                        <br />
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
                    <div class="row">
                      <div class="col-md-6">
                        C.T.C. No.<span style="margin-left: 24px"></span>:
                        _________________ <br />Date Issued
                        <span style="margin-left: 9px"></span> :
                        _________________<br />
                        Place Issued <span style="margin-left: 4px"></span> :
                        _________________
                      </div>
                      <div class="col-md-6">
                        <center>
                          <img src="/transaction/finger_print.png" />
                        </center>
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
  margin-top: -2%;
  position: absolute;
  height: 10%;
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
import EasyCamera from 'easy-vue-camera';

export default {
    components: {
        'v-easy-camera': EasyCamera
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    data () {
        return {
            picture: '',
            startCamera: true,
            date: new Date()
        }
    },
    methods: {
        startPicture () {
            this.$refs.camera.snap();
        }
    }
}
</script>
