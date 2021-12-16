<?php

namespace App\Http\Requests;

use App\Models\EducationalAssistance;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreEducationalAssistanceRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('educational_assistance_create');
    }

    public function rules()
    {
        return [
            'educational_assistance_name' => [
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
