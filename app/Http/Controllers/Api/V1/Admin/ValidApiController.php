<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreValidIDRequest;
use App\Http\Requests\UpdateValidIDRequest;
use App\Http\Resources\Admin\ValidIDResource;
use App\Models\ValidID;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ValidApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('valid_id_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ValidIDResource(ValidID::advancedFilter());
    }

    public function store(StoreValidIDRequest $request)
    {
        $validID = ValidID::create($request->validated());

        return (new ValidIDResource($validID))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(ValidID $validID)
    {
        abort_if(Gate::denies('valid_id_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('valid_id_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $valid_id = ValidID::find($id);

        return new ValidIDResource($valid_id);
    }

    public function update(UpdateValidIDRequest $request, $id)
    {
        $valid_id = ValidID::find($id);
        $valid_id->update($request->validated());

        return (new ValidIDResource($valid_id))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit($id)
    {
        abort_if(Gate::denies('valid_id_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $valid_id = ValidID::find($id);
        return response([
            'data' => new ValidIDResource($valid_id),
            'meta' => [],
        ]);
    }

    public function destroy(ValidID $validID)
    {
        abort_if(Gate::denies('valid_id_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $validID->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
