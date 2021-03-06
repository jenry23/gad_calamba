<?php

namespace App\Http\Requests;

use App\Models\Province;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreProvinceRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('province_create');
    }

    public function rules()
    {
        return [
            'province_name' => [
                'string',
                'required',
            ],
            'province_code' => [
                'string',
                'required',
            ],
        ];
    }
}
