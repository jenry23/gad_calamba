<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBarangaySanggunianCategory extends Migration
{
    public function up()
    {
        Schema::create('barangay_sanggunian_category', function (Blueprint $table) {
            $table->id();
            $table->string('category_name');
            $table->integer('order');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('barangay_sanggunian_category');
    }
}
