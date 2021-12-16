<?php

namespace App\Http\Requests;

use App\Models\MonthlyIncome;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateMonthlyIncomeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('monthly_income_edit');
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
