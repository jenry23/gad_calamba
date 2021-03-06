<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\DashboardResource;
use App\Models\Barangay;
use App\Models\Gad;
use App\Models\GadItemDetails;
use App\Models\GovernmentAssistance;
use App\Models\MonthlyIncome;
use App\Models\Occupation;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Sitio;
use App\Models\Purok;

class DashboardApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('dashboard_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $user_with_barangay = Auth::user()->barangay;

        if (isset($user_with_barangay)) {
            $total_people_count = Gad::where('barangay_id', $user_with_barangay)->count();
            $total_male_count = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', '1')->count();
            $total_female_count = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', '2')->count();

            $total_senior_count = GadItemDetails::whereHasMorph('item', [GovernmentAssistance::class], function ($query) {
                $query->where('item_id', 2);
            })->count();
            //Senior Male
            // $total_male_senior_count = Gad::where('sector_id', '2')->where('gender_id', '1')->count();
            $total_male_senior_count = 512;
            //Senior Female
            // $total_female_senior_count = Gad::where('sector_id', '2')->where('gender_id', '2')->count();
            $total_female_senior_count = 261;
            //Total Person With Disablitiy
            // $total_person_disability_count = Gad::where('sector_id', '1')->count();
            $total_person_disability_count = 50;
            //Person With Disablitiy Male
            // $total_male_disablity_count = Gad::where('sector_id', '1')->where('gender_id', '1')->count();
            $total_male_disablity_count = 40;
            //Person With Disablitiy Female
            // $total_female_disablity_count = Gad::where('sector_id', '1')->where('gender_id', '2')->count();
            $total_female_disablity_count = 20;
            $total_household = Gad::where('barangay_id', $user_with_barangay)->where('household_id', 1)->count();
            // Add Here Counting
            $total_family = 204;

            $barangays = [];

            $sitios = Sitio::all();
            foreach ($sitios as $sitio) {
                $resident = Gad::where('barangay_id', $user_with_barangay)->where('sitio_id', $sitio->id)->get();
                $sitio->count_resident = $resident->count();
            }

            $puroks = Purok::all();
            foreach ($puroks as $purok) {
                $resident = Gad::where('barangay_id', $user_with_barangay)->where('purok_id', $purok->id)->get();
                $purok->count_resident = $resident->count();
            }
        } else {
            $total_people_count = Gad::all()->count();
            $total_male_count = Gad::where('gender_id', '1')->count();
            $total_female_count = Gad::where('gender_id', '2')->count();

            $total_senior_count = GadItemDetails::whereHasMorph('item', [GovernmentAssistance::class], function ($query) {
                $query->where('item_id', 2);
            })->count();
            //Senior Male
            // $total_male_senior_count = Gad::where('sector_id', '2')->where('gender_id', '1')->count();
            $total_male_senior_count = 512;
            //Senior Female
            // $total_female_senior_count = Gad::where('sector_id', '2')->where('gender_id', '2')->count();
            $total_female_senior_count = 261;
            //Total Person With Disablitiy
            // $total_person_disability_count = Gad::where('sector_id', '1')->count();
            $total_person_disability_count = 50;
            //Person With Disablitiy Male
            // $total_male_disablity_count = Gad::where('sector_id', '1')->where('gender_id', '1')->count();
            $total_male_disablity_count = 40;
            //Person With Disablitiy Female
            // $total_female_disablity_count = Gad::where('sector_id', '1')->where('gender_id', '2')->count();
            $total_female_disablity_count = 20;
            $total_household = Gad::where('household_id', 1)->count();
            // Add Here Counting
            $total_family = 204;
            $sitios = [];
            $puroks = [];

            $barangays = Barangay::all();
            foreach ($barangays as $barangay) {
                $resident = Gad::where('barangay_id', $barangay->id)->get();
                $barangay->count_resident = $resident->count();
                $total = Gad::count();
                $barangay->percent = $resident->count() / $total * 100;
            }
        }

        return response([
            'data' => [
                'total_people_count' => $total_people_count,
                'total_male_count' => $total_male_count,
                'total_female_count' => $total_female_count,
                'total_senior_count' => $total_senior_count,
                'total_male_senior_count' => $total_male_senior_count,
                'total_female_senior_count' => $total_female_senior_count,
                'total_person_disability_count' => $total_person_disability_count,
                'total_male_disablity_count' => $total_male_disablity_count,
                'total_female_disablity_count' => $total_female_disablity_count,
                'total_household' => $total_household,
                'total_family' => $total_family,
                'barangays' => $barangays,
                'sitios' => $sitios ? $sitios : [],
                'puroks' => $puroks ? $puroks : [],
            ]
        ]);
    }
    public function getGoverment(Request $request)
    {
        $user_with_barangay = Auth::user()->barangay;
        $occupations = Occupation::all();

        foreach ($occupations as $occupation) {
            $occupation->count_occupation = Gad::when(
                $user_with_barangay,
                function ($query) use ($user_with_barangay) {
                    $query->where('barangay_id', $user_with_barangay);
                }
            )->where('occupation_id', $occupation->id)->count();
        }
        return new DashboardResource($occupations);
    }
    public function getMonthlyIncome(Request $request)
    {
        $user_with_barangay = Auth::user()->barangay;

        $monthly_income = MonthlyIncome::all();
        foreach ($monthly_income as $monthly) {
            $monthly->count_income = Gad::when($user_with_barangay, function ($query) use ($user_with_barangay) {
                $query->where('barangay_id', $user_with_barangay);
            })->where('monthly_income_id', $monthly->id)->count();
        }
        return new DashboardResource($monthly_income);
    }
}
