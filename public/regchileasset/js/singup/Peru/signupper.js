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



$( document ).ready(function() {

 // getStates();
  getDocuments();
        //document.getElementById("btnProfile").disabled = true;
      });