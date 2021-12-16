<?php

namespace App\Http\Requests;

use App\Models\Health;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateHealthRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('health_edit');
    }

    public function rules()
    {
        return [
            'health_name' => [
                'string',
                'required',
            ],
        ];
    }
}
