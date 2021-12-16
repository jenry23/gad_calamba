<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Hash;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use \DateTimeInterface;
use Laravel\Cashier\Billable;


class UserPlan extends Authenticatable
{
    use HasAdvancedFilter, SoftDeletes, Notifiable, HasFactory, Billable;

    public $table = 'user_plan';

    protected $hidden = [
        'remember_token',
        'password',
    ];

    protected $orderable = [
        'id',
        'name',
        'email',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'name',
        'email',
    ];

    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'city',
        'state',
        'zip_code',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

}
