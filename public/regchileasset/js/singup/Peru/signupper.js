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
            $("#typedocument").append('<option value="" selected>Selecciona tipo de documento</option>');
         //   $("#region").append('<option value="" selected>selecciona una opcion</option>');
           // $("#comuna").append('<option value="" selected>selecciona una opcion</option>');
          //  $("#ciudad").append('<option value="" selected>selecciona una opcion</option>');
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

 // getStates();

        //document.getElementById("btnProfile").disabled = true;
      });