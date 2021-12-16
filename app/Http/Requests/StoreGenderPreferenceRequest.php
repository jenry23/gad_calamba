<?php

namespace App\Http\Requests;

use App\Models\GenderPreference;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreGenderPreferenceRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('gender_preference_create');
    }

    public function rules()
    {
        return [
            'gender_preference_name' => [
                'string',
                'required',
            ],
        ];
    }
}
