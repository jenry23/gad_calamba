<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGadTable extends Migration
{
    public function up()
    {
        Schema::create('gad', function (Blueprint $table) {
            $table->id();
            $table->string('gad_id')->nullable();
            $table->integer('building_no')->nullable();
            $table->integer('household_no')->nullable();
            $table->integer('house_no')->nullable();
            $table->string('family_code')->nullable();
            $table->foreignId('household_id')->nullable()->constrained('household');
            $table->string('last_name')->nullable();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('extension_name')->nullable();
            $table->foreignId('barangay_id')->nullable()->constrained('barangay');
            $table->string('barangay_code')->nullable();
            $table->foreignId('purok_id')->nullable()->constrained('purok');
            $table->string('block_lot_house_id')->nullable();
            $table->foreignId('sitio_id')->nullable()->constrained('sitio');
            $table->foreignId('native_province_id')->nullable()->constrained('province');
            $table->foreignId('native_city_id')->nullable()->constrained('city');
            $table->foreignId('valid_id')->nullable()->constrained('valid');
            $table->string('id_number')->nullable();
            $table->date('birth_date')->nullable();
            $table->foreignId('gender_id')->nullable()->constrained('gender');
            $table->foreignId('gender_preference_id')->nullable()->constrained('gender_preference');
            $table->foreignId('civil_status_id')->nullable()->constrained('civil_status');
            $table->integer('no_of_dependents')->nullable();
            $table->string('landline_number')->nullable();
            $table->string('mobile_no')->nullable();
            $table->string('email')->nullable();
            $table->string('nutrition_status')->nullable();
            $table->foreignId('occupation_id')->nullable()->constrained('occupation');
            $table->string('employer')->nullable();
            $table->foreignId('work_location_province_id')->nullable()->constrained('province');
            $table->foreignId('work_location_city_id')->nullable()->constrained('city');
            $table->foreignId('monthly_income_id')->nullable()->constrained('monthly_income');
            $table->foreignId('educational_attaintment_id')->nullable()->constrained('educational_attaintment');
            $table->foreignId('educational_status_id')->nullable()->constrained('educational_status');
            $table->string('last_school_attended')->nullable();
            $table->foreignId('religion_id')->nullable()->constrained('religion');
            $table->foreignId('political_province_registered_id')->nullable()->constrained('province');
            $table->foreignId('political_city_registered_id')->nullable()->constrained('city');
            $table->foreignId('political_brgy_registered')->nullable()->constrained('barangay');
            $table->string('political_precinct_no')->nullable();
            $table->foreignId('house_ownership_id')->nullable()->constrained('house_ownership');
            $table->foreignId('house_type_id')->nullable()->constrained('house_type');
            $table->foreignId('house_make_id')->nullable()->constrained('house_make');
            $table->integer('no_nuclear_family_household_id')->nullable();
            $table->integer('no_bedrooms_id')->nullable();
            $table->integer('no_cr_id')->nullable();
            $table->string('full_immunization')->nullable();
            $table->string('covid_19_test')->nullable();
            $table->date('first_date_vaccination')->nullable();
            $table->string('brand1')->nullable();
            $table->date('second_date_vaccination')->nullable();
            $table->string('brand2')->nullable();
            $table->string('pregnancy_age')->nullable();
            $table->string('prental_checkup')->nullable();
            $table->string('postnatal_checkup')->nullable();
            $table->date('barangay_residence_year')->nullable();
            $table->date('calamba_residence_year')->nullable();
            $table->string('remarks')->nullable();
            $table->string('spouse_last_name')->nullable();
            $table->string('spouse_first_name')->nullable();
            $table->string('spouse_middle_name')->nullable();
            $table->string('spouse_extension_name')->nullable();
            $table->string('photo')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gad');
    }
}
