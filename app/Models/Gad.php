<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gad extends Model implements HasMedia
{
    use HasAdvancedFilter, SoftDeletes, HasFactory, InteractsWithMedia;

    public $table = 'gad';

    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];

    protected $orderable = [
        'id',
    ];

    protected $appends = [
        'photo',
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
        'gad_id',
        'building_no',
        'household_no',
        'house_no',
        'family_code',
        'household_id',
        'last_name',
        'first_name',
        'middle_name',
        'extension_name',
        'barangay_id',
        'barangay_code',
        'purok_id',
        'block_lot_house_id',
        'sitio_id',
        'native_province_id',
        'native_city_id',
        'valid_id',
        'id_number',
        'birth_date',
        'gender_id',
        'gender_preference_id',
        'civil_status_id',
        'no_of_dependents',
        'landline_number',
        'mobile_no',
        'email',
        'nutrition_status',
        'occupation_id',
        'employer',
        'work_location_province_id',
        'work_location_city_id',
        'monthly_income_id',
        'educational_attaintment_id',
        'educational_status_id',
        'last_school_attended',
        'religion_id',
        'political_province_registered_id',
        'political_city_registered_id',
        'political_brgy_registered',
        'political_precinct_no',
        'house_ownership_id',
        'house_type_id',
        'house_make_id',
        'no_nuclear_family_household_id',
        'no_bedrooms_id',
        'no_cr_id',
        'full_immunization',
        'covid_19_test',
        'first_date_vaccination',
        'brand1',
        'second_date_vaccination',
        'brand2',
        'pregnancy_age',
        'prental_checkup',
        'postnatal_checkup',
        'barangay_residence_year',
        'calamba_residence_year',
        'remarks',
        'spouse_last_name',
        'spouse_first_name',
        'spouse_middle_name',
        'spouse_extension_name',
        'photo',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getFullNameAttribute()
    {
        return ucfirst($this->first_name) . ' ' . ucfirst($this->last_name);
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $thumbnailWidth  = 50;
        $thumbnailHeight = 50;

        $thumbnailPreviewWidth  = 120;
        $thumbnailPreviewHeight = 120;

        $this->addMediaConversion('thumbnail')
            ->width($thumbnailWidth)
            ->height($thumbnailHeight)
            ->fit('crop', $thumbnailWidth, $thumbnailHeight);
        $this->addMediaConversion('preview_thumbnail')
            ->width($thumbnailPreviewWidth)
            ->height($thumbnailPreviewHeight)
            ->fit('crop', $thumbnailPreviewWidth, $thumbnailPreviewHeight);
    }

    public function getPhotoAttribute()
    {
        return $this->getMedia('resident_photo')->map(function ($item) {
            $media                      = $item->toArray();
            $media['url']               = $item->getUrl();
            $media['thumbnail']         = $item->getUrl('thumbnail');
            $media['preview_thumbnail'] = $item->getUrl('preview_thumbnail');

            return $media;
        });
    }

    public function item()
    {
        return $this->morphTo();
    }

    public function gadDetails(): HasMany
    {
        return $this->hasMany(GadItemDetails::class, 'gad_id', 'id');
    }
    public function barangay()
    {
        return $this->belongsTo(Barangay::class, 'barangay_id', 'id');
    }
    public function sector()
    {
        return $this->belongsTo(Sector::class, 'sector_id', 'id');
    }
    public function resident_status()
    {
        return $this->belongsTo(ResidentStatus::class, 'resident_status_id', 'id');
    }
    public function civil_status()
    {
        return $this->belongsTo(CivilStatus::class, 'civil_status_id', 'id');
    }
    public function validId()
    {
        return $this->belongsTo(ValidID::class, 'valid_id', 'id');
    }
    public function native_province()
    {
        return $this->belongsTo(Province::class, 'native_province_id', 'id');
    }
    public function native_city()
    {
        return $this->belongsTo(City::class, 'native_city_id', 'id');
    }
    public function work_location_province()
    {
        return $this->belongsTo(Province::class, 'work_location_province_id', 'id');
    }
    public function work_location_city()
    {
        return $this->belongsTo(City::class, 'work_location_city_id', 'id');
    }
    public function political_province_registered()
    {
        return $this->belongsTo(Province::class, 'political_province_registered_id', 'id');
    }
    public function political_city_registered()
    {
        return $this->belongsTo(City::class, 'political_city_registered_id', 'id');
    }
    public function educational_attaintment()
    {
        return $this->belongsTo(EducationalAttaintment::class, 'educational_attaintment_id', 'id');
    }
    public function educational_status()
    {
        return $this->belongsTo(EducationalStatus::class, 'educational_status_id', 'id');
    }
    public function government_assistance()
    {
        return $this->belongsTo(GovernmentAssistance::class, 'government_assistance_id', 'id');
    }
    public function purok()
    {
        return $this->belongsTo(Purok::class, 'purok_id', 'id');
    }
    public function religion()
    {
        return $this->belongsTo(Religion::class, 'religion_id', 'id');
    }
    public function vehicles()
    {
        return $this->belongsTo(Vehicles::class, 'vehicle_no', 'id');
    }
    public function medicine()
    {
        return $this->belongsTo(Medicine::class, 'medical_number', 'id');
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }

    public function sitio()
    {
        return $this->belongsTo(Sitio::class, 'sitio_id', 'id');
    }
    public function ethnicity()
    {
        return $this->belongsTo(Ethnicity::class, 'ethnicity_id', 'id');
    }
    public function household()
    {
        return $this->belongsTo(Household::class, 'household_id', 'id');
    }
    public function gender()
    {
        return $this->belongsTo(Gender::class, 'gender_id', 'id');
    }
    public function gender_preference()
    {
        return $this->belongsTo(GenderPreference::class, 'gender_preference_id', 'id');
    }
    public function house_ownership()
    {
        return $this->belongsTo(HouseOwnership::class, 'house_ownership_id', 'id');
    }
    public function house_type()
    {
        return $this->belongsTo(HouseType::class, 'house_type_id', 'id');
    }
    public function house_make()
    {
        return $this->belongsTo(HouseMake::class, 'house_make_id', 'id');
    }

    public function occupation()
    {
        return $this->belongsTo(Occupation::class, 'occupation_id', 'id');
    }

    public function monthly_income()
    {
        return $this->belongsTo(MonthlyIncome::class, 'monthly_income_id', 'id');
    }

    public function soft_skills()
    {
        return $this->belongsTo(SoftSkill::class, 'soft_skill_name', 'id');
    }

    public function hard_skills()
    {
        return $this->belongsTo(HardSkill::class, 'hard_skill_name', 'id');
    }

    public function hobbies()
    {
        return $this->belongsTo(Hobbies::class, 'hobbies_name', 'id');
    }

    public function sports()
    {
        return $this->belongsTo(Sports::class, 'sports_name', 'id');
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
