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
											B A R A N G A Y C E R T I F I C A T I O N <br />
											(Residency)
										</h3>
									</div>
									<!-- <div class="barangay-finger-print">
										<img src="/transaction/finger_print.png" class="pull-right" />
									</div> -->
									<div class="container" style="margin-top: -7%">
										<div class="barangay-body-paragraph">
											<p class="text-justify">
												This is to certify that person, whose personal details appears below,
												is a bonafide resident of Barangay
												{{ data.barangay.barangay_name }} Calamba City, Laguna.
											</p>
											<div>
												<b style="margin-right: 67px">Name of Resident</b>
												<b style="margin-right: 145px">:</b><b>{{ data.full_name }} </b>
											</div>
											<div>
												<b style="margin-right: 155px">Age</b>
												<b style="margin-right: 141px">:</b><b> {{ data.age }}</b>
											</div>
											<div>
												<b style="margin-right: 108px">Civil Status</b>
												<b style="margin-right: 141px">:</b><b> {{ data.civil_status }}</b>
											</div>
											<div>
												<b style="margin-right: 127px">Address</b>
												<b style="margin-right: 142px">:</b><b> {{ data.address }}</b>
											</div>
											<div>
												<b style="margin-right: 69px">Residence Status</b>
												<b style="margin-right: 145px">:</b><b>{{ data.resident_status }} </b>
											</div>
											<div>
												<b style="margin-right: 50px">Brgy Residence Date</b>
												<b style="margin-right: 140px">:</b
												><b> {{ data.barangay_residence_year }}</b>
											</div>
											<br />
											<p class="text-justify">
												This clearance is being issued upon his/her request for the following
												purpose/s.
											</p>
											<div>
												<table class="table table-responsive">
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
												Given this _____ day of _________ at Barangay Bucal, Calamba City
												Laguna
											</p>
											<br />
											<div class="pull-right" style="margin-right: 20%">Approved By:</div>
											<br />
											<br />
											<div class="row">
												<div class="col-md-6">
													<p>
														__________________________________________ <br />(Signature
														over Printed Name of Resident)
													</p>
												</div>
												<div class="col-md-6">
													<center>
														<p>
															_____________________________ <br />
															DELFIN M. DE CLARO<br />Punong Barangay
														</p>
													</center>
												</div>
											</div>
											<br />
											<div class="pull-right" style="margin-right: 20%">Issued By:</div>
											<br />
											<br />
											<div class="row">
												<div class="col-md-6">
													C.T.C. No.: _________________ <br />Date Issued:
													_________________<br />
													Place Issued: _________________
												</div>
												<div class="col-md-6">
													<center>
														<p>
															_____________________________ <br />
															DELFIN M. DE CLARO<br />Punong Barangay
														</p>
													</center>
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
