<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\DashboardResource;
use App\Models\Barangay;
use App\Models\Disability;
use App\Models\EducationalAttaintment;
use App\Models\Gad;
use App\Models\GadItemDetails;
use App\Models\GovernmentAssistance;
use App\Models\HouseOwnership;
use App\Models\MonthlyIncome;
use App\Models\Occupation;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Sitio;
use App\Models\Sector;
use App\Models\Purok;
use App\Models\Utilities;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class DashboardApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('dashboard_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        ini_set('memory_limit', '5G');

        $user_with_barangay = Auth::user()->barangay;
        $dashboard_data = [];
        $dashboard_data_list = [];

        if (isset($user_with_barangay)) {
            $dashboard_data_list = Cache::remember('dashboard_data'.$user_with_barangay, 220, function () use ($user_with_barangay) {
                $data = [];
                $data['total_people_count'] = Gad::select('barangay_id')->where('barangay_id', $user_with_barangay)->count();
                $data['total_male_count'] = Gad::select('barangay_id')->where('barangay_id', $user_with_barangay)->where('gender_id', '1')->count();
                $data['total_female_count'] = Gad::select('barangay_id')->where('barangay_id', $user_with_barangay)->where('gender_id', '2')->count();

                // Total Senior
                $data['total_senior_count'] = GadItemDetails::select(['barangay_id', 'item_id'])->whereHas(
                    'gad',
                    function ($query) use ($user_with_barangay) {
                        $query->where('barangay_id', $user_with_barangay);
                    }
                )->where('item_name', 'sector')->where('item_id', '2')->count();
                //Senior Male
                $data['total_male_senior_count'] = GadItemDetails::whereHas(
                    'gad',
                    function ($query) use ($user_with_barangay) {
                        $query->where('barangay_id', $user_with_barangay);
                        $query->where('gender_id', 1);
                    }
                )->where('item_name', 'sector')->where('item_id', '2')->count();
                //Senior Female
                $data['total_female_senior_count'] = GadItemDetails::whereHas(
                    'gad',
                    function ($query) use ($user_with_barangay) {
                        $query->where('barangay_id', $user_with_barangay);
                        $query->where('gender_id', 2);
                    }
                )->where('item_name', 'sector')->where('item_id', '2')->count();

                //Total Person With Disablitiy
                $data['total_person_disability_count'] = GadItemDetails::whereHas(
                    'gad',
                    fn ($query) => $query->where('barangay_id', $user_with_barangay)
                )->where('item_name', 'sector')->where('item_id', '1')->count();
                //Person With Disablitiy Male
                $data['total_male_disablity_count'] = GadItemDetails::whereHas(
                    'gad',
                    function ($query) use ($user_with_barangay) {
                        $query->where('barangay_id', $user_with_barangay);
                        $query->where('gender_id', 1);
                    }
                )->where('item_name', 'sector')->where('item_id', '1')->count();
                //Person With Disablitiy Female
                $data['total_female_disablity_count'] = GadItemDetails::whereHas(
                    'gad',
                    function ($query) use ($user_with_barangay) {
                        $query->where('barangay_id', $user_with_barangay);
                        $query->where('gender_id', 2);
                    }
                )->where('item_name', 'sector')->where('item_id', '1')->count();

                $data['total_household'] = Gad::where('barangay_id', $user_with_barangay)->where('household_id', 1)->where('family_code', 'A')->count();
                // Add Here Counting
                $data['total_family'] = Gad::where('barangay_id', $user_with_barangay)->where('household_id', 1)->count();

                $barangays = [];

                $sitios = Sitio::where('barangay_id', $user_with_barangay)->get();
                foreach ($sitios as $sitio) {
                    $resident = Gad::select('id')->where('barangay_id', $user_with_barangay)->where('sitio_id', $sitio->id)->get();
                    $sitio->count_resident = $resident->count();
                }

                $puroks = Purok::where('barangay_id', $user_with_barangay)->get();
                foreach ($puroks as $purok) {
                    $purok->count_resident = Gad::select('id')->where('barangay_id', $user_with_barangay)->where('purok_id', $purok->id)->count();
                }

                $data['puroks'] = $puroks;
                $data['sitios'] = $sitios;

                $data['total_voters_count'] = Gad::where('barangay_id', $user_with_barangay)->where('political_brgy_registered', $user_with_barangay)->count();
                $data['total_voters_male_count'] = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->where('political_brgy_registered', $user_with_barangay)->count();
                $data['total_voters_female_count'] = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->where('political_brgy_registered', $user_with_barangay)->count();

                $data['transient_status_female'] = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->whereDate('barangay_residence_year', '>', Carbon::now()->subMonth(6))->count();
                $data['transient_status_female'] = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->whereDate('barangay_residence_year', '>', Carbon::now()->subMonth(6))->count();
                $data['immigrant_status_male'] = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->whereBetween('barangay_residence_year', [Carbon::now()->subYear(2), Carbon::now()->subMonth(6)->addDay(1)])->count();
                $data['immigrant_status_female'] = Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->whereBetween('barangay_residence_year', [Carbon::now()->subYear(2), Carbon::now()->subMonth(6)->addDay(1)])->count();
                $data['native_status_male']  =
                    Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 1)->whereDate('barangay_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
                $data['native_status_female']  =
                    Gad::where('barangay_id', $user_with_barangay)->where('gender_id', 2)->whereDate('barangay_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
                $data['total_male_migration_rate'] = Gad::where('barangay_id', $user_with_barangay)->whereNotNull('migration_rate_id')->where('gender_id', 1)->count();
                $data['total_female_migration_rate'] = Gad::where('barangay_id', $user_with_barangay)->whereNotNull('migration_rate_id')->where('gender_id', 2)->count();
                $data['is_barangay'] = 1;

                return $data;
            });
        } else {
            $dashboard_data = Cache::remember('dashboard_data', 220, function () {
                $data = [];
                $data['total_people_count'] = Gad::select('id')->count();
                $data['total_male_count'] = Gad::select('gender_id')->where('gender_id', '1')->count();
                $data['total_female_count'] = Gad::select('gender_id')->where('gender_id', '2')->count();

                $data['total_senior_count'] = GadItemDetails::select('item_name')->where('item_name', 'sector')->where('item_id', '2')->count();

                //Senior Male
                $data['total_male_senior_count'] = $data['total_male_senior_count'] = GadItemDetails::select('id')->whereHas(
                    'gad',
                    function ($query) {
                        $query->where('gender_id', 1);
                    }
                )->where('item_name', 'sector')->where('item_id', '2')->count();
                //Senior Female
                $data['total_female_senior_count'] = $data['total_female_senior_count'] = GadItemDetails::select('id')->whereHas(
                    'gad',
                    function ($query) {
                        $query->where('gender_id', 2);
                    }
                )->where('item_name', 'sector')->where('item_id', '2')->count();
                //Total Person With Disablitiy
                $data['total_person_disability_count'] = GadItemDetails::select('id')->where('item_name', 'sector')->where('item_id', '1')->count();
                //Person With Disablitiy Male
                $data['total_male_disablity_count'] = GadItemDetails::select('id')->whereHas(
                    'gad',
                    function ($query) {
                        $query->where('gender_id', 1);
                    }
                )->where('item_name', 'sector')->where('item_id', '1')->count();
                //Person With Disablitiy Female
                $data['total_female_disablity_count'] = GadItemDetails::select('id')->whereHas(
                    'gad',
                    function ($query) {
                        $query->where('gender_id', 2);
                    }
                )->where('item_name', 'sector')->where('item_id', '1')->count();

                $data['total_household'] = Gad::select('id')->where('household_id', 1)->where('family_code', 'A')->count();
                // Add Here Counting
                $data['total_family'] = Gad::select('id')->where('household_id', 1)->count();
                $sitios = [];
                $puroks = [];

                $barangays = Barangay::all()->each(function (Barangay $barangay) {
                    $barangay->count_resident = Gad::select('id')->where('barangay_id', $barangay->id)->count();
                    $total = Gad::select('id')->count();
                    if ($barangay->count_resident != 0) {
                        $barangay->percent = number_format($barangay->count_resident / $total * 100, 2);
                    } else {
                        $barangay->percent = 0;
                    }
                    return $barangay;
                });
                $data['barangays'] = $barangays;

                $data['total_voters_count'] = Gad::select('id')->where('political_city_registered_id', 410)->count();
                $data['total_voters_male_count'] = Gad::select('id')->where('gender_id', 1)->where('political_city_registered_id', 410)->count();
                $data['total_voters_female_count'] = Gad::select('id')->where('gender_id', 2)->where('political_city_registered_id', 410)->count();

                $data['transient_status_male'] = Gad::select('id')->where('gender_id', 1)->whereDate('calamba_residence_year', '>', Carbon::now()->subMonth(6))->count();
                $data['transient_status_female'] = Gad::select('id')->where('gender_id', 2)->whereDate('calamba_residence_year', '>', Carbon::now()->subMonth(6))->count();
                $data['immigrant_status_male'] = Gad::select('id')->where('gender_id', 1)->whereBetween('calamba_residence_year', [Carbon::now()->subYear(2), Carbon::now()->subMonth(6)->addDay(1)])->count();
                $data['immigrant_status_female'] = Gad::select('id')->where('gender_id', 2)->whereBetween('calamba_residence_year', [Carbon::now()->subYear(2), Carbon::now()->subMonth(6)->addDay(1)])->count();
                $data['native_status_male']  =
                    Gad::select('id')->where('gender_id', 1)->whereDate('calamba_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
                $data['native_status_female']  =
                    Gad::select('id')->where('gender_id', 2)->whereDate('calamba_residence_year', '<', Carbon::now()->subYear(2)->addDay(1))->count();
                $data['total_male_migration_rate'] = Gad::select('id')->whereNotNull('migration_rate_id')->where('gender_id', 1)->count();
                $data['total_female_migration_rate'] = Gad::select('id')->whereNotNull('migration_rate_id')->where('gender_id', 2)->count();
                $data['is_barangay'] = 0;

                return $data;
            });
        }

        return response([
            'data' => $user_with_barangay ? $dashboard_data_list : $dashboard_data
        ]);
    }
    public function getUtilities(Request $request)
    {
        $user_with_barangay = Auth::user()->barangay;
        $utilities = Utilities::all();

        foreach ($utilities as $utility) {
            $utility->count_utilities = GadItemDetails::whereHas(
                'gad',
                function ($query) use ($user_with_barangay) {
                    if ($user_with_barangay) {
                        $query->where('barangay_id', $user_with_barangay);
                    }
                }
            )->where('item_name', 'utilities')->where('item_id', $utility->id)->count();
        }
        return new DashboardResource($utilities);
    }

    public function getEducational(Request $request)
    {
        $user_with_barangay = Auth::user()->barangay;
        $educationals = EducationalAttaintment::all();

        foreach ($educationals as $educational) {
            $educational->count_educational = Gad::when(
                $user_with_barangay,
                function ($query) use ($user_with_barangay) {
                    $query->where('barangay_id', $user_with_barangay);
                }
            )->where('educational_attaintment_id', $educational->id)->count();
        }
        return new DashboardResource($educationals);
    }

    public function getHouseOwnership(Request $request)
    {
        $user_with_barangay = Auth::user()->barangay;
        $house_ownerships = HouseOwnership::all();

        foreach ($house_ownerships as $house_ownership) {
            $house_ownership->count_house_ownership = Gad::when(
                $user_with_barangay,
                function ($query) use ($user_with_barangay) {
                    $query->where('barangay_id', $user_with_barangay);
                }
            )->where('house_ownership_id', $house_ownership->id)->count();
        }
        return new DashboardResource($house_ownerships);
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
