<?php

namespace App\Http\Requests;

use App\Models\Sector;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreSectorRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('sector_create');
    }

    public function rules()
    {
        return [
            'sector_name' => [
                'string',
                'required',
            ],
        ];
    }
}
