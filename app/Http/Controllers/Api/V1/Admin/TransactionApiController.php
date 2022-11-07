<?php

namespace App\Http\Controllers\Api\v1\Admin;

use App\Http\Controllers\Controller;
use App\Models\BarangayRecord;
use App\Models\BarangaySanggunian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Response;
use App\Models\TransactionType;
use App\Models\Gad;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class TransactionApiController extends Controller
{

    public function create()
    {
        abort_if(Gate::denies('barangay_permit_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $barangay_id = Auth::user()->barangay;

        if (isset($barangay_id)) {
            $gad = Gad::with(['barangay', 'civil_status', 'purok', 'sitio'])->select(
                "id",
                "first_name",
                "last_name",
                "birth_date",
                "barangay_id",
                "civil_status_id",
                "purok_id",
                "sitio_id",
                "barangay_residence_year",
                DB::raw("CONCAT(first_name,' ',last_name) as full_name")
            )->withoutAppends()->where('barangay_id', $barangay_id)->get();
        } else {
            $gad = Gad::with(['barangay', 'civil_status', 'purok', 'sitio'])->select(
                "id",
                "first_name",
                "last_name",
                "birth_date",
                "barangay_id",
                "civil_status_id",
                "purok_id",
                "sitio_id",
                "barangay_residence_year",
                DB::raw("CONCAT(first_name,' ',last_name) as full_name")
            )->withoutAppends()->get();
        }

        // $gad = $gad->makeHidden(['photo', 'media']);
        return response([
            'meta' => [
                'resident' => $gad,
                'transaction' => TransactionType::get(['id', 'transaction_type_name'])
            ],
        ]);
    }

    public function printData(Request $request)
    {
        // $gad_id = ;
        // $gad = Gad::find($gad_id);
        $attributes = [
            'transaction_type_id' => $request->transaction['id'],
            'gad_id'    => $request->resident['id'],
            'status'    => 1,
            'barangay_id' => Auth::user()->barangay ?? 0
        ];

        $data = BarangayRecord::create($attributes);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $gad_id = $request->resident['id'];
        $gad = Gad::find($gad_id);
        if (Auth::user()->photo->isEmpty()) {
            $images = asset('images/cpmo.png');
        } else {
            $images = Auth::user()->photo[1]['url'] ?? Auth::user()->photo[0]['url'];
        }

        $barangay_sanggunian = BarangaySanggunian::with(['barangay_sanggunian_category'])->where('barangay_id', $gad->barangay_id)->orderBy('barangay_sanggunian_category_id', 'asc')->get();

        $data_collection = [
            'full_name' => $gad->full_name ?? '',
            'address' => $gad->block_lot_house_id . ' ' . $gad->purok->purok_name,
            'address1' => 'Barangay ' . $gad->barangay->barangay_name . ', Calamba City',
            'birthday' => Carbon::parse($gad->birth_date)->format('d F Y') ?? '',
            'age' => Carbon::parse($gad->birth_date)->diff(Carbon::now())->format('%y years') ?? '',
            'birth_place' => $gad->political_province_registered->province_name ?? '',
            'resident_status' => $gad->barangay_resident_status_name ??  '',
            'logo' => $images,
            'civil_status' => $gad->civil_status->civil_status_name ?? '',
            'barangay_residence_year' => Carbon::parse($gad->barangay_residence_year)->format('F d, Y'),
            'barangay' => $gad->barangay,
            'barangay_sanggunian' => $barangay_sanggunian
        ];
        return response()->json($data_collection);
    }
}
