<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBarangaySanggunianRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'barangay_name' => [
                'string',
                'required',
                'sometimes',
            ],
            'barangay_id' => [
                'required',
                'sometimes',
                'integer',
                'exists:barangay,id',
            ],
            'barangay_sanggunian_category_id' => [
                'required',
                'sometimes',
                'integer',
                'exists:barangay_sanggunian_category,id'
            ],
        ];
    }
}
