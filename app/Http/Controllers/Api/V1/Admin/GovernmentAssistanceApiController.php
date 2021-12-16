<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGovernmentAssistanceRequest;
use App\Http\Requests\UpdateGovernmentAssistanceRequest;
use App\Http\Resources\Admin\GovernmentAssistanceResource;
use App\Models\GovernmentAssistance;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GovernmentAssistanceApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('government_assistance_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new GovernmentAssistanceResource(GovernmentAssistance::advancedFilter());
    }

    public function store(StoreGovernmentAssistanceRequest $request)
    {
        $government_assistance = GovernmentAssistance::create($request->validated());

        return (new GovernmentAssistanceResource($government_assistance))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(GovernmentAssistance $government_assistance)
    {
        abort_if(Gate::denies('government_assistance_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(GovernmentAssistance $government_assistance)
    {
        abort_if(Gate::denies('government_assistance_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new GovernmentAssistanceResource($government_assistance);
    }

    public function update(UpdateGovernmentAssistanceRequest $request, GovernmentAssistance $government_assistance)
    {
        $government_assistance->update($request->validated());

        return (new GovernmentAssistanceResource($government_assistance))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(GovernmentAssistance $government_assistance)
    {
        abort_if(Gate::denies('government_assistance_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new GovernmentAssistanceResource($government_assistance),
            'meta' => [],
        ]);
    }

    public function destroy(GovernmentAssistance $government_assistance)
    {
        abort_if(Gate::denies('government_assistance_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $government_assistance->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
