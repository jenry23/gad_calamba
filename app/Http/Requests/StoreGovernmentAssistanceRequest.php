<?php

namespace App\Http\Requests;

use App\Models\GovernmentAssistance;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreGovernmentAssistanceRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('government_assistance_create');
    }

    public function rules()
    {
        return [
            'government_assistance_name' => [
                'string',
                'required',
            ],
            'source' => [
                'string',
                'required',
            ],
        ];
    }
}
