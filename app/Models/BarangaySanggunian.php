<?php

namespace App\Models;

use \DateTimeInterface;
use App\Models\BarangaySanggunianCategory;
use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BarangaySanggunian extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'barangay_sanggunian';

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
        'barangay_id',
        'barangay_sanggunian_category_id',
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
        return $this->belongsTo(Barangay::class, 'barangay_id');
    }
    public function barangay_category()
    {
        return $this->belongsTo(BarangaySanggunianCategory::class, 'barangay_sanggunian_category_id');
    }
}
