<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\SitioResource;
use App\Models\Sitio;
use App\Models\Barangay;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SitioApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('sitio_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SitioResource(Sitio::with(['barangay'])->advancedFilter());
    }

    public function store(Request $request)
    {
        $barangay_name = $request->barangay_id;
        if(!empty($barangay_name)){
            $data = array(
                'sitio_name' => $request->sitio_name,
                'barangay_id'  => $barangay_name['id']
            );
            $sitio = Sitio::create($data);
        }else{
            $sitio = [];
        }
        

        return (new SitioResource($sitio))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Sitio $sitio)
    {
        abort_if(Gate::denies('sitio_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $barangay = Barangay::all();
        return response([
            'meta' => [
                'barangay_id' => $barangay
            ],
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('sitio_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $sitio = Sitio::with(['barangay'])->where('id',$id)->first();
        return new SitioResource($sitio);
    }

    public function update(Request $request,Sitio $sitio)
    {
        $barangay_name = $request->barangay_id;
        if(!empty($barangay_name)){
            $data = array(
                'sitio_name' => $request->sitio_name,
                'barangay_id'  => $barangay_name['id']
            );
            $sitio->update($data);
        }
        return (new SitioResource($sitio))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit($id)
    {
        abort_if(Gate::denies('sitio_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $sitio = Sitio::with(['barangay'])->where('id',$id)->first();
        $barangay = Barangay::all();
        return response([
            'data' => new SitioResource($sitio),
            'meta' => [
                'barangay_id' => $barangay
            ],
        ]);
    }

    public function destroy(Sitio $sitio)
    {
        abort_if(Gate::denies('sitio_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $sitio->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
