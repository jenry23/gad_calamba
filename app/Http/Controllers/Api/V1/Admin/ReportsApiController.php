<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ReportsResource;
use App\Models\Barangay;
use App\Models\Gad;
use App\Models\Sitio;
use App\Models\Purok;
use App\Models\Sector;
use App\Models\Gender;
use App\Models\Utilities;
use App\Models\Appliances;
use App\Models\GovernmentAssistance;
use App\Models\MonthlyIncome;
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
            $gad->gender_name = !empty($gad->genders) ? $gad->genders->gender_name : '';
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

        $all_gads = Gad::where('barangay_id', $barangay_id)
            ->orWhere('sector_id', $sector_id)
            ->orWhere('sitio_id', $sitio_id)
            ->orWhere('gender_id', $gender_id)
            ->orderBy('gender_id', 'DESC')
            ->get();

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
                ->orWhere('sector_id', $sector_id)
                ->orWhere('sitio_id', $sitio_id)
                ->where('gender_id', '1')
                ->count();

            $female = Gad::where('barangay_id', $barangay_id)
                ->orWhere('sector_id', $sector_id)
                ->orWhere('sitio_id', $sitio_id)
                ->where('gender_id', '2')
                ->count();
        }

        foreach ($gads as $gad) {
            $gad->id = !empty($gad->id) ? $gad->id : '';
            $gad->full_name = $gad->last_name . ' , ' . $gad->first_name . ' ' . $gad->middle_name;
            $gad->gender_name = !empty($gad->genders) ? $gad->genders->gender_name : '';
            $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
            $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
            $gad->age = !empty($gad->age) ? $gad->age : '';
            $gad->civil_status_names = !empty($gad->civil_status) ? $gad->civil_status->civil_status_name : '';
        }

        return response([
            'data' => new ReportsResource($gads),
            'meta' => [
                'Female' => $female,
                'Male' => $male,
                'all_gads' => $all_gads
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
