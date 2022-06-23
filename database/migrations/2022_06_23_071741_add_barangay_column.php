<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBarangayColumn extends Migration
{

    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('barangay')->nullable()->constrained('gad');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['barangay']);
            $table->dropColumn('barangay');
        });
    }
}
