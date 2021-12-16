<?php

namespace App\Http\Requests;

use App\Models\EducationalStatus;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreEducationalStatusRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('educational_status_create');
    }

    public function rules()
    {
        return [
            'educational_status_name' => [
                'string',
                'required',
            ],
        ];
    }
}
