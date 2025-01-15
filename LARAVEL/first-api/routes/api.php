<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function(){
    Route::get('logout', [UserController::class, 'logout']);
    Route::get('tasks',[TaskController::class, 'index']);
    Route::post('tasks',[TaskController::class, 'store']);
    Route::put('tasks/{id}',[TaskController::class, 'update']);
    Route::delete('tasks/{id}',[TaskController::class, 'update']);
});

Route::post('login',[UserController::class,'login']);

Route::post('register',[UserController::class,'register']);
