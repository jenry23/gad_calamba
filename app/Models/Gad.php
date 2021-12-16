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
        'id_number',
        'first_name',
        'purok_id',
        'sitio_id',
        'sitio_id',
        'age',
        'last_name',
        'middle_name',
        'phone',
        'address',
        'gender_id',
        'birth_date',
        'barangay_id',
        'household_id',
        'educational_id',
        'valid_id',
        'occupation_id',
        'salary_id',
        'employer',
        'picture',
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
        return $this->belongsTo(Barangay::class,'barangay_id');
    }
    public function sector()
    {
        return $this->belongsTo(Sector::class,'sector_id');
    }
    public function resident_status()
    {
        return $this->belongsTo(ResidentStatus::class,'resident_status_id');
    }
    public function civil_status()
    {
        return $this->belongsTo(CivilStatus::class,'civil_status_id');
    }
    public function validId()
    {
        return $this->belongsTo(ValidID::class,'valid_id');
    }
    public function native_province()
    {
        return $this->belongsTo(Province::class,'native_province_id');
    }
    public function native_city()
    {
        return $this->belongsTo(City::class,'native_city_id');
    }
    public function work_location_province()
    {
        return $this->belongsTo(Province::class,'work_location_province_id');
    }
    public function work_location_city()
    {
        return $this->belongsTo(City::class,'work_location_city_id');
    }
    
    public function poltical_province_registered()
    {
        return $this->belongsTo(Province::class,'poltical_province_registered_id');
    }
    public function poltical_city_registered()
    {
        return $this->belongsTo(City::class,'poltical_city_registered_id');
    }

    public function educational_attaintment()
    {
        return $this->belongsTo(EducationalAttaintment::class,'educational_attaintment_id');
    }
    public function educational_status()
    {
        return $this->belongsTo(EducationalStatus::class,'educational_status_id');
    }
    public function government_assistance()
    {
        return $this->belongsTo(GovernmentAssistance::class,'government_educational_assistance_id');
    }
    public function purok()
    {
        return $this->belongsTo(Purok::class,'purok_id');
    }
    public function vehicles()
    {
        return $this->belongsTo(Vehicles::class,'vehicle_no');
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class,'medical_number');
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class,'organization_id');
    }

    public function sitio()
    {
        return $this->belongsTo(sitio::class,'sitio_id');
    }
    public function ethinicity()
    {
        return $this->belongsTo(ethinicity::class,'ethnicity_id');
    }
    public function household()
    {
        return $this->belongsTo(Household::class,'household_no');
    }
    public function genders()
    {
        return $this->belongsTo(Gender::class,'gender_id');
    }
    public function gender_preference()
    {
        return $this->belongsTo(GenderPreference::class,'gender_preference_id');
    }
    public function house_ownership()
    {
        return $this->belongsTo(HouseOwnership::class,'house_ownership_id');
    }
    public function house_type()
    {
        return $this->belongsTo(HouseType::class,'house_type_id');
    }
    public function house_make()
    {
        return $this->belongsTo(HouseMake::class,'house_make_id');
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
