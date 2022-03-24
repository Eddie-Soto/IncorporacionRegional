var URLactual = window.location;

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