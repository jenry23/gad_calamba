<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswer extends Migration
{
    public function up()
    {
        Schema::create('answer', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('question_id')->constrained('questions');
            $table->longText('answer');
            $table->boolean('is_correct')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('Answer');
    }
}
