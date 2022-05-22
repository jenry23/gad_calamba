<?php

namespace App\Http\Requests;

use App\Models\CivilStatus;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateCivilStatusRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('civil_status_edit');
    }

    public function rules()
    {
        return [
            'civil_status_name' => [
                'string',
                'required',
            ],
        ];
    }
}
