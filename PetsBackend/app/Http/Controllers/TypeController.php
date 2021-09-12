<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 
use App\Models\Type;

class TypeController extends Controller
{
    public function getAll(){
        $types= Type::orderBy('name', 'asc')->get();
        return  response()->json($types, 200);
    }

    // public function getName($id){
    //     $type= Type::find($id)->name;
    //     return response()->json($type, 200);
    // }
}
