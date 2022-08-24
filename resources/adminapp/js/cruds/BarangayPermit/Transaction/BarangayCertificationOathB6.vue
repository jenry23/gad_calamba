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
									<div v-for="sanggunian in data.barangay_sanggunian" :key="sanggunian.id">
										<p>
											{{ sanggunian.barangay_name }} <br />
											{{ sanggunian.barangay_category.category_name }}
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
										<h3 style="font-weight: 600; font-size: 1.5rem">OATH OF UNDERTAKING</h3>
									</div>
									<!-- <div class="barangay-finger-print">
										<img src="/transaction/finger_print.png" class="pull-right" />
									</div> -->
									<div class="container" style="margin-top: -7%">
										<div class="barangay-body-paragraph">
											<p class="text-justify">
												I, {{ data.full_name }}, {{ data.age }} years of age, resident of
												{{ data.address }}, availing the benefits of REPUBLIC ACT 11261,
												otherwise known as the FIRST TIME JOBSEEKERS Act of 2019, do hereby
												declare, agree and undertake to abide be bound by the following:
											</p>
											<br />
											<p class="text-justify">
												1. That this first time that I will actively look for a job, and
												therefore requesting that a Barangay Certification be issued in my
												favor to avail the benefits of the law; <br />2. That I am aware that
												the benefits and privilege/s under the said law shall be valid only
												one (1) year from the date that the Barangay Certification is issued;
												<br />3. That I can avail the benefits o the law only once; <br />4.
												That I understand that my personal information shall be included in
												the Roster/List of First Time Jobseekers and will not be used for any
												unlawful purpose; <br />5. That I will inform and/or report to
												Barangay personality, though text other means, of through my
												family/relatives once I get employed; and <br />6. That I am not
												beneficiary of the Job Start Program under R.A No. 10969 and other
												laws that give similar exemptions for the documents or transactions
												exempted under R.A No. 11261 <br />7. That I issued the requested
												certification, I will not use the same in any fraud, neither falsify
												nor help and/or assist in the fabrication of the said certification
												<br />8. That this undertaking is made solely for purpose of obtaining
												a Barangay Certification consistent with the objective of R.A No.
												11261 and not for any purpose <br />9. That I consent to the use of my
												personal information pursuant to the Data Privacy Act and other
												applicable laws, rules and regulation.
											</p>
											<p class="text-justify">
												Given this _____ day of _________ at Barangay
												{{ data.barangay.barangay_name }}, Calamba City Laguna
											</p>
											<br />
											<br />
											<div class="row">
												<div class="col-md-6">
													<div class="pull-left">Witnessed by</div>
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
