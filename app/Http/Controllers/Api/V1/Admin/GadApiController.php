<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\GadResource;
use App\Imports\ImportGads;
use App\Jobs\GadImportJob;
use App\Models\Appliances;
use App\Models\Barangay;
use App\Models\City;
use App\Models\CivilStatus;
use App\Models\Disability;
use App\Models\EducationalAttaintment;
use App\Models\EducationalStatus;
use App\Models\Ethnicity;
use App\Models\Gad;
use App\Models\GadItemDetails;
use App\Models\Gender;
use App\Models\GenderPreference;
use App\Models\GovernmentAssistance;
use App\Models\HardSkill;
use App\Models\Health;
use App\Models\Household;
use App\Models\MonthlyIncome;
use App\Models\Occupation;
use App\Models\Organization;
use App\Models\Province;
use App\Models\Purok;
use App\Models\Religion;
use App\Models\Sector;
use App\Models\Sitio;
use App\Models\SoftSkill;
use App\Models\Sports;
use App\Models\Hobbies;
use App\Models\HouseType;
use App\Models\HouseMake;
use App\Models\HouseOwnership;
use App\Models\Medicine;
use App\Models\Question;
use App\Models\Utilities;
use App\Models\ValidID;
use App\Models\Vehicles;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GadApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('gad_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new GadResource(Gad::advancedFilter());
    }

    public function store(Request $request)
    {
        $data = array(
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "middle_name" => $request->middle_name,
            "extension_name" => $request->extension_name,
            "household_no" => $request->household_no,
            "family_code" => $request->family_code,
            "household_id" => $request->household_id ? $request->household_id['id'] : '',
            "gender_id" => $request->gender_id ? $request->gender_id['id'] : '',
            "civil_status_id" => $request->civil_status_id ? $request->civil_status_id['id'] : '',
            "spouse_first_name" => $request->spouse_first_name,
            "birthdate" => $request->birthdate ? $request->birthdate : null,
            "gender_preference_id" => $request->gender_preference_id ? $request->gender_preference_id['id'] : '',
            "valid_id" => $request->valid_id,
            "sector_id" => $request->sector_id ? $request->sector_id['id'] : '',
            "ethnicity_id" => $request->ethnicity_id ? $request->ethnicity_id['id'] : '',
            "religion" => $request->religion ? $request->religion['id'] : '',
            "mobile_no" => $request->mobile_no,
            "landline_number" => $request->landline_number,
            "email" => $request->email,
            "political_city_registered_id" => $request->political_city_registered_id ? $request->political_city_registered_id['id'] : '',
            "political_province_registered_id" => $request->political_province_registered_id ? $request->political_province_registered_id['id'] : '',
            "building_no" => $request->building_no,
            "house_unit" => $request->house_unit,
            "block_lot_house_id" => $request->block_lot_house_id,
            "sitio_id" => $request->sitio_names ? $request->sitio_names['id'] : '',
            "purok_id" => $request->purok_id ? $request->purok_id['id'] : '',
            "subdivision_name" => $request->subdivision_name,
            "no_of_years_in_calamba" => $request->no_of_years_in_calamba,
            "barangay_residence_year" => $request->barangay_residence_year,
            "remarks" => $request->remarks,
            "educational_attaintment_id" => $request->educational_attaintment_name ? $request->educational_attaintment_name['id'] : '',
            "educational_status_id" => $request->educational_status_name ? $request->educational_status_name['id'] : '',
            "government_educational_assistance_id" => $request->government_educational_assistance_id ? $request->government_educational_assistance_id['id'] : '',
            "organization_id" => $request->organization_id ? $request->organization_id['id'] : '',
            "occupation_id" => $request->occupation_id ? $request->occupation_id['id'] : '',
            "work_location_city_id" => $request->work_location_city_id ? $request->work_location_city_id['id'] : '',
        );
        $Gad = Gad::create($data);

        return (new GadResource($Gad))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function getName(Request $request)
    {
        $user_with_barangay = Auth::user()->barangay;

        $search = $request->query()['query'];
        $gad_search = Gad::whereRaw(
            "TRIM(CONCAT(first_name, ' ', last_name, ' ', COALESCE(middle_name, ''))) like '%{$search}%'"
        )->when(
            $user_with_barangay,
            function ($query) use ($user_with_barangay) {
                $query->where('barangay_id', $user_with_barangay);
            }
        )->get();

        foreach ($gad_search as $gad) {
            $barangay = Barangay::where('id', $gad->barangay_id)->first();
            $gad->barangay_name = !empty($barangay->barangay_name) ? $barangay->barangay_name : '';
        }
        return response()->json($gad_search);
    }

    public function getData($id)
    {
    }
    public function create(Request $request)
    {
        $barangay = Barangay::all();

        return response([
            'meta' => [
                'barangay' => $barangay
            ],
        ]);
    }
    public function firstData(Request $request)
    {
        $relation_household = Household::all();
        $sex = Gender::all();
        $civil_status = CivilStatus::all();
        $religion = Religion::all();
        $gender_preference = GenderPreference::all();
        $valid_id = ValidID::all();
        $sector = Sector::all();
        $ethnicity = Ethnicity::all();
        $province = Province::all();
        $city = City::all();
        $purok = Purok::all();
        $sitio = Sitio::all();
        $educational_attaintment = EducationalAttaintment::all();
        $educational_status = EducationalStatus::all();
        $government_assistance = GovernmentAssistance::all();
        $organization = Organization::all();
        $work_location_city = City::all();
        $work_location_province = Province::all();
        $occupation = Occupation::all();
        $barangay = Barangay::all();
        return response([
            'meta' => [
                'relation_household' => $relation_household,
                'gender' => $sex,
                'civil_status' => $civil_status,
                'religion' => $religion,
                'gender_preference' => $gender_preference,
                'valid_id' => $valid_id,
                'sector' => $sector,
                'ethnicity' => $ethnicity,
                'province_register' => $province,
                'city_register' => $city,
                'educational_attaintment' => $educational_attaintment,
                'educational_status' => $educational_status,
                'government_assistance' => $government_assistance,
                'organization' => $organization,
                'work_location_city' => $work_location_city,
                'work_location_province' => $work_location_province,
                'occupation' => $occupation,
                'sitio' => $sitio,
                'purok' => $purok,
                'barangay' => $barangay
            ],
        ]);
    }

    public function showData($id, $barangay_id)
    {
        $gads = Gad::where('household_no', $id)->where('barangay_id', $barangay_id)->get();
        $gads1 = Gad::with(['purok', 'sitio', 'barangay', 'house_type', 'house_make', 'house_ownership'])->where('household_no', $id)->where('barangay_id', $barangay_id)->orderBy('household_id', 'asc')->first();

        foreach ($gads as $gad) {
            $gad->id = !empty($gad->id) ? $gad->id : '';
            $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
            $gad->gender_name = !empty($gad->gender) ? $gad->gender->gender_name : '';
            $gad->gender_preference_name = !empty($gad->gender_preference) ?  $gad->gender_preference : '';
            $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
            $gad->barangay = !empty($gad->barangay) ? $gad->barangay : '';
            $gad->age = !empty($gad->age) ? $gad->age : '';

            $gad->household_names = !empty($gad->household) ? $gad->household->household_name : '';
            $gad->civil_status_names = !empty($gad->civil_status) ? $gad->civil_status->civil_status_name : '';
            $gad->purok_names =  !empty($gad->purok) ? $gad->purok->purok_name : '';
            $gad->sitio_names =  !empty($gad->sitio) ? $gad->sitio->sitio_name : '';
            $gad->native_citys =  !empty($gad->native_city) ? $gad->native_city->city_name : '';
            $gad->native_provinces =  !empty($gad->native_province) ? $gad->native_province->province_name : '';
            $gad->work_location_citys =  !empty($gad->work_location_city) ? $gad->work_location_city->city_name : '';
            $gad->work_location_provinces =  !empty($gad->work_location_province) ? $gad->work_location_province->province_name : '';
            $gad->valid_id_names =  !empty($gad->validId) ? $gad->validId->name : '';
            $gad->educational_attaintment_name =  !empty($gad->educational_attaintment) ? $gad->educational_attaintment->educational_attaintment_name : '';
            $gad->educational_status_name =  !empty($gad->educational_status) ? $gad->educational_status->educational_status_name : '';
            $gad->government_assistance_name =  !empty($gad->government_assistance) ? $gad->government_assistance->government_assistance_name : '';
            $gad->political_province_registered =  !empty($gad->political_province_registered) ? $gad->political_province_registered->city_name : '';
            $gad->political_city_registered =  !empty($gad->political_city_registered) ? $gad->political_city_registered->city_name : '';
            $gad->house_ownership_names =  !empty($gad->house_ownership) ? $gad->house_ownership->house_ownership_name : '';
            $gad->house_make_names =  !empty($gad->house_make) ? $gad->house_make->house_make_name : '';
            $gad->house_type_names =  !empty($gad->house_type) ? $gad->house_type->house_type_name : '';
            $gad->vehicles_name =  !empty($gad->vehicles) ? $gad->vehicles->vehicles_name : '';
            $gad->medicine_name =  !empty($gad->medicine) ? $gad->medicine->medicine_name : '';
            $gad->organization_name =  !empty($gad->organization) ? $gad->organization->organization_name : '';
        }

        return response([
            'data' => [
                'first_data' => $gads,
                'second_data' => $gads1,
            ]
        ]);
    }

    public function update(Request $request, Gad $gad)
    {
        $data = [
            'building_no' => $request->building_no,
            'household_no' => $request->household_no,
            'house_unit' => $request->house_unit,
            'household_id' => $request->household['id'] ?? null,
            'family_code' => $request->family_code,
            'work_location_province_id' => $request->work_location_province['id'] ?? null,
            'work_location_city_id' => $request->work_location_city['id'] ?? null,
            'political_province_registered_id' => $request->political_province_registered['id'] ?? null,
            'political_city_registered_id' => $request->political_city_registered['id'] ?? null,
            'no_nuclear_family_household_id' => $request->no_nuclear_family_household_id,
            'no_bedrooms_id' => $request->no_bedrooms_id,
            'no_cr_id' => $request->no_cr_id,
            'barangay_residence_year' => Carbon::parse($request->calamba_residence_year)->format('Y-m-d') ?? null,
            'calamba_residence_year' => Carbon::parse($request->barangay_residence_year)->format('Y-m-d') ?? null,
            'last_name' => $request->last_name,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'extension_name' => $request->extension_name,
            'spouse_last_name' => $request->spouse_last_name,
            'spouse_first_name' => $request->spouse_first_name,
            'spouse_middle_name' => $request->spouse_middle_name,
            'spouse_extension_name' => $request->spouse_extension_name,
            'no_of_dependents' => $request->no_of_dependents,
            'mobile_no' => $request->mobile_no,
            'landline_number' => $request->landline_number,
            'email' => $request->email,
            'occupation' => $request->occupation['id'] ?? null,
            'employer' => $request->employer,
            'last_school_attended' => $request->last_school_attended,
            'barangay_id' => $request->barangay_id,
            'purok_id' => $request->purok['id'] ?? null,
            'sitio_id' => $request->sitio['id'] ?? null,
            'subdivision_name' => $request->subdivision_name,
            'native_province_id' => $request->native_province['id'] ?? null,
            'native_city_id' => $request->native_city['id'] ?? null,
            'valid_id' => $request->valid_id['id'] ?? null,
            'id_number' => $request->id_number,
            'sector_id' => $request->sector['id'] ?? null,
            'gender_id' => $request->gender['id'] ?? null,
            'political_brgy_registered' => $request->political_brgy_registered,
            'political_precinct_no' => $request->political_precinct_no,
            'gender_preference_id' => $request->gender_preference['id'] ?? null,
            'civil_status_id' => $request->civil_status['id'] ?? null,
            'economic_status_id' => $request->economic_status_id,
            'educational_attaintment_id' => $request->educational_attaintment['id'] ?? null,
            'educational_status_id' => $request->educational_status['id'] ?? null,
            'government_educational_assistance_id' => $request->government_educational_assistance_id,
            'ethnicity_id' => $request->ethnicity['id'] ?? null,
            'house_ownership_id' => $request->house_ownership['id'] ?? null,
            'house_type_id' => $request->house_type['id'] ?? null,
            'house_make_id' => $request->house_make['id'] ?? null,
            'organization_id' => $request->organization['id'] ?? null,
            'barangay_code' => $request->barangay_code,
            'block_lot_house_id' => $request->block_lot_house_id,
            'monthly_income' => $request->monthly_income['id'] ?? null,
            'birthdate' => !empty($request->birthdate) ? Carbon::parse($request->birthdate)->format('Y-m-d') : null,
            'vehicle_no' => $request->vehicle_no,
            'medical_id' => $request->medical_id,
            'religion_id' => $request->religion['id'] ?? null,
            'full_immunization' => $request->full_immunization,
            'covid_19_test' => $request->covid_19_test,
            'first_date_vaccination' => !empty($request->first_date_vaccination) ? Carbon::parse($request->first_date_vaccination)->format('Y-m-d') : null,
            'brand1' => $request->brand1,
            'second_date_vaccination' => !empty($request->second_date_vaccination) ? Carbon::parse()->format('Y-m-d') : null,
            'brand2' => $request->brand2,
            'booster_date_vaccination' => !empty($request->booster_date_vaccination) ? Carbon::parse($request->booster_date_vaccination)->format('Y-m-d') : null,
            'brand3' => $request->brand3,
            'pregnancy_age' => $request->pregnancy_age,
            'prental_checkup' => $request->prental_checkup,
            'postnatal_checkup' => $request->postnatal_checkup,
            'remarks' => $request->remarks,
        ];

        $barangay_id = $request->barangay['id'] ?? '';
        if ($gad->barangay_id != $barangay_id) {
            $barangay_id = $barangay_id;
            $data['barangay_id'] = $barangay_id;
            $gad_id = substr($request->gad_id, 0, -2) . $barangay_id;
            $data['migration_rate_id'] = $barangay_id;
            $data['barangay_residence_year'] = Carbon::now()->format('Y-m-d');
            // $lead_by_zero_barangay = sprintf("%02d", $barangay_id);
            // $replace = '-' . $lead_by_zero_barangay . '-' . $request->household_no;
            // $barangay_previous = '-' . $lead_by_zero_barangay . '-' . '000';
            // $gad_id = str_replace($barangay_previous, $replace, $request->gad_id);
            $data['gad_id'] = $gad_id;
        }

        $model_media_type = Media::where('model_type', Gad::class)->where('model_id', $gad->id)->first();
        if ($model_media_type) {
            $gad->updateMedia($request->input('photo', []), 'resident_photo');
        } else {
            if ($media = $request->input('photo', [])) {
                Media::whereIn('id', data_get($media, '*.id'))
                    ->where('model_id', 0)
                    ->update(['model_id' => $gad->id]);
            }
        }
        $gad->update($data);
        $this->itemDetails($gad, Ethnicity::class, 'ethnicity', $request->input('ethnicity.*.id', []));
        $this->itemDetails($gad, GovernmentAssistance::class, 'government_assistance', $request->input('government_assistance.*.id', []));
        $this->itemDetails($gad, Medicine::class, 'medicine', $request->input('medicine.*.id', []));
        $this->itemDetails($gad, SoftSkill::class, 'soft_skill', $request->input('soft_skill.*.id', []));
        $this->itemDetails($gad, HardSkill::class, 'hard_skill', $request->input('hard_skill.*.id', []));
        $this->itemDetails($gad, Hobbies::class, 'hobbies', $request->input('hobbies.*.id', []));
        $this->itemDetails($gad, Sports::class, 'sports', $request->input('sports.*.id', []));
        $this->itemDetails($gad, Utilities::class, 'utilities', $request->input('utilities.*.id', []));
        $this->itemDetails($gad, Appliances::class, 'appliances', $request->input('appliances.*.id', []));
        $this->itemDetails($gad, Vehicles::class, 'vehicle', $request->input('vehicle.*.id', []));
        $this->itemDetails($gad, Health::class, 'health', $request->input('health_condition.*.id', []));
        $this->itemDetails($gad, Disability::class, 'disability', $request->input('disability_condition.*.id', []));

        return (new GadResource($gad))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    private function itemDetails($gad, $class, $item_name, $items)
    {
        $result = $gad->gadDetails()->whereHasMorph('item', [$class], function () {
        });
        $details = array_diff(array_filter($items), $result->pluck('item_id')->toArray());
        if (!empty($details)) {
            $result->delete();
            foreach ($items as $item) {
                GadItemDetails::create([
                    'gad_id' => $gad->id,
                    'item_type' => $class,
                    'item_id' => $item,
                    'item_name' => $item_name,
                    'status' => 1
                ]);
            }
        }
        return true;
    }

    public function deleteData(Request $request)
    {
        // DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::transaction(
            function () use ($request) {
                // TODO: select by created_at
                Gad::where('barangay_id', $request['barangay_id'])
                    ->get()
                    ->map(function ($gad) {
                        $gad->gadDetails->each->delete();
                        $gad->forceDelete();
                    });
            }
        );
        // DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function edit($id)
    {
        $gad = Gad::with(['gadDetails.item'])->find($id);
        $gad->id = !empty($gad->id) ? $gad->id : '';
        $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
        $gad->gender_name = !empty($gad->gender) ? $gad->gender->gender_name : '';
        $gad->gender_preference_name = !empty($gad->gender_preference) ? $gad->gender_preference->gender_preference_name : '';
        $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
        $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
        $gad->age = !empty($gad->age) ? $gad->age : '';
        $gad->birth_date = !empty($gad->birth_date) ? Carbon::parse($gad->birth_date)->format('d F Y') : '';
        $gad->calamba_residence_year = !empty($gad->calamba_residence_year) ? Carbon::parse($gad->calamba_residence_year)->format('d F Y') : '';
        $gad->barangay_residence_year = !empty($gad->barangay_residence_year) ? Carbon::parse($gad->barangay_residence_year)->format('d F Y') : '';
        $gad->household_names = !empty($gad->household) ? $gad->household->household_name : '';
        $gad->civil_status_names = !empty($gad->civil_status) ? $gad->civil_status->civil_status_name : '';
        $gad->purok_names =  !empty($gad->purok) ? $gad->purok->purok_name : '';
        $gad->sitio_names =  !empty($gad->sitio) ? $gad->sitio->sitio_name : '';
        $gad->native_citys =  !empty($gad->native_city) ? $gad->native_city->city_name : '';
        $gad->native_provinces =  !empty($gad->native_province) ? $gad->native_province->province_name : '';
        $gad->work_location_citys =  !empty($gad->work_location_city) ? $gad->work_location_city->city_name : '';
        $gad->religion_name = !empty($gad->religion) ? $gad->religion->religion_name : '';
        $gad->occupation_name = !empty($gad->occupation) ? $gad->occupation->occupation_name : '';
        $gad->monthly_income_name = !empty($gad->monthly_income) ? $gad->monthly_income->monthly_income_name : '';
        $gad->work_location_provinces =  !empty($gad->work_location_province) ? $gad->work_location_province->province_name : '';
        $gad->valid_id_names =  !empty($gad->validId) ? $gad->validId->name : '';
        $gad->educational_attaintment_name =  !empty($gad->educational_attaintment) ? $gad->educational_attaintment->educational_attaintment_name : '';
        $gad->educational_status_name =  !empty($gad->educational_status) ? $gad->educational_status->educational_status_name : '';
        $gad->government_assistance_name =  !empty($gad->government_assistance) ? $gad->government_assistance->government_assistance_name : '';
        $gad->political_province_registered =  !empty($gad->political_province_registered) ? $gad->political_province_registered->province_name : '';
        '';
        $gad->political_brgy_registered =  !empty($gad->political_brgy_registered_name) ? $gad->political_brgy_registered_name->barangay_name : '';
        $gad->political_city_registered =  !empty($gad->political_city_registered) ? $gad->political_city_registered->city_name : '';
        $gad->house_ownership_names =  !empty($gad->house_ownership) ? $gad->house_ownership->house_ownership_name : '';
        $gad->house_make_names =  !empty($gad->house_make) ? $gad->house_make->house_make_name : '';
        $gad->house_type_names =  !empty($gad->house_type) ? $gad->house_type->house_type_name : '';
        $gad->vehicles_name =  !empty($gad->vehicles) ? $gad->vehicles->vehicles_name : '';
        $gad->medicine_name =  !empty($gad->medicine) ? $gad->medicine->medicine_name : '';
        $gad->organization_name =  !empty($gad->organization) ? $gad->organization->organization_name : '';

        $gad->first_date_vaccination = !empty($gad->first_date_vaccination) ? Carbon::parse($gad->first_date_vaccination)->format('d F Y') : '';
        $gad->second_date_vaccination = !empty($gad->second_date_vaccination) ? Carbon::parse($gad->second_date_vaccination)->format('d F Y') : '';
        $gad->booster_date_vaccination = !empty($gad->booster_date_vaccination) ? Carbon::parse($gad->booster_date_vaccination)->format('d F Y') : '';

        $questions = Question::with(['answers'])->get();
        return response([
            'data' => new GadResource($gad),
            'meta' => [
                'gender' => Gender::get(['id', 'gender_name']),
                'household' => Household::get(['id', 'household_name']),
                'civil_status' => CivilStatus::get(['id', 'civil_status_name']),
                'gender_preference' => GenderPreference::get(['id', 'gender_preference_name']),
                'valid_id' => ValidID::get(['id', 'name']),
                'religion'  => Religion::get(['id', 'religion_name']),
                'ethnicity' => Ethnicity::get(['id', 'ethnicity_name']),
                'sector' => Sector::get(['id', 'sector_name']),
                'political_province_registered' => Province::get(['id', 'province_name']),
                'political_city_registered' => City::get(['id', 'city_name']),
                'purok' => Purok::where('barangay_id', $gad->barangay_id)->get(['id', 'purok_name']),
                'sitio' => Sitio::where('barangay_id', $gad->barangay_id)->get(['id', 'sitio_name']),
                'political_brgy_registered' =>  Barangay::get(['id', 'barangay_name']),
                'educational_attaintment' => EducationalAttaintment::get(['id', 'educational_attaintment_name']),
                'educational_status' => EducationalStatus::get(['id', 'educational_status_name']),
                'government_assistance' => GovernmentAssistance::get(['id', 'government_assistance_name']),
                'organization' => Organization::get(['id', 'organization_name']),
                'occupation' => Occupation::get(['id', 'occupation_name']),
                'work_location_province' => Province::get(['id', 'province_name']),
                'work_location_city' => City::get(['id', 'city_name']),
                'monthly_income' => MonthlyIncome::get(['id', 'monthly_income_name']),
                'barangay' => Barangay::get(['id', 'barangay_name']),
                'hard_skill' => HardSkill::get(['id', 'hard_skill_name']),
                'soft_skill' => SoftSkill::get(['id', 'soft_skill_name']),
                'hobbies'  => Hobbies::get(['id', 'hobbies_name']),
                'sports' => Sports::get(['id', 'sports_name']),
                'house_type' => HouseType::get(['id', 'house_type_name']),
                'house_make' => HouseMake::get(['id', 'house_make_name']),
                'house_ownership' => HouseOwnership::get(['id', 'house_ownership_name']),
                'vehcile' => Vehicles::get(['id', 'vehicles_name']),
                'appliance' => Appliances::get(['id', 'appliance_name']),
                'utilities' => Utilities::get(['id', 'utilities_name']),
                'medicine' => Medicine::get(['id', 'medicine_name']),
                'health_condition' => Health::get(['id', 'health_name']),
                'disability_condition' => Disability::get(['id', 'disability_name']),
                'questions' => $questions
            ],
        ]);
    }
    public function destroy(Gad $gad)
    {
        abort_if(Gate::denies('gad_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $gad->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function importExcel(Request $request)
    {
        $this->validate($request, [
            'import_file' => 'required|mimes:xls,xlsx,csv',
        ]);

        $message = '';

        try {
            $file = $request->file('import_file')->store('temp');
            $path = storage_path('app') . '/' . $file;
            // Excel::import(new ImportGads, request()->file('import_file'));
            dispatch(new GadImportJob($path));
            $message = 'Success';
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $message = $e->getMessage();
        }

        // Reference Per Barangay Also
        Gad::all()->groupBy('household_no')->map(function ($gads) {
            $spouse_gad = $gads->filter(function ($spouse) {
                return $spouse->household_id == 2;
            })->first();

            $household_gad = $gads->filter(function ($spouse) {
                return $spouse->household_id == 1;
            })->first();

            if (isset($spouse_gad)) {
                $data = [
                    'spouse_first_name' => $spouse_gad->first_name ? $spouse_gad->first_name : '',
                    'spouse_last_name' => $spouse_gad->last_name ?  $spouse_gad->last_name : '',
                    'spouse_middle_name' => $spouse_gad->middle_name ? $spouse_gad->middle_name : '',
                    'spouse_extension_name' => $spouse_gad->extension_name ? $spouse_gad->extension_name : '',
                ];
                $main = $gads->filter(function ($spouse) {
                    return $spouse->household_id == 1;
                })->first();

                if (isset($main)) {
                    $main->update($data);
                }
            }

            if (isset($household_gad)) {
                $data = [
                    'spouse_first_name' => $household_gad->first_name ? $household_gad->first_name : '',
                    'spouse_last_name' => $household_gad->last_name ?  $household_gad->last_name : '',
                    'spouse_middle_name' => $household_gad->middle_name ? $household_gad->middle_name : '',
                    'spouse_extension_name' => $household_gad->extension_name ? $household_gad->extension_name : '',
                ];
                $main = $gads->filter(function ($spouse) {
                    return $spouse->household_id == 2;
                })->first();

                if (isset($main)) {
                    $main->update($data);
                }
            }
        });

        return response()->json($message, Response::HTTP_OK);
    }

    public function storeMedia(Request $request)
    {
        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Gad();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
