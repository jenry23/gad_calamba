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
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class ReportsApiController extends Controller
{
    public function index(Request $request)
    {
        abort_if(Gate::denies('reports_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');
    }
    public function create(Request $request)
    {
        $user_with_barangay = Auth::user()->barangay;

        $barangays = Barangay::when($user_with_barangay, function ($query) use ($user_with_barangay) {
            $query->where('id', $user_with_barangay);
        })->get();

        $sector = Sector::all();
        $gender = Gender::all();
        return response([
            'meta' => [
                'gender' => $gender,
                'barangay' => $barangays,
                'sector' => $sector,
                'user' => Auth::user()
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
            $gad->gender_name = !empty($gad->gender) ? $gad->gender->gender_name : '';
            $gad->sector_name = !empty($gad->sector) ? $gad->sector->sector_name : '';
            $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
            $gad->age = !empty($gad->age) ? $gad->age : '';
            $gad->civil_status_names =  !empty($gad->civil_status) ? $gad->civil_status->civil_status_name : '';
        }

        return new ReportsResource($gads);
    }

    public function printExcelData(Request $request)
    {
        $barangay_id = !empty($request->barangay) ? json_decode($request->barangay)->id : '';
        $purok_id = !empty($request->purok) ? json_decode($request->purok)->id : '';
        $sitio_id = !empty($request->sitio) ? json_decode($request->sitio)->id : '';
        $sector_id = !empty($request->sector) ? json_decode($request->sector)->id : '';
        $gender_id =  !empty($request->gender) ? json_decode($request->gender)->id : '';
        $age_from = !empty($request->age_from) ? Carbon::now()->subYears($request->age_from)->format('Y-m-d') : '';
        $age_to = !empty($request->age_to) ? Carbon::now()->subYears($request->age_to)->format('Y-m-d') : '';

        $gads = Gad::with([
            'household:id,household_name',
            'barangay:id,barangay_name',
            'purok:id,purok_name',
            'sitio:id,sitio_name',
            'native_province:id,province_name',
            'native_city:id,city_name',
            'validId:id,name',
            'gender:id,gender_name',
            'gender_preference:id,gender_preference_name',
            'civil_status:id,civil_status_name',
            'occupation:id,occupation_name',
            'work_location_province:id,province_name',
            'work_location_city:id,city_name',
            'monthly_income:id,monthly_income_name,range_min,range_max',
            'educational_attaintment:id,educational_attaintment_name',
            'educational_status:id,educational_status_name',
            'religion:id,religion_name',
            'political_province_registered:id,province_name',
            'political_city_registered:id,city_name',
            'brgy_registered:id,barangay_name',
            'house_ownership:id,house_ownership_name',
            'house_type:id,house_type_name',
            'house_make:id,house_make_name'

        ])
            ->where('barangay_id', $barangay_id)
            ->when(
                $sitio_id,
                function (Builder $query) use ($sitio_id) {
                    $query->where('sitio_id', $sitio_id);
                }
            )
            ->when(
                $purok_id,
                function (Builder $query) use ($purok_id) {
                    $query->where('purok_id', $purok_id);
                }
            )
            ->when(
                $sector_id,
                function ($query) use ($sector_id) {
                    $query->whereHas(
                        'gadDetails',
                        function (Builder $query) use ($sector_id) {
                            $query->where('item_id', $sector_id)->where('item_type', Sector::class);
                        }
                    );
                }
            )
            ->when(
                $gender_id,
                function (Builder $query) use ($gender_id) {
                    $query->where('gender_id', $gender_id);
                }
            )
            ->when(
                $age_to,
                function (Builder $query) use ($age_from, $age_to) {
                    $query->whereBetween('birth_date', [$age_to, $age_from]);
                }
            )
            ->orderBy('id', 'ASC')
            ->get();

        return new ReportsResource($gads);
    }

    public function getData(Request $request)
    {
        $barangay_id = !empty($request->barangay) ? json_decode($request->barangay)->id : '';
        $purok_id = !empty($request->purok) ? json_decode($request->purok)->id : '';
        $sitio_id = !empty($request->sitio) ? json_decode($request->sitio)->id : '';
        $sector_id = !empty($request->sector) ? json_decode($request->sector)->id : '';
        $gender_id =  !empty($request->gender) ? json_decode($request->gender)->id : '';
        $age_from = !empty($request->age_from) ? Carbon::now()->subYears($request->age_from)->format('Y-m-d') : '';
        $age_to = !empty($request->age_to) ? Carbon::now()->subYears($request->age_to)->format('Y-m-d') : '';

        $gads = Gad::with([
            'gender:id,gender_name',
            'barangay:id,barangay_name',
            'civil_status:id,civil_status_name',
            'gender_preference:id,gender_preference_name',
            'occupation:id,occupation_name',
            'educational_attaintment:id,educational_attaintment_name',
            'educational_status:id,educational_status_name',
            'religion:id,religion_name',
            'house_ownership:id,house_ownership_name',
            'house_type:id,house_type_name',
            'house_make:id,house_make_name',
            'resident_status:id,resident_status_name',
        ])
            ->where('barangay_id', $barangay_id)
            ->when(
                $sitio_id,
                function (Builder $query) use ($sitio_id) {
                    $query->where('sitio_id', $sitio_id);
                }
            )
            ->when(
                $purok_id,
                function (Builder $query) use ($purok_id) {
                    $query->where('purok_id', $purok_id);
                }
            )
            ->when(
                $sector_id,
                function ($query) use ($sector_id) {
                    $query->whereHas(
                        'gadDetails',
                        function (Builder $query) use ($sector_id) {
                            $query->where('item_id', $sector_id)->where('item_type', Sector::class);
                        }
                    );
                }
            )
            ->when(
                $gender_id,
                function (Builder $query) use ($gender_id) {
                    $query->where('gender_id', $gender_id);
                }
            )
            ->when(
                $age_to,
                function (Builder $query) use ($age_from, $age_to) {
                    $query->whereBetween('birth_date', [$age_to, $age_from]);
                }
            )
            ->orderBy('id', 'ASC')
            ->paginate();

        if ($gender_id) {
            if ($gender_id == 1) {
                $male = Gad::where('barangay_id', $barangay_id)
                    ->when(
                        $sitio_id,
                        function (Builder $query) use ($sitio_id) {
                            $query->where('sitio_id', $sitio_id);
                        }
                    )
                    ->when(
                        $purok_id,
                        function (Builder $query) use ($purok_id) {
                            $query->where('purok_id', $purok_id);
                        }
                    )
                    ->when(
                        $sector_id,
                        function ($query) use ($sector_id) {
                            $query->whereHas(
                                'gadDetails',
                                function (Builder $query) use ($sector_id) {
                                    $query->where('item_id', $sector_id)->where('item_type', Sector::class);
                                }
                            );
                        }
                    )
                    ->when(
                        $age_to,
                        function (Builder $query) use ($age_from, $age_to) {
                            $query->whereBetween('birth_date', [$age_to, $age_from]);
                        }
                    )
                    ->where('gender_id', $gender_id)
                    ->count();

                $female = 0;
            } else {
                $female = Gad::where('barangay_id', $barangay_id)
                    ->when(
                        $sitio_id,
                        function (Builder $query) use ($sitio_id) {
                            $query->where('sitio_id', $sitio_id);
                        }
                    )
                    ->when(
                        $purok_id,
                        function (Builder $query) use ($purok_id) {
                            $query->where('purok_id', $purok_id);
                        }
                    )
                    ->when(
                        $sector_id,
                        function ($query) use ($sector_id) {
                            $query->whereHas(
                                'gadDetails',
                                function (Builder $query) use ($sector_id) {
                                    $query->where('item_id', $sector_id)->where('item_type', Sector::class);
                                }
                            );
                        }
                    )
                    ->when(
                        $age_to,
                        function (Builder $query) use ($age_from, $age_to) {
                            $query->whereBetween('birth_date', [$age_to, $age_from]);
                        }
                    )
                    ->where('gender_id', $gender_id)
                    ->count();

                $male = 0;
            }
        } else {
            $male = Gad::where('barangay_id', $barangay_id)
                ->where('gender_id', '1')
                ->when(
                    $sitio_id,
                    function (Builder $query) use ($sitio_id) {
                        $query->where('sitio_id', $sitio_id);
                    }
                )
                ->when(
                    $purok_id,
                    function (Builder $query) use ($purok_id) {
                        $query->where('purok_id', $purok_id);
                    }
                )
                ->when(
                    $sector_id,
                    function ($query) use ($sector_id) {
                        $query->whereHas(
                            'gadDetails',
                            function (Builder $query) use ($sector_id) {
                                $query->where('item_id', $sector_id)->where('item_type', Sector::class);
                            }
                        );
                    }
                )
                ->when(
                    $age_to,
                    function (Builder $query) use ($age_from, $age_to) {
                        $query->whereBetween('birth_date', [$age_to, $age_from]);
                    }
                )
                ->count();

            $female = Gad::where('barangay_id', $barangay_id)
                ->where('gender_id', '2')
                ->when(
                    $sitio_id,
                    function (Builder $query) use ($sitio_id) {
                        $query->where('sitio_id', $sitio_id);
                    }
                )
                ->when(
                    $purok_id,
                    function (Builder $query) use ($purok_id) {
                        $query->where('purok_id', $purok_id);
                    }
                )
                ->when(
                    $sector_id,
                    function ($query) use ($sector_id) {
                        $query->whereHas(
                            'gadDetails',
                            function (Builder $query) use ($sector_id) {
                                $query->where('item_id', $sector_id)->where('item_type', Sector::class);
                            }
                        );
                    }
                )
                ->when(
                    $age_to,
                    function (Builder $query) use ($age_from, $age_to) {
                        $query->whereBetween('birth_date', [$age_to, $age_from]);
                    }
                )
                ->count();
        }

        return response([
            'data' => new ReportsResource($gads),
            'meta' => [
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
