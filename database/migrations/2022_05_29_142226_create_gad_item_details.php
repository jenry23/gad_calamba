<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGadItemDetails extends Migration
{
    public function up()
    {
        Schema::create('gad_item_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gad_id')->nullable()->constrained('gad');
            $table->morphs('item');
            $table->string('item_name')->nullable();
            $table->integer('status');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gad_item_details');
    }
}
