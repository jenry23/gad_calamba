<?php

namespace App\Http\Requests;

use App\Models\ResidentStatus;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreResidentStatusRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('resident_status_create');
    }

    public function rules()
    {
        return [
            'resident_status_name' => [
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
