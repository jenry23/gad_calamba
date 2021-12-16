<?php

namespace App\Http\Requests;

use App\Models\Household;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateHouseholdRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('household_edit');
    }

    public function rules()
    {
        return [
            'household_name' => [
                'string',
                'required',
            ],
        ];
    }
}
