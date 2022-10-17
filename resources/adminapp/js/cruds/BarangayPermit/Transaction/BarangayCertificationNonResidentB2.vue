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
											B A R A N G A Y C E R T I F I C A T I O N<br />
											(B.2 for Non-Resident Individual/s)
										</h3>
									</div>
									<!-- <div class="barangay-finger-print">
										<img src="/transaction/finger_print.png" class="pull-right" />
									</div> -->
									<div class="container" style="margin-top: -7%">
										<div class="barangay-body-paragraph">
											<p class="text-justify">
												This is to certify that upon verification, the below listed
												individual/s is/are not residents of Barangay {{ data.barangay.barangay_name }}, Calamba
												City, Laguna
											</p>
											<div>
												<b style="margin-right: 67px"></b>
												<b style="margin-right: 23px">:</b
												><b><input type="text" /></b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b><input type="text" /> </b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b><input type="text" /> </b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b><input type="text" /> </b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b><input type="text" /> </b>
											</div>
											<br />
											<p class="text-justify">
												This certification is being issued for whatever legal purposes this
												may best serve.
											</p>
											<p class="text-justify">
												Given this {{ this.date.toLocaleString('en-us', { month:'long'}) }}  {{this.date.getDate()}}. {{this.date.getFullYear()}} at Barangay
												{{ data.barangay.barangay_name }}, Calamba City Laguna
											</p>
											<div class="pull-left">
												<h4><b>Affirmation of the requesting party:</b></h4>
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
													<div class="pull-left">Issued By:</div>
													<br />
													<br />
													<p>
                                                        <u> <b style="text-transform: uppercase">Mr/Ms. {{data.barangay_sanggunian[data.barangay_sanggunian.length - 2].barangay_name}} </b></u>
                                                        <br>
														Barangay Secretary
													</p>
												</div>
												<div class="col-md-6">
													<div class="pull-left">Approved By:</div>
													<br />
													<br />
													<p>
														<b style="text-transform: uppercase"><u>HON. {{data.barangay_sanggunian[0].barangay_name}}</u>
                                                        </b><br />
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
