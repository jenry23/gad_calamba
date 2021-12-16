<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Question extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    protected $table = 'question';

    protected $casts = [
        'option_name' => 'array',
    ];
    protected $fillable = ['title', 'question_type', 'option_name'];

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

}
