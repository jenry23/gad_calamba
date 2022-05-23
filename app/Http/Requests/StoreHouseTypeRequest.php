<?php

namespace App\Http\Requests;

use App\Models\HouseType;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreHouseTypeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('house_type_create');
    }

    public function rules()
    {
        return [
            'house_type_name' => [
                'string',
                'required',
            ],
        ];
    }
}
