<template>
    <div class="container">
        <div class="card" style="width: 63rem">
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
                                <p style="font-weight: 900;text-transform: uppercase;margin-top: -8%;margin-left: 8px;">BARANGAY {{ data.barangay.barangay_name }}</p>
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
            <div class="card-body" style="height: 1020px">
                <div class="barangay-wrap">
                    <div class="row">
                    	<div class="col-md-3">
                            <b>
                                <center>
                                    <div v-for="sanggunian in data.barangay_sanggunian" :key="sanggunian.id">
                                        <p>
                                            <b style="text-transform: uppercase;">Hon.{{ sanggunian.barangay_name }}</b> <br />
                                            {{ sanggunian.barangay_sanggunian_category.category_name }}
                                        </p>
                                    </div>
								<br>
								<div>
								<b>Address: </b><br>
                                <p>{{ data.barangay.address}}</p>
                                <b>Hotline No:</b><br>
                                <p>{{ data.barangay.hotline_no}}</p>
								</div>
                                </center>
                            </b>
                        </div>
                        <div class="col-md-9">
                            <img class="barangay-watermark" :src="data.logo" style="width: 574px" alt="" />
                            <div class="barangay-content">
                                <!-- Props -->
                                <div class="barangay-body">
                                    <div class="text-center">
                                        <h3 style="font-weight: 600; font-size: 1.5rem">
                                            BARANGAY CLEARANCE<br />
                                            (A.1 for Residency)
                                        </h3>
                                    </div>
                                    <!-- <div class="barangay-finger-print">
										<img src="/transaction/finger_print.png" class="pull-right" />
									</div> -->
                                    <div class="container" style="margin-top: -7%">
                                        <div class="barangay-body-paragraph">
                                            <center>
                                                <p class="text-justify">
                                                    This is to certify that person, whose personal details appears
                                                    below, is a bonafide resident of Barangay
                                                    {{ data.barangay.barangay_name }} Calamba City, Laguna.
                                                </p>
                                            </center>
                                            <div class="row">
                                                <div class="col-md-9">
                                                    <div>
                                                        <b style="margin-right: 67px">Name of Resident</b>
                                                        <b style="margin-right: 0px">:</b><b> {{ data.full_name }} </b>
                                                    </div>
                                                    <div>
                                                        <b style="margin-right: 155px">Age</b>
                                                        <b style="margin-right: 0px">:</b><b> {{ data.age }}</b>
                                                    </div>
                                                    <div>
                                                        <b style="margin-right: 108px">Civil Status</b>
                                                        <b style="margin-right: 0px">:</b
                                                        ><b> {{ data.civil_status }}</b>
                                                    </div>
                                                    <div>
                                                        <b style="margin-right: 127px">Address</b>
                                                        <b style="margin-right: 0px">:</b><b> {{ data.address }}</b>
                                                    </div>
                                                    <div>
                                                        <b style="margin-right: 183px"></b>
                                                        <b style="margin-right: 0px">:</b><b> {{ data.address1 }}</b>
                                                    </div>
                                                    <div>
                                                        <b style="margin-right: 69px">Residence Status</b>
                                                        <b style="margin-right: 0px">:</b
                                                        ><b> {{ data.resident_status }} </b>
                                                    </div>
                                                    <div>
                                                        <b style="margin-right: 50px">Brgy Residence Date</b>
                                                        <b style="margin-right: 0x">:</b
                                                        ><b> {{ data.barangay_residence_year }}</b>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
													<v-easy-camera v-model="picture" :startOnMounted="startCamera" ref="camera">
                                                    </v-easy-camera>
														<button class="btn btn-success" @click="startPicture"> Photo </button>
                                                </div>
                                            </div>
                                            <br />
                                            <p class="text-justify">
                                                This certification is being issued upon his/ her request for the following purpose/s:
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
                                                            <td>__________________________</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p>
                                                Given this {{ this.date.toLocaleString('en-us', { month:'long'}) }}  {{this.date.getDate()}}. {{this.date.getFullYear()}} at Barangay
                                                {{ data.barangay.barangay_name }}, Calamba City Laguna
                                            </p>
                                            <br />
                                           	<div class="pull-left">
												<p>Affirmation of the requesting party:</p>
											</div>
											<br />
											<br />
											<div class="row">
												<div class="col-md-6">
													<p>
														__________________________________________ <br />(Signature
														over Printer Name / Date)
													</p>
												</div>
												<div class="col-md-6"></div>
											</div>
											<br />
											<div class="row">
												<div class="col-md-6">
													<div class="pull-left">Issued by:</div>
													<br />
													<br />
													<p>
                                                        <u> <b style="text-transform: uppercase">Mr/Ms. {{data.barangay_sanggunian[data.barangay_sanggunian.length - 2].barangay_name}} </b></u>
                                                        <br>
														Barangay Secretary
													</p>
												</div>
												<div class="col-md-6">
													<div class="pull-left">Approved by:</div>
													<br />
													<br />
													<p>
														<b style="text-transform: uppercase"><u>HON. {{data.barangay_sanggunian[0].barangay_name}}</u>
                                                        </b><br />
														Barangay Chairman
													</p>
												</div>
											</div>
                                            <br />
                                            <div class="row">
                                                <div class="col-md-6">
                                                    C.T.C. No.: _________________ <br />Date Issued:
                                                    _________________<br />
                                                    Place Issued: _________________
                                                </div>
                                                <div class="col-md-6">
                                                    <center>
                                                        <img src="/transaction/finger_print.png" width="70%" height="100%" />
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style="margin-left: 4%;margin-top: 56px;">NOT VALID WITHOUT SEAL <br>
                            THIS CLEARANCE IS VALID ONLY FOR SIX (6) MONTHS FROM THE DATE OF ISSUANCE.
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer">
                <img src="/transaction/footer.png" width="100%" height="20%" />
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
.form-check .form-check-label span {
    margin-top: -5px;
}
</style>
<script>

import EasyCamera from 'easy-vue-camera';

export default ({
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
});

</script>
