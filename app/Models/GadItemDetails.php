<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class GadItemDetails extends Model
{
    use HasFactory;

    protected $table = 'gad_item_details';

    protected $fillable = ['gad_id', 'item_type', 'item_id', 'item_name', 'status'];

    public function item(): MorphTo
    {
        return $this->morphTo();
    }
}
