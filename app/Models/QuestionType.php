<?php

namespace App\Models;


use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuestionType extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    protected $table = 'question_types';

    protected $fillable = ['display_name', 'name', 'description'];
}
