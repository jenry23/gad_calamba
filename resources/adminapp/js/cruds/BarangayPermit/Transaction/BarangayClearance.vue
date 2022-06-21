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
                                <b>SANGGUNIANG BARANGAY NG BARANGAY MAUNONG</b>
                                <br />
                                <b>TANGGAPAN NG PUNONG BARANGAY</b>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img src="/transaction/maunong_logo.png" class="pull-left" />
                    </div>
                </div>
            </div>
            <div class="container">
                <hr class="barangay-header-line" />
            </div>
            <div class="card-body" style="height: 670px">
                <div class="barangay-wrap">
                    <img class="barangay-watermark" src="/transaction/background_maunong.png" alt="" />
                    <div class="barangay-content">
                        <!-- Props -->
                        <div class="barangay-body">
                            <div class="text-center">
                                <h1 style="font-weight: 600; font-size: 4rem">BARANGAY CLEARANCE</h1>
                            </div>
                            <div class="barangay-finger-print">
                                <img src="/transaction/finger_print.png" class="pull-right" />
                            </div>
                            <div class="container">
                                <div class="barangay-body-paragraph">
                                    <!-- Props -->
                                    {{ data }}
                                    <p>SA MGA KINAUUKULAN,</p>
                                    <p class="text-justify">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ito ang pagpapatunay na ang
                                        nakalagda sa clearance na ito ay kasalukuyang naninirahan sa Barangay Maunong,
                                        Calamba City at walang anumang nasangkutang gulo at kaso na nabinbin dito.
                                    </p>
                                    <div>
                                        <b style="margin-right: 145px">Pangalan</b>
                                        <b style="margin-right: 145px">:</b><b> {{ data.full_name }}</b>
                                    </div>
                                    <div>
                                        <b style="margin-right: 155px">Tirahan</b>
                                        <b style="margin-right: 145px">:</b><b> {{ data.address }}</b>
                                    </div>
                                    <div>
                                        <b style="margin-right: 49px">Petsa ng Kapanganakan</b>
                                        <b style="margin-right: 145px">:</b><b> {{ data.birthday }}</b>
                                    </div>
                                    <div>
                                        <b style="margin-right: 170px">Edad</b>
                                        <b style="margin-right: 145px">:</b><b> {{ data.age }}</b>
                                    </div>
                                    <div>
                                        <b style="margin-right: 49px">Lugar ng Kapanganakan</b>
                                        <b style="margin-right: 145px">:</b><b> {{ data.birth_place }}</b>
                                    </div>
                                    <div>
                                        <b style="margin-right: 81px">Status sa Barangay</b>
                                        <b style="margin-right: 145px">:</b><b> {{ data.status }}</b>
                                    </div>
                                    <br />
                                    <p class="text-justify">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iginawad ang pagpapatunay na
                                        ito ngayong ika-16 ng Mayo, 2022 upang magamit sa Legal purposes.
                                    </p>
                                    <div>
                                        <b style="margin-right: 145px">Valid until</b>
                                        <b style="margin-right: 145px">:</b><b> November 16, 2022</b>
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
.barangay-header-logo {
    margin-top: -96px;
}
.barangay-header-line {
    height: 2px;
    border-width: 0;
    color: gray;
    background-color: gray;
}
.barangay-wrap {
    position: relative;
}
.barangay-watermark {
    opacity: 0.2;
    position: absolute;
    margin-left: 20%;
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
