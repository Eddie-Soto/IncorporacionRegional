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

Route::get('/codegood', 'SignupRegionalController@Codegood');
Route::get('/searchsponsorValid','SignupRegionalController@searchsponsorValid');

Route::get('/searchsponsor', 'SignupRegionalController@searchsponsor');
Route::get('/playeras', 'SignupRegionalController@playeras');
Route::get('/email', 'SignupRegionalController@validateEmail');

Route::get('/typedocuments', 'SignupRegionalController@gettypeDocuments');
Route::get('/banks', 'SignupRegionalController@getbanks');

Route::get('/states','SignupRegionalController@states');
Route::get('/municipality','SignupRegionalController@municipality');
Route::get('/ciudad','SignupRegionalController@ciudad');

Route::get('/index', 'SignupRegionalController@index');

Route::post('/saveper', 'SignupRegionalController@storePeru');

Route::post('/saveecu', 'SignupRegionalController@storeEcuador');

Route::get('/profile/mex', 'SignupRegionalController@mexico');

Route::get('/profile/per', 'SignupRegionalController@peru');

Route::get('/profile/ecu', 'SignupRegionalController@ecuador');

Route::get('/profile/cri', 'SignupRegionalController@costarica');