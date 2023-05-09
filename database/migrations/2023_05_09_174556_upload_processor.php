<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UploadProcessor extends Migration
{
    private const TABLE_NAME = 'upload_processors';

    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->id()->unsigned();
            $table->string('file_name');
            $table->bigInteger('size')->nullable();
            $table->foreignId('uploaded_by')->constrained('users');
            $table->string('status');
            $table->longText('path');
            $table->longText('upload_output')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
}
