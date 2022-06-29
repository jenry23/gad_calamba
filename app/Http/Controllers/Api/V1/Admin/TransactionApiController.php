<?php

namespace App\Http\Controllers\Api\v1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Response;
use App\Models\TransactionType;
use App\Models\Gad;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class TransactionApiController extends Controller
{

    public function create()
    {
        abort_if(Gate::denies('barangay_permit_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        // Gad::all(['id', 'first_name', 'last_name'])->pluck('full_name', 'id'),
        $gad = Gad::select(
            "id",
            "first_name",
            "last_name",
            DB::raw("CONCAT(first_name,' ',last_name) as full_name")
        )->get();
        $gad = $gad->makeHidden(['photo', 'media']);

        return response([
            'meta' => [
                'resident' => $gad,
                'transaction' => TransactionType::get(['id', 'transaction_type_name'])
            ],
        ]);
    }

    public function store(Request $request)
    {
        $gad_id = $request->resident['id'];
        $gad = Gad::find($gad_id);

        $data_collection = [
            'full_name' => $gad->first_name . ' ' . $gad->last_name . ' ' . $gad->middle_name ?? '',
            'address' => $gad->purok->purok_name . ', Brgy ' . $gad->barangay->barangay_name . ' Calamba City' ?? '',
            'birthday' => Carbon::parse($gad->birth_date)->format('d F Y') ?? '',
            'age' => Carbon::parse($gad->birth_date)->diff(Carbon::now())->format('%y years') ?? '',
            'birth_place' => $gad->political_province_registered->province_name ?? '',
            'status' => $this->residence_status(Carbon::parse($gad->calamba_residence_year)->format('Y')) ?? '',
            'logo' => Auth::user()->photo[0]['url'],
            'barangay' => Auth::user()->barangays,
        ];
        return response()->json($data_collection);
    }

    public function residence_status($date)
    {
        $status = '';
        if ($date) {
            $now = Carbon::now()->format('Y');
            if ($date > $now - 1) {
                $status = "Immigrant";
            } else if ($date < $now - 2) {
                $status = "Native";
            } else {
                $status = "Transient";
            }
        }

        return $status;
    }
}
