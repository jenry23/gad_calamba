<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Gad extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'gad';

    protected $orderable = [
        'id',
    ];

    protected $filterable = [
        'id',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'id',
        'building_no',
        'household_no',
        'house_unit',
        'household_id',
        'family_code',
        'work_location_province_id',
        'work_location_city_id',
        'poltical_province_registered_id',
        'poltical_city_registered_id',
        'no_nuclear_family_household_id',
        'no_bedrooms_id',
        'no_cr_id',
        'barangay_residence_year',
        'no_of_years_in_calamba',
        'last_name',
        'first_name',
        'middle_name',
        'extension_name',
        'spouse_last_name',
        'spouse_first_name',
        'spouse_middle_name',
        'spouse_extension_name',
        'no_of_dependents',
        'mobile_no',
        'landline_number',
        'email',
        'occupation',
        'employer',
        'last_school_attended',
        'barangay_id',
        'purok_id',
        'sitio_id',
        'subdivision_name',
        'native_province_id',
        'native_city_id',
        'valid_id',
        'id_number',
        'sector_id',
        'gender_id',
        'gender_preference_id',
        'civil_status_id',
        'health_id',
        'disability_id',
        'government_assistance_id',
        'household_monthly_income_id',
        'economic_status_id',
        'educational_attaintment_id',
        'educational_status_id',
        'government_educational_assistance_id',
        'ethnicity_id',
        'house_ownership_id',
        'house_type_id',
        'house_make_id',
        'organization_id',
        'barangay_code',
        'block_lot_house_id',
        'monthly_income',
        'birthdate',
        'utilities_no1',
        'utilities_no2',
        'utilities_no3',
        'utilities_no4',
        'appliance_no1',
        'appliance_no2',
        'appliance_no3',
        'appliance_no4',
        'vehicle_no',
        'medical_id',
        'religion_id',
        'full_immunization',
        'covid_19_test',
        'first_vaccination',
        'brand',
        'second_vaccination',
        'brand2',
        'pregnancy_age',
        'prental_checkup',
        'postnatal_checkup',
        'remarks',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
    public function barangay()
    {
        return $this->belongsTo(Barangay::class, 'barangay_id');
    }
    public function sector()
    {
        return $this->belongsTo(Sector::class, 'sector_id');
    }
    public function resident_status()
    {
        return $this->belongsTo(ResidentStatus::class, 'resident_status_id');
    }
    public function civil_status()
    {
        return $this->belongsTo(CivilStatus::class, 'civil_status_id');
    }
    public function validId()
    {
        return $this->belongsTo(ValidID::class, 'valid_id');
    }
    public function native_province()
    {
        return $this->belongsTo(Province::class, 'native_province_id');
    }
    public function native_city()
    {
        return $this->belongsTo(City::class, 'native_city_id');
    }
    public function work_location_province()
    {
        return $this->belongsTo(Province::class, 'work_location_province_id');
    }
    public function work_location_city()
    {
        return $this->belongsTo(City::class, 'work_location_city_id');
    }

    public function poltical_province_registered()
    {
        return $this->belongsTo(Province::class, 'poltical_province_registered_id');
    }
    public function poltical_city_registered()
    {
        return $this->belongsTo(City::class, 'poltical_city_registered_id');
    }

    public function educational_attaintment()
    {
        return $this->belongsTo(EducationalAttaintment::class, 'educational_attaintment_id');
    }
    public function educational_status()
    {
        return $this->belongsTo(EducationalStatus::class, 'educational_status_id');
    }
    public function government_assistance()
    {
        return $this->belongsTo(GovernmentAssistance::class, 'government_educational_assistance_id');
    }
    public function purok()
    {
        return $this->belongsTo(Purok::class, 'purok_id');
    }
    public function vehicles()
    {
        return $this->belongsTo(Vehicles::class, 'vehicle_no');
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class, 'medical_number');
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }

    public function sitio()
    {
        return $this->belongsTo(Sitio::class, 'sitio_id');
    }
    public function ethinicity()
    {
        return $this->belongsTo(ethinicity::class, 'ethnicity_id');
    }
    public function household()
    {
        return $this->belongsTo(Household::class, 'household_no');
    }
    public function genders()
    {
        return $this->belongsTo(Gender::class, 'gender_id');
    }
    public function gender_preference()
    {
        return $this->belongsTo(GenderPreference::class, 'gender_preference_id');
    }
    public function house_ownership()
    {
        return $this->belongsTo(HouseOwnership::class, 'house_ownership_id');
    }
    public function house_type()
    {
        return $this->belongsTo(HouseType::class, 'house_type_id');
    }
    public function house_make()
    {
        return $this->belongsTo(HouseMake::class, 'house_make_id');
    }
    public function getBarangayNameAttribute()
    {
        return !empty($this->barangay) ? $this->barangay->barangay_name : '';
    }
    public function getGenderNameAttribute()
    {
        return !empty($this->genders) ? $this->genders->gender_name : '';
    }
}
