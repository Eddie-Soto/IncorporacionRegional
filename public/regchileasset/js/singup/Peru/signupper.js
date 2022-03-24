var URLactual = window.location;


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
            $("#typedocument").append('<option value="" selected>'+selreg+'</option>');
         //   $("#region").append('<option value="" selected>selecciona una opcion</option>');
           // $("#comuna").append('<option value="" selected>selecciona una opcion</option>');
          //  $("#ciudad").append('<option value="" selected>selecciona una opcion</option>');
          $.each(data,function(key, registro) {

            $("#comuna").append('<option value='+registro.id_type.replace(/ /g, "%")+'>'+registro.name+'</option>');
          });
        },
        error: function(data) {

        }
      });
      }


/**
* Función que muestra los campos del cotitular si lo desea
*/
function check_cotitular(){
  if($("input[id='info_cotitular']").is(':checked')){
    document.getElementById('check_coti').setAttribute('hidden',true);
    document.getElementById('check_coti').removeAttribute('hidden',true);
  }
  else if(!$("input[id='info_cotitular']").is(':checked')){
    document.getElementById('check_coti').setAttribute('hidden',true);
    document.getElementById('name_cotitular').value="";
    document.getElementById('rut_cotitular').value="";

  }

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

function type_person(value){
  if(value == "1") //persona natural
  {

     // document.getElementById('socio_econ').setAttribute('disabled',true); 
     /* Cambia el texto de el campo nombre titular si selecciona persona natural */
     document.getElementById('r_soc').removeAttribute('hidden',true);
     document.getElementById('r_soc').setAttribute('hidden',true);
     document.getElementById('jur').removeAttribute('hidden',true);
     document.getElementById('jur1').removeAttribute('hidden',true);

     /* Cambia el texto de el campo cel titular si selecciona persona natural */
     document.getElementById('cel_juridica').removeAttribute('hidden',true);
     document.getElementById('cel_juridica').setAttribute('hidden',true);
     document.getElementById('cel_natural').removeAttribute('hidden',true);

     /* Cambia el texto de el rut  si selecciona persona natural */
     document.getElementById('rut_juridica').removeAttribute('hidden',true);
     document.getElementById('rut_juridica').setAttribute('hidden',true);
     document.getElementById('rut_natural').removeAttribute('hidden',true);

     /* Muestra el campo gender si selecciona persona juridica */
     //document.getElementById('gender').removeAttribute('hidden',true);
    // div_Cambiar_size_input = document.getElementById('mail');
    // div_Cambiar_size_input.classList.remove('col-md-12');
    // div_Cambiar_size_input.className += " col-md-6";

    document.getElementById('name_titular_two_div').removeAttribute('hidden',true);
    document.getElementById('name_titular_two_div').setAttribute('hidden',true);


    /*UPLOAD FILES*/
    document.getElementById('personanatural').removeAttribute('hidden',true);
    document.getElementById('personajuridica').setAttribute('hidden',true);
  }
   else if(value=="2"){ //persona natural con actividades
     // document.getElementById('socio_econ').removeAttribute('disabled',true); 
     
     /* Cambia el texto de el campo nombre titular si selecciona persona natural */
     document.getElementById('r_soc').removeAttribute('hidden',true);
     document.getElementById('r_soc').setAttribute('hidden',true);
     document.getElementById('jur').removeAttribute('hidden',true);
     document.getElementById('jur1').removeAttribute('hidden',true);

     /* Cambia el texto de el campo cel titular si selecciona persona natural */
     document.getElementById('cel_juridica').removeAttribute('hidden',true);
     document.getElementById('cel_juridica').setAttribute('hidden',true);
     document.getElementById('cel_natural').removeAttribute('hidden',true);

     /* Cambia el texto de el rut  si selecciona persona natural */
     document.getElementById('rut_juridica').removeAttribute('hidden',true);
     document.getElementById('rut_juridica').setAttribute('hidden',true);
     document.getElementById('rut_natural').removeAttribute('hidden',true);

     /* Muestra el campo gender si selecciona persona juridica */
     //document.getElementById('gender').removeAttribute('hidden',true);
     //div_Cambiar_size_input = document.getElementById('mail');
     //div_Cambiar_size_input.classList.remove('col-md-12');
     //div_Cambiar_size_input.className += " col-md-6";

     document.getElementById('name_titular_two_div').removeAttribute('hidden',true);
     document.getElementById('name_titular_two_div').setAttribute('hidden',true);

     document.getElementById('personanatural').removeAttribute('hidden',true);
     document.getElementById('personajuridica').setAttribute('hidden',true);
   }
   else if(value == "0") //persona Juridica
   {
    document.getElementById('socio_econ').removeAttribute('disabled',true); 
    document.getElementById('socio_econ').value="";
    /* Cambia el texto de el campo nombre titular si selecciona persona juridica */
    document.getElementById('jur').removeAttribute('hidden',true);
    document.getElementById('jur').setAttribute('hidden',true);
    document.getElementById('jur1').removeAttribute('hidden',true);
    document.getElementById('jur1').setAttribute('hidden',true);
    document.getElementById('r_soc').removeAttribute('hidden',true);

    /* Cambia el texto de el campo cel titular si selecciona persona juridica */
    document.getElementById('cel_natural').removeAttribute('hidden',true);
    document.getElementById('cel_natural').setAttribute('hidden',true);
    document.getElementById('cel_juridica').removeAttribute('hidden',true);

    /* Cambia el texto de el rut  si selecciona persona juridica */
    document.getElementById('rut_natural').removeAttribute('hidden',true);
    document.getElementById('rut_natural').setAttribute('hidden',true);
    document.getElementById('rut_juridica').removeAttribute('hidden',true);

    /* Oculta el campo gender si selecciona persona juridica */
    //document.getElementById('gender').removeAttribute('hidden',true);
   // document.getElementById('gender').setAttribute('hidden',true);

   /*Si oculta el campo genero hace mas grande el campo email */
    //div_Cambiar_size_input = document.getElementById('mail');
    //div_Cambiar_size_input.classList.remove('col-md-12');
    //div_Cambiar_size_input.className += " col-md-12";

    /* Oculta el campo gender si selecciona persona juridica */
    document.getElementById('name_titular_two_div').removeAttribute('hidden',true);


    document.getElementById('personajuridica').removeAttribute('hidden',true);
    document.getElementById('personanatural').setAttribute('hidden',true);
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

/**
* Función que Valida la fecha de nacimiento
*/
function validate_birthdate(value){

  var res = value.split("-");
  if( res[0]=="undefinied" || res[1]=="undefinied" || res[2]=="undefinied" || /_/.test(res[0]) || /_/.test(res[1]) || /_/.test(res[2]) )
  {
    swal({
      title: 'Error',
      text: completeDate,
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
      text: alertHeigtAge,
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
      url: URLactual + '/email',
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
* Función que obtiene los estados 
*/
/*CHILE CHANGUE CIUDAD*/
function getStates(){


  var country = $('#country').val();
  $.ajax({
    type: "GET",
    url: URLactual + '/states',
    dataType: "json",
    data: {
      getstate: country
    },
    success: function(data){
      $("#region").find('option').remove();
      $("#region").append('<option value="" selected>'+selreg+'</option>');
      $("#ciudad").append('<option value="" selected>'+selreg+'</option>');
      $("#comuna").append('<option value="" selected>'+selreg+'</option>');
      $.each(data,function(key, registro) {

        $("#region").append('<option value='+registro.state_name.replace(/ /g, "%")+'>'+registro.state_name+'</option>');
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
  var regi = $('#region').val();

       // var regi = regis.replace("'", "apost");
        //string.replace(searchvalue, newvalue)
        $.ajax({
          type: "GET",
          url: URLactual + '/municipality',
          dataType: "json",
          contentType: "text/json; charset=UTF-8",
          data: {
            reg: regi
          },
          success: function(data){
            $("#ciudad").find('option').remove();
            $("#ciudad").append('<option value="" selected>'+selreg+'</option>');
           // $("#region").append('<option value="" selected>selecciona una opcion</option>');
           // $("#comuna").append('<option value="" selected>selecciona una opcion</option>');
           $("#comuna").append('<option value="" selected>'+selreg+'</option>');
           $.each(data,function(key, registro) {

            $("#ciudad").append('<option value='+registro.province_name.replace(/ /g, "%")+'>'+registro.province_name+'</option>');
          });
         },
         error: function(data) {

         }
       });
      }

/**
* Función que Obtiene las Ciudades de Perú
*/
function getCiudades(){
  var ciudades = $('#ciudad').val();

       // var regi = regis.replace("'", "apost");
        //string.replace(searchvalue, newvalue)
        $.ajax({
          type: "GET",
          url: URLactual + '/ciudad',
          dataType: "json",
          contentType: "text/json; charset=UTF-8",
          data: {
            ciudad: ciudades
          },
          success: function(data){
            $("#comuna").find('option').remove();
            $("#comuna").append('<option value="" selected>'+selreg+'</option>');
         //   $("#region").append('<option value="" selected>selecciona una opcion</option>');
           // $("#comuna").append('<option value="" selected>selecciona una opcion</option>');
          //  $("#ciudad").append('<option value="" selected>selecciona una opcion</option>');
          $.each(data,function(key, registro) {

            $("#comuna").append('<option value='+registro.colony_name.replace(/ /g, "%")+'>'+registro.colony_name+'</option>');
          });
        },
        error: function(data) {

        }
      });
      }
/**
* Función que Valida la extención y el tamaño de los archivos
*/
function ValidateExtension(file){
  var ext = file.split('.').pop();
  if (file != '') {
    if(ext == "pdf" || ext == "png" || ext == "jpg" || ext == "jpeg" || ext == "heic"){
      alert("La extensión es: " + ext);
      if(file[0].files[0].size > 1048576){
        swal({
          title: 'Error',
          text: 'El archivo exede el tamaño permitido',
          type: 'error',
          padding: '2em'
        })
        document.getElementById("fileone").value="";
                /*$('#modal-title').text('¡Precaución!');
                $('#modal-msg').html("Se solicita un archivo no mayor a 1MB. Por favor verifica.");
                $("#modal-gral").modal();    */       
                $file.val('');
              }else{
                //$("#modal-gral").hide();
              }
            }
            else
            {
              //file.val('');
              swal({
                title: 'Error',
                text: 'La extencion de tu archivo no esta permitida',
                type: 'error',
                padding: '2em'
              })
              limpiar();
            }
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
* Función Valida el sponsor sea correcto
*/
function CodeBien(){
  var codigo = document.getElementById("code-sponsor").value;
        //alert(codigo);
        $.ajax({
          type: "GET",
          url: URLactual + '/codegood',
          dataType: "json",
          data: {
            code: codigo
          },
          success: function(data){
            if(data==1){
              document.getElementById('demo').removeAttribute('hidden',true);
              document.getElementById("demo").innerHTML = "Por favor seleccionar una de las opciones";

            }else{
             document.getElementById('demo').removeAttribute('hidden',true);
             document.getElementById('demo').setAttribute('hidden',true);
           }
         }

       });

      }

/**
* Función que busca el sponsor
*/
function Search_sponsor(value){
  var codigo = value;
  $.ajax({
    type: "GET",
    url: URLactual + '/searchsponsor',
    dataType: "json",
    data: {
      code: codigo
    },
    beforeSend: function(){
      $("#view-name-sponsor").find('a').remove();
      $("#view-name-sponsor").find('p').remove();
      $("#view-name-sponsor").append('<p>Cargando...</p>');
    },
    success: function(data){
      $("#view-name-sponsor").find('a').remove();

      if (data == '3') {
       $("#view-name-sponsor").find('p').remove();
       $("#view-name-sponsor").append('<p>El codigo no existe <p>');
       document.getElementById("code-sponsor-validate").value = "";
     }else if(data == '2'){
       $("#view-name-sponsor").find('p').remove();
       $("#view-name-sponsor").append('<p>El codigo no existe <p>');
       document.getElementById("code-sponsor-validate").value = "";
     }else if(data == '1'){
       $("#view-name-sponsor").find('p').remove();
       $("#view-name-sponsor").append('<p>El codigo no existe <p>');
       document.getElementById("code-sponsor-validate").value = "";
     }else{
      $("#view-name-sponsor").find('p').remove();
      document.getElementById("code-sponsor-validate").value = "1";
           // $("#view-name-sponsor").append('<p>Cargando...</p>');
           $.each(data,function(key, registro) {
              //var codesponsor=registro.codigo;
              if (registro.codigo==0) {
                //$("#view-name-sponsor").find('p').remove();
                $("#view-name-sponsor").append('<p>El codigo no existe <p>');
                document.getElementById("code-sponsor-validate").value = "";
                document.getElementById('view-name-sponsor').innerHTML='';
              }else{
             // $("#view-name-sponsor").find('button').remove();
          //  $("#view-name-sponsor").append('<a>'+registro.nombre+"  "+registro.codigo+'</a>');
          

          $("#view-name-sponsor").append('<p ><input type="text" class="btn btn-info" value='+registro.codigo+' onclick="funciontomarcodigo(this.value)">'+registro.nombre+'</p>');
          document.getElementById('demo').removeAttribute('hidden',true);
          document.getElementById("demo").innerHTML = "Por favor seleccionar una de las opciones";
             //document.getElementById('demo').setAttribute('hidden',true);
            //$("#view-name-sponsor").append('<p><button class="btn btn-info" value='+registro.codigo+' onclick="funciontomarcodigo(this.value)">'+registro.nombre+'  '+registro.codigo+'</button></p>');


              //$("#view-name-sponsor").append('<p value='registro.codigo' onclick='funciontomarcodigo(this.value)'>'+registro.nombre+'  '+registro.codigo+'</p>');

               // $("#view-name-sponsor").find('p').remove();
                //$("#view-name-sponsor").append('<p>'+registro.nombre+"  "+registro.codigo+'<p>');
                //$("#view-name-sponsor").append('<p>'+registro.nombre+"   "+registro.codigo+'<p>');
                //$("#view-name-sponsor").append('<p>'+registro.nombre+"  "+registro.codigo+'<p>');
              }
            });
         }
       },
       error: function(data) {

        $("#view-name-sponsor").find('p').remove();
        $("#view-name-sponsor").append('<p>Cargando...</p>');
        $("#view-name-sponsor").find('p').remove();
        $("#view-name-sponsor").append('<p>'+code_no_exist+'</p>');
      }
    });
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
* Función que Valida el radio que esta seleccionado
*/
function SponsorRadio(){
  document.getElementById("opc1").checked=true;
}

$(function() {

 // getStates();
  getDocuments();
        //document.getElementById("btnProfile").disabled = true;
      });