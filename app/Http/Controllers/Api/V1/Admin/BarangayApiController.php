<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBarangayRequest;
use App\Http\Requests\UpdateBarangayRequest;
use App\Http\Resources\Admin\BarangayResource;
use App\Models\Barangay;
use App\Models\Gad;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BarangayApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('barangay_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');


        Gad::all()->groupBy('household_no')->map(function ($gads) {
            $spouse_id = 2;
            $mainhousehold_id = 1;
            $spouse_gad = $gads->filter(function ($spouse) use ($spouse_id) {
                return $spouse->household_id == $spouse_id;
            })->first();

            if (isset($spouse_gad)) {
                $data = [
                    'spouse_first_name' => $spouse_gad->first_name,
                    'spouse_last_name' => $spouse_gad->last_name,
                    'spouse_middle_name' => $spouse_gad->middle_name,
                    'spouse_extension_name' => $spouse_gad->extension_name,
                ];
                $main = $gads->filter(function ($spouse) use ($mainhousehold_id) {
                    return $spouse->household_id == $mainhousehold_id;
                })->first();

                $main->update($data);
            }
        });
        return new BarangayResource(Barangay::advancedFilter());
    }

    public function store(StoreBarangayRequest $request)
    {
        $barangay = Barangay::create($request->validated());

        return (new BarangayResource($barangay))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Barangay $Barangay)
    {
        abort_if(Gate::denies('barangay_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Barangay $Barangay)
    {
        abort_if(Gate::denies('barangay_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BarangayResource($Barangay);
    }

    public function update(UpdateBarangayRequest $request, Barangay $Barangay)
    {
        $Barangay->update($request->validated());

        return (new BarangayResource($Barangay))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Barangay $Barangay)
    {
        abort_if(Gate::denies('barangay_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new BarangayResource($Barangay),
            'meta' => [],
        ]);
    }

    public function destroy(Barangay $Barangay)
    {
        abort_if(Gate::denies('barangay_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $Barangay->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
