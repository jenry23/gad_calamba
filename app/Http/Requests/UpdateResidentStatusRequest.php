<?php

namespace App\Http\Requests;

use App\Models\ResidentStatus;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateResidentStatusRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('resident_status_edit');
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
