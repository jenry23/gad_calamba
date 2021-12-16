<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationalAttaintmentRequest;
use App\Http\Requests\UpdateEducationalAttaintmentRequest;
use App\Http\Resources\Admin\EducationalAttaintmentResource;
use App\Models\EducationalAttaintment;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EducationalAttaintmentApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('educational_attaintment_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EducationalAttaintmentResource(EducationalAttaintment::advancedFilter());
    }

    public function store(StoreEducationalAttaintmentRequest $request)
    {
        $educational_attaintment = EducationalAttaintment::create($request->validated());

        return (new EducationalAttaintmentResource($educational_attaintment))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(EducationalAttaintment $educational_attaintment)
    {
        abort_if(Gate::denies('educational_attaintment_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(EducationalAttaintment $educational_attaintment)
    {
        abort_if(Gate::denies('educational_attaintment_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EducationalAttaintmentResource($educational_attaintment);
    }

    public function update(UpdateEducationalAttaintmentRequest $request, EducationalAttaintment $educational_attaintment)
    {
        $educational_attaintment->update($request->validated());

        return (new EducationalAttaintmentResource($educational_attaintment))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(EducationalAttaintment $educational_attaintment)
    {
        abort_if(Gate::denies('educational_attaintment_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new EducationalAttaintmentResource($educational_attaintment),
            'meta' => [],
        ]);
    }

    public function destroy(EducationalAttaintment $educational_attaintment)
    {
        abort_if(Gate::denies('educational_attaintment_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $educational_attaintment->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
