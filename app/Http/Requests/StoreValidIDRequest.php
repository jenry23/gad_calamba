<?php

namespace App\Http\Requests;

use App\Models\ValidID;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreValidIDRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('valid_id_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
        ];
    }
}
