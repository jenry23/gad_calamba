<?php

namespace App\Models;

use \DateTimeInterface;
use App\Models\BarangaySanggunianCategory;
use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BarangayRecord extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'barangay_permit_records';

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
        'gad_id',
        'transaction_type_id',
        'status',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
    public function gad()
    {
        return $this->belongsTo(Gad::class, 'gad_id');
    }
    public function transaction_type()
    {
        return $this->belongsTo(TransactionType::class, 'transaction_type_id');
    }
}
