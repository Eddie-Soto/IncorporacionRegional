<?php

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

Route::get('/typedocuments', 'SignupRegionalController@gettypeDocuments');

Route::get('/states','SignupRegionalController@states');
Route::get('/municipality','SignupRegionalController@municipality');
Route::get('profile/per/ciudad','SignupRegionalController@ciudad');

Route::get('/index', 'SignupRegionalController@index');

Route::get('/profile/mex', 'SignupRegionalController@mexico');

Route::get('/profile/per', 'SignupRegionalController@peru');