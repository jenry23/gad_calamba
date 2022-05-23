<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\DashboardResource;
use App\Models\Barangay;
use App\Models\Gad;
use App\Models\GovernmentAssistance;
use App\Models\MonthlyIncome;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DashboardApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('dashboard_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $total_people_count = Gad::all()->count();
        $total_male_count = Gad::where('gender_id', '1')->count();
        $total_female_count = Gad::where('gender_id', '2')->count();

        //Senior
        $total_senior = Gad::where('sector_id', '2')->get();
        $total_senior_count = $total_senior->count();
        //Senior Male
        $total_senior_male = Gad::where('sector_id', '2')->where('gender_id', '1')->get();
        $total_male_senior_count = $total_senior_male->count();
        //Senior Female
        $total_senior_female = Gad::where('sector_id', '2')->where('gender_id', '2')->get();
        $total_female_senior_count = $total_senior_female->count();

        //Total Person With Disablitiy
        $total_person_disability = Gad::where('sector_id', '1')->get();
        $total_person_disability_count = $total_person_disability->count();
        //Person With Disablitiy Male
        $total_disablity_male = Gad::where('sector_id', '1')->where('gender_id', '1')->get();
        $total_male_disablity_count = $total_disablity_male->count();
        //Person With Disablitiy Female
        $total_disablity_female = Gad::where('sector_id', '1')->where('gender_id', '2')->get();
        $total_female_disablity_count = $total_disablity_female->count();

        $barangays = Barangay::all();
        foreach ($barangays as $barangay) {
            $resident = Gad::where('barangay_id', $barangay->id)->get();
            $barangay->count_resident = $resident->count();
            $total = Gad::count();
            $barangay->percent = $resident->count() / $total * 100;
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
                'barangays' => $barangays
            ]
        ]);
    }
    public function getGoverment(Request $request)
    {
        $government_assistance = GovernmentAssistance::all();
        foreach ($government_assistance as $assistance) {
            $gads = Gad::where('government_assistance_id', $assistance->id)->get();
            $assistance->count_assistance = $gads->count();
        }
        return new DashboardResource($government_assistance);
    }
    public function getMonthlyIncome(Request $request)
    {
        $monthly_income = MonthlyIncome::all();
        foreach ($monthly_income as $monthly) {
            $max_wages = (float)$monthly->range_max;
            $min_wages = (float)$monthly->range_min;
            $gads = Gad::whereBetween('monthly_income', [$min_wages, $max_wages])->get();
            $monthly->count_income = $gads->count();
        }
        return new DashboardResource($monthly_income);
    }
}
