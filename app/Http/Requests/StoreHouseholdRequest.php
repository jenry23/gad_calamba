<?php

namespace App\Http\Requests;

use App\Models\Household;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreHouseholdRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('household_create');
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
