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
use App\Models\Sector;
use App\Models\Purok;
use Carbon\Carbon;

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

            // Total Senior
            $total_senior_count = GadItemDetails::whereHas(
                'gad',
                fn ($query) => $query->where('barangay_id', $user_with_barangay)
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 2);
                }
            )->count();
            //Senior Male
            $total_male_senior_count = GadItemDetails::whereHas(
                'gad',
                function ($query) use ($user_with_barangay) {
                    $query->where('barangay_id', $user_with_barangay);
                    $query->where('gender_id', 1);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 2);
                }
            )->count();
            //Senior Female
            $total_female_senior_count = GadItemDetails::whereHas(
                'gad',
                function ($query) use ($user_with_barangay) {
                    $query->where('barangay_id', $user_with_barangay);
                    $query->where('gender_id', 2);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 2);
                }
            )->count();

            //Total Person With Disablitiy
            $total_person_disability_count = GadItemDetails::whereHas(
                'gad',
                fn ($query) => $query->where('barangay_id', $user_with_barangay)
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 1);
                }
            )->count();
            //Person With Disablitiy Male
            $total_male_disablity_count = GadItemDetails::whereHas(
                'gad',
                function ($query) use ($user_with_barangay) {
                    $query->where('barangay_id', $user_with_barangay);
                    $query->where('gender_id', 1);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 1);
                }
            )->count();
            //Person With Disablitiy Female
            $total_female_disablity_count = GadItemDetails::whereHas(
                'gad',
                function ($query) use ($user_with_barangay) {
                    $query->where('barangay_id', $user_with_barangay);
                    $query->where('gender_id', 2);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 1);
                }
            )->count();

            $total_household = Gad::where('barangay_id', $user_with_barangay)->where('household_id', 1)->count();
            // Add Here Counting
            $total_family = 204;

            $barangays = [];

            $sitios = Sitio::where('barangay_id', $user_with_barangay)->get();
            foreach ($sitios as $sitio) {
                $resident = Gad::where('barangay_id', $user_with_barangay)->where('sitio_id', $sitio->id)->get();
                $sitio->count_resident = $resident->count();
            }

            $puroks = Purok::where('barangay_id', $user_with_barangay)->get();
            foreach ($puroks as $purok) {
                $resident = Gad::where('barangay_id', $user_with_barangay)->where('purok_id', $purok->id)->get();
                $purok->count_resident = $resident->count();
            }

            $total_voters_count = Gad::where('barangay_id', $user_with_barangay)->where('political_city_registered_id', 410)->count();
            $total_voters_male_count = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->where('political_city_registered_id', 410)->count();
            $total_voters_female_count = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->where('political_city_registered_id', 410)->count();

            $transient_status_male = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->whereDate('calamba_residence_year', '>', Carbon::now()->subMonth(6))->count();
            $transient_status_female = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->whereDate('calamba_residence_year', '>', Carbon::now()->subMonth(6))->count();
            $immigrant_status_male = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->whereBetween('calamba_residence_year', [Carbon::now()->subMonth(6)->addDay(1), Carbon::now()->subYear(2)])->count();
            $immigrant_status_female = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->whereBetween('calamba_residence_year', [Carbon::now()->subMonth(6)->addDay(1), Carbon::now()->subYear(2)])->count();
            $native_status_male  =
                Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->whereDate('calamba_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
            $native_status_female  =
                Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->whereDate('calamba_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
        } else {
            $total_people_count = Gad::all()->count();
            $total_male_count = Gad::where('gender_id', '1')->count();
            $total_female_count = Gad::where('gender_id', '2')->count();

            $total_senior_count = GadItemDetails::whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 2);
                }
            )->count();

            //Senior Male
            $total_male_senior_count = $total_male_senior_count = GadItemDetails::whereHas(
                'gad',
                function ($query) {
                    $query->where('gender_id', 1);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 2);
                }
            )->count();;
            //Senior Female
            $total_female_senior_count = $total_female_senior_count = GadItemDetails::whereHas(
                'gad',
                function ($query) {
                    $query->where('gender_id', 2);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 2);
                }
            )->count();
            //Total Person With Disablitiy
            $total_person_disability_count = GadItemDetails::whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 1);
                }
            )->count();
            //Person With Disablitiy Male
            $total_male_disablity_count = GadItemDetails::whereHas(
                'gad',
                function ($query) {
                    $query->where('gender_id', 1);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 1);
                }
            )->count();
            //Person With Disablitiy Female
            $total_female_disablity_count = GadItemDetails::whereHas(
                'gad',
                function ($query) {
                    $query->where('gender_id', 2);
                }
            )->whereHasMorph(
                'item',
                [Sector::class],
                function ($query) {
                    $query->where('item_id', 1);
                }
            )->count();
            $total_household = Gad::where('household_id', 1)->count();
            // Add Here Counting
            $total_family = 204;
            $sitios = [];
            $puroks = [];

            $barangays = Barangay::all();
            foreach ($barangays as $barangay) {
                $barangay->count_resident = Gad::where('barangay_id', $barangay->id)->count();
                $total = Gad::count();
                if ($barangay->count_resident != 0) {
                    $barangay->percent = number_format($barangay->count_resident / $total * 100, 2);
                } else {
                    $barangay->percent = 0;
                }
            }

            $total_voters_count = Gad::where('political_city_registered_id', 410)->count();
            $total_voters_male_count = Gad::where('gender_id', 1)->where('political_city_registered_id', 410)->count();
            $total_voters_female_count = Gad::where('gender_id', 2)->where('political_city_registered_id', 410)->count();

            $transient_status_male = Gad::where('gender_id', 1)->whereDate('calamba_residence_year', '>', Carbon::now()->subMonth(6))->count();
            $transient_status_female = Gad::where('gender_id', 2)->whereDate('calamba_residence_year', '>', Carbon::now()->subMonth(6))->count();
            $immigrant_status_male = Gad::where('gender_id', 1)->whereBetween('calamba_residence_year', [Carbon::now()->subMonth(6)->addDay(1), Carbon::now()->subYear(2)])->count();
            $immigrant_status_female = Gad::where('gender_id', 2)->whereBetween('calamba_residence_year', [Carbon::now()->subMonth(6)->addDay(1), Carbon::now()->subYear(2)])->count();
            $native_status_male  =
                Gad::where('gender_id', 1)->whereDate('calamba_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
            $native_status_female  =
                Gad::where('gender_id', 2)->whereDate('calamba_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
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
                'total_voters_count' => $total_voters_count,
                'total_voters_male_count' => $total_voters_male_count,
                'total_voters_female_count' => $total_voters_female_count,
                'barangays' => $barangays,
                'immigrant_status_male' => $immigrant_status_male,
                'immigrant_status_female' => $immigrant_status_female,
                'native_status_male' => $native_status_male,
                'native_status_female' => $native_status_female,
                'transient_status_male' => $transient_status_male,
                'transient_status_female' => $transient_status_female,
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
