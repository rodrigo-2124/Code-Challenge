<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PetController;
use App\Http\Controllers\TypeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Pets
Route::prefix('pets')->group(function () {
    Route::post('/',[ PetController::class, 'create']);    
    Route::delete('{id_pet}',[ PetController::class, 'delete']);   
    Route::get('/',[ PetController::class, 'getAll']);
    Route::get('name/{name}',[ PetController::class, 'getByName']);
    Route::get('type/{id_type}',[ PetController::class, 'getByType']);
    Route::get('type/{id_type}/gender/{gender}',[ PetController::class, 'getByTypeAndGender']);
});

//Types
Route::get('types', [TypeController::class, 'getAll']);
// Route::get('types/name/{id}', [TypeController::class, 'getName']);