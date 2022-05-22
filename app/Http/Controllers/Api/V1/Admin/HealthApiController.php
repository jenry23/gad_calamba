<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHealthRequest;
use App\Http\Requests\UpdateHealthRequest;
use App\Http\Resources\Admin\HealthResource;
use App\Models\Health;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HealthApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('health_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HealthResource(Health::advancedFilter());
    }

    public function store(StoreHealthRequest $request)
    {
        $health = Health::create($request->validated());

        return (new HealthResource($health))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Health $health)
    {
        abort_if(Gate::denies('health_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Health $health)
    {
        abort_if(Gate::denies('health_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new HealthResource($health);
    }

    public function update(UpdateHealthRequest $request, Health $health)
    {
        $health->update($request->validated());

        return (new HealthResource($health))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Health $health)
    {
        abort_if(Gate::denies('health_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new HealthResource($health),
            'meta' => [],
        ]);
    }

    public function destroy(Health $health)
    {
        abort_if(Gate::denies('health_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $health->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
