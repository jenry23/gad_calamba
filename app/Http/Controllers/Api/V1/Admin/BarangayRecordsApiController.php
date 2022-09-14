<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBarangayRequest;
use App\Http\Requests\UpdateBarangayRequest;
use App\Http\Resources\Admin\BarangayResource;
use App\Models\BarangayRecord;
use App\Models\Gad;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class BarangayRecordsApiController extends Controller
{
    public function index()
    {
        return new BarangayResource(BarangayRecord::with(['gad', 'transaction_type'])->where('barangay_id', Auth::user()->barangay)->advancedFilter());
    }
}
