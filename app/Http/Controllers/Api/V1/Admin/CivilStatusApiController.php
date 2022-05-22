<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCivilStatusRequest;
use App\Http\Requests\UpdateCivilStatusRequest;
use App\Http\Resources\Admin\CivilStatusResource;
use App\Models\CivilStatus;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CivilStatusApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('civil_status_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new CivilStatusResource(CivilStatus::advancedFilter());
    }

    public function store(StoreCivilStatusRequest $request)
    {
        $civil_status = CivilStatus::create($request->validated());

        return (new CivilStatusResource($civil_status))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(CivilStatus $civil_status)
    {
        abort_if(Gate::denies('civil_status_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(CivilStatus $civil_status)
    {
        abort_if(Gate::denies('civil_status_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new CivilStatusResource($civil_status);
    }

    public function update(UpdateCivilStatusRequest $request, CivilStatus $civil_status)
    {
        $civil_status->update($request->validated());

        return (new CivilStatusResource($civil_status))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(CivilStatus $civil_status)
    {
        abort_if(Gate::denies('civil_status_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new CivilStatusResource($civil_status),
            'meta' => [],
        ]);
    }

    public function destroy(CivilStatus $civil_status)
    {
        abort_if(Gate::denies('civil_status_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $civil_status->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
