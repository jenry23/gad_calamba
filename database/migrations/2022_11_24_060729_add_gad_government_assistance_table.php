<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGadGovernmentAssistanceTable extends Migration
{
    public function up()
    {
        Schema::create('gad_government_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gad_id')->constrained('gad');
            $table->foreignId('government_assistance_id')->constrained('government_assistance');
            $table->float('amount');
            $table->date('date')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gad_government_assistance');
    }
}
