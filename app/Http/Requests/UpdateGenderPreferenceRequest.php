<?php

namespace App\Http\Requests;

use App\Models\GenderPreference;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateGenderPreferenceRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('gender_preference_edit');
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
