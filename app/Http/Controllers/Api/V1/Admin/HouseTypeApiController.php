<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHouseTypeRequest;
use App\Http\Requests\UpdateHouseTypeRequest;
use App\Http\Resources\Admin\HouseTypeResource;
use App\Models\HouseType;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HouseTypeApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('house_type_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseTypeResource(HouseType::advancedFilter());
    }

    public function store(StoreHouseTypeRequest $request)
    {
        $house_type = HouseType::create($request->validated());

        return (new HouseTypeResource($house_type))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(HouseType $house_type)
    {
        abort_if(Gate::denies('house_type_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(HouseType $house_type)
    {
        abort_if(Gate::denies('house_type_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HouseTypeResource($house_type);
    }

    public function update(UpdateHouseTypeRequest $request, HouseType $house_type)
    {
        $house_type->update($request->validated());

        return (new HouseTypeResource($house_type))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(HouseType $house_type)
    {
        abort_if(Gate::denies('house_type_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new HouseTypeResource($house_type),
            'meta' => [],
        ]);
    }

    public function destroy(HouseType $house_type)
    {
        abort_if(Gate::denies('house_type_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $house_type->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
