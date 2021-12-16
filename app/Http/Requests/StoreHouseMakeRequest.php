<?php

namespace App\Http\Requests;

use App\Models\HouseMake;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreHouseMakeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('house_make_create');
    }

    public function rules()
    {
        return [
            'house_make_name' => [
                'string',
                'required',
            ],
        ];
    }
}
