<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;
    
    public function type()
    {
        return $this->belongsTo(Type::class, 'id_type', 'id');
    }
}
