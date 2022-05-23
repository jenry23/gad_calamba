<?php

namespace App\Http\Requests;

use App\Models\HouseOwnership;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreHouseOwnershipRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('house_ownership_create');
    }

    public function rules()
    {
        return [
            'house_ownership_name' => [
                'string',
                'required',
            ],
        ];
    }
}
