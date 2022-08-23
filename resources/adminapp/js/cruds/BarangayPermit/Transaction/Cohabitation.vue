<template>
	<div class="container">
		<div class="card" style="width: 63rem">
			<div class="barangay-header">
				<img src="/transaction/header.png" width="100%" height="20%" />
				<div class="row barangay-header-logo">
					<div class="col-md-3">
						<img src="/transaction/gad_logo.png" class="pull-right" />
					</div>
					<div class="col-md-5">
						<div class="text-center" style="margin-top: -7px">
							<p style="font-weight: 100">
								<b>Republika ng Pilipinas</b>
								<br />
								<b>Lalawigan ng Laguna</b>
								<br />
								<b>Lungsod ng Calamba</b>
								<br />
								<b style="text-transform: uppercase"
									>SANGGUNIANG BARANGAY NG BARANGAY {{ data.barangay.barangay_name }}</b
								>
								<br />
								<b>TANGGAPAN NG PUNONG BARANGAY</b>
							</p>
						</div>
					</div>
					<div class="col-md-2"><img :src="data.logo" class="pull-left" style="width: 67px" /></div>
				</div>
			</div>
			<div class="container">
				<hr class="barangay-header-line" />
			</div>
			<div class="card-body" style="height: 670px">
				<div class="barangay-wrap">
					<img class="barangay-watermark" :src="data.logo" style="width: 574px" alt="" />
					<div class="barangay-content">
						<!-- Props -->
						<div class="barangay-body">
							<div class="text-center">
								<h1 style="font-weight: 600; font-size: 4rem">BARANGAY CERTIFICATION</h1>
							</div>
							<div class="container">
								<div class="barangay-body-paragraph">
									<!-- Props -->
									<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Whom It May Concern;</p>
									<p class="text-justify">
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that
										{{ data.full_name }}, of legal age, and a bonafide resident of Brgy.
										{{ data.barangay.barangay_name }}, Calamba City, Laguna.
									</p>
									<br />
									<p class="text-justify">
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify further
										that herein person is the live-in partner of BABYLYN ABULENCIA. They are
										living together in since 2016..
									</p>
									<p class="text-justify">
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This certification is being
										issued upon request for legal purposes this may serve best.
									</p>
									<p class="text-justify">
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issued this 7 th of December,
										2021 at Barangay, Maunong, Calamba City, Laguna
									</p>
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
