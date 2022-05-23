<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHouseOwnershipRequest;
use App\Http\Requests\UpdateHouseOwnershipRequest;
use App\Http\Resources\Admin\HouseOwnershipResource;
use App\Models\HouseOwnership;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HouseOwnershipApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('house_ownership_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseOwnershipResource(HouseOwnership::advancedFilter());
    }

    public function store(StoreHouseOwnershipRequest $request)
    {
        $house_ownership = HouseOwnership::create($request->validated());

        return (new HouseOwnershipResource($house_ownership))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(HouseOwnership $house_ownership)
    {
        abort_if(Gate::denies('house_ownership_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(HouseOwnership $house_ownership)
    {
        abort_if(Gate::denies('house_ownership_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseOwnershipResource($house_ownership);
    }

    public function update(UpdateHouseOwnershipRequest $request, HouseOwnership $house_ownership)
    {
        $house_ownership->update($request->validated());

        return (new HouseOwnershipResource($house_ownership))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(HouseOwnership $house_ownership)
    {
        abort_if(Gate::denies('house_ownership_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new HouseOwnershipResource($house_ownership),
            'meta' => [],
        ]);
    }

    public function destroy(HouseOwnership $house_ownership)
    {
        abort_if(Gate::denies('house_ownership_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $house_ownership->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
