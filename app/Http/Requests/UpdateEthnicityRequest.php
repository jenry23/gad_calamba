<?php

namespace App\Http\Requests;

use App\Models\Ethnicity;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateEthnicityRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('ethnicity_edit');
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
