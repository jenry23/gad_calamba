<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\CityResource;
use App\Models\City;
use App\Models\Province;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CityApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('city_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new CityResource(City::with(['province'])->advancedFilter());
    }

    public function store(Request $request)
    {
        $province_name = $request->province_id;
        if(!empty($province_name)){
            $data = array(
                'city_name' => $request->city_name,
                'province_id'  => $province_name['id']
            );
            $city = City::create($data);
        }else{
            $city = [];
        }
        

        return (new CityResource($city))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(City $city)
    {
        abort_if(Gate::denies('city_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $province = Province::all();
        return response([
            'meta' => [
                'province_id' => $province
            ],
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('city_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $city = City::with(['Province'])->where('id',$id)->first();
        return new CityResource($city);
    }

    public function update(Request $request,City $city)
    {
        $province_name = $request->province_id;
        if(!empty($province_name)){
            $data = array(
                'city_name' => $request->city_name,
                'province_id'  => $province_name['id']
            );
            $city->update($data);
        }
        return (new CityResource($city))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit($id)
    {
        abort_if(Gate::denies('city_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $city = City::with(['province'])->where('id',$id)->first();
        $Province = Province::all();
        return response([
            'data' => new CityResource($city),
            'meta' => [
                'province_id' => $Province
            ],
        ]);
    }

    public function destroy(City $city)
    {
        abort_if(Gate::denies('city_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $city->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
