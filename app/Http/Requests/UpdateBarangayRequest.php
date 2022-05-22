<?php

namespace App\Http\Requests;

use App\Models\Barangay;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateBarangayRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('barangay_edit');
    }

    public function rules()
    {
        return [
            'barangay_name' => [
                'string',
                'required',
            ],
        ];
    }
}
