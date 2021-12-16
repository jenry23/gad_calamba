<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGenderPreferenceRequest;
use App\Http\Requests\UpdateGenderPreferenceRequest;
use App\Http\Resources\Admin\GenderPreferenceResource;
use App\Models\GenderPreference;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GenderPreferenceApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('gender_preference_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new GenderPreferenceResource(GenderPreference::advancedFilter());
    }

    public function store(StoreGenderPreferenceRequest $request)
    {
        $genderPreference = GenderPreference::create($request->validated());

        return (new GenderPreferenceResource($genderPreference))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(GenderPreference $genderPreference)
    {
        abort_if(Gate::denies('gender_preference_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(GenderPreference $genderPreference)
    {
        abort_if(Gate::denies('gender_preference_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new GenderPreferenceResource($genderPreference);
    }

    public function update(UpdateGenderPreferenceRequest $request, GenderPreference $genderPreference)
    {
        $genderPreference->update($request->validated());

        return (new GenderPreferenceResource($genderPreference))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(GenderPreference $genderPreference)
    {
        abort_if(Gate::denies('gender_preference_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new GenderPreferenceResource($genderPreference),
            'meta' => [],
        ]);
    }

    public function destroy(GenderPreference $genderPreference)
    {
        abort_if(Gate::denies('gender_preference_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $genderPreference->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
