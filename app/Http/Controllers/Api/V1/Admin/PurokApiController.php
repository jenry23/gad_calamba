<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\PurokResource;
use App\Models\Purok;
use App\Models\Barangay;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PurokApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('purok_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PurokResource(Purok::with(['barangay'])->advancedFilter());
    }

    public function store(Request $request)
    {
        $barangay_name = $request->barangay_id;
        if (!empty($barangay_name)) {
            $data = array(
                'purok_name' => $request->purok_name,
                'barangay_id'  => $barangay_name['id']
            );
            $purok = Purok::create($data);
        } else {
            $purok = [];
        }


        return (new PurokResource($purok))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Purok $Purok)
    {
        abort_if(Gate::denies('purok_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $barangay = Barangay::all();
        return response([
            'meta' => [
                'barangay_id' => $barangay
            ],
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('purok_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $purok = Purok::with(['barangay'])->where('id', $id)->first();
        return new PurokResource($purok);
    }

    public function update(Request $request, Purok $purok)
    {
        $barangay_name = $request->barangay_id;
        if (!empty($barangay_name)) {
            $data = array(
                'purok_name' => $request->purok_name,
                'barangay_id'  => $barangay_name['id']
            );
            $purok->update($data);
        }
        return (new PurokResource($purok))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit($id)
    {
        abort_if(Gate::denies('purok_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $purok = Purok::with(['barangay'])->where('id', $id)->first();
        $barangay = Barangay::all();
        return response([
            'data' => new PurokResource($purok),
            'meta' => [
                'barangay_id' => $barangay
            ],
        ]);
    }

    public function destroy(Purok $Purok)
    {
        abort_if(Gate::denies('purok_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $Purok->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
