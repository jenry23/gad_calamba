<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBarangaySanggunianRequest extends FormRequest
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
            ],
            'barangay_id' => [
                'required',
                'integer',
                'exists:barangay,id',
            ],
            'barangay_sanggunian_category_id' => [
                'required',
                'integer',
                'exists:barangay_sanggunian_category,id'
            ],
        ];
    }
}
