<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\TransactionType;

class CreateTransactionType extends Migration
{
    private const TRANSACTION_TYPE = [
        'Barangay Clearance',
        'Barangay Certification',
        'COHABITATION',
        'First Time Jobseeker',
        'Globe Permit',
        'Undertaking',
        'Residency',
        'Certification of Indigency',
        'Barangay Permit New House',
        'ID'
    ];

    public function up()
    {
        Schema::create('transaction_type', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_type_name');
            $table->longText('content')->nullable();
            $table->longText('legend')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        foreach (self::TRANSACTION_TYPE as $transaction_name) {
            TransactionType::create(['transaction_type_name' => $transaction_name]);
        }
    }

    public function down()
    {
        Schema::dropIfExists('transaction_type');
    }
}
