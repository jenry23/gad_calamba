<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BarangayPermitRecords extends Migration
{

    public function up()
    {
        Schema::create('barangay_permit_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gad_id')->constrained('gad');
            $table->foreignId('transaction_type_id')->nullable()->constrained('transaction_type');
            $table->integer('status');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('barangay_permit_records');
    }
}
