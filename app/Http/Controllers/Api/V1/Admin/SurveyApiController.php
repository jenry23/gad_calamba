<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\SurveyResource;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Answer;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SurveyApiController extends Controller
{
    public function index()
    {
        $survey = Survey::find(1);
        $survey->questions = $survey->questions;
        $survey->answers = $survey->answers;
        $survey->option_name = unserialize($survey->option_name);
        dd($survey);

        return new SurveyResource($survey);
    }

    public function store (Request $request)
    {

    }
}
