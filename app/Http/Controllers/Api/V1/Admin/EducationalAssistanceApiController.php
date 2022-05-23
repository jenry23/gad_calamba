<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationalAssistanceRequest;
use App\Http\Requests\UpdateEducationalAssistanceRequest;
use App\Http\Resources\Admin\EducationalAssistanceResource;
use App\Models\EducationalAssistance;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EducationalAssistanceApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('educational_assistance_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EducationalAssistanceResource(EducationalAssistance::advancedFilter());
    }

    public function store(StoreEducationalAssistanceRequest $request)
    {
        $educational_assistance = EducationalAssistance::create($request->validated());

        return (new EducationalAssistanceResource($educational_assistance))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(EducationalAssistance $educational_assistance)
    {
        abort_if(Gate::denies('educational_assistance_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(EducationalAssistance $educational_assistance)
    {
        abort_if(Gate::denies('educational_assistance_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EducationalAssistanceResource($educational_assistance);
    }

    public function update(UpdateEducationalAssistanceRequest $request, EducationalAssistance $educational_assistance)
    {
        $educational_assistance->update($request->validated());

        return (new EducationalAssistanceResource($educational_assistance))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(EducationalAssistance $educational_assistance)
    {
        abort_if(Gate::denies('educational_assistance_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new EducationalAssistanceResource($educational_assistance),
            'meta' => [],
        ]);
    }

    public function destroy(EducationalAssistance $educational_assistance)
    {
        abort_if(Gate::denies('educational_assistance_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $educational_assistance->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
