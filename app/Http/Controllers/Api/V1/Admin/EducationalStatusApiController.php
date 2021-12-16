<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationalStatusRequest;
use App\Http\Requests\UpdateEducationalStatusRequest;
use App\Http\Resources\Admin\EducationalStatusResource;
use App\Models\EducationalStatus;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EducationalStatusApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('educational_status_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EducationalStatusResource(EducationalStatus::advancedFilter());
    }

    public function store(StoreEducationalStatusRequest $request)
    {
        $educational_status = EducationalStatus::create($request->validated());

        return (new EducationalStatusResource($educational_status))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(EducationalStatus $educational_status)
    {
        abort_if(Gate::denies('educational_status_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(EducationalStatus $educational_status)
    {
        abort_if(Gate::denies('educational_status_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EducationalStatusResource($educational_status);
    }

    public function update(UpdateEducationalStatusRequest $request, EducationalStatus $educational_status)
    {
        $educational_status->update($request->validated());

        return (new EducationalStatusResource($educational_status))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(EducationalStatus $educational_status)
    {
        abort_if(Gate::denies('educational_status_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new EducationalStatusResource($educational_status),
            'meta' => [],
        ]);
    }

    public function destroy(EducationalStatus $educational_status)
    {
        abort_if(Gate::denies('educational_status_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $educational_status->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
