<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToBarangayPermit extends Migration
{
    public function up()
    {
        Schema::table('barangay_permit_records', function (Blueprint $table) {
            $table->foreignId('barangay_id')->constrained('barangay');
        });
    }
    public function down()
    {
        Schema::table('barangay_permit_records', function (Blueprint $table) {
            $table->dropForeign(['barangay_id']);
            $table->dropColumn('barangay_id');
        });
    }
}
