<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreResidentStatusRequest;
use App\Http\Requests\UpdateResidentStatusRequest;
use App\Http\Resources\Admin\ResidentStatusResource;
use App\Models\ResidentStatus;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ResidentStatusApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('resident_status_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResidentStatusResource(ResidentStatus::advancedFilter());
    }

    public function store(StoreResidentStatusRequest $request)
    {
        $resident_status = ResidentStatus::create($request->validated());

        return (new ResidentStatusResource($resident_status))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(ResidentStatus $resident_status)
    {
        abort_if(Gate::denies('resident_status_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(ResidentStatus $resident_status)
    {
        abort_if(Gate::denies('resident_status_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResidentStatusResource($resident_status);
    }

    public function update(UpdateResidentStatusRequest $request, ResidentStatus $resident_status)
    {
        $resident_status->update($request->validated());

        return (new ResidentStatusResource($resident_status))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(ResidentStatus $resident_status)
    {
        abort_if(Gate::denies('resident_status_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ResidentStatusResource($resident_status),
            'meta' => [],
        ]);
    }

    public function destroy(ResidentStatus $resident_status)
    {
        abort_if(Gate::denies('resident_status_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $resident_status->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
