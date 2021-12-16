<?php

namespace App\Http\Requests;

use App\Models\Ethnicity;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreEthnicityRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('ethnicity_create');
    }

    public function rules()
    {
        return [
            'ethnicity_name' => [
                'string',
                'required',
            ],
            'description' => [
                'string',
                'required',
            ],
        ];
    }
}
