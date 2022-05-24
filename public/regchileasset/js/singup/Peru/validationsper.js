$( document ).ready(function() {

    $.validator.addMethod("caract_special_address", function(value, element) {
        return /^[a-zA-Z0-9\-áéíóúüñÁÉÍÓÚÜÑ., ]*$/i.test(value);
    }, "Ingrese sólo letras, números o espacios.");

    $.validator.addMethod("caract_special_es", function(value, element) {
        return /^[a-zA-Z0-9\-áéíóúüñÁÉÍÓÚÜÑ, ]*$/i.test(value);
    }, "Ingrese sólo letras, números o espacios.");

    $.validator.addMethod("caract_special_cni_es", function(value, element) {
        return /^[a-zA-Z0-9\-áéíóúüñÁÉÍÓÚÜÑ, ]*$/i.test(value);
    }, "Ingrese sólo letras, números o espacios.");

    $("#formProfile").validate({
        rules: {
            'shirt-size':{
                required: true
            },
            kit: {
                required: true
            },
            fileone: {
                required: true
            },
             'kit-club':{
                required: true  
            },
            bank_name: {
                required: true
            },
            country: {
                required: true
            },
            type_inc: {
                required: true
            },
            type_per: {
                required: true
            },
            name_titular: {
                required: true,
                maxlength: 100,
                caract_special_es: true
            },
            numberdocument: {
                required: true,
               // minlength: 8,
                caract_special_es: true
            },
            name_titular_ape: {
                required: true,
                maxlength: 100,
                caract_special_es: true
            },
            name_titular_jur: {
                required: true,
                maxlength: 100,
                caract_special_es: true
            },
            socio_econ: {
                required: true,
                maxlength: 40,
                caract_special_es: true
            },
            date_born: {
                required: true,
                caract_special_es: true
            },
            email: {
                required: true,
                email: true,
                maxlength: 50
            },
            gender: {
                required: true
            },
            tel: {
                number: true,
                maxlength: 20
            },
            cel: {
                number: true,
                maxlength: 20
            },
            postal_code: {
                number: true,
                maxlength: 7
            },
            region: {
                required: true
            },
            comuna: {
                required: true
            },
            adress: {
                required: true,
                caract_special_address: true,
                maxlength: 100
            },
            cni: {
                required: true,
                maxlength: 10,
                caract_special_cni_es: true
            },
            rut: {
                required: true,
                maxlength: 10,
                minlength: 8,
                caract_special_cni_es: true
            },
            rut_nat: {
                required: true,
                minlength: 8,
                maxlength: 10,
                caract_special_cni_es: true
            },
            name_titular_two: {
                required: true,
                maxlength: 100,
                caract_special_es: true
            },
            type_sponsor: {
                required: true
            },
            terms: {
                required: true
            },
            privacy_policy: {
                required: true
            },
            declare: {
                required: true
            },
            type_acount: {
                required: true
            },
            number_account: {
                required: true,
                //maxlength: 20,
                number: true,
                caract_special_es: true
            },
            name_cotitular: {
                required: true,
                maxlength: 100,
                caract_special_es: true
            },
            cni_cotitular: {
                required: true,
                maxlength: 10,
                caract_special_cni_es: true
            },
            rut_cotitular: {
                required: true,
                maxlength: 10,
                minlength: 8,
                caract_special_cni_es: true
            },
            date_born: {
                required: true
            },
            'code-sponsor': {
                required: true
            },
            'filetrhee': {
                required: true
            },
            'fileone': {
                required: true
            },
            'filetwo': {
                required: true
            }
        },
        messages: {
            'shirt-size':{
                required: "Este campo es obligatorio"
            },
            kit: {
                required: "Este campo es obligatorio"
            },
             'kit-club':{
                required: "Este campo es obligatorio"
  
            },
            bank_name: {
                required: "Este campo es obligatorio"
            },
            country: {
                required: "Este campo es obligatorio"
            },
            type_inc: {
                required: "Este campo es obligatorio"
            },
            type_per: {
                
                required: "Este campo es obligatorio"
            },
            name_titular: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 100 caracteres en este campo",
                caract_special_es: "No se permiten caracteres especiales"
            },
            numberdocument: {
                required: "Este campo es obligatorio",
                //minlength: "Se deben colocar por lo menos 8 caracteres en este campo",
                caract_special_es: "No se permiten caracteres especiales"
            },
            name_titular_ape: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 100 caracteres en este campo",
                caract_special_es: "No se permiten caracteres especiales"
            },
            name_titular_jur: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 100 caracteres en este campo",
                caract_special_es: "No se permiten caracteres especiales"
            },
            socio_econ: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 40 caracteres en este campo",
                caract_special_es: "No se permiten caracteres especiales"
            },
            date_born: {
                required: "Este campo es obligatorio",
                caract_special_es: "No se permiten caracteres especiales"
            },
            email: {
                required: "Este campo es obligatorio",
                email: "Por favor verifica tu email",
                maxlength: "Solo puede colocar hasta 50 caracteres en este campo"
            },
            gender: {
                required: "Este campo es obligatorio"
            },
            tel: {
                required: "Este campo es obligatorio",
                number: "Este campo es numerico",
                maxlength: "Solo puede colocar hasta 20 caracteres en este campo"
            },
            cel: {
                number: "Este campo es numerico",
                maxlength: "Solo puede colocar hasta 20 caracteres en este campo"
            },
            postal_code: {
                number: "Este campo es numerico",
                maxlength: "Solo puede colocar hasta 20 caracteres en este campo"
            },
            region: {
                required: "Este campo es obligatorio"
            },
            comuna: {
                required: "Este campo es obligatorio"
            },
            adress: {
                required: "Este campo es obligatorio",
                caract_special_address: "No se permiten caracteres especiales",
                maxlength: "Solo puede colocar hasta 100 caracteres en este campo"
            },
            cni: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 10 caracteres en este campo",
                caract_special_cni_es: "No se permiten caracteres especiales"
            },
            rut: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 10 caracteres en este campo",
                minlength: "Se deben colocar por lo menos 8 caracteres en este campo",
                caract_special_cni_es: "No se permiten caracteres especiales"
            },
            rut_nat: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 10 caracteres en este campo",
                minlength: "Se deben colocar por lo menos 8 caracteres en este campo",
                caract_special_cni_es: "No se permiten caracteres especiales"
            },
            name_titular_two: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 100 caracteres en este campo",
                caract_special_es: "No se permiten caracteres especiales"
            },
            type_sponsor: {
                required: "Este campo es obligatorio"
            },
            terms: {
                required: "Este campo es obligatorio"
            },
            privacy_policy: {
                required: "Este campo es obligatorio"
            },
            declare: {
                required: "Este campo es obligatorio"
            },
            type_acount: {
                required: "Este campo es obligatorio"
            },
            number_account: {
                required: "Este campo es obligatorio",
              //  maxlength: "Solo puede colocar hasta 20 caracteres en este campo",
                number: "Este campo es numerico",
                caract_special_es: "No se permiten caracteres especiales"
            },
            name_cotitular: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 100 caracteres en este campo",
                caract_special_es: "No se permiten caracteres especiales"
            },
            cni_cotitular: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 10 caracteres en este campo",
                caract_special_cni_es: "No se permiten caracteres especiales"
            },
            rut_cotitular: {
                required: "Este campo es obligatorio",
                maxlength: "Solo puede colocar hasta 10 caracteres en este campo",
                minlength: "Se deben colocar por lo menos 8 caracteres en este campo",
                caract_special_cni_es: "No se permiten caracteres especiales"
            },
            date_born: {
                required: "Este campo es obligatorio"
            },
            'code-sponsor': {
                required: "Este campo es obligatorio"
            },
             'filetrhee': {
                required: "Este campo es obligatorio"
            },
            'fileone': {
                required: "Este campo es obligatorio"
            },
            'filetwo': {
                required: "Este campo es obligatorio"
            }

        }
    });

});