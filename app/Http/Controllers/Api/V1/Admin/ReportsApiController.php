<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ReportsResource;
use App\Models\Barangay;
use App\Models\CivilStatus;
use App\Models\EducationalAttaintment;
use App\Models\Ethnicity;
use App\Models\Gad;
use App\Models\Gender;
use App\Models\GenderPreference;
use App\Models\Purok;
use App\Models\Sector;
use App\Models\Sitio;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use App\Utils\PDFUtil;
use App\Models\Household;
use App\Models\HouseOwnership;
use App\Models\Medical;
use App\Models\Occupation;
use App\Models\Religion;
use App\Models\User;
use App\Models\Vaccination;
use Illuminate\Support\Facades\DB;
use App\Models\Medicine;

class ReportsApiController extends Controller
{
    private const PDF_CONFIG = [
        'margin_left' => 15,
        'margin_right' => 15,
        'margin_bottom' => 18,
        'margin_header' => 15,
        'margin_footer' => 15,
        'setAutoTopMargin' => 'stretch',
        'setAutoBottomMargin' => 'stretch',
    ];

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
        // none
        $household = Household::all();
        $gender_preference = GenderPreference::all();
        $civil_status = CivilStatus::all();
        $educational_attaintment = EducationalAttaintment::all();
        $ethnicity = Ethnicity::all();
        $religion = Religion::all();
        $occupation = Occupation::all();
        $house_ownership = HouseOwnership::all();
        $vaccination = Vaccination::all();
        $medicine = Medicine::all();

        return response([
            'meta' => [
                'gender' => $gender,
                'barangay' => $barangays,
                'sector' => $sector,
                'household' => $household,
                'gender_preference' => $gender_preference,
                'civil_status' => $civil_status,
                'educational_attaintment' => $educational_attaintment,
                'ethnicity' => $ethnicity,
                'religion' => $religion,
                'occupation' => $occupation,
                'house_ownership' => $house_ownership,
                'vaccination' => $vaccination,
                'medicine' => $medicine,
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
        $barangay_id = !empty($request->barangay) ? json_decode($request->barangay) : '';
        $purok_id = !empty($request->purok) ? json_decode($request->purok) : '';
        $sitio_id = !empty($request->sitio) ? json_decode($request->sitio) : '';
        $sector_id = !empty($request->sector) ? json_decode($request->sector) : '';
        $gender_id =  !empty($request->gender) ? json_decode($request->gender) : '';
        $age_from = !empty($request->age_from) ? Carbon::now()->subYears($request->age_from)->format('Y-m-d') : '';
        $age_to = !empty($request->age_to) ? Carbon::now()->subYears($request->age_to)->format('Y-m-d') : '';
        $household_id = !empty($request->household) ? json_decode($request->household) : '';
        $gender_preference = !empty($request->gender_preference) ? json_decode($request->gender_preference) : '';
        $civil_status = !empty($request->civil_status) ? json_decode($request->civil_status) : '';
        $educational_attaintment = !empty($request->educational_attaintment) ? json_decode($request->educational_attaintment) : '';
        $ethnicity = !empty($request->ethnicity) ? json_decode($request->ethnicity) : '';
        $religion = !empty($request->religion) ? json_decode($request->religion) : '';
        $occupation = !empty($request->occupation) ? json_decode($request->occupation) : '';
        $house_ownership = !empty($request->house_ownership) ? json_decode($request->house_ownership) : '';
        $vaccination = !empty($request->vaccination) ? $request->vaccination : '';
        $medicine = !empty($request->medicine) ? json_decode($request->medicine) : '';

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
            ->when(
                $household_id,
                function (Builder $query) use ($household_id) {
                    $query->where('household_id', $household_id);
                }
            )
            ->when(
                $gender_preference,
                function (Builder $query) use ($gender_preference) {
                    $query->where('gender_preference_id', $gender_preference);
                }
            )
            ->when(
                $civil_status,
                function (Builder $query) use ($civil_status) {
                    $query->where('civil_status_id', $civil_status);
                }
            )
            ->when(
                $educational_attaintment,
                function (Builder $query) use ($educational_attaintment) {
                    $query->where('educational_atta$educational_attaintment_id', $educational_attaintment);
                }
            )
            ->when(
                $ethnicity,
                function ($query) use ($ethnicity) {
                    $query->whereHas(
                        'gadDetails',
                        function (Builder $query) use ($ethnicity) {
                            $query->where('item_id', $ethnicity)->where('item_type', Ethnicity::class);
                        }
                );
                }
            )
            ->when(
                $religion,
                function (Builder $query) use ($religion) {
                    $query->where('religion_id', $religion);
                }
            )
            ->when(
                $occupation,
                function (Builder $query) use ($occupation) {
                    $query->where('occupation_id', $occupation);
                }
            )
            ->when(
                $house_ownership,
                function (Builder $query) use ($house_ownership) {
                    $query->where('house_ownership_id', $house_ownership);
                }
            )
            ->when(
                $vaccination,
                function (Builder $query) use ($vaccination) {
                    $query->where('brand1', $vaccination);
                }
            )
            ->when(
                $medicine,
                function ($query) use ($medicine) {
                    $query->whereHas(
                        'gadDetails',
                        function (Builder $query) use ($medicine) {
                            $query->where('item_id', $medicine)->where('item_type', Medicine::class);
                        }
                    );
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
                    ->when(
                        $household_id,
                        function (Builder $query) use ($household_id) {
                            $query->where('household_id', $household_id);
                        }
                    )
                    ->when(
                        $gender_preference,
                        function (Builder $query) use ($gender_preference) {
                            $query->where('gender_preference_id', $gender_preference);
                        }
                    )
                    ->when(
                        $civil_status,
                        function (Builder $query) use ($civil_status) {
                            $query->where('civil_status_id', $civil_status);
                        }
                    )
                    ->when(
                        $educational_attaintment,
                        function (Builder $query) use ($educational_attaintment) {
                            $query->where('educational_atta$educational_attaintment_id', $educational_attaintment);
                        }
                    )
                    ->when(
                        $ethnicity,
                        function ($query) use ($ethnicity) {
                            $query->whereHas(
                                'gadDetails',
                                function (Builder $query) use ($ethnicity) {
                                    $query->where('item_id', $ethnicity)->where('item_type', Ethnicity::class);
                                }
                            );
                        }
                    )
                    ->when(
                        $religion,
                        function (Builder $query) use ($religion) {
                            $query->where('religion_id', $religion);
                        }
                    )
                    ->when(
                        $occupation,
                        function (Builder $query) use ($occupation) {
                            $query->where('occupation_id', $occupation);
                        }
                    )
                    ->when(
                        $house_ownership,
                        function (Builder $query) use ($house_ownership) {
                            $query->where('house_ownership_id', $house_ownership);
                        }
                    )
                    ->when(
                        $vaccination,
                        function (Builder $query) use ($vaccination) {
                            $query->where('brand1', $vaccination);
                        }
                    )
                    ->when(
                        $medicine,
                        function ($query) use ($medicine) {
                            $query->whereHas(
                                'gadDetails',
                                function (Builder $query) use ($medicine) {
                                    $query->where('item_id', $medicine)->where('item_type', Medicine::class);
                                }
                            );
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
                    ->when(
                        $household_id,
                        function (Builder $query) use ($household_id) {
                            $query->where('household_id', $household_id);
                        }
                    )
                    ->when(
                        $gender_preference,
                        function (Builder $query) use ($gender_preference) {
                            $query->where('gender_preference_id', $gender_preference);
                        }
                    )
                    ->when(
                        $civil_status,
                        function (Builder $query) use ($civil_status) {
                            $query->where('civil_status_id', $civil_status);
                        }
                    )
                    ->when(
                        $educational_attaintment,
                        function (Builder $query) use ($educational_attaintment) {
                            $query->where('educational_atta$educational_attaintment_id', $educational_attaintment);
                        }
                    )
                    ->when(
                        $ethnicity,
                        function ($query) use ($ethnicity) {
                            $query->whereHas(
                                'gadDetails',
                                function (Builder $query) use ($ethnicity) {
                                    $query->where('item_id', $ethnicity)->where('item_type', Ethnicity::class);
                                }
                            );
                        }
                    )
                    ->when(
                        $religion,
                        function (Builder $query) use ($religion) {
                            $query->where('religion_id', $religion);
                        }
                    )
                    ->when(
                        $occupation,
                        function (Builder $query) use ($occupation) {
                            $query->where('occupation_id', $occupation);
                        }
                    )
                    ->when(
                        $house_ownership,
                        function (Builder $query) use ($house_ownership) {
                            $query->where('house_ownership_id', $house_ownership);
                        }
                    )
                    ->when(
                        $vaccination,
                        function (Builder $query) use ($vaccination) {
                            $query->where('brand1', $vaccination);
                        }
                    )
                    ->when(
                        $medicine,
                        function ($query) use ($medicine) {
                            $query->whereHas(
                                'gadDetails',
                                function (Builder $query) use ($medicine) {
                                    $query->where('item_id', $medicine)->where('item_type', Medicine::class);
                                }
                            );
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
                ->when(
                    $household_id,
                    function (Builder $query) use ($household_id) {
                        $query->where('household_id', $household_id);
                    }
                )
                ->when(
                    $gender_preference,
                    function (Builder $query) use ($gender_preference) {
                        $query->where('gender_preference_id', $gender_preference);
                    }
                )
                ->when(
                    $civil_status,
                    function (Builder $query) use ($civil_status) {
                        $query->where('civil_status_id', $civil_status);
                    }
                )
                ->when(
                    $educational_attaintment,
                    function (Builder $query) use ($educational_attaintment) {
                        $query->where('educational_atta$educational_attaintment_id', $educational_attaintment);
                    }
                )
                ->when(
                    $ethnicity,
                    function ($query) use ($ethnicity) {
                        $query->whereHas(
                            'gadDetails',
                            function (Builder $query) use ($ethnicity) {
                                $query->where('item_id', $ethnicity)->where('item_type', Ethnicity::class);
                            }
                        );
                    }
                )
                ->when(
                    $religion,
                    function (Builder $query) use ($religion) {
                        $query->where('religion_id', $religion);
                    }
                )
                ->when(
                    $occupation,
                    function (Builder $query) use ($occupation) {
                        $query->where('occupation_id', $occupation);
                    }
                )
                ->when(
                    $house_ownership,
                    function (Builder $query) use ($house_ownership) {
                        $query->where('house_ownership_id', $house_ownership);
                    }
                )
                ->when(
                    $vaccination,
                    function (Builder $query) use ($vaccination) {
                        $query->where('brand1', $vaccination);
                    }
                )
                ->when(
                    $medicine,
                    function ($query) use ($medicine) {
                        $query->whereHas(
                            'gadDetails',
                            function (Builder $query) use ($medicine) {
                                $query->where('item_id', $medicine)->where('item_type', Medicine::class);
                            }
                        );
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
                ->when(
                    $household_id,
                    function (Builder $query) use ($household_id) {
                        $query->where('household_id', $household_id);
                    }
                )
                ->when(
                    $gender_preference,
                    function (Builder $query) use ($gender_preference) {
                        $query->where('gender_preference_id', $gender_preference);
                    }
                )
                ->when(
                    $civil_status,
                    function (Builder $query) use ($civil_status) {
                        $query->where('civil_status_id', $civil_status);
                    }
                )
                ->when(
                    $educational_attaintment,
                    function (Builder $query) use ($educational_attaintment) {
                        $query->where('educational_atta$educational_attaintment_id', $educational_attaintment);
                    }
                )
                ->when(
                    $ethnicity,
                    function ($query) use ($ethnicity) {
                        $query->whereHas(
                            'gadDetails',
                            function (Builder $query) use ($ethnicity) {
                                $query->where('item_id', $ethnicity)->where('item_type', Ethnicity::class);
                            }
                        );
                    }
                )
                ->when(
                    $religion,
                    function (Builder $query) use ($religion) {
                        $query->where('religion_id', $religion);
                    }
                )
                ->when(
                    $occupation,
                    function (Builder $query) use ($occupation) {
                        $query->where('occupation_id', $occupation);
                    }
                )
                ->when(
                    $house_ownership,
                    function (Builder $query) use ($house_ownership) {
                        $query->where('house_ownership_id', $house_ownership);
                    }
                )
                ->when(
                    $vaccination,
                    function (Builder $query) use ($vaccination) {
                        $query->where('brand1', $vaccination);
                    }
                )
                ->when(
                    $medicine,
                    function ($query) use ($medicine) {
                        $query->whereHas(
                            'gadDetails',
                            function (Builder $query) use ($medicine) {
                                $query->where('item_id', $medicine)->where('item_type', Medicine::class);
                            }
                        );
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

    public function generatePDF(Request $request)
    {
        ini_set('memory_limit', '900000M');
        ini_set("pcre.backtrack_limit", "5000000");

        $json_data = json_decode($request->slug);
        $barangay_id = $json_data->barangay ?? '';
        $purok = $json_data->purok ?? '';
        $sitio = $json_data->sitio ?? '';
        $sector = $json_data->sector ?? '';
        $gender = $json_data->gender ?? '';
        $age_from = !empty($json_data->age_from) ? Carbon::now()->subYears($json_data->age_from)->format('Y-m-d') : '';
        $age_to = !empty($json_data->age_to) ? Carbon::now()->subYears($json_data->age_to)->format('Y-m-d') : '';
        $household_id =  $json_data->household ?? '';
        $gender_preference =  $json_data->gender_preference ?? '';
        $civil_status =  $json_data->civil_status ?? '';
        $educational_attaintment =  $json_data->educational_attaintment ?? '';
        $ethnicity =  $json_data->ethnicity ?? '';
        $religion =  $json_data->religion ?? '';
        $occupation =  $json_data->occupation ?? '';
        $house_ownership =  $json_data->house_ownership ?? '';
        $vaccination =  $json_data->vaccination ?? '';
        $medicine =  $json_data->medicine ?? '';

        $barangay = Barangay::find($barangay_id);

        $file_name = sprintf(
            'Generate-PDF ' . $barangay->barangay_name,
        );

        $gads = Gad::select(
            "id",
            "first_name",
            "last_name",
            "middle_name",
            "birth_date",
            "barangay_id",
            "gender_id",
            "civil_status_id",
            "purok_id",
            "sitio_id",
            "barangay_residence_year",
            DB::raw("CONCAT(last_name,',',first_name,' ',middle_name) as full_name")
        )->with([
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
                $sitio,
                function (Builder $query) use ($sitio) {
                    $query->where('sitio_id', $sitio);
                }
            )
            ->when(
                $purok,
                function (Builder $query) use ($purok) {
                    $query->where('purok_id', $purok);
                }
            )
            ->when(
                $sector,
                function ($query) use ($sector) {
                    $query->whereHas(
                        'gadDetails',
                        function (Builder $query) use ($sector) {
                            $query->where('item_id', $sector)->where('item_type', Sector::class);
                        }
                    );
                }
            )
            ->when(
                $gender,
                function (Builder $query) use ($gender) {
                    $query->where('gender_id', $gender);
                }
            )
            ->when(
                $age_to,
                function (Builder $query) use ($age_from, $age_to) {
                    $query->whereBetween('birth_date', [$age_to, $age_from]);
                }
            )
            ->when(
                $household_id,
                function (Builder $query) use ($household_id) {
                    $query->where('household_id', $household_id);
                }
            )
            ->when(
                $gender_preference,
                function (Builder $query) use ($gender_preference) {
                    $query->where('gender_preference_id', $gender_preference);
                }
            )
            ->when(
                $civil_status,
                function (Builder $query) use ($civil_status) {
                    $query->where('civil_status_id', $civil_status);
                }
            )
            ->when(
                $educational_attaintment,
                function (Builder $query) use ($educational_attaintment) {
                    $query->where('educational_atta$educational_attaintment_id', $educational_attaintment);
                }
            )
            ->when(
                $ethnicity,
                function ($query) use ($ethnicity) {
                    $query->whereHas(
                        'gadDetails',
                        function (Builder $query) use ($ethnicity) {
                            $query->where('item_id', $ethnicity)->where('item_type', Ethnicity::class);
                        }
                    );
                }
            )
            ->when(
                $religion,
                function (Builder $query) use ($religion) {
                    $query->where('religion_id', $religion);
                }
            )
            ->when(
                $occupation,
                function (Builder $query) use ($occupation) {
                    $query->where('occupation_id', $occupation);
                }
            )
            ->when(
                $house_ownership,
                function (Builder $query) use ($house_ownership) {
                    $query->where('house_ownership_id', $house_ownership);
                }
            )
            ->when(
                $vaccination,
                function (Builder $query) use ($vaccination) {
                    $query->where('brand1', $vaccination);
                }
            )
            ->when(
                $medicine,
                function ($query) use ($medicine) {
                    $query->whereHas(
                        'gadDetails',
                        function (Builder $query) use ($medicine) {
                            $query->where('item_id', $medicine)->where('item_type', Medicine::class);
                        }
                    );
                }
            )
            ->withoutAppends()
            ->orderBy('id', 'ASC')
            ->get();

        if (Auth::user()->photo->isEmpty()) {
            $user = User::where('barangay', $barangay_id)->first();
            $logo = $user->photo[1]['url'];
        } else {
            $logo = Auth::user()->photo[1]['url'];
        }

        $data = [
            'gads' => collect($gads),
            'file_name' => $file_name,
            'barangay' => $barangay->barangay_name,
            'logo' => $logo
        ];

        PDFUtil::loadView('pdf.report.body', $data, $file_name, self::PDF_CONFIG);
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
