<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBarangaySanggunianRequest;
use App\Http\Requests\UpdateBarangaySanggunianRequest;
use App\Http\Resources\Admin\BarangaySanggunianResource;
use App\Models\Barangay;
use App\Models\BarangaySanggunian;
use App\Models\BarangaySanggunianCategory;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class BarangaySanggunianApiController extends Controller
{
    public function index()
    {
        return new BarangaySanggunianResource(BarangaySanggunian::with(['barangay', 'barangay_sanggunian_category'])->advancedFilter());
    }

    public function store(StoreBarangaySanggunianRequest $request)
    {
        $barangay_sanggunian = BarangaySanggunian::create($request->validated());

        return (new BarangaySanggunianResource($barangay_sanggunian))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        return response([
            'meta' => [
                'barangay' => Barangay::all(),
                'barangay_sanggunian_category' => BarangaySanggunianCategory::all()
            ],
        ]);
    }

    public function show(BarangaySanggunian $barangay_sanggunian)
    {
        return new BarangaySanggunianResource($barangay_sanggunian->load(['barangay', 'barangay_sanggunian_category']));
    }

    public function update(UpdateBarangaySanggunianRequest $request, BarangaySanggunian $barangay_sanggunian)
    {
        $barangay_sanggunian->update($request->validated());

        return (new BarangaySanggunianResource($barangay_sanggunian))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(BarangaySanggunian $barangay_sanggunian)
    {
        return response([
            'data' => new BarangaySanggunianResource($barangay_sanggunian->load(['barangay', 'barangay_sanggunian_category'])),
            'meta' => [
                'barangay' => Barangay::all(),
                'barangay_sanggunian_category' => BarangaySanggunianCategory::all()
            ],
        ]);
    }

    public function destroy(BarangaySanggunian $barangay_sanggunian)
    {
        $barangay_sanggunian->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
