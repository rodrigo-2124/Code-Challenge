<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    public function pets()
    {
        return $this->hasMany(Pet::class, 'id_type', 'id');
    }
}
