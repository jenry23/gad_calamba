<?php

namespace App\Http\Requests;

use App\Models\Health;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreHealthRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('health_create');
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
