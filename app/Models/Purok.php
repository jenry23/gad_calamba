<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Purok extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'purok';

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
        'purok_name',
        'barangay_id',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
    public function barangay()
    {
        return $this->belongsTo(Barangay::class,'barangay_id');
    }
    public function getBarangayNameAttribute()
    {
        return !empty($this->barangay) ? $this->barangay->barangay_name : '';
    }
}
