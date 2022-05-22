<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEthnicityRequest;
use App\Http\Requests\UpdateEthnicityRequest;
use App\Http\Resources\Admin\EthnicityResource;
use App\Models\Ethnicity;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EthnicityApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('ethnicity_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EthnicityResource(Ethnicity::advancedFilter());
    }

    public function store(StoreEthnicityRequest $request)
    {
        $ethnicity = Ethnicity::create($request->validated());

        return (new EthnicityResource($ethnicity))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Ethnicity $ethnicity)
    {
        abort_if(Gate::denies('ethnicity_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Ethnicity $ethnicity)
    {
        abort_if(Gate::denies('ethnicity_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EthnicityResource($ethnicity);
    }

    public function update(UpdateEthnicityRequest $request, Ethnicity $ethnicity)
    {
        $ethnicity->update($request->validated());

        return (new EthnicityResource($ethnicity))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Ethnicity $ethnicity)
    {
        abort_if(Gate::denies('ethnicity_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new EthnicityResource($ethnicity),
            'meta' => [],
        ]);
    }

    public function destroy(Ethnicity $ethnicity)
    {
        abort_if(Gate::denies('ethnicity_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $ethnicity->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
