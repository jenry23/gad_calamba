<?php

namespace App\Http\Requests;

use App\Models\MonthlyIncome;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreMonthlyIncomeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('monthly_income_create');
    }

    public function rules()
    {
        return [
            'monthly_income_name' => [
                'string',
                'required',
            ],
            'range' => [
                'string',
                'required',
            ],
        ];
    }
}
