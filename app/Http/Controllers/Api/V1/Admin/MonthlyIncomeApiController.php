<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMonthlyIncomeRequest;
use App\Http\Requests\UpdateMonthlyIncomeRequest;
use App\Http\Resources\Admin\MonthlyIncomeResource;
use App\Models\MonthlyIncome;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MonthlyIncomeApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('monthly_income_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MonthlyIncomeResource(MonthlyIncome::advancedFilter());
    }

    public function store(StoreMonthlyIncomeRequest $request)
    {
        $monthly_income = MonthlyIncome::create($request->validated());

        return (new MonthlyIncomeResource($monthly_income))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(MonthlyIncome $monthly_income)
    {
        abort_if(Gate::denies('monthly_income_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(MonthlyIncome $monthly_income)
    {
        abort_if(Gate::denies('monthly_income_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MonthlyIncomeResource($monthly_income);
    }

    public function update(UpdateMonthlyIncomeRequest $request, MonthlyIncome $monthly_income)
    {
        $monthly_income->update($request->validated());

        return (new MonthlyIncomeResource($monthly_income))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(MonthlyIncome $monthly_income)
    {
        abort_if(Gate::denies('monthly_income_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new MonthlyIncomeResource($monthly_income),
            'meta' => [],
        ]);
    }

    public function destroy(MonthlyIncome $monthly_income)
    {
        abort_if(Gate::denies('monthly_income_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $monthly_income->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
