<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBarangaySanggunian extends Migration
{
    public function up()
    {
        Schema::create('barangay_sanggunian', function (Blueprint $table) {
            $table->id();
            $table->foreignId('barangay_id')->nullable()->constrained('barangay');
            $table->foreignId('barangay_sanggunian_category_id')->nullable()->constrained('barangay_sanggunian_category');
            $table->string('barangay_name')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('barangay_sanggunian');
    }
}
