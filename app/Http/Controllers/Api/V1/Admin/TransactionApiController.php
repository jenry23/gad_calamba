<?php

namespace App\Http\Controllers\Api\v1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Response;
use App\Models\TransactionType;
use App\Models\Gad;
use Illuminate\Support\Facades\DB;

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
        dd($request->all());
    }
}
