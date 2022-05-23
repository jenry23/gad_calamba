<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\GadResource;
use App\Models\Gad;
use App\Models\Barangay;
use App\Models\Sitio;
use App\Models\Purok;
use App\Models\CivilStatus;
use App\Models\Household;
use App\Models\Gender;
use App\Models\Utilities;
use App\Models\Appliances;
use App\Models\Religion;
use App\Models\GenderPreference;
use App\Models\ValidID;
use App\Models\GovernmentAssistance;
use App\Models\MonthlyIncome;
use App\Imports\ImportGads;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\EducationalAttaintment;
use App\Models\EducationalStatus;
use App\Models\Province;
use App\Models\City;
use App\Models\Occupation;
use App\Models\Organization;
use App\Models\Ethnicity;
use App\Models\Sector;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
            "poltical_city_registered_id" => $request->poltical_city_registered_id ? $request->poltical_city_registered_id['id'] : '',
            "poltical_province_registered_id" => $request->poltical_province_registered_id ? $request->poltical_province_registered_id['id'] : '',
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
        $search = $request->query()['query'];
        $gad_search = Gad::orWhere('first_name', 'like', '%' . $search . '%')
            ->orWhere('last_name', 'like', '%' . $search . '%')
            ->orWhere('middle_name', 'like', '%' . $search . '%')
            ->get();

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
        return response([
            'meta' => [],
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

    public function show($id)
    {
        $gads = Gad::where('household_no', $id)->get();
        $gad = Gad::where('household_no', $id)->first();
        foreach ($gads as $gad) {
            $gad->id = !empty($gad->id) ? $gad->id : '';
            $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
            $gad->gender_name = !empty($gad->genders) ? $gad->genders->gender_name : '';
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
            $gads->valid_id_names =  !empty($gads->validId) ? $gads->validId->name : '';
            $gads->educational_attaintment_name =  !empty($gads->educational_attaintment) ? $gads->educational_attaintment->educational_attaintment_name : '';
            $gads->educational_status_name =  !empty($gads->educational_status) ? $gads->educational_status->educational_status_name : '';
            $gads->government_assistance_name =  !empty($gads->government_assistance) ? $gads->government_assistance->government_assistance_name : '';
            $gad->political_province_registered =  !empty($gad->political_province_registered) ? $gad->political_province_registered->city_name : '';
            $gad->political_city_registered =  !empty($gad->political_city_registered) ? $gad->political_city_registered->city_name : '';
            $gads->house_ownership_names =  !empty($gads->house_ownership) ? $gads->house_ownership->house_ownership_name : '';
            $gads->house_make_names =  !empty($gads->house_make) ? $gads->house_make->house_make_name : '';
            $gads->house_type_names =  !empty($gads->house_type) ? $gads->house_type->house_type_name : '';
            $utilities1 = Utilities::where('id', $gad->utilities_no1)->first();
            $utilities2 = Utilities::where('id', $gad->utilities_no2)->first();
            $utilities3 = Utilities::where('id', $gad->utilities_no3)->first();
            $utilities4 = Utilities::where('id', $gad->utilities_no4)->first();
            $gad->gad_utilities_no1 = !empty($utilities1) ? $utilities1->utilities_name : '';
            $gad->gad_utilities_no2 = !empty($utilities2) ? $utilities2->utilities_name : '';
            $gad->gad_utilities_no3 = !empty($utilities3) ? $utilities3->utilities_name : '';
            $gad->gad_utilities_no4 = !empty($utilities4) ? $utilities4->utilities_name : '';
            $appliances1 = Appliances::where('id', $gad->appliances_no1)->first();
            $appliances2 = Appliances::where('id', $gad->appliances_no2)->first();
            $appliances3 = Appliances::where('id', $gad->appliances_no3)->first();
            $appliances4 = Appliances::where('id', $gad->appliances_no4)->first();
            $gad->gad_appliances_no1 = !empty($appliances1) ? $appliances1->appliance_name : '';
            $gad->gad_appliances_no2 = !empty($appliances2) ? $appliances2->appliance_name : '';
            $gad->gad_appliances_no3 = !empty($appliances3) ? $appliances3->appliance_name : '';
            $gad->gad_appliances_no4 = !empty($appliances4) ? $appliances4->appliance_name : '';
            $gad->vehicles_name =  !empty($gads->vehicles) ? $gads->vehicles->vehicles_name : '';
            $gad->medicine_name =  !empty($gads->medicine) ? $gads->medicine->medicine_name : '';
            $gad->organization_name =  !empty($gads->organization) ? $gads->organization->organization_name : '';
        }
        return new GadResource([$gads, $gad]);
    }

    public function update(Request $request, Gad $gad)
    {
        $data = [
            'building_no' => $request->building_no,
            'household_no' => $request->household_no,
            'house_unit' => $request->house_unit,
            'household_id' => $request->household_id,
            'family_code' => $request->family_code,
            'work_location_province_id' => $request->work_location_province_id,
            'work_location_city_id' => $request->work_location_city_id,
            'poltical_province_registered_id' => $request->poltical_province_registered_id,
            'poltical_city_registered_id' => $request->poltical_city_registered_id,
            'no_nuclear_family_household_id' => $request->no_nuclear_family_household_id,
            'no_bedrooms_id' => $request->no_bedrooms_id,
            'no_cr_id' => $request->no_cr_id,
            'barangay_residence_year' => $request->barangay_residence_year,
            'no_of_years_in_calamba' => $request->no_of_years_in_calamba,
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
            'occupation' => $request->occupation,
            'employer' => $request->employer,
            'last_school_attended' => $request->last_school_attended,
            'barangay_id' => $request->barangay_id,
            'purok_id' => $request->purok_id,
            'sitio_id' => $request->sitio_id,
            'subdivision_name' => $request->subdivision_name,
            'native_province_id' => $request->native_province_id,
            'native_city_id' => $request->native_city_id,
            'valid_id' => $request->valid_id,
            'id_number' => $request->id_number,
            'sector_id' => $request->sector_id,
            'gender_id' => $request->gender_id,
            'gender_preference_id' => $request->gender_preference_id,
            'civil_status_id' => $request->civil_status_id,
            'health_id' => $request->health_id,
            'disability_id' => $request->disability_id,
            'government_assistance_id' => $request->government_assistance_id,
            'household_monthly_income_id' => $request->household_monthly_income_id,
            'economic_status_id' => $request->economic_status_id,
            'educational_attaintment_id' => $request->educational_attaintment_id,
            'educational_status_id' => $request->educational_status_id,
            'government_educational_assistance_id' => $request->government_educational_assistance_id,
            'ethnicity_id' => $request->ethnicity_id,
            'house_ownership_id' => $request->house_ownership_id,
            'house_type_id' => $request->house_type_id,
            'house_make_id' => $request->house_make_id,
            'organization_id' => $request->organization_id,
            'barangay_code' => $request->barangay_code,
            'block_lot_house_id' => $request->block_lot_house_id,
            'monthly_income' => $request->monthly_income,
            'birthdate' => $request->birthdate,
            'utilities_no1' => $request->utilities_no1,
            'utilities_no2' => $request->utilities_no2,
            'utilities_no3' => $request->utilities_no3,
            'utilities_no4' => $request->utilities_no4,
            'appliance_no1' => $request->appliance_no1,
            'appliance_no2' => $request->appliance_no2,
            'appliance_no3' => $request->appliance_no3,
            'appliance_no4' => $request->appliance_no4,
            'vehicle_no' => $request->vehicle_no,
            'medical_id' => $request->medical_id,
            'religion_id' => $request->religion_id,
            'full_immunization' => $request->full_immunization,
            'covid_19_test' => $request->covid_19_test,
            'first_vaccination' => $request->first_vaccination,
            'brand' => $request->brand,
            'second_vaccination' => $request->second_vaccination,
            'brand2' => $request->brand2,
            'pregnancy_age' => $request->pregnancy_age,
            'prental_checkup' => $request->prental_checkup,
            'postnatal_checkup' => $request->postnatal_checkup,
            'remarks' => $request->remark,
        ];

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

        return (new GadResource($gad))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit($id)
    {
        $gad = Gad::find($id);
        $gad->id = !empty($gad->id) ? $gad->id : '';
        $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
        $gad->gender_name = !empty($gad->genders) ? $gad->genders->gender_name : '';
        $gad->gender_preference_name = !empty($gad->gender_preference) ? $gad->gender_preference->gender_preference_name : '';
        $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
        $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
        $gad->age = !empty($gad->age) ? $gad->age : '';
        $gad->ethnicity_name = !empty($gad->ethnicity) ? $gad->ethnicity->ethnicity_name : '';

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
        $gad->political_province_registered =  !empty($gad->political_province_registered) ? $gad->political_province_registered->province_name : '';
        $gad->political_city_registered =  !empty($gad->political_city_registered) ? $gad->political_city_registered->city_name : '';
        $gad->house_ownership_names =  !empty($gad->house_ownership) ? $gad->house_ownership->house_ownership_name : '';
        $gad->house_make_names =  !empty($gad->house_make) ? $gad->house_make->house_make_name : '';
        $gad->house_type_names =  !empty($gad->house_type) ? $gad->house_type->house_type_name : '';
        $utilities1 = Utilities::where('id', $gad->utilities_no1)->first();
        $utilities2 = Utilities::where('id', $gad->utilities_no2)->first();
        $utilities3 = Utilities::where('id', $gad->utilities_no3)->first();
        $utilities4 = Utilities::where('id', $gad->utilities_no4)->first();
        $gad->gad_utilities_no1 = !empty($utilities1) ? $utilities1->utilities_name : '';
        $gad->gad_utilities_no2 = !empty($utilities2) ? $utilities2->utilities_name : '';
        $gad->gad_utilities_no3 = !empty($utilities3) ? $utilities3->utilities_name : '';
        $gad->gad_utilities_no4 = !empty($utilities4) ? $utilities4->utilities_name : '';
        $appliances1 = Appliances::where('id', $gad->appliances_no1)->first();
        $appliances2 = Appliances::where('id', $gad->appliances_no2)->first();
        $appliances3 = Appliances::where('id', $gad->appliances_no3)->first();
        $appliances4 = Appliances::where('id', $gad->appliances_no4)->first();
        $gad->gad_appliances_no1 = !empty($appliances1) ? $appliances1->appliance_name : '';
        $gad->gad_appliances_no2 = !empty($appliances2) ? $appliances2->appliance_name : '';
        $gad->gad_appliances_no3 = !empty($appliances3) ? $appliances3->appliance_name : '';
        $gad->gad_appliances_no4 = !empty($appliances4) ? $appliances4->appliance_name : '';
        $gad->vehicles_name =  !empty($gad->vehicles) ? $gad->vehicles->vehicles_name : '';
        $gad->medicine_name =  !empty($gad->medicine) ? $gad->medicine->medicine_name : '';
        $gad->organization_name =  !empty($gad->organization) ? $gad->organization->organization_name : '';
        return new GadResource($gad);
    }
    public function destroy(Gad $Gad)
    {
        abort_if(Gate::denies('Gad_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $Gad->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function importExcel(Request $request)
    {
        $message = '';

        try {
            Excel::import(new ImportGads, request()->file('import_file'));
            $message = 'Success';
        } catch (\Exception $e) {
            $message = $e->getMessage();
        }

        Gad::all()->map(function ($gad) {
            $full_name = substr($gad->first_name, 0, 1) . substr($gad->middle_name, 0, 1) . substr($gad->last_name, 0, 1);
            $gad_id = 'LAG-CAL' . $gad->barangay_id . '-' . $gad->household_no . $full_name
                . substr($gad->birthdate, -2) . '00-0000';
            $gad->update(['gad_id' => $gad_id]);
        });

        Gad::all()->groupBy('household_no')->map(function ($gads) {
            $spouse_id = 2;
            $mainhousehold_id = 1;
            $spouse_gad = $gads->filter(function ($spouse) use ($spouse_id) {
                return $spouse->household_id == $spouse_id;
            })->first();
            if (isset($spouse_gad)) {
                $data = [
                    'spouse_first_name' => $spouse_gad->first_name ? $spouse_gad->first_name : '',
                    'spouse_last_name' => $spouse_gad->last_name ?  $spouse_gad->last_name : '',
                    'spouse_middle_name' => $spouse_gad->middle_name ? $spouse_gad->middle_name : '',
                    'spouse_extension_name' => $spouse_gad->extension_name ? $spouse_gad->extension_name : '',
                ];
                $main = $gads->filter(function ($spouse) use ($mainhousehold_id) {
                    return $spouse->household_id == $mainhousehold_id;
                })->first();

                $main->update($data);
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
