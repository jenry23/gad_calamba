<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Carbon\Carbon;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gad extends Model implements HasMedia
{
    use HasAdvancedFilter, SoftDeletes, HasFactory, InteractsWithMedia;

    public $table = 'gad';
    public static $withoutAppends = false;

    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];

    protected $orderable = [
        'id',
        'gender',
        'sector_name'
    ];

    protected $appends = [
        'full_name',
        'age',
        'address',
        'sector_name',
        'health_condition',
        'disability_condition',
        'appliance_number',
        'utilities_number',
        'vehicle_name',
        'government_assistance_number',
        'government_educational_assistance_number',
        'soft_skills_name',
        'hard_skills_name',
        'hobbies_name',
        'sports_name',
        'ethinicity_name',
        'maintaining_medicine_name',
        'organization_name',
        'calamba_resident_status_name',
        'barangay_resident_status_name',
    ];

    protected $filterable = [
        'id',
    ];

    protected $dates = [
        'birth_date',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'id',
        'gad_id',
        'migration_rate_id',
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
        'economic_status',
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
        'booster_date_vaccination',
        'brand3',
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
        return $date->format('Y-m-d');
    }

    public function getFullNameAttribute()
    {
        return ucfirst($this->last_name) . ', ' . ucfirst($this->first_name) . ' ' . ucfirst($this->middle_name);
    }

    public function scopeWithoutAppends($query)
    {
        self::$withoutAppends = true;

        return $query;
    }

    protected function getArrayableAppends()
    {
        if (self::$withoutAppends) {
            return ['age'];
        }

        return parent::getArrayableAppends();
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

    public function getSectorNameAttribute()
    {
        $sector_id = $this->gadDetails()->whereHasMorph('item', [Sector::class])->get()->pluck('item_id')->toArray();

        if ($sector_id) {
            return Sector::whereIn('id', $sector_id)->get()->pluck('sector_name')->toArray();
        }
    }

    public function getHealthConditionAttribute()
    {
        $health_id = $this->gadDetails()->whereHasMorph('item', [Health::class])->get()->pluck('item_id')->toArray();

        if ($health_id) {
            return Health::whereIn('id', $health_id)->get()->pluck('health_name')->toArray();
        }
    }

    public function getDisabilityConditionAttribute()
    {
        $disability_id = $this->gadDetails()->whereHasMorph('item', [Disability::class])->get()->pluck('item_id')->toArray();

        if ($disability_id) {
            return Disability::whereIn('id', $disability_id)->get()->pluck('disability_name')->toArray();
        }
    }

    public function getGovernmentAssistanceNumberAttribute()
    {
        $government_assistance_id = $this->gadDetails()->whereHasMorph('item', [GovernmentAssistance::class])->get()->pluck('item_id')->toArray();

        if ($government_assistance_id) {
            return GovernmentAssistance::whereIn('id', $government_assistance_id)->get()->pluck('government_assistance_name')->toArray();
        }
    }

    public function getApplianceNumberAttribute()
    {
        $appliance_id = $this->gadDetails()->whereHasMorph('item', [Appliances::class])->get()->pluck('item_id')->toArray();

        if ($appliance_id) {
            return Appliances::whereIn('id', $appliance_id)->get()->pluck('appliance_name')->toArray();
        }
    }

    public function getUtilitiesNumberAttribute()
    {
        $utilities_id = $this->gadDetails()->whereHasMorph('item', [Utilities::class])->get()->pluck('item_id')->toArray();

        if ($utilities_id) {
            return Utilities::whereIn('id', $utilities_id)->get()->pluck('utilities_name')->toArray();
        }
    }

    public function getVehicleNameAttribute()
    {
        $vehicle_id = $this->gadDetails()->whereHasMorph('item', [Vehicles::class])->get()->pluck('item_id')->toArray();

        if ($vehicle_id) {
            return Vehicles::whereIn('id', $vehicle_id)->get()->pluck('vehicles_name')->toArray();
        }
    }

    public function getGovernmentEducationalAssistanceNumberAttribute()
    {
        $government_id = $this->gadDetails()->whereHasMorph('item', [EducationalAssistance::class])->get()->pluck('item_id')->toArray();

        if ($government_id) {
            return EducationalAssistance::whereIn('id', $government_id)->get()->pluck('educational_assistance_name')->toArray();
        }
    }

    public function getSoftSkillsNameAttribute()
    {
        $soft_skill_id = $this->gadDetails()->whereHasMorph('item', [SoftSkill::class])->get()->pluck('item_id')->toArray();

        if ($soft_skill_id) {
            return SoftSkill::whereIn('id', $soft_skill_id)->get()->pluck('soft_skill_name')->toArray();
        }
    }

    public function getHardSkillsNameAttribute()
    {
        $hard_skill_id = $this->gadDetails()->whereHasMorph('item', [HardSkill::class])->get()->pluck('item_id')->toArray();

        if ($hard_skill_id) {
            return HardSkill::whereIn('id', $hard_skill_id)->get()->pluck('hard_skills_name')->toArray();
        }
    }
    public function getHobbiesNameAttribute()
    {
        $hobbies_id = $this->gadDetails()->whereHasMorph('item', [Hobbies::class])->get()->pluck('item_id')->toArray();

        if ($hobbies_id) {
            return Hobbies::whereIn('id', $hobbies_id)->get()->pluck('hobbies_name')->toArray();
        }
    }
    public function getSportsNameAttribute()
    {
        $sports_id = $this->gadDetails()->whereHasMorph('item', [Sports::class])->get()->pluck('item_id')->toArray();

        if ($sports_id) {
            return Sports::whereIn('id', $sports_id)->get()->pluck('sports_name')->toArray();
        }
    }
    public function getEthinicityNameAttribute()
    {
        $ethnicity_id = $this->gadDetails()->whereHasMorph('item', [Ethnicity::class])->get()->pluck('item_id')->toArray();

        if ($ethnicity_id) {
            return Ethnicity::whereIn('id', $ethnicity_id)->get()->pluck('ethnicity_name')->toArray();
        }
    }
    public function getMaintainingMedicineNameAttribute()
    {
        $medicine_id = $this->gadDetails()->whereHasMorph('item', [Medicine::class])->get()->pluck('item_id')->toArray();

        if ($medicine_id) {
            return Medicine::whereIn('id', $medicine_id)->get()->pluck('medicine_name')->toArray();
        }
    }

    public function getOrganizationNameAttribute()
    {
        $organization_id = $this->gadDetails()->whereHasMorph('item', [Organization::class])->get()->pluck('item_id')->toArray();

        if ($organization_id) {
            return Organization::whereIn('id', $organization_id)->get()->pluck('organization_name')->toArray();
        }
    }

    public function getCalambaResidentStatusNameAttribute()
    {
        $calamba_residence_year = $this->calamba_residence_year;

        $now = Carbon::now()->format('Y-m-d');

        if ($calamba_residence_year > Carbon::now()->subMonth(6)->format('Y-m-d')) {
            $status = "Immigrant";
        } else if ($calamba_residence_year < Carbon::now()->subYear(2)->addDay(1)->format('Y-m-d')) {
            $status = "Native";
        } else if (
            $now > Carbon::now()->subYear(2)->format('Y-m-d') && Carbon::now()->subMonth(6)->addDay(1)
            ->format('Y-m-d') < $now
        ) {
            $status = "Transient";
        } else {
            $status = '';
        }

        return $status;
    }

    public function getBarangayResidentStatusNameAttribute()
    {
        $barangay_residence_year = $this->barangay_residence_year;

        $now = Carbon::now()->format('Y-m-d');

        if ($barangay_residence_year > Carbon::now()->subMonth(6)->format('Y-m-d')) {
            $status = "Immigrant";
        } else if ($barangay_residence_year < Carbon::now()->subYear(2)->addDay(1)->format('Y-m-d')) {
            $status = "Native";
        } else if (
            $now > Carbon::now()->subYear(2)->format('Y-m-d') && Carbon::now()->subMonth(6)->addDay(1)
            ->format('Y-m-d') < $now
        ) {
            $status = "Transient";
        } else {
            $status = '';
        }

        return $status;
    }

    public function gadDetails(): HasMany
    {
        return $this->hasMany(GadItemDetails::class, 'gad_id', 'id');
    }

    public function barangay_permit(): BelongsTo
    {
        return $this->belongsTo(GadItemDetails::class, 'gad_id', 'id');
    }

    public function barangay()
    {
        return $this->belongsTo(Barangay::class, 'barangay_id');
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
    public function political_brgy_registered_name()
    {
        return $this->belongsTo(Barangay::class, 'political_brgy_registered', 'id');
    }
    public function political_city_registered()
    {
        return $this->belongsTo(City::class, 'political_city_registered_id', 'id');
    }
    public function brgy_registered()
    {
        return $this->belongsTo(Barangay::class, 'political_brgy_registered', 'id');
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
        return !empty($this->gender) ? $this->gender->gender_name : '';
    }

    public function getAddressAttribute()
    {
        $purok_name =  $this->purok ? $this->purok->purok_name : null;
        $sitio_name =  $this->sitio ? $this->sitio->sitio_name : null;

        return $this->block_lot_house_id . ' ' . $purok_name . ' ' . $sitio_name;
    }

    public function getAgeAttribute()
    {
        return Carbon::parse($this->birth_date)->diff(Carbon::now())->format('%y');
    }
}
