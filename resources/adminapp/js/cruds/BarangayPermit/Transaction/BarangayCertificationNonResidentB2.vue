<template>
	<div class="container">
		<div class="card" style="width: 63rem">
			<div class="barangay-header">
				<img src="/transaction/header.png" width="100%" height="20%" />
				<div class="row barangay-header-logo">
					<div class="col-md-3">
						<img
							:src="data.logo"
							class="pull-right"
							style="width: 165px; margin-top: -25%; margin-right: 18px"
						/>
						<br />
					</div>
					<div class="col-md-2"><div class="vl"></div></div>
					<div class="col-md-4">
						<div class="text-center" style="margin-top: -19%">
							<p style="font-weight: 700">
								<b>REPUBLIC OF THE PHILIPPINES</b>
								<br />
								<b>PROVINCE OF LAGUNA</b>
								<br />
								<b>CITY OF CALAMBA</b>
								<br />
								<!-- DATA -->
								<b>BARANGAY {{ data.barangay.barangay_name }}</b>
							</p>
						</div>
					</div>
					<div class="col-md-2">
						<img
							src="/transaction/transparent_logo.png"
							class="pull-left"
							style="width: 120px; margin-top: -50%; margin-left: 20px"
						/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col"></div>
				<div class="col-md-8">
					<hr class="barangay-header-line" />
				</div>
			</div>
			<div class="card-body" style="height: 1020px">
				<div class="barangay-wrap">
					<div class="row">
						<div class="col-md-3">
							<br />
							<b>
								<center>
									<p>HON. LEONARDO P. PIAMONTE <br />Barangay Chairman</p>
									<br />
									<p>SANGGUNIANG BARANGAY</p>
									<br />
									<p>
										Rowena S, Naredo <br />
										Barangay Councilor
									</p>
									<p>
										Zosimo A. Piamonte<br />
										Barangay Councilor
									</p>
									<p>
										Leonisa G. Rimas<br />
										Barangay Councilor
									</p>
									<p>
										Oscar R. Limpiada Sr.<br />
										Barangay Councilor
									</p>
									<p>
										Jeffrey R. Manzano<br />
										Barangay Councilor
									</p>
									<p>
										Charles Andy R. Desepida<br />
										SK Chairman
									</p>
									<p>
										ROSENDO O. NAREDO<br />
										Barangay Secretary
									</p>
									<p>
										JENALYN C. SERGIO<br />
										Barangay Treasurer
									</p>
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
												individual/s is/are not residents of Barangay ___________, Calamba
												City, Laguna
											</p>
											<div>
												<b style="margin-right: 67px"></b>
												<b style="margin-right: 23px">:</b
												><b>______(to be encoded)__________________________ </b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b>_______________________________________________ </b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b>_______________________________________________ </b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b>_______________________________________________ </b>
											</div>
											<div>
												<b style="margin-right: 68px"></b>
												<b style="margin-right: 24px">:</b
												><b>_______________________________________________ </b>
											</div>
											<br />
											<p class="text-justify">
												This certification is being issued for whatever legal purposes this
												may best serve.
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
<style>
.vl {
	border-left: 3px solid black;
	height: 1150%;
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
