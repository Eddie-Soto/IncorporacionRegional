var URLactual = window.location;

/**
* Función que muestra la playera si es que eligio el tipo de incorporación
*/
function Ocultar_playeras(){
  var kit = document.getElementById('kit').value;
  var div_opciones=document.getElementById('show-playeras');
  var div_image=document.getElementById('shirt-sample');
  if(kit==5006 || kit=="" || kit==5002 || kit==5031 || kit == 5032){
    div_opciones.setAttribute('hidden',true);
    div_image.setAttribute('hidden',true);
  }else{
    div_opciones.removeAttribute('hidden',true);
    div_image.removeAttribute('hidden',true);
  }
}

function showShirtSample(){
     // document.getElementById('show-playeras').removeAttribute('hidden',true);
     var item = document.getElementById('shirt-size').value;
     var divSample = document.getElementById('shirt-sample');
     var imgSample = "";
     if(item == ""){
      divSample.innerHTML="";
    }else{
     divSample.innerHTML = "<br><img class='img-thumbnail' src='../../regchileasset/img/playera.png' width='100%' name='shirt-sample'>";
   }
       // divSample.innerHTML = "<br><img src='../../regchileasset/img/f.png' width='100%' name='shirt-sample'>";
     }

     function getDataShirt(){
    //  var country = document.getElementById('country').value;
    var kit = document.getElementById('kit').value;
    var gender = document.getElementById('gender1').value;
    //var gender= $('#gender1').val();
    //alert(gender);
    playeras(gender, kit);
  }

  function playeras(gender, kit){
  var divplayeras = document.getElementById('show-playeras');
  var div_image=document.getElementById('shirt-sample');
  var country = $('#country').val();

  var valor_size = document.getElementById('shirt-size').value;

  if (kit!=5006 && gender !="") {
    if(gender == 'M'){
      gender = "Hombre";
    }
    else{
      gender = "Mujer";
    }

    $.ajax({
      type: 'GET',
      url: '/playeras',
      dataType: "json",
      data:{ gender: gender, kit: kit,country: country },
      success: function(respuesta){
       /* if(valor_size==""){
          div_image.setAttribute('hidden',true);
        }*/
        $("#shirt-size").find('option').remove();
        $("#shirt-size").append('<option value="" selected>Seleciona una opción</option>');
        $.each(respuesta,function(key, registro) {
         $("#shirt-size").append('<option value='+registro.item+'>'+registro.descripcion+'</option>');
     // $("#shirt-size").append('<p ><input type="text" class="btn btn-info" value='+registro.codigo+' onclick="funciontomarcodigo(this.value)">'+registro.nombre+'</p>');
     
   });

      }
    });
  }
}

/**
* Función que muestra los campos dependiendo el tipo de incorporación
*/
function cl_or_abi(value){
  if(value == "1"){
    document.getElementById('abi').setAttribute('hidden',true);
    document.getElementById('abi').removeAttribute('hidden',true);
    document.getElementById('kits').removeAttribute('hidden',true);
    document.getElementById('kits-cb').setAttribute('hidden',true);
    
    div_texto_club_or_abi =  document.getElementById('cborabitxt');
    document.getElementById('show-playeras').removeAttribute('hidden',true);
    document.getElementById('shirt-sample').removeAttribute('hidden',true);

    div_texto_club_or_abi.innerHTML = "<div class='alert alert-info' role='alert'>Si has seleccionado Asesor de Bienestar, y desarrollarás el Negocio, elige algunas de estas opciones de tipo de persona según sea tu caso!</div>";

  }else if(value == "0"){
    document.getElementById('abi').removeAttribute('hidden',true);
    document.getElementById('abi').setAttribute('hidden',true);
    document.getElementById('kits').setAttribute('hidden',true);
    document.getElementById('kits-cb').removeAttribute('hidden',true);
    div_texto_club_or_abi =  document.getElementById('cborabitxt');
    document.getElementById('show-playeras').setAttribute('hidden',true);
    document.getElementById('shirt-sample').setAttribute('hidden',true);
    

    div_texto_club_or_abi.innerHTML = "<div class='alert alert-info' role='alert'>Si eres Empresa y no desarrollarás  Negocio, debes registrarte como Club de Bienestar ( Recibes factura).</div>";
    
  }
}

function SponsorRadio(){
  document.getElementById("opc1").checked=true;
}

/**
* Función que Valida el sponsor
*/
function Validate_sponsor_exist(){
  var sponsorexist = document.getElementById("code-sponsor-validate").value;
    //alert(sponsorexist);
    if(sponsorexist == ""){
       // alert('Digita un sponsor valido');
       document.getElementById("code-sponsor").value="";
     }
   }

/**
* Función que hace una opacidad en los tipos de sponsor
*/
function Opacity_type_sponsor(value)
{

  var type = value;

  if(type == 1)
  {
    document.getElementById("option-sponsor-one").style.opacity = "1";
        //document.getElementById("option-sponsor-two").style.opacity = "0.6";
        document.getElementById("option-sponsor-three").style.opacity = "0.6";

        document.getElementById("code-sponsor").disabled = false;
        document.getElementById('code-sponsor').setAttribute('required',true);
        document.getElementById("code-sponsor-validate").value = "";

      }
      else if(type == 3)
      {
        document.getElementById("option-sponsor-one").style.opacity = "0.6";
        //document.getElementById("option-sponsor-two").style.opacity = "0.6";
        document.getElementById("option-sponsor-three").style.opacity = "1";

        $("#view-name-sponsor").html("");
        document.getElementById("code-sponsor").value = "";
        document.getElementById("code-sponsor").disabled = true;
        document.getElementById('code-sponsor').removeAttribute('required',true);
        var err = document.getElementById('code-sponsor-error')
        if(err!=null){
          err.remove();
        }
        document.getElementById("code-sponsor-validate").value = "0";

      }
    }

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
  var ciudades = $('#city').val();
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