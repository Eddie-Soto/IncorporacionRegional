<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;

class SignupRegionalController extends Controller
{
    public function index(Request $request){
    
        return view('NewSignupRegional.index');
    }

    public function mexico(Request $request){
    		$language='spa';
         App::setLocale($language);
        return view('NewSignupRegional.Mexico.profilemex');
    }

    public function peru(Request $request){
    		$language='spa';
         App::setLocale($language);
        return view('NewSignupRegional.Peru.profileper');
    }

    public function municipality(Request $request){
        $state= str_replace("%", " ", $request->reg);
		try {
	
		
	        $conection = \DB::connection('mysql_las');

	                //Obtenemos los datos del abi
	        $cities= $conection->table('nikkenla_incorporation.control_states_test')
	        ->select('province_name as province_name')
	        ->where('state_name','=', $state)
	        ->distinct('state_name')
	        ->where('pais','=', 3)
	        ->orderBy('province_name', 'ASC')
	        ->get();
	        




	            //$cities = $conection->select("SELECT distinct province_name FROM nikkenla_incorporation.control_states_test where pais='10' and state_name = '$state'");

	        \DB::disconnect('mysql_las');
		}catch (Exception $e) {
		echo "error al consultar las ciudades".$e;
		}
        return \json_encode($cities);

    }

    /**
    * Función que regresa los estados para ser mostrados en las vistas
    */
	public function states(Request $request){
	    $estados=$request->getstate;

	    $conection = \DB::connection('mysql_las');

	    $states = $conection->select("SELECT distinct state_name FROM nikkenla_incorporation.control_states_test where pais='$estados' order by state_name ASC");

	    \DB::disconnect('mysql_las');

	    return \json_encode($states);
	}
}
