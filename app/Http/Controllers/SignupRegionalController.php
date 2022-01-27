<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;

class SignupRegionalController extends Controller
{
	const S3_SLIDERS_FOLDER = 'PER';
	const S3_OPTIONS = ['disk' => 's3', 'visibility' => 'public'];

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

	public function gettypeDocuments(){
		$conection = \DB::connection('mysql_las');

    	$typedocuments = $conection->select("SELECT id_type, name FROM nikkenla_incorporation.type_documents where type = 1 and country = 3 order by name ASC ");

    	\DB::disconnect('mysql_las');

    	return $typedocuments;
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

    public function retomar(Request $request){

        //$correo = $request->correo;
    	$correo= $request->input('correo').trim("");
    	$language = $request->language;
    	$country = $request->country;

    	App::setLocale($language);

    	if ($language == 'spa' && $country == 'ch') {
    		$countryN = 1;
    	}

    	else if ($language == 'en' && $country == 'ch') {
    		$countryN = 1;
    	}

    	if($correo==""){
    		return \Redirect::to('/')
    		->with('notice', 'Por favor digita un correo')
    		->with('alertClass', 'alert-danger');
    	}
    	else {
    		$control_ci_test = ControlciTest::select('idcontrol_ci')
    		->where('correo','=', $correo)
    		->first();

    		$contracts_test = ContractsTest::select('*')
    		->where('email','=', $correo)
    		->first();

    		$users_test = UsersTest::select('*')
    		->where('email','=', $correo)
    		->first();

    		if($contracts_test){

    			$code = $contracts_test->code;
    			$name = $contracts_test->name;
    			$pago = $contracts_test->payment;
    			$sponsor = $contracts_test->sponsor;

    			if($pago != 0){
    				return \Redirect::to('/')
    				->with('notice', 'Ya se completo tu incorporación. ')
    				->with('alertClass', 'alert-success');

    			}else {
    				if($sponsor == 0)
    				{
    					return \Redirect::to('/')
    					->with('notice', 'aun no se te asigna un patrocinador. ')
    					->with('alertClass', 'alert-danger');
    				}
    				else
    				{
    					try {
    						App::setLocale('spa');

                    //return \Redirect::to('index', array('country' => $country,'language' => $language,'contracts' => $contracts_test, 'control_ci_id' => $control_ci_test, 'users' => $users_test))->with('notice', 'Event create succesfull. ')              ->with('alertClass', 'alert-success');

    						return view('retomar.retomar', array('country' => $country,'language' => $language,'contracts' => $contracts_test, 'control_ci_id' => $control_ci_test, 'users' => $users_test));


                        //return 1;

    					} catch (Exception $e) {

    						return \Redirect::to('/')
    						->with('notice', 'hubo un error. '.$e)
    						->with('alertClass', 'alert-danger');

    					}  
    				}
    			}
    		}else {
    			return \Redirect::to('/')
    			->with('notice', 'el correo ingresado no existe. ')
    			->with('alertClass', 'alert-danger');
    		}


    	}

    }

    public function playeras(Request $request){
    	$gender = $request->gender;
    	$kit = $request->kit;




    	$conection = \DB::connection('mysql_las');

    	$playeras = $conection->select("SELECT * FROM nikkenla_incorporation.cat_shirts WHERE pais = 'CHL' AND genero = '$gender' ");

    	\DB::disconnect('mysql_las');

    	return $playeras;
    }

        /**
    * Función que consulta el nombre de los bancos para ser mostrados en la vista
    */
    public function getbanks(Request $request){
        	$pais=$request->pais;

        	$conection = \DB::connection('mysql_las');

        	$bank = $conection->select("SELECT id_bank, name FROM nikkenla_office.control_banks where country = '$pais' order by name ASC");

        	\DB::disconnect('mysql_las');

        	return \json_encode($bank);

        }

    /**
    * Función que consulta el tipo de los bancos para ser mostrados en la vista
    */
    public function gettypebankeacount(Request $request){
    	$pais=$request->pais;

    	$conection = \DB::connection('mysql_las');

    	$banktype = $conection->select("SELECT id_bank_type, name FROM nikkenla_office.control_banks_type where country = '$pais' order by name ASC");

    	\DB::disconnect('mysql_las');

    	return \json_encode($banktype);

    }

            //Generar consecutivo de código
    function Code_consecutive()
    {
    	$conection = \DB::connection('mysql_las');

    	$consecutive = $conection->select("SELECT code FROM nikkenla_incorporation.consecutive_codes order by code DESC limit 1");

    	\DB::disconnect('mysql_las');

    	$nuevocode = $consecutive[0]->code + 2;
    	$last_digits="03";
    	$completecode = $nuevocode.$last_digits;
    	$conection = \DB::connection('mysql_las');
    	$consecutive = $conection->insert("INSERT INTO nikkenla_incorporation.consecutive_codes (code) VALUES ('$nuevocode')");
    	\DB::disconnect('mysql_las');


    	return $completecode;
    }

/**
        * Función que asigna un spnsor automaticamente
        */
function Assigned_sponsor($name,$email,$phone,$country,$state,$platform,$user)
{

	try {
                 //Asignar sponsor

		$ch = curl_init();

                //curl_setopt($ch, CURLOPT_URL,"servicios.nikkenlatam.com/panel/administracion/services/assigned-sponsor/prod.php");
		curl_setopt($ch, CURLOPT_URL,"https://nikkenlatam.com/interno/regional/panel-marketing-v1/administracion/services/assigned-sponsor/prod.php");
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, "name=$name&email=$email&phone=$phone&country=$country&state=$state&platform=$platform&user=$user");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$remote_server_output = curl_exec ($ch);

		$data = $remote_server_output;


		$codes =  substr($data, 4);
		$array = explode("|",$codes);

		$code = $array[0];

		$id = $data[0];

		trim($id);




		if($id == "1"){
			return $code;
		}      

	} catch (Exception $e) {

		echo($e->getMessage());

	}
}


public function storePeru(Request $request){
	$id = date("ymd") . date("His") . rand(1, 99);

	$creacion = date("Y-m-d H:i:s");
	$country = $request->input('country').trim("");
	$birthdate = $request->input('date_born').trim("");
	$birthdate = explode('-', $birthdate);
	$birthdate = $birthdate[2].'-'.$birthdate[1].'-'.$birthdate[0];
	$email = $request->input('email').trim("");
	$email=strtolower($email);
	$state = $request->input('region').trim("");
	$state= str_replace("%", " ", $state);
	$municipality = $request->input('comuna').trim("");
	$municipality = str_replace("%", " ", $municipality);
	$city = $request->input('ciudad').trim("");
	$city = str_replace("%", " ", $city);
	if ($bank_name == "" and $type_account == "") {
		$bank_name = 0;
		$type_account = 0;
	}
	
	if($type_sponsor == "3"){
		$sponsor = $this->Assigned_sponsor('Ciudadano Chile',$email,$cel,$country,$state,$platform,$user);
		if($sponsor == 0){  
			$sponsor = 0;
		}
                //$sponsor = Assigned_sponsor($titular_name,$email,$cel,$country,$state,$platform,$user);
	}
	else{
		$sponsor = $request->input('code-sponsor').trim("");
		if($sponsor == 0){  
			$sponsor = 0;
		}
	}

	$conection = \DB::connection('mysql_las');

	$consecutive = $conection->select("SELECT code FROM nikkenla_incorporation.consecutive_codes order by code DESC limit 1");

	\DB::disconnect('mysql_las');

	$nuevocode = $consecutive[0]->code + 2;
	$last_digits="03";
	$completecode = $nuevocode.$last_digits;
	$conection = \DB::connection('mysql_las');
	$consecutive = $conection->insert("INSERT INTO nikkenla_incorporation.consecutive_codes (code) VALUES ('$nuevocode')");
	\DB::disconnect('mysql_las');
	$ip = $_SERVER["REMOTE_ADDR"];
	$browser = $_SERVER['HTTP_USER_AGENT'];
	$type_letter = "";
	if($type_incorporation == "1"){
		$type_letter = "CI";
	}
	else{
		$type_letter = "CLUB";
	}

	if ($kit == 5002 || $kit=="5002") {

		$conection = \DB::connection('mysql_las');
		$user_promotion_exist = $conection->select("SELECT code_ticket FROM nikkenla_incorporation.user_promotion_kit where code_ticket = '$boleto'");
		\DB::disconnect('mysql_las');

		if ($user_promotion_exist) {
			echo "El boleto".$boleto."ya fue utilizado";
			exit;
		}

		$conection = \DB::connection('mysql_las');
		$user_promotion = $conection->insert("INSERT INTO nikkenla_incorporation.user_promotion_kit (code_sponsor, code_redeem, kit, status, country_id, code_ticket, created_at) VALUES ('$sponsor','$completecode','$kit','2','10','$boleto','$creacion')");
		\DB::disconnect('mysql_las');
	}

	$fileone = $request->file('fileone');
	$filetwo = $request->file('filetwo');
	$filetrhee = $request->file('filetrhee');


	$urlscompletes='';


       //obtenemos el nombre del archivo
       //$nombre = $fileone->getClientOriginalName();



	if ($request->hasFile('fileone') && $request->fileone) {

		$name1 = $fileone->getClientOriginalName();

		$path = $request->file('fileone')->store(
			incorporacionController::S3_SLIDERS_FOLDER,
			incorporacionController::S3_OPTIONS
		);



                //asi obtienes la url donde se guardo
		$full_pathone = Storage::disk('s3')->url($path);
		$urlscompletes=$full_pathone;


	}

	if ($request->hasFile('filetwo') && $request->filetwo) {

		$name2 = $filetwo->getClientOriginalName();

		$path2 = $request->file('filetwo')->store(
			incorporacionController::S3_SLIDERS_FOLDER,
			incorporacionController::S3_OPTIONS
		);

                //asi obtienes la url donde se guardo
		$full_pathtwo = Storage::disk('s3')->url($path2);
		$urlscompletes=$full_pathone.";".$full_pathtwo;



	}

	if ($request->hasFile('filetrhee') && $request->filetrhee) {

		$name3 = $filetrhee->getClientOriginalName();

		$path3 = $request->file('filetrhee')->store(
			incorporacionController::S3_SLIDERS_FOLDER,
			incorporacionController::S3_OPTIONS
		);

                //asi obtienes la url donde se guardo
		$full_paththree = Storage::disk('s3')->url($path3);
		$urlscompletes=$full_paththree;




	}



	$conection = \DB::connection('mysql_las');

	$signupfiles = $conection->select("INSERT INTO  nikkenla_incorporation.signupfiles (sap_code,name,filepath,country_id,created_at) VALUES ('$completecode','$titular_name','$urlscompletes','10','$creacion')");

	\DB::disconnect('mysql_las');

}

}