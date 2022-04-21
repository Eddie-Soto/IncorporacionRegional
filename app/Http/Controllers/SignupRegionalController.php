<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
Use Redirect;
use \Exception;
use Aws\S3\S3Client;
use Aws\S3\S3ClientInterface;
header("Content-Type: text/html;charset=utf-8");
class SignupRegionalController extends Controller
{
	const S3_SLIDERS_FOLDER = 'PER';
	const S3_OPTIONS = ['disk' => 's3', 'visibility' => 'public'];

    

	public function index(Request $request){

		return view('NewSignupRegional.index');
	}

	public function ecuador(Request $request){
        $language='spa';
        App::setLocale($language);
        return view('NewSignupRegional.Ecuador.profileecu');
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

	/**
    * Función que valida que el email digitado no se enceuntre en la BD
    */
    public function validateEmail(Request $request){
        $email = $request->email;

        $conection = \DB::connection('mysql_las');

       // $response = $conection->select("SELECT email FROM nikkenla_incorporation.contracts where email = '$email' and type=0");
        $response = $conection->select("SELECT correo FROM nikkenla_marketing.control_ci_test where correo = '$email'");

        \DB::disconnect('mysql_las');

        if ($response) {
         echo '0';

     	}else{
        $conection = \DB::connection('mysql_las');

               // $response = $conection->select("SELECT email FROM nikkenla_incorporation.contracts where email = '$email' and type=0");
        $response_contratcs = $conection->select("SELECT email FROM nikkenla_incorporation.contracts_test where email = '$email'");

        \DB::disconnect('mysql_las');
                if ($response_contratcs) {

                   echo '0';
                }else{
                        $conection = \DB::connection('mysql_tv');

                       // $response = $conection->select("SELECT email FROM nikkenla_incorporation.contracts where email = '$email' and type=0");
                        $response_users = $conection->select("SELECT email FROM users where email = '$email'");

                        \DB::disconnect('mysql_tv');
                        if ($response_users) {
                            echo '2';
                        }else{
                           echo '1';  
                        }
                   
                }
        }

    }

    public function searchsponsor(Request $request){
        $codigo=$request->code;

        $conection = \DB::connection('mysql_las');
/*
        $consulta= $conection->table('nikkenla_marketing.control_ci_test')
            ->select('nombre as nombre','codigo AS codigo')
            ->where('codigo','LIKE',"%$codigo%")
            ->orWhere('nombre','LIKE',"%$codigo%")
            ->where('estatus','=', 1)
            ->where('b1','=', 1)
            ->toSql();

            echo($consulta);
*/
            
            $consulta = $conection->select("SELECT  nombre,codigo  FROM nikkenla_marketing.control_ci where estatus = '1' and b1 = '1' and codigo like '%$codigo%' or nombre like '%$codigo%'and estatus = '1' and b1 = '1' or codigo = '$codigo' and estatus = '1' and b1 = '1' or nombre = '$codigo' and estatus = 1 and b1 = 1 LIMIT 3");

            
            \DB::disconnect('mysql_las');



            if($codigo == '' || $codigo == '24188303' || $codigo == '241883' || $codigo == '2418830' || $codigo == '0' || $codigo == '1' || $codigo == '12' || $codigo == '123' || $codigo == '1234' || $codigo == '12345' || $codigo == '123456' || $codigo == '1234567' || $codigo == '12345678' || $codigo == '123456789'){
                return '1';
                exit;
            }

            if($consulta){
                return \json_encode($consulta);
            }
            else{
                return '2';
                exit;
            }


        }
public function Codegood(Request $request){
    $codigo=$request->code;

    $conection = \DB::connection('mysql_las');
    
    $consulta1 = $conection->select("SELECT  codigo  FROM nikkenla_marketing.control_ci where codigo = '$codigo' and estatus = 1 and b1 = 1");

    \DB::disconnect('mysql_las');

    if($consulta1){
        echo '0';
    }
    else{
        echo '1';
    }
}

        public function searchsponsorValid(Request $request){
            $codigo=$request->code;

            $conection = \DB::connection('mysql_las');
            
            $consulta = $conection->select("SELECT  nombre,codigo  FROM nikkenla_marketing.control_ci where codigo = '$codigo' or nombre = '$codigo' and estatus = 1 and b1 = 1 LIMIT 3");

            \DB::disconnect('mysql_las');



            if($codigo == '' || $codigo == '24188303' || $codigo == '241883' || $codigo == '2418830' || $codigo == '0' || $codigo == '1' || $codigo == '12' || $codigo == '123' || $codigo == '1234' || $codigo == '12345' || $codigo == '123456' || $codigo == '1234567' || $codigo == '12345678' || $codigo == '123456789'){
                return '1';
                exit;
            }

            if($consulta){
                return \json_encode($consulta);
            }
            else{
                return '2';
                exit;
            }


        }

    public function playeras(Request $request){
        $gender = $request->gender;
        $kit = $request->kit;

        $country=$request->country;
        $pais='PER';

        
        
        

        $conection = \DB::connection('mysql_las');

        $playeras = $conection->select("SELECT * FROM nikkenla_incorporation.cat_shirts WHERE pais = '$pais' AND genero = '$gender' ");
        

        \DB::disconnect('mysql_las');

        return $playeras;
    }

	public function gettypeDocuments(Request $request){
		$type_person=$request->type_person;
		$country=$request->country;


		
		$conection = \DB::connection('mysql_las');

    	$typedocuments = $conection->select("SELECT id_type, name FROM nikkenla_incorporation.type_documents where type = '$type_person' and country = '$country' order by name ASC ");

    	\DB::disconnect('mysql_las');

    	return $typedocuments;
	}

	/**
    * Función que regresa las ciudades para ser mostradas en la vista
    */
        public function ciudad(Request $request){
            $ciudad= str_replace("%", " ", $request->ciudad);
            $country=$request->country;

            $conection = \DB::connection('mysql_las');

                //Obtenemos los datos del abi
            $ciudades= $conection->table('nikkenla_incorporation.control_states_test')
            ->select('colony_name as colony_name')
            ->where('province_name','=', $ciudad)
            ->distinct('province_name')
            ->where('pais','=', $country)
            ->orderBy('colony_name', 'ASC')
            ->get();


            //$cities = $conection->select("SELECT distinct province_name FROM nikkenla_incorporation.control_states_test where pais='10' and state_name = '$state'");

            \DB::disconnect('mysql_las');

            return \json_encode($ciudades);

        }

	public function municipality(Request $request){
		$state= str_replace("%", " ", $request->reg);
		$country=$request->country;
		try {


			$conection = \DB::connection('mysql_las');

	                //Obtenemos los datos del abi
			$cities= $conection->table('nikkenla_incorporation.control_states_test')
			->select('province_name as province_name')
			->where('state_name','=', $state)
			->distinct('state_name')
			->where('pais','=', $country)
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
	$type_incorporation = $request->input('type_inc').trim("");
	$kit= $request->input('kit').trim("");
    $kit3= $request->input('kit-cb').trim("");
    $type_per = $request->input('type_per').trim("");
	$birthdate = $request->input('date_born').trim("");
	$birthdate = explode('-', $birthdate);
	$birthdate = $birthdate[2].'-'.$birthdate[1].'-'.$birthdate[0];
	$titular_name = $request->input('name_titular').trim("");
    $titular_name_ape = $request->input('apename').trim("");
    $titular_name=$titular_name.", ".$titular_name_ape;
    $titular_name = strtoupper($titular_name);
    $titular_name_empresa = $request->input('namelegarrepresentative').trim("");
    $titular_name_empresa = strtoupper($titular_name_empresa);
    $name="";
    
    if ($type_per == "0") {
    	$name=$titular_name_empresa;

    	echo "es empresa".$name;

    	
    }elseif ($type_per == "1") {
    	$name=$titular_name;
    	echo "es natural".$name;
    }
    elseif ($type_per == "2") {
    	$name=$titular_name;
    	echo "es natural con negocio".$name;
    }
    else{
    	echo "no encontro el tipo de persona";
    }

	$email = $request->input('email').trim("");

	$email=strtolower($email);
	$gender = $request->input('gender').trim("");
	$cel = $request->input('cel').trim("");
    $cel_jur = $request->input('cel_jur').trim("");
	$state = $request->input('state').trim("");
	$state= str_replace("%", " ", $state);
	$colony = $request->input('colony').trim("");
	$colony = str_replace("%", " ", $colony);
	$city = $request->input('city').trim("");
	$city = str_replace("%", " ", $city);
	$address = $request->input('adress').trim("");
	$typedocument = $request->input('typedocument').trim("");
	$numberdocument = $request->input('numberdocument').trim("");
	$playera=$request->input('shirt-size').trim("");
    $talla="";
    
    $type_sponsor = $request->input('type_sponsor').trim("");
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
$bank_name = $request->input('bank_name').trim("");
    $type_account = $request->input('type_acount').trim("");
    if ($bank_name == "" and $type_account == "") {
        $bank_name = 0;
        $type_account = 0;
    }
    $numer_account = $request->input('number_account').trim("");
	if ($bank_name == "" and $type_account == "") {
		$bank_name = 0;
		$type_account = 0;
	}
	

	$ckeck_cotitular = $request->input('info_cotitular').trim("");
    $cotitular_name = $request->input('name_cotitular').trim("");
    $rut_cotitular = $request->input('rut_cotitular').trim("");
	

	$conection = \DB::connection('mysql_las');

	$consecutive = $conection->select("SELECT code FROM nikkenla_incorporation.consecutive_codes_test order by code DESC limit 1");

	\DB::disconnect('mysql_las');

	$nuevocode = $consecutive[0]->code + 2;
	$last_digits="03";
	$completecode = $nuevocode.$last_digits;
	$conection = \DB::connection('mysql_las');
	$consecutive = $conection->insert("INSERT INTO nikkenla_incorporation.consecutive_codes_test (code) VALUES ('$nuevocode')");
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
		$user_promotion_exist = $conection->select("SELECT code_ticket FROM nikkenla_incorporation.user_promotion_kit_TEST where code_ticket = '$boleto'");
		\DB::disconnect('mysql_las');

		if ($user_promotion_exist) {
			echo "El boleto".$boleto."ya fue utilizado";
			exit;
		}

		$conection = \DB::connection('mysql_las');
		$user_promotion = $conection->insert("INSERT INTO nikkenla_incorporation.user_promotion_kit_TEST (code_sponsor, code_redeem, kit, status, country_id, code_ticket, created_at) VALUES ('$sponsor','$completecode','$kit','2','10','$boleto','$creacion')");
		\DB::disconnect('mysql_las');
	}
	/*

	$fileone = $request->file('fileone');
	$filetwo = $request->file('filetwo');
	$filetrhee = $request->file('filetrhee');


	$urlscompletes='';


       //obtenemos el nombre del archivo
       //$nombre = $fileone->getClientOriginalName();



	if ($request->hasFile('fileone') && $request->fileone) {

		$name1 = $fileone->getClientOriginalName();

		$path = $request->file('fileone')->store(
			SignupRegionalController::S3_SLIDERS_FOLDER,
			SignupRegionalController::S3_OPTIONS
		);



                //asi obtienes la url donde se guardo
		$full_pathone = Storage::disk('s3')->url($path);
		$urlscompletes=$full_pathone;


	}

	if ($request->hasFile('filetwo') && $request->filetwo) {

		$name2 = $filetwo->getClientOriginalName();

		$path2 = $request->file('filetwo')->store(
			SignupRegionalController::S3_SLIDERS_FOLDER,
			SignupRegionalController::S3_OPTIONS
		);

                //asi obtienes la url donde se guardo
		$full_pathtwo = Storage::disk('s3')->url($path2);
		$urlscompletes=$full_pathone.";".$full_pathtwo;



	}

	if ($request->hasFile('filetrhee') && $request->filetrhee) {

		$name3 = $filetrhee->getClientOriginalName();

		$path3 = $request->file('filetrhee')->store(
			SignupRegionalController::S3_SLIDERS_FOLDER,
			SignupRegionalController::S3_OPTIONS
		);

                //asi obtienes la url donde se guardo
		$full_paththree = Storage::disk('s3')->url($path3);
		$urlscompletes=$full_paththree;




	}



	$conection = \DB::connection('mysql_las');

	$signupfiles = $conection->select("INSERT INTO  nikkenla_incorporation.signupfiles (sap_code,name,filepath,country_id,created_at) VALUES ('$completecode','$titular_name','$urlscompletes','3','$creacion')");

	\DB::disconnect('mysql_las');
*/

	$conection = \DB::connection('mysql_las');

	$signupfiles = $conection->insert("INSERT INTO nikkenla_incorporation.contracts_test (id_contract, country, code, name, type, type_incorporate, type_sponsor, sponsor, email, cellular, birthday, address, residency_one, residency_two, residency_three, residency_four, name_legal_representative, type_document, number_document, name_cotitular, type_document_cotitular, number_document_cotitular, bank, bank_type, number_account, number_clabe, rfc, ip, browser, gender, kit, playera, talla, verify_digit, separate_name) VALUES ('$id', '$country', '$completecode', '$name', '$type_incorporation', '0', '$type_sponsor', '$sponsor', '$email', '$cel', '$birthdate', '$address', '', '$state', '$city','$colony', '', '$typedocument', '$numberdocument', '', '0', '0', '0', '0', '0', '0', '0', '$ip', '$browser', '$gender', '$kit', '$playera', '$talla', '03', 'name separate')");

	\DB::disconnect('mysql_las');

	echo $signupfiles;


	if ($type_incorporation == 0) {
		$type_letter='CLUB';
		
	}elseif ($type_incorporation ==1) {
		$type_letter='CI';
	}else{
		$type_letter='CI';
	}

$conection = \DB::connection('mysql_las');

	$control_ci = $conection->insert("INSERT INTO nikkenla_marketing.control_ci_test (pais, tipo, codigo, nombre, codigop, correo, celular, b1, b2) VALUES ('$country', '$type_letter', '$completecode', '$name', '$sponsor', '$email', '$cel', 1, 1)");

	\DB::disconnect('mysql_las');

	echo $control_ci;

$secret_nikken="";
$conection = \DB::connection('mysql_tv');

	$tv = $conection->insert("INSERT INTO users (country_id, email, sap_code, sap_code_sponsor, password,secret_nikken, client_type, rank, name,last_name,identification_number, phone, cell_phone, state, status, created_at,updated_at,last_password_update) values ('$country','$email','$completecode','$sponsor','0','$secret_nikken','$type_letter','Directo','$name','last name','0','$cel','$cel','$state','1','$creacion','$creacion','$creacion')");

	\DB::disconnect('mysql_tv');
	echo $tv;
	$kit= $request->input('kit').trim("");
            $kit_complete=$kit.':1';
            $products_two=$kit_complete.';'.$playera.':1';


            if ($type_incorporation == 0) {
                return $this->checkOutClub($email);
            }else{
                return $this->checkOutAbi($email,$products_two);
            }
            

	

	

	




}

public function checkOutClubApartado($email){


        /*Obtenemos los datos del aseror*/

        

        /*Concatenamos los tres valores y los encriptamos en base 64*/
        $data = base64_encode($email);

        /*Generamos la url del checkourt referenciado a wootbit*/
         //$url = "http://test.mitiendanikken.com/mitiendanikken/auto/login/$data";
         $url= "https://shopingcart.nikkenlatam.com/login-integration-incorporate-apartado.php?email=" . base64_encode($email)."&item=5032";

         

        return Redirect::to($url);

    }
  /**
    * Método que realizar el checkout independiente
    */
    public function checkOutClub($email){


        /*Obtenemos los datos del aseror*/

        

        /*Concatenamos los tres valores y los encriptamos en base 64*/
        $data = base64_encode($email);

        /*Generamos la url del checkourt referenciado a wootbit*/
        $url = "https://test.mitiendanikken.com/mitiendanikken/auto/login/". base64_encode($email)."?force_change=".base64_encode('1441:14412');


        return Redirect::to($url);

    }

    /**
    * Método que realizar el checkout independiente
    */
    public function checkOutAbi($email,$products_checkout){


        /*Obtenemos los datos del aseror*/

        /*$email = "servicio.chl@nikkenlatam.com";
        $products_checkout = "5006:2";
        $discount_abi = "S";*/
        $discount_abi = "S";


        /*Concatenamos los tres valores y los encriptamos en base 64*/
        $data = base64_encode($email . "&" . $products_checkout . "&" . $discount_abi);

        /*Generamos la url del checkourt referenciado a wootbit*/
        $url = "https://nikkenlatam.com/services/checkout/testredirect.php?app=incorporacion&data=$data";


        return Redirect::to($url);

    }

      /**
    * Método que realizar el checkout independiente
    */
      public function checkOutRe(Request $request){


        /*Obtenemos los datos del aseror*/

        $email = $request->email;
        $products_checkout = $request->item.":".$request->amount;
        $discount_abi = "S";


        /*Concatenamos los tres valores y los encriptamos en base 64*/
        $data = base64_encode($email . "&" . $products_checkout . "&" . $discount_abi);

        /*Generamos la url del checkourt referenciado a wootbit*/
        $url = "https://nikkenlatam.com/services/checkout/redirect.php?app=incorporacion&data=$data";


        return Redirect::to($url);

    }




    public function checkOutW(Request $request){


        /*Obtenemos los datos del aseror*/

        $email = $request->email;
        $products_checkout = $request->item.":".$request->amount;
        $discount_abi = "S";


        /*Concatenamos los tres valores y los encriptamos en base 64*/
        $data = base64_encode($email . "&" . $products_checkout . "&" . $discount_abi);

        /*Generamos la url del checkourt referenciado a wootbit*/
        //$url = "https://nikkenlatam.com/services/checkout/redirect.php?app=pruebas&data=$data";
        $url = "https://nikkenlatam.com/services/checkout/redirect.php?app=pruebas&data=$data";


        return Redirect::to($url);

    }

}