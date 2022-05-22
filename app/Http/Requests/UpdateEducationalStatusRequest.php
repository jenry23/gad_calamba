<?php

namespace App\Http\Requests;

use App\Models\EducationalStatus;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateEducationalStatusRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('educational_status_edit');
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
