<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ReportsResource;
use App\Models\Appliances;
use App\Models\Barangay;
use App\Models\City;
use App\Models\CivilStatus;
use App\Models\EducationalAttaintment;
use App\Models\EducationalStatus;
use App\Models\Ethnicity;
use App\Models\Gad;
use App\Models\Gender;
use App\Models\GenderPreference;
use App\Models\GovernmentAssistance;
use App\Models\Household;
use App\Models\MonthlyIncome;
use App\Models\Occupation;
use App\Models\Organization;
use App\Models\Province;
use App\Models\Purok;
use App\Models\Religion;
use App\Models\Sector;
use App\Models\Sitio;
use App\Models\Utilities;
use App\Models\ValidID;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use Carbon\Carbon;


class ReportsApiController extends Controller
{
    public function index(Request $request)
    {
        abort_if(Gate::denies('reports_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');
    }
    public function create(Request $request)
    {
        $barangays = Barangay::all();
        $sector = Sector::all();
        $gender = Gender::all();
        return response([
            'meta' => [
                'gender' => $gender,
                'barangay' => $barangays,
                'sector' => $sector
            ]
        ]);
    }
    public function store(Request $request)
    {
        $barangay_id = !empty($request->barangay) ? $request->barangay['id'] : '';
        $purok_id = !empty($request->purok) ? $request->purok['id'] : '';
        $sitio_id = !empty($request->sitio) ? $request->sitio['id'] : '';
        $sector_id = !empty($request->sector) ? $request->sector['id'] : '';
        $age_from = !empty($request->age_from) ? $request->age_from : '';
        $age_to = !empty($request->age_to) ? $request->age_to : '';

        $gads = Gad::where('barangay_id', $barangay_id)
            ->orWhere('purok_id', $purok_id)
            ->orWhere('sitio_id', $sitio_id)
            ->orWhere('sector_id', $sector_id)
            ->whereBetween('age', [$age_from, $age_to])
            ->paginate();

        foreach ($gads as $gad) {
            $gad->id = !empty($gad->id) ? $gad->id : '';
            $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
            $gad->gender_name = !empty($gad->gender) ? $gad->gender->gender_name : '';
            $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
            $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
            $gad->age = !empty($gad->age) ? $gad->age : '';
            $gad->civil_status_names =  !empty($gad->civil_status) ? $gad->civil_status->civil_status_name : '';
        }

        return new ReportsResource($gads);
    }
    public function getData(Request $request)
    {
        $barangay_id = !empty($request->barangay) ? json_decode($request->barangay)->id : '';
        $purok_id = !empty($request->purok) ? json_decode($request->purok)->id : '';
        $sitio_id = !empty($request->sitio) ? json_decode($request->sitio)->id : '';
        $sector_id = !empty($request->sector) ? json_decode($request->sector)->id : '';
        $gender_id =  !empty($request->gender) ? json_decode($request->gender)->id : '';
        $age_from = !empty($request->age_from) ? $request->age_from : '';
        $age_to = !empty($request->age_to) ? $request->age_to : '';
        $gads = Gad::where('barangay_id', $barangay_id)
            ->orWhere('sector_id', $sector_id)
            ->orWhere('sitio_id', $sitio_id)
            ->orWhere('gender_id', $gender_id)
            ->orderBy('gender_id', 'DESC')
            ->paginate();
        // with([
        //             'barangay:id,barangay_name',
        //             'sector',
        //             'resident_status',
        //             'validId',
        //             'native_province',
        //             'native_city',
        //             'work_location_province',
        //             'work_location_city',
        //             'political_province_registered',
        //             'political_city_registered',
        //             'educational_attaintment',
        //             'educational_attaintment',
        //             'educational_status',
        //             'government_assistance',
        //             'purok',
        //             'vehicles',
        //             'medicine',
        //             'organization',
        //             'sitio',
        //             'ethnicity',
        //             'household',
        //             'gender',
        //             'gender_preference',
        //             'house_ownership',
        //             'house_type',
        //             'house_make',
        //         ]

        if ($gender_id) {
            if ($gender_id == '1') {
                $male = Gad::where('barangay_id', $barangay_id)
                    ->orWhere('sector_id', $sector_id)
                    ->orWhere('sitio_id', $sitio_id)
                    ->orWhere('gender_id', $gender_id)
                    ->orderBy('gender_id', 'DESC')
                    ->count();
                $female = 0;
            } else {
                $male = Gad::where('barangay_id', $barangay_id)
                    ->orWhere('sector_id', $sector_id)
                    ->orWhere('sitio_id', $sitio_id)
                    ->orWhere('gender_id', $gender_id)
                    ->orderBy('gender_id', 'DESC')
                    ->count();
                $female = 0;
            }
        } else {

            $male = Gad::where('barangay_id', $barangay_id)
                ->where('gender_id', '1')
                ->orWhere('sector_id', $sector_id)
                ->orWhere('sitio_id', $sitio_id)
                ->count();
            $female = Gad::where('barangay_id', $barangay_id)
                ->where('gender_id', '2')
                ->orWhere('sector_id', $sector_id)
                ->orWhere('sitio_id', $sitio_id)
                ->count();
        }

        foreach ($gads as $gad) {
            $gad->id = !empty($gad->id) ? $gad->id : '';
            $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
            $gad->gender_name = !empty($gad->gender) ? $gad->gender->gender_name : '';
            $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
            $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
            $gad->age = !empty($gad->age) ? $gad->age : '';
            $gad->civil_status_names = !empty($gad->civil_status) ? $gad->civil_status->civil_status_name : '';
            $gad->ethnicity_name = !empty($gad->ethnicity) ? $gad->ethnicity->ethnicity_name : '';
        }

        $all_gads = Gad::where('barangay_id', $barangay_id)
            ->orWhere('sector_id', $sector_id)
            ->orWhere('sitio_id', $sitio_id)
            ->orWhere('gender_id', $gender_id)
            ->orderBy('gender_id', 'DESC')
            ->get();

        foreach ($all_gads as $gad) {
            $gad->id = !empty($gad->id) ? $gad->id : '';
            $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
            $gad->gender_preference_name = !empty($gad->gender_preference) ? $gad->gender_preference->gender_preference_name : '';
            $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
            $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
            $gad->age = !empty($gad->age) ? $gad->age : '';
            $gad->ethnicity_name = !empty($gad->ethnicity) ? $gad->ethnicity->ethnicity_name : '';
            $gad->birthdate = !empty($gad->birthdate) ? Carbon::parse($gad->birthdate)->format('d F Y') : '';
            $gad->no_of_years_in_calamba = !empty($gad->no_of_years_in_calamba) ? Carbon::parse($gad->no_of_years_in_calamba)->format('d F Y') : '';
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
        }

        return response([
            'data' => new ReportsResource($gads),
            'meta' => [
                'report' => new ReportsResource($all_gads),
                'Female' => $female,
                'Male' => $male,
            ]
        ]);
    }
    public function getSitioPurok($id)
    {
        $purok = Purok::where('barangay_id', $id)->get();
        $sitio = Sitio::where('barangay_id', $id)->get();
        return response([
            'meta' => [
                'purok' => $purok,
                'sitio' => $sitio,
            ]
        ]);
    }
}
