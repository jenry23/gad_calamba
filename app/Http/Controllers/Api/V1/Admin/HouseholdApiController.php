<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHouseholdRequest;
use App\Http\Requests\UpdateHouseholdRequest;
use App\Http\Resources\Admin\HouseholdResource;
use App\Models\Household;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HouseholdApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('household_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseholdResource(Household::advancedFilter());
    }

    public function store(StoreHouseholdRequest $request)
    {
        $Household = Household::create($request->validated());

        return (new HouseholdResource($Household))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Household $Household)
    {
        abort_if(Gate::denies('household_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Household $Household)
    {
        abort_if(Gate::denies('household_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseholdResource($Household);
    }

    public function update(UpdateHouseholdRequest $request, Household $Household)
    {
        $Household->update($request->validated());

        return (new HouseholdResource($Household))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Household $Household)
    {
        abort_if(Gate::denies('household_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new HouseholdResource($Household),
            'meta' => [],
        ]);
    }

    public function destroy(Household $Household)
    {
        abort_if(Gate::denies('household_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $Household->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
