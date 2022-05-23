<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHouseMakeRequest;
use App\Http\Requests\UpdateHouseMakeRequest;
use App\Http\Resources\Admin\HouseMakeResource;
use App\Models\HouseMake;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HouseMakeApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('house_make_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseMakeResource(HouseMake::advancedFilter());
    }

    public function store(StoreHouseMakeRequest $request)
    {
        $house_make = HouseMake::create($request->validated());

        return (new HouseMakeResource($house_make))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(HouseMake $house_make)
    {
        abort_if(Gate::denies('house_make_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(HouseMake $house_make)
    {
        abort_if(Gate::denies('house_make_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseMakeResource($house_make);
    }

    public function update(UpdateHouseMakeRequest $request, HouseMake $house_make)
    {
        $house_make->update($request->validated());

        return (new HouseMakeResource($house_make))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(HouseMake $house_make)
    {
        abort_if(Gate::denies('house_make_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new HouseMakeResource($house_make),
            'meta' => [],
        ]);
    }

    public function destroy(HouseMake $house_make)
    {
        abort_if(Gate::denies('house_make_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $house_make->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
