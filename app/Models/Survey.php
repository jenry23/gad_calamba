<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Survey extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    protected $table = 'survey';

    protected $orderable = [
        'id',
    ];

    protected $filterable = [
        'id',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $fillable = [
        'title',
        'description',
        'gad_id'
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function gad()
    {
        return $this->belongsTo(Gad::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
