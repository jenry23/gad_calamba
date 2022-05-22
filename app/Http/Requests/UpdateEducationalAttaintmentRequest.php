<?php

namespace App\Http\Requests;

use App\Models\EducationalAttaintment;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateEducationalAttaintmentRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('educational_attaintment_edit');
    }

    public function rules()
    {
        return [
            'educational_attaintment_name' => [
                'string',
                'required',
            ],
        ];
    }
}
