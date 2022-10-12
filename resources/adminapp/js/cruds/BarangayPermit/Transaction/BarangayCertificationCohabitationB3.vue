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
                            <center>
                                <b>
                                    <p style="margin-top: -30%; font-weight: 600">
                                        SANGGUNIANG BARANGAY<br />
                                        Barangay {{ data.barangay.barangay_name }}
                                    </p>
                                </b>
                            </center>
                            <br />
                            <b>
                                <center>
                                    <div v-for="sanggunian in data.barangay_sanggunian" :key="sanggunian.id">
                                        <p>
                                            <b>Hon.{{ sanggunian.barangay_name }}</b> <br />
                                            {{ sanggunian.barangay_sanggunian_category.category_name }}
                                        </p>
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
											(B.3 Cohabitation)
										</h3>
									</div>
									<!-- <div class="barangay-finger-print">
										<img src="/transaction/finger_print.png" class="pull-right" />
									</div> -->
									<div class="container" style="margin-top: -7%">
										<div class="barangay-body-paragraph">
											<p class="text-justify">
												This is to certify that ______________________________, of legal age,
												is a bonafide and _____(residence status) ___ resident of this
												barangay. He is residing at ____(purok/ subdivision/ block lot) _ ,
												Barangay __________, Calamba City, Laguna.
											</p>
											<br />
											<p class="text-justify">
												This is to certify further that the aforementioned person is the
												live-in partner of _____(to be encoded) ___. They are living together
												since _____(to be encoded) ___.
											</p>
											<p class="text-justify">
												his certification is being issued for whatever legal purposes this may
												best serve.
											</p>
											<p class="text-justify">
												Given this _____ day of _________ at Barangay
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
														_____________________________ <br />
														Barangay Secretary
													</p>
												</div>
												<div class="col-md-6">
													<div class="pull-left">Approved By:</div>
													<br />
													<br />
													<p>
														_____________________________ <br />
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
	}

</script>
