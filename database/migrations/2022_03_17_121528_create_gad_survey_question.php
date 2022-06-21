<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGadSurveyQuestion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gad_survey_question', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('gad_id')->constrained('gad');
            $table->foreignId('question_id')->constrained('questions');
            $table->foreignId('answer_id')->constrained('answer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gad_survey_question');
    }
}
