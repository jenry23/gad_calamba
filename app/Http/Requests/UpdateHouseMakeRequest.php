<?php

namespace App\Http\Requests;

use App\Models\HouseMake;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateHouseMakeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('house_make_edit');
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
