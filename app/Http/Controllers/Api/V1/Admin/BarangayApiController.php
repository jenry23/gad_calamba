<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBarangayRequest;
use App\Http\Requests\UpdateBarangayRequest;
use App\Http\Resources\Admin\BarangayResource;
use App\Models\Barangay;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BarangayApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('barangay_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

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
