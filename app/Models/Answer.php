<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
  protected $fillable = ['question_id', 'answer', 'is_correct'];
  protected $table = 'answer';

  public function survey()
  {
    return $this->belongsTo(Survey::class);
  }

  public function question()
  {
    return $this->belongsTo(Question::class);
  }
}
