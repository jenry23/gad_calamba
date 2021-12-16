<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Sitio;
use App\Models\Purok;
use App\Models\Barangay;
use App\Models\Gad;

class SearchController extends Controller
{
    public function searchData(Request $request)
    {
        $id = $request->id;
        if(!empty($id)){
            $gad = Gad::where('resident_id',$id)->first();
            if(!empty($gad)){
                $gad->purok_names =  !empty($gad->purok) ? $gad->purok->purok_name : '';
                $gad->sitio_names =  !empty($gad->sitio) ? $gad->sitio->sitio_name : '';
                $gad->barangays_name = !empty($gad->barangay) ? $gad->barangay->barangay_name : '';
            }
        }else{
            $gad = [];
        }

        return view('auth.details',compact('gad'));
    }
}
