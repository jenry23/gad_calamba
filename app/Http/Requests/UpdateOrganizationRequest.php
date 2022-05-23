<?php

namespace App\Http\Requests;

use App\Models\Organization;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateOrganizationRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('organization_edit');
    }

    public function rules()
    {
        return [
            'organization_name' => [
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
