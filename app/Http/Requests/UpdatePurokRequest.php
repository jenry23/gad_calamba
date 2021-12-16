<?php

namespace App\Http\Requests;

use App\Models\Purok;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StorePurokRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('purok_edit');
    }

    public function rules()
    {
        return [
            'purok_name' => [
                'string',
                'required',
            ],
            'barangay_id' => [
                'number',
                'required',
            ],
        ];
    }
}
