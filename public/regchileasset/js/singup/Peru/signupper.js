var URLactual = window.location;

/**
* Función que Valida la fecha de nacimiento
*/
function validate_birthdate(value){

  var res = value.split("-");
  if( res[0]=="undefinied" || res[1]=="undefinied" || res[2]=="undefinied" || /_/.test(res[0]) || /_/.test(res[1]) || /_/.test(res[2]) )
  {
    swal({
      title: 'Error',
      text: 'Fecha de Nacimiento Incompleta',
      type: 'error',
      padding: '2em'
    })
  }
  res[0];
  res[1];
  res[2];
  var day = res[0];
  var month = res[1];
  var year = res[2]
  var age =  18;

  var mydate = new Date();
  mydate.setFullYear(year, month-1, day);

  var currdate = new Date();
  currdate.setFullYear(currdate.getFullYear() - age);

  if(currdate < mydate)
  {
    swal({
      title: 'Error',
      text: 'Debes ser mayor de 18 para inscribirte a NIKKEN',
      type: 'error',
      padding: '2em'
    })
  }
}


/**
* Función que valida que el email digitado no se enceuntre en la BD y que no este vacio
*/
function validateMail(){
  var email = $('#email').val().trim();
  if(email == ""){

  }else{
    $.ajax({
      type: 'GET',
      url: '/email',
      dataType: "json",
      data:{ email: email},

      success: function(respuesta){
        //alert(respuesta);
            //  alert(email);
            if (respuesta==1) {
                 // document.getElementById("btnProfile").disabled s= false;
               }else if(respuesta == 2){
                swal({
                  title: 'Error',
                  text: 'El correo ya se encuentar registrado en la Tienda Virtual',
                  type: 'error',
                  padding: '2em'
                })
                document.getElementById("email").value="";
              }
              else if(respuesta==0){

                swal({
                  title: 'Error',
                  text: alertDuplicateMail,
                  type: 'error',
                  padding: '2em'
                })
                document.getElementById("email").value="";



              }
            }
          });
  }
}

/**
* Función que Obtiene las Ciudades de Perú
*/
function getColony(){
  var ciudades = $('#ciudad').val();
  var country = $('#country').val();

       // var regi = regis.replace("'", "apost");
        //string.replace(searchvalue, newvalue)
        $.ajax({
          type: "GET",
          url: '/ciudad',
          dataType: "json",
          contentType: "text/json; charset=UTF-8",
          data: {
            ciudad: ciudades,
            country: country
          },
          success: function(data){
            $("#colony").find('option').remove();
            $("#colony").append('<option value="" selected>Selecciona una opción</option>');
         //   $("#region").append('<option value="" selected>selecciona una opcion</option>');
           // $("#comuna").append('<option value="" selected>selecciona una opcion</option>');
          //  $("#ciudad").append('<option value="" selected>selecciona una opcion</option>');
          $.each(data,function(key, registro) {

            $("#colony").append('<option value='+registro.colony_name.replace(/ /g, "%")+'>'+registro.colony_name+'</option>');
          });
        },
        error: function(data) {

        }
      });
      }

/**
* Función que Obtiene las Estados de Perú
*/
function getCities(){
  var regi = $('#state').val();
  var country = $('#country').val();

       // var regi = regis.replace("'", "apost");
        //string.replace(searchvalue, newvalue)
        $.ajax({
          type: "GET",
          url: '/municipality',
          dataType: "json",
          contentType: "text/json; charset=UTF-8",
          data: {
            reg: regi,
            country: country
          },
          success: function(data){
            $("#city").find('option').remove();
            $("#city").append('<option value="" selected>Selecciona una opción</option>');
           // $("#region").append('<option value="" selected>selecciona una opcion</option>');
           // $("#comuna").append('<option value="" selected>selecciona una opcion</option>');
           $("#colony").append('<option value="" selected>Selecciona una opción</option>');
           $.each(data,function(key, registro) {

            $("#city").append('<option value='+registro.province_name.replace(/ /g, "%")+'>'+registro.province_name+'</option>');
          });
         },
         error: function(data) {

         }
       });
      }

/**
* Función que obtiene los estados 
*/
/*CHILE CHANGUE CIUDAD*/
function getStates(){
  var country = $('#country').val();
  $.ajax({
    type: "GET",
    url: '/states',
    dataType: "json",
    data: {
      getstate: country
    },
    success: function(data){
      $("#state").find('option').remove();
      $("#state").append('<option value="" selected>Selecciona una opción</option>');
      $("#city").append('<option value="" selected>Selecciona una opción</option>');
      $("#colony").append('<option value="" selected>Selecciona una opción</option>');
      $.each(data,function(key, registro) {

        $("#state").append('<option value='+registro.state_name.replace(/ /g, "%")+'>'+registro.state_name+'</option>');
      });
    },
    error: function(data) {

    }
  });

}

/**
* Función que muestra los campos del banco si lo desea
*/
function check_bank(){
  if($("input[id='info_bank']").is(':checked')){
    document.getElementById('check_bank').setAttribute('hidden',true);
    document.getElementById('check_bank').removeAttribute('hidden',true);
  }
  else if(!$("input[id='info_bank']").is(':checked')){
    document.getElementById('check_bank').setAttribute('hidden',true);
    document.getElementById('bank_name').value="";
    document.getElementById('type_acount').value="";
    document.getElementById('number_account').value="";

  }

}

/**
* Función que muestra los campos del cotitular si lo desea
*/
function check_cotitular(){
  if($("input[id='info_cotitular']").is(':checked')){
    //document.getElementById('check_coti').setAttribute('hidden',true);
    document.getElementById('check_coti').removeAttribute('hidden',true);
  }
  else if(!$("input[id='info_cotitular']").is(':checked')){
    document.getElementById('check_coti').setAttribute('hidden',true);
    document.getElementById('name_cotitular').value="";
    

  }

}

/**
* Función que Obtiene las tipos de docuemnto de Perú
*/
function getDocuments(){
  var type_person = $('#type_per').val();
  var country = $('#country').val();
       // var regi = regis.replace("'", "apost");
        //string.replace(searchvalue, newvalue)
        $.ajax({
          type: "GET",
          url: '/typedocuments',
          dataType: "json",
          contentType: "text/json; charset=UTF-8",
          data: {
            type_person: type_person,
            country: country
          },
          success: function(data){
            $("#typedocument").find('option').remove();
            $("#typedocument").append('<option value="" selected>Selecciona tipo de documento</option>');
            $.each(data,function(key, registro) {
              $("#typedocument").append('<option value='+registro.id_type+'>'+registro.name+'</option>');
            });
          },
          error: function(data) {

          }
        });
      }

      function getTypePerson(value){
  if(value == "1") //persona natural
  {

     // document.getElementById('socio_econ').setAttribute('disabled',true); 
     /* Cambia el texto de el campo nombre titular si selecciona persona natural */
     document.getElementById('namenat').removeAttribute('hidden',true);
     document.getElementById('apenat').removeAttribute('hidden',true);
     document.getElementById('empname').setAttribute('hidden',true);
     document.getElementById('namelegalperson').setAttribute('hidden',true);
     document.getElementById('cotitularoptions').removeAttribute('hidden',true);
     
     

   }
   else if(value=="2"){ //persona natural con actividades
     document.getElementById('namenat').removeAttribute('hidden',true);
     document.getElementById('apenat').removeAttribute('hidden',true);
     document.getElementById('empname').setAttribute('hidden',true);
     document.getElementById('namelegalperson').setAttribute('hidden',true);
     document.getElementById('cotitularoptions').removeAttribute('hidden',true);
   }
   else if(value == "0") //persona Juridica
   {
    document.getElementById('namenat').setAttribute('hidden',true);
    document.getElementById('apenat').setAttribute('hidden',true);
    document.getElementById('empname').removeAttribute('hidden',true);
    document.getElementById('namelegalperson').removeAttribute('hidden',true);
    document.getElementById('cotitularoptions').setAttribute('hidden',true);

  }
}



$( document ).ready(function() {

  getStates();

        //document.getElementById("btnProfile").disabled = true;
      });