<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use App\Models\Pet;
use App\Models\Type;

class PetController extends Controller
{
    //Valida si el 'id_type' existe en la tabla 'types'
    private function validateType($id_type){ 
        $type_exists= Type::where('id', '=', $id_type)->exists();
        return $type_exists;
    }

    public function getAll(){
        $pets= Pet::orderBy('created_at', 'desc')->get();
        foreach($pets as $pet){
            $pet['id_type']= $pet->type->name;
        }
        return  response()->json($pets, 200);
    }

    public function create(Request $request){
        $pet= new Pet();
        $pet->name= $request['name'];
        $pet->gender= $request['gender'];
        $pet->id_type= $request['id_type'];
        $pet->created_at= date('Y-m-d H:i:s');
        $pet->updated_at= date('Y-m-d H:i:s');
        $pet->save();

        return response()->json([
            'message' => 'Creación exitosa.',
            'status' => 'success'
        ], 200);
    }

    // public function update(){

    // }

    public function delete($id_pet){
        $pet= Pet::find($id_pet)->delete();
        return  response()->json([
            'message' => 'Borrado exitoso.',
            'status' => 'success',
        ],200);
    }

    public function getByName($name){
        $pets= Pet::where('name', 'LIKE', '%'.$name.'%')->orderBy('name', 'asc')->get();
        foreach($pets as $pet){
            $pet['id_type']= $pet->type->name;
        }
        return  response()->json($pets, 200);
    } 
    
    public function getByType($id_type){
        if($this->validateType($id_type)){
            $pets= Pet::where('id_type', '=', $id_type)->orderBy('created_at', 'desc')->get();
            foreach($pets as $pet){
                $pet['id_type']= $pet->type->name;
            }
            return  response()->json($pets, 200);
        }
        else{
            return  response()->json([
                'message'=>'El id_type no existe.',
                'status'=>'failed'
            ],400);
        }
    }   

    public function getByTypeAndGender($id_type, $gender){
        if($this->validateType($id_type)){
            $pets= Pet::where('id_type', '=', $id_type)->
                        where('gender', '=', $gender)->orderBy('created_at', 'desc')->get();
            foreach($pets as $pet){
                $pet['id_type']= $pet->type->name;
            }
            return  response()->json($pets, 200);
        }
        else{
            return  response()->json([
                'message'=>'El id_type no existe.',
                'status'=>'failed'
            ], 400);
        }
    }   

    
}
